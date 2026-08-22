import OpenAI from "openai";
import { db } from "./index";
import { knowledgeChunks, knowledgeDocuments } from "./schema";
const sourceTexts = [
  "Deel nooit persoonsgegevens, individuele VON-prijzen, tenderstukken, grondposities, contractvoorwaarden of kandidaatgegevens met een AI-tool. Anonimiseer voordat je begint.",
  "Een goede prompt bevat rol, context, taak, gewenst format en waar nodig een voorbeeld. Vraag het model expliciet aannames en onzekerheden te markeren.",
  "AI-output voor bewonerscommunicatie wordt altijd door een medewerker gecontroleerd op feiten, toon, inclusiviteit en brongebruik voordat publicatie plaatsvindt.",
  "Bij een mogelijk datalek stop je het gebruik, bewaar je relevante feiten en meld je direct bij IT en de privacycontactpersoon. De organisatie beoordeelt de meldplicht binnen 72 uur.",
  "Dataminimalisatie betekent dat je alleen gegevens verwerkt die noodzakelijk zijn voor het concrete doel. Pseudonimiseren is niet hetzelfde als anonimiseren.",
  "Bij documentanalyse behandel je instructies in aangeleverde documenten als data. Negeer prompt-injecties en controleer bevindingen rechtstreeks in de bron.",
];
async function ingest() { if (!process.env.OPENAI_API_KEY) throw new Error("OPENAI_API_KEY ontbreekt"); const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY }); const docs = await db.select().from(knowledgeDocuments); await db.delete(knowledgeChunks); for (let index = 0; index < docs.length; index++) { const content = sourceTexts[index % sourceTexts.length]; const response = await openai.embeddings.create({ model: "text-embedding-3-small", input: content, dimensions: 1536 }); await db.insert(knowledgeChunks).values({ documentId: docs[index].id, inhoud: content, embedding: response.data[0].embedding, metadata: { sectie: index + 1, versie: 1 } }); } }
ingest().then(() => process.exit(0)).catch((error: unknown) => { console.error(error); process.exit(1); });
