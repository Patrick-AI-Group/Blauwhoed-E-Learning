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

Alle voortgang, inzendingen en examens worden server-side opgeslagen. `/beheer` controleert rollen op de server. AI-invoer passeert de lokale PII-guard en Upstash-limieten voordat een externe API wordt aangeroepen.

## Lokaal starten

1. Kopieer `.env.example` naar `.env.local` en vul de accountsleutels in.
2. Activeer Organizations in Clerk en zet `publicMetadata.role` op een ondersteunde rol.
3. Voer `pnpm db:migrate` en daarna `pnpm db:seed` uit.
4. Start met `pnpm dev`.

De seed levert 4 tracks, 21 modules, 84 lessen, 45 praktijkopdrachten, 200 examenvragen, 8 examens, 15 kennisdocumenten, 25 voorbeeldprompts en 8 demogebruikers. De demo-e-mailadressen eindigen bewust op `.invalid`.

## Validatie en uitrol

Gebruik `pnpm test` en `pnpm build`. Koppel de repository daarna aan Vercel, voeg dezelfde omgevingsvariabelen toe en gebruik Neon als productie-Postgres. `vercel.json` plant de dagelijkse retentiecontrole. Stel voor productie een eigen Clerk-domein, Microsoft Entra SSO, Resend-domeinvalidatie en Blob-token in.

Certificaat-PDF's en uploads zijn ontworpen voor private Vercel Blob-opslag; publieke verificatie toont uitsluitend naam, niveau, datum en geldigheid. Chattranscripten worden na 12 maanden leeggemaakt en examenpogingen na 24 maanden verwijderd. Certificaten blijven 7 jaar bewaard.
