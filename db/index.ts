import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

// De client wordt tijdens `next build` geïnitialiseerd; echte queries vereisen
// altijd de productievariabele en falen gesloten als die niet is ingesteld.
const connectionString = process.env.DATABASE_URL ?? "postgresql://invalid:invalid@127.0.0.1:5432/invalid";

export const db = drizzle(neon(connectionString), { schema });
