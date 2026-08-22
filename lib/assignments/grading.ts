import { z } from "zod";
export const gradingSchema = z.object({ totaalscore: z.number().int().min(0).max(100), geslaagd: z.boolean(), criteria: z.array(z.object({ naam: z.string(), score: z.number(), max: z.number().positive(), onderbouwing: z.string() })), sterke_punten: z.array(z.string()), verbeterpunten: z.array(z.string()), vervolgstap: z.string() });
export type Grading = z.infer<typeof gradingSchema>;
export function parseGrading(text: string) { return gradingSchema.parse(JSON.parse(text.replace(/^```json\s*|\s*```$/g, ""))); }
