import { desc, eq } from "drizzle-orm";
import { Copy, ThumbsUp } from "lucide-react";
import { db } from "@/db";
import { promptLibrary } from "@/db/schema";
import { getCurrentUser } from "@/lib/auth/current-user";
import { PageHero } from "@/components/layout/page-hero";
import { brandImages } from "@/lib/brand/images";

export const dynamic = "force-dynamic";
export default async function PromptLibraryPage() {
  const user = await getCurrentUser();
  if (!user) return null;
  const prompts = await db.select().from(promptLibrary).where(eq(promptLibrary.organizationId, user.organizationId)).orderBy(desc(promptLibrary.stemmen));
  return (
    <main>
      <PageHero eyebrow="Samen slimmer werken" title="Promptbibliotheek" description="Beproefde prompts van collega's, gesorteerd op waardering. Kopieer, pas aan en deel je verbetering." image={brandImages.multiplier} compact />
      <div className="container-page grid gap-5 py-12 md:grid-cols-2 xl:grid-cols-3">
        {prompts.map((item) => (
          <article key={item.id} className="card card-hover flex flex-col p-6">
            <div className="flex items-center justify-between"><span className="pill bg-bh-blue-50 capitalize text-bh-blue-700">{item.categorie}</span><span className="inline-flex items-center gap-1 text-xs font-bold text-bh-grey-600"><ThumbsUp size={13} /> {item.stemmen}</span></div>
            <h2 className="mt-5 text-lg text-bh-blue-900">{item.titel}</h2>
            <pre className="mt-4 flex-1 whitespace-pre-wrap rounded-xl bg-bh-sand p-4 font-sans text-sm leading-relaxed">{item.prompt}</pre>
            <span className="link-arrow mt-4 text-sm"><Copy size={15} /> Kopieer en pas aan</span>
          </article>
        ))}
      </div>
    </main>
  );
}
