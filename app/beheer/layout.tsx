import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { authorize } from "@/lib/auth/authorize";
import { Logo } from "@/components/layout/logo";
import { NavLinks } from "@/components/layout/nav-links";

const links = [["Dashboard", "/beheer/dashboard"], ["Content", "/beheer/content"], ["Vragenbank", "/beheer/vragenbank"], ["Opdrachten", "/beheer/opdrachten"], ["Kennisbank", "/beheer/kennisbank"], ["Gebruikers", "/beheer/gebruikers"], ["Beoordelingen", "/beheer/beoordelingen"], ["Compliance", "/beheer/compliance"], ["Exports", "/beheer/exports"]] as const;

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  await authorize(["teamlead", "beoordelaar", "contentbeheerder", "admin"]);
  return (
    <div className="min-h-screen bg-bh-canvas">
      <header className="bg-bh-blue-900 text-white">
        <div className="container-page flex h-[72px] items-center justify-between">
          <Logo variant="light" subtitle="Beheer" />
          <Link href="/dashboard" className="btn btn-ghost-light btn-sm"><ArrowLeft size={15} /> Terug naar Academy</Link>
        </div>
      </header>
      <div className="container-page grid gap-8 py-8 lg:grid-cols-[230px_1fr]">
        <nav className="card flex h-fit flex-row flex-wrap gap-1 p-2 lg:sticky lg:top-6 lg:flex-col" aria-label="Beheernavigatie"><NavLinks links={links} className="!rounded-xl" /></nav>
        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
}
