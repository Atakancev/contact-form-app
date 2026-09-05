'use client';

import { usePathname } from 'next/navigation';

type RuleCopy = {
  label: string;
  title: string;
  paragraphs: string[];
};

const copies: Record<string, RuleCopy> = {
  en: {
    label: 'Terms update · 5 September 2026',
    title: 'Real-money trading and off-platform exchange',
    paragraphs: [
      'Unless CK-Labs expressly provides a specific authorized mechanism, you must not buy, sell, broker, advertise, arrange, or exchange a TycoonX account, in-game money, Diamonds, shares, companies, property, products, art, items, services, VIP, paid entitlements, or other game value for real money, cryptocurrency, gift cards, physical goods, outside services, or any other real-world consideration.',
      'This includes direct deals and indirect, staged, or middleman arrangements where an outside payment or benefit is linked to an in-game transfer. You must not use another person, alternate account, company, art sale, trade, auction, market order, Begging, or any other mechanic to disguise or complete such an exchange.',
      'This rule does not prohibit purchases made from CK-Labs through an authorized TycoonX channel, including Apple App Store, Google Play, or the official TycoonX web shop using Xsolla, nor a platform-supported gift or TycoonX transfer mechanism expressly made available for that purpose. Begging allows only the in-game assistance permitted by that feature; it does not authorize outside payment in exchange for TycoonX value.',
      'CK-Labs may reverse in-game transactions reasonably linked to prohibited real-money trading and may apply proportionate account restrictions after reasonable investigation. CK-Labs does not guarantee, escrow, enforce, refund, or mediate unauthorized off-platform deals between users. This does not limit rights or liabilities that cannot legally be excluded.',
    ],
  },
  tr: {
    label: 'Koşul güncellemesi · 5 Eylül 2026',
    title: 'Gerçek para ile ticaret ve oyun dışı takas',
    paragraphs: [
      'CK-Labs açıkça belirli ve yetkili bir yöntem sunmadıkça TycoonX hesabı, oyun içi para, Elmaslar, hisseler, şirketler, gayrimenkuller, ürünler, sanat eserleri, eşyalar, hizmetler, VIP, ücretli haklar veya başka bir oyun değeri; gerçek para, kripto para, hediye kartı, fiziksel ürün, oyun dışı hizmet ya da başka herhangi bir gerçek dünya karşılığı karşılığında satın alınamaz, satılamaz, aracılık edilemez, ilan edilemez, ayarlanamaz veya takas edilemez.',
      'Bu yasak, oyun dışındaki bir ödeme veya menfaatin oyun içi aktarımla bağlantılı olduğu doğrudan anlaşmaların yanında dolaylı, aşamalı veya aracı kullanılan düzenlemeleri de kapsar. Böyle bir takası gizlemek veya tamamlamak için başka bir kişi, alternatif hesap, şirket, sanat satışı, ticaret, açık artırma, piyasa emri, Begging ya da başka bir oyun mekaniği kullanılamaz.',
      'Bu kural; Apple App Store, Google Play veya Xsolla kullanan resmi TycoonX web mağazası dahil CK-Labs’ın yetkilendirdiği TycoonX kanallarından yapılan satın alımları ya da bu amaçla TycoonX tarafından açıkça sunulan platform destekli hediye/aktarım yöntemlerini yasaklamaz. Begging yalnızca bu özelliğin izin verdiği oyun içi yardımı kapsar; TycoonX değeri karşılığında oyun dışında ödeme yapma hakkı vermez.',
      'CK-Labs, yasak gerçek para ticaretiyle makul şekilde bağlantılı oyun içi işlemleri geri alabilir ve makul inceleme sonrasında ilgili hesaplara orantılı kısıtlamalar uygulayabilir. CK-Labs kullanıcılar arasındaki yetkisiz oyun dışı anlaşmaları garanti etmez, emanete almaz, icra etmez, iade etmez veya arabuluculuk yapmaz. Kanunen ortadan kaldırılamayan hak ve sorumluluklar saklıdır.',
    ],
  },
  de: {
    label: 'Aktualisierung der Nutzungsbedingungen · 5. September 2026',
    title: 'Echtgeldhandel und Tausch außerhalb von TycoonX',
    paragraphs: [
      'Sofern CK-Labs nicht ausdrücklich einen bestimmten autorisierten Mechanismus bereitstellt, dürfen TycoonX-Konten, Spielgeld, Diamonds, Anteile, Unternehmen, Immobilien, Produkte, Kunstwerke, Gegenstände, Dienstleistungen, VIP, bezahlte Berechtigungen oder andere Spielwerte nicht gegen echtes Geld, Kryptowährungen, Geschenkkarten, physische Waren, externe Dienstleistungen oder sonstige Leistungen mit realem wirtschaftlichem Wert gekauft, verkauft, vermittelt, beworben, vereinbart oder getauscht werden.',
      'Das gilt für direkte Geschäfte ebenso wie für indirekte, gestaffelte oder über Mittelsleute abgewickelte Vereinbarungen, wenn eine externe Zahlung oder Gegenleistung mit einer Übertragung im Spiel verknüpft ist. Eine andere Person, ein Zweitkonto, ein Unternehmen, Kunstverkauf, Handel, eine Auktion, Marktorder, Begging oder eine andere Spielmechanik darf nicht dazu benutzt werden, einen solchen Tausch zu verschleiern oder abzuwickeln.',
      'Nicht erfasst sind Käufe bei CK-Labs über einen autorisierten TycoonX-Kanal wie Apple App Store, Google Play oder den offiziellen TycoonX-Webshop mit Xsolla sowie ausdrücklich hierfür bereitgestellte, plattformgestützte Geschenk- oder TycoonX-Übertragungsmechanismen. Begging erlaubt nur die innerhalb dieser Funktion vorgesehene Hilfe im Spiel und keine externe Zahlung als Gegenleistung für TycoonX-Werte.',
      'CK-Labs kann In-Game-Transaktionen rückgängig machen, die nach vernünftiger Prüfung mit unzulässigem Echtgeldhandel verbunden sind, und verhältnismäßige Kontobeschränkungen verhängen. CK-Labs garantiert, verwahrt, vollstreckt, erstattet oder vermittelt keine nicht autorisierten Geschäfte zwischen Nutzern außerhalb von TycoonX. Unabdingbare Rechte und Haftungstatbestände bleiben unberührt.',
    ],
  },
  es: {
    label: 'Actualización de los Términos · 5 de septiembre de 2026',
    title: 'Comercio con dinero real e intercambios fuera de TycoonX',
    paragraphs: [
      'Salvo que CK-Labs habilite expresamente un mecanismo autorizado específico, no se permite comprar, vender, intermediar, anunciar, concertar ni intercambiar una cuenta de TycoonX, dinero del juego, Diamonds, acciones, empresas, propiedades, productos, obras de arte, objetos, servicios, VIP, derechos de pago u otro valor del juego a cambio de dinero real, criptomonedas, tarjetas regalo, bienes físicos, servicios externos o cualquier otra contraprestación del mundo real.',
      'La prohibición incluye acuerdos directos y también operaciones indirectas, escalonadas o realizadas mediante intermediarios cuando un pago o beneficio externo esté vinculado a una transferencia dentro del juego. No se puede utilizar a otra persona, una cuenta alternativa, una empresa, una venta de arte, un intercambio, una subasta, una orden de mercado, Begging ni ningún otro mecanismo para ocultar o completar ese tipo de operación.',
      'Esta regla no prohíbe las compras realizadas a CK-Labs mediante un canal autorizado de TycoonX, incluidos Apple App Store, Google Play y la tienda web oficial de TycoonX con Xsolla, ni los mecanismos de regalo o transferencia compatibles con una plataforma que TycoonX habilite expresamente para ese fin. Begging solo permite la ayuda dentro del juego prevista por esa función y no autoriza pagos externos a cambio de valor de TycoonX.',
      'CK-Labs puede revertir operaciones del juego razonablemente vinculadas a comercio prohibido con dinero real y aplicar restricciones proporcionadas tras una investigación razonable. CK-Labs no garantiza, custodia, exige, reembolsa ni media en acuerdos no autorizados entre usuarios fuera de TycoonX. Esto no limita derechos ni responsabilidades que legalmente no puedan excluirse.',
    ],
  },
  es_MX: {
    label: 'Actualización de los Términos · 5 de septiembre de 2026',
    title: 'Comercio con dinero real e intercambios fuera de TycoonX',
    paragraphs: [
      'A menos que CK-Labs habilite expresamente un mecanismo autorizado específico, no puedes comprar, vender, intermediar, anunciar, acordar ni intercambiar una cuenta de TycoonX, dinero del juego, Diamonds, acciones, empresas, propiedades, productos, arte, artículos, servicios, VIP, beneficios de pago u otro valor del juego a cambio de dinero real, criptomonedas, tarjetas de regalo, bienes físicos, servicios externos o cualquier otra contraprestación del mundo real.',
      'Esto incluye acuerdos directos y también operaciones indirectas, por etapas o mediante intermediarios cuando un pago o beneficio externo esté relacionado con una transferencia dentro del juego. No puedes usar a otra persona, una cuenta alterna, una empresa, una venta de arte, un trade, una subasta, una orden de mercado, Begging ni ninguna otra mecánica para disfrazar o completar ese intercambio.',
      'Esta regla no prohíbe compras hechas a CK-Labs mediante un canal autorizado de TycoonX, como Apple App Store, Google Play o la tienda web oficial de TycoonX con Xsolla, ni mecanismos de regalo o transferencia compatibles con una plataforma que TycoonX habilite expresamente para ese propósito. Begging solo permite la ayuda dentro del juego contemplada por esa función; no autoriza pagos por fuera a cambio de valor de TycoonX.',
      'CK-Labs puede revertir transacciones dentro del juego razonablemente vinculadas con comercio prohibido por dinero real y aplicar restricciones proporcionales después de una investigación razonable. CK-Labs no garantiza, retiene en garantía, exige, reembolsa ni media acuerdos no autorizados entre usuarios fuera de TycoonX. Esto no limita derechos ni responsabilidades que la ley no permita excluir.',
    ],
  },
  fr: {
    label: 'Mise à jour des Conditions · 5 septembre 2026',
    title: 'Commerce contre de l’argent réel et échanges hors de TycoonX',
    paragraphs: [
      'Sauf si CK-Labs met expressément à disposition un mécanisme autorisé précis, il est interdit d’acheter, vendre, négocier, promouvoir, organiser ou échanger un compte TycoonX, de l’argent en jeu, des Diamonds, des actions, sociétés, biens immobiliers, produits, œuvres d’art, objets, services, avantages VIP, droits payants ou toute autre valeur du jeu contre de l’argent réel, des cryptomonnaies, cartes-cadeaux, biens physiques, services externes ou toute autre contrepartie réelle.',
      'Cette interdiction couvre les accords directs ainsi que les montages indirects, échelonnés ou faisant intervenir un intermédiaire lorsqu’un paiement ou avantage extérieur est lié à un transfert dans le jeu. Il est interdit d’utiliser une autre personne, un compte secondaire, une société, une vente d’art, un échange, une enchère, un ordre de marché, Begging ou toute autre mécanique pour dissimuler ou réaliser un tel échange.',
      'Cette règle n’interdit pas les achats effectués auprès de CK-Labs par un canal TycoonX autorisé, notamment Apple App Store, Google Play ou la boutique web officielle TycoonX utilisant Xsolla, ni un mécanisme de cadeau ou de transfert pris en charge par une plateforme et expressément proposé par TycoonX à cette fin. Begging n’autorise que l’aide en jeu prévue par cette fonctionnalité et ne permet pas un paiement extérieur en échange de valeur TycoonX.',
      'CK-Labs peut annuler des transactions en jeu raisonnablement liées à un commerce interdit contre de l’argent réel et appliquer des restrictions de compte proportionnées après une enquête raisonnable. CK-Labs ne garantit, ne séquestre, ne fait exécuter, ne rembourse ni ne médie les accords non autorisés conclus entre utilisateurs hors de TycoonX. Les droits et responsabilités qui ne peuvent légalement être exclus restent pleinement applicables.',
    ],
  },
  fr_CA: {
    label: 'Mise à jour des Conditions · 5 septembre 2026',
    title: 'Échanges contre de l’argent réel et transactions hors de TycoonX',
    paragraphs: [
      'À moins que CK-Labs mette expressément en place un mécanisme autorisé précis, vous ne pouvez pas acheter, vendre, négocier, annoncer, organiser ni échanger un compte TycoonX, de l’argent du jeu, des Diamonds, des actions, entreprises, propriétés, produits, œuvres d’art, objets, services, avantages VIP, droits payants ou toute autre valeur du jeu contre de l’argent réel, des cryptomonnaies, des cartes-cadeaux, des biens matériels, des services externes ou toute autre contrepartie réelle.',
      'Cela vise les ententes directes ainsi que les arrangements indirects, en plusieurs étapes ou par intermédiaire lorsqu’un paiement ou avantage externe est lié à un transfert dans le jeu. Vous ne pouvez pas utiliser une autre personne, un compte secondaire, une entreprise, une vente d’art, un échange, une enchère, un ordre de marché, Begging ou une autre mécanique pour camoufler ou compléter une telle opération.',
      'Cette règle n’interdit pas les achats faits auprès de CK-Labs par un canal TycoonX autorisé, notamment l’Apple App Store, Google Play ou la boutique web officielle TycoonX avec Xsolla, ni les mécanismes de cadeau ou de transfert pris en charge par une plateforme et expressément offerts par TycoonX à cette fin. Begging permet uniquement l’aide en jeu prévue par cette fonctionnalité; il n’autorise pas un paiement externe en échange de valeur TycoonX.',
      'CK-Labs peut annuler les transactions en jeu raisonnablement liées à un échange interdit contre de l’argent réel et imposer des restrictions proportionnées après une enquête raisonnable. CK-Labs ne garantit pas, ne place pas en fiducie, ne fait pas exécuter, ne rembourse pas et ne règle pas les ententes non autorisées entre utilisateurs hors de TycoonX. Les droits et responsabilités qui ne peuvent être exclus par la loi demeurent applicables.',
    ],
  },
  it: {
    label: 'Aggiornamento dei Termini · 5 settembre 2026',
    title: 'Commercio con denaro reale e scambi esterni a TycoonX',
    paragraphs: [
      'Salvo che CK-Labs metta espressamente a disposizione uno specifico meccanismo autorizzato, non è consentito acquistare, vendere, intermediare, pubblicizzare, organizzare o scambiare un account TycoonX, denaro di gioco, Diamonds, azioni, società, proprietà, prodotti, opere d’arte, oggetti, servizi, VIP, diritti a pagamento o altro valore di gioco in cambio di denaro reale, criptovalute, carte regalo, beni fisici, servizi esterni o qualsiasi altra controprestazione del mondo reale.',
      'Il divieto comprende accordi diretti e operazioni indirette, a più passaggi o tramite intermediari quando un pagamento o vantaggio esterno è collegato a un trasferimento nel gioco. Non è consentito usare un’altra persona, un account alternativo, una società, una vendita d’arte, uno scambio, un’asta, un ordine di mercato, Begging o qualunque altra meccanica per mascherare o completare tale scambio.',
      'Questa regola non vieta gli acquisti effettuati da CK-Labs tramite un canale TycoonX autorizzato, inclusi Apple App Store, Google Play e il web shop ufficiale TycoonX con Xsolla, né eventuali meccanismi di regalo o trasferimento supportati dalla piattaforma ed espressamente messi a disposizione da TycoonX per tale scopo. Begging consente soltanto l’aiuto in gioco previsto da quella funzione e non autorizza pagamenti esterni in cambio di valore TycoonX.',
      'CK-Labs può annullare transazioni in gioco ragionevolmente collegate a commercio vietato con denaro reale e applicare restrizioni proporzionate agli account dopo un’indagine ragionevole. CK-Labs non garantisce, custodisce in escrow, fa rispettare, rimborsa o media accordi non autorizzati tra utenti al di fuori di TycoonX. Restano salvi i diritti e le responsabilità che non possono essere esclusi per legge.',
    ],
  },
  pt: {
    label: 'Atualização dos Termos · 5 de setembro de 2026',
    title: 'Comércio por dinheiro real e trocas fora do TycoonX',
    paragraphs: [
      'Salvo se a CK-Labs disponibilizar expressamente um mecanismo autorizado específico, não é permitido comprar, vender, intermediar, anunciar, combinar ou trocar uma conta TycoonX, dinheiro do jogo, Diamonds, ações, empresas, imóveis, produtos, obras de arte, itens, serviços, VIP, direitos pagos ou qualquer outro valor do jogo por dinheiro real, criptomoedas, cartões-oferta, bens físicos, serviços externos ou qualquer outra contrapartida do mundo real.',
      'A proibição inclui negócios diretos e também operações indiretas, faseadas ou realizadas através de intermediários sempre que um pagamento ou benefício externo esteja ligado a uma transferência dentro do jogo. Não pode ser utilizada outra pessoa, uma conta alternativa, empresa, venda de arte, troca, leilão, ordem de mercado, Begging ou qualquer outra mecânica para disfarçar ou concluir esse tipo de troca.',
      'Esta regra não proíbe compras efetuadas à CK-Labs através de um canal TycoonX autorizado, incluindo Apple App Store, Google Play e a loja web oficial TycoonX com Xsolla, nem mecanismos de oferta ou transferência suportados pela plataforma e expressamente disponibilizados pela TycoonX para esse fim. Begging permite apenas a ajuda dentro do jogo prevista por essa funcionalidade e não autoriza pagamentos externos em troca de valor TycoonX.',
      'A CK-Labs pode reverter transações dentro do jogo razoavelmente ligadas a comércio proibido por dinheiro real e aplicar restrições proporcionais após uma investigação razoável. A CK-Labs não garante, mantém em depósito, executa, reembolsa nem medeia acordos não autorizados entre utilizadores fora do TycoonX. Mantêm-se os direitos e responsabilidades que não podem ser legalmente excluídos.',
    ],
  },
  pt_BR: {
    label: 'Atualização dos Termos · 5 de setembro de 2026',
    title: 'Comércio por dinheiro real e trocas fora do TycoonX',
    paragraphs: [
      'A menos que a CK-Labs disponibilize expressamente um mecanismo autorizado específico, você não pode comprar, vender, intermediar, anunciar, combinar ou trocar uma conta TycoonX, dinheiro do jogo, Diamonds, ações, empresas, imóveis, produtos, obras de arte, itens, serviços, VIP, benefícios pagos ou qualquer outro valor do jogo por dinheiro real, criptomoedas, cartões-presente, bens físicos, serviços externos ou qualquer outra contraprestação do mundo real.',
      'Isso inclui negócios diretos e também esquemas indiretos, em etapas ou com intermediários quando um pagamento ou benefício externo estiver ligado a uma transferência dentro do jogo. Você não pode usar outra pessoa, conta alternativa, empresa, venda de arte, trade, leilão, ordem de mercado, Begging ou qualquer outra mecânica para disfarçar ou concluir esse tipo de troca.',
      'Esta regra não proíbe compras feitas da CK-Labs por um canal TycoonX autorizado, incluindo Apple App Store, Google Play e a loja web oficial TycoonX com Xsolla, nem mecanismos de presente ou transferência compatíveis com uma plataforma e expressamente disponibilizados pela TycoonX para essa finalidade. Begging permite somente a ajuda dentro do jogo prevista pela função; não autoriza pagamento externo em troca de valor TycoonX.',
      'A CK-Labs pode reverter transações dentro do jogo razoavelmente ligadas a comércio proibido por dinheiro real e aplicar restrições proporcionais após investigação razoável. A CK-Labs não garante, mantém em custódia, executa, reembolsa nem intermedeia acordos não autorizados entre usuários fora do TycoonX. Isso não limita direitos ou responsabilidades que não possam ser excluídos por lei.',
    ],
  },
  ru: {
    label: 'Обновление Условий · 5 сентября 2026 года',
    title: 'Торговля за реальные деньги и обмен вне TycoonX',
    paragraphs: [
      'Если CK-Labs прямо не предоставляет специальный разрешённый механизм, запрещено покупать, продавать, посредничать, рекламировать, организовывать или обменивать аккаунт TycoonX, внутриигровые деньги, Diamonds, акции, компании, недвижимость, товары, произведения искусства, предметы, услуги, VIP, платные права или иную игровую ценность за реальные деньги, криптовалюту, подарочные карты, физические товары, внешние услуги или любую другую реальную встречную ценность.',
      'Запрет охватывает как прямые сделки, так и косвенные, поэтапные или посреднические схемы, если внешний платёж или выгода связаны с передачей ценности внутри игры. Нельзя использовать другого человека, дополнительный аккаунт, компанию, продажу искусства, обмен, аукцион, рыночный ордер, Begging или другую механику, чтобы скрыть или завершить такую сделку.',
      'Правило не запрещает покупки у CK-Labs через разрешённые каналы TycoonX, включая Apple App Store, Google Play и официальный веб-магазин TycoonX с Xsolla, а также поддерживаемые платформой подарки или механизмы передачи, которые TycoonX прямо предоставляет для этой цели. Begging разрешает только внутриигровую помощь, предусмотренную этой функцией, и не разрешает внешний платёж в обмен на ценность TycoonX.',
      'CK-Labs может отменять внутриигровые операции, разумно связанные с запрещённой торговлей за реальные деньги, и после разумной проверки применять соразмерные ограничения к аккаунтам. CK-Labs не гарантирует, не хранит на условном депонировании, не обеспечивает исполнение, не возмещает и не посредничает в неразрешённых внешних сделках между пользователями. Неотчуждаемые по закону права и ответственность сохраняются.',
    ],
  },
  ja: {
    label: '利用規約の更新 · 2026年9月5日',
    title: 'リアルマネートレードおよびゲーム外取引',
    paragraphs: [
      'CK-Labs が特定の正式な仕組みを明示的に提供している場合を除き、TycoonX のアカウント、ゲーム内通貨、Diamonds、株式、会社、不動産、商品、アート、アイテム、サービス、VIP、有料権利その他のゲーム内価値を、現金、暗号資産、ギフトカード、物品、ゲーム外サービスその他の現実世界の対価と引き換えに売買、仲介、宣伝、手配または交換してはなりません。',
      'ゲーム外の支払いまたは利益がゲーム内の移転と結び付いている場合、直接取引だけでなく、間接的、段階的、または仲介者を使った取引も対象です。別の人物、サブアカウント、会社、アート販売、トレード、オークション、マーケット注文、Begging その他の仕組みを使って、そのような交換を隠したり成立させたりしてはなりません。',
      'このルールは、Apple App Store、Google Play、Xsolla を利用する TycoonX 公式ウェブショップなど、CK-Labs が認めた TycoonX の購入経路で CK-Labs から購入することや、TycoonX がその目的のため明示的に提供するプラットフォーム対応のギフト・移転機能を禁止するものではありません。Begging はその機能内で認められたゲーム内支援のみを対象とし、TycoonX の価値と引き換えのゲーム外支払いを認めるものではありません。',
      'CK-Labs は、合理的な調査により禁止されたリアルマネートレードとの関連が認められるゲーム内取引を取り消し、関係アカウントに比例的な制限を行うことがあります。CK-Labs は、利用者間の無許可のゲーム外取引について、保証、エスクロー、履行確保、返金または仲介を行いません。法律上排除できない権利や責任は制限されません。',
    ],
  },
  ko: {
    label: '이용약관 업데이트 · 2026년 9월 5일',
    title: '현금 거래 및 게임 외부 교환',
    paragraphs: [
      'CK-Labs가 특정한 공식 허용 방식을 명시적으로 제공하지 않는 한 TycoonX 계정, 게임 내 돈, Diamonds, 주식, 회사, 부동산, 제품, 아트, 아이템, 서비스, VIP, 유료 권리 또는 기타 게임 가치를 현금, 암호화폐, 기프트 카드, 실물 상품, 외부 서비스 또는 그 밖의 현실 세계 대가와 교환하여 구매, 판매, 중개, 광고, 주선하거나 거래해서는 안 됩니다.',
      '게임 외부의 지급이나 이익이 게임 내 이전과 연결된 경우 직접 거래뿐 아니라 간접 거래, 여러 단계로 나눈 거래 또는 중개인을 이용한 방식도 포함됩니다. 다른 사람, 부계정, 회사, 아트 판매, 거래, 경매, 시장 주문, Begging 또는 다른 게임 기능을 사용해 이러한 교환을 숨기거나 완료해서는 안 됩니다.',
      '이 규칙은 Apple App Store, Google Play, Xsolla를 사용하는 TycoonX 공식 웹숍 등 CK-Labs가 승인한 TycoonX 채널에서 CK-Labs로부터 구매하는 행위나 TycoonX가 그 목적을 위해 명시적으로 제공하는 플랫폼 지원 선물·이전 기능을 금지하지 않습니다. Begging은 해당 기능에서 허용하는 게임 내 도움만 허용하며 TycoonX 가치와 맞바꾸는 게임 외부 지급을 허용하지 않습니다.',
      'CK-Labs는 합리적인 조사 후 금지된 현금 거래와 합리적으로 연결된 게임 내 거래를 되돌리고 관련 계정에 비례적인 제한을 적용할 수 있습니다. CK-Labs는 사용자 간의 승인되지 않은 게임 외부 거래를 보증하거나 에스크로로 보관하거나 이행을 강제하거나 환불하거나 중개하지 않습니다. 법적으로 배제할 수 없는 권리와 책임은 제한되지 않습니다.',
    ],
  },
  zh: {
    label: '条款更新 · 2026年9月5日',
    title: '现实货币交易与游戏外交换',
    paragraphs: [
      '除非 CK-Labs 明确提供特定的官方授权机制，否则不得以现实货币、加密货币、礼品卡、实体商品、外部服务或任何其他现实世界对价，购买、出售、中介、宣传、安排或交换 TycoonX 账号、游戏内货币、Diamonds、股份、公司、房产、产品、艺术品、物品、服务、VIP、付费权益或其他游戏内价值。',
      '本规则既适用于直接交易，也适用于外部付款或利益与游戏内转移相联系的间接、分阶段或经中间人安排的交易。不得利用他人、备用账号、公司、艺术品出售、交易、拍卖、市场订单、Begging 或其他游戏机制来掩饰或完成这类交换。',
      '本规则不禁止玩家通过 CK-Labs 授权的 TycoonX 渠道向 CK-Labs 购买，包括 Apple App Store、Google Play 以及使用 Xsolla 的 TycoonX 官方网页商店，也不禁止 TycoonX 为此目的明确提供的平台支持赠送或转移机制。Begging 只允许该功能规则范围内的游戏内帮助，不允许以游戏外付款换取 TycoonX 价值。',
      '经合理调查后，CK-Labs 可撤销与被禁止的现实货币交易有合理关联的游戏内交易，并对相关账号采取相称限制。CK-Labs 不为用户之间未经授权的游戏外交易提供保证、托管、履约、退款或居间服务。本规则不限制法律上不得排除的权利或责任。',
    ],
  },
  zh_Hans: {
    label: '条款更新 · 2026年9月5日',
    title: '现实货币交易和游戏外交换',
    paragraphs: [
      '除非 CK-Labs 明确提供特定的官方授权方式，否则不得用现实货币、加密货币、礼品卡、实体商品、外部服务或任何其他现实世界对价，购买、出售、中介、宣传、安排或交换 TycoonX 账号、游戏内货币、Diamonds、股份、公司、房产、产品、艺术品、物品、服务、VIP、付费权益或其他游戏内价值。',
      '这既包括直接交易，也包括外部付款或利益与游戏内转移有关联的间接交易、分步骤交易或中间人交易。不得利用他人、备用账号、公司、艺术品出售、交易、拍卖、市场订单、Begging 或任何其他游戏机制来掩盖或完成这种交换。',
      '本规则不禁止通过 CK-Labs 授权的 TycoonX 渠道向 CK-Labs 购买，包括 Apple App Store、Google Play 和使用 Xsolla 的 TycoonX 官方网页商店，也不禁止 TycoonX 为此目的明确提供的平台支持赠送或转移机制。Begging 只允许该功能本身许可的游戏内帮助，不允许用游戏外付款换取 TycoonX 价值。',
      '经合理调查后，CK-Labs 可以撤销与被禁止的现实货币交易有合理联系的游戏内交易，并对相关账号采取相称限制。CK-Labs 不保证、托管、执行、退款或居间处理用户之间未经授权的游戏外交易。本规则不限制法律上不得排除的权利或责任。',
    ],
  },
  zh_Hant: {
    label: '條款更新 · 2026年9月5日',
    title: '現實貨幣交易與遊戲外交換',
    paragraphs: [
      '除非 CK-Labs 明確提供特定的官方授權機制，否則不得以現實貨幣、加密貨幣、禮品卡、實體商品、外部服務或任何其他現實世界對價，購買、出售、中介、宣傳、安排或交換 TycoonX 帳號、遊戲內貨幣、Diamonds、股份、公司、不動產、產品、藝術品、物品、服務、VIP、付費權益或其他遊戲內價值。',
      '本規則包括直接交易，也包括外部付款或利益與遊戲內轉移有關聯的間接、分階段或透過中間人的安排。不得利用他人、備用帳號、公司、藝術品出售、交易、拍賣、市場訂單、Begging 或任何其他遊戲機制來掩飾或完成此類交換。',
      '本規則不禁止透過 CK-Labs 授權的 TycoonX 管道向 CK-Labs 購買，包括 Apple App Store、Google Play 及使用 Xsolla 的 TycoonX 官方網頁商店，也不禁止 TycoonX 為此目的明確提供的平台支援贈送或轉移機制。Begging 僅允許該功能規則內的遊戲中協助，不允許以遊戲外付款換取 TycoonX 價值。',
      '經合理調查後，CK-Labs 可撤銷與遭禁止的現實貨幣交易有合理關聯的遊戲內交易，並對相關帳號採取相稱限制。CK-Labs 不為使用者之間未經授權的遊戲外交易提供保證、託管、履約、退款或居間服務。本規則不限制法律上不得排除的權利或責任。',
    ],
  },
  ar: {
    label: 'تحديث الشروط · 5 سبتمبر 2026',
    title: 'التداول مقابل أموال حقيقية والتبادل خارج TycoonX',
    paragraphs: [
      'ما لم توفّر CK-Labs صراحةً آلية محددة ومصرّحاً بها، لا يجوز شراء أو بيع أو التوسط في أو الإعلان عن أو ترتيب أو مبادلة حساب TycoonX أو أموال اللعبة أو Diamonds أو الأسهم أو الشركات أو العقارات أو المنتجات أو الأعمال الفنية أو العناصر أو الخدمات أو VIP أو الاستحقاقات المدفوعة أو أي قيمة أخرى داخل اللعبة مقابل أموال حقيقية أو عملات مشفّرة أو بطاقات هدايا أو سلع مادية أو خدمات خارجية أو أي مقابل آخر في العالم الحقيقي.',
      'يشمل ذلك الصفقات المباشرة والترتيبات غير المباشرة أو المرحلية أو التي تتم عبر وسيط متى كان دفع أو منفعة خارج اللعبة مرتبطاً بتحويل داخل اللعبة. ولا يجوز استخدام شخص آخر أو حساب بديل أو شركة أو بيع عمل فني أو صفقة أو مزاد أو أمر سوق أو Begging أو أي آلية أخرى لإخفاء هذا النوع من التبادل أو إتمامه.',
      'لا تحظر هذه القاعدة عمليات الشراء من CK-Labs عبر قناة TycoonX معتمدة، بما في ذلك Apple App Store وGoogle Play والمتجر الرسمي لـ TycoonX على الويب باستخدام Xsolla، ولا آليات الإهداء أو التحويل المدعومة من المنصة التي يوفّرها TycoonX صراحةً لهذا الغرض. وتسمح Begging فقط بالمساعدة داخل اللعبة التي تتيحها هذه الميزة ولا تسمح بدفع خارجي مقابل قيمة في TycoonX.',
      'يجوز لـ CK-Labs عكس المعاملات داخل اللعبة المرتبطة بصورة معقولة بتداول محظور مقابل أموال حقيقية وفرض قيود متناسبة على الحسابات بعد تحقيق معقول. ولا تضمن CK-Labs الصفقات غير المصرح بها بين المستخدمين خارج TycoonX ولا تحتفظ بأموالها كضمان ولا تنفذها ولا تردّها ولا تتوسط فيها. ولا يحد ذلك من الحقوق أو المسؤوليات التي لا يجوز قانوناً استبعادها.',
    ],
  },
  nl: {
    label: 'Update van de Voorwaarden · 5 september 2026',
    title: 'Handel voor echt geld en uitwisseling buiten TycoonX',
    paragraphs: [
      'Tenzij CK-Labs uitdrukkelijk een specifieke toegestane methode aanbiedt, mag je een TycoonX-account, spelgeld, Diamonds, aandelen, bedrijven, vastgoed, producten, kunst, items, diensten, VIP, betaalde rechten of andere spelwaarde niet kopen, verkopen, bemiddelen, adverteren, regelen of ruilen voor echt geld, cryptovaluta, cadeaubonnen, fysieke goederen, externe diensten of een andere tegenprestatie in de echte wereld.',
      'Dit omvat directe deals en indirecte, gefaseerde of via tussenpersonen uitgevoerde afspraken wanneer een betaling of voordeel buiten het spel gekoppeld is aan een overdracht in het spel. Je mag geen andere persoon, alternatief account, bedrijf, kunstverkoop, trade, veiling, marktorder, Begging of ander spelmechanisme gebruiken om zo’n uitwisseling te verbergen of af te ronden.',
      'Deze regel verbiedt geen aankopen bij CK-Labs via een toegestaan TycoonX-kanaal, waaronder Apple App Store, Google Play en de officiële TycoonX-webshop met Xsolla, en ook geen door een platform ondersteund cadeau- of overdrachtsmechanisme dat TycoonX uitdrukkelijk voor dat doel aanbiedt. Begging staat alleen de hulp in het spel toe die binnen die functie is toegestaan en geeft geen toestemming voor een externe betaling in ruil voor TycoonX-waarde.',
      'CK-Labs kan transacties in het spel terugdraaien die na redelijk onderzoek redelijkerwijs verband houden met verboden handel voor echt geld en kan evenredige accountbeperkingen toepassen. CK-Labs garandeert, bewaart, handhaaft, vergoedt of bemiddelt geen ongeautoriseerde deals tussen gebruikers buiten TycoonX. Rechten en aansprakelijkheden die wettelijk niet kunnen worden uitgesloten blijven onaangetast.',
    ],
  },
  sv: {
    label: 'Uppdatering av villkoren · 5 september 2026',
    title: 'Handel för riktiga pengar och byten utanför TycoonX',
    paragraphs: [
      'Om CK-Labs inte uttryckligen tillhandahåller en särskild godkänd mekanism får ett TycoonX-konto, spelvaluta, Diamonds, aktier, företag, fastigheter, produkter, konst, föremål, tjänster, VIP, betalda rättigheter eller annat spelvärde inte köpas, säljas, förmedlas, annonseras, arrangeras eller bytas mot riktiga pengar, kryptovaluta, presentkort, fysiska varor, externa tjänster eller annan ersättning i den verkliga världen.',
      'Förbudet omfattar både direkta affärer och indirekta, stegvisa eller förmedlade upplägg när en betalning eller förmån utanför spelet är kopplad till en överföring i spelet. En annan person, ett alternativt konto, företag, konstförsäljning, handel, auktion, marknadsorder, Begging eller annan spelmekanik får inte användas för att dölja eller genomföra ett sådant byte.',
      'Regeln förbjuder inte köp från CK-Labs via en godkänd TycoonX-kanal, inklusive Apple App Store, Google Play och den officiella TycoonX-webbshoppen med Xsolla, eller en plattformsstödd gåvo- eller överföringsfunktion som TycoonX uttryckligen erbjuder för det ändamålet. Begging tillåter endast den hjälp i spelet som funktionen medger och tillåter inte extern betalning i utbyte mot TycoonX-värde.',
      'CK-Labs kan efter en rimlig utredning återföra transaktioner i spelet som rimligen är kopplade till förbjuden handel för riktiga pengar och tillämpa proportionerliga kontobegränsningar. CK-Labs garanterar, förvarar, verkställer, återbetalar eller medlar inte i obehöriga affärer mellan användare utanför TycoonX. Rättigheter och ansvar som inte lagligen kan uteslutas påverkas inte.',
    ],
  },
  nb: {
    label: 'Oppdatering av vilkårene · 5. september 2026',
    title: 'Handel for ekte penger og bytte utenfor TycoonX',
    paragraphs: [
      'Med mindre CK-Labs uttrykkelig tilbyr en bestemt godkjent mekanisme, kan en TycoonX-konto, penger i spillet, Diamonds, aksjer, selskaper, eiendommer, produkter, kunst, gjenstander, tjenester, VIP, betalte rettigheter eller annen spillverdi ikke kjøpes, selges, formidles, annonseres, avtales eller byttes mot ekte penger, kryptovaluta, gavekort, fysiske varer, eksterne tjenester eller annen motytelse i den virkelige verden.',
      'Dette omfatter både direkte avtaler og indirekte, trinnvise eller mellommannsbaserte opplegg der en betaling eller fordel utenfor spillet er knyttet til en overføring i spillet. En annen person, alternativ konto, et selskap, kunstsalg, en handel, auksjon, markedsordre, Begging eller annen spillmekanikk kan ikke brukes til å skjule eller gjennomføre et slikt bytte.',
      'Regelen forbyr ikke kjøp fra CK-Labs gjennom en godkjent TycoonX-kanal, blant annet Apple App Store, Google Play og den offisielle TycoonX-nettbutikken med Xsolla, eller en plattformstøttet gave- eller overføringsmekanisme som TycoonX uttrykkelig tilbyr for dette formålet. Begging tillater bare den hjelpen i spillet som funksjonen åpner for, og tillater ikke ekstern betaling i bytte mot TycoonX-verdi.',
      'CK-Labs kan etter en rimelig undersøkelse reversere transaksjoner i spillet som med rimelighet kan knyttes til forbudt handel for ekte penger, og ilegge forholdsmessige kontobegrensninger. CK-Labs garanterer, holder i depot, håndhever, refunderer eller formidler ikke uautoriserte avtaler mellom brukere utenfor TycoonX. Rettigheter og ansvar som ikke lovlig kan utelukkes, påvirkes ikke.',
    ],
  },
  pl: {
    label: 'Aktualizacja Warunków · 5 września 2026 r.',
    title: 'Handel za prawdziwe pieniądze i wymiana poza TycoonX',
    paragraphs: [
      'Jeżeli CK-Labs wyraźnie nie udostępni konkretnego autoryzowanego mechanizmu, nie wolno kupować, sprzedawać, pośredniczyć, reklamować, organizować ani wymieniać konta TycoonX, pieniędzy w grze, Diamonds, udziałów, spółek, nieruchomości, produktów, dzieł sztuki, przedmiotów, usług, VIP, płatnych uprawnień ani innej wartości w grze w zamian za prawdziwe pieniądze, kryptowaluty, karty podarunkowe, towary fizyczne, usługi zewnętrzne lub inne świadczenie w świecie rzeczywistym.',
      'Zakaz obejmuje bezpośrednie transakcje oraz pośrednie, etapowe lub realizowane przez pośrednika ustalenia, gdy płatność lub korzyść poza grą jest powiązana z transferem w grze. Nie wolno używać innej osoby, konta alternatywnego, spółki, sprzedaży sztuki, handlu, aukcji, zlecenia rynkowego, Begging ani innej mechaniki do ukrycia lub zrealizowania takiej wymiany.',
      'Zasada nie zabrania zakupów od CK-Labs przez autoryzowany kanał TycoonX, w tym Apple App Store, Google Play i oficjalny sklep internetowy TycoonX korzystający z Xsolla, ani obsługiwanych przez platformę mechanizmów prezentów lub transferów wyraźnie udostępnionych przez TycoonX w tym celu. Begging pozwala wyłącznie na pomoc w grze przewidzianą przez tę funkcję i nie zezwala na płatność poza grą w zamian za wartość TycoonX.',
      'CK-Labs może po rozsądnym postępowaniu wyjaśniającym cofnąć transakcje w grze, które są w rozsądny sposób powiązane z zabronionym handlem za prawdziwe pieniądze, oraz zastosować proporcjonalne ograniczenia kont. CK-Labs nie gwarantuje, nie przechowuje w depozycie, nie egzekwuje, nie zwraca środków ani nie pośredniczy w nieautoryzowanych umowach między użytkownikami poza TycoonX. Nie ogranicza to praw ani odpowiedzialności, których zgodnie z prawem nie można wyłączyć.',
    ],
  },
  th: {
    label: 'อัปเดตข้อกำหนด · 5 กันยายน 2026',
    title: 'การซื้อขายด้วยเงินจริงและการแลกเปลี่ยนนอก TycoonX',
    paragraphs: [
      'เว้นแต่ CK-Labs จะจัดให้มีกลไกที่ได้รับอนุญาตอย่างชัดเจนโดยเฉพาะ ห้ามซื้อ ขาย เป็นนายหน้า โฆษณา จัดหา หรือแลกเปลี่ยนบัญชี TycoonX เงินในเกม Diamonds หุ้น บริษัท อสังหาริมทรัพย์ สินค้า งานศิลปะ ไอเทม บริการ VIP สิทธิแบบชำระเงิน หรือมูลค่าอื่นในเกม เพื่อแลกกับเงินจริง คริปโทเคอร์เรนซี บัตรของขวัญ สินค้าจริง บริการนอกเกม หรือสิ่งตอบแทนอื่นในโลกจริง',
      'ข้อห้ามนี้ครอบคลุมทั้งข้อตกลงโดยตรงและการจัดการโดยอ้อม เป็นขั้นตอน หรือผ่านคนกลาง เมื่อการชำระเงินหรือผลประโยชน์นอกเกมเชื่อมโยงกับการโอนในเกม ห้ามใช้บุคคลอื่น บัญชีสำรอง บริษัท การขายงานศิลปะ การเทรด การประมูล คำสั่งตลาด Begging หรือกลไกอื่นเพื่อปกปิดหรือทำให้การแลกเปลี่ยนดังกล่าวเสร็จสมบูรณ์',
      'กฎนี้ไม่ห้ามการซื้อจาก CK-Labs ผ่านช่องทาง TycoonX ที่ได้รับอนุญาต เช่น Apple App Store, Google Play และเว็บช็อป TycoonX อย่างเป็นทางการที่ใช้ Xsolla และไม่ห้ามกลไกการให้ของขวัญหรือการโอนที่แพลตฟอร์มรองรับและ TycoonX เปิดให้ใช้อย่างชัดเจนเพื่อวัตถุประสงค์นั้น Begging อนุญาตเฉพาะความช่วยเหลือภายในเกมตามที่ฟีเจอร์กำหนด และไม่อนุญาตให้มีการจ่ายเงินภายนอกเพื่อแลกกับมูลค่าใน TycoonX',
      'CK-Labs อาจย้อนกลับธุรกรรมในเกมที่มีความเชื่อมโยงอย่างสมเหตุสมผลกับการซื้อขายด้วยเงินจริงที่ต้องห้าม และอาจใช้ข้อจำกัดบัญชีอย่างได้สัดส่วนหลังการตรวจสอบที่สมเหตุสมผล CK-Labs ไม่รับประกัน ไม่ทำหน้าที่เอสโครว์ ไม่บังคับให้ปฏิบัติตาม ไม่คืนเงิน และไม่เป็นตัวกลางให้กับข้อตกลงนอก TycoonX ที่ไม่ได้รับอนุญาตระหว่างผู้ใช้ ทั้งนี้ไม่จำกัดสิทธิหรือความรับผิดที่กฎหมายไม่อนุญาตให้ตัดออก',
    ],
  },
  vi: {
    label: 'Cập nhật Điều khoản · 5 tháng 9 năm 2026',
    title: 'Giao dịch bằng tiền thật và trao đổi ngoài TycoonX',
    paragraphs: [
      'Trừ khi CK-Labs công khai cung cấp một cơ chế được cho phép cụ thể, bạn không được mua, bán, môi giới, quảng cáo, sắp xếp hoặc trao đổi tài khoản TycoonX, tiền trong game, Diamonds, cổ phần, công ty, bất động sản, sản phẩm, tác phẩm nghệ thuật, vật phẩm, dịch vụ, VIP, quyền lợi trả phí hoặc giá trị khác trong game để đổi lấy tiền thật, tiền mã hóa, thẻ quà tặng, hàng hóa vật lý, dịch vụ bên ngoài hoặc bất kỳ lợi ích đối ứng nào trong thế giới thực.',
      'Quy định này bao gồm giao dịch trực tiếp và cả các thỏa thuận gián tiếp, nhiều bước hoặc qua trung gian khi một khoản thanh toán hay lợi ích bên ngoài gắn với việc chuyển giá trị trong game. Không được dùng người khác, tài khoản phụ, công ty, giao dịch bán tác phẩm nghệ thuật, trade, đấu giá, lệnh thị trường, Begging hoặc cơ chế khác để che giấu hay hoàn tất việc trao đổi đó.',
      'Quy định này không cấm việc mua từ CK-Labs qua kênh TycoonX được cho phép, bao gồm Apple App Store, Google Play và web shop TycoonX chính thức sử dụng Xsolla, cũng không cấm cơ chế tặng hoặc chuyển được nền tảng hỗ trợ mà TycoonX công khai cung cấp cho đúng mục đích đó. Begging chỉ cho phép hỗ trợ trong game theo phạm vi của tính năng và không cho phép thanh toán bên ngoài để đổi lấy giá trị TycoonX.',
      'Sau khi điều tra hợp lý, CK-Labs có thể đảo ngược giao dịch trong game có liên hệ hợp lý với hoạt động mua bán bằng tiền thật bị cấm và áp dụng hạn chế tài khoản tương xứng. CK-Labs không bảo đảm, ký quỹ, cưỡng chế, hoàn tiền hoặc làm trung gian cho các thỏa thuận ngoài TycoonX chưa được cho phép giữa người dùng. Điều này không hạn chế các quyền hoặc trách nhiệm mà pháp luật không cho phép loại trừ.',
    ],
  },
  uk: {
    label: 'Оновлення Умов · 5 вересня 2026 року',
    title: 'Торгівля за реальні гроші та обмін поза TycoonX',
    paragraphs: [
      'Якщо CK-Labs прямо не надає спеціальний дозволений механізм, заборонено купувати, продавати, посередничати, рекламувати, організовувати або обмінювати акаунт TycoonX, ігрові гроші, Diamonds, акції, компанії, нерухомість, продукти, твори мистецтва, предмети, послуги, VIP, платні права чи іншу ігрову цінність за реальні гроші, криптовалюту, подарункові картки, фізичні товари, зовнішні послуги чи будь-яку іншу реальну зустрічну вигоду.',
      'Заборона охоплює прямі угоди, а також непрямі, поетапні чи посередницькі схеми, якщо зовнішня оплата або вигода пов’язана з передачею цінності в грі. Не можна використовувати іншу особу, альтернативний акаунт, компанію, продаж мистецтва, обмін, аукціон, ринкове замовлення, Begging чи іншу механіку, щоб приховати або завершити такий обмін.',
      'Це правило не забороняє покупки у CK-Labs через дозволений канал TycoonX, зокрема Apple App Store, Google Play та офіційний вебмагазин TycoonX із Xsolla, а також підтримувані платформою подарункові чи трансферні механізми, які TycoonX прямо надає для цієї мети. Begging дозволяє лише допомогу в грі в межах цієї функції і не дозволяє зовнішню оплату в обмін на цінність TycoonX.',
      'CK-Labs може після обґрунтованої перевірки скасувати ігрові операції, які обґрунтовано пов’язані із забороненою торгівлею за реальні гроші, та застосувати пропорційні обмеження до акаунтів. CK-Labs не гарантує, не зберігає в ескроу, не забезпечує виконання, не повертає кошти й не виступає посередником у несанкціонованих угодах між користувачами поза TycoonX. Це не обмежує права чи відповідальність, які не можна виключити за законом.',
    ],
  },
  hi: {
    label: 'शर्तों का अपडेट · 5 सितंबर 2026',
    title: 'असली पैसे से ट्रेडिंग और TycoonX के बाहर लेन-देन',
    paragraphs: [
      'जब तक CK-Labs किसी विशेष अधिकृत तरीके को स्पष्ट रूप से उपलब्ध न कराए, आप TycoonX खाते, इन-गेम पैसे, Diamonds, शेयर, कंपनियाँ, संपत्ति, उत्पाद, कला, आइटम, सेवाएँ, VIP, भुगतान किए गए अधिकार या किसी अन्य गेम मूल्य को असली पैसे, क्रिप्टोकरेंसी, गिफ्ट कार्ड, भौतिक सामान, बाहरी सेवाओं या किसी अन्य वास्तविक दुनिया के प्रतिफल के बदले खरीद, बेच, बिचौलिया बनकर सौदा, विज्ञापन, व्यवस्था या विनिमय नहीं कर सकते।',
      'इसमें सीधे सौदे के साथ वे अप्रत्यक्ष, चरणबद्ध या बिचौलिए वाले समझौते भी शामिल हैं जहाँ गेम के बाहर का भुगतान या लाभ इन-गेम ट्रांसफर से जुड़ा हो। ऐसे विनिमय को छिपाने या पूरा करने के लिए किसी अन्य व्यक्ति, वैकल्पिक खाते, कंपनी, कला बिक्री, ट्रेड, नीलामी, मार्केट ऑर्डर, Begging या किसी अन्य गेम मैकेनिक का उपयोग नहीं किया जा सकता।',
      'यह नियम Apple App Store, Google Play या Xsolla वाले आधिकारिक TycoonX वेब शॉप सहित CK-Labs द्वारा अधिकृत TycoonX चैनल से CK-Labs की खरीद को नहीं रोकता, न ही ऐसे प्लेटफॉर्म-समर्थित उपहार या ट्रांसफर मैकेनिज़्म को रोकता है जिसे TycoonX ने इसी उद्देश्य के लिए स्पष्ट रूप से उपलब्ध कराया हो। Begging केवल उस फीचर में अनुमत इन-गेम सहायता की अनुमति देता है; यह TycoonX मूल्य के बदले बाहरी भुगतान की अनुमति नहीं देता।',
      'उचित जाँच के बाद CK-Labs प्रतिबंधित असली-पैसे की ट्रेडिंग से उचित रूप से जुड़े इन-गेम लेन-देन को पलट सकता है और संबंधित खातों पर अनुपातिक प्रतिबंध लगा सकता है। CK-Labs उपयोगकर्ताओं के बीच TycoonX से बाहर के अनधिकृत सौदों की गारंटी, एस्क्रो, प्रवर्तन, रिफंड या मध्यस्थता नहीं करता। इससे उन अधिकारों या जिम्मेदारियों पर असर नहीं पड़ता जिन्हें कानूनन बाहर नहीं किया जा सकता।',
    ],
  },
  id: {
    label: 'Pembaruan Ketentuan · 5 September 2026',
    title: 'Perdagangan dengan uang nyata dan pertukaran di luar TycoonX',
    paragraphs: [
      'Kecuali CK-Labs secara tegas menyediakan mekanisme tertentu yang diizinkan, Anda tidak boleh membeli, menjual, menjadi perantara, mengiklankan, mengatur, atau menukar akun TycoonX, uang dalam game, Diamonds, saham, perusahaan, properti, produk, karya seni, item, layanan, VIP, hak berbayar, atau nilai game lainnya dengan uang nyata, mata uang kripto, kartu hadiah, barang fisik, layanan di luar game, atau bentuk imbalan lain di dunia nyata.',
      'Larangan ini mencakup kesepakatan langsung maupun pengaturan tidak langsung, bertahap, atau melalui perantara apabila pembayaran atau manfaat di luar game terkait dengan transfer di dalam game. Anda tidak boleh menggunakan orang lain, akun alternatif, perusahaan, penjualan karya seni, trade, lelang, order pasar, Begging, atau mekanisme lain untuk menyamarkan atau menyelesaikan pertukaran tersebut.',
      'Aturan ini tidak melarang pembelian dari CK-Labs melalui kanal TycoonX resmi yang diizinkan, termasuk Apple App Store, Google Play, dan web shop resmi TycoonX yang menggunakan Xsolla, maupun mekanisme hadiah atau transfer yang didukung platform dan secara tegas disediakan TycoonX untuk tujuan tersebut. Begging hanya mengizinkan bantuan di dalam game sebagaimana diatur oleh fitur itu dan tidak mengizinkan pembayaran di luar game sebagai imbalan atas nilai TycoonX.',
      'CK-Labs dapat membalikkan transaksi dalam game yang secara wajar terkait dengan perdagangan uang nyata yang dilarang dan menerapkan pembatasan akun secara proporsional setelah penyelidikan yang wajar. CK-Labs tidak menjamin, menahan dalam escrow, menegakkan, mengembalikan dana, atau menjadi perantara untuk kesepakatan tidak sah antarpengguna di luar TycoonX. Hal ini tidak membatasi hak atau tanggung jawab yang menurut hukum tidak dapat dikesampingkan.',
    ],
  },
};

function getLocale(pathname: string): string | null {
  if (/^\/tyconx-terms-of-service\/?$/.test(pathname)) return 'en';
  const match = pathname.match(/^\/tycoonx-legal\/([^/]+)\/terms\/?$/);
  return match?.[1] ?? null;
}

export default function RealMoneyTradingNotice() {
  const pathname = usePathname();
  const locale = getLocale(pathname);
  if (!locale || !copies[locale]) return null;

  const copy = copies[locale];
  const rtl = locale === 'ar';

  return (
    <section className="max-w-3xl mx-auto px-4 pb-12" lang={locale === 'en' ? 'en' : locale} dir={rtl ? 'rtl' : 'ltr'} aria-labelledby="tycoonx-rmt-rule-heading">
      <div className="rounded-xl border border-rose-400/20 bg-rose-400/[0.05] p-6">
        <p className="text-rose-300/80 text-xs font-medium tracking-wide mb-2">{copy.label}</p>
        <h2 id="tycoonx-rmt-rule-heading" className="text-white font-semibold mb-4">{copy.title}</h2>
        <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
          {copy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  );
}
