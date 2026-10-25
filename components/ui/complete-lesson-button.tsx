"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { completeLesson } from "@/lib/actions/progress";

export function CompleteLessonButton({ lessonId, path, backHref, completed }: { lessonId: string; path: string; backHref: string; completed: boolean }) {
  const router = useRouter();
  const [done, setDone] = useState(completed);
  const [pending, startTransition] = useTransition();
  if (done) return <div className="flex flex-wrap items-center gap-3"><span className="btn btn-primary !bg-bh-green"><Check size={17}/>Les afgerond</span><Link href={backHref} className="link-arrow text-sm"><ArrowLeft size={16}/> Terug naar het lesoverzicht</Link></div>;
  return <button disabled={pending} onClick={() => startTransition(async () => { await completeLesson({ lessonId, path, timeSpentSec: 300 }); setDone(true); router.push(backHref); })} className="btn btn-primary disabled:!opacity-100"><Check size={17}/>{pending ? "Opslaan…" : "Markeer als afgerond"}</button>;
}
