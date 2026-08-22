import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./db/schema.ts",
  out: "./db/migrations",
  dbCredentials: { url: process.env.DATABASE_URL ?? "postgresql://invalid:invalid@127.0.0.1:5432/invalid" },
  strict: true,
  verbose: true,
});
