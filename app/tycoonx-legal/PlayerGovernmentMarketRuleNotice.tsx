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
    title: `Player markets, automatic buying and Government tenders`,
    paragraphs: [
      `TycoonX player markets, built-in shop auto-fill, TycoonX-operated automatic market purchases, Government direct sales and Government tenders are genuine gameplay systems. A legitimate low or high price, repeated sale, automatic transaction, large delivery, competitive bid, tender win or failed tender is not automatically cheating. Current prices, demand, quality effects, shipping, auto-fill rules, bid ceilings, deadlines, rewards and penalties are economy rules that may be rebalanced prospectively.`,
      `Do not use controlled accounts, collusion, circular trades, impossible or negative prices, modified clients, unauthorized destination slots, replay or race conditions, stale-state tricks or other bugs mainly to create or funnel value, manipulate supply or tender results, duplicate settlement, evade feature limits or facilitate prohibited real-money trading. A server-accepted request does not make an obviously manipulated state legitimate merely because an authorization, validation or configuration defect allowed it. Built-in TycoonX automation is not the same as an unauthorized external bot or script.`,
      `Client previews and anomaly flags can be stale or incomplete. Completed in-game transactions should be reconciled from reliable server settlement records, while genuine backend defects, outages, accidental one-off actions and account compromise must be distinguished from knowing or repeated exploitation. Corrections should target directly affected invalid state rather than unrelated legitimate purchases or wealth, and mandatory consumer and other non-waivable rights remain unaffected.`,
    ],
  },
  tr: {
    label: `Oynanış açıklaması · 10 Eylül 2026`,
    title: `Oyuncu pazarları, otomatik alım ve Devlet ihaleleri`,
    paragraphs: [
      `TycoonX oyuncu pazarları, oyunun kendi mağaza otomatik doldurma özelliği, TycoonX tarafından yürütülen otomatik pazar alımları, Devlete doğrudan satış ve Devlet ihaleleri gerçek oyun sistemleridir. Meşru düşük veya yüksek fiyat, tekrarlanan satış, otomatik işlem, büyük teslimat, rekabetçi teklif, ihale kazanmak ya da ihaleyi tamamlayamamak tek başına hile sayılmaz. Güncel fiyatlar, talep, kalite etkileri, taşıma, otomatik doldurma kuralları, teklif tavanları, süreler, ödüller ve cezalar geleceğe dönük olarak yeniden dengelenebilir.`,
      `Kontrol ettiğiniz hesapları, anlaşmalı işlemleri, döngüsel ticareti, imkânsız veya negatif fiyatları, değiştirilmiş istemcileri, size ait olmayan hedef mağaza yuvalarını, tekrar/race açıklarını, eski durum hilelerini ya da başka hataları esas olarak değer üretmek veya aktarmak, arzı ya da ihale sonucunu manipüle etmek, işlemi çoğaltmak, özellik sınırlarını aşmak veya yasak gerçek para ticaretini kolaylaştırmak için kullanmayın. Yetkilendirme, doğrulama veya yapılandırma hatası nedeniyle sunucunun bir isteği kabul etmesi, açıkça manipüle edilmiş durumu meşru hale getirmez. TycoonX'in kendi otomasyonu, yetkisiz harici bot veya script ile aynı şey değildir.`,
      `İstemci önizlemeleri ve anomali işaretleri eski veya eksik olabilir. Tamamlanan oyun içi işlemler güvenilir sunucu uzlaştırma kayıtlarına göre değerlendirilmelidir; gerçek sunucu hataları, kesintiler, tek seferlik kazara işlemler ve hesap ele geçirilmesi bilinçli ya da tekrarlanan sömürüden ayrılmalıdır. Düzeltmeler ilgisiz meşru satın alımları veya serveti değil, doğrudan etkilenen geçersiz durumu hedeflemeli; zorunlu tüketici hakları ve diğer vazgeçilemez haklar korunmalıdır.`,
    ],
  },
  de: {
    label: `Klarstellung zum Gameplay · 10. September 2026`,
    title: `Spielermärkte, automatische Käufe und staatliche Ausschreibungen`,
    paragraphs: [
      `Die Spielermärkte von TycoonX, die integrierte automatische Ladenbefüllung, von TycoonX ausgeführte automatische Marktkäufe, Direktverkäufe an den Staat und staatliche Ausschreibungen sind echte Spielsysteme. Ein legitimer niedriger oder hoher Preis, wiederholte Verkäufe, automatische Transaktionen, große Lieferungen, wettbewerbliche Gebote, gewonnene oder nicht erfüllte Ausschreibungen sind nicht automatisch Betrug. Aktuelle Preise, Nachfrage, Qualitätseffekte, Transportkosten, Auto-Fill-Regeln, Gebotsobergrenzen, Fristen, Belohnungen und Strafen können für die Zukunft neu ausbalanciert werden.`,
      `Kontrollierte Konten, Absprachen, Kreisgeschäfte, unmögliche oder negative Preise, manipulierte Clients, fremde Ziel-Slots, Replay- oder Race-Fehler, veraltete Zustände oder andere Bugs dürfen nicht hauptsächlich dazu genutzt werden, Werte zu erzeugen oder zu verschieben, Angebot oder Ausschreibungsergebnisse zu manipulieren, Abrechnungen zu duplizieren, Funktionsgrenzen zu umgehen oder verbotenen Echtgeldhandel zu ermöglichen. Dass der Server eine Anfrage wegen eines Berechtigungs-, Prüf- oder Konfigurationsfehlers annimmt, macht einen offensichtlich manipulierten Zustand nicht legitim. In TycoonX eingebaute Automatisierung ist nicht dasselbe wie ein unzulässiger externer Bot oder ein Script.`,
      `Client-Anzeigen und Anomaliehinweise können veraltet oder unvollständig sein. Abgeschlossene Spieltransaktionen sollen anhand verlässlicher Server-Abrechnungsdaten abgeglichen werden; echte Backendfehler, Ausfälle, versehentliche Einzelfälle und Kontokompromittierungen sind von wissentlich wiederholter Ausnutzung zu unterscheiden. Korrekturen sollen unmittelbar betroffene ungültige Zustände treffen, nicht davon unabhängige legitime Käufe oder Vermögenswerte. Zwingende Verbraucherrechte und andere unabdingbare Rechte bleiben unberührt.`,
    ],
  },
  es: {
    label: `Aclaración sobre el juego · 10 de septiembre de 2026`,
    title: `Mercados entre jugadores, compras automáticas y licitaciones del Gobierno`,
    paragraphs: [
      `Los mercados entre jugadores de TycoonX, el autoabastecimiento integrado de las tiendas, las compras automáticas realizadas por TycoonX, las ventas directas al Gobierno y las licitaciones del Gobierno son sistemas reales del juego. Un precio legítimo alto o bajo, una venta repetida, una operación automática, una entrega grande, una puja competitiva, ganar una licitación o no cumplirla no constituyen trampa por sí solos. Los precios, la demanda, los efectos de calidad, el transporte, las reglas de autoabastecimiento, los topes de puja, los plazos, las recompensas y las penalizaciones actuales pueden reajustarse de cara al futuro.`,
      `No utilices cuentas controladas, pactos entre jugadores, operaciones circulares, precios imposibles o negativos, clientes modificados, ranuras de destino ajenas, fallos de repetición o carrera, estados desactualizados u otros errores principalmente para crear o canalizar valor, manipular la oferta o una licitación, duplicar una liquidación, eludir límites o facilitar comercio prohibido por dinero real. Que el servidor acepte una solicitud debido a un fallo de autorización, validación o configuración no convierte en legítimo un estado claramente manipulado. La automatización integrada de TycoonX no equivale a utilizar un bot o script externo no autorizado.`,
      `Las previsiones del cliente y las señales de anomalía pueden estar desactualizadas o incompletas. Las operaciones completadas deben conciliarse con registros fiables de liquidación del servidor, distinguiendo los fallos reales del backend, las interrupciones, los actos accidentales aislados y las cuentas comprometidas de la explotación consciente o reiterada. Las correcciones deben limitarse al estado inválido directamente afectado y no a compras o patrimonio legítimos no relacionados. Los derechos imperativos del consumidor y demás derechos irrenunciables permanecen intactos.`,
    ],
  },
  es_MX: {
    label: `Aclaración de jugabilidad · 10 de septiembre de 2026`,
    title: `Mercados de jugadores, compras automáticas y licitaciones del Gobierno`,
    paragraphs: [
      `Los mercados entre jugadores de TycoonX, el autoabastecimiento integrado de las tiendas, las compras automáticas hechas por TycoonX, las ventas directas al Gobierno y las licitaciones del Gobierno son sistemas reales del juego. Un precio legítimo alto o bajo, ventas repetidas, una operación automática, una entrega grande, una oferta competitiva, ganar una licitación o no completarla no son automáticamente trampa. Los precios, la demanda, los efectos de calidad, el envío, las reglas de autoabastecimiento, los topes de oferta, los plazos, las recompensas y las penalizaciones actuales pueden ajustarse hacia adelante para mantener el balance.`,
      `No uses cuentas bajo tu control, acuerdos entre jugadores, operaciones circulares, precios imposibles o negativos, clientes modificados, espacios de tienda de otra persona, fallas de repetición o carrera, datos desactualizados u otros errores principalmente para crear o transferir valor, manipular la oferta o una licitación, duplicar una liquidación, saltarte límites o facilitar comercio prohibido con dinero real. Que el servidor acepte una solicitud por una falla de autorización, validación o configuración no vuelve legítimo un estado claramente manipulado. La automatización incluida en TycoonX no es lo mismo que usar un bot o script externo no autorizado.`,
      `Las vistas previas del cliente y las alertas de anomalías pueden estar desactualizadas o incompletas. Las operaciones completadas deben conciliarse con registros confiables de liquidación del servidor, distinguiendo errores reales del backend, interrupciones, acciones accidentales aisladas y cuentas comprometidas de la explotación consciente o repetida. Las correcciones deben limitarse al estado inválido directamente afectado, no a compras o patrimonio legítimos que no tengan relación. Los derechos obligatorios del consumidor y demás derechos irrenunciables siguen intactos.`,
    ],
  },
  fr: {
    label: `Précision sur le gameplay · 10 septembre 2026`,
    title: `Marchés entre joueurs, achats automatiques et appels d’offres publics`,
    paragraphs: [
      `Les marchés entre joueurs de TycoonX, le réapprovisionnement automatique intégré des boutiques, les achats automatiques effectués par TycoonX, les ventes directes au Gouvernement et les appels d’offres du Gouvernement sont de véritables systèmes de jeu. Un prix légitime élevé ou faible, des ventes répétées, une transaction automatique, une livraison importante, une offre compétitive, un appel d’offres remporté ou non exécuté ne constituent pas automatiquement de la triche. Les prix, la demande, les effets de qualité, le transport, les règles d’auto-remplissage, les plafonds d’offre, les délais, les récompenses et les pénalités actuels peuvent être rééquilibrés pour l’avenir.`,
      `N’utilisez pas de comptes contrôlés, d’ententes, d’opérations circulaires, de prix impossibles ou négatifs, de clients modifiés, d’emplacements de destination appartenant à autrui, de failles de répétition ou de concurrence, d’états obsolètes ou d’autres bugs principalement pour créer ou transférer de la valeur, manipuler l’offre ou une adjudication, dupliquer un règlement, contourner des limites ou faciliter un commerce interdit contre de l’argent réel. Le fait qu’un serveur accepte une requête à cause d’un défaut d’autorisation, de validation ou de configuration ne rend pas légitime un état manifestement manipulé. L’automatisation intégrée de TycoonX n’est pas assimilable à un bot ou script externe non autorisé.`,
      `Les aperçus du client et les indicateurs d’anomalie peuvent être obsolètes ou incomplets. Les transactions terminées doivent être rapprochées des données fiables de règlement du serveur, tout en distinguant les véritables défauts du backend, les pannes, les actions accidentelles isolées et les comptes compromis de l’exploitation consciente ou répétée. Les corrections doivent viser l’état invalide directement concerné et non des achats ou avoirs légitimes sans rapport. Les droits impératifs des consommateurs et les autres droits auxquels il ne peut être renoncé restent inchangés.`,
    ],
  },
  fr_CA: {
    label: `Précision sur le jeu · 10 septembre 2026`,
    title: `Marchés entre joueurs, achats automatiques et appels d’offres du Gouvernement`,
    paragraphs: [
      `Les marchés entre joueurs de TycoonX, le réapprovisionnement automatique intégré des boutiques, les achats automatiques effectués par TycoonX, les ventes directes au Gouvernement et les appels d’offres du Gouvernement sont de véritables fonctions du jeu. Un prix légitime élevé ou bas, des ventes répétées, une transaction automatique, une grosse livraison, une offre concurrentielle, un appel d’offres remporté ou non rempli ne sont pas automatiquement de la triche. Les prix, la demande, les effets de qualité, les frais de livraison, les règles de réapprovisionnement, les plafonds d’offre, les échéances, les récompenses et les pénalités actuels peuvent être rééquilibrés pour l’avenir.`,
      `N’utilisez pas de comptes sous votre contrôle, d’ententes, de transactions circulaires, de prix impossibles ou négatifs, de clients modifiés, d’emplacements de boutique appartenant à quelqu’un d’autre, de bogues de répétition ou de concurrence, de données périmées ou d’autres failles principalement pour créer ou transférer de la valeur, manipuler l’offre ou un appel d’offres, dupliquer un règlement, contourner des limites ou faciliter un commerce interdit contre de l’argent réel. Une requête acceptée par le serveur à cause d’un défaut d’autorisation, de validation ou de configuration ne rend pas légitime un état manifestement manipulé. L’automatisation intégrée à TycoonX n’est pas la même chose qu’un bot ou script externe non autorisé.`,
      `Les aperçus du client et les signaux d’anomalie peuvent être périmés ou incomplets. Les transactions terminées doivent être rapprochées des registres fiables du serveur, tout en distinguant les vrais problèmes du backend, les pannes, les actions accidentelles isolées et les comptes compromis de l’exploitation consciente ou répétée. Les corrections doivent viser l’état invalide directement touché, et non des achats ou avoirs légitimes sans rapport. Les droits obligatoires des consommateurs et les autres droits auxquels on ne peut renoncer demeurent protégés.`,
    ],
  },
  it: {
    label: `Chiarimento sul gameplay · 10 settembre 2026`,
    title: `Mercati tra giocatori, acquisti automatici e gare del Governo`,
    paragraphs: [
      `I mercati tra giocatori di TycoonX, il rifornimento automatico integrato dei negozi, gli acquisti automatici eseguiti da TycoonX, le vendite dirette al Governo e le gare del Governo sono veri sistemi di gioco. Un prezzo legittimo alto o basso, vendite ripetute, una transazione automatica, una grande consegna, un’offerta competitiva, una gara vinta o non completata non costituiscono automaticamente un imbroglio. Prezzi, domanda, effetti della qualità, trasporto, regole di rifornimento automatico, limiti d’offerta, scadenze, premi e penalità attuali possono essere riequilibrati per il futuro.`,
      `Non usare account controllati, accordi collusivi, operazioni circolari, prezzi impossibili o negativi, client modificati, slot di destinazione altrui, errori di replay o race, dati obsoleti o altri bug principalmente per creare o trasferire valore, manipolare l’offerta o una gara, duplicare un regolamento, aggirare limiti o facilitare commercio vietato con denaro reale. Il fatto che il server accetti una richiesta a causa di un difetto di autorizzazione, convalida o configurazione non rende legittimo uno stato chiaramente manipolato. L’automazione integrata di TycoonX non equivale a un bot o script esterno non autorizzato.`,
      `Le anteprime del client e i segnali di anomalia possono essere obsoleti o incompleti. Le transazioni completate devono essere riconciliate con registri affidabili del server, distinguendo veri difetti del backend, interruzioni, azioni accidentali isolate e account compromessi dallo sfruttamento consapevole o ripetuto. Le correzioni devono colpire lo stato non valido direttamente interessato e non acquisti o patrimonio legittimi non correlati. I diritti inderogabili dei consumatori e gli altri diritti non rinunciabili restano invariati.`,
    ],
  },
  pt: {
    label: `Clarificação de jogabilidade · 10 de setembro de 2026`,
    title: `Mercados de jogadores, compras automáticas e concursos do Governo`,
    paragraphs: [
      `Os mercados entre jogadores do TycoonX, o reabastecimento automático integrado das lojas, as compras automáticas efetuadas pelo TycoonX, as vendas diretas ao Governo e os concursos do Governo são sistemas reais do jogo. Um preço legítimo alto ou baixo, vendas repetidas, uma transação automática, uma grande entrega, uma proposta competitiva, ganhar um concurso ou não o cumprir não constitui automaticamente batota. Os preços, a procura, os efeitos de qualidade, o transporte, as regras de reabastecimento automático, os limites de proposta, os prazos, as recompensas e as penalizações atuais podem ser reequilibrados para o futuro.`,
      `Não uses contas controladas, conluio, transações circulares, preços impossíveis ou negativos, clientes modificados, espaços de destino de outros jogadores, falhas de repetição ou corrida, estados desatualizados ou outros erros principalmente para criar ou canalizar valor, manipular a oferta ou um concurso, duplicar liquidações, contornar limites ou facilitar comércio proibido por dinheiro real. Uma resposta aceite pelo servidor devido a uma falha de autorização, validação ou configuração não torna legítimo um estado manifestamente manipulado. A automatização integrada do TycoonX não é o mesmo que um bot ou script externo não autorizado.`,
      `As previsões do cliente e os sinais de anomalia podem estar desatualizados ou incompletos. As transações concluídas devem ser reconciliadas com registos fiáveis de liquidação do servidor, distinguindo falhas reais do backend, interrupções, ações acidentais isoladas e contas comprometidas de exploração consciente ou repetida. As correções devem limitar-se ao estado inválido diretamente afetado e não a compras ou património legítimos sem relação. Os direitos imperativos dos consumidores e outros direitos irrenunciáveis permanecem intactos.`,
    ],
  },
  pt_BR: {
    label: `Esclarecimento de jogabilidade · 10 de setembro de 2026`,
    title: `Mercados de jogadores, compras automáticas e licitações do Governo`,
    paragraphs: [
      `Os mercados entre jogadores do TycoonX, o reabastecimento automático das lojas, as compras automáticas feitas pelo TycoonX, as vendas diretas ao Governo e as licitações do Governo são sistemas reais do jogo. Um preço legítimo alto ou baixo, vendas repetidas, uma transação automática, uma entrega grande, um lance competitivo, vencer uma licitação ou não concluí-la não significa automaticamente trapaça. Preços, demanda, efeitos de qualidade, frete, regras de reabastecimento automático, tetos de lance, prazos, recompensas e penalidades atuais podem ser rebalanceados para o futuro.`,
      `Não use contas sob seu controle, conluio, transações circulares, preços impossíveis ou negativos, clientes modificados, espaços de loja de outra pessoa, falhas de repetição ou corrida, dados desatualizados ou outros bugs principalmente para criar ou transferir valor, manipular a oferta ou uma licitação, duplicar liquidação, contornar limites ou facilitar comércio proibido com dinheiro real. O servidor aceitar uma solicitação por falha de autorização, validação ou configuração não torna legítimo um estado claramente manipulado. A automação integrada do TycoonX não é a mesma coisa que um bot ou script externo não autorizado.`,
      `As prévias do cliente e os sinais de anomalia podem estar desatualizados ou incompletos. Transações concluídas devem ser conciliadas com registros confiáveis do servidor, distinguindo falhas reais do backend, interrupções, ações acidentais isoladas e contas comprometidas de exploração consciente ou repetida. As correções devem atingir o estado inválido diretamente afetado, e não compras ou patrimônio legítimos sem relação. Direitos obrigatórios do consumidor e outros direitos irrenunciáveis permanecem protegidos.`,
    ],
  },
  ru: {
    label: `Пояснение правил игры · 10 сентября 2026 г.`,
    title: `Рынки игроков, автоматические покупки и государственные тендеры`,
    paragraphs: [
      `Рынки между игроками TycoonX, встроенное автопополнение магазинов, автоматические рыночные покупки, выполняемые TycoonX, прямые продажи государству и государственные тендеры являются полноценными игровыми системами. Законная высокая или низкая цена, повторные продажи, автоматическая сделка, крупная поставка, конкурентная ставка, победа в тендере или его невыполнение сами по себе не означают мошенничество. Текущие цены, спрос, влияние качества, доставка, правила автопополнения, пределы ставок, сроки, награды и штрафы могут в дальнейшем изменяться для баланса.`,
      `Нельзя использовать подконтрольные аккаунты, сговор, круговые сделки, невозможные или отрицательные цены, модифицированные клиенты, чужие торговые слоты, ошибки повторного выполнения или гонки, устаревшее состояние либо иные баги главным образом для создания или перевода ценности, манипулирования предложением или тендером, дублирования расчётов, обхода ограничений или запрещённой торговли за реальные деньги. То, что сервер принял запрос из-за ошибки авторизации, проверки или конфигурации, не делает явно манипулированное состояние законным. Встроенная автоматизация TycoonX не равна неразрешённому внешнему боту или скрипту.`,
      `Предварительные данные клиента и признаки аномалий могут быть устаревшими или неполными. Завершённые игровые сделки следует сверять с надёжными серверными записями расчётов, отличая реальные ошибки backend, сбои, единичные случайные действия и взлом аккаунта от сознательной или повторной эксплуатации. Исправления должны затрагивать непосредственно связанное недействительное состояние, а не посторонние законные покупки или имущество. Обязательные права потребителей и иные неотчуждаемые права сохраняются.`,
    ],
  },
  ja: {
    label: `ゲームプレイ規則の説明 · 2026年9月10日`,
    title: `プレイヤー市場、自動購入、政府入札`,
    paragraphs: [
      `TycoonXのプレイヤー間市場、ゲーム内の店舗自動補充、TycoonXが行う自動市場購入、政府への直接販売、政府入札は、いずれも正規のゲームシステムです。正当な高値・安値、繰り返しの販売、自動取引、大口納品、競争的な入札、落札、または入札後の不履行だけで自動的に不正とはみなしません。現在の価格、需要、品質効果、輸送費、自動補充ルール、入札上限、期限、報酬、ペナルティは、将来のゲームバランス調整により変更されることがあります。`,
      `管理下の別アカウント、談合、循環取引、不可能またはマイナスの価格、改変クライアント、他人の店舗スロット、リプレイや競合状態、古い状態その他の不具合を、主として価値の生成・移転、供給や入札結果の操作、決済の重複、機能制限の回避、禁止されたリアルマネー取引のために利用してはいけません。認可・検証・設定の不具合でサーバーが要求を受理しても、明らかに操作された状態が正当になるわけではありません。TycoonXに組み込まれた自動化は、無許可の外部ボットやスクリプトとは別物です。`,
      `クライアント上の予測値や異常フラグは古い場合や不完全な場合があります。完了したゲーム内取引は信頼できるサーバーの決済記録で照合し、実際のバックエンド不具合、障害、単発の偶発操作、アカウント侵害と、意図的または反復的な悪用を区別します。修正は直接影響を受けた無効な状態を対象とし、無関係な正当な購入や資産まで自動的に対象にしてはなりません。強行的な消費者の権利その他放棄できない権利は影響を受けません。`,
    ],
  },
  ko: {
    label: `게임플레이 규칙 안내 · 2026년 9월 10일`,
    title: `플레이어 시장, 자동 구매 및 정부 입찰`,
    paragraphs: [
      `TycoonX의 플레이어 시장, 게임 내 상점 자동 채우기, TycoonX가 수행하는 자동 시장 구매, 정부 직접 판매 및 정부 입찰은 정상적인 게임 시스템입니다. 정당한 높은 가격이나 낮은 가격, 반복 판매, 자동 거래, 대량 납품, 경쟁 입찰, 낙찰 또는 입찰 미이행만으로 자동으로 부정행위가 되는 것은 아닙니다. 현재 가격, 수요, 품질 효과, 운송비, 자동 채우기 규칙, 입찰 상한, 기한, 보상 및 패널티는 향후 게임 밸런스를 위해 조정될 수 있습니다.`,
      `관리하는 다른 계정, 담합, 순환 거래, 불가능하거나 음수인 가격, 변조된 클라이언트, 다른 사람의 상점 슬롯, 재실행·경쟁 상태 오류, 오래된 상태 또는 기타 버그를 주로 가치 생성·이전, 공급이나 입찰 결과 조작, 정산 중복, 기능 제한 회피 또는 금지된 현금 거래에 이용해서는 안 됩니다. 권한·검증·설정 결함으로 서버가 요청을 받아들였더라도 명백히 조작된 상태가 정당해지는 것은 아닙니다. TycoonX가 제공하는 내장 자동화는 허가받지 않은 외부 봇이나 스크립트와 다릅니다.`,
      `클라이언트의 예상값과 이상 징후 플래그는 오래되었거나 불완전할 수 있습니다. 완료된 게임 내 거래는 신뢰할 수 있는 서버 정산 기록에 따라 대조하고, 실제 백엔드 오류, 서비스 장애, 일회성 실수, 계정 탈취와 고의적·반복적 악용을 구분해야 합니다. 수정은 직접 영향을 받은 잘못된 상태에 한정하고 관련 없는 정상 구매나 자산을 자동으로 건드려서는 안 됩니다. 강행적인 소비자 권리와 그 밖의 포기할 수 없는 권리는 영향을 받지 않습니다.`,
    ],
  },
  zh: {
    label: `遊戲規則說明 · 2026年9月10日`,
    title: `玩家市場、自動採購與政府投標`,
    paragraphs: [
      `TycoonX 的玩家市場、內建商店自動補貨、由 TycoonX 執行的自動市場採購、向政府直接出售以及政府投標，都是正式的遊戲系統。合理的高價或低價、重複出售、自動交易、大量交付、競爭性投標、得標或未能完成標案，本身不會自動被視為作弊。現行價格、需求、品質效果、運輸費、自動補貨規則、投標上限、期限、獎勵與罰則，均可為日後的遊戲平衡而調整。`,
      `不得主要利用受你控制的帳號、串通、循環交易、不可能或負數價格、修改版客戶端、他人的商店欄位、重播或競態漏洞、過期狀態或其他錯誤，來創造或轉移價值、操縱供給或投標結果、重複結算、規避功能限制，或協助被禁止的現金交易。即使伺服器因授權、驗證或設定缺陷而接受請求，也不會因此使明顯遭操縱的狀態成為正當。TycoonX 內建的自動化功能，與未經授權的外部機器人或腳本不同。`,
      `客戶端預估與異常標記可能已過期或不完整。已完成的遊戲內交易應依可靠的伺服器結算記錄核對，並區分真實的後端缺陷、服務中斷、單次意外操作、帳號遭入侵，以及明知或反覆利用漏洞的情況。修正應針對直接受影響的無效狀態，不應自動波及無關的合法購買或資產；強制性的消費者權利與其他不可放棄的權利均不受影響。`,
    ],
  },
  zh_Hans: {
    label: `游戏规则说明 · 2026年9月10日`,
    title: `玩家市场、自动采购与政府投标`,
    paragraphs: [
      `TycoonX 的玩家市场、内置商店自动补货、由 TycoonX 执行的自动市场采购、向政府直接出售以及政府投标，都是正式的游戏系统。合理的高价或低价、重复出售、自动交易、大额交付、竞争性投标、中标或未能完成标案，本身不会自动被认定为作弊。当前价格、需求、品质影响、运输费、自动补货规则、投标上限、期限、奖励和处罚，都可能为今后的游戏平衡而调整。`,
      `不得主要利用受你控制的账号、串通、循环交易、不可能或负数价格、修改版客户端、他人的商店槽位、重放或竞态漏洞、过期状态或其他错误，来制造或转移价值、操纵供给或投标结果、重复结算、规避功能限制，或协助被禁止的现实货币交易。即使服务器因授权、校验或配置缺陷而接受请求，也不会因此让明显被操纵的状态变得正当。TycoonX 内置的自动化功能与未经授权的外部机器人或脚本不是一回事。`,
      `客户端预估和异常标记可能已经过期或不完整。已完成的游戏内交易应根据可靠的服务器结算记录核对，并区分真实的后端缺陷、服务中断、单次意外操作、账号被盗与明知或反复利用漏洞的情况。修正应针对直接受影响的无效状态，不应自动波及无关的合法购买或资产；强制性消费者权利和其他不可放弃的权利不受影响。`,
    ],
  },
  zh_Hant: {
    label: `遊戲規則說明 · 2026年9月10日`,
    title: `玩家市場、自動採購與政府投標`,
    paragraphs: [
      `TycoonX 的玩家市場、內建商店自動補貨、由 TycoonX 執行的自動市場採購、向政府直接出售以及政府投標，都是正式的遊戲系統。合理的高價或低價、重複出售、自動交易、大額交付、競爭性投標、得標或未能完成標案，本身不會自動被認定為作弊。現行價格、需求、品質影響、運輸費、自動補貨規則、投標上限、期限、獎勵與處罰，都可能為日後的遊戲平衡而調整。`,
      `不得主要利用受你控制的帳號、串通、循環交易、不可能或負數價格、修改版客戶端、他人的商店欄位、重播或競態漏洞、過期狀態或其他錯誤，來製造或轉移價值、操縱供給或投標結果、重複結算、規避功能限制，或協助被禁止的現實貨幣交易。即使伺服器因授權、驗證或設定缺陷而接受請求，也不會因此讓明顯遭操縱的狀態變得正當。TycoonX 內建的自動化功能與未經授權的外部機器人或腳本並不相同。`,
      `客戶端預估與異常標記可能已過期或不完整。已完成的遊戲內交易應依可靠的伺服器結算記錄核對，並區分真實的後端缺陷、服務中斷、單次意外操作、帳號遭入侵與明知或反覆利用漏洞的情況。修正應針對直接受影響的無效狀態，不應自動波及無關的合法購買或資產；強制性的消費者權利及其他不可放棄的權利均不受影響。`,
    ],
  },
  ar: {
    label: `توضيح قواعد اللعب · 10 سبتمبر 2026`,
    title: `أسواق اللاعبين والشراء التلقائي ومناقصات الحكومة`,
    paragraphs: [
      `تُعد أسواق اللاعبين في TycoonX، والتعبئة التلقائية المدمجة للمتاجر، وعمليات الشراء التلقائية التي يجريها TycoonX، والبيع المباشر للحكومة، ومناقصات الحكومة أنظمة لعب فعلية. ولا يُعد السعر المشروع المرتفع أو المنخفض، أو تكرار البيع، أو المعاملة التلقائية، أو التسليم الكبير، أو العرض التنافسي، أو الفوز بالمناقصة أو عدم إتمامها غشًا تلقائيًا. ويمكن إعادة موازنة الأسعار والطلب وتأثيرات الجودة والنقل وقواعد التعبئة التلقائية وحدود العروض والمواعيد والمكافآت والعقوبات الحالية مستقبلًا.`,
      `لا تستخدم حسابات خاضعة لسيطرتك أو التواطؤ أو المعاملات الدائرية أو الأسعار المستحيلة أو السالبة أو تطبيقات معدلة أو خانات متاجر تخص لاعبين آخرين أو أخطاء التكرار أو سباق العمليات أو الحالات القديمة أو غيرها من العيوب، بصورة أساسية لإنشاء القيمة أو نقلها أو التلاعب بالعرض أو بنتيجة مناقصة أو تكرار التسوية أو تجاوز حدود الميزة أو تسهيل تجارة محظورة بأموال حقيقية. قبول الخادم لطلب بسبب خلل في الصلاحيات أو التحقق أو الإعدادات لا يجعل حالة جرى التلاعب بها بوضوح مشروعة. والأتمتة المدمجة في TycoonX ليست مثل روبوت أو برنامج نصي خارجي غير مصرح به.`,
      `قد تكون معاينات التطبيق وإشارات الحالات الشاذة قديمة أو غير مكتملة. وينبغي مطابقة المعاملات المكتملة مع سجلات تسوية موثوقة على الخادم، مع التمييز بين أخطاء الخادم الحقيقية والانقطاعات والتصرفات العرضية المنفردة واختراق الحساب، وبين الاستغلال المتعمد أو المتكرر. وينبغي أن تستهدف التصحيحات الحالة غير الصحيحة المتأثرة مباشرة، لا المشتريات أو الأصول المشروعة غير المرتبطة بها. وتظل حقوق المستهلك الإلزامية وغيرها من الحقوق التي لا يجوز التنازل عنها دون مساس.`,
    ],
  },
  nl: {
    label: `Toelichting op gameplayregels · 10 september 2026`,
    title: `Spelersmarkten, automatisch inkopen en overheidstenders`,
    paragraphs: [
      `De spelersmarkten van TycoonX, ingebouwde automatische winkelbevoorrading, automatische marktaankopen door TycoonX, directe verkoop aan de overheid en overheidstenders zijn echte spelsystemen. Een legitieme hoge of lage prijs, herhaalde verkoop, automatische transactie, grote levering, concurrerend bod, gewonnen of mislukte tender is niet automatisch valsspelen. Huidige prijzen, vraag, kwaliteitseffecten, transport, regels voor automatisch bevoorraden, biedingslimieten, termijnen, beloningen en boetes kunnen voor de toekomst opnieuw worden gebalanceerd.`,
      `Gebruik geen gecontroleerde accounts, samenspanning, circulaire transacties, onmogelijke of negatieve prijzen, aangepaste clients, winkelslots van anderen, replay- of racefouten, verouderde status of andere bugs hoofdzakelijk om waarde te creëren of door te sluizen, aanbod of tenderresultaten te manipuleren, afwikkelingen te dupliceren, functielimieten te omzeilen of verboden handel voor echt geld mogelijk te maken. Dat de server een verzoek accepteert door een autorisatie-, validatie- of configuratiefout maakt een duidelijk gemanipuleerde toestand niet legitiem. Ingebouwde TycoonX-automatisering is niet hetzelfde als een ongeautoriseerde externe bot of script.`,
      `Clientvoorbeelden en anomalievlaggen kunnen verouderd of onvolledig zijn. Voltooide transacties moeten worden afgestemd op betrouwbare servergegevens, waarbij echte backendfouten, storingen, eenmalige vergissingen en gecompromitteerde accounts worden onderscheiden van bewuste of herhaalde uitbuiting. Correcties moeten alleen de direct getroffen ongeldige toestand raken en niet ongerelateerde legitieme aankopen of vermogen. Dwingende consumentenrechten en andere rechten waarvan niet kan worden afgeweken blijven onaangetast.`,
    ],
  },
  sv: {
    label: `Förtydligande av spelregler · 10 september 2026`,
    title: `Spelarmarknader, automatiska köp och statliga upphandlingar`,
    paragraphs: [
      `TycoonX spelarmarknader, inbyggd automatisk lagerpåfyllning i butiker, automatiska marknadsköp som utförs av TycoonX, direktförsäljning till staten och statliga upphandlingar är riktiga spelsystem. Ett legitimt högt eller lågt pris, upprepade försäljningar, en automatisk transaktion, en stor leverans, ett konkurrenskraftigt bud, en vunnen eller misslyckad upphandling är inte automatiskt fusk. Nuvarande priser, efterfrågan, kvalitetseffekter, transport, regler för automatisk påfyllning, budtak, tidsfrister, belöningar och påföljder kan balanseras om framöver.`,
      `Använd inte kontrollerade konton, samverkan, cirkulära affärer, omöjliga eller negativa priser, modifierade klienter, andra spelares butiksslots, replay- eller racefel, inaktuella tillstånd eller andra buggar främst för att skapa eller flytta värde, manipulera utbud eller upphandlingsresultat, duplicera avräkning, kringgå funktionsgränser eller underlätta förbjuden handel för riktiga pengar. Att servern godkänner en begäran på grund av ett behörighets-, validerings- eller konfigurationsfel gör inte ett tydligt manipulerat tillstånd legitimt. TycoonX inbyggda automatisering är inte samma sak som en otillåten extern bot eller ett skript.`,
      `Klientförhandsvisningar och avvikelseflaggor kan vara inaktuella eller ofullständiga. Slutförda transaktioner ska stämmas av mot tillförlitliga serverposter, samtidigt som verkliga backendfel, avbrott, enstaka misstag och komprometterade konton skiljs från medvetet eller upprepat utnyttjande. Korrigeringar ska riktas mot direkt berört ogiltigt tillstånd, inte mot orelaterade legitima köp eller tillgångar. Tvingande konsumenträttigheter och andra rättigheter som inte kan avtalas bort påverkas inte.`,
    ],
  },
  nb: {
    label: `Avklaring av spillregler · 10. september 2026`,
    title: `Spillermarkeder, automatiske kjøp og offentlige anbud`,
    paragraphs: [
      `TycoonX sine spillermarkeder, innebygd automatisk butikkpåfylling, automatiske markedskjøp utført av TycoonX, direkte salg til staten og offentlige anbud er reelle spillsystemer. En legitim høy eller lav pris, gjentatte salg, en automatisk transaksjon, en stor levering, et konkurransedyktig bud, et vunnet eller mislykket anbud er ikke automatisk juks. Gjeldende priser, etterspørsel, kvalitetseffekter, transport, regler for automatisk påfylling, budgrenser, frister, belønninger og gebyrer kan balanseres på nytt fremover.`,
      `Ikke bruk kontrollerte kontoer, samarbeid, sirkulære handler, umulige eller negative priser, modifiserte klienter, andre spilleres butikkslots, replay- eller racefeil, utdatert tilstand eller andre feil hovedsakelig for å skape eller flytte verdi, manipulere tilbud eller anbudsresultat, duplisere oppgjør, omgå funksjonsgrenser eller legge til rette for forbudt handel med ekte penger. At serveren godtar en forespørsel på grunn av en autorisasjons-, validerings- eller konfigurasjonsfeil gjør ikke en tydelig manipulert tilstand legitim. TycoonX sin innebygde automatisering er ikke det samme som en uautorisert ekstern bot eller et skript.`,
      `Klientforhåndsvisninger og avviksflagg kan være utdaterte eller ufullstendige. Fullførte transaksjoner skal avstemmes mot pålitelige serveroppgjør, samtidig som reelle backendfeil, driftsavbrudd, enkeltstående feilhandlinger og kompromitterte kontoer skilles fra bevisst eller gjentatt utnyttelse. Korrigeringer skal rettes mot direkte berørt ugyldig tilstand, ikke mot urelaterte legitime kjøp eller verdier. Ufravikelige forbrukerrettigheter og andre rettigheter som ikke kan fraskrives, påvirkes ikke.`,
    ],
  },
  pl: {
    label: `Wyjaśnienie zasad rozgrywki · 10 września 2026`,
    title: `Rynki graczy, automatyczne zakupy i przetargi rządowe`,
    paragraphs: [
      `Rynki graczy w TycoonX, wbudowane automatyczne uzupełnianie sklepów, automatyczne zakupy rynkowe wykonywane przez TycoonX, bezpośrednia sprzedaż rządowi oraz przetargi rządowe są prawdziwymi systemami rozgrywki. Prawidłowa wysoka lub niska cena, powtarzające się sprzedaże, automatyczna transakcja, duża dostawa, konkurencyjna oferta, wygrany albo niewykonany przetarg nie oznaczają automatycznie oszustwa. Aktualne ceny, popyt, wpływ jakości, transport, zasady automatycznego uzupełniania, limity ofert, terminy, nagrody i kary mogą być w przyszłości ponownie zbalansowane.`,
      `Nie używaj kontrolowanych kont, zmowy, transakcji okrężnych, niemożliwych lub ujemnych cen, zmodyfikowanych klientów, slotów sklepów innych graczy, błędów powtórzeń lub race condition, nieaktualnego stanu ani innych usterek głównie po to, aby tworzyć lub przenosić wartość, manipulować podażą lub wynikiem przetargu, dublować rozliczenia, omijać ograniczenia funkcji albo ułatwiać zakazany handel za prawdziwe pieniądze. To, że serwer zaakceptuje żądanie wskutek błędu autoryzacji, walidacji lub konfiguracji, nie sprawia, że wyraźnie zmanipulowany stan staje się prawidłowy. Wbudowana automatyzacja TycoonX nie jest tym samym co nieautoryzowany zewnętrzny bot lub skrypt.`,
      `Podgląd w kliencie i flagi anomalii mogą być nieaktualne lub niepełne. Zakończone transakcje należy uzgadniać z wiarygodnymi zapisami rozliczeniowymi serwera, odróżniając rzeczywiste błędy backendu, awarie, jednorazowe przypadkowe działania i przejęcie konta od świadomego lub powtarzalnego wykorzystywania. Korekty powinny dotyczyć bezpośrednio powiązanego nieprawidłowego stanu, a nie niezwiązanych legalnych zakupów lub majątku. Bezwzględnie obowiązujące prawa konsumenta i inne niezbywalne prawa pozostają bez zmian.`,
    ],
  },
  th: {
    label: `คำชี้แจงกติกาการเล่น · 10 กันยายน 2026`,
    title: `ตลาดผู้เล่น การซื้ออัตโนมัติ และการประมูลภาครัฐ`,
    paragraphs: [
      `ตลาดระหว่างผู้เล่นของ TycoonX ระบบเติมสินค้าอัตโนมัติในร้าน การซื้อในตลาดอัตโนมัติที่ดำเนินการโดย TycoonX การขายตรงให้รัฐบาล และการประมูลภาครัฐ เป็นระบบเกมที่ตั้งใจให้ใช้งานจริง ราคาที่ถูกต้องไม่ว่าจะสูงหรือต่ำ การขายซ้ำ ธุรกรรมอัตโนมัติ การส่งมอบจำนวนมาก การเสนอราคาแข่งขัน การชนะหรือไม่สามารถทำสัญญาประมูลให้เสร็จ ไม่ถือเป็นการโกงโดยอัตโนมัติ ราคา อุปสงค์ ผลของคุณภาพ ค่าขนส่ง กติกาเติมสินค้าอัตโนมัติ เพดานราคา กำหนดเวลา รางวัล และค่าปรับในปัจจุบันอาจปรับสมดุลในอนาคตได้`,
      `ห้ามใช้บัญชีที่คุณควบคุม การสมรู้ร่วมคิด ธุรกรรมหมุนเวียน ราคาที่เป็นไปไม่ได้หรือติดลบ ไคลเอนต์ดัดแปลง ช่องร้านของผู้อื่น ช่องโหว่จากการเล่นซ้ำหรือการทำงานแข่งกัน สถานะที่ล้าสมัย หรือบั๊กอื่น โดยมีจุดประสงค์หลักเพื่อสร้างหรือโอนมูลค่า บิดเบือนอุปทานหรือผลการประมูล ทำให้การชำระซ้ำ หลีกเลี่ยงข้อจำกัดของฟีเจอร์ หรือสนับสนุนการซื้อขายด้วยเงินจริงที่ห้ามไว้ แม้เซิร์ฟเวอร์จะรับคำขอเพราะข้อบกพร่องด้านสิทธิ์ การตรวจสอบ หรือการตั้งค่า ก็ไม่ได้ทำให้สถานะที่ถูกบิดเบือนอย่างชัดเจนกลายเป็นสิ่งที่ถูกต้อง ระบบอัตโนมัติที่ TycoonX มีให้ไม่เหมือนกับบอตหรือสคริปต์ภายนอกที่ไม่ได้รับอนุญาต`,
      `ข้อมูลตัวอย่างในแอปและธงความผิดปกติอาจล้าสมัยหรือไม่ครบถ้วน ธุรกรรมที่เสร็จแล้วควรตรวจสอบกับบันทึกการชำระของเซิร์ฟเวอร์ที่เชื่อถือได้ โดยแยกข้อผิดพลาดของ backend จริง การหยุดให้บริการ การกระทำพลาดเพียงครั้งเดียว และบัญชีถูกยึดจากการใช้ช่องโหว่โดยรู้ตัวหรือซ้ำ ๆ การแก้ไขควรจำกัดอยู่ที่สถานะไม่ถูกต้องที่ได้รับผลโดยตรง ไม่ควรกระทบการซื้อหรือทรัพย์สินที่ถูกต้องและไม่เกี่ยวข้อง สิทธิผู้บริโภคที่กฎหมายบังคับและสิทธิอื่นที่สละไม่ได้ยังคงอยู่`,
    ],
  },
  vi: {
    label: `Giải thích quy tắc gameplay · 10 tháng 9 năm 2026`,
    title: `Chợ người chơi, mua tự động và đấu thầu Chính phủ`,
    paragraphs: [
      `Chợ giữa người chơi của TycoonX, tính năng tự động bổ sung hàng cho cửa hàng, giao dịch mua trên thị trường do TycoonX tự động thực hiện, bán trực tiếp cho Chính phủ và đấu thầu Chính phủ đều là các hệ thống gameplay chính thức. Mức giá hợp lệ dù cao hay thấp, bán lặp lại, giao dịch tự động, giao hàng lớn, giá thầu cạnh tranh, thắng hoặc không hoàn thành một gói thầu không tự động bị xem là gian lận. Giá, nhu cầu, ảnh hưởng chất lượng, vận chuyển, quy tắc tự bổ sung, trần giá thầu, thời hạn, phần thưởng và hình phạt hiện tại có thể được cân bằng lại trong tương lai.`,
      `Không được chủ yếu sử dụng các tài khoản do mình kiểm soát, thông đồng, giao dịch vòng tròn, giá bất khả thi hoặc âm, client đã chỉnh sửa, ô cửa hàng của người khác, lỗi replay hoặc race condition, trạng thái cũ hay lỗi khác để tạo hoặc chuyển giá trị, thao túng nguồn cung hay kết quả đấu thầu, nhân đôi quyết toán, lách giới hạn tính năng hoặc hỗ trợ giao dịch tiền thật bị cấm. Việc máy chủ chấp nhận yêu cầu do lỗi phân quyền, xác thực hoặc cấu hình không làm cho trạng thái bị thao túng rõ ràng trở nên hợp lệ. Tự động hóa tích hợp do TycoonX cung cấp khác với bot hoặc script bên ngoài không được phép.`,
      `Dữ liệu xem trước trên client và cờ bất thường có thể cũ hoặc không đầy đủ. Giao dịch đã hoàn tất cần được đối chiếu với hồ sơ quyết toán đáng tin cậy trên máy chủ, đồng thời phân biệt lỗi backend thực sự, gián đoạn dịch vụ, thao tác vô ý đơn lẻ và tài khoản bị xâm nhập với việc cố ý hoặc lặp lại khai thác lỗi. Việc điều chỉnh nên giới hạn ở trạng thái không hợp lệ bị ảnh hưởng trực tiếp, không tự động tác động đến giao dịch mua hoặc tài sản hợp lệ không liên quan. Các quyền bắt buộc của người tiêu dùng và quyền không thể từ bỏ khác không bị ảnh hưởng.`,
    ],
  },
  uk: {
    label: `Пояснення правил гри · 10 вересня 2026 року`,
    title: `Ринки гравців, автоматичні покупки та державні тендери`,
    paragraphs: [
      `Ринки між гравцями TycoonX, вбудоване автоматичне поповнення магазинів, автоматичні ринкові покупки, які виконує TycoonX, прямий продаж державі та державні тендери є повноцінними ігровими системами. Законна висока або низька ціна, повторні продажі, автоматична транзакція, велике постачання, конкурентна ставка, перемога або невиконання тендера самі по собі не означають шахрайство. Поточні ціни, попит, вплив якості, транспортування, правила автопоповнення, межі ставок, строки, винагороди та штрафи можуть бути змінені для майбутнього балансування.`,
      `Не використовуйте контрольовані акаунти, змову, кругові угоди, неможливі або від’ємні ціни, модифіковані клієнти, чужі торгові слоти, replay- або race-помилки, застарілий стан чи інші баги переважно для створення або переміщення цінності, маніпулювання пропозицією чи результатом тендера, дублювання розрахунку, обходу обмежень або сприяння забороненій торгівлі за реальні гроші. Те, що сервер прийняв запит через помилку авторизації, перевірки чи конфігурації, не робить явно маніпульований стан правомірним. Вбудована автоматизація TycoonX не є тим самим, що несанкціонований зовнішній бот або скрипт.`,
      `Попередні дані клієнта й позначки аномалій можуть бути застарілими або неповними. Завершені транзакції слід звіряти з надійними серверними записами розрахунків, відрізняючи справжні backend-помилки, збої, одноразові випадкові дії та компрометацію акаунта від свідомого або повторного використання вразливостей. Виправлення мають стосуватися безпосередньо пов’язаного недійсного стану, а не сторонніх законних покупок або майна. Обов’язкові права споживачів та інші невідмовні права залишаються без змін.`,
    ],
  },
  hi: {
    label: `गेमप्ले नियम स्पष्टीकरण · 10 सितंबर 2026`,
    title: `खिलाड़ी बाज़ार, स्वचालित खरीद और सरकारी निविदाएँ`,
    paragraphs: [
      `TycoonX के खिलाड़ी बाज़ार, इन-बिल्ट दुकान ऑटो-फिल, TycoonX द्वारा किए जाने वाले स्वचालित बाज़ार खरीद, सरकार को सीधे बिक्री और सरकारी निविदाएँ वास्तविक गेम सिस्टम हैं। कोई वैध ऊँची या नीची कीमत, बार-बार बिक्री, स्वचालित लेन-देन, बड़ी डिलीवरी, प्रतिस्पर्धी बोली, निविदा जीतना या उसे पूरा न कर पाना केवल इसी कारण अपने आप चीटिंग नहीं माना जाता। मौजूदा कीमतें, मांग, गुणवत्ता प्रभाव, शिपिंग, ऑटो-फिल नियम, बोली सीमा, समय-सीमा, रिवॉर्ड और पेनल्टी भविष्य में गेम बैलेंस के लिए बदले जा सकते हैं।`,
      `नियंत्रित खातों, मिलीभगत, चक्रीय लेन-देन, असंभव या नकारात्मक कीमतों, modified client, किसी और के shop slot, replay/race bug, stale state या अन्य bugs का मुख्य रूप से value बनाने या transfer करने, supply या tender result manipulate करने, settlement duplicate करने, feature limits bypass करने या प्रतिबंधित real-money trading में उपयोग न करें। Authorization, validation या configuration defect के कारण server request स्वीकार कर ले तो भी साफ़ तौर पर manipulated state वैध नहीं हो जाती। TycoonX की built-in automation किसी unauthorized external bot या script के समान नहीं है।`,
      `Client preview और anomaly flags पुराने या अधूरे हो सकते हैं। पूरे हो चुके in-game transactions को भरोसेमंद server settlement records से reconcile किया जाना चाहिए, और वास्तविक backend defect, outage, एक बार की अनजानी action तथा account compromise को जानबूझकर या बार-बार exploit करने से अलग माना जाना चाहिए। Corrections सीधे प्रभावित invalid state तक सीमित रहनी चाहिए, unrelated legitimate purchases या wealth पर अपने आप लागू नहीं होनी चाहिए। Mandatory consumer rights और अन्य non-waivable rights अप्रभावित रहते हैं।`,
    ],
  },
  id: {
    label: `Penjelasan aturan gameplay · 10 September 2026`,
    title: `Pasar pemain, pembelian otomatis, dan tender Pemerintah`,
    paragraphs: [
      `Pasar antarpemain TycoonX, pengisian stok toko otomatis bawaan, pembelian pasar otomatis yang dijalankan TycoonX, penjualan langsung ke Pemerintah, dan tender Pemerintah adalah sistem gameplay resmi. Harga sah yang tinggi atau rendah, penjualan berulang, transaksi otomatis, pengiriman besar, penawaran kompetitif, menang tender atau gagal menyelesaikannya tidak otomatis dianggap curang. Harga, permintaan, pengaruh kualitas, pengiriman, aturan auto-fill, batas penawaran, tenggat, hadiah, dan penalti saat ini dapat diseimbangkan ulang untuk masa mendatang.`,
      `Jangan gunakan akun yang Anda kendalikan, kolusi, transaksi melingkar, harga yang mustahil atau negatif, client yang dimodifikasi, slot toko milik pemain lain, bug replay/race, status lama, atau bug lain terutama untuk membuat atau memindahkan nilai, memanipulasi pasokan atau hasil tender, menggandakan penyelesaian transaksi, menghindari batas fitur, atau memfasilitasi perdagangan uang nyata yang dilarang. Server yang menerima permintaan karena cacat otorisasi, validasi, atau konfigurasi tidak membuat status yang jelas-jelas dimanipulasi menjadi sah. Otomatisasi bawaan TycoonX tidak sama dengan bot atau script eksternal yang tidak diizinkan.`,
      `Pratinjau client dan penanda anomali dapat kedaluwarsa atau tidak lengkap. Transaksi dalam game yang selesai harus direkonsiliasi dengan catatan penyelesaian server yang dapat diandalkan, sambil membedakan cacat backend nyata, gangguan, tindakan tidak sengaja satu kali, dan akun yang disusupi dari eksploitasi yang disengaja atau berulang. Koreksi sebaiknya terbatas pada status tidak sah yang terdampak langsung, bukan pembelian atau kekayaan sah yang tidak terkait. Hak konsumen yang wajib dan hak lain yang tidak dapat dikesampingkan tetap tidak terpengaruh.`,
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

export default function PlayerGovernmentMarketRuleNotice() {
  const pathname = usePathname();
  const locale = getLocale(pathname);
  if (!locale || !copies[locale]) return null;

  const copy = copies[locale];
  const rtl = locale === 'ar';

  return (
    <section className="max-w-3xl mx-auto px-4 pb-12" lang={htmlLang(locale)} dir={rtl ? 'rtl' : 'ltr'} aria-labelledby="tycoonx-player-government-market-rule-heading">
      <div className="rounded-xl border border-amber-400/20 bg-amber-400/[0.05] p-6">
        <p className="text-amber-300/80 text-xs font-medium tracking-wide mb-2">{copy.label}</p>
        <h2 id="tycoonx-player-government-market-rule-heading" className="text-white font-semibold mb-4">{copy.title}</h2>
        <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
          {copy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  );
}
