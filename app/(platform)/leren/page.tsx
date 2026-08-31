import Image from "next/image";
import Link from "next/link";
import { asc, eq } from "drizzle-orm";
import { ArrowRight, LockKeyhole } from "lucide-react";
import { db } from "@/db";
import { certificates, tracks } from "@/db/schema";
import { getCurrentUser } from "@/lib/auth/current-user";
import { canAccessTrack } from "@/lib/progress/gates";
import { PageHero } from "@/components/layout/page-hero";
import { brandImages, trackImage } from "@/lib/brand/images";

export const dynamic = "force-dynamic";
export const metadata = { title: "Leren" };

export default async function LearnPage() {
  const user = await getCurrentUser();
  if (!user) return null;
  const [allTracks, userCertificates] = await Promise.all([
    db.select().from(tracks).where(eq(tracks.actief, true)).orderBy(asc(tracks.volgorde)),
    db.select().from(certificates).where(eq(certificates.userId, user.id)),
  ]);
  return (
    <main>
      <PageHero eyebrow="Jouw leerpad" title="Van fundament naar verantwoord leider." description="Ieder niveau combineert korte lessen met praktijkwerk. Je veiligheidsdeeltoets moet je altijd volledig goed maken." image={brandImages.hero} compact />
      <div className="container-page -mt-8 grid gap-6 pb-4 md:grid-cols-2">
        {allTracks.map((track, index) => {
          const unlocked = canAccessTrack({ niveau: track.niveau, previousTrackId: track.vereistTrackId, certificates: userCertificates.map((item) => ({ trackId: item.trackId, revoked: item.ingetrokken, expiresAt: item.verlooptOp })) });
          const image = trackImage(track.slug, index);
          const inner = (
            <>
              <div className="relative aspect-[16/9]">
                <Image src={image.src} alt={image.alt} fill sizes="(min-width:768px) 50vw, 100vw" className={`object-cover transition-transform duration-500 ${unlocked ? "group-hover:scale-105" : "grayscale"}`} />
                <div className="img-overlay" />
                <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-bh-blue-900">Niveau {track.niveau}</span>
                {!unlocked && <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-bh-blue-900/80 px-3 py-1 text-xs font-bold text-white"><LockKeyhole size={13} /> Vergrendeld</span>}
                <h2 className="absolute bottom-5 left-5 right-5 text-3xl text-white">{track.titel}</h2>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-bh-grey-600">{track.omschrijving}</p>
                <p className={`mt-auto pt-5 text-sm font-bold ${unlocked ? "link-arrow" : "text-bh-grey-600"}`}>{unlocked ? <>Bekijk niveau <ArrowRight size={16} /></> : `Rond eerst niveau ${track.niveau - 1} af`}</p>
              </div>
            </>
          );
          return unlocked
            ? <Link key={track.id} href={`/leren/${track.slug}`} className="card card-hover group flex flex-col overflow-hidden">{inner}</Link>
            : <article key={track.id} className="card flex flex-col overflow-hidden opacity-80">{inner}</article>;
        })}
      </div>
    </main>
  );
}
