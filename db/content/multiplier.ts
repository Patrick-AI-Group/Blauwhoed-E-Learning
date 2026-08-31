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
                  "Neem het fictieve verkoopteam van project Rivierzicht. Scoor deze zes taken zelf voordat je verder leest: 1) wekelijkse veelgestelde vragen van kopers beantwoorden per e-mail, 2) de VON-prijslijst per woningtype actualiseren, 3) bezichtigingen inplannen met optanten, 4) verslagen van kopersgesprekken samenvatten voor het dossier, 5) de maandelijkse verkooprapportage voor de directie opstellen, 6) een boze koper te woord staan over een opleverdatum. Uitwerking: taken 1, 4 en 5 scoren op alle drie of twee signalen — repetitief tekstwerk waar onder tijdsdruk fouten in sluipen. Taak 3 is repetitief maar nauwelijks tekstueel; agendasoftware helpt hier meer dan een taalmodel. Taak 2 bevat individuele prijsinformatie die niet in een AI-tool thuishoort. Taak 6 is menselijk maatwerk: hier telt empathie, niet efficiëntie. Vergelijk je eigen scores met deze uitwerking en analyseer vooral de plekken waar je afweek — daar zit je leerwinst.",
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
    {
      slug: "businesscase-en-meetbaarheid",
      titel: "Businesscase en meetbaarheid",
      doelen: [
        "Baten van een AI-toepassing kwantificeren met realistische bandbreedtes",
        "Alle kostenposten van een AI-toepassing volledig in beeld brengen",
        "Meetcriteria en evaluatiemomenten vooraf vastleggen en eerlijk concluderen bij tegenvallende resultaten",
      ],
      geschatteMinuten: 50,
      lessons: [
        {
          titel: "Baten kwantificeren zonder jezelf rijk te rekenen",
          type: "tekst",
          geschatteMinuten: 13,
          content: {
            intro:
              "Een businesscase voor AI staat of valt met geloofwaardige baten. De verleiding is groot om met grote getallen te zwaaien; de kunst is om klein en hard te rekenen, met bandbreedtes die je kunt verdedigen.",
            sections: [
              {
                heading: "Van uren naar euro's, in bandbreedtes",
                body:
                  "De basisrekensom is eenvoudig: hoeveel tijd kost de taak nu, hoeveel na de AI-ondersteuning, hoe vaak komt hij voor en wat kost een uur? Maar elk van die getallen is een schatting, en schattingen verdienen bandbreedtes. Reken daarom drie scenario's door: voorzichtig, verwacht en gunstig. In het voorzichtige scenario neem je de laagste tijdwinst die je in een proef hebt gezien, in het gunstige de hoogste. Presenteer altijd alle drie — een businesscase die alleen het gunstige scenario toont, is reclame, geen analyse. Wees ook precies over wat tijdwinst betekent: een uur dat vrijvalt is pas een baat als het aan iets nuttigs wordt besteed. 'De afdeling bespaart 400 uur per jaar' klinkt goed, maar de eerlijke formulering is: 'er komt 400 uur vrij voor werk dat nu blijft liggen, zoals locatiebezoeken en kwaliteitscontroles'. Baseer je getallen op een echte meting bij een kleine proef, nooit op leveranciersbeloftes of branchegemiddelden.",
                example:
                  "Voor het samenvatten van klankbordverslagen bij het fictieve project De Houtwal mat een proef van vier weken: uitwerktijd van gemiddeld 180 naar 55-80 minuten per verslag, bij 30 verslagen per jaar. Voorzichtig scenario: 50 uur per jaar vrijgespeeld. Gunstig: 62 uur. Dat is de bandbreedte die in de businesscase kwam — niet de '80% tijdwinst' uit de demo van de leverancier.",
              },
              {
                heading: "Kwaliteitsbaten: moeilijker meetbaar, vaak waardevoller",
                body:
                  "Naast tijd zijn er kwaliteitsbaten: minder fouten, consistentere teksten, snellere reactietijden, vollediger dossiers. Die zijn lastiger in euro's te vatten, maar negeer ze niet — ze zijn vaak de werkelijke reden dat een toepassing waardevol is. Maak ze meetbaar door een indicator te kiezen die je nu al kunt vaststellen: het aantal correctierondes per document, het percentage brieven dat de eindredactie zonder wijzigingen passeert, de doorlooptijd van vraag tot antwoord bij kopersvragen. Meet die indicator vóór de invoering (de nulmeting) en tijdens de proef. Wees eerlijk over wat je níet kunt meten: 'klanttevredenheid stijgt' is zonder meting een hoop, geen baat. En noem ook de mogelijke kwaliteitskósten: AI-teksten kunnen uniformer en vlakker worden, en gemakzuchtige controle kan fouten juist láten toenemen. Een businesscase die alleen positieve effecten kent, wekt terecht wantrouwen bij degene die hem moet goedkeuren.",
                example:
                  "Bij het fictieve verkoopteam van Rivierzicht was de echte baat niet de bespaarde schrijftijd, maar de reactietijd op kopersvragen: die daalde in de proef van gemiddeld vier werkdagen naar één. Dat werd de hoofdbaat in de businesscase, met de nulmeting als bewijs.",
              },
              {
                heading: "De vergelijking die vaak wordt overgeslagen",
                body:
                  "Elke businesscase vergelijkt minimaal twee opties: de AI-toepassing en niets doen. Maar er is bijna altijd een derde optie die wordt overgeslagen: het eenvoudige alternatief. Een beter sjabloon, een gedeelde voorbeeldbibliotheek, een afspraak over wie wat controleert, een bestaande functie in Microsoft 365 — soms levert dat tachtig procent van de winst tegen vijf procent van de moeite. Neem dat alternatief serieus op in je businesscase en reken het even zorgvuldig door. Dit versterkt je verhaal op twee manieren. Wint AI de vergelijking, dan is je case overtuigender omdat je hebt laten zien dat je niet verliefd bent op de technologie. Wint het eenvoudige alternatief, dan heb je de afdeling een dure omweg bespaard — en dat is als multiplier net zo goed een succes. De vraag is nooit 'kan AI dit?', maar 'is AI hier het beste middel?'. Wie die vraag stelselmatig stelt, bouwt het vertrouwen op dat nodig is voor de kansen waar AI wél het antwoord is.",
              },
            ],
            takeaway:
              "Kwantificeer baten in drie scenario's op basis van echte metingen, maak kwaliteitsbaten meetbaar met een nulmeting, en reken het eenvoudige alternatief altijd mee.",
          },
        },
        {
          titel: "De volledige kostenkant: meer dan een licentie",
          type: "tekst",
          geschatteMinuten: 12,
          content: {
            intro:
              "De kostenkant van een AI-businesscase wordt stelselmatig onderschat, omdat alleen de licentie zichtbaar op de factuur staat. De grootste posten zitten in mensen: implementatie, training en beheer.",
            sections: [
              {
                heading: "De vier kostencategorieën",
                body:
                  "Breng kosten in vier categorieën in beeld. Eén: licenties en gebruikskosten — abonnementen per gebruiker, maar bij API-gebruik ook variabele kosten per verwerkte tekst, die met het gebruik meegroeien. Twee: implementatie — de uren om de toepassing in te richten, prompts en werkstromen te ontwikkelen, de aansluiting op bestaande systemen en de toetsing door IT en de privacycontactpersoon, inclusief een eventuele DPIA-light. Drie: training — niet alleen de instructiesessie zelf, maar ook de productiviteitsdip in de eerste weken en jouw eigen begeleidingsuren als multiplier. Vier: beheer — het actueel houden van prompts en werkafspraken, het periodiek controleren van de kwaliteit, het opvangen van wijzigingen als de leverancier het model aanpast, en de jaarlijkse herbeoordeling. Reken interne uren tegen een reëel uurtarief mee. Een businesscase waarin de eigen uren gratis zijn, vergelijkt appels met peren: de baten zijn wél in uren uitgedrukt.",
                example:
                  "Voor de fictieve rapportage-assistent van team Gebiedsmarketing was de licentie 2.400 euro per jaar — maar implementatie (40 uur), training (16 uur plus dip) en beheer (4 uur per maand) maakten de werkelijke jaarlast in jaar één ruim drie keer zo hoog. De case bleef positief, maar met een terugverdientijd van veertien maanden in plaats van de aanvankelijk geschatte vier.",
              },
              {
                heading: "Verborgen en eenmalige kosten",
                body:
                  "Naast de vier categorieën zijn er posten die zich pas later melden. Aanpassingskosten: als de toepassing werkprocessen raakt, moeten sjablonen, handboeken en afspraken mee veranderen. Afhankelijkheidskosten: hoe dieper een tool in het werk zit, hoe duurder het wordt om er ooit weer vanaf te gaan — vraag daarom vooraf hoe je data en werkstromen exporteerbaar blijven. Foutkosten: reserveer ruimte voor het herstellen van fouten die in de leerperiode ontstaan, want die periode ís er altijd. En stopzettingskosten: als de evaluatie negatief uitvalt, kost het terugdraaien ook tijd. Door deze posten vooraf te benoemen, voorkom je twee problemen. Je businesscase klapt niet om bij de eerste tegenvaller, en je bouwt geloofwaardigheid op bij financiën en directie: wie zijn eigen risico's benoemt, hoeft niet gecontroleerd te worden op wat hij verzwijgt. Rond af naar boven bij twijfel — een case die met eerlijke kosten nog steeds positief is, staat als een huis.",
              },
              {
                heading: "De éénpagina-businesscase",
                body:
                  "Voor afdelingskansen volstaat bij Blauwhoed een businesscase van één pagina, met zes vaste onderdelen. De taak: wat wordt ondersteund, hoe vaak, door wie. De huidige situatie: tijdsbesteding en knelpunten, onderbouwd met de nulmeting. De baten: drie scenario's met bandbreedte, plus kwaliteitsbaten met indicator. De kosten: alle vier categorieën, jaar één en structureel. De risico's en maatregelen: wat kan misgaan en wat is geregeld, inclusief de uitkomst of noodzaak van een DPIA-light. En de meetafspraak: welke criteria, wanneer geëvalueerd, wie beslist. Eén pagina dwingt tot keuzes en maakt de case leesbaar voor een teamlead die tien minuten heeft. De onderbouwing — metingen, berekeningen, offertes — komt in een bijlage voor wie doorvraagt. Schrijf in de toon van de schrijfwijzer: concrete getallen, actieve zinnen, onzekerheden benoemd. Een businesscase is geen verkoopdocument maar een beslisdocument; hij is geslaagd als de lezer een geïnformeerd besluit kan nemen, ook als dat besluit 'nee' is.",
                example:
                  "De éénpager voor de fictieve verslagassistent van De Houtwal eindigde met de zin: 'Bij minder dan 30% tijdwinst in week acht stoppen we en schrijven we de implementatie-uren af.' Juist die zin overtuigde de teamlead: de case had een rem, niet alleen een gaspedaal.",
              },
            ],
            takeaway:
              "Reken licenties, implementatie, training én beheer volledig mee tegen reële uurtarieven, benoem verborgen kosten vooraf, en vat alles samen op één beslisbare pagina.",
          },
        },
        {
          titel: "Meetcriteria en evaluatiemomenten vastleggen",
          type: "interactief",
          geschatteMinuten: 12,
          content: {
            intro:
              "Wat je niet vooraf afspreekt, kun je achteraf niet eerlijk beoordelen. In deze les formuleer je zelf meetcriteria en evaluatiemomenten voor een fictieve toepassing, en toets je ze aan de valkuilen.",
            sections: [
              {
                heading: "Goede meetcriteria: vooraf, meetbaar, met een drempel",
                body:
                  "Een bruikbaar meetcriterium heeft drie eigenschappen. Het is vóóraf vastgelegd — een criterium dat na afloop wordt gekozen, wordt altijd zo gekozen dat het resultaat er goed uitziet. Het is meetbaar zonder discussie — 'de kwaliteit is beter' is geen criterium, 'het percentage verslagen dat de beoordelaar zonder correctie goedkeurt stijgt van 60 naar minstens 80 procent' wel. En het heeft een drempel met consequentie: welke waarde betekent doorgaan, welke betekent bijsturen, welke betekent stoppen. Kies per toepassing twee tot vier criteria, nooit meer: een dashboard vol cijfers verhult de kernvraag. Combineer altijd minstens één gebruikscriterium (wordt het gebruikt, door hoeveel collega's, hoe vaak) met minstens één kwaliteitscriterium (klopt de output, hoeveel correctie is nodig). Gebruik zonder kwaliteit is een risico; kwaliteit zonder gebruik is een hobby. Oefen nu zelf: formuleer twee criteria voor een fictieve AI-assistent die kopersvragen van standaardantwoorden voorziet, en check ze op de drie eigenschappen.",
                example:
                  "Sterke uitwerking voor de kopersvragen-assistent: 1) 'In week zes gebruikt minstens vier van de zes teamleden de assistent bij minimaal de helft van de vragen.' 2) 'Minstens 90% van de conceptantwoorden is na één menselijke controle verzendklaar; elke feitelijke fout wordt gelogd.' Zwakke uitwerking: 'het team is tevreden en de antwoorden zijn goed'.",
              },
              {
                heading: "Evaluatiemomenten met beslisruimte",
                body:
                  "Plan bij de start drie momenten in. Een eerste peiling na twee tot drie weken: werkt het praktisch, lopen collega's ergens op vast, zijn er onverwachte risico's? Dit moment is voor bijsturen, niet voor oordelen — de leerdip zit hier op zijn diepst. De hoofdevaluatie na zes tot tien weken: hier worden de criteria langs de meetlat gelegd en valt het besluit doorgaan, aanpassen of stoppen. En een bestendigingscheck na zes tot twaalf maanden: wordt het nog gebruikt, is de kwaliteit op peil gebleven, kloppen de aannames uit de businesscase nog? Leg per moment vast wie erbij zijn en wie beslist — doorgaans beslist de teamlead, op basis van jouw meetrapport. Zet de momenten direct in de agenda bij de start. Een evaluatie die 'nog gepland moet worden' verdampt in de waan van de dag, en een toepassing zonder evaluatie wordt vanzelf permanent — niet omdat hij werkt, maar omdat niemand meer kijkt.",
              },
              {
                heading: "Eerlijk stoppen is een competentie",
                body:
                  "Het moeilijkste moment in elke businesscase is de evaluatie die tegenvalt. De criteria worden niet gehaald, maar er is al geïnvesteerd: uren, budget, enthousiasme, jouw eigen geloofwaardigheid. De reflex is verlengen — 'nog een paar weken, het moet nog inslijten'. Soms is dat terecht, maar spreek dan een harde grens af: één verlenging, met een concreet verbeterplan en dezelfde criteria. Wordt de drempel daarna weer niet gehaald, dan stop je. Behandel de eerder gemaakte kosten als wat ze zijn: gemaakt en onomkeerbaar. De enige vraag die telt is of dóórgaan vanaf vandaag meer oplevert dan kost. Een multiplier die zichtbaar durft te stoppen, wint op lange termijn: het team leert dat proeven echte proeven zijn, en de volgende businesscase wordt serieuzer genomen omdat iedereen weet dat een 'ja' verdiend moet worden. Documenteer bij een stop altijd de lessen: wat is geleerd over de taak, de tool en het team? Die kennis is de restwaarde van elke gestopte proef.",
                example:
                  "Bij het fictieve team Planeconomie haalde een AI-hulp voor grondexploitatie-toelichtingen na tien weken 25% tijdwinst in plaats van de afgesproken 40%. Eén verlenging met betere prompts bracht het naar 30%. Het team stopte conform afspraak — en hergebruikte de geleerde promptaanpak later met succes voor een andere taak: rapportagesamenvattingen.",
              },
            ],
            takeaway:
              "Leg vooraf twee tot vier meetbare criteria met drempels vast, plan drie evaluatiemomenten met een beslisser, en durf te stoppen als de afgesproken drempel niet wordt gehaald.",
          },
        },
        {
          titel: "Casus: de businesscase die sneuvelde",
          type: "casus",
          geschatteMinuten: 13,
          content: {
            intro:
              "Niet elke goede businesscase eindigt in een goedkeuring — en niet elke afwijzing is een verlies. In deze casus schrijft multiplier Jeroen een businesscase voor het fictieve team Kopersbegeleiding, en leert hij het meest van wat er misgaat.",
            sections: [
              {
                heading: "Een sterke kans, een zwakke eerste versie",
                body:
                  "Het fictieve team Kopersbegeleiding van project De Zuidkade beantwoordt wekelijks tientallen vragen van kopers over meerwerk, opleverdata en garanties. Uit Jeroens kansenscan kwam deze taak als beste kans: repetitief, tekstueel en foutgevoelig, want onder druk worden weleens verouderde opleverdata gemaild. Zijn eerste businesscase-versie was in een avond klaar en rekende zich rijk: 'twee uur winst per medewerker per dag' — overgenomen uit een webinar van een toolleverancier — maal vijf medewerkers maal 220 werkdagen. Geen nulmeting, geen bandbreedte, kosten beperkt tot de licentie. De teamlead las hem welwillend maar stelde drie vragen: waar komen die twee uur vandaan, wat kost jouw eigen tijd, en wat doen we als het niet werkt? Op geen van de drie had Jeroen een antwoord. De case ging terug de la in — terecht, erkende hij later. Het pijnlijkste inzicht: hij had precies de fout gemaakt waar hij collega's voor moest behoeden, en het gunstige scenario als feit gepresenteerd.",
                example:
                  "De nulmeting die Jeroen alsnog uitvoerde gaf een ander beeld dan het webinar: kopersvragen kostten het team geen twee uur per persoon per dag, maar gemiddeld vijf uur per week voor het hele team. De taak bleef kansrijk, maar de batenpost werd bijna tien keer kleiner dan in versie één.",
              },
              {
                heading: "Versie twee: kleiner, harder, eerlijker",
                body:
                  "Voor de tweede versie volgde Jeroen de methode. Vier weken nulmeting: aantal vragen, tijd per antwoord, aantal fouten (drie verouderde data in vier weken, waarvan één tot een klacht leidde). Een proef met twee collega's en een goedgekeurde tool, met geanonimiseerde vragen. Resultaat: antwoordtijd van gemiddeld 22 naar 9-12 minuten, en — onverwacht — nul feitelijke fouten, omdat de werkstroom een verplichte controle van opleverdata in het projectsysteem bevatte. De baten in drie scenario's: 90 tot 140 uur per jaar, plus de kwaliteitsbaat 'geen verouderde data meer verzonden'. De kosten volledig: licentie, 32 uur implementatie, training, 3 uur beheer per maand. Terugverdientijd in het voorzichtige scenario: elf maanden. Meetafspraak: evaluatie in week acht, drempel 40% tijdwinst en maximaal één fout per kwartaal, beslisser de teamlead. De case besloeg één pagina. De teamlead keurde hem in één overleg goed.",
              },
              {
                heading: "De evaluatie en de les",
                body:
                  "De week-acht-evaluatie leverde een gemengd beeld: tijdwinst 45%, dus boven de drempel — maar het gebruik bleef steken bij drie van de vijf collega's. De twee anderen vonden de werkstroom omslachtig en waren teruggevallen op de oude werkwijze. Hier bewees de vooraf gemaakte meetafspraak zijn waarde: omdat 'gebruik door minstens vier collega's' als criterium was vastgelegd, kon niemand het probleem wegwuiven met de mooie tijdwinstcijfers. Het besluit werd: één verlenging van vier weken, met een aangepaste, kortere werkstroom en een samen-doen-sessie voor de twee afhakers. Bij de tweede meting deden alle vijf mee. De diepere les van deze casus: een businesscase is geen document dat je schrijft om gelijk te krijgen, maar een afspraak die je maakt om samen eerlijk te kunnen beoordelen. Versie één probeerde te overtuigen en sneuvelde; versie twee maakte controleerbaar en hield stand — óók toen het resultaat tegenviel op een punt dat niemand had voorzien.",
                example:
                  "Jeroens meetrapport voor de teamlead was een halve pagina: de twee criteria, de gemeten waarden, het voorstel. Geen presentatie van twintig dia's. De beslissing kostte tien minuten — omdat al het denkwerk vooraf was gedaan, bij het vastleggen van de criteria.",
              },
            ],
            takeaway:
              "Een businesscase overtuigt door controleerbaarheid, niet door grote getallen: meet eerst, reken in bandbreedtes, en laat vooraf vastgelegde criteria het oordeel vellen.",
          },
        },
      ],
    },
    {
      slug: "verantwoordelijkheden",
      titel: "Verantwoordelijkheden",
      doelen: [
        "De rollen bij AI-gebruik binnen Blauwhoed benoemen en afbakenen",
        "Escalatiepaden bij vragen, twijfels en incidenten toepassen",
        "Aanspreekbaarheid in de afdeling organiseren zonder politieagent te worden",
      ],
      geschatteMinuten: 50,
      lessons: [
        {
          titel: "Vijf rollen, één keten van verantwoordelijkheid",
          type: "tekst",
          geschatteMinuten: 12,
          content: {
            intro:
              "Verantwoord AI-gebruik is geen kwestie van één functionaris die alles bewaakt, maar van heldere rollen die op elkaar aansluiten. Deze les zet de keten op een rij en laat zien waar jij als multiplier in past.",
            sections: [
              {
                heading: "De rollen en hun kern",
                body:
                  "Vijf rollen dragen samen het AI-gebruik bij Blauwhoed. De gebruiker is en blijft verantwoordelijk voor elke toepassing van AI-output in het werk — die verantwoordelijkheid is niet overdraagbaar aan het model, de tool of een collega die 'zei dat het mocht'. De teamlead ziet toe op verantwoord gebruik binnen het team, neemt besluiten over toepassingen en kan herkansingen voor examens toekennen. De beoordelaar toetst ingeleverde opdrachten in de Academy. De privacycontactpersoon beslist over alles wat persoonsgegevens raakt: van de vraag of iets gedeeld mag worden tot de beoordeling of een DPIA-light volstaat. En de multiplier — jij — begeleidt collega's, signaleert kansen en risico's in de afdeling en is het eerste aanspreekpunt vóór de formele kanalen. Onthoud het patroon: de gebruiker doet, de teamlead besluit, de multiplier begeleidt en signaleert, de privacycontactpersoon beslist over privacy. Wie welke pet draagt, moet in elke situatie in één zin te benoemen zijn.",
                example:
                  "Een medewerker van het fictieve team Kopersbegeleiding wil AI inzetten om klachtenmails samen te vatten. De gebruiker voert uit en blijft verantwoordelijk voor de samenvattingen; de multiplier helpt met de werkstroom en anonimisering; de teamlead besluit of het team dit gaat doen; de privacycontactpersoon beoordeelt de omgang met de persoonsgegevens in de klachten.",
              },
              {
                heading: "Eerste aanspreekpunt: wat dat wel en niet betekent",
                body:
                  "Als multiplier ben je het eerste aanspreekpunt voor AI-vragen in je afdeling. Dat is een filterfunctie, geen eindstation. De meeste vragen kun je zelf afhandelen: hoe bouw ik deze prompt op, mag deze openbare bron in een tool, hoe controleer ik deze output? Maar drie categorieën geef je altijd door. Vragen over persoonsgegevens en vertrouwelijkheid waarvan het antwoord niet glashelder in het beleid staat, gaan naar de privacycontactpersoon. Besluiten over invoering, budget of werkwijze van het team gaan naar de teamlead. En incidenten — er is al iets misgegaan — gaan direct naar IT en de privacycontactpersoon, conform de meldprocedure. De valkuil is sluipende rolvergroting: omdat collega's jou snel weten te vinden, ga je gaandeweg vragen beantwoorden die niet de jouwe zijn. Elke keer dat je zegt 'dat is aan de privacycontactpersoon, ik loop even met je mee', versterk je de keten. Elke keer dat je zelf een gok waagt, wordt jouw gok de facto beleid — zonder dat iemand dat heeft besloten.",
              },
              {
                heading: "Waarom de keten belangrijker is dan de kennis",
                body:
                  "Je zou kunnen denken: hoe meer ik zelf weet, hoe minder ik hoef door te verwijzen. Maar de keten bestaat niet omdat kennis schaars is — hij bestaat omdat verantwoordelijkheid belegd moet zijn. Wanneer de privacycontactpersoon oordeelt dat een verwerking toelaatbaar is, is dat oordeel gedocumenteerd, herleidbaar en gedekt door mandaat. Wanneer jij als multiplier hetzelfde zegt, is het een mening van een goedbedoelende collega. Bij een audit, een klacht van een betrokkene of een datalek maakt dat verschil alles uit: de organisatie moet kunnen laten zien wie wat heeft besloten en op welke grond. Dit beschermt ook jou. Een multiplier die binnen zijn rol blijft, kan nooit persoonlijk verweten worden dat een privacybeslissing verkeerd uitpakte. Rolvastheid is daarmee geen bureaucratische scherpslijperij maar een vorm van professionaliteit — dezelfde reden waarom een constructeur de berekening tekent en niet de enthousiaste projectleider die er ook verstand van heeft.",
                example:
                  "Bij het fictieve project Waterkwartier vroeg een collega de multiplier of geanonimiseerde bewonersreacties naar een AI-tool mochten. De multiplier zag zelf geen bezwaar, maar legde het toch voor. De privacycontactpersoon ontdekte dat de 'anonieme' reacties door adresdetails herleidbaar waren — en de afdeling paste eerst de anonimisering aan. Precies hiervoor bestaat de keten.",
              },
            ],
            takeaway:
              "Ken de vijf rollen en blijf in de jouwe: de multiplier begeleidt en signaleert, de teamlead besluit, de privacycontactpersoon oordeelt over privacy — en die keten beschermt iedereen, ook jou.",
          },
        },
        {
          titel: "Waarom de multiplier geen privacybeslissingen neemt",
          type: "tekst",
          geschatteMinuten: 12,
          content: {
            intro:
              "De grens tussen begeleiden en beslissen is nergens zo belangrijk als bij privacy. Deze les maakt precies waar die grens ligt, waarom hij daar ligt, en hoe je hem bewaakt zonder collega's van het kastje naar de muur te sturen.",
            sections: [
              {
                heading: "De grens in de praktijk",
                body:
                  "Wat mag je als multiplier wél rond privacy? Het bestaande beleid uitleggen en toepassen waar het eenduidig is: de lijst met verboden invoer toelichten, voordoen hoe je een verslag anonimiseert, uitleggen waarom gratis consumententools verboden zijn. Wat mag je níet? Zelf oordelen in situaties die het beleid niet eenduidig dekt: of een specifieke dataset voldoende geanonimiseerd is, of een nieuw doel gerechtvaardigd is, of een DPIA-light volstaat of een volledige DPIA nodig is, of een incident meldplichtig is. De vuistregel: uitleggen wat vaststaat mag altijd, oordelen over wat onzeker is nooit. Let op de grijze zone die zich vermomt als uitleg — 'dit lijkt me wel oké' over een concrete dataset is geen uitleg maar een oordeel. Herken ook de druk waaronder de grens vervaagt: een collega met haast, een deadline, een teamlead die 'gewoon even snel' een antwoord wil. Juist dan is doorverwijzen naar de privacycontactpersoon de professionele reactie, en zelf beslissen de dure kortere weg.",
                example:
                  "Een collega van de fictieve afdeling Tenderteam Oost vraagt: 'Deze omgevingsanalyse bevat alleen wijkstatistieken, mag die in de tool?' Als het aggregatieniveau evident boven individuen ligt, mag de multiplier het beleid uitleggen: openbare wijkdata is geen persoonsgegeven. Bevat de analyse echter reacties van individuele omwonenden, dan is het antwoord: 'goede vraag — die leggen we voor aan de privacycontactpersoon.'",
              },
              {
                heading: "Drie redenen achter de regel",
                body:
                  "De regel dat privacybeslissingen bij de privacycontactpersoon blijven, rust op drie pijlers. Deskundigheid: privacyrecht is een vak. Of pseudonimisering volstaat, of een verwerkersovereenkomst dekkend is, of de AVG een grondslag biedt — dat vraagt juridische kennis die je als multiplier niet hoeft te hebben en meestal niet hebt. Consistentie: als tien multipliers in tien afdelingen elk hun eigen oordeel vellen, ontstaan er tien verschillende privacyregimes binnen één organisatie. Eén beslisser betekent één lijn, en één plek waar alle beslissingen gedocumenteerd samenkomen. Aansprakelijkheid: de organisatie moet bij de Autoriteit Persoonsgegevens kunnen aantonen dat privacybeslissingen door een daartoe aangewezen functionaris zijn genomen. Een beslissing van een multiplier heeft die status niet, hoe verstandig hij inhoudelijk ook was. Deze drie pijlers verklaren ook waarom 'maar ik wist het antwoord echt wel' geen verweer is: het gaat niet alleen om het juiste antwoord, maar om het juiste proces dat tot het antwoord leidt.",
              },
              {
                heading: "Doorverwijzen zonder te vertragen",
                body:
                  "Het risico van strikte doorverwijzing is dat collega's de route te traag gaan vinden en om het proces heen gaan werken — de sluiproute is de grootste vijand van elk beleid. Maak doorverwijzen daarom snel en licht. Ken de privacycontactpersoon persoonlijk en spreek een vaste werkwijze af: hoe worden vragen aangeleverd, wat is de gebruikelijke reactietijd, welke vraagtypen kunnen met voorrang? Formuleer de vraag van je collega mee: een goed geformuleerde casus ('deze gegevenscategorieën, dit doel, deze tool') wordt sneller beantwoord dan een vage zorg. Bundel terugkerende vragen: als drie collega's in een maand hetzelfde vragen, agendeer het dan als beleidsverduidelijking, zodat het antwoord voortaan vaststaat en jij het mag uitleggen. En koppel altijd terug aan de vragensteller, ook als het antwoord op zich laat wachten — niets ondermijnt het proces zo snel als een vraag die in een zwart gat verdwijnt. Zo word je geen doorgeefluik, maar de smeerolie tussen de afdeling en de privacyfunctie.",
                example:
                  "De multiplier van het fictieve team Verhuur & Beheer hield een simpele lijst bij van doorverwezen vragen en antwoorden. Na een kwartaal bleken vier vragen over hetzelfde te gaan: mogen plattegronden met bewonersnamen erop worden geüpload? Het antwoord (nee, eerst namen verwijderen) werd op haar voorstel in de afdelingswerkafspraken opgenomen — van vier losse oordelen naar één vaste regel.",
              },
            ],
            takeaway:
              "Leg uit wat vaststaat, maar oordeel nooit zelf over onzekere privacyvragen: verwijs snel en goed voorbereid door naar de privacycontactpersoon en koppel altijd terug.",
          },
        },
        {
          titel: "Escalatiepaden: van vraag tot incident",
          type: "interactief",
          geschatteMinuten: 13,
          content: {
            intro:
              "Escaleren is geen falen maar een vaardigheid: het juiste signaal op het juiste moment bij de juiste persoon. In deze les oefen je met situaties uit de praktijk en bepaal je per geval het escalatiepad.",
            sections: [
              {
                heading: "De escalatieladder",
                body:
                  "Denk in vier niveaus. Niveau één, zelf afhandelen: vaardigheidsvragen en eenduidige beleidsvragen — het dagelijkse werk van de multiplier. Niveau twee, de teamlead: alles wat een besluit over werkwijze, prioriteit of gedrag in het team vraagt, zoals een collega die afspraken structureel negeert of een toepassing die om uitbreiding vraagt. Niveau drie, de privacycontactpersoon: elke niet-eenduidige vraag over persoonsgegevens, elke DPIA-afweging, elk vermoeden dat een verwerking niet klopt. Niveau vier, de incidentroute naar IT én privacycontactpersoon samen: er ís al iets misgegaan — vertrouwelijke gegevens in een tool, een niet-goedgekeurde tool met bedrijfsdata, AI-output met fouten die al extern is gedeeld. Voor niveau vier geldt: direct melden, ook buiten kantooruren, ook bij twijfel of het echt een incident is. De beoordeling of iets meldplichtig is bij de Autoriteit Persoonsgegevens moet binnen 72 uur na ontdekking — die klok tikt vanaf het moment dat iemand het merkt, niet vanaf het moment dat het zeker is.",
                example:
                  "Toets jezelf: een collega van het fictieve team Gebiedsmarketing vertelt je vrijdagmiddag dat ze donderdag een deelnemerslijst van een participatieavond — met namen en e-mailadressen — in een gratis chatbot heeft geplakt. Dit is niveau vier: direct melden bij IT en de privacycontactpersoon, nog diezelfde middag. Niet wachten tot maandag, niet eerst zelf beoordelen hoe erg het is.",
              },
              {
                heading: "Oefensituaties: kies het pad",
                body:
                  "Bepaal voor elke situatie het niveau voordat je de uitwerking leest. A: een collega vraagt hoe ze een prompt kan verbeteren voor conceptteksten van de projectwebsite. B: een collega gebruikt al weken een niet-goedgekeurde AI-tool voor het herschrijven van interne memo's, zonder persoonsgegevens. C: een collega twijfelt of verkoopgesprekverslagen na anonimisering goed genoeg zijn voor AI-verwerking. D: je ontdekt dat een AI-gegenereerde bewonersbrief met een verkeerde datum al is verzonden. Uitwerking: A is niveau één — begeleiden is je kerntaak. B is niveau twee én vier: het gebruik van een niet-goedgekeurde tool voor werk is een beleidsschending die je bij de teamlead adresseert, en omdat bedrijfsinformatie in een externe tool staat, meld je het ook via de incidentroute; laat de collega het gebruik direct staken. C is niveau drie: of anonimisering volstaat is precies het oordeel dat de privacycontactpersoon toekomt. D is niveau vier plus communicatie: de fout is al extern, dus incident melden én met teamlead en communicatie een correctie naar bewoners regelen.",
              },
              {
                heading: "Escalatiedrempels verlagen",
                body:
                  "Escalatiepaden werken alleen als mensen ze durven gebruiken. De grootste drempel is niet onduidelijkheid maar schaamte en angst: wie iets meldt, geeft toe dat er iets mis is — misschien door eigen toedoen. Daarom hanteert Blauwhoed een meldcultuur zonder schuldvraag: een melding leidt nooit tot een sanctie voor de melder; verzwijgen is wél verwijtbaar. Als multiplier draag je die cultuur uit, vooral in je reactie op de eerste melding die iemand bij jou doet. Reageer op de melding, niet op de fout: 'goed dat je het direct zegt' vóór elke inhoudelijke vraag. Help daarna de feiten ordenen — tijdstip, tool, soort gegevens — en loop mee naar de juiste plek in plaats van door te sturen met een e-mailadres. Vertel er zelf over als jou iets overkomt: een multiplier die eigen missers meldt, maakt melden normaal. En bewaak de nazorg: wie na een melding weken niets hoort, meldt de volgende keer niet meer. Jouw gedrag rond de eerste incidenten bepaalt of de afdeling een meldcultuur krijgt of een zwijgcultuur.",
                example:
                  "Bij de fictieve afdeling Realisatie Zuidflank meldde een werkvoorbereider met knikkende knieën dat hij een leverancierscontract in een AI-tool had samengevat. De multiplier bedankte hem, hielp de feiten op een rij te zetten en liep mee naar de privacycontactpersoon. Het bleek beperkt: goedgekeurde tool, geen persoonsgegevens. Twee maanden later meldde dezelfde collega zonder aarzelen een échte fout van een teamgenoot — de cultuur had gewerkt.",
              },
            ],
            takeaway:
              "Gebruik de escalatieladder — zelf, teamlead, privacycontactpersoon, incidentroute — en verlaag de meldrempel door zonder schuldvraag te reageren en mee te lopen in plaats van door te sturen.",
          },
        },
        {
          titel: "Casus: wie is hier aan zet?",
          type: "casus",
          geschatteMinuten: 13,
          content: {
            intro:
              "Eén week uit het leven van multiplier Fatima bij de fictieve afdeling Ontwikkeling Rivieroever, met drie situaties waarin rollen en escalatiepaden door elkaar dreigen te lopen. Bepaal steeds zelf wie aan zet is voordat je de uitwerking leest.",
            sections: [
              {
                heading: "Maandag: de ongeduldige projectleider",
                body:
                  "Projectleider Bas wil nog deze week AI inzetten om inschrijfformulieren van geïnteresseerde kopers samen te vatten tot koperprofielen. Hij heeft haast: donderdag is er een verkoopoverleg. Zijn vraag aan Fatima: 'Jij bent toch onze AI-persoon? Zet jij dit even op?' Hier lopen drie dingen door elkaar. De formulieren staan vol persoonsgegevens — dus is de privacycontactpersoon aan zet vóórdat er iets gebeurt, waarschijnlijk inclusief een DPIA-light omdat het een nieuwe verwerking van kopergegevens is. De invoering van een nieuwe werkwijze in het verkoopproces is een besluit — dat is aan de teamlead, niet aan Bas alleen en zeker niet aan Fatima. En 'even opzetten' suggereert dat de multiplier eigenaar wordt van de toepassing — terwijl eigenaarschap bij de lijn hoort te liggen. Fatima's antwoord: 'Ik help je graag, en dan doen we het goed: ik formuleer vandaag met jou de aanvraag voor de privacycontactpersoon, en jij agendeert het besluit bij de teamlead. Donderdag haalt het niet — en dat hoort bij zorgvuldig werken met kopergegevens.'",
                example:
                  "Let op wat Fatima níet doet: ze beoordeelt niet zelf of samenvatten 'wel meevalt qua privacy', ook al vermoedt ze dat het met goede anonimisering kan. Dat vermoeden deelt ze wél in de aanvraag — als input voor de beslisser, niet als beslissing.",
              },
              {
                heading: "Woensdag: het stille incident",
                body:
                  "Bij de koffieautomaat vangt Fatima op dat een junior collega 'laatst iets stoms deed met dat AI-ding' — een conceptversie van de grondbiedingsstrategie voor een tenderlocatie zou in een AI-tool zijn geplakt om er een presentatie van te maken. De collega zelf zwijgt erover; ze hoort het van een ander. Dit is de lastigste situatie uit de week: een vermoeden van een serieus incident (tenderstukken en biedstrategieën zijn verboden invoer), maar tweedehands informatie en een collega die zich duidelijk schaamt. Wat níet kan: het negeren omdat het geruchtencircuit geen officiële melding is — een vermoeden van een incident met vertrouwelijke stukken moet de incidentroute in. Wat óók niet kan: de collega publiekelijk confronteren of de melding buiten hem om afhandelen alsof hij verdachte is. Fatima kiest de directe, menselijke route: ze zoekt de collega dezelfde dag persoonlijk op, benoemt wat ze hoorde, en legt uit dat melden geen sanctie oplevert maar verzwijgen wel. Samen doen ze binnen het uur de melding bij IT en de privacycontactpersoon, met de feiten die de collega zelf het beste kent: welke tool, welke versie van het stuk, wanneer.",
              },
              {
                heading: "Vrijdag: de teamlead die het te druk heeft",
                body:
                  "De week eindigt met een structureel probleem. Fatima heeft de teamlead twee keer gevraagd om de afdelingswerkafspraken over AI vast te stellen; twee keer werd het doorgeschoven wegens drukte. Intussen ontstaan er in het team eigen gewoontes — de een anonimiseert grondig, de ander nauwelijks. Fatima voelt de verleiding om de afspraken dan maar zelf 'voorlopig vast te stellen'. Maar regels uitvaardigen is geen multiplierrol: afspraken zonder mandaat zijn vrijblijvend, en erger — ze ontslaan de teamlead van een verantwoordelijkheid die daar hoort te liggen. Wat wél werkt: het besluit zo klein en makkelijk maken dat drukte geen excuus meer is. Fatima schrijft de werkafspraken uit als beslisdocument van één pagina, zet er drie concrete openstaande keuzes in, en vraagt vijftien minuten in het eerstvolgende teamoverleg. Ze benoemt ook het risico van uitstel: 'zolang dit niet is vastgesteld, is elke gewoonte in het team de facto ons beleid.' De teamlead stelt de afspraken die maandag vast. De les van de week: de multiplier duwt, ordent en maakt beslisbaar — maar laat besluiten liggen waar ze horen.",
                example:
                  "Fatima's beslisdocument bevatte per keuze twee opties met één zin voor- en nadeel — bijvoorbeeld: 'verslagen anonimiseren vóór elke AI-stap (veilig, kost 5 minuten) of alleen bij externe deling (sneller, maar foutgevoelig)'. Besluitvorming versnellen door voorwerk is multiplierwerk op zijn best.",
              },
            ],
            takeaway:
              "Rolvastheid in de praktijk betekent: privacyvragen voorleggen in plaats van inschatten, vermoedens van incidenten menselijk maar direct de meldroute in brengen, en besluiten voorbereiden zonder ze over te nemen.",
          },
        },
      ],
    },
    {
      slug: "dpia-light",
      titel: "DPIA-light",
      doelen: [
        "De vijf DPIA-light-vragen toepassen op een voorgenomen AI-toepassing",
        "Beoordelen wanneer een volledige DPIA wettelijk verplicht is",
        "Risico's voor betrokkenen concreet maken en koppelen aan maatregelen en eigenaarschap",
      ],
      geschatteMinuten: 50,
      isSecurityModule: true,
      lessons: [
        {
          titel: "De vijf vragen van de DPIA-light",
          type: "tekst",
          geschatteMinuten: 13,
          content: {
            intro:
              "De DPIA-light is de verkorte risicoanalyse die Blauwhoed uitvoert voordat een nieuwe AI-toepassing met (mogelijk) persoonsgegevens in gebruik gaat. Vijf vragen, één document, en een harde regel: zonder vastgelegde eigenaar gaat niets live.",
            sections: [
              {
                heading: "Vraag één en twee: gegevens en doel",
                body:
                  "De eerste vraag: welke gegevenscategorieën verwerkt de toepassing, en zijn ze te minimaliseren? Wees hier uitputtend en concreet. Niet 'kopersinformatie', maar: naam, e-mailadres, woningtype, meerwerkkeuzes, correspondentiegeschiedenis. Bedenk daarbij dat persoonsgegevens breder zijn dan naam en adres: ook combinaties zoals functie plus afdeling plus leeftijd kunnen iemand identificeren, en gepseudonimiseerde data ('koper 12' met postcode en koopsom) blijft herleidbaar en valt onder de AVG. Bij elke categorie hoort de minimalisatievraag: heeft het model dit veld écht nodig voor de taak? Meestal kan de helft weg. De tweede vraag: is het doel welbepaald en gerechtvaardigd? 'Efficiënter werken' is geen doel; 'kopersvragen over meerwerk binnen één werkdag beantwoorden met gecontroleerde conceptantwoorden' wel. Een scherp doel begrenst ook het gebruik: gegevens die voor doel A zijn verwerkt, mogen niet stilzwijgend voor doel B worden hergebruikt. Wie de eerste twee vragen grondig beantwoordt, ontdekt vaak dat de toepassing met veel minder gegevens toe kan — dat is dan al winst vóór er één risico is benoemd.",
                example:
                  "Voor een fictieve toepassing die bezichtigingsverslagen van project Rivierzicht samenvat, leverde vraag één zeven gegevenscategorieën op. Na de minimalisatietoets bleven er drie over: het model had namen, telefoonnummers, geboortedata en financiële details helemaal niet nodig om gespreksinhoud samen te vatten.",
              },
              {
                heading: "Vraag drie en vier: risico's en maatregelen",
                body:
                  "De derde vraag: wat kan er misgaan voor betrokkenen? Let op het perspectief — het gaat om risico's voor de mensen van wie de gegevens zijn, niet om risico's voor Blauwhoed. Denk in drie hoofdcategorieën: onjuiste output (het model vat verkeerd samen, verzint details, en dat komt in iemands dossier), lekken (gegevens belanden in een tool, bij een leverancier of bij collega's waar ze niet horen) en bias (het systeem behandelt groepen stelselmatig ongelijk). De vierde vraag: welke maatregelen beperken elk risico? Het woord 'elk' is essentieel: iedere benoemde dreiging krijgt een eigen, passende maatregel — anonimisering tegen lekrisico's, verplichte menselijke controle tegen onjuiste output, logging om achteraf te kunnen reconstrueren wat er is gebeurd. Een risico zonder maatregel is een open eind dat de toepassing tegenhoudt; een maatregel zonder risico is vaak windowdressing. De koppeling risico-maatregel is het hart van het document en het eerste waar de privacycontactpersoon naar kijkt.",
                example:
                  "Voor de fictieve verslagen-toepassing: risico 'onjuiste samenvatting komt in het koperdossier' kreeg de maatregel 'de gespreksvoerder controleert en accordeert elke samenvatting vóór opslag'. Risico 'herleidbare gegevens bij de AI-leverancier' kreeg 'anonimisering vóór invoer plus een tool met verwerkersovereenkomst en trainingsuitsluiting'.",
              },
              {
                heading: "Vraag vijf: eigenaarschap vóór livegang",
                body:
                  "De vijfde vraag lijkt de eenvoudigste en wordt het vaakst afgeraffeld: wie is eigenaar en aanspreekpunt na livegang? De eigenaar is degene die verantwoordelijk blijft voor de toepassing in bedrijf: die de maatregelen in stand houdt, wijzigingen signaleert, vragen van betrokkenen ontvangt en de periodieke herziening trekt. Dat is een rol met een naam erbij, niet 'het team' of 'de afdeling' — collectief eigenaarschap is in de praktijk géén eigenaarschap. De regel van Blauwhoed is hard: een toepassing zonder vastgelegde eigenaar gaat niet live. Daarnaast kent de DPIA-light een levensloop: leg hem vast vóór de eerste echte verwerking, herzie hem bij elke wezenlijke wijziging — een nieuw gegevenstype, een ander doel, een andere tool of leverancier — en bewaar het document bij de projectdocumentatie. Een DPIA-light is dus geen vinkje bij de start maar een levend document. Als multiplier bewaak je vooral dat herzieningsmoment: toepassingen evolueren sluipenderwijs, en de versie op papier moet de werkelijkheid blijven beschrijven.",
                example:
                  "Bij de fictieve afdeling Kopersbegeleiding breidde het team de verslagen-toepassing na een half jaar uit met klachtenmails. Een nieuwe gegevenscategorie en een gevoeliger context: de multiplier signaleerde dat dit een wezenlijke wijziging was, en de DPIA-light werd herzien vóórdat de eerste klachtenmail werd verwerkt.",
              },
            ],
            takeaway:
              "De vijf vragen — gegevens, doel, risico's, maatregelen, eigenaar — vormen samen één sluitend verhaal: geminimaliseerde gegevens voor een scherp doel, elk risico gedekt door een maatregel, en een eigenaar met naam vóór livegang.",
          },
        },
        {
          titel: "Light of volledig? De grens van de DPIA-plicht",
          type: "tekst",
          geschatteMinuten: 12,
          content: {
            intro:
              "Niet elke risicoanalyse mag licht zijn. Bij sommige verwerkingen is een volledige DPIA wettelijk verplicht, en die inschatting verkeerd maken is zelf een compliancerisico. Deze les leert je de signalen herkennen — en de beslissing op de juiste plek leggen.",
            sections: [
              {
                heading: "Wanneer de volledige DPIA verplicht is",
                body:
                  "Een volledige DPIA is wettelijk verplicht bij verwerkingen die waarschijnlijk een hoog risico opleveren voor betrokkenen, in het bijzonder bij grootschalige of systematische verwerking. Voor de praktijk van Blauwhoed zijn de belangrijkste triggers: AI die mensen beoordeelt of rangschikt (medewerkers, sollicitanten, kopers), systematische monitoring van gedrag (bijvoorbeeld het volgen van bewonersgedrag of klantinteracties over langere tijd), grootschalige verwerking van gevoelige of financiële gegevens, en toepassingen die besluiten over personen wezenlijk beïnvloeden. Denk aan AI die sollicitanten voorsorteert — onder de EU AI Act bovendien een hoogrisicotoepassing — of een systeem dat betalingsgedrag van kopers analyseert om 'risicoprofielen' te maken. De light-versie is bedoeld voor het bredere middenveld: afdelingstoepassingen met beperkte persoonsgegevens, een duidelijk doel en menselijke controle in de keten. De grens is niet altijd scherp, en precies daarom is de beslisregel scherp: bij twijfel beslist de privacycontactpersoon of de light-versie volstaat — niet de multiplier, niet de teamlead, niet de enthousiaste projectleider.",
                example:
                  "Twee fictieve voorbeelden naast elkaar: een tool die geanonimiseerde vergadernotulen van team Planontwikkeling structureert, kan met een DPIA-light toe. Een voorgenomen systeem dat e-mails van kopersbegeleiders analyseert om 'klantsentiment per medewerker' te rapporteren, beoordeelt medewerkers systematisch — dat is het domein van de volledige DPIA, nog los van de vraag of je het überhaupt zou moeten willen.",
              },
              {
                heading: "De signaalfunctie van de multiplier",
                body:
                  "Jouw rol bij deze grens is signaleren, niet beslissen. Dat betekent concreet: bij elke voorgenomen toepassing in je afdeling loop je de triggers langs en stel je jezelf de vraag 'zou dit hoog risico kunnen zijn?'. Bij elke twijfel — hoe klein ook — leg je de vraag voor aan de privacycontactpersoon, mét jouw voorlopige analyse als input. Wat je nadrukkelijk niet doet: zelf concluderen dat 'een light wel volstaat' om het proces te versnellen, of de vraag helemaal niet stellen omdat de toepassing klein begint. Dat laatste is een klassieke valkuil: toepassingen groeien. Wat start als hulpje voor drie collega's kan een jaar later een afdelingsbreed systeem zijn dat wél systematisch verwerkt. Signaleer daarom niet alleen bij de start, maar ook bij groei: meer gebruikers, meer gegevens, een gevoeliger doel. De kosten van te vroeg aan de bel trekken zijn een kort gesprek; de kosten van te laat zijn een verwerking die achteraf onrechtmatig blijkt, met alle gevolgen voor betrokkenen én organisatie.",
              },
              {
                heading: "Wat een verkeerde inschatting kost",
                body:
                  "Waarom zo streng op deze grens? Omdat de inschatting zelf juridische gevolgen heeft. Een verwerking uitvoeren die een DPIA vereiste zonder die uit te voeren, is een zelfstandige overtreding van de AVG — los van de vraag of er iets misgaat. Gaat er wél iets mis, dan weegt het ontbreken van de verplichte analyse zwaar mee bij de Autoriteit Persoonsgegevens: het toont dat risico's niet zijn onderzocht terwijl dat moest. Voor betrokkenen is de schade concreter: een sollicitant die door een ongetoetst systeem onterecht is afgewezen, een koper wiens gegevens in een profiel belandden waar hij nooit van wist. En intern kost het vertrouwen: één toepassing die achteraf stilgelegd moet worden, zet alle AI-initiatieven van de afdeling in de wacht. De DPIA-light-praktijk van Blauwhoed is daarom geen bureaucratie naast het echte werk, maar de voorwaarde waaronder de afdeling überhaupt mág experimenteren. Wie de lichte route zorgvuldig bewandelt, verdient de ruimte; wie hem afraffelt, verspeelt die voor iedereen.",
                example:
                  "Bij het fictieve project Waterkwartier wilde een team 'even snel' een AI-pilot starten die reacties van omwonenden op social media zou monitoren en categoriseren. De multiplier herkende de trigger — systematische monitoring van gedrag — en legde het voor. De privacycontactpersoon oordeelde dat dit minimaal een volledige DPIA vroeg; de pilot werd omgebouwd naar analyse van alleen de eigen, formele participatiereacties.",
              },
            ],
            takeaway:
              "Ken de triggers voor een volledige DPIA — mensen beoordelen, systematisch monitoren, grootschalig of gevoelig verwerken — signaleer bij elke twijfel, en laat de light-of-volledig-beslissing altijd bij de privacycontactpersoon.",
          },
        },
        {
          titel: "Risico's concreet maken en maatregelen koppelen",
          type: "interactief",
          geschatteMinuten: 12,
          content: {
            intro:
              "Het zwakste onderdeel van de meeste risicoanalyses is vaagheid: 'er kan data lekken' als risico en 'we zijn er alert op' als maatregel. In deze les train je het concreet maken van risico's voor betrokkenen en het koppelen van maatregelen die echt iets afdekken.",
            sections: [
              {
                heading: "Van abstract naar concreet: het wie-wat-gevolg-schema",
                body:
                  "Een bruikbaar risico beschrijft drie dingen: wíe kan geraakt worden, wát kan er precies gebeuren, en welk gevólg heeft dat voor die persoon. Vergelijk 'privacyrisico bij verslagverwerking' met: 'een koper (wie) krijgt in zijn dossier een AI-samenvatting waarin een afwijzing van meerwerk staat die hij nooit heeft uitgesproken (wat), waardoor hij later een keuken geweigerd krijgt waar hij recht op had (gevolg)'. Pas op dat concrete niveau kun je beoordelen hoe erg en hoe waarschijnlijk iets is, en welke maatregel past. Oefen dit met de drie hoofdcategorieën. Onjuiste output: wat is het ergste verzonnen detail dat in dit proces kan doorwerken? Lekken: bij wie kunnen deze gegevens terechtkomen en wat kan die partij ermee? Bias: welke groep zou dit systeem stelselmatig kunnen benadelen, bijvoorbeeld doordat samenvattingen taalvaardige inspraakreacties zwaarder laten wegen dan korte, emotionele? Schrijf per toepassing minstens één concreet risico per categorie uit, of noteer expliciet waarom een categorie hier niet speelt.",
                example:
                  "Oefening bij een fictieve participatie-samenvatter voor project De Houtwal: 'omwonenden met korte of taalzwakke reacties (wie) worden in de AI-samenvatting ondergerepresenteerd (wat), waardoor hun bezwaren niet meewegen in het ontwerpbesluit (gevolg)'. Dit biasrisico was in de eerste versie van de analyse volledig gemist — er stond alleen 'risico op onvolledigheid'.",
              },
              {
                heading: "Maatregelen die passen: de koppeltoets",
                body:
                  "Voor elke maatregel geldt de koppeltoets: welk concreet risico dekt hij af, en waaruit blijkt dat? Drie soorten maatregelen keren steeds terug. Preventief: anonimisering vóór invoer, dataminimalisatie, een goedgekeurde tool met verwerkersovereenkomst — deze verkleinen de kans dat iets misgaat. Detecterend: verplichte menselijke controle vóór gebruik van output, steekproeven op kwaliteit, logging van wie wat wanneer verwerkte — deze zorgen dat fouten worden gevonden vóór ze schade doen, of reconstrueerbaar zijn daarna. Correctief: een afgesproken herstelroute als het toch misgaat, aansluitend op de incidentprocedure. Een gezonde analyse combineert de drie soorten. Toets ook de uitvoerbaarheid: 'elke output wordt door twee personen gecontroleerd' klinkt sterk, maar sneuvelt in de praktijk bij drukte — en een maatregel die niet wordt nageleefd is gevaarlijker dan geen maatregel, omdat hij schijnveiligheid in het document zet. Kies liever een lichtere maatregel die houdbaar is dan een zware die verdampt.",
              },
              {
                heading: "Oefening: maak deze analyse af",
                body:
                  "Sluit af met een oefening. De fictieve afdeling Verhuur & Beheer wil AI inzetten om onderhoudsverzoeken van huurders automatisch samen te vatten en te categoriseren voor de planning. Gegeven risico één: 'een urgent verzoek (gaslucht, lekkage boven een meterkast) wordt door het model als regulier gecategoriseerd, waardoor de huurder dagen in een onveilige situatie zit.' Bedenk zelf de maatregel voordat je verder leest. Sterke uitwerking: een detecterende maatregel — de categorisering is een voorstel, een medewerker beoordeelt alle verzoeken met urgentiekenmerken dezelfde dag, en er is een woordenlijst die bepaalde termen altijd naar de mens routeert. Zwakke uitwerking: 'het model wordt goed getest' — preventief bedoeld, maar zonder blijvende dekking in bedrijf. Formuleer nu zelf risico twee (lekcategorie: denk aan adresgegevens en gezondheidsdetails in verzoeken) en risico drie (biascategorie: denk aan huurders die gebrekkig Nederlands schrijven), elk met een passende, houdbare maatregel. Deze oefening is de kern van de opdracht bij deze module.",
                example:
                  "Modeluitwerking risico drie: 'verzoeken in gebrekkig Nederlands (wie: huurders met een andere moedertaal) worden vaker onvolledig of verkeerd samengevat (wat), waardoor hun reparaties later of verkeerd worden ingepland (gevolg)'. Maatregel: maandelijkse steekproef die de uitkomsten per taalniveau vergelijkt, met bijsturing van de werkwijze als er verschil blijkt.",
              },
            ],
            takeaway:
              "Beschrijf elk risico als wie-wat-gevolg voor de betrokkene, koppel er een uitvoerbare preventieve, detecterende of correctieve maatregel aan, en wantrouw elke maatregel die alleen op papier sterk is.",
          },
        },
        {
          titel: "Casus: DPIA-light voor de leadassistent van De Zuidkade",
          type: "casus",
          geschatteMinuten: 13,
          content: {
            intro:
              "In deze casus doorloop je een volledige DPIA-light zoals die bij Blauwhoed op tafel komt: een fictief verkoopteam wil een AI-assistent voor de opvolging van woningzoekenden. Je ziet het hele traject — inclusief het moment waarop de livegang wordt tegengehouden.",
            sections: [
              {
                heading: "Het voorstel en de eerste twee vragen",
                body:
                  "Het fictieve verkoopteam van project De Zuidkade ontvangt honderden inschrijvingen van woningzoekenden en wil een AI-assistent die conceptmails opstelt voor de opvolging: bedankjes, uitnodigingen voor informatieavonden, antwoorden op veelgestelde vragen. De multiplier begeleidt het invullen van de DPIA-light samen met de beoogd eigenaar, een senior verkoper. Vraag één legt direct spanning bloot. Het team wil 'gewoon het hele inschrijfformulier' aan het model voeren: naam, e-mail, telefoon, gezinssamenstelling, inkomensindicatie, woningvoorkeur en motivatie. De minimalisatietoets halveert dat: voor een conceptmail over een informatieavond zijn woningvoorkeur en het type vraag voldoende; naam en aanhef worden pas ná de AI-stap handmatig toegevoegd, en de inkomensindicatie gaat er helemaal uit — die is voor geen enkele mail nodig. Vraag twee scherpt het doel aan van 'sneller reageren op leads' naar: 'binnen twee werkdagen een persoonlijk gecontroleerde reactie op elke inschrijving, met AI-conceptmails op basis van geminimaliseerde, niet-herleidbare invoer.' Dat doel sluit meteen ander gebruik uit, zoals het rangschikken van kansrijke kopers — daarover later meer.",
                example:
                  "De senior verkoper stribbelde tegen bij het schrappen van de inkomensindicatie: 'dan kan het model de toon niet afstemmen op het budget.' De multiplier liet het verschil zien: twee conceptmails, met en zonder dat veld, waren praktisch identiek. Minimalisatie werd geen verlies maar een bewijs dat het veld overbodig was.",
              },
              {
                heading: "Risico's, maatregelen en een rode vlag",
                body:
                  "Bij vraag drie benoemt het team drie concrete risico's. Eén: een conceptmail bevat een verzonnen detail — een verkeerde datum voor de informatieavond, een toezegging over oplevering — en wordt ongecontroleerd verzonden. Twee: inschrijfgegevens belanden herleidbaar bij de toolleverancier. Drie: woningzoekenden krijgen stelselmatig verschillende behandeling, bijvoorbeeld doordat uitgebreide motivaties warmere mails opleveren dan korte. De maatregelen bij vraag vier volgen de koppeltoets: verplichte menselijke controle en verzending door de verkoper zelf (detecterend, tegen risico één), anonimisering vóór invoer plus uitsluitend de goedgekeurde tool met verwerkersovereenkomst (preventief, tegen risico twee), en een maandelijkse steekproef van twintig mails op toon en toezeggingen (detecterend, tegen risico één en drie). Dan de rode vlag: tijdens het gesprek oppert een teamlid om het model óók een 'kansrijkheid-score' per woningzoekende te laten geven. De multiplier herkent de trigger: mensen rangschikken is precies het terrein waar een DPIA-light niet meer volstaat. Dat onderdeel gaat uit het voorstel; als het team het ooit echt wil, loopt het via de privacycontactpersoon en waarschijnlijk een volledige DPIA.",
              },
              {
                heading: "De livegang die wachten moest",
                body:
                  "Bij vraag vijf stokt het traject — leerzaam genoeg niet op techniek of privacy, maar op eigenaarschap. De beoogd eigenaar kondigt aan per 1 juni naar een ander project te vertrekken. Het team stelt voor om 'de afdeling' als eigenaar te noteren en gewoon te starten; er is immers al veel werk verzet. De multiplier houdt vast aan de regel: een toepassing zonder vastgelegde eigenaar gaat niet live, en collectief eigenaarschap telt niet. Het kost twee weken om een opvolger te vinden en in te werken; de livegang schuift op. Die twee weken blijken goed besteed: de nieuwe eigenaar, een verkoopcoördinator, scherpt de steekproefafspraak aan en legt vast wanneer de DPIA-light wordt herzien — bij elke nieuwe mailsoort, elk nieuw gegevensveld en minimaal jaarlijks. De casus eindigt zoals een DPIA-light hoort te eindigen: een document van twee pagina's bij de projectdocumentatie, een eigenaar met naam, en een team dat precies weet wat het wel en niet met de assistent mag. De vertraging van twee weken is geen kostenpost van het proces, maar de prijs van een toepassing die ook over een jaar nog verantwoord draait.",
                example:
                  "Het eindoordeel van de privacycontactpersoon paste in drie zinnen: gegevens geminimaliseerd, doel welbepaald, elk risico gekoppeld aan een houdbare maatregel, eigenaar belegd — akkoord voor livegang per de nieuwe datum. Een grondig voorbereide DPIA-light maakt de formele toets snel; een slordige maakt hem tot een pingpongwedstrijd.",
              },
            ],
            takeaway:
              "Een goede DPIA-light minimaliseert eerst, benoemt risico's concreet, koppelt elke dreiging aan een houdbare maatregel — en houdt de livegang tegen zolang eigenaarschap niet met naam is belegd.",
          },
        },
      ],
    },
    {
      slug: "collega-s-begeleiden",
      titel: "Collega's begeleiden",
      doelen: [
        "Collega's AI-vaardigheden aanleren via voordoen, samen doen, zelf doen",
        "Productief omgaan met scepsis en overenthousiasme in het team",
        "Een veilige oefenomgeving bieden en risico's signaleren zonder politieagent te worden",
      ],
      geschatteMinuten: 50,
      lessons: [
        {
          titel: "Voordoen, samen doen, zelf doen",
          type: "tekst",
          geschatteMinuten: 12,
          content: {
            intro:
              "Collega's leren geen AI-vaardigheden van een presentatie of een handleiding, maar van begeleide praktijk. Het didactische model daarvoor is zo oud als het ambacht: voordoen, samen doen, zelf doen — in die volgorde, met echt werk.",
            sections: [
              {
                heading: "Voordoen: hardop denken bij echt werk",
                body:
                  "De eerste fase is voordoen — maar niet als demo. Een gelikte demonstratie met een perfect voorbereid voorbeeld leert collega's vooral dat jij het goed kunt. Effectief voordoen gebeurt met echt werk van de collega zelf en met hardop denken: je laat niet alleen zien wát je doet, maar waaróm. 'Ik begin met de rol en de context... nu vraag ik expliciet om aannames te markeren, want daar zie ik straks waar ik moet controleren... deze eerste versie is te stijf, dus ik stuur bij met een concrete aanwijzing.' Laat ook je missers staan: een prompt die niets oplevert en jouw herstel daarvan is leerzamer dan tien keer meteen raak. Kies voor de eerste sessie een taak uit de kansenscan die de collega herkent en die snel zichtbaar resultaat geeft. Houd het kort — twintig minuten geconcentreerd voordoen is meer waard dan een uur presenteren — en sluit af met de aankondiging van de volgende stap: 'volgende week doen we jouw verslag samen.'",
                example:
                  "De multiplier van het fictieve team Planontwikkeling Noord deed het samenvatten van een vergaderverslag voor met de notulen van het eigen teamoverleg — eerst samen anonimiseren, toen de prompt opbouwen, toen de output controleren tegen de notulen. Herkenbaarder kan niet: iedereen aan tafel had die vergadering zelf bijgewoond.",
              },
              {
                heading: "Samen doen: de handen van de collega, jouw stem ernaast",
                body:
                  "In de tweede fase zit de collega zelf aan de knoppen en zit jij ernaast — letterlijk of via een gedeeld scherm. De verleiding is groot om in te grijpen zodra iets hapert; weersta die. Jouw rol is vragen stellen, niet overnemen: 'wat wil je dat het model hier doet?', 'wat mis je in deze output?', 'hoe zou je dat bijsturen?'. Grijp alleen direct in bij veiligheidskwesties — als er persoonsgegevens richting een prompt gaan, stop je de handeling meteen en maak je er een leermoment van. Plan twee tot drie samen-doen-sessies per collega, elk rond een echte taak, en bouw de ondersteuning zichtbaar af: in de eerste sessie stuur je actief mee, in de laatste zit je er vooral bij voor vragen. Sluit elke sessie af met één concrete afspraak over wat de collega vóór de volgende keer zelfstandig probeert. Zo wordt zelf doen geen sprong in het diepe maar de logische volgende trede. Noteer voor jezelf waar deze collega op vastloopt — dat verschilt per persoon en bepaalt jouw accent in de volgende sessie.",
              },
              {
                heading: "Zelf doen: loslaten met een vangnet",
                body:
                  "De derde fase is zelfstandig gebruik — maar loslaten is niet hetzelfde als uit het oog verliezen. Drie vangnetten blijven staan. Ten eerste een terugvalmoment: spreek af dat de collega de eerste weken wekelijks één output met jou naloopt, niet ter controle maar als reflectie — wat ging goed, wat bleef lastig? Ten tweede de werkafspraken: de anonimiseringsregels, de verificatiechecklist en de controleplicht vóór extern gebruik gelden in elke fase, en juist zelfstandige gebruikers gaan daarin schuiven als niemand er ooit meer naar vraagt. Ten derde jouw beschikbaarheid: de drempel om jou iets te vragen moet lager blijven dan de drempel om maar wat te proberen. Vier successen zichtbaar: een collega die zijn eerste taak zelfstandig met AI heeft verbeterd, vertelt daar in het teamoverleg twee minuten over. Dat is geen ritueel maar didactiek — het normaliseert leren, verspreidt werkende aanpakken en laat de volgende sceptische collega zien dat het van een gewone teamgenoot komt, niet van 'de AI-persoon'. Jouw succes als multiplier is uiteindelijk meetbaar in hoe overbodig je wordt voor de basisvaardigheden.",
                example:
                  "Bij het fictieve team Kopersbegeleiding hield de multiplier een simpel overzicht bij: per collega de fase (voordoen, samen, zelf) per taaksoort. Een collega kan zelfstandig zijn in verslagen samenvatten en tegelijk in de voordoen-fase zitten voor documentanalyse — begeleiding is per vaardigheid, niet per persoon.",
              },
            ],
            takeaway:
              "Begeleid per vaardigheid in drie fasen — hardop denkend voordoen, vragend samen doen, loslaten met vangnet — en meet je succes af aan wat collega's zonder jou kunnen.",
          },
        },
        {
          titel: "Sceptici en enthousiastelingen: twee gesprekken, één doel",
          type: "tekst",
          geschatteMinuten: 13,
          content: {
            intro:
              "In elk team tref je beide uitersten: de collega die 'er niks mee moet' en de collega die alles direct met AI wil doen. Beide houdingen bevatten iets waardevols — en beide vragen een eigen gesprek.",
            sections: [
              {
                heading: "Scepsis serieus nemen als informatie",
                body:
                  "Scepsis is zelden dom en bijna nooit alleen maar weerstand tegen het nieuwe. Achter 'ik moet er niks van hebben' zitten meestal concrete zorgen: word ik hier overbodig van, kan ik dit wel leren, klopt die output eigenlijk wel, en waarom zou ik mijn vak — waar ik goed in ben — laten bijsturen door een machine? Behandel die zorgen als informatie, niet als obstakel. Vraag door voordat je overtuigt: 'wat zou er volgens jou misgaan als we dit doen?' De antwoorden zijn vaak bruikbaar — sceptici zien risico's die enthousiastelingen missen, en een scepticus die een reëel risico benoemd ziet worden in de werkafspraken, verandert van tegenstander in kwaliteitsbewaker. Forceer nooit: verplicht enthousiasme kweekt stille sabotage. Werk via het werk: zoek de taak waar déze collega last van heeft en bied één klein, vrijblijvend experiment aan met een duidelijke uitweg — 'als het niks is, stoppen we en heb je er nooit meer last van mij over'. En geef het tijd: de meeste sceptici draaien niet door argumenten, maar door een collega naast zich die er zichtbaar plezier en resultaat uit haalt.",
                example:
                  "Bij het fictieve team Realisatie Zuidflank was de meest ervaren werkvoorbereider de grootste scepticus — tot de multiplier hem vroeg mee te kijken bij de kwaliteitscontrole van AI-samenvattingen, juist vanwege zijn vakkennis. Zijn kritische oog werd onderdeel van de werkwijze; drie maanden later gebruikte hij de werkstroom zelf.",
              },
              {
                heading: "Overenthousiasme begrenzen zonder te blussen",
                body:
                  "Het spiegelbeeld is minstens zo riskant: de collega die na één goede ervaring alles met AI wil doen, output ongecontroleerd doorstuurt, en tools 'ontdekt' die niet op de goedgekeurde lijst staan. Overenthousiasme is kostbaar — motivatie wil je niet doven — maar ongericht is het gevaarlijker dan scepsis, want een scepticus deelt geen klantenlijst met een gratis chatbot. Het gesprek heeft twee sporen. Spoor één: waardeer expliciet de energie en geef die richting — maak de enthousiasteling aanjager van één afgebakende kans uit de scan, mét de bijbehorende meetafspraken. Wie vooruit wil rennen, kan dat het best binnen een kader doen dat jij mee hebt ontworpen. Spoor twee: wees glashelder over de grenzen en waarom ze bestaan. Niet 'dat mag niet', maar: 'die tool heeft geen verwerkersovereenkomst, dus wat jij erin stopt, kan in het volgende model zitten — daarom niet.' Enthousiaste collega's accepteren grenzen die ze snappen veel makkelijker dan grenzen die als bureaucratie voelen. Blijkt het enthousiasme hardnekkig grenzeloos — herhaalde schendingen na duidelijke afspraken — dan is dat geen begeleidingsvraag meer maar een gedragskwestie voor de teamlead.",
              },
              {
                heading: "Het middenveld niet vergeten",
                body:
                  "De valkuil van elke multiplier is dat de uitersten alle aandacht opslokken: de scepticus die overtuigd moet worden, de enthousiasteling die afgeremd moet worden. Maar de meeste collega's zitten in het stille midden — welwillend, licht onzeker, afwachtend. Zij bepalen of AI-gebruik in de afdeling normaal wordt, en zij reageren het sterkst op iets anders dan argumenten: op wat de omgeving doet. Richt daarom je energie op zichtbare, laagdrempelige normaliteit. Vaste korte momenten werken beter dan grote sessies: tien minuten 'prompt van de week' in het teamoverleg, een gedeelde lijst met werkende aanpakken per taak, een oefenmoment waar binnenlopen vrijblijvend is. Vier kleine successen van gewone collega's — niet die van jou. En let op de stille afhakers: wie na een training niets meer met AI doet, heeft zelden een principieel bezwaar, maar is meestal ergens praktisch op vastgelopen en vond het te onbelangrijk om hulp te vragen. Eén persoonlijke vraag — 'waar liep je op vast?' — haalt meer mensen over de drempel dan een extra plenaire sessie.",
                example:
                  "De multiplier van het fictieve team Gebiedsmarketing merkte dat na de startbijeenkomst vooral de twee uitersten bleven praten en het middenveld zweeg. Ze verving de tweede plenaire sessie door zes gesprekken van een kwartier, één per collega, elk rond diens eigen taak. Vijf van de zes bleken niet sceptisch maar simpelweg blijven steken bij het inloggen op de goedgekeurde tool.",
              },
            ],
            takeaway:
              "Gebruik scepsis als risicoradar, geef enthousiasme richting binnen duidelijke grenzen, en investeer het meest in het stille midden — daar wordt bepaald of AI-gebruik normaal wordt.",
          },
        },
        {
          titel: "Een veilige oefenomgeving inrichten",
          type: "interactief",
          geschatteMinuten: 12,
          content: {
            intro:
              "Mensen leren alleen als fouten maken geen kwaad kan — technisch niet en sociaal niet. In deze les richt je stap voor stap een veilige oefenomgeving in voor je afdeling en toets je je keuzes aan twee scenario's.",
            sections: [
              {
                heading: "Technisch veilig: oefenen zonder echte risico's",
                body:
                  "De eerste laag is technische veiligheid: oefenen mag nooit zelf een risico worden. Drie regels vormen het fundament. Regel één: er wordt uitsluitend geoefend in goedgekeurde omgevingen — de Academy-omgeving en de zakelijke Copilot-licentie — nooit in gratis consumententools, ook niet 'even om te vergelijken'. Regel twee: oefenmateriaal is fictief of grondig geanonimiseerd. Bouw als multiplier een kleine oefenset op voor jouw afdeling: een verzonnen vergaderverslag, een fictieve bewonersbrief, een nagemaakte uitvraag met verzonnen projectnamen — materiaal dat qua vorm identiek is aan echt werk, maar waar niets in staat dat niet gedeeld mag worden. Steek daar tijd in: het verlaagt de leerdrempel enorm als collega's niet eerst zelf hoeven te anonimiseren voordat ze mogen proberen. Regel drie: wat in de oefening wordt gemaakt, blijft oefenmateriaal — een geslaagde oefenbrief gaat niet 'omdat hij toch goed is' naar echte bewoners zonder het normale controleproces. Toets jezelf: welke van de drie regels wordt in jouw afdeling het snelst geschonden, en wat doe je daaraan?",
                example:
                  "De multiplier van de fictieve afdeling Verhuur & Beheer maakte een oefenset van vijf documenten rond het verzonnen complex 'De Vlinderhof', compleet met fictieve huurders en een fictieve onderhoudsgeschiedenis. Elk nieuw teamlid oefent daarop dezelfde vier taken — en niemand hoeft zich af te vragen of er iets in een prompt mag.",
              },
              {
                heading: "Sociaal veilig: fouten als materiaal, niet als afgang",
                body:
                  "De tweede laag is minstens zo belangrijk: sociale veiligheid. Wie bang is om dom over te komen, oefent niet waar anderen bij zijn — en leert dus vooral níet de dingen waar hij het onzekerst over is. Als multiplier bepaal jij het klimaat, vooral door je reactie op de eerste fouten. Reageer op elke mislukte poging met nieuwsgierigheid ('interessant, wat gebeurt hier?') en nooit met — ook goedbedoelde — snelheid ('o, dat moet je zo doen', terwijl je het toetsenbord overneemt). Deel structureel je eigen mislukkingen: een multiplier die alleen successen laat zien, verhoogt de drempel voor iedereen. Maak van fouten gezamenlijk materiaal: een 'mislukte prompt van de week' bespreken leert meer dan een geslaagde, omdat de analyse van wat er misging precies het denkwerk is dat collega's zelfstandig moeten leren. En bewaak de toon in het team: één spottende opmerking over een onhandige vraag kan drie stille collega's voor maanden doen afhaken. Spreek degene die spot er zachtjes maar direct op aan — dat is klimaatonderhoud, en het hoort bij je rol.",
              },
              {
                heading: "Scenario-oefening: twee momenten, jouw reactie",
                body:
                  "Toets je aanpak aan twee scenario's. Scenario één: tijdens een oefensessie plakt een collega enthousiast een echt klantoverzicht in de prompt — in de goedgekeurde tool, maar met echte namen en telefoonnummers. Wat doe je? Sterke reactie: direct maar rustig stoppen ('wacht even, hier zitten echte gegevens in'), de sessie stopzetten en het als leermoment behandelen — én de meldroute volgen, want ook in een goedgekeurde tool is dit een incident dat IT en de privacycontactpersoon moeten kunnen beoordelen. Juist door dat zichtbaar zonder drama te doen, leer je het team dat melden gewoon is. Zwakke reactie: het stilletjes laten passeren om de sfeer niet te bederven — daarmee leer je het team dat de regels alleen op papier bestaan. Scenario twee: een collega laat trots een oefenresultaat zien dat inhoudelijk rammelt — de samenvatting mist het kernbesluit. Sterke reactie: eerst waarderen wat werkt, dan sámen terug naar de bron ('leg de output eens naast de notulen — wat valt je op?') zodat de collega de fout zelf vindt. De ontdekking van eigen fouten beklijft; aangewezen fouten krenken.",
                example:
                  "Na scenario één in het echt — bij het fictieve team Tenders & Acquisitie — bedankte de multiplier de collega in het teamoverleg (met diens instemming) voor het snelle melden. Het effect: twee weken later meldde een andere collega uit zichzelf een vergelijkbaar foutje. Meldgedrag is aangeleerd gedrag, en oefensessies zijn de plek waar het wordt aangeleerd.",
              },
            ],
            takeaway:
              "Een veilige oefenomgeving is technisch dicht (goedgekeurde tools, fictief materiaal) en sociaal open (fouten zijn materiaal) — en incidenten tijdens het oefenen behandel je zichtbaar en zonder drama via de gewone meldroute.",
          },
        },
        {
          titel: "Casus: het eerste kwartaal als multiplier",
          type: "casus",
          geschatteMinuten: 13,
          content: {
            intro:
              "Deze slotcasus volgt multiplier Ruben gedurende zijn eerste drie maanden bij de fictieve afdeling Ontwikkeling Havenkwartier — inclusief de fout die bijna iedereen in deze rol maakt: te veel zelf doen.",
            sections: [
              {
                heading: "Maand één: de vliegende start die er geen was",
                body:
                  "Ruben begint voortvarend. Hij houdt een kick-off voor de twaalf collega's van de afdeling, deelt een promptgids, en biedt aan dat iedereen met AI-vragen bij hem terechtkan. De eerste weken voelen als succes: zijn agenda stroomt vol met vragen en hij helpt iedereen snel en goed. Maar in week vijf ziet hij het patroon: dezelfde vijf collega's stellen steeds vragen — en laten hem in de praktijk het werk doen. 'Kun jij dit even door de AI halen?' is de meest gestelde vraag geworden. De andere zeven collega's heeft hij na de kick-off niet meer gesproken. Ruben is geen multiplier geworden maar een AI-loket, en een loket schaalt niet: hij vermenigvuldigt niets, hij centraliseert. De ommekeer begint met een simpele regel die hij voor zichzelf invoert: hij doet niets meer vóór een collega wat die collega met begeleiding zelf kan. Elke 'haal jij dit even door de AI'-vraag wordt voortaan beantwoord met 'ik doe het één keer voor terwijl jij meekijkt — daarna doen we het samen met jouw volgende document.'",
                example:
                  "Het kantelmoment was een verzoek van een projectleider om 'even snel' een omgevingsanalyse samen te vatten terwijl die zelf naar een overleg liep. Ruben realiseerde zich dat hij op deze manier over een jaar nog steeds andermans samenvattingen zou maken — en dat niemand er iets van zou hebben geleerd.",
              },
              {
                heading: "Maand twee: van loket naar leerlijn",
                body:
                  "Ruben herbouwt zijn aanpak rond het voordoen-samen doen-zelf doen-model. Hij kiest uit de kansenscan de twee meest gedeelde taken — verslagen samenvatten en conceptteksten voor projectcommunicatie — en organiseert per taak een cyclus: één voordoen-sessie voor een groepje van vier, daarna per collega twee samen-doen-momenten van een half uur, ingepland als gewone werkafspraken. De vijf actieve vragers blijken snel zelfstandig; de winst zit bij het stille midden. Twee collega's blijken al die tijd op een praktisch probleem te zijn afgehaakt, één blijkt sceptischer dan gedacht en krijgt het kwaliteitsbewaker-gesprek: haar kritische blik wordt onderdeel van de steekproefcontrole. Voor de oefensessies bouwt Ruben een fictieve projectset rond het verzonnen deelplan 'Kade 7', zodat niemand met echt materiaal hoeft te stoeien. Eind maand twee verschuift zijn agenda zichtbaar: minder uitvoerende vragen, meer korte begeleidingsmomenten — en zijn eerste vrije woensdagmiddag in weken. Het aantal collega's dat wekelijks zelfstandig AI gebruikt, stijgt van vijf naar negen.",
              },
              {
                heading: "Maand drie: signaleren zonder politieagent te worden",
                body:
                  "Met het groeiende gebruik komt de laatste uitdaging. Ruben merkt twee dingen op: een collega deelt AI-conceptmails soms zonder de afgesproken controle, en er circuleert in de app-groep een link naar een hippe, niet-goedgekeurde tool. Zijn eerste reflex is er bovenop te zitten — outputs steekproefsgewijs nalopen, de app-groep corrigeren. Hij herkent de reflex gelukkig op tijd als de politieagent-valkuil: een multiplier die controleur wordt, verliest precies het vertrouwen dat begeleiden mogelijk maakt, en collega's gaan hun gebruik verbergen in plaats van verbeteren. Wat hij in plaats daarvan doet: het gesprek voeren bij de bron, klein en zonder publiek. Met de mail-collega bespreekt hij één concreet voorbeeld en de vraag wat controle lastig maakt — het blijkt tijdsdruk, en ze verkorten samen de controlestap tot een checklist van drie punten. Over de tool deelt hij in de app-groep één zin met uitleg in plaats van een verbod: waarom de tool niet op de lijst staat en hoe je een aanvraag bij IT doet als je hem echt wilt. En het structurele patroon — controle die onder druk verslapt — agendeert hij bij de teamlead, want toezien op naleving is en blijft een lijnverantwoordelijkheid. Signaleren doet de multiplier; handhaven doet de lijn.",
                example:
                  "Rubens kwartaalrapportage aan de teamlead paste op een halve pagina: negen actieve gebruikers, twee taken structureel ondersteund, één werkafspraak aangescherpt, één toolvraag naar IT geleid, nul incidenten. Plus één verzoek: vijftien minuten per teamoverleg voor het delen van aanpakken — de multiplier vermenigvuldigt het best via de gewone ritmes van het team.",
              },
            ],
            takeaway:
              "De multiplier vermenigvuldigt vaardigheid in plaats van werk over te nemen: begeleid via vaste leerlijnen, signaleer patronen bij de bron en zonder publiek, en laat handhaving waar die hoort — bij de lijn.",
          },
        },
      ],
    },
  ],
  questions: [
    // --- AI-kansen scannen (niet-security) ---
    {
      type: "mc",
      vraag: "Welke taak uit een afdeling scoort het hoogst op de drie signalen van AI-potentieel (repetitief, tekstueel, foutgevoelig)?",
      opties: [
        "Een boze koper te woord staan over een verschoven opleverdatum",
        "Wekelijks participatieverslagen uitwerken waarin onder tijdsdruk standpunten wegvallen",
        "Eenmalig een visie schrijven voor een nieuwe gebiedsontwikkeling",
        "Bezichtigingen inplannen met optanten via de agenda",
      ],
      juist: 1,
      toelichting: "Verslagen uitwerken is terugkerend schrijfwerk waar onder tijdsdruk fouten in sluipen: alle drie de signalen. De andere taken missen minstens twee signalen of draaien om menselijk contact.",
      tags: ["kansenscan"],
      moeilijkheid: 2,
      isSecurity: false,
    },
    {
      type: "mc",
      vraag: "Een directeur zag op een beurs een indrukwekkende AI-tool en vraagt de multiplier om 'er een toepassing voor te vinden'. Wat is de juiste reactie?",
      opties: [
        "De tool aanschaffen en een pilot starten om het enthousiasme te benutten",
        "De vraag afwijzen omdat tools van beurzen per definitie ongeschikt zijn",
        "De tool naast de takenlijst uit de kansenscan leggen en alleen doorgaan als er een passende taak is",
        "De tool doorsturen naar IT met het verzoek hem alvast goed te keuren",
      ],
      juist: 2,
      toelichting: "Dit is de omgekeerde route: technologie zoekt een probleem. De toets is altijd of er een taak uit de scan bij past — past er geen taak, dan is dat het antwoord.",
      tags: ["kansenscan"],
      moeilijkheid: 3,
      isSecurity: false,
    },
    {
      type: "mc",
      vraag: "Waarom begint een kansenscan bij taken en niet bij functies of tools?",
      opties: [
        "Omdat taken concreet maken waar tijd en fouten zitten, en daarmee waar AI kan helpen",
        "Omdat functieomschrijvingen vertrouwelijk zijn en niet gedeeld mogen worden",
        "Omdat tools pas volgend jaar worden aangeschaft",
        "Omdat de AVG het scannen van functies verbiedt",
      ],
      juist: 0,
      toelichting: "AI-potentieel zit in concrete, terugkerende taken — een functietitel of een tool zegt daar niets over.",
      tags: ["kansenscan"],
      moeilijkheid: 1,
      isSecurity: false,
    },
    {
      type: "mc",
      vraag: "In de impact-risicomatrix belandt een kans in het kwadrant 'hoge impact, hoog risico'. Wat is de juiste omgang daarmee?",
      opties: [
        "Direct starten, want de impact rechtvaardigt het risico",
        "Definitief schrappen, want risico's zijn onacceptabel",
        "Als oefenmateriaal gebruiken voor beginnende collega's",
        "Inplannen als tweede golf, nadat maatregelen zoals anonimisering of een DPIA-light zijn geregeld",
      ],
      juist: 3,
      toelichting: "Hoge impact met hoog risico betekent niet nee, maar eerst maatregelen regelen — het startkwadrant is hoge impact met laag risico.",
      tags: ["kansenscan"],
      moeilijkheid: 3,
      isSecurity: false,
    },
    {
      type: "meerdere_juist",
      vraag: "Welke signalen wijzen erop dat een taak zich goed leent voor AI-ondersteuning? (meerdere antwoorden mogelijk)",
      opties: [
        "De taak komt vaak terug in vergelijkbare vorm",
        "De taak bestaat vooral uit tekst verwerken, samenvatten of structureren",
        "De taak draait om onderhandeling en politiek gevoelige afwegingen",
        "Er ontstaan in de praktijk fouten door haast of vermoeidheid",
      ],
      juist: [0, 1, 3],
      toelichting: "Repetitief, tekstueel en foutgevoelig zijn de drie signalen. Onderhandeling en politieke afwegingen zijn juist taken waar de menselijke component de kern is.",
      tags: ["kansenscan"],
      moeilijkheid: 2,
      isSecurity: false,
    },
    {
      type: "waar_onwaar",
      vraag: "Een taak die veel domeinkennis en weinig structuur vraagt, is meestal de beste eerste AI-kans voor een afdeling.",
      juist: false,
      toelichting: "Onwaar: de beste eerste kansen zijn juist gestructureerd, repetitief en tekstueel. Ongestructureerd expertwerk leent zich slecht voor een eerste toepassing.",
      tags: ["kansenscan"],
      moeilijkheid: 2,
      isSecurity: false,
    },
    {
      type: "scenario_open",
      vraag: "Een enthousiaste projectleider wil volgende week een AI-tool uitrollen voor de hele afdeling, zonder kansenscan of proef. Hij vraagt jou als multiplier om dit te steunen. Wat doe je en waarom?",
      juist: "Ik waardeer het enthousiasme maar steun geen uitrol zonder analyse: ik stel voor de tool eerst naast de takenlijst uit de kansenscan te leggen en te toetsen of er een taak bij past. Past er een taak, dan starten we een kleine proef met vooraf vastgelegde meetcriteria en een evaluatiemoment; het besluit over invoering ligt bij de teamlead. Zo krijgt het enthousiasme richting zonder dat de afdeling een tool zonder taak binnenhaalt.",
      toelichting: "Kern: eerst taak en scan, dan een kleine meetbare proef, en het invoeringsbesluit bij de teamlead — enthousiasme kanaliseren in plaats van blokkeren of blind volgen.",
      tags: ["kansenscan", "verantwoordelijkheid"],
      moeilijkheid: 4,
      isSecurity: false,
    },
    // --- Businesscase en meetbaarheid (niet-security) ---
    {
      type: "mc",
      vraag: "Waarom presenteert een goede AI-businesscase de baten in drie scenario's (voorzichtig, verwacht, gunstig)?",
      opties: [
        "Omdat de directie altijd drie varianten eist",
        "Omdat elk batengetal een schatting is en een case met alleen het gunstige scenario reclame is in plaats van analyse",
        "Omdat drie scenario's de kosten lager laten lijken",
        "Omdat AI-modellen zelf altijd drie antwoorden geven",
      ],
      juist: 1,
      toelichting: "Bandbreedtes maken onzekerheid expliciet en houden de case eerlijk — alleen het gunstige scenario tonen wekt terecht wantrouwen.",
      tags: ["businesscase"],
      moeilijkheid: 2,
      isSecurity: false,
    },
    {
      type: "mc",
      vraag: "Welke kostenpost wordt in AI-businesscases het vaakst vergeten?",
      opties: [
        "De licentiekosten van de tool",
        "De aanschafprijs van hardware",
        "De interne uren voor implementatie, training en structureel beheer",
        "De btw op het abonnement",
      ],
      juist: 2,
      toelichting: "De licentie staat op de factuur en wordt zelden vergeten; de grootste onderschatte posten zijn interne uren voor implementatie, training en beheer.",
      tags: ["businesscase"],
      moeilijkheid: 3,
      isSecurity: false,
    },
    {
      type: "mc",
      vraag: "Waarop baseer je de batenschatting in een businesscase het best?",
      opties: [
        "Op een eigen meting tijdens een kleine proef met de echte taak",
        "Op de tijdwinstpercentages uit de demo van de leverancier",
        "Op branchegemiddelden uit een whitepaper",
        "Op de inschatting van de meest enthousiaste collega",
      ],
      juist: 0,
      toelichting: "Alleen een eigen meting bij een proef geeft geloofwaardige getallen; leveranciersbeloftes en branchegemiddelden zeggen niets over jouw taak en team.",
      tags: ["businesscase", "meetbaarheid"],
      moeilijkheid: 2,
      isSecurity: false,
    },
    {
      type: "mc",
      vraag: "Wat is het doel van een nulmeting vóór de invoering van een AI-toepassing?",
      opties: [
        "Bewijzen dat de huidige werkwijze slecht is",
        "De licentiekosten kunnen berekenen",
        "Voldoen aan de meldplicht bij de Autoriteit Persoonsgegevens",
        "Een vergelijkingsbasis vastleggen waartegen het effect van de toepassing eerlijk gemeten kan worden",
      ],
      juist: 3,
      toelichting: "Zonder nulmeting is elk later resultaat oncontroleerbaar: je kunt winst alleen aantonen ten opzichte van een gemeten uitgangssituatie.",
      tags: ["meetbaarheid"],
      moeilijkheid: 2,
      isSecurity: false,
    },
    {
      type: "mc",
      vraag: "Welk meetcriterium is het sterkst geformuleerd?",
      opties: [
        "De kwaliteit van de verslagen moet duidelijk beter worden",
        "Het team moet tevreden zijn over de tool",
        "In week acht keurt de beoordelaar minstens 80% van de verslagen zonder correctie goed",
        "De AI moet minder fouten maken dan een mens",
      ],
      juist: 2,
      toelichting: "Een goed criterium is vooraf vastgelegd, meetbaar zonder discussie en heeft een drempel — de andere opties zijn niet objectief vast te stellen.",
      tags: ["meetbaarheid"],
      moeilijkheid: 3,
      isSecurity: false,
    },
    {
      type: "mc",
      vraag: "Waarom combineert een goede meetafspraak altijd een gebruikscriterium met een kwaliteitscriterium?",
      opties: [
        "Omdat twee criteria professioneler ogen dan één",
        "Omdat gebruik zonder kwaliteit een risico is en kwaliteit zonder gebruik een hobby",
        "Omdat de teamlead anders geen besluit mag nemen",
        "Omdat kwaliteitscriteria wettelijk verplicht zijn",
      ],
      juist: 1,
      toelichting: "Een veelgebruikte toepassing met slechte output veroorzaakt schade; een perfecte toepassing die niemand gebruikt levert niets op — je moet beide bewaken.",
      tags: ["meetbaarheid"],
      moeilijkheid: 3,
      isSecurity: false,
    },
    {
      type: "mc",
      vraag: "Een proef haalt na de afgesproken verlenging opnieuw de drempel niet, maar er is al veel geïnvesteerd. Wat is het juiste besluit?",
      opties: [
        "Stoppen conform afspraak en de geleerde lessen documenteren; de eerdere investering is geen argument om door te gaan",
        "Doorgaan, want anders zijn de gemaakte kosten weggegooid geld",
        "De drempel verlagen zodat de proef alsnog slaagt",
        "De meting overdoen met een gunstiger meetmethode",
      ],
      juist: 0,
      toelichting: "Gemaakte kosten zijn onomkeerbaar; de enige vraag is of doorgaan vanaf nu meer oplevert dan kost. Drempels of metingen achteraf aanpassen ondermijnt elke toekomstige evaluatie.",
      tags: ["businesscase", "meetbaarheid"],
      moeilijkheid: 4,
      isSecurity: false,
    },
    {
      type: "meerdere_juist",
      vraag: "Welke posten horen thuis aan de kostenkant van een AI-businesscase? (meerdere antwoorden mogelijk)",
      opties: [
        "Licenties en variabele gebruikskosten",
        "Interne uren voor implementatie en het inrichten van werkstromen",
        "Training en de productiviteitsdip in de leerperiode",
        "Structureel beheer, kwaliteitscontrole en periodieke herbeoordeling",
      ],
      juist: [0, 1, 2, 3],
      toelichting: "Alle vier de categorieën horen erin: licenties, implementatie, training en beheer. Een case waarin interne uren gratis zijn, vergelijkt appels met peren.",
      tags: ["businesscase"],
      moeilijkheid: 3,
      isSecurity: false,
    },
    {
      type: "meerdere_juist",
      vraag: "Welke afspraken horen vóór de start van een AI-proef te zijn vastgelegd? (meerdere antwoorden mogelijk)",
      opties: [
        "De meetcriteria met drempels voor doorgaan, bijsturen of stoppen",
        "De evaluatiemomenten en wie op basis van de meting beslist",
        "De marketingcampagne voor de succesvolle afronding",
        "De nulmeting van de huidige werkwijze",
      ],
      juist: [0, 1, 3],
      toelichting: "Criteria, evaluatiemomenten met beslisser en een nulmeting horen vooraf vast te liggen; een succescampagne vooraf plannen gaat voorbij aan de mogelijkheid dat de proef faalt.",
      tags: ["meetbaarheid"],
      moeilijkheid: 3,
      isSecurity: false,
    },
    {
      type: "waar_onwaar",
      vraag: "In een AI-businesscase horen naast licentiekosten ook de kosten van training, implementatie en structureel beheer te worden meegerekend.",
      juist: true,
      toelichting: "Waar: de werkelijke jaarlast is vaak een veelvoud van de licentie; wie alleen de licentie rekent, onderschat de kosten structureel.",
      tags: ["businesscase"],
      moeilijkheid: 1,
      isSecurity: false,
    },
    {
      type: "waar_onwaar",
      vraag: "Als een evaluatie tegenvalt, is het verstandig om de meetcriteria achteraf bij te stellen zodat de proef alsnog kan slagen.",
      juist: false,
      toelichting: "Onwaar: criteria achteraf bijstellen maakt elke evaluatie betekenisloos. Bij tegenvallende resultaten hoort bijsturen binnen de afspraak, of eerlijk stoppen.",
      tags: ["meetbaarheid"],
      moeilijkheid: 2,
      isSecurity: false,
    },
    {
      type: "scenario_open",
      vraag: "Je businesscase voor een AI-verslagassistent is goedgekeurd, maar bij de evaluatie in week acht blijkt dat de tijdwinst boven de drempel zit terwijl twee van de vijf collega's de toepassing niet gebruiken. Wat adviseer je de teamlead?",
      juist: "Ik adviseer om niet door te gaan alsof alles geslaagd is: het gebruikscriterium wordt niet gehaald en dat was vooraf een volwaardige drempel. Mijn voorstel is één afgebakende verlenging waarin we eerst met de twee afhakers achterhalen waar zij op vastlopen en de werkstroom daarop aanpassen, bijvoorbeeld met een extra samen-doen-sessie. Bij de nameting gelden dezelfde criteria; worden die dan weer niet gehaald, dan stoppen we conform afspraak.",
      toelichting: "Kern: het gebruikscriterium serieus nemen, de oorzaak bij de afhakers onderzoeken, één verlenging met ongewijzigde criteria en een duidelijke stopoptie.",
      tags: ["meetbaarheid", "begeleiden"],
      moeilijkheid: 4,
      isSecurity: false,
    },
    // --- Verantwoordelijkheden en rollen (niet-security) ---
    {
      type: "mc",
      vraag: "Wie blijft verantwoordelijk voor de inhoud wanneer AI-output in het werk wordt gebruikt?",
      opties: [
        "De leverancier van het AI-model",
        "De multiplier die de werkstroom heeft opgezet",
        "De medewerker die de output gebruikt",
        "De teamlead die de toepassing heeft goedgekeurd",
      ],
      juist: 2,
      toelichting: "De gebruiker blijft volledig verantwoordelijk voor elke toepassing van AI-output, ook als de fout aantoonbaar door het model is gemaakt.",
      tags: ["verantwoordelijkheid"],
      moeilijkheid: 1,
      isSecurity: false,
    },
    {
      type: "mc",
      vraag: "Wat is de kern van de multiplierrol binnen een afdeling?",
      opties: [
        "AI-taken van collega's overnemen zodat het werk sneller gaat",
        "Collega's begeleiden, kansen en risico's signaleren, en eerste aanspreekpunt zijn vóór de formele kanalen",
        "Beslissen welke gegevens in AI-tools mogen worden ingevoerd",
        "Toezien op naleving en overtredingen sanctioneren",
      ],
      juist: 1,
      toelichting: "De multiplier begeleidt en signaleert. Werk overnemen maakt een loket, privacybeslissingen horen bij de privacycontactpersoon en handhaving bij de lijn.",
      tags: ["verantwoordelijkheid"],
      moeilijkheid: 2,
      isSecurity: false,
    },
    {
      type: "mc",
      vraag: "Een teamlead heeft het te druk om de AI-werkafspraken vast te stellen, terwijl er in het team eigen gewoontes ontstaan. Wat is de beste actie van de multiplier?",
      opties: [
        "De werkafspraken zelf voorlopig vaststellen en later laten bekrachtigen",
        "Wachten tot de teamlead tijd heeft, want het is diens verantwoordelijkheid",
        "De afspraken door het team laten vaststellen bij meerderheid van stemmen",
        "Het besluit beslisbaar maken: een kort beslisdocument voorbereiden en er agendatijd voor vragen",
      ],
      juist: 3,
      toelichting: "De multiplier maakt besluiten klein en beslisbaar, maar neemt ze niet over: afspraken zonder mandaat zijn vrijblijvend en ontslaan de teamlead van diens verantwoordelijkheid.",
      tags: ["verantwoordelijkheid"],
      moeilijkheid: 4,
      isSecurity: false,
    },
    {
      type: "waar_onwaar",
      vraag: "Een multiplier kan collega's een herkansing voor een examen toekennen.",
      juist: false,
      toelichting: "Onwaar: herkansingen toekennen is een bevoegdheid van de teamlead, niet van de multiplier.",
      tags: ["verantwoordelijkheid"],
      moeilijkheid: 2,
      isSecurity: false,
    },
    // --- Collega's begeleiden (niet-security) ---
    {
      type: "mc",
      vraag: "Wat is de juiste volgorde en kern van het didactische model voor het aanleren van AI-vaardigheden op de werkvloer?",
      opties: [
        "Voordoen met hardop denken, samen doen met afnemende sturing, zelf doen met een vangnet",
        "Zelf laten proberen, fouten laten maken, daarna de theorie uitleggen",
        "Een plenaire presentatie, een handleiding, een toets",
        "Samen doen, voordoen, zelf doen — de volgorde maakt niet uit",
      ],
      juist: 0,
      toelichting: "Voordoen-samen doen-zelf doen werkt in die volgorde, met echt werk en afnemende ondersteuning; presentaties en handleidingen alleen brengen vaardigheden niet over.",
      tags: ["begeleiden"],
      moeilijkheid: 2,
      isSecurity: false,
    },
    {
      type: "mc",
      vraag: "Een ervaren collega zegt: 'Ik moet niks van AI hebben, mijn werk is te belangrijk voor die onzin.' Wat is de sterkste eerste reactie van de multiplier?",
      opties: [
        "De teamlead vragen om deelname verplicht te stellen",
        "Uitleggen dat AI-geletterdheid wettelijk verplicht is onder de EU AI Act",
        "Doorvragen naar de zorgen erachter en de vakkennis van de collega benutten, bijvoorbeeld bij kwaliteitscontrole",
        "De collega voorlopig overslaan en met de enthousiaste collega's beginnen",
      ],
      juist: 2,
      toelichting: "Scepsis bevat vaak bruikbare risico-informatie. Doorvragen en de expertise een rol geven maakt van een tegenstander een kwaliteitsbewaker; dwang kweekt stille sabotage.",
      tags: ["begeleiden"],
      moeilijkheid: 3,
      isSecurity: false,
    },
    {
      type: "mc",
      vraag: "Een collega vraagt de multiplier wekelijks om documenten 'even door de AI te halen'. Wat is de beste reactie?",
      opties: [
        "Het blijven doen, want zo blijft de kwaliteit gewaarborgd",
        "Weigeren zonder alternatief, want het is niet de taak van de multiplier",
        "Het doorsturen naar een andere collega die tijd heeft",
        "Eén keer voordoen terwijl de collega meekijkt, en daarna samen doen met diens eigen volgende document",
      ],
      juist: 3,
      toelichting: "Een multiplier die werk overneemt wordt een loket en vermenigvuldigt niets. De vraag omzetten in een leermoment volgens voordoen-samen doen-zelf doen wel.",
      tags: ["begeleiden"],
      moeilijkheid: 3,
      isSecurity: false,
    },
    {
      type: "mc",
      vraag: "Wat kenmerkt een goede oefenomgeving voor AI-vaardigheden in een afdeling?",
      opties: [
        "Collega's oefenen met hun echte lopende dossiers, want dat is het meest realistisch",
        "Goedgekeurde tools, fictief of grondig geanonimiseerd oefenmateriaal, en een klimaat waarin fouten bespreekbaar zijn",
        "Een gratis chatbot, zodat fouten geen licentiekosten veroorzaken",
        "Individueel oefenen zonder pottenkijkers, zodat niemand zich hoeft te schamen",
      ],
      juist: 1,
      toelichting: "Veilig oefenen is technisch dicht (goedgekeurde tools, fictief materiaal) en sociaal open (fouten als leermateriaal). Echte dossiers en gratis tools introduceren juist risico's.",
      tags: ["begeleiden"],
      moeilijkheid: 2,
      isSecurity: false,
    },
    {
      type: "mc",
      vraag: "Waarom richt een effectieve multiplier zich vooral op het 'stille midden' van het team, en niet primair op de sceptici en enthousiastelingen?",
      opties: [
        "Omdat sceptici en enthousiastelingen toch niet veranderen",
        "Omdat het middenveld bepaalt of AI-gebruik normaal wordt, en juist reageert op zichtbaar gedrag van gewone collega's",
        "Omdat het middenveld de minste begeleiding nodig heeft",
        "Omdat de uitersten al door de teamlead worden begeleid",
      ],
      juist: 1,
      toelichting: "De meeste collega's zijn welwillend maar afwachtend; zij maken of breken de adoptie en haken vaak af op kleine praktische drempels, niet op principes.",
      tags: ["begeleiden"],
      moeilijkheid: 3,
      isSecurity: false,
    },
    {
      type: "mc",
      vraag: "Een collega laat trots een AI-samenvatting zien waarin het kernbesluit van de vergadering ontbreekt. Wat is didactisch de sterkste reactie?",
      opties: [
        "De fout direct aanwijzen zodat de collega hem niet nog eens maakt",
        "De samenvatting zelf corrigeren en terugsturen",
        "Waarderen wat werkt en de collega de output naast de bron laten leggen, zodat die de fout zelf ontdekt",
        "Niets zeggen om het enthousiasme niet te temperen",
      ],
      juist: 2,
      toelichting: "Zelf ontdekte fouten beklijven; aangewezen fouten krenken. Bovendien is vergelijken met de bron precies de verificatievaardigheid die de collega moet leren.",
      tags: ["begeleiden"],
      moeilijkheid: 3,
      isSecurity: false,
    },
    {
      type: "meerdere_juist",
      vraag: "Welke aanpakken helpen bij een sceptische collega? (meerdere antwoorden mogelijk)",
      opties: [
        "Doorvragen naar de concrete zorgen achter de scepsis",
        "Een klein, vrijblijvend experiment aanbieden rond een taak waar de collega zelf last van heeft",
        "De scepsis benutten door de collega een rol te geven in kwaliteitscontrole",
        "Deelname verplicht stellen zodat de achterstand niet oploopt",
      ],
      juist: [0, 1, 2],
      toelichting: "Doorvragen, klein en vrijblijvend beginnen en de kritische blik benutten werken; dwang kweekt stille sabotage en verplicht enthousiasme bestaat niet.",
      tags: ["begeleiden"],
      moeilijkheid: 3,
      isSecurity: false,
    },
    {
      type: "waar_onwaar",
      vraag: "Een geslaagd oefenresultaat uit een trainingsessie mag direct naar echte bewoners worden gestuurd, mits de tekst goed is.",
      juist: false,
      toelichting: "Onwaar: oefenmateriaal blijft oefenmateriaal. Echte communicatie doorloopt altijd het normale controleproces, ongeacht de kwaliteit van het oefenresultaat.",
      tags: ["begeleiden"],
      moeilijkheid: 3,
      isSecurity: false,
    },
    {
      type: "scenario_open",
      vraag: "Drie maanden na de introductie gebruiken vijf van de twaalf collega's in jouw afdeling AI wekelijks; de rest deed na de training niets meer. De teamlead vraagt jou als multiplier om een plan. Beschrijf je aanpak.",
      juist: "Ik zoek eerst per afhaker uit waaróm het stil is gevallen: meestal zijn dat praktische drempels of onzekerheid, geen principiële bezwaren, dus voer ik korte individuele gesprekken rond hun eigen taken. Daarna organiseer ik per veelvoorkomende taak een korte cyclus van voordoen en samen doen, met fictief oefenmateriaal en ingeplande vervolgmomenten. Successen van gewone collega's maak ik zichtbaar in het teamoverleg, en na zes weken meet ik het wekelijkse gebruik opnieuw en rapporteer ik aan de teamlead.",
      toelichting: "Kern: oorzaken per persoon achterhalen in plaats van een nieuwe plenaire sessie, begeleiden via voordoen-samen doen-zelf doen, en het effect meetbaar terugkoppelen.",
      tags: ["begeleiden", "meetbaarheid"],
      moeilijkheid: 4,
      isSecurity: false,
    },
    // --- DPIA-light (security) ---
    {
      type: "mc",
      vraag: "Welke vijf vragen beantwoordt een DPIA-light?",
      opties: [
        "Welke tool, welke leverancier, welke kosten, welke baten, welke einddatum",
        "Welke gegevens, welk doel, welke risico's, welke maatregelen, wie is verantwoordelijk",
        "Wie is de gebruiker, wie is de teamlead, wie is de beoordelaar, wie is de admin, wie is de multiplier",
        "Welke wet, welke boete, welke toezichthouder, welke termijn, welke uitzondering",
      ],
      juist: 1,
      toelichting: "De DPIA-light beantwoordt: welke gegevens, welk doel, welke risico's, welke maatregelen en wie is verantwoordelijk.",
      tags: ["DPIA", "security"],
      moeilijkheid: 2,
      isSecurity: true,
    },
    {
      type: "mc",
      vraag: "In welk geval is een volledige DPIA wettelijk verplicht in plaats van een DPIA-light?",
      opties: [
        "Bij elke toepassing die e-mailadressen verwerkt",
        "Bij elke toepassing die langer dan een jaar draait",
        "Bij grootschalige of systematische verwerking met hoog risico, zoals AI die medewerkers beoordeelt of gedrag van bewoners monitort",
        "Bij elke toepassing die door meer dan vijf collega's wordt gebruikt",
      ],
      juist: 2,
      toelichting: "De volledige DPIA is verplicht bij waarschijnlijk hoog risico, met als kerntriggers het beoordelen van personen en systematische monitoring van gedrag.",
      tags: ["DPIA", "security"],
      moeilijkheid: 3,
      isSecurity: true,
    },
    {
      type: "mc",
      vraag: "Wie beslist bij twijfel of een DPIA-light volstaat of dat een volledige DPIA nodig is?",
      opties: [
        "De privacycontactpersoon",
        "De multiplier, als eerste aanspreekpunt voor AI in de afdeling",
        "De teamlead, als eigenaar van het teamproces",
        "De medewerker die de toepassing gaat gebruiken",
      ],
      juist: 0,
      toelichting: "Bij twijfel beslist altijd de privacycontactpersoon; de multiplier signaleert en levert de analyse aan, maar oordeelt niet.",
      tags: ["DPIA", "security", "verantwoordelijkheid"],
      moeilijkheid: 2,
      isSecurity: true,
    },
    {
      type: "mc",
      vraag: "Een team wil live met een AI-toepassing waarvan de DPIA-light op orde is, maar de beoogd eigenaar is net vertrokken. Het team stelt voor 'de afdeling' als eigenaar te noteren. Wat is juist?",
      opties: [
        "Akkoord: collectief eigenaarschap volstaat zolang de maatregelen goed beschreven zijn",
        "De livegang gaat niet door totdat een eigenaar met naam is vastgelegd",
        "De multiplier wordt automatisch eigenaar tot er een opvolger is",
        "De toepassing mag drie maanden proefdraaien zonder eigenaar",
      ],
      juist: 1,
      toelichting: "Een toepassing zonder vastgelegde eigenaar gaat niet live, en collectief eigenaarschap is in de praktijk geen eigenaarschap.",
      tags: ["DPIA", "security", "verantwoordelijkheid"],
      moeilijkheid: 3,
      isSecurity: true,
    },
    {
      type: "mc",
      vraag: "Wat is een correct geformuleerd risico voor betrokkenen in een DPIA-light?",
      opties: [
        "De afdeling kan reputatieschade oplopen bij een datalek",
        "De licentiekosten kunnen stijgen bij intensiever gebruik",
        "Het project kan vertraging oplopen als de tool uitvalt",
        "Een huurder wiens urgente reparatieverzoek verkeerd wordt gecategoriseerd, zit dagen in een onveilige situatie",
      ],
      juist: 3,
      toelichting: "Risico's in een DPIA-light gaan over de mensen van wie de gegevens zijn (wie-wat-gevolg), niet over risico's voor de organisatie zelf.",
      tags: ["DPIA", "security"],
      moeilijkheid: 3,
      isSecurity: true,
    },
    {
      type: "mc",
      vraag: "Tijdens een DPIA-light-gesprek stelt een teamlid voor om het model ook een 'kansrijkheid-score' per woningzoekende te laten berekenen. Wat is de juiste reactie van de multiplier?",
      opties: [
        "Signaleren dat het rangschikken van personen buiten de DPIA-light valt en dit via de privacycontactpersoon laten beoordelen",
        "Het toevoegen aan de DPIA-light als extra risico met een maatregel",
        "Het toestaan mits de scores alleen intern worden gebruikt",
        "Het afwijzen omdat scores nooit accuraat zijn",
      ],
      juist: 0,
      toelichting: "Personen beoordelen of rangschikken is een trigger voor zwaardere toetsing; de multiplier signaleert en legt voor, in plaats van het in de light-versie te absorberen.",
      tags: ["DPIA", "security"],
      moeilijkheid: 4,
      isSecurity: true,
    },
    {
      type: "waar_onwaar",
      vraag: "Een multiplier mag zelf besluiten dat een AI-toepassing zonder DPIA-light live kan, zolang het risico laag lijkt.",
      juist: false,
      toelichting: "Onwaar: de DPIA-light wordt vastgelegd vóór de eerste echte verwerking met (mogelijke) persoonsgegevens, en het oordeel over risiconiveaus ligt bij de privacycontactpersoon.",
      tags: ["DPIA", "security"],
      moeilijkheid: 2,
      isSecurity: true,
    },
    {
      type: "waar_onwaar",
      vraag: "Gepseudonimiseerde gegevens, zoals 'koper 12' met postcode en koopsom, vallen niet onder de AVG en hoeven dus niet in een DPIA-light te worden meegenomen.",
      juist: false,
      toelichting: "Onwaar: gepseudonimiseerde gegevens blijven herleidbaar en vallen onder de AVG. Alleen écht anonieme gegevens — met geen redelijke inspanning herleidbaar — vallen erbuiten.",
      tags: ["DPIA", "security"],
      moeilijkheid: 3,
      isSecurity: true,
    },
    {
      type: "meerdere_juist",
      vraag: "Welke risicocategorieën voor betrokkenen horen standaard te worden nagelopen in een DPIA-light? (meerdere antwoorden mogelijk)",
      opties: [
        "Onjuiste output die doorwerkt in iemands dossier of behandeling",
        "Lekken van gegevens naar een tool, leverancier of onbevoegde collega's",
        "Bias waardoor groepen stelselmatig ongelijk worden behandeld",
        "Stijgende licentiekosten voor de afdeling",
      ],
      juist: [0, 1, 2],
      toelichting: "Onjuiste output, lekken en bias zijn de drie hoofdcategorieën van risico's voor betrokkenen; licentiekosten zijn een organisatierisico en horen in de businesscase.",
      tags: ["DPIA", "security"],
      moeilijkheid: 3,
      isSecurity: true,
    },
    {
      type: "meerdere_juist",
      vraag: "Welke elementen moeten in een DPIA-light zijn vastgelegd vóórdat een toepassing live gaat? (meerdere antwoorden mogelijk)",
      opties: [
        "De verwerkte gegevenscategorieën, na de minimalisatietoets",
        "Een welbepaald en gerechtvaardigd doel",
        "Per benoemd risico een passende, uitvoerbare maatregel",
        "Een eigenaar en aanspreekpunt, met naam",
      ],
      juist: [0, 1, 2, 3],
      toelichting: "Alle vier zijn vereist: gegevens, doel, risico-maatregelkoppeling en belegd eigenaarschap. Ontbreekt de eigenaar, dan gaat de toepassing niet live.",
      tags: ["DPIA", "security"],
      moeilijkheid: 3,
      isSecurity: true,
    },
    // --- Incidenten, escalatie en toezicht (security) ---
    {
      type: "mc",
      vraag: "Een collega vertelt je vrijdagmiddag dat ze gisteren een deelnemerslijst met namen en e-mailadressen in een gratis chatbot heeft geplakt. Wat doe je als multiplier?",
      opties: [
        "Maandag samen de meldprocedure doorlopen, na het weekend is er overzicht",
        "De collega vragen het gesprek in de chatbot te verwijderen en het erbij te laten",
        "Nog diezelfde middag samen melden bij IT en de privacycontactpersoon, met de feiten op een rij",
        "Eerst zelf beoordelen of het wel echt een datalek is voordat je iemand lastigvalt",
      ],
      juist: 2,
      toelichting: "Incidenten meld je direct, ook bij twijfel en ook buiten kantooruren; de 72-uurstermijn loopt vanaf ontdekking. Zelf verwijderen of eerst zelf beoordelen vertraagt en vernietigt feiten.",
      tags: ["security", "verantwoordelijkheid"],
      moeilijkheid: 3,
      isSecurity: true,
    },
    {
      type: "mc",
      vraag: "Wanneer begint de 72-uurstermijn waarbinnen beoordeeld moet worden of een datalek bij de Autoriteit Persoonsgegevens gemeld moet worden?",
      opties: [
        "Bij het moment van ontdekking van het mogelijke lek",
        "Zodra vaststaat dat het echt een datalek is",
        "Bij de eerstvolgende werkdag na het incident",
        "Zodra de betrokkenen zijn geïnformeerd",
      ],
      juist: 0,
      toelichting: "De termijn begint bij ontdekking, niet bij bevestiging — daarom moet elke melding direct de route in, ook bij twijfel.",
      tags: ["security"],
      moeilijkheid: 3,
      isSecurity: true,
    },
    {
      type: "mc",
      vraag: "Je ontdekt dat een collega al weken een niet-goedgekeurde AI-tool gebruikt voor het herschrijven van interne memo's. Wat is het juiste escalatiepad?",
      opties: [
        "Niets doen: er zitten geen persoonsgegevens in memo's, dus er is geen risico",
        "De collega een officiële waarschuwing geven namens de afdeling",
        "Alleen de tool laten blokkeren door IT en het verder stil houden",
        "De collega het gebruik direct laten staken, het melden via de incidentroute en het gedragspatroon bij de teamlead adresseren",
      ],
      juist: 3,
      toelichting: "Bedrijfsinformatie in een niet-goedgekeurde tool is een te melden incident, en structurele beleidsschending is een zaak voor de teamlead; sanctioneren is nooit aan de multiplier.",
      tags: ["security", "verantwoordelijkheid"],
      moeilijkheid: 4,
      isSecurity: true,
    },
    {
      type: "mc",
      vraag: "Een collega twijfelt of verkoopgesprekverslagen na anonimisering veilig genoeg zijn voor AI-verwerking. De multiplier vermoedt zelf van wel. Wat is de juiste actie?",
      opties: [
        "Groen licht geven: de multiplier is opgeleid om dit in te schatten",
        "De verslagen voor de zekerheid helemaal verbieden voor AI-gebruik",
        "De vraag met een voorbereide casus voorleggen aan de privacycontactpersoon en het vermoeden als input meegeven",
        "De collega zelf laten beslissen, want die is verantwoordelijk voor de output",
      ],
      juist: 2,
      toelichting: "Of anonimisering volstaat is een privacyoordeel en dus aan de privacycontactpersoon; het vermoeden van de multiplier is waardevolle input, geen beslissing.",
      tags: ["security", "verantwoordelijkheid", "DPIA"],
      moeilijkheid: 4,
      isSecurity: true,
    },
    {
      type: "mc",
      vraag: "Hoe houdt een multiplier goed toezicht op het AI-gebruik in de afdeling zonder politieagent te worden?",
      opties: [
        "Steekproefsgewijs outputs van collega's controleren zonder dat ze het weten",
        "Patronen signaleren, het gesprek klein en zonder publiek voeren bij de bron, en structurele naleving bij de teamlead beleggen",
        "Alle AI-gebruik via de multiplier laten lopen zodat er zicht op is",
        "Een anonieme meldbox inrichten waarin collega's elkaar kunnen rapporteren",
      ],
      juist: 1,
      toelichting: "Signaleren doet de multiplier, handhaven doet de lijn. Heimelijke controle en centralisatie vernietigen het vertrouwen dat begeleiden mogelijk maakt.",
      tags: ["security", "verantwoordelijkheid", "begeleiden"],
      moeilijkheid: 4,
      isSecurity: true,
    },
    {
      type: "mc",
      vraag: "Je hoort via via dat een junior collega mogelijk een concept-biedstrategie voor een tender in een AI-tool heeft geplakt. De collega zelf zwijgt erover. Wat is de juiste aanpak?",
      opties: [
        "Wachten op een officiële melding, want geruchten zijn geen feiten",
        "De collega dezelfde dag persoonlijk opzoeken, de meldcultuur uitleggen en samen direct de incidentroute volgen",
        "Het vermoeden anoniem doorgeven aan de directie",
        "De collega in het teamoverleg vragen of het klopt",
      ],
      juist: 1,
      toelichting: "Een vermoeden van een incident met verboden invoer moet de meldroute in, maar menselijk: direct en persoonlijk, zonder publieke confrontatie, met de nadruk dat melden geen sanctie oplevert.",
      tags: ["security", "verantwoordelijkheid"],
      moeilijkheid: 5,
      isSecurity: true,
    },
    {
      type: "waar_onwaar",
      vraag: "Een melding van een AI-incident leidt nooit tot een sanctie voor de melder; niet melden of verzwijgen is wél verwijtbaar.",
      juist: true,
      toelichting: "Waar: Blauwhoed hanteert een meldcultuur zonder schuldvraag. Snel melden beperkt schade; verzwijgen is het echte risico.",
      tags: ["security"],
      moeilijkheid: 1,
      isSecurity: true,
    },
    {
      type: "meerdere_juist",
      vraag: "Welke situaties meld je als AI-incident bij IT en de privacycontactpersoon? (meerdere antwoorden mogelijk)",
      opties: [
        "Een klantenlijst met persoonsgegevens is in een prompt geplakt",
        "Een tenderdocument is geüpload naar een niet-goedgekeurde tool",
        "AI-output met verzonnen feiten is al extern gedeeld",
        "Een collega heeft in een goedgekeurde tool een geanonimiseerd oefenverslag samengevat",
      ],
      juist: [0, 1, 2],
      toelichting: "De eerste drie zijn te melden incidenten. Normaal gebruik van een goedgekeurde tool met geanonimiseerd materiaal is precies de bedoeling.",
      tags: ["security"],
      moeilijkheid: 2,
      isSecurity: true,
    },
  ],
  assignments: [
    {
      moduleSlug: "ai-kansen-scannen",
      titel: "AI-kansenscan voor team Kust & Kade",
      opdrachttekst:
        "Het fictieve team Kust & Kade (acht personen) werkt aan een binnenstedelijke herontwikkeling met 120 woningen en voert onder meer deze taken uit: participatieverslagen uitwerken, wekelijkse voortgangsrapportages opstellen, kopersvragen beantwoorden, tenderuitvragen analyseren, bewonersbrieven schrijven en biedingsstrategieën voorbereiden. Voer voor dit team een AI-kansenscan uit. Scoor minimaal zes taken op de drie signalen (repetitief, tekstueel, foutgevoelig) met per taak één zin onderbouwing. Plaats de taken vervolgens in de impact-risicomatrix en benoem expliciet welke taken afvallen vanwege verboden invoer. Sluit af met een gemotiveerde keuze voor één startkans, inclusief de randvoorwaarden die vóór de start geregeld moeten zijn.",
      moeilijkheid: 3,
      type: "workflow",
      rubric: {
        criteria: [
          {
            naam: "Systematiek van de scan",
            gewicht: 40,
            max: 40,
            niveaus: {
              goed: "Minimaal zes taken zijn consequent gescoord op alle drie de signalen, elk met een concrete onderbouwing van één zin.",
              voldoende: "De meeste taken zijn gescoord op de drie signalen, maar de onderbouwing is bij enkele taken oppervlakkig of ontbreekt.",
              onvoldoende: "De scoring is onvolledig of willekeurig en de drie signalen worden niet herkenbaar toegepast.",
            },
          },
          {
            naam: "Risicobewustzijn",
            gewicht: 30,
            max: 30,
            niveaus: {
              goed: "Taken met verboden invoer (zoals biedingsstrategieën) zijn expliciet uitgesloten of van randvoorwaarden voorzien, met juiste verwijzing naar het beleid.",
              voldoende: "Risicovolle taken zijn deels herkend, maar de uitsluiting of randvoorwaarde is niet overal scherp benoemd.",
              onvoldoende: "Taken met verboden invoer zijn zonder voorbehoud als kans opgenomen.",
            },
          },
          {
            naam: "Kwaliteit van de startkeuze",
            gewicht: 30,
            max: 30,
            niveaus: {
              goed: "De gekozen startkans komt logisch uit de matrix, is klein en zichtbaar, en de randvoorwaarden vóór de start zijn concreet benoemd.",
              voldoende: "De startkeuze is verdedigbaar maar de koppeling met de matrix of de randvoorwaarden blijft deels impliciet.",
              onvoldoende: "De startkeuze volgt niet uit de analyse of er ontbreken essentiële randvoorwaarden.",
            },
          },
        ],
      },
      startcontext: {
        team: "Kust & Kade (fictief)",
        omvang: "8 personen",
        project: "binnenstedelijke herontwikkeling, 120 woningen",
        aangeleverdeTaken: 6,
      },
      referentieUitwerking:
        "Een sterke uitwerking scoort alle zes taken expliciet en sluit biedingsstrategieën direct uit als verboden invoer, met verwijzing naar het AI-gebruiksbeleid. Participatieverslagen en voortgangsrapportages komen als beste kansen uit de matrix; kopersvragen krijgen de randvoorwaarde van anonimisering. De startkeuze valt op één kleine, zichtbare taak — bijvoorbeeld voortgangsrapportages — met als randvoorwaarden een nulmeting, een goedgekeurde tool en een afgesproken controleslag. De motivatie verwijst naar snelheid van zichtbaar resultaat en laag risico, niet naar de indrukwekkendste technologie.",
      beoordeling: "ai",
    },
    {
      moduleSlug: "ai-kansen-scannen",
      titel: "Tegengas geven: de tool zonder taak",
      opdrachttekst:
        "Je ontvangt een (fictieve) interne memo van projectdirecteur Vera de Wit, die na een branche-event voorstelt om per direct een AI-visualisatietool aan te schaffen voor alle projectteams, 'omdat de concurrent er ook mee werkt'. Analyseer deze memo als multiplier. Benoem welke stappen in de memo worden overgeslagen en welke vragen beantwoord moeten worden voordat een besluit mogelijk is. Schrijf vervolgens een constructieve reactie van maximaal 250 woorden aan Vera, waarin je het enthousiasme behoudt maar de juiste volgorde voorstelt: eerst taak en scan, dan tool. Vermijd de toon van een politieagent; schrijf als methodische bondgenoot.",
      moeilijkheid: 4,
      type: "document_analyse",
      rubric: {
        criteria: [
          {
            naam: "Analyse van de memo",
            gewicht: 35,
            max: 35,
            niveaus: {
              goed: "De overgeslagen stappen (taakanalyse, kansenscan, eenvoudig alternatief, besluitvorming) zijn volledig en precies benoemd.",
              voldoende: "De belangrijkste omissies zijn herkend, maar de analyse mist diepgang of volledigheid.",
              onvoldoende: "De analyse blijft steken in een mening over de tool zonder de procesfouten te benoemen.",
            },
          },
          {
            naam: "Kwaliteit van de reactie",
            gewicht: 35,
            max: 35,
            niveaus: {
              goed: "De reactie is constructief, behoudt het enthousiasme, stelt de juiste volgorde voor en blijft binnen de woordgrens.",
              voldoende: "De reactie bevat de juiste inhoud maar is belerend van toon of onnodig lang.",
              onvoldoende: "De reactie blokkeert het initiatief zonder alternatief of stemt zonder analyse in met de aanschaf.",
            },
          },
          {
            naam: "Rolvastheid",
            gewicht: 30,
            max: 30,
            niveaus: {
              goed: "De uitwerking laat het besluit expliciet bij de lijn en positioneert de multiplier als begeleider van het proces.",
              voldoende: "De rolverdeling klopt grotendeels, maar de multiplier neemt op onderdelen te veel of te weinig ruimte.",
              onvoldoende: "De multiplier beslist zelf over aanschaf of wijst het verzoek af zonder de juiste route te benoemen.",
            },
          },
        ],
      },
      startcontext: {
        document: "memo-visualisatietool.pdf (fictief)",
        afzender: "Vera de Wit, projectdirecteur (fictief)",
        maxWoordenReactie: 250,
      },
      referentieUitwerking:
        "De analyse benoemt dat de memo een oplossing vooropstelt zonder taak, geen gebruik maakt van de bestaande kansenscan, het eenvoudige alternatief (het huidige uitbestede visualisatiewerk) negeert en het besluit buiten de teamlead om plant. De reactie waardeert het initiatief, stelt voor de tool langs de takenlijst te leggen en biedt aan dit binnen twee weken voor te bereiden. Het besluit wordt expliciet bij de directie en teamlead gelaten, met de kansenscan als beslisgrond.",
      beoordeling: "ai",
    },
    {
      moduleSlug: "businesscase-en-meetbaarheid",
      titel: "Businesscase van één pagina",
      opdrachttekst:
        "Het fictieve team Kopersbegeleiding Noordwal overweegt een AI-assistent voor conceptantwoorden op kopersvragen over meerwerk en opleverdata. Uit een proef van vier weken zijn meetgegevens beschikbaar (zie startcontext). Stel een businesscase van exact één pagina op volgens de zes vaste onderdelen: taak, huidige situatie, baten in drie scenario's, volledige kosten, risico's met maatregelen, en de meetafspraak. Reken de interne uren mee tegen het gegeven uurtarief en formuleer een expliciete stopregel. Lever de pagina in als uitwerking; een eventuele berekening mag als bijlage.",
      moeilijkheid: 4,
      type: "upload",
      rubric: {
        criteria: [
          {
            naam: "Baten met bandbreedtes",
            gewicht: 35,
            max: 35,
            niveaus: {
              goed: "De baten zijn in drie scenario's doorgerekend op basis van de proefdata, inclusief een meetbare kwaliteitsbaat.",
              voldoende: "Er zijn bandbreedtes gebruikt, maar de onderbouwing vanuit de proefdata is deels onnavolgbaar.",
              onvoldoende: "Alleen een gunstig scenario of getallen zonder bron uit de proef.",
            },
          },
          {
            naam: "Volledigheid van de kosten",
            gewicht: 35,
            max: 35,
            niveaus: {
              goed: "Licenties, implementatie, training en beheer zijn alle vier meegerekend tegen het gegeven uurtarief, voor jaar één en structureel.",
              voldoende: "De meeste kostencategorieën zijn meegenomen, maar één categorie ontbreekt of interne uren zijn niet beprijsd.",
              onvoldoende: "De kosten beperken zich tot de licentie.",
            },
          },
          {
            naam: "Meetafspraak en stopregel",
            gewicht: 30,
            max: 30,
            niveaus: {
              goed: "Er staan twee tot vier vooraf meetbare criteria met drempels, een evaluatiemoment met beslisser en een expliciete stopregel.",
              voldoende: "Criteria en evaluatiemoment zijn aanwezig maar missen drempels of een duidelijke beslisser.",
              onvoldoende: "Er is geen controleerbare meetafspraak of de stopregel ontbreekt.",
            },
          },
        ],
      },
      startcontext: {
        team: "Kopersbegeleiding Noordwal (fictief)",
        proefdata: {
          vragenPerWeek: 45,
          minutenPerAntwoordVoor: 22,
          minutenPerAntwoordNaBandbreedte: [9, 12],
          foutenInProef: 0,
        },
        licentiePerJaarEuro: 2400,
        uurtariefEuro: 65,
        implementatieUren: 32,
      },
      referentieUitwerking:
        "Een sterke uitwerking rekent de tijdwinst uit de proefdata om naar drie jaarsscenario's en benoemt als kwaliteitsbaat het uitblijven van foutieve opleverdata, gemeten via de bestaande klachtenregistratie. De kosten omvatten licentie, 32 implementatie-uren, trainingsuren met leerdip en structureel beheer, alles tegen 65 euro per uur, met terugverdientijd per scenario. De meetafspraak bevat een gebruiks- en een kwaliteitscriterium met drempels, evaluatie in week acht door de teamlead, en een stopregel zoals: bij minder dan 40% tijdwinst of meer dan één feitelijke fout per kwartaal stoppen we.",
      beoordeling: "beide",
    },
    {
      moduleSlug: "businesscase-en-meetbaarheid",
      titel: "Meetplan voor een lopende proef",
      opdrachttekst:
        "De fictieve afdeling Gebiedsmarketing Oost is drie weken geleden zonder meetafspraken een proef gestart met AI-ondersteuning voor nieuwsbriefteksten; de teamlead vraagt jou dit alsnog recht te zetten. Stel een meetplan op dat met terugwerkende kracht bruikbaar is. Formuleer twee tot vier meetcriteria (minimaal één gebruiks- en één kwaliteitscriterium) met drempels voor doorgaan, bijsturen en stoppen. Beschrijf hoe je alsnog een bruikbare vergelijkingsbasis reconstrueert nu een echte nulmeting ontbreekt, en welke beperkingen dat oplevert. Plan de drie evaluatiemomenten in en leg vast wie op welk moment beslist.",
      moeilijkheid: 3,
      type: "workflow",
      rubric: {
        criteria: [
          {
            naam: "Kwaliteit van de criteria",
            gewicht: 40,
            max: 40,
            niveaus: {
              goed: "Twee tot vier criteria zijn meetbaar zonder discussie, hebben drempels met consequenties en dekken gebruik én kwaliteit.",
              voldoende: "De criteria zijn grotendeels meetbaar maar missen op onderdelen drempels of dekken slechts één dimensie.",
              onvoldoende: "De criteria zijn subjectief geformuleerd of achteraf naar het gewenste resultaat toegeschreven.",
            },
          },
          {
            naam: "Omgang met de ontbrekende nulmeting",
            gewicht: 30,
            max: 30,
            niveaus: {
              goed: "Er wordt een verdedigbare vergelijkingsbasis gereconstrueerd (bijvoorbeeld uit oude edities of tijdregistratie) en de beperkingen daarvan zijn eerlijk benoemd.",
              voldoende: "Er is een vergelijkingsbasis, maar de beperkingen blijven onderbelicht.",
              onvoldoende: "Het ontbreken van de nulmeting wordt genegeerd of weggeredeneerd.",
            },
          },
          {
            naam: "Evaluatiestructuur",
            gewicht: 30,
            max: 30,
            niveaus: {
              goed: "Drie evaluatiemomenten zijn concreet gepland met per moment de deelnemers en de beslisser.",
              voldoende: "De momenten zijn benoemd maar rollen of beslisbevoegdheid zijn deels onduidelijk.",
              onvoldoende: "Er is geen herkenbare evaluatiestructuur of niemand beslist.",
            },
          },
        ],
      },
      startcontext: {
        afdeling: "Gebiedsmarketing Oost (fictief)",
        proefGestart: "3 weken geleden",
        nulmeting: "ontbreekt",
        taak: "nieuwsbriefteksten redigeren met AI",
      },
      referentieUitwerking:
        "Het meetplan bevat bijvoorbeeld: minstens vier van de zes redacteuren gebruiken de werkstroom bij elke editie (gebruik), en minstens 80% van de conceptteksten passeert de eindredactie met hooguit lichte correcties (kwaliteit), elk met drempels voor doorgaan, bijsturen en stoppen. Als vergelijkingsbasis dienen de doorlooptijden en correctierondes van de laatste zes edities vóór de proef, met de kanttekening dat deze reconstructie ruwer is dan een echte nulmeting. De evaluatie kent een peiling in week vijf, een hoofdevaluatie in week tien waarop de teamlead beslist, en een bestendigingscheck na zes maanden.",
      beoordeling: "ai",
    },
    {
      moduleSlug: "verantwoordelijkheden",
      titel: "Escalatie-oefening: de week van de multiplier",
      opdrachttekst:
        "Je bent multiplier bij de fictieve afdeling Ontwikkeling Meerzicht en krijgt in één week vier situaties op je bord: (1) een collega vraagt hulp bij een prompt voor een interne memo, (2) een collega blijkt kopersgegevens in een gratis chatbot te hebben geplakt, (3) een projectleider wil dat jij beslist of geanonimiseerde participatieverslagen AI-verwerking in mogen, en (4) een teamgenoot negeert voor de derde keer de afgesproken controlestap vóór verzending van AI-conceptmails. Bepaal per situatie het juiste escalatieniveau (zelf afhandelen, teamlead, privacycontactpersoon of incidentroute), beschrijf concreet wat je doet en in welke volgorde, en motiveer waarom. Benoem bij situatie 2 ook hoe je reageert richting de collega en welke feiten je helpt vastleggen.",
      moeilijkheid: 4,
      type: "veiligheidscasus",
      rubric: {
        criteria: [
          {
            naam: "Juiste escalatiekeuzes",
            gewicht: 40,
            max: 40,
            niveaus: {
              goed: "Alle vier de situaties krijgen het juiste niveau: zelf afhandelen (1), directe incidentroute (2), voorleggen aan de privacycontactpersoon (3) en adresseren bij de teamlead (4).",
              voldoende: "Drie van de vier situaties zijn juist ingeschat; de afwijking is verdedigbaar gemotiveerd.",
              onvoldoende: "Meerdere situaties krijgen het verkeerde pad, zoals zelf een privacyoordeel vellen of het incident laten wachten.",
            },
          },
          {
            naam: "Handelen bij het incident",
            gewicht: 35,
            max: 35,
            niveaus: {
              goed: "Bij situatie 2 wordt direct gemeld zonder schuldvraag, worden feiten (tijdstip, tool, soort gegevens) vastgelegd en wordt niets zelf verwijderd.",
              voldoende: "De melding gebeurt tijdig, maar de feitenvastlegging of de reactie zonder schuldvraag is onvolledig.",
              onvoldoende: "Het incident wordt uitgesteld, zelf beoordeeld of buiten de meldroute om afgehandeld.",
            },
          },
          {
            naam: "Motivering en rolvastheid",
            gewicht: 25,
            max: 25,
            niveaus: {
              goed: "Elke keuze is gemotiveerd vanuit de rollenverdeling en de multiplier blijft overal binnen de eigen rol.",
              voldoende: "De motivering is grotendeels juist maar op onderdelen mager of impliciet.",
              onvoldoende: "De motivering ontbreekt of de multiplier neemt beslissingen die bij anderen horen.",
            },
          },
        ],
      },
      startcontext: {
        afdeling: "Ontwikkeling Meerzicht (fictief)",
        situaties: 4,
        rollen: ["gebruiker", "teamlead", "privacycontactpersoon", "multiplier", "IT"],
      },
      referentieUitwerking:
        "Situatie 1 handelt de multiplier zelf af als begeleidingsvraag. Situatie 2 gaat nog dezelfde dag de incidentroute in: samen met de collega melden bij IT en de privacycontactpersoon, feiten vastleggen, niets verwijderen, en reageren zonder schuldvraag. Situatie 3 wordt niet zelf beslist maar als voorbereide casus voorgelegd aan de privacycontactpersoon, met het eigen vermoeden als input. Situatie 4 is na drie herhalingen geen begeleidingsvraag meer maar een gedragskwestie die bij de teamlead wordt geagendeerd, waarbij de multiplier wel aanbiedt de controlestap werkbaarder te maken.",
      beoordeling: "beide",
    },
    {
      moduleSlug: "dpia-light",
      titel: "DPIA-light voor de huurdersverzoeken-assistent",
      opdrachttekst:
        "De fictieve afdeling Verhuur & Beheer wil een AI-assistent in gebruik nemen die onderhoudsverzoeken van huurders samenvat en categoriseert voor de planning; de verzoeken bevatten naam, adres, telefoonnummer en vrije tekst waarin soms gezondheidsdetails staan. Vul voor deze voorgenomen toepassing een volledige DPIA-light in aan de hand van de vijf vragen. Pas dataminimalisatie expliciet toe bij vraag één, formuleer bij vraag drie minimaal drie risico's volgens het wie-wat-gevolg-schema (onjuiste output, lekken én bias), en koppel bij vraag vier aan elk risico een uitvoerbare maatregel. Benoem bij vraag vijf een eigenaar met functie en beschrijf wanneer het document herzien moet worden. Sluit af met jouw advies: kan dit met een DPIA-light live, of zie je triggers om de vraag aan de privacycontactpersoon voor te leggen?",
      moeilijkheid: 5,
      type: "veiligheidscasus",
      rubric: {
        criteria: [
          {
            naam: "Gegevens en doel",
            gewicht: 30,
            max: 30,
            niveaus: {
              goed: "De gegevenscategorieën zijn uitputtend benoemd, de minimalisatietoets is per categorie toegepast en het doel is welbepaald geformuleerd.",
              voldoende: "Gegevens en doel zijn beschreven, maar de minimalisatie is onvolledig of het doel blijft aan de vage kant.",
              onvoldoende: "Gegevenscategorieën ontbreken of het doel is niet meer dan 'efficiënter werken'.",
            },
          },
          {
            naam: "Risico's en maatregelen",
            gewicht: 40,
            max: 40,
            niveaus: {
              goed: "Minimaal drie risico's volgen het wie-wat-gevolg-schema, dekken alle drie de categorieën en hebben elk een passende, houdbare maatregel.",
              voldoende: "De risico's zijn grotendeels concreet, maar één categorie ontbreekt of een maatregel dekt zijn risico niet echt af.",
              onvoldoende: "Risico's blijven abstract of gaan over de organisatie in plaats van de betrokkenen, of maatregelen ontbreken.",
            },
          },
          {
            naam: "Eigenaarschap en advies",
            gewicht: 30,
            max: 30,
            niveaus: {
              goed: "Er is een eigenaar met functie benoemd, herzieningsmomenten zijn vastgelegd en het slotadvies weegt de triggers voor een volledige DPIA expliciet.",
              voldoende: "Eigenaar en advies zijn aanwezig, maar herziening of triggerafweging blijft summier.",
              onvoldoende: "Eigenaarschap is collectief of afwezig, of het advies negeert de light-of-volledig-vraag.",
            },
          },
        ],
      },
      startcontext: {
        afdeling: "Verhuur & Beheer (fictief)",
        toepassing: "samenvatten en categoriseren van onderhoudsverzoeken",
        gegevensInVerzoeken: ["naam", "adres", "telefoonnummer", "vrije tekst met soms gezondheidsdetails"],
        status: "voorgenomen, nog niet live",
      },
      referentieUitwerking:
        "Een sterke uitwerking minimaliseert eerst: voor samenvatten en categoriseren zijn naam en telefoonnummer niet nodig en worden gezondheidsdetails waar mogelijk gefilterd vóór invoer. De drie risico's volgen het schema, zoals de urgente melding die als regulier wordt gecategoriseerd, herleidbare gegevens bij de leverancier, en huurders met gebrekkig Nederlands die slechter worden bediend; de maatregelen zijn respectievelijk een urgentiewoordenlijst met menselijke check dezelfde dag, anonimisering plus een goedgekeurde tool, en een maandelijkse steekproef per taalniveau. De eigenaar is bijvoorbeeld de coördinator dagelijks onderhoud, met herziening bij elke wijziging en minimaal jaarlijks. Het advies signaleert dat gezondheidsdetails een gevoelige categorie zijn en legt de light-of-volledig-vraag expliciet voor aan de privacycontactpersoon.",
      beoordeling: "handmatig",
    },
    {
      moduleSlug: "collega-s-begeleiden",
      titel: "Begeleidingsplan voor een sceptische collega",
      opdrachttekst:
        "Anja is senior planontwikkelaar bij het fictieve team Meerzicht, met twintig jaar ervaring en veel gezag in het team. Ze noemt AI 'gebakken lucht die ons vak uitholt' en heeft de introductiesessie overgeslagen; intussen kost het uitwerken van haar klankbordverslagen haar wekelijks drie uur. Schrijf een begeleidingsplan voor de komende acht weken. Beschrijf hoe je het eerste gesprek voert en welke zorgen je verwacht, hoe je haar vakkennis een serieuze rol geeft, en hoe je het voordoen-samen doen-zelf doen-model op haar situatie toepast. Formuleer ook waaraan je na acht weken afmeet of de aanpak werkt, en wat je doet als ze niet wil.",
      moeilijkheid: 3,
      type: "workflow",
      rubric: {
        criteria: [
          {
            naam: "Omgang met scepsis",
            gewicht: 35,
            max: 35,
            niveaus: {
              goed: "Het plan behandelt de scepsis als informatie: het eerste gesprek vraagt door naar zorgen, forceert niets en geeft de vakkennis een echte rol.",
              voldoende: "Het plan neemt de scepsis serieus, maar leunt op onderdelen op overtuigen in plaats van doorvragen.",
              onvoldoende: "Het plan zet in op dwang, argumentenstrijd of het omzeilen van de collega.",
            },
          },
          {
            naam: "Didactische opbouw",
            gewicht: 35,
            max: 35,
            niveaus: {
              goed: "Voordoen, samen doen en zelf doen zijn concreet uitgewerkt rond haar eigen taak, met afnemende ondersteuning en een vrijblijvende start.",
              voldoende: "De fasen zijn aanwezig maar generiek ingevuld of niet aan haar taak gekoppeld.",
              onvoldoende: "Het plan bestaat uit een presentatie of handleiding zonder begeleide praktijk.",
            },
          },
          {
            naam: "Meetbaarheid en terugvaloptie",
            gewicht: 30,
            max: 30,
            niveaus: {
              goed: "Er is een concreet succescriterium na acht weken en een respectvolle terugvaloptie als Anja niet wil, zonder verkapte sancties.",
              voldoende: "Er is een evaluatiemoment, maar het criterium of de terugvaloptie is vaag.",
              onvoldoende: "Succes is niet gedefinieerd of weigeren wordt als probleemgedrag behandeld.",
            },
          },
        ],
      },
      startcontext: {
        collega: "Anja, senior planontwikkelaar (fictief)",
        team: "Meerzicht (fictief)",
        pijnpunt: "3 uur per week klankbordverslagen uitwerken",
        periode: "8 weken",
      },
      referentieUitwerking:
        "Het plan opent met een individueel gesprek waarin de multiplier doorvraagt naar de zorgen achter 'gebakken lucht' en Anja's vakoordeel expliciet waardeert. De ingang is haar eigen pijnpunt: één vrijblijvend experiment met een klankbordverslag, eerst hardop denkend voorgedaan door de multiplier, daarna twee samen-doen-sessies, waarbij Anja de kwaliteitscontrole doet vanuit haar expertise. Het succescriterium na acht weken is bijvoorbeeld dat Anja minstens de helft van haar verslagen met de werkstroom uitwerkt en de uitwerktijd aantoonbaar daalt bij gelijkblijvende kwaliteit naar haar eigen oordeel. Wil ze niet, dan blijft dat zonder gevolgen en wordt haar kritische blik gevraagd bij de steekproefcontrole van andermans output.",
      beoordeling: "ai",
    },
    {
      moduleSlug: "collega-s-begeleiden",
      titel: "Reflectie: jouw rol als multiplier",
      opdrachttekst:
        "Kijk terug op deze track en vooruit naar jouw eigen afdeling. Beschrijf in 400 tot 600 woorden hoe jij de multiplierrol de komende drie maanden concreet gaat invullen. Ga in elk geval in op: welke valkuil uit de track (het AI-loket, de politieagent, de privacybeslisser) jou persoonlijk het meest bedreigt en waaraan je dat bij jezelf gaat herkennen; welke eerste kans uit jouw echte werkomgeving je wilt oppakken en waarom die klein genoeg is; en hoe je de grens tussen signaleren en handhaven in jouw team gaat bewaken. Gebruik geen herleidbare namen van collega's; beschrijf situaties in rollen.",
      moeilijkheid: 3,
      type: "reflectie",
      rubric: {
        criteria: [
          {
            naam: "Zelfinzicht",
            gewicht: 40,
            max: 40,
            niveaus: {
              goed: "De gekozen valkuil is persoonlijk en geloofwaardig onderbouwd, met concrete signalen waaraan de schrijver het eigen gedrag gaat herkennen.",
              voldoende: "Er is een valkuil gekozen met enige onderbouwing, maar de herkenningssignalen blijven algemeen.",
              onvoldoende: "De reflectie blijft bij een samenvatting van de lesstof zonder eigen gedrag te onderzoeken.",
            },
          },
          {
            naam: "Concreetheid van het voornemen",
            gewicht: 30,
            max: 30,
            niveaus: {
              goed: "De eerste kans is specifiek, klein en gemotiveerd vanuit de eigen werkomgeving, met een realistische eerste stap.",
              voldoende: "Er is een kans benoemd, maar de afbakening of de eerste stap is vaag.",
              onvoldoende: "Het voornemen is abstract ('meer met AI doen') of onrealistisch groot.",
            },
          },
          {
            naam: "Rolbegrip",
            gewicht: 30,
            max: 30,
            niveaus: {
              goed: "De grens tussen signaleren en handhaven is juist beschreven en vertaald naar concreet eigen gedrag in het team.",
              voldoende: "Het onderscheid is genoemd maar de vertaling naar de praktijk is beperkt.",
              onvoldoende: "Signaleren en handhaven lopen door elkaar of de rolgrens ontbreekt.",
            },
          },
        ],
      },
      startcontext: {
        omvang: "400-600 woorden",
        periode: "komende 3 maanden",
        anonimisering: "beschrijf collega's in rollen, geen namen",
      },
      referentieUitwerking:
        "Een sterke reflectie kiest één valkuil en maakt die persoonlijk: bijvoorbeeld de neiging tot het AI-loket, herkenbaar aan een agenda die volloopt met uitvoerende verzoeken en collega's die niet zelfstandiger worden. De eerste kans is klein en concreet, zoals het begeleiden van twee collega's bij verslagsamenvattingen, met een voordoen-sessie in week één. De rolgrens wordt vertaald naar gedrag: patronen bespreken bij de bron en zonder publiek, structurele niet-naleving agenderen bij de teamlead, en privacyvragen voorbereid doorgeleiden in plaats van beantwoorden. De toon is onderzoekend en eerlijk over onzekerheid, niet alleen voornemens.",
      beoordeling: "handmatig",
    },
  ],
};

export default track;
