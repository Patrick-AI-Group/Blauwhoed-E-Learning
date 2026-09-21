import type { TrackSeed } from "./types";

const track: TrackSeed = {
  slug: "fundament",
  niveau: 1,
  titel: "Fundament",
  omschrijving: "Veilig en zinvol AI inzetten in het dagelijkse werk.",
  modules: [
    {
      slug: "generatieve-ai-begrijpen",
      titel: "Generatieve AI begrijpen",
      doelen: [
        "Uitleggen hoe een taalmodel tekst voorspelt en waarom het geen database is",
        "Herkennen welke taken een taalmodel goed en slecht uitvoert",
        "Benoemen wat tokens en context zijn en wat dat betekent voor je prompt",
      ],
      geschatteMinuten: 45,
      lessons: [
        {
          titel: "Wat een taalmodel echt doet: voorspellen, niet opzoeken",
          type: "tekst",
          geschatteMinuten: 12,
          content: {
            intro:
              "ChatGPT, Copilot en vergelijkbare tools voelen als een collega die alles weet. Dat beeld klopt niet, en dat misverstand is de bron van de meeste AI-fouten op de werkvloer. In deze les leer je wat er werkelijk gebeurt als je een vraag stelt.",
            sections: [
              {
                heading: "Een voorspelmachine, geen encyclopedie",
                body:
                  "Een taalmodel is getraind op enorme hoeveelheden tekst. Tijdens die training heeft het één ding geleerd: voorspellen welk woord waarschijnlijk volgt op de woorden ervoor. Meer niet. Als jij een vraag stelt, zoekt het model dus geen antwoord op in een database. Het bouwt woord voor woord een tekst die statistisch goed past bij jouw vraag. Dat levert verrassend vaak een correct antwoord op, omdat correcte antwoorden in de trainingsdata het meest voorkomen. Maar het model heeft geen lijst met feiten, geen actueel kadaster en geen toegang tot jouw projectdossiers. Het weet niet wat waar is; het weet wat waarschijnlijk klinkt. Dit verklaart waarom een model met volle overtuiging kan beweren dat een bestemmingsplan iets toestaat wat er niet in staat. Wie dit mechanisme begrijpt, gebruikt AI met de juiste verwachtingen: als taalhulp, niet als bron van waarheid.",
                example:
                  "Vraag je een model naar de parkeernorm in Project Rietveldkwartier (fictief), dan produceert het een geloofwaardig getal — bijvoorbeeld '1,3 parkeerplaats per woning'. Niet omdat het de norm kent, maar omdat zulke getallen vaak in vergelijkbare teksten staan. De echte norm staat alleen in het gemeentelijke beleid en jouw anterieure overeenkomst.",
              },
              {
                heading: "Waarom het antwoord zo overtuigend klinkt",
                body:
                  "Het model is getraind op goed geschreven tekst en heeft daardoor geleerd hoe zekerheid klinkt: vloeiende zinnen, concrete details, een logische opbouw. Die stijl staat volledig los van de vraag of de inhoud klopt. Een verzonnen artikelnummer wordt in exact dezelfde toon gepresenteerd als een correct citaat uit het Burgerlijk Wetboek. Voor mensen is dat verwarrend, want wij gebruiken vloeiendheid onbewust als signaal van deskundigheid. Bij een collega werkt dat redelijk; bij een taalmodel werkt het niet. Onthoud daarom deze regel: overtuigingskracht is geen bewijs. Hoe stelliger en gedetailleerder een antwoord over feiten, cijfers of regelgeving, hoe belangrijker het is om de bron zelf te controleren. In de module over hallucinaties leer je daar een vaste werkwijze voor. Voor nu is het genoeg om de reflex te ontwikkelen: mooi geformuleerd betekent niet juist.",
              },
              {
                heading: "Wat dit betekent voor je dagelijkse werk",
                body:
                  "Het voorspelkarakter van taalmodellen is geen reden om ze te mijden. Het bepaalt alleen wáár je ze inzet. Alles wat draait om taal, structuur en stijl past goed: een brief herschrijven, notulen samenvatten, een tekst inkorten, een opzet maken voor een presentatie. Het model hoeft dan geen feiten te kennen; jij levert de inhoud aan en het model bewerkt die. Alles wat draait om feiten die het model zelf moet aandragen, is riskant: actuele grondprijzen, wetsartikelen, normen, namen van ambtenaren. Daar heb je bronnen voor, geen voorspellingen. De vuistregel voor niveau 1: geef het model de feiten, laat het model de taal doen. Wie de feiten zelf aanlevert in de prompt, haalt het meeste risico er al uit voordat het model één woord heeft geschreven.",
                example:
                  "Een projectmedewerker van Project De Houtwal (fictief) plakt de geanonimiseerde planning in haar prompt en vraagt: 'Vat dit samen in vijf zinnen voor de nieuwsbrief.' Het model hoeft niets te weten; alle feiten staan in de invoer. Dat is de veilige manier van werken.",
              },
            ],
            takeaway:
              "Een taalmodel voorspelt tekst en zoekt niets op. Lever zelf de feiten aan en laat het model de taal doen.",
          },
        },
        {
          titel: "Waar AI sterk in is — en waar het faalt",
          type: "tekst",
          geschatteMinuten: 11,
          content: {
            intro:
              "Niet elke taak past bij een taalmodel. Wie het verschil kent tussen sterke en zwakke taken, bespaart tijd én voorkomt fouten. Deze les geeft je een praktische indeling die je direct kunt toepassen.",
            sections: [
              {
                heading: "De sterke kant: taal, structuur en variatie",
                body:
                  "Taalmodellen zijn uitstekend in taken waarbij de kwaliteit van taal centraal staat. Denk aan samenvatten: een verslag van acht pagina's terugbrengen tot één alinea met de kernpunten. Denk aan herschrijven: een juridisch geformuleerde alinea omzetten naar begrijpelijke taal voor kopers. Denk aan structureren: een warrige mailwisseling omzetten in een nette actielijst. En denk aan variëren: vijf verschillende openingszinnen voor een uitnodiging, zodat jij de beste kiest. In al deze gevallen lever jij de inhoud aan en transformeert het model die. Het model hoeft niets te weten wat jij niet al hebt gegeven. Ook brainstormen valt hieronder: een eerste lijst met aandachtspunten voor een participatieavond genereren gaat snel, zolang jij die lijst daarna kritisch beoordeelt en aanvult met je eigen kennis van het project en de buurt.",
                example:
                  "Voor Project Zonneweide (fictief) vraagt een omgevingsmanager: 'Herschrijf deze technische passage over warmtepompen voor bewoners zonder technische achtergrond, maximaal 100 woorden.' Dat is een ideale AI-taak: de feiten staan in de invoer, het model doet alleen de vertaalslag in taal.",
              },
              {
                heading: "De zwakke kant: feiten en actualiteit",
                body:
                  "Eén soort taak gaat structureel mis: feitenkennis. Het model heeft geen actuele en betrouwbare kennis van wetgeving, normen, prijzen of jouw projecten. Wat het daarover zegt, is een voorspelling die toevallig kan kloppen. Dat geldt ook voor actualiteit: de trainingsdata lopen tot een bepaald moment, en zonder extra gereedschap zit jouw organisatiekennis er helemaal niet in. Vragen over 'de huidige rentestand' of 'ons beleid voor tenders' leveren dan verouderde of verzonnen antwoorden op — tenzij de tool grounding heeft: Copilot bijvoorbeeld kan binnen je werk wél het actuele intranet en de documenten raadplegen waar jij toegang toe hebt, en levert dan een op bronnen gebaseerd antwoord in plaats van een voorspelling. Ken dus het verschil tussen 'het kale model dat alleen voorspelt' en 'de tool die voor jou zoekt en citeert' — en check bij twijfel of een antwoord een bron noemt die je kunt narekenen. Rekenwerk hoort tegenwoordig niet meer bij de zwakke kant: de modellen achter Copilot en vergelijkbare zakelijke tools rekenen inmiddels betrouwbaar, zeker bij het soort berekeningen dat in ons werk voorkomt. Dat betekent niet dat controle overbodig is — bij cijfers die een besluit dragen, controleer je altijd, ongeacht hoe waarschijnlijk het is dat ze kloppen. Hoe die risico-proportionele controle eruitziet, leer je in de volgende module.",
                example:
                  "Vraag je Copilot naar 'ons beleid voor tenders', dan doorzoekt de tool — mits je de juiste toegang hebt — het Blauwhoed-intranet en citeert het relevante beleidsdocument. Vraag je hetzelfde aan een kaal taalmodel zonder toegang tot dat intranet, dan krijg je een plausibel klinkend maar verzonnen antwoord. Zelfde vraag, andere tool, ander risico.",
              },
              {
                heading: "De grijze zone: ondersteunen mag, beslissen niet",
                body:
                  "Tussen sterk en zwak ligt een grijze zone: taken waarbij AI kan ondersteunen, maar waar het eindoordeel bij een mens moet blijven. Een conceptadvies opstellen, een eerste risicoanalyse structureren, argumenten voor en tegen een variant op een rij zetten — dat kan allemaal, mits jij het resultaat behandelt als een concept van een stagiair: nuttig als startpunt, nooit als eindproduct. Het AI-gebruiksbeleid van Blauwhoed is hier expliciet over: AI ondersteunt het werk en vervangt nooit menselijke besluitvorming. Jij blijft verantwoordelijk voor alles wat je met AI-output doet, ook als de fout aantoonbaar door het model is gemaakt. Stel jezelf bij elke taak twee vragen. Eén: lever ik zelf de feiten aan, of moet het model ze kennen? Twee: is dit een concept dat ik controleer, of een besluit dat ik uitbesteed? Alleen bij 'zelf aanleveren' en 'concept' zit je goed. Let bij dat controleren specifiek op eenzijdigheid: een AI-gegenereerde doelgroepanalyse of een beeld van een wijk en zijn bewoners kan onbedoeld stereotype patronen uit de trainingsdata herhalen — een 'typisch gezin' dat er opvallend eenvormig uitziet, of een doelgroepbeschrijving die één groep onzichtbaar maakt. Behandel zo'n signaal net als een feitelijke fout: benoemen en corrigeren voordat het verder gaat. Werk je structureel met dit soort AI-analyses, dan hoort bias-monitoring bij de DPIA-light die daar op niveau 4 bij hoort.",
                example:
                  "Een ontwikkelmanager laat AI de voor- en nadelen van twee verkavelingsvarianten voor Project Rietveldkwartier (fictief) op een rij zetten. Prima startpunt. De keuze tussen de varianten maakt het team zelf, met de grondexploitatie en het stedenbouwkundig advies erbij.",
              },
            ],
            takeaway:
              "AI is sterk in taal, structuur en — bij de huidige generatie modellen — ook rekenwerk, maar zwak in feitenkennis zonder toegang tot een bron. Ondersteunen mag altijd, beslissen doet altijd een mens.",
          },
        },
        {
          titel: "Tokens en context: het werkgeheugen van het model",
          type: "interactief",
          geschatteMinuten: 10,
          content: {
            intro:
              "Waarom 'vergeet' een model soms wat je eerder in het gesprek vertelde? En waarom werkt een lange, rommelige prompt slechter dan een korte, scherpe? Het antwoord zit in tokens en het contextvenster. Probeer de voorbeelden in deze les zelf uit in de oefenomgeving.",
            sections: [
              {
                heading: "Tokens: de bouwstenen van elke prompt",
                body:
                  "Een taalmodel leest geen woorden maar tokens: stukjes tekst van gemiddeld een paar letters. Het woord 'gebiedsontwikkeling' bestaat uit meerdere tokens; een kort woord als 'de' is er één. Alles wat je invoert en alles wat het model teruggeeft, wordt in tokens geteld. Dat is meer dan een technisch weetje. Tokens bepalen de kosten van zakelijke AI-tools, de snelheid van het antwoord en vooral: hoeveel het model tegelijk kan overzien. Een pagina tekst is grofweg vijfhonderd tot zevenhonderd tokens. Een compleet bestemmingsplan met bijlagen kan de grens van wat een model aankan benaderen of overschrijden. Je hoeft tokens nooit precies te tellen. Wel helpt het besef dat elke zin in je prompt ruimte inneemt. Relevante context toevoegen is goed; een heel dossier plakken terwijl je één paragraaf nodig hebt, maakt het antwoord juist slechter.",
              },
              {
                heading: "Het contextvenster: alles wat het model nu ziet",
                body:
                  "Het contextvenster is het werkgeheugen van het model: het totaal aan tokens dat het op dit moment kan overzien. Daarin zit jouw prompt, de documenten die je meestuurde én het gesprek tot nu toe. Het venster is groot maar eindig. Wordt een gesprek erg lang, dan raakt informatie van het begin buiten beeld of weegt die minder zwaar mee. Het model 'vergeet' dan afspraken die je eerder maakte, zoals de gewenste toon of het maximale aantal woorden. Daarnaast geldt: het model onthoudt niets tussen gesprekken. Een nieuwe chat begint blanco. Wat je gisteren uitlegde over je project, bestaat vandaag niet meer. Praktische gevolgen: begin voor een nieuwe taak een nieuw gesprek, herhaal belangrijke instructies als een gesprek lang wordt, en zet de kerninformatie bij voorkeur in je eerste bericht in plaats van verspreid over twintig vervolgvragen.",
                example:
                  "Een verkoopmedewerker werkt in één lange chat aan teksten voor Project De Houtwal (fictief). Na veertig berichten negeert het model de afspraak 'maximaal 150 woorden' uit het begin. De oplossing: een nieuw gesprek starten met een prompt waarin alle eisen opnieuw compact bij elkaar staan.",
              },
              {
                heading: "Oefening: merk het verschil zelf",
                body:
                  "Doe deze proef in de oefenomgeving van de Academy. Stap één: plak een geanonimiseerd verslag van ongeveer één pagina en vraag om een samenvatting in vijf zinnen. Beoordeel het resultaat. Stap twee: stel daarna acht tot tien vervolgvragen over willekeurige details, en vraag dan opnieuw om 'de samenvatting volgens de eerdere instructie'. Grote kans dat het model de oorspronkelijke eisen deels kwijt is: de vijf zinnen worden er acht, of de gevraagde doelgroep verdwijnt. Stap drie: start een nieuw gesprek en zet alle instructies in één bericht — bron, taak, doelgroep, lengte. Vergelijk de drie resultaten. Wat je ziet, is het contextvenster in actie. De les die je hieruit meeneemt: compact en compleet in één bericht werkt beter dan verspreid over een lang gesprek, en een nieuw gesprek is gratis. Noteer voor jezelf welk verschil je zag; dat inzicht komt terug in de module over prompten.",
                example:
                  "Concreet startbericht voor stap drie: 'Vat het onderstaande verslag van de bewonersavond van Project Zonneweide (fictief) samen in vijf zinnen voor collega's die er niet bij waren. Noem alleen besluiten en openstaande vragen, geen sfeerbeschrijving.'",
              },
            ],
            takeaway:
              "Het model overziet alleen wat in het contextvenster staat, en dat venster is eindig. Zet je instructies compact bij elkaar en begin per taak een nieuw gesprek.",
          },
        },
        {
          titel: "Casus: het overtuigende maar foute advies",
          type: "casus",
          geschatteMinuten: 12,
          content: {
            intro:
              "Een junior ontwikkelaar krijgt van een chatbot een prachtig onderbouwd advies over geluidsnormen — dat op twee punten aantoonbaar fout is. Deze casus is fictief, maar het patroon komt in elke organisatie voor. Loop mee door wat er gebeurde en wat er beter kon.",
            sections: [
              {
                heading: "De situatie: een deadline en een snelle vraag",
                body:
                  "Imre, junior ontwikkelaar op Project Rietveldkwartier (fictief), bereidt een intern memo voor over woningbouw langs een drukke weg. Onder tijdsdruk vraagt hij een AI-tool: 'Welke geluidsnormen gelden voor nieuwbouwwoningen langs een provinciale weg?' Het antwoord ziet er indrukwekkend uit: een heldere opsomming, verwijzingen naar de Omgevingswet, concrete grenswaarden in decibellen en zelfs een genummerd artikellid. Imre herkent een deel van de begrippen uit een eerdere cursus, dus het voelt betrouwbaar. Hij neemt de grenswaarden over in zijn memo en noemt daarbij het artikellid als bron. Het memo gaat naar de projectleider en naar de externe adviseur geluid. Die adviseur reageert binnen een uur: één grenswaarde klopt niet voor deze situatie, en het genoemde artikellid bestaat niet. De kernvraag van deze casus: waar ging het mis, en op welke momenten had Imre het kunnen ondervangen?",
              },
              {
                heading: "De analyse: drie gemiste signalen",
                body:
                  "Achteraf zijn drie signalen aan te wijzen. Signaal één: de vraag ging over feitenkennis — actuele wetgeving — precies de categorie waarin taalmodellen structureel zwak zijn. Het model voorspelde een antwoord dat leek op teksten over geluidsnormen, zonder de werkelijke norm te kennen. Signaal twee: het antwoord bevatte zeer specifieke details zonder controleerbare bron. Een exact artikellid en precieze decibelwaarden wekken vertrouwen, maar juist die schijnprecisie is een bekend kenmerk van verzonnen output. Signaal drie: het antwoord bevestigde wat Imre hoopte — een duidelijke, bruikbare lijst die zijn memo compleet maakte. Die opluchting maakte hem minder kritisch. Geen van deze signalen betekent dat AI-gebruik hier verkeerd was. Het model had prima kunnen helpen met de opbouw van het memo of het begrijpelijk formuleren van normen die Imre zélf uit de bron had gehaald. De fout zat in de taakverdeling: het model moest feiten leveren die Imre had moeten opzoeken.",
                example:
                  "Vergelijk de twee werkwijzen. Fout: 'Welke geluidsnormen gelden hier?' aan het model vragen en het antwoord overnemen. Goed: de relevante passage uit het geluidsrapport van de adviseur in de prompt plakken en vragen: 'Vat deze normen samen in begrijpelijke taal voor een intern memo.'",
              },
              {
                heading: "De uitkomst: schade beperkt, werkwijze aangepast",
                body:
                  "Omdat de adviseur het memo vroeg in het proces las, bleef de schade beperkt tot een pijnlijk leermoment. De projectleider besprak het na zonder verwijt: dit soort fouten ontstaat door verkeerde verwachtingen van de techniek, niet door onwil. Het team sprak drie werkafspraken af die jij direct kunt overnemen. Eén: feiten over wet- en regelgeving komen uit de bron of van de adviseur, nooit uit een taalmodel. Twee: AI-output met cijfers, normen of artikelverwijzingen wordt altijd gecontroleerd vóór die in een document belandt, ook onder tijdsdruk — juist onder tijdsdruk. Drie: bij elk memo staat voortaan welke onderdelen met AI-ondersteuning zijn gemaakt en wie de feiten heeft geverifieerd. Let op wat hier níét werd afgesproken: een verbod op AI. De tool bleef in gebruik voor samenvatten, herschrijven en structureren, waar hij goed in is. Het verschil zit in de taakverdeling tussen mens en model.",
                example:
                  "De herstelde prompt van Imre, een week later: 'Hieronder staat een passage uit het geluidsrapport van Project Rietveldkwartier (fictief). Herschrijf deze voor een intern memo: begrijpelijk voor niet-specialisten, maximaal 120 woorden, en markeer termen die ik moet laten checken door de adviseur.'",
              },
            ],
            takeaway:
              "Overtuigende details zonder controleerbare bron zijn een waarschuwingssignaal, geen bewijs. Laat het model taal verzorgen en haal feiten altijd uit de bron.",
          },
        },
      ],
    },
    {
      slug: "hallucinaties-en-verificatie",
      titel: "Hallucinaties en verificatie",
      doelen: [
        "Herkennen van signalen dat AI-output verzonnen of onjuist kan zijn",
        "Toepassen van de vier verificatiestappen op AI-output vóór gebruik",
        "Beoordelen hoeveel controle AI-rekenwerk verdient, naar gelang het gevolg van een fout",
      ],
      geschatteMinuten: 45,
      lessons: [
        {
          titel: "Waarom een model liever iets verzint dan zwijgt",
          type: "tekst",
          geschatteMinuten: 11,
          content: {
            intro:
              "Een hallucinatie is AI-output die er betrouwbaar uitziet maar niet klopt: een verzonnen feit, bron of detail. Het is geen storing maar een direct gevolg van hoe taalmodellen werken. Deze les legt uit waarom het gebeurt, zodat je weet wanneer je extra alert moet zijn.",
            sections: [
              {
                heading: "Ingebakken in de techniek",
                body:
                  "Een taalmodel voorspelt bij elke vraag het meest waarschijnlijke vervolg. Het heeft geen ingebouwde grens tussen 'dit weet ik' en 'dit weet ik niet'. Waar een mens zou zeggen 'geen idee, dat moet ik opzoeken', produceert het model gewoon de tekst die het beste past bij het patroon van je vraag. Vraag je naar een niet-bestaand rapport, dan krijg je een samenvatting van dat niet-bestaande rapport — vloeiend, gestructureerd en volledig verzonnen. Dit heet hallucineren. Het gebeurt vaker naarmate je vraag specifieker wordt en verder afligt van wat vaak in trainingsdata voorkomt: exacte cijfers, lokale regelgeving, kleine leveranciers, recente gebeurtenissen, details over jouw eigen organisatie. Moderne modellen hallucineren minder dan oudere, maar geen enkel model is er vrij van. Wie dat accepteert als eigenschap in plaats van uitzondering, bouwt controle standaard in en wordt nooit onaangenaam verrast.",
                example:
                  "Een medewerker vraagt naar 'het participatieverslag van Project Zonneweide (fictief) uit maart'. Dat verslag zit niet in het model, maar het antwoord komt toch: drie keurige alinea's over een avond die zo nooit heeft plaatsgevonden, inclusief een verzonnen opkomstcijfer van 85 bewoners.",
              },
              {
                heading: "De gevaarlijkste hallucinaties zijn half waar",
                body:
                  "Een compleet onzinnig antwoord herken je snel. De echte risico's zitten in output die grotendeels klopt met een paar verzonnen details erdoorheen. Het model beschrijft de AVG in grote lijnen correct, maar noemt een meldtermijn die net verkeerd is. Het vat je aangeleverde tekst goed samen, maar voegt één conclusie toe die nergens in de bron staat. Juist omdat negentig procent klopt, krijgt de resterende tien procent een onverdiend vertrouwen mee. Extra verraderlijk: modellen passen zich aan jouw verwachting aan. Stel je een sturende vraag — 'dit mag toch gewoon volgens de AVG?' — dan is de kans groter dat het antwoord meebuigt met je aanname. Dit betekent voor je werkwijze: beoordeel AI-output nooit als geheel ('het klinkt goed'), maar per controleerbare bewering. En stel open vragen in plaats van vragen waarin je gewenste antwoord al verstopt zit.",
              },
              {
                heading: "Wanneer moet je alarmbel rinkelen",
                body:
                  "Je kunt niet elke zin van elke output diepgaand controleren, en dat hoeft ook niet. Leer in plaats daarvan de risicomomenten herkennen. Hoog risico: output met feiten die jij niet zelf hebt aangeleverd — cijfers, data, namen, wetsartikelen, normen, citaten en bronvermeldingen. Hoog risico ook: alles wat extern gaat of waarop een besluit wordt gebaseerd. Laag risico: tekstbewerking van je eigen aangeleverde inhoud, brainstorms die je zelf nog weegt, en stijloefeningen. De vuistregel van Blauwhoed sluit hierop aan: hoe groter het gevolg van een fout, hoe zwaarder de controle. Een interne brainstorm mag licht gecontroleerd; een brief aan kopers of een passage in een tenderdocument wordt regel voor regel geverifieerd. In de volgende lessen krijg je concrete herkenningssignalen en een vaste verificatieroutine. Die routine kost minuten en voorkomt fouten die dagen kosten om te herstellen — of erger, extern zichtbaar worden.",
                example:
                  "Een verkoopcoördinator laat AI een wervende tekst schrijven op basis van de door haar aangeleverde plattegronden van Project De Houtwal (fictief). Laag risico. Dezelfde tool vraagt ze ook naar 'gemiddelde verkooptijden in de regio': hoog risico, want dat cijfer komt nu uit het model zelf en moet uit marktdata komen.",
              },
            ],
            takeaway:
              "Hallucineren is een eigenschap van taalmodellen, geen storing. Beoordeel output per bewering en verhoog je controle naarmate het gevolg van een fout groter is.",
          },
        },
        {
          titel: "Vijf signalen van een hallucinatie",
          type: "interactief",
          geschatteMinuten: 10,
          content: {
            intro:
              "Hallucinaties laten sporen na. In deze les leer je vijf herkenbare signalen, en je oefent ermee op een voorbeeldtekst. Na afloop scan je AI-output sneller en gerichter dan wanneer je alles even wantrouwt.",
            sections: [
              {
                heading: "Signaal 1 en 2: schijnprecisie en onvindbare bronnen",
                body:
                  "Het eerste signaal is schijnprecisie: verdacht exacte details die het model niet kán weten. Een percentage met een cijfer achter de komma, een compleet artikelnummer, een exact bedrag of een precieze datum — zonder dat jij die informatie hebt aangeleverd. Echte kennis van zulke details vereist toegang tot een bron, en die heeft het model niet. Het tweede signaal is de onvindbare bron: het model noemt een rapport, website, norm of publicatie die bij controle niet blijkt te bestaan, of wél bestaat maar iets anders zegt. Verzonnen bronvermeldingen zien er geloofwaardig uit, compleet met jaartal en uitgever. De controle is gelukkig eenvoudig: zoek de bron op. Vind je die niet binnen enkele minuten, behandel de bewering dan als onwaar totdat het tegendeel blijkt. Vraag ook gerust aan het model zelf: 'Op welke bron baseer je dit en hoe zeker ben je?' — een hallucinatie valt bij doorvragen vaak door de mand.",
                example:
                  "AI-output over Project Rietveldkwartier (fictief) meldt: 'Volgens de gemeentelijke woonvisie 2024 moet 34,5% van de woningen sociaal zijn.' Het exacte percentage én de bronverwijzing zijn signalen: controleer de woonvisie zelf voordat dit cijfer ergens landt.",
              },
              {
                heading: "Signaal 3 en 4: het gewenste antwoord en de toegevoegde conclusie",
                body:
                  "Het derde signaal is het antwoord dat precies bevestigt wat je hoopte te horen. Modellen buigen mee met de vraagsteller: een sturende vraag levert vaak een bevestigend antwoord op, ongeacht de werkelijkheid. Voel je opluchting bij een antwoord — 'gelukkig, het mag' — beschouw dat gevoel dan als controlemoment. Het vierde signaal is de toegevoegde conclusie: je vroeg om een samenvatting van een aangeleverde tekst, maar in de output staat een bewering die nergens in de bron voorkomt. Modellen vullen gaten op met wat er meestal in zo'n tekst staat. Zo wordt een voorstel in notulen ineens een genomen besluit, of krijgt een verslag een positieve eindconclusie die niemand heeft uitgesproken. De controle: leg output en bron naast elkaar en check per bewering of die er echt in staat. Vooral bij samenvattingen die extern gaan is deze vergelijking geen luxe maar standaardwerk.",
              },
              {
                heading: "Signaal 5 plus oefening: te mooi rond",
                body:
                  "Het vijfde signaal is het te mooi ronde verhaal: alles klopt precies, elke vraag heeft een antwoord, nergens een slag om de arm. De werkelijkheid van gebiedsontwikkeling is rommelig — onzekere planningen, voorwaardelijke afspraken, open einden. Output zonder enige onzekerheid over een onzeker onderwerp verdient wantrouwen. Nu de oefening. Open in de oefenomgeving de tekst 'Marktverkenning Project Zonneweide (fictief)'. Daarin zijn bewust vier hallucinaties verstopt: een schijnprecies cijfer, een onvindbare bron, een toegevoegde conclusie en een te stellige zekerheid. Markeer alle beweringen die je zou willen verifiëren en noteer per bewering welk signaal je herkende. Vergelijk daarna met de modeluitwerking. Scoor je er drie of meer, dan is je detectie op niveau. De routine die je hier traint — output scannen op de vijf signalen vóór je hem doorstuurt — kost bij een gemiddelde tekst twee tot drie minuten.",
                example:
                  "Uit de oefentekst: 'Uit CBS-onderzoek blijkt dat 78,3% van de starters in deze regio een appartement zoekt; de verkoop van Project Zonneweide (fictief) zal daarom vlot verlopen.' Hier stapelen drie signalen: schijnprecisie, een te controleren bron én een toegevoegde conclusie.",
              },
            ],
            takeaway:
              "Schijnprecisie, onvindbare bronnen, gewenste antwoorden, toegevoegde conclusies en te mooi ronde verhalen: vijf signalen die om verificatie vragen. Scannen kost minuten, een gemiste fout veel meer.",
          },
        },
        {
          titel: "De vier verificatiestappen in de praktijk",
          type: "tekst",
          geschatteMinuten: 12,
          content: {
            intro:
              "Signalen herkennen is stap één; er systematisch mee omgaan is stap twee. Blauwhoed hanteert vier vaste verificatiestappen voor AI-output. Deze les maakt ze concreet, inclusief de vraag hoeveel controle bij welke taak past.",
            sections: [
              {
                heading: "Stap 1 en 2: markeren en verifiëren",
                body:
                  "Stap één: markeer alle controleerbare feiten in de output. Loop de tekst door en licht alles op wat waar of onwaar kan zijn: cijfers, data, namen, normen, wetsartikelen, citaten, bronvermeldingen en stellige beweringen over de werkelijkheid. Meningen en stijlkeuzes sla je over; die zijn geen feiten. Dit markeren dwingt je om output niet als geheel te beoordelen maar per bewering — precies waar hallucinaties zich verstoppen. Stap twee: verifieer elk gemarkeerd feit in de oorspronkelijke bron of bij een collega met domeinkennis. De bron is het document zelf, de officiële publicatie, het contract, de meting — niet een tweede AI-antwoord. Een model dat zijn eigen output 'bevestigt', voegt geen zekerheid toe. Werk van groot naar klein: eerst de beweringen waarop besluiten rusten of die extern zichtbaar worden, daarna de details. Bij een korte tekst is dit minuten werk; went het eenmaal, dan doe je het bijna automatisch.",
                example:
                  "In een AI-samenvatting van het aanbestedingsverslag van Project De Houtwal (fictief) markeert een medewerker: twee bedragen, één datum, de naam van een adviesbureau en de zin 'de gemeente heeft ingestemd'. Juist die laatste blijkt in het verslag een voornemen te zijn, geen besluit.",
              },
              {
                heading: "Stap 3 en 4: corrigeren en vastleggen",
                body:
                  "Stap drie: verwijder of corrigeer wat niet te verifiëren is. Wees hier streng. Een bewering die je niet kunt bevestigen, gaat eruit of wordt herschreven met een expliciete slag om de arm ('nog te bevestigen bij de gemeente'). De verleiding is groot om een plausibel detail te laten staan omdat het de tekst completer maakt — precies zo sluipen hallucinaties in documenten. Onthoud: een gat in je tekst is zichtbaar en herstelbaar, een verzonnen feit is onzichtbaar en reist mee naar elke volgende versie. Stap vier: leg bij belangrijke documenten vast wie gecontroleerd heeft. Een regel onderaan volstaat: 'Feiten geverifieerd door [rol], [datum].' Dat is geen bureaucratie maar duidelijkheid: de volgende lezer weet wat de status is, en de organisatie kan bij een fout terugvinden waar het proces hapert. Voor welke documenten dit geldt: alles wat extern gaat, alles waarop een besluit rust, en alles wat anderen als bron gaan hergebruiken.",
              },
              {
                heading: "Rekenwerk: controle naar gevolg, niet blind wantrouwen",
                body:
                  "Cijfers verdienen geen apart wantrouwen meer, wél proportionele controle. De huidige generatie taalmodellen rekent, zeker bij meerstapsberekeningen als een stichtingskostenopzet, een indexering over meerdere jaren of een gemiddelde over categorieën, betrouwbaar — een groot verschil met eerdere modellen, die inderdaad geregeld plausibel ogende maar foute uitkomsten produceerden. Dat verandert de vraag die je stelt. Niet meer 'kan ik dit rekenwerk ooit vertrouwen', maar 'wat kost het als deze uitkomst onopgemerkt fout is'. Bij een interne vuistregel of een eerste indicatie is een korte plausibiliteitscheck genoeg: klopt de orde van grootte, klopt het teken. Bij een cijfer waarop een besluit rust — een grondexploitatie, een stichtingskostenopzet, iets dat naar de gemeente of een koper gaat — reken je na in een spreadsheet met zichtbare, controleerbare formules, niet omdat het model het waarschijnlijk fout doet, maar omdat de kosten van een gemiste fout daar te hoog zijn om op waarschijnlijkheid te varen. Vraag het model in dat geval ook om zijn rekenopzet te tonen — welke posten, welke volgorde, welke aannames — zodat jij of een collega elke stap kan volgen in plaats van alleen de uitkomst te geloven. En check bij elke tabel die AI produceert of de totalen werkelijk de som van de regels zijn; dat kost seconden en vangt de zeldzame keer dat het toch misgaat.",
                example:
                  "Een financieel medewerker vraagt AI om een indexeringsberekening van de aanneemsom van Project Rietveldkwartier (fictief), inclusief de volledige rekenopzet: welke stappen, welke index, welke peildata. Voor een interne vuistregel neemt ze de uitkomst over na een snelle plausibiliteitscheck. Omdat dit cijfer straks in de stichtingskostenopzet komt die naar de directie gaat, bouwt ze de berekening bovendien na in het rekenmodel van het team — niet uit wantrouwen, maar omdat de uitkomst een besluit draagt.",
              },
            ],
            takeaway:
              "Markeer feiten, verifieer ze in de bron, corrigeer wat niet te bevestigen is en leg de controle vast. Bij rekenwerk bepaalt het gevolg van een fout hoe zwaar je controleert, niet een principieel wantrouwen.",
          },
        },
        {
          titel: "Casus: de verzonnen parkeernorm",
          type: "casus",
          geschatteMinuten: 12,
          content: {
            intro:
              "Eén verzonnen getal in een verder uitstekende tekst — en het scheelde weinig of het stond in een presentatie aan de gemeente. Deze fictieve casus laat zien hoe een hallucinatie bijna doorglipt, en hoe de verificatiestappen het verschil maakten.",
            sections: [
              {
                heading: "De situatie: een presentatie onder tijdsdruk",
                body:
                  "Sanne, projectmedewerker op Project Zonneweide (fictief), bereidt een presentatie voor aan de gemeente over de tweede fase: 60 woningen rond een groen hof. Ze heeft weinig tijd en gebruikt de goedgekeurde AI-omgeving slim: ze voert het geanonimiseerde programma van eisen en het concept-stedenbouwkundig plan in en vraagt om een heldere onderbouwing van de plankwaliteit. De output is sterk. Goede structuur, prettige toon, overtuigende argumenten. Middenin staat één zin die alles samenbindt: 'Met 1,4 parkeerplaats per woning voldoet het plan ruim aan de gemeentelijke parkeernorm van 1,2 voor deze zone.' Sanne heeft die norm niet aangeleverd. Het getal oogt aannemelijk — ze meent zoiets eerder gezien te hebben — en het versterkt haar verhaal precies waar dat nodig is. De presentatie moet morgen af. Herken je het moment? Dit is waar hallucinaties documenten binnenkomen: via een geloofwaardig detail, onder tijdsdruk, verpakt in verder uitstekende tekst.",
              },
              {
                heading: "De verificatie: vijf minuten die het verschil maken",
                body:
                  "Sanne heeft de Fundament-module net afgerond en herkent twee signalen: een schijnprecies getal dat ze niet zelf heeft aangeleverd, en een conclusie die wel érg goed uitkomt. Ze past stap één toe en markeert alle feiten in de output: de twee parkeergetallen, een oppervlakte, een aantal sociale huurwoningen en de zinsnede 'conform de woonvisie'. Stap twee: verifiëren in de bron. De aantallen en oppervlakte kloppen met haar eigen invoer. De parkeernorm zoekt ze op in de gemeentelijke beleidsnota parkeren. Daar staat voor deze zone geen 1,2 maar 1,6 per woning — het plan voldoet dus níét ruim, er is juist een tekort van twaalf plaatsen. Het model had de norm niet verzonnen uit kwade wil; het voorspelde een getal dat in vergelijkbare teksten vaak voorkomt. Stap drie: Sanne corrigeert de passage en benoemt het tekort eerlijk, met twee mogelijke oplossingen. Stap vier: onderaan de presentatie noteert ze dat de parkeercijfers zijn geverifieerd in de beleidsnota, met datum.",
                example:
                  "De gecorrigeerde zin: 'De gemeentelijke norm voor deze zone is 1,6 parkeerplaats per woning (beleidsnota parkeren, geverifieerd 12 maart). Het huidige ontwerp komt twaalf plaatsen tekort; we stellen twee oplossingsrichtingen voor.' Minder glad dan de AI-versie, maar waar — en daarmee bruikbaar.",
              },
              {
                heading: "De nabespreking: wat dit team ervan leerde",
                body:
                  "In de teammeeting deelt Sanne het voorval, inclusief hoe dichtbij het foute getal bij de gemeente was gekomen. De opbrengst voor het team, en voor jou. Eén: de gevaarlijkste hallucinatie is het plausibele detail in een sterke tekst — niet de onzin die iedereen ziet. Twee: 'ik meen zoiets eerder gezien te hebben' is geen verificatie; alleen de bron telt. Drie: verificatie hoeft niet alles te omvatten, maar wél alles wat het model zelf heeft toegevoegd aan jouw invoer. Sanne's invoer was correct; alleen het toegevoegde getal was fout, en precies dáár moet de aandacht heen. Vier: eerlijke output is bruikbaarder dan mooie output. De gemeente reageerde waarderend op de open behandeling van het parkeertekort; een gepresenteerde 'ruime voldoening' die later onwaar bleek, had de relatie geschaad. Het team spreekt af dat elk cijfer in externe stukken voortaan een gecontroleerde bron heeft. Kostenpost: vijf minuten per document. Opbrengst: geen verzonnen normen meer richting gemeente.",
                example:
                  "De teamafspraak op één regel, sindsdien standaard onder elke externe presentatie van Project Zonneweide (fictief): 'Cijfers geverifieerd in bronnen door [rol] op [datum]' — pas in te vullen nadat het ook echt gebeurd is.",
              },
            ],
            takeaway:
              "Controleer vooral wat het model heeft toegevoegd aan jouw eigen invoer. Vijf minuten verificatie in de bron voorkomt dat een verzonnen getal je externe stukken bereikt.",
          },
        },
      ],
    },
    {
      slug: "basisprompten",
      titel: "Basisprompten",
      doelen: [
        "Opbouwen van een prompt met rol, context, taak en format",
        "Verbeteren van AI-output door gericht te itereren",
        "Inzetten van voorbeelden en aannamemarkering voor betrouwbaardere output",
      ],
      geschatteMinuten: 45,
      lessons: [
        {
          titel: "De vier bouwstenen: rol, context, taak, format",
          type: "tekst",
          geschatteMinuten: 12,
          content: {
            intro:
              "Het verschil tussen een matige en een sterke AI-uitkomst zit meestal niet in het model, maar in de prompt. Blauwhoed werkt met vier vaste bouwstenen: rol, context, taak en format. Deze les maakt ze alle vier concreet.",
            sections: [
              {
                heading: "Rol en context: wie is het model en wat moet het weten",
                body:
                  "De eerste bouwsteen is de rol: vertel het model wie het moet zijn. 'Je bent een ervaren communicatieadviseur in gebiedsontwikkeling' levert andere output op dan geen rol of 'je bent een jurist'. De rol stuurt woordkeus, toon en welk soort kennis het model vooropzet. Kies een rol die past bij de lezer van het eindresultaat, niet bij jezelf. De tweede bouwsteen is context: de achtergrond die het model nodig heeft om de taak goed te doen. Denk aan het soort project, de fase, de doelgroep van de tekst en de relevante feiten — altijd geanonimiseerd. Hier geldt een balans: te weinig context dwingt het model tot aannames, te veel context verdunt de aandacht. De toets is simpel: heeft het model dit gegeven nodig om de taak uit te voeren? Zo nee, laat het weg. Namen van bewoners of kopers horen er nooit in; werk met rollen zoals 'een bewoner' of 'de koper van een hoekwoning'.",
                example:
                  "Rol plus context voor Project Rietveldkwartier (fictief): 'Je bent een ervaren omgevingsmanager. Context: binnenstedelijk project, 80 woningen, de bouw start over zes weken, de straat wordt drie weken afgesloten voor bouwverkeer. Doelgroep: direct omwonenden, gemengde leeftijden.'",
              },
              {
                heading: "Taak en format: wat moet er gebeuren en hoe ziet het eruit",
                body:
                  "De derde bouwsteen is de taak: wat er concreet moet gebeuren, met de grenzen erbij. 'Schrijf een brief' is te vaag; 'Schrijf een brief die de afsluiting aankondigt, uitlegt waarom die nodig is en vertelt waar bewoners terechtkunnen met vragen' geeft richting. Benoem ook wat er níét in moet: 'geen technisch jargon, geen beloftes over exacte einddata'. De vierde bouwsteen is het format: de vorm van de output. Een tabel met vaste kolommen, een brief van maximaal 250 woorden, een opsomming van precies vijf punten, een tekst met tussenkopjes. Zonder format kiest het model zelf, en dat is zelden wat je nodig hebt. Een expliciet format maakt output bovendien controleerbaar: bij een tabel met vaste kolommen zie je meteen wat ontbreekt. Zet de vier bouwstenen in vaste volgorde in je prompt — rol, context, taak, format — dan vergeet je er geen en kun je bij een tegenvallend resultaat gericht zien welke bouwsteen bijstelling nodig heeft.",
                example:
                  "Taak plus format: 'Taak: schrijf een aankondigingsbrief over de wegafsluiting; eerlijk over de overlast, met wat we doen om die te beperken. Format: maximaal 250 woorden, korte zinnen, drie alinea's (kern, maatregelen, contact), afsluitend met het spreekuur van de omgevingsmanager.'",
              },
              {
                heading: "De complete prompt: meer sturing, minder gokwerk",
                body:
                  "Zet je de vier bouwstenen achter elkaar, dan ontstaat een prompt die het model weinig ruimte laat om te gokken — en gokken is precies waar zwakke output vandaan komt. Vergelijk het met een briefing aan een nieuwe collega: hoe scherper de briefing, hoe beter het eerste concept. Twee aanvullingen maken de basisprompt af. Vraag ten eerste altijd om aannamemarkering: 'Noteer onderaan welke aannames je hebt gedaan en welke informatie ontbreekt.' Zo wordt zichtbaar waar het model gaten heeft opgevuld, en dat zijn precies de plekken die jij moet controleren of aanvullen. Houd er ten tweede rekening mee dat de eerste versie een concept is, geen eindproduct. De prompt is het startpunt van een kort gesprek, niet een bestelling die in één keer perfect geleverd wordt. In de volgende les leer je hoe je met twee tot drie gerichte iteraties van een goed concept een bruikbaar resultaat maakt. Bewaar prompts die goed werkten; een beproefde prompt is herbruikbaar gereedschap voor je hele team.",
              },
            ],
            takeaway:
              "Rol, context, taak, format: vier bouwstenen die gokwerk uit je prompt halen. Vraag altijd om aannamemarkering en behandel de eerste versie als concept.",
          },
        },
        {
          titel: "Itereren: van eerste versie naar bruikbaar resultaat",
          type: "interactief",
          geschatteMinuten: 10,
          content: {
            intro:
              "De beste AI-gebruikers schrijven geen perfecte prompts — ze itereren slim. Beoordelen, gericht bijsturen, opnieuw beoordelen. Deze les leert je die cyclus, en je oefent hem direct in de oefenomgeving.",
            sections: [
              {
                heading: "Waarom itereren beter werkt dan perfectioneren",
                body:
                  "Je kunt een kwartier sleutelen aan de perfecte prompt, of in drie minuten een goede eerste versie sturen en de output gebruiken om bij te sturen. Het tweede werkt bijna altijd beter. De eerste output laat namelijk zien wat het model van je vraag heeft gemaakt: welke toon het koos, welke aannames het deed, wat het miste. Die informatie heb je vooraf niet. Itereren is dus geen teken dat je prompt slecht was; het is de bedoelde werkwijze. De vuistregel: twee tot drie iteraties leveren doorgaans het beste resultaat. Merk je dat je na vier of vijf rondes nog steeds bijstuurt, dan zit het probleem meestal dieper: de taak is te groot voor één prompt, of er ontbreekt context die het model nodig heeft. Begin dan opnieuw met een betere basisprompt in een vers gesprek, in plaats van door te modderen in een lang gesprek waarin het model eerdere instructies uit het oog verliest.",
              },
              {
                heading: "Gericht bijsturen: concreet, één ding tegelijk",
                body:
                  "De kwaliteit van je iteratie bepaalt de kwaliteit van de verbetering. 'Maak het beter' geeft het model niets om mee te werken; 'maak de toon warmer en persoonlijker' wel. Goede bijsturingen zijn concreet en benoemen wat je anders wilt: 'gebruik kortere zinnen', 'begin met de belangrijkste boodschap', 'voeg een alinea toe over de planning', 'haal de uitroeptekens eruit', 'schrijf actief in plaats van passief'. Stuur bij voorkeur op één of twee punten tegelijk. Wie vijf wijzigingen in één bericht stopt, kan niet meer zien welke aanwijzing welk effect had, en het model laat er vaak een paar liggen. Werkt een aanwijzing niet, formuleer dan scherper of geef een voorbeeldzin in de gewenste stijl. En durf terug te grijpen: 'de vorige versie was beter, ga daarvan uit en pas alleen de afsluiting aan' is een volkomen normale instructie die veel tijd bespaart.",
                example:
                  "Eerste output voor een uitnodiging bewonersavond Project De Houtwal (fictief) klinkt afstandelijk. Iteratie één: 'Maak de toon warmer, alsof een betrokken buurman schrijft. Korte zinnen.' Iteratie twee: 'Goed. Begin nu met de datum en locatie, en sluit af met één concrete vraag aan de lezer.'",
              },
              {
                heading: "Oefening: drie rondes naar een bruikbare tekst",
                body:
                  "Open de oefenomgeving en werk deze opdracht uit. Ronde één: schrijf met de vier bouwstenen een prompt voor een korte tekst op de projectwebsite van Project Zonneweide (fictief), over de start van de verkoop van fase twee: 24 rijwoningen, inschrijven kan twee weken, toewijzing bij overtekening via loting. Beoordeel de output op drie punten: klopt de inhoud met je invoer, past de toon bij Blauwhoed (helder, warm, eerlijk), en is de vorm bruikbaar? Ronde twee: stuur bij op het zwakste punt met één concrete aanwijzing. Ronde drie: stuur bij op het volgende punt. Vergelijk daarna versie één en versie drie naast elkaar en noteer welke aanwijzing het meeste verschil maakte — dat is er meestal één, en die kennis neem je mee naar je volgende prompt. Sluit af met de controle uit de vorige module: staan er feiten in die het model zelf heeft toegevoegd? Zo ja, verifiëren of verwijderen voordat de tekst ergens landt.",
                example:
                  "Veelgemaakte ontdekking in deze oefening: de aanwijzing 'begin met wat de lezer moet weten of doen' verbetert vrijwel elke tekst meer dan drie stijlaanwijzingen samen. Structuur eerst, opsmuk daarna.",
              },
            ],
            takeaway:
              "Itereer in twee tot drie rondes met concrete aanwijzingen, één of twee tegelijk. Blijf je bijsturen, begin dan opnieuw met een betere basisprompt.",
          },
        },
        {
          titel: "Voorbeelden meegeven en aannames laten markeren",
          type: "tekst",
          geschatteMinuten: 11,
          content: {
            intro:
              "Twee technieken tillen je prompts boven de basis uit: een goed voorbeeld meegeven en het model zijn eigen aannames laten benoemen. Beide kosten nauwelijks moeite en leveren direct betere, betrouwbaardere output op.",
            sections: [
              {
                heading: "Few-shot prompten: laat zien wat je bedoelt",
                body:
                  "Stijl beschrijven is moeilijk; stijl voordoen is makkelijk. Dat is het idee achter few-shot prompten: je geeft een of twee voorbeelden mee van hoe het resultaat eruit moet zien, met de instructie 'schrijf in dezelfde stijl en structuur als dit voorbeeld'. Het model pikt toon, zinslengte, opbouw en mate van formaliteit feilloos op uit een voorbeeld — veel beter dan uit tien losse stijlaanwijzingen. De beste voorbeelden zijn eerder goedgekeurde, geanonimiseerde teksten van je eigen team: een bewonersbrief die goed viel, een besluitenlijst met het vaste format, een projectupdate in de juiste toon. Zo geef je in feite de huisstijl van Blauwhoed door aan het model. Let op twee dingen. Anonimiseer het voorbeeld even zorgvuldig als elke andere invoer; ook een oude brief bevat namen en adressen. En kies een voorbeeld van hetzelfde teksttype als je doel: een wervende verkooptekst is een slecht stijlvoorbeeld voor een overlastbrief.",
                example:
                  "Een medewerker plakt de geanonimiseerde standaardbrief bouwoverlast uit de voorbeeldbibliotheek in haar prompt: 'Schrijf een brief over de heiwerkzaamheden van Project Rietveldkwartier (fictief) in exact dezelfde stijl en opbouw als dit voorbeeld: kern eerst, dan maatregelen, dan contact.'",
              },
              {
                heading: "Aannames markeren: maak de gaten zichtbaar",
                body:
                  "Een taalmodel vult ontbrekende informatie geruisloos op. Vertel je niet voor wie de tekst is, dan kiest het model een doelgroep. Vergeet je de planning, dan verzint het een geruststellende zin over de planning. Die opvullingen zijn onzichtbaar — tenzij je erom vraagt. Sluit daarom elke serieuze prompt af met: 'Noteer onderaan welke aannames je hebt gedaan en welke informatie ontbreekt om dit goed te doen.' De output krijgt dan een lijstje in de trant van: 'Aanname: de werkzaamheden duren twee weken. Ontbrekend: het telefoonnummer voor vragen.' Dat lijstje is goud waard. Het vertelt je precies wat je moet controleren, aanvullen of navragen voordat de tekst verder mag. Het werkt bovendien opvoedend voor jezelf: zie je steeds dezelfde aanname terugkomen, dan weet je welke context je voortaan standaard moet meegeven. Behandel het aannamelijstje als verplicht onderdeel van je controle: eerst de aannames afwerken, dan pas de tekst beoordelen.",
              },
              {
                heading: "Samen sterker: het complete promptrecept",
                body:
                  "De technieken uit deze module vormen samen een compact recept dat je op vrijwel elke schrijftaak kunt toepassen. Eén: bouw je prompt op met rol, context, taak en format. Twee: geef waar mogelijk een geanonimiseerd, goedgekeurd voorbeeld mee voor de stijl. Drie: vraag om aannamemarkering. Vier: itereer twee tot drie keer met concrete aanwijzingen. Vijf: controleer de eindversie op feiten die het model zelf toevoegde, en werk het aannamelijstje af. Dit recept kost bij elkaar een paar minuten meer dan een snelle losse vraag — en levert teksten op die in één of twee rondes bruikbaar zijn, in de juiste toon, zonder verborgen gokwerk. Bewaar je beste prompts met voorbeeld en al in een teamdocument. Zo bouwt je afdeling een eigen promptbibliotheek op en hoeft niemand het wiel opnieuw uit te vinden. In de promptbibliotheek van de Academy vind je startvoorbeelden per werkveld die je direct kunt aanpassen aan je eigen project.",
                example:
                  "Compleet recept in actie voor Project Zonneweide (fictief): rol (omgevingsmanager), context (geanonimiseerde projectfeiten), taak (uitnodiging inloopavond), format (max 200 woorden, kern eerst), voorbeeld (goedgekeurde eerdere uitnodiging), afsluiter ('markeer aannames en ontbrekende informatie').",
              },
            ],
            takeaway:
              "Een goed voorbeeld brengt stijl beter over dan tien aanwijzingen, en aannamemarkering maakt onzichtbaar gokwerk zichtbaar. Samen met de vier bouwstenen vormt dit je vaste promptrecept.",
          },
        },
        {
          titel: "Casus: de bewonersbrief die eerst niet klonk",
          type: "casus",
          geschatteMinuten: 12,
          content: {
            intro:
              "Van een stijve, wollige eerste versie naar een brief die bewoners echt bereikt — in drie iteraties. Deze fictieve casus volgt een omgevingsmanager die de haltechnieken uit deze module stap voor stap toepast.",
            sections: [
              {
                heading: "De situatie: slecht nieuws dat goed verteld moet worden",
                body:
                  "Farid, omgevingsmanager op Project De Houtwal (fictief), moet bewoners informeren over een tegenvaller: de heiwerkzaamheden lopen drie weken uit door een verontreinigde grondlaag die eerst gesaneerd moet worden. Vervelend nieuws, en precies het soort brief waarbij toon alles is. Farid begint te snel. Zijn eerste prompt: 'Schrijf een brief aan bewoners over uitloop van heiwerkzaamheden met drie weken.' De output is precies wat je bij zo'n magere prompt verwacht: een formele brief vol wolligheid ('wij betreuren eventuele ongemakken die mogelijkerwijs kunnen ontstaan'), zonder reden voor de uitloop, met een verzonnen einddatum en een gladde slotzin dat 'alles volgens planning verloopt' — wat aantoonbaar niet zo is. Farid herkent het probleem: hij gaf geen rol, nauwelijks context, geen format en geen voorbeeld. Het model vulde alle gaten zelf op, inclusief een feit dat niet klopt. In plaats van eindeloos bij te sturen op deze zwakke basis, begint hij opnieuw met het volledige promptrecept.",
              },
              {
                heading: "De aanpak: het recept toegepast",
                body:
                  "Farids tweede prompt bevat alle bouwstenen. Rol: 'Je bent een ervaren omgevingsmanager die eerlijk en warm communiceert.' Context, geanonimiseerd: het project, de uitloop van drie weken, de reden (aangetroffen verontreiniging die eerst wordt gesaneerd), wat er al gebeurt (sanering start maandag, onafhankelijk milieutoezicht), en dat bewoners eerder zijn beloofd dat het heien deze maand zou eindigen. Taak: 'Schrijf een brief die de uitloop meldt, de reden eerlijk uitlegt, erkent dat dit tegenvalt na eerdere toezeggingen en concreet vertelt wat we doen en waar mensen terechtkunnen.' Format: 'Maximaal 250 woorden, kern in de eerste twee zinnen, korte zinnen, geen jargon.' Hij plakt de goedgekeurde voorbeeldbrief bouwoverlast erbij: 'zelfde stijl en opbouw'. En hij sluit af met: 'Markeer onderaan je aannames en wat je mist.' De output is direct van een ander niveau. Het aannamelijstje meldt bovendien: 'Aanname: bewoners zijn eerder per brief geïnformeerd. Ontbrekend: contactgegevens en spreekuurtijden.' Precies de gaten die Farid nu gericht kan vullen.",
                example:
                  "Openingszin van de nieuwe versie: 'Het heien bij De Houtwal duurt drie weken langer dan we u eerder meldden. We leggen in deze brief uit waarom, en wat we doen om verdere uitloop te voorkomen.' Kern eerst, eerlijk over de gebroken verwachting, geen wolligheid.",
              },
              {
                heading: "De afronding: itereren, controleren, versturen",
                body:
                  "Twee iteraties maken de brief af. Eerste bijsturing: 'De alinea over de sanering is te technisch. Leg in twee zinnen uit wat er gebeurt, zonder de termen grondlaag-interventiewaarde en BUS-melding.' Tweede bijsturing: 'Sluit af met het inloopspreekuur en de uitnodiging om vragen te stellen, niet met een verontschuldiging.' Daarna volgt de controle die geen enkele brief mag overslaan. Farid loopt de feiten na: de nieuwe einddatum haalt hij uit de bijgestelde planning van de aannemer, niet uit de AI-tekst. Hij werkt het aannamelijstje af en vult contactgegevens en spreekuurtijden handmatig in — persoonsgegevens gaan immers niet door de AI-tool maar komen pas in de definitieve versie. Zijn teamlead leest mee op toon en feiten, zoals de richtlijn bewonerscommunicatie voorschrijft: er verlaat geen tekst het huis zonder menselijke controle. Totale tijdsinvestering: twintig minuten, waarvan het meeste in de controle zat. De brief die op de mat valt, klinkt als Blauwhoed: helder over de tegenvaller, concreet over de aanpak, met een echt mens als aanspreekpunt.",
                example:
                  "De volgorde die deze casus illustreert: recept-prompt met voorbeeld, twee gerichte iteraties, feiten uit de bron, persoonsgegevens pas ná de AI-stap, menselijke eindcontrole. Dezelfde route werkt voor vrijwel elke tekst in gebiedsontwikkeling.",
              },
            ],
            takeaway:
              "Een magere prompt levert wolligheid en verzonnen feiten op; het volledige recept levert in drie rondes een brief die klopt en klinkt. De menselijke eindcontrole blijft altijd de laatste stap.",
          },
        },
      ],
    },
    {
      slug: "veiligheid-i",
      titel: "Veiligheid I",
      doelen: [
        "De vier dataniveaus van Blauwhoed toepassen: welke informatie waar mag",
        "Toepassen van anonimiseren en het verschil met pseudonimiseren uitleggen",
        "Uitvoeren van de meldprocedure bij een (mogelijk) datalek of AI-incident",
      ],
      geschatteMinuten: 45,
      isSecurityModule: true,
      lessons: [
        {
          titel: "Dataclassificatie: wat mag waar",
          type: "tekst",
          geschatteMinuten: 12,
          content: {
            intro:
              "Niet alle bedrijfsinformatie is even gevoelig, en niet elke AI-tool biedt dezelfde waarborgen. Blauwhoed werkt daarom met vier dataniveaus die precies bepalen wat waar mag. Deze les leert je de indeling en, minstens zo belangrijk, waarom hij zo is vastgesteld.",
            sections: [
              {
                heading: "Vier niveaus, van openbaar tot persoonsgegevens",
                body:
                  "Blauwhoed classificeert informatie in vier niveaus, oplopend in gevoeligheid. Openbaar is informatie die al naar buiten mag of is — een gepubliceerde projecttekst, een goedgekeurd persbericht — en is vrij te gebruiken in elke goedgekeurde tool. Intern is werkinformatie die niet voor het publiek is maar ook niet bijzonder gevoelig, zoals een conceptplanning of een interne notitie, en is eveneens vrij in elke goedgekeurde tool. Vertrouwelijk is commercieel gevoelige informatie die de concurrentie- of onderhandelingspositie van Blauwhoed raakt: individuele VON-prijzen en kortingsafspraken, tenderstukken en biedstrategieën, grondposities en aankooponderhandelingen, contractvoorwaarden die afwijken van de standaard. En persoonsgegevens is alle informatie over herkenbare personen — de strengste categorie, met kandidaatgegevens van sollicitanten als bijzonder gevoelige subcategorie. Elk niveau heeft eigen regels voor welke tool het aan mag, en dat is precies waar de rest van deze les over gaat.",
              },
              {
                heading: "Vertrouwelijk: welkom in Copilot, buiten de deur bij de rest",
                body:
                  "Vertrouwelijke bedrijfsinformatie — VON-prijzen, tenderstukken, biedstrategieën, grondposities, afwijkende contractvoorwaarden — mag in Microsoft 365 Copilot onder de zakelijke Blauwhoed-tenant én in de Academy-omgeving. De reden: beide blijven binnen de eigen, contractueel beveiligde omgeving van Blauwhoed, met een verwerkersovereenkomst, contractuele uitsluiting van modeltraining en zakelijk beheerde toegang — precies de waarborgen die vertrouwelijke informatie nodig heeft. Bij een vakspecifieke applicatie ligt dat genuanceerder: dat mag alleen als de verwerkersovereenkomst van díe tool vertrouwelijke bedrijfsinformatie expliciet dekt. Vraag dit na bij de tooleigenaar vóórdat je iets invoert; ga nooit uit van 'goedgekeurd is goedgekeurd', want de dekking verschilt per tool en per gegevenssoort. En in geen geval gaat vertrouwelijke informatie een niet-goedgekeurde tool in, ook niet 'even snel' of gedeeltelijk: daar ontbreekt elke waarborg en is het risico onomkeerbaar. Belangrijk: dat Copilot vertrouwelijke informatie mág verwerken is geen vrijbrief om alles erin te gooien. Dataminimalisatie blijft onverkort gelden — voer alleen in wat de taak echt nodig heeft, ook in een tool die het in theorie aankan.",
                example:
                  "Een projectontwikkelaar wil AI laten helpen met een biedbrief voor een gemeentelijke tender. In Copilot onder haar Blauwhoed-account mag de biedstrategie worden meegenomen als de taak dat echt vraagt — maar ze houdt de prompt toch minimaal: de openbare beoordelingscriteria en de kernboodschap, niet elk onderhandelingsdetail dat niet in de brief hoeft te landen. In een gratis chatbot-app blijft dit sowieso verboden, punt.",
              },
              {
                heading: "Persoonsgegevens en kandidaatgegevens: de strengste categorie",
                body:
                  "Persoonsgegevens zijn alle informatie over herkenbare personen: kopers, huurders, omwonenden, sollicitanten én collega's. Dat gaat om meer dan namen — ook e-mailadressen, telefoonnummers, adressen, kentekens, foto's en combinaties die iemand herkenbaar maken, zoals 'de bewoner van het hoekappartement die bezwaar maakte'. Dit niveau mag alleen in tools en werkstromen waarvoor een DPIA(-light) is gedaan, en de werkwijze is altijd: anonimiseer vóór je met AI werkt, voeg persoonlijke gegevens pas ná de AI-stap handmatig toe in de definitieve versie. Hoe dat anonimiseren precies werkt, leer je in de volgende les. Kandidaatgegevens vormen een nog strengere subcategorie: cv's, motivatiebrieven en gespreksverslagen zitten vol persoonsgegevens van mensen die kwetsbaar zijn in de relatie met een mogelijke werkgever, en AI die kandidaten beoordeelt of rangschikt is volgens de EU AI Act een hoogrisicotoepassing. Voer daarom nooit kandidaatgegevens in een AI-tool in, ook niet om 'even een samenvatting' van een cv te maken — dit ligt op niveau 1 simpelweg buiten bereik. En omdat geen classificatie ooit alle gevallen dekt, geldt tot slot de omkeerregel: twijfel je of iets gedeeld mag worden, dan is die twijfel zelf het antwoord. Niet invoeren, eerst navragen bij je teamlead of de privacycontactpersoon. Niemand bij Blauwhoed is ooit in de problemen gekomen door één dag te wachten met een prompt; het omgekeerde is helaas niet waar.",
                example:
                  "Een HR-medewerker wil AI gebruiken om een vacaturetekst voor Project Zonneweide (fictief) aantrekkelijker te maken. Prima: een vacaturetekst is openbaar. Dezelfde tool gebruiken om binnengekomen cv's samen te vatten mag niet — dat zijn kandidaatgegevens, ongeacht welke tool het is.",
              },
            ],
            takeaway:
              "Vier niveaus: openbaar en intern mogen overal, vertrouwelijk mag in Copilot en de Academy maar niet zomaar in vakspecifieke apps of niet-goedgekeurde tools, persoonsgegevens alleen na een DPIA. Bij twijfel geldt de omkeerregel: vertrouwelijk tot het tegendeel vaststaat.",
          },
        },
        {
          titel: "Anonimiseren of pseudonimiseren: het verschil dat telt",
          type: "interactief",
          geschatteMinuten: 11,
          content: {
            intro:
              "'Ik heb de namen weggehaald, dus het is anoniem.' Was het maar zo simpel. Deze les leert je het verschil tussen pseudonimiseren en echt anonimiseren, en je oefent met een casus die je vóór AI-gebruik veilig moet maken.",
            sections: [
              {
                heading: "Pseudonimiseren: de naam is weg, de persoon niet",
                body:
                  "Pseudonimiseren betekent: directe identificatoren vervangen door codes of labels. 'Mevrouw De Vries' wordt 'koper 12', 'Lindenlaan 12' wordt 'adres A'. Het voelt veilig, maar de persoon blijft herleidbaar. Wie 'koper 12, hoekwoning, koopsom € 485.000, twee jonge kinderen' leest en het project kent, weet vaak precies om wie het gaat. Ook een combinatie als 'de enige vrouwelijke projectleider van de vestiging' wijst één persoon aan zonder ooit een naam te noemen. Daarom is de juridische realiteit helder: gepseudonimiseerde gegevens zijn nog steeds persoonsgegevens en vallen volledig onder de AVG. Voor AI-gebruik betekent dit dat 'namen eruit halen' niet genoeg is. De toets is niet 'staat er een naam in?' maar 'kan iemand met redelijke inspanning achterhalen om wie het gaat?' — ook door dit te combineren met andere bronnen, zoals het kadaster, sociale media of simpelweg kennis van het project. Zolang het antwoord ja is, gelden alle regels uit de vorige les onverkort.",
                example:
                  "Een verkoopmedewerker van Project De Houtwal (fictief) wil klachten analyseren en vervangt namen door 'koper 1' tot en met 'koper 8', maar laat bouwnummer en koopsom staan. Iedereen met de verkooplijst herleidt elke koper in seconden. Dit is pseudonimiseren — en dus niet toegestaan als AI-invoer.",
              },
              {
                heading: "Anonimiseren: onherleidbaar, ook in combinatie",
                body:
                  "Echt anonimiseren betekent: de gegevens zijn met geen redelijke inspanning terug te herleiden tot een persoon, ook niet door combinatie met andere bronnen. Dat vraagt meer dan namen schrappen. Concrete technieken: vervang personen door rollen ('een koper', 'een omwonende', 'een lid van de klankbordgroep'). Verwijder of vergrof unieke details: van exacte koopsom naar een prijsklasse, van bouwnummer naar 'een hoekwoning', van exacte leeftijd naar niets — vraag je bij elk detail af of het model het echt nodig heeft. Schrap kleine aantallen: in een groep van drie is 'één van de drie' altijd herleidbaar. En let op de valkuil van het unieke verhaal: een klacht met een zeer specifieke, herkenbare aanleiding blijft herleidbaar hoe je ook labelt; vat die dan samen op een hoger abstractieniveau. De eindtoets voor elke geanonimiseerde tekst: zou een collega die het project goed kent, kunnen aanwijzen over wie dit gaat? Bij ja: verder anonimiseren of niet invoeren. Dataminimalisatie helpt hier dubbel: wat je weglaat, kan niemand herleiden.",
                example:
                  "Goed geanonimiseerd voor AI-analyse: 'Acht kopers van een nieuwbouwproject (fictief geval) meldden klachten na oplevering: vijf over krassen op kozijnen, twee over een haperende vloerverwarming, één over geluid van de installatie.' Geen bouwnummers, geen bedragen, geen herleidbare details — en de analysetaak kan er prima mee uit de voeten.",
              },
              {
                heading: "Oefening: maak deze casus AI-klaar",
                body:
                  "Tijd om het zelf te doen. In de oefenomgeving staat een fictief klachtenoverzicht van Project Rietveldkwartier (fictief): zes meldingen met namen, adressen, bouwnummers, telefoonnummers, koopsommen en persoonlijke omstandigheden ('werkt in nachtdienst', 'is slecht ter been'). De opdracht: maak dit overzicht klaar voor AI-analyse. Stap één: bepaal het doel — je wilt patronen in de klachten vinden — en schrap alles wat daarvoor niet nodig is (dataminimalisatie eerst, dat scheelt het meeste werk). Stap twee: vervang de resterende personen door rollen en vergrof unieke details. Stap drie: pas de eindtoets toe — kan een ingewijde collega iemand aanwijzen? Let daarbij extra op de melding over nachtdiensten: zo'n omstandigheid is herkenbaarder dan een naam. Vergelijk je resultaat met de modeluitwerking en noteer wat je miste. Onthoud de volgorde die je hier traint, want die is altijd hetzelfde: eerst minimaliseren, dan anonimiseren, dan de eindtoets — en pas daarna gaat er iets richting een AI-tool.",
              },
            ],
            takeaway:
              "Pseudonimiseren (namen vervangen door codes) laat mensen herleidbaar en valt onder de AVG; anonimiseren maakt herleiding met redelijke inspanning onmogelijk. Minimaliseer eerst, anonimiseer daarna en doe altijd de eindtoets.",
          },
        },
        {
          titel: "Casus: de klantenlijst in de chatbot",
          type: "casus",
          geschatteMinuten: 12,
          content: {
            intro:
              "Eén handeling onder tijdsdruk, en persoonsgegevens van 34 kopers staan in een gratis chatbot. Deze fictieve casus laat zien hoe snel het gebeurt, wat er daarna goed ging — en wat jij eruit meeneemt.",
            sections: [
              {
                heading: "De situatie: vrijdagmiddag, één knip en plak te veel",
                body:
                  "Lotte, verkoopcoördinator op Project Zonneweide (fictief), moet vrijdagmiddag nog een overzicht maken van de stand van de verkoop voor het maandagoverleg. In haar Excel staat de kopersadministratie: 34 regels met namen, e-mailadressen, bouwnummers, VON-prijzen en de status van elke koop. Het handmatig samenvatten kost zeker een uur. Op haar telefoon staat nog een gratis chatbot-app van vóór haar tijd bij Blauwhoed. Ze plakt de hele tabel erin: 'Maak hier een management-samenvatting van.' Het antwoord is er in tien seconden en ziet er prima uit. Pas als ze het overzicht in de mail zet, knaagt er iets — was dit eigenlijk toegestaan? Ze checkt het intranet en voelt de grond zakken: persoonsgegevens én individuele VON-prijzen, ingevoerd in een niet-goedgekeurde consumententool waar invoer voor modeltraining gebruikt kan worden. Herken het mechanisme: geen kwade wil, maar tijdsdruk, een tool binnen handbereik en een taak die AI inderdaad goed kan. De fout zat niet in het idee om samen te vatten; die zat in wát er de tool in ging en wélke tool het was.",
              },
              {
                heading: "De reactie: stoppen, bewaren, melden",
                body:
                  "Wat Lotte vervolgens doet, is precies goed — en daarom staat deze casus in de les. Eén: ze stopt direct met de sessie en voert niets meer in. Twee: ze verwijdert niets. De reflex om het gesprek en de app snel te wissen is menselijk maar fout: de organisatie moet kunnen beoordelen wat er precies is gelekt, en daarvoor zijn de feiten nodig. Ze noteert tijdstip, de naam van de app, en welke gegevens erin stonden: 34 namen, e-mailadressen, bouwnummers, VON-prijzen, koopstatus. Drie: ze meldt het incident nog diezelfde middag bij IT en de privacycontactpersoon — niet maandag, want de wettelijke beoordelingstermijn van 72 uur begint bij ontdekking, en die termijn is er niet voor niets kort: hoe eerder de organisatie het weet, hoe meer er nog te beperken valt. In haar melding is ze volledig, ook over het feit dat het een privé-app op haar telefoon was. Vier: ze wacht met verdere actie op instructies, in plaats van zelf kopers te gaan bellen of de app-leverancier te mailen.",
                example:
                  "Lottes melding in vier regels: wat (kopersadministratie met 34 personen incl. VON-prijzen), waar (gratis chatbot-app, privéaccount), wanneer (vandaag 15:40), wat ik gedaan heb (sessie gestopt, niets verwijderd, schermafbeeldingen van het gesprek bewaard). Meer heeft het eerste bericht niet nodig.",
              },
              {
                heading: "De afloop: geen sanctie, wel lessen",
                body:
                  "De privacycontactpersoon en IT beoordelen het incident. Omdat het om persoonsgegevens in combinatie met financiële gegevens gaat, bij een leverancier zonder verwerkersovereenkomst, wordt het als datalek gemeld bij de Autoriteit Persoonsgegevens, binnen de termijn. De kopers worden geïnformeerd — vervelend, maar beheerst en eerlijk. En Lotte? Die krijgt geen sanctie. Blauwhoed hanteert een meldcultuur zonder schuldvraag: snel en volledig melden is professioneel gedrag en wordt zo behandeld. De teamlead zegt het in de nabespreking treffend: 'De fout was menselijk; het melden was voorbeeldig. Andersom was het een probleem geweest.' Want dat is de kern: niet melden of verzwijgen is wél verwijtbaar. Het team trekt drie lessen die jij overneemt. Verwijder privé-AI-apps van je werktelefoon, dan kan de vrijdagmiddagreflex ze niet vinden. De goedgekeurde route was er gewoon: geanonimiseerd samenvatten in de Academy-omgeving of Copilot had twintig minuten gekost. En de drempel om te melden hoort laag te zijn — ook bij twijfel of het 'echt' een datalek is, want die beoordeling is aan de privacycontactpersoon, niet aan jou.",
                example:
                  "De veilige variant achteraf uitgewerkt: verkoopstatus geaggregeerd zonder personen ('22 verkocht, 7 onder optie, 5 beschikbaar; 3 dossiers wachten op financieringsvoorbehoud') in de goedgekeurde omgeving. Zelfde managementinzicht, nul persoonsgegevens.",
              },
            ],
            takeaway:
              "Gebeurt het toch: stop de sessie, verwijder niets, noteer de feiten en meld direct bij IT en de privacycontactpersoon. Melden kent geen sanctie; verzwijgen wel.",
          },
        },
        {
          titel: "Het datalek: melden zonder schuldvraag",
          type: "tekst",
          geschatteMinuten: 10,
          content: {
            intro:
              "Wie weet wat er na een melding gebeurt, meldt sneller — en snelheid is bij een datalek alles. Deze les zet de meldprocedure van Blauwhoed op een rij: wat een incident is, wat jij doet en wat de organisatie daarna doet.",
            sections: [
              {
                heading: "Wat telt als AI-incident",
                body:
                  "Meld ruimer dan je denkt dat nodig is. Een AI-incident is elke situatie waarin vertrouwelijke informatie of persoonsgegevens in een AI-tool terecht (kunnen) zijn gekomen, of waarin AI-output schade veroorzaakt of dreigt te veroorzaken. Concrete voorbeelden uit de praktijk: een klantenlijst in een prompt geplakt; een tenderdocument geüpload naar een niet-goedgekeurde tool; AI-output met verzonnen feiten die al extern is gedeeld; inloggegevens gedeeld in een chatgesprek; een collega die structureel een verboden tool gebruikt. Ook de twijfelgevallen horen erbij: 'ik weet niet zeker of die bijlage persoonsgegevens bevatte' is een melding waard, want de beoordeling of iets werkelijk een datalek is, ligt bij de privacycontactpersoon — niet bij jou. Dat is geen motie van wantrouwen maar taakverdeling: jij signaleert, de specialist beoordeelt. De grootste fout die je kunt maken is niet het incident zelf, maar het incident stilhouden in de hoop dat het overwaait. Datalekken waaien niet over; ze worden alleen maar duurder naarmate ze later boven tafel komen.",
                example:
                  "Twijfelgeval uit Project De Houtwal (fictief): een medewerker uploadde een verslag naar de goedgekeurde omgeving en ontdekt achteraf dat in een voetnoot de naam en het telefoonnummer van een omwonende stonden. Ook dit meldt hij — kleine omvang, goedgekeurde tool, tóch een beoordeling waard.",
              },
              {
                heading: "Jouw vier stappen, in volgorde",
                body:
                  "De procedure voor jou als melder bestaat uit vier stappen. Stap één: stop direct met de sessie. Voer niets meer in, maak geen nieuwe kopieën van de gegevens en ga niet 'nog even door' om je werk af te maken. Stap twee: verwijder niets zelf. Geen chats wissen, geen bestanden weggooien, geen account opheffen — bewaar de relevante feiten: tijdstip, welke tool, welk account, welke soort gegevens en hoeveel personen het raakt. Die feiten bepalen de beoordeling. Stap drie: meld direct bij IT en de privacycontactpersoon. Direct betekent direct: ook buiten kantooruren, ook op vrijdagavond, ook als je twijfelt. De organisatie moet binnen 72 uur na ontdekking beoordelen of melding bij de Autoriteit Persoonsgegevens verplicht is, en die klok begint bij jouw ontdekking — niet bij jouw melding, en niet bij de bevestiging dat het echt een lek is. Elk uur dat je wacht, snoept van de tijd die specialisten hebben om het goed af te handelen. Stap vier: volg de instructies van IT en privacy op en onderneem geen eigen acties richting betrokkenen of leveranciers.",
              },
              {
                heading: "Wat er daarna gebeurt — en waarom melden veilig is",
                body:
                  "Na je melding neemt de organisatie het over. De privacycontactpersoon beoordeelt de ernst: welke gegevens, hoeveel mensen, welk risico voor betrokkenen. Daaruit volgt of melding bij de Autoriteit Persoonsgegevens verplicht is en of betrokkenen geïnformeerd moeten worden. IT beoordeelt de technische kant: kan de invoer bij de leverancier verwijderd worden, moeten wachtwoorden of toegangen worden aangepast. De AI-coördinator ontvangt elke melding mee als beheerder van het toolregister: gaat het om een tool die vaker misbruikt wordt of om een categorie die stelselmatig verkeerd wordt begrepen, dan agendeert die dat voor de jaarlijkse beleidsreview. Jij hoort wat er van jou nog nodig is — meestal alleen je feitenrelaas. En dan het belangrijkste om te onthouden: een melding leidt nooit tot een sanctie voor de melder. Blauwhoed hanteert bewust een meldcultuur zonder schuldvraag, omdat elke drempel om te melden de schade vergroot. Snel melden is een teken van professionaliteit en wordt ook zo behandeld. Wat wél verwijtbaar is: niet melden, te laat melden of informatie achterhouden. Sla deze les op waar je hem terugvindt, want je hebt hem nodig op een moment dat je hoofd er niet naar staat. De meldroute staat ook op het intranet onder Privacy > Datalek melden.",
                example:
                  "Ezelsbrug voor het moment zelf, ook bruikbaar als geheugensteun op een post-it: STOP — BEWAAR — MELD — VOLG. Stop de sessie, bewaar de feiten, meld bij IT en privacy, volg hun instructies. In die volgorde, zonder eigen opruimacties ertussen.",
              },
            ],
            takeaway:
              "Stop, bewaar, meld, volg: de vier stappen bij elk AI-incident, ook bij twijfel. De 72-uurstermijn begint bij ontdekking en melden kent geen schuldvraag — verzwijgen wel.",
          },
        },
      ],
    },
    {
      slug: "goedgekeurde-tools",
      titel: "Goedgekeurde tools",
      doelen: [
        "Benoemen welke AI-tools binnen Blauwhoed zijn toegestaan en waarom",
        "Herkennen van de risico's van gratis consumententools voor werkgebruik",
        "Doorlopen van de aanvraagprocedure voor een nieuwe AI-tool",
      ],
      geschatteMinuten: 45,
      lessons: [
        {
          titel: "De goedgekeurde lijst: wat mag en waarom",
          type: "tekst",
          geschatteMinuten: 11,
          content: {
            intro:
              "Niet elke AI-tool is verboden en niet elke tool is toegestaan — er is een duidelijke lijst. Deze les behandelt welke tools je mag gebruiken, waar je die lijst vindt en, belangrijker, waaróm juist deze tools zijn goedgekeurd.",
            sections: [
              {
                heading: "De drie toolcategorieën: Copilot, vakspecifieke apps, Academy",
                body:
                  "Blauwhoed werkt met drie categorieën goedgekeurde tools, elk met een eigen rol. Eén: Microsoft 365 Copilot onder de zakelijke Blauwhoed-tenant, voor iedereen toegestaan en het standaardgereedschap voor het dagelijkse werk in mail, documenten en vergaderingen. Let op de precieze formulering: het gaat om de zakelijke licentie onder de Blauwhoed-tenant. Dezelfde Microsoft-producten onder een privéaccount vallen er niet onder, ook al ziet het scherm er hetzelfde uit — controleer bij twijfel rechtsboven met welk account je bent ingelogd. Twee: vakspecifieke AI-applicaties, per vakgebied goedgekeurd voor een specifieke taak die Copilot niet (goed genoeg) doet — denk aan beeldgeneratie voor sfeerimpressies, transcriptie van overleggen, of contract- en data-analyse. Elke vakspecifieke tool heeft een tooleigenaar: iemand die de tool functioneel beheert, weet wat de verwerkersovereenkomst wel en niet dekt, en het aanspreekpunt is voor vragen over die specifieke tool. Drie: de Blauwhoed AI Academy-omgeving, waarin je leert en oefent — inclusief de oefenchat en de opdrachten. Alle drie staan met naam, tooleigenaar en toegestane dataniveaus in het toolregister op het intranet onder IT > AI-tools; die pagina is altijd leidend, want de lijst verandert. Alles daarbuiten — inclusief gratis of privé-accounts van ChatGPT en vergelijkbare diensten — is verboden voor werkinformatie, ongeacht hoe onschuldig de taak lijkt.",
                example:
                  "Een projectassistent van Project Rietveldkwartier (fictief) vat het geanonimiseerde bouwoverleg samen met Copilot onder haar Blauwhoed-account: toegestaan. Wil ze er ook een sfeerimpressie bij laten genereren, dan gebruikt ze de vakspecifieke beeldgeneratietool uit het toolregister, niet Copilot en niet een gratis app op haar telefoon.",
              },
              {
                heading: "Waarom deze tools wel: de vier toetsstenen",
                body:
                  "De goedgekeurde tools hebben iets gemeen: ze zijn getoetst op vier punten, en die toetsstenen vertellen je precies waarom de lijst is zoals hij is. Ten eerste de verwerkersovereenkomst: er ligt een contract dat vastlegt wat de leverancier met ingevoerde gegevens mag doen — en vooral wat niet, en bij vakspecifieke tools ook tot welk dataniveau die dekking reikt. Ten tweede dataopslag binnen de EER, zodat Europese privacyregels afdwingbaar blijven. Ten derde uitsluiting van modeltraining: contractueel is vastgelegd dat jouw invoer niet wordt gebruikt om modellen te trainen. Voor de Academy geldt bijvoorbeeld dat prompts via de beveiligde server van Blauwhoed naar de modelleverancier gaan, met precies die uitsluiting. Ten vierde beheersbaarheid van toegang: accounts zijn zakelijk beheerd, zodat Blauwhoed toegang kan intrekken bij vertrek van een medewerker en kan zien welke tools in gebruik zijn. De AI-coördinator houdt het toolregister met deze vier toetsstenen actueel en herziet het geheel — lijst, classificatie, procedures — minimaal jaarlijks. Wie deze vier toetsstenen kent, begrijpt ook meteen waarom een willekeurige gratis app faalt: meestal op alle vier tegelijk.",
              },
              {
                heading: "Goedgekeurd is niet grenzeloos",
                body:
                  "Een veelgemaakte denkfout: 'de tool is goedgekeurd, dus alles mag erin'. Zo werkt het niet. De goedkeuring zegt iets over de tool en de leverancier; welk dataniveau erin mag, bepaalt de classificatie uit de vorige les, en jouw verantwoordelijkheid voor de invoer blijft volledig bestaan. Copilot mag openbare, interne én vertrouwelijke informatie verwerken; persoonsgegevens alleen na een DPIA; kandidaatgegevens nooit. Een vakspecifieke app mag vertrouwelijke informatie alleen als de eigen verwerkersovereenkomst dat dekt — vraag dit na bij de tooleigenaar, neem het niet aan. Waarom deze grenzen blijven bestaan, ook binnen een getoetste tool? Omdat dataminimalisatie een zelfstandige AVG-plicht is: je verwerkt alleen wat noodzakelijk is voor het doel, ongeacht hoe goed de verwerker is. Omdat elk systeem gehackt of verkeerd geconfigureerd kan raken, en wat er niet in staat, kan er niet uit lekken. En omdat gewoontevorming telt: wie in de veilige omgeving slordig invoert, neemt die gewoonte mee naar plekken waar het direct misgaat. De juiste houding is dus tweeledig: gebruik de goedgekeurde tools ruimhartig voor waar ze goed in zijn, en behandel je invoer overal even zorgvuldig. Goedgekeurde tool plus het juiste dataniveau — die combinatie is de standaard.",
                example:
                  "Een collega wil in de Academy-omgeving oefenen met een echte klachtenmail van een koper van Project De Houtwal (fictief), 'want deze omgeving is toch veilig'. Toch eerst anonimiseren: namen zijn persoonsgegevens en die mogen pas na een DPIA. De omgeving is goedgekeurd; het dataniveau van de klacht verandert daardoor niet.",
              },
            ],
            takeaway:
              "Drie toolcategorieën: Copilot voor iedereen, vakspecifieke apps per vakgebied met een tooleigenaar, en de Academy om te leren. Alles staat in het toolregister, beheerd door de AI-coördinator. Goedgekeurd betekent nooit dat elk dataniveau overal mag.",
          },
        },
        {
          titel: "Waarom gratis chatbots duur kunnen uitpakken",
          type: "tekst",
          geschatteMinuten: 10,
          content: {
            intro:
              "Gratis consumentenversies van chatbots zijn verboden voor werkgerelateerde invoer. Dat is geen overdreven voorzichtigheid maar een afweging met vier concrete risico's. Wie ze kent, legt het ook overtuigend uit aan een collega.",
            sections: [
              {
                heading: "Jouw invoer als trainingsmateriaal",
                body:
                  "Het eerste en bekendste risico: bij gratis consumententools kan je invoer gebruikt worden voor het trainen van toekomstige modellen. Het verdienmodel van gratis diensten draait zelden op liefdadigheid; je betaalt met je data. Wat dat concreet betekent: een tekst die jij vandaag invoert, kan onderdeel worden van de kennis van een volgend model — en er is geen praktische manier om dat terug te draaien. Voor een boodschappenlijstje maakt dat niets uit. Voor een concept-biedbrief, een klachtenoverzicht of een interne kostenraming is het onaanvaardbaar: je hebt bedrijfsinformatie feitelijk buiten de organisatie gebracht zonder contract, zonder controle en zonder terugweg. Let ook op de instellingenmythe: 'ik heb trainingsgebruik uitgezet in de instellingen'. Die instelling is een belofte van de leverancier aan een consument, zonder verwerkersovereenkomst die Blauwhoed kan afdwingen of controleren. Zakelijk vertrouwen bouw je op contracten, niet op schuifjes in een app. Daarom telt bij de toetsing van tools alleen de contractueel vastgelegde uitsluiting van modeltraining.",
              },
              {
                heading: "Geen contract, geen zicht, geen exit",
                body:
                  "De overige drie risico's zijn minder bekend maar even wezenlijk. Risico twee: er is geen verwerkersovereenkomst. Zodra er persoonsgegevens in het spel zijn, verwerkt de toolleverancier die zonder de wettelijk vereiste afspraken — Blauwhoed kan haar AVG-plichten dan niet nakomen, wat op zichzelf al een overtreding is. Risico drie: het account is persoonlijk in plaats van zakelijk beheerd. IT kan niet zien wat er wordt ingevoerd, kan geen beveiligingseisen stellen en kan het account niet sluiten. Risico vier volgt daaruit: bij vertrek van een medewerker verliest Blauwhoed elk zicht op wat er ooit is gedeeld. De chatgeschiedenis met mogelijk vertrouwelijke informatie verhuist mee naar een privéaccount van iemand die er niet meer werkt. Tel de vier risico's op en het verbod is geen regel meer maar logica: onbeheersbaar, oncontroleerbaar en onomkeerbaar. En de afweging is extra scherp omdat het alternatief er gewoon is — de goedgekeurde tools kunnen dezelfde taken aan, zonder deze risico's.",
                example:
                  "Een werkvoorbereider gebruikte vóór zijn overstap een gratis chatbot voor werkvragen over Project Zonneweide (fictief). Na zijn vertrek staat die geschiedenis — planningen, interne afwegingen — nog altijd in zijn privéaccount. Niemand bij Blauwhoed kan erbij, en niemand kan het wissen.",
              },
              {
                heading: "De collega-toets: leg het uit zonder te wijzen",
                body:
                  "Kennis van deze risico's wordt pas waardevol als je er iets mee doet op het moment dat het ertoe doet: wanneer een collega enthousiast een gratis tool gebruikt voor werk. De verleiding is groot om weg te kijken — het is tenslotte niet jouw prompt. Maar veilig AI-gebruik is teamwerk, en de meeste collega's overtreden de regel niet uit onwil maar uit onwetendheid. De effectieve aanpak is daarom uitleggen, niet aanklagen. Benoem het risico concreet ('die invoer kan trainingsdata worden en er is geen contract dat dat verbiedt'), wijs op het alternatief ('dit kan gewoon in Copilot onder je werkaccount') en verwijs bij twijfel naar de intranetlijst of de teamlead. Gaat het al om ingevoerde vertrouwelijke gegevens, dan is het geen collegiale kwestie meer maar een incident: dan geldt de meldprocedure uit Veiligheid I, en help je je collega het snelst door samen te melden. De cultuur die we bouwen is er een waarin de vraag 'mag dit eigenlijk in deze tool?' normaal is — hardop, vooraf en zonder gezichtsverlies.",
                example:
                  "Een collega vat tijdens de lunch verslagen van Project De Houtwal (fictief) samen in een gratis app. De werkende reactie: 'Wist je dat die invoer trainingsdata kan worden? Onder je Blauwhoed-account in Copilot kan precies hetzelfde — zal ik het even laten zien?' Kort, concreet, zonder verwijt.",
              },
            ],
            takeaway:
              "Gratis consumententools falen op vier punten: mogelijke modeltraining op je invoer, geen verwerkersovereenkomst, onbeheerde accounts en geen zicht na vertrek. Leg het collega's uit en bied het goedgekeurde alternatief aan.",
          },
        },
        {
          titel: "Casus: de handige tool van de aannemer",
          type: "casus",
          geschatteMinuten: 12,
          content: {
            intro:
              "Een externe partner introduceert een slimme AI-tool en wil dat Blauwhoed meedoet. Klinkt als vooruitgang — maar wie toetst wat? Deze fictieve casus oefent precies het beoordelingsmoment dat je in de praktijk vaker tegenkomt dan je denkt.",
            sections: [
              {
                heading: "De situatie: een enthousiast voorstel in het bouwoverleg",
                body:
                  "In het bouwoverleg van Project Rietveldkwartier (fictief) presenteert de uitvoerder van de aannemer een AI-tool die het bedrijf sinds kort gebruikt: je uploadt vergaderverslagen en bouwplanningen, en de tool genereert automatisch actielijsten en signaleert knelpunten in de planning. De aannemer is enthousiast en stelt voor om ook de verslagen van het gezamenlijke bouwoverleg erin te zetten — inclusief die van Blauwhoed. 'Scheelt ons allemaal uren, en jullie krijgen de actielijsten gratis mee.' De projectleider van Blauwhoed, Daan, voelt de aantrekkingskracht: het probleem is echt en de oplossing oogt professioneel. Maar hij herkent ook het beslismoment. De vraag is niet of de tool handig is — dat is hij waarschijnlijk — maar of Blauwhoed-informatie erin mag. En die vraag kan Daan niet zelf beantwoorden, want hij kent de leverancier niet, weet niet waar de data staan en heeft geen idee wat het contract van de aannemer regelt. Wat hij wél weet: een tool van een externe partner staat niet op de goedgekeurde lijst van Blauwhoed, hoe goed de relatie ook is.",
              },
              {
                heading: "De analyse: waarom 'de aannemer gebruikt het al' geen goedkeuring is",
                body:
                  "Daans redenering in het overleg is de kern van deze les. Dat de aannemer de tool gebruikt, zegt iets over de afweging van de aannemer — niet over die van Blauwhoed. De vier toetsstenen gelden onverkort, en Daan kan er geen enkele afvinken: is er een verwerkersovereenkomst die ook de gegevens van Blauwhoed dekt? Onbekend. Staan de data in de EER? Onbekend. Is modeltraining op de invoer uitgesloten? Onbekend. Wie beheert de toegang, en wat gebeurt er met de data als de samenwerking eindigt? Onbekend. Daarbij komt de inhoud: verslagen van het bouwoverleg bevatten geregeld gevoelige elementen — discussies over meerwerk, planningsrisico's, soms namen van omwonenden met klachten. Die informatie via het account van een derde partij in een onbekende tool zetten, betekent elke controle uit handen geven. Daan zegt daarom geen nee tegen de tool, maar nee tegen de route: 'Niet via jullie account met onze stukken. Als de tool goed is, laten we hem toetsen via onze aanvraagprocedure.' Dat is het juiste antwoord: niet afwijzen uit angst, wel toetsen voor gebruik.",
                example:
                  "Daans formulering in het overleg, herbruikbaar in elke vergelijkbare situatie: 'Mooi dat het jullie tijd scheelt. Onze stukken kunnen er pas in nadat onze IT de tool heeft getoetst — ik dien de aanvraag deze week in, en tot die tijd houden we de verslagen erbuiten.'",
              },
              {
                heading: "De uitkomst: toetsing eerst, samenwerking daarna",
                body:
                  "Daan dient bij IT een aanvraag in met de drie vaste elementen: het doel (actielijsten en planningssignalering uit bouwverslagen), de soort gegevens (vergaderverslagen die na anonimisering geen persoonsgegevens bevatten, wel commercieel gevoelige planningsinformatie) en de gewenste gebruikersgroep (het projectteam van Rietveldkwartier). IT en de privacycontactpersoon toetsen de leverancier. De uitkomst is gemengd: de tool blijkt data buiten de EER op te slaan en de standaardvoorwaarden sluiten modeltraining niet uit. De leverancier biedt wel een zakelijke variant die beide punten oplost. Drie weken later staat die variant, onder een eigen Blauwhoed-contract, op de goedgekeurde lijst voor dit project. De verslagen gaan er voortaan geanonimiseerd in, via Blauwhoed-accounts. Let op wat deze afloop laat zien. De procedure is geen vertragingsmachine maar een filter: het handige idee bleef, de onaanvaardbare route ging eruit. En de relatie met de aannemer leed er niet onder — integendeel, die nam de zakelijke variant zelf ook in gebruik. Zorgvuldigheid en tempo sluiten elkaar niet uit; ongetoetst gemak en veiligheid wél.",
                example:
                  "Wat er zonder toetsing was gebeurd: maanden aan bouwverslagen van Project Rietveldkwartier (fictief) — inclusief meerwerkdiscussies — op servers buiten de EER, zonder contract, trainbaar door de leverancier, via accounts waar Blauwhoed geen zicht op heeft. Onzichtbaar risico, tot het misgaat.",
              },
            ],
            takeaway:
              "Dat een partner een tool al gebruikt, is geen goedkeuring voor Blauwhoed-informatie. Zeg nee tegen de route, niet per se tegen de tool — en laat toetsen via de aanvraagprocedure.",
          },
        },
        {
          titel: "Zelf een tool aanvragen: zo werkt het",
          type: "interactief",
          geschatteMinuten: 11,
          content: {
            intro:
              "Zie je een AI-tool die je werk echt beter maakt? Mooi — de aanvraagprocedure is er om ja mogelijk te maken, niet om nee te verkopen. Deze les loopt de procedure door en je bereidt als oefening zelf een aanvraag voor.",
            sections: [
              {
                heading: "De aanvraag: drie vragen die jij beantwoordt",
                body:
                  "Een aanvraag voor een nieuwe AI-tool dien je in bij de AI-coördinator, die de procedure bewaakt en de aanvraag samen met IT en de privacycontactpersoon toetst, en bestaat in de kern uit drie antwoorden. Eén: het doel — welk werk ga je met de tool doen en waarom volstaan de bestaande goedgekeurde tools daarvoor niet? Wees concreet: 'sneller werken' is geen doel, 'automatisch actielijsten uit bouwverslagen genereren, wat Copilot in ons proces niet gestructureerd doet' wel. Twee: de soort gegevens die de tool gaat verwerken. Dit is de belangrijkste vraag, want hij bepaalt de zwaarte van de toetsing. Alleen openbare of geanonimiseerde informatie? Of ook commercieel gevoelige of — spannender — persoonsgegevens? Wees hier eerlijk en volledig; een aanvraag die gegevenssoorten verzwijgt, leidt tot een goedkeuring die niets waard is. Drie: de gewenste gebruikersgroep — wie gaat de tool gebruiken, zodat toegang beheerd en beperkt kan worden. Een goede aanvraag past op één A4 en kost een half uur. Dat halve uur is de investering die het verschil maakt tussen gecontroleerd vooruitgaan en ongecontroleerd risico nemen.",
                example:
                  "Compacte voorbeeldaanvraag: 'Doel: geluidsmetingen uit rapporten samenvatten voor omgevingscommunicatie bij Project Zonneweide (fictief). Gegevens: geanonimiseerde meetrapporten van onze adviseur, geen persoonsgegevens. Gebruikers: de twee omgevingsmanagers van het project.'",
              },
              {
                heading: "De toetsing: wat IT en privacy controleren",
                body:
                  "Na indiening toetsen IT en de privacycontactpersoon de tool op de vier bekende toetsstenen; wordt de tool goedgekeurd, dan neemt de AI-coördinator hem met tooleigenaar en toegestane dataniveaus op in het toolregister op het intranet. De verwerkersovereenkomst: is er een contract dat de omgang met gegevens regelt, en dekt het de gegevenssoorten uit jouw aanvraag? Dataopslag binnen de EER: staan de gegevens op servers waar Europese regels afdwingbaar zijn? Uitsluiting van modeltraining: is contractueel vastgelegd dat invoer niet voor training wordt gebruikt — niet als instelling, maar als contractbepaling? En beheersbaarheid van toegang: kunnen accounts zakelijk worden beheerd, toegewezen en ingetrokken? Verwerkt de tool mogelijk persoonsgegevens, dan hoort er ook een DPIA-light bij: de verkorte risicoanalyse met vijf vragen over gegevens, doel, risico's, maatregelen en eigenaarschap. De uitkomst van de toetsing kent drie smaken: goedgekeurd (soms voor een specifieke gebruikersgroep of gegevenssoort), goedgekeurd onder voorwaarden (bijvoorbeeld alleen de zakelijke variant, of alleen geanonimiseerde invoer), of afgewezen met uitleg. Reken op enkele weken doorlooptijd — en gebruik de tool niet alvast tijdens het wachten, hoe verleidelijk ook. Een afwijzing is bovendien zelden het einde: vaak lost een zakelijke variant of een andere leverancier hetzelfde probleem wél toetsbaar op.",
              },
              {
                heading: "Oefening: bereid je eigen aanvraag voor",
                body:
                  "Nu zelf. Kies een AI-tool of AI-functie waarvan je oprecht denkt dat die jouw werk zou verbeteren — een transcriptietool, een beeldgenerator voor sfeerimpressies, een plannings-assistent. Geen kandidaat? Gebruik dan deze fictieve: een tool die inspraakreacties op een ontwerpbestemmingsplan automatisch clustert op thema. Werk in de oefenomgeving de drie aanvraagvragen uit: doel (concreet, met waarom bestaande tools niet volstaan), gegevenssoorten (denk goed na — inspraakreacties bevatten namen en adressen van indieners; wat betekent dat voor je aanvraag?) en gebruikersgroep. Loop daarna zelf alvast de vier toetsstenen langs voor zover je informatie op de website van de leverancier vindt: het scherpt je aanvraag en versnelt de toetsing. Vergelijk tot slot met de modeluitwerking. De grootste leerwinst zit meestal bij vraag twee: wie de gegevenssoorten scherp doordenkt, ontdekt vaak dat anonimisering vooraf de aanvraag veel lichter maakt — en dat is precies het soort denkwerk dat van AI-gebruikers veilige AI-gebruikers maakt.",
                example:
                  "Valkuil uit de oefening: bij de inspraak-tool vergeten dat reacties persoonsgegevens bevatten. Sterke uitwerking: 'Reacties worden vóór invoer ontdaan van naam en adres; de tool verwerkt alleen de inhoudelijke tekst per reactie.' Eén zin die de hele toetsing lichter maakt.",
              },
            ],
            takeaway:
              "Een aanvraag bestaat uit doel, gegevenssoorten en gebruikersgroep, ingediend bij de AI-coördinator; IT en privacy toetsen op contract, EER-opslag, trainingsuitsluiting en toegangsbeheer. De procedure maakt ja mogelijk — maar pas gebruiken ná goedkeuring.",
          },
        },
      ],
    },
  ],
  questions: [
    // — Module 1: Generatieve AI begrijpen —
    {
      type: "mc",
      vraag: "Wat doet een taalmodel als je het een vraag stelt?",
      opties: [
        "Het zoekt het antwoord op in een interne database met feiten",
        "Het voorspelt woord voor woord de tekst die statistisch het beste past bij je vraag",
        "Het raadpleegt live internetbronnen en vat die samen",
        "Het kiest het antwoord dat de meeste gebruikers eerder goedkeurden",
      ],
      juist: 1,
      toelichting:
        "Een taalmodel voorspelt het meest waarschijnlijke vervolg op je invoer; het heeft geen feitendatabase en zoekt niets op.",
      tags: ["taalmodel", "basis"],
      moeilijkheid: 1,
      isSecurity: false,
    },
    {
      type: "mc",
      vraag: "Waarom klinkt een verzonnen antwoord van een taalmodel vaak net zo overtuigend als een correct antwoord?",
      opties: [
        "Omdat het model verzonnen antwoorden extra aandikt om te overtuigen",
        "Omdat het model alleen hallucineert bij onderwerpen die het goed kent",
        "Omdat de vloeiende, zekere stijl losstaat van de vraag of de inhoud klopt",
        "Omdat gebruikers foute antwoorden zelden goed lezen",
      ],
      juist: 2,
      toelichting:
        "Het model heeft geleerd hoe zekere, vloeiende tekst klinkt; die stijl wordt op ware én verzonnen inhoud toegepast.",
      tags: ["hallucinatie", "taalmodel"],
      moeilijkheid: 2,
      isSecurity: false,
    },
    {
      type: "mc",
      vraag: "Welke taak past het BESTE bij een taalmodel op niveau 1?",
      opties: [
        "Een door jou aangeleverd, geanonimiseerd verslag samenvatten in vijf zinnen",
        "De actuele grondprijs in een gemeente opvragen",
        "De naam van de huidige wethouder ruimtelijke ordening opzoeken",
        "Het geldende bestemmingsplan van een locatie citeren",
      ],
      juist: 0,
      toelichting:
        "Bij samenvatten van aangeleverde tekst doet het model waar het goed in is: taal bewerken. De andere taken vragen om actuele feitenkennis die het model zelf niet betrouwbaar heeft, tenzij de tool daarvoor een bron raadpleegt.",
      tags: ["toepassing", "taalmodel"],
      moeilijkheid: 1,
      isSecurity: false,
    },
    {
      type: "mc",
      vraag: "Een gesprek met een AI-tool wordt erg lang en het model 'vergeet' je instructie over de maximale lengte. Wat is de beste reactie?",
      opties: [
        "De tool opnieuw installeren, want dit is een technische storing",
        "Boos herhalen dat het model beter moet opletten",
        "Overstappen op een andere AI-tool met een beter geheugen",
        "Een nieuw gesprek starten met alle instructies compact in één bericht",
      ],
      juist: 3,
      toelichting:
        "In een lang gesprek raakt vroege informatie buiten het contextvenster; een nieuw gesprek met alle eisen bij elkaar lost dat op.",
      tags: ["context", "tokens", "prompting"],
      moeilijkheid: 2,
      isSecurity: false,
    },
    {
      type: "waar_onwaar",
      vraag: "Een taalmodel weet zelf wanneer het iets niet weet en zegt dat er dan eerlijk bij.",
      juist: false,
      toelichting:
        "Het model heeft geen ingebouwde grens tussen weten en niet-weten; het produceert ook bij onbekende onderwerpen vloeiende tekst.",
      tags: ["hallucinatie", "taalmodel"],
      moeilijkheid: 1,
      isSecurity: false,
    },
    {
      type: "meerdere_juist",
      vraag: "Welke taken zijn geschikt om aan een taalmodel over te laten? (meerdere antwoorden juist)",
      opties: [
        "Een juridische alinea herschrijven naar begrijpelijke taal voor kopers",
        "Zelfstandig de definitieve rangorde van biedingen in een tender bepalen",
        "Vijf varianten van een openingszin voor een uitnodiging genereren",
        "De actuele hypotheekrente opzoeken voor een verkoopgesprek",
      ],
      juist: [0, 2],
      toelichting:
        "Herschrijven en variëren zijn taaltaken op aangeleverde inhoud; oordelen over biedingen en actuele feiten horen niet bij een taalmodel.",
      tags: ["toepassing", "taalmodel"],
      moeilijkheid: 2,
      isSecurity: false,
    },
    // — Module 2: Hallucinaties en verificatie —
    {
      type: "mc",
      vraag: "AI-output over jouw project bevat het cijfer '34,5% sociale huur volgens de gemeentelijke woonvisie', maar jij hebt dat cijfer niet aangeleverd. Wat is de juiste actie?",
      opties: [
        "Het cijfer afronden naar 35% zodat het minder schijnprecies oogt",
        "Het cijfer overnemen, want het model verwijst naar een bron",
        "Het model vragen het cijfer te bevestigen en het dan overnemen",
        "De woonvisie zelf raadplegen en het cijfer alleen gebruiken als het daar staat",
      ],
      juist: 3,
      toelichting:
        "Schijnprecieze cijfers met bronvermelding zijn een bekend hallucinatiesignaal; alleen controle in de bron zelf geeft zekerheid.",
      tags: ["hallucinatie", "verificatie"],
      moeilijkheid: 2,
      isSecurity: false,
    },
    {
      type: "mc",
      vraag: "Waarom is een tweede AI-antwoord ('klopt dit?') geen goede verificatie van het eerste AI-antwoord?",
      opties: [
        "Omdat het model dan boos wordt en slechtere antwoorden geeft",
        "Omdat het model geen toegang tot bronnen heeft en dus opnieuw alleen voorspelt",
        "Omdat verificatie wettelijk door een jurist moet gebeuren",
        "Omdat een tweede vraag te veel tokens kost",
      ],
      juist: 1,
      toelichting:
        "Het model bevestigt op basis van dezelfde voorspellingsmechanismen; echte verificatie vereist de oorspronkelijke bron of een collega met domeinkennis.",
      tags: ["verificatie", "hallucinatie"],
      moeilijkheid: 2,
      isSecurity: false,
    },
    {
      type: "mc",
      vraag: "Welke hallucinatie is in de praktijk het gevaarlijkst?",
      opties: [
        "Een compleet onzinnig antwoord dat iedereen direct herkent",
        "Een antwoord in een vreemde taal",
        "Eén plausibel verzonnen detail in een verder correcte, sterke tekst",
        "Een antwoord dat te kort is voor de vraag",
      ],
      juist: 2,
      toelichting:
        "Omdat de rest klopt, krijgt het verzonnen detail onverdiend vertrouwen mee en glipt het door de controle.",
      tags: ["hallucinatie"],
      moeilijkheid: 2,
      isSecurity: false,
    },
    {
      type: "mc",
      vraag: "Wat is de juiste volgorde van de vier verificatiestappen van Blauwhoed?",
      opties: [
        "Markeer feiten → verifieer in de bron → corrigeer of verwijder → leg vast wie controleerde",
        "Verifieer in de bron → markeer feiten → leg vast wie controleerde → corrigeer of verwijder",
        "Leg vast wie controleerde → markeer feiten → verifieer in de bron → corrigeer of verwijder",
        "Corrigeer of verwijder → verifieer in de bron → markeer feiten → leg vast wie controleerde",
      ],
      juist: 0,
      toelichting:
        "Eerst zichtbaar maken wat controleerbaar is, dan verifiëren, dan opschonen en tot slot de controle vastleggen.",
      tags: ["verificatie"],
      moeilijkheid: 1,
      isSecurity: false,
    },
    {
      type: "mc",
      vraag: "Je vraagt AI een aangeleverd verslag samen te vatten. In de samenvatting staat 'de gemeente heeft ingestemd', maar in het verslag staat alleen een voornemen. Welk hallucinatiesignaal is dit?",
      opties: [
        "Schijnprecisie",
        "Een onvindbare bronvermelding",
        "Een te mooi rond verhaal",
        "Een toegevoegde conclusie die niet in de bron staat",
      ],
      juist: 3,
      toelichting:
        "Het model vulde het gat op met wat er meestal in zulke teksten staat en maakte van een voornemen een besluit.",
      tags: ["hallucinatie", "verificatie"],
      moeilijkheid: 3,
      isSecurity: false,
    },
    {
      type: "mc",
      vraag: "Hoe ga je op niveau 1 het beste om met een meerstapsberekening, zoals een indexering van een aanneemsom, als de uitkomst een besluit gaat dragen?",
      opties: [
        "De berekening door het model laten doen en de uitkomst zonder meer overnemen",
        "Het model ook de rekenopzet laten tonen en de berekening controleren of zelf narekenen in een spreadsheet",
        "De berekening twee keer aan het model vragen en de uitkomsten middelen",
        "Berekeningen volledig vermijden zodra AI in het spel is",
      ],
      juist: 1,
      toelichting:
        "Moderne taalmodellen rekenen betrouwbaar, maar bij een uitkomst die een besluit draagt, controleer je die naar gevolg: laat de rekenopzet zien en reken zelf na in een spreadsheet met zichtbare formules.",
      tags: ["verificatie", "rekenwerk"],
      moeilijkheid: 2,
      isSecurity: false,
    },
    {
      type: "waar_onwaar",
      vraag: "Bij een AI-tabel die de basis vormt voor een besluit, kun je op de opmaak afgaan om te weten of de totalen kloppen.",
      juist: false,
      toelichting:
        "Opmaak zegt niets over rekenkwaliteit. Moderne modellen rekenen doorgaans betrouwbaar, maar bij cijfers waarop een besluit rust, controleer je totalen altijd zelf — de kans op een fout is klein, het gevolg van een gemiste fout niet.",
      tags: ["rekenwerk", "verificatie"],
      moeilijkheid: 1,
      isSecurity: false,
    },
    {
      type: "meerdere_juist",
      vraag: "Welke signalen wijzen op een mogelijke hallucinatie? (meerdere antwoorden juist)",
      opties: [
        "Een exact percentage met een cijfer achter de komma dat je niet zelf aanleverde",
        "Een bronvermelding die bij controle niet vindbaar blijkt",
        "Een antwoord dat onzekerheden expliciet benoemt",
        "Een conclusie die nergens in jouw aangeleverde tekst voorkomt",
      ],
      juist: [0, 1, 3],
      toelichting:
        "Schijnprecisie, onvindbare bronnen en toegevoegde conclusies zijn klassieke signalen; het benoemen van onzekerheid is juist een goed teken.",
      tags: ["hallucinatie", "verificatie"],
      moeilijkheid: 3,
      isSecurity: false,
    },
    {
      type: "meerdere_juist",
      vraag: "Wat hoort bij een goede verificatie van AI-output die extern gaat? (meerdere antwoorden juist)",
      opties: [
        "Elke controleerbare bewering markeren en in de bron nakijken",
        "Niet-verifieerbare beweringen laten staan als ze plausibel klinken",
        "Vastleggen wie de feiten heeft gecontroleerd",
        "Vooral controleren wat het model toevoegde aan jouw eigen invoer",
      ],
      juist: [0, 2, 3],
      toelichting:
        "Markeren, bronverificatie, vastlegging en focus op toegevoegde inhoud vormen de kern; plausibele maar onverifieerbare beweringen gaan er juist uit.",
      tags: ["verificatie"],
      moeilijkheid: 5,
      isSecurity: false,
    },
    {
      type: "scenario_open",
      vraag:
        "Een collega laat je AI-output zien over de verkoopkansen van jullie project. Er staat: 'Uit CBS-onderzoek blijkt dat 78,3% van de starters in deze regio een appartement zoekt; de verkoop zal daarom vlot verlopen.' Welke twee problemen signaleer je en wat adviseer je je collega?",
      juist:
        "Het percentage is schijnprecies en de bron is niet gecontroleerd: het cijfer moet in de CBS-publicatie zelf worden opgezocht en anders verwijderd. Daarnaast is 'de verkoop zal vlot verlopen' een toegevoegde conclusie die niet uit één cijfer volgt. Advies: verifieer het cijfer in de bron, schrap of nuanceer de conclusie, en gebruik AI hier alleen voor de formulering, niet voor de marktfeiten.",
      toelichting:
        "Een sterk antwoord herkent schijnprecisie én de toegevoegde conclusie, en adviseert verificatie in de bron in plaats van vertrouwen op het model.",
      tags: ["hallucinatie", "verificatie"],
      moeilijkheid: 3,
      isSecurity: false,
    },
    // — Module 3: Basisprompten —
    {
      type: "mc",
      vraag: "Uit welke vier vaste bouwstenen bestaat een goede prompt volgens de Blauwhoed-promptgids?",
      opties: [
        "Vraag, antwoord, controle, herhaling",
        "Doel, middelen, planning, budget",
        "Rol, context, taak, format",
        "Inleiding, kern, slot, ondertekening",
      ],
      juist: 2,
      toelichting:
        "Rol, context, taak en format geven het model precies de sturing die gokwerk voorkomt.",
      tags: ["prompting"],
      moeilijkheid: 1,
      isSecurity: false,
    },
    {
      type: "mc",
      vraag: "Wat is het nut van de instructie 'noteer onderaan welke aannames je hebt gedaan en welke informatie ontbreekt'?",
      opties: [
        "Het maakt zichtbaar waar het model gaten in je context heeft opgevuld, zodat je gericht kunt controleren",
        "Het maakt het antwoord korter en dus goedkoper",
        "Het voorkomt dat het model aannames doet",
        "Het is verplicht volgens de EU AI Act",
      ],
      juist: 0,
      toelichting:
        "Het model doet hoe dan ook aannames; door ze te laten markeren worden ze zichtbaar en controleerbaar.",
      tags: ["prompting", "verificatie"],
      moeilijkheid: 2,
      isSecurity: false,
    },
    {
      type: "mc",
      vraag: "De eerste AI-versie van je brief is te afstandelijk. Wat is de beste vervolgstap?",
      opties: [
        "De hele prompt weggooien en een andere tool proberen",
        "Vragen om het 'beter' te maken",
        "De brief accepteren, want AI kan nu eenmaal niet warm schrijven",
        "Gericht bijsturen: 'maak de toon warmer en gebruik kortere zinnen'",
      ],
      juist: 3,
      toelichting:
        "Itereren met concrete aanwijzingen op één of twee punten tegelijk is de bedoelde werkwijze en levert snel verbetering op.",
      tags: ["prompting", "itereren"],
      moeilijkheid: 1,
      isSecurity: false,
    },
    {
      type: "mc",
      vraag: "Wat is de krachtigste manier om de gewenste schrijfstijl aan een model over te brengen?",
      opties: [
        "Tien losse stijlaanwijzingen opsommen",
        "Een goedgekeurd, geanonimiseerd voorbeeld meegeven met 'schrijf in dezelfde stijl'",
        "In hoofdletters benadrukken dat de stijl belangrijk is",
        "Het model vragen eerst de huisstijlgids samen te vatten",
      ],
      juist: 1,
      toelichting:
        "Few-shot prompten — stijl voordoen met een voorbeeld — brengt toon en opbouw beter over dan beschrijvingen.",
      tags: ["prompting", "few-shot"],
      moeilijkheid: 2,
      isSecurity: false,
    },
    {
      type: "mc",
      vraag: "Welke prompt volgt het bouwstenenrecept het BEST voor een uitnodiging voor een bewonersavond?",
      opties: [
        "'Schrijf een uitnodiging voor een bewonersavond.'",
        "'Je bent tekstschrijver. Schrijf iets leuks over onze bewonersavond, maak het niet te lang.'",
        "'Schrijf een formele uitnodiging. Datum: 12 mei. Verzin er een pakkend programma bij.'",
        "'Je bent een ervaren omgevingsmanager. Context: fictief binnenstedelijk project, inloopavond over het ontwerp op 12 mei. Taak: nodig omwonenden uit en benoem wat zij kunnen inbrengen. Format: maximaal 150 woorden, kern eerst.'",
      ],
      juist: 3,
      toelichting:
        "Alleen deze prompt bevat rol, context, taak én format; de andere laten het model gokken of vragen zelfs om verzonnen inhoud.",
      tags: ["prompting"],
      moeilijkheid: 2,
      isSecurity: false,
    },
    {
      type: "waar_onwaar",
      vraag: "Hoe meer context je in een prompt stopt, hoe beter het resultaat — een heel dossier plakken is dus altijd verstandig.",
      juist: false,
      toelichting:
        "Irrelevante context verdunt de aandacht van het model; geef alleen mee wat nodig is voor de taak.",
      tags: ["prompting", "context"],
      moeilijkheid: 2,
      isSecurity: false,
    },
    {
      type: "waar_onwaar",
      vraag: "Een stijlvoorbeeld dat je in een prompt plakt, moet even zorgvuldig geanonimiseerd worden als elke andere invoer.",
      juist: true,
      toelichting:
        "Ook een oude brief bevat namen en adressen; de anonimiseringsregels gelden voor alle invoer, dus ook voorbeelden.",
      tags: ["prompting", "few-shot", "AVG"],
      moeilijkheid: 1,
      isSecurity: false,
    },
    {
      type: "meerdere_juist",
      vraag: "Wat hoort in de context-bouwsteen van een prompt voor een bewonersbrief? (meerdere antwoorden juist)",
      opties: [
        "De fase van het project en de aanleiding van de brief",
        "Namen en adressen van de bewoners die de brief ontvangen",
        "De doelgroep van de tekst",
        "Je persoonlijke mening over de projectleider",
      ],
      juist: [0, 2],
      toelichting:
        "Relevante, geanonimiseerde achtergrond en de doelgroep helpen het model; persoonsgegevens en irrelevante meningen horen er nooit in.",
      tags: ["prompting", "AVG"],
      moeilijkheid: 2,
      isSecurity: false,
    },
    {
      type: "scenario_open",
      vraag:
        "Je moet omwonenden van een fictief project informeren dat de bouwstart twee maanden opschuift door een vertraagde vergunning. Schrijf de prompt die je aan de goedgekeurde AI-tool zou geven. Gebruik de vier bouwstenen.",
      juist:
        "Een sterk antwoord bevat een rol (bijvoorbeeld ervaren omgevingsmanager die eerlijk en warm communiceert), geanonimiseerde context (fictief project, bouwstart schuift twee maanden op door vertraagde vergunning, wat er intussen gebeurt), een concrete taak (meld de vertraging eerlijk, leg de reden uit, benoem het vervolg en waar mensen terechtkunnen) en een format (maximaal 250 woorden, kern eerst, korte zinnen). Extra sterk: de afsluitende instructie om aannames en ontbrekende informatie te markeren.",
      toelichting:
        "Het modelantwoord toetst of alle vier de bouwstenen aanwezig en concreet zijn, met geanonimiseerde context en bij voorkeur aannamemarkering.",
      tags: ["prompting"],
      moeilijkheid: 2,
      isSecurity: false,
    },
    {
      type: "scenario_open",
      vraag:
        "Een teamgenoot zegt: 'AI is onbetrouwbaar, ik heb er één keer een fout antwoord uit gekregen en gebruik het nooit meer.' Wat zou jij antwoorden op basis van deze module? Noem het mechanisme achter de fout en een veilige manier van gebruiken.",
      juist:
        "Een taalmodel voorspelt tekst en zoekt geen feiten op, dus fouten bij feitenvragen zijn een eigenschap en geen defect. De oplossing is niet stoppen maar de taakverdeling aanpassen: zelf de feiten aanleveren en het model de taal laten doen, zoals samenvatten of herschrijven. Met verificatie van alles wat het model zelf toevoegt, is AI wél betrouwbaar in te zetten voor taaltaken.",
      toelichting:
        "Een sterk antwoord legt het voorspelmechanisme uit en vertaalt dat naar de juiste taakverdeling in plaats van AI af te wijzen of blind te vertrouwen.",
      tags: ["taalmodel", "verificatie", "toepassing"],
      moeilijkheid: 3,
      isSecurity: false,
    },
    // — Veiligheid: dataclassificatie —
    {
      type: "mc",
      vraag: "Welke invoer is in ELKE AI-tool verboden, ook in de goedgekeurde?",
      opties: [
        "Een geanonimiseerd vergaderverslag",
        "Namen en adressen van kopers",
        "De openbare projectwebsite-tekst",
        "Een fictieve oefencasus uit de Academy",
      ],
      juist: 1,
      toelichting:
        "Persoonsgegevens van kopers staan op de verboden lijst en mogen in geen enkele AI-tool worden ingevoerd; anonimiseer eerst.",
      tags: ["security", "AVG", "verboden-invoer"],
      moeilijkheid: 1,
      isSecurity: true,
    },
    {
      type: "mc",
      vraag: "Een HR-collega wil AI gebruiken om binnengekomen cv's samen te vatten. Wat is het juiste antwoord?",
      opties: [
        "Prima, zolang de goedgekeurde tool wordt gebruikt",
        "Niet doen: kandidaatgegevens zijn verboden invoer en AI bij werving is bovendien een hoogrisicotoepassing",
        "Prima, mits de kandidaten binnen 72 uur worden geïnformeerd",
        "Alleen toegestaan voor cv's van afgewezen kandidaten",
      ],
      juist: 1,
      toelichting:
        "Cv's zitten vol persoonsgegevens van sollicitanten en AI-beoordeling van kandidaten valt onder hoog risico; dit hoort op niveau 1 nergens thuis.",
      tags: ["security", "verboden-invoer", "AVG", "HR"],
      moeilijkheid: 2,
      isSecurity: true,
    },
    {
      type: "mc",
      vraag: "Je twijfelt of een intern stuk vertrouwelijk is en in een AI-tool mag. Wat schrijft de omkeerregel voor?",
      opties: [
        "Invoeren mag, tenzij er 'vertrouwelijk' op het document staat",
        "Eerst een klein stukje invoeren om te kijken of het kwaad kan",
        "Invoeren mag als een collega het ook zou doen",
        "Behandel het als vertrouwelijk tot het tegendeel vaststaat: niet invoeren en eerst navragen",
      ],
      juist: 3,
      toelichting:
        "Twijfel is een stopsignaal: vertrouwelijk tot het tegendeel vaststaat, en navragen bij je teamlead of de privacycontactpersoon.",
      tags: ["security", "verboden-invoer"],
      moeilijkheid: 1,
      isSecurity: true,
    },
    {
      type: "mc",
      vraag: "Welke prompt over een klagende omwonende is veilig?",
      opties: [
        "'Schrijf een reactie aan een omwonende die klaagt over bouwlawaai; naam en adres voeg ik later zelf toe.'",
        "'Schrijf een reactie aan dhr. J. uit de Lindenlaan die klaagt over bouwlawaai.'",
        "'Schrijf een reactie aan de bewoner van het hoekappartement die vorige week bezwaar maakte.'",
        "'Schrijf een reactie aan onze bekendste klager over bouwlawaai.'",
      ],
      juist: 0,
      toelichting:
        "Alleen de eerste variant is onherleidbaar; initialen, adresaanduidingen en unieke omschrijvingen maken een persoon nog steeds herkenbaar.",
      tags: ["security", "AVG", "anonimiseren"],
      moeilijkheid: 2,
      isSecurity: true,
    },
    {
      type: "waar_onwaar",
      vraag: "Individuele VON-prijzen en kortingsafspraken mogen in Microsoft 365 Copilot onder de zakelijke Blauwhoed-tenant, omdat die informatie als 'vertrouwelijk' is geclassificeerd en Copilot binnen de eigen tenant blijft.",
      juist: true,
      toelichting:
        "Vertrouwelijke bedrijfsinformatie mag in Copilot (zakelijke tenant) en de Academy. Bij een vakspecifieke app mag het alleen als de verwerkersovereenkomst van díe tool het dekt, en in niet-goedgekeurde tools mag het nooit.",
      tags: ["security", "dataclassificatie", "tools"],
      moeilijkheid: 2,
      isSecurity: true,
    },
    {
      type: "meerdere_juist",
      vraag: "Welke informatie mag NOOIT in een AI-tool, ook niet in Copilot, tenzij er een DPIA voor is gedaan? (meerdere antwoorden juist)",
      opties: [
        "Namen en adressen van kopers",
        "Een geanonimiseerd klachtenoverzicht zonder herleidbare details",
        "Cv's en motivatiebrieven van sollicitanten",
        "De openbare beoordelingscriteria uit een gepubliceerde tenderleidraad",
      ],
      juist: [0, 2],
      toelichting:
        "Persoonsgegevens — waaronder kandidaatgegevens — vormen het strengste dataniveau en mogen alleen na een DPIA(-light); goed geanonimiseerde en openbare informatie mag altijd, en vertrouwelijke bedrijfsinformatie mag inmiddels in Copilot.",
      tags: ["security", "dataclassificatie"],
      moeilijkheid: 2,
      isSecurity: true,
    },
    // — Veiligheid: anonimiseren —
    {
      type: "mc",
      vraag: "Wat is het verschil tussen pseudonimiseren en anonimiseren?",
      opties: [
        "Pseudonimiseren is de Engelse term voor anonimiseren",
        "Bij pseudonimiseren blijft de persoon met redelijke inspanning herleidbaar; bij anonimiseren niet",
        "Anonimiseren vervangt namen door codes; pseudonimiseren verwijdert het hele document",
        "Pseudonimiseren is strenger en daarom altijd voldoende voor AI-gebruik",
      ],
      juist: 1,
      toelichting:
        "Gepseudonimiseerde gegevens ('koper 12') blijven herleidbaar en vallen onder de AVG; alleen echte anonimisering maakt herleiding onmogelijk.",
      tags: ["security", "AVG", "anonimiseren"],
      moeilijkheid: 2,
      isSecurity: true,
    },
    {
      type: "mc",
      vraag: "Een overzicht vermeldt 'koper 7, bouwnummer 14, koopsom € 512.000'. Waarom is dit GEEN veilige AI-invoer?",
      opties: [
        "Omdat koopsommen altijd geheim zijn, ook geaggregeerd",
        "Omdat het overzicht te veel tokens gebruikt",
        "Omdat bouwnummer en koopsom de koper herleidbaar maken voor iedereen met de verkooplijst",
        "Omdat 'koper 7' een verboden term is in prompts",
      ],
      juist: 2,
      toelichting:
        "De naam is vervangen maar de combinatie van details blijft herleidbaar: dit is pseudonimiseren, en dat valt volledig onder de AVG.",
      tags: ["security", "AVG", "anonimiseren"],
      moeilijkheid: 3,
      isSecurity: true,
    },
    {
      type: "waar_onwaar",
      vraag: "Een omschrijving zonder naam, zoals 'de enige vrouwelijke projectleider van de vestiging', kan een persoonsgegeven zijn.",
      juist: true,
      toelichting:
        "Ook combinaties van kenmerken die één persoon aanwijzen zijn persoonsgegevens; herleidbaarheid is het criterium, niet de aanwezigheid van een naam.",
      tags: ["security", "AVG", "anonimiseren"],
      moeilijkheid: 2,
      isSecurity: true,
    },
    {
      type: "meerdere_juist",
      vraag: "Welke technieken horen bij echt anonimiseren voor AI-gebruik? (meerdere antwoorden juist)",
      opties: [
        "Personen vervangen door rollen zoals 'een koper' of 'een omwonende'",
        "Namen vervangen door 'koper 1', 'koper 2' en de rest laten staan",
        "Unieke details vergroven, zoals een exacte koopsom vervangen door een prijsklasse",
        "Persoonlijke gegevens pas ná de AI-stap handmatig toevoegen in de definitieve versie",
      ],
      juist: [0, 2, 3],
      toelichting:
        "Rollen, vergroven en persoonsgegevens buiten de AI-stap houden maken invoer onherleidbaar; nummeren zonder meer is pseudonimiseren.",
      tags: ["security", "anonimiseren", "AVG"],
      moeilijkheid: 4,
      isSecurity: true,
    },
    // — Veiligheid: datalekprocedure —
    {
      type: "mc",
      vraag: "Je ontdekt dat je per ongeluk een lijst met persoonsgegevens in een AI-tool hebt geplakt. Wat doe je als EERSTE?",
      opties: [
        "Het chatgesprek en je account verwijderen zodat de gegevens weg zijn",
        "Stoppen met de sessie en niets zelf verwijderen",
        "Wachten tot maandag en het dan bespreken met je teamlead",
        "De leverancier van de tool mailen met een verwijderverzoek",
      ],
      juist: 1,
      toelichting:
        "Stop direct en bewaar de feiten; zelf verwijderen belemmert de beoordeling en eigen acties richting leveranciers doorkruisen de procedure.",
      tags: ["security", "datalek"],
      moeilijkheid: 1,
      isSecurity: true,
    },
    {
      type: "mc",
      vraag: "Wanneer begint de wettelijke 72-uurstermijn voor de beoordeling van een mogelijk datalek?",
      opties: [
        "Bij de bevestiging dat het echt een datalek is",
        "Bij de melding aan de Autoriteit Persoonsgegevens",
        "Bij de ontdekking van het (mogelijke) lek",
        "Aan het einde van de werkweek waarin het gebeurde",
      ],
      juist: 2,
      toelichting:
        "De termijn start bij ontdekking, niet bij bevestiging; daarom is direct melden bij IT en de privacycontactpersoon zo belangrijk.",
      tags: ["security", "datalek", "AVG"],
      moeilijkheid: 2,
      isSecurity: true,
    },
    {
      type: "mc",
      vraag: "Welke uitspraak over de meldcultuur van Blauwhoed is juist?",
      opties: [
        "Wie een datalek veroorzaakt, krijgt een formele waarschuwing",
        "Melden hoeft alleen tijdens kantooruren",
        "Alleen de teamlead mag incidenten melden bij IT",
        "Een melding leidt nooit tot een sanctie voor de melder; niet melden of verzwijgen is wél verwijtbaar",
      ],
      juist: 3,
      toelichting:
        "Blauwhoed hanteert een meldcultuur zonder schuldvraag: snel melden beperkt schade en wordt als professioneel gedrag behandeld.",
      tags: ["security", "datalek"],
      moeilijkheid: 1,
      isSecurity: true,
    },
    // — Veiligheid: goedgekeurde tools —
    {
      type: "mc",
      vraag: "Welke tools staan in de kern van de goedgekeurde lijst van Blauwhoed?",
      opties: [
        "Elke bekende chatbot, zolang je trainingsgebruik uitzet in de instellingen",
        "Microsoft 365 Copilot onder de zakelijke tenant, vakspecifieke apps met een tooleigenaar en de Academy-omgeving",
        "Alle Microsoft-producten, ook onder een privéaccount",
        "Alle tools die een externe samenwerkingspartner al gebruikt",
      ],
      juist: 1,
      toelichting:
        "De drie toolcategorieën zijn Copilot (voor iedereen), vakspecifieke apps per vakgebied met een tooleigenaar, en de Academy om te leren; het toolregister met de actuele lijst staat op het intranet.",
      tags: ["security", "tools"],
      moeilijkheid: 1,
      isSecurity: true,
    },
    {
      type: "mc",
      vraag: "Waarom is 'ik heb trainingsgebruik uitgezet in de instellingen' geen geldige reden om een gratis chatbot zakelijk te gebruiken?",
      opties: [
        "Omdat die instelling het antwoord langzamer maakt",
        "Omdat de instelling alleen werkt in de betaalde versie",
        "Omdat zo'n instelling een belofte zonder verwerkersovereenkomst is die Blauwhoed niet kan afdwingen of controleren",
        "Omdat trainingsgebruik juist verplicht is voor goede antwoorden",
      ],
      juist: 2,
      toelichting:
        "Zakelijk vertrouwen bouwt op contracten; bij de toetsing telt alleen de contractueel vastgelegde uitsluiting van modeltraining.",
      tags: ["security", "tools"],
      moeilijkheid: 4,
      isSecurity: true,
    },
    {
      type: "mc",
      vraag: "Een aannemer stelt voor de gezamenlijke bouwverslagen in zíjn AI-tool te zetten. Wat is de juiste reactie namens Blauwhoed?",
      opties: [
        "Akkoord, want de aannemer heeft de tool al getoetst voor zijn eigen organisatie",
        "Akkoord, mits de aannemer belooft de verslagen na een maand te wissen",
        "Weigeren en de samenwerking met de aannemer heroverwegen",
        "Blauwhoed-stukken erbuiten houden en de tool via de eigen aanvraagprocedure laten toetsen",
      ],
      juist: 3,
      toelichting:
        "De afweging van een partner geldt niet voor Blauwhoed-informatie; nee tegen de route, en de tool toetsbaar maken via de aanvraagprocedure.",
      tags: ["security", "tools"],
      moeilijkheid: 4,
      isSecurity: true,
    },
    {
      type: "mc",
      vraag: "Wat hoort in een aanvraag voor een nieuwe AI-tool bij IT?",
      opties: [
        "Het doel, de soort gegevens die verwerkt worden en de gewenste gebruikersgroep",
        "Alleen de naam van de tool en een link naar de website",
        "Een lijst collega's die de tool ook graag willen",
        "Een proefaccount waarin je de tool alvast met echte data hebt getest",
      ],
      juist: 0,
      toelichting:
        "Doel, gegevenssoorten en gebruikersgroep vormen de kern van de aanvraag; alvast testen met echte data mag juist niet.",
      tags: ["security", "tools"],
      moeilijkheid: 2,
      isSecurity: true,
    },
    {
      type: "waar_onwaar",
      vraag: "Zolang je aanvraag voor een nieuwe AI-tool in behandeling is, mag je de tool alvast gebruiken voor niet-gevoelig werk.",
      juist: false,
      toelichting:
        "Gebruik start pas ná goedkeuring; tijdens de toetsing is de tool niet goedgekeurd en dus niet toegestaan voor werkgerelateerde invoer.",
      tags: ["security", "tools"],
      moeilijkheid: 2,
      isSecurity: true,
    },
    // — Algemene toepassing niveau 1 —
    {
      type: "mc",
      vraag: "Wie is verantwoordelijk voor de inhoud als AI-output met een fout in een extern document belandt?",
      opties: [
        "De leverancier van het AI-model",
        "Niemand, want AI-fouten zijn overmacht",
        "De medewerker die de output gebruikte",
        "De IT-afdeling die de tool goedkeurde",
      ],
      juist: 2,
      toelichting:
        "De gebruiker blijft volledig verantwoordelijk voor de inhoud, ook wanneer de fout aantoonbaar door het model is gemaakt.",
      tags: ["beleid", "verantwoordelijkheid"],
      moeilijkheid: 1,
      isSecurity: false,
    },
    {
      type: "mc",
      vraag: "Wat betekent 'AI ondersteunt, maar vervangt geen menselijke besluitvorming' in de praktijk van gebiedsontwikkeling?",
      opties: [
        "AI mag alleen buiten kantooruren worden gebruikt",
        "AI mag argumenten structureren, maar de keuze tussen varianten maakt het team zelf",
        "AI mag alleen worden gebruikt door leidinggevenden",
        "AI-output mag nooit in documenten worden verwerkt",
      ],
      juist: 1,
      toelichting:
        "AI is een hulpmiddel voor voorbereiding en structuur; besluiten — over varianten, biedingen, mensen — blijven bij mensen.",
      tags: ["beleid", "toepassing"],
      moeilijkheid: 1,
      isSecurity: false,
    },
    {
      type: "mc",
      vraag: "Waarom controleer je een AI-samenvatting van een participatieverslag actief op minderheidsstandpunten?",
      opties: [
        "Omdat minderheidsstandpunten juridisch zwaarder wegen",
        "Omdat het model kritische geluiden altijd verwijdert",
        "Omdat samenvattingen wettelijk alle standpunten moeten bevatten",
        "Omdat standpunten die minder vaak genoemd zijn, in een samenvatting kunnen wegvallen",
      ],
      juist: 3,
      toelichting:
        "Samenvatten weegt op frequentie; kritische minderheidsstandpunten mogen niet verdwijnen omdat ze minder vaak genoemd zijn.",
      tags: ["toepassing", "participatie", "verificatie"],
      moeilijkheid: 3,
      isSecurity: false,
    },
    {
      type: "mc",
      vraag: "Welke tekst mag zonder verdere menselijke controle naar bewoners worden gestuurd?",
      opties: [
        "Geen enkele: er verlaat nooit tekst het huis die niet door een mens is gelezen en goedgekeurd",
        "Een korte AI-tekst zonder cijfers",
        "Een AI-tekst die op een goedgekeurd voorbeeld is gebaseerd",
        "Een AI-tekst die twee keer door het model is gecontroleerd",
      ],
      juist: 0,
      toelichting:
        "De richtlijn bewonerscommunicatie is absoluut: menselijke controle op feiten, toon, inclusiviteit en brongebruik vóór elke publicatie.",
      tags: ["beleid", "toepassing", "verificatie"],
      moeilijkheid: 1,
      isSecurity: false,
    },
    {
      type: "waar_onwaar",
      vraag: "Volgens de EU AI Act moeten organisaties die AI inzetten, zorgen dat medewerkers voldoende AI-kennis hebben.",
      juist: true,
      toelichting:
        "AI-geletterdheid is een wettelijke verplichting; de Academy en hercertificering geven daar bij Blauwhoed invulling aan.",
      tags: ["beleid", "AI-Act"],
      moeilijkheid: 3,
      isSecurity: false,
    },
    {
      type: "meerdere_juist",
      vraag: "Je wilt AI inzetten bij het opstellen van een besluitenlijst uit vergadernotulen. Wat hoort bij een goede aanpak? (meerdere antwoorden juist)",
      opties: [
        "De notulen eerst anonimiseren door namen te vervangen door rollen",
        "Het model vragen ontbrekende besluiten logisch aan te vullen",
        "Het model instrueren niets toe te voegen dat niet letterlijk in de notulen staat",
        "Zelf controleren of elk besluit werkelijk zo is genomen",
      ],
      juist: [0, 2, 3],
      toelichting:
        "Anonimiseren, een strikte niet-toevoegen-instructie en menselijke controle vormen de veilige route; aanvullen is precies wat je wilt voorkomen.",
      tags: ["toepassing", "prompting", "verificatie"],
      moeilijkheid: 3,
      isSecurity: false,
    },
  ],
  assignments: [
    {
      moduleSlug: "generatieve-ai-begrijpen",
      titel: "Leg AI uit aan je team: wat kan het wel en niet?",
      opdrachttekst:
        "Je teamlead vraagt jou om in het volgende teamoverleg vijf minuten uit te leggen wat jullie wel en niet aan AI kunnen overlaten. Schrijf de kernboodschap uit in maximaal 300 woorden. Leg in je eigen woorden uit hoe een taalmodel werkt (voorspellen, geen database), noem twee taken uit jullie dagelijkse werk die goed bij AI passen en twee taken die je er niet aan overlaat, en onderbouw waarom. Gebruik het fictieve Project Rietveldkwartier als voorbeeldcontext; alle projectgegevens in deze opdracht zijn fictief. Sluit af met één vuistregel die je team direct kan onthouden.",
      moeilijkheid: 1,
      type: "reflectie",
      rubric: {
        criteria: [
          {
            naam: "Uitleg van het voorspelmechanisme",
            gewicht: 40,
            max: 40,
            niveaus: {
              goed: "Legt in eigen woorden correct uit dat een taalmodel tekst voorspelt en geen feiten opzoekt, en verbindt daar een gevolg voor het gebruik aan.",
              voldoende: "Legt het voorspelmechanisme grotendeels correct uit, maar de koppeling naar de praktijk blijft impliciet.",
              onvoldoende: "Beschrijft het model als zoekmachine of database, of de uitleg bevat wezenlijke fouten.",
            },
          },
          {
            naam: "Passende voorbeeldtaken",
            gewicht: 35,
            max: 35,
            niveaus: {
              goed: "Noemt twee sterke en twee zwakke AI-taken uit het eigen werkveld met een juiste onderbouwing per taak.",
              voldoende: "Noemt passende taken, maar de onderbouwing is mager of één voorbeeld is minder goed gekozen.",
              onvoldoende: "Voorbeelden ontbreken, zijn verwisseld (zwakke taak als sterk gepresenteerd) of niet onderbouwd.",
            },
          },
          {
            naam: "Helderheid en vuistregel",
            gewicht: 25,
            max: 25,
            niveaus: {
              goed: "De tekst is helder en beknopt voor collega's zonder voorkennis en sluit af met een bruikbare, correcte vuistregel.",
              voldoende: "De tekst is begrijpelijk maar wollig of te technisch op onderdelen; de vuistregel is aanwezig maar algemeen.",
              onvoldoende: "De tekst is onduidelijk of te lang, of de vuistregel ontbreekt of is misleidend.",
            },
          },
        ],
      },
      startcontext: {
        project: "Project Rietveldkwartier (fictief)",
        situatie: "Binnenstedelijk woningbouwproject, team van 6 collega's met wisselende AI-ervaring",
        aanleiding: "Teamoverleg over verantwoord AI-gebruik",
      },
      referentieUitwerking:
        "Een sterk antwoord legt uit dat een taalmodel woord voor woord het meest waarschijnlijke vervolg voorspelt en dus geen feitendatabase is, en dat output daarom overtuigend maar fout kan zijn. Het noemt sterke taken als samenvatten van aangeleverde verslagen en herschrijven van conceptbrieven, en zwakke taken als het opvragen van actuele normen of het benoemen van 'de huidige grondprijs' zonder bron. Elke keuze is onderbouwd met het verschil tussen taal bewerken en feiten kennen. De afsluitende vuistregel luidt in de geest van: geef het model de feiten, laat het model de taal doen.",
      beoordeling: "handmatig",
    },
    {
      moduleSlug: "generatieve-ai-begrijpen",
      titel: "Van tien losse vragen naar één sterke prompt",
      opdrachttekst:
        "Een collega werkte voor het fictieve Project Havenkade in één lang chatgesprek: ze plakte een verslag van twee pagina's en vroeg om 'een samenvatting van vijf zinnen voor collega's die er niet bij waren'. Daarna stelde ze in hetzelfde gesprek nog negen vervolgvragen over losse details. Toen ze aan het eind opnieuw vroeg om 'de samenvatting volgens de eerdere instructie', kreeg ze acht zinnen in plaats van vijf, en de doelgroep 'collega's' was verdwenen. Leg in twee tot drie zinnen uit wat hier misging, in termen van tokens en het contextvenster. Schrijf vervolgens één nieuwe, compacte prompt die in ÉÉN bericht alle benodigde informatie bevat (bron, taak, doelgroep, lengte-eis) zodat het gewenste resultaat in één keer goed komt — gebruik de startcontext als bron. Alle gegevens in deze opdracht zijn fictief.",
      moeilijkheid: 1,
      type: "prompt_oefening",
      rubric: {
        criteria: [
          {
            naam: "Verklaring van het mechanisme",
            gewicht: 30,
            max: 30,
            niveaus: {
              goed: "Legt correct uit dat het contextvenster eindig is en dat vroege instructies in een lang gesprek minder zwaar gaan meewegen of buiten beeld raken.",
              voldoende: "De verklaring wijst in de juiste richting maar is onvolledig of te vaag over waarom dit gebeurt.",
              onvoldoende: "De verklaring ontbreekt of wijt het probleem aan iets anders dan het contextvenster (bijvoorbeeld 'het model was moe').",
            },
          },
          {
            naam: "Kwaliteit van de herschreven prompt",
            gewicht: 50,
            max: 50,
            niveaus: {
              goed: "Eén compact bericht bevat bron, taak, doelgroep en lengte-eis expliciet en ondubbelzinnig, geschikt om in één keer het juiste resultaat te krijgen.",
              voldoende: "De prompt bevat de meeste elementen, maar mist er één (bijvoorbeeld de doelgroep) of is onnodig lang en rommelig.",
              onvoldoende: "De prompt herhaalt het oorspronkelijke probleem (verspreid over meerdere berichten) of mist meerdere kernelementen.",
            },
          },
          {
            naam: "Toepassing op de casus",
            gewicht: 20,
            max: 20,
            niveaus: {
              goed: "Gebruikt de aangeleverde startcontext correct en consistent, zonder verzonnen details toe te voegen.",
              voldoende: "Gebruikt de startcontext grotendeels correct, met een kleine onnauwkeurigheid.",
              onvoldoende: "Negeert de startcontext of voegt gegevens toe die er niet in staan.",
            },
          },
        ],
      },
      startcontext: {
        project: "Project Havenkade (fictief)",
        bron: "Verslag van het bouwoverleg van 14 mei (fictief, twee pagina's, niet letterlijk aangeleverd in deze opdracht)",
        oorspronkelijkeEis: "Samenvatting van maximaal vijf zinnen, voor collega's die niet bij het overleg waren, alleen besluiten en openstaande vragen",
      },
      referentieUitwerking:
        "Een sterk antwoord legt uit dat het contextvenster van het model eindig is: naarmate het gesprek langer wordt, telt informatie van het begin — zoals de oorspronkelijke lengte- en doelgroep-eis — minder zwaar mee of raakt buiten beeld, waardoor latere verzoeken om 'de samenvatting van eerder' afwijken van de oorspronkelijke instructie. De herschreven prompt zet alle eisen compact in één bericht, bijvoorbeeld: 'Vat het verslag van het bouwoverleg van Project Havenkade van 14 mei (fictief) samen in maximaal vijf zinnen, voor collega's die er niet bij waren. Noem alleen besluiten en openstaande vragen, geen sfeerbeschrijving.' Geen verspreide vervolgvragen, geen impliciete aannames.",
      beoordeling: "ai",
    },
    {
      moduleSlug: "hallucinaties-en-verificatie",
      titel: "Controleer deze AI-output op hallucinaties",
      opdrachttekst:
        "Hieronder vind je in de startcontext een AI-gegenereerde passage over het fictieve Project Zonneweide, bedoeld voor een interne notitie. In de passage zijn meerdere mogelijke hallucinaties verwerkt; de hele casus is fictief. Doorloop de vier verificatiestappen: markeer alle controleerbare feiten, geef per feit aan hoe je het zou verifiëren (welke bron of welke collega), benoem welke beweringen je zou verwijderen of corrigeren omdat ze niet te verifiëren zijn, en beschrijf hoe je de controle zou vastleggen. Lever je uitwerking in als lijst per bewering, met tot slot je herschreven, veilige versie van de passage.",
      moeilijkheid: 2,
      type: "document_analyse",
      rubric: {
        criteria: [
          {
            naam: "Herkennen van hallucinatiesignalen",
            gewicht: 40,
            max: 40,
            niveaus: {
              goed: "Markeert vrijwel alle risicovolle beweringen en benoemt per bewering het juiste signaal (schijnprecisie, onvindbare bron, toegevoegde conclusie).",
              voldoende: "Vindt de meeste risicovolle beweringen, maar mist er één of benoemt signalen onnauwkeurig.",
              onvoldoende: "Mist meerdere duidelijke hallucinaties of markeert vooral onschuldige stijlkeuzes.",
            },
          },
          {
            naam: "Verificatieaanpak per feit",
            gewicht: 35,
            max: 35,
            niveaus: {
              goed: "Koppelt elk gemarkeerd feit aan een concrete, juiste bron of deskundige, en gebruikt nergens het model zelf als verificatie.",
              voldoende: "Noemt bronnen, maar deels te algemeen ('internet', 'navragen') of niet voor elk feit.",
              onvoldoende: "Verifieert via het model zelf of noemt geen bruikbare bronnen.",
            },
          },
          {
            naam: "Veilige herschreven versie",
            gewicht: 25,
            max: 25,
            niveaus: {
              goed: "De herschreven passage bevat geen onverifieerbare beweringen meer, markeert open punten expliciet en vermeldt de vastlegging van de controle.",
              voldoende: "De herschreven passage is grotendeels opgeschoond, maar één twijfelachtig element bleef staan of de vastlegging ontbreekt.",
              onvoldoende: "De herschreven versie laat verzonnen details staan of ontbreekt.",
            },
          },
        ],
      },
      startcontext: {
        project: "Project Zonneweide (fictief)",
        aiOutput:
          "Fase 2 van Zonneweide omvat 60 woningen rond een groen hof. Uit CBS-onderzoek blijkt dat 78,3% van de starters in de regio een appartement zoekt. Met 1,4 parkeerplaats per woning voldoet het plan ruim aan de gemeentelijke norm van 1,2. De gemeente heeft ingestemd met de versnelde procedure, waardoor de verkoop zeker vóór de zomer start.",
        aangeleverdDoorMedewerker: "Alleen het aantal woningen (60) en het groene hof komen uit de eigen invoer.",
      },
      referentieUitwerking:
        "Een sterk antwoord markeert het CBS-percentage (schijnprecisie plus te controleren bron), beide parkeergetallen (niet aangeleverd, dus verifiëren in de gemeentelijke beleidsnota), de instemming van de gemeente (toegevoegde conclusie, verifiëren in het verslag of bij de projectleider) en de stellige verkoopvoorspelling (te mooi rond, geen feit). Per bewering staat een concrete bron. De herschreven versie behoudt alleen de zelf aangeleverde feiten, benoemt open punten expliciet en sluit af met een vastleggingsregel wie wat wanneer heeft gecontroleerd.",
      beoordeling: "ai",
    },
    {
      moduleSlug: "hallucinaties-en-verificatie",
      titel: "Rekenopzet laten structureren zonder het rekenwerk uit handen te geven",
      opdrachttekst:
        "Voor het fictieve Project De Houtwal wil je team weten wat de indexering van een aanneemsom over drie jaar betekent; alle bedragen in deze casus zijn fictief. Jouw opdracht bestaat uit twee delen. Deel één: schrijf de prompt waarmee je een AI-tool alléén de rekenopzet laat structureren (stappen, benodigde gegevens, aannames), zonder dat het model zelf de uitkomst berekent. Deel twee: beschrijf in drie tot vijf zinnen hoe je daarna zelf de berekening uitvoert en hoe je controleert dat een eventueel door AI voorgestelde tabel rekenkundig klopt. Leg tot slot in twee zinnen uit waarom je het rekenwerk niet aan het taalmodel overlaat.",
      moeilijkheid: 2,
      type: "workflow",
      rubric: {
        criteria: [
          {
            naam: "Prompt stuurt op opzet, niet op uitkomst",
            gewicht: 40,
            max: 40,
            niveaus: {
              goed: "De prompt vraagt expliciet om structuur (stappen, benodigde input, aannames) en verbiedt of vermijdt het berekenen van de uitkomst.",
              voldoende: "De prompt richt zich op de opzet, maar laat ruimte waardoor het model toch een uitkomst zou produceren.",
              onvoldoende: "De prompt vraagt het model de berekening zelf uit te voeren.",
            },
          },
          {
            naam: "Eigen reken- en controleproces",
            gewicht: 35,
            max: 35,
            niveaus: {
              goed: "Beschrijft concreet het zelf rekenen in een spreadsheet en het controleren van totalen en tussenstappen.",
              voldoende: "Beschrijft het zelf rekenen, maar de controle op totalen of tussenstappen blijft vaag.",
              onvoldoende: "Laat de uitkomst feitelijk toch uit het model komen of beschrijft geen controle.",
            },
          },
          {
            naam: "Onderbouwing van de taakverdeling",
            gewicht: 25,
            max: 25,
            niveaus: {
              goed: "Legt correct uit dat taalmodellen cijfers voorspellen in plaats van rekenen en dat fouten bij meerstapsberekeningen structureel zijn.",
              voldoende: "Noemt dat AI-rekenwerk onbetrouwbaar is, maar zonder het mechanisme te benoemen.",
              onvoldoende: "De onderbouwing ontbreekt of is onjuist.",
            },
          },
        ],
      },
      startcontext: {
        project: "Project De Houtwal (fictief)",
        casus: "Aanneemsom van € 14,2 miljoen (fictief), indexering over drie jaar volgens een nader te kiezen index",
        doel: "Rekenopzet voor het interne kostenoverleg",
      },
      referentieUitwerking:
        "Een sterk antwoord bevat een prompt die het model vraagt om uitsluitend de rekenstappen, benodigde gegevens en aannames op te sommen, met een expliciete instructie om geen bedragen te berekenen. Het eigen proces beschrijft het invoeren van de stappen in een spreadsheet, het rekenen met de werkelijke indexcijfers uit de bron en het narekenen van totalen. De onderbouwing benoemt dat een taalmodel cijfers voorspelt die op uitkomsten lijken en dat meerstapsberekeningen daarom in gecontroleerd gereedschap thuishoren.",
      beoordeling: "ai",
    },
    {
      moduleSlug: "basisprompten",
      titel: "Je eerste complete prompt: een bewonersbrief over bouwoverlast",
      opdrachttekst:
        "Voor het fictieve Project Rietveldkwartier starten over drie weken heiwerkzaamheden die twee weken duren, op werkdagen tussen 07.00 en 16.00 uur; alle gegevens in deze casus zijn fictief. Schrijf de volledige prompt waarmee je een goedgekeurde AI-tool een eerste concept van de bewonersbrief laat maken. Gebruik alle vier de bouwstenen: rol, context, taak en format. Zorg dat de context geanonimiseerd is, vraag om de Blauwhoed-toon (helder, warm, eerlijk) en sluit af met de instructie om aannames en ontbrekende informatie te markeren. Lever alleen de prompt in, niet de brief zelf.",
      moeilijkheid: 1,
      type: "prompt_oefening",
      rubric: {
        criteria: [
          {
            naam: "Volledigheid van de vier bouwstenen",
            gewicht: 40,
            max: 40,
            niveaus: {
              goed: "Rol, context, taak en format zijn alle vier aanwezig, concreet en passend bij de casus.",
              voldoende: "Alle bouwstenen zijn aanwezig, maar één is te algemeen of oppervlakkig ingevuld.",
              onvoldoende: "Eén of meer bouwstenen ontbreken of de prompt is een losse vraag zonder structuur.",
            },
          },
          {
            naam: "Veilige, geanonimiseerde context",
            gewicht: 30,
            max: 30,
            niveaus: {
              goed: "De context bevat geen persoonsgegevens of herleidbare details en precies de projectfeiten die de taak nodig heeft.",
              voldoende: "De context is veilig maar mist een relevant projectfeit of bevat overbodige informatie.",
              onvoldoende: "De context bevat persoonsgegevens of herleidbare details.",
            },
          },
          {
            naam: "Toonsturing en aannamemarkering",
            gewicht: 30,
            max: 30,
            niveaus: {
              goed: "De prompt stuurt expliciet op de Blauwhoed-toon en vraagt om het markeren van aannames en ontbrekende informatie.",
              voldoende: "Toon of aannamemarkering is aanwezig, maar niet beide of slechts impliciet.",
              onvoldoende: "Toonsturing en aannamemarkering ontbreken beide.",
            },
          },
        ],
      },
      startcontext: {
        project: "Project Rietveldkwartier (fictief)",
        werkzaamheden: "Heiwerkzaamheden, start over drie weken, duur twee weken, werkdagen 07.00-16.00 uur",
        maatregelen: "Geluidsarme technieken waar mogelijk, trillingsmeters bij de dichtstbijzijnde woningen",
        doelgroep: "Direct omwonenden",
      },
      referentieUitwerking:
        "Een sterk antwoord opent met een passende rol (ervaren omgevingsmanager), geeft de fictieve projectfeiten geanonimiseerd als context, formuleert de taak concreet (aankondigen, eerlijk over overlast, maatregelen en contactmogelijkheid benoemen) en legt het format vast (maximaal circa 250 woorden, kern eerst, korte zinnen, structuur kern-maatregelen-contact). De prompt vraagt expliciet om de heldere, warme en eerlijke toon en sluit af met de instructie om aannames en ontbrekende informatie onderaan te markeren.",
      beoordeling: "ai",
    },
    {
      moduleSlug: "basisprompten",
      titel: "Itereren op AI-output: van stijf concept naar bruikbare tekst",
      opdrachttekst:
        "In de startcontext staat een stijf, wollig AI-concept van een uitnodiging voor een inloopavond van het fictieve Project Zonneweide; de hele casus is fictief. Jouw opdracht: verbeter deze tekst via iteraties. Schrijf drie opeenvolgende, concrete bijsturingsinstructies zoals je die aan de AI-tool zou geven, elk gericht op één of twee punten (denk aan structuur, toon en concreetheid). Beschrijf per instructie in één zin waarom je juist hiervoor kiest. Schrijf tot slot zelf de eindversie van de uitnodiging (maximaal 150 woorden) zoals die er na jouw iteraties uit zou moeten zien.",
      moeilijkheid: 2,
      type: "prompt_oefening",
      rubric: {
        criteria: [
          {
            naam: "Kwaliteit van de bijsturingsinstructies",
            gewicht: 40,
            max: 40,
            niveaus: {
              goed: "Drie concrete, gerichte instructies die elk op één of twee punten sturen en logisch op elkaar voortbouwen.",
              voldoende: "De instructies zijn grotendeels concreet, maar één is te vaag of overlapt sterk met een andere.",
              onvoldoende: "Instructies zijn vaag ('maak het beter') of stapelen te veel wijzigingen tegelijk.",
            },
          },
          {
            naam: "Onderbouwing van de keuzes",
            gewicht: 25,
            max: 25,
            niveaus: {
              goed: "Elke instructie heeft een korte, steekhoudende reden die aansluit bij de zwakke plekken van het concept.",
              voldoende: "De redenen zijn aanwezig maar deels algemeen of verwisselbaar.",
              onvoldoende: "Onderbouwing ontbreekt of past niet bij de gekozen instructies.",
            },
          },
          {
            naam: "Kwaliteit van de eindversie",
            gewicht: 35,
            max: 35,
            niveaus: {
              goed: "De eindversie is helder, warm en concreet: kern eerst, korte zinnen, concrete datum en vervolgstap, binnen de woordlimiet.",
              voldoende: "De eindversie is duidelijk verbeterd, maar bevat nog wolligheid of mist een concreet vervolg.",
              onvoldoende: "De eindversie is nauwelijks beter dan het concept of ontbreekt.",
            },
          },
        ],
      },
      startcontext: {
        project: "Project Zonneweide (fictief)",
        conceptTekst:
          "Geachte heer/mevrouw, In het kader van de voorgenomen ontwikkeling van fase 2 wordt door de initiatiefnemer een informatiebijeenkomst georganiseerd teneinde omwonenden in de gelegenheid te stellen kennis te nemen van de planvorming. De bijeenkomst vindt plaats op een nader te communiceren locatie. Uw aanwezigheid wordt op prijs gesteld.",
        feiten: "Inloopavond op donderdag 19 juni, 19.00-21.00 uur, buurthuis De Spil, over het ontwerp van fase 2 (24 rijwoningen)",
      },
      referentieUitwerking:
        "Een sterk antwoord stuurt eerst op structuur en concreetheid (kern eerst, datum, tijd en locatie uit de feiten toevoegen), daarna op toon (warm en persoonlijk, korte zinnen, geen jargon zoals 'planvorming') en tot slot op de afsluiting (concrete uitnodiging met wat bezoekers kunnen inbrengen). Elke instructie heeft een reden die verwijst naar een zwakte in het concept. De eindversie opent met datum en doel, nodigt actief uit, benoemt wat bewoners kunnen zien en vragen, en blijft binnen 150 woorden.",
      beoordeling: "beide",
    },
    {
      moduleSlug: "veiligheid-i",
      titel: "Anonimiseer deze casus vóór AI-gebruik",
      opdrachttekst:
        "In de startcontext staat een fictief klachtenbericht over het fictieve Project De Houtwal, vol persoonsgegevens en herleidbare details; geen enkel gegeven betreft een echte persoon. Je wilt een AI-tool vragen om een nette conceptreactie. Maak het bericht eerst veilig: pas dataminimalisatie toe (schrap wat niet nodig is voor het doel), anonimiseer wat overblijft (rollen in plaats van personen, unieke details vergroofd) en doe de eindtoets: zou een ingewijde collega de melder kunnen aanwijzen? Lever in: de geschoonde versie van het bericht, een korte lijst van wat je verwijderde of aanpaste met per item de reden, en één zin over hoe de persoonsgegevens later in de definitieve reactie terugkomen.",
      moeilijkheid: 2,
      type: "veiligheidscasus",
      rubric: {
        criteria: [
          {
            naam: "Volledigheid van de anonimisering",
            gewicht: 45,
            max: 45,
            niveaus: {
              goed: "Alle directe én indirecte identificatoren zijn verwijderd of vergroofd; de eindtoets is expliciet toegepast en onderbouwd.",
              voldoende: "Directe identificatoren zijn weg, maar één indirect herleidbaar detail bleef staan of de eindtoets is niet benoemd.",
              onvoldoende: "Er blijven herleidbare persoonsgegevens in de tekst staan.",
            },
          },
          {
            naam: "Dataminimalisatie met behoud van bruikbaarheid",
            gewicht: 30,
            max: 30,
            niveaus: {
              goed: "Schrapt overbodige gegevens én behoudt precies wat nodig is om een goede conceptreactie te laten schrijven.",
              voldoende: "Minimaliseert, maar schrapt ook informatie die voor de taak nodig was of laat overbodige details staan.",
              onvoldoende: "Minimaliseert niet of maakt de casus onbruikbaar voor het doel.",
            },
          },
          {
            naam: "Onderbouwing en vervolgproces",
            gewicht: 25,
            max: 25,
            niveaus: {
              goed: "Elke aanpassing heeft een correcte reden en het antwoord beschrijft dat persoonsgegevens pas ná de AI-stap handmatig worden toegevoegd.",
              voldoende: "De redenen zijn deels algemeen of het vervolgproces is summier beschreven.",
              onvoldoende: "Onderbouwing ontbreekt of het antwoord stelt voor persoonsgegevens toch mee te sturen.",
            },
          },
        ],
      },
      startcontext: {
        project: "Project De Houtwal (fictief)",
        klachtenbericht:
          "Van: R. van Dijk, Meerkoetstraat 8, 06-1234XXXX. Ik ben koper van bouwnummer 12 (koopsom € 468.000) en werk in nachtdienst bij het ziekenhuis. Door het bouwlawaai vanaf 07.00 uur kan ik overdag niet slapen. Vorige maand heb ik hier al over gebeld met uw collega Sanne. Ik overweeg de oplevering niet te accepteren.",
        doel: "Conceptreactie laten schrijven door een goedgekeurde AI-tool",
      },
      referentieUitwerking:
        "Een sterk antwoord verwijdert naam, adres, telefoonnummer, bouwnummer, koopsom en de naam van de collega, en vergrooft de nachtdienst tot bijvoorbeeld 'werkt in wisseldiensten en slaapt overdag' of laat dit weg als het voor de reactie niet nodig is — met een afweging daarbij. Het bewaart de kern die de taak nodig heeft: een koper ervaart ernstige slaaphinder door bouwlawaai vanaf 07.00 uur, heeft eerder contact gehad en overweegt vervolgstappen. Elke aanpassing heeft een reden (direct identificerend, herleidbaar in combinatie, niet nodig voor het doel) en het antwoord besluit met het handmatig toevoegen van naam en adres in de definitieve brief, buiten de AI-tool om.",
      beoordeling: "ai",
    },
    {
      moduleSlug: "veiligheid-i",
      titel: "Veiligheidscasus: is dit een datalek en wat doe je?",
      opdrachttekst:
        "Lees de fictieve situatie in de startcontext; alle namen en gegevens zijn verzonnen. Een collega vraagt jou om raad omdat jij de Fundament-module hebt afgerond. Schrijf je advies in maximaal 250 woorden. Benoem of dit gemeld moet worden en waarom, beschrijf de vier stappen die je collega nu moet zetten in de juiste volgorde, en leg uit wat er met de 72-uurstermijn gebeurt als je collega tot maandag wacht. Sluit af met wat je collega juist níét moet doen en met één zin over de meldcultuur van Blauwhoed.",
      moeilijkheid: 2,
      type: "veiligheidscasus",
      rubric: {
        criteria: [
          {
            naam: "Juiste beoordeling en meldadvies",
            gewicht: 35,
            max: 35,
            niveaus: {
              goed: "Stelt correct vast dat dit direct gemeld moet worden bij IT en de privacycontactpersoon, met de juiste onderbouwing (persoonsgegevens in een niet-goedgekeurde tool).",
              voldoende: "Adviseert melden, maar de onderbouwing is onvolledig of noemt het verkeerde meldpunt.",
              onvoldoende: "Adviseert af te wachten, zelf op te lossen of alleen de teamlead in te lichten.",
            },
          },
          {
            naam: "Correcte stappen in de juiste volgorde",
            gewicht: 40,
            max: 40,
            niveaus: {
              goed: "Beschrijft stoppen, feiten bewaren zonder iets te verwijderen, direct melden en instructies volgen — in deze volgorde en met de 72-uurstermijn correct uitgelegd vanaf ontdekking.",
              voldoende: "De stappen zijn grotendeels juist, maar de volgorde wijkt af of de 72-uursuitleg is onnauwkeurig.",
              onvoldoende: "Essentiële stappen ontbreken of het advies bevat het wissen van sporen.",
            },
          },
          {
            naam: "Wat niet te doen en meldcultuur",
            gewicht: 25,
            max: 25,
            niveaus: {
              goed: "Benoemt concreet wat de collega niet moet doen (verwijderen, verzwijgen, zelf betrokkenen of leverancier benaderen) en verwoordt de meldcultuur zonder schuldvraag correct.",
              voldoende: "Benoemt één element van wat niet te doen of beschrijft de meldcultuur summier.",
              onvoldoende: "Dit onderdeel ontbreekt of bevat onjuistheden.",
            },
          },
        ],
      },
      startcontext: {
        project: "Project Rietveldkwartier (fictief)",
        situatie:
          "Vrijdagmiddag 16.30 uur. Je collega heeft een lijst met 12 namen en e-mailadressen van leden van de klankbordgroep in een gratis chatbot op zijn privételefoon geplakt om een uitnodiging te laten schrijven. Hij vraagt of hij het gesprek gewoon kan wissen en het maandag kan melden.",
      },
      referentieUitwerking:
        "Een sterk antwoord stelt vast dat dit een te melden AI-incident is: persoonsgegevens in een niet-goedgekeurde consumententool. Het adviseert direct te stoppen, niets te wissen, de feiten te noteren (tijdstip, tool, soort gegevens, aantal betrokkenen) en nog dezelfde middag te melden bij IT en de privacycontactpersoon, omdat de 72-uurstermijn bij ontdekking begint en wachten tot maandag de beoordelingstijd opsnoept. Het benoemt expliciet dat wissen en zelf de betrokkenen of leverancier benaderen fout zijn, en sluit af met de meldcultuur: melden kent geen sanctie, verzwijgen is wél verwijtbaar.",
      beoordeling: "beide",
    },
    {
      moduleSlug: "goedgekeurde-tools",
      titel: "Beoordeel: mag deze tool gebruikt worden?",
      opdrachttekst:
        "In de startcontext staan drie korte, fictieve situaties waarin een collega een AI-tool wil gebruiken. Beoordeel per situatie of het gebruik is toegestaan volgens het toolbeleid van Blauwhoed. Geef per situatie: je oordeel (toegestaan, niet toegestaan, of eerst aanvragen), de onderbouwing aan de hand van de goedgekeurde lijst en de vier toetsstenen (verwerkersovereenkomst, EER-opslag, uitsluiting modeltraining, toegangsbeheer), en het concrete alternatief of de vervolgstap die je de collega aanraadt. Alle situaties zijn fictief; gebruik geen echte namen in je uitwerking.",
      moeilijkheid: 2,
      type: "document_analyse",
      rubric: {
        criteria: [
          {
            naam: "Juiste oordelen per situatie",
            gewicht: 40,
            max: 40,
            niveaus: {
              goed: "Alle drie de oordelen zijn juist, inclusief het onderscheid tussen verboden gebruik en gebruik dat via een aanvraag mogelijk kan worden.",
              voldoende: "Twee van de drie oordelen zijn juist of één oordeel mist de nuance van de aanvraagroute.",
              onvoldoende: "Meerdere oordelen zijn onjuist.",
            },
          },
          {
            naam: "Onderbouwing met beleid en toetsstenen",
            gewicht: 35,
            max: 35,
            niveaus: {
              goed: "Verwijst per situatie correct naar de goedgekeurde lijst en de relevante toetsstenen, en benoemt waarom die hier wel of niet vervuld zijn.",
              voldoende: "De onderbouwing klopt in grote lijnen maar blijft algemeen of noemt de toetsstenen onvolledig.",
              onvoldoende: "De onderbouwing ontbreekt of berust op gevoel ('lijkt me prima').",
            },
          },
          {
            naam: "Bruikbare alternatieven en vervolgstappen",
            gewicht: 25,
            max: 25,
            niveaus: {
              goed: "Geeft per situatie een concreet, correct alternatief of de juiste vervolgstap (goedgekeurde tool, aanvraag bij IT, melding bij al gedeelde gegevens).",
              voldoende: "Geeft alternatieven, maar niet voor elke situatie of deels te vaag.",
              onvoldoende: "Alternatieven ontbreken of zijn zelf in strijd met het beleid.",
            },
          },
        ],
      },
      startcontext: {
        situatie1:
          "Een collega vat geanonimiseerde vergaderverslagen samen met Microsoft 365 Copilot onder het zakelijke Blauwhoed-account.",
        situatie2:
          "Een collega gebruikt de gratis versie van een bekende chatbot op een privéaccount om een concepttekst voor de projectwebsite te schrijven, met de instelling 'train niet op mijn data' aangezet.",
        situatie3:
          "Een team wil een gespecialiseerde transcriptietool voor bewonersavonden gaan gebruiken die nog niet op de goedgekeurde lijst staat; er is nog niets ingevoerd.",
      },
      referentieUitwerking:
        "Een sterk antwoord keurt situatie 1 goed (goedgekeurde tool, zakelijke tenant, veilige invoer), wijst situatie 2 af omdat gratis consumententools verboden zijn voor werkinvoer en een privacy-instelling geen verwerkersovereenkomst vervangt — met als alternatief dezelfde taak in Copilot of de Academy-omgeving. Voor situatie 3 is het oordeel 'eerst aanvragen': nog niets ingevoerd, dus geen incident, maar gebruik kan pas na toetsing door IT en privacy op de vier toetsstenen; de vervolgstap is een aanvraag met doel, gegevenssoorten en gebruikersgroep.",
      beoordeling: "ai",
    },
    {
      moduleSlug: "goedgekeurde-tools",
      titel: "Schrijf de aanvraag voor de transcriptietool",
      opdrachttekst:
        "Het fictieve team Participatie Havenkade wil de gespecialiseerde transcriptietool gebruiken die in de vorige opdracht nog niet op de goedgekeurde lijst stond: automatische transcripties van bewonersavonden, die vervolgens door het team worden samengevat. Schrijf de aanvraag die de AI-coördinator nodig heeft, in maximaal één A4. Beantwoord de drie vaste vragen (doel, soort gegevens, gewenste gebruikersgroep) en wees daarbij expliciet over het dataniveau: transcripties van bewonersavonden bevatten stemgeluid en uitspraken van met naam genoemde aanwezigen. Geef vervolgens aan welk van de vier toetsstenen jij, met de informatie die je nu hebt, nog niet kunt beantwoorden — en wat de AI-coördinator daarvoor bij de leverancier moet navragen. Alle gegevens zijn fictief.",
      moeilijkheid: 2,
      type: "workflow",
      rubric: {
        criteria: [
          {
            naam: "Doel en gebruikersgroep",
            gewicht: 25,
            max: 25,
            niveaus: {
              goed: "Het doel is concreet en verklaart waarom bestaande goedgekeurde tools hier niet volstaan; de gebruikersgroep is nauw en logisch afgebakend.",
              voldoende: "Doel en gebruikersgroep zijn aanwezig maar één van de twee blijft algemeen ('handiger werken').",
              onvoldoende: "Doel of gebruikersgroep ontbreekt, of het doel is niet meer dan een productnaam.",
            },
          },
          {
            naam: "Correcte dataniveau-inschatting",
            gewicht: 45,
            max: 45,
            niveaus: {
              goed: "Herkent dat ruwe transcripties met naam genoemde sprekers persoonsgegevens zijn (niet slechts 'vertrouwelijk'), en trekt daaruit de juiste conclusie dat dit een DPIA-light vereist vóór gebruik.",
              voldoende: "Herkent dat het gevoelige informatie is, maar classificeert het niveau niet scherp of vergeet de DPIA-light te noemen.",
              onvoldoende: "Behandelt de transcripties als algemene 'vertrouwelijke' bedrijfsinformatie zonder het persoonsgegevens-niveau te herkennen.",
            },
          },
          {
            naam: "Kritische blik op de toetsstenen",
            gewicht: 30,
            max: 30,
            niveaus: {
              goed: "Benoemt concreet welke toetssteen (bijvoorbeeld EER-opslag of uitsluiting modeltraining) nog niet te beantwoorden is zonder leveranciersinformatie, en wat er precies moet worden nagevraagd.",
              voldoende: "Noemt dat er nog vragen open staan, maar niet welke toetssteen dat precies raakt.",
              onvoldoende: "Doet alsof alle toetsstenen al beantwoord zijn, of laat deze vraag onbeantwoord.",
            },
          },
        ],
      },
      startcontext: {
        team: "Participatie Havenkade (fictief)",
        huidigeWerkwijze: "Handmatig notuleren tijdens bewonersavonden, vaak onvolledig door spreektempo",
        beoogdeTool: "Gespecialiseerde transcriptietool van een externe leverancier, nog niet in het toolregister",
      },
      referentieUitwerking:
        "Een sterke aanvraag formuleert het doel als 'volledige, natrekbare transcripties van bewonersavonden maken, wat handmatig notuleren nu niet haalt' en beperkt de gebruikersgroep tot de twee of drie medewerkers die avonden bijwonen. Bij de gegevenssoort herkent de aanvraag dat een ruwe transcriptie een persoonsgegeven is — elke spreker is met naam en letterlijke uitspraak geïdentificeerd — en dat dit dataniveau een DPIA-light vereist, niet alleen de vier toetsstenen. De aanvraag benoemt expliciet dat zonder informatie van de leverancier nog niet vast te stellen is of de data binnen de EER blijft en of modeltraining contractueel is uitgesloten, en vraagt de AI-coördinator dit bij de leverancier na te trekken vóór gebruik. De aanvraag sluit af met de aanbeveling om transcripties na verwerking te anonimiseren en de audio-opname te verwijderen zodra het verslag is vastgesteld.",
      beoordeling: "ai",
    },
  ],
};

export default track;
