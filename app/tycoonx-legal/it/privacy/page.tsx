const sections = [
  {
    title: "Dati che trattiamo",
    body: [
      "Dati di account e profilo, come gli identificativi di accesso supportati, l’indirizzo email, il nome visualizzato, l’avatar, la lingua, il fuso orario, le impostazioni e gli eventi relativi al ciclo di vita dell’account.",
      "Dati di gioco e dell’economia necessari per gestire il mondo persistente di TycoonX, tra cui progressione, inventario, saldi di valuta virtuale e Diamonds, società, produzione, attività di mercato, abitazioni, lavori, contratti, prestiti, azioni, transazioni e stato dei diritti VIP.",
      "Dati relativi ad acquisti e diritti digitali, come piattaforma di pagamento, identificativo del prodotto, identificativi di transazione, dati firmati della transazione o della ricevuta, stato di acquisto, attivazione o scadenza, stato di rimborso, revoca o chargeback e cronologia di consegna, ripristino, migrazione o correzione. In genere CK-Labs non riceve dai negozi di piattaforma o dai fornitori di pagamento il numero completo della carta di pagamento.",
      "Dati di sicurezza e antifrode, come registri di accesso e sessione, indirizzo IP, informazioni su dispositivo o piattaforma rese disponibili al Servizio, versione dell’app, diagnostica, schemi di accesso sospetti, convalide di acquisto non valide, indicatori di exploit, segnali antiabuso e registri di moderazione o sicurezza.",
      "Comunicazioni e contenuti della community, come chat pubbliche o private, segnalazioni, contenuti di profilo o società, richieste al Supporto, invii tramite modulo di contatto, segnalazioni di bug, ricorsi, allegati, timestamp, identificativi di mittente o destinatario e stato della moderazione.",
      "Dati di utilizzo e analisi, come uso delle funzionalità, sessioni, retention, prestazioni, eventi di interazione e metriche aggregate sull’economia e sul bilanciamento del gioco.",
    ],
  },
  {
    title: "Da dove provengono i dati",
    body: [
      "Riceviamo dati direttamente da te quando crei o usi un account, giochi a TycoonX, contatti il Supporto, pubblichi contenuti nella community o modifichi le impostazioni. Riceviamo inoltre informazioni limitate dai servizi che scegli o utilizzi con TycoonX, inclusi i fornitori di autenticazione supportati e Apple, Google, Xsolla o un altro fornitore di pagamento autorizzato quando ci trasmettono informazioni su acquisti, diritti digitali, rimborsi, revoche, frodi o stato delle transazioni.",
      "I fornitori di pagamento possono trattare in autonomia dati di carta, dati bancari, indirizzi di fatturazione, informazioni sulla localizzazione fiscale o altri dati di pagamento in base alle proprie informative privacy. CK-Labs riceve normalmente le informazioni di transazione e sui diritti necessarie per consegnare e riconciliare gli acquisti TycoonX, non i dettagli completi dello strumento di pagamento.",
    ],
  },
  {
    title: "Perché trattiamo i dati",
    body: [
      "Trattiamo i dati per creare e proteggere gli account, far funzionare e sincronizzare TycoonX, consegnare e ripristinare acquisti validi, evitare attribuzioni duplicate e frodi, rilevare cheating o exploit, indagare incidenti, correggere stati di gioco non validi, fornire assistenza, moderare le funzioni della community, applicare i Termini di Servizio e gli Standard della community, diagnosticare problemi tecnici, migliorare il Servizio, inviare comunicazioni operative o legali e rispettare obblighi di legge.",
    ],
  },
  {
    title: "Basi giuridiche",
    body: [
      "Quando si applicano il GDPR o norme analoghe, utilizziamo la base giuridica appropriata al singolo trattamento: esecuzione del contratto per gioco, accesso all’account, consegna degli acquisti e assistenza; legittimo interesse per sicurezza, prevenzione delle frodi, integrità del gioco, diagnostica, moderazione proporzionata della community e difesa legale quando tali interessi non prevalgono sui diritti dell’interessato; obblighi di legge per la conservazione di registri richiesta e le richieste delle autorità; consenso quando la legge lo richiede per trattamenti facoltativi.",
      "Il semplice utilizzo di TycoonX non viene considerato consenso per trattamenti che richiedono legalmente il consenso. Quando il consenso è necessario, lo chiediamo separatamente e può essere revocato per il futuro.",
    ],
  },
  {
    title: "Dati necessari per fornire TycoonX",
    body: [
      "Alcuni dati sono necessari per eseguire il contratto TycoonX o elaborare un acquisto. Ad esempio, un identificativo dell’account è necessario per mantenere lo stato persistente del gioco e informazioni valide sulla transazione o sul diritto digitale sono necessarie per consegnare, ripristinare, rimborsare, revocare o riconciliare correttamente contenuti a pagamento. Se le informazioni richieste non vengono fornite o non possono essere verificate, potremmo non riuscire a creare o autenticare un account, consegnare un acquisto, ripristinare un diritto o fornire la funzione interessata.",
      "Le informazioni o i trattamenti facoltativi non necessari al Servizio principale vengono gestiti separatamente quando richiesto, inclusi appositi controlli di consenso ove applicabili.",
    ],
  },
  {
    title: "Come condividiamo i dati",
    body: [
      "Non vendiamo dati personali. Possiamo condividere soltanto quanto ragionevolmente necessario con fornitori che supportano hosting, database, autenticazione, archiviazione, analisi, diagnostica, moderazione, comunicazioni, notifiche o sicurezza; con partner di piattaforma o pagamento come Apple, Google, Xsolla o altri fornitori autorizzati per convalida degli acquisti, ripristino, rimborsi, revoche, frodi e controversie; con altri giocatori quando scegli intenzionalmente di usare funzioni pubbliche o sociali del gioco; con autorità quando richiesto dalla legge; e con soggetti coinvolti in un trasferimento d’azienda legittimo.",
      "Apple, Google, Xsolla, banche, circuiti di carte o altri soggetti coinvolti nei pagamenti possono agire come titolari autonomi per parti del proprio trattamento relativo a pagamenti, frodi, fiscalità, account o piattaforma. A tali trattamenti autonomi si applicano le loro informative privacy e i loro obblighi di legge. TycoonX utilizza attualmente infrastrutture come Supabase per alcune parti del backend e i fornitori di servizi sono soggetti alle garanzie contrattuali e legali applicabili.",
      "Quando le regole di una piattaforma lo richiedono, i terzi con cui CK-Labs condivide dati degli utenti devono offrire per i dati ricevuti da CK-Labs una protezione uguale o equivalente a quella prevista da questa Informativa e dalle regole applicabili della piattaforma.",
    ],
  },
  {
    title: "Contenuti pubblici e privati della community",
    body: [
      "I contenuti che scegli intenzionalmente di rendere pubblici in TycoonX possono essere mostrati ad altri utenti come parte del Servizio. Quando i Termini di Servizio e gli Standard della community consentono di mettere in evidenza contenuti pubblici creati dagli utenti per finalità legate alla community o alla promozione di TycoonX, CK-Labs utilizza una base giuridica appropriata e rispetta il contesto in cui il contenuto è stato condiviso, le impostazioni applicabili, i diritti di terzi e le norme inderogabili. Se per uno specifico uso promozionale è richiesto il consenso, CK-Labs lo chiederà separatamente.",
      "I messaggi diretti privati, le comunicazioni private con il Supporto e le segnalazioni non pubbliche vengono trattati nella misura necessaria per fornire, proteggere, moderare, supportare, investigare o tutelare legalmente il Servizio. Non vengono resi pubblici né utilizzati per promozione pubblica solo perché CK-Labs deve trattarli per queste finalità operative.",
      "L’accesso alle comunicazioni private per moderazione o revisione legale è limitato ai casi in cui il trattamento sia ragionevolmente necessario e lecito, ad esempio per rispondere a una segnalazione, proteggere gli utenti, indagare abusi o frodi, rispettare la legge oppure accertare, esercitare o difendere un diritto in sede giudiziaria.",
    ],
  },
  {
    title: "Trasferimenti internazionali",
    body: [
      "TycoonX e alcuni fornitori possono trattare dati al di fuori del tuo Paese di residenza. Quando si applicano il GDPR o regole analoghe sui trasferimenti, utilizziamo, se richiesto, un meccanismo giuridico appropriato, come una decisione di adeguatezza, le Clausole Contrattuali Standard o un’altra garanzia riconosciuta. I trasferimenti internazionali non si basano semplicemente sull’idea che usare TycoonX equivalga a prestare consenso.",
      "Quando la legge applicabile ti riconosce il diritto di ricevere informazioni sulle garanzie utilizzate per un trasferimento internazionale, puoi contattare il Supporto TycoonX per chiedere ulteriori informazioni o una copia disponibile delle garanzie pertinenti, fatte salve le omissioni consentite dalla legge e gli obblighi di riservatezza verso terzi.",
    ],
  },
  {
    title: "Conservazione dei dati",
    body: [
      "Conserviamo i dati personali soltanto per il tempo ragionevolmente necessario alla finalità per cui sono trattati e per gli ulteriori periodi richiesti o consentiti dalla legge. I dati attivi di account e gioco possono essere conservati mentre l’account è attivo; i registri di assistenza per periodi ragionevoli di follow-up e controversia; i dati relativi ad acquisti, rimborsi, diritti, ripristini, contabilità e fiscalità per i periodi necessari per legge, esecuzione del contratto, prevenzione delle frodi o gestione di controversie; e i registri di sicurezza, antifrode, exploit, moderazione e audit per un periodo ragionevole necessario a proteggere il Servizio, indagare incidenti o difendere diritti.",
      "Le comunicazioni private non vengono conservate a tempo indeterminato soltanto perché sono state esaminate in passato nell’ambito della moderazione. Un’eventuale conservazione più lunga deve avere una distinta necessità lecita, come una controversia in corso, un’indagine di sicurezza, una pretesa legale o un obbligo di legge. I backup possono rimanere per un ciclo di conservazione limitato prima di essere eliminati o sovrascritti. I dati anonimizzati o realmente aggregati possono essere conservati quando non consentono più di identificare una persona.",
    ],
  },
  {
    title: "I tuoi diritti in materia di privacy",
    body: [
      "A seconda della legge applicabile, puoi avere il diritto di accesso, rettifica, cancellazione, limitazione del trattamento, opposizione, portabilità di determinati dati, revoca del consenso quando il trattamento si basa sul consenso e reclamo a un’autorità competente per la protezione dei dati.",
      "Puoi chiedere la cancellazione dell’account direttamente in TycoonX quando disponibile oppure contattare il Supporto TycoonX. Potremmo dover verificare la tua identità. Alcuni registri possono comunque essere conservati quando ciò è richiesto o consentito per finalità legali, fiscali, contabili, di esecuzione del contratto, prevenzione delle frodi, sicurezza, risoluzione di controversie, ripristino di diritti o difesa di pretese legali.",
    ],
  },
  {
    title: "Cancellazione dell’account e diritti a pagamento",
    body: [
      "La cancellazione dell’account TycoonX è distinta da una richiesta di rimborso. Può eliminare definitivamente progressi di gioco collegati all’account, Diamonds, valore consumabile, inventario, dati sociali e altri elementi del profilo. Non crea automaticamente un diritto alla conversione in denaro o a un rimborso.",
      "La cancellazione dell’account TycoonX non elimina né invalida necessariamente un registro di transazione separato di Apple, Google, Xsolla o un altro fornitore di pagamento. Se un Lifetime VIP valido o un altro diritto non consumabile o ripristinabile resta associato all’acquirente secondo le regole della piattaforma, i registri del fornitore, il contratto o norme inderogabili, CK-Labs può conservare il minimo insieme di prove di transazione e di diritto ragionevolmente necessario per verificare e ripristinare tale diritto.",
      "Un successivo ripristino può richiedere una prova ragionevole che lo stesso acquirente controlli il relativo account di piattaforma o di pagamento. Ripristinare un diritto a pagamento non ricrea progressi eliminati, Diamonds consumati, inventario, cronologia o beni trasferiti, salvo obbligo di legge contrario. I diritti al rimborso restano disciplinati dal processo del fornitore di pagamento e dalle norme inderogabili.",
    ],
  },
  {
    title: "Minori e controlli legati all’età",
    body: [
      "TycoonX non è rivolto a bambini al di sotto dell’età minima consentita per un utilizzo autonomo nella giurisdizione dell’utente. Quando la legge richiede il consenso dei genitori, il Servizio non deve essere utilizzato senza la necessaria autorizzazione. Se veniamo a conoscenza del fatto che dati personali sono stati raccolti da un minore in circostanze non conformi alla legge applicabile, possiamo limitare l’account ed eliminare i dati come richiesto.",
      "CK-Labs può trattare informazioni limitate su età, fascia d’età, autorizzazione dei genitori o controlli di età della piattaforma quando ciò sia ragionevolmente necessario per rispettare la legge, applicare restrizioni adeguate all’età sulle funzioni sociali, soddisfare i requisiti di App Store o Google Play oppure proteggere i minori. TycoonX può limitare o disattivare le funzioni della community per determinate fasce d’età anche se il gioco principale resta disponibile.",
    ],
  },
  {
    title: "Sicurezza",
    body: [
      "Utilizziamo misure tecniche e organizzative pensate per proteggere i dati TycoonX, come controlli degli accessi, controlli di autenticazione, trasporto di rete cifrato quando applicabile, monitoraggio, rate limiting, convalida degli acquisti, registri di audit, backup e altre misure adeguate al Servizio.",
      "Nessun servizio online può garantire una sicurezza assoluta. Se ritieni che il tuo account sia stato compromesso o scopri una vulnerabilità di sicurezza, contatta rapidamente il Supporto TycoonX. Ciò non riduce gli obblighi di CK-Labs relativi alle misure di sicurezza richieste dalla legge applicabile.",
    ],
  },
  {
    title: "Sicurezza e moderazione automatizzate",
    body: [
      "TycoonX può utilizzare regole, segnali o sistemi automatizzati per individuare attività sospette, spam, frodi, contenuti abusivi, schemi di exploit, acquisti non validi o altre condotte che possono minacciare utenti o Servizio. I segnali automatizzati possono portare a revisione, limitazioni temporanee, moderazione o indagine.",
      "Quando la legge applicabile limita le decisioni esclusivamente automatizzate che producono effetti giuridici o analogamente significativi, CK-Labs applicherà le garanzie richieste, incluso l’intervento o il riesame umano quando previsto. I diritti relativi a tali decisioni restano invariati.",
    ],
  },
  {
    title: "Link e servizi di terzi",
    body: [
      "TycoonX può collegarsi o interagire con servizi di terzi. Tali soggetti possono trattare dati in base alle proprie informative privacy. CK-Labs non è responsabile delle pratiche privacy indipendenti di terzi salvo nella misura in cui la legge applicabile attribuisca tale responsabilità a CK-Labs.",
    ],
  },
  {
    title: "Modifiche a questa Informativa",
    body: [
      "Possiamo aggiornare questa Informativa per riflettere modifiche a TycoonX, alle pratiche sui dati, ai fornitori, alle misure di sicurezza, alle funzioni della community o ai requisiti legali. Aggiorneremo la data dell’ultimo aggiornamento e forniremo ulteriori comunicazioni quando richiesto. Se una modifica richiede il consenso, chiederemo tale consenso anziché considerare il semplice utilizzo continuato del Servizio come consenso.",
    ],
  },
];

export default function TycoonXItalianPrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white" lang="it">
      <div className="border-b border-white/5 px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium tracking-wide">TycoonX · CK-Labs · Italiano</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Informativa sulla privacy</h1>
          <p className="text-zinc-500 text-sm">Ultimo aggiornamento: 25 agosto 2026</p>
          <p className="text-zinc-400 text-sm leading-relaxed mt-6">
            Questa Informativa spiega come CK-Labs, operatore di TycoonX, tratta i dati personali quando utilizzi le applicazioni mobili o web di TycoonX, i siti, i servizi di supporto, le funzioni della community e gli altri servizi online collegati.
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
          <h2 className="text-white font-semibold mb-3">Titolare del trattamento e contatti</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">CK-Labs è il titolare del trattamento per le attività TycoonX descritte in questa Informativa. Per richieste sulla privacy, cancellazione dell’account, segnalazioni di sicurezza, domande privacy relative agli acquisti, dati di moderazione o altre questioni sulla protezione dei dati, usa il Supporto TycoonX o scrivici via email.</p>
          <div className="flex flex-wrap gap-3">
            <a href="/tyconx-support" className="inline-flex bg-indigo-600 hover:bg-indigo-500 transition text-white text-sm font-medium px-4 py-2 rounded-lg">Supporto TycoonX</a>
            <a href="mailto:cevikdev@gmail.com" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">cevikdev@gmail.com</a>
            <a href="/tycoonx-legal/it/terms" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Termini di Servizio</a>
            <a href="/tycoonx-community-standards" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Standard della community</a>
          </div>
          <p className="text-zinc-600 text-xs leading-relaxed mt-4">Gli ulteriori dati identificativi e di indirizzo dell’operatore richiesti dalla legge devono essere resi disponibili nell’avviso legale o nell’imprint applicabile al Servizio.</p>
        </section>
      </div>
    </main>
  );
}
