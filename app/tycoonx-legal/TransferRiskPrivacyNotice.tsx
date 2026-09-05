'use client';

import { usePathname } from 'next/navigation';

type PrivacyCopy = {
  label: string;
  title: string;
  paragraphs: string[];
};

const copies: Record<string, PrivacyCopy> = {
  en: {
    label: 'Privacy update · 5 September 2026',
    title: 'Economy-integrity, transfer and RMT analysis',
    paragraphs: [
      'To protect the TycoonX economy and enforce the genuine-transaction and real-money-trading rules, CK-Labs may analyze transaction and ledger records, counterparties, transaction chains, repeated transfers, pricing patterns, feature usage, account relationships that are directly observed or reasonably inferred from relevant service data, and related reports or communications where review is reasonably necessary and lawful.',
      'This processing may be used to detect or investigate disguised wealth transfers, account farming, coordinated or circular transfers, exploit proceeds, unauthorized real-money trading, payment abuse, account compromise and other fraud or game-integrity risks, and to correct invalid game state. Where the GDPR applies, the legal basis may include performance of the TycoonX contract where the processing is necessary to operate the persistent multiplayer economy, legitimate interests in fraud prevention, security and game integrity subject to the required necessity and balancing assessment, or a legal obligation where applicable.',
      'A high-value transaction, unusual price, friendship, company membership, shared household or network signal, or one unusual event does not by itself prove abuse. CK-Labs should use proportionate evidence, data minimization and access controls. Private communications are reviewed for this purpose only where reasonably necessary and lawful. Automated signals may flag activity for review, but where applicable law restricts solely automated decisions with legal or similarly significant effects, the required safeguards, including human intervention or review where required, apply.',
      'Relevant anti-fraud and investigation records are retained only for as long as reasonably necessary for security, repeat-abuse detection, disputes, legal claims or legal obligations. Your applicable rights to access, correction, deletion, restriction, objection to processing based on legitimate interests, and safeguards relating to automated decisions remain available as described in this Privacy Policy and mandatory law.',
    ],
  },
  tr: {
    label: 'Gizlilik güncellemesi · 5 Eylül 2026',
    title: 'Ekonomi bütünlüğü, transfer ve RMT analizi',
    paragraphs: [
      'TycoonX ekonomisini korumak ve gerçek işlem ile gerçek para karşılığı ticaret kurallarını uygulamak için CK-Labs; işlem ve muhasebe kayıtlarını, işlem taraflarını, işlem zincirlerini, tekrarlanan transferleri, fiyat örüntülerini, özellik kullanımını, ilgili Hizmet verilerinden doğrudan görülen veya makul biçimde çıkarılabilen hesap ilişkilerini ve incelemenin makul ölçüde gerekli ve hukuka uygun olduğu durumlarda ilgili rapor veya iletişimleri analiz edebilir.',
      'Bu işlemler; gizlenmiş servet aktarımlarını, hesap çiftçiliğini, koordineli veya döngüsel transferleri, açıklarla elde edilmiş değerleri, yetkisiz gerçek para ticaretini, ödeme kötüye kullanımını, hesap ele geçirilmesini ve diğer dolandırıcılık ya da oyun bütünlüğü risklerini tespit etmek veya incelemek ve geçersiz oyun durumunu düzeltmek için kullanılabilir. GDPR uygulanıyorsa hukuki dayanak, kalıcı çok oyunculu ekonominin işletilmesi için gerekli olduğu ölçüde TycoonX sözleşmesinin ifası; gereklilik ve menfaat dengelemesi şartlarına tabi dolandırıcılık önleme, güvenlik ve oyun bütünlüğüne ilişkin meşru menfaatler; veya uygulanabildiğinde yasal yükümlülük olabilir.',
      'Yüksek değerli bir işlem, sıra dışı fiyat, arkadaşlık, aynı şirkette bulunma, ortak hane ya da ağ sinyali veya tek bir sıra dışı olay tek başına kötüye kullanım kanıtı değildir. CK-Labs orantılı kanıt, veri minimizasyonu ve erişim kontrolleri kullanmalıdır. Özel iletişimler bu amaçla yalnızca makul ölçüde gerekli ve hukuka uygun olduğunda incelenir. Otomatik sinyaller inceleme için faaliyet işaretleyebilir; ancak geçerli hukuk hukuki veya benzer ölçüde önemli etkiler doğuran yalnızca otomatik kararlara sınırlama getiriyorsa, gerektiğinde insan müdahalesi veya inceleme dahil zorunlu güvenceler uygulanır.',
      'İlgili dolandırıcılık önleme ve inceleme kayıtları yalnızca güvenlik, tekrarlanan kötüye kullanımın tespiti, uyuşmazlıklar, hukuki talepler veya yasal yükümlülükler için makul ölçüde gerekli olduğu süre boyunca tutulur. Erişim, düzeltme, silme, kısıtlama, meşru menfaate dayalı işlemeye itiraz ve otomatik kararlara ilişkin uygulanabilir haklarınız bu Gizlilik Politikası ve zorunlu hukuk uyarınca devam eder.',
    ],
  },
  de: {
    label: 'Datenschutz-Update · 5. September 2026',
    title: 'Analyse zur Wirtschaftsintegrität, Transfers und RMT',
    paragraphs: [
      'Zum Schutz der TycoonX-Wirtschaft und zur Durchsetzung der Regeln zu echten Transaktionen und Real-Money-Trading kann CK-Labs Transaktions- und Ledgerdaten, Gegenparteien, Transaktionsketten, wiederholte Übertragungen, Preismuster, Funktionsnutzung, aus relevanten Servicedaten unmittelbar erkennbare oder vernünftigerweise ableitbare Kontobeziehungen sowie zugehörige Meldungen oder Kommunikation auswerten, soweit eine Prüfung vernünftigerweise erforderlich und rechtmäßig ist.',
      'Die Verarbeitung kann dazu dienen, verschleierte Vermögensübertragungen, Account-Farming, abgestimmte oder kreisförmige Transfers, Exploit-Erträge, unzulässiges Real-Money-Trading, Zahlungsmissbrauch, Kontoübernahmen und andere Betrugs- oder Spielintegritätsrisiken zu erkennen oder zu untersuchen und ungültige Spielzustände zu korrigieren. Soweit die DSGVO gilt, kann die Rechtsgrundlage die Vertragserfüllung sein, wenn die Verarbeitung für den Betrieb der persistenten Mehrspielerwirtschaft erforderlich ist, ein berechtigtes Interesse an Betrugsprävention, Sicherheit und Spielintegrität nach der erforderlichen Erforderlichkeits- und Interessenabwägung oder, soweit einschlägig, eine rechtliche Verpflichtung.',
      'Eine Transaktion mit hohem Wert, ein ungewöhnlicher Preis, eine Freundschaft, dieselbe Unternehmenszugehörigkeit, ein gemeinsamer Haushalt oder Netzwerksignal oder ein einzelnes ungewöhnliches Ereignis beweist für sich allein keinen Missbrauch. CK-Labs soll verhältnismäßige Belege, Datenminimierung und Zugriffsbeschränkungen einsetzen. Private Kommunikation wird zu diesem Zweck nur geprüft, wenn dies vernünftigerweise erforderlich und rechtmäßig ist. Automatisierte Signale können Aktivitäten zur Prüfung markieren; soweit das anwendbare Recht ausschließlich automatisierte Entscheidungen mit rechtlicher oder ähnlich erheblicher Wirkung beschränkt, gelten die vorgeschriebenen Schutzmaßnahmen einschließlich menschlicher Intervention oder Überprüfung, soweit erforderlich.',
      'Relevante Betrugspräventions- und Untersuchungsdaten werden nur so lange gespeichert, wie dies für Sicherheit, Erkennung wiederholten Missbrauchs, Streitigkeiten, Rechtsansprüche oder gesetzliche Pflichten vernünftigerweise erforderlich ist. Ihre anwendbaren Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch gegen Verarbeitung auf Grundlage berechtigter Interessen sowie Schutzrechte bei automatisierten Entscheidungen bleiben nach dieser Datenschutzerklärung und zwingendem Recht bestehen.',
    ],
  },
  es: {
    label: 'Actualización de privacidad · 5 de septiembre de 2026',
    title: 'Análisis de integridad económica, transferencias y RMT',
    paragraphs: [
      'Para proteger la economía de TycoonX y aplicar las reglas sobre transacciones genuinas y comercio con dinero real, CK-Labs puede analizar registros de transacciones y contabilidad, contrapartes, cadenas de operaciones, transferencias repetidas, patrones de precios, uso de funciones, relaciones entre cuentas observadas directamente o inferidas razonablemente a partir de datos relevantes del Servicio, y reportes o comunicaciones relacionados cuando la revisión sea razonablemente necesaria y lícita.',
      'Este tratamiento puede utilizarse para detectar o investigar transferencias de patrimonio encubiertas, creación de cuentas para obtener ventajas, transferencias coordinadas o circulares, valor procedente de exploits, comercio no autorizado con dinero real, abuso de pagos, cuentas comprometidas y otros riesgos de fraude o de integridad del juego, así como para corregir estados de juego inválidos. Cuando sea aplicable el RGPD, la base jurídica puede ser la ejecución del contrato de TycoonX cuando el tratamiento sea necesario para operar la economía multijugador persistente, intereses legítimos en prevención del fraude, seguridad e integridad del juego sujetos al análisis necesario de necesidad y ponderación, o una obligación legal cuando corresponda.',
      'Una operación de gran valor, un precio inusual, una amistad, pertenecer a la misma empresa, una señal de hogar o red compartida o un único evento extraño no prueban por sí solos un abuso. CK-Labs debe utilizar pruebas proporcionadas, minimización de datos y controles de acceso. Las comunicaciones privadas se revisan con este fin solo cuando sea razonablemente necesario y lícito. Las señales automatizadas pueden marcar actividad para revisión, pero si la ley aplicable limita decisiones exclusivamente automatizadas con efectos jurídicos o similares de importancia, se aplican las salvaguardas exigidas, incluida la intervención o revisión humana cuando proceda.',
      'Los registros pertinentes de prevención del fraude e investigación se conservan solo durante el tiempo razonablemente necesario para seguridad, detección de abusos repetidos, disputas, reclamaciones legales u obligaciones legales. Siguen disponibles los derechos aplicables de acceso, rectificación, supresión, limitación, oposición al tratamiento basado en intereses legítimos y las garantías relativas a decisiones automatizadas descritas en esta Política de Privacidad y en la ley imperativa.',
    ],
  },
  es_MX: {
    label: 'Actualización de privacidad · 5 de septiembre de 2026',
    title: 'Análisis de integridad de la economía, transferencias y RMT',
    paragraphs: [
      'Para proteger la economía de TycoonX y hacer cumplir las reglas de transacciones reales dentro del juego y de comercio con dinero real, CK-Labs puede analizar historiales de transacciones y movimientos, contrapartes, cadenas de operaciones, transferencias repetidas, patrones de precios, uso de funciones, relaciones entre cuentas observadas directamente o inferidas razonablemente a partir de datos relevantes del Servicio, así como reportes o comunicaciones relacionados cuando revisarlos sea razonablemente necesario y legal.',
      'Este tratamiento puede servir para detectar o investigar transferencias encubiertas de riqueza, granjas de cuentas, transferencias coordinadas o circulares, valor obtenido mediante exploits, comercio no autorizado con dinero real, abuso de pagos, cuentas comprometidas y otros riesgos de fraude o integridad del juego, además de corregir estados de juego inválidos. Cuando aplique el RGPD, la base jurídica puede ser la ejecución del contrato de TycoonX cuando el tratamiento sea necesario para operar la economía multijugador persistente, intereses legítimos de prevención de fraude, seguridad e integridad del juego sujetos al análisis requerido de necesidad y ponderación, o una obligación legal cuando corresponda.',
      'Una operación de gran valor, un precio fuera de lo normal, una amistad, pertenecer a la misma empresa, una señal de hogar o red compartida o un solo evento inusual no demuestran por sí solos abuso. CK-Labs debe usar evidencia proporcional, minimización de datos y controles de acceso. Las comunicaciones privadas se revisan para este fin únicamente cuando sea razonablemente necesario y legal. Las señales automatizadas pueden marcar actividad para revisión, pero cuando la ley limite decisiones exclusivamente automatizadas con efectos jurídicos o de importancia similar, se aplicarán las salvaguardas requeridas, incluida intervención o revisión humana cuando corresponda.',
      'Los registros relevantes de prevención de fraude e investigación se conservan únicamente durante el tiempo razonablemente necesario para seguridad, detección de abuso repetido, controversias, reclamaciones legales u obligaciones legales. Tus derechos aplicables de acceso, rectificación, eliminación, limitación, oposición al tratamiento basado en intereses legítimos y las garantías sobre decisiones automatizadas siguen disponibles conforme a esta Política de Privacidad y la legislación obligatoria.',
    ],
  },
  fr: {
    label: 'Mise à jour de confidentialité · 5 septembre 2026',
    title: 'Analyse de l’intégrité économique, des transferts et du RMT',
    paragraphs: [
      'Afin de protéger l’économie de TycoonX et d’appliquer les règles relatives aux transactions réelles et au commerce contre de l’argent réel, CK-Labs peut analyser les registres de transactions et de compte, les contreparties, les chaînes de transactions, les transferts répétés, les schémas de prix, l’utilisation des fonctionnalités, les relations entre comptes directement observées ou raisonnablement déduites de données pertinentes du Service, ainsi que les signalements ou communications connexes lorsque leur examen est raisonnablement nécessaire et licite.',
      'Ce traitement peut servir à détecter ou enquêter sur des transferts de richesse dissimulés, le farming de comptes, des transferts coordonnés ou circulaires, des valeurs issues d’exploits, du commerce non autorisé contre de l’argent réel, des abus de paiement, des compromissions de comptes et d’autres risques de fraude ou d’atteinte à l’intégrité du jeu, ainsi qu’à corriger un état de jeu invalide. Lorsque le RGPD s’applique, la base juridique peut être l’exécution du contrat TycoonX lorsque le traitement est nécessaire au fonctionnement de l’économie multijoueur persistante, l’intérêt légitime à prévenir la fraude et à assurer la sécurité et l’intégrité du jeu sous réserve de l’analyse nécessaire de nécessité et de mise en balance, ou une obligation légale lorsqu’elle s’applique.',
      'Une transaction de grande valeur, un prix inhabituel, une amitié, l’appartenance à la même entreprise, un signal de foyer ou de réseau partagé ou un seul événement inhabituel ne prouvent pas à eux seuls un abus. CK-Labs doit utiliser des éléments proportionnés, minimiser les données et limiter les accès. Les communications privées ne sont examinées à cette fin que lorsque cela est raisonnablement nécessaire et licite. Des signaux automatisés peuvent déclencher un examen, mais lorsque la loi applicable limite les décisions exclusivement automatisées produisant des effets juridiques ou similaires importants, les garanties requises, notamment une intervention ou un examen humain lorsque nécessaire, s’appliquent.',
      'Les données pertinentes de prévention de la fraude et d’enquête ne sont conservées que pendant la durée raisonnablement nécessaire à la sécurité, à la détection d’abus répétés, aux litiges, aux recours juridiques ou aux obligations légales. Vos droits applicables d’accès, de rectification, d’effacement, de limitation, d’opposition aux traitements fondés sur l’intérêt légitime et les garanties liées aux décisions automatisées restent disponibles conformément à la présente Politique de confidentialité et au droit impératif.',
    ],
  },
  fr_CA: {
    label: 'Mise à jour de confidentialité · 5 septembre 2026',
    title: 'Analyse de l’intégrité de l’économie, des transferts et du RMT',
    paragraphs: [
      'Pour protéger l’économie de TycoonX et faire respecter les règles sur les transactions véritables et le commerce contre de l’argent réel, CK-Labs peut analyser les historiques de transactions et de compte, les contreparties, les chaînes de transactions, les transferts répétés, les tendances de prix, l’utilisation des fonctions, les liens entre comptes observés directement ou raisonnablement déduits de données pertinentes du Service, ainsi que les signalements ou communications connexes lorsque leur examen est raisonnablement nécessaire et légal.',
      'Ce traitement peut servir à détecter ou examiner des transferts de richesse déguisés, le farming de comptes, des transferts coordonnés ou circulaires, des valeurs provenant d’exploits, du commerce non autorisé contre de l’argent réel, des abus de paiement, des comptes compromis et d’autres risques de fraude ou d’intégrité du jeu, et à corriger un état de jeu invalide. Lorsque le RGPD s’applique, la base juridique peut être l’exécution du contrat TycoonX si le traitement est nécessaire au fonctionnement de l’économie multijoueur persistante, l’intérêt légitime à prévenir la fraude et à protéger la sécurité et l’intégrité du jeu sous réserve de l’analyse requise de nécessité et de mise en balance, ou une obligation légale lorsqu’elle s’applique.',
      'Une transaction de grande valeur, un prix inhabituel, une amitié, l’appartenance à la même entreprise, un signal de foyer ou de réseau partagé ou un seul événement inhabituel ne constituent pas, à eux seuls, une preuve d’abus. CK-Labs doit utiliser des éléments proportionnés, limiter les données et contrôler les accès. Les communications privées ne sont examinées à cette fin que lorsque cela est raisonnablement nécessaire et légal. Des signaux automatisés peuvent signaler une activité aux fins d’examen, mais lorsque la loi applicable limite les décisions entièrement automatisées ayant des effets juridiques ou similaires importants, les garanties exigées, y compris l’intervention ou l’examen humain lorsque requis, s’appliquent.',
      'Les dossiers pertinents de prévention de la fraude et d’enquête ne sont conservés que pendant la période raisonnablement nécessaire à la sécurité, à la détection d’abus répétés, aux différends, aux recours judiciaires ou aux obligations légales. Vos droits applicables d’accès, de rectification, d’effacement, de limitation, d’opposition au traitement fondé sur l’intérêt légitime et les garanties concernant les décisions automatisées demeurent disponibles selon la présente Politique de confidentialité et le droit obligatoire.',
    ],
  },
  it: {
    label: 'Aggiornamento privacy · 5 settembre 2026',
    title: 'Analisi dell’integrità economica, dei trasferimenti e del RMT',
    paragraphs: [
      'Per proteggere l’economia di TycoonX e applicare le regole sulle transazioni genuine e sul commercio con denaro reale, CK-Labs può analizzare registri di transazioni e contabili, controparti, catene di transazioni, trasferimenti ripetuti, schemi di prezzo, uso delle funzionalità, relazioni tra account osservate direttamente o ragionevolmente dedotte da dati pertinenti del Servizio, nonché segnalazioni o comunicazioni collegate quando la loro revisione sia ragionevolmente necessaria e lecita.',
      'Il trattamento può essere utilizzato per rilevare o indagare trasferimenti di ricchezza mascherati, account farming, trasferimenti coordinati o circolari, valore derivante da exploit, commercio non autorizzato con denaro reale, abusi di pagamento, compromissioni di account e altri rischi di frode o integrità del gioco, oltre che per correggere stati di gioco non validi. Quando si applica il GDPR, la base giuridica può essere l’esecuzione del contratto TycoonX se il trattamento è necessario per gestire l’economia multigiocatore persistente, il legittimo interesse alla prevenzione delle frodi, alla sicurezza e all’integrità del gioco soggetto alla necessaria valutazione di necessità e bilanciamento, oppure un obbligo legale ove applicabile.',
      'Una transazione di alto valore, un prezzo insolito, un’amicizia, l’appartenenza alla stessa azienda, un segnale di nucleo familiare o rete condivisa o un singolo evento insolito non provano da soli un abuso. CK-Labs deve usare elementi proporzionati, minimizzazione dei dati e controlli di accesso. Le comunicazioni private vengono esaminate a questo scopo solo quando ragionevolmente necessario e lecito. I segnali automatizzati possono contrassegnare attività da sottoporre a revisione, ma quando la legge limita decisioni esclusivamente automatizzate con effetti giuridici o analogamente significativi si applicano le garanzie richieste, compreso l’intervento o riesame umano ove previsto.',
      'I registri pertinenti di prevenzione delle frodi e indagine sono conservati solo per il tempo ragionevolmente necessario per sicurezza, rilevamento di abusi ripetuti, controversie, pretese legali o obblighi di legge. Restano disponibili i diritti applicabili di accesso, rettifica, cancellazione, limitazione, opposizione al trattamento basato sul legittimo interesse e le garanzie relative alle decisioni automatizzate previste dalla presente Informativa privacy e dalla legge inderogabile.',
    ],
  },
  pt: {
    label: 'Atualização de privacidade · 5 de setembro de 2026',
    title: 'Análise de integridade económica, transferências e RMT',
    paragraphs: [
      'Para proteger a economia do TycoonX e aplicar as regras sobre transações genuínas e comércio por dinheiro real, a CK-Labs pode analisar registos de transações e de conta, contrapartes, cadeias de transações, transferências repetidas, padrões de preços, utilização de funcionalidades, relações entre contas observadas diretamente ou razoavelmente inferidas a partir de dados relevantes do Serviço, bem como denúncias ou comunicações relacionadas quando a análise seja razoavelmente necessária e lícita.',
      'Este tratamento pode ser utilizado para detetar ou investigar transferências de património dissimuladas, criação de contas para obtenção de vantagens, transferências coordenadas ou circulares, valor proveniente de exploits, comércio não autorizado por dinheiro real, abuso de pagamentos, comprometimento de contas e outros riscos de fraude ou integridade do jogo, bem como para corrigir estados de jogo inválidos. Quando o RGPD se aplica, a base jurídica pode incluir a execução do contrato TycoonX quando o tratamento seja necessário para operar a economia multijogador persistente, interesses legítimos na prevenção da fraude, segurança e integridade do jogo sujeitos à necessária avaliação de necessidade e ponderação, ou uma obrigação legal quando aplicável.',
      'Uma transação de elevado valor, um preço invulgar, uma amizade, pertença à mesma empresa, um sinal de agregado familiar ou rede partilhada ou um único evento invulgar não provam, por si só, abuso. A CK-Labs deve utilizar elementos proporcionados, minimização de dados e controlos de acesso. As comunicações privadas são analisadas para este fim apenas quando tal seja razoavelmente necessário e lícito. Sinais automatizados podem assinalar atividade para análise, mas quando a lei aplicável limitar decisões exclusivamente automatizadas com efeitos jurídicos ou de importância semelhante aplicam-se as salvaguardas exigidas, incluindo intervenção ou revisão humana quando necessária.',
      'Os registos relevantes de prevenção da fraude e investigação são conservados apenas durante o período razoavelmente necessário para segurança, deteção de abuso repetido, litígios, pretensões jurídicas ou obrigações legais. Os direitos aplicáveis de acesso, retificação, apagamento, limitação, oposição ao tratamento baseado em interesses legítimos e as salvaguardas relativas a decisões automatizadas continuam disponíveis nos termos desta Política de Privacidade e da lei imperativa.',
    ],
  },
  pt_BR: {
    label: 'Atualização de privacidade · 5 de setembro de 2026',
    title: 'Análise de integridade da economia, transferências e RMT',
    paragraphs: [
      'Para proteger a economia do TycoonX e aplicar as regras de transações legítimas e comércio com dinheiro real, a CK-Labs pode analisar registros de transações e movimentações, contrapartes, cadeias de transações, transferências repetidas, padrões de preço, uso de recursos, relações entre contas observadas diretamente ou inferidas de forma razoável a partir de dados relevantes do Serviço, além de denúncias ou comunicações relacionadas quando a análise for razoavelmente necessária e lícita.',
      'Esse tratamento pode ser usado para detectar ou investigar transferências disfarçadas de patrimônio, farming de contas, transferências coordenadas ou circulares, valores obtidos por exploits, comércio não autorizado com dinheiro real, abuso de pagamentos, contas comprometidas e outros riscos de fraude ou integridade do jogo, além de corrigir estados de jogo inválidos. Quando o GDPR for aplicável, a base jurídica pode incluir a execução do contrato TycoonX quando o tratamento for necessário para operar a economia multijogador persistente, interesses legítimos de prevenção a fraudes, segurança e integridade do jogo sujeitos à avaliação exigida de necessidade e ponderação, ou uma obrigação legal quando aplicável.',
      'Uma transação de alto valor, um preço fora do comum, uma amizade, participação na mesma empresa, um sinal de residência ou rede compartilhada ou um único evento incomum não comprovam abuso por si só. A CK-Labs deve usar evidências proporcionais, minimização de dados e controles de acesso. Comunicações privadas são analisadas para esse fim apenas quando isso for razoavelmente necessário e lícito. Sinais automatizados podem marcar atividades para revisão, mas, quando a lei limitar decisões exclusivamente automatizadas com efeitos jurídicos ou de importância semelhante, serão aplicadas as salvaguardas exigidas, incluindo intervenção ou revisão humana quando necessário.',
      'Os registros relevantes de prevenção a fraudes e investigação são mantidos apenas pelo período razoavelmente necessário para segurança, detecção de abuso recorrente, disputas, reivindicações legais ou obrigações legais. Seus direitos aplicáveis de acesso, correção, exclusão, restrição, oposição ao tratamento baseado em interesses legítimos e as garantias relativas a decisões automatizadas permanecem disponíveis conforme esta Política de Privacidade e a legislação obrigatória.',
    ],
  },
  ru: {
    label: 'Обновление конфиденциальности · 5 сентября 2026 г.',
    title: 'Анализ целостности экономики, переводов и RMT',
    paragraphs: [
      'Для защиты экономики TycoonX и применения правил о реальных игровых сделках и торговле за реальные деньги CK-Labs может анализировать записи транзакций и учёта, контрагентов, цепочки операций, повторяющиеся переводы, ценовые модели, использование функций, связи между аккаунтами, которые прямо наблюдаются или обоснованно выводятся из относящихся к Сервису данных, а также связанные жалобы или сообщения, когда такая проверка разумно необходима и законна.',
      'Такая обработка может использоваться для выявления или расследования замаскированных переводов игрового богатства, фарминга аккаунтов, согласованных или циклических переводов, ценностей, полученных через эксплойты, неразрешённой торговли за реальные деньги, злоупотреблений платежами, компрометации аккаунтов и других рисков мошенничества или нарушения целостности игры, а также для исправления недействительного игрового состояния. Если применяется GDPR, правовым основанием может быть исполнение договора TycoonX, когда обработка необходима для работы постоянной многопользовательской экономики, законные интересы в предотвращении мошенничества, безопасности и целостности игры при необходимой оценке необходимости и баланса интересов, либо юридическая обязанность, когда она применима.',
      'Транзакция на большую сумму, необычная цена, дружба, участие в одной компании, признак общего домохозяйства или сети либо одно необычное событие сами по себе не доказывают злоупотребление. CK-Labs должна использовать соразмерные доказательства, минимизацию данных и контроль доступа. Частные сообщения проверяются для этой цели только когда это разумно необходимо и законно. Автоматические сигналы могут помечать активность для проверки, но если применимое право ограничивает решения, основанные исключительно на автоматической обработке и имеющие юридические или аналогично существенные последствия, применяются требуемые гарантии, включая участие или проверку человеком, когда это требуется.',
      'Соответствующие записи о предотвращении мошенничества и расследованиях хранятся только столько, сколько разумно необходимо для безопасности, выявления повторных злоупотреблений, споров, юридических требований или соблюдения закона. Применимые права на доступ, исправление, удаление, ограничение, возражение против обработки на основании законного интереса и гарантии в отношении автоматизированных решений сохраняются согласно этой Политике конфиденциальности и обязательному праву.',
    ],
  },
  ja: {
    label: 'プライバシー更新 · 2026年9月5日',
    title: 'ゲーム内経済の健全性・送金・RMTに関する分析',
    paragraphs: [
      'TycoonXのゲーム内経済を保護し、真正な取引およびリアルマネートレードに関するルールを適用するため、CK-Labsは、取引・台帳記録、取引相手、取引の連鎖、反復する移転、価格パターン、機能の利用状況、関連するサービスデータから直接確認できる、または合理的に推測できるアカウント間の関係、ならびに確認が合理的に必要かつ適法である場合の関連する報告や通信内容を分析することがあります。',
      'この処理は、資産移転の偽装、アカウントファーミング、協調的または循環的な移転、エクスプロイト由来の価値、無許可のリアルマネートレード、決済の不正利用、アカウント侵害その他の詐欺・ゲーム健全性リスクの検知または調査、ならびに無効なゲーム状態の修正に利用されることがあります。GDPRが適用される場合、法的根拠には、永続的なマルチプレイヤー経済の運営に必要な範囲でのTycoonX契約の履行、必要性および利益衡量の審査を前提とする詐欺防止・セキュリティ・ゲーム健全性に関する正当な利益、または該当する法的義務が含まれます。',
      '高額な取引、通常と異なる価格、友人関係、同じ会社への所属、同一世帯やネットワークを示すシグナル、または単一の異常な出来事だけで不正利用が証明されるわけではありません。CK-Labsは、比例した証拠、データ最小化、アクセス制御を用います。非公開の通信は、この目的のために合理的に必要かつ適法な場合に限り確認されます。自動シグナルが確認対象を抽出することがありますが、法的効果または同様に重大な効果をもつ完全自動の決定を適用法が制限する場合、必要に応じた人による関与または審査を含む所定の保護措置が適用されます。',
      '関連する不正防止・調査記録は、セキュリティ、反復する不正利用の検知、紛争、法的請求または法的義務のために合理的に必要な期間に限り保持されます。アクセス、訂正、削除、処理制限、正当な利益に基づく処理への異議申立て、および自動決定に関する適用可能な権利は、本プライバシーポリシーおよび強行法規に従い引き続き利用できます。',
    ],
  },
  ko: {
    label: '개인정보 처리방침 업데이트 · 2026년 9월 5일',
    title: '게임 경제 무결성, 이전 및 RMT 분석',
    paragraphs: [
      'TycoonX 경제를 보호하고 진정한 거래 및 현금 거래(RMT) 규칙을 집행하기 위해 CK-Labs는 거래 및 원장 기록, 거래 상대방, 거래 연결 경로, 반복 이전, 가격 패턴, 기능 사용 기록, 관련 서비스 데이터에서 직접 확인되거나 합리적으로 추론되는 계정 간 관계, 그리고 검토가 합리적으로 필요하고 적법한 경우 관련 신고나 커뮤니케이션을 분석할 수 있습니다.',
      '이 처리는 위장된 자산 이전, 계정 파밍, 공모 또는 순환 이전, 익스플로잇으로 생성된 가치, 무단 현금 거래, 결제 악용, 계정 탈취 및 기타 사기 또는 게임 무결성 위험을 탐지하거나 조사하고 잘못된 게임 상태를 바로잡는 데 사용될 수 있습니다. GDPR이 적용되는 경우 법적 근거에는 지속형 멀티플레이 경제 운영에 필요한 범위의 TycoonX 계약 이행, 필요한 필요성 및 이익형량을 전제로 한 사기 방지·보안·게임 무결성에 관한 정당한 이익, 또는 해당되는 법적 의무가 포함될 수 있습니다.',
      '고액 거래, 이례적인 가격, 친분, 같은 회사 소속, 동일 가구나 네트워크를 시사하는 신호, 또는 단 한 번의 이상한 사건만으로는 악용이 입증되지 않습니다. CK-Labs는 비례적인 증거, 데이터 최소화 및 접근 통제를 사용해야 합니다. 비공개 커뮤니케이션은 이 목적상 합리적으로 필요하고 적법한 경우에만 검토됩니다. 자동 신호가 검토 대상을 표시할 수 있지만, 법적 효과 또는 이에 준하는 중대한 효과를 만드는 완전 자동 결정을 관련 법률이 제한하는 경우 필요한 사람의 개입 또는 검토를 포함한 법정 보호조치가 적용됩니다.',
      '관련 사기 방지 및 조사 기록은 보안, 반복 악용 탐지, 분쟁, 법적 청구 또는 법적 의무를 위해 합리적으로 필요한 기간에만 보관됩니다. 접근, 정정, 삭제, 처리 제한, 정당한 이익에 기반한 처리에 대한 이의 제기 및 자동화된 결정 관련 보호에 관한 적용 가능한 권리는 본 개인정보 처리방침과 강행법에 따라 계속 보장됩니다.',
    ],
  },
  zh: {
    label: '隐私更新 · 2026年9月5日',
    title: '游戏经济完整性、转移与现实货币交易分析',
    paragraphs: [
      '为保护 TycoonX 的游戏经济并执行真实交易及现实货币交易规则，CK-Labs 可能分析交易和账本记录、交易对手、交易链、重复转移、价格模式、功能使用情况、从相关服务数据中直接观察到或可合理推断的账户关系，以及在审查具有合理必要性并符合法律要求时的相关举报或通信内容。',
      '此类处理可用于发现或调查伪装的财富转移、账户刷取、协同或循环转移、漏洞产生的价值、未经授权的现实货币交易、支付滥用、账户被盗用以及其他欺诈或游戏完整性风险，并用于纠正无效游戏状态。在适用 GDPR 时，法律依据可包括：在运营持续多人经济所必需的范围内履行 TycoonX 合同；在完成必要性和利益衡量后，为防止欺诈、保障安全和维护游戏完整性所追求的合法利益；或在适用时履行法律义务。',
      '高额交易、异常价格、朋友关系、同一公司成员身份、共享家庭或网络信号，或单次异常事件，本身均不足以证明存在滥用。CK-Labs 应采用相称证据、数据最小化和访问控制。私人通信仅在为该目的具有合理必要性且合法时才会被审查。自动化信号可将活动标记为待审查，但如果适用法律限制会产生法律效果或类似重大影响的纯自动化决定，则将适用所要求的保障措施，包括在需要时进行人工介入或审查。',
      '相关反欺诈和调查记录仅在为安全、识别重复滥用、处理争议、提出或抗辩法律请求或履行法律义务而合理必要的期限内保留。您依本隐私政策和强制性法律享有的访问、更正、删除、限制处理、反对基于合法利益的处理以及自动化决定相关保障仍然有效。',
    ],
  },
  zh_Hans: {
    label: '隐私更新 · 2026年9月5日',
    title: '游戏经济完整性、资产转移与现实货币交易分析',
    paragraphs: [
      '为保护 TycoonX 游戏经济并执行真实交易及现实货币交易规则，CK-Labs 可能分析交易和账本记录、交易对手、交易链、重复转移、价格模式、功能使用情况、从相关服务数据中直接观察到或可合理推断的账户关系，以及在审查具有合理必要性并符合法律要求时的相关举报或通信。',
      '此类处理可用于发现或调查伪装的财富转移、账户刷取、协同或循环转移、漏洞产生的价值、未经授权的现实货币交易、支付滥用、账户被盗用及其他欺诈或游戏完整性风险，并用于纠正无效游戏状态。在适用 GDPR 时，法律依据可包括：在运营持续多人经济所必需的范围内履行 TycoonX 合同；在完成所需的必要性和利益衡量后，为防止欺诈、保障安全和维护游戏完整性所追求的合法利益；或在适用时履行法律义务。',
      '高额交易、异常价格、朋友关系、同一公司成员身份、共享家庭或网络信号，或单次异常事件，本身都不足以证明存在滥用。CK-Labs 应使用相称证据、数据最小化和访问控制。私人通信仅在为该目的具有合理必要性且合法时才会被审查。自动化信号可将活动标记为待审查，但如果适用法律限制会产生法律效果或类似重大影响的纯自动化决定，则将适用所要求的保障措施，包括在需要时进行人工介入或审查。',
      '相关反欺诈和调查记录仅在为安全、识别重复滥用、处理争议、法律请求或履行法律义务而合理必要的期限内保留。您依本隐私政策和强制性法律享有的访问、更正、删除、限制处理、反对基于合法利益的处理以及自动化决定相关保障仍然有效。',
    ],
  },
  zh_Hant: {
    label: '隱私更新 · 2026年9月5日',
    title: '遊戲經濟完整性、資產移轉與現實貨幣交易分析',
    paragraphs: [
      '為保護 TycoonX 遊戲經濟並執行真實交易及現實貨幣交易規則，CK-Labs 可能分析交易與帳本紀錄、交易對手、交易鏈、重複移轉、價格模式、功能使用情形、從相關服務資料中直接觀察到或可合理推斷的帳戶關係，以及在審查具有合理必要性並符合法律要求時的相關檢舉或通訊。',
      '此類處理可用於發現或調查偽裝的財富移轉、帳戶農場、協同或循環移轉、漏洞產生的價值、未經授權的現實貨幣交易、付款濫用、帳戶遭入侵及其他詐欺或遊戲完整性風險，並用於修正無效的遊戲狀態。在適用 GDPR 時，法律依據可包括：在營運持續多人經濟所必要的範圍內履行 TycoonX 契約；在完成所需的必要性與利益衡量後，為防止詐欺、維護安全及遊戲完整性所追求的合法利益；或在適用時履行法律義務。',
      '高額交易、異常價格、朋友關係、同一公司成員身分、共享家庭或網路訊號，或單一異常事件，本身都不足以證明存在濫用。CK-Labs 應採用相稱的證據、資料最小化與存取控制。私人通訊僅在為此目的具有合理必要性且合法時才會被審查。自動化訊號可以將活動標記為待審查，但若適用法律限制會產生法律效果或類似重大影響的純自動化決定，則應適用法定保障，包括在需要時由人員介入或審查。',
      '相關反詐欺與調查紀錄僅在為安全、辨識重複濫用、處理爭議、法律請求或履行法律義務而合理必要的期間內保存。您依本隱私政策及強制性法律享有的存取、更正、刪除、限制處理、反對基於合法利益的處理，以及自動化決定相關保障仍然有效。',
    ],
  },
  ar: {
    label: 'تحديث الخصوصية · 5 سبتمبر 2026',
    title: 'تحليل سلامة اقتصاد اللعبة والتحويلات والتداول مقابل أموال حقيقية',
    paragraphs: [
      'لحماية اقتصاد TycoonX وتطبيق قواعد المعاملات الحقيقية والتداول مقابل أموال حقيقية، يجوز لـ CK-Labs تحليل سجلات المعاملات والدفاتر، والأطراف المقابلة، وسلاسل المعاملات، والتحويلات المتكررة، وأنماط الأسعار، واستخدام الميزات، والعلاقات بين الحسابات التي تظهر مباشرة أو يمكن استنتاجها بشكل معقول من بيانات الخدمة ذات الصلة، وكذلك البلاغات أو المراسلات المرتبطة عندما تكون مراجعتها ضرورية بشكل معقول ومشروعة.',
      'قد تُستخدم هذه المعالجة لاكتشاف أو التحقيق في تحويلات الثروة المموهة، وإنشاء الحسابات بغرض جمع المزايا، والتحويلات المنسقة أو الدائرية، والقيمة الناتجة عن استغلال الثغرات، والتداول غير المصرح به مقابل أموال حقيقية، وإساءة استخدام المدفوعات، واختراق الحسابات، وغير ذلك من مخاطر الاحتيال أو المساس بسلامة اللعبة، وكذلك لتصحيح حالة لعبة غير صالحة. وعندما تنطبق اللائحة العامة لحماية البيانات GDPR، فقد يكون الأساس القانوني تنفيذ عقد TycoonX عندما تكون المعالجة ضرورية لتشغيل الاقتصاد المستمر متعدد اللاعبين، أو المصالح المشروعة في منع الاحتيال والأمن وسلامة اللعبة مع إجراء تقييم الضرورة والموازنة المطلوب، أو التزام قانوني عند انطباقه.',
      'لا تُثبت معاملة مرتفعة القيمة أو سعر غير معتاد أو صداقة أو عضوية في الشركة نفسها أو إشارة إلى أسرة أو شبكة مشتركة أو واقعة غير معتادة واحدة، بمفردها، وجود إساءة استخدام. ينبغي لـ CK-Labs استخدام أدلة متناسبة وتقليل البيانات وضوابط الوصول. ولا تُراجع المراسلات الخاصة لهذا الغرض إلا عندما يكون ذلك ضرورياً بشكل معقول ومشروعاً. وقد تُستخدم إشارات آلية لوضع نشاط للمراجعة، ولكن إذا كان القانون المعمول به يقيّد القرارات المؤتمتة بالكامل التي تُحدث آثاراً قانونية أو آثاراً مماثلة ذات أهمية، فتُطبق الضمانات المطلوبة، بما في ذلك التدخل أو المراجعة البشرية عند اللزوم.',
      'لا تُحتفظ بسجلات منع الاحتيال والتحقيق ذات الصلة إلا للمدة الضرورية بشكل معقول للأمن أو اكتشاف الإساءة المتكررة أو النزاعات أو المطالبات القانونية أو الالتزامات القانونية. وتظل حقوقك المنطبقة في الوصول والتصحيح والحذف والتقييد والاعتراض على المعالجة القائمة على المصالح المشروعة والضمانات المتعلقة بالقرارات المؤتمتة متاحة وفقاً لسياسة الخصوصية هذه والقانون الإلزامي.',
    ],
  },
  nl: {
    label: 'Privacy-update · 5 september 2026',
    title: 'Analyse van economie-integriteit, overdrachten en RMT',
    paragraphs: [
      'Om de TycoonX-economie te beschermen en de regels voor echte transacties en handel tegen echt geld toe te passen, kan CK-Labs transactie- en grootboekgegevens, tegenpartijen, transactieketens, herhaalde overdrachten, prijspatronen, functiegebruik, accountrelaties die rechtstreeks zichtbaar zijn of redelijkerwijs uit relevante dienstgegevens kunnen worden afgeleid, en bijbehorende meldingen of communicatie analyseren wanneer beoordeling redelijkerwijs noodzakelijk en rechtmatig is.',
      'Deze verwerking kan worden gebruikt om verhulde vermogensoverdrachten, accountfarming, gecoördineerde of circulaire overdrachten, waarde uit exploits, ongeoorloofde handel tegen echt geld, betalingsmisbruik, accountcompromittering en andere fraude- of spelintegriteitsrisico’s te detecteren of onderzoeken en om ongeldige spelstatus te corrigeren. Waar de AVG geldt, kan de rechtsgrond bestaan uit uitvoering van de TycoonX-overeenkomst wanneer de verwerking noodzakelijk is om de persistente multiplayer-economie te laten functioneren, gerechtvaardigde belangen bij fraudepreventie, beveiliging en spelintegriteit onder de vereiste noodzakelijkheidstoets en belangenafweging, of een wettelijke verplichting waar van toepassing.',
      'Een transactie met hoge waarde, een ongebruikelijke prijs, vriendschap, lidmaatschap van hetzelfde bedrijf, een gedeeld huishouden- of netwerksignaal of één ongebruikelijke gebeurtenis bewijst op zichzelf geen misbruik. CK-Labs moet proportioneel bewijs, gegevensminimalisatie en toegangscontroles gebruiken. Privécommunicatie wordt voor dit doel alleen beoordeeld wanneer dat redelijkerwijs noodzakelijk en rechtmatig is. Geautomatiseerde signalen kunnen activiteit markeren voor beoordeling, maar waar toepasselijk recht uitsluitend geautomatiseerde beslissingen met juridische of vergelijkbaar ingrijpende gevolgen beperkt, gelden de vereiste waarborgen, waaronder menselijke tussenkomst of beoordeling waar nodig.',
      'Relevante fraudepreventie- en onderzoeksgegevens worden alleen bewaard zolang dat redelijkerwijs nodig is voor beveiliging, detectie van herhaald misbruik, geschillen, rechtsvorderingen of wettelijke verplichtingen. Uw toepasselijke rechten op inzage, rectificatie, verwijdering, beperking, bezwaar tegen verwerking op basis van gerechtvaardigde belangen en waarborgen rond geautomatiseerde beslissingen blijven beschikbaar volgens dit Privacybeleid en dwingend recht.',
    ],
  },
  sv: {
    label: 'Integritetsuppdatering · 5 september 2026',
    title: 'Analys av ekonomiintegritet, överföringar och RMT',
    paragraphs: [
      'För att skydda TycoonX-ekonomin och tillämpa reglerna om genuina transaktioner och handel mot riktiga pengar kan CK-Labs analysera transaktions- och huvudboksuppgifter, motparter, transaktionskedjor, upprepade överföringar, prismönster, funktionsanvändning, kontorelationer som observeras direkt eller rimligen kan härledas ur relevanta tjänstedata samt relaterade rapporter eller meddelanden när granskning är rimligen nödvändig och laglig.',
      'Behandlingen kan användas för att upptäcka eller utreda dolda förmögenhetsöverföringar, kontofarming, samordnade eller cirkulära överföringar, värde från exploits, otillåten handel mot riktiga pengar, betalningsmissbruk, komprometterade konton och andra bedrägeri- eller spelintegritetsrisker samt för att rätta ogiltigt spelläge. När GDPR gäller kan den rättsliga grunden vara fullgörande av TycoonX-avtalet när behandlingen är nödvändig för den bestående flerspelarekonomin, berättigade intressen av bedrägeriförebyggande, säkerhet och spelintegritet efter den nödvändiga nödvändighets- och intresseavvägningen, eller en rättslig förpliktelse där sådan gäller.',
      'En transaktion med högt värde, ett ovanligt pris, vänskap, medlemskap i samma företag, en signal om gemensamt hushåll eller nätverk eller en enskild ovanlig händelse bevisar inte i sig missbruk. CK-Labs ska använda proportionerliga bevis, uppgiftsminimering och åtkomstkontroller. Privat kommunikation granskas för detta ändamål endast när det är rimligen nödvändigt och lagligt. Automatiserade signaler kan markera aktivitet för granskning, men där tillämplig lag begränsar helt automatiserade beslut med rättsliga eller liknande betydande effekter gäller de föreskrivna skyddsåtgärderna, inklusive mänskligt ingripande eller granskning när det krävs.',
      'Relevanta uppgifter om bedrägeriförebyggande och utredningar sparas endast så länge det är rimligen nödvändigt för säkerhet, upptäckt av upprepat missbruk, tvister, rättsliga anspråk eller lagkrav. Dina tillämpliga rättigheter till tillgång, rättelse, radering, begränsning, invändning mot behandling som bygger på berättigat intresse och skydd vid automatiserade beslut gäller fortsatt enligt denna integritetspolicy och tvingande lag.',
    ],
  },
  nb: {
    label: 'Personvernoppdatering · 5. september 2026',
    title: 'Analyse av økonomiintegritet, overføringer og RMT',
    paragraphs: [
      'For å beskytte TycoonX-økonomien og håndheve reglene om reelle transaksjoner og handel mot ekte penger kan CK-Labs analysere transaksjons- og hovedbokdata, motparter, transaksjonskjeder, gjentatte overføringer, prismønstre, bruk av funksjoner, kontorelasjoner som observeres direkte eller med rimelighet kan utledes av relevante tjenestedata, samt tilknyttede rapporter eller kommunikasjon når gjennomgang er rimelig nødvendig og lovlig.',
      'Behandlingen kan brukes til å oppdage eller undersøke skjulte formuesoverføringer, kontofarming, koordinerte eller sirkulære overføringer, verdier fra exploits, uautorisert handel mot ekte penger, betalingsmisbruk, kompromitterte kontoer og andre risikoer for svindel eller spillintegritet, og til å korrigere ugyldig spilltilstand. Når GDPR gjelder, kan behandlingsgrunnlaget være oppfyllelse av TycoonX-avtalen når behandlingen er nødvendig for å drive den vedvarende flerspillerøkonomien, berettigede interesser i svindelforebygging, sikkerhet og spillintegritet etter den nødvendige vurderingen av nødvendighet og interesseavveining, eller en rettslig forpliktelse der dette er aktuelt.',
      'En transaksjon med høy verdi, en uvanlig pris, vennskap, medlemskap i samme selskap, et signal om felles husholdning eller nettverk eller én uvanlig hendelse beviser ikke i seg selv misbruk. CK-Labs skal bruke forholdsmessige bevis, dataminimering og tilgangskontroller. Privat kommunikasjon gjennomgås for dette formålet bare når det er rimelig nødvendig og lovlig. Automatiserte signaler kan merke aktivitet for gjennomgang, men der gjeldende lov begrenser fullt automatiserte avgjørelser med rettslige eller tilsvarende vesentlige virkninger, gjelder de nødvendige garantiene, inkludert menneskelig involvering eller gjennomgang når det kreves.',
      'Relevante opplysninger om svindelforebygging og undersøkelser beholdes bare så lenge det er rimelig nødvendig for sikkerhet, oppdagelse av gjentatt misbruk, tvister, rettskrav eller lovpålagte plikter. Dine gjeldende rettigheter til innsyn, retting, sletting, begrensning, innsigelse mot behandling basert på berettiget interesse og garantier ved automatiserte avgjørelser gjelder fortsatt etter denne personvernerklæringen og ufravikelig lov.',
    ],
  },
  pl: {
    label: 'Aktualizacja prywatności · 5 września 2026 r.',
    title: 'Analiza integralności gospodarki, transferów i RMT',
    paragraphs: [
      'Aby chronić gospodarkę TycoonX i egzekwować zasady dotyczące rzeczywistych transakcji w grze oraz handlu za prawdziwe pieniądze, CK-Labs może analizować zapisy transakcyjne i księgowe, strony transakcji, łańcuchy transakcji, powtarzające się transfery, wzorce cen, korzystanie z funkcji, relacje między kontami bezpośrednio obserwowane lub racjonalnie wywnioskowane z odpowiednich danych Usługi, a także powiązane zgłoszenia lub komunikację, gdy ich przegląd jest racjonalnie konieczny i zgodny z prawem.',
      'Przetwarzanie może służyć wykrywaniu lub badaniu ukrytych transferów majątku, farmienia kont, skoordynowanych lub okrężnych transferów, wartości pochodzącej z exploitów, niedozwolonego handlu za prawdziwe pieniądze, nadużyć płatniczych, przejęć kont i innych ryzyk oszustwa lub naruszenia integralności gry oraz korygowaniu nieprawidłowego stanu gry. Gdy ma zastosowanie RODO, podstawą prawną może być wykonanie umowy TycoonX, jeśli przetwarzanie jest konieczne do działania trwałej gospodarki wieloosobowej, prawnie uzasadniony interes w zapobieganiu oszustwom, bezpieczeństwie i integralności gry po wymaganej ocenie konieczności i wyważeniu interesów albo obowiązek prawny, jeśli ma zastosowanie.',
      'Transakcja o wysokiej wartości, nietypowa cena, znajomość, członkostwo w tej samej firmie, sygnał wspólnego gospodarstwa domowego lub sieci albo jedno nietypowe zdarzenie same w sobie nie dowodzą nadużycia. CK-Labs powinna stosować proporcjonalne dowody, minimalizację danych i kontrolę dostępu. Prywatna komunikacja jest analizowana w tym celu tylko wtedy, gdy jest to racjonalnie konieczne i zgodne z prawem. Sygnały automatyczne mogą oznaczać aktywność do kontroli, lecz gdy prawo ogranicza decyzje wyłącznie automatyczne wywołujące skutki prawne lub podobnie istotne, stosuje się wymagane zabezpieczenia, w tym udział lub kontrolę człowieka, gdy jest wymagana.',
      'Odpowiednie dane dotyczące zapobiegania oszustwom i dochodzeń są przechowywane tylko tak długo, jak jest to racjonalnie konieczne dla bezpieczeństwa, wykrywania powtarzających się nadużyć, sporów, roszczeń prawnych lub obowiązków ustawowych. Nadal przysługują Ci właściwe prawa dostępu, sprostowania, usunięcia, ograniczenia, sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie oraz zabezpieczenia dotyczące decyzji zautomatyzowanych zgodnie z niniejszą Polityką prywatności i bezwzględnie obowiązującym prawem.',
    ],
  },
  th: {
    label: 'อัปเดตความเป็นส่วนตัว · 5 กันยายน 2026',
    title: 'การวิเคราะห์ความสมบูรณ์ของเศรษฐกิจ การโอน และ RMT',
    paragraphs: [
      'เพื่อปกป้องเศรษฐกิจของ TycoonX และบังคับใช้กฎเรื่องธุรกรรมที่แท้จริงและการซื้อขายด้วยเงินจริง CK-Labs อาจวิเคราะห์บันทึกธุรกรรมและบัญชี คู่ธุรกรรม เส้นทางของธุรกรรม การโอนซ้ำ รูปแบบราคา การใช้ฟีเจอร์ ความสัมพันธ์ระหว่างบัญชีที่สังเกตได้โดยตรงหรืออนุมานได้อย่างสมเหตุสมผลจากข้อมูลบริการที่เกี่ยวข้อง รวมถึงรายงานหรือการสื่อสารที่เกี่ยวข้องเมื่อการตรวจสอบมีความจำเป็นตามสมควรและชอบด้วยกฎหมาย',
      'การประมวลผลนี้อาจใช้เพื่อตรวจจับหรือสืบสวนการโอนทรัพย์สินแบบอำพราง การฟาร์มบัญชี การโอนแบบประสานงานหรือวนกลับ มูลค่าที่เกิดจากการใช้ช่องโหว่ การซื้อขายด้วยเงินจริงที่ไม่ได้รับอนุญาต การใช้ระบบชำระเงินในทางมิชอบ การยึดบัญชี และความเสี่ยงด้านการฉ้อโกงหรือความสมบูรณ์ของเกมอื่น ๆ รวมถึงแก้ไขสถานะเกมที่ไม่ถูกต้อง เมื่อ GDPR มีผลใช้บังคับ ฐานกฎหมายอาจรวมถึงการปฏิบัติตามสัญญา TycoonX เมื่อจำเป็นต่อการดำเนินเศรษฐกิจผู้เล่นหลายคนแบบต่อเนื่อง ผลประโยชน์อันชอบด้วยกฎหมายในการป้องกันการฉ้อโกง ความปลอดภัย และความสมบูรณ์ของเกมภายใต้การประเมินความจำเป็นและการชั่งดุลที่กำหนด หรือหน้าที่ตามกฎหมายเมื่อมีผลใช้บังคับ',
      'ธุรกรรมมูลค่าสูง ราคาที่ผิดปกติ มิตรภาพ การอยู่ในบริษัทเดียวกัน สัญญาณของครัวเรือนหรือเครือข่ายร่วมกัน หรือเหตุการณ์ผิดปกติครั้งเดียว ไม่ได้พิสูจน์การละเมิดด้วยตัวมันเอง CK-Labs ควรใช้หลักฐานที่ได้สัดส่วน การลดการใช้ข้อมูล และการควบคุมการเข้าถึง การสื่อสารส่วนตัวจะถูกตรวจสอบเพื่อวัตถุประสงค์นี้เฉพาะเมื่อมีความจำเป็นตามสมควรและชอบด้วยกฎหมาย สัญญาณอัตโนมัติอาจใช้ทำเครื่องหมายกิจกรรมเพื่อตรวจสอบ แต่หากกฎหมายจำกัดการตัดสินใจที่เกิดจากระบบอัตโนมัติล้วนและก่อให้เกิดผลทางกฎหมายหรือผลสำคัญในทำนองเดียวกัน จะใช้มาตรการคุ้มครองที่กำหนด รวมถึงการแทรกแซงหรือการตรวจสอบโดยมนุษย์เมื่อจำเป็น',
      'บันทึกการป้องกันการฉ้อโกงและการสืบสวนที่เกี่ยวข้องจะเก็บไว้เฉพาะช่วงเวลาที่จำเป็นตามสมควรเพื่อความปลอดภัย การตรวจจับการละเมิดซ้ำ ข้อพิพาท การเรียกร้องทางกฎหมาย หรือหน้าที่ตามกฎหมาย สิทธิที่ใช้บังคับของคุณในการเข้าถึง แก้ไข ลบ จำกัด คัดค้านการประมวลผลที่อาศัยผลประโยชน์อันชอบด้วยกฎหมาย และมาตรการคุ้มครองเกี่ยวกับการตัดสินใจอัตโนมัติยังคงใช้ได้ตามนโยบายความเป็นส่วนตัวนี้และกฎหมายบังคับ',
    ],
  },
  vi: {
    label: 'Cập nhật quyền riêng tư · 5 tháng 9 năm 2026',
    title: 'Phân tích tính toàn vẹn kinh tế, chuyển tài sản và RMT',
    paragraphs: [
      'Để bảo vệ nền kinh tế TycoonX và thực thi các quy tắc về giao dịch thực chất và giao dịch bằng tiền thật, CK-Labs có thể phân tích hồ sơ giao dịch và sổ cái, đối tác giao dịch, chuỗi giao dịch, các lần chuyển lặp lại, mô hình giá, việc sử dụng tính năng, mối liên hệ giữa các tài khoản được quan sát trực tiếp hoặc suy luận hợp lý từ dữ liệu Dịch vụ có liên quan, cũng như các báo cáo hoặc trao đổi liên quan khi việc xem xét là cần thiết hợp lý và hợp pháp.',
      'Việc xử lý này có thể được dùng để phát hiện hoặc điều tra việc chuyển tài sản trá hình, farm tài khoản, chuyển có phối hợp hoặc theo vòng, giá trị phát sinh từ exploit, giao dịch bằng tiền thật không được phép, lạm dụng thanh toán, tài khoản bị xâm nhập và các rủi ro gian lận hoặc toàn vẹn trò chơi khác, đồng thời sửa trạng thái game không hợp lệ. Khi GDPR áp dụng, căn cứ pháp lý có thể là thực hiện hợp đồng TycoonX khi việc xử lý là cần thiết để vận hành nền kinh tế nhiều người chơi liên tục, lợi ích hợp pháp về phòng chống gian lận, bảo mật và toàn vẹn trò chơi sau khi thực hiện đánh giá cần thiết về tính cần thiết và cân bằng lợi ích, hoặc nghĩa vụ pháp lý khi áp dụng.',
      'Một giao dịch giá trị cao, mức giá bất thường, quan hệ bạn bè, cùng công ty, tín hiệu cùng hộ gia đình hoặc mạng, hay một sự kiện bất thường đơn lẻ không tự nó chứng minh có hành vi lạm dụng. CK-Labs cần sử dụng bằng chứng tương xứng, giảm thiểu dữ liệu và kiểm soát truy cập. Trao đổi riêng tư chỉ được xem xét cho mục đích này khi việc đó cần thiết hợp lý và hợp pháp. Tín hiệu tự động có thể đánh dấu hoạt động để xem xét, nhưng khi pháp luật hạn chế các quyết định hoàn toàn tự động gây hiệu lực pháp lý hoặc ảnh hưởng đáng kể tương tự, các biện pháp bảo vệ bắt buộc, bao gồm sự can thiệp hoặc xem xét của con người khi cần, sẽ được áp dụng.',
      'Hồ sơ phòng chống gian lận và điều tra liên quan chỉ được lưu trong thời gian cần thiết hợp lý cho bảo mật, phát hiện lạm dụng lặp lại, tranh chấp, yêu cầu pháp lý hoặc nghĩa vụ pháp lý. Các quyền áp dụng của bạn về truy cập, đính chính, xóa, hạn chế, phản đối xử lý dựa trên lợi ích hợp pháp và các biện pháp bảo vệ liên quan đến quyết định tự động vẫn được bảo đảm theo Chính sách quyền riêng tư này và pháp luật bắt buộc.',
    ],
  },
  uk: {
    label: 'Оновлення конфіденційності · 5 вересня 2026 року',
    title: 'Аналіз цілісності економіки, переказів і RMT',
    paragraphs: [
      'Для захисту економіки TycoonX та виконання правил щодо справжніх транзакцій і торгівлі за реальні гроші CK-Labs може аналізувати записи транзакцій і обліку, контрагентів, ланцюги транзакцій, повторні перекази, цінові моделі, використання функцій, зв’язки між акаунтами, які безпосередньо спостерігаються або обґрунтовано виводяться з відповідних даних Сервісу, а також пов’язані скарги чи повідомлення, коли така перевірка є розумно необхідною та законною.',
      'Така обробка може використовуватися для виявлення або розслідування прихованих переказів майна, фармінгу акаунтів, скоординованих або циклічних переказів, цінностей, отриманих через експлойти, несанкціонованої торгівлі за реальні гроші, зловживань платежами, компрометації акаунтів та інших ризиків шахрайства чи порушення цілісності гри, а також для виправлення недійсного стану гри. Якщо застосовується GDPR, правовою підставою може бути виконання договору TycoonX, коли обробка необхідна для роботи постійної багатокористувацької економіки, законні інтереси у запобіганні шахрайству, безпеці та цілісності гри після необхідної оцінки необхідності й балансу інтересів або юридичний обов’язок, якщо він застосовується.',
      'Транзакція великої вартості, незвична ціна, дружба, членство в одній компанії, сигнал спільного домогосподарства чи мережі або одна незвична подія самі по собі не доводять зловживання. CK-Labs має використовувати пропорційні докази, мінімізацію даних і контроль доступу. Приватні повідомлення переглядаються з цією метою лише коли це розумно необхідно та законно. Автоматизовані сигнали можуть позначати активність для перевірки, але якщо застосовне право обмежує повністю автоматизовані рішення з юридичними або подібно значними наслідками, застосовуються необхідні гарантії, включно з втручанням або перевіркою людиною, коли це потрібно.',
      'Відповідні записи про запобігання шахрайству та розслідування зберігаються лише протягом строку, розумно необхідного для безпеки, виявлення повторних зловживань, спорів, юридичних вимог або виконання законних обов’язків. Ваші застосовні права на доступ, виправлення, видалення, обмеження, заперечення проти обробки на підставі законного інтересу та гарантії щодо автоматизованих рішень залишаються доступними відповідно до цієї Політики конфіденційності та обов’язкового права.',
    ],
  },
  hi: {
    label: 'गोपनीयता अपडेट · 5 सितंबर 2026',
    title: 'गेम अर्थव्यवस्था की अखंडता, ट्रांसफर और RMT विश्लेषण',
    paragraphs: [
      'TycoonX की गेम अर्थव्यवस्था की रक्षा करने और वास्तविक गेमप्ले लेन-देन तथा रियल-मनी ट्रेडिंग नियमों को लागू करने के लिए CK-Labs लेन-देन और लेजर रिकॉर्ड, दूसरी पार्टी, ट्रांज़ैक्शन चेन, बार-बार होने वाले ट्रांसफर, मूल्य पैटर्न, फीचर उपयोग, संबंधित सेवा डेटा से सीधे दिखाई देने वाले या युक्तिसंगत रूप से निकाले जा सकने वाले खातों के संबंध, और जहाँ समीक्षा युक्तिसंगत रूप से आवश्यक व वैध हो वहाँ संबंधित रिपोर्ट या संचार का विश्लेषण कर सकता है।',
      'इस प्रोसेसिंग का उपयोग छिपे हुए धन-संपत्ति ट्रांसफर, अकाउंट फार्मिंग, समन्वित या चक्रीय ट्रांसफर, exploit से बनी वैल्यू, बिना अनुमति रियल-मनी ट्रेडिंग, भुगतान दुरुपयोग, अकाउंट समझौता और अन्य धोखाधड़ी या गेम-अखंडता जोखिमों का पता लगाने या जाँच करने तथा अमान्य गेम स्टेट को ठीक करने के लिए किया जा सकता है। जहाँ GDPR लागू है, कानूनी आधार में लगातार मल्टीप्लेयर अर्थव्यवस्था चलाने के लिए आवश्यक सीमा तक TycoonX अनुबंध का पालन, आवश्यक आवश्यकता और संतुलन परीक्षण के अधीन धोखाधड़ी रोकथाम, सुरक्षा और गेम अखंडता के वैध हित, या लागू होने पर कानूनी दायित्व शामिल हो सकते हैं।',
      'बहुत अधिक मूल्य का लेन-देन, असामान्य कीमत, दोस्ती, एक ही कंपनी की सदस्यता, साझा घर या नेटवर्क का संकेत, या कोई एक असामान्य घटना अपने आप दुरुपयोग साबित नहीं करती। CK-Labs को अनुपातिक प्रमाण, डेटा न्यूनता और एक्सेस नियंत्रण का उपयोग करना चाहिए। निजी संचार की इस उद्देश्य के लिए समीक्षा केवल तभी की जाती है जब वह युक्तिसंगत रूप से आवश्यक और वैध हो। स्वचालित संकेत समीक्षा के लिए गतिविधि चिह्नित कर सकते हैं, लेकिन जहाँ लागू कानून कानूनी या समान रूप से महत्वपूर्ण प्रभाव वाले केवल स्वचालित निर्णयों को सीमित करता है, वहाँ आवश्यक सुरक्षा उपाय, जिसमें जरूरत होने पर मानव हस्तक्षेप या समीक्षा शामिल है, लागू होते हैं।',
      'संबंधित धोखाधड़ी-रोकथाम और जाँच रिकॉर्ड केवल उतने समय तक रखे जाते हैं जितना सुरक्षा, बार-बार होने वाले दुरुपयोग का पता लगाने, विवाद, कानूनी दावे या कानूनी दायित्वों के लिए युक्तिसंगत रूप से आवश्यक हो। पहुँच, सुधार, मिटाने, सीमित करने, वैध हित पर आधारित प्रोसेसिंग पर आपत्ति और स्वचालित निर्णयों से जुड़ी सुरक्षा के आपके लागू अधिकार इस गोपनीयता नीति और अनिवार्य कानून के अनुसार बने रहते हैं।',
    ],
  },
  id: {
    label: 'Pembaruan privasi · 5 September 2026',
    title: 'Analisis integritas ekonomi, transfer, dan RMT',
    paragraphs: [
      'Untuk melindungi ekonomi TycoonX dan menegakkan aturan transaksi yang sungguh-sungguh serta perdagangan dengan uang nyata, CK-Labs dapat menganalisis catatan transaksi dan ledger, pihak lawan transaksi, rangkaian transaksi, transfer berulang, pola harga, penggunaan fitur, hubungan antar akun yang terlihat langsung atau secara wajar dapat disimpulkan dari data Layanan yang relevan, serta laporan atau komunikasi terkait apabila peninjauan tersebut secara wajar diperlukan dan sah.',
      'Pemrosesan ini dapat digunakan untuk mendeteksi atau menyelidiki transfer kekayaan terselubung, farming akun, transfer terkoordinasi atau melingkar, nilai yang berasal dari exploit, perdagangan uang nyata yang tidak diizinkan, penyalahgunaan pembayaran, akun yang dibajak, dan risiko penipuan atau integritas game lainnya, serta untuk memperbaiki status game yang tidak valid. Apabila GDPR berlaku, dasar hukumnya dapat berupa pelaksanaan kontrak TycoonX ketika pemrosesan diperlukan untuk menjalankan ekonomi multipemain yang persisten, kepentingan sah dalam pencegahan penipuan, keamanan, dan integritas game dengan tunduk pada penilaian kebutuhan dan keseimbangan yang diwajibkan, atau kewajiban hukum jika berlaku.',
      'Transaksi bernilai tinggi, harga yang tidak biasa, hubungan pertemanan, keanggotaan dalam perusahaan yang sama, sinyal rumah tangga atau jaringan bersama, atau satu kejadian yang tidak biasa tidak dengan sendirinya membuktikan penyalahgunaan. CK-Labs harus menggunakan bukti yang proporsional, minimisasi data, dan kontrol akses. Komunikasi privat ditinjau untuk tujuan ini hanya jika secara wajar diperlukan dan sah. Sinyal otomatis dapat menandai aktivitas untuk ditinjau, tetapi apabila hukum yang berlaku membatasi keputusan yang sepenuhnya otomatis dengan akibat hukum atau dampak signifikan serupa, perlindungan yang diwajibkan, termasuk campur tangan atau peninjauan manusia bila diperlukan, akan diterapkan.',
      'Catatan pencegahan penipuan dan penyelidikan yang relevan disimpan hanya selama secara wajar diperlukan untuk keamanan, mendeteksi penyalahgunaan berulang, sengketa, klaim hukum, atau kewajiban hukum. Hak Anda yang berlaku atas akses, koreksi, penghapusan, pembatasan, keberatan terhadap pemrosesan berdasarkan kepentingan sah, dan perlindungan terkait keputusan otomatis tetap tersedia berdasarkan Kebijakan Privasi ini dan hukum yang bersifat wajib.',
    ],
  },
};

function getLocale(pathname: string): string | null {
  if (/^\/tyconx-privacy-policy\/?$/.test(pathname)) return 'en';
  const match = pathname.match(/^\/tycoonx-legal\/([^/]+)\/privacy\/?$/);
  return match?.[1] ?? null;
}

export default function TransferRiskPrivacyNotice() {
  const pathname = usePathname();
  const locale = getLocale(pathname);
  if (!locale || !copies[locale]) return null;

  const copy = copies[locale];
  const rtl = locale === 'ar';

  return (
    <section className="max-w-3xl mx-auto px-4 pb-12" lang={locale === 'en' ? 'en' : locale} dir={rtl ? 'rtl' : 'ltr'} aria-labelledby="tycoonx-transfer-risk-privacy-heading">
      <div className="rounded-xl border border-sky-400/20 bg-sky-400/[0.05] p-6">
        <p className="text-sky-300/80 text-xs font-medium tracking-wide mb-2">{copy.label}</p>
        <h2 id="tycoonx-transfer-risk-privacy-heading" className="text-white font-semibold mb-4">{copy.title}</h2>
        <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
          {copy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  );
}
