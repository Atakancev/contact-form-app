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
    title: 'Genuine transactions and prohibited wealth transfers',
    paragraphs: [
      'Players are expected to build their own in-game wealth through gameplay and genuine economic activity. Player-to-player transfers of in-game money, assets, or other economic value are allowed only when they are part of a genuine gameplay transaction and the relevant feature is being used for its intended purpose.',
      'You must not use a trade, sale, auction, art purchase, company transaction, contract, job, market order, or any other game mechanic merely or mainly to gift, donate, financially help, enrich, funnel, park, hide, or move wealth to another account. Sham, circular, or coordinated transactions used mainly to move value rather than genuinely use the feature are prohibited, including between accounts controlled or coordinated by the same person.',
      'For example, an art purchase must be a genuine purchase because the buyer wants the artwork. Buying art mainly to send money to the artist or financially help that player is not permitted. The same principle applies to every other game mechanic: the real reason for the transaction must match the purpose of the feature being used.',
      'If you want to ask other players for financial help, use TycoonX’s designated Begging screen or feature where available. Other gameplay mechanics are not donation or assistance channels.',
      'CK-Labs may assess the surrounding context, including reciprocal value, transaction history, account relationships, repeated transfers, pricing patterns, and relevant communications. A high price, generous deal, or unusual transaction is not automatically a violation. Enforcement requires reasonable evidence that the mechanic was used mainly to transfer wealth without a genuine permitted gameplay purpose. CK-Labs may reverse prohibited transfers and proportionately restrict involved accounts, while preserving unrelated legitimate paid value and mandatory rights.',
    ],
  },
  tr: {
    label: 'Koşul güncellemesi · 5 Eylül 2026',
    title: 'Gerçek işlemler ve yasaklanan servet aktarımları',
    paragraphs: [
      'Oyuncuların oyun içi servetlerini kendi oyun faaliyetleri ve gerçek ekonomik işlemleriyle oluşturması beklenir. Oyuncular arasında oyun içi para, varlık veya başka ekonomik değer aktarımı yalnızca gerçek bir oyun işleminin parçasıysa ve kullanılan özellik kendi amaçlanan işlevi için kullanılıyorsa mümkündür.',
      'Bir ticareti, satışı, açık artırmayı, sanat eseri satın alımını, şirket işlemini, sözleşmeyi, işi, piyasa emrini veya başka bir oyun mekaniğini yalnızca ya da esas olarak başka bir hesaba hediye vermek, bağış yapmak, maddi yardım etmek, o hesabı zenginleştirmek, servet aktarmak, serveti geçici olarak park etmek, gizlemek veya taşımak için kullanamazsınız. Özelliği gerçekten kullanmak yerine esas amacı değer aktarmak olan göstermelik, döngüsel veya koordineli işlemler; aynı kişi tarafından kontrol edilen ya da birlikte hareket eden hesaplar arasında da olsa yasaktır.',
      'Örneğin bir sanat eseri satın alımı, alıcının gerçekten o eseri almak istemesine dayanmalıdır. Sanat eserini esas olarak sanatçıya para göndermek veya o oyuncuya maddi yardım etmek için satın almak yasaktır. Aynı ilke tüm diğer oyun mekanikleri için de geçerlidir: işlemin gerçek nedeni, kullanılan özelliğin amacıyla uyuşmalıdır.',
      'Başka oyunculardan maddi yardım istemek istiyorsanız, mevcut olduğu yerde TycoonX’in özel Begging (yardım isteme) ekranını veya özelliğini kullanın. Diğer oyun mekanikleri bağış veya yardım kanalı olarak kullanılamaz.',
      'CK-Labs; karşılıklı verilen değeri, işlem geçmişini, hesaplar arasındaki ilişkileri, tekrarlanan aktarımları, fiyat örüntülerini ve ilgili iletişimleri dahil olmak üzere olayın bütününü değerlendirebilir. Yüksek fiyat, cömert bir anlaşma veya olağandışı bir işlem tek başına ihlal sayılmaz. Yaptırım için mekaniğin gerçek ve izin verilen bir oyun amacı olmadan esas olarak servet aktarmak amacıyla kullanıldığına dair makul kanıt gerekir. CK-Labs yasaklı aktarımları geri alabilir ve ilgili hesapları orantılı şekilde kısıtlayabilir; ilgisiz meşru ücretli değer ve zorunlu haklar korunur.',
    ],
  },
  de: {
    label: 'Aktualisierung der Nutzungsbedingungen · 5. September 2026',
    title: 'Echte Transaktionen und unzulässige Vermögensübertragungen',
    paragraphs: [
      'Spieler sollen ihr Spielvermögen durch eigenes Spielen und echte wirtschaftliche Aktivitäten aufbauen. Übertragungen von Spielgeld, Vermögenswerten oder anderem wirtschaftlichem Wert zwischen Spielern sind nur zulässig, wenn sie Teil einer echten Spieltransaktion sind und die verwendete Funktion ihrem vorgesehenen Zweck entsprechend genutzt wird.',
      'Handel, Verkäufe, Auktionen, Kunstkäufe, Unternehmenstransaktionen, Verträge, Jobs, Marktaufträge oder andere Spielmechaniken dürfen nicht lediglich oder hauptsächlich dazu verwendet werden, einem anderen Konto etwas zu schenken, zu spenden, finanziell zu helfen, es zu bereichern oder Vermögen dorthin zu schleusen, zwischenzuparken, zu verbergen oder zu verschieben. Schein-, Kreis- oder abgestimmte Geschäfte, deren Hauptzweck die Wertübertragung statt der echten Nutzung der Funktion ist, sind untersagt. Das gilt auch zwischen Konten, die von derselben Person kontrolliert oder koordiniert werden.',
      'Beispiel: Ein Kunstwerk darf gekauft werden, weil der Käufer das Kunstwerk tatsächlich erwerben möchte. Ein Kunstkauf, der hauptsächlich dazu dient, dem Künstler Geld zu schicken oder diesem Spieler finanziell zu helfen, ist nicht erlaubt. Dasselbe Prinzip gilt für jede andere Spielmechanik: Der tatsächliche Grund der Transaktion muss zum Zweck der verwendeten Funktion passen.',
      'Wer andere Spieler um finanzielle Hilfe bitten möchte, muss dafür die vorgesehene TycoonX-Funktion „Begging“ bzw. den entsprechenden Hilfe-/Bittbildschirm verwenden, sofern diese Funktion verfügbar ist. Andere Spielmechaniken sind keine Spenden- oder Hilfekanäle.',
      'CK-Labs kann den Gesamtzusammenhang berücksichtigen, insbesondere Gegenleistung, Transaktionsverlauf, Beziehungen zwischen Konten, wiederholte Übertragungen, Preismuster und einschlägige Kommunikation. Ein hoher Preis, ein großzügiges Geschäft oder eine ungewöhnliche Transaktion ist nicht automatisch ein Verstoß. Maßnahmen setzen angemessene Anhaltspunkte dafür voraus, dass die Mechanik hauptsächlich zur Vermögensübertragung ohne echten zulässigen Spielzweck eingesetzt wurde. CK-Labs kann unzulässige Übertragungen rückgängig machen und beteiligte Konten verhältnismäßig einschränken; davon unabhängige rechtmäßig erworbene bezahlte Werte und zwingende Rechte bleiben geschützt.',
    ],
  },
  es: {
    label: 'Actualización de las Condiciones · 5 de septiembre de 2026',
    title: 'Transacciones reales y transferencias de riqueza prohibidas',
    paragraphs: [
      'Se espera que cada jugador construya su patrimonio dentro del juego mediante su propia actividad y operaciones económicas reales. Las transferencias entre jugadores de dinero, activos u otro valor económico del juego solo están permitidas cuando forman parte de una transacción auténtica y la función utilizada se emplea para la finalidad para la que fue diseñada.',
      'No puedes utilizar un intercambio, venta, subasta, compra de arte, operación de empresa, contrato, trabajo, orden de mercado ni ninguna otra mecánica únicamente o principalmente para regalar, donar, ayudar económicamente, enriquecer, canalizar, aparcar, ocultar o trasladar patrimonio a otra cuenta. Se prohíben las operaciones simuladas, circulares o coordinadas cuyo objetivo principal sea mover valor en vez de utilizar realmente la función, también entre cuentas controladas o coordinadas por la misma persona.',
      'Por ejemplo, una compra de arte debe ser una compra auténtica porque el comprador quiere realmente la obra. No está permitido comprar una obra principalmente para enviar dinero al artista o ayudar económicamente a ese jugador. El mismo principio se aplica a cualquier otra mecánica: el motivo real de la operación debe corresponderse con la finalidad de la función utilizada.',
      'Si quieres pedir ayuda económica a otros jugadores, utiliza la pantalla o función específica de TycoonX «Begging» (pedir ayuda), cuando esté disponible. Las demás mecánicas del juego no son canales de donaciones ni de ayuda.',
      'CK-Labs puede valorar el contexto completo, incluida la contraprestación, el historial de operaciones, la relación entre cuentas, las transferencias repetidas, los patrones de precios y las comunicaciones pertinentes. Un precio alto, una operación generosa o una transacción poco habitual no constituyen por sí solos una infracción. Para adoptar medidas debe existir una base razonable para concluir que la mecánica se utilizó principalmente para transferir patrimonio sin una finalidad de juego auténtica y permitida. CK-Labs puede revertir transferencias prohibidas y restringir proporcionalmente las cuentas implicadas, preservando el valor legítimamente adquirido mediante pago que no guarde relación con la infracción y los derechos imperativos.',
    ],
  },
  es_MX: {
    label: 'Actualización de los Términos · 5 de septiembre de 2026',
    title: 'Transacciones genuinas y transferencias de riqueza no permitidas',
    paragraphs: [
      'Cada jugador debe construir su patrimonio dentro del juego mediante su propio juego y actividades económicas genuinas. Las transferencias entre jugadores de dinero, activos u otro valor económico del juego solo se permiten cuando forman parte de una transacción real y la función utilizada se usa para el propósito para el que fue creada.',
      'No puedes usar un intercambio, venta, subasta, compra de arte, operación de empresa, contrato, trabajo, orden de mercado ni otra mecánica únicamente o principalmente para regalar, donar, ayudar económicamente, enriquecer, canalizar, estacionar, ocultar o mover patrimonio hacia otra cuenta. Se prohíben las operaciones simuladas, circulares o coordinadas cuyo propósito principal sea mover valor en lugar de usar realmente la función, incluso entre cuentas controladas o coordinadas por la misma persona.',
      'Por ejemplo, una compra de arte debe hacerse porque el comprador realmente quiere adquirir la obra. No se permite comprar arte principalmente para mandarle dinero al artista o ayudar económicamente a ese jugador. La misma regla aplica a cualquier otra mecánica: el motivo real de la transacción debe coincidir con el propósito de la función utilizada.',
      'Si quieres pedir apoyo económico a otros jugadores, utiliza la pantalla o función específica de TycoonX «Begging» (pedir ayuda), cuando esté disponible. Las demás mecánicas del juego no deben usarse como canales de donación o ayuda.',
      'CK-Labs puede evaluar todo el contexto, como la contraprestación recibida, el historial de transacciones, la relación entre cuentas, las transferencias repetidas, los patrones de precios y las comunicaciones relevantes. Un precio alto, un trato generoso o una transacción inusual no son automáticamente una infracción. Para aplicar una sanción debe haber evidencia razonable de que la mecánica se usó principalmente para transferir patrimonio sin un propósito de juego genuino y permitido. CK-Labs puede revertir transferencias prohibidas y restringir de forma proporcional las cuentas involucradas, sin afectar valor legítimamente comprado que no esté relacionado ni derechos obligatorios.',
    ],
  },
  fr: {
    label: 'Mise à jour des Conditions · 5 septembre 2026',
    title: 'Transactions réelles et transferts de richesse interdits',
    paragraphs: [
      'Chaque joueur est censé construire sa richesse en jeu par son propre jeu et par de véritables activités économiques. Les transferts entre joueurs d’argent en jeu, d’actifs ou d’une autre valeur économique ne sont autorisés que s’ils font partie d’une véritable transaction de jeu et si la fonctionnalité concernée est utilisée conformément à sa finalité.',
      'Il est interdit d’utiliser un échange, une vente, une enchère, un achat d’œuvre d’art, une opération d’entreprise, un contrat, un emploi, un ordre de marché ou toute autre mécanique uniquement ou principalement pour faire un cadeau, un don, apporter une aide financière, enrichir un autre compte, y acheminer, y stationner, y dissimuler ou y déplacer de la richesse. Les opérations fictives, circulaires ou coordonnées dont le but principal est de transférer de la valeur plutôt que d’utiliser réellement la fonctionnalité sont interdites, y compris entre des comptes contrôlés ou coordonnés par la même personne.',
      'Par exemple, l’achat d’une œuvre d’art doit être un véritable achat motivé par la volonté de l’acquérir. Acheter une œuvre principalement pour envoyer de l’argent à l’artiste ou aider financièrement ce joueur n’est pas autorisé. Le même principe vaut pour toutes les autres mécaniques : la raison réelle de la transaction doit correspondre à la finalité de la fonctionnalité utilisée.',
      'Si vous souhaitez demander une aide financière à d’autres joueurs, utilisez l’écran ou la fonctionnalité TycoonX « Begging » prévue à cet effet, lorsqu’elle est disponible. Les autres mécaniques de jeu ne sont pas des canaux de don ou d’assistance.',
      'CK-Labs peut apprécier l’ensemble du contexte, notamment la contrepartie, l’historique des transactions, les liens entre comptes, les transferts répétés, les schémas de prix et les communications pertinentes. Un prix élevé, une opération généreuse ou une transaction inhabituelle ne constitue pas automatiquement une infraction. Une mesure suppose des éléments raisonnables montrant que la mécanique a été utilisée principalement pour transférer de la richesse sans véritable finalité de jeu autorisée. CK-Labs peut annuler les transferts interdits et restreindre proportionnellement les comptes concernés, tout en préservant les valeurs payantes légitimes sans lien avec l’infraction et les droits impératifs.',
    ],
  },
  fr_CA: {
    label: 'Mise à jour des Conditions · 5 septembre 2026',
    title: 'Transactions véritables et transferts de richesse interdits',
    paragraphs: [
      'Chaque joueur doit bâtir sa richesse dans le jeu grâce à son propre jeu et à de véritables activités économiques. Les transferts entre joueurs d’argent, d’actifs ou d’une autre valeur économique en jeu sont permis seulement lorsqu’ils font partie d’une transaction réelle et que la fonctionnalité est utilisée pour l’objectif auquel elle est destinée.',
      'Vous ne pouvez pas utiliser un échange, une vente, une enchère, un achat d’art, une opération d’entreprise, un contrat, un emploi, un ordre de marché ou toute autre mécanique uniquement ou principalement pour offrir, donner, aider financièrement ou enrichir un autre compte, ni pour y acheminer, y stationner, y cacher ou y déplacer de la richesse. Les transactions fictives, circulaires ou coordonnées dont le but principal est de déplacer de la valeur plutôt que d’utiliser véritablement la fonctionnalité sont interdites, y compris entre des comptes contrôlés ou coordonnés par la même personne.',
      'Par exemple, un achat d’art doit être une véritable acquisition parce que l’acheteur souhaite réellement obtenir l’œuvre. Acheter une œuvre principalement pour envoyer de l’argent à l’artiste ou aider financièrement ce joueur n’est pas permis. Le même principe s’applique à toute autre mécanique : la raison réelle de la transaction doit correspondre à l’objectif de la fonctionnalité utilisée.',
      'Si vous voulez demander une aide financière à d’autres joueurs, utilisez l’écran ou la fonctionnalité TycoonX « Begging » prévue à cette fin, lorsqu’elle est offerte. Les autres mécaniques du jeu ne doivent pas servir de canal de don ou d’aide.',
      'CK-Labs peut examiner l’ensemble du contexte, notamment la contrepartie, l’historique des transactions, les liens entre les comptes, les transferts répétés, les tendances de prix et les communications pertinentes. Un prix élevé, une transaction généreuse ou une opération inhabituelle n’est pas automatiquement une infraction. Une mesure exige des éléments raisonnables indiquant que la mécanique a surtout servi à transférer de la richesse sans véritable objectif de jeu permis. CK-Labs peut annuler les transferts interdits et restreindre proportionnellement les comptes concernés, tout en protégeant les valeurs payantes légitimes sans lien avec l’infraction et les droits impératifs.',
    ],
  },
  it: {
    label: 'Aggiornamento dei Termini · 5 settembre 2026',
    title: 'Transazioni genuine e trasferimenti di ricchezza vietati',
    paragraphs: [
      'I giocatori devono costruire il proprio patrimonio nel gioco attraverso la propria attività di gioco e operazioni economiche genuine. I trasferimenti tra giocatori di denaro, beni o altro valore economico di gioco sono consentiti solo se fanno parte di una transazione di gioco reale e la funzione utilizzata viene impiegata per lo scopo per cui è stata prevista.',
      'Non puoi usare uno scambio, una vendita, un’asta, un acquisto d’arte, un’operazione societaria, un contratto, un lavoro, un ordine di mercato o qualsiasi altra meccanica unicamente o principalmente per fare regali o donazioni, fornire aiuto economico, arricchire un altro account oppure convogliare, parcheggiare, nascondere o spostare ricchezza verso un altro account. Sono vietate le operazioni fittizie, circolari o coordinate il cui scopo principale sia trasferire valore anziché usare realmente la funzione, anche tra account controllati o coordinati dalla stessa persona.',
      'Per esempio, l’acquisto di un’opera d’arte deve essere un acquisto autentico perché l’acquirente desidera realmente l’opera. Non è consentito comprare arte principalmente per inviare denaro all’artista o aiutare economicamente quel giocatore. Lo stesso principio vale per ogni altra meccanica: il vero motivo della transazione deve corrispondere allo scopo della funzione utilizzata.',
      'Se vuoi chiedere aiuto economico ad altri giocatori, usa l’apposita schermata o funzione «Begging» di TycoonX, ove disponibile. Le altre meccaniche di gioco non sono canali per donazioni o assistenza.',
      'CK-Labs può valutare il contesto complessivo, inclusi il valore ricevuto in cambio, la cronologia delle transazioni, i rapporti tra account, i trasferimenti ripetuti, gli schemi di prezzo e le comunicazioni pertinenti. Un prezzo elevato, un accordo generoso o una transazione insolita non costituiscono automaticamente una violazione. Per intervenire devono esistere elementi ragionevoli che mostrino che la meccanica è stata usata principalmente per trasferire ricchezza senza un autentico scopo di gioco consentito. CK-Labs può annullare i trasferimenti vietati e limitare in modo proporzionato gli account coinvolti, preservando il valore legittimamente acquistato non collegato alla violazione e i diritti inderogabili.',
    ],
  },
  pt: {
    label: 'Atualização dos Termos · 5 de setembro de 2026',
    title: 'Transações genuínas e transferências de riqueza proibidas',
    paragraphs: [
      'Espera-se que cada jogador construa o seu património no jogo através da sua própria atividade e de operações económicas genuínas. As transferências entre jogadores de dinheiro, ativos ou outro valor económico do jogo só são permitidas quando fazem parte de uma verdadeira transação de jogo e a funcionalidade é utilizada para a finalidade a que se destina.',
      'Não pode utilizar uma troca, venda, leilão, compra de arte, operação de empresa, contrato, trabalho, ordem de mercado ou qualquer outra mecânica apenas ou principalmente para oferecer, doar, prestar ajuda financeira, enriquecer outra conta, ou canalizar, estacionar, ocultar ou deslocar património para outra conta. São proibidas operações fictícias, circulares ou coordenadas cujo objetivo principal seja movimentar valor em vez de utilizar genuinamente a funcionalidade, incluindo entre contas controladas ou coordenadas pela mesma pessoa.',
      'Por exemplo, a compra de uma obra de arte deve ser uma compra genuína porque o comprador pretende realmente adquirir a obra. Não é permitido comprar arte principalmente para enviar dinheiro ao artista ou ajudar financeiramente esse jogador. O mesmo princípio aplica-se a qualquer outra mecânica: o motivo real da transação tem de corresponder à finalidade da funcionalidade utilizada.',
      'Se pretender pedir ajuda financeira a outros jogadores, utilize o ecrã ou a funcionalidade específica «Begging» do TycoonX, quando disponível. As restantes mecânicas do jogo não são canais de donativos ou ajuda.',
      'A CK-Labs pode avaliar todo o contexto, incluindo a contraprestação, o histórico de transações, as relações entre contas, as transferências repetidas, os padrões de preços e as comunicações relevantes. Um preço elevado, um negócio generoso ou uma transação invulgar não constituem automaticamente uma infração. Qualquer medida exige indícios razoáveis de que a mecânica foi usada principalmente para transferir património sem uma finalidade de jogo genuína e permitida. A CK-Labs pode reverter transferências proibidas e restringir proporcionalmente as contas envolvidas, preservando o valor pago legítimo não relacionado e os direitos imperativos.',
    ],
  },
  pt_BR: {
    label: 'Atualização dos Termos · 5 de setembro de 2026',
    title: 'Transações legítimas e transferências de riqueza proibidas',
    paragraphs: [
      'Cada jogador deve construir seu patrimônio dentro do jogo por meio da própria atividade e de operações econômicas legítimas. Transferências entre jogadores de dinheiro, ativos ou outro valor econômico do jogo só são permitidas quando fazem parte de uma transação real e a funcionalidade é usada para a finalidade para a qual foi criada.',
      'Você não pode usar uma troca, venda, leilão, compra de arte, operação de empresa, contrato, trabalho, ordem de mercado ou qualquer outra mecânica apenas ou principalmente para presentear, doar, ajudar financeiramente, enriquecer outra conta, ou canalizar, estacionar, ocultar ou movimentar patrimônio para outra conta. São proibidas operações fictícias, circulares ou coordenadas cujo objetivo principal seja movimentar valor em vez de usar a funcionalidade de verdade, inclusive entre contas controladas ou coordenadas pela mesma pessoa.',
      'Por exemplo, uma compra de arte deve ser uma compra de verdade porque o comprador realmente quer adquirir a obra. Não é permitido comprar arte principalmente para mandar dinheiro ao artista ou ajudar financeiramente esse jogador. A mesma regra vale para qualquer outra mecânica: o motivo real da transação deve corresponder à finalidade da funcionalidade utilizada.',
      'Se quiser pedir ajuda financeira a outros jogadores, use a tela ou funcionalidade específica «Begging» do TycoonX, quando disponível. As outras mecânicas do jogo não devem ser usadas como canais de doação ou ajuda.',
      'A CK-Labs pode analisar o contexto completo, incluindo a contraprestação, o histórico de transações, a relação entre contas, transferências repetidas, padrões de preço e comunicações relevantes. Um preço alto, um negócio generoso ou uma transação incomum não são automaticamente uma infração. Para aplicar medidas, deve haver evidência razoável de que a mecânica foi usada principalmente para transferir patrimônio sem uma finalidade de jogo legítima e permitida. A CK-Labs pode reverter transferências proibidas e restringir proporcionalmente as contas envolvidas, preservando valores legítimos pagos e não relacionados, além dos direitos obrigatórios.',
    ],
  },
  ru: {
    label: 'Обновление Условий · 5 сентября 2026 г.',
    title: 'Реальные сделки и запрещённые переводы игрового капитала',
    paragraphs: [
      'Игроки должны создавать своё игровое состояние самостоятельно — через игру и реальные внутриигровые экономические операции. Передача между игроками игровых денег, активов или иной экономической ценности допускается только как часть настоящей игровой сделки и при использовании соответствующей функции по её прямому назначению.',
      'Нельзя использовать обмен, продажу, аукцион, покупку произведения искусства, корпоративную операцию, контракт, работу, рыночную заявку или любую другую игровую механику только или преимущественно для подарка, пожертвования, финансовой помощи, обогащения другого аккаунта либо для перенаправления, временного размещения, сокрытия или перемещения капитала на другой аккаунт. Фиктивные, круговые или согласованные операции, основная цель которых — переместить ценность, а не реально воспользоваться функцией, запрещены, в том числе между аккаунтами, контролируемыми или координируемыми одним лицом.',
      'Например, произведение искусства должно покупаться потому, что покупатель действительно хочет приобрести это произведение. Покупка искусства преимущественно для передачи денег художнику или финансовой помощи этому игроку не допускается. То же правило действует для любой другой механики: реальная причина сделки должна соответствовать назначению используемой функции.',
      'Если вы хотите попросить других игроков о финансовой помощи, используйте специальный экран или функцию TycoonX «Begging» (просьба о помощи), если она доступна. Другие игровые механики нельзя использовать как каналы для пожертвований или помощи.',
      'CK-Labs может оценивать весь контекст, включая встречную ценность, историю операций, связи между аккаунтами, повторяющиеся переводы, ценовые схемы и относящиеся к делу сообщения. Высокая цена, щедрая сделка или необычная операция сами по себе не являются нарушением. Для применения мер должны иметься разумные основания полагать, что механика использовалась преимущественно для передачи капитала без настоящей разрешённой игровой цели. CK-Labs может отменять запрещённые переводы и соразмерно ограничивать участвующие аккаунты, сохраняя не связанную с нарушением законно приобретённую платную ценность и обязательные права.',
    ],
  },
  ja: {
    label: '利用規約更新 · 2026年9月5日',
    title: '真正な取引と禁止される資産移転',
    paragraphs: [
      'プレイヤーは、自分自身のプレイと正当なゲーム内経済活動によってゲーム内資産を築くことが求められます。プレイヤー間でゲーム内通貨、資産その他の経済的価値を移転できるのは、真正なゲーム内取引の一部であり、利用する機能を本来の目的に沿って使用している場合に限られます。',
      '取引、販売、オークション、アート購入、会社取引、契約、仕事、市場注文その他のゲーム機能を、単に又は主として、別アカウントへの贈与、寄付、金銭的援助、資産の集中、迂回、仮置き、隠匿又は移動のために利用してはなりません。機能を本来どおり利用するのではなく、価値の移転を主目的とする架空取引、循環取引又は協調取引は、同一人物が管理・連携するアカウント間であっても禁止されます。',
      '例えば、アート作品の購入は、購入者がその作品自体を本当に欲しいから行う真正な購入でなければなりません。主として作者へゲーム内通貨を送ることや、そのプレイヤーを金銭的に支援することを目的にアートを購入することは認められません。他のすべての機能でも同様に、取引の実際の理由が、その機能の本来の目的と一致していなければなりません。',
      '他のプレイヤーに金銭的な援助を求める場合は、利用可能なときはTycoonXの専用「Begging」（援助依頼）画面または機能を使用してください。他のゲーム機能を寄付や援助の経路として使用することはできません。',
      'CK-Labsは、対価、取引履歴、アカウント間の関係、反復する移転、価格のパターン、関連するやり取りなど、周囲の事情を総合的に確認できます。高額な価格、寛大な条件、通常と異なる取引だけで自動的に違反となるわけではありません。措置には、真正かつ許可されたゲーム上の目的がないまま、主として資産移転のために機能が使われたことを示す合理的な根拠が必要です。CK-Labsは、禁止された移転を取り消し、関係アカウントを比例的に制限できますが、無関係な正当に購入された有料価値および強行法上の権利は保護します。',
    ],
  },
  ko: {
    label: '이용약관 업데이트 · 2026년 9월 5일',
    title: '실질적인 거래와 금지되는 자산 이전',
    paragraphs: [
      '플레이어는 자신의 플레이와 실제 게임 내 경제 활동을 통해 스스로 자산을 형성해야 합니다. 플레이어 간 게임 머니, 자산 또는 그 밖의 경제적 가치 이전은 실제 게임 거래의 일부이고 해당 기능을 본래 목적대로 사용하는 경우에만 허용됩니다.',
      '거래, 판매, 경매, 예술품 구매, 회사 거래, 계약, 작업, 시장 주문 또는 기타 게임 메커니즘을 단지 또는 주로 다른 계정에 선물·기부·금전적 도움을 제공하거나, 다른 계정을 부유하게 하거나, 자산을 우회·임시 보관·은닉·이동하기 위한 수단으로 사용해서는 안 됩니다. 기능을 실제로 이용하는 대신 가치 이전을 주된 목적으로 하는 가장·순환·공모 거래는 동일인이 통제하거나 조정하는 계정 사이에서도 금지됩니다.',
      '예를 들어 예술품 구매는 구매자가 실제로 그 작품을 원해서 이루어지는 진정한 구매여야 합니다. 주로 작가에게 돈을 보내거나 해당 플레이어를 금전적으로 돕기 위해 예술품을 구매하는 것은 허용되지 않습니다. 다른 모든 게임 메커니즘에도 같은 원칙이 적용되며, 거래의 실제 이유가 사용한 기능의 목적과 일치해야 합니다.',
      '다른 플레이어에게 금전적 도움을 요청하려면 이용 가능한 경우 TycoonX의 지정된 「Begging」(도움 요청) 화면 또는 기능을 사용하세요. 다른 게임 메커니즘을 기부나 지원 통로로 사용해서는 안 됩니다.',
      'CK-Labs는 대가의 내용, 거래 이력, 계정 간 관계, 반복 이전, 가격 패턴, 관련 대화 등 전체 정황을 검토할 수 있습니다. 높은 가격, 후한 거래 또는 이례적인 거래만으로 자동 위반이 되는 것은 아닙니다. 제재하려면 진정하고 허용된 게임 목적 없이 주로 자산을 이전하기 위해 해당 메커니즘을 사용했다는 합리적인 근거가 있어야 합니다. CK-Labs는 금지된 이전을 되돌리고 관련 계정을 비례적으로 제한할 수 있으며, 관련 없는 정당한 유료 가치와 강행법상 권리는 보전합니다.',
    ],
  },
  zh: {
    label: '条款更新 · 2026年9月5日',
    title: '真实交易与禁止的财富转移',
    paragraphs: [
      '玩家应通过自己的游戏活动和真实的游戏内经济行为积累财富。玩家之间转移游戏内货币、资产或其他经济价值，只有在其属于真实游戏交易的一部分，并且相关功能确实按照其设计用途使用时才被允许。',
      '不得把交易、出售、拍卖、艺术品购买、公司交易、合同、工作、市场订单或任何其他游戏机制，仅仅或主要用来向另一账户赠送、捐赠、提供经济帮助、使其获利，或向其输送、暂存、隐藏或转移财富。以转移价值而非真实使用该功能为主要目的的虚假、循环或协同交易均被禁止，包括由同一人控制或协调的账户之间的此类交易。',
      '例如，购买艺术品必须是因为买家真实希望获得该作品。主要为了给艺术家转钱或在经济上帮助该玩家而购买艺术品是不允许的。同一原则适用于所有其他游戏机制：交易的真实原因必须与所使用功能的实际用途一致。',
      '如果你想向其他玩家寻求经济帮助，请在可用时使用TycoonX指定的“Begging”（求助）页面或功能。其他游戏机制不能作为捐赠或援助渠道。',
      'CK-Labs可以结合整体背景进行判断，包括实际对价、交易历史、账户之间的关系、重复转移、价格模式以及相关沟通。价格较高、条件慷慨或交易不同寻常本身并不自动构成违规。采取措施需要有合理依据表明，该机制主要被用于在缺乏真实且允许的游戏目的时转移财富。CK-Labs可以撤销被禁止的转移，并对相关账户采取相称限制，同时保留与违规无关的合法付费价值以及不可放弃的法定权利。',
    ],
  },
  zh_Hans: {
    label: '服务条款更新 · 2026年9月5日',
    title: '真实交易与违规转移游戏财富',
    paragraphs: [
      '玩家应当通过自己的游戏行为和真实的游戏内经济活动积累游戏财富。玩家之间转移游戏币、资产或其他经济价值，只能发生在真实交易中，并且所使用的功能必须确实用于其设计目的。',
      '不得利用交易、出售、拍卖、艺术品购买、公司交易、合同、工作、市场订单或其他游戏机制，单纯或主要为另一账户赠送、捐赠、提供经济援助、增加其财富，或者向其输送、暂存、隐藏或转移财富。主要目的不是正常使用功能而是转移价值的虚假交易、循环交易或协同交易均被禁止，包括同一人控制或协调的多个账户之间的此类操作。',
      '例如，购买艺术品必须是因为买家确实想购买该作品。主要为了给艺术家转钱或帮助该玩家而购买艺术品是不允许的。其他游戏机制也遵循同样原则：交易的真实目的必须与所使用功能的设计用途相符。',
      '如果需要向其他玩家寻求经济帮助，请在该功能可用时使用TycoonX专门的“Begging”（求助）页面或功能。不得把其他游戏机制当作捐赠或援助渠道。',
      'CK-Labs可以综合考虑实际对价、交易记录、账户关系、重复转移、价格规律以及相关沟通等背景。高价、优惠或不常见的交易本身不会自动构成违规。只有在有合理证据表明该机制主要被用于在没有真实且允许的游戏目的时转移财富，才会采取相应措施。CK-Labs可以撤销违规转移，并按比例限制相关账户，同时保留与违规无关的合法付费价值及强制性法定权利。',
    ],
  },
  zh_Hant: {
    label: '服務條款更新 · 2026年9月5日',
    title: '真實交易與禁止的不當財富轉移',
    paragraphs: [
      '玩家應透過自己的遊戲活動及真實的遊戲內經濟行為累積財富。玩家之間轉移遊戲內貨幣、資產或其他經濟價值，僅在其屬於真實遊戲交易的一部分，且相關功能確實依其原本用途使用時才被允許。',
      '不得利用交易、出售、拍賣、藝術品購買、公司交易、合約、工作、市場訂單或其他遊戲機制，單純或主要為了向另一帳號贈與、捐贈、提供經濟協助、使其致富，或向其輸送、暫存、隱藏或移轉財富。主要目的在於轉移價值而非真正使用該功能的虛假、循環或協同行為均禁止，包括由同一人控制或協調的帳號之間的此類交易。',
      '例如，購買藝術品必須是因為買家確實希望取得該作品。主要為了把遊戲內金錢交給藝術家或在經濟上幫助該玩家而購買藝術品並不允許。所有其他遊戲機制亦適用同一原則：交易的真正原因必須與所使用功能的用途一致。',
      '若要向其他玩家尋求經濟協助，請在可用時使用TycoonX指定的「Begging」（求助）頁面或功能。其他遊戲機制不得作為捐贈或援助管道。',
      'CK-Labs可綜合評估實際對價、交易紀錄、帳號間關係、重複轉移、價格模式及相關溝通等背景。高價、慷慨條件或不尋常交易本身不會自動構成違規。採取措施須有合理依據顯示該機制主要被用於在沒有真實且允許的遊戲目的時轉移財富。CK-Labs可撤銷禁止的轉移並按比例限制相關帳號，同時保留與違規無關的合法付費價值及不得放棄的法定權利。',
    ],
  },
  ar: {
    label: 'تحديث الشروط · 5 سبتمبر 2026',
    title: 'المعاملات الحقيقية وتحويلات الثروة المحظورة',
    paragraphs: [
      'يُتوقع من اللاعبين بناء ثروتهم داخل اللعبة من خلال اللعب بأنفسهم والأنشطة الاقتصادية الحقيقية داخل اللعبة. ولا يُسمح بتحويل الأموال أو الأصول أو أي قيمة اقتصادية أخرى بين اللاعبين إلا إذا كان ذلك جزءًا من معاملة لعب حقيقية واستُخدمت الميزة المعنية للغرض الذي صُممت من أجله.',
      'لا يجوز استخدام صفقة أو بيع أو مزاد أو شراء عمل فني أو معاملة شركة أو عقد أو وظيفة أو أمر سوق أو أي آلية أخرى في اللعبة لمجرد أو بشكل أساسي تقديم هدية أو تبرع أو مساعدة مالية أو إثراء حساب آخر، أو تمرير الثروة إليه أو إيقافها مؤقتًا أو إخفائها أو نقلها إليه. وتُحظر المعاملات الصورية أو الدائرية أو المنسقة التي يكون غرضها الرئيسي نقل القيمة بدلًا من الاستخدام الحقيقي للميزة، بما في ذلك بين الحسابات التي يتحكم فيها الشخص نفسه أو ينسق بينها.',
      'فعلى سبيل المثال، يجب أن يكون شراء العمل الفني شراءً حقيقيًا لأن المشتري يريد العمل نفسه فعلًا. ولا يُسمح بشراء الفن أساسًا لإرسال المال إلى الفنان أو لمساعدة ذلك اللاعب ماليًا. وينطبق المبدأ نفسه على جميع آليات اللعبة الأخرى: يجب أن يتوافق السبب الحقيقي للمعاملة مع الغرض من الميزة المستخدمة.',
      'إذا كنت تريد طلب مساعدة مالية من لاعبين آخرين، فاستخدم شاشة أو ميزة «Begging» المخصصة في TycoonX عند توفرها. ولا يجوز استخدام آليات اللعب الأخرى كقنوات للتبرع أو المساعدة.',
      'يجوز لـ CK-Labs تقييم السياق الكامل، بما في ذلك المقابل المتبادل، وسجل المعاملات، والعلاقات بين الحسابات، والتحويلات المتكررة، وأنماط الأسعار، والمراسلات ذات الصلة. ولا يُعد السعر المرتفع أو الصفقة السخية أو المعاملة غير المعتادة مخالفة تلقائيًا. ولا تُتخذ إجراءات إلا عند وجود أدلة معقولة على أن الآلية استُخدمت أساسًا لنقل الثروة دون غرض لعب حقيقي ومسموح. ويجوز لـ CK-Labs عكس التحويلات المحظورة وفرض قيود متناسبة على الحسابات المعنية، مع الحفاظ على القيمة المدفوعة المشروعة غير المرتبطة بالمخالفة والحقوق الإلزامية.',
    ],
  },
  nl: {
    label: 'Update van de Voorwaarden · 5 september 2026',
    title: 'Echte transacties en verboden vermogensoverdrachten',
    paragraphs: [
      'Van spelers wordt verwacht dat zij hun vermogen in het spel opbouwen door zelf te spelen en door echte economische activiteiten. Overdrachten tussen spelers van spelgeld, activa of andere economische waarde zijn alleen toegestaan wanneer zij deel uitmaken van een echte speltransactie en de gebruikte functie wordt ingezet voor het doel waarvoor die is bedoeld.',
      'Je mag een ruil, verkoop, veiling, kunstaankoop, bedrijfstransactie, contract, taak, marktorder of andere spelmechaniek niet uitsluitend of hoofdzakelijk gebruiken om een ander account iets cadeau te doen, te doneren, financieel te helpen, te verrijken of om vermogen daarheen door te sluizen, tijdelijk te parkeren, te verbergen of te verplaatsen. Schijn-, circulaire of gecoördineerde transacties die vooral bedoeld zijn om waarde te verplaatsen in plaats van de functie echt te gebruiken, zijn verboden, ook tussen accounts die door dezelfde persoon worden beheerd of gecoördineerd.',
      'Een kunstaankoop moet bijvoorbeeld een echte aankoop zijn omdat de koper het kunstwerk daadwerkelijk wil hebben. Kunst kopen met als hoofddoel geld naar de kunstenaar te sturen of die speler financieel te helpen, is niet toegestaan. Hetzelfde principe geldt voor alle andere spelmechanieken: de werkelijke reden voor de transactie moet passen bij het doel van de gebruikte functie.',
      'Wil je andere spelers om financiële hulp vragen, gebruik dan waar beschikbaar het daarvoor bestemde TycoonX-scherm of de functie ‘Begging’. Andere spelmechanieken zijn geen donatie- of hulpkanalen.',
      'CK-Labs kan de volledige context beoordelen, waaronder de tegenprestatie, transactiegeschiedenis, relaties tussen accounts, herhaalde overdrachten, prijspatronen en relevante communicatie. Een hoge prijs, een royale deal of een ongebruikelijke transactie is niet automatisch een overtreding. Voor handhaving moet er een redelijke grond zijn om aan te nemen dat de mechaniek hoofdzakelijk is gebruikt om vermogen over te dragen zonder een echt en toegestaan speldoel. CK-Labs kan verboden overdrachten terugdraaien en betrokken accounts evenredig beperken, met behoud van niet-gerelateerde rechtmatig gekochte betaalde waarde en dwingende rechten.',
    ],
  },
  sv: {
    label: 'Uppdatering av villkoren · 5 september 2026',
    title: 'Genuina transaktioner och förbjudna förmögenhetsöverföringar',
    paragraphs: [
      'Spelare förväntas bygga upp sin förmögenhet i spelet genom eget spelande och genuin ekonomisk aktivitet. Överföringar mellan spelare av spelvaluta, tillgångar eller annat ekonomiskt värde är endast tillåtna när de ingår i en verklig speltransaktion och den aktuella funktionen används för sitt avsedda ändamål.',
      'Du får inte använda byte, försäljning, auktion, konstköp, företagstransaktion, avtal, jobb, marknadsorder eller någon annan spelmekanik enbart eller huvudsakligen för att ge bort, donera, hjälpa ekonomiskt, berika ett annat konto eller för att kanalisera, parkera, dölja eller flytta förmögenhet till ett annat konto. Sken-, cirkulära eller samordnade transaktioner vars huvudsakliga syfte är att flytta värde i stället för att faktiskt använda funktionen är förbjudna, även mellan konton som kontrolleras eller samordnas av samma person.',
      'Ett konstköp måste till exempel vara ett genuint köp eftersom köparen faktiskt vill ha konstverket. Det är inte tillåtet att köpa konst huvudsakligen för att skicka pengar till konstnären eller hjälpa den spelaren ekonomiskt. Samma princip gäller alla andra spelmekaniker: den verkliga anledningen till transaktionen måste stämma överens med funktionen som används.',
      'Om du vill be andra spelare om ekonomisk hjälp ska du använda TycoonX särskilda skärm eller funktion ”Begging” där den finns tillgänglig. Andra spelmekaniker får inte användas som donations- eller hjälpkanaler.',
      'CK-Labs kan bedöma helheten, bland annat motprestation, transaktionshistorik, relationer mellan konton, upprepade överföringar, prismönster och relevant kommunikation. Ett högt pris, en generös affär eller en ovanlig transaktion är inte automatiskt ett regelbrott. Åtgärder kräver rimliga belägg för att mekaniken huvudsakligen användes för att föra över förmögenhet utan ett genuint och tillåtet spelsyfte. CK-Labs kan återföra förbjudna överföringar och proportionerligt begränsa berörda konton, samtidigt som orelaterat legitimt köpt betalvärde och tvingande rättigheter bevaras.',
    ],
  },
  nb: {
    label: 'Oppdatering av vilkårene · 5. september 2026',
    title: 'Reelle transaksjoner og forbudte formueoverføringer',
    paragraphs: [
      'Spillere forventes å bygge opp formuen sin i spillet gjennom egen spilling og reell økonomisk aktivitet. Overføringer mellom spillere av spillvaluta, eiendeler eller annen økonomisk verdi er bare tillatt når de inngår i en reell spilltransaksjon og funksjonen brukes til formålet den er laget for.',
      'Du kan ikke bruke bytte, salg, auksjon, kunstkjøp, selskapstransaksjon, kontrakt, jobb, markedsordre eller annen spillmekanikk bare eller hovedsakelig for å gi bort, donere, hjelpe økonomisk, berike en annen konto eller for å kanalisere, parkere, skjule eller flytte formue til en annen konto. Fiktive, sirkulære eller koordinerte transaksjoner der hovedformålet er å flytte verdi i stedet for å bruke funksjonen reelt, er forbudt, også mellom kontoer som kontrolleres eller koordineres av samme person.',
      'Et kunstkjøp må for eksempel være et reelt kjøp fordi kjøperen faktisk ønsker kunstverket. Det er ikke tillatt å kjøpe kunst hovedsakelig for å sende penger til kunstneren eller hjelpe den spilleren økonomisk. Det samme prinsippet gjelder alle andre spillmekanikker: den faktiske grunnen til transaksjonen må samsvare med formålet til funksjonen som brukes.',
      'Hvis du vil be andre spillere om økonomisk hjelp, skal du bruke TycoonX sin egen «Begging»-skjerm eller -funksjon der den er tilgjengelig. Andre spillmekanikker skal ikke brukes som donasjons- eller hjelpekanaler.',
      'CK-Labs kan vurdere hele sammenhengen, blant annet motytelse, transaksjonshistorikk, forhold mellom kontoer, gjentatte overføringer, prismønstre og relevant kommunikasjon. En høy pris, en generøs avtale eller en uvanlig transaksjon er ikke automatisk et brudd. Tiltak krever rimelig grunnlag for at mekanikken hovedsakelig ble brukt til å overføre formue uten et reelt og tillatt spillformål. CK-Labs kan reversere forbudte overføringer og begrense involverte kontoer forholdsmessig, samtidig som urelatert legitimt kjøpt betalingsverdi og ufravikelige rettigheter bevares.',
    ],
  },
  pl: {
    label: 'Aktualizacja Warunków · 5 września 2026 r.',
    title: 'Rzeczywiste transakcje i zakazane transfery majątku',
    paragraphs: [
      'Gracze powinni budować swój majątek w grze poprzez własną rozgrywkę i rzeczywistą aktywność gospodarczą w grze. Przekazywanie między graczami pieniędzy, aktywów lub innej wartości ekonomicznej w grze jest dozwolone wyłącznie jako element rzeczywistej transakcji, gdy dana funkcja jest używana zgodnie z jej przeznaczeniem.',
      'Nie wolno wykorzystywać wymiany, sprzedaży, aukcji, zakupu dzieła sztuki, transakcji firmowej, kontraktu, pracy, zlecenia rynkowego ani innej mechaniki wyłącznie lub głównie po to, aby obdarować inny rachunek, przekazać mu darowiznę, udzielić pomocy finansowej, wzbogacić go albo skierować, zaparkować, ukryć lub przenieść na niego majątek. Pozorne, okrężne lub skoordynowane transakcje, których głównym celem jest przeniesienie wartości zamiast rzeczywistego użycia funkcji, są zabronione, także pomiędzy kontami kontrolowanymi lub koordynowanymi przez tę samą osobę.',
      'Na przykład zakup dzieła sztuki musi być rzeczywistym zakupem wynikającym z tego, że kupujący faktycznie chce nabyć dane dzieło. Kupowanie sztuki głównie po to, aby przekazać pieniądze artyście lub wesprzeć finansowo tego gracza, jest niedozwolone. Ta sama zasada dotyczy każdej innej mechaniki: rzeczywisty powód transakcji musi odpowiadać przeznaczeniu użytej funkcji.',
      'Jeżeli chcesz poprosić innych graczy o pomoc finansową, skorzystaj z przeznaczonego do tego ekranu lub funkcji TycoonX „Begging”, jeśli jest dostępna. Inne mechaniki gry nie mogą służyć jako kanały darowizn ani pomocy.',
      'CK-Labs może oceniać cały kontekst, w tym świadczenie wzajemne, historię transakcji, relacje między kontami, powtarzające się transfery, schematy cenowe oraz istotną komunikację. Wysoka cena, hojna transakcja lub nietypowa operacja nie oznaczają automatycznie naruszenia. Do zastosowania środków potrzebne są racjonalne podstawy wskazujące, że mechanika była używana głównie do transferu majątku bez rzeczywistego, dozwolonego celu w grze. CK-Labs może cofnąć zakazane transfery i proporcjonalnie ograniczyć zaangażowane konta, zachowując niezwiązaną z naruszeniem legalnie zakupioną wartość oraz bezwzględnie obowiązujące prawa.',
    ],
  },
  th: {
    label: 'อัปเดตข้อกำหนด · 5 กันยายน 2026',
    title: 'ธุรกรรมจริงและการโอนความมั่งคั่งที่ห้ามทำ',
    paragraphs: [
      'ผู้เล่นควรสร้างความมั่งคั่งภายในเกมด้วยการเล่นของตนเองและกิจกรรมทางเศรษฐกิจในเกมที่เกิดขึ้นจริง การโอนเงินในเกม ทรัพย์สิน หรือมูลค่าทางเศรษฐกิจอื่นระหว่างผู้เล่นจะทำได้เฉพาะเมื่อเป็นส่วนหนึ่งของธุรกรรมในเกมที่แท้จริง และใช้ฟีเจอร์นั้นตามวัตถุประสงค์ที่ออกแบบไว้เท่านั้น',
      'ห้ามใช้การแลกเปลี่ยน การขาย การประมูล การซื้อผลงานศิลปะ ธุรกรรมบริษัท สัญญา งาน คำสั่งตลาด หรือกลไกเกมอื่น เพียงหรือเป็นหลักเพื่อให้ของขวัญ บริจาค ช่วยเหลือด้านการเงิน ทำให้อีกบัญชีมั่งคั่งขึ้น หรือส่งต่อ พัก ซ่อน หรือย้ายทรัพย์สินไปยังอีกบัญชี ธุรกรรมอำพราง ธุรกรรมวนกลับ หรือธุรกรรมที่ประสานกันซึ่งมีวัตถุประสงค์หลักเพื่อย้ายมูลค่าแทนที่จะใช้ฟีเจอร์นั้นจริง ๆ เป็นสิ่งต้องห้าม รวมถึงระหว่างบัญชีที่บุคคลเดียวกันควบคุมหรือประสานงาน',
      'ตัวอย่างเช่น การซื้อผลงานศิลปะต้องเป็นการซื้อจริงเพราะผู้ซื้อต้องการผลงานนั้นจริง ๆ ไม่อนุญาตให้ซื้อผลงานศิลปะโดยมีจุดประสงค์หลักเพื่อส่งเงินให้ศิลปินหรือช่วยเหลือผู้เล่นคนนั้นด้านการเงิน หลักการเดียวกันใช้กับทุกกลไกของเกม เหตุผลที่แท้จริงของธุรกรรมต้องสอดคล้องกับวัตถุประสงค์ของฟีเจอร์ที่ใช้',
      'หากต้องการขอความช่วยเหลือทางการเงินจากผู้เล่นอื่น ให้ใช้หน้าจอหรือฟีเจอร์ «Begging» ของ TycoonX ที่จัดไว้โดยเฉพาะเมื่อมีให้ใช้ กลไกอื่นของเกมต้องไม่ถูกใช้เป็นช่องทางบริจาคหรือช่วยเหลือ',
      'CK-Labs อาจพิจารณาบริบททั้งหมด รวมถึงสิ่งตอบแทน ประวัติธุรกรรม ความสัมพันธ์ระหว่างบัญชี การโอนซ้ำ รูปแบบราคา และการสื่อสารที่เกี่ยวข้อง ราคาสูง ข้อตกลงที่เอื้อเฟื้อ หรือธุรกรรมที่ผิดปกติไม่ได้เป็นการละเมิดโดยอัตโนมัติ การบังคับใช้ต้องมีหลักฐานที่สมเหตุสมผลว่ากลไกถูกใช้เป็นหลักเพื่อโอนความมั่งคั่งโดยไม่มีวัตถุประสงค์ในการเล่นที่แท้จริงและได้รับอนุญาต CK-Labs อาจย้อนกลับการโอนที่ต้องห้ามและจำกัดบัญชีที่เกี่ยวข้องอย่างได้สัดส่วน โดยยังคงรักษามูลค่าที่ซื้อโดยชอบซึ่งไม่เกี่ยวข้องและสิทธิตามกฎหมายที่ไม่อาจสละได้',
    ],
  },
  vi: {
    label: 'Cập nhật Điều khoản · 5 tháng 9 năm 2026',
    title: 'Giao dịch thực chất và việc chuyển tài sản bị cấm',
    paragraphs: [
      'Người chơi được kỳ vọng tự xây dựng tài sản trong trò chơi thông qua hoạt động chơi và các hoạt động kinh tế thực chất trong game. Việc chuyển tiền trong game, tài sản hoặc giá trị kinh tế khác giữa người chơi chỉ được phép khi đó là một phần của giao dịch game thực sự và tính năng liên quan được sử dụng đúng mục đích được thiết kế.',
      'Bạn không được dùng giao dịch, mua bán, đấu giá, mua tác phẩm nghệ thuật, giao dịch công ty, hợp đồng, công việc, lệnh thị trường hoặc bất kỳ cơ chế nào khác chỉ hoặc chủ yếu để tặng, quyên góp, hỗ trợ tài chính, làm giàu cho tài khoản khác, hoặc chuyển vòng, gửi tạm, che giấu hay chuyển tài sản sang tài khoản khác. Các giao dịch giả tạo, vòng tròn hoặc có phối hợp mà mục đích chính là chuyển giá trị thay vì thực sự sử dụng tính năng đều bị cấm, kể cả giữa các tài khoản do cùng một người kiểm soát hoặc điều phối.',
      'Ví dụ, việc mua một tác phẩm nghệ thuật phải là giao dịch mua thực sự vì người mua thật sự muốn sở hữu tác phẩm đó. Không được mua tác phẩm chủ yếu để chuyển tiền cho nghệ sĩ hoặc hỗ trợ tài chính cho người chơi đó. Nguyên tắc tương tự áp dụng cho mọi cơ chế khác: lý do thực tế của giao dịch phải phù hợp với mục đích của tính năng được sử dụng.',
      'Nếu muốn xin hỗ trợ tài chính từ người chơi khác, hãy sử dụng màn hình hoặc tính năng «Begging» chuyên dụng của TycoonX khi có sẵn. Không được dùng các cơ chế khác của trò chơi làm kênh quyên góp hoặc hỗ trợ.',
      'CK-Labs có thể đánh giá toàn bộ bối cảnh, bao gồm giá trị đối ứng, lịch sử giao dịch, mối quan hệ giữa các tài khoản, các lần chuyển lặp lại, mô hình giá và trao đổi liên quan. Giá cao, thỏa thuận hào phóng hoặc giao dịch bất thường không tự động là vi phạm. Việc xử lý phải dựa trên bằng chứng hợp lý rằng cơ chế được sử dụng chủ yếu để chuyển tài sản mà không có mục đích chơi thực chất và được phép. CK-Labs có thể đảo ngược các giao dịch chuyển bị cấm và hạn chế tương xứng các tài khoản liên quan, đồng thời bảo toàn giá trị trả phí hợp pháp không liên quan và các quyền bắt buộc.',
    ],
  },
  uk: {
    label: 'Оновлення Умов · 5 вересня 2026 року',
    title: 'Справжні операції та заборонені перекази ігрового майна',
    paragraphs: [
      'Гравці мають створювати своє ігрове майно самостійно — через власну гру та реальну внутрішньоігрову економічну діяльність. Передавання між гравцями ігрових грошей, активів чи іншої економічної цінності дозволяється лише як частина справжньої ігрової операції, коли відповідна функція використовується за своїм призначенням.',
      'Не можна використовувати обмін, продаж, аукціон, купівлю твору мистецтва, операцію компанії, контракт, роботу, ринкове замовлення чи будь-яку іншу ігрову механіку лише або переважно для подарунка, пожертви, фінансової допомоги, збагачення іншого акаунта чи для переказування, тимчасового розміщення, приховування або переміщення майна на інший акаунт. Фіктивні, кругові чи скоординовані операції, основною метою яких є переміщення цінності, а не справжнє використання функції, заборонені, зокрема між акаунтами, які контролює або координує одна особа.',
      'Наприклад, твір мистецтва має купуватися тому, що покупець справді хоче придбати цей твір. Купувати мистецтво переважно для того, щоб передати гроші художнику або фінансово допомогти цьому гравцеві, не дозволяється. Той самий принцип діє для всіх інших механік: справжня причина операції повинна відповідати призначенню використаної функції.',
      'Якщо ви хочете попросити інших гравців про фінансову допомогу, використовуйте спеціальний екран або функцію TycoonX «Begging» (запит допомоги), якщо вона доступна. Інші ігрові механіки не можна використовувати як канали пожертв або допомоги.',
      'CK-Labs може оцінювати весь контекст, зокрема зустрічну цінність, історію операцій, зв’язки між акаунтами, повторювані перекази, цінові моделі та відповідні повідомлення. Висока ціна, щедра угода або незвична операція самі по собі не є порушенням. Для застосування заходів потрібні обґрунтовані докази того, що механіка використовувалася переважно для передачі майна без справжньої дозволеної ігрової мети. CK-Labs може скасувати заборонені перекази й пропорційно обмежити залучені акаунти, зберігаючи не пов’язану з порушенням законно придбану платну цінність і обов’язкові права.',
    ],
  },
  hi: {
    label: 'शर्तों का अपडेट · 5 सितंबर 2026',
    title: 'वास्तविक लेन-देन और प्रतिबंधित धन-संपत्ति हस्तांतरण',
    paragraphs: [
      'खिलाड़ियों से अपेक्षा है कि वे अपनी इन-गेम संपत्ति अपने खेल और वास्तविक इन-गेम आर्थिक गतिविधियों से स्वयं बनाएं। खिलाड़ियों के बीच इन-गेम पैसे, संपत्तियों या अन्य आर्थिक मूल्य का हस्तांतरण तभी अनुमत है जब वह किसी वास्तविक गेमप्ले लेन-देन का हिस्सा हो और संबंधित फीचर का उपयोग उसके निर्धारित उद्देश्य के लिए किया जा रहा हो।',
      'आप किसी ट्रेड, बिक्री, नीलामी, कला-कृति खरीद, कंपनी लेन-देन, अनुबंध, नौकरी, मार्केट ऑर्डर या किसी अन्य गेम मैकेनिक का उपयोग केवल या मुख्य रूप से दूसरे खाते को उपहार देने, दान करने, आर्थिक मदद देने, उसे समृद्ध करने, धन पहुंचाने, अस्थायी रूप से रखने, छिपाने या स्थानांतरित करने के लिए नहीं कर सकते। ऐसे दिखावटी, चक्रीय या समन्वित लेन-देन जिनका मुख्य उद्देश्य फीचर का वास्तविक उपयोग करने के बजाय मूल्य स्थानांतरित करना हो, प्रतिबंधित हैं, भले ही वे एक ही व्यक्ति द्वारा नियंत्रित या समन्वित खातों के बीच हों।',
      'उदाहरण के लिए, किसी कला-कृति की खरीद वास्तविक खरीद होनी चाहिए क्योंकि खरीदार वास्तव में उस कला-कृति को चाहता है। मुख्य रूप से कलाकार को पैसे भेजने या उस खिलाड़ी की आर्थिक मदद करने के लिए कला खरीदना अनुमत नहीं है। यही सिद्धांत अन्य सभी गेम मैकेनिक्स पर लागू होता है: लेन-देन का वास्तविक कारण उपयोग किए गए फीचर के उद्देश्य से मेल खाना चाहिए।',
      'यदि आप अन्य खिलाड़ियों से आर्थिक मदद मांगना चाहते हैं, तो उपलब्ध होने पर TycoonX की निर्धारित «Begging» (मदद मांगने) स्क्रीन या फीचर का उपयोग करें। अन्य गेमप्ले मैकेनिक्स दान या सहायता के चैनल नहीं हैं।',
      'CK-Labs पूरे संदर्भ का आकलन कर सकता है, जिसमें बदले में मिला मूल्य, लेन-देन इतिहास, खातों के बीच संबंध, बार-बार किए गए हस्तांतरण, मूल्य-पैटर्न और संबंधित संवाद शामिल हैं। ऊंची कीमत, उदार सौदा या असामान्य लेन-देन अपने आप उल्लंघन नहीं है। कार्रवाई के लिए उचित प्रमाण होना चाहिए कि मैकेनिक का उपयोग मुख्य रूप से किसी वास्तविक और अनुमत गेमप्ले उद्देश्य के बिना संपत्ति स्थानांतरित करने के लिए किया गया था। CK-Labs प्रतिबंधित हस्तांतरण को पलट सकता है और संबंधित खातों पर अनुपातिक प्रतिबंध लगा सकता है, जबकि असंबंधित वैध रूप से खरीदे गए भुगतान मूल्य और अनिवार्य अधिकार सुरक्षित रहेंगे।',
    ],
  },
  id: {
    label: 'Pembaruan Ketentuan · 5 September 2026',
    title: 'Transaksi nyata dan pemindahan kekayaan yang dilarang',
    paragraphs: [
      'Pemain diharapkan membangun kekayaan di dalam game melalui permainan mereka sendiri dan aktivitas ekonomi yang benar-benar nyata di dalam game. Pemindahan uang, aset, atau nilai ekonomi lain di dalam game antarpemain hanya diperbolehkan jika menjadi bagian dari transaksi gameplay yang sungguh-sungguh dan fitur terkait digunakan sesuai tujuan yang memang dirancang untuknya.',
      'Anda tidak boleh menggunakan perdagangan, penjualan, lelang, pembelian karya seni, transaksi perusahaan, kontrak, pekerjaan, pesanan pasar, atau mekanisme game lainnya hanya atau terutama untuk memberi hadiah, menyumbang, membantu secara finansial, memperkaya akun lain, atau menyalurkan, memarkir, menyembunyikan, atau memindahkan kekayaan ke akun lain. Transaksi pura-pura, berputar, atau terkoordinasi yang tujuan utamanya memindahkan nilai alih-alih benar-benar menggunakan fitur dilarang, termasuk antara akun yang dikendalikan atau dikoordinasikan oleh orang yang sama.',
      'Sebagai contoh, pembelian karya seni harus merupakan pembelian yang sungguh-sungguh karena pembeli memang menginginkan karya tersebut. Membeli karya seni terutama untuk mengirim uang kepada seniman atau membantu pemain tersebut secara finansial tidak diperbolehkan. Prinsip yang sama berlaku untuk semua mekanisme lain: alasan sebenarnya dari transaksi harus sesuai dengan tujuan fitur yang digunakan.',
      'Jika ingin meminta bantuan finansial dari pemain lain, gunakan layar atau fitur khusus «Begging» TycoonX jika tersedia. Mekanisme gameplay lainnya bukan saluran donasi atau bantuan.',
      'CK-Labs dapat menilai keseluruhan konteks, termasuk nilai timbal balik, riwayat transaksi, hubungan antarakun, pemindahan berulang, pola harga, dan komunikasi yang relevan. Harga tinggi, transaksi yang murah hati, atau transaksi yang tidak biasa tidak otomatis merupakan pelanggaran. Penindakan memerlukan bukti yang wajar bahwa mekanisme tersebut terutama digunakan untuk memindahkan kekayaan tanpa tujuan gameplay yang nyata dan diizinkan. CK-Labs dapat membalikkan pemindahan yang dilarang dan membatasi akun terkait secara proporsional, sambil tetap melindungi nilai berbayar sah yang tidak berkaitan serta hak yang wajib berlaku.',
    ],
  },
};

function getLocale(pathname: string): string | null {
  if (/^\/tyconx-terms-of-service\/?$/.test(pathname)) return 'en';
  const match = pathname.match(/^\/tycoonx-legal\/([^/]+)\/terms\/?$/);
  return match?.[1] ?? null;
}

export default function TransferRuleNotice() {
  const pathname = usePathname();
  const locale = getLocale(pathname);
  if (!locale || !copies[locale]) return null;

  const copy = copies[locale];
  const rtl = locale === 'ar';

  return (
    <section className="max-w-3xl mx-auto px-4 pb-12" lang={locale === 'en' ? 'en' : locale} dir={rtl ? 'rtl' : 'ltr'} aria-labelledby="tycoonx-transfer-rule-heading">
      <div className="rounded-xl border border-amber-400/20 bg-amber-400/[0.05] p-6">
        <p className="text-amber-300/80 text-xs font-medium tracking-wide mb-2">{copy.label}</p>
        <h2 id="tycoonx-transfer-rule-heading" className="text-white font-semibold mb-4">{copy.title}</h2>
        <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
          {copy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  );
}
