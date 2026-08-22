import Link from "next/link";
import { ArrowRight, Check, LockKeyhole, Sparkles } from "lucide-react";

const levels = [
  ["01", "Fundament", "Veilig starten met AI in je dagelijkse werk.", "4 uur"],
  ["02", "Toepassen in je vak", "Van documenten tot bewonerscommunicatie.", "8 uur"],
  ["03", "Workflows en kwaliteit", "Bouw herhaalbaar werk dat anderen vertrouwen.", "10 uur"],
  ["04", "Multiplier", "Zet verantwoord AI-gebruik op in je afdeling.", "10 uur"],
];

export default function Home() {
  return (
    <main>
      <header className="border-b bg-white">
        <div className="container-page flex h-20 items-center justify-between">
          <Link href="/" className="flex items-baseline gap-3 text-bh-blue-900" aria-label="Blauwhoed AI Academy, startpagina">
            <span className="text-xl font-medium tracking-[-0.03em]">BLAUWHOED</span>
            <span className="hidden text-sm text-bh-grey-600 sm:inline">AI Academy</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm" aria-label="Hoofdnavigatie">
            <Link className="hidden hover:text-bh-blue-600 md:block" href="/beleid">AI-beleid</Link>
            <Link className="rounded-lg bg-bh-blue-900 px-5 py-2.5 text-white hover:bg-bh-blue-600" href="/dashboard">Inloggen</Link>
          </nav>
        </div>
      </header>

      <section className="overflow-hidden bg-bh-blue-900 text-white">
        <div className="container-page grid min-h-[620px] items-center gap-16 py-20 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-7 flex items-center gap-2 text-sm text-blue-100"><Sparkles size={16} aria-hidden /> Waardevol verbindend sinds 1616</p>
            <h1 className="max-w-4xl text-balance text-5xl font-normal leading-[1.05] tracking-[-0.04em] md:text-7xl">AI wordt pas waardevol als je er verantwoord mee werkt.</h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-blue-100 md:text-xl">Leer AI praktisch inzetten voor gebiedsontwikkeling. Met echte opdrachten, directe feedback en heldere afspraken over veiligheid en AVG.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/dashboard" className="inline-flex items-center gap-3 rounded-lg bg-white px-6 py-3 font-medium text-bh-blue-900 hover:bg-bh-blue-100">Ga verder met leren <ArrowRight size={18} /></Link>
              <Link href="/beleid" className="inline-flex items-center rounded-lg border border-white/30 px-6 py-3 hover:bg-white/10">Lees het AI-beleid</Link>
            </div>
          </div>

          <div className="relative hidden lg:block" aria-hidden>
            <div className="aspect-[4/5] rounded-lg border border-white/20 bg-[linear-gradient(145deg,rgba(255,255,255,.13),rgba(255,255,255,.02))] p-8">
              <div className="flex h-full flex-col justify-between rounded-lg bg-white p-8 text-bh-ink">
                <div>
                  <p className="text-sm text-bh-grey-600">Volgende stap</p>
                  <h2 className="mt-3 text-3xl font-normal leading-tight text-bh-blue-900">Schrijf een betere bewonersbrief</h2>
                </div>
                <div className="space-y-4 text-sm">
                  <p className="flex gap-3"><Check className="text-bh-green" size={18}/> Pas de Blauwhoed-toon toe</p>
                  <p className="flex gap-3"><LockKeyhole className="text-bh-blue-600" size={18}/> Werk zonder persoonsgegevens</p>
                </div>
                <div>
                  <div className="mb-2 flex justify-between text-xs text-bh-grey-600"><span>Niveau 1</span><span>68%</span></div>
                  <div className="h-1 bg-bh-grey-200"><div className="h-1 w-[68%] bg-bh-blue-600" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-24">
        <div className="mb-14 grid gap-6 md:grid-cols-2">
          <h2 className="text-4xl font-normal tracking-[-0.03em] text-bh-blue-900 md:text-5xl">Vier niveaus.<br/>Eén veilige werkwijze.</h2>
          <p className="max-w-xl text-lg text-bh-grey-600">Je begint bij de basis en groeit door naar workflows en afdelingsbeleid. Minimaal zestig procent van je tijd werk je zelf met AI.</p>
        </div>
        <div className="grid border-t md:grid-cols-2 xl:grid-cols-4">
          {levels.map(([number, title, text, time]) => (
            <article key={number} className="border-b p-7 md:border-r">
              <p className="text-sm text-bh-blue-600">{number} · {time}</p>
              <h3 className="mt-12 text-2xl font-normal text-bh-blue-900">{title}</h3>
              <p className="mt-4 text-bh-grey-600">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t py-8 text-sm text-bh-grey-600">
        <div className="container-page flex flex-col justify-between gap-4 sm:flex-row"><p>© Blauwhoed · AI Academy</p><div className="flex gap-6"><Link href="/beleid">Privacystatement</Link><Link href="/beleid">Disclaimer</Link></div></div>
      </footer>
    </main>
  );
}
