const sections = [
  {
    title: "Produkttyper",
    body: [
      "Diamonds är virtuell spelvaluta. Köpta Diamonds är endast avsedda för användning i TycoonX, kan inte lösas in hos CK-Labs mot pengar om inte tvingande lag kräver något annat och upphör inte enbart på grund av att tid går.",
      "På Apple-plattformar är köpta Diamonds avsedda att säljas som förbrukningsbara In-App Purchases. På Google Play är de digitala produkter i appen som använder den tillämpliga Google Play-betalningslösningen när det krävs. I den officiella TycoonX-webbshopen kan Diamond-paket säljas via Xsolla-checkout.",
      "Ett Diamond-köp får korrigeras eller återföras om den bakomliggande betalningen återbetalas, återförs, blir föremål för chargeback, dupliceras, är bedräglig, har skapats genom ett tekniskt fel eller annars är ogiltig. Kampanj-, gåvo-, event-, kompensations-, test-, gransknings- eller gratis-Diamonds kan ha separat och tydligt angivna villkor när lag och plattformsregler tillåter det.",
      "30-Day VIP är en engångsrättighet utan automatisk förnyelse, om inte köpskärmen tydligt anger något annat. Den gäller i 30 sammanhängande dagar från aktivering eller från att rättigheten annars görs tillgänglig för det köpande TycoonX-kontot och skapar ingen återkommande betalningsskyldighet.",
      "Lifetime VIP är en digital engångsrättighet som endast erbjuds under utvalda och verkligt begränsade kampanjperioder. Den är inte permanent tillgänglig. CK-Labs får starta, avsluta, förkorta, förlänga eller helt upphöra med en sådan försäljningsperiod och får välja att aldrig erbjuda Lifetime VIP igen, med förbehåll för tillämplig lag och ett konkret erbjudande som redan har blivit bindande för en konsument.",
      "Tidigare tillgänglighet skapar ingen rätt eller förväntan på att Lifetime VIP ska finnas kvar, återkomma eller återkomma till samma pris. En senare försäljningsperiod får ha ett annat pris och skapar inte någon automatisk rätt till prisutjämning för ett tidigare avslutat köp.",
      "Att öppna en köpskärm, lägga produkten i en varukorg, påbörja checkout eller nå ett väntande betalningsläge innan en försäljningsperiod stänger reserverar inte i sig Lifetime VIP eller ett tidigare pris. Om Apple, Google, Xsolla eller en annan godkänd leverantör senare bekräftar en giltig transaktion enligt sina regler, hanterar CK-Labs den leverantörsbekräftade transaktionen enligt det tillämpliga erbjudandet och tvingande lag.",
      "Lifetime betyder TycoonX-tjänstens kommersiella driftstid för det köpande kontot så länge TycoonX fortsätter att drivas och göras tillgängligt. Det är inte ett löfte om att TycoonX ska drivas för alltid. Denna innebörd och erbjudandets tidsbegränsade karaktär ska framgå tydligt på eller omedelbart före checkout där Lifetime VIP säljs.",
    ],
  },
  {
    title: "Köp via Apple App Store",
    body: [
      "Apple behandlar betalningen och tillhandahåller App Store-transaktionsinformationen för köp via Apple In-App Purchase. Apple driver också processen för konsumenters återbetalningsbegäranden för App Store-köp. CK-Labs kan utreda leverans- och rättighetsproblem men styr inte Apples beslut om återbetalning.",
      "Köpta Diamonds är avsedda som förbrukningsbara In-App Purchases. Lifetime VIP är avsett som en icke-förbrukningsbar rättighet som kan återställas när den fortfarande är giltig och Apples regler kräver eller medger det. 30-Day VIP är avsett som en engångsrättighet utan automatisk förnyelse.",
      "Ett köp som Apple fortfarande rapporterar som väntande skapar ingen betald TycoonX-rättighet förrän Apple rapporterar en giltig slutförd transaktion. Om Apple senare slutför en tidigare väntande transaktion kan TycoonX tilldela rättigheten då, även om en tidsbegränsad kampanj har stängt, när den giltiga Apple-transaktionen hör till det erbjudandet.",
      "Om Apple återbetalar, återkallar, återför eller ogiltigförklarar en transaktion får CK-Labs återkalla eller korrigera motsvarande TycoonX-rättighet eller virtuella värde så att användaren inte behåller både den återbetalda betalningen och den betalda nyttan.",
    ],
  },
  {
    title: "Köp via Google Play",
    body: [
      "Google behandlar transaktionen enligt den tillämpliga Google Play-betalningslösningen och tillhandahåller transaktions- eller orderinformation som används för att verifiera köpet.",
      "När Google Play-regler kräver Google Play Billing för digitala varor eller tjänster i appen använder TycoonX det systemet, om inte ett tillämpligt regionalt program, en plattformsregel eller lag tillåter ett alternativ.",
      "Lifetime VIP är avsett som en icke-förbrukningsbar engångsprodukt kopplad till det köpande Google-kontot. En engångsprodukt för 30-Day VIP ska vara konfigurerad så att den inte i det tysta skapar återkommande debitering och, om upprepade 30-dagarsköp ska vara möjliga, så att en senare legitim ny engångsperiod inte permanent blockeras av produktkonfigurationen.",
      "Ett Google Play-köp med status PENDING skapar ingen betald TycoonX-rättighet. Rättigheten tilldelas först när Google rapporterar en giltig slutförd status PURCHASED och den nödvändiga verifieringen har lyckats. Ett tidigare väntande köp kan tilldelas när det senare blir giltigt slutfört, även om en tidsbegränsad kampanj då har stängt, om den leverantörsbekräftade transaktionen giltigt hör till erbjudandet.",
      "Google kan behandla berättigade återbetalningsbegäranden direkt. CK-Labs kan i vissa fall också behandla berättigade Google Play-återbetalningar via Googles utvecklarverktyg, med förbehåll för Googles regler och tillämplig lag.",
      "Om Google återbetalar, återför, chargebackar, annullerar eller ogiltigförklarar en transaktion får CK-Labs återkalla eller korrigera den motsvarande rättigheten eller virtuella värdet.",
    ],
  },
  {
    title: "TycoonX-webbshop med Xsolla",
    body: [
      "Köp i den officiella TycoonX-webbshopen kan behandlas av Xsolla. Beroende på checkout-upplägget kan ett bolag i Xsolla-koncernen agera som merchant of record.",
      "När Xsolla är merchant of record kan den Xsolla-enhet som anges i checkout eller på kvittot enligt sina tillämpliga villkor ansvara för betalningsbehandling, transaktionsskatter eller moms, bedrägerikontroll, återbetalningar, betalningstvister och chargebacks.",
      "Vilken Xsolla-enhet, betalningsmetod, pris, skatt, återbetalningspolicy och annan lagstadgad köpinformation som gäller bestäms av checkout och kvittot för just den transaktionen. De transaktionsspecifika Xsolla-villkoren och den återbetalningspolicy som visas för köpet gäller tillsammans med tvingande konsumenträtt.",
      "CK-Labs ansvarar för att leverera motsvarande TycoonX-rättighet efter att en giltig bekräftelse på lyckad betalning har mottagits. Att användaren återvänder från checkout, ser ett klientmeddelande om framgång eller att en order har skapats innebär inte i sig att CK-Labs måste tilldela betalt värde innan giltig leverantörsbekräftelse har mottagits.",
      "Om en giltig Xsolla-transaktion bekräftas efter en behandlingsfördröjning får CK-Labs tilldela rättigheten när bekräftelsen kommer enligt den leverantörsbekräftade transaktionen och det tillämpliga erbjudandet. Om Xsolla återbetalar, återför, annullerar, chargebackar eller ogiltigförklarar transaktionen får CK-Labs återkalla eller korrigera motsvarande TycoonX-rättighet eller virtuella värde.",
      "Ett köp i webbshopen skapar ingen rätt att kringgå Apple- eller Google-regler inne i deras appar. Om TycoonX får visa eller länka till ett externt webbshopserbjudande i en app beror på tillämplig plattform, land, program och lag.",
    ],
  },
  {
    title: "Priser, regional prissättning och framtida prisändringar",
    body: [
      "CK-Labs får ändra priser, paketstorlekar, antal Diamonds, VIP-priser, regionala priser, valutor, produkttillgänglighet och kampanjer för framtida köp. Ett aktuellt pris, paket, rabatt eller produkt är inte ett löfte om att samma erbjudande ska finnas kvar senare.",
      "Priser kan skilja sig mellan Apple App Store, Google Play, den officiella TycoonX-webbshopen, länder, regioner, valutor och verkliga kampanjperioder. Plattformarnas prissystem, skatt, moms, valutakonvertering, växelkursrörelser, lokala prissättningsregler eller betalningsleverantörers regler kan också ändra lokala priser.",
      "Det slutliga totalpriset och valutan som visas i relevant checkout före bekräftelse gäller för den transaktionen, med förbehåll för rättelse av uppenbara pris- eller konfigurationsfel när lagen tillåter det. Att öppna en produktsida, gå in i checkout eller se ett cachat eller tidigare pris före bekräftelse låser inte i sig priset för en framtida transaktion.",
      "Obligatoriska skatter och oundvikliga prisdelar visas på det sätt som tillämplig lag kräver. Där en jurisdiktion kräver ett särskilt referenspris, prishistorik eller annan uppgift vid rabatt ska marknadsföring och checkout följa den regeln.",
      "Ett slutfört engångsköp prissätts inte retroaktivt bara för att CK-Labs senare ändrar priset. En senare prissänkning skapar inte automatiskt rätt till återbetalning, kredit, delåterbetalning, prisutjämning, extra Diamonds eller extra VIP-tid. En senare prishöjning skapar inte någon extra debitering för ett redan slutfört engångsköp, om inte tvingande lag kräver något annat.",
      "Lifetime VIP får säljas till olika priser under olika verkliga kampanjperioder. Ett köp i en kampanjperiod ger inte rätt till ett senare lägre kampanjpris och en framtida kampanj tvingar inte CK-Labs att återinföra ett tidigare pris.",
      "Kampanjpåståenden, nedräkningar, överstrukna priser, angivna besparingar och andra påståenden om prisfördel måste motsvara det verkliga erbjudandet och får inte vara vilseledande.",
      "Om CK-Labs i framtiden inför en återkommande prenumeration eller annan produkt med återkommande avgift gäller separata regler för prisändring, förnyelse, information, samtycke och uppsägning. Dessa regler för engångsköp tillåter inte en dold återkommande debitering.",
    ],
  },
  {
    title: "Checkoutinformation och betalningsbekräftelse",
    body: [
      "Innan en konsument lägger en betalningspliktig beställning ska relevant checkout tydligt och vid rätt tidpunkt visa den förhandsinformation som lagen kräver. Beroende på transaktionen kan det omfatta produktens huvudsakliga egenskaper, totalpris inklusive obligatoriska skatter och avgifter, varaktighet och uppsägningsinformation, leverans eller aktivering, väsentlig funktionalitet, kompatibilitet eller interoperabilitet, tillåtna betalningsmetoder och den avtalsslutande näringsidkarens identitet och kontaktuppgifter.",
      "När EU/EES-regler för konsumenter gäller för köpbar virtuell spelvaluta visar TycoonX tydligt och begripligt den prisinformation i verklig valuta som lagen kräver för betalda Diamonds och för digitalt innehåll eller digitala tjänster i spelet som erbjuds mot köpbara Diamonds. CK-Labs använder inte lager av virtuella valutor eller paketstrukturer för att dölja den verkliga kostnaden eller tvinga konsumenter att köpa en väsentligt oönskad överskottsmängd virtuell valuta när tillämplig lag förbjuder sådan praxis.",
      "När tysk lag gäller för en online-checkout som skapar en betalningsskyldighet ska det sista beställningssteget göra betalningsskyldigheten tydlig på det sätt som lagen kräver. CK-Labs förlitar sig inte på dold text, förvalda betalda tillägg eller en tvetydig slutlig beställningsknapp för att skapa en betalningsskyldighet.",
      "Om ett pris har personanpassats genom automatiserat beslutsfattande och tillämplig lag kräver att detta upplyses ska erbjudandet eller checkout informera om det före beställningen. Vanlig land-, butik-, valuta-, skatte- eller generellt tillämpad regional prissättning beskrivs inte som personanpassad enbart därför att priser skiljer sig mellan regioner.",
    ],
  },
  {
    title: "Tysk elektronisk ångerfunktion",
    body: [
      "För vissa distansavtal som ingås via ett onlinegränssnitt kräver tysk lag en elektronisk ångerfunktion medan den lagstadgade ångerfristen löper. När kravet gäller en TycoonX-transaktion och CK-Labs är den avtalsslutande näringsidkare som ansvarar för gränssnittet ska CK-Labs tillhandahålla den lagstadgade, tydligt märkta, kontinuerligt tillgängliga, framträdande placerade och lättåtkomliga ångerfunktionen samt bekräftelsesteget.",
      "När Apple, Google, Xsolla eller en annan leverantör är den avtalsslutande näringsidkaren eller styr det juridiskt relevanta köp- och ångergränssnittet kan leverantörens lagstadgade ånger- eller återbetalningsflöde vara den tillämpliga vägen. Denna ansvarsfördelning tar inte bort någon tvingande ångerrätt.",
      "När lagen kräver det ska mottagandet av en elektronisk ångerförklaring bekräftas utan dröjsmål på ett varaktigt medium. Den elektroniska funktionen kompletterar och ersätter inte andra juridiskt giltiga sätt att utöva ångerrätten.",
    ],
  },
  {
    title: "Återställ köp och rättigheter",
    body: [
      "Lifetime VIP ska kunna återställas eller återkopplas efter verifiering så länge rättigheten fortfarande är giltig där plattformsregler, betalningsleverantörens register, avtalet eller tvingande lag kräver det. En fortfarande giltig 30-Day VIP återställs från tillförlitliga konto- eller serverregister där det krävs.",
      "Diamonds är förbrukningsbara köp och levereras inte som ett andra köp efter att de har förbrukats. Det aktuella TycoonX-saldot bevaras genom TycoonX-kontots och serverns tillförlitliga status där det är tillämpligt. En återställning skapar aldrig dubbelt köpt värde.",
      "Att radera ett TycoonX-konto kan permanent radera profil- och spelstatus men annullerar eller raderar inte nödvändigtvis en separat giltig Apple-, Google-, Xsolla- eller annan betalningsleverantörstransaktion. Där en giltig återställningsbar rättighet fortfarande är kopplad till köparen får CK-Labs kräva rimlig bevisning om att samma köpare kontrollerar relevant plattforms- eller betalningskonto innan rättigheten kopplas till ett behörigt TycoonX-konto.",
      "Att återställa en betald rättighet efter kontoradering återskapar inte raderade spelframsteg, förbrukade Diamonds, lager, social historik, transaktionshistorik eller överförda tillgångar om inte tvingande lag kräver något annat.",
    ],
  },
  {
    title: "Leveransproblem",
    body: [
      "Om en användare har debiterats men det köpta innehållet inte visas bör användaren kontrollera att rätt TycoonX-konto används, använda Återställ köp där det är tillämpligt, ge en väntande leverantörstransaktion eller notifiering rimlig tid att slutföras och därefter kontakta TycoonX Support med order- eller transaktionsuppgifter om problemet kvarstår.",
      "CK-Labs får verifiera transaktionen hos Apple, Google, Xsolla eller relevant leverantör innan en rättighet tilldelas, återställs, ändras eller återbetalas.",
      "Ett väntande köp reserverar inte en andra rättighet och skapar inte en dubbeltilldelning. Om leverantören senare bekräftar att det väntande köpet blev en giltig slutförd transaktion stämmer CK-Labs av det mot den tillförlitliga transaktionen och den redan registrerade rättighetsstatusen.",
    ],
  },
  {
    title: "Uppenbara fel, misslyckade betalningar och dubbla tilldelningar",
    body: [
      "Om checkout, katalog, valuta, skatt, produkt, mängd eller rättighetskonfiguration innehåller ett uppenbart fel får CK-Labs eller relevant betalningsleverantör rätta felet för framtida transaktioner och, där lagen tillåter det, annullera en ännu inte fullgjord felaktig transaktion och återbetala det belopp som faktiskt betalats i stället för att leverera ett oavsiktligt felvärde. Tvingande rättigheter och ett avtal som redan har blivit bindande styrs fortsatt av tillämplig lag.",
      "En skärmbild, gammal cachad visning, manipulerad klient, föråldrad appversion, inofficiell källa eller klientbaserat visningsfel åsidosätter inte giltig slutlig checkoutinformation eller tillförlitliga server- och betalningsleverantörsregister.",
      "Dubbla rättigheter eller virtuellt värde som skapats genom återförsök, upprepade webhooks, dubbla butiksnotifieringar, race conditions, buggar, återställningsfel, komprometterade inloggningsuppgifter eller liknande tekniska fel får tas bort eller konsolideras så att kontot endast får det giltiga värde som faktiskt har köpts.",
      "Om en betalning är väntande, nekad, återförd, annullerad, underkänd i bedrägerikontroll eller aldrig bekräftas får CK-Labs skjuta upp eller hålla inne motsvarande rättighet tills en giltig lyckad transaktion har bekräftats.",
    ],
  },
  {
    title: "Kampanjer, kuponger och missbruk av erbjudanden",
    body: [
      "Kampanjer får begränsas efter tid, land, plattform, konto, köphistorik, behörighet, mängd, antal inlösningar eller andra tydligt angivna villkor. Om erbjudandet inte anger något annat kan kampanjer inte kombineras och skapar ingen rätt till en framtida kampanj.",
      "Användare får inte utnyttja tekniska fel, dubbel kuponginlösen, manipulerade region- eller identitetsuppgifter, automatiserat köpmissbruk, återbetalningscykling, kontofarming eller andra metoder för att få större kampanjvärde än det verkliga erbjudandet avsåg.",
      "Om en kampanj eller rabatt har erhållits genom bedrägeri, tekniskt missbruk, dubbel inlösen eller annan ogiltig metod får CK-Labs neka köpet, återkalla endast det ogiltiga kampanjvärdet eller återbetala och återföra den berörda transaktionen där lagen tillåter det. Annat legitimt köpt värde tas inte bort enbart därför att en separat kampanj var ogiltig.",
      "En frivillig goodwillkredit, gratis förlängning, diskretionär återbetalning, bonus, kompensation, kampanjförmån eller test-/granskningsrättighet som ges utöver en tvingande rättslig skyldighet innebär inte i sig att CK-Labs medger ansvar och skapar inget löfte om att samma åtgärd ska erbjudas i ett annat fall.",
    ],
  },
  {
    title: "Återbetalningar, återföringar och chargebacks",
    body: [
      "En återbetalning eller betalningsåterföring ger inte användaren rätt att behålla både det återbetalda beloppet och motsvarande betalda digitala värde.",
      "Om en betalning återbetalas, återförs, chargebackas, annulleras eller visar sig ogiltig efter att värde redan har tilldelats får CK-Labs, med förbehåll för tillämplig lag, återkalla den berörda VIP- eller andra rättigheten, ta bort motsvarande oanvända Diamonds eller virtuella värde, återföra direkt kopplade ogiltiga speltransaktioner, göra en motsvarande saldokorrigering där återbetalat värde redan har förbrukats eller överförts eller tillfälligt begränsa köp- och ekonomifunktioner medan en betalningstvist utreds.",
      "CK-Labs använder inte dessa korrigeringar för att ta bort annat legitimt köpt värde, utom när det rimligen behövs för att återföra en specifik ogiltig transaktion eller annars tillåts enligt lag.",
      "Återbetalningar behandlas normalt genom den betalningskanal som hanterade köpet och, där leverantören kräver det, till den ursprungliga betalningsmetoden. Godkännandet av en återbetalning och när pengarna faktiskt syns hos bank, kortutgivare, plånbok eller annan betalningsmetod kan skilja sig åt. CK-Labs styr inte tredje parts avvecklingstid, valutaväxlingsskillnader, bankavgifter, kortutgivaravgifter eller växelkursrörelser, med förbehåll för leverantörsregler och tvingande lag.",
      "När Apple, Google, Xsolla eller en annan leverantör är avtalsslutande näringsidkare eller utfärdare av transaktionskvitto eller skattedokument styr den leverantören formen och rättelseprocessen för sitt kvitto eller sin faktura. CK-Labs kan hjälpa till med TycoonX-rättigheter och identifiering av transaktioner men kan inte lova att ändra eller återutfärda en tredje parts faktura eller skattedokument. Där CK-Labs självt är rättsligt skyldigt att utfärda kvitto, faktura, kreditnota eller annat dokument gäller tillämplig lag.",
    ],
  },
  {
    title: "Obehöriga eller bedrägliga köp",
    body: [
      "Misstänkta obehöriga köp bör rapporteras utan dröjsmål till relevant betalningsleverantör och TycoonX Support.",
      "CK-Labs får utreda kvitton, transaktionsidentifierare, rättighetsregister, serverloggar, kontoaktivitet, enhets- eller sessionsinformation, betalningsleverantörshändelser och relaterade säkerhetsuppgifter för att förhindra bedrägeri och dubbel leverans.",
      "Bedrägliga kvitton, manipulerade klienter, betalningsmissbruk, avsiktligt falska bedrägerirapporter, missbruk av chargebacks eller försök att behålla återbetalat digitalt värde kan leda till rättighetskorrigering, köpbegränsningar, kontoavstängning eller uppsägning enligt TycoonX-villkoren och tillämplig lag.",
    ],
  },
  {
    title: "EU- och tyska ånger- och rättigheter för digitala produkter",
    body: [
      "Ingenting i denna policy utesluter lagstadgade rättigheter som inte lagligen får avtalas bort. För konsumenter i Tyskland kan §§ 327 och följande BGB gälla för betalt digitalt innehåll och digitala tjänster.",
      "För konsumenter i EU/EES behandlar CK-Labs inte enbart krediteringen av köpta Diamonds till kontot som omedelbar leverans av digitalt innehåll som automatiskt gör att en lagstadgad ångerrätt upphör. Om en lagstadgad 14-dagars ångerrätt gäller för köp av virtuell spelvaluta omfattas köpta och oanvända Diamonds under den lagstadgade perioden. Om Diamonds redan har använts, överförts eller lösts in mot digitalt innehåll eller digitala tjänster avgörs följderna av ånger enligt tvingande lag och den konkreta transaktionen, inte genom en generell regel om att återbetalning aldrig medges. Den avtalsslutande näringsidkaren eller den tillämpliga betalningskanalen kan styra hur en begäran om ånger lämnas in eller behandlas, men denna ansvarsfördelning tar inte bort någon tvingande rätt.",
      "För en tidsbegränsad digital tjänst som 30-Day VIP upphör inte varje lagstadgad ångerrätt automatiskt bara därför att åtkomsten aktiveras omedelbart. Där lag tillåter tidig prestation kan checkout begära konsumentens uttryckliga begäran om detta, och ett eventuellt belopp som får tas ut efter giltig ånger bestäms endast enligt tillämplig lag.",
      "För en mer långvarig rättighet som Lifetime VIP tar varken engångspriset eller avsaknaden av automatisk förnyelse i sig bort lagstadgad ångerrätt eller tvingande rättsmedel för digitala tjänster. Begäran om tidig prestation, upphörande av ångerrätt, proportionell betalning efter ånger, uppsägning eller annan följd gäller endast om de juridiska villkoren för den transaktionen är uppfyllda.",
      "CK-Labs använder inte en enda generell klausul om att inga återbetalningar ges eller att alla ångerrätter avstås för Diamonds, 30-Day VIP och Lifetime VIP, eftersom den rättsliga behandlingen kan skilja sig mellan produkterna.",
    ],
  },
  {
    title: "Nödvändiga uppdateringar och versioner som stöds",
    body: [
      "Betalt TycoonX-innehåll innebär inget löfte om att varje historisk appversion, enhet, operativsystem, API eller plattformsintegration ska stödjas utan tidsbegränsning.",
      "När tysk rätt om digitala produkter gäller ska CK-Labs under den juridiskt relevanta perioden tillhandahålla och informera konsumenter om uppdateringar som behövs för att hålla den berörda betalda digitala produkten avtalsenlig, inklusive nödvändiga säkerhetsuppdateringar.",
      "Om en nödvändig uppdatering har tillhandahållits och användaren tydligt har informerats om att den finns och om följderna av att inte installera den, kan underlåten installation inom rimlig tid påverka krav som gäller ett avtalsfel som enbart orsakas av att just den uppdateringen saknas, i den utsträckning lagen medger det. Detta gäller endast när CK-Labs har lämnat tillräckliga installationsanvisningar och tar inte bort rättigheter som avser ett annat fel, utebliven leverans eller en ogiltig rättighet.",
      "En giltig betald rättighet bör förbli kopplad till köparen och erkännas på stödda versioner där produktvillkor, plattformsregler eller tvingande lag kräver det. Ett krav på uppdatering är inte en grund för att duplicera ett köp, radera ett giltigt återställningsbart Lifetime VIP eller undvika ett rättsmedel som fortfarande är rättsligt skyldigt.",
    ],
  },
  {
    title: "Åtkomst mellan plattformar, Family Sharing och dubbla rättighetsregister",
    body: [
      "Ett giltigt köp får erkännas på en annan stödd TycoonX-enhet eller plattform endast när TycoonX stöder denna åtkomst och relevanta butik-, betalningsleverantörs-, lands- och plattformsregler tillåter det. Erkännande mellan plattformar skapar inte i sig en ny transaktion eller en extra betald tilldelning.",
      "Samma bakomliggande köp får inte multipliceras genom återställning, kontomigrering, användning på flera enheter, plattformslänkning, webhook-återförsök eller dubbla leverantörsregister. Om inte ett specifikt erbjudande uttryckligen anger något annat skapar upprepat erkännande av samma Lifetime VIP inte flera Lifetime VIP-förmåner och förlänger upprepat erkännande av samma 30-Day VIP inte dess ursprungliga giltighetsperiod.",
      "Separat slutförda giltiga köp som inte är dubbletter förblir separata transaktioner. CK-Labs får konsolidera tekniska rättighetsregister utan att annullera ett separat giltigt köp eller ta bort en tvingande rätt till återbetalning, garanti eller annat konsumenträttsligt rättsmedel.",
      "Apple Family Sharing gäller endast när CK-Labs har aktiverat det för den relevanta berättigade In-App Purchase-produkten och Apple rapporterar köpet som delningsbart. Om Family Sharing erbjuds beror en familjemedlems åtkomst på den ursprungliga köparens giltiga delade rättighet och kan upphöra om Apple rapporterar att delningen eller den underliggande rättigheten har upphört, återkallats eller återbetalats. Delad åtkomst skapar inte ett separat köp eller en separat återbetalningsrätt för varje familjemedlem utöver Apples regler och tvingande lag.",
      "Om TycoonX inte uttryckligen visar en Apple-produkt som delningsbar via Family Sharing innehåller köpet inget löfte om Family Sharing.",
    ],
  },
  {
    title: "Permanent nedläggning av tjänsten",
    body: [
      "Om TycoonX läggs ned permanent kan onlineåtkomst till konton, Diamonds, VIP, virtuella föremål och speldata också upphöra. Virtuella föremål blir inte automatiskt inlösningsbara mot pengar enbart därför att tjänsten stänger.",
      "Lifetime VIP är knutet till TycoonX kommersiella driftstid för det köpande kontot, inte användarens biologiska livstid, och är inte ett obegränsat löfte om att tjänsten ska finnas för alltid.",
      "Detta tar inte bort någon tvingande rätt till återbetalning, prisavdrag, uppsägning, garanti eller annat konsumenträttsligt rättsmedel som gäller på grund av omständigheterna eller tidpunkten för nedläggningen.",
    ],
  },
];

export default function TycoonXSwedishPurchases() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white" lang="sv">
      <div className="border-b border-white/5 px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium tracking-wide">TycoonX · CK-Labs · Svenska</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Köp och återbetalningar</h1>
          <p className="text-zinc-500 text-sm">Svensk version: 28 augusti 2026 · Kanonisk engelsk version: 28 augusti 2026</p>
          <p className="text-zinc-400 text-sm leading-relaxed mt-6">
            Denna policy gäller betalt digitalt innehåll och betalda rättigheter i TycoonX, inklusive Diamonds, engångsköp av 30-Day VIP, tidsbegränsade Lifetime VIP-erbjudanden och köp via Apple App Store, Google Play och den officiella TycoonX-webbshopen med Xsolla. Den kompletterar TycoonX användarvillkor och begränsar inte rättigheter som enligt lag inte får avtalas bort.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-2">
        {sections.map((section, i) => (
          <section key={section.title} className="rounded-xl p-6 hover:bg-white/[0.03] transition">
            <div className="flex gap-4">
              <span className="text-xs text-zinc-600 font-mono mt-1 w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
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
          <h2 className="text-white font-semibold mb-3">Juridik och support</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">TycoonX drivs av CK-Labs. Använd TycoonX Support för leveransproblem, köpfrågor, misstänkt bedrägeri eller tvister om digitala rättigheter. För återbetalningar som styrs av Apple, Google eller Xsolla kan du också behöva använda den leverantörens officiella återbetalnings- eller supportprocess.</p>
          <div className="flex flex-wrap gap-3">
            <a href="/tycoonx-legal/sv/terms" className="inline-flex bg-indigo-600 hover:bg-indigo-500 transition text-white text-sm font-medium px-4 py-2 rounded-lg">Användarvillkor</a>
            <a href="/tycoonx-legal/sv" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Svenskt juridiskt centrum</a>
            <a href="/tyconx-support" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">TycoonX Support</a>
            <a href="mailto:cevikdev@gmail.com" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">cevikdev@gmail.com</a>
          </div>
        </section>
      </div>
    </main>
  );
}
