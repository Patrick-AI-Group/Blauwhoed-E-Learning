import Link from "next/link";
import { and, asc, eq, isNull } from "drizzle-orm";
import { ArrowRight, Clock3, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";
import { db } from "@/db";
import { modules, tracks } from "@/db/schema";
import { PageHero } from "@/components/layout/page-hero";
import { trackImage } from "@/lib/brand/images";

export const dynamic = "force-dynamic";
export default async function TrackPage({ params }: { params: Promise<{ track: string }> }) {
  const { track: slug } = await params;
  const track = await db.query.tracks.findFirst({ where: and(eq(tracks.slug, slug), isNull(tracks.deletedAt)) });
  if (!track) notFound();
  const items = await db.select().from(modules).where(and(eq(modules.trackId, track.id), isNull(modules.deletedAt))).orderBy(asc(modules.volgorde));
  const totalMinutes = items.reduce((sum, item) => sum + item.geschatteMinuten, 0);
  return (
    <main>
      <PageHero eyebrow={`Niveau ${track.niveau}`} title={track.titel} description={track.omschrijving} image={trackImage(track.slug, track.niveau - 1)} compact
        aside={<dl className="grid grid-cols-3 gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 text-white backdrop-blur"><div><dt className="text-xs text-white/60">Modules</dt><dd className="text-2xl font-extrabold">{items.length}</dd></div><div><dt className="text-xs text-white/60">Leertijd</dt><dd className="text-2xl font-extrabold">{Math.round(totalMinutes / 60)}u</dd></div><div><dt className="text-xs text-white/60">Security</dt><dd className="text-2xl font-extrabold">{items.filter((item) => item.isSecurityModule).length}</dd></div></dl>}>
        <Link href={`/examen/${track.slug}`} className="btn btn-primary">Naar het examen <ArrowRight size={17} /></Link>
        <Link href={`/examen/${track.slug}?security=1`} className="btn btn-ghost-light">Securitydeeltoets</Link>
      </PageHero>
      <div className="container-page py-12">
        <p className="eyebrow">Modules</p>
        <ol className="mt-5 grid gap-4">
          {items.map((module, index) => (
            <li key={module.id}>
              <Link href={`/leren/${track.slug}/${module.slug}`} className="card card-hover grid gap-5 p-6 md:grid-cols-[64px_1fr_auto] md:items-center">
                <span className={`grid h-14 w-14 place-items-center rounded-2xl text-lg font-extrabold ${module.isSecurityModule ? "bg-red-50 text-bh-red" : "bg-bh-blue-50 text-bh-blue-700"}`}>{module.isSecurityModule ? <ShieldCheck size={24} /> : String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className="text-xl text-bh-blue-900">{module.titel}</h2>
                  <p className="mt-1 text-sm text-bh-grey-600">{module.doelen[0]}</p>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-bh-grey-600"><Clock3 size={13} /> {module.geschatteMinuten} minuten{module.isSecurityModule && <span className="pill ml-2 bg-red-50 text-bh-red">Verplicht 100%</span>}</p>
                </div>
                <span className="link-arrow text-sm">Open module <ArrowRight size={16} /></span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
