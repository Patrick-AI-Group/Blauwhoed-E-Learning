"use server";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import OpenAI from "openai";
import Papa from "papaparse";
import { clerkClient } from "@clerk/nextjs/server";
import { db } from "@/db";
import {
  assignments,
  assignmentSubmissions,
  aiInteractions,
  dataRequests,
  examAttempts,
  knowledgeChunks,
  knowledgeDocuments,
  lessons,
  modules,
  moduleVersions,
  organizations,
  questions,
  users,
} from "@/db/schema";
import { authorize, roles } from "@/lib/auth/authorize";
import { getCurrentUser } from "@/lib/auth/current-user";
import { writeAudit } from "@/lib/audit/write";

async function manager(
  permission: "contentbeheerder" | "beoordelaar" | "admin" = "admin",
) {
  await authorize([permission, "admin"]);
  const user = await getCurrentUser();
  if (!user) throw new Error("Gebruiker ontbreekt in de Academy-database");
  return user;
}
const optionalUuid = z.preprocess(
  (value) => (value === "" ? undefined : value),
  z.string().uuid().optional(),
);
const moduleSchema = z.object({
  id: optionalUuid,
  trackId: z.string().uuid(),
  slug: z
    .string()
    .min(2)
    .max(100)
    .regex(/^[a-z0-9-]+$/),
  titel: z.string().min(3).max(200),
  doelen: z.string().min(3),
  minuten: z.coerce.number().int().min(5).max(1000),
  volgorde: z.coerce.number().int().min(1),
  security: z.coerce.boolean().default(false),
});
export async function saveModule(form: FormData) {
  const user = await manager("contentbeheerder");
  const data = moduleSchema.parse(Object.fromEntries(form));
  const previous = data.id
    ? await db.query.modules.findFirst({ where: eq(modules.id, data.id) })
    : null;
  const nextVersion = (previous?.versie ?? 0) + 1;
  const values = {
    trackId: data.trackId,
    slug: data.slug,
    titel: data.titel,
    doelen: data.doelen
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean),
    geschatteMinuten: data.minuten,
    volgorde: data.volgorde,
    isSecurityModule: data.security,
    versie: nextVersion,
    updatedAt: new Date(),
  };
  const [record] = data.id
    ? await db
        .update(modules)
        .set(values)
        .where(eq(modules.id, data.id))
        .returning()
    : await db.insert(modules).values(values).returning();
  await db.insert(moduleVersions).values({
    moduleId: record.id,
    versie: nextVersion,
    snapshot: record,
    gemaaktDoor: user.id,
  });
  await writeAudit({
    actorId: user.id,
    organizationId: user.organizationId,
    action: data.id ? "module.bijwerken" : "module.aanmaken",
    entity: "module",
    entityId: record.id,
    payload: { versie: nextVersion },
  });
  revalidatePath("/beheer/content");
}
const lessonSchema = z.object({
  id: optionalUuid,
  moduleId: z.string().uuid(),
  titel: z.string().min(3).max(200),
  type: z.enum(["tekst", "video", "interactief", "casus"]),
  content: z.string().min(2),
  volgorde: z.coerce.number().int().min(1),
  minuten: z.coerce.number().int().min(1).max(600),
});
export async function saveLesson(form: FormData) {
  const user = await manager("contentbeheerder");
  const data = lessonSchema.parse(Object.fromEntries(form));
  const parsedContent: unknown = JSON.parse(data.content);
  const values = {
    moduleId: data.moduleId,
    titel: data.titel,
    type: data.type,
    content: parsedContent,
    volgorde: data.volgorde,
    geschatteMinuten: data.minuten,
    updatedAt: new Date(),
  };
  const [record] = data.id
    ? await db
        .update(lessons)
        .set(values)
        .where(eq(lessons.id, data.id))
        .returning()
    : await db.insert(lessons).values(values).returning();
  await writeAudit({
    actorId: user.id,
    organizationId: user.organizationId,
    action: data.id ? "les.bijwerken" : "les.aanmaken",
    entity: "lesson",
    entityId: record.id,
  });
  revalidatePath("/beheer/content");
}
const questionSchema = z.object({
  id: optionalUuid,
  trackId: z.string().uuid(),
  type: z.enum(["mc", "meerdere_juist", "waar_onwaar", "scenario_open", "sleep_categorie"]),
  vraag: z.string().min(10),
  opties: z.string().min(2),
  juist: z.string().min(1),
  toelichting: z.string().min(5),
  moeilijkheid: z.coerce.number().int().min(1).max(5),
  security: z.coerce.boolean().default(false),
});
export async function saveQuestion(form: FormData) {
  const user = await manager("contentbeheerder");
  const data = questionSchema.parse(Object.fromEntries(form));
  const values = {
    trackId: data.trackId,
    type: data.type,
    vraag: data.vraag,
    opties: data.opties.split("\n").filter(Boolean),
    juist: data.juist.split(",").map(Number),
    toelichting: data.toelichting,
    tags: data.security ? ["security"] : ["toepassing"],
    moeilijkheid: data.moeilijkheid,
    isSecurity: data.security,
    updatedAt: new Date(),
  };
  const [record] = data.id
    ? await db
        .update(questions)
        .set(values)
        .where(eq(questions.id, data.id))
        .returning()
    : await db.insert(questions).values(values).returning();
  await writeAudit({
    actorId: user.id,
    organizationId: user.organizationId,
    action: data.id ? "vraag.bijwerken" : "vraag.aanmaken",
    entity: "question",
    entityId: record.id,
  });
  revalidatePath("/beheer/vragenbank");
}
const assignmentSchema = z.object({
  id: optionalUuid,
  moduleId: z.string().uuid(),
  titel: z.string().min(3),
  opdrachttekst: z.string().min(20),
  type: z.enum([
    "prompt_oefening",
    "document_analyse",
    "veiligheidscasus",
    "workflow",
    "upload",
    "reflectie",
  ]),
  beoordeling: z.enum(["ai", "handmatig", "beide"]),
  moeilijkheid: z.coerce.number().int().min(1).max(5),
  minScore: z.coerce.number().int().min(1).max(100),
  rubric: z.string().min(10),
});
export async function saveAssignment(form: FormData) {
  const user = await manager("contentbeheerder");
  const data = assignmentSchema.parse(Object.fromEntries(form));
  const values = {
    moduleId: data.moduleId,
    titel: data.titel,
    opdrachttekst: data.opdrachttekst,
    type: data.type,
    beoordeling: data.beoordeling,
    moeilijkheid: data.moeilijkheid,
    minScore: data.minScore,
    rubric: z.object({ criteria: z.array(z.object({ naam: z.string().min(2), gewicht: z.number().min(0).max(100), max: z.number().positive(), niveaus: z.record(z.string(), z.string()) })).min(1), referentie: z.string().optional() }).parse(JSON.parse(data.rubric)),
    updatedAt: new Date(),
  };
  const [record] = data.id
    ? await db
        .update(assignments)
        .set(values)
        .where(eq(assignments.id, data.id))
        .returning()
    : await db.insert(assignments).values(values).returning();
  await writeAudit({
    actorId: user.id,
    organizationId: user.organizationId,
    action: data.id ? "opdracht.bijwerken" : "opdracht.aanmaken",
    entity: "assignment",
    entityId: record.id,
  });
  revalidatePath("/beheer/opdrachten");
}
const deleteSchema = z.object({
  entity: z.enum(["module", "lesson", "question", "assignment", "knowledge_document"]),
  id: z.string().uuid(),
});
export async function softDelete(form: FormData) {
  const user = await manager("contentbeheerder");
  const data = deleteSchema.parse(Object.fromEntries(form));
  const table = {
    module: modules,
    lesson: lessons,
    question: questions,
    assignment: assignments,
    knowledge_document: knowledgeDocuments,
  }[data.entity];
  await db
    .update(table)
    .set({ deletedAt: new Date(), updatedAt: new Date() })
    .where(eq(table.id, data.id));
  await writeAudit({
    actorId: user.id,
    organizationId: user.organizationId,
    action: `${data.entity}.verwijderen`,
    entity: data.entity,
    entityId: data.id,
  });
  revalidatePath("/beheer");
}
const roleSchema = z.object({ userId: z.string().uuid(), role: z.enum(roles) });
export async function updateUserRole(form: FormData) {
  const actor = await manager();
  const data = roleSchema.parse(Object.fromEntries(form));
  await db
    .update(users)
    .set({ rol: data.role, updatedAt: new Date() })
    .where(eq(users.id, data.userId));
  await writeAudit({
    actorId: actor.id,
    organizationId: actor.organizationId,
    action: "gebruiker.rolwijzigen",
    entity: "user",
    entityId: data.userId,
    payload: { role: data.role },
  });
  revalidatePath("/beheer/gebruikers");
}
const reviewSchema = z.object({
  submissionId: z.string().uuid(),
  score: z.coerce.number().int().min(0).max(100),
  comment: z.string().min(5),
});
export async function reviewSubmission(form: FormData) {
  const reviewer = await manager("beoordelaar");
  const data = reviewSchema.parse(Object.fromEntries(form));
  await db
    .update(assignmentSubmissions)
    .set({
      reviewerId: reviewer.id,
      reviewerScore: data.score,
      reviewerOpmerking: data.comment,
      status: data.score >= 70 ? "beoordeeld" : "herkansing",
      beoordeeldOp: new Date(),
      updatedAt: new Date(),
    })
    .where(eq(assignmentSubmissions.id, data.submissionId));
  await writeAudit({
    actorId: reviewer.id,
    organizationId: reviewer.organizationId,
    action: "inzending.overrule",
    entity: "assignment_submission",
    entityId: data.submissionId,
    payload: { score: data.score },
  });
  revalidatePath("/beheer/beoordelingen");
}

const knowledgeSchema = z.object({
  id: optionalUuid,
  title: z.string().min(3).max(200),
  source: z.string().min(2).max(200),
  type: z.enum(["beleid", "handleiding", "voorbeeld"]),
  url: z.preprocess(
    (value) => (value === "" ? null : value),
    z.string().url().nullable(),
  ),
  content: z.string().min(40).max(100_000),
});
export async function saveKnowledgeDocument(form: FormData) {
  const actor = await manager("contentbeheerder");
  const data = knowledgeSchema.parse(Object.fromEntries(form));
  if (!process.env.OPENAI_API_KEY)
    throw new Error("OpenAI embeddings zijn niet geconfigureerd");
  const [document] = data.id
    ? await db
        .update(knowledgeDocuments)
        .set({
          titel: data.title,
          bron: data.source,
          type: data.type,
          url: data.url,
          updatedAt: new Date(),
        })
        .where(eq(knowledgeDocuments.id, data.id))
        .returning()
    : await db
        .insert(knowledgeDocuments)
        .values({
          titel: data.title,
          bron: data.source,
          type: data.type,
          url: data.url,
          toegestaanVoor: [
            "medewerker",
            "teamlead",
            "beoordelaar",
            "contentbeheerder",
            "admin",
          ],
        })
        .returning();
  const chunks = data.content.match(/[\s\S]{1,1800}(?:\s|$)/g) ?? [
    data.content,
  ];
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const vectors = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: chunks,
    dimensions: 1536,
  });
  await db
    .delete(knowledgeChunks)
    .where(eq(knowledgeChunks.documentId, document.id));
  await db
    .insert(knowledgeChunks)
    .values(
      chunks.map((content, index) => ({
        documentId: document.id,
        inhoud: content.trim(),
        embedding: vectors.data[index].embedding,
        metadata: {
          chunk: index + 1,
          version: document.updatedAt.toISOString(),
        },
      })),
    );
  await writeAudit({
    actorId: actor.id,
    organizationId: actor.organizationId,
    action: data.id ? "kennisdocument.bijwerken" : "kennisdocument.aanmaken",
    entity: "knowledge_document",
    entityId: document.id,
  });
  revalidatePath("/beheer/kennisbank");
  revalidatePath("/kennisbank");
}

const bulkUserSchema = z
  .array(
    z.object({
      email: z.string().email(),
      naam: z.string().min(2),
      afdeling: z.string().min(2),
      rol: z.enum(roles).default("medewerker"),
    }),
  )
  .min(1)
  .max(500);
export async function inviteUsersCsv(form: FormData) {
  const actor = await manager();
  const file = form.get("file");
  if (!(file instanceof File) || file.size > 2_000_000)
    throw new Error("Upload een CSV van maximaal 2 MB");
  const parsed = Papa.parse<Record<string, string>>(await file.text(), {
    header: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.trim().toLowerCase(),
  });
  if (parsed.errors.length)
    throw new Error(`CSV-fout op regel ${parsed.errors[0].row ?? 0}`);
  const rows = bulkUserSchema.parse(
    parsed.data.map((item) => ({
      email: item.email,
      naam: item.naam,
      afdeling: item.afdeling,
      rol: item.rol || "medewerker",
    })),
  );
  const client = await clerkClient();
  const organization = await db.query.organizations.findFirst({
    where: eq(organizations.id, actor.organizationId),
  });
  if (!organization) throw new Error("Organisatie ontbreekt");
  await client.organizations.createOrganizationInvitationBulk(
    organization.clerkOrgId,
    rows.map((row) => ({
      emailAddress: row.email,
      role: "org:member",
      inviterUserId: actor.clerkUserId,
      publicMetadata: {
        academyRole: row.rol,
        naam: row.naam,
        afdeling: row.afdeling,
      },
    })),
  );
  await writeAudit({
    actorId: actor.id,
    organizationId: actor.organizationId,
    action: "gebruikers.bulkuitnodigen",
    entity: "user",
    payload: { count: rows.length },
  });
  revalidatePath("/beheer/gebruikers");
}

const removeUserSchema = z.object({
  userId: z.string().uuid(),
  confirm: z.literal("VERWIJDER"),
});
export async function removeUserData(form: FormData) {
  const actor = await manager();
  const data = removeUserSchema.parse(Object.fromEntries(form));
  const target = await db.query.users.findFirst({
    where: eq(users.id, data.userId),
  });
  if (!target || target.organizationId !== actor.organizationId)
    throw new Error("Gebruiker niet gevonden");
  await db
    .delete(assignmentSubmissions)
    .where(eq(assignmentSubmissions.userId, target.id));
  await db.delete(examAttempts).where(eq(examAttempts.userId, target.id));
  await db.delete(aiInteractions).where(eq(aiInteractions.userId, target.id));
  await db
    .update(users)
    .set({
      naam: "Verwijderde gebruiker",
      email: `${target.id}@deleted.invalid`,
      afdeling: "Verwijderd",
      clerkUserId: `deleted_${target.id}`,
      deletedAt: new Date(),
      updatedAt: new Date(),
    })
    .where(eq(users.id, target.id));
  await db
    .update(dataRequests)
    .set({
      status: "afgerond",
      afgehandeldDoor: actor.id,
      afgehandeldOp: new Date(),
      updatedAt: new Date(),
    })
    .where(eq(dataRequests.userId, target.id));
  await writeAudit({
    actorId: actor.id,
    organizationId: actor.organizationId,
    action: "gebruiker.anonimiseren",
    entity: "user",
    entityId: target.id,
  });
  revalidatePath("/beheer/gebruikers");
  revalidatePath("/beheer/compliance");
}
