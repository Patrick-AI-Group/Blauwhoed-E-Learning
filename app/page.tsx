import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpenCheck, Bot, LockKeyhole, ShieldCheck, Sparkles } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { SiteFooter } from "@/components/layout/site-footer";
import { brandImages } from "@/lib/brand/images";

const levels = [
  { number: "01", slug: "fundament", title: "Fundament", text: "Veilig starten met AI en met het tenderplatform.", time: "106 min", image: brandImages.fundament },
  { number: "02", slug: "toepassen", title: "Toepassen in je vak", text: "Van documentanalyse tot bewonerscommunicatie.", time: "78 min", image: brandImages.toepassen },
  // Niveau 3 en 4 zijn tijdelijk uitgeschakeld (zie actief in db/content); haal het commentaar weg om ze weer te tonen.
  // { number: "03", slug: "workflows", title: "Workflows en kwaliteit", text: "Bouw herhaalbaar werk dat anderen vertrouwen.", time: "95 min", image: brandImages.workflows },
  // { number: "04", slug: "multiplier", title: "Multiplier", text: "Zet verantwoord AI-gebruik op in je afdeling.", time: "90 min", image: brandImages.multiplier },
];
const pillars = [
  { icon: BookOpenCheck, title: "Leren door te doen", text: "Minimaal zestig procent van je tijd werk je zelf met AI aan geanonimiseerde casussen uit gebiedsontwikkeling." },
  { icon: ShieldCheck, title: "Veiligheid als voorwaarde", text: "Elke niveau sluit af met een securitydeeltoets die je met 100% moet halen. AVG en projectvertrouwelijkheid zitten in ieder onderdeel." },
  { icon: Bot, title: "Oefenen in een veilige omgeving", text: "In de oefenomgeving probeer je prompts en werkwijzen uit op geanonimiseerde casussen, zonder risico voor echte projectdata." },
];

export default function Home() {
  return (
    <main className="bg-bh-canvas">
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="container-page flex h-20 items-center justify-between">
          <Logo href="/" variant="light" />
          <nav className="flex items-center gap-3 text-sm" aria-label="Hoofdnavigatie">
            <Link className="hidden font-semibold text-white/85 hover:text-white md:inline" href="/beleid">AI-beleid</Link>
            <Link className="btn btn-primary btn-sm" href="/dashboard">Inloggen <ArrowRight size={16} /></Link>
          </nav>
        </div>
      </header>

      <section className="relative isolate min-h-[88vh] overflow-hidden bg-bh-blue-900 text-white">
        <Image src={brandImages.hero.src} alt={brandImages.hero.alt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(11,37,69,.95)_0%,rgba(11,37,69,.8)_40%,rgba(11,37,69,.3)_100%)]" aria-hidden />
        <div className="container-page relative grid min-h-[88vh] items-center gap-16 py-32 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-semibold backdrop-blur"><Sparkles size={15} className="text-bh-blue-600" aria-hidden /> Waardevol verbindend sinds 1616</p>
            <h1 className="mt-8 max-w-4xl text-5xl md:text-7xl">AI wordt pas waardevol als je er <span className="text-bh-blue-600">verantwoord</span> mee werkt.</h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">Leer AI praktisch inzetten voor gebiedsontwikkeling. Met echte opdrachten, directe feedback en heldere afspraken over veiligheid en AVG.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/dashboard" className="btn btn-primary">Start met leren <ArrowRight size={18} /></Link>
              <Link href="/beleid" className="btn btn-ghost-light">Lees het AI-beleid</Link>
            </div>
            <dl className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
              {[["2", "niveaus"], ["11", "modules"], ["100%", "veiligheidseis"]].map(([value, label]) => <div key={label}><dt className="text-sm text-white/60">{label}</dt><dd className="text-3xl font-extrabold">{value}</dd></div>)}
            </dl>
          </div>
          <div className="relative hidden lg:block" aria-hidden>
            <div className="card ml-auto max-w-sm rotate-[1.5deg] p-7 text-bh-ink">
              <p className="eyebrow">Volgende stap</p>
              <h2 className="mt-3 text-2xl text-bh-blue-900">Schrijf een betere bewonersbrief</h2>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex gap-3"><ShieldCheck className="shrink-0 text-bh-green" size={18} /> Pas de Blauwhoed-toon toe</li>
                <li className="flex gap-3"><LockKeyhole className="shrink-0 text-bh-blue-600" size={18} /> Werk zonder persoonsgegevens</li>
              </ul>
              <div className="mt-8"><div className="mb-2 flex justify-between text-xs font-semibold text-bh-grey-600"><span>Niveau 1 · Fundament</span><span>68%</span></div><div className="progress"><span style={{ width: "68%" }} /></div></div>
            </div>
            <div className="card absolute -bottom-14 -left-6 w-[12rem] -rotate-[2deg] overflow-hidden text-bh-ink">
              <div className="relative h-28"><Image src={brandImages.waterfront.src} alt="" fill sizes="240px" className="object-cover" /></div>
              <div className="p-4"><p className="text-xs font-bold text-bh-blue-600">Casus · geanonimiseerd</p><p className="mt-1 text-sm font-bold text-bh-blue-900">Participatieverslag analyseren</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-24">
        <div className="mb-14 grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div><p className="eyebrow">Het leerpad</p><h2 className="mt-3 text-4xl text-bh-blue-900 md:text-5xl">Twee niveaus.<br />Eén veilige werkwijze.</h2></div>
          <p className="max-w-xl text-lg text-bh-grey-600">Je begint bij de basis en groeit door tot vakdeskundige die AI zelfstandig en veilig inzet in het eigen werk. Ieder niveau sluit je af met een examen en een certificaat.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {levels.map((level) => (
            <article key={level.number} className="card card-hover group overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image src={level.image.src} alt={level.image.alt} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="img-overlay" />
                <p className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-bh-blue-900">{level.number} · {level.time}</p>
                <h3 className="absolute bottom-5 left-5 right-5 text-2xl text-white">{level.title}</h3>
              </div>
              <div className="p-6"><p className="text-bh-grey-600">{level.text}</p><Link href="/dashboard" className="link-arrow mt-5 text-sm">Bekijk niveau <ArrowRight size={16} /></Link></div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-card"><Image src={brandImages.community.src} alt={brandImages.community.alt} fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" /></div>
            <div className="card absolute -bottom-8 -right-4 max-w-xs p-5 md:-right-8"><p className="eyebrow">Blauwhoed-principe</p><p className="mt-2 font-bold text-bh-blue-900">Jij blijft eigenaar van de output en controleert vóór intern of extern gebruik.</p></div>
          </div>
          <div>
            <p className="eyebrow">Waarom deze Academy</p>
            <h2 className="mt-3 text-4xl text-bh-blue-900 md:text-5xl">Praktijk, veiligheid en vakmanschap.</h2>
            <div className="mt-10 space-y-8">
              {pillars.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-5"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-bh-blue-50 text-bh-blue-600"><Icon size={22} /></span><div><h3 className="text-xl text-bh-blue-900">{title}</h3><p className="mt-2 text-bh-grey-600">{text}</p></div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-bh-blue-600 text-white">
        <div className="pattern-dots absolute inset-0" aria-hidden />
        <div className="container-page relative flex flex-col items-start justify-between gap-8 py-20 md:flex-row md:items-center">
          <div><h2 className="text-3xl md:text-4xl">Klaar om te beginnen?</h2><p className="mt-3 max-w-xl text-white/85">Log in met je Blauwhoed-account. Je voortgang, opdrachten en certificaten staan direct klaar.</p></div>
          <Link href="/dashboard" className="btn btn-white">Naar de Academy <ArrowRight size={18} /></Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
