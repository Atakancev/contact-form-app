'use client';

import { usePathname } from 'next/navigation';

type RuleCopy = {
  label: string;
  title: string;
  paragraphs: string[];
};

const copies: Record<string, RuleCopy> = {
  en: {
    label: 'Gameplay clarification · 10 September 2026',
    title: 'Company, tender and Union economy mechanics',
    paragraphs: [
      'TycoonX contains gameplay mechanics that are intentionally designed to move or distribute in-game value, including company salaries and payroll, authorized company-treasury withdrawals, dividends, IPO subscriptions, buybacks, secondary offerings, tenders, and Union Project contributions. Using one of these features for its genuine intended gameplay purpose is not prohibited merely because money or value changes hands.',
      'For clarity, the rule that other gameplay mechanics are not donation channels does not prohibit a feature that TycoonX expressly designed for contributions or assistance. Begging and an available Union Project donation feature may be used only within that feature’s stated purpose and limits. Other mechanics must not be repurposed mainly to disguise gifts, donations, value parking, or wealth funneling.',
      'Sham salaries or company distributions, collusive or manipulated tender bids, circular stock or company transactions, coordinated self-dealing, alternate accounts used to evade feature limits, and similar arrangements may be investigated when there is reasonable evidence that the real purpose was prohibited value transfer, manipulation, exploit abuse, or real-money trading. A legitimate salary, dividend, tender bid, company financing decision, or Union Project contribution is not automatically a violation simply because it is generous, unusual, or economically significant.',
      'Server-side caps, permissions, cooldowns, formulas, or UI availability define technical feature behavior but do not by themselves prove that conduct is allowed or abusive under the Terms. CK-Labs considers the feature’s intended purpose and relevant evidence, and any correction or account restriction remains subject to proportionality, unrelated legitimate paid value, and mandatory rights.',
    ],
  },
  tr: {
    label: 'Oynanış açıklaması · 10 Eylül 2026',
    title: 'Şirket, ihale ve Birlik ekonomisi mekanikleri',
    paragraphs: [
      'TycoonX içinde oyun içi değeri bilinçli olarak aktarmak veya dağıtmak için tasarlanmış mekanikler bulunur. Şirket maaşları ve bordro ödemeleri, yetkili şirket kasası çekimleri, temettüler, halka arz katılımları, hisse geri alımları, ikincil arzlar, ihaleler ve Union Project katkıları bunlara dahildir. Bu özelliklerden birini gerçek ve amaçlanan oyun işlevi için kullanmak, yalnızca para veya değer el değiştirdiği için yasak değildir.',
      'Diğer oyun mekaniklerinin bağış kanalı olmadığı kuralı, TycoonX tarafından açıkça katkı veya yardım amacıyla tasarlanan özellikleri yasaklamaz. Begging ve mevcut olduğunda Union Project bağış özelliği yalnızca kendi açıklanan amacı ve sınırları içinde kullanılabilir. Diğer mekanikler hediye, bağış, değer park etme veya servet aktarma işlemlerini gizlemek için esas olarak başka bir amaca çevrilemez.',
      'Göstermelik maaşlar veya şirket dağıtımları, danışıklı ya da manipüle edilmiş ihale teklifleri, döngüsel hisse veya şirket işlemleri, koordineli kendi kendine işlem, özellik limitlerini aşmak için kullanılan alternatif hesaplar ve benzeri düzenlemeler; gerçek amacın yasak bir değer aktarımı, manipülasyon, exploit kötüye kullanımı veya gerçek parayla ticaret olduğuna dair makul kanıt varsa incelenebilir. Meşru bir maaş, temettü, ihale teklifi, şirket finansmanı kararı veya Union Project katkısı sadece cömert, sıra dışı ya da ekonomik olarak büyük olduğu için otomatik olarak ihlal sayılmaz.',
      'Sunucu tarafındaki limitler, yetkiler, bekleme süreleri, formüller veya arayüzde bir seçeneğin görünmesi özelliğin teknik davranışını belirler; ancak tek başına davranışın Koşullar kapsamında izinli veya kötüye kullanım olduğunu kanıtlamaz. CK-Labs özelliğin amaçlanan kullanımını ve ilgili kanıtları değerlendirir; düzeltmeler ve hesap kısıtlamaları orantılılık, ilgisiz meşru ücretli değer ve zorunlu haklar korunarak uygulanır.',
    ],
  },
  de: {
    label: 'Klarstellung zum Gameplay · 10. September 2026',
    title: 'Unternehmens-, Ausschreibungs- und Union-Wirtschaft',
    paragraphs: [
      'TycoonX enthält Spielmechaniken, die ausdrücklich dazu vorgesehen sind, Spielwerte zu übertragen oder zu verteilen. Dazu gehören Unternehmensgehälter und Lohnzahlungen, autorisierte Entnahmen aus der Unternehmenskasse, Dividenden, IPO-Zeichnungen, Aktienrückkäufe, Sekundärplatzierungen, Ausschreibungen und Beiträge zu Union Projects. Die echte Nutzung einer solchen Funktion zu ihrem vorgesehenen Spielzweck ist nicht allein deshalb verboten, weil Geld oder anderer Spielwert den Besitzer wechselt.',
      'Die Regel, dass andere Spielmechaniken keine Spendenkanäle sind, verbietet keine Funktion, die TycoonX ausdrücklich für Beiträge oder Unterstützung entwickelt hat. Begging und eine verfügbare Spendenfunktion für Union Projects dürfen innerhalb ihres ausgewiesenen Zwecks und ihrer Grenzen genutzt werden. Andere Mechaniken dürfen nicht hauptsächlich zweckentfremdet werden, um Geschenke, Spenden, das Parken von Werten oder das Verschieben von Vermögen zu verschleiern.',
      'Schein-Gehälter oder Schein-Ausschüttungen, abgesprochene oder manipulierte Ausschreibungsgebote, Kreisgeschäfte mit Aktien oder Unternehmen, koordinierte Eigengeschäfte, Alternativkonten zur Umgehung von Funktionsgrenzen und ähnliche Konstruktionen können untersucht werden, wenn angemessene Anhaltspunkte dafür bestehen, dass der tatsächliche Zweck eine unzulässige Wertübertragung, Manipulation, Exploit-Missbrauch oder Real-Money-Trading war. Ein echtes Gehalt, eine Dividende, ein Ausschreibungsgebot, eine Unternehmensfinanzierung oder ein Union-Project-Beitrag ist nicht automatisch ein Verstoß, nur weil die Transaktion großzügig, ungewöhnlich oder wirtschaftlich bedeutend ist.',
      'Serverseitige Obergrenzen, Berechtigungen, Cooldowns, Formeln oder die Sichtbarkeit einer Schaltfläche bestimmen die technische Funktionsweise, beweisen aber für sich genommen weder die Zulässigkeit noch einen Missbrauch nach den Nutzungsbedingungen. CK-Labs berücksichtigt den vorgesehenen Zweck der Funktion und die relevanten Umstände; Korrekturen und Kontobeschränkungen bleiben an Verhältnismäßigkeit, den Schutz nicht betroffener rechtmäßig erworbener bezahlter Werte und zwingende Rechte gebunden.',
    ],
  },
  es: {
    label: 'Aclaración sobre el juego · 10 de septiembre de 2026',
    title: 'Mecánicas de empresas, licitaciones y Uniones',
    paragraphs: [
      'TycoonX incluye mecánicas creadas expresamente para transferir o distribuir valor dentro del juego, como salarios y nóminas de empresa, retiradas autorizadas de la tesorería de una empresa, dividendos, suscripciones a una OPI, recompras, ofertas secundarias, licitaciones y aportaciones a Union Projects. Utilizar una de estas funciones de forma genuina para su finalidad de juego no está prohibido solo porque cambien de manos dinero o valor del juego.',
      'La regla que indica que otras mecánicas no son canales de donación no prohíbe una función que TycoonX haya diseñado expresamente para aportar o ayudar. Begging y, cuando esté disponible, la función de donación a un Union Project pueden utilizarse únicamente para su finalidad y dentro de sus límites. Las demás mecánicas no pueden reutilizarse principalmente para encubrir regalos, donaciones, aparcamiento de valor o transferencia de patrimonio.',
      'Los salarios o repartos ficticios, las pujas pactadas o manipuladas en licitaciones, las operaciones circulares con acciones o empresas, las operaciones coordinadas con uno mismo, el uso de cuentas alternativas para eludir límites y estructuras similares pueden investigarse cuando existan indicios razonables de que su finalidad real era una transferencia de valor prohibida, manipulación, abuso de exploits o comercio por dinero real. Un salario, dividendo, puja, decisión de financiación empresarial o aportación a un Union Project legítimos no constituyen automáticamente una infracción por ser generosos, inusuales o económicamente importantes.',
      'Los límites, permisos, tiempos de espera, fórmulas o la disponibilidad de una opción en la interfaz determinan el funcionamiento técnico de la función, pero por sí solos no demuestran que una conducta esté permitida o sea abusiva conforme a las Condiciones. CK-Labs valora la finalidad prevista y las pruebas pertinentes; cualquier corrección o restricción de cuenta debe seguir siendo proporcionada y respetar el valor pagado legítimo no relacionado y los derechos imperativos.',
    ],
  },
  es_MX: {
    label: 'Aclaración de jugabilidad · 10 de septiembre de 2026',
    title: 'Mecánicas de empresas, licitaciones y Uniones',
    paragraphs: [
      'TycoonX tiene mecánicas diseñadas específicamente para mover o repartir valor dentro del juego, como salarios y nómina de empresas, retiros autorizados de la tesorería de una empresa, dividendos, suscripciones a una OPI, recompras, ofertas secundarias, licitaciones y aportaciones a Union Projects. Usar una de estas funciones de manera genuina para el propósito de juego para el que fue creada no está prohibido solo porque cambien de manos dinero o valor del juego.',
      'La regla que dice que otras mecánicas no son canales de donación no prohíbe una función que TycoonX haya creado expresamente para aportar o ayudar. Begging y, cuando esté disponible, la función para donar a un Union Project solo pueden usarse para su propósito y dentro de sus límites. Las demás mecánicas no deben reutilizarse principalmente para disfrazar regalos, donaciones, estacionar valor o canalizar patrimonio.',
      'Los salarios o repartos simulados, las ofertas de licitación acordadas o manipuladas, las operaciones circulares con acciones o empresas, las operaciones coordinadas con uno mismo, las cuentas alternas usadas para evadir límites y arreglos similares pueden investigarse cuando haya evidencia razonable de que su propósito real era una transferencia de valor prohibida, manipulación, abuso de exploits o comercio por dinero real. Un salario, dividendo, oferta, decisión legítima de financiamiento empresarial o aportación a un Union Project no es automáticamente una infracción solo por ser generosa, poco común o económicamente importante.',
      'Los límites, permisos, tiempos de espera, fórmulas o que una opción aparezca en la interfaz definen el comportamiento técnico de la función, pero por sí solos no prueban que una conducta esté permitida o sea abusiva según los Términos. CK-Labs evalúa la finalidad prevista y la evidencia relevante; cualquier corrección o restricción debe ser proporcional y respetar el valor legítimamente pagado que no esté relacionado y los derechos obligatorios.',
    ],
  },
  fr: {
    label: 'Précision sur le gameplay · 10 septembre 2026',
    title: 'Mécaniques des entreprises, appels d’offres et Unions',
    paragraphs: [
      'TycoonX comprend des mécaniques expressément conçues pour transférer ou répartir de la valeur en jeu, notamment les salaires et la paie des entreprises, les retraits autorisés de trésorerie, les dividendes, les souscriptions à une introduction en bourse, les rachats d’actions, les offres secondaires, les appels d’offres et les contributions aux Union Projects. L’utilisation réelle d’une telle fonctionnalité conformément à sa finalité de jeu n’est pas interdite du seul fait que de l’argent ou une valeur en jeu change de titulaire.',
      'La règle selon laquelle les autres mécaniques ne sont pas des canaux de don ne vise pas une fonctionnalité que TycoonX a expressément conçue pour les contributions ou l’assistance. Begging et, lorsqu’elle est disponible, la fonction de don à un Union Project ne peuvent être utilisées que dans le respect de leur finalité et de leurs limites. Les autres mécaniques ne doivent pas être détournées principalement pour masquer des cadeaux, des dons, un stationnement de valeur ou un transfert de richesse.',
      'Des salaires ou distributions fictifs, des offres concertées ou manipulées, des opérations circulaires sur des actions ou des entreprises, des opérations coordonnées avec soi-même, l’utilisation de comptes alternatifs pour contourner des limites et des montages comparables peuvent faire l’objet d’un examen lorsqu’il existe des éléments raisonnables montrant que le véritable objectif était un transfert de valeur interdit, une manipulation, l’exploitation abusive d’un bug ou du commerce contre de l’argent réel. Un salaire, un dividende, une offre, une décision de financement d’entreprise ou une contribution à un Union Project légitimes ne constituent pas automatiquement une infraction parce qu’ils sont généreux, inhabituels ou économiquement importants.',
      'Les plafonds, autorisations, délais, formules côté serveur ou la présence d’une option dans l’interface définissent le fonctionnement technique d’une fonctionnalité, mais ne prouvent pas à eux seuls qu’un comportement est autorisé ou abusif au regard des Conditions. CK-Labs tient compte de la finalité prévue et des éléments pertinents; toute correction ou restriction de compte reste soumise à la proportionnalité et au respect des valeurs payantes légitimes sans lien avec l’affaire et des droits impératifs.',
    ],
  },
  fr_CA: {
    label: 'Précision sur le jeu · 10 septembre 2026',
    title: 'Mécaniques des entreprises, appels d’offres et Unions',
    paragraphs: [
      'TycoonX comprend des mécaniques expressément conçues pour déplacer ou répartir de la valeur dans le jeu, notamment les salaires et la paie d’entreprise, les retraits autorisés de la trésorerie, les dividendes, les souscriptions à une introduction en bourse, les rachats d’actions, les offres secondaires, les appels d’offres et les contributions aux Union Projects. Utiliser réellement une telle fonctionnalité pour son objectif de jeu n’est pas interdit simplement parce que de l’argent ou de la valeur change de mains.',
      'La règle voulant que les autres mécaniques ne servent pas de canaux de don ne vise pas une fonctionnalité que TycoonX a expressément créée pour les contributions ou l’aide. Begging et, lorsqu’elle est offerte, la fonction de don à un Union Project peuvent seulement être utilisées conformément à leur objectif et à leurs limites. Les autres mécaniques ne doivent pas être détournées principalement pour camoufler des cadeaux, des dons, du stationnement de valeur ou un transfert de richesse.',
      'Des salaires ou distributions fictifs, des offres concertées ou manipulées, des opérations circulaires sur des actions ou des entreprises, des opérations coordonnées avec soi-même, des comptes alternatifs utilisés pour contourner des limites et des montages semblables peuvent être examinés lorsqu’il existe des éléments raisonnables indiquant que le véritable but était un transfert de valeur interdit, une manipulation, l’abus d’un exploit ou du commerce contre de l’argent réel. Un salaire, un dividende, une offre, une décision légitime de financement d’entreprise ou une contribution à un Union Project n’est pas automatiquement une infraction parce que l’opération est généreuse, inhabituelle ou importante sur le plan économique.',
      'Les plafonds, autorisations, délais, formules côté serveur ou l’affichage d’une option dans l’interface définissent le comportement technique de la fonctionnalité, mais ne prouvent pas à eux seuls qu’une conduite est permise ou abusive selon les Conditions. CK-Labs examine la finalité prévue et les éléments pertinents; toute correction ou restriction doit être proportionnée et respecter les valeurs payantes légitimes sans lien avec le dossier ainsi que les droits impératifs.',
    ],
  },
  it: {
    label: 'Chiarimento sul gameplay · 10 settembre 2026',
    title: 'Meccaniche di aziende, gare e Unioni',
    paragraphs: [
      'TycoonX comprende meccaniche progettate espressamente per trasferire o distribuire valore nel gioco, tra cui stipendi e paghe aziendali, prelievi autorizzati dalla tesoreria dell’azienda, dividendi, sottoscrizioni IPO, riacquisti di azioni, offerte secondarie, gare e contributi ai Union Projects. L’uso reale di una di queste funzioni per lo scopo di gioco previsto non è vietato soltanto perché denaro o altro valore di gioco passa da un soggetto a un altro.',
      'La regola secondo cui le altre meccaniche non sono canali di donazione non vieta una funzione che TycoonX ha progettato espressamente per contributi o assistenza. Begging e, quando disponibile, la funzione di donazione a un Union Project possono essere utilizzati solo secondo lo scopo e i limiti della funzione. Le altre meccaniche non possono essere riutilizzate principalmente per mascherare regali, donazioni, parcheggio di valore o trasferimenti di ricchezza.',
      'Stipendi o distribuzioni fittizi, offerte di gara concordate o manipolate, operazioni circolari su azioni o aziende, operazioni coordinate con se stessi, account alternativi usati per aggirare i limiti e strutture simili possono essere esaminati quando vi sono elementi ragionevoli che indicano come vero scopo un trasferimento di valore vietato, una manipolazione, l’abuso di exploit o il real-money trading. Uno stipendio, un dividendo, un’offerta, una decisione legittima di finanziamento aziendale o un contributo a un Union Project non sono automaticamente una violazione solo perché generosi, insoliti o economicamente rilevanti.',
      'Limiti, autorizzazioni, tempi di attesa, formule lato server o la disponibilità di un’opzione nell’interfaccia definiscono il funzionamento tecnico della funzione, ma da soli non dimostrano che una condotta sia consentita o abusiva ai sensi dei Termini. CK-Labs valuta lo scopo previsto e gli elementi pertinenti; qualsiasi correzione o restrizione resta soggetta a proporzionalità, tutela del valore pagato legittimo non collegato e diritti inderogabili.',
    ],
  },
  pt: {
    label: 'Esclarecimento de jogabilidade · 10 de setembro de 2026',
    title: 'Mecânicas de empresas, concursos e Uniões',
    paragraphs: [
      'O TycoonX inclui mecânicas concebidas expressamente para transferir ou distribuir valor dentro do jogo, como salários e processamento salarial de empresas, levantamentos autorizados da tesouraria, dividendos, subscrições de IPO, recompras, ofertas secundárias, concursos e contribuições para Union Projects. A utilização genuína de uma destas funcionalidades para a finalidade de jogo prevista não é proibida apenas porque dinheiro ou outro valor muda de mãos.',
      'A regra segundo a qual outras mecânicas não são canais de donativos não proíbe uma funcionalidade que o TycoonX tenha criado expressamente para contribuições ou ajuda. Begging e, quando disponível, a funcionalidade de donativo para um Union Project só podem ser utilizadas de acordo com a respetiva finalidade e limites. As restantes mecânicas não podem ser desviadas principalmente para disfarçar presentes, donativos, estacionamento de valor ou transferência de património.',
      'Salários ou distribuições fictícios, propostas concertadas ou manipuladas em concursos, operações circulares com ações ou empresas, operações coordenadas consigo próprio, contas alternativas usadas para contornar limites e esquemas semelhantes podem ser investigados quando existam indícios razoáveis de que o objetivo real era uma transferência de valor proibida, manipulação, abuso de exploits ou comércio por dinheiro real. Um salário, dividendo, proposta, decisão legítima de financiamento empresarial ou contribuição para um Union Project não constitui automaticamente uma infração por ser generoso, invulgar ou economicamente relevante.',
      'Limites, permissões, períodos de espera, fórmulas do servidor ou a disponibilidade de uma opção na interface definem o funcionamento técnico da funcionalidade, mas não provam por si só que uma conduta seja permitida ou abusiva ao abrigo dos Termos. A CK-Labs considera a finalidade prevista e os elementos relevantes; qualquer correção ou restrição mantém-se sujeita à proporcionalidade, à proteção do valor pago legítimo não relacionado e aos direitos imperativos.',
    ],
  },
  pt_BR: {
    label: 'Esclarecimento de jogabilidade · 10 de setembro de 2026',
    title: 'Mecânicas de empresas, licitações e Uniões',
    paragraphs: [
      'O TycoonX tem mecânicas criadas expressamente para movimentar ou distribuir valor dentro do jogo, como salários e folha de pagamento de empresas, retiradas autorizadas da tesouraria, dividendos, subscrições de IPO, recompras, ofertas secundárias, licitações e contribuições para Union Projects. Usar de verdade uma dessas funcionalidades para a finalidade de jogo para a qual foi criada não é proibido só porque dinheiro ou outro valor muda de mãos.',
      'A regra de que outras mecânicas não são canais de doação não proíbe uma funcionalidade que o TycoonX tenha criado expressamente para contribuições ou ajuda. Begging e, quando disponível, a função de doação para um Union Project só podem ser usadas de acordo com a finalidade e os limites da própria função. As demais mecânicas não podem ser reaproveitadas principalmente para disfarçar presentes, doações, estacionamento de valor ou transferência de patrimônio.',
      'Salários ou distribuições fictícias, lances combinados ou manipulados em licitações, operações circulares com ações ou empresas, operações coordenadas consigo mesmo, contas alternativas usadas para contornar limites e esquemas semelhantes podem ser investigados quando houver evidência razoável de que a finalidade real era uma transferência de valor proibida, manipulação, abuso de exploit ou comércio por dinheiro real. Um salário, dividendo, lance, decisão legítima de financiamento empresarial ou contribuição para um Union Project não é automaticamente uma infração só por ser generoso, incomum ou economicamente relevante.',
      'Limites, permissões, tempos de espera, fórmulas do servidor ou a disponibilidade de uma opção na interface definem o funcionamento técnico da funcionalidade, mas por si só não provam que uma conduta seja permitida ou abusiva segundo os Termos. A CK-Labs considera a finalidade prevista e as evidências relevantes; qualquer correção ou restrição continua sujeita à proporcionalidade, à proteção de valores legitimamente pagos e não relacionados e aos direitos obrigatórios.',
    ],
  },
  ru: {
    label: 'Уточнение правил игры · 10 сентября 2026 г.',
    title: 'Механики компаний, тендеров и союзов',
    paragraphs: [
      'В TycoonX есть механики, специально предназначенные для перемещения или распределения игровой ценности: зарплаты и выплаты сотрудникам компаний, разрешённые выводы из казны компании, дивиденды, подписка на IPO, выкуп акций, вторичные размещения, тендеры и взносы в Union Projects. Добросовестное использование такой функции по её прямому игровому назначению не запрещено только потому, что деньги или иная игровая ценность переходят от одного участника к другому.',
      'Правило о том, что другие игровые механики не являются каналами для пожертвований, не запрещает функции, которые TycoonX прямо создал для взносов или помощи. Begging и доступная функция пожертвования в Union Project могут использоваться только в рамках их заявленной цели и ограничений. Другие механики нельзя преимущественно использовать не по назначению для маскировки подарков, пожертвований, временного размещения ценности или перекачки капитала.',
      'Фиктивные зарплаты или выплаты, согласованные либо манипулируемые тендерные ставки, круговые операции с акциями или компаниями, координированные сделки с самим собой, альтернативные аккаунты для обхода ограничений и похожие схемы могут проверяться, если имеются разумные доказательства того, что реальной целью был запрещённый перевод ценности, манипуляция, злоупотребление эксплойтом или торговля за реальные деньги. Настоящая зарплата, дивиденд, тендерная ставка, решение о финансировании компании или взнос в Union Project не становятся нарушением автоматически лишь потому, что они щедрые, необычные или экономически значимые.',
      'Серверные лимиты, разрешения, периоды ожидания, формулы или наличие опции в интерфейсе определяют техническую работу функции, но сами по себе не доказывают, что поведение разрешено или является злоупотреблением по Условиям. CK-Labs учитывает назначение функции и относящиеся к делу доказательства; любые корректировки или ограничения аккаунта должны оставаться соразмерными и не затрагивать несвязанную законно приобретённую платную ценность и обязательные права.',
    ],
  },
  ja: {
    label: 'ゲームプレイに関する明確化 · 2026年9月10日',
    title: '会社・入札・Union の経済機能',
    paragraphs: [
      'TycoonXには、ゲーム内の価値を移転または分配すること自体を目的として設計された機能があります。会社の給与や給与支払い、権限に基づく会社資金の引き出し、配当、IPO申込み、自社株買い、追加売出し、入札、Union Projectへの拠出などが含まれます。こうした機能を本来のゲーム上の目的に従って正当に利用することは、金銭や価値が移動するという理由だけで禁止されるものではありません。',
      '「他のゲーム機能は寄付の経路ではない」というルールは、TycoonXが拠出や支援のために明示的に設計した機能まで禁止するものではありません。Beggingおよび利用可能なUnion Projectへの寄付機能は、その機能で定められた目的と上限の範囲内でのみ利用できます。それ以外の機能を、贈与、寄付、価値の一時保管、資産移転を隠すために主として転用してはいけません。',
      '実態のない給与や会社分配、談合・操作された入札、株式や会社を使った循環取引、協調した自己取引、機能上の制限を回避するための別アカウントその他類似の仕組みは、真の目的が禁止された価値移転、操作、エクスプロイトの悪用、またはリアルマネートレードであったことを示す合理的な根拠がある場合に調査対象となり得ます。正当な給与、配当、入札、会社の資金調達判断、Union Projectへの拠出は、金額が大きい、珍しい、または寛大であるというだけで自動的に違反にはなりません。',
      'サーバー側の上限、権限、クールダウン、計算式、またはUI上で操作できることは技術的な挙動を定めるものですが、それだけで利用規約上の許可や不正利用を証明するものではありません。CK-Labsは機能の本来の目的と関連する証拠を総合的に確認し、修正やアカウント制限は比例性、無関係な正当な有料価値、強行法上の権利を尊重して行います。',
    ],
  },
  ko: {
    label: '게임플레이 규칙 명확화 · 2026년 9월 10일',
    title: '회사, 입찰 및 Union 경제 기능',
    paragraphs: [
      'TycoonX에는 게임 내 가치를 이동하거나 분배하도록 의도적으로 설계된 기능이 있습니다. 회사 급여와 급여 지급, 권한이 있는 회사 금고 인출, 배당, IPO 청약, 자사주 매입, 추가 주식 발행, 입찰, Union Project 기여 등이 포함됩니다. 이런 기능을 본래의 게임 목적에 맞게 실제로 사용하는 것은 돈이나 가치가 이동한다는 이유만으로 금지되지 않습니다.',
      '다른 게임 기능은 기부 통로가 아니라는 규칙은 TycoonX가 기여나 지원을 위해 명시적으로 설계한 기능까지 금지한다는 뜻이 아닙니다. Begging과 이용 가능한 Union Project 기부 기능은 해당 기능이 정한 목적과 한도 안에서만 사용할 수 있습니다. 다른 기능을 선물, 기부, 가치 보관 또는 자산 이전을 숨기는 수단으로 주로 전용해서는 안 됩니다.',
      '형식적인 급여나 회사 분배, 담합 또는 조작된 입찰, 주식이나 회사를 이용한 순환 거래, 조정된 자기거래, 기능 한도를 우회하기 위한 대체 계정과 유사한 방식은 실제 목적이 금지된 가치 이전, 조작, exploit 악용 또는 현금 거래였다는 합리적인 증거가 있는 경우 조사될 수 있습니다. 정당한 급여, 배당, 입찰, 회사 자금조달 결정 또는 Union Project 기여는 금액이 크거나 이례적이거나 후하다는 이유만으로 자동 위반이 되지 않습니다.',
      '서버의 한도, 권한, 쿨다운, 공식 또는 UI에서 기능이 보인다는 사실은 기술적 동작을 정할 뿐, 그 자체로 이용약관상 허용 또는 악용을 입증하지 않습니다. CK-Labs는 기능의 본래 목적과 관련 증거를 검토하며, 수정이나 계정 제한은 비례성, 관련 없는 정당한 유료 가치 및 강행법상 권리를 보호하는 범위에서 이루어집니다.',
    ],
  },
  zh: {
    label: '玩法规则说明 · 2026年9月10日',
    title: '公司、招标与联盟经济机制',
    paragraphs: [
      'TycoonX中有一些机制本来就被设计用于转移或分配游戏内价值，包括公司工资和发薪、经授权的公司资金提取、股息、IPO认购、股份回购、二次发行、招标以及Union Project贡献。只要玩家按照这些功能真正的游戏用途使用它们，就不会仅因为资金或其他游戏价值发生转移而构成违规。',
      '“其他游戏机制不是捐赠渠道”这一规则，并不禁止TycoonX明确设计用于贡献或帮助的功能。Begging以及可用的Union Project捐款功能只能在该功能明确的目的和限制范围内使用。其他机制不得被主要改作掩饰赠与、捐款、暂存价值或输送财富的工具。',
      '虚假工资或公司分配、串通或操纵的投标、循环的股票或公司交易、协调进行的自我交易、利用替代账户绕过功能限制以及类似安排，如果有合理证据表明其真实目的在于被禁止的价值转移、操纵、利用漏洞或现实货币交易，可能会受到调查。真实的工资、股息、投标、公司融资决定或Union Project贡献，不会仅因为金额大、条件慷慨、做法少见或具有较大经济影响而自动构成违规。',
      '服务器端的上限、权限、冷却时间、计算公式或界面中是否显示某个选项只决定功能的技术行为，本身既不能证明某种行为在条款下必然被允许，也不能证明其属于滥用。CK-Labs会结合功能的设计目的和相关证据进行判断，任何纠正或账户限制都应保持适度，并保护无关的合法付费价值和不可放弃的法定权利。',
    ],
  },
  zh_Hans: {
    label: '玩法规则说明 · 2026年9月10日',
    title: '公司、招标与联盟经济机制',
    paragraphs: [
      'TycoonX中有些功能本来就是为了转移或分配游戏内价值而设计的，包括公司工资和发薪、经授权的公司资金提取、股息、IPO认购、股份回购、二次发行、招标以及Union Project贡献。只要玩家按照这些功能真正的游戏用途使用它们，就不会仅仅因为资金或其他游戏价值发生转移而构成违规。',
      '“其他游戏机制不是捐赠渠道”这一规则，并不禁止TycoonX明确设计用于贡献或帮助的功能。Begging以及可用的Union Project捐款功能只能在该功能明确的目的和限制范围内使用。其他机制不得被主要改作掩饰赠与、捐款、暂存价值或输送财富的工具。',
      '虚假工资或公司分配、串通或操纵的投标、循环的股票或公司交易、协调进行的自我交易、利用替代账户绕过功能限制以及类似安排，如果有合理证据表明其真实目的在于被禁止的价值转移、操纵、利用漏洞或现实货币交易，可能会受到调查。真实的工资、股息、投标、公司融资决定或Union Project贡献，不会仅仅因为金额大、条件慷慨、做法少见或经济影响较大而自动构成违规。',
      '服务器端的上限、权限、冷却时间、计算公式或界面中是否显示某个选项只决定功能的技术行为，本身既不能证明某种行为在条款下必然被允许，也不能证明其属于滥用。CK-Labs会结合功能的设计目的和相关证据进行判断，任何纠正或账户限制都应保持适度，并保护无关的合法付费价值和不可放弃的法定权利。',
    ],
  },
  zh_Hant: {
    label: '玩法規則說明 · 2026年9月10日',
    title: '公司、招標與聯盟經濟機制',
    paragraphs: [
      'TycoonX中有些功能原本就是為了移轉或分配遊戲內價值而設計，包括公司薪資與發薪、經授權的公司資金提取、股息、IPO認購、股份回購、二次發行、招標以及Union Project貢獻。只要玩家依照這些功能真正的遊戲用途使用它們，就不會僅因資金或其他遊戲價值發生移轉而構成違規。',
      '「其他遊戲機制不是捐贈管道」這項規則，並不禁止TycoonX明確設計用於貢獻或協助的功能。Begging以及可用的Union Project捐款功能只能在該功能明確的目的與限制範圍內使用。其他機制不得主要被改作掩飾贈與、捐款、暫存價值或輸送財富的工具。',
      '虛假薪資或公司分配、串通或操縱的投標、循環的股票或公司交易、協調進行的自我交易、利用替代帳號繞過功能限制以及類似安排，如果有合理證據顯示其真正目的在於被禁止的價值移轉、操縱、利用漏洞或現實貨幣交易，可能會受到調查。真實的薪資、股息、投標、公司融資決定或Union Project貢獻，不會僅因金額大、條件慷慨、做法少見或經濟影響重大而自動構成違規。',
      '伺服器端的上限、權限、冷卻時間、計算公式或介面中是否顯示某個選項只決定功能的技術行為，本身既不能證明某種行為在條款下必然被允許，也不能證明其屬於濫用。CK-Labs會結合功能的設計目的與相關證據判斷，任何更正或帳號限制都應符合比例原則，並保護無關的合法付費價值與不得放棄的法定權利。',
    ],
  },
  ar: {
    label: 'توضيح بشأن أسلوب اللعب · 10 سبتمبر 2026',
    title: 'آليات الشركات والمناقصات واقتصاد الاتحادات',
    paragraphs: [
      'تتضمن TycoonX آليات صُممت أصلًا لنقل القيمة داخل اللعبة أو توزيعها، ومنها رواتب الشركات وكشوف الأجور، والسحب المصرح به من خزينة الشركة، وتوزيعات الأرباح، والاكتتاب في IPO، وإعادة شراء الأسهم، والعروض الثانوية، والمناقصات، والمساهمات في Union Projects. ولا يصبح الاستخدام الحقيقي لإحدى هذه الميزات وفق غرضها المقصود محظورًا لمجرد أن المال أو قيمة أخرى داخل اللعبة انتقلت من طرف إلى آخر.',
      'وللتوضيح، فإن القاعدة التي تنص على أن آليات اللعب الأخرى ليست قنوات للتبرع لا تحظر ميزة صممتها TycoonX صراحة للمساهمة أو المساعدة. يجوز استخدام Begging وميزة التبرع المتاحة في Union Project فقط ضمن الغرض والحدود المحددة لتلك الميزة. ولا يجوز تحويل الآليات الأخرى أساسًا إلى وسيلة لإخفاء الهدايا أو التبرعات أو إيقاف القيمة مؤقتًا أو تمرير الثروة.',
      'يمكن التحقيق في الرواتب أو التوزيعات الصورية، والعطاءات المتواطأ عليها أو المتلاعب بها، والمعاملات الدائرية بالأسهم أو الشركات، والتعامل المنسق مع الذات، واستخدام حسابات بديلة لتجاوز حدود الميزات، والترتيبات المشابهة، عندما توجد أدلة معقولة على أن الغرض الحقيقي كان نقل قيمة محظورًا أو تلاعبًا أو إساءة استغلال لثغرة أو تداولًا مقابل أموال حقيقية. ولا يُعد الراتب أو توزيع الأرباح أو العطاء أو قرار تمويل الشركة أو المساهمة في Union Project مخالفة تلقائيًا لمجرد أنه سخي أو غير معتاد أو كبير من الناحية الاقتصادية.',
      'تحدد الحدود والصلاحيات وفترات الانتظار والصيغ على الخادم أو ظهور خيار في الواجهة السلوك التقني للميزة، لكنها لا تثبت وحدها أن السلوك مسموح أو مسيء بموجب الشروط. تقيّم CK-Labs الغرض المقصود للميزة والأدلة ذات الصلة، وتظل أي عملية تصحيح أو تقييد للحساب خاضعة للتناسب وحماية القيمة المدفوعة المشروعة غير المرتبطة والحقوق الإلزامية.',
    ],
  },
  nl: {
    label: 'Verduidelijking gameplay · 10 september 2026',
    title: 'Bedrijfs-, aanbestedings- en Unie-economie',
    paragraphs: [
      'TycoonX bevat spelmechanieken die juist zijn ontworpen om waarde in het spel te verplaatsen of te verdelen, waaronder bedrijfssalarissen en loonbetalingen, bevoegde opnames uit de bedrijfskas, dividenden, IPO-inschrijvingen, aandeleninkoop, secundaire uitgiftes, aanbestedingen en bijdragen aan Union Projects. Het oprechte gebruik van zo’n functie voor het bedoelde speldoel is niet verboden alleen omdat geld of andere spelwaarde van eigenaar verandert.',
      'De regel dat andere spelmechanieken geen donatiekanalen zijn, verbiedt geen functie die TycoonX uitdrukkelijk voor bijdragen of hulp heeft ontworpen. Begging en een beschikbare donatiefunctie voor een Union Project mogen alleen binnen het aangegeven doel en de grenzen van die functie worden gebruikt. Andere mechanieken mogen niet hoofdzakelijk worden omgebogen om cadeaus, donaties, het parkeren van waarde of het doorsluizen van vermogen te verhullen.',
      'Schijnsalarissen of -uitkeringen, afgesproken of gemanipuleerde aanbestedingsbiedingen, circulaire aandelen- of bedrijfstransacties, gecoördineerde zelfhandel, alternatieve accounts om functielimieten te omzeilen en vergelijkbare constructies kunnen worden onderzocht wanneer er redelijke aanwijzingen zijn dat het werkelijke doel een verboden waardeoverdracht, manipulatie, exploitmisbruik of handel voor echt geld was. Een echt salaris, dividend, bod, financieringsbesluit of Union-Project-bijdrage is niet automatisch een overtreding alleen omdat die royaal, ongebruikelijk of economisch groot is.',
      'Serverlimieten, bevoegdheden, wachttijden, formules of de zichtbaarheid van een optie in de interface bepalen de technische werking van de functie, maar bewijzen op zichzelf niet dat gedrag volgens de Voorwaarden is toegestaan of misbruik vormt. CK-Labs kijkt naar het bedoelde doel en relevant bewijs; correcties en accountbeperkingen blijven gebonden aan proportionaliteit, bescherming van niet-gerelateerde rechtmatig betaalde waarde en dwingende rechten.',
    ],
  },
  sv: {
    label: 'Förtydligande om spelmekanik · 10 september 2026',
    title: 'Företags-, anbuds- och Union-ekonomi',
    paragraphs: [
      'TycoonX innehåller spelmekaniker som uttryckligen är skapade för att flytta eller fördela värde i spelet, bland annat företagslöner och löneutbetalningar, behöriga uttag ur företagskassan, utdelningar, IPO-teckning, återköp, sekundära erbjudanden, anbud och bidrag till Union Projects. Att använda en sådan funktion på riktigt för dess avsedda speländamål är inte förbjudet enbart för att pengar eller annat spelvärde byter händer.',
      'Regeln om att andra spelmekaniker inte är donationskanaler förbjuder inte en funktion som TycoonX uttryckligen har utformat för bidrag eller hjälp. Begging och en tillgänglig donationsfunktion för ett Union Project får bara användas inom funktionens angivna syfte och gränser. Andra mekaniker får inte huvudsakligen användas på ett annat sätt för att dölja gåvor, donationer, parkering av värde eller förmögenhetsöverföringar.',
      'Skenlöner eller skenutdelningar, samordnade eller manipulerade anbud, cirkulära aktie- eller företagstransaktioner, koordinerad självhandel, alternativa konton för att kringgå funktionsgränser och liknande upplägg kan granskas när det finns rimliga belägg för att det verkliga syftet var en förbjuden värdeöverföring, manipulation, exploitmissbruk eller handel mot riktiga pengar. En legitim lön, utdelning, anbudsgivning, finansieringsåtgärd eller ett bidrag till ett Union Project är inte automatiskt ett regelbrott bara för att det är generöst, ovanligt eller ekonomiskt betydande.',
      'Servergränser, behörigheter, väntetider, formler eller att ett alternativ syns i gränssnittet definierar funktionens tekniska beteende, men bevisar inte i sig att ett beteende är tillåtet eller missbruk enligt Villkoren. CK-Labs bedömer funktionens avsedda syfte och relevant bevisning; korrigeringar och kontobegränsningar ska vara proportionerliga och respektera orelaterat legitimt betalt värde och tvingande rättigheter.',
    ],
  },
  nb: {
    label: 'Presisering av spillregler · 10. september 2026',
    title: 'Selskaps-, anbuds- og Union-økonomi',
    paragraphs: [
      'TycoonX har spillmekanikker som uttrykkelig er laget for å flytte eller fordele verdi i spillet, blant annet selskapslønn og lønnsutbetalinger, autoriserte uttak fra selskapskassen, utbytte, IPO-tegning, tilbakekjøp, sekundærtilbud, anbud og bidrag til Union Projects. Reell bruk av en slik funksjon til det tiltenkte spillformålet er ikke forbudt bare fordi penger eller annen spillverdi skifter hender.',
      'Regelen om at andre spillmekanikker ikke er donasjonskanaler, forbyr ikke en funksjon TycoonX uttrykkelig har laget for bidrag eller hjelp. Begging og en tilgjengelig donasjonsfunksjon for et Union Project kan bare brukes innenfor funksjonens oppgitte formål og grenser. Andre mekanikker kan ikke hovedsakelig brukes på en annen måte for å skjule gaver, donasjoner, parkering av verdi eller overføring av formue.',
      'Fiktive lønninger eller utdelinger, avtalte eller manipulerte anbud, sirkulære aksje- eller selskapstransaksjoner, koordinert egenhandel, alternative kontoer brukt til å omgå funksjonsgrenser og lignende opplegg kan undersøkes når det finnes rimelige holdepunkter for at det reelle formålet var en forbudt verdioverføring, manipulering, utnyttelse av exploits eller handel mot ekte penger. En legitim lønn, et utbytte, et anbud, en finansieringsbeslutning eller et bidrag til et Union Project er ikke automatisk et brudd bare fordi det er generøst, uvanlig eller økonomisk betydelig.',
      'Servergrenser, tillatelser, ventetider, formler eller at et valg vises i grensesnittet definerer funksjonens tekniske virkemåte, men beviser ikke alene at en handling er tillatt eller misbruk etter Vilkårene. CK-Labs vurderer funksjonens tiltenkte formål og relevant bevis; korrigeringer og kontobegrensninger skal være forholdsmessige og respektere urelatert legitimt kjøpt verdi og ufravikelige rettigheter.',
    ],
  },
  pl: {
    label: 'Wyjaśnienie zasad rozgrywki · 10 września 2026 r.',
    title: 'Mechaniki firm, przetargów i Unii',
    paragraphs: [
      'TycoonX zawiera mechaniki celowo zaprojektowane do przenoszenia lub rozdzielania wartości w grze, w tym wynagrodzenia i wypłaty w firmach, uprawnione wypłaty ze skarbca firmy, dywidendy, zapisy na IPO, skup akcji, oferty wtórne, przetargi oraz wpłaty na Union Projects. Rzeczywiste użycie takiej funkcji zgodnie z jej przeznaczeniem w grze nie jest zabronione tylko dlatego, że pieniądze lub inna wartość przechodzą z jednego podmiotu na drugi.',
      'Zasada, że inne mechaniki gry nie są kanałami darowizn, nie zakazuje funkcji, którą TycoonX wyraźnie zaprojektował do wpłat lub pomocy. Begging oraz dostępna funkcja darowizny na Union Project mogą być używane wyłącznie zgodnie z ich określonym celem i limitami. Innych mechanik nie wolno wykorzystywać głównie do ukrywania prezentów, darowizn, parkowania wartości lub przekazywania majątku.',
      'Pozorne wynagrodzenia lub wypłaty firmowe, uzgodnione albo manipulowane oferty przetargowe, okrężne transakcje akcjami lub firmami, skoordynowane transakcje z samym sobą, alternatywne konta używane do omijania limitów oraz podobne układy mogą być badane, gdy istnieją rozsądne dowody, że rzeczywistym celem był zakazany transfer wartości, manipulacja, nadużycie exploita lub handel za prawdziwe pieniądze. Prawdziwe wynagrodzenie, dywidenda, oferta przetargowa, decyzja finansowa firmy lub wpłata na Union Project nie stają się automatycznie naruszeniem tylko dlatego, że są hojne, nietypowe albo znaczące ekonomicznie.',
      'Limity, uprawnienia, okresy oczekiwania, formuły po stronie serwera lub widoczność opcji w interfejsie określają techniczne działanie funkcji, lecz same nie dowodzą, że dane zachowanie jest dozwolone albo stanowi nadużycie zgodnie z Warunkami. CK-Labs bierze pod uwagę przeznaczenie funkcji i odpowiednie dowody; korekty i ograniczenia kont muszą pozostać proporcjonalne oraz chronić niezwiązaną, prawidłowo opłaconą wartość i prawa bezwzględnie obowiązujące.',
    ],
  },
  th: {
    label: 'คำชี้แจงเกี่ยวกับรูปแบบการเล่น · 10 กันยายน 2026',
    title: 'กลไกเศรษฐกิจของบริษัท การประมูล และ Union',
    paragraphs: [
      'TycoonX มีกลไกที่ออกแบบมาโดยตั้งใจเพื่อโอนหรือกระจายมูลค่าภายในเกม เช่น เงินเดือนและการจ่ายเงินเดือนของบริษัท การถอนเงินจากคลังบริษัทที่ได้รับอนุญาต เงินปันผล การจองซื้อ IPO การซื้อหุ้นคืน การเสนอขายหุ้นเพิ่มเติม การประมูล และการสมทบให้ Union Projects การใช้ฟีเจอร์เหล่านี้จริงตามวัตถุประสงค์การเล่นที่ออกแบบไว้ไม่ถือว่าถูกห้ามเพียงเพราะมีเงินหรือมูลค่าในเกมเปลี่ยนมือ',
      'กฎที่ระบุว่ากลไกอื่นของเกมไม่ใช่ช่องทางบริจาคไม่ได้ห้ามฟีเจอร์ที่ TycoonX ออกแบบไว้อย่างชัดเจนสำหรับการสมทบหรือการช่วยเหลือ Begging และฟีเจอร์บริจาคให้ Union Project ที่มีให้ใช้งานสามารถใช้ได้เฉพาะตามวัตถุประสงค์และขีดจำกัดของฟีเจอร์นั้น กลไกอื่นต้องไม่ถูกนำไปใช้เป็นหลักเพื่ออำพรางของขวัญ การบริจาค การพักมูลค่า หรือการส่งต่อความมั่งคั่ง',
      'เงินเดือนหรือการจ่ายของบริษัทที่เป็นเพียงฉากบังหน้า การเสนอราคาที่ฮั้วหรือถูกบิดเบือน ธุรกรรมหุ้นหรือบริษัทแบบวนกลับ การซื้อขายกับตนเองแบบประสานกัน การใช้บัญชีอื่นเพื่อหลีกเลี่ยงขีดจำกัดของฟีเจอร์ และรูปแบบคล้ายกัน อาจถูกตรวจสอบเมื่อมีหลักฐานที่สมเหตุสมผลว่าจุดประสงค์จริงคือการโอนมูลค่าที่ต้องห้าม การบิดเบือน การใช้ช่องโหว่ในทางมิชอบ หรือการซื้อขายด้วยเงินจริง เงินเดือน เงินปันผล การเสนอราคา การตัดสินใจด้านเงินทุนของบริษัท หรือการสมทบให้ Union Project ที่ชอบด้วยกติกาไม่ถือเป็นการละเมิดโดยอัตโนมัติเพียงเพราะมีมูลค่าสูง ไม่ปกติ หรือเอื้อเฟื้อ',
      'ขีดจำกัด สิทธิ์ ระยะรอ สูตรฝั่งเซิร์ฟเวอร์ หรือการที่ตัวเลือกปรากฏในหน้าจอเป็นตัวกำหนดพฤติกรรมทางเทคนิคของฟีเจอร์ แต่ไม่ได้พิสูจน์ด้วยตัวเองว่าพฤติกรรมนั้นได้รับอนุญาตหรือเป็นการใช้ในทางมิชอบตามข้อกำหนด CK-Labs จะพิจารณาวัตถุประสงค์ของฟีเจอร์และหลักฐานที่เกี่ยวข้อง โดยการแก้ไขหรือจำกัดบัญชียังคงต้องได้สัดส่วนและต้องคุ้มครองมูลค่าที่ชำระโดยชอบซึ่งไม่เกี่ยวข้องและสิทธิที่กฎหมายบังคับ',
    ],
  },
  vi: {
    label: 'Làm rõ quy tắc gameplay · 10 tháng 9 năm 2026',
    title: 'Cơ chế kinh tế công ty, đấu thầu và Union',
    paragraphs: [
      'TycoonX có những cơ chế được thiết kế chủ đích để chuyển hoặc phân phối giá trị trong game, gồm lương và bảng lương công ty, khoản rút hợp lệ từ ngân quỹ công ty, cổ tức, đăng ký IPO, mua lại cổ phiếu, chào bán thứ cấp, đấu thầu và đóng góp cho Union Projects. Việc thực sự sử dụng một tính năng như vậy đúng mục đích gameplay của nó không bị cấm chỉ vì tiền hoặc giá trị trong game được chuyển từ bên này sang bên khác.',
      'Quy tắc nói rằng các cơ chế gameplay khác không phải là kênh quyên góp không cấm một tính năng mà TycoonX đã thiết kế rõ ràng cho việc đóng góp hoặc hỗ trợ. Begging và tính năng quyên góp cho Union Project khi có sẵn chỉ được dùng đúng mục đích và trong giới hạn của tính năng đó. Không được chủ yếu biến các cơ chế khác thành công cụ để che giấu quà tặng, quyên góp, giữ hộ giá trị hoặc chuyển tài sản.',
      'Lương hoặc khoản phân phối công ty mang tính giả tạo, hồ sơ dự thầu có thông đồng hoặc bị thao túng, giao dịch vòng tròn bằng cổ phiếu hoặc công ty, tự giao dịch có phối hợp, tài khoản thay thế dùng để né giới hạn tính năng và các cách dàn xếp tương tự có thể bị điều tra khi có bằng chứng hợp lý cho thấy mục đích thật sự là chuyển giá trị bị cấm, thao túng, lạm dụng exploit hoặc giao dịch bằng tiền thật. Một khoản lương, cổ tức, hồ sơ dự thầu, quyết định tài trợ công ty hoặc đóng góp Union Project hợp lệ không tự động là vi phạm chỉ vì hào phóng, bất thường hoặc có giá trị kinh tế lớn.',
      'Giới hạn, quyền, thời gian chờ, công thức phía máy chủ hoặc việc một tùy chọn xuất hiện trong giao diện chỉ xác định cách tính năng hoạt động về mặt kỹ thuật; riêng các yếu tố đó không chứng minh hành vi được phép hay là lạm dụng theo Điều khoản. CK-Labs xem xét mục đích thiết kế và bằng chứng liên quan; mọi điều chỉnh hoặc hạn chế tài khoản vẫn phải tương xứng, bảo vệ giá trị trả phí hợp pháp không liên quan và các quyền bắt buộc.',
    ],
  },
  uk: {
    label: 'Уточнення правил гри · 10 вересня 2026 року',
    title: 'Механіки компаній, тендерів і союзів',
    paragraphs: [
      'У TycoonX є механіки, спеціально створені для переміщення або розподілу ігрової цінності, зокрема зарплати й виплати працівникам компаній, дозволені вилучення з казни компанії, дивіденди, підписка на IPO, викуп акцій, вторинні пропозиції, тендери та внески до Union Projects. Справжнє використання такої функції за її передбаченим ігровим призначенням не забороняється лише тому, що гроші або інша ігрова цінність переходять від одного учасника до іншого.',
      'Правило про те, що інші ігрові механіки не є каналами для пожертв, не забороняє функцію, яку TycoonX прямо створив для внесків або допомоги. Begging і доступну функцію пожертви до Union Project можна використовувати лише відповідно до заявленої мети та обмежень цієї функції. Інші механіки не можна переважно перепризначати для приховування подарунків, пожертв, тимчасового зберігання цінності або переказування майна.',
      'Фіктивні зарплати чи виплати компанії, узгоджені або маніпульовані тендерні ставки, кругові операції з акціями чи компаніями, скоординовані операції із самим собою, альтернативні акаунти для обходу обмежень і подібні схеми можуть розслідуватися, якщо є розумні докази того, що справжньою метою був заборонений переказ цінності, маніпуляція, зловживання exploit або торгівля за реальні гроші. Справжня зарплата, дивіденд, тендерна ставка, рішення про фінансування компанії чи внесок до Union Project не стають порушенням автоматично лише тому, що вони щедрі, незвичні або економічно значні.',
      'Серверні ліміти, дозволи, періоди очікування, формули або наявність опції в інтерфейсі визначають технічну роботу функції, але самі по собі не доводять, що поведінка дозволена чи є зловживанням за Умовами. CK-Labs враховує призначення функції та відповідні докази; будь-які виправлення чи обмеження акаунта мають бути пропорційними та зберігати не пов’язану з порушенням законно придбану платну цінність і обов’язкові права.',
    ],
  },
  hi: {
    label: 'गेमप्ले नियम स्पष्टीकरण · 10 सितंबर 2026',
    title: 'कंपनी, निविदा और Union अर्थव्यवस्था मैकेनिक्स',
    paragraphs: [
      'TycoonX में कुछ ऐसे गेम मैकेनिक्स हैं जिन्हें जानबूझकर इन-गेम मूल्य को स्थानांतरित या वितरित करने के लिए बनाया गया है, जैसे कंपनी वेतन और पेरोल, अधिकृत कंपनी-ट्रेजरी निकासी, डिविडेंड, IPO सदस्यता, शेयर बायबैक, सेकेंडरी ऑफरिंग, टेंडर और Union Projects में योगदान। ऐसे फीचर का उसके वास्तविक और निर्धारित गेमप्ले उद्देश्य के लिए इस्तेमाल केवल इसलिए प्रतिबंधित नहीं है कि पैसा या अन्य इन-गेम मूल्य एक पक्ष से दूसरे पक्ष में जाता है।',
      'यह नियम कि अन्य गेम मैकेनिक्स दान के चैनल नहीं हैं, उस फीचर को प्रतिबंधित नहीं करता जिसे TycoonX ने योगदान या सहायता के लिए स्पष्ट रूप से बनाया है। Begging और उपलब्ध Union Project donation फीचर का उपयोग केवल उस फीचर के बताए गए उद्देश्य और सीमाओं के भीतर किया जा सकता है। अन्य मैकेनिक्स को मुख्य रूप से उपहार, दान, मूल्य को अस्थायी रूप से रखने या संपत्ति पहुंचाने को छिपाने के लिए दोबारा इस्तेमाल नहीं किया जा सकता।',
      'दिखावटी वेतन या कंपनी वितरण, मिलीभगत या हेरफेर वाली टेंडर बोली, चक्रीय शेयर या कंपनी लेन-देन, समन्वित self-dealing, फीचर सीमाओं को चकमा देने के लिए वैकल्पिक खाते और समान व्यवस्थाओं की जांच तब की जा सकती है जब उचित प्रमाण हो कि वास्तविक उद्देश्य प्रतिबंधित मूल्य हस्तांतरण, हेरफेर, exploit का दुरुपयोग या वास्तविक पैसे के बदले व्यापार था। वैध वेतन, डिविडेंड, टेंडर बोली, कंपनी वित्त निर्णय या Union Project योगदान केवल इसलिए अपने आप उल्लंघन नहीं बनता कि वह उदार, असामान्य या आर्थिक रूप से बड़ा है।',
      'सर्वर-साइड सीमाएं, अनुमतियां, cooldown, सूत्र या UI में किसी विकल्प का उपलब्ध होना फीचर के तकनीकी व्यवहार को तय करता है, लेकिन अकेले यह साबित नहीं करता कि कोई व्यवहार शर्तों के तहत अनुमत या दुरुपयोग है। CK-Labs फीचर के निर्धारित उद्देश्य और संबंधित प्रमाण को देखता है; कोई भी सुधार या खाता प्रतिबंध अनुपातिक होना चाहिए और असंबंधित वैध भुगतान मूल्य तथा अनिवार्य अधिकारों को सुरक्षित रखना चाहिए।',
    ],
  },
  id: {
    label: 'Penjelasan aturan gameplay · 10 September 2026',
    title: 'Mekanik ekonomi perusahaan, tender, dan Union',
    paragraphs: [
      'TycoonX memiliki mekanik yang memang dirancang untuk memindahkan atau membagikan nilai di dalam game, termasuk gaji dan pembayaran gaji perusahaan, penarikan kas perusahaan yang berwenang, dividen, langganan IPO, pembelian kembali saham, penawaran sekunder, tender, dan kontribusi Union Projects. Menggunakan salah satu fitur tersebut secara sungguh-sungguh sesuai tujuan gameplay-nya tidak dilarang hanya karena uang atau nilai game berpindah tangan.',
      'Aturan bahwa mekanik gameplay lain bukan saluran donasi tidak melarang fitur yang secara tegas dirancang TycoonX untuk kontribusi atau bantuan. Begging dan fitur donasi Union Project yang tersedia hanya boleh digunakan sesuai tujuan dan batas yang ditetapkan fitur tersebut. Mekanik lain tidak boleh terutama dialihfungsikan untuk menyamarkan hadiah, donasi, memarkir nilai, atau menyalurkan kekayaan.',
      'Gaji atau pembagian perusahaan yang pura-pura, penawaran tender yang berkolusi atau dimanipulasi, transaksi saham atau perusahaan yang berputar, self-dealing yang terkoordinasi, akun alternatif untuk menghindari batas fitur, dan skema serupa dapat diselidiki jika ada bukti yang wajar bahwa tujuan sebenarnya adalah pemindahan nilai yang dilarang, manipulasi, penyalahgunaan exploit, atau perdagangan dengan uang nyata. Gaji, dividen, penawaran tender, keputusan pendanaan perusahaan, atau kontribusi Union Project yang sah tidak otomatis menjadi pelanggaran hanya karena murah hati, tidak biasa, atau bernilai ekonomi besar.',
      'Batas, izin, masa tunggu, rumus di sisi server, atau tersedianya suatu pilihan di antarmuka menentukan cara teknis fitur bekerja, tetapi hal itu sendiri tidak membuktikan bahwa perilaku tersebut diizinkan atau merupakan penyalahgunaan menurut Ketentuan. CK-Labs mempertimbangkan tujuan fitur dan bukti yang relevan; setiap koreksi atau pembatasan akun tetap harus proporsional serta melindungi nilai berbayar sah yang tidak berkaitan dan hak yang wajib berlaku.',
    ],
  },
};

function getLocale(pathname: string): string | null {
  if (/^\/tyconx-terms-of-service\/?$/.test(pathname)) return 'en';
  const match = pathname.match(/^\/tycoonx-legal\/([^/]+)\/terms\/?$/);
  return match?.[1] ?? null;
}

export default function GameplayEconomyRuleNotice() {
  const pathname = usePathname();
  const locale = getLocale(pathname);
  if (!locale || !copies[locale]) return null;

  const copy = copies[locale];
  const rtl = locale === 'ar';

  return (
    <section className="max-w-3xl mx-auto px-4 pb-12" lang={locale === 'en' ? 'en' : locale} dir={rtl ? 'rtl' : 'ltr'} aria-labelledby="tycoonx-gameplay-economy-rule-heading">
      <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/[0.05] p-6">
        <p className="text-emerald-300/80 text-xs font-medium tracking-wide mb-2">{copy.label}</p>
        <h2 id="tycoonx-gameplay-economy-rule-heading" className="text-white font-semibold mb-4">{copy.title}</h2>
        <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
          {copy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  );
}
