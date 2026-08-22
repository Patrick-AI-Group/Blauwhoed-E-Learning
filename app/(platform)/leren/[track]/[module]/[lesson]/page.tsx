import { and, eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import { db } from "@/db";
import { lessons, progress } from "@/db/schema";
import { getCurrentUser } from "@/lib/auth/current-user";
import { CompleteLessonButton } from "@/components/ui/complete-lesson-button";

export const dynamic = "force-dynamic";
type Content = { intro?: string; sections?: Array<{ heading: string; body: string; example?: string }>; takeaway?: string };

export default async function LessonPage({ params }: { params: Promise<{ track: string; module: string; lesson: string }> }) {
  const route = await params;
  const [lesson, user] = await Promise.all([db.query.lessons.findFirst({ where: eq(lessons.id, route.lesson) }), getCurrentUser()]);
  if (!lesson || !user) notFound();
  const saved = await db.query.progress.findFirst({ where: and(eq(progress.userId, user.id), eq(progress.lessonId, lesson.id)) });
  const content = lesson.content as Content;
  const path = `/leren/${route.track}/${route.module}/${route.lesson}`;
  return <main className="container-page py-12"><div className="grid gap-12 lg:grid-cols-[minmax(0,72ch)_280px]"><article><p className="text-sm text-bh-blue-600">{lesson.type} · {lesson.geschatteMinuten} minuten</p><h1 className="mt-3 text-5xl font-normal leading-tight tracking-[-0.04em] text-bh-blue-900">{lesson.titel}</h1>{content.intro && <p className="mt-8 text-xl leading-relaxed text-bh-grey-600">{content.intro}</p>}<div className="mt-10 space-y-10">{content.sections?.map((section) => <section key={section.heading}><h2 className="text-2xl font-normal text-bh-blue-900">{section.heading}</h2><p className="mt-4 whitespace-pre-line leading-relaxed">{section.body}</p>{section.example && <div className="mt-5 rounded-lg border-l-4 border-bh-blue-600 bg-bh-blue-100 p-5 text-sm">{section.example}</div>}</section>)}</div>{content.takeaway && <div className="mt-12 rounded-lg bg-bh-sand p-7"><p className="text-sm text-bh-grey-600">Onthoud dit</p><p className="mt-2 text-lg text-bh-blue-900">{content.takeaway}</p></div>}<div className="mt-12 border-t pt-7"><CompleteLessonButton lessonId={lesson.id} path={path} completed={saved?.status === "voltooid"}/></div></article><aside className="h-fit rounded-lg border p-6 lg:sticky lg:top-24"><p className="text-sm text-bh-grey-600">AI-tutor</p><h2 className="mt-2 text-xl text-bh-blue-900">Loop je vast?</h2><p className="mt-3 text-sm text-bh-grey-600">Vraag om uitleg of een hint. De tutor geeft nooit het antwoord op een opdracht.</p><button className="mt-5 w-full rounded-lg border px-4 py-2.5 text-sm text-bh-blue-600">Open tutor</button></aside></div></main>;
}
