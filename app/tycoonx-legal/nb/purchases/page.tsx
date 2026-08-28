const sections = [
  {
    title: "Produkttyper",
    body: [
      "Diamonds er virtuell spillvaluta. Kjøpte Diamonds er bare ment for bruk i TycoonX, kan ikke løses inn hos CK-Labs mot penger med mindre ufravikelig lov krever noe annet, og utløper ikke bare fordi tiden går.",
      "På Apple-plattformer er kjøpte Diamonds ment å selges som forbrukbare In-App Purchases. På Google Play er de digitale produkter i appen som bruker den aktuelle Google Play-betalingsløsningen når dette kreves. I den offisielle TycoonX-webbutikken kan Diamond-pakker selges gjennom Xsolla-checkout.",
      "Et Diamond-kjøp kan korrigeres eller reverseres hvis den underliggende betalingen refunderes, reverseres, belastes tilbake, dupliseres, er svindelaktig, er opprettet ved en teknisk feil eller på annen måte er ugyldig. Diamonds som gis som kampanje, gave, event, kompensasjon, test, gjennomgang eller gratis, kan ha egne tydelig oppgitte vilkår når lov og plattformregler tillater det.",
      "30-Day VIP er en engangsrettighet uten automatisk fornyelse, med mindre kjøpsskjermen tydelig sier noe annet. Den gjelder i 30 sammenhengende dager fra aktivering eller fra rettigheten på annen måte gjøres tilgjengelig for den kjøpende TycoonX-kontoen, og skaper ingen gjentakende betalingsplikt.",
      "Lifetime VIP er en digital engangsrettighet som bare tilbys i utvalgte og reelt begrensede kampanjeperioder. Den er ikke permanent tilgjengelig. CK-Labs kan starte, avslutte, forkorte, forlenge eller helt slutte med en slik salgsperiode, og kan velge å aldri tilby Lifetime VIP igjen, med forbehold om gjeldende lov og et konkret tilbud som allerede er blitt bindende for en forbruker.",
      "Tidligere tilgjengelighet skaper ingen rett eller forventning om at Lifetime VIP skal forbli tilgjengelig, komme tilbake eller komme tilbake til samme pris. En senere salgsperiode kan ha en annen pris og gir ikke automatisk rett til prisjustering for et tidligere fullført kjøp.",
      "Å åpne en kjøpsskjerm, legge produktet i en handlekurv, starte checkout eller nå en ventende betalingsstatus før en salgsperiode stenger, reserverer ikke i seg selv Lifetime VIP eller en tidligere pris. Hvis Apple, Google, Xsolla eller en annen godkjent leverandør senere bekrefter en gyldig transaksjon etter sine regler, behandler CK-Labs den leverandørbekreftede transaksjonen etter det aktuelle tilbudet og ufravikelig lov.",
      "Lifetime betyr TycoonX-tjenestens kommersielle driftstid for den kjøpende kontoen så lenge TycoonX fortsatt drives og gjøres tilgjengelig. Det er ikke et løfte om at TycoonX skal drives for alltid. Denne betydningen og tilbudets tidsbegrensede karakter skal fremgå tydelig på eller umiddelbart før checkout der Lifetime VIP selges.",
    ],
  },
  {
    title: "Kjøp via Apple App Store",
    body: [
      "Apple behandler betalingen og leverer App Store-transaksjonsinformasjon for kjøp gjennom Apple In-App Purchase. Apple driver også prosessen for forbrukeres refusjonsforespørsler for App Store-kjøp. CK-Labs kan undersøke leverings- og rettighetsproblemer, men styrer ikke Apples refusjonsavgjørelser.",
      "Kjøpte Diamonds er ment som forbrukbare In-App Purchases. Lifetime VIP er ment som en ikke-forbrukbar rettighet som kan gjenopprettes når den fortsatt er gyldig og Apples regler krever eller tillater det. 30-Day VIP er ment som en engangsrettighet uten automatisk fornyelse.",
      "Et kjøp som Apple fortsatt rapporterer som ventende, skaper ingen betalt TycoonX-rettighet før Apple rapporterer en gyldig fullført transaksjon. Hvis Apple senere fullfører en tidligere ventende transaksjon, kan TycoonX tildele rettigheten da, selv om en tidsbegrenset kampanje er avsluttet, når den gyldige Apple-transaksjonen hører til tilbudet.",
      "Hvis Apple refunderer, tilbakekaller, reverserer eller ugyldiggjør en transaksjon, kan CK-Labs tilbakekalle eller korrigere den tilsvarende TycoonX-rettigheten eller virtuelle verdien slik at brukeren ikke beholder både den refunderte betalingen og den betalte fordelen.",
    ],
  },
  {
    title: "Kjøp via Google Play",
    body: [
      "Google behandler transaksjonen etter den aktuelle Google Play-betalingsløsningen og leverer transaksjons- eller ordreinformasjon som brukes til å verifisere kjøpet.",
      "Når Google Play-regler krever Google Play Billing for digitale varer eller tjenester i appen, bruker TycoonX dette systemet, med mindre et relevant regionalt program, en plattformregel eller lov tillater et alternativ.",
      "Lifetime VIP er ment som et ikke-forbrukbart engangsprodukt knyttet til den kjøpende Google-kontoen. Et engangsprodukt for 30-Day VIP skal være konfigurert slik at det ikke i det skjulte skaper gjentakende belastning, og, hvis flere 30-dagers kjøp skal være mulig, slik at en senere legitim ny engangsperiode ikke blir permanent blokkert av produktkonfigurasjonen.",
      "Et Google Play-kjøp med status PENDING skaper ingen betalt TycoonX-rettighet. Rettigheten tildeles først når Google rapporterer gyldig fullført status PURCHASED og nødvendig verifisering har lykkes. Et tidligere ventende kjøp kan tildeles når det senere blir gyldig fullført, selv om en tidsbegrenset kampanje da er avsluttet, hvis den leverandørbekreftede transaksjonen gyldig hører til tilbudet.",
      "Google kan behandle kvalifiserte refusjonsforespørsler direkte. CK-Labs kan i enkelte tilfeller også behandle kvalifiserte Google Play-refusjoner gjennom Googles utviklerverktøy, med forbehold om Googles regler og gjeldende lov.",
      "Hvis Google refunderer, reverserer, belaster tilbake, kansellerer eller ugyldiggjør en transaksjon, kan CK-Labs tilbakekalle eller korrigere den tilsvarende rettigheten eller virtuelle verdien.",
    ],
  },
  {
    title: "TycoonX-webbutikken med Xsolla",
    body: [
      "Kjøp i den offisielle TycoonX-webbutikken kan behandles av Xsolla. Avhengig av checkout-oppsettet kan et selskap i Xsolla-gruppen opptre som merchant of record.",
      "Når Xsolla er merchant of record, kan Xsolla-enheten som oppgis i checkout eller på kvitteringen etter sine gjeldende vilkår være ansvarlig for betalingsbehandling, transaksjonsskatter eller merverdiavgift, svindelkontroll, refusjoner, betalingstvister og chargebacks.",
      "Hvilken Xsolla-enhet, betalingsmetode, pris, skatt, refusjonspolicy og annen lovpålagt kjøpsinformasjon som gjelder, bestemmes av checkout og kvitteringen for den konkrete transaksjonen. De transaksjonsspesifikke Xsolla-vilkårene og refusjonspolicyen som vises for kjøpet, gjelder sammen med ufravikelig forbrukerrett.",
      "CK-Labs er ansvarlig for å levere den tilsvarende TycoonX-rettigheten etter at gyldig bekreftelse på vellykket betaling er mottatt. At brukeren returnerer fra checkout, ser en klientmelding om suksess eller at en ordre er opprettet, betyr ikke i seg selv at CK-Labs må tildele betalt verdi før gyldig leverandørbekreftelse er mottatt.",
      "Hvis en gyldig Xsolla-transaksjon bekreftes etter en behandlingsforsinkelse, kan CK-Labs tildele rettigheten når bekreftelsen kommer i samsvar med den leverandørbekreftede transaksjonen og det aktuelle tilbudet. Hvis Xsolla refunderer, reverserer, kansellerer, belaster tilbake eller ugyldiggjør transaksjonen, kan CK-Labs tilbakekalle eller korrigere den tilsvarende TycoonX-rettigheten eller virtuelle verdien.",
      "Et kjøp i webbutikken gir ingen rett til å omgå Apple- eller Google-regler inne i deres apper. Om TycoonX kan vise eller lenke til et eksternt webbutikktilbud i en app, avhenger av relevant plattform, land, program og lov.",
    ],
  },
  {
    title: "Priser, regional prising og fremtidige prisendringer",
    body: [
      "CK-Labs kan endre priser, pakkestørrelser, antall Diamonds, VIP-priser, regionale priser, valutaer, produkttilgjengelighet og kampanjer for fremtidige kjøp. En gjeldende pris, pakke, rabatt eller produkt er ikke et løfte om at samme tilbud vil være tilgjengelig senere.",
      "Prisene kan variere mellom Apple App Store, Google Play, den offisielle TycoonX-webbutikken, land, regioner, valutaer og reelle kampanjeperioder. Plattformenes prissystemer, skatt, merverdiavgift, valutakonvertering, valutakursbevegelser, lokale prisregler eller betalingsleverandørers regler kan også endre lokale priser.",
      "Den endelige totalprisen og valutaen som vises i relevant checkout før bekreftelse, gjelder for den transaksjonen, med forbehold om retting av åpenbare pris- eller konfigurasjonsfeil når loven tillater det. Å åpne en produktside, gå inn i checkout eller se en bufret eller tidligere pris før bekreftelse låser ikke i seg selv prisen for en fremtidig transaksjon.",
      "Obligatoriske skatter og uunngåelige prisbestanddeler vises på den måten gjeldende lov krever. Der en jurisdiksjon krever en særskilt referansepris, prishistorikk eller annen informasjon ved rabatt, skal markedsføring og checkout følge den regelen.",
      "Et fullført engangskjøp omprises ikke med tilbakevirkende kraft bare fordi CK-Labs senere endrer prisen. En senere prisreduksjon gir ikke automatisk rett til refusjon, kreditt, delvis refusjon, prismatch, ekstra Diamonds eller ekstra VIP-tid. En senere prisøkning gir ingen ekstra belastning for et allerede fullført engangskjøp, med mindre ufravikelig lov krever noe annet.",
      "Lifetime VIP kan selges til ulike priser i forskjellige reelle kampanjeperioder. Et kjøp i én kampanjeperiode gir ikke rett til en senere lavere kampanjepris, og en fremtidig kampanje tvinger ikke CK-Labs til å gjeninnføre en tidligere pris.",
      "Kampanjepåstander, nedtellinger, overstrøkne priser, oppgitte besparelser og andre påstander om prisfordel skal samsvare med det reelle tilbudet og må ikke være villedende.",
      "Hvis CK-Labs senere innfører et abonnement eller et annet produkt med gjentakende betaling, gjelder egne regler for prisendring, fornyelse, informasjon, samtykke og oppsigelse. Disse reglene for engangskjøp tillater ikke skjult gjentakende belastning.",
    ],
  },
  {
    title: "Checkout-informasjon og betalingsbekreftelse",
    body: [
      "Før en forbruker legger inn en betalingspliktig bestilling, skal relevant checkout tydelig og på riktig tidspunkt vise den forhåndsinformasjonen loven krever. Avhengig av transaksjonen kan dette omfatte produktets viktigste egenskaper, totalpris inkludert obligatoriske skatter og avgifter, varighet og oppsigelsesinformasjon, levering eller aktivering, vesentlig funksjonalitet, kompatibilitet eller interoperabilitet, tillatte betalingsmetoder og identiteten og kontaktopplysningene til den avtalende næringsdrivende.",
      "Når EU/EØS-regler om forbrukerrett gjelder for kjøpbar virtuell spillvaluta, skal TycoonX klart og forståelig oppgi den lovpålagte prisen i reelle penger for betalte Diamonds og for digitalt innhold eller digitale tjenester som tilbys mot kjøpbare Diamonds. CK-Labs skal ikke bruke flere lag med virtuell valuta eller pakkeutforming til å skjule den reelle kostnaden eller tvinge forbrukere til å kjøpe en vesentlig mengde uønsket overskuddsvaluta der gjeldende lov forbyr en slik praksis.",
      "Når tysk lov gjelder for en nettbasert checkout som skaper betalingsplikt, skal det siste bestillingstrinnet gjøre betalingsplikten tydelig på den måten loven krever. CK-Labs baserer ikke betalingsplikt på skjult tekst, forhåndsvalgte betalte tillegg eller en tvetydig endelig bestillingsknapp.",
      "Hvis en pris er personalisert gjennom automatisert beslutningstaking og gjeldende lov krever at dette opplyses, skal tilbudet eller checkout informere om det før bestillingen. Vanlig land-, butikk-, valuta-, skatte- eller generelt anvendt regional prising anses ikke som personalisert bare fordi prisene varierer mellom regioner.",
    ],
  },
  {
    title: "Tysk elektronisk angrerfunksjon",
    body: [
      "For enkelte fjernsalgsavtaler som inngås gjennom et nettbasert grensesnitt, krever tysk lov en elektronisk angrerfunksjon mens den lovbestemte angrefristen løper. Når kravet gjelder en TycoonX-transaksjon og CK-Labs er den avtalende næringsdrivende som er ansvarlig for grensesnittet, skal CK-Labs tilby den lovpålagte, tydelig merkede, kontinuerlig tilgjengelige, fremhevede og lett tilgjengelige angrerfunksjonen samt bekreftelsestrinnet.",
      "Når Apple, Google, Xsolla eller en annen leverandør er den avtalende næringsdrivende eller styrer det juridisk relevante kjøps- og angrergrensesnittet, kan leverandørens lovlige angre- eller refusjonsflyt være den aktuelle veien. Denne ansvarsfordelingen fjerner ikke noen ufravikelig angrerett.",
      "Når loven krever det, skal mottak av en elektronisk angreerklæring bekreftes uten ugrunnet opphold på et varig medium. Den elektroniske funksjonen kommer i tillegg til og erstatter ikke andre lovlig gyldige måter å utøve angreretten på.",
    ],
  },
  {
    title: "Gjenoppretting av kjøp og rettigheter",
    body: [
      "Lifetime VIP skal kunne gjenopprettes eller knyttes på nytt etter verifisering så lenge rettigheten fortsatt er gyldig der plattformregler, betalingsleverandørens registre, avtalen eller ufravikelig lov krever det. En fortsatt gyldig 30-Day VIP gjenopprettes fra pålitelige konto- eller serverregistre der dette kreves.",
      "Diamonds er forbrukbare kjøp og leveres ikke som et nytt kjøp etter at de er brukt. Den aktuelle TycoonX-saldoen bevares gjennom TycoonX-kontoens og serverens pålitelige status der dette er relevant. En gjenoppretting skaper aldri dobbelt kjøpt verdi.",
      "Sletting av en TycoonX-konto kan permanent slette profil- og spillstatus, men kansellerer eller sletter ikke nødvendigvis en separat gyldig Apple-, Google-, Xsolla- eller annen betalingsleverandørtransaksjon. Der en gyldig gjenopprettbar rettighet fortsatt er knyttet til kjøperen, kan CK-Labs kreve rimelig dokumentasjon på at samme kjøper kontrollerer relevant plattform- eller betalingskonto før rettigheten knyttes til en kvalifisert TycoonX-konto.",
      "Gjenoppretting av en betalt rettighet etter kontosletting gjenskaper ikke slettet spillfremdrift, brukte Diamonds, beholdning, sosial historikk, transaksjonshistorikk eller overførte eiendeler med mindre ufravikelig lov krever noe annet.",
    ],
  },
  {
    title: "Leveringsproblemer",
    body: [
      "Hvis en bruker er belastet, men det kjøpte innholdet ikke vises, bør brukeren kontrollere at riktig TycoonX-konto brukes, bruke Gjenopprett kjøp der dette er relevant, gi en ventende leverandørtransaksjon eller melding rimelig tid til å fullføres og deretter kontakte TycoonX Support med ordre- eller transaksjonsopplysninger hvis problemet fortsetter.",
      "CK-Labs kan verifisere transaksjonen hos Apple, Google, Xsolla eller relevant leverandør før en rettighet tildeles, gjenopprettes, endres eller refunderes.",
      "Et ventende kjøp reserverer ikke en ny rettighet og skaper ikke dobbeltildeling. Hvis leverandøren senere bekrefter at det ventende kjøpet ble en gyldig fullført transaksjon, avstemmer CK-Labs dette mot den pålitelige transaksjonen og den allerede registrerte rettighetsstatusen.",
    ],
  },
  {
    title: "Åpenbare feil, mislykkede betalinger og doble tildelinger",
    body: [
      "Hvis checkout, katalog, valuta, skatt, produkt, mengde eller rettighetskonfigurasjon inneholder en åpenbar feil, kan CK-Labs eller relevant betalingsleverandør rette feilen for fremtidige transaksjoner og, der loven tillater det, kansellere en ennå ikke fullført feilaktig transaksjon og refundere beløpet som faktisk ble betalt i stedet for å levere en utilsiktet feilverdi. Ufravikelige rettigheter og en avtale som allerede er blitt bindende, reguleres fortsatt av gjeldende lov.",
      "Et skjermbilde, gammel bufret visning, manipulert klient, utdatert appversjon, uoffisiell kilde eller klientbasert visningsfeil overstyrer ikke gyldig endelig checkout-informasjon eller pålitelige server- og betalingsleverandørregistre.",
      "Doble rettigheter eller virtuell verdi som er opprettet gjennom nye forsøk, gjentatte webhooks, doble butikkmeldinger, race conditions, bugs, gjenopprettingsfeil, kompromitterte innloggingsopplysninger eller lignende tekniske feil kan fjernes eller konsolideres slik at kontoen bare får den gyldige verdien som faktisk er kjøpt.",
      "Hvis en betaling er ventende, avslås, reverseres, kanselleres, ikke består svindelkontroll eller aldri bekreftes, kan CK-Labs utsette eller holde tilbake den tilsvarende rettigheten til en gyldig vellykket transaksjon er bekreftet.",
    ],
  },
  {
    title: "Kampanjer, kuponger og misbruk av tilbud",
    body: [
      "Kampanjer kan begrenses etter tid, land, plattform, konto, kjøpshistorikk, kvalifikasjon, mengde, antall innløsninger eller andre tydelig oppgitte vilkår. Med mindre tilbudet sier noe annet, kan kampanjer ikke kombineres og gir ingen rett til en fremtidig kampanje.",
      "Brukere må ikke utnytte tekniske feil, dobbel kuponginnløsning, manipulerte region- eller identitetsopplysninger, automatisert kjøpsmisbruk, refusjonssykluser, kontofarming eller andre metoder for å få større kampanjeverdi enn det reelle tilbudet var ment å gi.",
      "Hvis en kampanje eller rabatt er oppnådd gjennom svindel, teknisk misbruk, dobbel innløsning eller en annen ugyldig metode, kan CK-Labs avvise kjøpet, tilbakekalle bare den ugyldige kampanjeverdien eller refundere og reversere den berørte transaksjonen der loven tillater det. Annen legitimt kjøpt verdi fjernes ikke bare fordi en separat kampanje var ugyldig.",
      "En frivillig goodwill-kreditt, gratis forlengelse, skjønnsmessig refusjon, bonus, kompensasjon, kampanjefordel eller test-/gjennomgangsrettighet som gis utover en ufravikelig rettslig plikt, innebærer ikke i seg selv at CK-Labs erkjenner ansvar og gir ikke noe løfte om at samme tiltak tilbys i en annen sak.",
    ],
  },
  {
    title: "Refusjoner, reverseringer og chargebacks",
    body: [
      "En refusjon eller betalingsreversering gir ikke brukeren rett til å beholde både det refunderte beløpet og den tilsvarende betalte digitale verdien.",
      "Hvis en betaling refunderes, reverseres, belastes tilbake, kanselleres eller viser seg ugyldig etter at verdi allerede er tildelt, kan CK-Labs, med forbehold om gjeldende lov, tilbakekalle den berørte VIP- eller andre rettigheten, fjerne tilsvarende ubrukte Diamonds eller virtuell verdi, reversere direkte tilknyttede ugyldige spilltransaksjoner, gjøre en tilsvarende saldokorrigering der refundert verdi allerede er brukt eller overført, eller midlertidig begrense kjøps- og økonomifunksjoner mens en betalingstvist undersøkes.",
      "CK-Labs bruker ikke slike korrigeringer til å fjerne annen legitimt kjøpt verdi, bortsett fra når det med rimelighet er nødvendig for å reversere en konkret ugyldig transaksjon eller ellers er tillatt etter loven.",
      "Refusjoner behandles normalt gjennom betalingskanalen som håndterte kjøpet og, der leverandøren krever det, til den opprinnelige betalingsmetoden. Godkjenning av refusjon og tidspunktet pengene faktisk vises hos bank, kortutsteder, lommebok eller annen betalingsmetode kan variere. CK-Labs styrer ikke tredjeparts oppgjørstid, valutavekslingsforskjeller, bankgebyrer, kortutstedergebyrer eller valutakursbevegelser, med forbehold om leverandørregler og ufravikelig lov.",
      "Når Apple, Google, Xsolla eller en annen leverandør er den avtalende næringsdrivende eller utsteder transaksjonskvitteringen eller skattedokumentet, styrer leverandøren formatet og rettelsesprosessen for sin kvittering eller faktura. CK-Labs kan hjelpe med TycoonX-rettigheter og identifisering av transaksjoner, men kan ikke love å endre eller utstede på nytt en tredjeparts faktura eller skattedokument. Der CK-Labs selv er rettslig forpliktet til å utstede kvittering, faktura, kreditnota eller annet dokument, gjelder relevant lov.",
    ],
  },
  {
    title: "Uautoriserte eller svindelaktige kjøp",
    body: [
      "Mistenkte uautoriserte kjøp bør rapporteres uten ugrunnet opphold til relevant betalingsleverandør og TycoonX Support.",
      "CK-Labs kan undersøke kvitteringer, transaksjonsidentifikatorer, rettighetsregistre, serverlogger, kontoaktivitet, enhets- eller sesjonsinformasjon, betalingsleverandørhendelser og relevante sikkerhetsopplysninger for å forebygge svindel og dobbel levering.",
      "Svindelaktige kvitteringer, manipulerte klienter, betalingsmisbruk, bevisst falske svindelrapporter, misbruk av chargebacks eller forsøk på å beholde refundert digital verdi kan føre til rettighetskorrigering, kjøpsbegrensninger, kontosuspensjon eller avslutning etter TycoonX-vilkårene og gjeldende lov.",
    ],
  },
  {
    title: "EU-, EØS- og tyske angrer- og digitalproduktrettigheter",
    body: [
      "Ingenting i denne policyen utelukker lovbestemte rettigheter som ikke lovlig kan fravikes. For forbrukere i Tyskland kan §§ 327 og følgende i BGB gjelde for betalt digitalt innhold og digitale tjenester.",
      "At kjøpte Diamonds krediteres TycoonX-kontoen, betyr ikke i seg selv at en lovbestemt angrerett automatisk bortfaller. Når en 14 dagers lovbestemt angrerett etter gjeldende EU/EØS-rett gjelder for kjøpt virtuell spillvaluta, kan forbrukeren bruke denne retten for kjøpte og ubrukte Diamonds i den aktuelle perioden. Hvis Diamonds allerede er brukt, overført eller vekslet inn i digitalt innhold eller tjenester, avgjøres følgene av ufravikelig lov og omstendighetene ved den konkrete transaksjonen. Apple, Google, Xsolla eller en annen avtalende næringsdrivende eller betalingskanal kan være den praktiske veien for å sende inn en angre- eller refusjonsforespørsel, men denne ansvarsfordelingen fjerner ikke en ufravikelig angrerett.",
      "For en tidsbegrenset digital tjeneste som 30-Day VIP opphører ikke enhver lovbestemt angrerett automatisk bare fordi tilgangen aktiveres umiddelbart. Der loven tillater tidlig levering, kan checkout be om forbrukerens uttrykkelige anmodning om dette, og et eventuelt beløp som kan kreves etter gyldig angring, bestemmes bare etter gjeldende lov.",
      "For en mer langvarig rettighet som Lifetime VIP fjerner verken engangsprisen eller fraværet av automatisk fornyelse i seg selv lovbestemt angrerett eller ufravikelige rettsmidler for digitale tjenester. Anmodning om tidlig levering, bortfall av angrerett, forholdsmessig betaling etter angring, oppsigelse eller andre følger gjelder bare hvis de rettslige vilkårene for den konkrete transaksjonen er oppfylt.",
      "CK-Labs bruker ikke én generell bestemmelse om at ingen refusjoner gis eller at alle angreretter fraskrives for Diamonds, 30-Day VIP og Lifetime VIP, fordi den rettslige behandlingen kan variere mellom produktene.",
    ],
  },
  {
    title: "Nødvendige oppdateringer og støttede versjoner",
    body: [
      "Betalt TycoonX-innhold er ikke et løfte om at enhver historisk appversjon, enhet, operativsystem, API eller plattformintegrasjon skal støttes uten tidsbegrensning.",
      "Når tysk rett om digitale produkter gjelder, skal CK-Labs i den rettslig relevante perioden levere og informere forbrukere om oppdateringer som er nødvendige for å holde det aktuelle betalte digitale produktet avtalemessig, herunder nødvendige sikkerhetsoppdateringer.",
      "Hvis en nødvendig oppdatering er levert og brukeren tydelig er informert om at den finnes og om følgene av å ikke installere den, kan manglende installasjon innen rimelig tid påvirke krav som gjelder en avtalemangel som utelukkende skyldes at akkurat denne oppdateringen mangler, i den grad loven tillater det. Dette gjelder bare når CK-Labs har gitt tilstrekkelige installasjonsinstruksjoner, og fjerner ikke rettigheter knyttet til en annen feil, manglende levering eller en ugyldig rettighet.",
      "En gyldig betalt rettighet bør forbli knyttet til kjøperen og anerkjennes på støttede versjoner der produktvilkår, plattformregler eller ufravikelig lov krever det. Et krav om oppdatering er ikke grunnlag for å duplisere et kjøp, slette et gyldig gjenopprettbart Lifetime VIP eller unngå et rettsmiddel som fortsatt rettslig skal gis.",
    ],
  },
  {
    title: "Tilgang på tvers av plattformer, Family Sharing og doble rettighetsregistre",
    body: [
      "Et gyldig kjøp kan anerkjennes på en annen støttet TycoonX-enhet eller plattform bare når TycoonX støtter denne tilgangen og relevante butikk-, betalingsleverandør-, land- og plattformregler tillater det. Anerkjennelse på tvers av plattformer skaper ikke i seg selv en ny transaksjon eller en ekstra betalt tildeling.",
      "Det samme underliggende kjøpet kan ikke multipliseres gjennom gjenoppretting, kontomigrering, bruk på flere enheter, plattformkobling, webhook-forsøk eller doble leverandørregistre. Med mindre et konkret tilbud uttrykkelig sier noe annet, skaper gjentatt anerkjennelse av det samme Lifetime VIP ikke flere Lifetime VIP-fordeler, og gjentatt anerkjennelse av det samme 30-Day VIP forlenger ikke den opprinnelige gyldighetsperioden.",
      "Separat fullførte gyldige kjøp som ikke er duplikater, forblir separate transaksjoner. CK-Labs kan konsolidere tekniske rettighetsregistre uten å annullere et separat gyldig kjøp eller fjerne en ufravikelig rett til refusjon, garanti eller annet forbrukerrettslig rettsmiddel.",
      "Apple Family Sharing gjelder bare når CK-Labs har aktivert det for det relevante kvalifiserte In-App Purchase-produktet og Apple rapporterer kjøpet som delbart. Hvis Family Sharing tilbys, avhenger et familiemedlems tilgang av den opprinnelige kjøperens gyldige delte rettighet og kan opphøre hvis Apple rapporterer at delingen eller den underliggende rettigheten har opphørt, blitt tilbakekalt eller refundert. Delt tilgang skaper ikke et separat kjøp eller en separat refusjonsrett for hvert familiemedlem utover Apples regler og ufravikelig lov.",
      "Hvis TycoonX ikke uttrykkelig viser et Apple-produkt som delbart via Family Sharing, inneholder kjøpet ikke noe løfte om Family Sharing.",
    ],
  },
  {
    title: "Permanent avvikling av tjenesten",
    body: [
      "Hvis TycoonX avvikles permanent, kan nettilgang til kontoer, Diamonds, VIP, virtuelle gjenstander og spilldata også opphøre. Virtuelle gjenstander blir ikke automatisk innløselige mot penger bare fordi tjenesten stenges.",
      "Lifetime VIP er knyttet til TycoonX' kommersielle driftstid for den kjøpende kontoen, ikke brukerens biologiske levetid, og er ikke et ubegrenset løfte om at tjenesten skal eksistere for alltid.",
      "Dette fjerner ikke noen ufravikelig rett til refusjon, prisavslag, oppsigelse, garanti eller annet forbrukerrettslig rettsmiddel som gjelder på grunn av omstendighetene eller tidspunktet for avviklingen.",
    ],
  },
];

export default function TycoonXNorwegianBokmalPurchases() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white" lang="nb">
      <div className="border-b border-white/5 px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium tracking-wide">TycoonX · CK-Labs · Norsk bokmål</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Kjøp og refusjoner</h1>
          <p className="text-zinc-500 text-sm">Sist oppdatert: 28. august 2026</p>
          <p className="text-zinc-400 text-sm leading-relaxed mt-6">
            Denne policyen gjelder betalt digitalt innhold og betalte rettigheter i TycoonX, inkludert Diamonds, engangskjøp av 30-Day VIP, tidsbegrensede Lifetime VIP-tilbud og kjøp via Apple App Store, Google Play og den offisielle TycoonX-webbutikken med Xsolla. Den utfyller TycoonX-vilkårene og begrenser ikke rettigheter som etter loven ikke kan fravikes.
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
          <h2 className="text-white font-semibold mb-3">Juridisk informasjon og support</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">TycoonX drives av CK-Labs. Bruk TycoonX Support ved leveringsproblemer, kjøpsspørsmål, mistanke om svindel eller tvister om digitale rettigheter. For refusjoner som styres av Apple, Google eller Xsolla, kan du også måtte bruke leverandørens offisielle refusjons- eller supportprosess.</p>
          <div className="flex flex-wrap gap-3">
            <a href="/tycoonx-legal/nb/terms" className="inline-flex bg-indigo-600 hover:bg-indigo-500 transition text-white text-sm font-medium px-4 py-2 rounded-lg">Vilkår for bruk</a>
            <a href="/tycoonx-legal/nb" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Norsk juridisk oversikt</a>
            <a href="/tyconx-support" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">TycoonX Support</a>
            <a href="mailto:cevikdev@gmail.com" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">cevikdev@gmail.com</a>
          </div>
        </section>
      </div>
    </main>
  );
}
