import Link from "next/link";
import { and, desc, eq } from "drizzle-orm";
import { ArrowLeft, ClipboardCheck } from "lucide-react";
import { notFound } from "next/navigation";
import { db } from "@/db";
import { assignmentSubmissions, assignments } from "@/db/schema";
import { getCurrentUser } from "@/lib/auth/current-user";
import { AssignmentWorkspace } from "@/components/ui/assignment-workspace";

export const dynamic = "force-dynamic";
export default async function AssignmentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const [assignment, user] = await Promise.all([db.query.assignments.findFirst({ where: eq(assignments.id, id) }), getCurrentUser()]);
  if (!assignment || !user) notFound();
  let submission = await db.query.assignmentSubmissions.findFirst({ where: and(eq(assignmentSubmissions.assignmentId, id), eq(assignmentSubmissions.userId, user.id)), orderBy: desc(assignmentSubmissions.poging) });
  if (!submission) [submission] = await db.insert(assignmentSubmissions).values({ assignmentId: id, userId: user.id }).returning();
  const rubric = assignment.rubric;
  return (
    <main className="container-page grid gap-6 py-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
      <section>
        <Link href="/opdrachten" className="link-arrow text-sm"><ArrowLeft size={15} /> Alle opdrachten</Link>
        <p className="mt-6 inline-flex items-center gap-3"><span className="pill bg-bh-blue-50 capitalize text-bh-blue-700">{assignment.type.replaceAll("_", " ")}</span><span className="text-sm text-bh-grey-600">Moeilijkheid {assignment.moeilijkheid}/5</span></p>
        <h1 className="mt-4 text-4xl text-bh-blue-900">{assignment.titel}</h1>
        <p className="mt-6 whitespace-pre-line text-lg leading-relaxed">{assignment.opdrachttekst}</p>
        <div className="card mt-8 p-6">
          <h2 className="inline-flex items-center gap-2 text-lg text-bh-blue-900"><ClipboardCheck size={20} className="text-bh-blue-600" /> Hier letten we op</h2>
          <ul className="mt-4 divide-y text-sm">{rubric.criteria.map((criterion) => <li key={criterion.naam} className="flex justify-between gap-4 py-3"><span className="font-semibold">{criterion.naam}</span><span className="font-bold text-bh-blue-600">{criterion.gewicht}%</span></li>)}</ul>
        </div>
      </section>
      <section className="card overflow-hidden lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)]">
        <AssignmentWorkspace submissionId={submission.id} initialTranscript={(submission.transcript as Array<{ role: "user" | "assistant"; content: string }>).map(({ role, content }) => ({ role, content }))} />
      </section>
    </main>
  );
}
