import Link from "next/link";
import { eq } from "drizzle-orm";
import { ArrowLeft, Sparkles } from "lucide-react";
import { notFound } from "next/navigation";
import { db } from "@/db";
import { lessons, modules, tracks } from "@/db/schema";
import { getCurrentUser } from "@/lib/auth/current-user";
import { PracticeChat } from "@/components/ui/practice-chat";

export const dynamic = "force-dynamic";

type Content = { sections?: Array<{ example?: string }> };

export default async function OefenenPage({ searchParams }: { searchParams: Promise<{ lesson?: string }> }) {
  const { lesson: lessonId } = await searchParams;
  const user = await getCurrentUser();
  if (!user) notFound();
  const lesson = lessonId ? await db.query.lessons.findFirst({ where: eq(lessons.id, lessonId) }) : null;
  const lessonModule = lesson ? await db.query.modules.findFirst({ where: eq(modules.id, lesson.moduleId) }) : null;
  const track = lessonModule ? await db.query.tracks.findFirst({ where: eq(tracks.id, lessonModule.trackId) }) : null;
  const content = lesson?.content as Content | undefined;
  const initialPrompt = content?.sections?.find((section) => section.example)?.example;
  const backHref = track && lessonModule && lesson ? `/leren/${track.slug}/${lessonModule.slug}/${lesson.id}` : null;
  return (
    <main className="container-page grid gap-6 py-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
      <section>
        {backHref ? (
          <Link href={backHref} className="link-arrow text-sm">
            <ArrowLeft size={15} /> Terug naar de les
          </Link>
        ) : (
          <Link href="/leren" className="link-arrow text-sm">
            <ArrowLeft size={15} /> Naar de leerstof
          </Link>
        )}
        <p className="mt-6 inline-flex items-center gap-3">
          <span className="pill bg-bh-blue-50 text-bh-blue-700">Oefenomgeving</span>
        </p>
        <h1 className="mt-4 text-4xl text-bh-blue-900">Oefen met prompten</h1>
        <p className="mt-6 text-lg leading-relaxed text-bh-grey-600">
          {lesson ? (
            <>
              Oefen hier vrij met de prompts uit de les <strong>{lesson.titel}</strong>, of typ je eigen voorbeeld. Reacties komen van hetzelfde model dat ook de goedgekeurde AI-tools binnen Blauwhoed aandrijft.
            </>
          ) : (
            "Oefen hier vrij met prompten, zoals je dat in een goedgekeurde AI-tool zou doen. Kies een les met een oefening voor gerichte context, of typ direct je eigen prompt."
          )}
        </p>
        <div className="card mt-8 p-6">
          <h2 className="inline-flex items-center gap-2 text-lg text-bh-blue-900">
            <Sparkles size={20} className="text-bh-blue-600" /> Zo oefen je veilig
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-bh-grey-600">
            <li>Gebruik geanonimiseerde of fictieve voorbeelden — precies zoals in de lesstof.</li>
            <li>Er wordt niets beoordeeld en het gesprek wordt niet bewaard na dit bezoek.</li>
            <li>Twijfel je over een echte situatie? Gebruik dan de goedgekeurde tools uit het toolregister, niet deze oefenomgeving.</li>
          </ul>
        </div>
      </section>
      <section className="card overflow-hidden lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)]">
        <PracticeChat lessonId={lesson?.id} initialPrompt={initialPrompt} />
      </section>
    </main>
  );
}
