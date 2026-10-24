import { and, eq } from "drizzle-orm";
import { db } from "./index";
import { lessons, modules, tracks } from "./schema";
import fundament from "./content/fundament";
import toepassen from "./content/toepassen";
import workflows from "./content/workflows";
import multiplier from "./content/multiplier";

/** Zet de geschatte leertijden in de database gelijk aan db/content, zonder voortgang of certificaten te wissen. */
async function sync() {
  for (const seed of [fundament, toepassen, workflows, multiplier]) {
    const track = await db.query.tracks.findFirst({ where: eq(tracks.slug, seed.slug) });
    if (!track) { console.warn(`${seed.slug}: track niet gevonden, overgeslagen`); continue; }
    for (const moduleSeed of seed.modules) {
      const [module] = await db.update(modules).set({ geschatteMinuten: moduleSeed.geschatteMinuten }).where(and(eq(modules.trackId, track.id), eq(modules.slug, moduleSeed.slug))).returning({ id: modules.id });
      if (!module) { console.warn(`${seed.slug}/${moduleSeed.slug}: module niet gevonden`); continue; }
      for (const lesson of moduleSeed.lessons) {
        const updated = await db.update(lessons).set({ geschatteMinuten: lesson.geschatteMinuten }).where(and(eq(lessons.moduleId, module.id), eq(lessons.titel, lesson.titel))).returning({ id: lessons.id });
        if (!updated.length) console.warn(`${seed.slug}/${moduleSeed.slug}: les "${lesson.titel}" niet gevonden`);
      }
    }
    console.log(`${seed.slug}: ${seed.modules.reduce((sum, m) => sum + m.geschatteMinuten, 0)} minuten`);
  }
}

sync().then(() => process.exit(0)).catch((error) => { console.error(error); process.exit(1); });
