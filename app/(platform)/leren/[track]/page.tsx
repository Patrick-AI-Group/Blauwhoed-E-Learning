import Link from "next/link";
import { and, asc, eq, inArray, isNull } from "drizzle-orm";
import { ArrowRight, Check, Clock3, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";
import { db } from "@/db";
import { lessons, modules, progress, tracks } from "@/db/schema";
import { getCurrentUser } from "@/lib/auth/current-user";
import { PageHero } from "@/components/layout/page-hero";
import { trackImage } from "@/lib/brand/images";

export const dynamic = "force-dynamic";
export default async function TrackPage({ params }: { params: Promise<{ track: string }> }) {
  const { track: slug } = await params;
  const track = await db.query.tracks.findFirst({ where: and(eq(tracks.slug, slug), eq(tracks.actief, true), isNull(tracks.deletedAt)) });
  if (!track) notFound();
  const items = await db.select().from(modules).where(and(eq(modules.trackId, track.id), isNull(modules.deletedAt))).orderBy(asc(modules.volgorde));
  const totalMinutes = items.reduce((sum, item) => sum + item.geschatteMinuten, 0);
  const [user, moduleLessons] = await Promise.all([
    getCurrentUser(),
    items.length ? db.select({ id: lessons.id, moduleId: lessons.moduleId }).from(lessons).where(and(inArray(lessons.moduleId, items.map((item) => item.id)), isNull(lessons.deletedAt))) : [],
  ]);
  const done = user && moduleLessons.length
    ? await db.select({ lessonId: progress.lessonId }).from(progress).where(and(eq(progress.userId, user.id), eq(progress.status, "voltooid"), inArray(progress.lessonId, moduleLessons.map((lesson) => lesson.id))))
    : [];
  const completedIds = new Set(done.map((row) => row.lessonId));
  const countsByModule = new Map<string, { total: number; completed: number }>();
  for (const lesson of moduleLessons) {
    const counts = countsByModule.get(lesson.moduleId) ?? { total: 0, completed: 0 };
    counts.total += 1;
    if (completedIds.has(lesson.id)) counts.completed += 1;
    countsByModule.set(lesson.moduleId, counts);
  }
  return (
    <main>
      <PageHero eyebrow={`Niveau ${track.niveau}`} title={track.titel} description={track.omschrijving} image={trackImage(track.slug, track.niveau - 1)} compact
        aside={<dl className="grid grid-cols-3 gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 text-white backdrop-blur"><div><dt className="text-xs text-white/60">Modules</dt><dd className="text-2xl font-extrabold">{items.length}</dd></div><div><dt className="text-xs text-white/60">Leertijd</dt><dd className="text-2xl font-extrabold">{totalMinutes >= 60 ? `${Math.floor(totalMinutes / 60)}u ${totalMinutes % 60}m` : `${totalMinutes}m`}</dd></div><div><dt className="text-xs text-white/60">Security</dt><dd className="text-2xl font-extrabold">{items.filter((item) => item.isSecurityModule).length}</dd></div></dl>}>
        <Link href={`/examen/${track.slug}`} className="btn btn-primary">Naar het examen <ArrowRight size={17} /></Link>
        <Link href={`/examen/${track.slug}?security=1`} className="btn btn-ghost-light">Securitydeeltoets</Link>
      </PageHero>
      <div className="container-page py-12">
        <p className="eyebrow">Modules</p>
        <ol className="mt-5 grid gap-4">
          {items.map((module, index) => {
            const counts = countsByModule.get(module.id) ?? { total: 0, completed: 0 };
            const finished = counts.total > 0 && counts.completed === counts.total;
            return (
            <li key={module.id}>
              <Link href={`/leren/${track.slug}/${module.slug}`} className="card card-hover grid gap-5 p-6 md:grid-cols-[64px_1fr_auto] md:items-center">
                <span className={`grid h-14 w-14 place-items-center rounded-2xl text-lg font-extrabold ${finished ? "bg-bh-green text-white" : module.isSecurityModule ? "bg-red-50 text-bh-red" : "bg-bh-blue-50 text-bh-blue-700"}`}>{finished ? <Check size={26} aria-label="Afgerond" /> : module.isSecurityModule ? <ShieldCheck size={24} /> : String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className="text-xl text-bh-blue-900">{module.titel}</h2>
                  <p className="mt-1 text-sm text-bh-grey-600">{module.doelen[0]}</p>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-bh-grey-600"><Clock3 size={13} /> {module.geschatteMinuten} minuten{module.isSecurityModule && <span className="pill ml-2 bg-red-50 text-bh-red">Verplicht 100%</span>}{user && counts.total > 0 && <span className={`pill ml-2 ${finished ? "bg-green-50 text-bh-green" : "bg-bh-sand text-bh-blue-900"}`}>{finished ? "Afgerond" : `${counts.completed}/${counts.total} lessen afgerond`}</span>}</p>
                </div>
                <span className="link-arrow text-sm">Open module <ArrowRight size={16} /></span>
              </Link>
            </li>
            );
          })}
        </ol>
      </div>
    </main>
  );
}
