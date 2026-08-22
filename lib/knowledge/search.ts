import "server-only";
import OpenAI from "openai";
import { cosineDistance, desc, eq, sql } from "drizzle-orm";
import { db } from "@/db";
import { knowledgeChunks, knowledgeDocuments } from "@/db/schema";
export async function searchKnowledge(query: string, limit = 5) { if (!process.env.OPENAI_API_KEY) throw new Error("OpenAI embeddings zijn niet geconfigureerd"); const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY }); const embedding = await openai.embeddings.create({ model: "text-embedding-3-small", input: query, dimensions: 1536 }); const vector = embedding.data[0].embedding; const distance = cosineDistance(knowledgeChunks.embedding, vector); const similarity = sql<number>`1 - (${distance})`; return db.select({ id: knowledgeChunks.id, content: knowledgeChunks.inhoud, metadata: knowledgeChunks.metadata, title: knowledgeDocuments.titel, source: knowledgeDocuments.bron, url: knowledgeDocuments.url, similarity }).from(knowledgeChunks).innerJoin(knowledgeDocuments, eq(knowledgeChunks.documentId, knowledgeDocuments.id)).orderBy(desc(similarity)).limit(limit); }
