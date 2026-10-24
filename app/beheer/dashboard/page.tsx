import { count, eq } from "drizzle-orm";
import { db } from "@/db";
import { aiInteractions, certificates, users } from "@/db/schema";
import { authorize } from "@/lib/auth/authorize";
export const dynamic = "force-dynamic";
export default async function AdminDashboard() { await authorize(["teamlead", "admin", "contentbeheerder", "beoordelaar"]); const [[userCount], [certCount], [flags]] = await Promise.all([db.select({ value: count() }).from(users), db.select({ value: count() }).from(certificates), db.select({ value: count() }).from(aiInteractions).where(eq(aiInteractions.veiligheidsvlag, true))]); const cards = [["Medewerkers", userCount.value], ["Certificaten", certCount.value], ["Veiligheidsvlaggen", flags.value]]; return <main><h1 className="text-4xl text-bh-blue-900">Academy in beeld</h1><div className="mt-8 grid gap-5 md:grid-cols-3">{cards.map(([label, value]) => <article key={label} className="card p-7"><p className="text-sm text-bh-grey-600">{label}</p><p className="mt-5 text-4xl text-bh-blue-900">{value}</p></article>)}</div></main>; }
