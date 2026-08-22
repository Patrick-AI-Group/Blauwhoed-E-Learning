import { desc } from "drizzle-orm";
import { db } from "@/db";
import { knowledgeDocuments } from "@/db/schema";
import { KnowledgeSearch } from "@/components/ui/knowledge-search";
export const dynamic = "force-dynamic";
export default async function KnowledgePage() { const docs = await db.select().from(knowledgeDocuments).orderBy(desc(knowledgeDocuments.updatedAt)).limit(30); return <main className="container-page py-12"><p className="text-sm text-bh-blue-600">Betrouwbare bronnen</p><h1 className="mt-3 text-5xl font-normal text-bh-blue-900">Kennisbank</h1><p className="mt-5 max-w-2xl text-lg text-bh-grey-600">Zoek op betekenis. Antwoorden blijven herleidbaar naar goedgekeurd beleid, handleidingen en voorbeelden.</p><KnowledgeSearch/><div className="mt-12 grid gap-4 md:grid-cols-2">{docs.map((doc) => <article key={doc.id} className="rounded-lg border p-6"><p className="text-sm text-bh-blue-600">{doc.type}</p><h2 className="mt-4 text-xl text-bh-blue-900">{doc.titel}</h2><p className="mt-2 text-sm text-bh-grey-600">Bron: {doc.bron}</p></article>)}</div></main>; }
