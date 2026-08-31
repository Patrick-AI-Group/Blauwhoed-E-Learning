import OpenAI from "openai";
import { db } from "./index";
import { knowledgeChunks, knowledgeDocuments } from "./schema";
import { kennisbank } from "./content/kennisbank";

/** Herbouwt de kennisbank (documenten + chunks + embeddings) vanuit db/content/kennisbank.ts. */
async function ingest() {
  if (!process.env.OPENAI_API_KEY) throw new Error("OPENAI_API_KEY ontbreekt");
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const allRoles = ["medewerker", "teamlead", "beoordelaar", "contentbeheerder", "admin"] as const;
  await db.delete(knowledgeDocuments);
  const chunkRows: Array<{ documentId: string; inhoud: string; metadata: { sectie: number; versie: number } }> = [];
  for (const doc of kennisbank) {
    const [inserted] = await db.insert(knowledgeDocuments).values({ titel: doc.titel, bron: doc.bron, type: doc.type, toegestaanVoor: [...allRoles] }).returning();
    doc.chunks.forEach((inhoud, index) => chunkRows.push({ documentId: inserted.id, inhoud, metadata: { sectie: index + 1, versie: 1 } }));
  }
  const response = await openai.embeddings.create({ model: "text-embedding-3-small", input: chunkRows.map((row) => row.inhoud), dimensions: 1536 });
  await db.insert(knowledgeChunks).values(chunkRows.map((row, index) => ({ ...row, embedding: response.data[index].embedding })));
  console.log(`✓ ${kennisbank.length} documenten, ${chunkRows.length} chunks opnieuw geëmbed`);
}
ingest().then(() => process.exit(0)).catch((error: unknown) => { console.error(error); process.exit(1); });
