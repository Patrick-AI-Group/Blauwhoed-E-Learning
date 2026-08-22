"use client";

import { useState, useTransition } from "react";
import { Check } from "lucide-react";
import { completeLesson } from "@/lib/actions/progress";

export function CompleteLessonButton({ lessonId, path, completed }: { lessonId: string; path: string; completed: boolean }) {
  const [done, setDone] = useState(completed);
  const [pending, startTransition] = useTransition();
  return <button disabled={done || pending} onClick={() => startTransition(async () => { await completeLesson({ lessonId, path, timeSpentSec: 300 }); setDone(true); })} className="inline-flex items-center gap-2 rounded-lg bg-bh-blue-900 px-5 py-3 text-white disabled:bg-bh-green"><Check size={17}/>{done ? "Les afgerond" : pending ? "Opslaan…" : "Markeer als afgerond"}</button>;
}
