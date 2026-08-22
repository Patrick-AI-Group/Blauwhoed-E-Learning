import Link from "next/link";
import { eq } from "drizzle-orm";
import { ArrowRight } from "lucide-react";
import { db } from "@/db";
import { assignments } from "@/db/schema";
export const dynamic = "force-dynamic";
export default async function AssignmentsPage() { const items = await db.select().from(assignments).where(eq(assignments.moeilijkheid, 1)).limit(12); return <main className="container-page py-12"><p className="text-sm text-bh-blue-600">Praktijk</p><h1 className="mt-3 text-5xl font-normal tracking-[-0.04em] text-bh-blue-900">Opdrachten</h1><p className="mt-5 max-w-2xl text-lg text-bh-grey-600">Je proces telt mee. Experimenteer in de AI-werkomgeving en lever je beste resultaat in.</p><div className="mt-12 grid gap-5 md:grid-cols-2">{items.map((item) => <article key={item.id} className="rounded-lg border p-7"><div className="flex justify-between text-sm text-bh-grey-600"><span>{item.type.replaceAll("_", " ")}</span><span>Moeilijkheid {item.moeilijkheid}/5</span></div><h2 className="mt-8 text-2xl text-bh-blue-900">{item.titel}</h2><p className="mt-3 line-clamp-2 text-bh-grey-600">{item.opdrachttekst}</p><Link href={`/opdrachten/${item.id}`} className="mt-6 inline-flex items-center gap-2 text-sm text-bh-blue-600">Open werkomgeving <ArrowRight size={16}/></Link></article>)}</div></main>; }
