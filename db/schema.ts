import { sql } from "drizzle-orm";
import {
  AnyPgColumn,
  boolean,
  check,
  index,
  integer,
  jsonb,
  pgEnum,
  pgTable,
  real,
  text,
  timestamp,
  uniqueIndex,
  uuid,
  vector,
} from "drizzle-orm/pg-core";

export const userRole = pgEnum("user_role", ["medewerker", "teamlead", "beoordelaar", "contentbeheerder", "admin"]);
export const roleVariant = pgEnum("role_variant", ["ontwikkeling", "verkoop_marketing", "financien", "juridisch", "hr", "directie"]);
export const lessonType = pgEnum("lesson_type", ["tekst", "video", "interactief", "casus"]);
export const assignmentType = pgEnum("assignment_type", ["prompt_oefening", "document_analyse", "veiligheidscasus", "workflow", "upload", "reflectie"]);
export const reviewMode = pgEnum("review_mode", ["ai", "handmatig", "beide"]);
export const submissionStatus = pgEnum("submission_status", ["concept", "ingeleverd", "beoordeeld", "herkansing"]);
export const questionType = pgEnum("question_type", ["mc", "meerdere_juist", "waar_onwaar", "scenario_open", "sleep_categorie"]);
export const progressStatus = pgEnum("progress_status", ["niet_gestart", "bezig", "voltooid"]);
export const knowledgeType = pgEnum("knowledge_type", ["beleid", "handleiding", "voorbeeld"]);
export const aiContext = pgEnum("ai_context", ["tutor", "opdracht", "examen", "beoordeling"]);
export const requestType = pgEnum("request_type", ["inzage", "verwijdering", "export"]);
export const requestStatus = pgEnum("request_status", ["open", "in_behandeling", "afgerond", "afgewezen"]);

const timestamps = {
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
};

export const organizations = pgTable("organizations", {
  id: uuid("id").defaultRandom().primaryKey(),
  clerkOrgId: text("clerk_org_id").notNull(),
  naam: text("naam").notNull(),
  instellingen: jsonb("instellingen").$type<{ maandlimietCent?: number; toegestaneModellen?: string[] }>().default({}).notNull(),
  deletedAt: timestamp("deleted_at", { withTimezone: true }),
  ...timestamps,
}, (table) => [uniqueIndex("organizations_clerk_org_id_uidx").on(table.clerkOrgId)]);

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  organizationId: uuid("organization_id").references(() => organizations.id).notNull(),
  clerkUserId: text("clerk_user_id").notNull(),
  naam: text("naam").notNull(),
  email: text("email").notNull(),
  afdeling: text("afdeling").notNull(),
  rol: userRole("rol").default("medewerker").notNull(),
  functiegroep: text("functiegroep"),
  managerId: uuid("manager_id").references((): AnyPgColumn => users.id),
  deletedAt: timestamp("deleted_at", { withTimezone: true }),
  ...timestamps,
}, (table) => [
  uniqueIndex("users_clerk_user_id_uidx").on(table.clerkUserId),
  index("users_organization_idx").on(table.organizationId),
  index("users_manager_idx").on(table.managerId),
]);

export const tracks = pgTable("tracks", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: text("slug").notNull(),
  niveau: integer("niveau").notNull(),
  titel: text("titel").notNull(),
  omschrijving: text("omschrijving").notNull(),
  volgorde: integer("volgorde").notNull(),
  vereistTrackId: uuid("vereist_track_id").references((): AnyPgColumn => tracks.id),
  actief: boolean("actief").default(true).notNull(),
  deletedAt: timestamp("deleted_at", { withTimezone: true }),
  ...timestamps,
}, (table) => [
  uniqueIndex("tracks_slug_uidx").on(table.slug),
  uniqueIndex("tracks_niveau_uidx").on(table.niveau),
  check("tracks_niveau_check", sql`${table.niveau} between 1 and 4`),
]);

export const modules = pgTable("modules", {
  id: uuid("id").defaultRandom().primaryKey(),
  trackId: uuid("track_id").references(() => tracks.id, { onDelete: "cascade" }).notNull(),
  slug: text("slug").notNull(),
  titel: text("titel").notNull(),
  doelen: text("doelen").array().notNull(),
  geschatteMinuten: integer("geschatte_minuten").notNull(),
  volgorde: integer("volgorde").notNull(),
  isSecurityModule: boolean("is_security_module").default(false).notNull(),
  rolvariant: roleVariant("rolvariant"),
  versie: integer("versie").default(1).notNull(),
  gepubliceerdOp: timestamp("gepubliceerd_op", { withTimezone: true }),
  deletedAt: timestamp("deleted_at", { withTimezone: true }),
  ...timestamps,
}, (table) => [
  uniqueIndex("modules_track_slug_uidx").on(table.trackId, table.slug),
  index("modules_track_idx").on(table.trackId),
]);

export const moduleVersions = pgTable("module_versions", {
  id: uuid("id").defaultRandom().primaryKey(),
  moduleId: uuid("module_id").references(() => modules.id, { onDelete: "cascade" }).notNull(),
  versie: integer("versie").notNull(),
  snapshot: jsonb("snapshot").notNull(),
  gemaaktDoor: uuid("gemaakt_door").references(() => users.id).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
}, (table) => [uniqueIndex("module_versions_module_version_uidx").on(table.moduleId, table.versie)]);

export const lessons = pgTable("lessons", {
  id: uuid("id").defaultRandom().primaryKey(),
  moduleId: uuid("module_id").references(() => modules.id, { onDelete: "cascade" }).notNull(),
  titel: text("titel").notNull(),
  type: lessonType("type").notNull(),
  content: jsonb("content").notNull(),
  volgorde: integer("volgorde").notNull(),
  geschatteMinuten: integer("geschatte_minuten").notNull(),
  deletedAt: timestamp("deleted_at", { withTimezone: true }),
  ...timestamps,
}, (table) => [index("lessons_module_idx").on(table.moduleId)]);

export type Rubric = { criteria: Array<{ naam: string; gewicht: number; max: number; niveaus: Record<string, string> }>; referentie?: string };

export const assignments = pgTable("assignments", {
  id: uuid("id").defaultRandom().primaryKey(),
  moduleId: uuid("module_id").references(() => modules.id, { onDelete: "cascade" }).notNull(),
  titel: text("titel").notNull(),
  opdrachttekst: text("opdrachttekst").notNull(),
  moeilijkheid: integer("moeilijkheid").notNull(),
  type: assignmentType("type").notNull(),
  rubric: jsonb("rubric").$type<Rubric>().notNull(),
  startcontext: jsonb("startcontext").default({}).notNull(),
  referentieUitwerking: text("referentie_uitwerking"),
  minScore: integer("min_score").default(70).notNull(),
  beoordeling: reviewMode("beoordeling").notNull(),
  herkansingAssignmentId: uuid("herkansing_assignment_id").references((): AnyPgColumn => assignments.id),
  deletedAt: timestamp("deleted_at", { withTimezone: true }),
  ...timestamps,
}, (table) => [
  index("assignments_module_idx").on(table.moduleId),
  check("assignments_difficulty_check", sql`${table.moeilijkheid} between 1 and 5`),
]);

export const assignmentSubmissions = pgTable("assignment_submissions", {
  id: uuid("id").defaultRandom().primaryKey(),
  assignmentId: uuid("assignment_id").references(() => assignments.id, { onDelete: "cascade" }).notNull(),
  userId: uuid("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  inhoud: jsonb("inhoud").default({}).notNull(),
  transcript: jsonb("transcript").default([]).notNull(),
  uploadUrl: text("upload_url"),
  aiScore: integer("ai_score"),
  aiFeedback: jsonb("ai_feedback"),
  reviewerId: uuid("reviewer_id").references(() => users.id),
  reviewerScore: integer("reviewer_score"),
  reviewerOpmerking: text("reviewer_opmerking"),
  status: submissionStatus("status").default("concept").notNull(),
  poging: integer("poging").default(1).notNull(),
  ingeleverdOp: timestamp("ingeleverd_op", { withTimezone: true }),
  beoordeeldOp: timestamp("beoordeeld_op", { withTimezone: true }),
  ...timestamps,
}, (table) => [
  index("submissions_assignment_idx").on(table.assignmentId),
  index("submissions_user_idx").on(table.userId),
  uniqueIndex("submissions_attempt_uidx").on(table.assignmentId, table.userId, table.poging),
]);

export const questions = pgTable("questions", {
  id: uuid("id").defaultRandom().primaryKey(),
  moduleId: uuid("module_id").references(() => modules.id, { onDelete: "cascade" }),
  trackId: uuid("track_id").references(() => tracks.id, { onDelete: "cascade" }),
  type: questionType("type").notNull(),
  vraag: text("vraag").notNull(),
  opties: jsonb("opties"),
  juist: jsonb("juist").notNull(),
  toelichting: text("toelichting").notNull(),
  tags: text("tags").array().default([]).notNull(),
  moeilijkheid: integer("moeilijkheid").notNull(),
  isSecurity: boolean("is_security").default(false).notNull(),
  keerGetoond: integer("keer_getoond").default(0).notNull(),
  keerJuist: integer("keer_juist").default(0).notNull(),
  deletedAt: timestamp("deleted_at", { withTimezone: true }),
  ...timestamps,
}, (table) => [
  index("questions_module_idx").on(table.moduleId),
  index("questions_track_idx").on(table.trackId),
  index("questions_security_idx").on(table.isSecurity),
  check("questions_parent_check", sql`(${table.moduleId} is not null) or (${table.trackId} is not null)`),
]);

export const exams = pgTable("exams", {
  id: uuid("id").defaultRandom().primaryKey(),
  trackId: uuid("track_id").references(() => tracks.id, { onDelete: "cascade" }).notNull(),
  titel: text("titel").notNull(),
  isSecurityExam: boolean("is_security_exam").default(false).notNull(),
  aantalVragen: integer("aantal_vragen").notNull(),
  slaagpercentage: integer("slaagpercentage").notNull(),
  tijdslimietMin: integer("tijdslimiet_min").notNull(),
  maxPogingen: integer("max_pogingen").default(3).notNull(),
  cooldownUren: integer("cooldown_uren").default(24).notNull(),
  vraagverdeling: jsonb("vraagverdeling").notNull(),
  ...timestamps,
}, (table) => [
  index("exams_track_idx").on(table.trackId),
  uniqueIndex("exams_track_security_uidx").on(table.trackId, table.isSecurityExam),
]);

export const examAttempts = pgTable("exam_attempts", {
  id: uuid("id").defaultRandom().primaryKey(),
  examId: uuid("exam_id").references(() => exams.id, { onDelete: "cascade" }).notNull(),
  userId: uuid("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  vragen: jsonb("vragen").notNull(),
  antwoorden: jsonb("antwoorden").default({}).notNull(),
  score: integer("score"),
  securityScore: integer("security_score"),
  geslaagd: boolean("geslaagd"),
  gestartOp: timestamp("gestart_op", { withTimezone: true }).defaultNow().notNull(),
  ingeleverdOp: timestamp("ingeleverd_op", { withTimezone: true }),
  poging: integer("poging").notNull(),
  overrideDoor: uuid("override_door").references(() => users.id),
  ...timestamps,
}, (table) => [
  index("exam_attempts_user_exam_idx").on(table.userId, table.examId),
  uniqueIndex("exam_attempts_number_uidx").on(table.userId, table.examId, table.poging),
]);

export const certificates = pgTable("certificates", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  trackId: uuid("track_id").references(() => tracks.id, { onDelete: "restrict" }).notNull(),
  code: text("code").notNull(),
  uitgegevenOp: timestamp("uitgegeven_op", { withTimezone: true }).defaultNow().notNull(),
  verlooptOp: timestamp("verloopt_op", { withTimezone: true }).notNull(),
  pdfUrl: text("pdf_url"),
  score: integer("score").notNull(),
  ingetrokken: boolean("ingetrokken").default(false).notNull(),
  intrekReden: text("intrek_reden"),
  ...timestamps,
}, (table) => [
  uniqueIndex("certificates_code_uidx").on(table.code),
  index("certificates_user_idx").on(table.userId),
  index("certificates_track_idx").on(table.trackId),
  index("certificates_expiry_idx").on(table.verlooptOp),
]);

export const progress = pgTable("progress", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  lessonId: uuid("lesson_id").references(() => lessons.id, { onDelete: "cascade" }),
  moduleId: uuid("module_id").references(() => modules.id, { onDelete: "cascade" }),
  status: progressStatus("status").default("niet_gestart").notNull(),
  voltooidOp: timestamp("voltooid_op", { withTimezone: true }),
  tijdBesteedSec: integer("tijd_besteed_sec").default(0).notNull(),
  ...timestamps,
}, (table) => [
  index("progress_user_module_idx").on(table.userId, table.moduleId),
  uniqueIndex("progress_user_lesson_uidx").on(table.userId, table.lessonId),
  check("progress_target_check", sql`num_nonnulls(${table.lessonId}, ${table.moduleId}) = 1`),
]);

export const knowledgeDocuments = pgTable("knowledge_documents", {
  id: uuid("id").defaultRandom().primaryKey(),
  titel: text("titel").notNull(),
  bron: text("bron").notNull(),
  type: knowledgeType("type").notNull(),
  url: text("url"),
  toegestaanVoor: userRole("toegestaan_voor").array().notNull(),
  retentionUntil: timestamp("retention_until", { withTimezone: true }),
  deletedAt: timestamp("deleted_at", { withTimezone: true }),
  ...timestamps,
});

export const knowledgeChunks = pgTable("knowledge_chunks", {
  id: uuid("id").defaultRandom().primaryKey(),
  documentId: uuid("document_id").references(() => knowledgeDocuments.id, { onDelete: "cascade" }).notNull(),
  inhoud: text("inhoud").notNull(),
  embedding: vector("embedding", { dimensions: 1536 }).notNull(),
  metadata: jsonb("metadata").default({}).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
}, (table) => [
  index("knowledge_chunks_document_idx").on(table.documentId),
  index("knowledge_chunks_embedding_hnsw_idx").using("hnsw", table.embedding.op("vector_cosine_ops")),
]);

export const promptLibrary = pgTable("prompt_library", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").references(() => users.id, { onDelete: "set null" }),
  organizationId: uuid("organization_id").references(() => organizations.id, { onDelete: "cascade" }).notNull(),
  titel: text("titel").notNull(),
  prompt: text("prompt").notNull(),
  categorie: text("categorie").notNull(),
  rol: roleVariant("rol"),
  gedeeld: boolean("gedeeld").default(false).notNull(),
  stemmen: integer("stemmen").default(0).notNull(),
  deletedAt: timestamp("deleted_at", { withTimezone: true }),
  ...timestamps,
}, (table) => [index("prompt_library_org_idx").on(table.organizationId)]);

export const aiInteractions = pgTable("ai_interactions", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").references(() => users.id, { onDelete: "set null" }),
  organizationId: uuid("organization_id").references(() => organizations.id, { onDelete: "cascade" }).notNull(),
  context: aiContext("context").notNull(),
  model: text("model").notNull(),
  tokensIn: integer("tokens_in").default(0).notNull(),
  tokensOut: integer("tokens_out").default(0).notNull(),
  kostenCent: real("kosten_cent").default(0).notNull(),
  duurMs: integer("duur_ms").notNull(),
  veiligheidsvlag: boolean("veiligheidsvlag").default(false).notNull(),
  flagReden: text("flag_reden"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
}, (table) => [index("ai_interactions_user_idx").on(table.userId), index("ai_interactions_org_idx").on(table.organizationId)]);

export const auditLog = pgTable("audit_log", {
  id: uuid("id").defaultRandom().primaryKey(),
  actorId: uuid("actor_id").references(() => users.id, { onDelete: "set null" }),
  organizationId: uuid("organization_id").references(() => organizations.id, { onDelete: "cascade" }).notNull(),
  actie: text("actie").notNull(),
  entiteit: text("entiteit").notNull(),
  entiteitId: uuid("entiteit_id"),
  ip: text("ip"),
  userAgent: text("user_agent"),
  payload: jsonb("payload").default({}).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
}, (table) => [index("audit_log_org_time_idx").on(table.organizationId, table.createdAt), index("audit_log_entity_idx").on(table.entiteit, table.entiteitId)]);

export const dataRequests = pgTable("data_requests", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  type: requestType("type").notNull(),
  status: requestStatus("status").default("open").notNull(),
  afgehandeldDoor: uuid("afgehandeld_door").references(() => users.id),
  afgehandeldOp: timestamp("afgehandeld_op", { withTimezone: true }),
  toelichting: text("toelichting"),
  ...timestamps,
}, (table) => [index("data_requests_user_idx").on(table.userId), index("data_requests_status_idx").on(table.status)]);

export const assignmentArtifacts = pgTable("assignment_artifacts", {
  id: uuid("id").defaultRandom().primaryKey(),
  assignmentId: uuid("assignment_id").references(() => assignments.id, { onDelete: "cascade" }).notNull(),
  naam: text("naam").notNull(),
  mimeType: text("mime_type").notNull(),
  blobUrl: text("blob_url").notNull(),
  geanonimiseerd: boolean("geanonimiseerd").default(true).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
}, (table) => [index("assignment_artifacts_assignment_idx").on(table.assignmentId)]);
