import Link from "next/link";
import { and, eq } from "drizzle-orm";
import { Clock3, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";
import { db } from "@/db";
import { examAttempts, exams, tracks } from "@/db/schema";
import { getCurrentUser } from "@/lib/auth/current-user";
import { ExamRunner, ExamStart } from "@/components/ui/exam-runner";
import type { FrozenQuestion } from "@/lib/actions/exams";

export const dynamic = "force-dynamic";
export default async function ExamPage({
  params,
  searchParams,
}: {
  params: Promise<{ track: string }>;
  searchParams: Promise<{ poging?: string; security?: string }>;
}) {
  const [{ track: slug }, query, user] = await Promise.all([
    params,
    searchParams,
    getCurrentUser(),
  ]);
  if (!user) return null;
  const track = await db.query.tracks.findFirst({
    where: eq(tracks.slug, slug),
  });
  if (!track) notFound();
  const security = query.security === "1";
  const exam = await db.query.exams.findFirst({
    where: and(eq(exams.trackId, track.id), eq(exams.isSecurityExam, security)),
  });
  if (!exam) notFound();
  if (query.poging) {
    const attempt = await db.query.examAttempts.findFirst({
      where: and(
        eq(examAttempts.id, query.poging),
        eq(examAttempts.examId, exam.id),
        eq(examAttempts.userId, user.id),
      ),
    });
    if (!attempt) notFound();
    const publicQuestions = (attempt.vragen as FrozenQuestion[]).map(
      (question) => ({
        id: question.id,
        type: question.type,
        vraag: question.vraag,
        opties: question.opties,
        tags: question.tags,
        isSecurity: question.isSecurity,
      }),
    );
    return (
      <main className="container-page py-10">
        <ExamRunner
          attemptId={attempt.id}
          questions={publicQuestions}
          initialAnswers={attempt.antwoorden as Record<string, unknown>}
          startedAt={attempt.gestartOp.toISOString()}
          limitMinutes={exam.tijdslimietMin}
        />
      </main>
    );
  }
  return (
    <main className="container-page py-12">
      <div className="card max-w-3xl p-8 md:p-12">
        <div className="flex gap-3 text-sm">
          <Link
            href={`/examen/${slug}`}
            className={!security ? "text-bh-blue-600" : "text-bh-grey-600"}
          >
            Niveau-examen
          </Link>
          <span>·</span>
          <Link
            href={`/examen/${slug}?security=1`}
            className={security ? "text-bh-red" : "text-bh-grey-600"}
          >
            Securitydeeltoets
          </Link>
        </div>
        <h1 className="mt-5 text-5xl text-bh-blue-900">
          {exam.titel}
        </h1>
        <p className="mt-6 text-lg text-bh-grey-600">
          De vraagset wordt bij de start vastgezet. Antwoorden worden
          automatisch opgeslagen en de eindtijd wordt op de server
          gecontroleerd.
        </p>
        <dl className="mt-10 grid gap-5 border-y py-7 sm:grid-cols-3">
          <div>
            <dt className="text-sm text-bh-grey-600">Vragen</dt>
            <dd className="text-xl">{exam.aantalVragen}</dd>
          </div>
          <div>
            <dt className="flex items-center gap-2 text-sm text-bh-grey-600">
              <Clock3 size={15} /> Tijd
            </dt>
            <dd className="text-xl">{exam.tijdslimietMin} min</dd>
          </div>
          <div>
            <dt className="flex items-center gap-2 text-sm text-bh-grey-600">
              <ShieldCheck size={15} /> Slaaggrens
            </dt>
            <dd className="text-xl">{exam.slaagpercentage}%</dd>
          </div>
        </dl>
        <ExamStart examId={exam.id} />
      </div>
    </main>
  );
}
