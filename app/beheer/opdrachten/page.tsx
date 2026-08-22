import Link from "next/link";
import { desc, isNull } from "drizzle-orm";
import { db } from "@/db";
import { assignments, modules } from "@/db/schema";
import { saveAssignment, softDelete } from "@/lib/actions/admin";
export const dynamic = "force-dynamic";
const field = "rounded-lg border px-3 py-2";
export default async function AssignmentAdmin({
  searchParams,
}: {
  searchParams: Promise<{ edit?: string }>;
}) {
  const { edit } = await searchParams;
  const [items, allModules] = await Promise.all([
    db
      .select()
      .from(assignments)
      .where(isNull(assignments.deletedAt))
      .orderBy(desc(assignments.updatedAt)),
    db.select().from(modules).where(isNull(modules.deletedAt)),
  ]);
  const selected = items.find((item) => item.id === edit);
  return (
    <main>
      <h1 className="text-4xl text-bh-blue-900">Opdrachten beheren</h1>
      <div className="mt-8 grid gap-6 xl:grid-cols-2">
        <section className="max-h-[760px] divide-y overflow-auto rounded-lg border bg-white p-5">
          {items.map((item) => (
            <Link
              key={item.id}
              href={`/beheer/opdrachten?edit=${item.id}`}
              className="block py-3"
            >
              <p className="text-sm text-bh-blue-600">
                {item.type} · {item.beoordeling}
              </p>
              <h2>{item.titel}</h2>
            </Link>
          ))}
        </section>
        <section className="rounded-lg border bg-white p-6">
          <h2 className="text-xl">
            {selected ? "Opdracht bewerken" : "Opdracht toevoegen"}
          </h2>
          <form action={saveAssignment} className="mt-5 grid gap-3">
            <input type="hidden" name="id" value={selected?.id ?? ""} />
            <select
              name="moduleId"
              defaultValue={selected?.moduleId}
              className={field}
            >
              {allModules.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.titel}
                </option>
              ))}
            </select>
            <input
              name="titel"
              defaultValue={selected?.titel}
              className={field}
              placeholder="Titel"
            />
            <textarea
              name="opdrachttekst"
              defaultValue={selected?.opdrachttekst}
              className={`${field} min-h-40`}
              placeholder="Volledige opdracht"
            />
            <select
              name="type"
              defaultValue={selected?.type ?? "prompt_oefening"}
              className={field}
            >
              {[
                "prompt_oefening",
                "document_analyse",
                "veiligheidscasus",
                "workflow",
                "upload",
                "reflectie",
              ].map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
            <select
              name="beoordeling"
              defaultValue={selected?.beoordeling ?? "ai"}
              className={field}
            >
              <option>ai</option>
              <option>handmatig</option>
              <option>beide</option>
            </select>
            <div className="grid grid-cols-2 gap-3">
              <input
                name="moeilijkheid"
                type="number"
                min="1"
                max="5"
                defaultValue={selected?.moeilijkheid ?? 1}
                className={field}
              />
              <input
                name="minScore"
                type="number"
                defaultValue={selected?.minScore ?? 70}
                className={field}
              />
            </div>
            <label className="grid gap-1 text-sm">
              Rubric (JSON)
              <textarea
                name="rubric"
                defaultValue={JSON.stringify(
                  selected?.rubric ?? {
                    criteria: [
                      { naam: "Vakinhoud", gewicht: 40, max: 40, niveaus: { goed: "Correct en controleerbaar" } },
                      { naam: "Werkwijze", gewicht: 30, max: 30, niveaus: { goed: "Doelgericht en navolgbaar" } },
                      { naam: "Veiligheid", gewicht: 30, max: 30, niveaus: { goed: "Geen persoonsgegevens en risico's benoemd" } },
                    ],
                  },
                  null,
                  2,
                )}
                className={`${field} min-h-48 font-mono text-xs`}
                required
              />
            </label>
            <button className="rounded-lg bg-bh-blue-900 px-4 py-2.5 text-white">
              Opslaan
            </button>
          </form>
          {selected && (
            <form action={softDelete} className="mt-3">
              <input type="hidden" name="entity" value="assignment" />
              <input type="hidden" name="id" value={selected.id} />
              <button className="text-sm text-bh-red">Verwijderen</button>
            </form>
          )}
        </section>
      </div>
    </main>
  );
}
