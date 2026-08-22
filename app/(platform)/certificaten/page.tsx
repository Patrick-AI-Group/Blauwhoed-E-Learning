import { eq } from "drizzle-orm";
import { Award, Download } from "lucide-react";
import { db } from "@/db";
import { certificates, tracks } from "@/db/schema";
import { getCurrentUser } from "@/lib/auth/current-user";
export const dynamic = "force-dynamic";
export default async function CertificatesPage() { const user = await getCurrentUser(); if (!user) return null; const items = await db.select({ certificate: certificates, track: tracks }).from(certificates).innerJoin(tracks, eq(certificates.trackId, tracks.id)).where(eq(certificates.userId, user.id)); return <main className="container-page py-12"><p className="text-sm text-bh-blue-600">Bewijs van bekwaamheid</p><h1 className="mt-3 text-5xl font-normal text-bh-blue-900">Certificaten</h1><div className="mt-12 grid gap-5 md:grid-cols-2">{items.map(({ certificate, track }) => <article key={certificate.id} className="rounded-lg border p-7"><Award className="text-bh-green"/><h2 className="mt-8 text-2xl text-bh-blue-900">Niveau {track.niveau} · {track.titel}</h2><p className="mt-2 text-sm text-bh-grey-600">Geldig tot {certificate.verlooptOp.toLocaleDateString("nl-NL")} · code {certificate.code}</p>{certificate.pdfUrl && <a href={certificate.pdfUrl} className="mt-6 inline-flex items-center gap-2 text-bh-blue-600"><Download size={16}/> Download PDF</a>}</article>)}</div></main>; }
