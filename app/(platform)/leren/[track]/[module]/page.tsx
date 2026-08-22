import Link from "next/link";
import { and, asc, eq, isNull } from "drizzle-orm";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { db } from "@/db";
import { lessons, modules, tracks } from "@/db/schema";

export const dynamic = "force-dynamic";
export default async function ModulePage({ params }: { params: Promise<{ track: string; module: string }> }) {
  const route = await params;
  const [track] = await db.select().from(tracks).where(eq(tracks.slug, route.track)).limit(1);
  if (!track) notFound();
  const [module] = await db.select().from(modules).where(and(eq(modules.trackId, track.id), eq(modules.slug, route.module), isNull(modules.deletedAt))).limit(1);
  if (!module) notFound();
  const items = await db.select().from(lessons).where(and(eq(lessons.moduleId, module.id), isNull(lessons.deletedAt))).orderBy(asc(lessons.volgorde));
  return <main className="container-page py-12"><div className="grid gap-10 lg:grid-cols-[1fr_320px]"><div><p className="text-sm text-bh-blue-600">Niveau {track.niveau} · Module {module.volgorde}</p><h1 className="mt-3 text-5xl font-normal tracking-[-0.04em] text-bh-blue-900">{module.titel}</h1><p className="mt-6 max-w-2xl text-lg text-bh-grey-600">Na deze module kun je {module.doelen.join(", ")}.</p></div><aside className="rounded-lg bg-bh-sand p-6"><p className="text-sm text-bh-grey-600">Geschatte tijd</p><p className="mt-2 text-2xl text-bh-blue-900">{module.geschatteMinuten} minuten</p></aside></div><ol className="mt-14 grid gap-4">{items.map((lesson, index) => <li key={lesson.id}><Link href={`/leren/${route.track}/${route.module}/${lesson.id}`} className="grid gap-4 rounded-lg border p-6 hover:bg-bh-blue-100/40 md:grid-cols-[60px_1fr_auto] md:items-center"><span className="text-sm text-bh-grey-600">{String(index + 1).padStart(2, "0")}</span><div><h2 className="text-lg text-bh-blue-900">{lesson.titel}</h2><p className="text-sm text-bh-grey-600">{lesson.type} · {lesson.geschatteMinuten} minuten</p></div><ArrowRight size={17} className="text-bh-blue-600"/></Link></li>)}</ol></main>;
}
