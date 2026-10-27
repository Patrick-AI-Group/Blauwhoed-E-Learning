import { and, eq, isNull } from "drizzle-orm";
import { db } from "./index";
import { assignments, lessons, modules, questions, tracks } from "./schema";
import type { TrackSeed } from "./content/types";
import fundament from "./content/fundament";
import toepassen from "./content/toepassen";
import workflows from "./content/workflows";
import multiplier from "./content/multiplier";

/**
 * Brengt nieuwe en gewijzigde leerstof uit db/content naar de database zonder
 * voortgang, inzendingen of certificaten te wissen (db:seed:full wist alles).
 * Alleen toevoegen en bijwerken: nieuwe modules, lessen, vragen en opdrachten
 * worden ingevoegd; bestaande modules, lessen, vragen (herkend aan de
 * vraagtekst) en opdrachten (herkend aan de titel) krijgen de inhoud uit
 * db/content als die afwijkt. Er wordt nooit iets verwijderd.
 *
 * Standaard een proefrun die alleen toont wat er zou veranderen; pas met
 * --apply wordt er geschreven.
 */
const apply = process.argv.includes("--apply");
const trackSeeds: TrackSeed[] = [fundament, toepassen, workflows, multiplier];

/** jsonb bewaart sleutels in eigen volgorde; vergelijk daarom met gesorteerde sleutels. */
function canonical(value: unknown): string {
  return JSON.stringify(value, (_key, v) => (v && typeof v === "object" && !Array.isArray(v) ? Object.fromEntries(Object.entries(v).sort(([a], [b]) => a.localeCompare(b))) : v));
}

async function sync() {
  for (const seed of trackSeeds) {
    const track = await db.query.tracks.findFirst({ where: eq(tracks.slug, seed.slug) });
    if (!track) { console.warn(`${seed.slug}: track niet gevonden, overgeslagen`); continue; }
    if (track.omschrijving !== seed.omschrijving) {
      console.log(`${seed.slug}: omschrijving bijwerken`);
      if (apply) await db.update(tracks).set({ omschrijving: seed.omschrijving }).where(eq(tracks.id, track.id));
    }

    const moduleIdBySlug = new Map<string, string>();
    for (const [index, moduleSeed] of seed.modules.entries()) {
      const existing = await db.query.modules.findFirst({ where: and(eq(modules.trackId, track.id), eq(modules.slug, moduleSeed.slug)) });
      if (!existing) {
        console.log(`${seed.slug}/${moduleSeed.slug}: nieuwe module met ${moduleSeed.lessons.length} lessen`);
        if (!apply) continue;
        const [module] = await db.insert(modules).values({ trackId: track.id, slug: moduleSeed.slug, titel: moduleSeed.titel, doelen: moduleSeed.doelen, geschatteMinuten: moduleSeed.geschatteMinuten, volgorde: index + 1, isSecurityModule: moduleSeed.isSecurityModule ?? false, gepubliceerdOp: new Date() }).returning();
        moduleIdBySlug.set(moduleSeed.slug, module.id);
        await db.insert(lessons).values(moduleSeed.lessons.map((lesson, lessonIndex) => ({ moduleId: module.id, titel: lesson.titel, type: lesson.type, volgorde: lessonIndex + 1, geschatteMinuten: lesson.geschatteMinuten, content: lesson.content })));
        continue;
      }
      moduleIdBySlug.set(moduleSeed.slug, existing.id);
      const moduleFields = { titel: moduleSeed.titel, doelen: moduleSeed.doelen, geschatteMinuten: moduleSeed.geschatteMinuten };
      if (canonical({ titel: existing.titel, doelen: existing.doelen, geschatteMinuten: existing.geschatteMinuten }) !== canonical(moduleFields)) {
        console.log(`${seed.slug}/${moduleSeed.slug}: titel, doelen of leertijd bijwerken`);
        if (apply) await db.update(modules).set(moduleFields).where(eq(modules.id, existing.id));
      }
      const existingLessons = await db.select().from(lessons).where(and(eq(lessons.moduleId, existing.id), isNull(lessons.deletedAt)));
      for (const [lessonIndex, lesson] of moduleSeed.lessons.entries()) {
        const current = existingLessons.find((row) => row.titel === lesson.titel);
        if (!current) {
          console.log(`${seed.slug}/${moduleSeed.slug}: nieuwe les "${lesson.titel}"`);
          if (apply) await db.insert(lessons).values({ moduleId: existing.id, titel: lesson.titel, type: lesson.type, volgorde: lessonIndex + 1, geschatteMinuten: lesson.geschatteMinuten, content: lesson.content });
        } else if (canonical(current.content) !== canonical(lesson.content)) {
          console.log(`${seed.slug}/${moduleSeed.slug}: inhoud bijwerken van "${lesson.titel}"`);
          if (apply) await db.update(lessons).set({ content: lesson.content, type: lesson.type, geschatteMinuten: lesson.geschatteMinuten }).where(eq(lessons.id, current.id));
        }
      }
    }

    const existingQuestions = await db.select().from(questions).where(and(eq(questions.trackId, track.id), isNull(questions.deletedAt)));
    const questionByText = new Map(existingQuestions.map((row) => [row.vraag, row]));
    const newQuestions = seed.questions.filter((q) => !questionByText.has(q.vraag));
    for (const q of seed.questions) {
      const current = questionByText.get(q.vraag);
      if (!current) continue;
      const fields = { type: q.type, opties: q.opties ?? null, juist: q.juist, toelichting: q.toelichting, tags: q.tags, moeilijkheid: q.moeilijkheid, isSecurity: q.isSecurity };
      if (canonical({ type: current.type, opties: current.opties, juist: current.juist, toelichting: current.toelichting, tags: current.tags, moeilijkheid: current.moeilijkheid, isSecurity: current.isSecurity }) !== canonical(fields)) {
        console.log(`${seed.slug}: examenvraag bijwerken "${q.vraag.slice(0, 60)}…"`);
        if (apply) await db.update(questions).set(fields).where(eq(questions.id, current.id));
      }
    }
    if (newQuestions.length) {
      console.log(`${seed.slug}: ${newQuestions.length} nieuwe examenvragen (${newQuestions.filter((q) => q.isSecurity).length} security)`);
      if (apply) await db.insert(questions).values(newQuestions.map((q) => ({ trackId: track.id, type: q.type, vraag: q.vraag, opties: q.opties ?? null, juist: q.juist, toelichting: q.toelichting, tags: q.tags, moeilijkheid: q.moeilijkheid, isSecurity: q.isSecurity })));
    }

    for (const a of seed.assignments) {
      const moduleId = moduleIdBySlug.get(a.moduleSlug);
      if (moduleId) {
        const existing = await db.query.assignments.findFirst({ where: and(eq(assignments.moduleId, moduleId), eq(assignments.titel, a.titel), isNull(assignments.deletedAt)) });
        if (existing) {
          const fields = { opdrachttekst: a.opdrachttekst, moeilijkheid: a.moeilijkheid, type: a.type, rubric: a.rubric, startcontext: a.startcontext, referentieUitwerking: a.referentieUitwerking, beoordeling: a.beoordeling };
          if (canonical({ opdrachttekst: existing.opdrachttekst, moeilijkheid: existing.moeilijkheid, type: existing.type, rubric: existing.rubric, startcontext: existing.startcontext, referentieUitwerking: existing.referentieUitwerking, beoordeling: existing.beoordeling }) !== canonical(fields)) {
            console.log(`${seed.slug}/${a.moduleSlug}: opdracht bijwerken "${a.titel}"`);
            if (apply) await db.update(assignments).set(fields).where(eq(assignments.id, existing.id));
          }
          continue;
        }
      }
      console.log(`${seed.slug}/${a.moduleSlug}: nieuwe opdracht "${a.titel}"`);
      if (apply && moduleId) await db.insert(assignments).values({ moduleId, titel: a.titel, opdrachttekst: a.opdrachttekst, moeilijkheid: a.moeilijkheid, type: a.type, rubric: a.rubric, startcontext: a.startcontext, referentieUitwerking: a.referentieUitwerking, beoordeling: a.beoordeling });
    }
  }
  console.log(apply ? "Klaar." : "Proefrun: er is niets geschreven. Draai met --apply om door te voeren.");
}

sync().then(() => process.exit(0)).catch((error) => { console.error(error); process.exit(1); });
