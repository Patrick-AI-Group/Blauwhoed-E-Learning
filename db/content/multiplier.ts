import type { TrackSeed } from "./types";

const track: TrackSeed = {
  slug: "multiplier",
  niveau: 4,
  titel: "Multiplier",
  omschrijving: "AI-gebruik in de eigen afdeling opzetten en bewaken.",
  modules: [
    {
      slug: "ai-kansen-scannen",
      titel: "AI-kansen scannen",
      doelen: [
        "Taken in de eigen afdeling systematisch doorlichten op AI-potentieel",
        "AI-kansen prioriteren op impact en risico",
        "Herkennen wanneer een oplossing naar een technologie zoekt in plaats van andersom",
      ],
      geschatteMinuten: 50,
      lessons: [
        {
          titel: "De takeninventarisatie: waar zit het werk echt?",
          type: "tekst",
          geschatteMinuten: 12,
          content: {
            intro:
              "Als multiplier begin je niet bij de tool, maar bij het werk. Een goede kansenscan start met een eerlijke inventarisatie van de taken die jouw afdeling week in, week uit uitvoert. Pas daarna komt de vraag waar AI kan helpen.",
            sections: [
              {
                heading: "Begin bij taken, niet bij functies",
                body:
                  "Een functietitel zegt weinig over AI-potentieel; een taak des te meer. 'Ontwikkelmanager' is geen taak, maar 'wekelijks de voortgangsrapportage voor de stuurgroep samenstellen' wel. Breek daarom het werk van je afdeling op in concrete, terugkerende taken van maximaal een dagdeel. Loop een gemiddelde werkweek na: welke documenten worden geschreven, welke gegevens overgetypt, welke controles handmatig uitgevoerd? Doe dit niet alleen vanachter je bureau. Plan korte gesprekken met collega's en vraag ze de drie taken te noemen waar ze de meeste tijd aan kwijt zijn en de taak waar ze het meest tegen opzien. Juist dat laatste levert vaak de beste kandidaten op: werk dat mensen uitstellen, is vaak werk dat zich goed leent voor ondersteuning. Leg elke taak vast met frequentie, tijdsbesteding en wie hem uitvoert. Die lijst is het fundament van je hele scan.",
                example:
                  "Bij de fictieve afdeling Gebiedsontwikkeling Zuid leverde één week meelopen dertien terugkerende taken op, van 'verslagen van klankbordgroepen uitwerken' (drie uur per sessie) tot 'planningsupdates uit e-mails overzetten naar het projectdossier' (twee uur per week). Geen van beide stond in een functieomschrijving.",
              },
              {
                heading: "Drie signalen van AI-potentieel",
                body:
                  "Niet elke taak leent zich voor AI. Drie signalen wijzen op potentieel. Eén: de taak is repetitief — hij komt vaak terug in vergelijkbare vorm, zoals maandelijkse rapportages of standaardbrieven. Twee: de taak is tekstueel — er wordt geschreven, samengevat, vertaald of gestructureerd, het terrein waar taalmodellen sterk zijn. Drie: de taak is foutgevoelig door menselijke vermoeidheid of tijdsdruk — denk aan het overnemen van gegevens tussen systemen of het controleren van lange stukken op consistentie. Taken die op twee of drie signalen scoren, zet je bovenaan je longlist. Wees tegelijk eerlijk over wat er níet op hoort: taken die draaien om onderhandeling, politiek gevoelige afwegingen of persoonlijk contact met bewoners en kopers. Daar is de menselijke component de kern van het werk, niet de overhead eromheen. AI kan daar hooguit de voorbereiding ondersteunen.",
                example:
                  "Het uitwerken van participatieverslagen scoort op alle drie de signalen: het gebeurt na elke sessie (repetitief), het is schrijfwerk (tekstueel) en bij tijdsdruk vallen kritische minderheidsstandpunten weg (foutgevoelig). Het voeren van het keukentafelgesprek met een bezorgde omwonende scoort op geen enkel signaal.",
              },
              {
                heading: "Van longlist naar shortlist",
                body:
                  "Een goede scan levert eerst een brede longlist op — tien tot twintig taken is normaal voor een afdeling. Daarna volgt de trechter. Schrap eerst de taken met verboden invoer die niet redelijkerwijs te anonimiseren is: alles rond individuele persoonsgegevens, biedstrategieën en grondposities valt af of vraagt eerst een aangepaste werkwijze. Schrap vervolgens taken waar de tijdwinst verwaarloosbaar is: een kwartier per maand automatiseren is de implementatie-inspanning zelden waard. Wat overblijft is je shortlist van drie tot vijf kansen die je in de volgende les gaat prioriteren. Leg per kans vast wat de taak nu kost, wat er mis kan gaan en wie de taak uitvoert. Dat lijkt administratie, maar het is je bewijsmateriaal: zonder deze onderbouwing wordt elk gesprek met je teamlead over prioriteiten een welles-nietesdiscussie op onderbuikgevoel.",
              },
            ],
            takeaway:
              "Een kansenscan begint bij concrete, terugkerende taken en de drie signalen repetitief, tekstueel en foutgevoelig — niet bij een tool die een toepassing zoekt.",
          },
        },
        {
          titel: "Oefening: taken scoren op de drie signalen",
          type: "interactief",
          geschatteMinuten: 13,
          content: {
            intro:
              "Signalen herkennen leer je door te doen. In deze les scoor je zelf een reeks taken uit een fictieve afdeling en vergelijk je jouw oordeel met de uitwerking. Let vooral op de twijfelgevallen: daar zit het leren.",
            sections: [
              {
                heading: "De scoremethode in de praktijk",
                body:
                  "Werk per taak drie vragen af en beantwoord ze met ja, deels of nee. Komt de taak minstens maandelijks terug in vergelijkbare vorm? Bestaat het werk voor meer dan de helft uit tekst verwerken, schrijven of structureren? Ontstaan er in de praktijk fouten door haast, vermoeidheid of onoplettendheid? Tel alleen volmondige ja's mee. Een taak die 'soms een beetje tekstueel' is, krijgt geen punt — die zachtheid is precies hoe wensdenken een scan binnensluipt. Noteer bij elke score één zin onderbouwing, want die dwingt je om verder te kijken dan een eerste indruk. Een taak kan bovendien deelbaar zijn: 'tenderdossier opstellen' scoort als geheel laag, maar het deel 'eisen uit de uitvraag extraheren en groeperen' scoort hoog. Knip samengestelde taken dus op voordat je ze scoort. De beste AI-kansen zitten vaak in een deeltaak, niet in de hele taak.",
              },
              {
                heading: "Scoor mee: zes taken van team Verkoop Rivierzicht",
                body:
                  "Neem het fictieve verkoopteam van project Rivierzicht. Scoor deze zes taken zelf voordat je verder leest: 1) wekelijkse veelgestelde vragen van kopers beantwoorden per e-mail, 2) de VON-prijslijst per woningtype actualiseren, 3) bezichtigingen inplannen met optanten, 4) verslagen van kopersgesprekken samenvatten voor het dossier, 5) de maandelijkse verkooprapportage voor de directie opstellen, 6) een boze koper te woord staan over een opleverdatum. Uitwerking: taken 1, 4 en 5 scoren op alle drie of twee signalen — repetitief tekstwerk waar onder tijdsdruk fouten in sluipen. Taak 3 is repetitief maar nauwelijks tekstueel; agendasoftware helpt hier meer dan een taalmodel. Taak 2 bevat individuele prijsinformatie die niet in een AI-tool thuishoort. Taak 6 is menselijk maatwerk: hier telt empathie, niet efficiëntie.",
                example:
                  "Let op taak 4: kopersgesprekken bevatten persoonsgegevens. De taak scoort hoog op AI-potentieel, maar kan alleen door met geanonimiseerde verslagen te werken — namen vervangen door rollen vóór de AI-stap. Potentieel en randvoorwaarde noteer je allebei.",
              },
              {
                heading: "Veelgemaakte scanfouten",
                body:
                  "Drie fouten zie je bij bijna elke eerste kansenscan. De eerste: de eigen taken overslaan. Multipliers scannen enthousiast het werk van collega's maar vergeten hun eigen rapportages en mailverkeer — begin bij jezelf, dat maakt je geloofwaardig. De tweede: alleen kijken naar tijdwinst en kwaliteitswinst vergeten. Een taak die weinig tijd kost maar waar fouten grote gevolgen hebben, zoals het controleren van besluitenlijsten, kan waardevoller zijn dan een tijdrovende maar onschuldige taak. De derde: de scan als eenmalige actie zien. Werk verandert, tools veranderen, en een taak die vorig jaar afviel kan dit jaar wél kansrijk zijn. Herhaal de scan daarom minstens jaarlijks en na elke grote wijziging in het werkproces. Een verouderde kansenscan geeft schijnzekerheid: je denkt dat je het overzicht hebt, terwijl het werk allang is verschoven.",
                example:
                  "Bij het fictieve team Planontwikkeling Noord bleek de grootste kans niet de meest tijdrovende taak, maar het opstellen van de besluitenlijst na het wekelijkse projectoverleg: twintig minuten werk, maar een gemiste actie kostte er ooit zes weken vertraging in de vergunningsprocedure.",
              },
            ],
            takeaway:
              "Scoor taken streng op repetitief, tekstueel en foutgevoelig, knip samengestelde taken op, en weeg kwaliteitswinst even zwaar als tijdwinst.",
          },
        },
        {
          titel: "Prioriteren op impact en risico",
          type: "tekst",
          geschatteMinuten: 12,
          content: {
            intro:
              "Een shortlist van vijf kansen is geen plan. Prioriteren betekent kiezen wat eerst komt, wat wacht en wat je bewust laat liggen. De twee assen daarvoor zijn impact en risico.",
            sections: [
              {
                heading: "De impact-risicomatrix",
                body:
                  "Zet elke kans op twee assen. Impact: hoeveel tijd of kwaliteit levert het op, voor hoeveel mensen, hoe vaak? Risico: wat kan er misgaan — met persoonsgegevens, met vertrouwelijke projectinformatie, met fouten die extern zichtbaar worden? Zo ontstaan vier kwadranten. Hoge impact, laag risico: hier begin je, dit zijn je startkansen. Hoge impact, hoog risico: hier is de winst groot maar zijn eerst maatregelen nodig, zoals anonimisering, een DPIA-light of extra controle — plan deze als tweede golf. Lage impact, laag risico: prima oefenmateriaal voor collega's die nog moeten wennen, maar geen prioriteit. Lage impact, hoog risico: bewust niet doen, en leg vast wáárom niet, zodat de vraag niet elk kwartaal terugkomt. Presenteer de matrix aan je teamlead als voorstel, niet als voldongen feit: de teamlead kent afwegingen die jij niet ziet, zoals aankomende reorganisaties of lopende gevoeligheden.",
                example:
                  "In de matrix van het fictieve team Tenders & Acquisitie belandde 'eisen extraheren uit openbare uitvraagdocumenten' in het startkwadrant: veel tijdwinst, openbare stukken, laag risico. 'Conceptbiedingen laten aanscherpen door AI' belandde bij bewust-niet-doen: biedstrategieën zijn verboden invoer.",
              },
              {
                heading: "Klein beginnen is een strategie, geen gebrek aan ambitie",
                body:
                  "De verleiding is groot om met de indrukwekkendste kans te starten. Weersta die. Je eerste toepassing als multiplier is ook je visitekaartje: collega's beslissen op basis daarvan of ze AI serieus nemen. Een kleine, zichtbare, snelle winst — een taak die iedereen herkent en waarvan het resultaat binnen weken merkbaar is — bouwt meer vertrouwen dan een groot project dat maanden onzichtbaar blijft. Kies daarom uit het startkwadrant de kans met de kortste tijd tot zichtbaar resultaat. Formuleer vooraf wat 'gelukt' betekent: bijvoorbeeld 'het uitwerken van een verslag kost gemiddeld nog één uur in plaats van drie, bij gelijke kwaliteit volgens de beoordelaar'. Spreek ook een proefperiode af met een vast eindmoment. Zonder einddatum sudderen experimenten eindeloos door en wordt nooit besloten of iets werkt. Een afgeronde proef, ook een mislukte, is meer waard dan drie half lopende.",
              },
              {
                heading: "Herken de omgekeerde route: technologie zoekt probleem",
                body:
                  "De grootste valkuil bij prioriteren is de omgekeerde route: er is een indrukwekkende tool gezien — op een beurs, bij een concurrent, in een demo — en nu wordt er een probleem bij gezocht. Je herkent het aan de volgorde van het gesprek: de oplossing staat vast voordat de taak is geanalyseerd. De vragen die dan sneuvelen zijn precies de belangrijke: welke taak lost dit op, hoe vaak speelt die, wat kost de huidige werkwijze, en zou een eenvoudiger middel — een sjabloon, een afspraak, een bestaande functie in Microsoft 365 — hetzelfde bereiken? Als multiplier is het jouw rol om die vragen wél te stellen, ook als het enthousiasme van een collega of leidinggevende komt. Doe dat niet als scepticus maar als methodische bondgenoot: 'mooi instrument — laten we kijken welke taak uit onze scan hierbij past'. Past er geen taak, dan is dat het antwoord. Een tool zonder taak wordt een abonnement zonder gebruikers.",
                example:
                  "Een projectdirecteur van het fictieve project De Zuidkade zag bij een branche-event een AI-maquettetool en wilde die direct aanschaffen. De kansenscan van de afdeling bevatte geen enkele taak rond visualisatie: dat werk was uitbesteed en liep naar tevredenheid. De aanschaf ging niet door — op basis van de scan, niet van een mening.",
              },
            ],
            takeaway:
              "Prioriteer met de impact-risicomatrix, start met een kleine zichtbare winst, en toets elk tool-enthousiasme aan de taken uit je scan — nooit andersom.",
          },
        },
        {
          titel: "Casus: de kansenscan van team Gebiedsmarketing",
          type: "casus",
          geschatteMinuten: 13,
          content: {
            intro:
              "In deze casus volg je Samira, kersvers multiplier bij het fictieve team Gebiedsmarketing, tijdens haar eerste volledige kansenscan. De casus laat zien hoe de methode uit de vorige lessen in de praktijk schuurt — en hoe je daarmee omgaat.",
            sections: [
              {
                heading: "De aanleiding en de eerste ronde",
                body:
                  "Het fictieve team Gebiedsmarketing (zes personen) verzorgt campagnes, nieuwsbrieven en projectwebsites voor drie woningbouwprojecten. De aanleiding voor de scan is herkenbaar: twee collega's gebruiken al op eigen houtje AI voor teksten, een derde vindt dat 'niks voor ons werk', en de teamlead wil één lijn. Samira begint met individuele gesprekken van twintig minuten per collega en één vraag centraal: waar gaat jouw week écht in zitten? De oogst: zeventien taken, waarvan negen tekstueel. Opvallend is het verschil tussen wat mensen zéggen dat ze doen en wat de agenda laat zien — de nieuwsbrief die 'een uurtje werk' zou zijn, blijkt inclusief afstemming en correctierondes zes uur per editie te kosten. Samira legt alles vast in één overzicht met frequentie en tijdsbesteding, en stuurt dat eerst terug naar het team met de vraag: klopt dit beeld? Die controleronde kost twee dagen en levert drie correcties op — en, belangrijker, het gevoel bij het team dat dit hún scan is.",
                example:
                  "De sceptische collega bleek de meeste tijd kwijt aan het handmatig samenstellen van maandrapportages over websitebezoek en inschrijvingen — repetitief, deels tekstueel en volgens haarzelf 'geestdodend'. Juist haar taak werd een startkans, wat haar houding merkbaar veranderde: de scan ging ineens over haar werkdruk, niet over technologie.",
              },
              {
                heading: "Prioriteren onder druk",
                body:
                  "Bij het prioriteren ontstaat frictie. De teamlead wil het liefst starten met AI voor campagneconcepten — het meest zichtbare, creatieve werk. Samira's matrix wijst een andere kant op: campagneconcepten scoren laag op repetitief en de kwaliteitswinst is onzeker, terwijl twee andere kansen — nieuwsbriefteksten redigeren volgens de schrijfwijzer en maandrapportages structureren — hoog scoren op impact en laag op risico. Samira kiest de aanpak uit de les: ze presenteert de matrix als voorstel en maakt de afweging expliciet. Voor de nieuwsbrief geldt wel een randvoorwaarde: er staan soms quotes van bewoners in. Afspraak wordt dat namen en herkenbare details pas ná de AI-stap worden toegevoegd, conform de richtlijn bewonerscommunicatie. De teamlead gaat akkoord met de twee startkansen, op één voorwaarde: over acht weken een evaluatie met cijfers. Precies wat Samira zelf ook wilde vastleggen.",
                example:
                  "Het campagne-idee verdween niet van tafel maar kreeg een plek in de tweede golf, met een kleinere scope: AI als sparringpartner voor eerste richtingen, waarna het team zelf selecteert en uitwerkt. Zo bleef het enthousiasme behouden zonder dat de scan werd overruled.",
              },
              {
                heading: "Wat deze casus leert",
                body:
                  "Drie lessen uit Samira's scan zijn breder toepasbaar. Ten eerste: de scan is ook een interventie. Alleen al het inventariseren en terugkoppelen veranderde de houding in het team, omdat mensen zich gezien voelden in hun werkelijke werkdruk. Ten tweede: weerstand en enthousiasme zitten zelden waar je ze verwacht. De scepticus werd bondgenoot via haar eigen taak; het risico zat juist bij het enthousiasme van de teamlead voor de verkeerde startkans. Ten derde: randvoorwaarden horen bij de kans, niet erachteraan. Door de anonimiseringsafspraak voor de nieuwsbrief direct bij de prioritering te regelen, voorkwam Samira dat het eerste succes zou worden overschaduwd door een privacyfout. Let ten slotte op wat Samira níet deed: ze koos geen tool, schreef geen businesscase en beloofde geen besparingen. Dat komt in de volgende module. Een scan die direct doorschiet naar oplossingen slaat de stap over die alles draagt: weten waar het werk zit.",
              },
            ],
            takeaway:
              "Een goede kansenscan is samen met het team gemaakt, maakt afwegingen expliciet en regelt randvoorwaarden direct bij de prioritering — nog vóór er over tools wordt gesproken.",
          },
        },
      ],
    },
  ],
  questions: [],
  assignments: [],
};

export default track;
