import Image from "next/image";
import { and, eq } from "drizzle-orm";
import { BadgeCheck, BadgeX } from "lucide-react";
import { notFound } from "next/navigation";
import { db } from "@/db";
import { certificates, tracks, users } from "@/db/schema";
import { Logo } from "@/components/layout/logo";
import { brandImages } from "@/lib/brand/images";

export const dynamic = "force-dynamic";
export default async function VerifyPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  const rows = await db.select({ certificate: certificates, naam: users.naam, track: tracks }).from(certificates).innerJoin(users, eq(certificates.userId, users.id)).innerJoin(tracks, eq(certificates.trackId, tracks.id)).where(and(eq(certificates.code, code.toUpperCase()), eq(certificates.ingetrokken, false))).limit(1);
  const row = rows[0];
  if (!row) notFound();
  const valid = row.certificate.verlooptOp > new Date();
  return (
    <main className="relative isolate min-h-screen bg-bh-blue-900 p-6">
      <Image src={brandImages.hero.src} alt="" fill sizes="100vw" className="object-cover opacity-30" />
      <article className="card relative mx-auto mt-16 max-w-2xl overflow-hidden">
        <div className="flex items-center justify-between border-b px-8 py-5"><Logo href="/" subtitle="Certificaatcontrole" /><span className={`pill ${valid ? "bg-green-50 text-bh-green" : "bg-red-50 text-bh-red"}`}>{valid ? <BadgeCheck size={14} /> : <BadgeX size={14} />} {valid ? "Geldig" : "Verlopen"}</span></div>
        <div className="p-8 md:p-10">
          <h1 className="text-4xl text-bh-blue-900">{valid ? "Geldig certificaat" : "Certificaat verlopen"}</h1>
          <dl className="mt-8 grid gap-5 sm:grid-cols-2">
            {[["Naam", row.naam], ["Niveau", `Niveau ${row.track.niveau} · ${row.track.titel}`], ["Uitgegeven", row.certificate.uitgegevenOp.toLocaleDateString("nl-NL")], ["Geldig tot", row.certificate.verlooptOp.toLocaleDateString("nl-NL")]].map(([label, value]) => <div key={label} className="rounded-xl bg-bh-sand p-4"><dt className="text-xs font-bold uppercase tracking-wider text-bh-grey-600">{label}</dt><dd className="mt-1 font-bold text-bh-blue-900">{value}</dd></div>)}
          </dl>
          <p className="mt-6 text-xs text-bh-grey-600">Code {row.certificate.code} · Uitgegeven door Blauwhoed AI Academy</p>
        </div>
      </article>
    </main>
  );
}
