import { AlertTriangle, Ban, Clock3, Scale, Server } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { brandImages } from "@/lib/brand/images";

const sections = [
  { icon: Ban, title: "Wat nooit in een AI-tool mag", body: "Deel geen persoonsgegevens, koopprijzen per klant, tenderstukken, grondposities, contractvoorwaarden of kandidaatgegevens. Gebruik uitsluitend geanonimiseerde replica's in de Academy." },
  { icon: Server, title: "Waar je invoer heen gaat", body: "Prompts uit opdrachten gaan via onze beveiligde server naar Anthropic. Zoekvragen in de kennisbank worden voor embeddings verwerkt door OpenAI. Sleutels staan alleen op de server. Leveranciers mogen deze gegevens niet gebruiken om hun modellen te trainen." },
  { icon: Clock3, title: "Bewaartermijnen", body: "Chattranscripten bewaren we 12 maanden, examenpogingen 24 maanden en certificaten 7 jaar. Een dagelijkse controle verwijdert gegevens zodra de bewaartermijn eindigt." },
  { icon: AlertTriangle, title: "Meldprocedure", body: "Heb je toch vertrouwelijke informatie gedeeld? Stop direct, maak geen nieuwe kopieën en meld het incident bij de privacycontactpersoon en IT. Een mogelijk datalek wordt binnen 72 uur beoordeeld en waar nodig gemeld." },
  { icon: Scale, title: "Jouw rechten", body: "Je kunt inzage, export of verwijdering aanvragen. Certificaatgegevens met een wettelijke of gerechtvaardigde bewaarplicht worden niet voortijdig verwijderd. Alle afhandeling wordt gelogd." },
];

export default function PolicyPage() {
  return (
    <main>
      <PageHero eyebrow={<span className="text-bh-red">Verplicht beleid</span>} title="Veilig en verantwoord werken met AI." description="Deze afspraken gelden voor iedere medewerker, elke AI-tool en ieder project." image={brandImages.community} compact />
      <div className="container-page grid gap-5 py-12 md:grid-cols-2">
        {sections.map(({ icon: Icon, title, body }, index) => (
          <section key={title} className={`card p-8 ${index === 0 ? "md:col-span-2 border-l-4 border-l-bh-red" : ""}`}>
            <span className={`grid h-11 w-11 place-items-center rounded-xl ${index === 0 ? "bg-red-50 text-bh-red" : "bg-bh-blue-50 text-bh-blue-600"}`}><Icon size={22} /></span>
            <h2 className="mt-5 text-2xl text-bh-blue-900">{title}</h2>
            <p className="mt-3 leading-relaxed text-bh-grey-600">{body}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
