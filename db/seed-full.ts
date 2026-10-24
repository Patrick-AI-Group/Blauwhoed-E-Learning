import OpenAI from "openai";
import { asc } from "drizzle-orm";
import { db } from "./index";
import { assignments, certificates, exams, knowledgeChunks, knowledgeDocuments, lessons, modules, organizations, promptLibrary, questions, tracks } from "./schema";
import type { TrackSeed } from "./content/types";
import fundament from "./content/fundament";
import toepassen from "./content/toepassen";
import workflows from "./content/workflows";
import multiplier from "./content/multiplier";
import { kennisbank } from "./content/kennisbank";
import { prompts } from "./content/prompts";

const trackSeeds: TrackSeed[] = [fundament, toepassen, workflows, multiplier];
const allRoles = ["medewerker", "teamlead", "beoordelaar", "contentbeheerder", "admin"] as const;

function validate() {
  const errors: string[] = [];
  for (const track of trackSeeds) {
    const security = track.questions.filter((q) => q.isSecurity);
    if (security.length < 15) errors.push(`${track.slug}: slechts ${security.length} securityvragen (minimaal 15 nodig voor de deeltoets van 10)`);
    if (track.questions.filter((q) => !q.isSecurity).length < 20) errors.push(`${track.slug}: te weinig toepassingsvragen`);
    for (const [i, q] of track.questions.entries()) {
      const label = `${track.slug} vraag ${i + 1}`;
      if (q.type === "mc" && (!q.opties || typeof q.juist !== "number" || q.juist >= q.opties.length)) errors.push(`${label}: mc vereist opties + juist als geldige index`);
      if (q.type === "meerdere_juist" && (!q.opties || !Array.isArray(q.juist) || q.juist.length === 0)) errors.push(`${label}: meerdere_juist vereist opties + juist als index-array`);
      if (q.type === "waar_onwaar" && typeof q.juist !== "boolean") errors.push(`${label}: waar_onwaar vereist juist als boolean`);
      if (q.type === "scenario_open" && (typeof q.juist !== "string" || q.isSecurity)) errors.push(`${label}: scenario_open vereist modelantwoord-string en mag geen securityvraag zijn`);
    }
    const slugs = new Set(track.modules.map((m) => m.slug));
    for (const a of track.assignments) if (!slugs.has(a.moduleSlug)) errors.push(`${track.slug}: opdracht "${a.titel}" verwijst naar onbekende module "${a.moduleSlug}"`);
    for (const a of track.assignments) { const sum = a.rubric.criteria.reduce((s, c) => s + c.gewicht, 0); if (sum !== 100) errors.push(`${track.slug}: rubric van "${a.titel}" telt op tot ${sum} in plaats van 100`); }
    for (const m of track.modules) if (m.lessons.length < 3) errors.push(`${track.slug}/${m.slug}: minder dan 3 lessen`);
    for (const m of track.modules) { const sum = m.lessons.reduce((s, l) => s + l.geschatteMinuten, 0); if (sum !== m.geschatteMinuten) errors.push(`${track.slug}/${m.slug}: module staat op ${m.geschatteMinuten} min, lessen tellen op tot ${sum}`); }
  }
  if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
}

async function seed() {
  validate();
  const [org] = await db.select().from(organizations).orderBy(asc(organizations.createdAt)).limit(1);
  if (!org) throw new Error("Geen organisatie gevonden; draai eerst db/seed.ts of maak er één aan.");

  // Certificaten verwijzen met `restrict` naar tracks en moeten dus eerst weg.
  await db.delete(certificates);
  await db.delete(tracks);
  await db.delete(knowledgeDocuments);
  await db.delete(promptLibrary);

  let previousTrackId: string | undefined;
  for (const seed of trackSeeds) {
    const [track] = await db.insert(tracks).values({ slug: seed.slug, niveau: seed.niveau, titel: seed.titel, omschrijving: seed.omschrijving, actief: seed.actief ?? true, volgorde: seed.niveau, vereistTrackId: previousTrackId }).returning();
    previousTrackId = track.id;
    const moduleIdBySlug = new Map<string, string>();
    for (const [index, moduleSeed] of seed.modules.entries()) {
      const [module] = await db.insert(modules).values({ trackId: track.id, slug: moduleSeed.slug, titel: moduleSeed.titel, doelen: moduleSeed.doelen, geschatteMinuten: moduleSeed.geschatteMinuten, volgorde: index + 1, isSecurityModule: moduleSeed.isSecurityModule ?? false, gepubliceerdOp: new Date() }).returning();
      moduleIdBySlug.set(moduleSeed.slug, module.id);
      await db.insert(lessons).values(moduleSeed.lessons.map((lesson, lessonIndex) => ({ moduleId: module.id, titel: lesson.titel, type: lesson.type, volgorde: lessonIndex + 1, geschatteMinuten: lesson.geschatteMinuten, content: lesson.content })));
    }
    await db.insert(questions).values(seed.questions.map((q) => ({ trackId: track.id, type: q.type, vraag: q.vraag, opties: q.opties ?? null, juist: q.juist, toelichting: q.toelichting, tags: q.tags, moeilijkheid: q.moeilijkheid, isSecurity: q.isSecurity })));
    await db.insert(assignments).values(seed.assignments.map((a) => ({ moduleId: moduleIdBySlug.get(a.moduleSlug)!, titel: a.titel, opdrachttekst: a.opdrachttekst, moeilijkheid: a.moeilijkheid, type: a.type, rubric: a.rubric, startcontext: a.startcontext, referentieUitwerking: a.referentieUitwerking, beoordeling: a.beoordeling })));
    await db.insert(exams).values([
      { trackId: track.id, titel: `Examen niveau ${seed.niveau} · ${seed.titel}`, aantalVragen: 25, slaagpercentage: 70, tijdslimietMin: 45, vraagverdeling: { security: 40, toepassing: 60 } },
      { trackId: track.id, titel: `Securitydeeltoets niveau ${seed.niveau}`, isSecurityExam: true, aantalVragen: 10, slaagpercentage: 100, tijdslimietMin: 20, maxPogingen: 999, cooldownUren: 0, vraagverdeling: { security: 100 } },
    ]);
    console.log(`✓ ${seed.titel}: ${seed.modules.length} modules, ${seed.modules.reduce((s, m) => s + m.lessons.length, 0)} lessen, ${seed.questions.length} vragen, ${seed.assignments.length} opdrachten`);
  }

  if (!process.env.OPENAI_API_KEY) throw new Error("OPENAI_API_KEY ontbreekt voor kennisbank-embeddings");
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const chunkRows: Array<{ documentId: string; inhoud: string; metadata: { sectie: number; versie: number } }> = [];
  for (const doc of kennisbank) {
    const [inserted] = await db.insert(knowledgeDocuments).values({ titel: doc.titel, bron: doc.bron, type: doc.type, toegestaanVoor: [...allRoles] }).returning();
    doc.chunks.forEach((inhoud, index) => chunkRows.push({ documentId: inserted.id, inhoud, metadata: { sectie: index + 1, versie: 1 } }));
  }
  const response = await openai.embeddings.create({ model: "text-embedding-3-small", input: chunkRows.map((row) => row.inhoud), dimensions: 1536 });
  await db.insert(knowledgeChunks).values(chunkRows.map((row, index) => ({ ...row, embedding: response.data[index].embedding })));
  console.log(`✓ Kennisbank: ${kennisbank.length} documenten, ${chunkRows.length} chunks met embeddings`);

  await db.insert(promptLibrary).values(prompts.map((p, index) => ({ organizationId: org.id, titel: p.titel, prompt: p.prompt, categorie: p.categorie, gedeeld: true, stemmen: Math.max(3, 40 - index * 2) })));
  console.log(`✓ Promptbibliotheek: ${prompts.length} prompts`);
}

seed().then(() => process.exit(0)).catch((error: unknown) => { console.error(error); process.exit(1); });
