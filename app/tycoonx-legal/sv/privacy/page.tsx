const sections = [
  {
    title: "Information som vi behandlar",
    body: [
      "Konto- och profiluppgifter, såsom identifierare för inloggning som stöds, e-postadress, visningsnamn, avatar, språk, tidszon, inställningar och händelser som rör kontots livscykel.",
      "Spel- och ekonomidata som behövs för att driva den bestående TycoonX-världen, inklusive progression, inventarier, virtuella valutor och Diamond-saldon, företag, produktion, marknadsaktivitet, bostäder, jobb, avtal, lån, aktier, transaktioner och status för VIP-rättigheter.",
      "Köp- och rättighetsdata, såsom betalplattform, produkt-ID, transaktionsidentifierare, signerad transaktions- eller kvittoinformation, status för köp, aktivering och giltighetstid, återbetalning, återkallelse eller chargeback samt historik över leverans, återställning, migrering eller korrigering. Vi får normalt inte ditt fullständiga betalkortsnummer från plattformsbutiker eller betalningsleverantörer.",
      "Säkerhets- och bedrägeridata, såsom inloggnings- och sessionsloggar, IP-adress, enhets- och plattformsinformation som görs tillgänglig för tjänsten, appversion, diagnostik, misstänkta åtkomstmönster, ogiltiga köpvalideringar, exploit-indikatorer, signaler mot missbruk samt modererings- och säkerhetsloggar.",
      "Kommunikation och communityinnehåll, såsom offentliga eller privata chattar, rapporter, profil- och företagsinnehåll, supportärenden, kontaktformulär, buggrapporter, överklaganden, bilagor, tidsstämplar, avsändar- och mottagaridentifierare samt modereringsstatus.",
      "Användnings- och analysdata, såsom funktionsanvändning, sessioner, retention, prestanda, interaktionshändelser och aggregerade mätvärden för ekonomi och balansering.",
    ],
  },
  {
    title: "Varifrån uppgifterna kommer",
    body: [
      "Vi får uppgifter direkt från dig när du skapar eller använder ett konto, spelar TycoonX, kontaktar Support, skickar in communityinnehåll eller ändrar inställningar. Vi får även begränsad information från tjänster som du väljer eller använder tillsammans med TycoonX, däribland stödda autentiseringsleverantörer samt Apple, Google, Xsolla eller annan godkänd betalningsleverantör när de skickar information om köp, rättigheter, återbetalningar, återkallelser, bedrägeri eller transaktionsstatus.",
      "Betalningsleverantörer kan självständigt behandla betalkortsuppgifter, bankuppgifter, faktureringsadress, skatterelaterad platsinformation eller andra betalningsuppgifter enligt sina egna integritetsmeddelanden. CK-Labs får normalt den transaktions- och rättighetsinformation som behövs för att leverera och stämma av TycoonX-köp, inte fullständiga uppgifter om betalningsinstrumentet.",
    ],
  },
  {
    title: "Varför vi behandlar information",
    body: [
      "Vi behandlar information för att skapa och skydda konton, driva och synkronisera TycoonX, leverera och återställa giltiga köp, förhindra dubbel leverans och bedrägeri, upptäcka fusk eller exploits, utreda incidenter, korrigera ogiltigt speltillstånd, ge support, moderera communityfunktioner, upprätthålla användarvillkoren och Community Standards, felsöka tekniska problem, förbättra tjänsten, skicka drifts- eller juridiska meddelanden och uppfylla rättsliga skyldigheter.",
    ],
  },
  {
    title: "Rättsliga grunder",
    body: [
      "När GDPR eller liknande lag gäller använder vi den rättsliga grund som är lämplig för den specifika behandlingen: fullgörande av avtal för spel, kontoåtkomst, leverans av köp och support; berättigade intressen för säkerhet, bedrägeribekämpning, spelintegritet, diagnostik, proportionerlig communitymoderering och rättsligt försvar när dessa intressen inte väger lättare än dina rättigheter; rättsliga förpliktelser för obligatorisk dokumentation och myndighetsförfrågningar; samt samtycke när lagen kräver det för frivillig behandling.",
      "Enbart användning av TycoonX behandlas inte som samtycke till behandling som enligt lag kräver samtycke. När samtycke krävs ber vi om det separat och du kan återkalla det för framtida behandling.",
    ],
  },
  {
    title: "Uppgifter som behövs för att tillhandahålla TycoonX",
    body: [
      "Viss information är nödvändig för att fullgöra TycoonX-avtalet eller behandla ett köp. Ett konto-ID behövs exempelvis för att bevara ett bestående speltillstånd, och giltig transaktions- eller rättighetsinformation behövs för att korrekt leverera, återställa, återbetala, återkalla eller stämma av betalt innehåll. Om nödvändig information inte lämnas eller inte kan verifieras kan vi sakna möjlighet att skapa eller autentisera ett konto, leverera ett köp, återställa en rättighet eller tillhandahålla den berörda funktionen.",
      "Frivillig information eller behandling som inte är nödvändig för kärntjänsten hanteras separat där det krävs, inklusive kontroller för samtycke när det är tillämpligt.",
    ],
  },
  {
    title: "Hur vi delar information",
    body: [
      "Vi säljer inte personuppgifter. Vi kan dela endast det som rimligen behövs med tjänsteleverantörer för hosting, databaser, autentisering, lagring, analys, diagnostik, moderering, kommunikation, aviseringar eller säkerhet; plattforms- och betalningspartners som Apple, Google, Xsolla eller andra godkända leverantörer för köpvalidering, återställning, återbetalningar, återkallelser, bedrägeri och tvister; andra spelare när du medvetet använder offentliga eller sociala spelfunktioner; myndigheter när lag kräver det; samt parter i en laglig företagsöverlåtelse.",
      "Apple, Google, Xsolla, banker, kortnätverk eller andra betalningsaktörer kan vara självständigt personuppgiftsansvariga för delar av sin egen behandling av betalningar, bedrägeri, skatt, konton eller plattformar. Deras egna integritetsmeddelanden och rättsliga skyldigheter gäller för sådan självständig behandling. TycoonX använder för närvarande infrastruktur såsom Supabase för delar av backend, och tjänsteleverantörer omfattas av tillämpliga avtalsmässiga och rättsliga skyddsåtgärder.",
      "När plattformsregler kräver det måste tredje parter som CK-Labs delar användardata med ge samma eller ett likvärdigt skydd för de uppgifter de får från CK-Labs som det som beskrivs i denna policy och krävs enligt tillämpliga plattformsregler.",
      "Tredjepartstjänster för AI är inte undantagna från dessa regler. Om TycoonX använder en extern AI-tjänst på ett sätt som innebär att personuppgifter delas, kommer CK-Labs att tydligt informera om delningen och inhämta uttryckligt tillstånd innan uppgifterna överförs eller delas när tillämpliga plattformsregler eller lag kräver det. En sådan leverantör får endast använda uppgifterna för godkända ändamål och måste tillämpa lämpliga integritets- och säkerhetsåtgärder.",
    ],
  },
  {
    title: "Offentligt och privat communityinnehåll",
    body: [
      "Innehåll som du medvetet gör offentligt i TycoonX kan visas för andra användare som en del av tjänsten. När TycoonX användarvillkor och Community Standards tillåter att offentligt användargenererat innehåll lyfts fram för TycoonX-communityn eller i marknadsföringssyfte använder CK-Labs en lämplig rättslig grund och respekterar sammanhanget där innehållet delades, tillämpliga inställningar, tredje mans rättigheter och tvingande lag. Om samtycke krävs för en viss marknadsföringsanvändning ber CK-Labs om det separat.",
      "Privata direktmeddelanden, privat kommunikation med Support och icke-offentliga rapporter behandlas i den utsträckning som behövs för att tillhandahålla, säkra, moderera, stödja, utreda eller rättsligt skydda tjänsten. De görs inte offentliga eller används för offentlig marknadsföring enbart därför att CK-Labs behöver behandla dem för dessa driftsändamål.",
      "Tillgång till privat kommunikation för moderering eller rättslig granskning begränsas till situationer där behandlingen rimligen är nödvändig och laglig, till exempel för att svara på en rapport, skydda användare, utreda missbruk eller bedrägeri, följa lag eller fastställa, göra gällande eller försvara rättsliga anspråk.",
    ],
  },
  {
    title: "Internationella överföringar",
    body: [
      "TycoonX och vissa leverantörer kan behandla information utanför landet där du bor. När GDPR eller liknande begränsningar för internationella överföringar gäller använder vi vid behov en lämplig rättslig överföringsmekanism, såsom ett beslut om adekvat skyddsnivå, EU-kommissionens standardavtalsklausuler eller en annan erkänd skyddsåtgärd. Internationella överföringar grundas inte enbart på ett påstående om att användning av TycoonX innebär samtycke.",
      "När tillämplig lag ger dig rätt till information om skyddsåtgärderna för en internationell överföring kan du kontakta TycoonX Support för att begära mer information eller en tillgänglig kopia av relevanta skyddsåtgärder, med förbehåll för lagliga maskeringar och tredje parts sekretesskrav.",
    ],
  },
  {
    title: "Lagringstider",
    body: [
      "Vi behåller personuppgifter endast så länge som rimligen behövs för respektive ändamål och under ytterligare perioder som krävs eller tillåts enligt lag. Aktiva konto- och speldata kan sparas så länge kontot är aktivt; supportuppgifter under en rimlig period för uppföljning och tvister; köp-, återbetalnings-, rättighets-, återställnings-, bokförings- och skatteuppgifter under perioder som krävs enligt lag eller behövs för avtalsuppfyllelse, bedrägeribekämpning eller tvister; samt säkerhets-, antifraud-, exploit-, modererings- och revisionsuppgifter under en rimlig period som behövs för att skydda tjänsten, utreda incidenter eller försvara anspråk.",
      "Privat kommunikation sparas inte på obestämd tid enbart därför att den någon gång har granskats inom moderering. Längre lagring måste ha ett separat lagligt behov, såsom en pågående tvist, säkerhetsutredning, rättsligt anspråk eller rättslig skyldighet. Säkerhetskopior kan finnas kvar under en begränsad backupcykel innan de raderas eller skrivs över. Anonymiserade eller verkligt aggregerade uppgifter kan sparas när de inte längre identifierar en person.",
    ],
  },
  {
    title: "Dina integritetsrättigheter",
    body: [
      "Beroende på tillämplig lag kan du ha rätt till tillgång, rättelse, radering, begränsning, invändning, att få vissa uppgifter i ett portabelt format, att återkalla samtycke när behandlingen grundas på samtycke samt att lämna klagomål till en behörig dataskyddsmyndighet.",
      "Du kan begära att kontot raderas via TycoonX där den funktionen finns eller genom att kontakta TycoonX Support. Vi kan behöva verifiera din identitet. Vissa uppgifter kan fortfarande sparas när det krävs eller tillåts av juridiska, skattemässiga, bokföringsmässiga, avtalsmässiga, bedrägeriförebyggande, säkerhetsrelaterade, tvistlösnings-, rättighetsåterställnings- eller rättsanspråksrelaterade skäl.",
    ],
  },
  {
    title: "Radering av konto och betalda rättigheter",
    body: [
      "Att radera ditt TycoonX-konto är något annat än att begära återbetalning av en betalning. Kontoradering kan permanent ta bort kontobunden spelprogression, Diamonds, förbrukningsbart värde, inventarier, sociala data och annan profilstatus. Den ger inte automatiskt rätt till utbetalning i pengar eller återbetalning.",
      "Radering av TycoonX-kontot raderar eller ogiltigförklarar inte nödvändigtvis en separat transaktionspost hos Apple, Google, Xsolla eller annan betalningsleverantör. Om en giltig Lifetime VIP eller annan icke-förbrukningsbar eller återställningsbar rättighet fortfarande är knuten till köparen enligt plattformsregler, leverantörsposter, avtalet eller tvingande lag får CK-Labs behålla den minsta mängd transaktions- och rättighetsbevis som rimligen behövs för att verifiera och återställa rättigheten.",
      "En senare återställning kan kräva rimliga bevis på att samma köpare kontrollerar relevant plattforms- eller betalningskonto. Att återställa en betald rättighet återskapar inte raderad spelprogression, förbrukade Diamonds, inventarier, historik eller överförda tillgångar om inte tillämplig lag kräver det. Rätt till återbetalning regleras fortsatt av betalningsleverantörens process och tvingande lag.",
    ],
  },
  {
    title: "Barn och åldersrelaterade kontroller",
    body: [
      "TycoonX riktar sig inte till barn under den minimiålder som gäller för självständig användning i användarens jurisdiktion. När vårdnadshavares samtycke krävs enligt lag ska tjänsten inte användas utan den nödvändiga tillåtelsen. Om vi får kännedom om att personuppgifter har samlats in från ett barn under omständigheter som inte uppfyller tillämplig lag kan vi begränsa kontot och radera uppgifter i den utsträckning lagen kräver.",
      "CK-Labs kan behandla begränsad information om ålder, åldersintervall, vårdnadshavares godkännande eller plattformsbaserade ålderskontroller när det rimligen behövs för att följa lag, tillämpa åldersanpassade begränsningar för sociala funktioner, uppfylla krav från App Store eller Google Play eller skydda minderåriga. TycoonX kan begränsa eller stänga av communityfunktioner för vissa åldersgrupper även om själva spelet fortfarande är tillgängligt.",
    ],
  },
  {
    title: "Säkerhet",
    body: [
      "Vi använder tekniska och organisatoriska åtgärder som är utformade för att skydda TycoonX-data, såsom åtkomstkontroller, autentiseringskontroller, krypterad nätverkstrafik där det är tillämpligt, övervakning, rate limiting, köpvalidering, revisionsloggar, säkerhetskopior och andra skydd som är lämpliga för tjänsten.",
      "Ingen onlinetjänst kan garantera absolut säkerhet. Om du tror att ditt konto har komprometterats eller upptäcker en säkerhetsbrist ska du kontakta TycoonX Support utan dröjsmål. Detta minskar inte CK-Labs skyldigheter att vidta säkerhetsåtgärder som krävs enligt tillämplig lag.",
    ],
  },
  {
    title: "Automatiserad säkerhet och moderering",
    body: [
      "TycoonX kan använda automatiserade regler, signaler eller system för att identifiera misstänkt aktivitet, spam, bedrägeri, kränkande innehåll, exploit-mönster, ogiltiga köp eller annat beteende som kan hota användare eller tjänsten. Automatiserade signaler kan leda till granskning, tillfälliga begränsningar, moderering eller utredning.",
      "När tillämplig lag begränsar beslut som fattas enbart genom automatiserad behandling och som medför rättsliga eller på liknande sätt betydande effekter tillämpar CK-Labs de skyddsåtgärder som krävs, inklusive mänsklig medverkan eller granskning när lagen kräver det. Rättigheter som gäller sådana beslut påverkas inte.",
    ],
  },
  {
    title: "Länkar och tjänster från tredje part",
    body: [
      "TycoonX kan länka till eller fungera tillsammans med tjänster från tredje part. Dessa tredje parter kan behandla information enligt sina egna integritetspolicyer. CK-Labs ansvarar inte för självständiga tredje parters integritetsrutiner utom i den utsträckning tillämplig lag gör CK-Labs ansvarigt.",
    ],
  },
  {
    title: "Ändringar av denna policy",
    body: [
      "Vi kan uppdatera denna policy för att återspegla ändringar i TycoonX, våra datarutiner, leverantörer, säkerhetsåtgärder, communityfunktioner eller rättsliga krav. Vi uppdaterar datumet för senaste ändring och lämnar ytterligare information där det krävs. Om en ändring kräver samtycke kommer vi att begära det samtycket i stället för att behandla fortsatt användning som samtycke i sig.",
    ],
  },
];

export default function TycoonXSwedishPrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white" lang="sv">
      <div className="border-b border-white/5 px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium tracking-wide">TycoonX · CK-Labs · Svenska</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Integritetspolicy</h1>
          <p className="text-zinc-500 text-sm">Senast uppdaterad 27 augusti 2026</p>
          <p className="text-zinc-400 text-sm leading-relaxed mt-6">
            Denna integritetspolicy förklarar hur CK-Labs, som driver TycoonX, behandlar personuppgifter när du använder TycoonX mobil- eller webbappar, webbplatser, supporttjänster, communityfunktioner och tillhörande onlinetjänster.
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
          <h2 className="text-white font-semibold mb-3">Personuppgiftsansvarig och kontakt</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">CK-Labs är personuppgiftsansvarig för den behandling i TycoonX som beskrivs i denna policy. För integritetsbegäranden, kontoradering, säkerhetsrapporter, integritetsfrågor om köp, frågor om modereringsdata eller andra dataskyddsärenden kan du använda TycoonX Support eller skicka e-post till oss.</p>
          <div className="flex flex-wrap gap-3">
            <a href="/tyconx-support" className="inline-flex bg-indigo-600 hover:bg-indigo-500 transition text-white text-sm font-medium px-4 py-2 rounded-lg">TycoonX Support</a>
            <a href="mailto:cevikdev@gmail.com" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">cevikdev@gmail.com</a>
            <a href="/tycoonx-legal/sv/terms" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Användarvillkor</a>
            <a href="/tycoonx-community-standards" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Community Standards</a>
          </div>
          <p className="text-zinc-600 text-xs leading-relaxed mt-4">Ytterligare uppgifter om operatörens identitet och adress som krävs enligt lag ska finnas tillgängliga i tjänstens tillämpliga rättsliga meddelande eller imprint.</p>
        </section>
      </div>
    </main>
  );
}
