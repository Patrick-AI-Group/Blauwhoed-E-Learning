import { lt } from "drizzle-orm";
import { NextResponse } from "next/server";
import { db } from "@/db";
import { assignmentSubmissions, examAttempts } from "@/db/schema";
export async function GET(request: Request) { if (request.headers.get("authorization") !== `Bearer ${process.env.CRON_SECRET}`) return NextResponse.json({ error: "Onbevoegd" }, { status: 401 }); const chatCutoff = new Date(Date.now() - 365 * 86400000); const examCutoff = new Date(Date.now() - 730 * 86400000); await db.update(assignmentSubmissions).set({ transcript: [], updatedAt: new Date() }).where(lt(assignmentSubmissions.updatedAt, chatCutoff)); await db.delete(examAttempts).where(lt(examAttempts.createdAt, examCutoff)); return NextResponse.json({ ok: true, at: new Date().toISOString() }); }
