import { desc } from "drizzle-orm";
import { notFound } from "next/navigation";
import { BookMarked, FileText, ScrollText } from "lucide-react";
import { db } from "@/db";
import { knowledgeDocuments } from "@/db/schema";
import { KnowledgeSearch } from "@/components/ui/knowledge-search";
import { PageHero } from "@/components/layout/page-hero";
import { brandImages } from "@/lib/brand/images";

export const dynamic = "force-dynamic";
// Kennisbank is voorlopig uitgeschakeld; zet op true om de pagina weer te tonen.
const KENNISBANK_ENABLED = false;
const icons = { beleid: ScrollText, handleiding: BookMarked, voorbeeld: FileText } as const;

export default async function KnowledgePage() {
  if (!KENNISBANK_ENABLED) notFound();
  const docs = await db.select().from(knowledgeDocuments).orderBy(desc(knowledgeDocuments.updatedAt)).limit(30);
  return (
    <main>
      <PageHero eyebrow="Betrouwbare bronnen" title="Kennisbank" description="Zoek op betekenis. Antwoorden blijven herleidbaar naar goedgekeurd beleid, handleidingen en voorbeelden." image={brandImages.workflows} compact />
      <div className="container-page py-12">
        <KnowledgeSearch />
        <p className="eyebrow mt-14">Documenten</p>
        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {docs.map((doc) => { const Icon = icons[doc.type as keyof typeof icons] ?? FileText; return (
            <article key={doc.id} className="card card-hover p-6">
              <div className="flex items-center justify-between"><span className="grid h-11 w-11 place-items-center rounded-xl bg-bh-blue-50 text-bh-blue-600"><Icon size={20} /></span><span className="pill bg-bh-sand capitalize text-bh-blue-900">{doc.type}</span></div>
              <h2 className="mt-5 text-lg text-bh-blue-900">{doc.titel}</h2>
              <p className="mt-2 text-sm text-bh-grey-600">Bron: {doc.bron}</p>
            </article>
          ); })}
        </div>
      </div>
    </main>
  );
}
