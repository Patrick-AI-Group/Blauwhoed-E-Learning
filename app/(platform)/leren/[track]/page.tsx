import Link from "next/link";
import { and, asc, eq, isNull } from "drizzle-orm";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";
import { db } from "@/db";
import { modules, tracks } from "@/db/schema";

export const dynamic = "force-dynamic";
export default async function TrackPage({ params }: { params: Promise<{ track: string }> }) {
  const { track: slug } = await params;
  const track = await db.query.tracks.findFirst({ where: and(eq(tracks.slug, slug), isNull(tracks.deletedAt)) });
  if (!track) notFound();
  const items = await db.select().from(modules).where(and(eq(modules.trackId, track.id), isNull(modules.deletedAt))).orderBy(asc(modules.volgorde));
  return <main className="container-page py-12"><p className="text-sm text-bh-blue-600">Niveau {track.niveau}</p><h1 className="mt-3 text-5xl font-normal tracking-[-0.04em] text-bh-blue-900">{track.titel}</h1><p className="mt-6 max-w-2xl text-lg text-bh-grey-600">{track.omschrijving}</p><ol className="mt-14 border-t">{items.map((module, index) => <li key={module.id} className="grid gap-5 border-b py-7 md:grid-cols-[80px_1fr_auto] md:items-center"><span className="text-sm text-bh-grey-600">{String(index + 1).padStart(2, "0")}</span><div><h2 className="flex items-center gap-3 text-xl text-bh-blue-900">{module.isSecurityModule && <ShieldCheck size={19} className="text-bh-red"/>}{module.titel}</h2><p className="mt-1 text-sm text-bh-grey-600">{module.geschatteMinuten} minuten · {module.doelen[0]}</p></div><Link href={`/leren/${track.slug}/${module.slug}`} className="inline-flex items-center gap-2 text-sm text-bh-blue-600">Open module <ArrowRight size={16}/></Link></li>)}</ol></main>;
}
