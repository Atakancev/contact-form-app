'use client';

import { usePathname } from 'next/navigation';

type Copy = {
  label: string;
  title: string;
  paragraphs: string[];
};

const copies: Record<string, Copy> = {
  en: {
    label: 'Purchases update · 5 September 2026',
    title: 'Official purchases versus player-to-player and off-platform deals',
    paragraphs: [
      'This Purchases & Refunds Policy applies to genuine purchases made through an authorized TycoonX purchase channel, such as Apple App Store In-App Purchase, Google Play, or the official TycoonX web shop using Xsolla. An in-game trade, art purchase, company transaction, Begging transfer, or other player-to-player movement of game value does not become an official CK-Labs purchase merely because value changes hands inside TycoonX.',
      'Unauthorized real-money trading or another off-platform deal between users is not an official TycoonX purchase. CK-Labs is not the seller, payment processor, escrow service, guarantor, debt collector, or refund provider for such a deal and does not promise to recover real money, cryptocurrency, gift cards, physical goods, outside services, or other consideration exchanged between users. CK-Labs may still investigate or reverse the related in-game activity and apply the Terms where the transaction violates the genuine-transaction or real-money-trading rules.',
      'A separately completed legitimate Apple, Google Play, or Xsolla purchase keeps the refund, withdrawal, conformity, restoration, and other mandatory rights that apply to that purchase. A player’s unrelated gameplay or RMT violation does not by itself erase those rights. Where TycoonX expressly enables a platform-supported gift or transfer mechanism, that feature follows its disclosed rules and the applicable platform rules rather than becoming an unrestricted cash-out or resale system.',
      'Nothing here limits rights that cannot legally be waived. In particular, CK-Labs will not use the fact that an unauthorized user-to-user deal occurred as a blanket reason to deny a mandatory remedy for an unrelated valid official purchase.',
    ],
  },
  tr: {
    label: 'Satın alma politikası güncellemesi · 5 Eylül 2026',
    title: 'Resmî satın alımlar ile oyuncular arası ve platform dışı anlaşmalar',
    paragraphs: [
      'Bu Satın Alımlar ve İadeler Politikası; Apple App Store uygulama içi satın alma, Google Play veya Xsolla kullanan resmî TycoonX web mağazası gibi yetkili TycoonX satın alma kanallarından yapılan gerçek satın alımlara uygulanır. Oyun içi ticaret, sanat eseri satın alımı, şirket işlemi, Begging üzerinden aktarım veya oyuncular arasında başka bir oyun değerinin el değiştirmesi, sırf TycoonX içinde değer aktarıldığı için CK-Labs ile yapılmış resmî bir satın alıma dönüşmez.',
      'Kullanıcılar arasındaki yetkisiz gerçek para ticareti veya başka bir platform dışı anlaşma resmî bir TycoonX satın alımı değildir. CK-Labs bu tür bir anlaşmanın satıcısı, ödeme işlemcisi, emanet hizmeti, garantörü, tahsilatçısı veya iade sağlayıcısı değildir ve kullanıcılar arasında verilen gerçek para, kripto para, hediye kartı, fiziksel mal, dış hizmet veya başka bir karşılığın geri alınacağını garanti etmez. Bununla birlikte ilgili oyun içi işlem, gerçek işlem veya gerçek para ticareti kurallarını ihlal ediyorsa CK-Labs bunu inceleyebilir, geri alabilir ve Koşulları uygulayabilir.',
      'Ayrı olarak tamamlanmış meşru bir Apple, Google Play veya Xsolla satın alımı, o satın alıma ilişkin iade, cayma, uygunluk, geri yükleme ve diğer zorunlu haklarını korur. Bir oyuncunun ilgisiz oyun içi ihlali veya gerçek para ticareti ihlali bu hakları tek başına ortadan kaldırmaz. TycoonX açıkça platform destekli bir hediye veya aktarım özelliği sunarsa bu özellik açıklanan koşullara ve ilgili platform kurallarına tabidir; sınırsız nakde çevirme veya yeniden satış sistemi haline gelmez.',
      'Buradaki hiçbir hüküm kanunen vazgeçilemeyen hakları sınırlandırmaz. Özellikle yetkisiz bir kullanıcılar arası anlaşmanın varlığı, ilgisiz ve geçerli resmî bir satın alma için zorunlu bir başvuru yolunu reddetmenin genel gerekçesi olarak kullanılamaz.',
    ],
  },
  de: {
    label: 'Aktualisierung zu Käufen · 5. September 2026',
    title: 'Offizielle Käufe gegenüber Spieler- und Off-Platform-Geschäften',
    paragraphs: [
      'Diese Richtlinie zu Käufen und Erstattungen gilt für echte Käufe über einen autorisierten TycoonX-Kanal, etwa Apple App Store In-App-Kauf, Google Play oder den offiziellen TycoonX-Webshop mit Xsolla. Ein Handel im Spiel, Kunstkauf, Unternehmensgeschäft, eine Übertragung über Begging oder eine andere Wertübertragung zwischen Spielern wird nicht allein deshalb zu einem offiziellen Kauf bei CK-Labs, weil innerhalb von TycoonX Spielwert den Besitzer wechselt.',
      'Nicht autorisierter Handel gegen echtes Geld oder ein anderes Geschäft außerhalb der Plattform zwischen Nutzern ist kein offizieller TycoonX-Kauf. CK-Labs ist dabei weder Verkäufer noch Zahlungsabwickler, Treuhänder, Garant, Inkassostelle oder Erstattungsanbieter und verspricht nicht, zwischen Nutzern ausgetauschtes Echtgeld, Kryptowährungen, Geschenkkarten, physische Waren, externe Dienstleistungen oder andere Gegenleistungen zurückzuholen. Verstößt die zugehörige Spieltransaktion gegen die Regeln zu echten Transaktionen oder Echtgeldhandel, kann CK-Labs sie dennoch prüfen, rückgängig machen und die Nutzungsbedingungen durchsetzen.',
      'Ein separat ordnungsgemäß abgeschlossener Kauf über Apple, Google Play oder Xsolla behält die für diesen Kauf geltenden Erstattungs-, Widerrufs-, Konformitäts-, Wiederherstellungs- und sonstigen zwingenden Rechte. Ein davon unabhängiger Spiel- oder Echtgeldhandelsverstoß beseitigt diese Rechte nicht automatisch. Unterstützt TycoonX ausdrücklich eine plattformgestützte Geschenk- oder Übertragungsfunktion, gelten deren offengelegte Bedingungen und die jeweiligen Plattformregeln; daraus entsteht kein uneingeschränktes Auszahlungs- oder Wiederverkaufssystem.',
      'Unabdingbare gesetzliche Rechte bleiben unberührt. Insbesondere darf ein unerlaubtes Geschäft zwischen Nutzern nicht pauschal als Grund dienen, eine zwingende Abhilfe für einen davon unabhängigen, gültigen offiziellen Kauf zu verweigern.',
    ],
  },
  es: {
    label: 'Actualización de compras · 5 de septiembre de 2026',
    title: 'Compras oficiales frente a operaciones entre jugadores y fuera de la plataforma',
    paragraphs: [
      'Esta Política de Compras y Reembolsos se aplica a compras reales realizadas a través de un canal autorizado de TycoonX, como las compras dentro de la app de Apple App Store, Google Play o la tienda web oficial de TycoonX con Xsolla. Un intercambio dentro del juego, una compra de arte, una operación de empresa, una transferencia mediante Begging u otro movimiento de valor entre jugadores no se convierte en una compra oficial a CK-Labs solo porque haya un cambio de valor dentro de TycoonX.',
      'El comercio no autorizado con dinero real u otro acuerdo fuera de la plataforma entre usuarios no es una compra oficial de TycoonX. CK-Labs no actúa como vendedor, procesador de pagos, servicio de depósito, garante, cobrador ni proveedor de reembolsos de esos acuerdos, y no promete recuperar dinero real, criptomonedas, tarjetas regalo, bienes físicos, servicios externos u otra contraprestación intercambiada entre usuarios. Aun así, CK-Labs puede investigar o revertir la actividad correspondiente dentro del juego y aplicar las Condiciones cuando infrinja las reglas sobre transacciones reales o comercio con dinero real.',
      'Una compra legítima realizada por separado mediante Apple, Google Play o Xsolla conserva los derechos de reembolso, desistimiento, conformidad, restauración y demás derechos obligatorios aplicables a esa compra. Una infracción independiente de juego o de comercio con dinero real no elimina por sí sola esos derechos. Si TycoonX habilita expresamente un sistema de regalo o transferencia admitido por una plataforma, se aplican sus condiciones publicadas y las reglas de la plataforma, sin convertirlo en un sistema libre de retirada de efectivo o reventa.',
      'Nada de lo anterior limita derechos que no puedan renunciarse por ley. En particular, CK-Labs no utilizará un acuerdo no autorizado entre usuarios como motivo general para denegar una reparación obligatoria relativa a otra compra oficial válida.',
    ],
  },
  es_MX: {
    label: 'Actualización de compras · 5 de septiembre de 2026',
    title: 'Compras oficiales frente a operaciones entre jugadores y fuera de la plataforma',
    paragraphs: [
      'Esta Política de Compras y Reembolsos aplica a compras reales hechas mediante un canal autorizado de TycoonX, como las compras dentro de la app de Apple App Store, Google Play o la tienda web oficial de TycoonX con Xsolla. Un intercambio dentro del juego, la compra de una obra, una operación de empresa, una transferencia por Begging u otro movimiento de valor entre jugadores no se vuelve una compra oficial a CK-Labs solo porque haya valor pasando de una cuenta a otra dentro de TycoonX.',
      'El comercio no autorizado por dinero real o cualquier otro trato fuera de la plataforma entre usuarios no es una compra oficial de TycoonX. CK-Labs no es vendedor, procesador de pagos, servicio de depósito, garante, cobrador ni responsable de reembolsar ese trato, y no promete recuperar dinero, criptomonedas, tarjetas de regalo, bienes físicos, servicios externos u otra contraprestación intercambiada entre usuarios. Aun así, CK-Labs puede investigar o revertir la actividad relacionada dentro del juego y aplicar los Términos cuando se incumplan las reglas de transacciones genuinas o de comercio con dinero real.',
      'Una compra legítima completada por separado mediante Apple, Google Play o Xsolla conserva los derechos de reembolso, desistimiento, conformidad, restauración y demás derechos obligatorios que correspondan a esa compra. Una infracción distinta dentro del juego o de comercio con dinero real no borra automáticamente esos derechos. Si TycoonX habilita expresamente una función de regalo o transferencia admitida por una plataforma, se aplican sus condiciones informadas y las reglas de esa plataforma; no se convierte en un sistema abierto para retirar efectivo o revender valor.',
      'Nada aquí limita derechos que la ley no permita renunciar. En especial, CK-Labs no usará la existencia de un trato no autorizado entre usuarios como razón general para negar un remedio obligatorio relacionado con otra compra oficial válida.',
    ],
  },
  fr: {
    label: 'Mise à jour des achats · 5 septembre 2026',
    title: 'Achats officiels, transactions entre joueurs et accords hors plateforme',
    paragraphs: [
      'La présente Politique d’achats et de remboursements s’applique aux achats réels effectués par un canal TycoonX autorisé, notamment les achats intégrés Apple App Store, Google Play ou la boutique web officielle TycoonX utilisant Xsolla. Un échange dans le jeu, l’achat d’une œuvre, une opération d’entreprise, un transfert via Begging ou tout autre déplacement de valeur entre joueurs ne devient pas un achat officiel auprès de CK-Labs simplement parce qu’une valeur change de compte dans TycoonX.',
      'Le commerce non autorisé contre de l’argent réel ou tout autre accord conclu hors plateforme entre utilisateurs n’est pas un achat officiel TycoonX. CK-Labs n’en est ni le vendeur, ni le prestataire de paiement, ni le séquestre, ni le garant, ni le service de recouvrement ou de remboursement, et ne promet pas de récupérer l’argent réel, les cryptomonnaies, cartes-cadeaux, biens physiques, services externes ou toute autre contrepartie échangée entre utilisateurs. CK-Labs peut néanmoins examiner ou annuler l’activité correspondante dans le jeu et appliquer les Conditions si les règles relatives aux transactions authentiques ou au commerce en argent réel sont enfreintes.',
      'Un achat légitime distinct effectué via Apple, Google Play ou Xsolla conserve les droits au remboursement, à la rétractation, à la conformité, à la restauration et les autres droits impératifs applicables à cet achat. Une infraction distincte dans le jeu ou liée au commerce en argent réel n’efface pas à elle seule ces droits. Si TycoonX active expressément un mécanisme de cadeau ou de transfert pris en charge par une plateforme, les conditions annoncées et les règles de cette plateforme s’appliquent, sans créer un système libre d’encaissement ou de revente.',
      'Aucune disposition ci-dessus ne limite les droits auxquels la loi interdit de renoncer. En particulier, CK-Labs ne se servira pas d’un accord non autorisé entre utilisateurs comme motif général pour refuser un recours obligatoire concernant un autre achat officiel valide.',
    ],
  },
  fr_CA: {
    label: 'Mise à jour des achats · 5 septembre 2026',
    title: 'Achats officiels, transactions entre joueurs et ententes hors plateforme',
    paragraphs: [
      'La présente Politique d’achats et de remboursements vise les achats réels effectués par un canal TycoonX autorisé, comme les achats intégrés de l’Apple App Store, Google Play ou la boutique Web officielle TycoonX avec Xsolla. Un échange dans le jeu, l’achat d’une œuvre, une transaction d’entreprise, un transfert par Begging ou un autre déplacement de valeur entre joueurs ne devient pas un achat officiel auprès de CK-Labs simplement parce qu’une valeur passe d’un compte à un autre dans TycoonX.',
      'Le commerce non autorisé contre de l’argent réel ou toute autre entente hors plateforme entre utilisateurs n’est pas un achat officiel TycoonX. CK-Labs n’agit pas comme vendeur, processeur de paiement, service d’entiercement, garant, service de recouvrement ou fournisseur de remboursement pour une telle entente et ne promet pas de récupérer de l’argent, des cryptomonnaies, des cartes-cadeaux, des biens physiques, des services externes ou une autre contrepartie échangée entre utilisateurs. CK-Labs peut toutefois enquêter sur l’activité correspondante dans le jeu, l’annuler et appliquer les Conditions lorsqu’elle enfreint les règles sur les transactions véritables ou le commerce en argent réel.',
      'Un achat légitime distinct effectué par Apple, Google Play ou Xsolla conserve les droits de remboursement, de résolution ou de rétractation applicables, les droits de conformité, de restauration et les autres droits obligatoires liés à cet achat. Une infraction distincte dans le jeu ou de commerce en argent réel n’efface pas automatiquement ces droits. Si TycoonX active expressément une fonction de cadeau ou de transfert prise en charge par une plateforme, ses conditions annoncées et les règles de la plateforme s’appliquent; elle ne devient pas un mécanisme libre d’encaissement ou de revente.',
      'Rien dans la présente section ne limite les droits auxquels la loi ne permet pas de renoncer. CK-Labs n’utilisera notamment pas une entente non autorisée entre utilisateurs comme motif général pour refuser un recours obligatoire lié à un autre achat officiel valide.',
    ],
  },
  it: {
    label: 'Aggiornamento acquisti · 5 settembre 2026',
    title: 'Acquisti ufficiali, transazioni tra giocatori e accordi fuori piattaforma',
    paragraphs: [
      'La presente Politica su acquisti e rimborsi si applica agli acquisti effettivi effettuati tramite un canale TycoonX autorizzato, come gli acquisti in-app dell’Apple App Store, Google Play o il negozio web ufficiale di TycoonX con Xsolla. Uno scambio nel gioco, l’acquisto di un’opera d’arte, un’operazione societaria, un trasferimento tramite Begging o un altro passaggio di valore tra giocatori non diventa un acquisto ufficiale presso CK-Labs solo perché del valore cambia titolare all’interno di TycoonX.',
      'Il commercio non autorizzato con denaro reale o un altro accordo fuori piattaforma tra utenti non costituisce un acquisto ufficiale TycoonX. CK-Labs non è il venditore, il gestore del pagamento, un servizio di deposito, il garante, il soggetto incaricato della riscossione o il fornitore del rimborso di tale accordo e non promette di recuperare denaro reale, criptovalute, buoni regalo, beni fisici, servizi esterni o altri corrispettivi scambiati tra utenti. CK-Labs può comunque indagare o annullare l’attività collegata nel gioco e applicare i Termini se sono violate le regole sulle transazioni genuine o sul commercio con denaro reale.',
      'Un acquisto legittimo e separato effettuato tramite Apple, Google Play o Xsolla mantiene i diritti di rimborso, recesso, conformità, ripristino e gli altri diritti inderogabili applicabili a quell’acquisto. Una violazione distinta nel gioco o relativa al commercio con denaro reale non elimina automaticamente tali diritti. Se TycoonX abilita espressamente una funzione di regalo o trasferimento supportata da una piattaforma, si applicano le condizioni comunicate e le regole della piattaforma, senza trasformarla in un sistema libero di incasso o rivendita.',
      'Nulla di quanto sopra limita diritti ai quali la legge non consente di rinunciare. In particolare, CK-Labs non userà un accordo non autorizzato tra utenti come motivo generale per negare un rimedio obbligatorio relativo a un altro acquisto ufficiale valido.',
    ],
  },
  pt: {
    label: 'Atualização de compras · 5 de setembro de 2026',
    title: 'Compras oficiais, transações entre jogadores e acordos fora da plataforma',
    paragraphs: [
      'Esta Política de Compras e Reembolsos aplica-se a compras efetivas realizadas através de um canal TycoonX autorizado, como compras integradas da Apple App Store, Google Play ou a loja oficial TycoonX na Web com Xsolla. Uma troca no jogo, compra de arte, operação empresarial, transferência através de Begging ou outro movimento de valor entre jogadores não se torna uma compra oficial à CK-Labs apenas porque existe uma transferência de valor dentro do TycoonX.',
      'O comércio não autorizado por dinheiro real ou outro acordo fora da plataforma entre utilizadores não é uma compra oficial TycoonX. A CK-Labs não é o vendedor, processador de pagamentos, serviço de depósito, garante, cobrador ou fornecedor de reembolso desse acordo e não promete recuperar dinheiro real, criptomoedas, cartões-oferta, bens físicos, serviços externos ou outra contrapartida trocada entre utilizadores. A CK-Labs pode, ainda assim, investigar ou reverter a atividade relacionada no jogo e aplicar os Termos quando exista violação das regras de transações genuínas ou de comércio por dinheiro real.',
      'Uma compra legítima e separada efetuada através da Apple, Google Play ou Xsolla mantém os direitos de reembolso, livre resolução, conformidade, restauro e outros direitos obrigatórios aplicáveis a essa compra. Uma infração distinta no jogo ou de comércio por dinheiro real não elimina automaticamente esses direitos. Se o TycoonX disponibilizar expressamente uma função de oferta ou transferência suportada por uma plataforma, aplicam-se as condições divulgadas e as regras da plataforma, sem criar um sistema livre de levantamento de dinheiro ou revenda.',
      'Nada nesta secção limita direitos que não possam ser legalmente afastados. Em especial, a CK-Labs não utilizará um acordo não autorizado entre utilizadores como motivo geral para recusar um direito obrigatório relativo a outra compra oficial válida.',
    ],
  },
  pt_BR: {
    label: 'Atualização de compras · 5 de setembro de 2026',
    title: 'Compras oficiais, transações entre jogadores e acordos fora da plataforma',
    paragraphs: [
      'Esta Política de Compras e Reembolsos se aplica a compras reais feitas por um canal autorizado do TycoonX, como compras dentro do app pela Apple App Store, Google Play ou a loja oficial do TycoonX na web com Xsolla. Uma troca dentro do jogo, compra de arte, operação de empresa, transferência pelo Begging ou outro movimento de valor entre jogadores não vira uma compra oficial com a CK-Labs só porque houve transferência de valor dentro do TycoonX.',
      'Comércio não autorizado por dinheiro real ou outro acordo fora da plataforma entre usuários não é uma compra oficial do TycoonX. A CK-Labs não é vendedora, processadora do pagamento, serviço de custódia, garantidora, cobradora nem responsável pelo reembolso desse acordo e não promete recuperar dinheiro, criptomoedas, cartões-presente, bens físicos, serviços externos ou outra contraprestação trocada entre usuários. Ainda assim, a CK-Labs pode investigar ou reverter a atividade relacionada dentro do jogo e aplicar os Termos quando houver violação das regras de transações genuínas ou comércio por dinheiro real.',
      'Uma compra legítima e separada concluída pela Apple, Google Play ou Xsolla mantém os direitos de reembolso, arrependimento ou retirada quando aplicáveis, conformidade, restauração e demais direitos obrigatórios relativos àquela compra. Uma infração diferente dentro do jogo ou relacionada a comércio por dinheiro real não apaga automaticamente esses direitos. Se o TycoonX habilitar expressamente uma função de presente ou transferência aceita por uma plataforma, valem as condições divulgadas e as regras da plataforma, sem transformar a função em sistema livre de saque ou revenda.',
      'Nada nesta seção limita direitos que a lei não permita afastar. Em especial, a CK-Labs não usará um acordo não autorizado entre usuários como justificativa geral para negar um remédio obrigatório referente a outra compra oficial válida.',
    ],
  },
  ru: {
    label: 'Обновление правил покупок · 5 сентября 2026 года',
    title: 'Официальные покупки, сделки между игроками и сделки вне платформы',
    paragraphs: [
      'Настоящая Политика покупок и возвратов применяется к реальным покупкам через разрешённые каналы TycoonX, например к покупкам в приложении через Apple App Store, Google Play или официальный веб-магазин TycoonX с Xsolla. Внутриигровая сделка, покупка произведения искусства, операция компании, перевод через Begging или иное перемещение игровой ценности между игроками не становится официальной покупкой у CK-Labs только потому, что ценность перешла между аккаунтами внутри TycoonX.',
      'Неавторизованная торговля за реальные деньги или иная сделка между пользователями вне платформы не является официальной покупкой TycoonX. CK-Labs не выступает продавцом, платёжным оператором, эскроу-сервисом, гарантом, взыскателем или стороной, обязанной возвращать деньги по такой сделке, и не обещает возвращать реальные деньги, криптовалюту, подарочные карты, физические товары, внешние услуги или иное встречное предоставление, переданное между пользователями. При этом CK-Labs вправе расследовать или отменить связанную внутриигровую операцию и применять Условия, если нарушены правила подлинных сделок или торговли за реальные деньги.',
      'Отдельная законная покупка через Apple, Google Play или Xsolla сохраняет применимые к ней права на возврат, отказ от договора, соответствие, восстановление и иные обязательные права. Отдельное игровое нарушение или нарушение правил торговли за реальные деньги само по себе эти права не отменяет. Если TycoonX прямо включает поддерживаемую платформой функцию подарка или передачи, к ней применяются опубликованные условия и правила соответствующей платформы; она не превращается в свободную систему обналичивания или перепродажи.',
      'Ничто в этом разделе не ограничивает права, от которых нельзя отказаться по закону. В частности, CK-Labs не будет использовать факт неавторизованной сделки между пользователями как общее основание для отказа в обязательном средстве защиты по другой действительной официальной покупке.',
    ],
  },
  ja: {
    label: '購入ポリシー更新 · 2026年9月5日',
    title: '公式購入とプレイヤー間・外部取引の区別',
    paragraphs: [
      '本購入・返金ポリシーは、Apple App Storeのアプリ内課金、Google Play、Xsollaを利用するTycoonX公式Webショップなど、TycoonXが認めた購入経路で行われた正規の購入に適用されます。ゲーム内取引、アート購入、会社取引、Beggingによる移転、その他プレイヤー間のゲーム内価値の移動は、TycoonX内で価値が移動したというだけでCK-Labsからの公式購入になるものではありません。',
      'ユーザー同士の無許可のリアルマネートレードやプラットフォーム外の取引は、TycoonXの公式購入ではありません。CK-Labsはその取引の販売者、決済処理者、エスクロー、保証人、回収業者、返金提供者ではなく、ユーザー間で交換された現金、暗号資産、ギフトカード、物品、外部サービスその他の対価を取り戻すことを約束しません。ただし、関連するゲーム内行為が正当な取引またはリアルマネートレードに関するルールに違反する場合、CK-Labsは調査、巻き戻し、規約の適用を行うことがあります。',
      'Apple、Google Play、Xsollaを通じて別途正当に完了した購入には、その購入に適用される返金、撤回、適合性、復元その他の強行法上の権利が引き続き適用されます。別個のゲーム内違反やリアルマネートレード違反だけを理由に、それらの権利が当然に消えることはありません。TycoonXがプラットフォーム対応のギフトまたは移転機能を明示的に提供する場合は、表示された条件と各プラットフォームのルールに従い、自由な換金・転売制度にはなりません。',
      'ここに記載された内容は、法律上放棄できない権利を制限しません。無許可のユーザー間取引があったことだけを理由として、関係のない正規の公式購入に対する強行法上の救済を一律に拒否することはありません。',
    ],
  },
  ko: {
    label: '구매 정책 업데이트 · 2026년 9월 5일',
    title: '공식 구매와 플레이어 간·플랫폼 외 거래의 구분',
    paragraphs: [
      '이 구매 및 환불 정책은 Apple App Store 인앱 구매, Google Play 또는 Xsolla를 이용하는 TycoonX 공식 웹숍 등 TycoonX가 승인한 구매 채널을 통한 정상적인 구매에 적용됩니다. 게임 내 거래, 아트 구매, 회사 거래, Begging을 통한 이전 또는 기타 플레이어 간 게임 가치 이동은 TycoonX 안에서 가치가 이동했다는 이유만으로 CK-Labs에 대한 공식 구매가 되지 않습니다.',
      '사용자 간의 무단 현금거래 또는 플랫폼 밖 거래는 TycoonX 공식 구매가 아닙니다. CK-Labs는 그러한 거래의 판매자, 결제 처리자, 에스크로 서비스, 보증인, 채권 추심자 또는 환불 제공자가 아니며, 사용자 사이에 오간 현금, 암호자산, 기프트카드, 실물 상품, 외부 서비스 또는 기타 대가를 회수해 준다고 약속하지 않습니다. 다만 관련 게임 내 활동이 정상 거래 또는 현금거래 규칙을 위반한 경우 CK-Labs는 해당 활동을 조사하거나 되돌리고 약관을 적용할 수 있습니다.',
      'Apple, Google Play 또는 Xsolla를 통해 별도로 정상 완료된 구매에는 그 구매에 적용되는 환불, 철회, 적합성, 복원 및 기타 강행법상 권리가 계속 적용됩니다. 별개의 게임 내 위반이나 현금거래 위반만으로 그러한 권리가 자동 소멸하지 않습니다. TycoonX가 플랫폼이 지원하는 선물 또는 이전 기능을 명시적으로 제공하는 경우 공개된 조건과 해당 플랫폼 규칙이 적용되며, 이를 자유로운 현금화나 재판매 시스템으로 이용할 수 없습니다.',
      '이 내용은 법으로 포기할 수 없는 권리를 제한하지 않습니다. 특히 무단 사용자 간 거래가 있었다는 이유만으로 관련 없는 정상적인 공식 구매에 대한 강행법상 구제를 일률적으로 거부하지 않습니다.',
    ],
  },
  zh: {
    label: '購買政策更新 · 2026年9月5日',
    title: '官方購買與玩家間及平台外交易',
    paragraphs: [
      '本《購買與退款政策》適用於透過 TycoonX 授權管道完成的真實購買，例如 Apple App Store App 內購買、Google Play，以及使用 Xsolla 的 TycoonX 官方網路商店。遊戲內交易、藝術品購買、公司交易、透過 Begging 進行的轉移，或其他玩家之間的遊戲價值移轉，不會僅因價值在 TycoonX 內移動，就成為向 CK-Labs 進行的官方購買。',
      '玩家之間未經授權的真實金錢交易或其他平台外交易，不屬於 TycoonX 官方購買。CK-Labs 並非該交易的賣方、付款處理商、託管服務、保證人、收款方或退款提供者，也不承諾追回玩家之間交換的真實貨幣、加密資產、禮品卡、實體物品、外部服務或其他對價。不過，如果相關遊戲內行為違反真實交易或真實金錢交易規則，CK-Labs 仍可進行調查、撤銷相關遊戲內操作並依《服務條款》處理。',
      '另行透過 Apple、Google Play 或 Xsolla 合法完成的購買，仍保有該筆購買依法適用的退款、撤回、符合性、恢復及其他強制性權利。獨立的遊戲內違規或真實金錢交易違規，不會單獨使這些權利消失。若 TycoonX 明確提供平台支援的贈送或移轉功能，則應依該功能已揭露的條件及相關平台規則使用，而不會因此形成不受限制的套現或轉售機制。',
      '本段不限制依法不得拋棄的權利。CK-Labs 尤其不會僅因存在未經授權的玩家間交易，就一概拒絕另一筆無關且有效的官方購買所享有的強制性救濟。',
    ],
  },
  zh_Hans: {
    label: '购买政策更新 · 2026年9月5日',
    title: '官方购买与玩家间及平台外交易',
    paragraphs: [
      '本《购买与退款政策》适用于通过 TycoonX 授权渠道完成的真实购买，例如 Apple App Store App 内购买、Google Play，以及使用 Xsolla 的 TycoonX 官方网页商店。游戏内交易、艺术品购买、公司交易、通过 Begging 进行的转移或其他玩家之间的游戏价值转移，不会仅因为价值在 TycoonX 内发生转移，就成为向 CK-Labs 进行的官方购买。',
      '玩家之间未经授权的真实货币交易或其他平台外交易，不属于 TycoonX 官方购买。CK-Labs 不是此类交易的卖方、支付处理方、托管服务、担保方、收款方或退款提供方，也不承诺追回玩家之间交换的真实货币、加密资产、礼品卡、实物、外部服务或其他对价。不过，如果相关游戏内行为违反真实交易或真实货币交易规则，CK-Labs 仍可调查、撤销相关游戏内操作并依照《服务条款》处理。',
      '另行通过 Apple、Google Play 或 Xsolla 合法完成的购买，仍保留该笔购买依法适用的退款、撤回、合规性、恢复及其他强制性权利。独立的游戏内违规或真实货币交易违规本身不会自动消除这些权利。如果 TycoonX 明确提供平台支持的赠送或转移功能，则应遵守已披露的功能条件和相关平台规则，该功能不会因此成为不受限制的套现或转售系统。',
      '本节不限制法律上不得放弃的权利。CK-Labs 尤其不会仅因为存在未经授权的用户间交易，就一概拒绝另一笔无关且有效的官方购买所享有的强制性救济。',
    ],
  },
  zh_Hant: {
    label: '購買政策更新 · 2026年9月5日',
    title: '官方購買與玩家間及平台外交易',
    paragraphs: [
      '本《購買與退款政策》適用於透過 TycoonX 授權管道完成的真實購買，例如 Apple App Store App 內購買、Google Play，以及使用 Xsolla 的 TycoonX 官方網路商店。遊戲內交易、藝術品購買、公司交易、透過 Begging 進行的轉移，或其他玩家之間的遊戲價值移轉，不會僅因價值在 TycoonX 內移動，就成為向 CK-Labs 進行的官方購買。',
      '玩家之間未經授權的真實金錢交易或其他平台外交易，不屬於 TycoonX 官方購買。CK-Labs 並非該交易的賣方、付款處理商、託管服務、保證人、收款方或退款提供者，也不承諾追回玩家之間交換的真實貨幣、加密資產、禮品卡、實體物品、外部服務或其他對價。不過，如果相關遊戲內行為違反真實交易或真實金錢交易規則，CK-Labs 仍可進行調查、撤銷相關遊戲內操作並依《服務條款》處理。',
      '另行透過 Apple、Google Play 或 Xsolla 合法完成的購買，仍保有該筆購買依法適用的退款、撤回、符合性、恢復及其他強制性權利。獨立的遊戲內違規或真實金錢交易違規，不會單獨使這些權利消失。若 TycoonX 明確提供平台支援的贈送或移轉功能，則應依該功能已揭露的條件及相關平台規則使用，而不會因此形成不受限制的套現或轉售機制。',
      '本段不限制依法不得拋棄的權利。CK-Labs 尤其不會僅因存在未經授權的玩家間交易，就一概拒絕另一筆無關且有效的官方購買所享有的強制性救濟。',
    ],
  },
  ar: {
    label: 'تحديث سياسة المشتريات · 5 سبتمبر 2026',
    title: 'المشتريات الرسمية مقابل صفقات اللاعبين والصفقات خارج المنصة',
    paragraphs: [
      'تنطبق سياسة المشتريات والاسترداد هذه على المشتريات الحقيقية التي تتم عبر قناة شراء معتمدة في TycoonX، مثل الشراء داخل التطبيق عبر Apple App Store أو Google Play أو متجر TycoonX الرسمي على الويب باستخدام Xsolla. ولا تتحول صفقة داخل اللعبة أو شراء عمل فني أو معاملة شركة أو تحويل عبر Begging أو أي انتقال آخر للقيمة بين اللاعبين إلى شراء رسمي من CK-Labs لمجرد أن قيمة داخل اللعبة انتقلت بين الحسابات.',
      'لا تُعد تجارة الأموال الحقيقية غير المصرح بها أو أي صفقة أخرى خارج المنصة بين المستخدمين عملية شراء رسمية في TycoonX. ولا تعمل CK-Labs كبائع أو معالج دفع أو خدمة ضمان أو كفيل أو جهة تحصيل أو جهة استرداد لهذه الصفقة، ولا تتعهد باستعادة أموال حقيقية أو أصول مشفرة أو بطاقات هدايا أو سلع مادية أو خدمات خارجية أو أي مقابل آخر تم تبادله بين المستخدمين. ومع ذلك، يجوز لـ CK-Labs التحقيق في النشاط المرتبط داخل اللعبة أو عكسه وتطبيق الشروط إذا خالف قواعد المعاملات الحقيقية أو تجارة الأموال الحقيقية.',
      'تظل أي عملية شراء مشروعة ومستقلة تمت عبر Apple أو Google Play أو Xsolla محتفظة بحقوق الاسترداد والعدول والمطابقة والاستعادة وغيرها من الحقوق الإلزامية التي تنطبق عليها. ولا تؤدي مخالفة منفصلة داخل اللعبة أو مخالفة لقواعد تجارة الأموال الحقيقية وحدها إلى إسقاط هذه الحقوق تلقائياً. وإذا أتاحت TycoonX صراحة ميزة هدية أو تحويل تدعمها إحدى المنصات، فتخضع للشروط المعلنة وقواعد تلك المنصة، ولا تتحول إلى نظام مفتوح للسحب النقدي أو إعادة البيع.',
      'لا يحد أي شيء هنا من الحقوق التي لا يجوز التنازل عنها قانوناً. وبوجه خاص، لن تستخدم CK-Labs وجود صفقة غير مصرح بها بين المستخدمين كسبب عام لرفض وسيلة انتصاف إلزامية تتعلق بعملية شراء رسمية أخرى صحيحة وغير مرتبطة بها.',
    ],
  },
  nl: {
    label: 'Update aankopen · 5 september 2026',
    title: 'Officiële aankopen tegenover transacties tussen spelers en buiten het platform',
    paragraphs: [
      'Dit Aankoop- en restitutiebeleid geldt voor echte aankopen via een geautoriseerd TycoonX-kanaal, zoals Apple App Store-in-appaankopen, Google Play of de officiële TycoonX-webshop met Xsolla. Een handel in de game, kunstaankoop, bedrijfstransactie, overdracht via Begging of andere verplaatsing van spelwaarde tussen spelers wordt niet automatisch een officiële aankoop bij CK-Labs alleen omdat binnen TycoonX waarde van account wisselt.',
      'Niet-geautoriseerde handel voor echt geld of een andere deal buiten het platform tussen gebruikers is geen officiële TycoonX-aankoop. CK-Labs is daarbij niet de verkoper, betalingsverwerker, escrowdienst, garant, incassopartij of restitutieverstrekker en belooft niet om echt geld, crypto, cadeaukaarten, fysieke goederen, externe diensten of andere tegenprestaties tussen gebruikers terug te halen. CK-Labs kan de bijbehorende activiteit in de game wel onderzoeken of terugdraaien en de Voorwaarden toepassen wanneer de regels voor echte transacties of handel voor echt geld zijn overtreden.',
      'Een afzonderlijk rechtmatig voltooide aankoop via Apple, Google Play of Xsolla behoudt de toepasselijke rechten op restitutie, herroeping, conformiteit, herstel en andere dwingende rechten. Een losstaande overtreding in de game of van de regels voor handel voor echt geld doet die rechten niet vanzelf vervallen. Als TycoonX uitdrukkelijk een door het platform ondersteunde cadeau- of overdrachtsfunctie inschakelt, gelden de bekendgemaakte voorwaarden en platformregels; daardoor ontstaat geen vrij systeem voor uitbetaling of doorverkoop.',
      'Niets in deze bepaling beperkt rechten waarvan wettelijk niet kan worden afgeweken. CK-Labs zal een niet-geautoriseerde gebruikersdeal in het bijzonder niet als algemene reden gebruiken om een verplicht rechtsmiddel voor een andere geldige officiële aankoop te weigeren.',
    ],
  },
  sv: {
    label: 'Uppdatering om köp · 5 september 2026',
    title: 'Officiella köp jämfört med spelartransaktioner och affärer utanför plattformen',
    paragraphs: [
      'Denna policy för köp och återbetalningar gäller verkliga köp som görs via en auktoriserad TycoonX-kanal, till exempel köp i Apple App Store, Google Play eller den officiella TycoonX-webbutiken med Xsolla. En handel i spelet, ett konstköp, en företagstransaktion, en överföring via Begging eller annan förflyttning av spelvärde mellan spelare blir inte ett officiellt köp från CK-Labs enbart för att värde flyttas inom TycoonX.',
      'Otillåten handel för riktiga pengar eller en annan affär utanför plattformen mellan användare är inte ett officiellt TycoonX-köp. CK-Labs är inte säljare, betalningsförmedlare, escrowtjänst, garant, indrivare eller återbetalningspart i en sådan affär och lovar inte att återfå riktiga pengar, kryptotillgångar, presentkort, fysiska varor, externa tjänster eller annan ersättning som användare har utbytt. CK-Labs kan däremot utreda eller återföra den kopplade aktiviteten i spelet och tillämpa Villkoren om reglerna för genuina transaktioner eller handel för riktiga pengar har överträtts.',
      'Ett separat legitimt köp som har slutförts via Apple, Google Play eller Xsolla behåller de rättigheter till återbetalning, frånträde, avtalsenlighet, återställning och andra tvingande rättigheter som gäller för köpet. En separat överträdelse i spelet eller av reglerna om handel för riktiga pengar tar inte automatiskt bort dessa rättigheter. Om TycoonX uttryckligen aktiverar en plattformsstödd gåvo- eller överföringsfunktion gäller dess angivna villkor och plattformens regler; den blir inte ett fritt system för uttag eller återförsäljning.',
      'Ingenting här begränsar rättigheter som enligt lag inte kan avtalas bort. CK-Labs kommer särskilt inte att använda en otillåten affär mellan användare som ett generellt skäl att neka en tvingande rättelse för ett annat giltigt officiellt köp.',
    ],
  },
  nb: {
    label: 'Oppdatering om kjøp · 5. september 2026',
    title: 'Offisielle kjøp kontra spillertransaksjoner og avtaler utenfor plattformen',
    paragraphs: [
      'Disse reglene for kjøp og refusjoner gjelder reelle kjøp gjennom en autorisert TycoonX-kanal, for eksempel kjøp i Apple App Store, Google Play eller den offisielle TycoonX-nettbutikken med Xsolla. En handel i spillet, et kunstkjøp, en selskapstransaksjon, en overføring gjennom Begging eller annen flytting av spillverdi mellom spillere blir ikke et offisielt kjøp fra CK-Labs bare fordi verdi flyttes inne i TycoonX.',
      'Uautorisert handel for ekte penger eller en annen avtale utenfor plattformen mellom brukere er ikke et offisielt TycoonX-kjøp. CK-Labs er ikke selger, betalingsbehandler, escrowtjeneste, garantist, innkrever eller refusjonstilbyder for en slik avtale og lover ikke å hente tilbake ekte penger, kryptoverdier, gavekort, fysiske varer, eksterne tjenester eller annen motytelse som brukere har utvekslet. CK-Labs kan likevel undersøke eller reversere den tilknyttede aktiviteten i spillet og håndheve Vilkårene når reglene om reelle transaksjoner eller handel for ekte penger er brutt.',
      'Et separat legitimt kjøp som er fullført via Apple, Google Play eller Xsolla beholder de refusjons-, angrerett-, samsvars-, gjenopprettings- og øvrige ufravikelige rettighetene som gjelder for kjøpet. Et separat brudd i spillet eller på reglene om handel for ekte penger fjerner ikke automatisk disse rettighetene. Hvis TycoonX uttrykkelig aktiverer en plattformstøttet gave- eller overføringsfunksjon, gjelder de opplyste vilkårene og plattformreglene; funksjonen blir ikke et fritt system for uttak eller videresalg.',
      'Ingenting her begrenser rettigheter som ikke lovlig kan fravikes. CK-Labs vil særlig ikke bruke en uautorisert avtale mellom brukere som et generelt grunnlag for å nekte en ufravikelig beføyelse for et annet gyldig offisielt kjøp.',
    ],
  },
  pl: {
    label: 'Aktualizacja zakupów · 5 września 2026 r.',
    title: 'Oficjalne zakupy a transakcje między graczami i poza platformą',
    paragraphs: [
      'Niniejsza Polityka zakupów i zwrotów ma zastosowanie do rzeczywistych zakupów dokonanych za pośrednictwem autoryzowanego kanału TycoonX, takiego jak zakup w aplikacji przez Apple App Store, Google Play lub oficjalny sklep internetowy TycoonX korzystający z Xsolla. Handel w grze, zakup dzieła, transakcja spółki, transfer przez Begging ani inne przesunięcie wartości między graczami nie staje się oficjalnym zakupem od CK-Labs tylko dlatego, że wartość zmieniła konto w TycoonX.',
      'Nieautoryzowany handel za prawdziwe pieniądze lub inna umowa poza platformą między użytkownikami nie jest oficjalnym zakupem TycoonX. CK-Labs nie jest sprzedawcą, operatorem płatności, usługą escrow, gwarantem, podmiotem windykacyjnym ani dostawcą zwrotu dla takiej umowy i nie obiecuje odzyskania prawdziwych pieniędzy, kryptowalut, kart podarunkowych, rzeczy fizycznych, usług zewnętrznych ani innego świadczenia wymienionego między użytkownikami. CK-Labs może jednak zbadać lub odwrócić powiązaną aktywność w grze i zastosować Warunki, jeżeli naruszono zasady rzeczywistych transakcji lub handlu za prawdziwe pieniądze.',
      'Odrębny, prawidłowo zakończony zakup przez Apple, Google Play lub Xsolla zachowuje prawa do zwrotu, odstąpienia, zgodności, przywrócenia i inne bezwzględnie obowiązujące prawa właściwe dla tego zakupu. Odrębne naruszenie w grze lub zasad handlu za prawdziwe pieniądze samo w sobie nie usuwa tych praw. Jeżeli TycoonX wyraźnie udostępnia funkcję prezentu lub transferu obsługiwaną przez platformę, stosuje się jej ujawnione zasady i reguły platformy; nie tworzy to swobodnego systemu wypłat lub odsprzedaży.',
      'Nic w tej części nie ogranicza praw, których nie można zgodnie z prawem wyłączyć. CK-Labs nie będzie w szczególności używać nieautoryzowanej umowy między użytkownikami jako ogólnej podstawy do odmowy obowiązkowego środka ochrony dotyczącego innego ważnego oficjalnego zakupu.',
    ],
  },
  th: {
    label: 'อัปเดตนโยบายการซื้อ · 5 กันยายน 2026',
    title: 'การซื้ออย่างเป็นทางการกับธุรกรรมระหว่างผู้เล่นและข้อตกลงนอกแพลตฟอร์ม',
    paragraphs: [
      'นโยบายการซื้อและการคืนเงินนี้ใช้กับการซื้อจริงผ่านช่องทางซื้อที่ TycoonX อนุญาต เช่น การซื้อภายในแอปของ Apple App Store, Google Play หรือร้านค้าเว็บอย่างเป็นทางการของ TycoonX ที่ใช้ Xsolla การซื้อขายในเกม การซื้อผลงานศิลปะ ธุรกรรมของบริษัท การโอนผ่าน Begging หรือการย้ายมูลค่าในเกมรูปแบบอื่นระหว่างผู้เล่น ไม่ถือเป็นการซื้ออย่างเป็นทางการจาก CK-Labs เพียงเพราะมีมูลค่าเปลี่ยนมือภายใน TycoonX',
      'การซื้อขายด้วยเงินจริงโดยไม่ได้รับอนุญาตหรือข้อตกลงนอกแพลตฟอร์มระหว่างผู้ใช้ไม่ใช่การซื้ออย่างเป็นทางการของ TycoonX CK-Labs ไม่ใช่ผู้ขาย ผู้ประมวลผลการชำระเงิน บริการเอสโครว์ ผู้ค้ำประกัน ผู้ติดตามหนี้ หรือผู้คืนเงินของข้อตกลงดังกล่าว และไม่รับปากว่าจะเรียกคืนเงินจริง สินทรัพย์คริปโต บัตรของขวัญ สินค้าจริง บริการภายนอก หรือสิ่งตอบแทนอื่นที่ผู้ใช้แลกเปลี่ยนกัน อย่างไรก็ตาม CK-Labs อาจตรวจสอบหรือย้อนกลับกิจกรรมที่เกี่ยวข้องในเกมและบังคับใช้ข้อกำหนด หากมีการละเมิดกฎธุรกรรมที่แท้จริงหรือการซื้อขายด้วยเงินจริง',
      'การซื้อที่ชอบด้วยกฎหมายและแยกต่างหากผ่าน Apple, Google Play หรือ Xsolla ยังคงมีสิทธิในการคืนเงิน การถอนตัว ความสอดคล้อง การกู้คืน และสิทธิบังคับอื่นที่ใช้กับการซื้อนั้น การละเมิดในเกมหรือการซื้อขายด้วยเงินจริงที่เป็นคนละเรื่องไม่ทำให้สิทธิเหล่านั้นหายไปโดยอัตโนมัติ หาก TycoonX เปิดใช้ฟีเจอร์ของขวัญหรือการโอนที่แพลตฟอร์มรองรับอย่างชัดเจน จะใช้เงื่อนไขที่เปิดเผยและกฎของแพลตฟอร์มนั้น โดยไม่กลายเป็นระบบถอนเงินหรือขายต่อแบบเสรี',
      'ข้อความนี้ไม่จำกัดสิทธิที่กฎหมายไม่อนุญาตให้สละ โดยเฉพาะ CK-Labs จะไม่ใช้การมีอยู่ของข้อตกลงระหว่างผู้ใช้ที่ไม่ได้รับอนุญาตเป็นเหตุทั่วไปเพื่อปฏิเสธสิทธิแก้ไขบังคับที่เกี่ยวกับการซื้ออย่างเป็นทางการที่ถูกต้องและไม่เกี่ยวข้องกัน',
    ],
  },
  vi: {
    label: 'Cập nhật chính sách mua hàng · 5 tháng 9 năm 2026',
    title: 'Giao dịch mua chính thức và giao dịch giữa người chơi hoặc ngoài nền tảng',
    paragraphs: [
      'Chính sách Mua hàng và Hoàn tiền này áp dụng cho các giao dịch mua thực sự qua kênh TycoonX được ủy quyền, chẳng hạn như mua trong ứng dụng qua Apple App Store, Google Play hoặc cửa hàng web chính thức của TycoonX sử dụng Xsolla. Giao dịch trong game, mua tác phẩm nghệ thuật, giao dịch công ty, chuyển qua Begging hoặc việc chuyển giá trị game khác giữa người chơi không trở thành giao dịch mua chính thức từ CK-Labs chỉ vì giá trị đã chuyển giữa các tài khoản trong TycoonX.',
      'Giao dịch bằng tiền thật không được phép hoặc thỏa thuận ngoài nền tảng khác giữa người dùng không phải là giao dịch mua chính thức của TycoonX. CK-Labs không phải người bán, đơn vị xử lý thanh toán, dịch vụ ký quỹ, bên bảo lãnh, đơn vị thu nợ hay bên hoàn tiền cho thỏa thuận đó và không cam kết thu hồi tiền thật, tài sản mã hóa, thẻ quà tặng, hàng hóa vật lý, dịch vụ bên ngoài hoặc đối giá khác đã trao đổi giữa người dùng. Tuy vậy, CK-Labs vẫn có thể điều tra hoặc đảo ngược hoạt động liên quan trong game và áp dụng Điều khoản nếu hoạt động đó vi phạm quy tắc giao dịch thực chất hoặc giao dịch bằng tiền thật.',
      'Một giao dịch mua hợp pháp và riêng biệt hoàn tất qua Apple, Google Play hoặc Xsolla vẫn giữ các quyền hoàn tiền, rút khỏi hợp đồng, sự phù hợp, khôi phục và các quyền bắt buộc khác áp dụng cho giao dịch đó. Một vi phạm khác trong game hoặc vi phạm về giao dịch tiền thật không tự động làm mất các quyền này. Nếu TycoonX công khai bật một tính năng tặng hoặc chuyển do nền tảng hỗ trợ, tính năng đó tuân theo các điều kiện đã công bố và quy tắc nền tảng, chứ không trở thành hệ thống tự do quy đổi thành tiền hoặc bán lại.',
      'Không nội dung nào ở đây hạn chế các quyền mà pháp luật không cho phép từ bỏ. Đặc biệt, CK-Labs sẽ không dùng sự tồn tại của một thỏa thuận không được phép giữa người dùng làm lý do chung để từ chối biện pháp khắc phục bắt buộc đối với một giao dịch mua chính thức hợp lệ và không liên quan.',
    ],
  },
  uk: {
    label: 'Оновлення політики покупок · 5 вересня 2026 року',
    title: 'Офіційні покупки та угоди між гравцями або поза платформою',
    paragraphs: [
      'Ця Політика покупок і повернень застосовується до справжніх покупок через авторизований канал TycoonX, наприклад до покупок у застосунку через Apple App Store, Google Play або офіційний веб-магазин TycoonX із Xsolla. Внутрішньоігрова торгівля, купівля мистецької роботи, операція компанії, переказ через Begging або інше переміщення ігрової цінності між гравцями не стає офіційною покупкою в CK-Labs лише через те, що цінність перемістилася між акаунтами в TycoonX.',
      'Несанкціонована торгівля за реальні гроші або інша угода між користувачами поза платформою не є офіційною покупкою TycoonX. CK-Labs не є продавцем, платіжним оператором, ескроу-сервісом, гарантом, стягувачем або стороною, що повертає кошти за такою угодою, і не обіцяє повернути реальні гроші, криптоактиви, подарункові картки, фізичні товари, зовнішні послуги чи іншу зустрічну цінність, передану між користувачами. Водночас CK-Labs може розслідувати або скасувати пов’язану дію в грі та застосувати Умови, якщо порушені правила справжніх транзакцій або торгівлі за реальні гроші.',
      'Окрема законна покупка через Apple, Google Play або Xsolla зберігає права на повернення, відмову від договору, відповідність, відновлення та інші обов’язкові права, що застосовуються саме до неї. Окреме порушення в грі або правил торгівлі за реальні гроші саме по собі не скасовує ці права. Якщо TycoonX прямо вмикає функцію подарунка або передачі, яку підтримує платформа, застосовуються оприлюднені умови та правила платформи; це не створює вільної системи виведення коштів або перепродажу.',
      'Ніщо тут не обмежує права, від яких за законом не можна відмовитися. Зокрема, CK-Labs не використовуватиме факт несанкціонованої угоди між користувачами як загальну підставу для відмови в обов’язковому засобі захисту щодо іншої чинної офіційної покупки.',
    ],
  },
  hi: {
    label: 'खरीद नीति अपडेट · 5 सितंबर 2026',
    title: 'आधिकारिक खरीद बनाम खिलाड़ियों के बीच या प्लेटफ़ॉर्म से बाहर के सौदे',
    paragraphs: [
      'यह खरीद और रिफंड नीति Apple App Store इन-ऐप खरीद, Google Play या Xsolla का उपयोग करने वाले आधिकारिक TycoonX वेब शॉप जैसे अधिकृत TycoonX चैनल से की गई वास्तविक खरीद पर लागू होती है। गेम के भीतर ट्रेड, कला-कृति खरीद, कंपनी लेन-देन, Begging के माध्यम से ट्रांसफर या खिलाड़ियों के बीच किसी अन्य गेम वैल्यू का स्थानांतरण केवल इसलिए CK-Labs से आधिकारिक खरीद नहीं बन जाता क्योंकि TycoonX के भीतर वैल्यू एक खाते से दूसरे में गई है।',
      'उपयोगकर्ताओं के बीच बिना अनुमति के वास्तविक पैसे का व्यापार या कोई अन्य ऑफ-प्लेटफ़ॉर्म सौदा आधिकारिक TycoonX खरीद नहीं है। CK-Labs ऐसे सौदे का विक्रेता, भुगतान प्रोसेसर, एस्क्रो सेवा, गारंटर, वसूलीकर्ता या रिफंड प्रदाता नहीं है और उपयोगकर्ताओं के बीच दिए गए वास्तविक पैसे, क्रिप्टो एसेट, गिफ्ट कार्ड, भौतिक सामान, बाहरी सेवाओं या अन्य प्रतिफल को वापस दिलाने का वादा नहीं करता। फिर भी, यदि संबंधित इन-गेम गतिविधि वास्तविक लेन-देन या वास्तविक पैसे के व्यापार के नियमों का उल्लंघन करती है, तो CK-Labs उसकी जांच या रिवर्स कर सकता है और शर्तें लागू कर सकता है।',
      'Apple, Google Play या Xsolla के माध्यम से अलग से पूरी की गई वैध खरीद उस खरीद पर लागू रिफंड, वापसी/विथड्रॉअल, अनुरूपता, रिस्टोर और अन्य अनिवार्य अधिकार बनाए रखती है। अलग गेम उल्लंघन या वास्तविक पैसे के व्यापार का उल्लंघन अपने आप इन अधिकारों को खत्म नहीं करता। यदि TycoonX स्पष्ट रूप से प्लेटफ़ॉर्म-समर्थित गिफ्ट या ट्रांसफर फीचर चालू करता है, तो उसकी बताई गई शर्तें और संबंधित प्लेटफ़ॉर्म नियम लागू होंगे; वह खुला कैश-आउट या पुनर्विक्रय सिस्टम नहीं बनता।',
      'यहां कुछ भी उन अधिकारों को सीमित नहीं करता जिन्हें कानूनन छोड़ा नहीं जा सकता। विशेष रूप से, CK-Labs किसी अनधिकृत उपयोगकर्ता-से-उपयोगकर्ता सौदे को किसी अलग वैध आधिकारिक खरीद के लिए अनिवार्य उपाय से इनकार करने का सामान्य कारण नहीं बनाएगा।',
    ],
  },
  id: {
    label: 'Pembaruan kebijakan pembelian · 5 September 2026',
    title: 'Pembelian resmi dibanding transaksi antar pemain dan transaksi di luar platform',
    paragraphs: [
      'Kebijakan Pembelian & Pengembalian Dana ini berlaku untuk pembelian nyata melalui saluran TycoonX yang berwenang, seperti pembelian dalam aplikasi Apple App Store, Google Play, atau toko web resmi TycoonX yang menggunakan Xsolla. Perdagangan dalam game, pembelian karya seni, transaksi perusahaan, transfer melalui Begging, atau perpindahan nilai game lainnya antar pemain tidak menjadi pembelian resmi dari CK-Labs hanya karena nilai berpindah antar akun di dalam TycoonX.',
      'Perdagangan uang nyata tanpa izin atau kesepakatan lain di luar platform antara pengguna bukan pembelian resmi TycoonX. CK-Labs bukan penjual, pemroses pembayaran, layanan escrow, penjamin, penagih, atau penyedia pengembalian dana untuk kesepakatan tersebut dan tidak menjanjikan pengembalian uang nyata, aset kripto, kartu hadiah, barang fisik, layanan eksternal, atau imbalan lain yang dipertukarkan antarpengguna. Namun, CK-Labs tetap dapat menyelidiki atau membalik aktivitas terkait di dalam game dan menerapkan Ketentuan apabila aturan transaksi yang sungguh-sungguh atau perdagangan uang nyata dilanggar.',
      'Pembelian sah yang diselesaikan secara terpisah melalui Apple, Google Play, atau Xsolla tetap memiliki hak pengembalian dana, penarikan diri, kesesuaian, pemulihan, dan hak wajib lainnya yang berlaku untuk pembelian tersebut. Pelanggaran game atau perdagangan uang nyata yang terpisah tidak dengan sendirinya menghapus hak tersebut. Jika TycoonX secara tegas mengaktifkan fitur hadiah atau transfer yang didukung platform, fitur itu tunduk pada ketentuan yang diungkapkan dan aturan platform terkait, dan bukan menjadi sistem pencairan uang atau penjualan kembali tanpa batas.',
      'Tidak ada bagian di sini yang membatasi hak yang secara hukum tidak dapat dikesampingkan. Secara khusus, CK-Labs tidak akan menggunakan adanya kesepakatan pengguna-ke-pengguna yang tidak diizinkan sebagai alasan umum untuk menolak pemulihan wajib atas pembelian resmi lain yang sah dan tidak terkait.',
    ],
  },
};

export default function OfficialPurchaseRefundNotice() {
  const pathname = usePathname();
  const canonical = pathname === '/tyconx-purchase-refund-policy';
  const match = pathname.match(/^\/tycoonx-legal\/([^/]+)\/purchases\/?$/);
  if (!canonical && !match) return null;

  const locale = canonical ? 'en' : decodeURIComponent(match?.[1] || 'en');
  const copy = copies[locale] || copies.en;
  const rtl = locale === 'ar';

  return (
    <section className="max-w-3xl mx-auto px-4 pb-12" lang={locale === 'en' ? 'en' : locale.split('_')[0]} dir={rtl ? 'rtl' : 'ltr'}>
      <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/[0.06] p-6">
        <p className="text-indigo-400 text-xs font-medium tracking-wide mb-2">{copy.label}</p>
        <h2 className="text-white font-semibold mb-4">{copy.title}</h2>
        <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
          {copy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  );
}
