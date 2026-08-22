import Link from "next/link";
import { desc, isNull } from "drizzle-orm";
import { db } from "@/db";
import { questions, tracks } from "@/db/schema";
import { saveQuestion, softDelete } from "@/lib/actions/admin";
export const dynamic = "force-dynamic";
const field = "rounded-lg border px-3 py-2";
export default async function QuestionsAdmin({
  searchParams,
}: {
  searchParams: Promise<{ edit?: string }>;
}) {
  const { edit } = await searchParams;
  const [items, allTracks] = await Promise.all([
    db
      .select()
      .from(questions)
      .where(isNull(questions.deletedAt))
      .orderBy(desc(questions.updatedAt))
      .limit(200),
    db.select().from(tracks),
  ]);
  const selected = items.find((item) => item.id === edit);
  return (
    <main>
      <h1 className="text-4xl text-bh-blue-900">Vragenbank</h1>
      <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_1fr]">
        <section className="rounded-lg border bg-white p-5">
          <div className="max-h-[680px] divide-y overflow-auto">
            {items.map((item) => (
              <Link
                key={item.id}
                href={`/beheer/vragenbank?edit=${item.id}`}
                className="block py-3 text-sm"
              >
                <span
                  className={
                    item.isSecurity ? "text-bh-red" : "text-bh-blue-600"
                  }
                >
                  {item.isSecurity ? "Security" : "Toepassing"}
                </span>
                <p className="line-clamp-2">{item.vraag}</p>
                <span className="text-xs text-bh-grey-600">
                  Goed:{" "}
                  {item.keerGetoond
                    ? Math.round((item.keerJuist / item.keerGetoond) * 100)
                    : 0}
                  % · moeilijkheid {item.moeilijkheid}
                </span>
              </Link>
            ))}
          </div>
        </section>
        <section className="rounded-lg border bg-white p-6">
          <h2 className="text-xl">
            {selected ? "Vraag bewerken" : "Vraag toevoegen"}
          </h2>
          <form action={saveQuestion} className="mt-5 grid gap-3">
            <input type="hidden" name="id" value={selected?.id ?? ""} />
          <select
            name="trackId"
              defaultValue={selected?.trackId ?? ""}
              className={field}
              required
            >
              {allTracks.map((track) => (
                <option key={track.id} value={track.id}>
                  Niveau {track.niveau}
                </option>
              ))}
          </select>
          <select
            name="type"
            defaultValue={selected?.type ?? "mc"}
            className={field}
          >
            <option value="mc">Meerkeuze</option>
            <option value="meerdere_juist">Meerdere antwoorden juist</option>
            <option value="waar_onwaar">Waar/onwaar</option>
            <option value="scenario_open">Open scenario</option>
            <option value="sleep_categorie">Sleep naar categorie</option>
          </select>
            <textarea
              name="vraag"
              defaultValue={selected?.vraag}
              className={field}
              placeholder="Vraag"
              required
            />
            <textarea
              name="opties"
              defaultValue={
                Array.isArray(selected?.opties)
                  ? selected.opties.join("\n")
                  : ""
              }
              className={field}
              placeholder="Eén antwoordoptie per regel"
              required
            />
            <input
              name="juist"
              defaultValue={
                Array.isArray(selected?.juist) ? selected.juist.join(",") : "0"
              }
              className={field}
              placeholder="Juiste index, bijvoorbeeld 0"
            />
            <textarea
              name="toelichting"
              defaultValue={selected?.toelichting}
              className={field}
              placeholder="Toelichting"
            />
            <input
              name="moeilijkheid"
              type="number"
              min="1"
              max="5"
              defaultValue={selected?.moeilijkheid ?? 1}
              className={field}
            />
            <label className="flex gap-2 text-sm">
              <input
                name="security"
                type="checkbox"
                value="true"
                defaultChecked={selected?.isSecurity}
              />{" "}
              Security/AVG
            </label>
            <button className="rounded-lg bg-bh-blue-900 px-4 py-2.5 text-white">
              Opslaan
            </button>
          </form>
          {selected && (
            <form action={softDelete} className="mt-3">
              <input type="hidden" name="entity" value="question" />
              <input type="hidden" name="id" value={selected.id} />
              <button className="text-sm text-bh-red">Verwijderen</button>
            </form>
          )}
        </section>
      </div>
    </main>
  );
}
