import Link from "next/link";
import { authorize } from "@/lib/auth/authorize";
const links = [
  ["Dashboard", "/beheer/dashboard"],
  ["Content", "/beheer/content"],
  ["Vragenbank", "/beheer/vragenbank"],
  ["Opdrachten", "/beheer/opdrachten"],
  ["Kennisbank", "/beheer/kennisbank"],
  ["Gebruikers", "/beheer/gebruikers"],
  ["Beoordelingen", "/beheer/beoordelingen"],
  ["Compliance", "/beheer/compliance"],
  ["Exports", "/beheer/exports"],
];
export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await authorize(["teamlead", "beoordelaar", "contentbeheerder", "admin"]);
  return (
    <div className="min-h-screen bg-bh-sand">
      <header className="border-b bg-bh-blue-900 text-white">
        <div className="container-page flex h-16 items-center justify-between">
          <Link href="/dashboard" className="font-medium">
            BLAUWHOED · Beheer
          </Link>
          <Link href="/dashboard" className="text-sm text-blue-100">
            Terug naar Academy
          </Link>
        </div>
      </header>
      <div className="container-page grid gap-8 py-8 lg:grid-cols-[220px_1fr]">
        <nav
          className="h-fit rounded-lg border bg-white p-3"
          aria-label="Beheernavigatie"
        >
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="block rounded-lg px-4 py-2.5 text-sm hover:bg-bh-blue-100"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div>{children}</div>
      </div>
    </div>
  );
}
