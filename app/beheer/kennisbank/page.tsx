import Link from "next/link";
import { desc, eq, isNull } from "drizzle-orm";
import { db } from "@/db";
import { knowledgeChunks, knowledgeDocuments } from "@/db/schema";
import { saveKnowledgeDocument, softDelete } from "@/lib/actions/admin";
export const dynamic = "force-dynamic";
const field = "rounded-lg border px-3 py-2";
export default async function KnowledgeAdmin({
  searchParams,
}: {
  searchParams: Promise<{ edit?: string }>;
}) {
  const { edit } = await searchParams;
  const items = await db
    .select()
    .from(knowledgeDocuments)
    .where(isNull(knowledgeDocuments.deletedAt))
    .orderBy(desc(knowledgeDocuments.updatedAt));
  const selected = items.find((item) => item.id === edit);
  const chunks = selected
    ? await db
        .select()
        .from(knowledgeChunks)
        .where(eq(knowledgeChunks.documentId, selected.id))
    : [];
  return (
    <main>
      <h1 className="text-4xl text-bh-blue-900">Kennisbank beheren</h1>
      <p className="mt-2 text-bh-grey-600">
        Opslaan maakt direct nieuwe embeddings voor semantisch zoeken en de
        tutor.
      </p>
      <div className="mt-8 grid gap-6 xl:grid-cols-2">
        <section className="rounded-lg border bg-white p-5">
          {items.map((item) => (
            <Link
              key={item.id}
              href={`/beheer/kennisbank?edit=${item.id}`}
              className="block border-b py-3"
            >
              <p className="text-sm text-bh-blue-600">{item.type}</p>
              <h2>{item.titel}</h2>
            </Link>
          ))}
        </section>
        <section className="rounded-lg border bg-white p-6">
          <h2 className="text-xl">
            {selected ? "Document bewerken" : "Document toevoegen"}
          </h2>
          <form action={saveKnowledgeDocument} className="mt-5 grid gap-3">
            <input type="hidden" name="id" value={selected?.id ?? ""} />
            <input
              name="title"
              defaultValue={selected?.titel}
              className={field}
              placeholder="Titel"
              required
            />
            <input
              name="source"
              defaultValue={selected?.bron ?? "Blauwhoed"}
              className={field}
              placeholder="Bron"
              required
            />
            <select
              name="type"
              defaultValue={selected?.type ?? "beleid"}
              className={field}
            >
              <option>beleid</option>
              <option>handleiding</option>
              <option>voorbeeld</option>
            </select>
            <input
              name="url"
              type="url"
              defaultValue={selected?.url ?? ""}
              className={field}
              placeholder="Bron-URL (optioneel)"
            />
            <textarea
              name="content"
              defaultValue={chunks.map((item) => item.inhoud).join("\n\n")}
              className={`${field} min-h-80`}
              placeholder="Volledige goedgekeurde brontekst"
              required
            />
            <button className="rounded-lg bg-bh-blue-900 px-4 py-2.5 text-white">
              Opslaan en indexeren
            </button>
          </form>
          {selected && (
            <form action={softDelete} className="mt-3">
              <input type="hidden" name="entity" value="knowledge_document" />
              <input type="hidden" name="id" value={selected.id} />
              <button className="text-sm text-bh-red">
                Document verwijderen
              </button>
            </form>
          )}
        </section>
      </div>
    </main>
  );
}
