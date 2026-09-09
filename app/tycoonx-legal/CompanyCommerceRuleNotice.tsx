'use client';

import { usePathname } from 'next/navigation';

type RuleCopy = {
  label: string;
  title: string;
  paragraphs: string[];
};

const copies: Record<string, RuleCopy> = {
  en: {
    label: `Gameplay clarification · 10 September 2026`,
    title: `Company supply, exports and tenders`,
    paragraphs: [
      `TycoonX Company supply requests, warehouse fulfillment, export offers and contracts, and live or blind tenders are genuine gameplay systems. Current server permissions such as manage_supply, manage_exports and manage_tenders control who may perform particular actions for a Company. Genuine use for procurement, delivery, Company operations or competitive bidding is not prohibited merely because in-game money, goods, rewards or penalties move between players or Companies.`,
      `These systems must not be used mainly for sham procurement, collusive bidding, coordinated self-dealing between controlled accounts or Companies, false fulfillment, deliberate non-performance, artificial pricing intended to funnel value, or knowing exploitation of duplicate, stale, cancellation or settlement behavior. A high or low price, an unusual bid, a tender loss, a failed contract, insolvency or a profitable transaction alone is not proof of abuse.`,
      `A server-accepted action, visible button or recorded payout is not by itself a guarantee that every resulting state is valid if a bug, stale state, configuration error or duplicated settlement occurred. CK-Labs may reconcile directly attributable invalid money, goods, penalties, delivery states or Company balances and may temporarily restrict affected actions while investigating. Accidental one-off use, outages and account compromise must be distinguished from knowing or repeated exploitation; unrelated legitimate paid value and mandatory consumer rights remain protected.`,
    ],
  },
  tr: {
    label: `Oynanış açıklaması · 10 Eylül 2026`,
    title: `Şirket tedariki, ihracatlar ve ihaleler`,
    paragraphs: [
      `TycoonX Şirket tedarik talepleri, depo üzerinden karşılama, ihracat teklifleri ve sözleşmeleri ile açık ya da kapalı ihaleler gerçek oyun sistemleridir. manage_supply, manage_exports ve manage_tenders gibi mevcut sunucu yetkileri, bir Şirket adına belirli işlemleri kimin yapabileceğini belirler. Satın alma, teslimat, Şirket faaliyeti veya rekabetçi teklif verme amacıyla gerçek kullanım; oyun içi para, ürün, ödül veya ceza oyuncular ya da Şirketler arasında hareket ediyor diye yasak olmaz.`,
      `Bu sistemler göstermelik satın alma, danışıklı teklif verme, aynı kişi tarafından kontrol edilen hesaplar veya Şirketler arasında koordineli kendi kendine işlem, sahte teslimat, kasıtlı ifa etmeme, değer aktarmak için yapay fiyat belirleme ya da yinelenen, eski durumlu, iptal veya mutabakat davranışlarının bilerek sömürülmesi için esas olarak kullanılamaz. Yüksek veya düşük fiyat, sıra dışı teklif, ihale kaybı, başarısız sözleşme, iflas durumu ya da kârlı bir işlem tek başına kötüye kullanım kanıtı değildir.`,
      `Sunucunun bir işlemi kabul etmesi, bir düğmenin görünmesi veya bir ödemenin kaydedilmesi; hata, eski durum, yapılandırma hatası ya da yinelenen mutabakat varsa ortaya çıkan her sonucun geçerli olduğunu tek başına garanti etmez. CK-Labs doğrudan ilişkilendirilebilen geçersiz para, ürün, ceza, teslimat durumu veya Şirket bakiyelerini uzlaştırabilir ve inceleme sırasında etkilenen işlemleri geçici olarak kısıtlayabilir. Tek seferlik kazara kullanım, kesintiler ve hesap ele geçirilmesi; bilerek veya tekrarlı sömürüden ayrılmalıdır. İlgisiz meşru ücretli değer ve zorunlu tüketici hakları korunur.`,
    ],
  },
  de: {
    label: `Klarstellung zum Gameplay · 10. September 2026`,
    title: `Unternehmensversorgung, Exporte und Ausschreibungen`,
    paragraphs: [
      `Versorgungsanfragen von TycoonX-Unternehmen, Erfüllung aus dem Lager, Exportangebote und -verträge sowie offene oder verdeckte Ausschreibungen sind echte Spielsysteme. Aktuelle Serverberechtigungen wie manage_supply, manage_exports und manage_tenders bestimmen, wer bestimmte Handlungen für ein Unternehmen ausführen darf. Eine echte Nutzung für Beschaffung, Lieferung, Unternehmensbetrieb oder Wettbewerb ist nicht allein deshalb verboten, weil Spielgeld, Waren, Vergütungen oder Vertragsstrafen zwischen Spielern oder Unternehmen bewegt werden.`,
      `Diese Systeme dürfen nicht hauptsächlich für Scheinbeschaffung, abgesprochene Gebote, koordinierte Eigengeschäfte zwischen kontrollierten Konten oder Unternehmen, vorgetäuschte Erfüllung, bewusstes Nichterfüllen, künstliche Preise zur Wertverschiebung oder die wissentliche Ausnutzung von Duplikat-, veralteten Zustands-, Stornierungs- oder Abrechnungsfehlern verwendet werden. Ein hoher oder niedriger Preis, ein ungewöhnliches Gebot, eine verlorene Ausschreibung, ein gescheiterter Vertrag, Insolvenz oder ein profitables Geschäft beweisen für sich allein keinen Missbrauch.`,
      `Dass der Server eine Handlung akzeptiert, eine Schaltfläche anzeigt oder eine Auszahlung verbucht, garantiert nicht für sich allein, dass jeder daraus entstehende Zustand gültig ist, wenn ein Fehler, veralteter Zustand, Konfigurationsfehler oder eine doppelte Abrechnung vorliegt. CK-Labs kann unmittelbar zurechenbares ungültiges Geld, Waren, Vertragsstrafen, Lieferzustände oder Unternehmenssalden berichtigen und betroffene Handlungen während einer Prüfung vorübergehend beschränken. Versehentliche einmalige Nutzung, Ausfälle und Kontokompromittierung sind von wissentlich wiederholter Ausnutzung zu unterscheiden; nicht betroffene rechtmäßig bezahlte Werte und zwingende Verbraucherrechte bleiben geschützt.`,
    ],
  },
  es: {
    label: `Aclaración sobre el juego · 10 de septiembre de 2026`,
    title: `Suministro de empresas, exportaciones y licitaciones`,
    paragraphs: [
      `Las solicitudes de suministro de empresas, el abastecimiento desde almacén, las ofertas y contratos de exportación y las licitaciones abiertas o a sobre cerrado de TycoonX son sistemas reales del juego. Los permisos actuales del servidor, como manage_supply, manage_exports y manage_tenders, determinan quién puede realizar determinadas acciones por una empresa. Su uso real para aprovisionamiento, entrega, gestión empresarial o puja competitiva no está prohibido solo porque dinero, bienes, recompensas o penalizaciones del juego pasen entre jugadores o empresas.`,
      `Estos sistemas no pueden utilizarse principalmente para compras ficticias, pujas concertadas, operaciones coordinadas consigo mismo entre cuentas o empresas controladas, cumplimientos simulados, incumplimientos deliberados, precios artificiales destinados a canalizar valor o explotación consciente de duplicados, estados obsoletos, cancelaciones o liquidaciones defectuosas. Un precio alto o bajo, una puja inusual, perder una licitación, un contrato fallido, una insolvencia o una operación rentable no demuestran por sí solos un abuso.`,
      `Que el servidor acepte una acción, muestre un botón o registre un pago no garantiza por sí mismo que todo estado resultante sea válido si ha habido un error, un estado desactualizado, una configuración incorrecta o una liquidación duplicada. CK-Labs puede conciliar dinero, bienes, penalizaciones, estados de entrega o saldos de empresa inválidos directamente atribuibles y limitar temporalmente las acciones afectadas mientras investiga. El uso accidental y aislado, las interrupciones y una cuenta comprometida deben distinguirse de la explotación consciente o repetida; se protegen los valores legítimamente pagados no relacionados y los derechos imperativos del consumidor.`,
    ],
  },
  es_MX: {
    label: `Aclaración de jugabilidad · 10 de septiembre de 2026`,
    title: `Abasto de empresas, exportaciones y licitaciones`,
    paragraphs: [
      `Las solicitudes de abasto de empresas, el surtido desde almacén, las ofertas y contratos de exportación y las licitaciones abiertas o cerradas de TycoonX son sistemas reales del juego. Los permisos actuales del servidor, como manage_supply, manage_exports y manage_tenders, definen quién puede realizar determinadas acciones por una empresa. Usarlos de forma genuina para comprar insumos, entregar productos, operar una empresa o competir con una oferta no está prohibido solo porque dinero, bienes, recompensas o penalizaciones del juego cambien de manos entre jugadores o empresas.`,
      `Estos sistemas no deben usarse principalmente para compras simuladas, ofertas acordadas entre participantes, operaciones coordinadas con uno mismo entre cuentas o empresas controladas, entregas falsas, incumplimientos deliberados, precios artificiales para canalizar valor ni para aprovechar conscientemente duplicados, estados desactualizados, cancelaciones o liquidaciones defectuosas. Un precio alto o bajo, una oferta poco común, perder una licitación, un contrato fallido, una insolvencia o una operación rentable por sí solos no prueban abuso.`,
      `Que el servidor acepte una acción, que aparezca un botón o que se registre un pago no garantiza por sí solo que todo el resultado sea válido si hubo un bug, estado desactualizado, error de configuración o liquidación duplicada. CK-Labs puede conciliar dinero, bienes, penalizaciones, estados de entrega o saldos de empresa inválidos directamente atribuibles y limitar temporalmente las acciones afectadas mientras investiga. Un uso accidental aislado, una caída del servicio o una cuenta comprometida deben distinguirse de una explotación consciente o repetida; el valor legítimamente pagado no relacionado y los derechos obligatorios del consumidor siguen protegidos.`,
    ],
  },
  fr: {
    label: `Précision sur le gameplay · 10 septembre 2026`,
    title: `Approvisionnement des entreprises, exportations et appels d’offres`,
    paragraphs: [
      `Les demandes d’approvisionnement d’entreprise, l’exécution depuis l’entrepôt, les offres et contrats d’exportation ainsi que les appels d’offres ouverts ou à offres scellées de TycoonX sont de véritables systèmes de jeu. Les autorisations serveur actuelles, telles que manage_supply, manage_exports et manage_tenders, déterminent qui peut effectuer certaines actions pour une entreprise. Leur utilisation réelle pour l’approvisionnement, la livraison, l’exploitation de l’entreprise ou une mise en concurrence n’est pas interdite du seul fait que de l’argent, des biens, des récompenses ou des pénalités en jeu passent entre joueurs ou entreprises.`,
      `Ces systèmes ne doivent pas être utilisés principalement pour des achats fictifs, des offres concertées, des opérations coordonnées avec soi-même entre comptes ou entreprises contrôlés, une exécution simulée, un défaut volontaire, des prix artificiels destinés à transférer de la valeur ou l’exploitation consciente de doublons, d’états obsolètes, d’annulations ou de règlements défectueux. Un prix élevé ou bas, une offre inhabituelle, la perte d’un appel d’offres, l’échec d’un contrat, une insolvabilité ou une opération rentable ne suffisent pas à eux seuls à démontrer un abus.`,
      `Le fait que le serveur accepte une action, qu’un bouton soit visible ou qu’un paiement soit enregistré ne garantit pas à lui seul la validité de tout état qui en résulte lorsqu’un bug, un état obsolète, une erreur de configuration ou un double règlement est intervenu. CK-Labs peut rapprocher les montants, biens, pénalités, états de livraison ou soldes d’entreprise invalides directement attribuables et limiter temporairement les actions concernées pendant l’examen. Une utilisation accidentelle isolée, une panne ou la compromission d’un compte doivent être distinguées d’une exploitation consciente ou répétée; les valeurs payantes légitimes sans rapport et les droits impératifs des consommateurs restent protégés.`,
    ],
  },
  fr_CA: {
    label: `Précision sur le jeu · 10 septembre 2026`,
    title: `Approvisionnement des entreprises, exportations et appels d’offres`,
    paragraphs: [
      `Les demandes d’approvisionnement d’entreprise, l’exécution à partir de l’entrepôt, les offres et contrats d’exportation ainsi que les appels d’offres ouverts ou scellés de TycoonX sont de véritables systèmes de jeu. Les autorisations serveur actuelles, comme manage_supply, manage_exports et manage_tenders, déterminent qui peut effectuer certaines actions pour une entreprise. Une utilisation réelle pour l’approvisionnement, la livraison, les activités de l’entreprise ou une soumission concurrentielle n’est pas interdite simplement parce que de l’argent, des biens, des récompenses ou des pénalités du jeu passent entre joueurs ou entreprises.`,
      `Ces systèmes ne doivent pas servir principalement à des achats de façade, à des soumissions concertées, à des transactions coordonnées avec soi-même entre comptes ou entreprises contrôlés, à une fausse exécution, à un défaut volontaire, à des prix artificiels destinés à canaliser de la valeur ou à l’exploitation consciente de doublons, d’états périmés, d’annulations ou de règlements défectueux. Un prix élevé ou faible, une soumission inhabituelle, un appel d’offres perdu, un contrat échoué, une insolvabilité ou une transaction rentable ne prouvent pas à eux seuls un abus.`,
      `Une action acceptée par le serveur, un bouton visible ou un paiement enregistré ne garantit pas à lui seul que tout état qui en découle est valide s’il y a eu un bogue, un état périmé, une erreur de configuration ou un règlement en double. CK-Labs peut rapprocher l’argent, les biens, les pénalités, les états de livraison ou les soldes d’entreprise invalides directement attribuables et restreindre temporairement les actions touchées pendant l’examen. Une utilisation accidentelle isolée, une interruption de service ou un compte compromis doivent être distingués d’une exploitation consciente ou répétée; les valeurs payées légitimes non liées et les droits impératifs des consommateurs demeurent protégés.`,
    ],
  },
  it: {
    label: `Chiarimento sul gameplay · 10 settembre 2026`,
    title: `Forniture aziendali, esportazioni e gare`,
    paragraphs: [
      `Le richieste di fornitura delle aziende, l’evasione dal magazzino, le offerte e i contratti di esportazione e le gare aperte o a offerta segreta di TycoonX sono sistemi di gioco reali. Le autorizzazioni server attuali, come manage_supply, manage_exports e manage_tenders, stabiliscono chi può compiere determinate azioni per un’azienda. L’uso genuino per approvvigionamento, consegna, gestione aziendale o offerta competitiva non è vietato solo perché denaro, merci, premi o penali di gioco passano tra giocatori o aziende.`,
      `Questi sistemi non possono essere usati principalmente per acquisti fittizi, offerte collusive, operazioni coordinate con sé stessi tra account o aziende controllati, adempimenti simulati, inadempimenti intenzionali, prezzi artificiali destinati a convogliare valore o sfruttamento consapevole di duplicazioni, stati obsoleti, annullamenti o regolamenti errati. Un prezzo alto o basso, un’offerta insolita, la perdita di una gara, un contratto fallito, un’insolvenza o un’operazione redditizia non dimostrano da soli un abuso.`,
      `Il fatto che il server accetti un’azione, mostri un pulsante o registri un pagamento non garantisce da solo che ogni stato risultante sia valido se si è verificato un bug, uno stato obsoleto, un errore di configurazione o un regolamento duplicato. CK-Labs può riconciliare denaro, merci, penali, stati di consegna o saldi aziendali non validi direttamente attribuibili e limitare temporaneamente le azioni interessate durante la verifica. Un uso accidentale isolato, un disservizio o la compromissione dell’account devono essere distinti dallo sfruttamento consapevole o ripetuto; il valore pagato legittimo non collegato e i diritti inderogabili dei consumatori restano protetti.`,
    ],
  },
  pt: {
    label: `Esclarecimento sobre a jogabilidade · 10 de setembro de 2026`,
    title: `Abastecimento de empresas, exportações e concursos`,
    paragraphs: [
      `Os pedidos de abastecimento das empresas, o fornecimento a partir do armazém, as ofertas e contratos de exportação e os concursos abertos ou de proposta fechada do TycoonX são sistemas reais do jogo. As permissões atuais do servidor, como manage_supply, manage_exports e manage_tenders, determinam quem pode realizar certas ações por uma empresa. A utilização genuína para aprovisionamento, entrega, operação da empresa ou apresentação de uma proposta competitiva não é proibida apenas porque dinheiro, bens, recompensas ou penalizações do jogo passam entre jogadores ou empresas.`,
      `Estes sistemas não podem ser usados principalmente para compras fictícias, propostas concertadas, negócios coordenados consigo próprio entre contas ou empresas controladas, cumprimento simulado, incumprimento deliberado, preços artificiais destinados a canalizar valor ou exploração consciente de duplicações, estados desatualizados, cancelamentos ou liquidações defeituosas. Um preço alto ou baixo, uma proposta invulgar, perder um concurso, um contrato falhado, insolvência ou uma operação lucrativa não são, por si só, prova de abuso.`,
      `O facto de o servidor aceitar uma ação, apresentar um botão ou registar um pagamento não garante, por si só, que todo o estado resultante seja válido se tiver ocorrido um erro, estado desatualizado, configuração incorreta ou liquidação duplicada. A CK-Labs pode reconciliar dinheiro, bens, penalizações, estados de entrega ou saldos de empresa inválidos diretamente atribuíveis e limitar temporariamente as ações afetadas durante a análise. Uma utilização acidental isolada, uma indisponibilidade ou uma conta comprometida devem ser distinguidas de exploração consciente ou repetida; o valor pago legítimo não relacionado e os direitos imperativos dos consumidores continuam protegidos.`,
    ],
  },
  pt_BR: {
    label: `Esclarecimento de jogabilidade · 10 de setembro de 2026`,
    title: `Suprimentos de empresas, exportações e licitações`,
    paragraphs: [
      `As solicitações de suprimentos das empresas, o atendimento pelo estoque do armazém, as ofertas e contratos de exportação e as licitações abertas ou fechadas do TycoonX são sistemas reais do jogo. As permissões atuais do servidor, como manage_supply, manage_exports e manage_tenders, determinam quem pode executar determinadas ações por uma empresa. O uso legítimo para compras, entregas, operação da empresa ou disputa competitiva não é proibido apenas porque dinheiro, mercadorias, recompensas ou penalidades do jogo passam entre jogadores ou empresas.`,
      `Esses sistemas não podem ser usados principalmente para compras de fachada, propostas combinadas, operações coordenadas consigo mesmo entre contas ou empresas controladas, cumprimento falso, descumprimento deliberado, preços artificiais destinados a canalizar valor ou exploração consciente de duplicações, estados desatualizados, cancelamentos ou liquidações incorretas. Um preço alto ou baixo, uma proposta incomum, perder uma licitação, um contrato que falhou, insolvência ou uma operação lucrativa não provam abuso por si só.`,
      `O servidor aceitar uma ação, um botão estar visível ou um pagamento ser registrado não garante, por si só, que todo estado resultante seja válido se houver bug, estado desatualizado, erro de configuração ou liquidação duplicada. A CK-Labs pode reconciliar dinheiro, mercadorias, penalidades, estados de entrega ou saldos de empresa inválidos diretamente atribuíveis e restringir temporariamente as ações afetadas durante a investigação. Uso acidental isolado, indisponibilidade do serviço ou conta comprometida devem ser diferenciados de exploração consciente ou repetida; valores legítimos pagos sem relação com o caso e direitos obrigatórios do consumidor permanecem protegidos.`,
    ],
  },
  ru: {
    label: `Пояснение правил игры · 10 сентября 2026 г.`,
    title: `Снабжение компаний, экспорт и тендеры`,
    paragraphs: [
      `Заявки компаний на снабжение, выполнение поставок со склада, экспортные предложения и контракты, а также открытые и закрытые тендеры в TycoonX являются полноценными игровыми системами. Текущие серверные разрешения, такие как manage_supply, manage_exports и manage_tenders, определяют, кто может выполнять конкретные действия от имени компании. Добросовестное использование для закупок, поставок, работы компании или конкурентных торгов не запрещается лишь потому, что игровые деньги, товары, вознаграждения или штрафы переходят между игроками или компаниями.`,
      `Эти системы нельзя использовать главным образом для фиктивных закупок, сговора на торгах, согласованных сделок с самим собой между контролируемыми аккаунтами или компаниями, ложного исполнения, намеренного неисполнения, искусственных цен для перекачки ценности либо сознательного использования дубликатов, устаревших состояний, отмен или ошибок расчёта. Высокая или низкая цена, необычная ставка, проигранный тендер, неисполненный контракт, неплатёжеспособность или прибыльная сделка сами по себе не доказывают злоупотребление.`,
      `Принятие действия сервером, наличие кнопки или запись выплаты сами по себе не гарантируют действительность всего результата, если возникли ошибка, устаревшее состояние, неверная конфигурация или двойной расчёт. CK-Labs может сверить и исправить непосредственно относимые недействительные деньги, товары, штрафы, состояния поставок или балансы компаний и временно ограничить затронутые действия на время проверки. Случайное единичное использование, сбои и компрометацию аккаунта необходимо отличать от сознательной или повторной эксплуатации; не связанная с нарушением законно оплаченная ценность и обязательные права потребителей сохраняются.`,
    ],
  },
  ja: {
    label: `ゲームプレイに関する明確化 · 2026年9月10日`,
    title: `会社の供給、輸出、入札`,
    paragraphs: [
      `TycoonX の会社向け供給依頼、倉庫からの履行、輸出オファーおよび契約、公開入札・非公開入札は、実際に用意されているゲームシステムです。manage_supply、manage_exports、manage_tenders などの現在のサーバー権限により、会社のために特定の操作を行える人が決まります。調達、納品、会社運営、競争入札という本来の目的で利用する限り、ゲーム内のお金、商品、報酬、違約金がプレイヤーや会社間で移動するという理由だけで禁止されることはありません。`,
      `これらのシステムを、架空の調達、談合入札、同一の管理下にあるアカウントや会社間での協調的な自己取引、虚偽の履行、意図的な不履行、価値移転を目的とした不自然な価格設定、または重複・古い状態・取消し・精算処理の不具合を認識しながら利用するために主として使うことはできません。価格が高い・低い、入札が珍しい、入札に負けた、契約が不履行になった、支払不能になった、利益が大きかった、という事情だけで不正利用とは判断されません。`,
      `サーバーが操作を受け付けたこと、ボタンが表示されたこと、または支払いが記録されたことだけで、バグ、古い状態、設定ミス、二重精算がある場合にも結果のすべてが有効であると保証されるわけではありません。CK-Labs は、直接関係する無効な金銭、商品、違約金、納品状態、会社残高を照合・修正し、調査中は関連操作を一時的に制限することがあります。偶発的な一度限りの利用、障害、アカウント侵害は、認識した上での反復的な悪用と区別されます。無関係な正当な有料価値および強行法上の消費者権利は保護されます。`,
    ],
  },
  ko: {
    label: `게임플레이 안내 · 2026년 9월 10일`,
    title: `회사 공급, 수출 및 입찰`,
    paragraphs: [
      `TycoonX의 회사 공급 요청, 창고를 통한 이행, 수출 제안 및 계약, 공개 또는 비공개 입찰은 실제 게임 시스템입니다. manage_supply, manage_exports, manage_tenders 같은 현재 서버 권한은 회사를 대신해 특정 작업을 수행할 수 있는 사람을 정합니다. 조달, 납품, 회사 운영 또는 경쟁 입찰이라는 본래 목적에 맞게 사용하는 행위는 게임 내 돈, 물품, 보상 또는 위약금이 플레이어나 회사 사이에서 이동한다는 이유만으로 금지되지 않습니다.`,
      `이 시스템을 형식적인 조달, 담합 입찰, 동일한 사람이 지배하는 계정이나 회사 사이의 조직적인 자기거래, 허위 이행, 고의적인 불이행, 가치 이전을 위한 인위적 가격 설정, 또는 중복·오래된 상태·취소·정산 오류의 의도적인 악용에 주로 사용해서는 안 됩니다. 높은 가격이나 낮은 가격, 특이한 입찰, 입찰 패배, 계약 실패, 지급불능 또는 수익성 높은 거래만으로는 부정행위가 입증되지 않습니다.`,
      `서버가 작업을 허용했거나 버튼이 표시되었거나 지급 기록이 남았다는 사실만으로 버그, 오래된 상태, 설정 오류 또는 중복 정산으로 발생한 모든 결과가 유효하다고 보장되지는 않습니다. CK-Labs는 직접 관련된 무효한 돈, 물품, 위약금, 납품 상태 또는 회사 잔액을 조정하고 조사 중 영향을 받은 작업을 일시적으로 제한할 수 있습니다. 우발적인 1회 사용, 서비스 장애 또는 계정 침해는 알고도 반복한 악용과 구분되어야 하며, 관련 없는 정당한 유료 가치와 강행 소비자 권리는 보호됩니다.`,
    ],
  },
  zh: {
    label: `遊戲規則說明 · 2026年9月10日`,
    title: `公司供應、出口與招標`,
    paragraphs: [
      `TycoonX 的公司供應需求、倉庫履約、出口要約與合約，以及公開或密封招標，都是實際的遊戲系統。manage_supply、manage_exports、manage_tenders 等現行伺服器權限決定誰可以代表公司執行特定操作。為採購、交付、公司營運或競爭性投標而真實使用這些功能，不會僅因遊戲內金錢、商品、獎勵或違約金在玩家或公司之間流動而被禁止。`,
      `這些系統不得主要用於虛假採購、串通投標、受同一方控制的帳號或公司之間協調自我交易、虛假履約、故意不履約、為轉移價值而設定人為價格，或明知而利用重複、舊狀態、取消或結算異常。價格偏高或偏低、投標不尋常、招標落敗、合約失敗、資不抵債或交易獲利，本身都不足以證明濫用。`,
      `伺服器接受某項操作、介面顯示按鈕或系統記錄付款，並不表示在發生程式錯誤、舊狀態、設定錯誤或重複結算時，所有結果必然有效。CK-Labs 可核對並修正可直接歸因的無效金錢、商品、違約金、交付狀態或公司餘額，並可在調查期間暫時限制受影響的操作。偶發的一次性使用、服務中斷或帳號遭入侵，必須與明知或反覆利用問題的行為區分；不相關的合法付費價值及強制性消費者權利仍受保障。`,
    ],
  },
  zh_Hans: {
    label: `游戏规则说明 · 2026年9月10日`,
    title: `公司供应、出口与招标`,
    paragraphs: [
      `TycoonX 的公司供应需求、仓库履约、出口要约和合同，以及公开或密封招标，都是实际的游戏系统。manage_supply、manage_exports、manage_tenders 等当前服务器权限决定谁可以代表公司执行特定操作。为了采购、交付、公司运营或竞争性投标而真实使用这些功能，不会仅因为游戏内金钱、商品、奖励或违约金在玩家或公司之间流动而被禁止。`,
      `这些系统不得主要用于虚假采购、串通投标、同一方控制的账号或公司之间协调自我交易、虚假履约、故意不履约、为了转移价值而设置人为价格，或明知而利用重复、过期状态、取消或结算异常。价格偏高或偏低、投标异常、招标落败、合同失败、资不抵债或交易获利，本身都不足以证明存在滥用。`,
      `服务器接受某项操作、界面显示按钮或系统记录付款，并不意味着在出现程序错误、过期状态、配置错误或重复结算时，所有结果都必然有效。CK-Labs 可以核对并纠正可直接归因的无效金钱、商品、违约金、交付状态或公司余额，并可在调查期间暂时限制受影响的操作。偶发的一次性使用、服务中断或账号被盗，应与明知或反复利用问题的行为区分；无关的合法付费价值和强制性消费者权利仍受保护。`,
    ],
  },
  zh_Hant: {
    label: `遊戲規則說明 · 2026年9月10日`,
    title: `公司供應、出口與招標`,
    paragraphs: [
      `TycoonX 的公司供應需求、倉庫履約、出口要約與合約，以及公開或密封招標，都是實際的遊戲系統。manage_supply、manage_exports、manage_tenders 等目前伺服器權限決定誰可以代表公司執行特定操作。為採購、交付、公司營運或競爭性投標而真實使用這些功能，不會僅因遊戲內金錢、商品、獎勵或違約金在玩家或公司之間流動而被禁止。`,
      `這些系統不得主要用於虛假採購、串通投標、受同一方控制的帳號或公司之間協調自我交易、虛假履約、故意不履約、為轉移價值而設定人為價格，或明知而利用重複、過期狀態、取消或結算異常。價格偏高或偏低、投標不尋常、招標落敗、合約失敗、資不抵債或交易獲利，本身都不足以證明濫用。`,
      `伺服器接受某項操作、介面顯示按鈕或系統記錄付款，並不表示在發生程式錯誤、過期狀態、設定錯誤或重複結算時，所有結果必然有效。CK-Labs 可核對並修正可直接歸因的無效金錢、商品、違約金、交付狀態或公司餘額，並可在調查期間暫時限制受影響的操作。偶發的一次性使用、服務中斷或帳號遭入侵，必須與明知或反覆利用問題的行為區分；不相關的合法付費價值及強制性消費者權利仍受保障。`,
    ],
  },
  ar: {
    label: `توضيح لقواعد اللعب · 10 سبتمبر 2026`,
    title: `توريد الشركات والصادرات والمناقصات`,
    paragraphs: [
      `تُعد طلبات توريد الشركات في TycoonX، والتنفيذ من مستودع الشركة، وعروض وعقود التصدير، والمناقصات المفتوحة أو المغلقة أنظمة لعب فعلية. وتحدد صلاحيات الخادم الحالية، مثل manage_supply وmanage_exports وmanage_tenders، من يحق له تنفيذ إجراءات معينة نيابة عن الشركة. ولا يُحظر الاستخدام الحقيقي لهذه الميزات لأغراض الشراء أو التسليم أو تشغيل الشركة أو المنافسة في المناقصات لمجرد انتقال أموال أو سلع أو مكافآت أو غرامات داخل اللعبة بين اللاعبين أو الشركات.`,
      `لا يجوز استخدام هذه الأنظمة أساسًا لمشتريات صورية، أو عطاءات متواطأ عليها، أو تعامل منسق مع الذات بين حسابات أو شركات تخضع لسيطرة واحدة، أو تنفيذ وهمي، أو إخلال متعمد، أو أسعار مصطنعة هدفها تمرير القيمة، أو الاستغلال المتعمد لحالات التكرار أو البيانات القديمة أو الإلغاء أو التسوية المعيبة. ولا يُعد السعر المرتفع أو المنخفض، أو العرض غير المعتاد، أو خسارة مناقصة، أو فشل عقد، أو الإعسار، أو صفقة مربحة دليلًا على الإساءة بمفرده.`,
      `قبول الخادم لإجراء ما، أو ظهور زر، أو تسجيل دفعة لا يضمن وحده صحة كل نتيجة إذا حدث خلل برمجي أو حالة قديمة أو خطأ في الإعداد أو تسوية مكررة. ويجوز لـ CK-Labs مطابقة وتصحيح الأموال أو السلع أو الغرامات أو حالات التسليم أو أرصدة الشركات غير الصحيحة التي يمكن نسبها مباشرة إلى المشكلة، كما يجوز تقييد الإجراءات المتأثرة مؤقتًا أثناء التحقيق. ويجب التمييز بين الاستخدام العرضي لمرة واحدة أو انقطاع الخدمة أو اختراق الحساب وبين الاستغلال المتعمد أو المتكرر؛ وتظل القيمة المدفوعة المشروعة غير المرتبطة والحقوق الإلزامية للمستهلك محفوظة.`,
    ],
  },
  nl: {
    label: `Verduidelijking gameplay · 10 september 2026`,
    title: `Bedrijfsbevoorrading, export en aanbestedingen`,
    paragraphs: [
      `Bevoorradingsverzoeken van TycoonX-bedrijven, levering uit het magazijn, exportaanbiedingen en -contracten en openbare of gesloten aanbestedingen zijn echte spelsystemen. Huidige serverrechten zoals manage_supply, manage_exports en manage_tenders bepalen wie bepaalde handelingen voor een bedrijf mag uitvoeren. Oprecht gebruik voor inkoop, levering, bedrijfsvoering of concurrerende biedingen is niet verboden alleen omdat spelgeld, goederen, beloningen of boetes tussen spelers of bedrijven bewegen.`,
      `Deze systemen mogen niet hoofdzakelijk worden gebruikt voor schijninkoop, afgesproken biedingen, gecoördineerde zelfhandel tussen gecontroleerde accounts of bedrijven, valse nakoming, opzettelijke wanprestatie, kunstmatige prijzen om waarde door te sluizen of het bewust uitbuiten van duplicaten, verouderde toestanden, annuleringen of foutieve afwikkeling. Een hoge of lage prijs, een ongewoon bod, een verloren aanbesteding, een mislukt contract, insolventie of een winstgevende transactie bewijst op zichzelf geen misbruik.`,
      `Dat de server een handeling accepteert, een knop toont of een betaling registreert, garandeert op zichzelf niet dat elke resulterende toestand geldig is wanneer een bug, verouderde toestand, configuratiefout of dubbele afwikkeling is opgetreden. CK-Labs kan rechtstreeks toerekenbaar ongeldig geld, goederen, boetes, leveringsstatussen of bedrijfssaldi reconciliëren en getroffen handelingen tijdens onderzoek tijdelijk beperken. Eenmalig onbedoeld gebruik, storingen en een gecompromitteerd account moeten worden onderscheiden van bewust of herhaald misbruik; niet-gerelateerde rechtmatig betaalde waarde en dwingende consumentenrechten blijven beschermd.`,
    ],
  },
  sv: {
    label: `Förtydligande om spelmekanik · 10 september 2026`,
    title: `Företagsförsörjning, export och anbud`,
    paragraphs: [
      `TycoonX-företagens inköpsförfrågningar, leverans från företagslager, exporterbjudanden och avtal samt öppna eller slutna anbud är verkliga spelsystem. Nuvarande serverbehörigheter som manage_supply, manage_exports och manage_tenders styr vem som får utföra vissa åtgärder för ett företag. Genuin användning för inköp, leverans, företagsdrift eller konkurrensutsatt budgivning är inte förbjuden bara för att spelpengar, varor, belöningar eller avtalsvite flyttas mellan spelare eller företag.`,
      `Systemen får inte främst användas för skeninköp, samordnade bud, koordinerad egenhandel mellan kontrollerade konton eller företag, falskt fullgörande, avsiktligt avtalsbrott, konstgjorda priser för att föra över värde eller medvetet utnyttjande av dubletter, gamla tillstånd, avbokningar eller felaktig avräkning. Ett högt eller lågt pris, ett ovanligt bud, en förlorad upphandling, ett misslyckat avtal, insolvens eller en lönsam transaktion är i sig inte bevis på missbruk.`,
      `Att servern godkänner en åtgärd, visar en knapp eller registrerar en utbetalning garanterar inte i sig att varje resulterande tillstånd är giltigt om ett fel, gammalt tillstånd, konfigurationsfel eller dubbel avräkning har inträffat. CK-Labs kan stämma av direkt hänförliga ogiltiga pengar, varor, viten, leveransstatusar eller företagssaldon och tillfälligt begränsa berörda åtgärder under utredningen. Oavsiktlig engångsanvändning, driftavbrott och kontokapning ska skiljas från medvetet eller upprepat utnyttjande; orelaterat legitimt betalt värde och tvingande konsumenträttigheter skyddas.`,
    ],
  },
  nb: {
    label: `Presisering av spillregler · 10. september 2026`,
    title: `Selskapsforsyning, eksport og anbud`,
    paragraphs: [
      `Forsyningsforespørsler for TycoonX-selskaper, levering fra selskapslager, eksporttilbud og kontrakter samt åpne eller lukkede anbud er reelle spillsystemer. Gjeldende servertillatelser som manage_supply, manage_exports og manage_tenders avgjør hvem som kan utføre bestemte handlinger for et selskap. Reell bruk til innkjøp, levering, selskapsdrift eller konkurrerende budgivning er ikke forbudt bare fordi spillpenger, varer, belønninger eller gebyrer flyttes mellom spillere eller selskaper.`,
      `Systemene kan ikke hovedsakelig brukes til skinninnkjøp, avtalte bud, koordinert egenhandel mellom kontrollerte kontoer eller selskaper, falsk oppfyllelse, bevisst mislighold, kunstige priser for å kanalisere verdi eller bevisst utnyttelse av duplikater, utdaterte tilstander, kanselleringer eller feil avregning. En høy eller lav pris, et uvanlig bud, et tapt anbud, en mislykket kontrakt, insolvens eller en lønnsom transaksjon er ikke alene bevis på misbruk.`,
      `At serveren godtar en handling, viser en knapp eller registrerer en utbetaling, garanterer ikke alene at alle resulterende tilstander er gyldige dersom en feil, utdatert tilstand, konfigurasjonsfeil eller dobbel avregning har oppstått. CK-Labs kan avstemme direkte henførbare ugyldige penger, varer, gebyrer, leveringsstatuser eller selskapssaldoer og midlertidig begrense berørte handlinger under gjennomgangen. Utilsiktet engangsbruk, driftsavbrudd og kompromitterte kontoer skal skilles fra bevisst eller gjentatt utnyttelse; urelatert legitimt betalt verdi og ufravikelige forbrukerrettigheter forblir beskyttet.`,
    ],
  },
  pl: {
    label: `Wyjaśnienie zasad rozgrywki · 10 września 2026 r.`,
    title: `Zaopatrzenie firm, eksport i przetargi`,
    paragraphs: [
      `Zapotrzebowania firm na dostawy, realizacja z magazynu, oferty i kontrakty eksportowe oraz przetargi otwarte lub zamknięte w TycoonX są rzeczywistymi systemami gry. Aktualne uprawnienia serwera, takie jak manage_supply, manage_exports i manage_tenders, określają, kto może wykonywać konkretne czynności w imieniu firmy. Rzeczywiste użycie do zaopatrzenia, dostaw, prowadzenia firmy lub konkurencyjnego składania ofert nie jest zabronione tylko dlatego, że pieniądze, towary, nagrody lub kary w grze przepływają między graczami albo firmami.`,
      `Systemów tych nie wolno używać głównie do pozornych zakupów, zmowy przetargowej, skoordynowanych transakcji z samym sobą między kontrolowanymi kontami lub firmami, fałszywego wykonania, celowego niewykonania, sztucznych cen służących do przekazywania wartości ani świadomego wykorzystywania duplikacji, nieaktualnych stanów, anulowań lub błędnych rozliczeń. Wysoka albo niska cena, nietypowa oferta, przegrany przetarg, niewykonany kontrakt, niewypłacalność lub zyskowna transakcja same w sobie nie dowodzą nadużycia.`,
      `To, że serwer przyjął działanie, wyświetlił przycisk lub zarejestrował wypłatę, samo w sobie nie gwarantuje ważności każdego wyniku, jeśli wystąpił błąd, nieaktualny stan, zła konfiguracja lub podwójne rozliczenie. CK-Labs może uzgodnić i skorygować bezpośrednio powiązane nieprawidłowe pieniądze, towary, kary, stany dostaw lub salda firm oraz tymczasowo ograniczyć dane działania na czas analizy. Przypadkowe jednorazowe użycie, awarie i przejęcie konta należy odróżniać od świadomego lub powtarzanego wykorzystywania problemu; niezwiązana z nim legalnie opłacona wartość i bezwzględnie obowiązujące prawa konsumenta pozostają chronione.`,
    ],
  },
  th: {
    label: `คำชี้แจงกติกาการเล่น · 10 กันยายน 2026`,
    title: `การจัดหาของบริษัท การส่งออก และการประมูล`,
    paragraphs: [
      `คำขอจัดหาสินค้าของบริษัท การส่งมอบจากคลังบริษัท ข้อเสนอและสัญญาส่งออก ตลอดจนการประมูลแบบเปิดหรือปิดใน TycoonX เป็นระบบการเล่นจริง สิทธิ์บนเซิร์ฟเวอร์ในปัจจุบัน เช่น manage_supply, manage_exports และ manage_tenders กำหนดว่าใครสามารถดำเนินการบางอย่างแทนบริษัทได้ การใช้งานอย่างแท้จริงเพื่อจัดซื้อ ส่งมอบ ดำเนินธุรกิจ หรือเสนอราคาแข่งขัน ไม่ถือว่าต้องห้ามเพียงเพราะเงิน สินค้า รางวัล หรือค่าปรับในเกมเคลื่อนย้ายระหว่างผู้เล่นหรือบริษัท`,
      `ห้ามใช้ระบบเหล่านี้เป็นหลักเพื่อจัดซื้อแบบหลอก การฮั้วประมูล การทำธุรกรรมกับตนเองแบบประสานกันระหว่างบัญชีหรือบริษัทที่อยู่ภายใต้การควบคุมเดียวกัน การอ้างว่าส่งมอบโดยไม่จริง การจงใจไม่ปฏิบัติตามสัญญา การตั้งราคาประดิษฐ์เพื่อส่งต่อมูลค่า หรือการรู้ตัวแล้วยังใช้ประโยชน์จากการทำรายการซ้ำ สถานะล้าสมัย การยกเลิก หรือการชำระบัญชีที่ผิดพลาด ราคาแพงหรือถูก การเสนอราคาที่ผิดปกติ การแพ้ประมูล สัญญาที่ล้มเหลว ภาวะล้มละลาย หรือธุรกรรมที่ทำกำไร ไม่ใช่หลักฐานการละเมิดโดยตัวมันเอง`,
      `การที่เซิร์ฟเวอร์ยอมรับคำสั่ง มีปุ่มให้กด หรือบันทึกการจ่ายเงิน ไม่ได้หมายความว่าผลลัพธ์ทุกอย่างถูกต้องเสมอ หากเกิดบั๊ก สถานะเก่า การตั้งค่าผิด หรือการชำระซ้ำ CK-Labs อาจกระทบยอดและแก้ไขเงิน สินค้า ค่าปรับ สถานะการส่งมอบ หรือยอดบริษัทที่ไม่ถูกต้องซึ่งเชื่อมโยงกับปัญหาโดยตรง และอาจจำกัดการดำเนินการที่เกี่ยวข้องชั่วคราวระหว่างตรวจสอบ การใช้งานผิดพลาดโดยไม่ตั้งใจครั้งเดียว เหตุขัดข้อง และบัญชีถูกยึด ต้องแยกจากการจงใจหรือใช้ซ้ำเพื่อเอาเปรียบ มูลค่าแบบชำระเงินที่ชอบด้วยกฎหมายซึ่งไม่เกี่ยวข้องและสิทธิผู้บริโภคที่บังคับใช้ยังคงได้รับการคุ้มครอง`,
    ],
  },
  vi: {
    label: `Giải thích quy tắc chơi · 10 tháng 9 năm 2026`,
    title: `Cung ứng công ty, xuất khẩu và đấu thầu`,
    paragraphs: [
      `Yêu cầu cung ứng của Công ty, việc thực hiện từ kho Công ty, đề nghị và hợp đồng xuất khẩu, cùng đấu thầu công khai hoặc kín trong TycoonX đều là các hệ thống trò chơi thực tế. Các quyền máy chủ hiện hành như manage_supply, manage_exports và manage_tenders xác định ai có thể thực hiện một số hành động nhất định thay mặt Công ty. Việc sử dụng thực sự cho mục đích mua sắm, giao hàng, vận hành Công ty hoặc đấu thầu cạnh tranh không bị cấm chỉ vì tiền, hàng hóa, phần thưởng hoặc khoản phạt trong game chuyển giữa người chơi hoặc Công ty.`,
      `Không được chủ yếu dùng các hệ thống này cho mua sắm giả tạo, thông đồng đấu thầu, tự giao dịch có phối hợp giữa các tài khoản hoặc Công ty cùng quyền kiểm soát, giả mạo việc thực hiện, cố ý không thực hiện, đặt giá nhân tạo nhằm chuyển giá trị hoặc cố ý khai thác trạng thái trùng lặp, lỗi thời, hủy bỏ hay quyết toán sai. Giá cao hay thấp, một mức giá thầu bất thường, thua thầu, hợp đồng thất bại, mất khả năng thanh toán hoặc một giao dịch có lãi tự nó không chứng minh hành vi lạm dụng.`,
      `Việc máy chủ chấp nhận một hành động, hiển thị nút hoặc ghi nhận khoản chi trả không tự động bảo đảm mọi trạng thái phát sinh đều hợp lệ nếu có lỗi, trạng thái cũ, cấu hình sai hoặc quyết toán trùng. CK-Labs có thể đối soát và sửa tiền, hàng hóa, khoản phạt, trạng thái giao hàng hoặc số dư Công ty không hợp lệ có thể quy trực tiếp cho vấn đề đó, đồng thời có thể tạm hạn chế thao tác liên quan trong thời gian kiểm tra. Việc vô tình sử dụng một lần, sự cố dịch vụ và tài khoản bị xâm nhập phải được phân biệt với hành vi biết rõ hoặc lặp lại để khai thác; giá trị trả phí hợp pháp không liên quan và các quyền bắt buộc của người tiêu dùng vẫn được bảo vệ.`,
    ],
  },
  uk: {
    label: `Пояснення правил гри · 10 вересня 2026 р.`,
    title: `Постачання компаній, експорт і тендери`,
    paragraphs: [
      `Запити компаній на постачання, виконання зі складу, експортні пропозиції та контракти, а також відкриті чи закриті тендери в TycoonX є реальними ігровими системами. Поточні серверні дозволи, як-от manage_supply, manage_exports і manage_tenders, визначають, хто може виконувати певні дії від імені компанії. Справжнє використання для закупівель, доставки, роботи компанії або конкурентних торгів не заборонене лише тому, що ігрові гроші, товари, винагороди чи штрафи переходять між гравцями або компаніями.`,
      `Ці системи не можна використовувати переважно для фіктивних закупівель, змови на торгах, скоординованих угод із самим собою між контрольованими акаунтами чи компаніями, удаваного виконання, навмисного невиконання, штучних цін для переказу цінності або свідомого використання дублікатів, застарілих станів, скасувань чи помилкових розрахунків. Висока або низька ціна, незвична ставка, програний тендер, невиконаний контракт, неплатоспроможність чи прибуткова операція самі по собі не доводять зловживання.`,
      `Те, що сервер прийняв дію, показав кнопку або зафіксував виплату, саме по собі не гарантує дійсності всього результату, якщо стався баг, застарілий стан, помилка конфігурації чи подвійний розрахунок. CK-Labs може звірити й виправити безпосередньо пов’язані недійсні гроші, товари, штрафи, стани доставки або баланси компаній і тимчасово обмежити відповідні дії під час перевірки. Випадкове одноразове використання, збої та компрометацію акаунта слід відрізняти від свідомої або повторної експлуатації; не пов’язана з порушенням законно оплачена цінність і обов’язкові права споживачів залишаються захищеними.`,
    ],
  },
  hi: {
    label: `गेमप्ले नियम स्पष्टीकरण · 10 सितंबर 2026`,
    title: `कंपनी सप्लाई, एक्सपोर्ट और टेंडर`,
    paragraphs: [
      `TycoonX में कंपनी सप्लाई रिक्वेस्ट, कंपनी वेयरहाउस से पूर्ति, एक्सपोर्ट ऑफर और कॉन्ट्रैक्ट, तथा लाइव या ब्लाइंड टेंडर वास्तविक गेम सिस्टम हैं। manage_supply, manage_exports और manage_tenders जैसी मौजूदा सर्वर अनुमतियाँ तय करती हैं कि कंपनी की ओर से कौन-सी कार्रवाई कौन कर सकता है। खरीद, डिलीवरी, कंपनी संचालन या प्रतिस्पर्धी बोली के वास्तविक उद्देश्य से इनका उपयोग केवल इसलिए प्रतिबंधित नहीं है कि इन-गेम पैसा, सामान, इनाम या पेनल्टी खिलाड़ियों या कंपनियों के बीच जाती है।`,
      `इन सिस्टमों का मुख्य उपयोग दिखावटी खरीद, मिलीभगत वाली बोली, एक ही नियंत्रण वाले अकाउंट या कंपनियों के बीच समन्वित self-dealing, झूठी पूर्ति, जानबूझकर कॉन्ट्रैक्ट पूरा न करना, मूल्य पहुँचाने के लिए कृत्रिम कीमतें तय करना, या duplicate, stale state, cancellation या settlement की गड़बड़ी को जानते हुए उसका फायदा उठाना नहीं होना चाहिए। ऊँची या नीची कीमत, असामान्य बोली, टेंडर हारना, कॉन्ट्रैक्ट विफल होना, insolvency या लाभदायक सौदा अपने आप में दुरुपयोग का प्रमाण नहीं है।`,
      `सर्वर द्वारा कार्रवाई स्वीकार कर लेना, बटन दिखाई देना या भुगतान दर्ज होना अपने आप यह गारंटी नहीं देता कि bug, stale state, configuration error या duplicate settlement होने पर हर परिणाम वैध है। CK-Labs सीधे संबंधित अमान्य पैसा, सामान, पेनल्टी, डिलीवरी स्थिति या कंपनी बैलेंस का मिलान और सुधार कर सकता है तथा जाँच के दौरान प्रभावित कार्रवाई को अस्थायी रूप से सीमित कर सकता है। अनजाने में एक बार हुए उपयोग, आउटेज या अकाउंट compromise को जानबूझकर या बार-बार exploit करने से अलग माना जाना चाहिए; असंबंधित वैध paid value और अनिवार्य उपभोक्ता अधिकार सुरक्षित रहते हैं।`,
    ],
  },
  id: {
    label: `Penjelasan aturan gameplay · 10 September 2026`,
    title: `Pasokan perusahaan, ekspor, dan tender`,
    paragraphs: [
      `Permintaan pasokan Perusahaan, pemenuhan dari gudang Perusahaan, penawaran dan kontrak ekspor, serta tender terbuka atau tertutup di TycoonX adalah sistem gameplay nyata. Izin server yang berlaku, seperti manage_supply, manage_exports, dan manage_tenders, menentukan siapa yang dapat melakukan tindakan tertentu untuk Perusahaan. Penggunaan yang sungguh-sungguh untuk pengadaan, pengiriman, operasi Perusahaan, atau penawaran kompetitif tidak dilarang hanya karena uang, barang, imbalan, atau penalti dalam game berpindah antara pemain atau Perusahaan.`,
      `Sistem ini tidak boleh terutama digunakan untuk pengadaan semu, tender yang diatur bersama, transaksi dengan diri sendiri secara terkoordinasi antara akun atau Perusahaan yang dikendalikan pihak yang sama, pemenuhan palsu, sengaja tidak memenuhi kontrak, harga buatan untuk menyalurkan nilai, atau dengan sadar mengeksploitasi duplikasi, status lama, pembatalan, atau penyelesaian yang salah. Harga tinggi atau rendah, tawaran yang tidak biasa, kalah tender, kontrak gagal, insolvensi, atau transaksi menguntungkan tidak dengan sendirinya membuktikan penyalahgunaan.`,
      `Tindakan yang diterima server, tombol yang terlihat, atau pembayaran yang tercatat tidak dengan sendirinya menjamin bahwa setiap keadaan hasilnya valid apabila terjadi bug, status lama, kesalahan konfigurasi, atau penyelesaian ganda. CK-Labs dapat merekonsiliasi uang, barang, penalti, status pengiriman, atau saldo Perusahaan yang tidak valid dan dapat diatribusikan langsung, serta membatasi sementara tindakan yang terdampak selama peninjauan. Penggunaan satu kali yang tidak disengaja, gangguan layanan, dan akun yang disusupi harus dibedakan dari eksploitasi yang diketahui atau diulang; nilai berbayar sah yang tidak terkait dan hak konsumen yang wajib tetap dilindungi.`,
    ],
  },
};

function getLocale(pathname: string): string | null {
  if (/^\/tyconx-terms-of-service\/?$/.test(pathname)) return 'en';
  const match = pathname.match(/^\/tycoonx-legal\/([^/]+)\/terms\/?$/);
  return match?.[1] ?? null;
}

function htmlLang(locale: string): string {
  const mapped: Record<string, string> = {
    es_MX: 'es-MX',
    fr_CA: 'fr-CA',
    pt_BR: 'pt-BR',
    zh_Hans: 'zh-Hans',
    zh_Hant: 'zh-Hant',
  };
  return mapped[locale] ?? locale;
}

export default function CompanyCommerceRuleNotice() {
  const pathname = usePathname();
  const locale = getLocale(pathname);
  if (!locale || !copies[locale]) return null;

  const copy = copies[locale];
  const rtl = locale === 'ar';

  return (
    <section className="max-w-3xl mx-auto px-4 pb-12" lang={htmlLang(locale)} dir={rtl ? 'rtl' : 'ltr'} aria-labelledby="tycoonx-company-commerce-rule-heading">
      <div className="rounded-xl border border-sky-400/20 bg-sky-400/[0.05] p-6">
        <p className="text-sky-300/80 text-xs font-medium tracking-wide mb-2">{copy.label}</p>
        <h2 id="tycoonx-company-commerce-rule-heading" className="text-white font-semibold mb-4">{copy.title}</h2>
        <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
          {copy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  );
}
