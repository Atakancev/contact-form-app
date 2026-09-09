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
    title: `Union treasury, maintenance and governance`,
    paragraphs: [
      `TycoonX Union membership fees, leader treasury deposits and withdrawals, Union Project contributions and rewards, maintenance payments, level upgrades and polls are genuine gameplay systems. A legitimate large contribution, reward or leader withdrawal is not automatically cheating merely because substantial in-game value moves. Union treasury is shared in-game state, not a bank account or an individual member’s claim to real-world money.`,
      `Under the current rules, repeated unpaid Union maintenance can close a Union; the current implementation closes it after seven unpaid maintenance days. A leader may also use the designated Union closure feature. Current fees, thresholds, project contribution limits, reward percentages, upgrade costs, durations and member limits may be rebalanced prospectively. A closure, fee, reward or upgrade caused incorrectly by an outage, duplicate job, stale state, account compromise or other backend defect may be reconciled from reliable server records where reasonably feasible.`,
      `Union features must not be manipulated through modified clients, unauthorized role or state changes, controlled alternate accounts used mainly to evade limits, duplicate/replay exploits, prohibited real-money trading or other knowing abuse. A server-accepted request does not make manipulated state legitimate merely because an authorization or configuration defect allowed it. Enforcement must distinguish ordinary gameplay, accidental one-off use and account compromise from knowing or repeated exploitation, and must preserve unrelated legitimate paid value and mandatory consumer rights.`,
    ],
  },
  tr: {
    label: `Oynanış açıklaması · 10 Eylül 2026`,
    title: `Birlik kasası, bakım ve yönetim`,
    paragraphs: [
      `TycoonX Birlik üyelik ücretleri, liderin Birlik kasasına para yatırması ve kasadan para çekmesi, Birlik Projesi katkıları ve ödülleri, bakım ödemeleri, seviye yükseltmeleri ve anketler gerçek oyun sistemleridir. Büyük bir katkı, ödül veya lider para çekimi, yalnızca yüksek miktarda oyun içi değer hareket ettiği için otomatik olarak hile sayılmaz. Birlik kasası ortak oyun içi durumdur; banka hesabı değildir ve herhangi bir üyenin gerçek para üzerinde kişisel alacak hakkı oluşturmaz.`,
      `Mevcut kurallarda, Birlik bakımının tekrar tekrar ödenmemesi Birliğin kapanmasına yol açabilir; mevcut uygulama yedi ödenmemiş bakım gününden sonra Birliği kapatır. Lider ayrıca oyundaki özel Birlik kapatma özelliğini kullanabilir. Mevcut ücretler, eşikler, proje katkı sınırları, ödül yüzdeleri, yükseltme maliyetleri, süreler ve üye sınırları gelecekte oyun dengesi için değiştirilebilir. Kesinti, yinelenen görev, eski durum, hesap ele geçirilmesi veya başka bir sunucu hatası nedeniyle yanlış oluşan kapanma, ücret, ödül ya da yükseltme durumu, makul ölçüde mümkünse güvenilir sunucu kayıtlarıyla düzeltilebilir.`,
      `Birlik özellikleri; değiştirilmiş istemciler, yetkisiz rol veya durum değişiklikleri, esas olarak sınırları aşmak için kullanılan kontrol altındaki alternatif hesaplar, yinelenen işlem/replay açıkları, yasak gerçek para ticareti veya başka bilinçli kötüye kullanım yollarıyla manipüle edilemez. Bir yetkilendirme ya da yapılandırma hatası isteği kabul etmiş olsa bile sunucunun kabulü manipüle edilmiş durumu meşru hale getirmez. Yaptırım, normal oynanışı, tek seferlik kazara kullanımı ve hesap ele geçirilmesini bilinçli veya tekrarlı sömürüden ayırmalı; ilgisiz meşru ücretli değer ile zorunlu tüketici haklarını korumalıdır.`,
    ],
  },
  de: {
    label: `Klarstellung zum Gameplay · 10. September 2026`,
    title: `Union-Kasse, Unterhalt und Verwaltung`,
    paragraphs: [
      `Mitgliedsbeiträge, Ein- und Auszahlungen des Union-Leiters, Beiträge und Belohnungen für Union-Projekte, Unterhaltszahlungen, Stufenaufwertungen und Abstimmungen sind echte TycoonX-Spielsysteme. Ein hoher legitimer Beitrag, eine hohe Belohnung oder eine große Auszahlung des Leiters ist nicht allein deshalb automatisch Betrug, weil viel Spielwert bewegt wird. Die Union-Kasse ist gemeinsamer Spielzustand, kein Bankkonto und kein persönlicher Anspruch eines Mitglieds auf echtes Geld.`,
      `Nach den derzeitigen Regeln kann wiederholt unbezahlter Union-Unterhalt zur Schließung der Union führen; aktuell erfolgt die Schließung nach sieben unbezahlten Unterhaltstagen. Der Leiter kann außerdem die dafür vorgesehene Funktion zur Schließung der Union verwenden. Aktuelle Gebühren, Schwellenwerte, Projektbeitragsgrenzen, Belohnungsanteile, Aufwertungskosten, Laufzeiten und Mitgliedergrenzen können für zukünftige Spielstände neu ausbalanciert werden. Eine durch Ausfall, doppelte Aufgabe, veralteten Zustand, Kontokompromittierung oder einen Backendfehler fehlerhaft ausgelöste Schließung, Gebühr, Belohnung oder Aufwertung kann, soweit vernünftigerweise möglich, anhand verlässlicher Serverdaten berichtigt werden.`,
      `Union-Funktionen dürfen nicht durch manipulierte Clients, unbefugte Rollen- oder Zustandsänderungen, kontrollierte Zweitkonten zur hauptsächlichen Umgehung von Grenzen, Duplikat-/Replay-Exploits, verbotenen Echtgeldhandel oder anderen wissentlichen Missbrauch manipuliert werden. Dass der Server eine Anfrage wegen eines Berechtigungs- oder Konfigurationsfehlers akzeptiert, macht einen manipulierten Zustand nicht legitim. Maßnahmen müssen normales Gameplay, versehentliche Einzelfälle und Kontokompromittierung von wissentlich wiederholter Ausnutzung unterscheiden; nicht betroffene rechtmäßig bezahlte Werte und zwingende Verbraucherrechte bleiben geschützt.`,
    ],
  },
  es: {
    label: `Aclaración sobre el juego · 10 de septiembre de 2026`,
    title: `Tesorería, mantenimiento y gobierno de las Uniones`,
    paragraphs: [
      `Las cuotas de afiliación de las Uniones de TycoonX, los depósitos y retiradas de tesorería del líder, las aportaciones y recompensas de Proyectos de Unión, el mantenimiento, las mejoras de nivel y las votaciones son sistemas reales del juego. Una aportación, recompensa o retirada legítima de gran importe no se considera automáticamente trampa solo porque mueva mucho valor del juego. La tesorería de una Unión es un estado compartido dentro del juego, no una cuenta bancaria ni un derecho individual de un miembro a dinero real.`,
      `Con las reglas actuales, el impago reiterado del mantenimiento puede cerrar una Unión; la implementación actual la cierra tras siete días de mantenimiento impagado. El líder también puede utilizar la función específica para cerrar la Unión. Las cuotas, umbrales, límites de aportación a proyectos, porcentajes de recompensa, costes y tiempos de mejora y límites de miembros actuales pueden reajustarse de cara al futuro. Si un cierre, cobro, recompensa o mejora se produce de forma incorrecta por una caída, una tarea duplicada, un estado desactualizado, una cuenta comprometida u otro fallo del backend, CK-Labs puede conciliarlo con registros fiables del servidor cuando resulte razonablemente posible.`,
      `Las funciones de Unión no pueden manipularse mediante clientes modificados, cambios no autorizados de rol o estado, cuentas alternativas controladas usadas principalmente para eludir límites, exploits de duplicación o repetición, compraventa prohibida por dinero real u otros abusos conscientes. Que el servidor acepte una solicitud por un defecto de autorización o configuración no convierte un estado manipulado en legítimo. Las medidas deben distinguir el juego normal, un uso accidental aislado y una cuenta comprometida de la explotación consciente o repetida, y conservar el valor legítimamente pagado no relacionado y los derechos imperativos del consumidor.`,
    ],
  },
  es_MX: {
    label: `Aclaración de jugabilidad · 10 de septiembre de 2026`,
    title: `Tesorería, mantenimiento y gestión de Uniones`,
    paragraphs: [
      `Las cuotas de membresía de las Uniones de TycoonX, los depósitos y retiros de tesorería del líder, las aportaciones y recompensas de Proyectos de Unión, los pagos de mantenimiento, las mejoras de nivel y las encuestas son sistemas reales del juego. Una aportación, recompensa o retiro legítimo por una cantidad alta no es automáticamente trampa solo porque mueva mucho valor dentro del juego. La tesorería de una Unión es un estado compartido del juego, no una cuenta bancaria ni un derecho personal de un miembro sobre dinero real.`,
      `Con las reglas actuales, dejar sin pagar repetidamente el mantenimiento puede cerrar una Unión; la implementación actual la cierra después de siete días de mantenimiento sin pagar. El líder también puede usar la función designada para cerrar la Unión. Las cuotas, límites, topes de aportación a proyectos, porcentajes de recompensa, costos y tiempos de mejora y límites de miembros actuales pueden ajustarse hacia adelante por balance del juego. Si un cierre, cobro, recompensa o mejora ocurre incorrectamente por una caída, tarea duplicada, estado desactualizado, cuenta comprometida u otro error del backend, CK-Labs puede corregir el estado con registros confiables del servidor cuando sea razonablemente posible.`,
      `Las funciones de Unión no deben manipularse con clientes modificados, cambios no autorizados de rol o estado, cuentas alternas controladas usadas principalmente para saltarse límites, exploits de duplicación o repetición, compraventa prohibida con dinero real u otro abuso consciente. Que el servidor acepte una solicitud por una falla de autorización o configuración no vuelve legítimo un estado manipulado. La aplicación de reglas debe distinguir el juego normal, un uso accidental aislado y una cuenta comprometida de la explotación consciente o repetida, y debe proteger el valor legítimamente pagado no relacionado y los derechos obligatorios del consumidor.`,
    ],
  },
  fr: {
    label: `Précision sur le gameplay · 10 septembre 2026`,
    title: `Trésorerie, entretien et gouvernance des Unions`,
    paragraphs: [
      `Les cotisations des Unions de TycoonX, les dépôts et retraits de trésorerie du dirigeant, les contributions et récompenses des Projets d’Union, les frais d’entretien, les améliorations de niveau et les sondages sont de véritables systèmes de jeu. Une contribution, une récompense ou un retrait légitime d’un montant élevé n’est pas automatiquement de la triche simplement parce qu’une valeur importante circule dans le jeu. La trésorerie d’une Union est un état collectif du jeu, et non un compte bancaire ni une créance individuelle d’un membre sur de l’argent réel.`,
      `Selon les règles actuelles, des frais d’entretien laissés impayés de façon répétée peuvent entraîner la fermeture d’une Union; l’implémentation actuelle la ferme après sept jours d’entretien impayé. Le dirigeant peut également utiliser la fonction prévue pour fermer l’Union. Les cotisations, seuils, limites de contribution aux projets, pourcentages de récompense, coûts et durées d’amélioration ainsi que les limites de membres peuvent être rééquilibrés pour l’avenir. Une fermeture, un prélèvement, une récompense ou une amélioration déclenchés à tort par une panne, une tâche en double, un état obsolète, un compte compromis ou un autre défaut du backend peuvent être corrigés à partir de données serveur fiables lorsque cela est raisonnablement possible.`,
      `Les fonctions d’Union ne doivent pas être manipulées au moyen de clients modifiés, de changements non autorisés de rôle ou d’état, de comptes secondaires contrôlés principalement utilisés pour contourner des limites, d’exploits de duplication ou de répétition, de commerce interdit contre de l’argent réel ou d’un autre abus conscient. Le fait qu’une requête soit acceptée par le serveur à cause d’une faille d’autorisation ou de configuration ne rend pas un état manipulé légitime. Les mesures doivent distinguer le gameplay normal, l’utilisation accidentelle isolée et la compromission d’un compte de l’exploitation consciente ou répétée, tout en protégeant les valeurs payantes légitimes sans rapport et les droits impératifs des consommateurs.`,
    ],
  },
  fr_CA: {
    label: `Précision sur le jeu · 10 septembre 2026`,
    title: `Trésorerie, entretien et gestion des Unions`,
    paragraphs: [
      `Les cotisations des Unions de TycoonX, les dépôts et retraits de trésorerie du chef, les contributions et récompenses des Projets d’Union, les frais d’entretien, les améliorations de niveau et les sondages sont de véritables systèmes de jeu. Une contribution, une récompense ou un retrait légitime de grande valeur n’est pas automatiquement de la triche simplement parce qu’une somme importante circule dans le jeu. La trésorerie d’une Union est un état collectif du jeu, pas un compte bancaire ni un droit individuel d’un membre à de l’argent réel.`,
      `Selon les règles actuelles, des frais d’entretien impayés à répétition peuvent entraîner la fermeture d’une Union; l’implémentation actuelle la ferme après sept jours d’entretien impayé. Le chef peut aussi utiliser la fonction prévue pour fermer l’Union. Les cotisations, seuils, limites de contribution aux projets, pourcentages de récompense, coûts et délais d’amélioration ainsi que les limites de membres peuvent être rééquilibrés pour l’avenir. Une fermeture, un prélèvement, une récompense ou une amélioration déclenchés à tort par une panne, une tâche en double, un état périmé, un compte compromis ou un autre problème du backend peuvent être corrigés à partir de registres serveur fiables lorsque cela est raisonnablement possible.`,
      `Les fonctions d’Union ne doivent pas être manipulées avec des clients modifiés, des changements non autorisés de rôle ou d’état, des comptes secondaires contrôlés principalement pour contourner des limites, des exploits de duplication ou de répétition, du commerce interdit contre de l’argent réel ou tout autre abus conscient. Le fait que le serveur accepte une requête en raison d’une faille d’autorisation ou de configuration ne rend pas un état manipulé légitime. Les mesures doivent distinguer le jeu normal, une utilisation accidentelle isolée et un compte compromis d’une exploitation consciente ou répétée, et protéger les valeurs payées légitimes non liées ainsi que les droits impératifs des consommateurs.`,
    ],
  },
  it: {
    label: `Chiarimento sul gameplay · 10 settembre 2026`,
    title: `Tesoreria, manutenzione e gestione delle Unioni`,
    paragraphs: [
      `Le quote associative delle Unioni di TycoonX, i depositi e i prelievi dalla tesoreria effettuati dal leader, i contributi e le ricompense dei Progetti dell’Unione, i pagamenti di manutenzione, i potenziamenti di livello e i sondaggi sono veri sistemi di gioco. Un contributo, una ricompensa o un prelievo legittimo di grande importo non è automaticamente un imbroglio solo perché sposta molto valore nel gioco. La tesoreria dell’Unione è uno stato condiviso del gioco, non un conto bancario né un diritto individuale di un membro su denaro reale.`,
      `Secondo le regole attuali, il mancato pagamento ripetuto della manutenzione può comportare la chiusura dell’Unione; l’implementazione attuale la chiude dopo sette giorni di manutenzione non pagata. Il leader può inoltre usare l’apposita funzione di chiusura dell’Unione. Quote, soglie, limiti di contributo ai progetti, percentuali di ricompensa, costi e tempi dei potenziamenti e limiti dei membri possono essere riequilibrati per il futuro. Una chiusura, un addebito, una ricompensa o un potenziamento prodotti erroneamente da un’interruzione, un job duplicato, uno stato obsoleto, un account compromesso o un altro errore del backend possono essere riconciliati tramite registri server affidabili quando ragionevolmente possibile.`,
      `Le funzioni dell’Unione non devono essere manipolate tramite client modificati, modifiche non autorizzate di ruolo o stato, account alternativi controllati usati principalmente per aggirare limiti, exploit di duplicazione o replay, compravendita vietata con denaro reale o altri abusi consapevoli. Una richiesta accettata dal server a causa di un difetto di autorizzazione o configurazione non rende legittimo uno stato manipolato. Le misure devono distinguere il normale gameplay, un uso accidentale isolato e un account compromesso dallo sfruttamento consapevole o ripetuto e devono preservare il valore legittimamente pagato non collegato e i diritti inderogabili dei consumatori.`,
    ],
  },
  pt: {
    label: `Esclarecimento de jogabilidade · 10 de setembro de 2026`,
    title: `Tesouraria, manutenção e governação das Uniões`,
    paragraphs: [
      `As quotas das Uniões de TycoonX, os depósitos e levantamentos de tesouraria pelo líder, as contribuições e recompensas de Projetos da União, os pagamentos de manutenção, as melhorias de nível e as sondagens são sistemas reais do jogo. Uma contribuição, recompensa ou levantamento legítimo de valor elevado não é automaticamente batota apenas porque movimenta muito valor dentro do jogo. A tesouraria da União é um estado partilhado do jogo, não uma conta bancária nem um direito individual de um membro a dinheiro real.`,
      `Segundo as regras atuais, a falta repetida de pagamento da manutenção pode encerrar uma União; a implementação atual encerra-a após sete dias de manutenção em dívida. O líder também pode utilizar a função própria de encerramento da União. Quotas, limites, restrições de contribuição para projetos, percentagens de recompensa, custos e tempos de melhoria e limites de membros podem ser reequilibrados para o futuro. Um encerramento, cobrança, recompensa ou melhoria provocado incorretamente por uma falha, tarefa duplicada, estado desatualizado, conta comprometida ou outro erro do backend pode ser reconciliado com registos de servidor fiáveis quando tal seja razoavelmente possível.`,
      `As funcionalidades da União não podem ser manipuladas através de clientes modificados, alterações não autorizadas de funções ou estado, contas alternativas controladas usadas sobretudo para contornar limites, exploits de duplicação ou repetição, comércio proibido por dinheiro real ou outro abuso consciente. O facto de o servidor aceitar um pedido devido a uma falha de autorização ou configuração não torna legítimo um estado manipulado. A aplicação das regras deve distinguir o jogo normal, uma utilização acidental isolada e uma conta comprometida da exploração consciente ou repetida, preservando o valor pago legítimo sem relação com a infração e os direitos imperativos dos consumidores.`,
    ],
  },
  pt_BR: {
    label: `Esclarecimento de jogabilidade · 10 de setembro de 2026`,
    title: `Tesouraria, manutenção e gestão das Uniões`,
    paragraphs: [
      `As taxas de associação das Uniões de TycoonX, os depósitos e saques da tesouraria pelo líder, as contribuições e recompensas de Projetos da União, os pagamentos de manutenção, as melhorias de nível e as enquetes são sistemas reais do jogo. Uma contribuição, recompensa ou saque legítimo de alto valor não é automaticamente trapaça só porque movimenta muito valor dentro do jogo. A tesouraria da União é um estado compartilhado do jogo, não uma conta bancária nem um direito individual de um membro a dinheiro real.`,
      `Pelas regras atuais, deixar repetidamente a manutenção sem pagamento pode fechar uma União; a implementação atual fecha a União após sete dias de manutenção não paga. O líder também pode usar a função específica de encerramento da União. Taxas, limites, restrições de contribuição em projetos, percentuais de recompensa, custos e tempos de melhoria e limites de membros podem ser rebalanceados para o futuro. Um fechamento, cobrança, recompensa ou melhoria causado incorretamente por uma indisponibilidade, tarefa duplicada, estado desatualizado, conta comprometida ou outro erro de backend pode ser reconciliado com registros confiáveis do servidor quando isso for razoavelmente possível.`,
      `Os recursos da União não podem ser manipulados por clientes modificados, alterações não autorizadas de função ou estado, contas alternativas controladas usadas principalmente para contornar limites, exploits de duplicação ou repetição, comércio proibido por dinheiro real ou outro abuso consciente. O servidor aceitar uma solicitação por causa de uma falha de autorização ou configuração não torna legítimo um estado manipulado. A aplicação das regras deve diferenciar o jogo normal, um uso acidental isolado e uma conta comprometida de exploração consciente ou repetida, preservando valores pagos legítimos não relacionados e os direitos obrigatórios do consumidor.`,
    ],
  },
  ru: {
    label: `Разъяснение игровых правил · 10 сентября 2026 г.`,
    title: `Казна, обслуживание и управление Союзом`,
    paragraphs: [
      `Членские взносы Союза в TycoonX, пополнение и вывод средств казны лидером, взносы и награды проектов Союза, оплата обслуживания, повышение уровня и опросы являются полноценными игровыми механиками. Крупный законный взнос, награда или вывод лидером не считаются автоматически читерством только из-за большого объёма перемещаемой игровой ценности. Казна Союза — это общее игровое состояние, а не банковский счёт и не личное право участника на реальные деньги.`,
      `По текущим правилам повторная неуплата обслуживания может привести к закрытию Союза; нынешняя реализация закрывает Союз после семи дней неоплаченного обслуживания. Лидер также может воспользоваться предусмотренной функцией закрытия Союза. Текущие взносы, пороги, лимиты вкладов в проекты, проценты наград, стоимость и время улучшений и лимиты участников могут в дальнейшем перебалансироваться. Ошибочное закрытие, списание, награда или улучшение из-за сбоя, дублированной задачи, устаревшего состояния, компрометации аккаунта или иной ошибки бэкенда могут быть скорректированы по надёжным серверным записям, когда это разумно возможно.`,
      `Механики Союза нельзя манипулировать с помощью модифицированных клиентов, несанкционированных изменений ролей или состояния, контролируемых дополнительных аккаунтов, используемых преимущественно для обхода лимитов, эксплойтов дублирования или повторного выполнения, запрещённой торговли за реальные деньги либо иного умышленного злоупотребления. Если сервер принял запрос из-за ошибки авторизации или конфигурации, это не делает манипулированное состояние законным. При применении мер необходимо отличать обычную игру, единичную случайную ошибку и компрометацию аккаунта от сознательной или повторной эксплуатации, сохраняя не связанную с нарушением законно оплаченную ценность и обязательные права потребителей.`,
    ],
  },
  ja: {
    label: `ゲームプレイ上の明確化 · 2026年9月10日`,
    title: `ユニオンの資金、維持費、運営`,
    paragraphs: [
      `TycoonXのユニオン会費、リーダーによるユニオン資金への入金・出金、ユニオンプロジェクトへの寄付と報酬、維持費の支払い、レベルアップ、投票は、いずれも正式なゲームシステムです。ゲーム内で大きな価値が移動するという理由だけで、正当な高額寄付、報酬、リーダー出金が自動的に不正行為になることはありません。ユニオン資金はゲーム内の共有状態であり、銀行口座でも、個々のメンバーが現実のお金を請求できる権利でもありません。`,
      `現在のルールでは、ユニオンの維持費を繰り返し支払えないとユニオンが閉鎖されることがあり、現行実装では未払いが7日続くと閉鎖されます。リーダーは専用のユニオン閉鎖機能を使うこともできます。現在の会費、基準値、プロジェクト寄付上限、報酬率、アップグレード費用・時間、メンバー上限は、今後のゲームバランス調整で変更される場合があります。障害、重複ジョブ、古い状態、アカウント侵害、その他のバックエンド不具合により閉鎖、請求、報酬、アップグレードが誤って発生した場合、合理的に可能な範囲で信頼できるサーバー記録に基づき整合・修正されることがあります。`,
      `ユニオン機能を、改変クライアント、無許可の役割・状態変更、主として上限回避のために使う管理下の別アカウント、重複・リプレイの悪用、禁止されたリアルマネートレード、その他の故意の不正利用で操作してはいけません。認可や設定の不具合によってサーバーが要求を受理しても、操作された状態が正当になるわけではありません。対応では、通常のプレイ、偶発的な一度の利用、アカウント侵害を、故意または反復的な悪用と区別し、無関係な正当に購入した価値と強行法規上の消費者権利を保護します。`,
    ],
  },
  ko: {
    label: `게임플레이 규칙 안내 · 2026년 9월 10일`,
    title: `연합 금고, 유지비 및 운영`,
    paragraphs: [
      `TycoonX의 연합 회비, 리더의 연합 금고 입출금, 연합 프로젝트 기부와 보상, 유지비 납부, 레벨 업그레이드 및 투표는 정상적인 게임 시스템입니다. 많은 게임 내 가치가 이동한다는 이유만으로 정당한 고액 기부, 보상 또는 리더 출금이 자동으로 부정행위가 되지는 않습니다. 연합 금고는 게임 안에서 공유되는 상태이며 은행 계좌가 아니고, 개별 회원이 실제 돈을 청구할 수 있는 권리도 아닙니다.`,
      `현재 규칙에서는 연합 유지비가 반복해서 미납되면 연합이 폐쇄될 수 있으며, 현행 구현은 유지비가 7일간 미납되면 연합을 폐쇄합니다. 리더는 지정된 연합 폐쇄 기능을 사용할 수도 있습니다. 현재 회비, 기준값, 프로젝트 기부 한도, 보상 비율, 업그레이드 비용·시간 및 회원 한도는 향후 게임 밸런스를 위해 조정될 수 있습니다. 서비스 장애, 중복 작업, 오래된 상태, 계정 탈취 또는 기타 백엔드 오류로 인해 폐쇄, 차감, 보상 또는 업그레이드가 잘못 발생한 경우, 합리적으로 가능한 범위에서 신뢰할 수 있는 서버 기록을 기준으로 조정할 수 있습니다.`,
      `연합 기능을 변조된 클라이언트, 승인되지 않은 역할·상태 변경, 주로 한도 회피를 위해 사용하는 통제된 부계정, 중복·재실행 익스플로잇, 금지된 현금 거래 또는 기타 고의적 악용으로 조작해서는 안 됩니다. 권한 또는 설정 결함 때문에 서버가 요청을 수락했더라도 조작된 상태가 정당해지는 것은 아닙니다. 조치는 정상적인 플레이, 일회성 실수 및 계정 탈취를 고의적이거나 반복적인 악용과 구분해야 하며, 관련 없는 정당한 유료 가치와 강행 소비자 권리를 보호해야 합니다.`,
    ],
  },
  zh: {
    label: `遊戲規則說明 · 2026年9月10日`,
    title: `聯盟金庫、維護與治理`,
    paragraphs: [
      `TycoonX 的聯盟會費、盟主金庫存取、聯盟專案貢獻與獎勵、維護費、等級升級與投票，都是正式的遊戲系統。合法的大額貢獻、獎勵或盟主提款，不會只因為大量遊戲內價值發生移轉就自動被視為作弊。聯盟金庫是遊戲內的共同狀態，不是銀行帳戶，也不代表任何成員對現實金錢具有個人請求權。`,
      `依目前規則，聯盟維護費持續未繳可能導致聯盟關閉；現行實作會在維護費連續七天未繳後關閉聯盟。盟主也可以使用指定的聯盟關閉功能。現行會費、門檻、專案貢獻上限、獎勵比例、升級成本與時間、成員上限，日後都可能因遊戲平衡而調整。若因服務中斷、重複作業、過期狀態、帳號遭入侵或其他後端錯誤而錯誤產生關閉、扣款、獎勵或升級，CK-Labs 可在合理可行的範圍內依可靠伺服器紀錄進行核對與修正。`,
      `不得利用修改過的客戶端、未授權的角色或狀態變更、主要用來規避限制的受控分身帳號、重複或重放漏洞、禁止的現金交易或其他明知的濫用來操控聯盟功能。即使因授權或設定缺陷而被伺服器接受，也不會使遭操控的狀態因此合法。執法必須區分正常遊玩、單次意外使用與帳號遭入侵，以及明知或重複利用漏洞的行為，並保護無關的合法付費價值與不可排除的消費者權利。`,
    ],
  },
  zh_Hans: {
    label: `玩法规则说明 · 2026年9月10日`,
    title: `联盟金库、维护与治理`,
    paragraphs: [
      `TycoonX 的联盟会费、盟主金库存取、联盟项目贡献与奖励、维护费、等级升级和投票都属于正式的游戏系统。合法的大额贡献、奖励或盟主提款，不会仅因为大量游戏内价值发生转移就自动被认定为作弊。联盟金库属于游戏内共享状态，不是银行账户，也不代表任何成员对现实货币享有个人请求权。`,
      `按照当前规则，联盟维护费持续未缴可能导致联盟关闭；现行实现会在维护费连续七天未缴后关闭联盟。盟主也可以使用专门的联盟关闭功能。当前会费、门槛、项目贡献上限、奖励比例、升级成本和时间、成员上限，都可能为未来游戏平衡进行调整。如果因服务中断、重复任务、过期状态、账号被盗用或其他后端故障而错误产生关闭、扣费、奖励或升级，CK-Labs 可在合理可行的范围内依据可靠的服务器记录进行核对和修正。`,
      `不得利用修改客户端、未经授权的角色或状态变更、主要用于规避限制的受控小号、重复或重放漏洞、被禁止的现实货币交易或其他明知的滥用方式操纵联盟功能。即使服务器因授权或配置缺陷接受了请求，也不会使被操纵的状态因此合法。处理时必须区分正常游戏、单次意外使用和账号被盗用，与明知或反复利用漏洞的行为，并保护无关的合法付费价值和不可排除的消费者权利。`,
    ],
  },
  zh_Hant: {
    label: `玩法規則說明 · 2026年9月10日`,
    title: `聯盟金庫、維護與治理`,
    paragraphs: [
      `TycoonX 的聯盟會費、盟主金庫存取、聯盟專案貢獻與獎勵、維護費、等級升級與投票都屬於正式的遊戲系統。合法的大額貢獻、獎勵或盟主提款，不會僅因大量遊戲內價值移轉就自動被認定為作弊。聯盟金庫屬於遊戲內共享狀態，不是銀行帳戶，也不代表任何成員對現實貨幣享有個人請求權。`,
      `依目前規則，聯盟維護費持續未繳可能導致聯盟關閉；現行實作會在維護費連續七天未繳後關閉聯盟。盟主也可以使用專門的聯盟關閉功能。現行會費、門檻、專案貢獻上限、獎勵比例、升級成本與時間、成員上限，都可能因未來遊戲平衡而調整。若因服務中斷、重複工作、過期狀態、帳號遭盜用或其他後端故障而錯誤產生關閉、扣費、獎勵或升級，CK-Labs 可在合理可行的範圍內依可靠的伺服器紀錄進行核對與修正。`,
      `不得利用修改過的客戶端、未授權的角色或狀態變更、主要用來規避限制的受控分身帳號、重複或重放漏洞、禁止的現實貨幣交易或其他明知的濫用方式操控聯盟功能。即使伺服器因授權或設定缺陷接受了請求，也不會使遭操控的狀態因此合法。處理時必須區分正常遊玩、單次意外使用與帳號遭盜用，以及明知或反覆利用漏洞的行為，並保護無關的合法付費價值與不可排除的消費者權利。`,
    ],
  },
  ar: {
    label: `توضيح لقواعد اللعب · 10 سبتمبر 2026`,
    title: `خزينة الاتحاد والصيانة والحوكمة`,
    paragraphs: [
      `رسوم عضوية اتحادات TycoonX، وإيداعات قائد الاتحاد في الخزينة وسحوباته منها، ومساهمات مشاريع الاتحاد ومكافآتها، ومدفوعات الصيانة، وترقيات المستوى، والاستطلاعات كلها أنظمة لعب فعلية. لا تُعد المساهمة أو المكافأة أو عملية السحب الكبيرة المشروعة غشًا تلقائيًا لمجرد انتقال قيمة كبيرة داخل اللعبة. خزينة الاتحاد حالة مشتركة داخل اللعبة، وليست حسابًا مصرفيًا ولا تمنح أي عضو حقًا شخصيًا في أموال حقيقية.`,
      `وفق القواعد الحالية، قد يؤدي تكرار عدم دفع صيانة الاتحاد إلى إغلاقه؛ والتنفيذ الحالي يغلق الاتحاد بعد سبعة أيام من الصيانة غير المدفوعة. ويمكن للقائد أيضًا استخدام وظيفة إغلاق الاتحاد المخصصة لذلك. قد تتغير مستقبلًا الرسوم والحدود ونسب مكافآت المشاريع وحدود المساهمات وتكاليف الترقيات ومددها وحدود الأعضاء لأغراض موازنة اللعبة. وإذا حدث إغلاق أو خصم أو مكافأة أو ترقية بصورة خاطئة بسبب انقطاع الخدمة أو مهمة مكررة أو حالة قديمة أو اختراق الحساب أو خطأ آخر في الخادم، فيجوز لـ CK-Labs تسوية الحالة استنادًا إلى سجلات خادم موثوقة متى كان ذلك ممكنًا بصورة معقولة.`,
      `لا يجوز التلاعب بميزات الاتحاد عبر عملاء معدلين أو تغييرات غير مصرح بها في الأدوار أو الحالة أو حسابات بديلة خاضعة للسيطرة تُستخدم أساسًا لتجاوز الحدود أو استغلال التكرار وإعادة التنفيذ أو التجارة المحظورة بأموال حقيقية أو أي إساءة متعمدة أخرى. قبول الخادم لطلب بسبب خلل في الصلاحيات أو الإعدادات لا يجعل الحالة المتلاعب بها مشروعة. يجب أن تميّز إجراءات الإنفاذ بين اللعب العادي والاستخدام العرضي لمرة واحدة واختراق الحساب وبين الاستغلال المتعمد أو المتكرر، مع حماية القيمة المدفوعة المشروعة غير المرتبطة والحقوق الإلزامية للمستهلك.`,
    ],
  },
  nl: {
    label: `Toelichting op gameplayregels · 10 september 2026`,
    title: `Uniekas, onderhoud en bestuur`,
    paragraphs: [
      `Lidmaatschapskosten van TycoonX-Unies, stortingen en opnames door de leider, bijdragen en beloningen van Unieprojecten, onderhoudsbetalingen, level-upgrades en peilingen zijn echte spelsystemen. Een legitieme grote bijdrage, beloning of opname door de leider is niet automatisch valsspelen alleen omdat veel waarde in het spel wordt verplaatst. De Uniekas is gedeelde spelstatus, geen bankrekening en geen individuele aanspraak van een lid op echt geld.`,
      `Volgens de huidige regels kan herhaaldelijk onbetaald Unieonderhoud tot sluiting van de Unie leiden; de huidige implementatie sluit een Unie na zeven onbetaalde onderhoudsdagen. De leider kan ook de daarvoor bedoelde functie gebruiken om de Unie te sluiten. Huidige kosten, drempels, projectbijdragelimieten, beloningspercentages, upgradeprijzen en -duren en ledenlimieten kunnen voor toekomstige gameplay opnieuw worden uitgebalanceerd. Een sluiting, afschrijving, beloning of upgrade die ten onrechte ontstaat door een storing, dubbele taak, verouderde status, gecompromitteerd account of andere backendfout kan waar redelijkerwijs mogelijk worden hersteld op basis van betrouwbare servergegevens.`,
      `Uniefuncties mogen niet worden gemanipuleerd met aangepaste clients, ongeoorloofde rol- of statuswijzigingen, gecontroleerde alternatieve accounts die hoofdzakelijk worden gebruikt om limieten te omzeilen, duplicatie- of replay-exploits, verboden handel voor echt geld of ander bewust misbruik. Dat de server een verzoek accepteert door een autorisatie- of configuratiefout maakt gemanipuleerde status niet legitiem. Handhaving moet normale gameplay, een incidentele vergissing en accountcompromittering onderscheiden van bewuste of herhaalde uitbuiting en niet-gerelateerde legitiem betaalde waarde en dwingende consumentenrechten beschermen.`,
    ],
  },
  sv: {
    label: `Förtydligande av spelregler · 10 september 2026`,
    title: `Unionens kassa, underhåll och styrning`,
    paragraphs: [
      `Medlemsavgifter i TycoonX-unioner, ledarens insättningar och uttag ur kassan, bidrag och belöningar för unionsprojekt, underhållsbetalningar, nivåuppgraderingar och omröstningar är riktiga spelsystem. Ett legitimt stort bidrag, en belöning eller ett uttag av ledaren är inte automatiskt fusk bara för att mycket värde i spelet flyttas. Unionens kassa är ett gemensamt spelläge, inte ett bankkonto eller en enskild medlems rätt till riktiga pengar.`,
      `Enligt nuvarande regler kan upprepat obetalt underhåll leda till att en union stängs; den nuvarande implementationen stänger unionen efter sju obetalda underhållsdagar. Ledaren kan också använda den särskilda funktionen för att stänga unionen. Nuvarande avgifter, trösklar, projektbidragsgränser, belöningsandelar, kostnader och tider för uppgraderingar samt medlemsgränser kan balanseras om framåt. En stängning, debitering, belöning eller uppgradering som uppstår felaktigt på grund av driftstopp, dubbla jobb, inaktuell status, ett kapat konto eller annat backendfel kan när det rimligen är möjligt korrigeras med tillförlitliga serveruppgifter.`,
      `Unionsfunktioner får inte manipuleras genom modifierade klienter, obehöriga roll- eller statusändringar, kontrollerade extrakonton som främst används för att kringgå gränser, duplicerings- eller replay-exploits, förbjuden handel för riktiga pengar eller annat medvetet missbruk. Att servern accepterar en begäran på grund av ett behörighets- eller konfigurationsfel gör inte manipulerad status legitim. Åtgärder måste skilja normalt spelande, enstaka misstag och kontokapning från medvetet eller upprepat utnyttjande samt skydda orelaterat legitimt betalt värde och tvingande konsumenträttigheter.`,
    ],
  },
  nb: {
    label: `Presisering av spillreglene · 10. september 2026`,
    title: `Unionens kasse, vedlikehold og styring`,
    paragraphs: [
      `Medlemsavgifter i TycoonX-unioner, lederens innskudd og uttak fra kassen, bidrag og belønninger i unionsprosjekter, vedlikeholdsbetalinger, nivåoppgraderinger og avstemninger er reelle spillsystemer. Et legitimt stort bidrag, en belønning eller et uttak fra lederen er ikke automatisk juks bare fordi mye spillverdi flyttes. Unionens kasse er en delt spilltilstand, ikke en bankkonto eller et individuelt medlems krav på ekte penger.`,
      `Etter gjeldende regler kan gjentatt manglende betaling av vedlikehold føre til at en Union stenges; dagens implementasjon stenger den etter sju ubetalte vedlikeholdsdager. Lederen kan også bruke den egne funksjonen for å stenge Unionen. Dagens avgifter, terskler, grenser for prosjektbidrag, belønningsprosenter, kostnader og tider for oppgraderinger og medlemsgrenser kan balanseres på nytt for fremtidig spill. En stenging, belastning, belønning eller oppgradering som oppstår feilaktig på grunn av driftsstans, duplisert jobb, foreldet tilstand, kompromittert konto eller annen backendfeil, kan når det er rimelig mulig korrigeres ved hjelp av pålitelige serverdata.`,
      `Union-funksjoner må ikke manipuleres med modifiserte klienter, uautoriserte rolle- eller tilstandsendringer, kontrollerte ekstrakontoer som hovedsakelig brukes for å omgå grenser, dupliserings- eller replay-exploits, forbudt handel mot ekte penger eller annet bevisst misbruk. At serveren godtar en forespørsel på grunn av en autorisasjons- eller konfigurasjonsfeil, gjør ikke manipulert tilstand legitim. Håndheving må skille vanlig spilling, et enkeltstående uhell og kontokompromittering fra bevisst eller gjentatt utnyttelse, og beskytte urelatert legitimt betalt verdi og ufravikelige forbrukerrettigheter.`,
    ],
  },
  pl: {
    label: `Wyjaśnienie zasad rozgrywki · 10 września 2026`,
    title: `Skarbiec, utrzymanie i zarządzanie Unią`,
    paragraphs: [
      `Składki członkowskie Unii w TycoonX, wpłaty i wypłaty lidera ze skarbca, wpłaty i nagrody za Projekty Unii, koszty utrzymania, ulepszenia poziomu i głosowania są prawdziwymi mechanikami gry. Duża, prawidłowa wpłata, nagroda lub wypłata lidera nie jest automatycznie oszustwem tylko dlatego, że przenosi znaczną wartość w grze. Skarbiec Unii jest wspólnym stanem w grze, a nie rachunkiem bankowym ani osobistym roszczeniem członka do prawdziwych pieniędzy.`,
      `Zgodnie z obecnymi zasadami powtarzający się brak opłaty za utrzymanie może zamknąć Unię; obecna implementacja zamyka ją po siedmiu dniach nieopłaconego utrzymania. Lider może też użyć przeznaczonej do tego funkcji zamknięcia Unii. Obecne składki, progi, limity wpłat na projekty, procenty nagród, koszty i czas ulepszeń oraz limity członków mogą być w przyszłości równoważone. Zamknięcie, obciążenie, nagroda lub ulepszenie, które nastąpiły błędnie z powodu awarii, zduplikowanego zadania, nieaktualnego stanu, przejęcia konta lub innego błędu backendu, mogą zostać skorygowane na podstawie wiarygodnych danych serwerowych, gdy jest to rozsądnie możliwe.`,
      `Funkcjami Unii nie wolno manipulować za pomocą zmodyfikowanych klientów, nieautoryzowanych zmian ról lub stanu, kontrolowanych kont dodatkowych używanych głównie do obchodzenia limitów, exploitów duplikacji lub ponownego wykonania, zakazanego handlu za prawdziwe pieniądze ani innego świadomego nadużycia. To, że serwer zaakceptował żądanie z powodu błędu autoryzacji lub konfiguracji, nie czyni zmanipulowanego stanu prawidłowym. Egzekwowanie zasad musi odróżniać zwykłą grę, jednorazowy przypadek i przejęcie konta od świadomego lub powtarzanego wykorzystywania błędu oraz chronić niezwiązane, legalnie opłacone wartości i bezwzględnie obowiązujące prawa konsumentów.`,
    ],
  },
  th: {
    label: `คำชี้แจงกติกาการเล่น · 10 กันยายน 2026`,
    title: `คลังเงิน ค่าบำรุง และการบริหาร Union`,
    paragraphs: [
      `ค่าธรรมเนียมสมาชิก Union ใน TycoonX การฝากและถอนเงินคลังโดยผู้นำ เงินสมทบและรางวัลจากโครงการ Union ค่าบำรุง การอัปเกรดระดับ และการโหวต เป็นระบบการเล่นจริง การสมทบ รางวัล หรือการถอนเงินจำนวนมากที่ถูกต้องไม่ได้เป็นการโกงโดยอัตโนมัติเพียงเพราะมีมูลค่าในเกมจำนวนมากเคลื่อนย้าย คลังของ Union เป็นสถานะร่วมภายในเกม ไม่ใช่บัญชีธนาคาร และไม่ใช่สิทธิส่วนบุคคลของสมาชิกในการเรียกร้องเงินจริง`,
      `ตามกติกาปัจจุบัน การไม่ชำระค่าบำรุง Union ซ้ำต่อเนื่องอาจทำให้ Union ถูกปิด โดยระบบปัจจุบันจะปิดหลังจากค้างค่าบำรุงเจ็ดวัน ผู้นำยังสามารถใช้ฟังก์ชันปิด Union ที่กำหนดไว้ได้ ค่าธรรมเนียม เกณฑ์ ขีดจำกัดเงินสมทบโครงการ สัดส่วนรางวัล ค่าใช้จ่ายและเวลาการอัปเกรด รวมถึงจำนวนสมาชิกสูงสุดในปัจจุบัน อาจถูกปรับสมดุลสำหรับอนาคต หากการปิด การหักเงิน รางวัล หรือการอัปเกรดเกิดขึ้นผิดพลาดจากระบบล่ม งานซ้ำ สถานะเก่า บัญชีถูกยึด หรือข้อผิดพลาดของแบ็กเอนด์ CK-Labs อาจปรับแก้จากบันทึกเซิร์ฟเวอร์ที่เชื่อถือได้เมื่อสามารถทำได้อย่างสมเหตุสมผล`,
      `ห้ามดัดแปลงระบบ Union ด้วยไคลเอนต์ที่แก้ไข การเปลี่ยนบทบาทหรือสถานะโดยไม่ได้รับอนุญาต บัญชีสำรองที่ควบคุมไว้และใช้เป็นหลักเพื่อหลบขีดจำกัด exploit แบบทำซ้ำหรือ replay การซื้อขายด้วยเงินจริงที่ถูกห้าม หรือการใช้ในทางที่ผิดโดยเจตนาอื่น ๆ การที่เซิร์ฟเวอร์ยอมรับคำขอเพราะข้อบกพร่องด้านสิทธิ์หรือการตั้งค่าไม่ได้ทำให้สถานะที่ถูกดัดแปลงกลายเป็นสถานะที่ชอบธรรม การบังคับใช้กติกาต้องแยกการเล่นปกติ ความผิดพลาดครั้งเดียว และบัญชีถูกยึด ออกจากการใช้ช่องโหว่โดยรู้ตัวหรือทำซ้ำ และต้องคุ้มครองมูลค่าที่ชำระเงินโดยชอบซึ่งไม่เกี่ยวข้องรวมถึงสิทธิผู้บริโภคที่ไม่อาจตัดทอนได้`,
    ],
  },
  vi: {
    label: `Làm rõ quy tắc chơi · 10 tháng 9 năm 2026`,
    title: `Ngân quỹ, phí duy trì và quản trị Liên minh`,
    paragraphs: [
      `Phí thành viên Liên minh trong TycoonX, việc thủ lĩnh nạp hoặc rút ngân quỹ, đóng góp và phần thưởng Dự án Liên minh, phí duy trì, nâng cấp cấp độ và biểu quyết đều là hệ thống chơi chính thức. Một khoản đóng góp, phần thưởng hoặc khoản rút lớn nhưng hợp lệ không tự động bị coi là gian lận chỉ vì lượng giá trị trong game dịch chuyển lớn. Ngân quỹ Liên minh là trạng thái dùng chung trong game, không phải tài khoản ngân hàng và không tạo cho từng thành viên quyền đòi tiền thật.`,
      `Theo quy tắc hiện hành, việc liên tục không trả phí duy trì có thể khiến Liên minh bị đóng; triển khai hiện tại đóng Liên minh sau bảy ngày phí duy trì chưa được trả. Thủ lĩnh cũng có thể dùng chức năng đóng Liên minh được thiết kế riêng. Các mức phí, ngưỡng, giới hạn đóng góp dự án, tỷ lệ phần thưởng, chi phí và thời gian nâng cấp, cùng giới hạn thành viên hiện tại có thể được cân bằng lại cho tương lai. Nếu việc đóng, trừ tiền, thưởng hoặc nâng cấp xảy ra sai do gián đoạn dịch vụ, tác vụ trùng lặp, trạng thái cũ, tài khoản bị xâm nhập hoặc lỗi backend khác, CK-Labs có thể đối soát bằng dữ liệu máy chủ đáng tin cậy khi điều đó khả thi một cách hợp lý.`,
      `Không được thao túng chức năng Liên minh bằng client đã sửa đổi, thay đổi vai trò hoặc trạng thái trái phép, tài khoản phụ do cùng người kiểm soát chủ yếu để né giới hạn, exploit nhân đôi hoặc phát lại, giao dịch tiền thật bị cấm hay hành vi lạm dụng có chủ ý khác. Việc máy chủ chấp nhận một yêu cầu do lỗi phân quyền hoặc cấu hình không làm cho trạng thái đã bị thao túng trở nên hợp lệ. Việc xử lý phải phân biệt chơi bình thường, sai sót một lần và tài khoản bị xâm nhập với hành vi khai thác có chủ ý hoặc lặp lại, đồng thời bảo vệ giá trị trả phí hợp lệ không liên quan và các quyền bắt buộc của người tiêu dùng.`,
    ],
  },
  uk: {
    label: `Пояснення правил гри · 10 вересня 2026 р.`,
    title: `Скарбниця, утримання та управління Союзом`,
    paragraphs: [
      `Членські внески Союзів у TycoonX, внесення та виведення коштів зі скарбниці лідером, внески й нагороди за Проєкти Союзу, оплата утримання, підвищення рівня та голосування є повноцінними ігровими механіками. Великий правомірний внесок, нагорода або виведення коштів лідером не є автоматично шахрайством лише через значний рух ігрової цінності. Скарбниця Союзу є спільним ігровим станом, а не банківським рахунком чи особистим правом окремого учасника на реальні гроші.`,
      `За чинними правилами повторна несплата утримання може призвести до закриття Союзу; поточна реалізація закриває його після семи днів несплаченого утримання. Лідер також може скористатися спеціальною функцією закриття Союзу. Чинні внески, пороги, ліміти внесків у проєкти, відсотки нагород, вартість і тривалість покращень та ліміти учасників можуть надалі змінюватися для балансування гри. Якщо закриття, списання, нагорода або покращення сталися помилково через збій, дубльоване завдання, застарілий стан, компрометацію акаунта чи іншу помилку бекенду, CK-Labs може виправити стан за надійними серверними записами, коли це розумно можливо.`,
      `Не можна маніпулювати функціями Союзу за допомогою модифікованих клієнтів, несанкціонованих змін ролей чи стану, контрольованих додаткових акаунтів, які переважно використовуються для обходу лімітів, експлойтів дублювання чи повторного виконання, забороненої торгівлі за реальні гроші або інших свідомих зловживань. Те, що сервер прийняв запит через помилку авторизації чи конфігурації, не робить маніпульований стан правомірним. Застосування правил має відрізняти звичайну гру, одноразову випадкову помилку й компрометацію акаунта від свідомої або повторної експлуатації, а також захищати не пов’язану з порушенням законно оплачену цінність і обов’язкові права споживачів.`,
    ],
  },
  hi: {
    label: `गेमप्ले नियम स्पष्टीकरण · 10 सितंबर 2026`,
    title: `यूनियन ट्रेज़री, रखरखाव और संचालन`,
    paragraphs: [
      `TycoonX में यूनियन सदस्यता शुल्क, लीडर द्वारा ट्रेज़री में जमा और निकासी, यूनियन प्रोजेक्ट योगदान और रिवॉर्ड, रखरखाव भुगतान, लेवल अपग्रेड और पोल वास्तविक गेम सिस्टम हैं। कोई वैध बड़ा योगदान, रिवॉर्ड या लीडर निकासी केवल इसलिए अपने आप चीटिंग नहीं बनती क्योंकि गेम में बड़ी मात्रा में वैल्यू स्थानांतरित होती है। यूनियन ट्रेज़री गेम के भीतर साझा स्थिति है, बैंक खाता नहीं और किसी सदस्य का असली पैसे पर व्यक्तिगत दावा नहीं।`,
      `मौजूदा नियमों के तहत, यूनियन का रखरखाव बार-बार न चुकाने पर यूनियन बंद हो सकती है; वर्तमान इम्प्लीमेंटेशन सात दिनों के बकाया रखरखाव के बाद यूनियन बंद करता है। लीडर निर्धारित यूनियन क्लोज़र फीचर भी इस्तेमाल कर सकता है। मौजूदा फीस, सीमाएँ, प्रोजेक्ट योगदान सीमा, रिवॉर्ड प्रतिशत, अपग्रेड लागत व समय और सदस्य सीमा भविष्य में गेम बैलेंस के लिए बदली जा सकती हैं। आउटेज, डुप्लिकेट जॉब, पुरानी स्थिति, अकाउंट compromise या अन्य backend error से गलत क्लोज़र, कटौती, रिवॉर्ड या अपग्रेड होने पर CK-Labs जहाँ उचित रूप से संभव हो वहाँ भरोसेमंद सर्वर रिकॉर्ड के आधार पर स्थिति का मिलान और सुधार कर सकता है।`,
      `यूनियन फीचर्स को modified client, बिना अनुमति role या state change, मुख्य रूप से सीमा से बचने के लिए इस्तेमाल होने वाले नियंत्रित alt accounts, duplicate या replay exploit, प्रतिबंधित real-money trading या अन्य जानबूझकर abuse से manipulate नहीं किया जा सकता। Authorization या configuration defect के कारण server request स्वीकार कर ले तो भी manipulated state वैध नहीं हो जाती। Enforcement में सामान्य gameplay, एक बार की अनजानी गलती और account compromise को जानबूझकर या बार-बार exploit करने से अलग माना जाना चाहिए और असंबंधित वैध paid value तथा अनिवार्य consumer rights सुरक्षित रहने चाहिए।`,
    ],
  },
  id: {
    label: `Penjelasan aturan gameplay · 10 September 2026`,
    title: `Kas, pemeliharaan, dan tata kelola Serikat`,
    paragraphs: [
      `Iuran keanggotaan Serikat di TycoonX, setoran dan penarikan kas oleh pemimpin, kontribusi dan hadiah Proyek Serikat, pembayaran pemeliharaan, peningkatan level, dan jajak pendapat adalah sistem gameplay yang nyata. Kontribusi, hadiah, atau penarikan pemimpin yang sah dalam jumlah besar tidak otomatis dianggap curang hanya karena memindahkan banyak nilai dalam game. Kas Serikat adalah keadaan bersama di dalam game, bukan rekening bank dan bukan hak pribadi anggota atas uang nyata.`,
      `Berdasarkan aturan saat ini, pemeliharaan Serikat yang berulang kali tidak dibayar dapat membuat Serikat ditutup; implementasi saat ini menutupnya setelah tujuh hari pemeliharaan tidak dibayar. Pemimpin juga dapat menggunakan fitur khusus untuk menutup Serikat. Iuran, ambang, batas kontribusi proyek, persentase hadiah, biaya dan waktu peningkatan, serta batas anggota saat ini dapat diseimbangkan ulang untuk masa depan. Penutupan, pemotongan, hadiah, atau peningkatan yang terjadi secara keliru karena gangguan, job ganda, status lama, akun yang disusupi, atau kesalahan backend lain dapat direkonsiliasi berdasarkan catatan server yang andal jika secara wajar memungkinkan.`,
      `Fitur Serikat tidak boleh dimanipulasi dengan client yang dimodifikasi, perubahan peran atau status tanpa izin, akun alternatif terkontrol yang terutama dipakai untuk menghindari batas, exploit duplikasi atau replay, perdagangan uang nyata yang dilarang, atau penyalahgunaan disengaja lainnya. Server yang menerima permintaan karena cacat otorisasi atau konfigurasi tidak membuat status yang dimanipulasi menjadi sah. Penegakan harus membedakan gameplay normal, penggunaan tidak sengaja satu kali, dan akun yang disusupi dari eksploitasi yang diketahui atau berulang, serta melindungi nilai berbayar sah yang tidak terkait dan hak konsumen yang wajib.`,
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

export default function UnionGovernanceRuleNotice() {
  const pathname = usePathname();
  const locale = getLocale(pathname);
  if (!locale || !copies[locale]) return null;

  const copy = copies[locale];
  const rtl = locale === 'ar';

  return (
    <section className="max-w-3xl mx-auto px-4 pb-12" lang={htmlLang(locale)} dir={rtl ? 'rtl' : 'ltr'} aria-labelledby="tycoonx-union-governance-rule-heading">
      <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/[0.05] p-6">
        <p className="text-emerald-300/80 text-xs font-medium tracking-wide mb-2">{copy.label}</p>
        <h2 id="tycoonx-union-governance-rule-heading" className="text-white font-semibold mb-4">{copy.title}</h2>
        <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
          {copy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  );
}
