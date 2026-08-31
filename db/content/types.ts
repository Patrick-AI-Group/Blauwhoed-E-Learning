import type { Rubric } from "../schema";

/** Inhoud van één les zoals de lespagina die rendert (intro, secties, takeaway). */
export type LessonContent = {
  intro: string;
  sections: Array<{ heading: string; body: string; example?: string }>;
  takeaway: string;
};

export type LessonSeed = {
  titel: string;
  type: "tekst" | "video" | "interactief" | "casus";
  geschatteMinuten: number;
  content: LessonContent;
};

export type ModuleSeed = {
  slug: string;
  titel: string;
  doelen: string[];
  geschatteMinuten: number;
  isSecurityModule?: boolean;
  lessons: LessonSeed[];
};

/**
 * Antwoordformaat per vraagtype (bepaalt de examenscoring, zie lib/actions/exams.ts):
 * - mc: `opties` verplicht, `juist` = index van het juiste antwoord (number)
 * - meerdere_juist: `opties` verplicht, `juist` = array van juiste indexen (number[])
 * - waar_onwaar: geen `opties`, `juist` = boolean (true = "Waar")
 * - scenario_open: geen `opties`, `juist` = modelantwoord (string); nooit isSecurity
 */
export type QuestionSeed = {
  type: "mc" | "meerdere_juist" | "waar_onwaar" | "scenario_open";
  vraag: string;
  opties?: string[];
  juist: number | number[] | boolean | string;
  toelichting: string;
  tags: string[];
  moeilijkheid: 1 | 2 | 3 | 4 | 5;
  isSecurity: boolean;
};

export type AssignmentSeed = {
  moduleSlug: string;
  titel: string;
  opdrachttekst: string;
  moeilijkheid: 1 | 2 | 3 | 4 | 5;
  type: "prompt_oefening" | "document_analyse" | "veiligheidscasus" | "workflow" | "upload" | "reflectie";
  rubric: Rubric;
  startcontext: Record<string, unknown>;
  referentieUitwerking: string;
  beoordeling: "ai" | "handmatig" | "beide";
};

export type TrackSeed = {
  slug: string;
  niveau: 1 | 2 | 3 | 4;
  titel: string;
  omschrijving: string;
  modules: ModuleSeed[];
  questions: QuestionSeed[];
  assignments: AssignmentSeed[];
};
