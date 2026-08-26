const sections = [
  {
    title: "Informatie die we verwerken",
    body: [
      "Account- en profielgegevens, zoals ondersteunde inloggegevens, e-mailadres, weergavenaam, avatar, taal, tijdzone, instellingen en gebeurtenissen rond de levenscyclus van het account.",
      "Gameplay- en economiegegevens die nodig zijn om de blijvende TycoonX-wereld te laten werken, waaronder voortgang, inventaris, virtuele valuta en Diamond-saldi, bedrijven, productie, marktactiviteit, huisvesting, banen, contracten, leningen, aandelen, transacties en de status van VIP-rechten.",
      "Aankoop- en rechtgegevens, zoals betaalplatform, product-ID, transactie-ID's, ondertekende transactie- of betalingsbewijsgegevens, aankoop-, activerings- en vervalstatus, terugbetalings-, intrekkings- of chargebackstatus en de geschiedenis van levering, herstel, migratie of correcties. Van platformstores en betaalproviders ontvangen we doorgaans niet je volledige betaalkaartnummer.",
      "Beveiligings- en fraudegegevens, zoals login- en sessieregistraties, IP-adres, apparaat- en platforminformatie die aan de dienst beschikbaar wordt gesteld, appversie, diagnostische gegevens, verdachte toegangspatronen, mislukte aankoopvalidaties, exploitindicatoren, antimisbruiksignalen en moderatie- of beveiligingslogs.",
      "Communicatie en communitycontent, zoals openbare of privéchats, meldingen, profiel- en bedrijfscontent, supporttickets, inzendingen via contactformulieren, bugmeldingen, bezwaren, bijlagen, tijdstempels, afzender- en ontvanger-ID's en moderatiestatus.",
      "Gebruiks- en analysegegevens, zoals functiegebruik, sessies, retentie, prestaties, interactiegebeurtenissen en geaggregeerde statistieken voor economie en balans.",
    ],
  },
  {
    title: "Bronnen van gegevens",
    body: [
      "We ontvangen gegevens rechtstreeks van jou wanneer je een account aanmaakt of gebruikt, TycoonX speelt, contact opneemt met Support, communitycontent plaatst of instellingen wijzigt. We ontvangen ook beperkte informatie van diensten die je met TycoonX kiest of gebruikt, waaronder ondersteunde authenticatieproviders en Apple, Google, Xsolla of een andere toegestane betaalprovider wanneer zij informatie sturen over aankopen, rechten, terugbetalingen, intrekkingen, fraude of transactiestatus.",
      "Betaalproviders kunnen betaalkaart-, bank-, factuuradres-, fiscale locatie- of andere betaalgegevens zelfstandig verwerken volgens hun eigen privacyverklaringen. CK-Labs ontvangt doorgaans de transactie- en rechtgegevens die nodig zijn om TycoonX-aankopen te leveren en af te stemmen, niet de volledige gegevens van het betaalmiddel.",
    ],
  },
  {
    title: "Waarom we informatie verwerken",
    body: [
      "We verwerken informatie om accounts aan te maken en te beveiligen, TycoonX te laten werken en synchroniseren, geldige aankopen te leveren en te herstellen, dubbele levering en fraude te voorkomen, cheats of exploits te detecteren, incidenten te onderzoeken, ongeldige gamestatus te corrigeren, support te bieden, communityfuncties te modereren, de Gebruiksvoorwaarden en Communityrichtlijnen af te dwingen, technische problemen te onderzoeken, de dienst te verbeteren, operationele of juridische meldingen te sturen en aan wettelijke verplichtingen te voldoen.",
    ],
  },
  {
    title: "Rechtsgronden",
    body: [
      "Wanneer de AVG of vergelijkbare wetgeving van toepassing is, gebruiken we de rechtsgrond die past bij de specifieke verwerking: uitvoering van een overeenkomst voor gameplay, accounttoegang, levering van aankopen en support; gerechtvaardigde belangen voor beveiliging, fraudepreventie, game-integriteit, diagnostiek, evenredige communitymoderatie en juridische verdediging voor zover die belangen niet zwaarder worden beperkt door jouw rechten; wettelijke verplichtingen voor verplichte administratie en verzoeken van bevoegde autoriteiten; en toestemming wanneer de wet die voor optionele verwerking vereist.",
      "Alleen het gebruik van TycoonX geldt niet als toestemming voor verwerking waarvoor juridisch toestemming nodig is. Wanneer toestemming vereist is, vragen we die afzonderlijk en kun je die voor toekomstige verwerking intrekken.",
    ],
  },
  {
    title: "Gegevens die nodig zijn om TycoonX te leveren",
    body: [
      "Sommige informatie is nodig om de TycoonX-overeenkomst uit te voeren of een aankoop te verwerken. Zo is een account-ID nodig om blijvende gamestatus te bewaren en zijn geldige transactie- of rechtgegevens nodig om betaalde content correct te leveren, herstellen, terugbetalen, intrekken of af te stemmen. Als vereiste informatie niet wordt verstrekt of niet kan worden geverifieerd, kunnen we mogelijk geen account aanmaken of authenticeren, aankoop leveren, recht herstellen of de betreffende functie aanbieden.",
      "Optionele informatie of verwerking die niet nodig is voor de kerndienst behandelen we afzonderlijk waar dat vereist is, inclusief toestemmingsinstellingen wanneer van toepassing.",
    ],
  },
  {
    title: "Hoe we informatie delen",
    body: [
      "We verkopen geen persoonsgegevens. We kunnen alleen delen wat redelijkerwijs nodig is met dienstverleners voor hosting, databases, authenticatie, opslag, analyse, diagnostiek, moderatie, communicatie, notificaties of beveiliging; platform- en betaalpartners zoals Apple, Google, Xsolla of andere toegestane providers voor aankoopvalidatie, herstel, terugbetalingen, intrekkingen, fraude en geschillen; andere spelers wanneer je bewust openbare of sociale gamefuncties gebruikt; autoriteiten wanneer dat wettelijk verplicht is; en partijen die betrokken zijn bij een rechtmatige bedrijfsoverdracht.",
      "Apple, Google, Xsolla, banken, kaartnetwerken of andere deelnemers aan het betalingsverkeer kunnen voor delen van hun eigen betaal-, fraude-, belasting-, account- of platformverwerking als zelfstandige verwerkingsverantwoordelijke optreden. Hun eigen privacyverklaringen en wettelijke verplichtingen gelden voor die zelfstandige verwerking. TycoonX gebruikt momenteel infrastructuur zoals Supabase voor delen van de backend, en dienstverleners zijn onderworpen aan toepasselijke contractuele en wettelijke waarborgen.",
      "Waar platformregels dit vereisen, moeten derden met wie CK-Labs gebruikersgegevens deelt voor de gegevens die zij van CK-Labs ontvangen hetzelfde of een gelijkwaardig beschermingsniveau bieden als beschreven in dit Privacybeleid en vereist door de toepasselijke platformregels.",
      "Diensten van derden op het gebied van AI vormen hierop geen uitzondering. Als TycoonX een externe AI-dienst gebruikt waarbij persoonsgegevens worden gedeeld, maakt CK-Labs die doorgifte duidelijk en vraagt CK-Labs vóór de overdracht of deling om uitdrukkelijke toestemming wanneer toepasselijke platformregels of wetgeving dat vereisen. Zo'n provider mag de gegevens alleen voor toegestane doeleinden gebruiken en moet passende privacy- en beveiligingswaarborgen toepassen.",
    ],
  },
  {
    title: "Openbare en privécommunitycontent",
    body: [
      "Content die je bewust openbaar maakt in TycoonX kan als onderdeel van de dienst aan andere gebruikers worden getoond. Waar de TycoonX Gebruiksvoorwaarden en Communityrichtlijnen toestaan dat openbare user-generated content wordt uitgelicht voor TycoonX-community- of promotiedoeleinden, gebruikt CK-Labs daarvoor een passende rechtsgrond en respecteert CK-Labs de context waarin de content is gedeeld, toepasselijke instellingen, rechten van derden en dwingend recht. Als voor een specifieke promotionele toepassing toestemming nodig is, vragen we die afzonderlijk.",
      "Privéberichten, privécommunicatie met Support en niet-openbare meldingen verwerken we voor zover nodig om de dienst te leveren, beveiligen, modereren, ondersteunen, onderzoeken of juridisch te beschermen. Ze worden niet openbaar gemaakt of voor openbare promotiedoeleinden gebruikt alleen omdat CK-Labs ze voor zulke operationele doeleinden moet verwerken.",
      "Toegang tot privécommunicatie voor moderatie of juridische beoordeling is beperkt tot situaties waarin de verwerking redelijkerwijs nodig en rechtmatig is, bijvoorbeeld om op een melding te reageren, gebruikers te beschermen, misbruik of fraude te onderzoeken, aan wetgeving te voldoen of juridische aanspraken vast te stellen of te verdedigen.",
    ],
  },
  {
    title: "Internationale doorgiften",
    body: [
      "TycoonX en sommige providers kunnen informatie buiten het land waar je woont verwerken. Wanneer de AVG of vergelijkbare beperkingen voor internationale doorgiften gelden, gebruiken we waar nodig een passend juridisch doorgiftemechanisme, zoals een adequaatheidsbesluit, standaardcontractbepalingen of een andere erkende waarborg. Internationale doorgiften worden niet uitsluitend gebaseerd op de stelling dat gebruik van TycoonX gelijkstaat aan toestemming.",
      "Wanneer toepasselijk recht je recht geeft op informatie over de waarborgen voor een internationale doorgifte, kun je contact opnemen met TycoonX Support om meer informatie of een beschikbare kopie van de relevante waarborgen te vragen, met inachtneming van rechtmatige weglatingen en vertrouwelijkheidsverplichtingen tegenover derden.",
    ],
  },
  {
    title: "Bewaartermijnen",
    body: [
      "We bewaren persoonsgegevens alleen zolang als redelijkerwijs nodig is voor het doel ervan en gedurende aanvullende perioden die wettelijk verplicht of toegestaan zijn. Actieve account- en gamedata kunnen worden bewaard zolang het account actief is; supportgegevens gedurende een redelijke periode voor opvolging en geschillen; aankoop-, terugbetalings-, recht-, herstel-, boekhoud- en belastinggegevens gedurende wettelijk vereiste, contractuele, fraudepreventie- of geschilgerelateerde perioden; en beveiligings-, antifraude-, exploit-, moderatie- en auditgegevens gedurende een redelijke periode die nodig is om de dienst te beschermen, incidenten te onderzoeken of aanspraken te verdedigen.",
      "Privécommunicatie wordt niet onbeperkt bewaard alleen omdat die ooit voor moderatie is bekeken. Langere bewaring moet een afzonderlijke rechtmatige reden hebben, zoals een lopend geschil, veiligheidsonderzoek, juridische aanspraak of wettelijke verplichting. Back-ups kunnen gedurende een beperkte back-upcyclus blijven bestaan voordat ze worden verwijderd of overschreven. Geanonimiseerde of daadwerkelijk geaggregeerde gegevens kunnen worden bewaard wanneer ze geen persoon meer identificeren.",
    ],
  },
  {
    title: "Jouw privacyrechten",
    body: [
      "Afhankelijk van toepasselijk recht kun je rechten hebben op inzage, correctie, verwijdering, beperking, bezwaar, ontvangst van bepaalde gegevens in een overdraagbaar formaat, intrekking van toestemming wanneer de verwerking daarop is gebaseerd en het indienen van een klacht bij een bevoegde gegevensbeschermingsautoriteit.",
      "Je kunt accountverwijdering aanvragen via TycoonX waar die mogelijkheid beschikbaar is, of contact opnemen met TycoonX Support. We kunnen je identiteit moeten verifiëren. Bepaalde gegevens mogen nog worden bewaard wanneer dat verplicht of toegestaan is voor juridische, fiscale, boekhoudkundige, contractuele, fraudepreventie-, beveiligings-, geschiloplossings-, herstel- of rechtsvorderingsdoeleinden.",
    ],
  },
  {
    title: "Accountverwijdering en betaalde rechten",
    body: [
      "Het verwijderen van je TycoonX-account staat los van het aanvragen van een terugbetaling. Accountverwijdering kan accountgebonden gameplayvoortgang, Diamonds, verbruikbare waarde, inventaris, sociale gegevens en andere profielstatus permanent verwijderen. Het geeft niet automatisch recht op uitbetaling in geld of terugbetaling.",
      "Het verwijderen van het TycoonX-account wist een afzonderlijk transactierecord van Apple, Google, Xsolla of een andere betaalprovider niet noodzakelijk en maakt zo'n transactie ook niet automatisch ongeldig. Wanneer een geldige Lifetime VIP of een ander niet-verbruikbaar of herstelbaar recht volgens platformregels, providergegevens, de overeenkomst of dwingend recht aan de koper gekoppeld blijft, mag CK-Labs de minimale transactie- en rechtgegevens bewaren die redelijkerwijs nodig zijn om dat recht te verifiëren en te herstellen.",
      "Bij een later herstel kan redelijk bewijs nodig zijn dat dezelfde koper het relevante platform- of betaalaccount beheert. Herstel van een betaald recht herstelt geen verwijderde gameplayvoortgang, verbruikte Diamonds, inventaris, geschiedenis of overgedragen bezittingen, tenzij toepasselijk recht anders vereist. Terugbetalingsrechten blijven vallen onder het proces van de betaalprovider en dwingend recht.",
    ],
  },
  {
    title: "Kinderen en leeftijdsgebonden maatregelen",
    body: [
      "TycoonX is niet gericht op kinderen onder de minimumleeftijd waarop zij in hun rechtsgebied zelfstandig gebruik mogen maken van de dienst. Wanneer ouderlijke toestemming wettelijk vereist is, mag de dienst niet zonder die vereiste toestemming worden gebruikt. Als we ontdekken dat persoonsgegevens van een kind zijn verzameld in omstandigheden die niet aan toepasselijk recht voldoen, kunnen we het account beperken en gegevens verwijderen zoals de wet vereist.",
      "CK-Labs kan beperkte informatie over leeftijd, leeftijdscategorie, ouderlijke toestemming of platformleeftijdscontroles verwerken wanneer dat redelijkerwijs nodig is om aan wetgeving te voldoen, leeftijdsgeschikte beperkingen voor sociale functies toe te passen, aan App Store- of Google Play-eisen te voldoen of minderjarigen te beschermen. TycoonX kan communityfuncties voor bepaalde leeftijdsgroepen beperken of uitschakelen terwijl de onderliggende game beschikbaar blijft.",
    ],
  },
  {
    title: "Beveiliging",
    body: [
      "We gebruiken technische en organisatorische maatregelen die zijn bedoeld om TycoonX-gegevens te beschermen, zoals toegangscontroles, authenticatiebeveiliging, versleuteld netwerkverkeer waar van toepassing, monitoring, rate limiting, aankoopvalidatie, auditlogging, back-ups en andere waarborgen die passen bij de dienst.",
      "Geen enkele onlinedienst kan absolute veiligheid garanderen. Als je denkt dat je account is gecompromitteerd of een beveiligingslek ontdekt, neem dan direct contact op met TycoonX Support. Dit vermindert de verplichtingen van CK-Labs voor beveiligingsmaatregelen die toepasselijk recht vereist niet.",
    ],
  },
  {
    title: "Geautomatiseerde beveiliging en moderatie",
    body: [
      "TycoonX kan geautomatiseerde regels, signalen of systemen gebruiken om verdachte activiteit, spam, fraude, schadelijke content, exploitpatronen, ongeldige aankopen of ander gedrag te herkennen dat gebruikers of de dienst kan bedreigen. Geautomatiseerde signalen kunnen leiden tot beoordeling, tijdelijke beperkingen, moderatie of onderzoek.",
      "Wanneer toepasselijk recht beperkingen stelt aan uitsluitend geautomatiseerde besluiten met juridische of vergelijkbaar ingrijpende gevolgen, past CK-Labs de vereiste waarborgen toe, inclusief menselijke betrokkenheid of beoordeling waar de wet dat vereist. Rechten met betrekking tot zulke besluiten blijven onaangetast.",
    ],
  },
  {
    title: "Links en diensten van derden",
    body: [
      "TycoonX kan linken naar of samenwerken met diensten van derden. Die derden kunnen informatie verwerken volgens hun eigen privacybeleid. CK-Labs is niet verantwoordelijk voor onafhankelijke privacypraktijken van derden, behalve voor zover toepasselijk recht CK-Labs daarvoor verantwoordelijk maakt.",
    ],
  },
  {
    title: "Wijzigingen in dit Privacybeleid",
    body: [
      "We kunnen dit Privacybeleid bijwerken om wijzigingen in TycoonX, gegevensverwerking, providers, beveiligingsmaatregelen, communityfuncties of wettelijke vereisten weer te geven. We werken de datum 'Laatst bijgewerkt' bij en geven aanvullende kennisgeving waar dat vereist is. Als voor een wijziging toestemming nodig is, vragen we die toestemming in plaats van alleen voortgezet gebruik als toestemming te behandelen.",
    ],
  },
];

export default function TycoonXPrivacyPolicyNl() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white" lang="nl">
      <div className="border-b border-white/5 px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium tracking-wide">TycoonX · CK-Labs · Nederlands</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Privacybeleid</h1>
          <p className="text-zinc-500 text-sm">Laatst bijgewerkt op 26 augustus 2026</p>
          <p className="text-zinc-400 text-sm leading-relaxed mt-6">
            Dit Privacybeleid legt uit hoe CK-Labs, de exploitant van TycoonX, persoonsgegevens verwerkt wanneer je de mobiele of webapps, websites, supportdiensten, communityfuncties en andere bijbehorende onlinediensten van TycoonX gebruikt.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-2">
        {sections.map((section, i) => (
          <section key={section.title} className="rounded-xl p-6 hover:bg-white/[0.03] transition">
            <div className="flex gap-4">
              <span className="text-xs text-zinc-600 font-mono mt-1 w-6 shrink-0">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h2 className="text-white font-semibold mb-3">{section.title}</h2>
                <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
                  {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="rounded-xl border border-white/10 bg-[#111111] p-6 mt-8">
          <h2 className="text-white font-semibold mb-3">Verwerkingsverantwoordelijke en contact</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">CK-Labs is de verwerkingsverantwoordelijke voor de TycoonX-verwerkingen die in dit Privacybeleid worden beschreven. Voor privacyverzoeken, accountverwijdering, beveiligingsmeldingen, privacyvragen over aankopen, vragen over moderatiegegevens of andere gegevensbeschermingskwesties kun je TycoonX Support gebruiken of ons e-mailen.</p>
          <div className="flex flex-wrap gap-3">
            <a href="/tyconx-support" className="inline-flex bg-indigo-600 hover:bg-indigo-500 transition text-white text-sm font-medium px-4 py-2 rounded-lg">TycoonX Support</a>
            <a href="mailto:cevikdev@gmail.com" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">cevikdev@gmail.com</a>
            <a href="/tycoonx-legal/nl/terms" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Gebruiksvoorwaarden</a>
            <a href="/tycoonx-legal/nl/community" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Communityrichtlijnen</a>
          </div>
          <p className="text-zinc-600 text-xs leading-relaxed mt-4">Aanvullende wettelijk vereiste gegevens over de exploitant en het adres moeten beschikbaar zijn in de toepasselijke juridische kennisgeving of het impressum van de dienst.</p>
        </section>
      </div>
    </main>
  );
}
