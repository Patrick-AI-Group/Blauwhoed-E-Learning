"use client";

import { useState, useTransition } from "react";
import { Check } from "lucide-react";
import { completeLesson } from "@/lib/actions/progress";

export function CompleteLessonButton({ lessonId, path, completed }: { lessonId: string; path: string; completed: boolean }) {
  const [done, setDone] = useState(completed);
  const [pending, startTransition] = useTransition();
  return <button disabled={done || pending} onClick={() => startTransition(async () => { await completeLesson({ lessonId, path, timeSpentSec: 300 }); setDone(true); })} className="btn btn-primary disabled:!bg-bh-green disabled:!opacity-100"><Check size={17}/>{done ? "Les afgerond" : pending ? "Opslaan…" : "Markeer als afgerond"}</button>;
}
