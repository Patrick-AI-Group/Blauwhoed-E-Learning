import { NextResponse } from "next/server";
import { z } from "zod";
import { getCurrentUser } from "@/lib/auth/current-user";
import { searchKnowledge } from "@/lib/knowledge/search";
const schema = z.object({ query: z.string().trim().min(2).max(500) });
export async function POST(request: Request) { if (!await getCurrentUser()) return NextResponse.json({ error: "Niet ingelogd" }, { status: 401 }); const parsed = schema.safeParse(await request.json()); if (!parsed.success) return NextResponse.json({ error: "Ongeldige zoekopdracht" }, { status: 400 }); const results = await searchKnowledge(parsed.data.query, 8); return NextResponse.json({ results: results.map((item) => ({ id: item.id, title: item.title, content: item.content, source: item.source, url: item.url, similarity: item.similarity })) }); }
