"use client";

import { usePathname } from "next/navigation";

type Copy = {
  heading: string;
  intro: string;
  art: string;
  offers: string;
  begging: string;
  moderation: string;
  enforcement: string;
};

const englishCopy: Copy = {
  heading: "Art trading and Begging",
  intro:
    "TycoonX intentionally provides separate mechanics for trading artwork and for helping other players. Use each feature for its actual gameplay purpose.",
  art:
    "Art auctions and resales are genuine collecting and trading mechanics. Legitimate high, low or speculative prices are allowed. Do not use self-bidding, controlled accounts, collusion, circular trades, manipulated auction state or fake transactions mainly to funnel wealth, fabricate demand or price history, launder exploit value, evade limits or support prohibited real-money trading.",
  offers:
    "Formal direct offers for artwork are also genuine purchase negotiations. A completed offer is meant to exchange the artwork for the agreed in-game value. Expired, declined, stale-ownership or otherwise failed offers should reconcile escrow according to the authoritative transaction record. A large offer alone does not prove abuse.",
  begging:
    "Begging is specifically designed for voluntary player assistance, so genuine donations through Begging are allowed even when the donor receives nothing in return. Do not use compromised or controlled accounts, automation, exploits, duplicated value or deceptive coordination to manufacture donations, evade restrictions or facilitate prohibited real-money trading.",
  moderation:
    "Artwork and Begging text may be reviewed automatically or manually before or after publication. A temporary moderation outage does not mean content is permanently approved. CK-Labs may restrict or remove prohibited content and reconcile affected auction holds or transactions where appropriate, while preserving legally required notices, reasons or remedies where applicable.",
  enforcement:
    "Server or API acceptance does not authorize knowing exploitation of a bug. CK-Labs will distinguish ordinary or accidental one-off activity, outages and account compromise from evidence of knowing or repeated abuse, and corrections should target directly affected invalid state rather than unrelated legitimate purchases or wealth. Mandatory consumer and other non-waivable rights remain unaffected.",
};

const localized: Record<string, Copy> = {
  tr: {
    heading: "Sanat ticareti ve Yardım İlanı",
    intro: "TycoonX, sanat eserlerinin alınıp satılması ile oyuncuların birbirine yardım etmesi için bilinçli olarak ayrı mekanikler sunar. Her özellik kendi oyun amacı doğrultusunda kullanılmalıdır.",
    art: "Sanat açık artırmaları ve yeniden satışlar gerçek koleksiyon ve ticaret mekanikleridir. Meşru yüksek, düşük veya spekülatif fiyatlar tek başına yasak değildir. Kendi ilanına teklif verme, kontrol edilen hesaplar, anlaşmalı teklif verme, döngüsel işlemler, açık artırma durumunu değiştirme veya sahte işlemler; esas olarak servet aktarmak, yapay talep ya da fiyat geçmişi oluşturmak, exploit değerini aklamak, sınırları aşmak veya yasak gerçek para ticaretini desteklemek için kullanılamaz.",
    offers: "Sanat eserleri için resmi doğrudan teklifler de gerçek satın alma görüşmeleridir. Tamamlanan teklif, eser ile kararlaştırılan oyun içi değerin karşılıklı değişimini amaçlar. Süresi dolan, reddedilen, mülkiyeti artık geçerli olmayan veya başka nedenle başarısız olan tekliflerde emanet tutarı yetkili işlem kaydına göre uzlaştırılmalıdır. Tek başına yüksek bir teklif kötüye kullanım kanıtı değildir.",
    begging: "Yardım İlanı, oyuncuların gönüllü olarak birbirine destek olması için özel olarak tasarlanmıştır. Bu nedenle bağışçının karşılığında hiçbir şey almadığı gerçek yardımlar da serbesttir. Ele geçirilmiş veya kontrol edilen hesaplar, otomasyon, exploit, çoğaltılmış değer ya da aldatıcı koordinasyon; sahte yardım oluşturmak, kısıtlamaları aşmak veya yasak gerçek para ticaretini kolaylaştırmak için kullanılamaz.",
    moderation: "Sanat eserleri ve Yardım İlanı metinleri yayımlanmadan önce veya sonra otomatik ya da manuel olarak incelenebilir. Moderasyon hizmetinin geçici olarak kullanılamaması, içeriğin kalıcı biçimde onaylandığı anlamına gelmez. CK-Labs yasak içeriği kısıtlayabilir veya kaldırabilir ve gerektiğinde ilgili açık artırma blokelerini ya da işlemleri uzlaştırabilir; uygulanabilir olduğu ölçüde kanunen zorunlu bildirim, gerekçe ve başvuru hakları korunur.",
    enforcement: "Sunucunun veya API'nin bir işlemi kabul etmesi, bir hatanın bilerek sömürülmesine izin vermez. CK-Labs normal veya tek seferlik kazara davranışları, kesintileri ve hesap ele geçirilmesini; bilinçli veya tekrarlanan kötüye kullanım kanıtlarından ayırır. Düzeltmeler ilgisiz meşru satın alımlara veya servete değil, doğrudan etkilenen geçersiz duruma yönelmelidir. Zorunlu tüketici hakları ve vazgeçilemeyen diğer haklar etkilenmez.",
  },
  de: {
    heading: "Kunsthandel und Hilfe über Betteln",
    intro: "TycoonX stellt bewusst getrennte Mechaniken für den Handel mit Kunstwerken und für die Unterstützung anderer Spieler bereit. Jede Funktion soll ihrem eigentlichen Spielzweck entsprechend genutzt werden.",
    art: "Kunstauktionen und Weiterverkäufe sind echte Sammel- und Handelsmechaniken. Legitime hohe, niedrige oder spekulative Preise sind zulässig. Eigengebote, kontrollierte Konten, Absprachen, Kreisgeschäfte, manipulierte Auktionszustände oder Scheintransaktionen dürfen nicht hauptsächlich dazu dienen, Vermögen zu verschieben, Nachfrage oder Preisverläufe vorzutäuschen, Exploit-Werte zu verschleiern, Grenzen zu umgehen oder verbotenen Echtgeldhandel zu unterstützen.",
    offers: "Formelle Direktangebote für Kunstwerke sind ebenfalls echte Kaufverhandlungen. Ein abgeschlossenes Angebot soll das Kunstwerk gegen den vereinbarten Spielwert tauschen. Bei abgelaufenen, abgelehnten, wegen geänderter Eigentümerschaft hinfälligen oder anderweitig gescheiterten Angeboten ist der Treuhandbetrag anhand des maßgeblichen Transaktionsdatensatzes abzugleichen. Ein hohes Angebot allein beweist keinen Missbrauch.",
    begging: "Betteln ist ausdrücklich für freiwillige Hilfe zwischen Spielern vorgesehen. Deshalb sind echte Zuwendungen über diese Funktion auch dann erlaubt, wenn der Geber keine Gegenleistung erhält. Kompromittierte oder kontrollierte Konten, Automatisierung, Exploits, duplizierte Werte oder täuschende Absprachen dürfen nicht genutzt werden, um Zuwendungen künstlich zu erzeugen, Beschränkungen zu umgehen oder verbotenen Echtgeldhandel zu ermöglichen.",
    moderation: "Kunstwerke und Texte in Bettel-Beiträgen können vor oder nach der Veröffentlichung automatisch oder manuell geprüft werden. Eine vorübergehende Störung der Moderation bedeutet keine dauerhafte Freigabe. CK-Labs darf unzulässige Inhalte beschränken oder entfernen und betroffene Auktionssicherheiten oder Transaktionen erforderlichenfalls abgleichen. Gesetzlich vorgeschriebene Mitteilungen, Begründungen oder Rechtsbehelfe bleiben, soweit anwendbar, erhalten.",
    enforcement: "Dass Server oder API eine Aktion annehmen, erlaubt keine bewusste Ausnutzung eines Fehlers. CK-Labs unterscheidet normales oder einmaliges versehentliches Verhalten, Ausfälle und Kontokompromittierungen von nachweislich bewusstem oder wiederholtem Missbrauch. Korrekturen sollen unmittelbar betroffene ungültige Zustände treffen, nicht davon unabhängige legitime Käufe oder Vermögenswerte. Zwingende Verbraucherrechte und andere unabdingbare Rechte bleiben unberührt.",
  },
  es: {
    heading: "Comercio de arte y Peticiones de ayuda",
    intro: "TycoonX ofrece de forma intencionada mecánicas distintas para comerciar con obras de arte y para ayudar a otros jugadores. Cada función debe utilizarse conforme a su finalidad dentro del juego.",
    art: "Las subastas y reventas de arte son mecánicas reales de coleccionismo y comercio. Se permiten precios legítimos altos, bajos o especulativos. No se pueden utilizar pujas propias, cuentas controladas, acuerdos entre jugadores, operaciones circulares, estados de subasta manipulados o transacciones ficticias principalmente para canalizar riqueza, fabricar demanda o historial de precios, blanquear valor obtenido mediante exploits, eludir límites o respaldar comercio prohibido por dinero real.",
    offers: "Las ofertas directas formales por obras de arte también son negociaciones de compra reales. Una oferta completada pretende intercambiar la obra por el valor acordado dentro del juego. Las ofertas caducadas, rechazadas, afectadas por un cambio de propietario o fallidas por otro motivo deben conciliar el importe en depósito según el registro autorizado de la transacción. Una oferta elevada, por sí sola, no demuestra abuso.",
    begging: "Peticiones de ayuda está diseñada específicamente para que los jugadores puedan ayudarse voluntariamente. Por tanto, las donaciones auténticas están permitidas aunque quien dona no reciba nada a cambio. No se pueden utilizar cuentas comprometidas o controladas, automatización, exploits, valor duplicado o coordinación engañosa para fabricar donaciones, eludir restricciones o facilitar comercio prohibido por dinero real.",
    moderation: "Las obras de arte y los textos de Peticiones de ayuda pueden revisarse automática o manualmente antes o después de publicarse. Una interrupción temporal de la moderación no significa que el contenido haya quedado aprobado de forma permanente. CK-Labs puede restringir o retirar contenido prohibido y conciliar, cuando proceda, retenciones o transacciones de subasta afectadas, respetando los avisos, motivos o recursos exigidos por la ley cuando sean aplicables.",
    enforcement: "Que el servidor o la API acepte una acción no autoriza a explotar conscientemente un error. CK-Labs distinguirá la actividad normal o accidental de una sola vez, las interrupciones y el compromiso de cuentas de las pruebas de abuso consciente o reiterado. Las correcciones deben dirigirse al estado inválido directamente afectado y no a compras o patrimonio legítimos no relacionados. Los derechos imperativos de los consumidores y demás derechos irrenunciables no se ven afectados.",
  },
  es_MX: {
    heading: "Compraventa de arte y Solicitudes de ayuda",
    intro: "TycoonX ofrece por separado mecánicas para comprar y vender obras de arte y para apoyar a otros jugadores. Cada función debe usarse para el propósito que tiene dentro del juego.",
    art: "Las subastas y reventas de arte son mecánicas reales de colección y compraventa. Se permiten precios legítimos altos, bajos o especulativos. No uses autoofertas, cuentas bajo tu control, acuerdos entre jugadores, operaciones circulares, estados de subasta manipulados o transacciones simuladas principalmente para transferir riqueza, aparentar demanda o historial de precios, ocultar valor obtenido con exploits, evadir límites o apoyar comercio prohibido con dinero real.",
    offers: "Las ofertas directas formales por obras de arte también son negociaciones reales de compra. Una oferta completada busca intercambiar la obra por el valor acordado dentro del juego. Si una oferta vence, se rechaza, falla porque cambió el propietario o falla por otra razón, el dinero en garantía debe conciliarse conforme al registro autorizado de la transacción. Una oferta alta por sí sola no demuestra abuso.",
    begging: "Solicitudes de ayuda está diseñada para que los jugadores puedan apoyarse voluntariamente. Por eso una donación auténtica está permitida aunque quien ayuda no reciba nada a cambio. No uses cuentas comprometidas o controladas, automatización, exploits, valor duplicado o coordinación engañosa para fabricar donaciones, evadir restricciones o facilitar comercio prohibido con dinero real.",
    moderation: "Las obras de arte y los textos de Solicitudes de ayuda pueden revisarse de forma automática o manual antes o después de publicarse. Una falla temporal del sistema de moderación no significa que el contenido quede aprobado para siempre. CK-Labs puede restringir o retirar contenido prohibido y conciliar, cuando corresponda, fondos retenidos o transacciones afectadas, respetando los avisos, motivos y medios de impugnación exigidos por la ley cuando apliquen.",
    enforcement: "Que el servidor o la API acepte una acción no da permiso para aprovechar conscientemente un error. CK-Labs distinguirá una actividad normal o accidental aislada, fallas del servicio y cuentas comprometidas de evidencia de abuso consciente o repetido. Las correcciones deben afectar el estado inválido directamente relacionado, no compras o patrimonio legítimos ajenos. Los derechos obligatorios del consumidor y demás derechos irrenunciables no cambian.",
  },
  fr: {
    heading: "Commerce d'art et Demandes d'aide",
    intro: "TycoonX propose volontairement des mécanismes distincts pour échanger des œuvres d'art et pour aider d'autres joueurs. Chaque fonctionnalité doit être utilisée conformément à son véritable objectif de jeu.",
    art: "Les enchères et reventes d'art sont de véritables mécanismes de collection et d'échange. Des prix légitimes élevés, faibles ou spéculatifs sont autorisés. Les auto-enchères, comptes contrôlés, ententes, transactions circulaires, états d'enchère manipulés ou opérations fictives ne doivent pas servir principalement à transférer des richesses, fabriquer une demande ou un historique de prix, blanchir une valeur issue d'un exploit, contourner des limites ou soutenir un commerce interdit contre de l'argent réel.",
    offers: "Les offres directes formelles sur des œuvres sont également de véritables négociations d'achat. Une offre finalisée vise à échanger l'œuvre contre la valeur convenue dans le jeu. Lorsqu'une offre expire, est refusée, devient caduque à cause d'un changement de propriétaire ou échoue autrement, les fonds bloqués doivent être rapprochés du registre de transaction faisant autorité. Une offre élevée ne prouve pas, à elle seule, un abus.",
    begging: "Demandes d'aide est expressément conçue pour permettre une entraide volontaire entre joueurs. Les dons authentiques effectués par cette fonctionnalité sont donc autorisés même sans contrepartie. Les comptes compromis ou contrôlés, l'automatisation, les exploits, les valeurs dupliquées ou une coordination trompeuse ne doivent pas servir à fabriquer des dons, contourner des restrictions ou faciliter un commerce interdit contre de l'argent réel.",
    moderation: "Les œuvres et les textes de Demandes d'aide peuvent être examinés automatiquement ou manuellement avant ou après leur publication. Une indisponibilité temporaire de la modération ne vaut pas approbation définitive. CK-Labs peut restreindre ou retirer un contenu interdit et rapprocher, si nécessaire, les fonds bloqués ou transactions concernés, tout en respectant les notifications, motifs ou recours imposés par la loi lorsqu'ils s'appliquent.",
    enforcement: "L'acceptation d'une action par le serveur ou l'API n'autorise pas l'exploitation consciente d'un bug. CK-Labs distingue l'activité normale ou l'incident isolé, les pannes et la compromission d'un compte des preuves d'un abus conscient ou répété. Les corrections doivent viser l'état invalide directement concerné, et non les achats ou richesses légitimes sans lien. Les droits impératifs des consommateurs et autres droits auxquels il ne peut être renoncé restent inchangés.",
  },
  fr_CA: {
    heading: "Échange d'œuvres et Demandes d'aide",
    intro: "TycoonX offre volontairement des mécanismes distincts pour échanger des œuvres d'art et pour aider d'autres joueurs. Chaque fonctionnalité doit être utilisée selon sa véritable fonction dans le jeu.",
    art: "Les enchères et reventes d'œuvres sont de véritables mécanismes de collection et d'échange. Des prix légitimes élevés, faibles ou spéculatifs sont permis. Les mises sur sa propre œuvre, comptes contrôlés, ententes, transactions circulaires, états d'enchère manipulés ou fausses opérations ne doivent pas servir principalement à transférer des richesses, fabriquer une demande ou un historique de prix, dissimuler une valeur issue d'un exploit, contourner des limites ou soutenir un commerce interdit contre de l'argent réel.",
    offers: "Les offres directes officielles pour des œuvres sont aussi de véritables négociations d'achat. Une offre conclue vise à échanger l'œuvre contre la valeur convenue dans le jeu. Une offre expirée, refusée, devenue invalide après un changement de propriétaire ou autrement échouée doit faire l'objet d'un rapprochement des fonds en fidéicommis selon le registre de transaction faisant autorité. Une offre élevée ne constitue pas, à elle seule, une preuve d'abus.",
    begging: "Demandes d'aide est expressément conçue pour l'entraide volontaire entre joueurs. Un don authentique y est donc permis même si le donateur ne reçoit rien en retour. Les comptes compromis ou contrôlés, l'automatisation, les exploits, les valeurs dupliquées ou une coordination trompeuse ne doivent pas servir à fabriquer des dons, contourner des restrictions ou faciliter un commerce interdit contre de l'argent réel.",
    moderation: "Les œuvres et les textes de Demandes d'aide peuvent être examinés automatiquement ou manuellement avant ou après leur publication. Une panne temporaire du système de modération ne signifie pas qu'un contenu est approuvé de façon permanente. CK-Labs peut restreindre ou retirer du contenu interdit et rapprocher, au besoin, les sommes retenues ou transactions touchées, tout en respectant les avis, motifs ou recours exigés par la loi lorsqu'ils s'appliquent.",
    enforcement: "L'acceptation d'une action par le serveur ou l'API n'autorise pas l'exploitation consciente d'un bug. CK-Labs distingue l'activité normale ou l'erreur isolée, les pannes et la compromission d'un compte des preuves d'un abus conscient ou répété. Les corrections doivent viser l'état invalide directement touché plutôt que des achats ou richesses légitimes sans rapport. Les droits obligatoires des consommateurs et autres droits auxquels on ne peut renoncer restent inchangés.",
  },
  it: {
    heading: "Commercio di opere e Richieste di aiuto",
    intro: "TycoonX offre intenzionalmente meccaniche separate per scambiare opere d'arte e per aiutare altri giocatori. Ogni funzione va usata per il proprio reale scopo di gioco.",
    art: "Le aste e le rivendite di opere sono vere meccaniche di collezionismo e commercio. Sono ammessi prezzi legittimi alti, bassi o speculativi. Auto-offerte, account controllati, accordi collusivi, scambi circolari, stati d'asta manipolati o transazioni fittizie non possono essere usati principalmente per trasferire ricchezza, creare domanda o cronologie di prezzo artificiali, riciclare valore ottenuto da exploit, aggirare limiti o sostenere commercio vietato con denaro reale.",
    offers: "Le offerte dirette formali per opere d'arte sono anch'esse vere trattative di acquisto. Un'offerta completata serve a scambiare l'opera con il valore di gioco concordato. Offerte scadute, rifiutate, non più valide per cambio di proprietario o altrimenti fallite devono riconciliare l'importo in deposito secondo il registro autorevole della transazione. Un'offerta elevata, da sola, non dimostra un abuso.",
    begging: "Richieste di aiuto è pensata appositamente per consentire assistenza volontaria tra giocatori. Le donazioni autentiche tramite questa funzione sono quindi ammesse anche senza alcuna contropartita. Account compromessi o controllati, automazione, exploit, valore duplicato o coordinamento ingannevole non possono essere usati per creare donazioni artificiali, aggirare restrizioni o facilitare commercio vietato con denaro reale.",
    moderation: "Le opere d'arte e i testi delle Richieste di aiuto possono essere controllati automaticamente o manualmente prima o dopo la pubblicazione. Un'indisponibilità temporanea della moderazione non equivale ad approvazione permanente. CK-Labs può limitare o rimuovere contenuti vietati e riconciliare, quando opportuno, importi bloccati o transazioni interessate, preservando gli avvisi, le motivazioni o i rimedi richiesti dalla legge quando applicabili.",
    enforcement: "L'accettazione di un'azione da parte del server o dell'API non autorizza lo sfruttamento consapevole di un bug. CK-Labs distingue attività normali o errori isolati, interruzioni e compromissione dell'account dalle prove di abuso consapevole o ripetuto. Le correzioni devono riguardare lo stato non valido direttamente interessato, non acquisti o ricchezza legittimi estranei. I diritti inderogabili dei consumatori e gli altri diritti non rinunciabili restano invariati.",
  },
  pt: {
    heading: "Comércio de arte e Pedidos de ajuda",
    intro: "TycoonX disponibiliza intencionalmente mecanismos distintos para negociar obras de arte e para ajudar outros jogadores. Cada funcionalidade deve ser utilizada de acordo com a sua finalidade real no jogo.",
    art: "Os leilões e as revendas de arte são mecanismos reais de coleção e negociação. São permitidos preços legítimos altos, baixos ou especulativos. Licitar na própria venda, contas controladas, conluio, transações circulares, estados de leilão manipulados ou negócios fictícios não podem ser usados principalmente para canalizar riqueza, criar procura ou histórico de preços artificial, ocultar valor obtido por exploit, contornar limites ou apoiar comércio proibido por dinheiro real.",
    offers: "As ofertas diretas formais por obras de arte também são negociações de compra reais. Uma oferta concluída destina-se a trocar a obra pelo valor acordado no jogo. Ofertas expiradas, recusadas, inválidas por mudança de proprietário ou que falhem por outro motivo devem ter o montante em garantia reconciliado de acordo com o registo de transação oficial. Uma oferta elevada, por si só, não prova abuso.",
    begging: "Pedidos de ajuda foi concebido especificamente para a ajuda voluntária entre jogadores. Por isso, as doações genuínas através desta funcionalidade são permitidas mesmo sem qualquer contrapartida. Contas comprometidas ou controladas, automação, exploits, valor duplicado ou coordenação enganosa não podem ser usados para fabricar doações, contornar restrições ou facilitar comércio proibido por dinheiro real.",
    moderation: "As obras de arte e os textos dos Pedidos de ajuda podem ser analisados automática ou manualmente antes ou depois da publicação. Uma indisponibilidade temporária da moderação não significa aprovação permanente. A CK-Labs pode restringir ou remover conteúdo proibido e reconciliar, quando adequado, montantes retidos ou transações afetadas, preservando os avisos, fundamentos ou meios de reação exigidos por lei quando aplicáveis.",
    enforcement: "A aceitação de uma ação pelo servidor ou pela API não autoriza a exploração consciente de um erro. A CK-Labs distingue atividade normal ou um incidente acidental isolado, falhas de serviço e comprometimento da conta de provas de abuso consciente ou repetido. As correções devem incidir sobre o estado inválido diretamente afetado, não sobre compras ou património legítimos sem relação. Os direitos imperativos dos consumidores e outros direitos irrenunciáveis mantêm-se inalterados.",
  },
  pt_BR: {
    heading: "Negociação de arte e Pedidos de ajuda",
    intro: "TycoonX oferece de propósito mecânicas separadas para negociar obras de arte e para ajudar outros jogadores. Cada recurso deve ser usado conforme sua finalidade real dentro do jogo.",
    art: "Leilões e revendas de arte são mecânicas reais de coleção e negociação. Preços legítimos altos, baixos ou especulativos são permitidos. Autoofertas, contas controladas, conluio, transações circulares, estado de leilão manipulado ou negócios fictícios não podem ser usados principalmente para transferir riqueza, fabricar demanda ou histórico de preços, ocultar valor obtido por exploit, contornar limites ou apoiar comércio proibido com dinheiro real.",
    offers: "Ofertas diretas formais por obras de arte também são negociações reais de compra. Uma oferta concluída pretende trocar a obra pelo valor combinado dentro do jogo. Ofertas vencidas, recusadas, inválidas por mudança de proprietário ou que falhem por outro motivo devem ter o valor em garantia conciliado conforme o registro autorizado da transação. Uma oferta alta, sozinha, não comprova abuso.",
    begging: "Pedidos de ajuda foi criado especificamente para ajuda voluntária entre jogadores. Por isso, doações genuínas pelo recurso são permitidas mesmo quando quem doa não recebe nada em troca. Contas comprometidas ou controladas, automação, exploits, valor duplicado ou coordenação enganosa não podem ser usados para fabricar doações, contornar restrições ou facilitar comércio proibido com dinheiro real.",
    moderation: "Obras de arte e textos de Pedidos de ajuda podem ser analisados automática ou manualmente antes ou depois da publicação. Uma indisponibilidade temporária da moderação não significa aprovação permanente. A CK-Labs pode restringir ou remover conteúdo proibido e conciliar, quando cabível, valores retidos ou transações afetadas, preservando avisos, justificativas ou meios de contestação exigidos por lei quando aplicáveis.",
    enforcement: "A aceitação de uma ação pelo servidor ou pela API não autoriza explorar conscientemente um erro. A CK-Labs distingue atividade normal ou um incidente acidental isolado, indisponibilidades e comprometimento da conta de evidências de abuso consciente ou repetido. As correções devem atingir o estado inválido diretamente afetado, não compras ou patrimônio legítimos sem relação. Direitos obrigatórios do consumidor e outros direitos irrenunciáveis permanecem inalterados.",
  },
  ru: {
    heading: "Торговля искусством и Просьбы о помощи",
    intro: "В TycoonX предусмотрены отдельные игровые механики для торговли произведениями искусства и для помощи другим игрокам. Каждую функцию следует использовать по её реальному игровому назначению.",
    art: "Аукционы и перепродажа искусства являются настоящими механиками коллекционирования и торговли. Допускаются добросовестные высокие, низкие и спекулятивные цены. Нельзя использовать ставки на собственный лот, контролируемые аккаунты, сговор, круговые сделки, манипуляцию состоянием аукциона или фиктивные сделки главным образом для передачи богатства, создания искусственного спроса или истории цен, сокрытия ценности из эксплойта, обхода ограничений либо запрещённой торговли за реальные деньги.",
    offers: "Официальные прямые предложения по произведениям искусства также являются реальными переговорами о покупке. Завершённое предложение предназначено для обмена произведения на согласованную внутриигровую стоимость. При истечении срока, отказе, смене владельца или иной неудаче средства в эскроу должны сверяться с авторитетной записью о транзакции. Высокая сумма предложения сама по себе не доказывает злоупотребление.",
    begging: "Просьбы о помощи специально предназначены для добровольной поддержки между игроками. Поэтому добросовестные пожертвования разрешены даже без какой-либо встречной выгоды для дарителя. Нельзя использовать скомпрометированные или контролируемые аккаунты, автоматизацию, эксплойты, дублированную ценность или обманный сговор для создания фиктивных пожертвований, обхода ограничений или запрещённой торговли за реальные деньги.",
    moderation: "Произведения искусства и тексты Просьб о помощи могут проверяться автоматически или вручную до или после публикации. Временная недоступность модерации не означает постоянного одобрения контента. CK-Labs может ограничить или удалить запрещённый контент и при необходимости сверить затронутые удержания или транзакции, сохраняя обязательные по закону уведомления, основания и способы обжалования там, где они применимы.",
    enforcement: "Принятие действия сервером или API не даёт разрешения сознательно эксплуатировать ошибку. CK-Labs отличает обычное или единичное случайное действие, сбои и компрометацию аккаунта от доказательств сознательного или повторного злоупотребления. Исправление должно касаться непосредственно затронутого недействительного состояния, а не несвязанных законных покупок или имущества. Обязательные права потребителей и иные неотчуждаемые права не затрагиваются.",
  },
  ja: {
    heading: "アート取引と支援募集",
    intro: "TycoonX では、アート作品の取引と他のプレイヤーへの支援を、それぞれ別のゲーム機能として用意しています。各機能は本来のゲーム上の目的に沿って利用してください。",
    art: "アートのオークションや再販売は、正規の収集・取引機能です。正当な高値、安値、投機的な価格設定そのものは禁止されません。自己入札、支配下のアカウント、談合、循環取引、オークション状態の改ざん、架空取引を主な手段として、資産を移転したり、需要や価格履歴を偽装したり、エクスプロイトで得た価値を隠したり、制限を回避したり、禁止されたリアルマネー取引を支援したりすることは禁止されます。",
    offers: "アート作品への正式な直接オファーも、正規の購入交渉です。成立したオファーは、作品と合意したゲーム内価値を交換するためのものです。期限切れ、拒否、所有者変更その他の理由で失敗したオファーについては、権威ある取引記録に基づいてエスクローを精算します。高額なオファーだけを理由に不正と判断することはありません。",
    begging: "支援募集は、プレイヤー同士が任意に助け合うための専用機能です。そのため、提供者が見返りを受け取らない正当な寄付も認められます。乗っ取られたアカウントや支配下のアカウント、自動化、エクスプロイト、複製された価値、欺瞞的な連携を使って寄付を作り出したり、制限を回避したり、禁止されたリアルマネー取引を行ったりしてはいけません。",
    moderation: "アート作品や支援募集の文章は、公開前または公開後に自動もしくは手動で審査されることがあります。モデレーションが一時的に利用できないことは、コンテンツが恒久的に承認されたことを意味しません。CK-Labs は禁止コンテンツを制限または削除し、必要に応じて関連する入札保留額や取引を精算します。適用される場合は、法律上必要な通知、理由提示、救済手続を維持します。",
    enforcement: "サーバーや API が操作を受け付けたとしても、バグを意図的に悪用してよいことにはなりません。CK-Labs は、通常または一度限りの偶発的な行為、障害、アカウント侵害と、意図的または反復的な不正の証拠を区別します。修正は、無関係な正当な購入や資産ではなく、直接影響を受けた無効な状態を対象とします。強行的な消費者権利その他放棄できない権利は影響を受けません。",
  },
  ko: {
    heading: "미술품 거래와 도움 요청",
    intro: "TycoonX는 미술품 거래와 다른 플레이어 지원을 서로 다른 게임 기능으로 제공합니다. 각 기능은 본래의 게임 목적에 맞게 사용해야 합니다.",
    art: "미술품 경매와 재판매는 정상적인 수집 및 거래 기능입니다. 정당한 고가, 저가 또는 투기적 가격 자체는 허용됩니다. 자기 입찰, 통제 계정, 담합, 순환 거래, 경매 상태 조작 또는 허위 거래를 주된 수단으로 사용해 자산을 이전하거나 수요나 가격 이력을 조작하거나 exploit 가치의 출처를 숨기거나 제한을 회피하거나 금지된 현금 거래를 지원해서는 안 됩니다.",
    offers: "미술품에 대한 공식 직접 제안도 정상적인 구매 협상입니다. 완료된 제안은 작품과 합의된 게임 내 가치를 교환하기 위한 것입니다. 만료, 거절, 소유권 변경 또는 기타 사유로 실패한 제안의 에스크로는 권위 있는 거래 기록에 따라 정산되어야 합니다. 높은 제안 금액 하나만으로 악용이 입증되지는 않습니다.",
    begging: "도움 요청은 플레이어가 자발적으로 서로를 지원하도록 마련된 기능입니다. 따라서 기부자가 대가를 받지 않는 진정한 도움도 허용됩니다. 탈취되거나 통제된 계정, 자동화, exploit, 복제된 가치 또는 기만적 공모를 사용해 기부를 조작하거나 제한을 우회하거나 금지된 현금 거래를 촉진해서는 안 됩니다.",
    moderation: "미술품과 도움 요청 문구는 게시 전이나 게시 후 자동 또는 수동 검토를 받을 수 있습니다. 검토 시스템이 일시적으로 중단되었다고 해서 콘텐츠가 영구 승인된 것은 아닙니다. CK-Labs는 금지 콘텐츠를 제한 또는 삭제하고 필요한 경우 관련 경매 보류금이나 거래를 정산할 수 있으며, 적용되는 법률상 필요한 통지, 사유 또는 구제 절차를 보장합니다.",
    enforcement: "서버나 API가 동작을 허용했다는 사실만으로 버그를 고의로 악용할 권리가 생기지 않습니다. CK-Labs는 정상적이거나 일회성 우발 행위, 서비스 장애 및 계정 탈취와 고의적이거나 반복적인 악용 증거를 구분합니다. 수정은 관련 없는 정상 구매나 자산이 아니라 직접 영향을 받은 무효 상태를 대상으로 해야 합니다. 강행 소비자 권리 및 포기할 수 없는 기타 권리는 영향을 받지 않습니다.",
  },
  zh: {
    heading: "艺术品交易与求助",
    intro: "TycoonX 有意将艺术品交易和玩家互助设计为不同的游戏机制。请按照每项功能本身的游戏用途使用。",
    art: "艺术品拍卖和转售属于正常的收藏与交易机制。合理的高价、低价或投机性价格本身均可接受。不得主要通过自我竞价、受控制账户、串通、循环交易、篡改拍卖状态或虚假交易来转移财富、伪造需求或价格历史、掩盖利用漏洞取得的价值、规避限制，或支持被禁止的现实货币交易。",
    offers: "针对艺术品的正式直接报价同样属于真实的购买谈判。完成的报价用于以双方约定的游戏内价值交换该艺术品。对于过期、被拒绝、因所有权变化失效或以其他原因失败的报价，应依据权威交易记录结算托管资金。报价金额较高本身并不能证明存在滥用。",
    begging: "求助功能专门用于玩家之间自愿提供帮助，因此即使捐赠者没有得到回报，真实的求助捐赠也可以进行。不得使用被盗用或受控制的账户、自动化工具、漏洞、复制价值或欺骗性协作来制造捐赠、规避限制或促成被禁止的现实货币交易。",
    moderation: "艺术品及求助文字可能在发布前或发布后接受自动或人工审核。审核服务暂时不可用并不意味着内容获得永久批准。CK-Labs 可以限制或删除被禁止的内容，并在适当情况下核对受影响的拍卖冻结款或交易；适用法律要求的通知、理由或救济程序仍会保留。",
    enforcement: "服务器或 API 接受某项操作，并不代表可以明知存在错误而加以利用。CK-Labs 会区分正常或一次性的意外行为、服务中断、账户被盗用与有证据支持的故意或重复滥用。纠正措施应针对直接受影响的无效状态，而不是无关的合法购买或财富。强制性消费者权利及其他不可放弃的权利不受影响。",
  },
  zh_Hans: {
    heading: "艺术品交易与求助",
    intro: "TycoonX 有意将艺术品交易和玩家互助设计为不同的游戏机制。请按照每项功能本身的游戏用途使用。",
    art: "艺术品拍卖和转售属于正常的收藏与交易机制。合理的高价、低价或投机性价格本身均可接受。不得主要通过自我竞价、受控制账户、串通、循环交易、篡改拍卖状态或虚假交易来转移财富、伪造需求或价格历史、掩盖利用漏洞取得的价值、规避限制，或支持被禁止的现实货币交易。",
    offers: "针对艺术品的正式直接报价同样属于真实的购买谈判。完成的报价用于以双方约定的游戏内价值交换该艺术品。对于过期、被拒绝、因所有权变化失效或以其他原因失败的报价，应依据权威交易记录结算托管资金。报价金额较高本身并不能证明存在滥用。",
    begging: "求助功能专门用于玩家之间自愿提供帮助，因此即使捐赠者没有得到回报，真实的求助捐赠也可以进行。不得使用被盗用或受控制的账户、自动化工具、漏洞、复制价值或欺骗性协作来制造捐赠、规避限制或促成被禁止的现实货币交易。",
    moderation: "艺术品及求助文字可能在发布前或发布后接受自动或人工审核。审核服务暂时不可用并不意味着内容获得永久批准。CK-Labs 可以限制或删除被禁止的内容，并在适当情况下核对受影响的拍卖冻结款或交易；适用法律要求的通知、理由或救济程序仍会保留。",
    enforcement: "服务器或 API 接受某项操作，并不代表可以明知存在错误而加以利用。CK-Labs 会区分正常或一次性的意外行为、服务中断、账户被盗用与有证据支持的故意或重复滥用。纠正措施应针对直接受影响的无效状态，而不是无关的合法购买或财富。强制性消费者权利及其他不可放弃的权利不受影响。",
  },
  zh_Hant: {
    heading: "藝術品交易與求助",
    intro: "TycoonX 有意將藝術品交易與玩家互助設計為不同的遊戲機制。請依照各項功能本身的遊戲用途使用。",
    art: "藝術品拍賣與轉售屬於正常的收藏及交易機制。合理的高價、低價或投機性價格本身均可接受。不得主要透過自我競價、受控制帳戶、串通、循環交易、竄改拍賣狀態或虛假交易來轉移財富、偽造需求或價格紀錄、掩飾利用漏洞取得的價值、規避限制，或支援被禁止的現實貨幣交易。",
    offers: "針對藝術品的正式直接報價同樣屬於真實的購買協商。完成的報價用於以雙方約定的遊戲內價值交換該藝術品。對於過期、被拒絕、因所有權變更而失效或以其他原因失敗的報價，應依據具權威性的交易紀錄結算託管資金。報價金額較高本身並不能證明存在濫用。",
    begging: "求助功能專門用於玩家之間自願提供協助，因此即使捐贈者沒有得到回報，真實的求助捐贈也可以進行。不得使用遭盜用或受控制的帳戶、自動化工具、漏洞、複製價值或欺騙性協作來製造捐贈、規避限制或促成被禁止的現實貨幣交易。",
    moderation: "藝術品及求助文字可能在發布前或發布後接受自動或人工審核。審核服務暫時無法使用並不代表內容獲得永久核准。CK-Labs 可以限制或移除被禁止的內容，並在適當情況下核對受影響的拍賣凍結款或交易；適用法律要求的通知、理由或救濟程序仍會保留。",
    enforcement: "伺服器或 API 接受某項操作，並不代表可以明知存在錯誤而加以利用。CK-Labs 會區分正常或一次性的意外行為、服務中斷、帳戶遭盜用與有證據支持的故意或重複濫用。糾正措施應針對直接受影響的無效狀態，而不是無關的合法購買或財富。強制性消費者權利及其他不可放棄的權利不受影響。",
  },
  ar: {
    heading: "تداول الأعمال الفنية وطلبات المساعدة",
    intro: "توفّر TycoonX بشكل مقصود آليات منفصلة لتداول الأعمال الفنية ولمساعدة اللاعبين الآخرين. يجب استخدام كل ميزة وفق غرضها الفعلي داخل اللعبة.",
    art: "المزادات وإعادة بيع الأعمال الفنية آليات حقيقية للجمع والتداول. الأسعار المشروعة المرتفعة أو المنخفضة أو المضاربية مسموحة في حد ذاتها. لا يجوز استخدام المزايدة على بيعك الخاص أو الحسابات الخاضعة لسيطرتك أو التواطؤ أو التداولات الدائرية أو التلاعب بحالة المزاد أو المعاملات الصورية أساساً لتحويل الثروة أو اصطناع الطلب أو سجل الأسعار أو إخفاء قيمة ناتجة عن استغلال ثغرة أو تجاوز القيود أو دعم تداول محظور مقابل أموال حقيقية.",
    offers: "العروض المباشرة الرسمية للأعمال الفنية هي أيضاً مفاوضات شراء حقيقية. يهدف العرض المكتمل إلى مبادلة العمل الفني بالقيمة المتفق عليها داخل اللعبة. عند انتهاء العرض أو رفضه أو فشله بسبب تغير الملكية أو لأي سبب آخر، يجب تسوية مبلغ الضمان وفق سجل المعاملة المعتمد. ارتفاع قيمة العرض وحده لا يثبت وجود إساءة استخدام.",
    begging: "طلبات المساعدة مصممة تحديداً لتمكين اللاعبين من مساعدة بعضهم طوعاً، ولذلك يُسمح بالتبرعات الحقيقية عبر هذه الميزة حتى من دون حصول المتبرع على مقابل. لا يجوز استخدام حسابات مخترقة أو خاضعة للسيطرة أو الأتمتة أو الثغرات أو القيمة المكررة أو التنسيق الخادع لاصطناع التبرعات أو تجاوز القيود أو تسهيل تداول محظور مقابل أموال حقيقية.",
    moderation: "قد تخضع الأعمال الفنية ونصوص طلبات المساعدة للمراجعة آلياً أو يدوياً قبل النشر أو بعده. تعطل المراجعة مؤقتاً لا يعني أن المحتوى حصل على موافقة دائمة. يجوز لـ CK-Labs تقييد المحتوى المحظور أو إزالته وتسوية المبالغ المحجوزة أو المعاملات المتأثرة عند الاقتضاء، مع الحفاظ على الإشعارات أو الأسباب أو وسائل الانتصاف التي يفرضها القانون حيث تنطبق.",
    enforcement: "قبول الخادم أو واجهة API لإجراء ما لا يمنح إذناً باستغلال خطأ عن علم. تميّز CK-Labs بين النشاط العادي أو العرضي لمرة واحدة والانقطاعات واختراق الحساب، وبين الأدلة على إساءة استخدام متعمدة أو متكررة. ينبغي أن تستهدف التصحيحات الحالة غير الصالحة المتأثرة مباشرة، لا المشتريات أو الثروة المشروعة غير المرتبطة بها. لا تتأثر حقوق المستهلك الإلزامية أو الحقوق الأخرى التي لا يجوز التنازل عنها.",
  },
  nl: {
    heading: "Kunsthandel en Hulpverzoeken",
    intro: "TycoonX biedt bewust afzonderlijke mechanismen voor de handel in kunstwerken en voor hulp aan andere spelers. Gebruik elke functie voor het eigenlijke doel binnen het spel.",
    art: "Kunstveilingen en doorverkoop zijn echte verzamel- en handelsmechanismen. Legitieme hoge, lage of speculatieve prijzen zijn toegestaan. Bieden op je eigen verkoop, gecontroleerde accounts, samenspanning, cirkeltransacties, gemanipuleerde veilingstatus of schijntransacties mogen niet hoofdzakelijk worden gebruikt om vermogen door te sluizen, vraag of prijsgeschiedenis te fabriceren, exploitwaarde wit te wassen, limieten te omzeilen of verboden handel voor echt geld te ondersteunen.",
    offers: "Formele directe biedingen op kunstwerken zijn eveneens echte aankooponderhandelingen. Een afgerond bod is bedoeld om het kunstwerk tegen de overeengekomen spelwaarde te ruilen. Bij verlopen, afgewezen, door gewijzigde eigendom achterhaalde of anderszins mislukte biedingen moet de geblokkeerde waarde volgens de gezaghebbende transactieregistratie worden afgestemd. Een hoog bod alleen bewijst geen misbruik.",
    begging: "Hulpverzoeken is specifiek bedoeld voor vrijwillige hulp tussen spelers. Echte donaties via deze functie zijn daarom toegestaan, ook zonder tegenprestatie. Gecompromitteerde of gecontroleerde accounts, automatisering, exploits, gedupliceerde waarde of misleidende coördinatie mogen niet worden gebruikt om donaties te fabriceren, beperkingen te omzeilen of verboden handel voor echt geld mogelijk te maken.",
    moderation: "Kunstwerken en teksten van Hulpverzoeken kunnen voor of na publicatie automatisch of handmatig worden beoordeeld. Een tijdelijke storing van moderatie betekent geen permanente goedkeuring. CK-Labs mag verboden inhoud beperken of verwijderen en waar passend betrokken veilingblokkades of transacties afstemmen, met behoud van wettelijk vereiste kennisgevingen, redenen of rechtsmiddelen waar die van toepassing zijn.",
    enforcement: "Dat de server of API een handeling accepteert, geeft geen toestemming om bewust een fout uit te buiten. CK-Labs onderscheidt normale of eenmalige onbedoelde activiteit, storingen en accountcompromittering van bewijs van bewust of herhaald misbruik. Correcties moeten rechtstreeks getroffen ongeldige staat raken, niet losstaande legitieme aankopen of vermogen. Dwingende consumentenrechten en andere rechten waarvan niet kan worden afgezien blijven onaangetast.",
  },
  sv: {
    heading: "Konsthandel och Hjälpannonser",
    intro: "TycoonX erbjuder avsiktligt separata funktioner för handel med konstverk och för att hjälpa andra spelare. Varje funktion ska användas för sitt faktiska syfte i spelet.",
    art: "Konstauktioner och vidareförsäljning är riktiga samlar- och handelsmekaniker. Legitima höga, låga eller spekulativa priser är tillåtna. Egenbud, kontrollerade konton, samverkan, cirkulära affärer, manipulerat auktionsläge eller skentransaktioner får inte främst användas för att flytta förmögenhet, skapa falsk efterfrågan eller prishistorik, dölja värde från exploits, kringgå gränser eller stödja förbjuden handel för riktiga pengar.",
    offers: "Formella direkterbjudanden på konstverk är också riktiga köpförhandlingar. Ett slutfört erbjudande är avsett att byta konstverket mot det överenskomna värdet i spelet. För erbjudanden som löpt ut, avböjts, blivit ogiltiga efter ägarbyte eller på annat sätt misslyckats ska spärrade medel stämmas av mot den auktoritativa transaktionsposten. Ett högt erbjudande i sig bevisar inte missbruk.",
    begging: "Hjälpannonser är särskilt avsedda för frivillig hjälp mellan spelare. Genuina donationer genom funktionen är därför tillåtna även utan motprestation. Kapade eller kontrollerade konton, automatisering, exploits, duplicerat värde eller vilseledande samordning får inte användas för att skapa konstgjorda donationer, kringgå begränsningar eller underlätta förbjuden handel för riktiga pengar.",
    moderation: "Konstverk och texter i Hjälpannonser kan granskas automatiskt eller manuellt före eller efter publicering. Ett tillfälligt modereringsavbrott betyder inte permanent godkännande. CK-Labs får begränsa eller ta bort förbjudet innehåll och vid behov stämma av berörda auktionsspärrar eller transaktioner, samtidigt som lagstadgade meddelanden, skäl eller rättsmedel bevaras där de gäller.",
    enforcement: "Att servern eller API:t godtar en åtgärd ger inte rätt att medvetet utnyttja ett fel. CK-Labs skiljer normal eller enstaka oavsiktlig aktivitet, avbrott och kontokapning från bevis på medvetet eller upprepat missbruk. Korrigeringar ska riktas mot direkt berört ogiltigt tillstånd och inte mot orelaterade legitima köp eller tillgångar. Tvingande konsumenträttigheter och andra rättigheter som inte kan avtalas bort påverkas inte.",
  },
  nb: {
    heading: "Kunsthandel og Hjelpeforespørsler",
    intro: "TycoonX tilbyr bevisst separate funksjoner for handel med kunstverk og for å hjelpe andre spillere. Hver funksjon skal brukes til sitt faktiske formål i spillet.",
    art: "Kunstauksjoner og videresalg er reelle samle- og handelsmekanikker. Legitimerte høye, lave eller spekulative priser er tillatt. Egenbud, kontrollerte kontoer, samarbeid om bud, sirkulære handler, manipulert auksjonstilstand eller fiktive transaksjoner skal ikke hovedsakelig brukes til å flytte formue, skape kunstig etterspørsel eller prishistorikk, skjule verdi fra exploits, omgå grenser eller støtte forbudt handel for ekte penger.",
    offers: "Formelle direkte tilbud på kunstverk er også reelle kjøpsforhandlinger. Et fullført tilbud skal bytte kunstverket mot den avtalte verdien i spillet. Ved utløpte, avslåtte, eierskapsutdaterte eller ellers mislykkede tilbud skal sperrede midler avstemmes mot den autoritative transaksjonsposten. Et høyt tilbud alene beviser ikke misbruk.",
    begging: "Hjelpeforespørsler er spesielt laget for frivillig hjelp mellom spillere. Ekte donasjoner gjennom funksjonen er derfor tillatt selv uten motytelse. Kompromitterte eller kontrollerte kontoer, automatisering, exploits, duplisert verdi eller villedende koordinering skal ikke brukes til å skape kunstige donasjoner, omgå begrensninger eller legge til rette for forbudt handel for ekte penger.",
    moderation: "Kunstverk og tekst i Hjelpeforespørsler kan vurderes automatisk eller manuelt før eller etter publisering. Et midlertidig moderasjonsavbrudd betyr ikke permanent godkjenning. CK-Labs kan begrense eller fjerne forbudt innhold og ved behov avstemme berørte auksjonssperrer eller transaksjoner, samtidig som lovpålagte varsler, begrunnelser eller klagemuligheter ivaretas der de gjelder.",
    enforcement: "At serveren eller API-et godtar en handling gir ikke tillatelse til bevisst å utnytte en feil. CK-Labs skiller normal eller enkeltstående utilsiktet aktivitet, driftsavbrudd og kontokompromittering fra bevis på bevisst eller gjentatt misbruk. Korrigeringer skal rettes mot direkte berørt ugyldig tilstand, ikke urelaterte legitime kjøp eller verdier. Ufravikelige forbrukerrettigheter og andre rettigheter som ikke kan fravikes påvirkes ikke.",
  },
  pl: {
    heading: "Handel sztuką i Prośby o pomoc",
    intro: "TycoonX celowo udostępnia oddzielne mechaniki do handlu dziełami sztuki oraz do pomagania innym graczom. Każdej funkcji należy używać zgodnie z jej rzeczywistym celem w grze.",
    art: "Aukcje i odsprzedaż dzieł sztuki są prawdziwymi mechanikami kolekcjonowania i handlu. Uczciwe ceny wysokie, niskie lub spekulacyjne są dozwolone. Samodzielne podbijanie własnej aukcji, kontrolowane konta, zmowa, transakcje kołowe, manipulowanie stanem aukcji lub fikcyjne transakcje nie mogą służyć głównie do przekazywania majątku, tworzenia sztucznego popytu lub historii cen, ukrywania wartości z exploita, obchodzenia limitów ani wspierania zakazanego handlu za prawdziwe pieniądze.",
    offers: "Formalne oferty bezpośrednie dotyczące dzieł sztuki są również prawdziwymi negocjacjami zakupu. Zakończona oferta ma służyć wymianie dzieła na uzgodnioną wartość w grze. Wygasłe, odrzucone, nieaktualne z powodu zmiany właściciela lub inaczej nieudane oferty powinny rozliczać zablokowane środki zgodnie z autorytatywnym zapisem transakcji. Sama wysoka oferta nie dowodzi nadużycia.",
    begging: "Prośby o pomoc są specjalnie przeznaczone do dobrowolnej pomocy między graczami. Dlatego prawdziwe darowizny przez tę funkcję są dozwolone nawet bez świadczenia wzajemnego. Przejęte lub kontrolowane konta, automatyzacja, exploity, zduplikowana wartość lub zwodnicza koordynacja nie mogą służyć do tworzenia sztucznych darowizn, obchodzenia ograniczeń ani ułatwiania zakazanego handlu za prawdziwe pieniądze.",
    moderation: "Dzieła sztuki i teksty Próśb o pomoc mogą być sprawdzane automatycznie lub ręcznie przed publikacją albo po niej. Tymczasowa niedostępność moderacji nie oznacza trwałego zatwierdzenia treści. CK-Labs może ograniczyć lub usunąć zabronione treści i w razie potrzeby rozliczyć powiązane blokady aukcyjne lub transakcje, zachowując wymagane prawem powiadomienia, uzasadnienia i środki odwoławcze tam, gdzie mają zastosowanie.",
    enforcement: "Przyjęcie działania przez serwer lub API nie oznacza zgody na świadome wykorzystywanie błędu. CK-Labs odróżnia zwykłą lub jednorazową przypadkową aktywność, awarie i przejęcie konta od dowodów świadomego lub powtarzającego się nadużycia. Korekty powinny dotyczyć bezpośrednio powiązanego nieprawidłowego stanu, a nie niezwiązanych legalnych zakupów lub majątku. Bezwzględnie obowiązujące prawa konsumentów i inne prawa niezbywalne pozostają bez zmian.",
  },
  th: {
    heading: "การซื้อขายงานศิลปะและคำขอความช่วยเหลือ",
    intro: "TycoonX แยกกลไกสำหรับการซื้อขายงานศิลปะออกจากกลไกสำหรับการช่วยเหลือผู้เล่นคนอื่นอย่างชัดเจน โปรดใช้แต่ละฟีเจอร์ตามวัตถุประสงค์จริงของฟีเจอร์นั้นในเกม",
    art: "การประมูลและการขายต่องานศิลปะเป็นกลไกการสะสมและซื้อขายจริง ราคาที่สูง ต่ำ หรือเป็นการเก็งกำไรโดยสุจริตสามารถทำได้ ห้ามใช้การประมูลผลงานของตนเอง บัญชีที่อยู่ภายใต้การควบคุม การฮั้ว การซื้อขายวนกัน การแก้ไขสถานะการประมูล หรือธุรกรรมปลอมเป็นหลักเพื่อโอนทรัพย์สิน สร้างอุปสงค์หรือประวัติราคาเทียม ซ่อนมูลค่าที่ได้จาก exploit หลีกเลี่ยงข้อจำกัด หรือสนับสนุนการซื้อขายด้วยเงินจริงที่ต้องห้าม",
    offers: "ข้อเสนอโดยตรงอย่างเป็นทางการสำหรับงานศิลปะก็เป็นการเจรจาซื้อจริงเช่นกัน ข้อเสนอที่เสร็จสมบูรณ์มีไว้เพื่อแลกเปลี่ยนผลงานกับมูลค่าในเกมที่ตกลงกัน หากข้อเสนอหมดอายุ ถูกปฏิเสธ ล้มเหลวเพราะเจ้าของเปลี่ยน หรือไม่สำเร็จด้วยเหตุอื่น เงินที่พักไว้ต้องได้รับการกระทบยอดตามบันทึกธุรกรรมที่เป็นแหล่งอ้างอิงหลัก ข้อเสนอที่มีมูลค่าสูงเพียงอย่างเดียวไม่ใช่หลักฐานของการละเมิด",
    begging: "คำขอความช่วยเหลือถูกออกแบบมาโดยเฉพาะเพื่อให้ผู้เล่นช่วยกันโดยสมัครใจ ดังนั้นการบริจาคจริงจึงทำได้แม้ผู้ให้จะไม่ได้รับสิ่งตอบแทน ห้ามใช้บัญชีที่ถูกยึดหรืออยู่ภายใต้การควบคุม ระบบอัตโนมัติ exploit มูลค่าที่ถูกทำซ้ำ หรือการร่วมมือแบบหลอกลวงเพื่อสร้างการบริจาคเทียม เลี่ยงข้อจำกัด หรืออำนวยความสะดวกแก่การซื้อขายด้วยเงินจริงที่ต้องห้าม",
    moderation: "งานศิลปะและข้อความในคำขอความช่วยเหลืออาจได้รับการตรวจสอบโดยระบบหรือโดยบุคคลก่อนหรือหลังเผยแพร่ ระบบตรวจสอบที่ไม่พร้อมใช้งานชั่วคราวไม่ได้หมายความว่าเนื้อหาได้รับอนุมัติถาวร CK-Labs อาจจำกัดหรือลบเนื้อหาต้องห้าม และเมื่อเหมาะสมอาจกระทบยอดเงินที่ถูกพักไว้หรือธุรกรรมที่ได้รับผลกระทบ โดยยังคงสิทธิในการแจ้งเหตุผลหรือเยียวยาตามที่กฎหมายกำหนดเมื่อมีผลบังคับใช้",
    enforcement: "การที่เซิร์ฟเวอร์หรือ API ยอมรับการกระทำไม่ได้ให้สิทธิในการใช้ประโยชน์จากข้อผิดพลาดโดยรู้อยู่แล้ว CK-Labs จะแยกกิจกรรมปกติหรือเหตุบังเอิญครั้งเดียว เหตุขัดข้อง และบัญชีถูกยึดออกจากหลักฐานของการละเมิดโดยตั้งใจหรือซ้ำ ๆ การแก้ไขควรมุ่งที่สถานะไม่ถูกต้องซึ่งได้รับผลโดยตรง ไม่ใช่การซื้อหรือทรัพย์สินที่ชอบด้วยกติกาและไม่เกี่ยวข้อง สิทธิผู้บริโภคที่บังคับใช้และสิทธิอื่นที่สละไม่ได้ยังคงเดิม",
  },
  vi: {
    heading: "Giao dịch nghệ thuật và Kêu gọi hỗ trợ",
    intro: "TycoonX chủ động tách riêng cơ chế giao dịch tác phẩm nghệ thuật và cơ chế giúp đỡ người chơi khác. Hãy sử dụng mỗi tính năng đúng với mục đích của nó trong trò chơi.",
    art: "Đấu giá và bán lại tác phẩm nghệ thuật là cơ chế sưu tầm và giao dịch thực sự. Mức giá hợp lệ cao, thấp hoặc mang tính đầu cơ đều được phép. Không được dùng tự đấu giá, tài khoản do mình kiểm soát, thông đồng, giao dịch vòng tròn, trạng thái đấu giá bị can thiệp hoặc giao dịch giả chủ yếu để chuyển tài sản, tạo nhu cầu hay lịch sử giá giả, che giấu giá trị từ exploit, né giới hạn hoặc hỗ trợ giao dịch tiền thật bị cấm.",
    offers: "Đề nghị trực tiếp chính thức đối với tác phẩm nghệ thuật cũng là thương lượng mua bán thực sự. Một đề nghị hoàn tất nhằm đổi tác phẩm lấy giá trị trong game đã thỏa thuận. Đề nghị hết hạn, bị từ chối, không còn hợp lệ do đổi chủ hoặc thất bại vì lý do khác phải được đối soát tiền ký quỹ theo hồ sơ giao dịch có thẩm quyền. Chỉ riêng một đề nghị có giá cao không chứng minh có lạm dụng.",
    begging: "Kêu gọi hỗ trợ được thiết kế riêng để người chơi tự nguyện giúp nhau. Vì vậy, khoản hỗ trợ chân thực được phép ngay cả khi người cho không nhận lại lợi ích nào. Không được dùng tài khoản bị xâm nhập hoặc do mình kiểm soát, tự động hóa, exploit, giá trị bị nhân bản hoặc phối hợp gian dối để tạo hỗ trợ giả, né hạn chế hoặc tạo điều kiện cho giao dịch tiền thật bị cấm.",
    moderation: "Tác phẩm nghệ thuật và nội dung Kêu gọi hỗ trợ có thể được kiểm duyệt tự động hoặc thủ công trước hoặc sau khi đăng. Hệ thống kiểm duyệt tạm thời không hoạt động không có nghĩa nội dung đã được phê duyệt vĩnh viễn. CK-Labs có thể hạn chế hoặc gỡ nội dung bị cấm và khi phù hợp sẽ đối soát khoản giữ trong đấu giá hoặc giao dịch bị ảnh hưởng, đồng thời bảo đảm thông báo, lý do hoặc biện pháp khiếu nại bắt buộc theo pháp luật nếu áp dụng.",
    enforcement: "Việc máy chủ hoặc API chấp nhận một thao tác không cho phép cố ý khai thác lỗi. CK-Labs phân biệt hoạt động bình thường hoặc sự cố vô ý một lần, gián đoạn dịch vụ và tài khoản bị xâm nhập với bằng chứng về lạm dụng có chủ ý hoặc lặp lại. Việc điều chỉnh phải nhắm vào trạng thái không hợp lệ bị ảnh hưởng trực tiếp, không phải giao dịch mua hoặc tài sản hợp lệ không liên quan. Các quyền bắt buộc của người tiêu dùng và quyền không thể từ bỏ khác không bị ảnh hưởng.",
  },
  uk: {
    heading: "Торгівля мистецтвом і Прохання про допомогу",
    intro: "У TycoonX навмисно передбачені окремі механіки для торгівлі творами мистецтва та для допомоги іншим гравцям. Кожну функцію слід використовувати відповідно до її фактичного ігрового призначення.",
    art: "Аукціони та перепродаж творів мистецтва є справжніми механіками колекціонування й торгівлі. Добросовісні високі, низькі або спекулятивні ціни дозволені. Не можна використовувати ставки на власний лот, контрольовані акаунти, змову, кругові угоди, маніпуляції станом аукціону або фіктивні операції переважно для переказу багатства, створення штучного попиту чи історії цін, приховування вартості з експлойтів, обходу обмежень або підтримки забороненої торгівлі за реальні гроші.",
    offers: "Офіційні прямі пропозиції щодо творів мистецтва також є справжніми переговорами про купівлю. Завершена пропозиція призначена для обміну твору на погоджену внутрішньоігрову вартість. Якщо пропозиція спливла, відхилена, стала недійсною через зміну власника або не відбулася з іншої причини, кошти в ескроу мають бути звірені з авторитетним записом транзакції. Висока сума сама по собі не доводить зловживання.",
    begging: "Прохання про допомогу спеціально створені для добровільної підтримки між гравцями. Тому справжні пожертви через цю функцію дозволені навіть без зустрічної вигоди для того, хто допомагає. Не можна використовувати скомпрометовані чи контрольовані акаунти, автоматизацію, експлойти, дубльовану вартість або оманливу координацію для створення штучних пожертв, обходу обмежень або сприяння забороненій торгівлі за реальні гроші.",
    moderation: "Твори мистецтва та тексти Прохань про допомогу можуть перевірятися автоматично або вручну до чи після публікації. Тимчасова недоступність модерації не означає постійного схвалення контенту. CK-Labs може обмежувати або видаляти заборонений контент і за потреби звіряти пов'язані утримання чи транзакції, зберігаючи передбачені законом повідомлення, обґрунтування та засоби оскарження там, де вони застосовуються.",
    enforcement: "Прийняття дії сервером або API не надає дозволу свідомо використовувати помилку. CK-Labs відрізняє звичайну або одноразову випадкову активність, збої та компрометацію акаунта від доказів свідомого чи повторного зловживання. Виправлення мають стосуватися безпосередньо пов'язаного недійсного стану, а не не пов'язаних із ним законних покупок чи майна. Обов'язкові права споживачів та інші права, від яких не можна відмовитися, не обмежуються.",
  },
  hi: {
    heading: "कला व्यापार और सहायता अनुरोध",
    intro: "TycoonX जानबूझकर कला के व्यापार और दूसरे खिलाड़ियों की सहायता के लिए अलग-अलग गेम मैकेनिक्स देता है। हर फीचर का उपयोग उसके वास्तविक गेमप्ले उद्देश्य के अनुसार करें।",
    art: "कला नीलामी और पुनर्विक्रय वास्तविक संग्रह और व्यापार मैकेनिक्स हैं। वैध ऊंची, नीची या सट्टात्मक कीमतें अपने आप में स्वीकार्य हैं। अपनी ही बिक्री पर बोली, नियंत्रित खातों, मिलीभगत, गोल-गोल लेनदेन, नीलामी स्थिति में हेरफेर या नकली लेनदेन का मुख्य रूप से धन पहुंचाने, मांग या मूल्य इतिहास गढ़ने, exploit से मिले मूल्य को छिपाने, सीमाएं पार करने या निषिद्ध वास्तविक-पैसा व्यापार को सहारा देने के लिए उपयोग नहीं किया जा सकता।",
    offers: "कला के लिए औपचारिक सीधे ऑफर भी वास्तविक खरीद बातचीत हैं। पूरा हुआ ऑफर कलाकृति को सहमत इन-गेम मूल्य के बदले बदलने के लिए है। समाप्त, अस्वीकार, स्वामित्व बदलने के कारण अमान्य या अन्य तरह से विफल ऑफर में एस्क्रो को प्रामाणिक लेनदेन रिकॉर्ड के अनुसार समायोजित किया जाना चाहिए। केवल बड़ी राशि का ऑफर दुरुपयोग साबित नहीं करता।",
    begging: "सहायता अनुरोध खास तौर पर खिलाड़ियों को स्वेच्छा से एक-दूसरे की मदद करने के लिए बनाया गया है। इसलिए वास्तविक दान स्वीकार्य हैं, भले ही देने वाले को बदले में कुछ न मिले। हैक किए गए या नियंत्रित खातों, ऑटोमेशन, exploits, डुप्लीकेट मूल्य या भ्रामक समन्वय का उपयोग नकली दान बनाने, प्रतिबंधों से बचने या निषिद्ध वास्तविक-पैसा व्यापार को आसान बनाने के लिए नहीं किया जा सकता।",
    moderation: "कलाकृति और सहायता अनुरोध का टेक्स्ट प्रकाशित होने से पहले या बाद में स्वचालित या मैन्युअल समीक्षा से गुजर सकता है। मॉडरेशन का अस्थायी रूप से उपलब्ध न होना स्थायी मंजूरी नहीं है। CK-Labs निषिद्ध सामग्री को सीमित या हटा सकता है और उचित होने पर प्रभावित नीलामी होल्ड या लेनदेन का समायोजन कर सकता है, जबकि लागू होने पर कानून द्वारा आवश्यक सूचना, कारण या उपचार के अधिकार बने रहते हैं।",
    enforcement: "सर्वर या API द्वारा किसी कार्रवाई को स्वीकार कर लेना किसी बग का जानबूझकर फायदा उठाने की अनुमति नहीं देता। CK-Labs सामान्य या एक बार की अनजानी गतिविधि, आउटेज और खाता समझौते को जानबूझकर या बार-बार किए गए दुरुपयोग के सबूत से अलग देखता है। सुधार सीधे प्रभावित अमान्य स्थिति पर होना चाहिए, असंबंधित वैध खरीद या संपत्ति पर नहीं। अनिवार्य उपभोक्ता अधिकार और अन्य गैर-त्याज्य अधिकार अप्रभावित रहते हैं।",
  },
  id: {
    heading: "Perdagangan karya seni dan Permintaan bantuan",
    intro: "TycoonX sengaja menyediakan mekanisme terpisah untuk memperdagangkan karya seni dan membantu pemain lain. Gunakan setiap fitur sesuai tujuan sebenarnya di dalam permainan.",
    art: "Lelang dan penjualan kembali karya seni adalah mekanisme koleksi dan perdagangan yang nyata. Harga sah yang tinggi, rendah, atau bersifat spekulatif diperbolehkan. Jangan gunakan penawaran pada penjualan sendiri, akun yang dikendalikan, kolusi, transaksi berputar, manipulasi status lelang, atau transaksi palsu terutama untuk menyalurkan kekayaan, membuat permintaan atau riwayat harga palsu, menyamarkan nilai dari exploit, menghindari batas, atau mendukung perdagangan uang nyata yang dilarang.",
    offers: "Penawaran langsung resmi untuk karya seni juga merupakan negosiasi pembelian yang nyata. Penawaran yang selesai dimaksudkan untuk menukar karya dengan nilai dalam game yang disepakati. Penawaran yang kedaluwarsa, ditolak, gagal karena kepemilikan berubah, atau gagal karena alasan lain harus merekonsiliasi dana escrow berdasarkan catatan transaksi yang berwenang. Nilai penawaran yang tinggi saja tidak membuktikan penyalahgunaan.",
    begging: "Permintaan bantuan dirancang khusus agar pemain dapat saling membantu secara sukarela. Karena itu, donasi yang sungguh-sungguh diperbolehkan meskipun pemberi tidak memperoleh imbalan. Jangan gunakan akun yang diretas atau dikendalikan, otomatisasi, exploit, nilai duplikat, atau koordinasi menyesatkan untuk membuat donasi palsu, menghindari pembatasan, atau memfasilitasi perdagangan uang nyata yang dilarang.",
    moderation: "Karya seni dan teks Permintaan bantuan dapat ditinjau secara otomatis atau manual sebelum atau setelah dipublikasikan. Gangguan moderasi sementara tidak berarti konten disetujui secara permanen. CK-Labs dapat membatasi atau menghapus konten yang dilarang dan, bila sesuai, merekonsiliasi dana lelang yang ditahan atau transaksi terdampak, sambil mempertahankan pemberitahuan, alasan, atau upaya hukum yang diwajibkan apabila berlaku.",
    enforcement: "Penerimaan tindakan oleh server atau API tidak mengizinkan eksploitasi bug secara sadar. CK-Labs membedakan aktivitas normal atau kejadian tidak sengaja satu kali, gangguan layanan, dan kompromi akun dari bukti penyalahgunaan yang disengaja atau berulang. Koreksi harus menyasar status tidak sah yang terdampak langsung, bukan pembelian atau kekayaan sah yang tidak terkait. Hak konsumen yang wajib dan hak lain yang tidak dapat dikesampingkan tetap berlaku.",
  },
};

function localeFromPath(pathname: string): string | null {
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] !== "tycoonx-legal" || !parts[1]) return null;
  return parts[1];
}

export default function ArtBeggingRuleNotice() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const isCanonicalTerms = pathname === "/tyconx-terms-of-service";
  const isLocalizedTerms = Boolean(locale) && pathname.endsWith("/terms");

  if (!isCanonicalTerms && !isLocalizedTerms) return null;

  const copy = locale ? localized[locale] ?? englishCopy : englishCopy;
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <section
      className="mx-auto mt-8 w-full max-w-4xl rounded-xl border border-slate-200 bg-slate-50 p-5 text-slate-800 shadow-sm"
      dir={dir}
    >
      <h2 className="mb-3 text-xl font-semibold">{copy.heading}</h2>
      <p className="mb-3">{copy.intro}</p>
      <p className="mb-3">{copy.art}</p>
      <p className="mb-3">{copy.offers}</p>
      <p className="mb-3">{copy.begging}</p>
      <p className="mb-3">{copy.moderation}</p>
      <p>{copy.enforcement}</p>
    </section>
  );
}
