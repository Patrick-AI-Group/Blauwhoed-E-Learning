import Link from "next/link";
import { and, asc, eq, isNull } from "drizzle-orm";
import { ArrowRight, CheckCircle2, Clock3, Target } from "lucide-react";
import { notFound } from "next/navigation";
import { db } from "@/db";
import { lessons, modules, tracks } from "@/db/schema";
import { PageHero } from "@/components/layout/page-hero";
import { trackImage } from "@/lib/brand/images";

export const dynamic = "force-dynamic";
export default async function ModulePage({ params }: { params: Promise<{ track: string; module: string }> }) {
  const route = await params;
  const [track] = await db.select().from(tracks).where(and(eq(tracks.slug, route.track), eq(tracks.actief, true))).limit(1);
  if (!track) notFound();
  const [module] = await db.select().from(modules).where(and(eq(modules.trackId, track.id), eq(modules.slug, route.module), isNull(modules.deletedAt))).limit(1);
  if (!module) notFound();
  const items = await db.select().from(lessons).where(and(eq(lessons.moduleId, module.id), isNull(lessons.deletedAt))).orderBy(asc(lessons.volgorde));
  return (
    <main>
      <PageHero eyebrow={<Link href={`/leren/${track.slug}`} className="hover:underline">Niveau {track.niveau} · {track.titel}</Link>} title={module.titel} description={`Module ${module.volgorde} · ${items.length} lessen · ${module.geschatteMinuten} minuten`} image={trackImage(track.slug, track.niveau - 1)} compact />
      <div className="container-page grid gap-8 py-12 lg:grid-cols-[1fr_340px]">
        <div>
          <p className="eyebrow">Lessen</p>
          <ol className="mt-5 grid gap-4">
            {items.map((lesson, index) => (
              <li key={lesson.id}>
                <Link href={`/leren/${route.track}/${route.module}/${lesson.id}`} className="card card-hover grid gap-4 p-6 md:grid-cols-[56px_1fr_auto] md:items-center">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-bh-blue-50 font-extrabold text-bh-blue-700">{String(index + 1).padStart(2, "0")}</span>
                  <div><h2 className="text-lg text-bh-blue-900">{lesson.titel}</h2><p className="mt-1 inline-flex items-center gap-3 text-sm text-bh-grey-600"><span className="pill bg-bh-sand capitalize text-bh-blue-900">{lesson.type}</span><span className="inline-flex items-center gap-1"><Clock3 size={13} /> {lesson.geschatteMinuten} min</span></p></div>
                  <ArrowRight size={18} className="hidden text-bh-blue-600 md:block" />
                </Link>
              </li>
            ))}
          </ol>
        </div>
        <aside className="card h-fit p-7 lg:sticky lg:top-24">
          <p className="eyebrow"><Target size={14} className="mr-1 inline" />Na deze module kun je</p>
          <ul className="mt-5 space-y-3 text-sm">{module.doelen.map((goal) => <li key={goal} className="flex gap-3"><CheckCircle2 size={18} className="shrink-0 text-bh-green" /><span className="first-letter:uppercase">{goal}</span></li>)}</ul>
          <div className="mt-7 border-t pt-6"><p className="text-sm text-bh-grey-600">Geschatte tijd</p><p className="mt-1 text-2xl font-extrabold text-bh-blue-900">{module.geschatteMinuten} minuten</p></div>
        </aside>
      </div>
    </main>
  );
}
