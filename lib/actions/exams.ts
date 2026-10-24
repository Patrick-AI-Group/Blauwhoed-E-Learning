"use server";

import Anthropic from "@anthropic-ai/sdk";
import { and, desc, eq, isNull } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { db } from "@/db";
import { examAttempts, exams, questions, tracks } from "@/db/schema";
import { getCurrentUser } from "@/lib/auth/current-user";
import { scoreExam } from "@/lib/exams/scoring";

export type FrozenQuestion = { id: string; type: "mc" | "meerdere_juist" | "waar_onwaar" | "scenario_open" | "sleep_categorie"; vraag: string; opties: unknown; juist: unknown; toelichting: string; tags: string[]; isSecurity: boolean };

const startSchema = z.object({ examId: z.string().uuid() });
const saveSchema = z.object({ attemptId: z.string().uuid(), questionId: z.string().uuid(), answer: z.unknown() });
const submitSchema = z.object({ attemptId: z.string().uuid() });

function shuffled<T>(values: T[]) { return [...values].sort(() => Math.random() - 0.5); }
function equalAnswer(actual: unknown, expected: unknown) { const normalize = (value: unknown) => Array.isArray(value) ? [...value].map(String).sort() : String(value); return JSON.stringify(normalize(actual)) === JSON.stringify(normalize(expected)); }

export async function startExam(input: z.infer<typeof startSchema>) {
  const { examId } = startSchema.parse(input); const user = await getCurrentUser(); if (!user) throw new Error("Niet ingelogd");
  const exam = await db.query.exams.findFirst({ where: eq(exams.id, examId) }); if (!exam) throw new Error("Examen niet gevonden");
  const track = await db.query.tracks.findFirst({ where: eq(tracks.id, exam.trackId) }); if (!track?.actief) throw new Error("Dit niveau is momenteel niet beschikbaar");
  const latest = await db.query.examAttempts.findFirst({ where: and(eq(examAttempts.examId, examId), eq(examAttempts.userId, user.id)), orderBy: desc(examAttempts.poging) });
  if (latest && !latest.ingeleverdOp) return { attemptId: latest.id };
  if (latest && latest.ingeleverdOp && !exam.isSecurityExam) { if (latest.poging >= exam.maxPogingen && !latest.overrideDoor) throw new Error("Je maximale aantal pogingen is bereikt. Vraag je teamlead om een herkansing."); const cooldownUntil = latest.ingeleverdOp.getTime() + exam.cooldownUren * 3_600_000; if (cooldownUntil > Date.now() && !latest.overrideDoor) throw new Error(`Je volgende poging is beschikbaar op ${new Date(cooldownUntil).toLocaleString("nl-NL")}.`); }
  const pool = await db.select().from(questions).where(and(eq(questions.trackId, exam.trackId), isNull(questions.deletedAt)));
  const distribution = exam.vraagverdeling as { security?: number };
  const securityCount = exam.isSecurityExam ? exam.aantalVragen : Math.round(exam.aantalVragen * ((distribution.security ?? 40) / 100));
  const picked = [...shuffled(pool.filter((item) => item.isSecurity)).slice(0, securityCount), ...shuffled(pool.filter((item) => !item.isSecurity)).slice(0, exam.aantalVragen - securityCount)];
  if (picked.length < exam.aantalVragen) throw new Error("De vragenbank bevat onvoldoende vragen voor dit examen.");
  const frozen: FrozenQuestion[] = shuffled(picked).map((item) => ({ id: item.id, type: item.type, vraag: item.vraag, opties: item.opties, juist: item.juist, toelichting: item.toelichting, tags: item.tags, isSecurity: item.isSecurity }));
  const [attempt] = await db.insert(examAttempts).values({ examId, userId: user.id, vragen: frozen, poging: (latest?.poging ?? 0) + 1 }).returning();
  revalidatePath("/examen"); return { attemptId: attempt.id };
}

export async function saveExamAnswer(input: z.infer<typeof saveSchema>) {
  const data = saveSchema.parse(input); const user = await getCurrentUser(); if (!user) throw new Error("Niet ingelogd");
  const attempt = await db.query.examAttempts.findFirst({ where: and(eq(examAttempts.id, data.attemptId), eq(examAttempts.userId, user.id)) }); if (!attempt || attempt.ingeleverdOp) throw new Error("Deze poging kan niet meer worden gewijzigd.");
  const frozen = attempt.vragen as FrozenQuestion[]; if (!frozen.some((item) => item.id === data.questionId)) throw new Error("Vraag hoort niet bij deze poging.");
  await db.update(examAttempts).set({ antwoorden: { ...(attempt.antwoorden as Record<string, unknown>), [data.questionId]: data.answer }, updatedAt: new Date() }).where(eq(examAttempts.id, attempt.id));
  return { savedAt: new Date().toISOString() };
}

async function gradeOpen(question: FrozenQuestion, answer: unknown) {
  if (!process.env.ANTHROPIC_API_KEY) return false;
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  const result = await client.messages.create({ model: "claude-sonnet-4-5", max_tokens: 100, messages: [{ role: "user", content: `Beoordeel of het antwoord inhoudelijk voldoende is. Antwoord alleen true of false.\nVraag: ${question.vraag}\nModelantwoord: ${JSON.stringify(question.juist)}\nAntwoord cursist: ${String(answer)}` }] });
  return result.content.some((block) => block.type === "text" && block.text.trim().toLowerCase() === "true");
}

export async function submitExam(input: z.infer<typeof submitSchema>) {
  const { attemptId } = submitSchema.parse(input); const user = await getCurrentUser(); if (!user) throw new Error("Niet ingelogd");
  const rows = await db.select({ attempt: examAttempts, exam: exams }).from(examAttempts).innerJoin(exams, eq(examAttempts.examId, exams.id)).where(and(eq(examAttempts.id, attemptId), eq(examAttempts.userId, user.id))).limit(1); const row = rows[0]; if (!row) throw new Error("Poging niet gevonden"); if (row.attempt.ingeleverdOp) return { score: row.attempt.score ?? 0, securityScore: row.attempt.securityScore ?? 0, passed: row.attempt.geslaagd ?? false };
  const frozen = row.attempt.vragen as FrozenQuestion[]; const answers = row.attempt.antwoorden as Record<string, unknown>;
  const scored = await Promise.all(frozen.map(async (question) => ({ security: question.isSecurity, correct: question.type === "scenario_open" ? await gradeOpen(question, answers[question.id]) : equalAnswer(answers[question.id], question.juist) })));
  const result = scoreExam(scored, row.exam.slaagpercentage); await db.update(examAttempts).set({ score: result.score, securityScore: result.securityScore, geslaagd: result.passed, ingeleverdOp: new Date(), updatedAt: new Date() }).where(eq(examAttempts.id, attemptId));
  if (result.passed) { const { issueCertificateIfEligible } = await import("@/lib/certificates/issue"); await issueCertificateIfEligible(user.id, row.exam.trackId); }
  revalidatePath("/examen"); return result;
}
