import { Logo } from "./logo";
import { NavLinks } from "./nav-links";
import { getCurrentUser } from "@/lib/auth/current-user";

const links = [["Dashboard", "/dashboard"], ["Leren", "/leren"], ["Opdrachten", "/opdrachten"], ["Oefenen", "/oefenen"], ["Kennisbank", "/kennisbank"], ["Prompts", "/promptbibliotheek"], ["Certificaten", "/certificaten"]] as const;
const adminRoles = new Set(["teamlead", "beoordelaar", "contentbeheerder", "admin"]);

export async function PlatformHeader() {
  const user = await getCurrentUser().catch(() => null);
  const initials = (user?.naam ?? "Blauwhoed medewerker").split(" ").filter(Boolean).slice(0, 2).map((part) => part[0]?.toUpperCase()).join("");
  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-white/85 shadow-[0_1px_0_rgba(11,37,69,0.06)] backdrop-blur-md">
      <div className="container-page flex h-[72px] items-center justify-between gap-6">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Platformnavigatie">
          <NavLinks links={links} />
          {user && adminRoles.has(user.rol) && <NavLinks links={[["Beheer", "/beheer"]]} className="ml-2 border border-bh-grey-200" />}
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden text-xs font-bold tracking-wider text-bh-grey-600 sm:inline">NL</span>
          <div className="flex items-center gap-3 rounded-full border border-bh-grey-200 bg-white py-1 pl-1 pr-4">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-bh-blue-600 text-sm font-bold text-white" aria-hidden>{initials}</span>
            <span className="hidden text-sm font-semibold text-bh-blue-900 md:inline" aria-label={`Ingelogd als ${user?.naam ?? "medewerker"}`}>{user?.naam?.split(" ")[0] ?? "Medewerker"}</span>
          </div>
        </div>
      </div>
      <nav className="container-page flex gap-1 overflow-x-auto pb-2 lg:hidden" aria-label="Platformnavigatie mobiel"><NavLinks links={links} /></nav>
    </header>
  );
}
