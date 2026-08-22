import { desc, eq } from "drizzle-orm";
import { Copy } from "lucide-react";
import { db } from "@/db";
import { promptLibrary } from "@/db/schema";
import { getCurrentUser } from "@/lib/auth/current-user";
export const dynamic = "force-dynamic";
export default async function PromptLibraryPage() { const user = await getCurrentUser(); if (!user) return null; const prompts = await db.select().from(promptLibrary).where(eq(promptLibrary.organizationId, user.organizationId)).orderBy(desc(promptLibrary.stemmen)); return <main className="container-page py-12"><p className="text-sm text-bh-blue-600">Samen slimmer werken</p><h1 className="mt-3 text-5xl font-normal text-bh-blue-900">Promptbibliotheek</h1><div className="mt-12 grid gap-5 md:grid-cols-2">{prompts.map((item) => <article key={item.id} className="rounded-lg border p-6"><p className="text-sm text-bh-grey-600">{item.categorie} · {item.stemmen} stemmen</p><h2 className="mt-4 text-xl text-bh-blue-900">{item.titel}</h2><pre className="mt-5 whitespace-pre-wrap rounded-lg bg-bh-sand p-4 font-sans text-sm">{item.prompt}</pre><span className="mt-4 inline-flex items-center gap-2 text-sm text-bh-blue-600"><Copy size={15}/> Kopieer en pas aan</span></article>)}</div></main>; }
