"use client";
import { useEffect, useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Clock3 } from "lucide-react";
import {
  saveExamAnswer,
  startExam,
  submitExam,
  type FrozenQuestion,
} from "@/lib/actions/exams";

type PublicQuestion = Omit<FrozenQuestion, "juist" | "toelichting">;
export function ExamStart({ examId }: { examId: string }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();
  return (
    <div>
      <button
        onClick={() =>
          startTransition(async () => {
            try {
              const result = await startExam({ examId });
              router.push(`?poging=${result.attemptId}`);
            } catch (cause) {
              setError(
                cause instanceof Error ? cause.message : "Starten mislukt",
              );
            }
          })
        }
        disabled={pending}
        className="btn btn-primary mt-8"
      >
        {pending ? "Examen voorbereiden…" : "Start examen"}
      </button>
      {error && (
        <p className="mt-4 text-sm text-bh-red" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function ExamRunner({
  attemptId,
  questions,
  initialAnswers,
  startedAt,
  limitMinutes,
}: {
  attemptId: string;
  questions: PublicQuestion[];
  initialAnswers: Record<string, unknown>;
  startedAt: string;
  limitMinutes: number;
}) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState(initialAnswers);
  const [saved, setSaved] = useState("");
  const [result, setResult] = useState<{
    score: number;
    securityScore: number;
    passed: boolean;
  }>();
  const [pending, startTransition] = useTransition();
  const endsAt = useMemo(
    () => new Date(startedAt).getTime() + limitMinutes * 60_000,
    [startedAt, limitMinutes],
  );
  const [seconds, setSeconds] = useState(
    Math.max(0, Math.floor((endsAt - Date.now()) / 1000)),
  );
  useEffect(() => {
    const timer = window.setInterval(
      () => setSeconds(Math.max(0, Math.floor((endsAt - Date.now()) / 1000))),
      1000,
    );
    return () => window.clearInterval(timer);
  }, [endsAt]);
  useEffect(() => {
    if (seconds === 0 && !result && !pending)
      startTransition(async () => setResult(await submitExam({ attemptId })));
  }, [seconds, result, pending, attemptId]);
  const question = questions[index];
  if (result)
    return (
      <section className="card mx-auto max-w-2xl p-10 text-center">
        <CheckCircle2
          className={`mx-auto ${result.passed ? "text-bh-green" : "text-bh-red"}`}
          size={44}
        />
        <h1 className="mt-6 text-4xl text-bh-blue-900">
          {result.passed ? "Examen behaald" : "Nog niet behaald"}
        </h1>
        <p className="mt-4 text-lg">
          Score {result.score}% · security {result.securityScore}%
        </p>
        <p className="mt-3 text-bh-grey-600">
          Voor security is 100% vereist. Bekijk de lessen per onderwerp voordat
          je een nieuwe poging start.
        </p>
      </section>
    );
  const options = Array.isArray(question.opties)
    ? question.opties.map(String)
    : ["Waar", "Onwaar"];
  async function choose(value: unknown) {
    const next = { ...answers, [question.id]: value };
    setAnswers(next);
    setSaved("Opslaan…");
    const response = await saveExamAnswer({
      attemptId,
      questionId: question.id,
      answer: value,
    });
    setSaved(
      `Opgeslagen om ${new Date(response.savedAt).toLocaleTimeString("nl-NL", { hour: "2-digit", minute: "2-digit" })}`,
    );
  }
  return (
    <section className="mx-auto max-w-3xl">
      <header className="flex items-center justify-between border-b pb-5">
        <p className="text-sm text-bh-grey-600">
          Vraag {index + 1} van {questions.length}
        </p>
        <p
          className={`flex items-center gap-2 font-medium ${seconds < 300 ? "text-bh-red" : "text-bh-blue-900"}`}
        >
          <Clock3 size={17} />
          {Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, "0")}
        </p>
      </header>
      <div className="py-10">
        <div className="mb-7 h-1 bg-bh-grey-200">
          <div
            className="h-1 bg-bh-blue-600"
            style={{ width: `${((index + 1) / questions.length) * 100}%` }}
          />
        </div>
        <h1 className="text-3xl leading-snug text-bh-blue-900">
          {question.vraag}
        </h1>
        {question.type === "scenario_open" ? (
          <textarea
            value={String(answers[question.id] ?? "")}
            onChange={(event) =>
              setAnswers({ ...answers, [question.id]: event.target.value })
            }
            onBlur={(event) => choose(event.target.value)}
            className="mt-8 min-h-48 w-full card p-4"
            aria-label="Antwoord"
          />
        ) : (
          <div className="mt-8 grid gap-3">
            {options.map((option, optionIndex) => {
              const value =
                question.type === "waar_onwaar"
                  ? optionIndex === 0
                  : optionIndex;
              const selected =
                question.type === "meerdere_juist"
                  ? Array.isArray(answers[question.id]) &&
                    (answers[question.id] as unknown[]).includes(value)
                  : answers[question.id] === value;
              return (
                <button
                  key={option}
                  onClick={() => {
                    if (question.type === "meerdere_juist") {
                      const current = Array.isArray(answers[question.id])
                        ? (answers[question.id] as number[])
                        : [];
                      choose(
                        selected
                          ? current.filter((item) => item !== value)
                          : [...current, value],
                      );
                    } else choose(value);
                  }}
                  className={`card p-4 text-left ${selected ? "border-bh-blue-600 bg-bh-blue-50 font-semibold" : "bg-white hover:border-bh-blue-600 hover:bg-bh-blue-50"}`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        )}
        <p className="mt-4 min-h-6 text-sm text-bh-grey-600" aria-live="polite">
          {saved}
        </p>
      </div>
      <footer className="flex justify-between border-t pt-6">
        <button
          disabled={index === 0}
          onClick={() => setIndex(index - 1)}
          className="btn btn-outline btn-sm"
        >
          Vorige
        </button>
        {index < questions.length - 1 ? (
          <button
            onClick={() => setIndex(index + 1)}
            className="btn btn-primary btn-sm"
          >
            Volgende
          </button>
        ) : (
          <button
            disabled={pending}
            onClick={() =>
              startTransition(async () =>
                setResult(await submitExam({ attemptId })),
              )
            }
            className="btn btn-primary btn-sm !bg-bh-green"
          >
            {pending ? "Inleveren…" : "Examen inleveren"}
          </button>
        )}
      </footer>
    </section>
  );
}
