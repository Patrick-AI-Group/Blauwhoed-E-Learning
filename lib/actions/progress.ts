"use server";

import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { db } from "@/db";
import { lessons, progress } from "@/db/schema";
import { getCurrentUser } from "@/lib/auth/current-user";

const completeLessonSchema = z.object({ lessonId: z.string().uuid(), path: z.string().startsWith("/leren/").max(300), timeSpentSec: z.number().int().min(0).max(43_200) });

export async function completeLesson(input: z.infer<typeof completeLessonSchema>) {
  const data = completeLessonSchema.parse(input);
  const user = await getCurrentUser();
  if (!user) throw new Error("Niet ingelogd");
  const lesson = await db.query.lessons.findFirst({ where: eq(lessons.id, data.lessonId), columns: { id: true } });
  if (!lesson) throw new Error("Les niet gevonden");
  const existing = await db.query.progress.findFirst({ where: and(eq(progress.userId, user.id), eq(progress.lessonId, data.lessonId)) });
  if (existing) {
    await db.update(progress).set({ status: "voltooid", voltooidOp: new Date(), tijdBesteedSec: existing.tijdBesteedSec + data.timeSpentSec, updatedAt: new Date() }).where(eq(progress.id, existing.id));
  } else {
    await db.insert(progress).values({ userId: user.id, lessonId: data.lessonId, status: "voltooid", voltooidOp: new Date(), tijdBesteedSec: data.timeSpentSec });
  }
  revalidatePath(data.path);
  return { ok: true as const };
}
