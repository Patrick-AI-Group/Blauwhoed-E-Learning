import { db } from "./index";
import { assignments, exams, knowledgeDocuments, lessons, modules, organizations, promptLibrary, questions, tracks, users } from "./schema";

const moduleTitles = [
  ["fundament", ["Generatieve AI begrijpen", "Hallucinaties en verificatie", "Basisprompten", "Veiligheid I", "Goedgekeurde tools"]],
  ["toepassen", ["Documenten analyseren", "Schrijven in Blauwhoed-toon", "Data en tabellen", "Vergaderingen", "Veiligheid II: AVG"]],
  ["workflows", ["Promptketens", "Werken met eigen documenten", "Kwaliteitsborging", "Structured output", "Veiligheid III", "AI Act"]],
  ["multiplier", ["AI-kansen scannen", "Businesscase en meetbaarheid", "Verantwoordelijkheden", "DPIA-light", "Collega's begeleiden"]],
] as const;
const trackData = [
  { slug: "fundament", niveau: 1, titel: "Fundament", omschrijving: "Veilig en zinvol AI inzetten in het dagelijkse werk.", volgorde: 1 },
  { slug: "toepassen", niveau: 2, titel: "Toepassen in je vak", omschrijving: "AI inzetten in ontwikkeling, verkoop, financiën, juridisch, HR en directie.", volgorde: 2 },
  { slug: "workflows", niveau: 3, titel: "Workflows en kwaliteit", omschrijving: "Herhaalbaar AI-werk bouwen dat anderen vertrouwen.", volgorde: 3 },
  { slug: "multiplier", niveau: 4, titel: "Multiplier", omschrijving: "AI-gebruik in de eigen afdeling opzetten en bewaken.", volgorde: 4 },
];
const lessonAngles = ["Kernprincipes", "Praktijk in gebiedsontwikkeling", "Veelgemaakte fouten", "Veilige toepassing"];
const assignmentTypes = ["prompt_oefening", "document_analyse", "veiligheidscasus", "workflow", "upload"] as const;

async function seed() {
  const [org] = await db.insert(organizations).values({ clerkOrgId: "org_blauwhoed_demo", naam: "Blauwhoed" }).returning();
  const demoUsers = ["Noor de Wit", "Sven Jansen", "Aisha El Amrani", "Koen Visser", "Lotte Bakker", "Daan Meijer", "Eva Smit", "Milan de Jong"];
  await db.insert(users).values(demoUsers.map((naam, index) => ({ organizationId: org.id, clerkUserId: `demo_${index + 1}`, naam, email: `${naam.toLowerCase().replaceAll(" ", ".")}@example.invalid`, afdeling: ["Ontwikkeling", "Marketing", "Juridisch", "HR"][index % 4], rol: (["medewerker", "teamlead", "beoordelaar", "contentbeheerder", "admin"] as const)[index % 5] })));
  let previousId: string | undefined;
  const allModuleIds: string[] = [];
  for (const trackInput of trackData) {
    const [track] = await db.insert(tracks).values({ ...trackInput, vereistTrackId: previousId }).returning(); previousId = track.id;
    const titles = moduleTitles.find(([slug]) => slug === trackInput.slug)![1];
    for (let m = 0; m < titles.length; m++) {
      const title = titles[m]; const security = title.includes("Veiligheid");
      const [module] = await db.insert(modules).values({ trackId: track.id, slug: title.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""), titel: title, doelen: [`${title.toLowerCase()} toepassen op projecten, tenders en participatie`, "AI-output controleren en verantwoorden"], geschatteMinuten: 45, volgorde: m + 1, isSecurityModule: security }).returning(); allModuleIds.push(module.id);
      await db.insert(lessons).values(lessonAngles.map((angle, l) => ({ moduleId: module.id, titel: `${angle}: ${title}`, type: l === 1 ? "casus" as const : "tekst" as const, volgorde: l + 1, geschatteMinuten: 10, content: { intro: `${title} helpt je om AI doelgericht te gebruiken binnen gebiedsontwikkeling.`, sections: [{ heading: angle, body: `Werk vanuit een duidelijk doel, controleer bron en actualiteit en leg vast welke menselijke afweging nodig blijft. Pas dit toe op een geanonimiseerd project, een participatieverslag of een tender zonder vertrouwelijke gegevens.`, example: `Voorbeeld: beschrijf rol, context, taak en format. Vraag daarna expliciet om aannames en ontbrekende bronnen.` }], takeaway: "Jij blijft eigenaar van de output en controleert voordat informatie intern of extern wordt gebruikt." } })));
    }
    await db.insert(exams).values([{ trackId: track.id, titel: `Examen niveau ${track.niveau}`, aantalVragen: 25, slaagpercentage: 70, tijdslimietMin: 45, vraagverdeling: { security: 40, toepassing: 60 } }, { trackId: track.id, titel: `Securitydeeltoets niveau ${track.niveau}`, isSecurityExam: true, aantalVragen: 10, slaagpercentage: 100, tijdslimietMin: 20, maxPogingen: 999, cooldownUren: 0, vraagverdeling: { security: 100 } }]);
    await db.insert(questions).values(Array.from({ length: 50 }, (_, q) => ({ trackId: track.id, type: "mc" as const, vraag: q < 18 ? `Veiligheidsscenario ${q + 1}: welke stap voorkomt dat vertrouwelijke projectinformatie wordt gedeeld?` : `Toepassingsvraag ${q + 1}: welke aanpak geeft de best controleerbare AI-output voor ${track.titel}?`, opties: ["Anonimiseren, doel begrenzen en bronnen controleren", "Alle ruwe projectdata delen", "De eerste uitvoer direct publiceren", "Controle overslaan bij tijdsdruk"], juist: [0], toelichting: "Anonimiseer, begrens de taak en verifieer de uitkomst altijd.", tags: q < 18 ? ["security", "AVG"] : ["toepassing"], moeilijkheid: 1 + (q % 5), isSecurity: q < 18 })));
  }
  await db.insert(assignments).values(Array.from({ length: 45 }, (_, index) => ({ moduleId: allModuleIds[index % allModuleIds.length], titel: [`Bewonersbrief verbeteren`, `Participatieverslag analyseren`, `Tendercheck uitvoeren`, `Planning samenvatten`, `Afdelingsworkflow ontwerpen`][index % 5] + ` ${index + 1}`, opdrachttekst: `Werk met een geanonimiseerde casus uit gebiedsontwikkeling. Maak een controleerbaar resultaat, benoem aannames en leg uit hoe je persoonsgegevens en projectvertrouwelijkheid beschermt.`, moeilijkheid: 1 + (index % 5), type: assignmentTypes[index % 5], rubric: { criteria: [{ naam: "Promptkwaliteit", gewicht: 30, max: 30, niveaus: { goed: "Rol, context, taak en format zijn helder" } }, { naam: "Vakinhoud", gewicht: 40, max: 40, niveaus: { goed: "Uitvoer is correct en controleerbaar" } }, { naam: "Veiligheid", gewicht: 30, max: 30, niveaus: { goed: "Data is geminimaliseerd en risico's zijn benoemd" } }] }, startcontext: { project: "Project Delta (fictief)", status: "geanonimiseerd" }, referentieUitwerking: "Een sterk resultaat benoemt bronnen, aannames, menselijke controle en veilige vervolgstappen.", beoordeling: index % 5 === 4 ? "handmatig" as const : index % 3 === 0 ? "beide" as const : "ai" as const })));
  const allRoles = ["medewerker", "teamlead", "beoordelaar", "contentbeheerder", "admin"] as const;
  await db.insert(knowledgeDocuments).values(Array.from({ length: 15 }, (_, index) => ({ titel: ["AI-gebruiksbeleid", "Handleiding prompten", "Voorbeeld bewonerscommunicatie"][index % 3] + ` ${index + 1}`, bron: "Blauwhoed AI Academy", type: (["beleid", "handleiding", "voorbeeld"] as const)[index % 3], toegestaanVoor: [...allRoles] })));
  await db.insert(promptLibrary).values(Array.from({ length: 25 }, (_, index) => ({ organizationId: org.id, titel: `Controleerbare projectprompt ${index + 1}`, prompt: "Je bent [rol]. Analyseer de geanonimiseerde context. Geef antwoord als tabel met bron, aanname, risico en vervolgstap.", categorie: ["ontwikkeling", "communicatie", "juridisch", "financien", "HR"][index % 5], gedeeld: true, stemmen: 25 - index })));
}
seed().then(() => process.exit(0)).catch((error: unknown) => { console.error(error); process.exit(1); });
