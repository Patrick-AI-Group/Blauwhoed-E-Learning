import { count, eq } from "drizzle-orm";
import { db } from "@/db";
import { aiInteractions, certificates, users } from "@/db/schema";
import { authorize } from "@/lib/auth/authorize";
export const dynamic = "force-dynamic";
export default async function AdminDashboard() { await authorize(["teamlead", "admin", "contentbeheerder", "beoordelaar"]); const [[userCount], [certCount], [flags]] = await Promise.all([db.select({ value: count() }).from(users), db.select({ value: count() }).from(certificates), db.select({ value: count() }).from(aiInteractions).where(eq(aiInteractions.veiligheidsvlag, true))]); const cards = [["Medewerkers", userCount.value], ["Certificaten", certCount.value], ["Veiligheidsvlaggen", flags.value]]; return <main className="container-page py-12"><p className="text-sm text-bh-blue-600">Beheer</p><h1 className="mt-3 text-5xl font-normal text-bh-blue-900">Academy in beeld</h1><div className="mt-12 grid gap-5 md:grid-cols-3">{cards.map(([label, value]) => <article key={label} className="rounded-lg border p-7"><p className="text-sm text-bh-grey-600">{label}</p><p className="mt-5 text-4xl text-bh-blue-900">{value}</p></article>)}</div></main>; }
