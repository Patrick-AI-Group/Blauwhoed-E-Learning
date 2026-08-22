import "server-only";
import QRCode from "qrcode";
import { put } from "@vercel/blob";
import { Resend } from "resend";
import { and, eq, inArray, isNull } from "drizzle-orm";
import { addYears } from "date-fns";
import { db } from "@/db";
import { assignments, assignmentSubmissions, certificates, examAttempts, exams, lessons, modules, progress, tracks, users } from "@/db/schema";
import { createCertificateCode } from "./codes";
import { renderCertificatePdf } from "./pdf";

export async function issueCertificateIfEligible(userId: string, trackId: string) {
  const existing = await db.query.certificates.findFirst({ where: and(eq(certificates.userId, userId), eq(certificates.trackId, trackId), eq(certificates.ingetrokken, false)) }); if (existing) return existing;
  const [user, track] = await Promise.all([db.query.users.findFirst({ where: eq(users.id, userId) }), db.query.tracks.findFirst({ where: eq(tracks.id, trackId) })]); if (!user || !track) return null;
  const trackModules = await db.select().from(modules).where(and(eq(modules.trackId, trackId), isNull(modules.deletedAt))); const moduleIds = trackModules.map((item) => item.id); if (!moduleIds.length) return null;
  const trackLessons = await db.select().from(lessons).where(inArray(lessons.moduleId, moduleIds)); const completed = await db.select().from(progress).where(and(eq(progress.userId, userId), eq(progress.status, "voltooid"), inArray(progress.lessonId, trackLessons.map((item) => item.id))));
  const trackAssignments = await db.select().from(assignments).where(inArray(assignments.moduleId, moduleIds)); const passedSubmissions = trackAssignments.length ? await db.select().from(assignmentSubmissions).where(and(eq(assignmentSubmissions.userId, userId), eq(assignmentSubmissions.status, "beoordeeld"), inArray(assignmentSubmissions.assignmentId, trackAssignments.map((item) => item.id)))) : [];
  const trackExams = await db.select().from(exams).where(eq(exams.trackId, trackId)); const passedAttempts = await db.select().from(examAttempts).where(and(eq(examAttempts.userId, userId), eq(examAttempts.geslaagd, true), inArray(examAttempts.examId, trackExams.map((item) => item.id))));
  const regularPassed = trackExams.filter((item) => !item.isSecurityExam).some((exam) => passedAttempts.some((attempt) => attempt.examId === exam.id)); const securityPassed = trackExams.filter((item) => item.isSecurityExam).some((exam) => passedAttempts.some((attempt) => attempt.examId === exam.id && attempt.securityScore === 100)); const assignmentIds = new Set(passedSubmissions.filter((item) => (item.reviewerScore ?? item.aiScore ?? 0) >= (trackAssignments.find((assignment) => assignment.id === item.assignmentId)?.minScore ?? 70)).map((item) => item.assignmentId));
  if (completed.length < trackLessons.length || assignmentIds.size < trackAssignments.length || !regularPassed || !securityPassed) return null;
  const code = createCertificateCode(); const issuedAt = new Date(); const expiresAt = addYears(issuedAt, 1); const baseUrl = process.env.NEXT_PUBLIC_APP_URL; if (!baseUrl || !process.env.BLOB_READ_WRITE_TOKEN || !process.env.RESEND_API_KEY) throw new Error("Certificaatdiensten zijn niet volledig geconfigureerd"); const verificationUrl = `${baseUrl}/verificatie/${code}`; const qrDataUrl = await QRCode.toDataURL(verificationUrl, { margin: 1, width: 256 }); const pdf = await renderCertificatePdf({ name: user.naam, level: track.niveau, title: track.titel, competences: trackModules.flatMap((item) => item.doelen), issuedAt, expiresAt, code, verificationUrl, qrDataUrl }); const blob = await put(`certificaten/${code}.pdf`, pdf, { access: "public", contentType: "application/pdf", addRandomSuffix: false }); const bestScore = Math.max(...passedAttempts.map((item) => item.score ?? 0)); const [certificate] = await db.insert(certificates).values({ userId, trackId, code, uitgegevenOp: issuedAt, verlooptOp: expiresAt, pdfUrl: blob.url, score: bestScore }).returning();
  const resend = new Resend(process.env.RESEND_API_KEY); await resend.emails.send({ from: process.env.RESEND_FROM_EMAIL ?? "academy@blauwhoed.nl", to: user.email, subject: `Je certificaat voor Niveau ${track.niveau}`, html: `<p>Beste ${user.naam},</p><p>Je certificaat voor <strong>Niveau ${track.niveau} · ${track.titel}</strong> staat klaar.</p><p><a href="${blob.url}">Download je certificaat</a></p><p>Verificatiecode: ${code}. Geldig tot ${expiresAt.toLocaleDateString("nl-NL")}.</p>` }); return certificate;
}
