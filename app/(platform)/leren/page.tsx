import Link from "next/link";
import { asc, eq } from "drizzle-orm";
import { LockKeyhole, ArrowRight } from "lucide-react";
import { db } from "@/db";
import { certificates, tracks } from "@/db/schema";
import { getCurrentUser } from "@/lib/auth/current-user";
import { canAccessTrack } from "@/lib/progress/gates";

export const dynamic = "force-dynamic";
export const metadata = { title: "Leren" };

export default async function LearnPage() {
  const user = await getCurrentUser();
  if (!user) return null;
  const [allTracks, userCertificates] = await Promise.all([
    db.select().from(tracks).where(eq(tracks.actief, true)).orderBy(asc(tracks.volgorde)),
    db.select().from(certificates).where(eq(certificates.userId, user.id)),
  ]);
  return <main className="container-page py-12"><div className="max-w-3xl"><p className="text-sm text-bh-blue-600">Jouw leerpad</p><h1 className="mt-3 text-5xl font-normal tracking-[-0.04em] text-bh-blue-900">Van fundament naar verantwoord leider.</h1><p className="mt-6 text-lg text-bh-grey-600">Ieder niveau combineert korte lessen met praktijkwerk. Je veiligheidsdeeltoets moet je altijd volledig goed maken.</p></div><div className="mt-14 grid gap-5">{allTracks.map((track) => { const unlocked = canAccessTrack({ niveau: track.niveau, previousTrackId: track.vereistTrackId, certificates: userCertificates.map((item) => ({ trackId: item.trackId, revoked: item.ingetrokken, expiresAt: item.verlooptOp })) }); return <article key={track.id} className={`grid gap-6 rounded-lg border p-7 md:grid-cols-[110px_1fr_auto] md:items-center ${unlocked ? "bg-white" : "bg-bh-sand text-bh-grey-600"}`}><div><span className="text-sm">Niveau</span><p className="text-4xl font-normal text-bh-blue-900">{track.niveau}</p></div><div><h2 className="text-2xl font-normal text-bh-blue-900">{track.titel}</h2><p className="mt-2 max-w-2xl">{track.omschrijving}</p></div>{unlocked ? <Link href={`/leren/${track.slug}`} className="inline-flex items-center gap-2 text-bh-blue-600">Bekijk niveau <ArrowRight size={17}/></Link> : <span className="inline-flex items-center gap-2 text-sm"><LockKeyhole size={16}/> Eerst niveau {track.niveau - 1}</span>}</article>; })}</div></main>;
}
