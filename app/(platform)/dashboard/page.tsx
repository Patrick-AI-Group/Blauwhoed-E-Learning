import Image from "next/image";
import Link from "next/link";
import { and, asc, eq, inArray } from "drizzle-orm";
import { ArrowRight, Award, BookOpen, Clock3, Lightbulb, ShieldCheck } from "lucide-react";
import { db } from "@/db";
import { assignments, lessons, modules, progress, tracks } from "@/db/schema";
import { getCurrentUser } from "@/lib/auth/current-user";
import { brandImages, trackImage } from "@/lib/brand/images";

export const dynamic = "force-dynamic";
export const metadata = { title: "Dashboard" };

function greeting(date: Date) { const hour = date.getHours(); return hour < 12 ? "Goedemorgen" : hour < 18 ? "Goedemiddag" : "Goedenavond"; }

export default async function DashboardPage() {
  const user = await getCurrentUser();
  const now = new Date();
  const track = await db.query.tracks.findFirst({ where: eq(tracks.actief, true), orderBy: asc(tracks.volgorde) });
  const trackModules = track ? await db.select().from(modules).where(eq(modules.trackId, track.id)).orderBy(asc(modules.volgorde)) : [];
  const moduleIds = trackModules.map((item) => item.id);
  const trackLessons = moduleIds.length ? await db.select().from(lessons).where(inArray(lessons.moduleId, moduleIds)).orderBy(asc(lessons.volgorde)) : [];
  const completed = user && trackLessons.length ? await db.select({ lessonId: progress.lessonId }).from(progress).where(and(eq(progress.userId, user.id), eq(progress.status, "voltooid"), inArray(progress.lessonId, trackLessons.map((item) => item.id)))) : [];
  const completedIds = new Set(completed.map((item) => item.lessonId));
  const orderedLessons = trackModules.flatMap((module) => trackLessons.filter((lesson) => lesson.moduleId === module.id).map((lesson) => ({ lesson, module })));
  const next = orderedLessons.find(({ lesson }) => !completedIds.has(lesson.id)) ?? orderedLessons[0];
  const percentage = trackLessons.length ? Math.round((completedIds.size / trackLessons.length) * 100) : 0;
  const nextModuleLessons = next ? trackLessons.filter((item) => item.moduleId === next.module.id) : [];
  const nextModuleDone = nextModuleLessons.filter((item) => completedIds.has(item.id)).length;
  const openAssignment = await db.query.assignments.findFirst({ where: eq(assignments.moeilijkheid, 1) });
  const firstName = user?.naam?.split(" ")[0] ?? "collega";
  const image = track ? trackImage(track.slug) : brandImages.hero;

  return (
    <main className="container-page py-10 md:py-14">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="eyebrow">{now.toLocaleDateString("nl-NL", { weekday: "long", day: "numeric", month: "long" })}</p>
          <h1 className="mt-2 text-4xl text-bh-blue-900 md:text-5xl">{greeting(now)}, {firstName}.</h1>
        </div>
        <p className="max-w-sm text-bh-grey-600">{track ? `Je werkt aan niveau ${track.niveau} · ${track.titel}. ${percentage >= 100 ? "Alles afgerond — tijd voor het examen." : "Ga verder waar je gebleven was."}` : "Er is nog geen actief leerpad."}</p>
      </div>

      <section className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_.6fr]">
        <article className="card relative isolate overflow-hidden text-white">
          <Image src={image.src} alt="" fill sizes="(min-width:1024px) 60vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(11,37,69,.96)_0%,rgba(11,37,69,.85)_55%,rgba(11,37,69,.45)_100%)]" aria-hidden />
          <div className="relative flex h-full flex-col justify-between p-8 md:p-10">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-white/75"><ShieldCheck size={16} className="text-bh-blue-600" /> Ga verder waar je was</p>
              {next ? <>
                <p className="mt-6 text-sm font-bold uppercase tracking-wider text-bh-blue-600">Module {next.module.volgorde} · {next.module.titel}</p>
                <h2 className="mt-2 max-w-xl text-3xl md:text-4xl">{next.lesson.titel}</h2>
                <p className="mt-4 max-w-xl text-white/75">{(next.lesson.content as { intro?: string })?.intro ?? "Korte les met praktijkvoorbeelden uit gebiedsontwikkeling."}</p>
              </> : <h2 className="mt-6 text-3xl">Nog geen lessen beschikbaar</h2>}
            </div>
            <div className="mt-10">
              {next && <><div className="mb-2 flex justify-between text-xs font-semibold text-white/70"><span>Modulevoortgang</span><span>{nextModuleDone} van {nextModuleLessons.length} lessen</span></div><div className="progress !bg-white/20"><span className="!bg-white" style={{ width: `${nextModuleLessons.length ? (nextModuleDone / nextModuleLessons.length) * 100 : 0}%` }} /></div></>}
              {next && track && <Link href={`/leren/${track.slug}/${next.module.slug}/${next.lesson.id}`} className="btn btn-white mt-8">Ga naar de les <ArrowRight size={18} /></Link>}
            </div>
          </div>
        </article>

        <aside className="card p-8">
          <p className="eyebrow">{track ? `Niveau ${track.niveau} · ${track.titel}` : "Leerpad"}</p>
          <div className="mt-5 flex items-end gap-1"><strong className="text-6xl font-extrabold leading-none text-bh-blue-900">{percentage}</strong><span className="pb-1 text-xl font-bold text-bh-grey-600">%</span></div>
          <div className="progress mt-6"><span style={{ width: `${percentage}%` }} /></div>
          <dl className="mt-8 space-y-4 border-t pt-6 text-sm">
            <div className="flex justify-between"><dt className="flex items-center gap-2 text-bh-grey-600"><BookOpen size={16} /> Lessen</dt><dd className="font-bold text-bh-blue-900">{completedIds.size} van {trackLessons.length}</dd></div>
            <div className="flex justify-between"><dt className="flex items-center gap-2 text-bh-grey-600"><Clock3 size={16} /> Modules</dt><dd className="font-bold text-bh-blue-900">{trackModules.length}</dd></div>
            <div className="flex justify-between"><dt className="flex items-center gap-2 text-bh-grey-600"><Award size={16} /> Examen</dt><dd className="font-bold text-bh-blue-900">{percentage >= 100 ? "Beschikbaar" : "Na alle lessen"}</dd></div>
          </dl>
          {track && <Link href={`/leren/${track.slug}`} className="link-arrow mt-7 text-sm">Bekijk het hele niveau <ArrowRight size={16} /></Link>}
        </aside>
      </section>

      <section className="mt-6 grid gap-6 md:grid-cols-3">
        <article className="card card-hover p-7">
          <p className="eyebrow">Openstaande opdracht</p>
          <h3 className="mt-6 text-xl text-bh-blue-900">{openAssignment?.titel ?? "Nog geen opdracht"}</h3>
          <p className="mt-2 line-clamp-2 text-sm text-bh-grey-600">{openAssignment?.opdrachttekst}</p>
          <Link className="link-arrow mt-5 text-sm" href={openAssignment ? `/opdrachten/${openAssignment.id}` : "/opdrachten"}>Open werkomgeving <ArrowRight size={15} /></Link>
        </article>
        <article className="card card-hover p-7">
          <p className="eyebrow !text-bh-red">Securitydeeltoets</p>
          <h3 className="mt-6 text-xl text-bh-blue-900">Slaag met 100%. Onbeperkt herkansbaar.</h3>
          <p className="mt-2 text-sm text-bh-grey-600">Tien vragen over AVG, projectvertrouwelijkheid en verificatie.</p>
          {track && <Link className="link-arrow mt-5 text-sm" href={`/examen/${track.slug}?security=1`}>Naar de deeltoets <ArrowRight size={15} /></Link>}
        </article>
        <article className="relative isolate overflow-hidden rounded-2xl bg-bh-blue-600 p-7 text-white shadow-card">
          <div className="pattern-dots absolute inset-0" aria-hidden />
          <div className="relative"><p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/80"><Lightbulb size={15} /> Praktische tip</p><h3 className="mt-6 text-xl">Noem altijd doelgroep en gewenst format in je prompt.</h3><p className="mt-2 text-sm text-white/80">Rol, context, taak, format — en vraag expliciet om aannames.</p></div>
        </article>
      </section>
    </main>
  );
}
