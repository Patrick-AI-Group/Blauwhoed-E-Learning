# Blauwhoed AI Academy

Intern e-learningplatform voor praktisch, veilig en verantwoord AI-gebruik binnen gebiedsontwikkeling. De applicatie gebruikt Next.js 15, Neon Postgres/Drizzle, Clerk Organizations, Anthropic, OpenAI embeddings, Upstash, Resend en Vercel Blob.

## Architectuur

```text
app/                 App Router-pagina's, server actions en route handlers
components/          toegankelijke UI en de split-view opdrachtwerkplek
db/                  Drizzle-schema, migraties en volledige Nederlandse seed
lib/auth             Clerk-identiteit en server-side rolcontrole
lib/security         PII-detectie en beveiligingsregels
lib/assignments      rubricbeoordeling en gevalideerde Claude-output
lib/exams            server-side score-, security- en timerlogica
tests/unit           Vitest voor gates, scoring en PII
```

Alle voortgang, inzendingen en examens worden server-side opgeslagen. De interactieve examenengine bevriest de vraagset, autosavet ieder antwoord, hervat een open poging en controleert de eindtijd op de server. `/beheer` controleert rollen op de server en biedt CRUD voor modules, rich-textlessen, opdrachten en de vragenbank, plus rollen, reviews, compliance en exports. AI-invoer passeert de lokale PII-guard en Upstash-limieten voordat een externe API wordt aangeroepen.

## Lokaal starten

1. Kopieer `.env.example` naar `.env.local` en vul de accountsleutels in.
2. Activeer Organizations in Clerk en zet `publicMetadata.role` op een ondersteunde rol.
3. Voer `pnpm db:migrate`, `pnpm db:seed` en daarna `pnpm db:ingest` uit. De laatste stap maakt embeddings voor de RAG-kennisbank.
4. Start met `pnpm dev`.

De seed levert 4 tracks, 22 modules, 89 lessen, 46 praktijkopdrachten, 214 examenvragen, 8 examens, 15 kennisdocumenten, 25 voorbeeldprompts en 8 demogebruikers. De demo-e-mailadressen eindigen bewust op `.invalid`.

## Validatie en uitrol

Gebruik `pnpm test` en `pnpm build`. Koppel de repository daarna aan Vercel, voeg dezelfde omgevingsvariabelen toe en gebruik Neon als productie-Postgres. `vercel.json` plant de dagelijkse retentiecontrole. Stel voor productie een eigen Clerk-domein, Microsoft Entra SSO, Resend-domeinvalidatie en Blob-token in.

Na het behalen van alle lessen, opdrachten, het examen en 100% op de securitydeeltoets genereert de Academy automatisch een PDF met QR-code. De PDF gaat naar Vercel Blob en wordt via Resend gemaild. De publieke verificatie toont uitsluitend naam, niveau, datum en geldigheid. Dertig dagen voor verlopen volgt automatisch een hercertificeringsmail. Chattranscripten worden na 12 maanden leeggemaakt en examenpogingen na 24 maanden verwijderd. Certificaten blijven 7 jaar bewaard.
