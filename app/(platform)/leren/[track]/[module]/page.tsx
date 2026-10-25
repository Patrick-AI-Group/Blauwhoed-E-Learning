import Link from "next/link";
import { and, asc, eq, inArray, isNull } from "drizzle-orm";
import { ArrowRight, Check, CheckCircle2, Clock3, RotateCcw, Target } from "lucide-react";
import { notFound } from "next/navigation";
import { db } from "@/db";
import { lessons, modules, progress, tracks } from "@/db/schema";
import { getCurrentUser } from "@/lib/auth/current-user";
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
  const user = await getCurrentUser();
  const done = user && items.length
    ? await db.select({ lessonId: progress.lessonId }).from(progress).where(and(eq(progress.userId, user.id), eq(progress.status, "voltooid"), inArray(progress.lessonId, items.map((lesson) => lesson.id))))
    : [];
  const completedIds = new Set(done.map((row) => row.lessonId));
  return (
    <main>
      <PageHero eyebrow={<Link href={`/leren/${track.slug}`} className="hover:underline">Niveau {track.niveau} · {track.titel}</Link>} title={module.titel} description={`Module ${module.volgorde} · ${items.length} lessen · ${module.geschatteMinuten} minuten`} image={trackImage(track.slug, track.niveau - 1)} compact />
      <div className="container-page grid gap-8 py-12 lg:grid-cols-[1fr_340px]">
        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="eyebrow">Lessen</p>
            {user && <p className="text-sm font-bold text-bh-grey-600">{completedIds.size} van {items.length} afgerond</p>}
          </div>
          <ol className="mt-5 grid gap-4">
            {items.map((lesson, index) => {
              const completed = completedIds.has(lesson.id);
              return (
                <li key={lesson.id}>
                  <Link href={`/leren/${route.track}/${route.module}/${lesson.id}`} className="card card-hover grid gap-4 p-6 md:grid-cols-[56px_1fr_auto] md:items-center">
                    <span className={`grid h-12 w-12 place-items-center rounded-xl font-extrabold ${completed ? "bg-bh-green text-white" : "bg-bh-blue-50 text-bh-blue-700"}`}>{completed ? <Check size={22} aria-label="Afgerond" /> : String(index + 1).padStart(2, "0")}</span>
                    <div><h2 className="text-lg text-bh-blue-900">{lesson.titel}</h2><p className="mt-1 inline-flex flex-wrap items-center gap-3 text-sm text-bh-grey-600"><span className="pill bg-bh-sand capitalize text-bh-blue-900">{lesson.type}</span><span className="inline-flex items-center gap-1"><Clock3 size={13} /> {lesson.geschatteMinuten} min</span>{completed && <span className="pill bg-green-50 text-bh-green">Afgerond</span>}</p></div>
                    {completed
                      ? <span className="link-arrow text-sm">Opnieuw doen <RotateCcw size={16} /></span>
                      : <ArrowRight size={18} className="hidden text-bh-blue-600 md:block" />}
                  </Link>
                </li>
              );
            })}
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
