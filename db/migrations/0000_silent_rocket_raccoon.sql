CREATE EXTENSION IF NOT EXISTS vector;--> statement-breakpoint
CREATE TYPE "public"."ai_context" AS ENUM('tutor', 'opdracht', 'examen', 'beoordeling');--> statement-breakpoint
CREATE TYPE "public"."assignment_type" AS ENUM('prompt_oefening', 'document_analyse', 'veiligheidscasus', 'workflow', 'upload', 'reflectie');--> statement-breakpoint
CREATE TYPE "public"."knowledge_type" AS ENUM('beleid', 'handleiding', 'voorbeeld');--> statement-breakpoint
CREATE TYPE "public"."lesson_type" AS ENUM('tekst', 'video', 'interactief', 'casus');--> statement-breakpoint
CREATE TYPE "public"."progress_status" AS ENUM('niet_gestart', 'bezig', 'voltooid');--> statement-breakpoint
CREATE TYPE "public"."question_type" AS ENUM('mc', 'meerdere_juist', 'waar_onwaar', 'scenario_open', 'sleep_categorie');--> statement-breakpoint
CREATE TYPE "public"."request_status" AS ENUM('open', 'in_behandeling', 'afgerond', 'afgewezen');--> statement-breakpoint
CREATE TYPE "public"."request_type" AS ENUM('inzage', 'verwijdering', 'export');--> statement-breakpoint
CREATE TYPE "public"."review_mode" AS ENUM('ai', 'handmatig', 'beide');--> statement-breakpoint
CREATE TYPE "public"."role_variant" AS ENUM('ontwikkeling', 'verkoop_marketing', 'financien', 'juridisch', 'hr', 'directie');--> statement-breakpoint
CREATE TYPE "public"."submission_status" AS ENUM('concept', 'ingeleverd', 'beoordeeld', 'herkansing');--> statement-breakpoint
CREATE TYPE "public"."user_role" AS ENUM('medewerker', 'teamlead', 'beoordelaar', 'contentbeheerder', 'admin');--> statement-breakpoint
CREATE TABLE "ai_interactions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid,
	"organization_id" uuid NOT NULL,
	"context" "ai_context" NOT NULL,
	"model" text NOT NULL,
	"tokens_in" integer DEFAULT 0 NOT NULL,
	"tokens_out" integer DEFAULT 0 NOT NULL,
	"kosten_cent" real DEFAULT 0 NOT NULL,
	"duur_ms" integer NOT NULL,
	"veiligheidsvlag" boolean DEFAULT false NOT NULL,
	"flag_reden" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "assignment_artifacts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"assignment_id" uuid NOT NULL,
	"naam" text NOT NULL,
	"mime_type" text NOT NULL,
	"blob_url" text NOT NULL,
	"geanonimiseerd" boolean DEFAULT true NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "assignment_submissions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"assignment_id" uuid NOT NULL,
	"user_id" uuid NOT NULL,
	"inhoud" jsonb DEFAULT '{}'::jsonb NOT NULL,
	"transcript" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"upload_url" text,
	"ai_score" integer,
	"ai_feedback" jsonb,
	"reviewer_id" uuid,
	"reviewer_score" integer,
	"reviewer_opmerking" text,
	"status" "submission_status" DEFAULT 'concept' NOT NULL,
	"poging" integer DEFAULT 1 NOT NULL,
	"ingeleverd_op" timestamp with time zone,
	"beoordeeld_op" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "assignments" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"module_id" uuid NOT NULL,
	"titel" text NOT NULL,
	"opdrachttekst" text NOT NULL,
	"moeilijkheid" integer NOT NULL,
	"type" "assignment_type" NOT NULL,
	"rubric" jsonb NOT NULL,
	"startcontext" jsonb DEFAULT '{}'::jsonb NOT NULL,
	"referentie_uitwerking" text,
	"min_score" integer DEFAULT 70 NOT NULL,
	"beoordeling" "review_mode" NOT NULL,
	"herkansing_assignment_id" uuid,
	"deleted_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "assignments_difficulty_check" CHECK ("assignments"."moeilijkheid" between 1 and 5)
);
--> statement-breakpoint
CREATE TABLE "audit_log" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"actor_id" uuid,
	"organization_id" uuid NOT NULL,
	"actie" text NOT NULL,
	"entiteit" text NOT NULL,
	"entiteit_id" uuid,
	"ip" text,
	"user_agent" text,
	"payload" jsonb DEFAULT '{}'::jsonb NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "certificates" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"track_id" uuid NOT NULL,
	"code" text NOT NULL,
	"uitgegeven_op" timestamp with time zone DEFAULT now() NOT NULL,
	"verloopt_op" timestamp with time zone NOT NULL,
	"pdf_url" text,
	"score" integer NOT NULL,
	"ingetrokken" boolean DEFAULT false NOT NULL,
	"intrek_reden" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "data_requests" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"type" "request_type" NOT NULL,
	"status" "request_status" DEFAULT 'open' NOT NULL,
	"afgehandeld_door" uuid,
	"afgehandeld_op" timestamp with time zone,
	"toelichting" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "exam_attempts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"exam_id" uuid NOT NULL,
	"user_id" uuid NOT NULL,
	"vragen" jsonb NOT NULL,
	"antwoorden" jsonb DEFAULT '{}'::jsonb NOT NULL,
	"score" integer,
	"security_score" integer,
	"geslaagd" boolean,
	"gestart_op" timestamp with time zone DEFAULT now() NOT NULL,
	"ingeleverd_op" timestamp with time zone,
	"poging" integer NOT NULL,
	"override_door" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "exams" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"track_id" uuid NOT NULL,
	"titel" text NOT NULL,
	"is_security_exam" boolean DEFAULT false NOT NULL,
	"aantal_vragen" integer NOT NULL,
	"slaagpercentage" integer NOT NULL,
	"tijdslimiet_min" integer NOT NULL,
	"max_pogingen" integer DEFAULT 3 NOT NULL,
	"cooldown_uren" integer DEFAULT 24 NOT NULL,
	"vraagverdeling" jsonb NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "knowledge_chunks" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"document_id" uuid NOT NULL,
	"inhoud" text NOT NULL,
	"embedding" vector(1536) NOT NULL,
	"metadata" jsonb DEFAULT '{}'::jsonb NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "knowledge_documents" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"titel" text NOT NULL,
	"bron" text NOT NULL,
	"type" "knowledge_type" NOT NULL,
	"url" text,
	"toegestaan_voor" "user_role"[] NOT NULL,
	"retention_until" timestamp with time zone,
	"deleted_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "lessons" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"module_id" uuid NOT NULL,
	"titel" text NOT NULL,
	"type" "lesson_type" NOT NULL,
	"content" jsonb NOT NULL,
	"volgorde" integer NOT NULL,
	"geschatte_minuten" integer NOT NULL,
	"deleted_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "module_versions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"module_id" uuid NOT NULL,
	"versie" integer NOT NULL,
	"snapshot" jsonb NOT NULL,
	"gemaakt_door" uuid NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "modules" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"track_id" uuid NOT NULL,
	"slug" text NOT NULL,
	"titel" text NOT NULL,
	"doelen" text[] NOT NULL,
	"geschatte_minuten" integer NOT NULL,
	"volgorde" integer NOT NULL,
	"is_security_module" boolean DEFAULT false NOT NULL,
	"rolvariant" "role_variant",
	"versie" integer DEFAULT 1 NOT NULL,
	"gepubliceerd_op" timestamp with time zone,
	"deleted_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "organizations" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"clerk_org_id" text NOT NULL,
	"naam" text NOT NULL,
	"instellingen" jsonb DEFAULT '{}'::jsonb NOT NULL,
	"deleted_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "progress" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"lesson_id" uuid,
	"module_id" uuid,
	"status" "progress_status" DEFAULT 'niet_gestart' NOT NULL,
	"voltooid_op" timestamp with time zone,
	"tijd_besteed_sec" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "progress_target_check" CHECK (num_nonnulls("progress"."lesson_id", "progress"."module_id") = 1)
);
--> statement-breakpoint
CREATE TABLE "prompt_library" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid,
	"organization_id" uuid NOT NULL,
	"titel" text NOT NULL,
	"prompt" text NOT NULL,
	"categorie" text NOT NULL,
	"rol" "role_variant",
	"gedeeld" boolean DEFAULT false NOT NULL,
	"stemmen" integer DEFAULT 0 NOT NULL,
	"deleted_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "questions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"module_id" uuid,
	"track_id" uuid,
	"type" "question_type" NOT NULL,
	"vraag" text NOT NULL,
	"opties" jsonb,
	"juist" jsonb NOT NULL,
	"toelichting" text NOT NULL,
	"tags" text[] DEFAULT '{}' NOT NULL,
	"moeilijkheid" integer NOT NULL,
	"is_security" boolean DEFAULT false NOT NULL,
	"keer_getoond" integer DEFAULT 0 NOT NULL,
	"keer_juist" integer DEFAULT 0 NOT NULL,
	"deleted_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "questions_parent_check" CHECK (("questions"."module_id" is not null) or ("questions"."track_id" is not null))
);
--> statement-breakpoint
CREATE TABLE "tracks" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" text NOT NULL,
	"niveau" integer NOT NULL,
	"titel" text NOT NULL,
	"omschrijving" text NOT NULL,
	"volgorde" integer NOT NULL,
	"vereist_track_id" uuid,
	"actief" boolean DEFAULT true NOT NULL,
	"deleted_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "tracks_niveau_check" CHECK ("tracks"."niveau" between 1 and 4)
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"organization_id" uuid NOT NULL,
	"clerk_user_id" text NOT NULL,
	"naam" text NOT NULL,
	"email" text NOT NULL,
	"afdeling" text NOT NULL,
	"rol" "user_role" DEFAULT 'medewerker' NOT NULL,
	"functiegroep" text,
	"manager_id" uuid,
	"deleted_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "ai_interactions" ADD CONSTRAINT "ai_interactions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ai_interactions" ADD CONSTRAINT "ai_interactions_organization_id_organizations_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organizations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "assignment_artifacts" ADD CONSTRAINT "assignment_artifacts_assignment_id_assignments_id_fk" FOREIGN KEY ("assignment_id") REFERENCES "public"."assignments"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "assignment_submissions" ADD CONSTRAINT "assignment_submissions_assignment_id_assignments_id_fk" FOREIGN KEY ("assignment_id") REFERENCES "public"."assignments"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "assignment_submissions" ADD CONSTRAINT "assignment_submissions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "assignment_submissions" ADD CONSTRAINT "assignment_submissions_reviewer_id_users_id_fk" FOREIGN KEY ("reviewer_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "assignments" ADD CONSTRAINT "assignments_module_id_modules_id_fk" FOREIGN KEY ("module_id") REFERENCES "public"."modules"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "assignments" ADD CONSTRAINT "assignments_herkansing_assignment_id_assignments_id_fk" FOREIGN KEY ("herkansing_assignment_id") REFERENCES "public"."assignments"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "audit_log" ADD CONSTRAINT "audit_log_actor_id_users_id_fk" FOREIGN KEY ("actor_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "audit_log" ADD CONSTRAINT "audit_log_organization_id_organizations_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organizations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "certificates" ADD CONSTRAINT "certificates_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "certificates" ADD CONSTRAINT "certificates_track_id_tracks_id_fk" FOREIGN KEY ("track_id") REFERENCES "public"."tracks"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "data_requests" ADD CONSTRAINT "data_requests_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "data_requests" ADD CONSTRAINT "data_requests_afgehandeld_door_users_id_fk" FOREIGN KEY ("afgehandeld_door") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "exam_attempts" ADD CONSTRAINT "exam_attempts_exam_id_exams_id_fk" FOREIGN KEY ("exam_id") REFERENCES "public"."exams"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "exam_attempts" ADD CONSTRAINT "exam_attempts_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "exam_attempts" ADD CONSTRAINT "exam_attempts_override_door_users_id_fk" FOREIGN KEY ("override_door") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "exams" ADD CONSTRAINT "exams_track_id_tracks_id_fk" FOREIGN KEY ("track_id") REFERENCES "public"."tracks"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "knowledge_chunks" ADD CONSTRAINT "knowledge_chunks_document_id_knowledge_documents_id_fk" FOREIGN KEY ("document_id") REFERENCES "public"."knowledge_documents"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lessons" ADD CONSTRAINT "lessons_module_id_modules_id_fk" FOREIGN KEY ("module_id") REFERENCES "public"."modules"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "module_versions" ADD CONSTRAINT "module_versions_module_id_modules_id_fk" FOREIGN KEY ("module_id") REFERENCES "public"."modules"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "module_versions" ADD CONSTRAINT "module_versions_gemaakt_door_users_id_fk" FOREIGN KEY ("gemaakt_door") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "modules" ADD CONSTRAINT "modules_track_id_tracks_id_fk" FOREIGN KEY ("track_id") REFERENCES "public"."tracks"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "progress" ADD CONSTRAINT "progress_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "progress" ADD CONSTRAINT "progress_lesson_id_lessons_id_fk" FOREIGN KEY ("lesson_id") REFERENCES "public"."lessons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "progress" ADD CONSTRAINT "progress_module_id_modules_id_fk" FOREIGN KEY ("module_id") REFERENCES "public"."modules"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "prompt_library" ADD CONSTRAINT "prompt_library_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "prompt_library" ADD CONSTRAINT "prompt_library_organization_id_organizations_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organizations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "questions" ADD CONSTRAINT "questions_module_id_modules_id_fk" FOREIGN KEY ("module_id") REFERENCES "public"."modules"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "questions" ADD CONSTRAINT "questions_track_id_tracks_id_fk" FOREIGN KEY ("track_id") REFERENCES "public"."tracks"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tracks" ADD CONSTRAINT "tracks_vereist_track_id_tracks_id_fk" FOREIGN KEY ("vereist_track_id") REFERENCES "public"."tracks"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_organization_id_organizations_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organizations"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_manager_id_users_id_fk" FOREIGN KEY ("manager_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "ai_interactions_user_idx" ON "ai_interactions" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "ai_interactions_org_idx" ON "ai_interactions" USING btree ("organization_id");--> statement-breakpoint
CREATE INDEX "assignment_artifacts_assignment_idx" ON "assignment_artifacts" USING btree ("assignment_id");--> statement-breakpoint
CREATE INDEX "submissions_assignment_idx" ON "assignment_submissions" USING btree ("assignment_id");--> statement-breakpoint
CREATE INDEX "submissions_user_idx" ON "assignment_submissions" USING btree ("user_id");--> statement-breakpoint
CREATE UNIQUE INDEX "submissions_attempt_uidx" ON "assignment_submissions" USING btree ("assignment_id","user_id","poging");--> statement-breakpoint
CREATE INDEX "assignments_module_idx" ON "assignments" USING btree ("module_id");--> statement-breakpoint
CREATE INDEX "audit_log_org_time_idx" ON "audit_log" USING btree ("organization_id","created_at");--> statement-breakpoint
CREATE INDEX "audit_log_entity_idx" ON "audit_log" USING btree ("entiteit","entiteit_id");--> statement-breakpoint
CREATE UNIQUE INDEX "certificates_code_uidx" ON "certificates" USING btree ("code");--> statement-breakpoint
CREATE INDEX "certificates_user_idx" ON "certificates" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "certificates_track_idx" ON "certificates" USING btree ("track_id");--> statement-breakpoint
CREATE INDEX "certificates_expiry_idx" ON "certificates" USING btree ("verloopt_op");--> statement-breakpoint
CREATE INDEX "data_requests_user_idx" ON "data_requests" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "data_requests_status_idx" ON "data_requests" USING btree ("status");--> statement-breakpoint
CREATE INDEX "exam_attempts_user_exam_idx" ON "exam_attempts" USING btree ("user_id","exam_id");--> statement-breakpoint
CREATE UNIQUE INDEX "exam_attempts_number_uidx" ON "exam_attempts" USING btree ("user_id","exam_id","poging");--> statement-breakpoint
CREATE INDEX "exams_track_idx" ON "exams" USING btree ("track_id");--> statement-breakpoint
CREATE UNIQUE INDEX "exams_track_security_uidx" ON "exams" USING btree ("track_id","is_security_exam");--> statement-breakpoint
CREATE INDEX "knowledge_chunks_document_idx" ON "knowledge_chunks" USING btree ("document_id");--> statement-breakpoint
CREATE INDEX "knowledge_chunks_embedding_hnsw_idx" ON "knowledge_chunks" USING hnsw ("embedding" vector_cosine_ops);--> statement-breakpoint
CREATE INDEX "lessons_module_idx" ON "lessons" USING btree ("module_id");--> statement-breakpoint
CREATE UNIQUE INDEX "module_versions_module_version_uidx" ON "module_versions" USING btree ("module_id","versie");--> statement-breakpoint
CREATE UNIQUE INDEX "modules_track_slug_uidx" ON "modules" USING btree ("track_id","slug");--> statement-breakpoint
CREATE INDEX "modules_track_idx" ON "modules" USING btree ("track_id");--> statement-breakpoint
CREATE UNIQUE INDEX "organizations_clerk_org_id_uidx" ON "organizations" USING btree ("clerk_org_id");--> statement-breakpoint
CREATE INDEX "progress_user_module_idx" ON "progress" USING btree ("user_id","module_id");--> statement-breakpoint
CREATE UNIQUE INDEX "progress_user_lesson_uidx" ON "progress" USING btree ("user_id","lesson_id");--> statement-breakpoint
CREATE INDEX "prompt_library_org_idx" ON "prompt_library" USING btree ("organization_id");--> statement-breakpoint
CREATE INDEX "questions_module_idx" ON "questions" USING btree ("module_id");--> statement-breakpoint
CREATE INDEX "questions_track_idx" ON "questions" USING btree ("track_id");--> statement-breakpoint
CREATE INDEX "questions_security_idx" ON "questions" USING btree ("is_security");--> statement-breakpoint
CREATE UNIQUE INDEX "tracks_slug_uidx" ON "tracks" USING btree ("slug");--> statement-breakpoint
CREATE UNIQUE INDEX "tracks_niveau_uidx" ON "tracks" USING btree ("niveau");--> statement-breakpoint
CREATE UNIQUE INDEX "users_clerk_user_id_uidx" ON "users" USING btree ("clerk_user_id");--> statement-breakpoint
CREATE INDEX "users_organization_idx" ON "users" USING btree ("organization_id");--> statement-breakpoint
CREATE INDEX "users_manager_idx" ON "users" USING btree ("manager_id");
