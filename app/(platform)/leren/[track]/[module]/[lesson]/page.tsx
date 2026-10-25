import Link from "next/link";
import { and, eq } from "drizzle-orm";
import { ArrowLeft, Clock3, Lightbulb, Sparkles } from "lucide-react";
import { notFound } from "next/navigation";
import { db } from "@/db";
import { lessons, modules, progress, tracks } from "@/db/schema";
import { getCurrentUser } from "@/lib/auth/current-user";
import { CompleteLessonButton } from "@/components/ui/complete-lesson-button";
import { PortableContent } from "@/components/ui/portable-content";

export const dynamic = "force-dynamic";
type Content = { intro?: string; sections?: Array<{ heading: string; body: string; example?: string }>; takeaway?: string };

export default async function LessonPage({ params }: { params: Promise<{ track: string; module: string; lesson: string }> }) {
  const route = await params;
  const [lesson, user, track] = await Promise.all([
    db.query.lessons.findFirst({ where: eq(lessons.id, route.lesson) }),
    getCurrentUser(),
    db.query.tracks.findFirst({ where: eq(tracks.slug, route.track) }),
  ]);
  if (!lesson || !user || !track?.actief) notFound();
  const [saved, module] = await Promise.all([
    db.query.progress.findFirst({ where: and(eq(progress.userId, user.id), eq(progress.lessonId, lesson.id)) }),
    db.query.modules.findFirst({ where: eq(modules.id, lesson.moduleId) }),
  ]);
  const content = lesson.content as Content;
  const path = `/leren/${route.track}/${route.module}/${route.lesson}`;
  return (
    <main>
      <div className="border-b bg-white">
        <div className="container-page flex flex-wrap items-center justify-between gap-3 py-4 text-sm">
          <Link href={`/leren/${route.track}/${route.module}`} className="link-arrow"><ArrowLeft size={16} /> {module?.titel ?? "Terug naar module"}</Link>
          <span className="text-bh-grey-600">{track && `Niveau ${track.niveau} · `}{module && `Module ${module.volgorde}`}</span>
        </div>
      </div>
      <div className="container-page py-12">
        <article className="card mx-auto max-w-[72ch] p-8 md:p-12">
          <p className="inline-flex flex-wrap items-center gap-3"><span className="pill bg-bh-blue-50 capitalize text-bh-blue-700">{lesson.type}</span><span className="inline-flex items-center gap-1 text-sm text-bh-grey-600"><Clock3 size={14} /> {lesson.geschatteMinuten} minuten</span>{lesson.type === "interactief" && <Link href={`/oefenen?lesson=${lesson.id}`} className="inline-flex items-center gap-1 pill bg-bh-blue-900 text-white hover:bg-bh-blue-600"><Sparkles size={14} /> Open in de oefenomgeving</Link>}</p>
          <h1 className="mt-5 text-4xl text-bh-blue-900 md:text-5xl">{lesson.titel}</h1>
          {content.intro && <p className="mt-7 text-xl leading-relaxed text-bh-grey-600">{content.intro}</p>}
          <PortableContent value={lesson.content} />
          <div className="mt-10 space-y-10">
            {content.sections?.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl text-bh-blue-900">{section.heading}</h2>
                <p className="mt-4 whitespace-pre-line leading-relaxed">{section.body}</p>
                {section.example && <div className="mt-5 rounded-xl border-l-4 border-bh-blue-600 bg-bh-blue-50 p-5 text-sm whitespace-pre-line"><p className="mb-1 text-xs font-bold uppercase tracking-wider text-bh-blue-700">Voorbeeld</p>{section.example}</div>}
              </section>
            ))}
          </div>
          {content.takeaway && <div className="mt-12 flex gap-4 rounded-2xl bg-bh-blue-900 p-7 text-white"><Lightbulb className="shrink-0 text-bh-blue-600" size={26} /><div><p className="text-xs font-bold uppercase tracking-wider text-white/70">Onthoud dit</p><p className="mt-2 text-lg font-semibold">{content.takeaway}</p></div></div>}
          <div className="mt-12 border-t pt-7"><CompleteLessonButton lessonId={lesson.id} path={path} backHref={`/leren/${route.track}/${route.module}`} completed={saved?.status === "voltooid"} /></div>
        </article>
      </div>
    </main>
  );
}
