import Link from "next/link";
import { eq } from "drizzle-orm";
import { ArrowRight, Award, Download, ShieldCheck } from "lucide-react";
import { db } from "@/db";
import { certificates, tracks } from "@/db/schema";
import { getCurrentUser } from "@/lib/auth/current-user";
import { PageHero } from "@/components/layout/page-hero";
import { brandImages } from "@/lib/brand/images";

export const dynamic = "force-dynamic";
export default async function CertificatesPage() {
  const user = await getCurrentUser();
  if (!user) return null;
  const items = await db.select({ certificate: certificates, track: tracks }).from(certificates).innerJoin(tracks, eq(certificates.trackId, tracks.id)).where(eq(certificates.userId, user.id));
  return (
    <main>
      <PageHero eyebrow="Bewijs van bekwaamheid" title="Certificaten" description="Ieder behaald niveau levert een certificaat op met een verifieerbare code. Certificaten zijn twee jaar geldig." image={brandImages.waterfront} compact />
      <div className="container-page py-12">
        {items.length === 0 ? (
          <div className="card mx-auto max-w-xl p-10 text-center"><span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-bh-blue-50 text-bh-blue-600"><Award size={28} /></span><h2 className="mt-6 text-2xl text-bh-blue-900">Nog geen certificaten</h2><p className="mt-3 text-bh-grey-600">Rond alle lessen van een niveau af en haal het examen en de securitydeeltoets.</p><Link href="/leren" className="btn btn-primary mt-7">Naar het leerpad <ArrowRight size={17} /></Link></div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {items.map(({ certificate, track }) => (
              <article key={certificate.id} className="card relative overflow-hidden p-8">
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-bh-blue-50" aria-hidden />
                <div className="relative"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-bh-blue-900 text-white"><Award size={24} /></span>
                <p className="eyebrow mt-6">Niveau {track.niveau}</p>
                <h2 className="mt-1 text-2xl text-bh-blue-900">{track.titel}</h2>
                <dl className="mt-5 grid grid-cols-2 gap-3 text-sm"><div><dt className="text-bh-grey-600">Geldig tot</dt><dd className="font-bold">{certificate.verlooptOp.toLocaleDateString("nl-NL")}</dd></div><div><dt className="text-bh-grey-600">Verificatiecode</dt><dd className="font-mono font-bold">{certificate.code}</dd></div></dl>
                <div className="mt-6 flex flex-wrap gap-3">{certificate.pdfUrl && <a href={certificate.pdfUrl} className="btn btn-primary btn-sm"><Download size={15} /> Download PDF</a>}<Link href={`/verificatie/${certificate.code}`} className="btn btn-outline btn-sm"><ShieldCheck size={15} /> Verifieer</Link></div></div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
