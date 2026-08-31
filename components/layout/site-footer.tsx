import Link from "next/link";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-bh-blue-900 text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo href="/" variant="light" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">Blauwhoed ontwikkelt vandaag de leefomgevingen van morgen. De AI Academy helpt iedere collega om AI veilig, verantwoord en met vakmanschap in te zetten.</p>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-bh-blue-600">Waardevol verbindend sinds 1616</p>
        </div>
        <div className="text-sm">
          <p className="font-bold">Academy</p>
          <ul className="mt-4 space-y-2.5 text-white/70">
            <li><Link className="hover:text-white" href="/leren">Leerpad</Link></li>
            <li><Link className="hover:text-white" href="/opdrachten">Opdrachten</Link></li>
            <li><Link className="hover:text-white" href="/kennisbank">Kennisbank</Link></li>
            <li><Link className="hover:text-white" href="/certificaten">Certificaten</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-bold">Afspraken</p>
          <ul className="mt-4 space-y-2.5 text-white/70">
            <li><Link className="hover:text-white" href="/beleid">AI-beleid</Link></li>
            <li><Link className="hover:text-white" href="/beleid">Privacystatement</Link></li>
            <li><Link className="hover:text-white" href="/beleid">Disclaimer</Link></li>
            <li><a className="hover:text-white" href="https://www.blauwhoed.nl" target="_blank" rel="noreferrer">blauwhoed.nl</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col justify-between gap-2 py-5 text-xs text-white/50 sm:flex-row"><span>© {new Date().getFullYear()} Blauwhoed · AI Academy</span><span>Ontwikkeld voor medewerkers van Blauwhoed</span></div>
      </div>
    </footer>
  );
}
