import Link from "next/link";
import { eq } from "drizzle-orm";
import { ArrowRight } from "lucide-react";
import { db } from "@/db";
import { assignments } from "@/db/schema";
import { PageHero } from "@/components/layout/page-hero";
import { brandImages } from "@/lib/brand/images";

export const dynamic = "force-dynamic";
export default async function AssignmentsPage() {
  const items = await db.select().from(assignments).where(eq(assignments.moeilijkheid, 1)).limit(12);
  return (
    <main>
      <PageHero eyebrow="Praktijk" title="Opdrachten" description="Je proces telt mee. Experimenteer in de AI-werkomgeving en lever je beste resultaat in." image={brandImages.toepassen} compact />
      <div className="container-page grid gap-5 py-12 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <article key={item.id} className="card card-hover flex flex-col p-7">
            <div className="flex items-center justify-between"><span className="pill bg-bh-blue-50 capitalize text-bh-blue-700">{item.type.replaceAll("_", " ")}</span><span className="text-xs font-bold text-bh-grey-600" aria-label={`Moeilijkheid ${item.moeilijkheid} van 5`}>{"●".repeat(item.moeilijkheid)}<span className="text-bh-grey-200">{"●".repeat(5 - item.moeilijkheid)}</span></span></div>
            <h2 className="mt-6 text-xl text-bh-blue-900">{item.titel}</h2>
            <p className="mt-3 line-clamp-3 text-sm text-bh-grey-600">{item.opdrachttekst}</p>
            <Link href={`/opdrachten/${item.id}`} className="link-arrow mt-auto pt-6 text-sm">Open werkomgeving <ArrowRight size={16} /></Link>
          </article>
        ))}
      </div>
    </main>
  );
}
