'use client';

import { usePathname } from 'next/navigation';

type RuleCopy = {
  label: string;
  title: string;
  paragraphs: string[];
};

const copies: Record<string, RuleCopy> = {
  en: {
    label: 'Gameplay clarification · September 10, 2026',
    title: 'Logistics, jobs, competitions and rewards are game systems',
    paragraphs: [
      `TycoonX truck sales and rentals, deliveries, care jobs, Company jobs, built-in job completion, leaderboards, competitions and free gameplay rewards are intended simulation mechanics. A high truck price, large lawful salary, repeated delivery, high rank, repeated win or favorable random reward is not automatically abuse. Fees, rental limits, delivery times, job requirements, reward tables, competition formats, rankings and other game parameters may be adjusted prospectively for legitimate game reasons, subject to any mandatory notice, change, conformity, promotion and termination rights that apply.`,
      `Do not use modified clients, direct APIs, controlled accounts, sham jobs, circular truck trades, fabricated progress, win trading, unauthorized bots, altered cooldown or reward records, duplicate/replay/race bugs or other technical weaknesses to create or funnel value, force system jobs, obtain repeated rewards, manipulate rankings, hide exploit proceeds or facilitate prohibited real-money trading. TycoonX-operated automatic job completion and system settlement are intended game automation, not player botting. A server-accepted request caused by a permissions or validation defect does not by itself legitimize knowing manipulation, but an anomaly alone is not proof of wrongdoing.`,
      `Where TycoonX clearly offers a Diamond-funded delivery speed-up, the Diamond cost shown for that action purchases the eligible in-game acceleration, not a guaranteed delivery result, profit or ranking outcome. If a defect charges Diamonds but does not provide the represented action, the directly affected transaction should be reconciled subject to applicable rights; unrelated valid purchased Diamonds, one-time 30-Day VIP and Lifetime VIP should not be removed merely because of a gameplay correction. CK-Labs should distinguish outages, stale state, accidental one-off actions and account compromise from knowing or repeated exploitation, correct directly attributable invalid scores, rewards or value proportionately, and preserve all mandatory consumer and other non-waivable rights.`,
    ],
  },
  tr: {
    label: 'Oynanış açıklaması · 10 Eylül 2026',
    title: 'Lojistik, işler, yarışmalar ve ödüller oyun sistemleridir',
    paragraphs: [
      `TycoonX içindeki kamyon alım satımı ve kiralama, teslimatlar, bakım işleri, Şirket işleri, oyun tarafından otomatik tamamlanan işler, liderlik tabloları, yarışmalar ve ücretsiz oyun ödülleri simülasyonun normal parçalarıdır. Yüksek bir kamyon fiyatı, yüksek ama geçerli bir maaş, sık teslimat, üst sıralarda yer almak, tekrar kazanmak veya şanslı bir ödül tek başına kötüye kullanım anlamına gelmez. Ücretler, kiralama sınırları, teslimat süreleri, iş koşulları, ödül tabloları, yarışma biçimleri ve sıralama kuralları, geçerli zorunlu bildirim, değişiklik, uygunluk, promosyon ve fesih hakları saklı kalmak üzere, meşru oyun nedenleriyle ileriye dönük değiştirilebilir.`,
      `Değer yaratmak veya aktarmak, sistem işlerini zorla çalıştırmak, ödülleri tekrar tekrar almak, sıralamaları yönlendirmek, exploit gelirini gizlemek ya da yasak gerçek para ticaretini kolaylaştırmak için değiştirilmiş istemci, doğrudan API, kontrol edilen hesaplar, sahte işler, döngüsel kamyon işlemleri, uydurma ilerleme, win trading, izinsiz botlar, değiştirilmiş bekleme/ödül kayıtları veya duplicate, replay ve race hataları kullanmayın. TycoonX tarafından yapılan otomatik iş tamamlama ve sistem mutabakatları oyunun kendi otomasyonudur, oyuncu botu değildir. Bir yetki ya da doğrulama hatası nedeniyle sunucunun isteği kabul etmesi bilinçli manipülasyonu meşru yapmaz; tek bir anomali de tek başına ihlal kanıtı değildir.`,
      `TycoonX bir teslimatı Diamonds karşılığında hızlandırma seçeneğini açıkça sunuyorsa, gösterilen Diamond bedeli o uygun oyun içi hızlandırmayı satın alır; belirli bir teslimat sonucu, kâr veya sıralama sonucu garanti etmez. Bir hata Diamonds düşürür ancak vaat edilen işlemi sağlamazsa doğrudan etkilenen işlem, uygulanabilir haklar çerçevesinde düzeltilmelidir. Sırf bir oynanış düzeltmesi yapılıyor diye ilgisiz ve geçerli şekilde satın alınmış Diamonds, tek seferlik 30 Günlük VIP veya Lifetime VIP kaldırılmamalıdır. CK-Labs kesintı, eski durum, tek seferlik hata ve hesap ele geçirilmesini bilinçli/tekrarlı exploit kullanımından ayırmalı ve geçersiz skor, ödül veya değeri orantılı biçimde düzeltmelidir.`,
    ],
  },
  de: {
    label: 'Gameplay-Klarstellung · 10. September 2026',
    title: 'Logistik, Jobs, Wettbewerbe und Belohnungen sind Spielsysteme',
    paragraphs: [
      `Lkw-Verkäufe und -Vermietungen, Lieferungen, Pflegejobs, Unternehmensjobs, die spielinterne automatische Job-Erledigung, Ranglisten, Wettbewerbe und kostenlose Gameplay-Belohnungen sind vorgesehene Bestandteile von TycoonX. Ein hoher Lkw-Preis, ein hohes rechtmäßiges Gehalt, viele Lieferungen, ein hoher Rang, wiederholte Siege oder eine günstige Zufallsbelohnung sind nicht automatisch Missbrauch. Gebühren, Mietgrenzen, Lieferzeiten, Job-Anforderungen, Belohnungstabellen, Wettbewerbsformate und Ranglistenregeln können aus legitimen Spielgründen für die Zukunft angepasst werden; zwingende Informations-, Änderungs-, Vertragsmäßigkeits-, Werbe- und Beendigungsrechte bleiben unberührt.`,
      `Nutze keine manipulierten Clients, direkten APIs, kontrollierten Konten, Scheinjobs, Kreisgeschäfte mit Lkw, erfundenen Fortschritt, Win-Trading, unerlaubten Bots, manipulierten Cooldown- oder Belohnungsdaten sowie Duplicate-, Replay- oder Race-Fehler, um Werte zu erzeugen oder weiterzuleiten, Systemjobs zu erzwingen, Belohnungen mehrfach zu erhalten, Ranglisten zu manipulieren, Exploit-Erlöse zu verschleiern oder verbotenen Echtgeldhandel zu ermöglichen. Von TycoonX betriebene automatische Job-Erledigung und Systemabrechnung sind vorgesehene Spielautomatisierung und kein Spieler-Bot. Eine wegen eines Berechtigungs- oder Validierungsfehlers akzeptierte Serveranfrage macht bewusste Manipulation nicht legitim; eine Auffälligkeit allein beweist aber auch keinen Regelverstoß.`,
      `Bietet TycoonX ausdrücklich eine Lieferbeschleunigung gegen Diamonds an, erwirbt der angezeigte Diamond-Betrag die berechtigte Beschleunigung im Spiel, nicht ein garantiertes Liefer-, Gewinn- oder Ranglistenergebnis. Werden Diamonds wegen eines Fehlers belastet, ohne dass die dargestellte Aktion erbracht wird, ist die unmittelbar betroffene Transaktion unter Wahrung der anwendbaren Rechte zu berichtigen. Unabhängige, wirksam gekaufte Diamonds, einmaliges 30-Tage-VIP und Lifetime VIP sollen nicht allein wegen einer Gameplay-Korrektur entfernt werden. CK-Labs soll Ausfälle, veralteten Zustand, einmalige Versehen und kompromittierte Konten von bewusster oder wiederholter Ausnutzung unterscheiden und unmittelbar zurechenbare ungültige Punkte, Belohnungen oder Werte verhältnismäßig korrigieren.`,
    ],
  },
  es: {
    label: 'Aclaración de juego · 10 de septiembre de 2026',
    title: 'La logística, los trabajos, las competiciones y las recompensas son sistemas del juego',
    paragraphs: [
      `La compraventa y el alquiler de camiones, los repartos, los trabajos de mantenimiento, los empleos de Empresa, la finalización automática de trabajos por parte del propio juego, las clasificaciones, las competiciones y las recompensas gratuitas forman parte normal de TycoonX. Un camión caro, un salario alto pero válido, muchas entregas, una posición elevada, varias victorias o una recompensa aleatoria favorable no constituyen por sí solos un abuso. Las comisiones, límites de alquiler, tiempos de entrega, requisitos de empleo, tablas de recompensas, formatos de competición y reglas de clasificación pueden modificarse para el futuro por motivos legítimos del juego, respetando los derechos imperativos aplicables de información, modificación, conformidad, promoción y resolución.`,
      `No utilices clientes modificados, APIs directas, cuentas controladas, empleos ficticios, operaciones circulares con camiones, progreso inventado, amaño de victorias, bots no autorizados, registros de espera o recompensa alterados ni fallos de duplicación, repetición o carrera para crear o canalizar valor, forzar trabajos del sistema, cobrar premios varias veces, manipular clasificaciones, ocultar beneficios de exploits o facilitar comercio prohibido con dinero real. La finalización automática de trabajos y la liquidación operadas por TycoonX son automatización prevista del juego, no bots del jugador. Que el servidor acepte una petición por un fallo de permisos o validación no legitima una manipulación consciente; una anomalía aislada tampoco demuestra una infracción.`,
      `Cuando TycoonX ofrezca claramente acelerar una entrega mediante Diamonds, el coste mostrado compra esa aceleración elegible dentro del juego, no garantiza un resultado de entrega, beneficio o clasificación. Si un defecto carga Diamonds sin prestar la acción anunciada, debe conciliarse la transacción directamente afectada conforme a los derechos aplicables. Una corrección de juego no debe servir por sí sola para retirar Diamonds comprados válidamente y no relacionados, el VIP de 30 días de un solo pago ni Lifetime VIP. CK-Labs debe diferenciar caídas, estados desactualizados, acciones accidentales aisladas y cuentas comprometidas de la explotación consciente o repetida, y corregir proporcionalmente puntuaciones, recompensas o valor inválido directamente atribuible.`,
    ],
  },
  es_MX: {
    label: 'Aclaración de juego · 10 de septiembre de 2026',
    title: 'Logística, empleos, competencias y recompensas son sistemas del juego',
    paragraphs: [
      `Comprar, vender o rentar camiones, hacer entregas, realizar trabajos de cuidado, aceptar empleos de Empresa, usar la finalización automática propia del juego, competir en tablas y recibir recompensas gratuitas son mecánicas normales de TycoonX. Un camión caro, un sueldo alto pero válido, muchas entregas, un rango alto, varias victorias o tener suerte con una recompensa no significan por sí solos que exista abuso. Comisiones, límites de renta, tiempos de entrega, requisitos de empleo, tablas de premios, formatos de competencia y reglas de ranking pueden ajustarse hacia el futuro por razones legítimas del juego, respetando los derechos obligatorios aplicables de aviso, modificación, conformidad, promociones y terminación.`,
      `No uses clientes modificados, APIs directas, cuentas que controles, empleos simulados, operaciones circulares con camiones, progreso inventado, win trading, bots no autorizados, registros de cooldown o recompensas alterados ni bugs de duplicación, replay o race para crear o mover valor, forzar procesos del sistema, cobrar premios repetidos, manipular rankings, ocultar ganancias de exploits o facilitar comercio prohibido con dinero real. La finalización automática de trabajos y los procesos de liquidación operados por TycoonX son automatización del propio juego, no bots del jugador. Que una falla de permisos o validación haga que el servidor acepte una solicitud no vuelve legítima una manipulación consciente; una anomalía por sí sola tampoco prueba una infracción.`,
      `Si TycoonX ofrece claramente acelerar una entrega usando Diamonds, el costo mostrado compra esa aceleración elegible dentro del juego, no garantiza el resultado de la entrega, una ganancia ni una posición en el ranking. Si una falla cobra Diamonds pero no entrega la acción indicada, la transacción directamente afectada debe conciliarse conforme a los derechos aplicables. Una corrección de gameplay no debe ser motivo por sí sola para quitar Diamonds comprados válidamente y sin relación, el VIP único de 30 días ni Lifetime VIP. CK-Labs debe distinguir interrupciones, estado desactualizado, errores aislados y cuentas comprometidas de exploits conscientes o repetidos y corregir proporcionalmente el puntaje, recompensa o valor inválido directamente atribuible.`,
    ],
  },
  fr: {
    label: 'Précision de gameplay · 10 septembre 2026',
    title: 'Logistique, emplois, compétitions et récompenses sont des systèmes du jeu',
    paragraphs: [
      `La vente et la location de camions, les livraisons, les missions d'entretien, les emplois d'Entreprise, l'exécution automatique de certaines tâches par le jeu, les classements, compétitions et récompenses gratuites font partie du fonctionnement normal de TycoonX. Un camion vendu cher, un salaire élevé mais régulier, de nombreuses livraisons, une bonne place au classement, plusieurs victoires ou une récompense aléatoire avantageuse ne constituent pas automatiquement un abus. Frais, limites de location, délais, conditions d'emploi, barèmes de récompenses, formats de compétition et règles de classement peuvent évoluer pour l'avenir pour des raisons légitimes de jeu, sous réserve des droits impératifs applicables en matière d'information, de modification, de conformité, de promotion et de résiliation.`,
      `N'utilisez pas de client modifié, d'API directe, de comptes contrôlés, d'emplois fictifs, d'échanges circulaires de camions, de progression fabriquée, de victoires arrangées, de bots non autorisés, de données de délai ou de récompense altérées, ni de bugs de duplication, répétition ou concurrence pour créer ou transférer de la valeur, forcer des tâches système, obtenir plusieurs fois une récompense, manipuler un classement, dissimuler les gains d'un exploit ou faciliter un commerce interdit contre de l'argent réel. L'exécution automatique des tâches et les règlements effectués par TycoonX sont des automatismes prévus du jeu, pas des bots de joueur. Une requête acceptée à cause d'un défaut d'autorisation ou de validation ne légitime pas une manipulation consciente; une anomalie isolée ne prouve pas non plus une faute.`,
      `Lorsque TycoonX propose clairement d'accélérer une livraison contre des Diamonds, le coût affiché achète l'accélération éligible dans le jeu, et non un résultat, un bénéfice ou un rang garanti. Si un défaut débite des Diamonds sans fournir l'action annoncée, la transaction directement concernée doit être régularisée selon les droits applicables. Une correction de gameplay ne justifie pas, à elle seule, de retirer des Diamonds valablement achetés sans rapport, le VIP 30 jours à paiement unique ou Lifetime VIP. CK-Labs doit distinguer pannes, état périmé, erreur isolée et compte compromis d'une exploitation consciente ou répétée, puis corriger proportionnellement les scores, récompenses ou valeurs invalides directement attribuables.`,
    ],
  },
  fr_CA: {
    label: 'Précision de jeu · 10 septembre 2026',
    title: 'La logistique, les emplois, les compétitions et les récompenses font partie du jeu',
    paragraphs: [
      `L'achat, la vente et la location de camions, les livraisons, les tâches d'entretien, les emplois d'Entreprise, l'exécution automatique prévue par le jeu, les classements, les compétitions et les récompenses gratuites sont des mécaniques normales de TycoonX. Un camion très cher, un salaire élevé mais valide, beaucoup de livraisons, un excellent rang, plusieurs victoires ou une récompense aléatoire chanceuse ne sont pas automatiquement un abus. Les frais, limites de location, délais, conditions d'emploi, barèmes de récompenses, formats de compétition et règles de classement peuvent être ajustés pour l'avenir pour des raisons légitimes de jeu, tout en respectant les droits obligatoires applicables d'information, de modification, de conformité, de promotion et de résiliation.`,
      `N'utilisez pas de client modifié, d'API directe, de comptes que vous contrôlez, d'emplois fictifs, de transactions circulaires de camions, de progression inventée, de victoires arrangées, de bots non autorisés, de données de délai ou de récompense modifiées ni de bogues de duplication, répétition ou concurrence pour créer ou acheminer de la valeur, forcer des tâches système, réclamer plusieurs fois une récompense, manipuler un classement, cacher le produit d'un exploit ou faciliter un commerce interdit contre de l'argent réel. L'automatisation des tâches et des règlements effectuée par TycoonX fait partie du jeu, ce n'est pas un bot de joueur. Une requête acceptée à cause d'un problème de permission ou de validation ne rend pas une manipulation volontaire légitime; une anomalie à elle seule ne prouve pas une infraction.`,
      `Si TycoonX offre clairement une accélération de livraison contre des Diamonds, le coût affiché achète cette accélération admissible dans le jeu, pas un résultat de livraison, un profit ou un classement garanti. Si un problème débite des Diamonds sans fournir l'action annoncée, la transaction directement touchée doit être corrigée selon les droits applicables. Une correction de jeu ne suffit pas à justifier le retrait de Diamonds achetés validement et sans lien, du VIP 30 jours à achat unique ou de Lifetime VIP. CK-Labs doit distinguer une panne, un état périmé, une erreur ponctuelle ou un compte compromis d'une exploitation volontaire ou répétée et corriger de façon proportionnée les scores, récompenses ou valeurs invalides directement attribuables.`,
    ],
  },
  it: {
    label: 'Chiarimento sul gameplay · 10 settembre 2026',
    title: 'Logistica, lavori, competizioni e ricompense sono sistemi di gioco',
    paragraphs: [
      `Vendita e noleggio di camion, consegne, lavori di manutenzione, lavori nelle Aziende, completamento automatico previsto dal gioco, classifiche, competizioni e ricompense gratuite sono meccaniche normali di TycoonX. Un prezzo elevato per un camion, uno stipendio alto ma legittimo, molte consegne, una posizione alta, più vittorie o una ricompensa casuale favorevole non costituiscono automaticamente un abuso. Commissioni, limiti di noleggio, tempi di consegna, requisiti di lavoro, tabelle delle ricompense, formati delle competizioni e regole di classifica possono essere modificati per il futuro per legittime ragioni di gioco, nel rispetto dei diritti inderogabili applicabili in materia di informazione, modifica, conformità, promozioni e recesso.`,
      `Non usare client modificati, API dirette, account controllati, lavori fittizi, scambi circolari di camion, progressi inventati, vittorie concordate, bot non autorizzati, dati di cooldown o ricompense alterati né bug di duplicazione, replay o race per creare o trasferire valore, forzare attività di sistema, ottenere ricompense ripetute, manipolare classifiche, nascondere proventi di exploit o facilitare commercio vietato con denaro reale. Il completamento automatico dei lavori e i regolamenti gestiti da TycoonX sono automazione prevista dal gioco, non bot del giocatore. Una richiesta accettata dal server per un errore di autorizzazione o validazione non rende lecita una manipolazione consapevole; una singola anomalia non prova però una violazione.`,
      `Quando TycoonX offre chiaramente un'accelerazione della consegna pagando Diamonds, il costo mostrato acquista quella specifica accelerazione nel gioco, non garantisce l'esito della consegna, un profitto o una posizione in classifica. Se un difetto addebita Diamonds senza fornire l'azione rappresentata, la transazione direttamente interessata deve essere riconciliata secondo i diritti applicabili. Una correzione di gameplay non giustifica da sola la rimozione di Diamonds validamente acquistati e non collegati, del VIP una tantum di 30 giorni o di Lifetime VIP. CK-Labs deve distinguere interruzioni, dati non aggiornati, errori isolati e account compromessi dallo sfruttamento consapevole o ripetuto e correggere in modo proporzionato punteggi, ricompense o valori invalidi direttamente attribuibili.`,
    ],
  },
  pt: {
    label: 'Esclarecimento de jogabilidade · 10 de setembro de 2026',
    title: 'Logística, empregos, competições e recompensas são sistemas do jogo',
    paragraphs: [
      `A compra, venda e aluguer de camiões, as entregas, os trabalhos de manutenção, os empregos em Empresas, a conclusão automática de trabalhos pelo próprio jogo, as classificações, competições e recompensas gratuitas são mecânicas normais do TycoonX. Um camião caro, um salário elevado mas legítimo, muitas entregas, uma posição alta, várias vitórias ou uma recompensa aleatória favorável não constituem automaticamente abuso. Taxas, limites de aluguer, prazos de entrega, requisitos de emprego, tabelas de recompensas, formatos de competição e regras de classificação podem ser ajustados para o futuro por razões legítimas do jogo, sem prejuízo dos direitos imperativos aplicáveis de informação, alteração, conformidade, promoção e resolução.`,
      `Não utilize clientes modificados, APIs diretas, contas sob o seu controlo, empregos fictícios, transações circulares de camiões, progresso fabricado, combinação de vitórias, bots não autorizados, registos de cooldown ou recompensa alterados nem falhas de duplicação, repetição ou concorrência para criar ou canalizar valor, forçar tarefas do sistema, obter recompensas repetidas, manipular classificações, ocultar proveitos de exploits ou facilitar comércio proibido por dinheiro real. A conclusão automática de trabalhos e os acertos efetuados pelo TycoonX são automação prevista do jogo, não bots de jogadores. Uma operação aceite pelo servidor devido a uma falha de permissões ou validação não legitima uma manipulação consciente; uma anomalia isolada também não prova uma infração.`,
      `Quando o TycoonX apresentar claramente uma aceleração de entrega paga com Diamonds, o custo indicado compra essa aceleração elegível no jogo, não um resultado de entrega, lucro ou posição garantidos. Se uma falha debitar Diamonds sem fornecer a ação anunciada, a transação diretamente afetada deve ser reconciliada de acordo com os direitos aplicáveis. Uma correção de jogabilidade não justifica, por si só, retirar Diamonds comprados validamente e sem relação, o VIP único de 30 dias ou Lifetime VIP. A CK-Labs deve distinguir falhas de serviço, estado desatualizado, erros pontuais e contas comprometidas de exploração consciente ou repetida, corrigindo proporcionalmente pontuações, recompensas ou valores inválidos diretamente atribuíveis.`,
    ],
  },
  pt_BR: {
    label: 'Esclarecimento de gameplay · 10 de setembro de 2026',
    title: 'Logística, empregos, competições e recompensas são sistemas do jogo',
    paragraphs: [
      `Compra, venda e aluguel de caminhões, entregas, trabalhos de manutenção, vagas em Empresas, conclusão automática pelo próprio jogo, rankings, competições e recompensas gratuitas são mecânicas normais do TycoonX. Um caminhão caro, um salário alto porém válido, muitas entregas, uma posição elevada, várias vitórias ou uma recompensa aleatória boa não significam automaticamente abuso. Taxas, limites de aluguel, tempos de entrega, requisitos de vaga, tabelas de recompensa, formatos de competição e regras de ranking podem ser ajustados para o futuro por motivos legítimos de jogo, sempre respeitando direitos obrigatórios aplicáveis de informação, alteração, conformidade, promoções e encerramento.`,
      `Não use cliente modificado, API direta, contas sob seu controle, vagas de fachada, negociações circulares de caminhões, progresso inventado, combinação de vitórias, bots não autorizados, registros de cooldown ou recompensa alterados nem bugs de duplicação, replay ou race para criar ou transferir valor, forçar tarefas do sistema, receber a mesma recompensa várias vezes, manipular ranking, esconder ganhos de exploit ou facilitar comércio proibido com dinheiro real. A conclusão automática de trabalhos e as liquidações operadas pelo TycoonX são automação prevista do jogo, não bot do jogador. Uma solicitação aceita pelo servidor por falha de permissão ou validação não torna legítima uma manipulação consciente; uma anomalia isolada também não prova violação.`,
      `Se o TycoonX oferecer claramente uma aceleração de entrega paga com Diamonds, o custo exibido compra aquela aceleração elegível dentro do jogo, não garante resultado da entrega, lucro ou posição no ranking. Se um defeito cobrar Diamonds e não fornecer a ação anunciada, a transação diretamente afetada deve ser conciliada conforme os direitos aplicáveis. Uma correção de gameplay não é, por si só, motivo para remover Diamonds comprados validamente e sem relação, VIP único de 30 dias ou Lifetime VIP. A CK-Labs deve diferenciar indisponibilidade, estado desatualizado, erro isolado e conta comprometida de exploração consciente ou repetida e corrigir de forma proporcional pontuações, recompensas ou valores inválidos diretamente atribuíveis.`,
    ],
  },
  ru: {
    label: 'Уточнение правил игры · 10 сентября 2026 г.',
    title: 'Логистика, работа, соревнования и награды являются игровыми системами',
    paragraphs: [
      `Продажа и аренда грузовиков, доставки, работы по обслуживанию, вакансии Компаний, автоматическое выполнение заданий самой игрой, рейтинги, соревнования и бесплатные игровые награды являются обычными механиками TycoonX. Высокая цена грузовика, высокая, но допустимая зарплата, множество доставок, высокий рейтинг, повторные победы или удачная случайная награда сами по себе не означают злоупотребление. Комиссии, ограничения аренды, сроки доставки, требования к вакансиям, таблицы наград, форматы соревнований и правила рейтингов могут меняться на будущее по обоснованным игровым причинам с сохранением применимых обязательных прав на информацию, изменение, соответствие, корректную рекламу и прекращение договора.`,
      `Не используйте модифицированный клиент, прямые API-вызовы, подконтрольные аккаунты, фиктивные вакансии, круговые сделки с грузовиками, поддельный прогресс, договорные победы, неразрешённых ботов, изменённые данные кулдауна или наград, а также ошибки дублирования, повторного запроса или гонки для создания или перекачки ценности, принудительного запуска системных заданий, многократного получения наград, манипуляции рейтингами, сокрытия выгоды от эксплойтов или запрещённой торговли за реальные деньги. Автоматическое выполнение заданий и расчёты, которые запускает TycoonX, являются штатной автоматизацией игры, а не ботом игрока. То, что сервер принял запрос из-за ошибки прав или проверки, не делает сознательную манипуляцию допустимой; одна аномалия также не доказывает нарушение.`,
      `Если TycoonX явно предлагает ускорить доставку за Diamonds, указанная стоимость покупает соответствующее ускорение внутри игры, а не гарантированный результат доставки, прибыль или место в рейтинге. Если из-за ошибки Diamonds списаны, а заявленное действие не выполнено, непосредственно затронутая операция должна быть исправлена с учётом применимых прав. Исправление игрового состояния само по себе не является основанием удалять не связанные с ним действительные купленные Diamonds, разовый VIP на 30 дней или Lifetime VIP. CK-Labs должна отличать сбои, устаревшее состояние, единичную случайную ошибку и взлом аккаунта от сознательного или повторного использования уязвимости и пропорционально исправлять непосредственно относимые недействительные очки, награды или ценность.`,
    ],
  },
  ja: {
    label: 'ゲームプレイに関する補足 · 2026年9月10日',
    title: '物流、仕事、競争、報酬はゲーム内システムです',
    paragraphs: [
      `TycoonX のトラック売買・レンタル、配送、ケアジョブ、会社の求人、ゲーム側による自動ジョブ完了、ランキング、競争、無料のゲーム内報酬は、いずれも想定されたシミュレーション要素です。高額なトラック価格、正当な高額給与、多数の配送、高順位、連勝、あるいは運の良いランダム報酬だけで不正と判断されることはありません。手数料、レンタル制限、配送時間、求人条件、報酬表、競争形式、ランキング方式などのパラメータは、適用される強行的な通知・変更・適合性・表示・契約終了に関する権利を守ったうえで、正当なゲーム運営上の理由により将来に向けて調整されることがあります。`,
      `価値の不正生成・移転、システムジョブの強制実行、報酬の重複取得、ランキング操作、exploit 由来価値の隠蔽、禁止されたリアルマネートレードのために、改変クライアント、直接 API、管理下の複数アカウント、形だけの求人、トラックの循環取引、架空の進行、勝敗の談合、未許可 bot、改変したクールダウン・報酬記録、duplicate/replay/race バグなどを利用しないでください。TycoonX が運営する自動ジョブ完了やシステム決済はゲームの仕様であり、プレイヤー bot ではありません。権限や検証の不具合でサーバーが要求を受理しても、故意の操作が正当化されるわけではありません。一方で、単なる異常値だけを不正の証拠とはしません。`,
      `TycoonX が Diamonds を使う配送スピードアップを明確に提示した場合、表示された Diamond 代金で得られるのは対象となるゲーム内加速であり、配送結果、利益、順位の保証ではありません。不具合で Diamonds だけが差し引かれ、表示された処理が提供されなかった場合は、適用法上の権利に従い、その取引を直接調整します。ゲーム状態の修正だけを理由に、無関係な正規購入 Diamonds、買い切り30日 VIP、Lifetime VIP を取り消すべきではありません。CK-Labs は、障害、古い状態表示、単発の誤操作、アカウント侵害と、故意または反復的な exploit を区別し、直接起因する無効なスコア・報酬・価値を比例的に修正します。`,
    ],
  },
  ko: {
    label: '게임플레이 안내 · 2026년 9월 10일',
    title: '물류, 일자리, 경쟁 및 보상은 게임 시스템입니다',
    paragraphs: [
      `TycoonX의 트럭 판매·임대, 배송, 관리 작업, 회사 채용, 게임 자체의 자동 작업 완료, 순위표, 경쟁 콘텐츠 및 무료 게임 보상은 정상적인 시뮬레이션 기능입니다. 비싼 트럭 가격, 정상적으로 설정된 높은 급여, 많은 배송, 높은 순위, 연속 승리 또는 운 좋은 무작위 보상만으로 부정행위가 되는 것은 아닙니다. 수수료, 임대 제한, 배송 시간, 채용 조건, 보상표, 경쟁 방식 및 랭킹 규칙은 적용되는 강행적 고지·변경·적합성·프로모션·계약 종료 권리를 보장하는 범위에서 합리적인 게임 운영 사유로 향후 조정될 수 있습니다.`,
      `가치를 만들거나 빼돌리고, 시스템 작업을 강제로 실행하고, 보상을 반복 수령하고, 순위를 조작하고, exploit 수익을 숨기거나 금지된 현금거래를 돕기 위해 변조 클라이언트, 직접 API, 통제 계정, 위장 채용, 트럭 순환거래, 조작된 진행도, 승부 조작, 승인되지 않은 봇, 변경한 쿨다운·보상 기록, 중복·replay·race 버그 등의 기술적 약점을 사용하지 마세요. TycoonX가 운영하는 자동 작업 완료와 시스템 정산은 의도된 게임 자동화이며 플레이어 봇이 아닙니다. 권한 또는 검증 결함 때문에 서버가 요청을 수락했다고 해서 고의 조작이 정당해지는 것은 아니며, 단일 이상 현상만으로 위반이 입증되는 것도 아닙니다.`,
      `TycoonX가 Diamonds로 배송 속도를 높이는 기능을 명확하게 제공하는 경우, 표시된 Diamond 비용은 해당 게임 내 가속을 구매하는 것이며 특정 배송 결과, 수익 또는 순위를 보장하지 않습니다. 결함으로 Diamonds가 차감되었지만 표시된 기능이 제공되지 않았다면 적용되는 권리에 따라 직접 영향을 받은 거래를 조정해야 합니다. 단순한 게임플레이 수정만을 이유로 무관한 정상 구매 Diamonds, 일회성 30일 VIP 또는 Lifetime VIP를 제거해서는 안 됩니다. CK-Labs는 장애, 오래된 상태, 일회성 실수, 계정 탈취와 고의적·반복적 exploit을 구분하고 직접 귀속되는 잘못된 점수, 보상 또는 가치를 비례적으로 수정해야 합니다.`,
    ],
  },
  zh: {
    label: '游戏规则说明 · 2026年9月10日',
    title: '物流、工作、竞赛和奖励都是游戏系统',
    paragraphs: [
      `TycoonX 中的卡车买卖与租赁、配送、维护工作、公司招聘、游戏自带的自动工作完成、排行榜、竞赛以及免费游戏奖励，都是正常的模拟经营机制。卡车价格较高、合法工资较高、频繁配送、排名靠前、多次获胜或随机获得较好的奖励，本身都不等于违规。手续费、租赁限制、配送时间、招聘条件、奖励表、竞赛形式和排名规则等游戏参数，可因合理的游戏运营需要面向未来调整，同时保留适用法律要求的通知、变更、合同符合性、促销和终止等强制性权利。`,
      `不得利用修改版客户端、直接 API、受你控制的账号、虚假工作、卡车循环交易、伪造进度、互相送胜、未经授权的机器人、篡改的冷却或奖励记录，以及重复、重放或竞态漏洞，来制造或转移价值、强制触发系统任务、重复领取奖励、操纵排名、隐藏 exploit 收益或协助被禁止的现实货币交易。由 TycoonX 自身运行的自动工作完成和系统结算属于正常游戏自动化，不是玩家机器人。服务器因权限或验证缺陷而接受请求，并不会让明知的操纵行为变得合法；单独一个异常现象也不足以证明违规。`,
      `如果 TycoonX 明确提供使用 Diamonds 加速配送的功能，页面显示的 Diamond 费用购买的是符合条件的游戏内加速，不保证具体配送结果、利润或排名。若因缺陷扣除了 Diamonds 却没有提供所展示的操作，应根据适用权利核对并纠正直接受影响的交易。仅因修正游戏状态，不应顺带移除无关且有效购买的 Diamonds、一次性 30 天 VIP 或 Lifetime VIP。CK-Labs 应区分服务中断、状态过期、偶发误操作、账号被盗和明知或重复利用漏洞的行为，并按比例纠正能够直接归因的无效分数、奖励或价值。`,
    ],
  },
  zh_Hans: {
    label: '游戏规则说明 · 2026年9月10日',
    title: '物流、工作、竞赛与奖励属于游戏系统',
    paragraphs: [
      `TycoonX 的卡车交易与租赁、配送、维护工作、公司职位、游戏内自动完成任务、排行榜、竞赛以及免费游戏奖励，都是正常的模拟玩法。卡车售价很高、工资较高但合法、经常配送、排名靠前、连续获胜或随机抽到较好的奖励，并不会因此自动被视为滥用。手续费、租赁限制、配送时间、职位要求、奖励表、竞赛形式和排名规则等参数，可以基于正当的游戏运营理由面向未来调整，但仍须遵守适用的强制性通知、变更、合同符合性、促销和终止权利。`,
      `请勿使用修改版客户端、直接 API、受你控制的多个账号、虚假职位、卡车循环交易、伪造进度、互相送胜、未经许可的机器人、被篡改的冷却/奖励记录，以及重复、replay 或 race 漏洞，来制造或输送价值、强制触发系统工作、重复领取奖励、操纵排行榜、隐藏 exploit 收益或进行被禁止的现实货币交易。由 TycoonX 运行的自动工作完成和系统结算是游戏自身的自动化功能，不属于玩家使用机器人。服务器因为权限或验证漏洞接受了请求，不代表明知的操纵因此有效；同样，单个异常现象也不能单独作为违规结论。`,
      `当 TycoonX 明确提供消耗 Diamonds 的配送加速时，显示的 Diamond 费用购买的是该项符合条件的游戏内加速，并不保证配送结果、利润或排名。如果系统缺陷扣除了 Diamonds 却没有提供所描述的加速，应依照适用权利核对并纠正直接受影响的交易。修正某项游戏状态本身，不应成为删除无关且有效购买的 Diamonds、一次性 30 天 VIP 或 Lifetime VIP 的理由。CK-Labs 应区分中断、过期状态、一次性误操作、账号被盗与明知或反复利用漏洞，并对能够直接归因的无效分数、奖励或价值进行适度纠正。`,
    ],
  },
  zh_Hant: {
    label: '遊戲規則說明 · 2026年9月10日',
    title: '物流、工作、競賽與獎勵都是遊戲系統',
    paragraphs: [
      `TycoonX 的卡車買賣與租賃、配送、維護工作、公司職缺、遊戲內自動完成工作、排行榜、競賽及免費遊戲獎勵，都是正常的模擬玩法。卡車價格很高、薪資較高但合法、頻繁配送、排名靠前、多次獲勝或隨機獲得較好的獎勵，本身並不代表濫用。手續費、租賃限制、配送時間、職缺條件、獎勵表、競賽形式及排名規則等參數，可基於正當的遊戲營運理由對未來進行調整，但仍須遵守適用的強制通知、變更、契約符合性、促銷及終止權利。`,
      `請勿利用修改版客戶端、直接 API、受你控制的帳號、虛假工作、卡車循環交易、偽造進度、互相送勝、未授權機器人、被竄改的冷卻或獎勵紀錄，以及重複、replay 或 race 漏洞，來製造或輸送價值、強制觸發系統工作、重複領取獎勵、操縱排名、隱藏 exploit 所得或協助被禁止的現金交易。TycoonX 自行執行的自動工作完成及系統結算屬於正常遊戲自動化，不是玩家機器人。伺服器因權限或驗證缺陷接受請求，並不會讓明知的操縱因此變得正當；單一異常也不足以證明違規。`,
      `若 TycoonX 明確提供以 Diamonds 加速配送的功能，畫面顯示的 Diamond 費用購買的是該項符合條件的遊戲內加速，不保證特定配送結果、利潤或排名。若系統缺陷扣除 Diamonds 卻未提供所描述的操作，應依適用權利核對並修正直接受影響的交易。單純為了修正遊戲狀態，不應順帶移除無關且有效購買的 Diamonds、一次性 30 天 VIP 或 Lifetime VIP。CK-Labs 應區分服務中斷、過期狀態、單次誤操作、帳號遭入侵與明知或反覆利用漏洞，並按比例修正可直接歸因的無效分數、獎勵或價值。`,
    ],
  },
  ar: {
    label: 'توضيح لقواعد اللعب · 10 سبتمبر 2026',
    title: 'الخدمات اللوجستية والوظائف والمسابقات والمكافآت أنظمة داخل اللعبة',
    paragraphs: [
      `بيع الشاحنات وتأجيرها وعمليات التوصيل ووظائف العناية ووظائف الشركات والإكمال التلقائي للمهام بواسطة اللعبة ولوحات الصدارة والمسابقات والمكافآت المجانية كلها آليات مقصودة في TycoonX. ارتفاع سعر شاحنة، أو راتب مشروع وكبير، أو كثرة التوصيلات، أو تحقيق مركز مرتفع، أو تكرار الفوز، أو الحصول على مكافأة عشوائية جيدة لا يُعد وحده إساءة استخدام. يمكن تعديل الرسوم وحدود الإيجار وأوقات التوصيل ومتطلبات الوظائف وجداول المكافآت وصيغ المسابقات وقواعد التصنيف للمستقبل لأسباب مشروعة تتعلق باللعبة، مع احترام حقوق الإخطار والتعديل والمطابقة والعروض وإنهاء العقد الإلزامية متى كانت واجبة التطبيق.`,
      `لا تستخدم عميلاً معدلاً أو واجهات API مباشرة أو حسابات تسيطر عليها أو وظائف صورية أو تداولاً دائرياً للشاحنات أو تقدماً مزيفاً أو ترتيب انتصارات أو روبوتات غير مصرح بها أو سجلات انتظار/مكافآت معدلة أو أخطاء التكرار وإعادة الإرسال والتسابق لإنشاء قيمة أو تمريرها، أو تشغيل مهام النظام قسراً، أو تحصيل المكافآت مراراً، أو التلاعب بالتصنيفات، أو إخفاء عائدات الاستغلال، أو تسهيل التداول المحظور بأموال حقيقية. الإكمال التلقائي للوظائف والتسويات التي تديرها TycoonX هي أتمتة مقصودة في اللعبة وليست روبوتاً يستخدمه اللاعب. قبول الخادم لطلب بسبب خلل في الصلاحيات أو التحقق لا يجعل التلاعب المتعمد مشروعاً، كما أن وجود حالة شاذة وحده لا يثبت المخالفة.`,
      `إذا عرضت TycoonX بوضوح تسريع توصيل مقابل Diamonds، فإن تكلفة Diamonds المعروضة تشتري التسريع المؤهل داخل اللعبة ولا تضمن نتيجة توصيل أو ربحاً أو ترتيباً معيناً. إذا خُصمت Diamonds بسبب خلل دون تنفيذ الإجراء المعروض، فيجب تسوية المعاملة المتأثرة مباشرة وفق الحقوق الواجبة التطبيق. ولا ينبغي أن يؤدي تصحيح حالة في اللعب وحده إلى حذف Diamonds صحيحة وغير مرتبطة تم شراؤها، أو VIP لمدة 30 يوماً لمرة واحدة، أو Lifetime VIP. على CK-Labs التمييز بين الأعطال والحالة القديمة والخطأ العرضي لمرة واحدة واختراق الحساب وبين الاستغلال المتعمد أو المتكرر، وتصحيح النقاط أو المكافآت أو القيمة غير الصحيحة المنسوبة مباشرة وبشكل متناسب مع الحفاظ على جميع الحقوق الإلزامية وغير القابلة للتنازل.`,
    ],
  },
  nl: {
    label: 'Gameplay-uitleg · 10 september 2026',
    title: 'Logistiek, banen, competities en beloningen zijn spelsystemen',
    paragraphs: [
      `Het kopen, verkopen en verhuren van trucks, leveringen, verzorgingsbanen, bedrijfsbanen, automatische taakafhandeling door het spel, ranglijsten, competities en gratis gameplaybeloningen zijn normale onderdelen van TycoonX. Een hoge truckprijs, een hoog maar geldig salaris, veel leveringen, een hoge positie, meerdere overwinningen of een gunstige willekeurige beloning zijn op zichzelf geen misbruik. Kosten, huurlimieten, levertijden, functie-eisen, beloningstabellen, wedstrijdvormen en ranglijstregels kunnen voor de toekomst om legitieme spelredenen worden aangepast, met behoud van toepasselijke dwingende rechten rond informatie, wijzigingen, conformiteit, promoties en beëindiging.`,
      `Gebruik geen aangepaste client, directe API's, accounts onder jouw controle, schijnbanen, circulaire trucktransacties, verzonnen voortgang, afgesproken overwinningen, ongeautoriseerde bots, aangepaste cooldown- of beloningsgegevens of duplicate-, replay- of racebugs om waarde te creëren of door te sluizen, systeemtaken af te dwingen, beloningen vaker te innen, ranglijsten te manipuleren, exploitopbrengsten te verbergen of verboden handel voor echt geld mogelijk te maken. Automatische taakafhandeling en systeemafrekening door TycoonX zijn bedoelde spelautomatisering en geen spelersbot. Dat een server een verzoek door een toestemmings- of validatiefout accepteert, maakt bewuste manipulatie niet geldig; één afwijking bewijst evenmin een overtreding.`,
      `Als TycoonX duidelijk een leveringsversnelling tegen Diamonds aanbiedt, koopt de getoonde Diamond-prijs die in aanmerking komende versnelling in het spel, niet een gegarandeerd leveringsresultaat, winst of rang. Worden Diamonds door een fout afgeschreven zonder dat de getoonde actie wordt geleverd, dan moet de direct getroffen transactie volgens de toepasselijke rechten worden hersteld. Een gameplaycorrectie is op zichzelf geen reden om losstaande geldig gekochte Diamonds, eenmalige 30-Dagen-VIP of Lifetime VIP te verwijderen. CK-Labs moet storingen, verouderde status, eenmalige vergissingen en gecompromitteerde accounts onderscheiden van bewuste of herhaalde exploitatie en direct toerekenbare ongeldige scores, beloningen of waarde evenredig corrigeren.`,
    ],
  },
  sv: {
    label: 'Förtydligande om spelet · 10 september 2026',
    title: 'Logistik, jobb, tävlingar och belöningar är spelsystem',
    paragraphs: [
      `Köp, försäljning och uthyrning av lastbilar, leveranser, skötseljobb, företagsjobb, automatisk slutföring som drivs av spelet, topplistor, tävlingar och kostnadsfria spelbelöningar är avsedda delar av TycoonX. Ett högt lastbilspris, en hög men giltig lön, många leveranser, en hög placering, upprepade vinster eller en gynnsam slumpbelöning är inte automatiskt missbruk. Avgifter, hyresgränser, leveranstider, jobbkrav, belöningstabeller, tävlingsformat och rankningsregler kan ändras framåt av legitima spelskäl, med respekt för tillämpliga tvingande rättigheter om information, ändringar, avtalsenlighet, kampanjer och uppsägning.`,
      `Använd inte modifierade klienter, direkta API:er, konton du kontrollerar, skenjobb, cirkulära lastbilsaffärer, påhittade framsteg, uppgjorda vinster, otillåtna botar, ändrade cooldown- eller belöningsposter eller duplicate-, replay- och racebuggar för att skapa eller flytta värde, tvinga systemjobb, få samma belöning flera gånger, manipulera rankningar, dölja exploit-värde eller möjliggöra förbjuden handel för riktiga pengar. Automatisk jobbhantering och systemavräkning som drivs av TycoonX är avsedd spelautomatisering, inte en spelarbot. Att servern accepterar en begäran på grund av ett behörighets- eller valideringsfel gör inte medveten manipulation legitim; en avvikelse i sig bevisar inte heller regelbrott.`,
      `När TycoonX tydligt erbjuder snabbare leverans mot Diamonds köper den visade Diamond-kostnaden den berättigade accelerationen i spelet, inte ett garanterat leveransresultat, vinst eller rankningsutfall. Om ett fel drar Diamonds utan att ge den beskrivna åtgärden ska den direkt berörda transaktionen rättas enligt tillämpliga rättigheter. En korrigering av speldata är inte i sig skäl att ta bort orelaterade giltigt köpta Diamonds, engångs-VIP i 30 dagar eller Lifetime VIP. CK-Labs ska skilja driftstörningar, inaktuell status, enstaka misstag och kapade konton från medvetet eller upprepat utnyttjande och proportionerligt rätta direkt hänförliga ogiltiga poäng, belöningar eller värden.`,
    ],
  },
  nb: {
    label: 'Presisering av spillreglene · 10. september 2026',
    title: 'Logistikk, jobber, konkurranser og belønninger er spillsystemer',
    paragraphs: [
      `Kjøp, salg og utleie av lastebiler, leveranser, omsorgsjobber, bedriftsjobber, automatisk jobbfullføring som styres av spillet, topplister, konkurranser og gratis spillbelønninger er tiltenkte deler av TycoonX. Høy lastebilpris, høy men gyldig lønn, mange leveranser, høy plassering, gjentatte seire eller en heldig tilfeldig belønning er ikke automatisk misbruk. Gebyrer, leiegrenser, leveringstider, jobbkrav, belønningstabeller, konkurranseformater og rangeringsregler kan justeres fremover av legitime spillgrunner, med forbehold om ufravikelige rettigheter som gjelder informasjon, endringer, avtalemessighet, kampanjer og oppsigelse.`,
      `Ikke bruk modifiserte klienter, direkte API-er, kontoer du kontrollerer, proformajobber, sirkulære lastebilhandler, oppdiktet fremgang, avtalte seire, uautoriserte boter, endrede cooldown- eller belønningsdata eller duplicate-, replay- og race-feil for å skape eller flytte verdi, tvinge systemjobber, hente samme belønning flere ganger, manipulere rangeringer, skjule exploit-utbytte eller legge til rette for forbudt handel med ekte penger. Automatisk jobbfullføring og systemoppgjør som TycoonX kjører, er tilsiktet spillautomatisering og ikke en spillerbot. En serverforespørsel som godtas på grunn av en tillatelses- eller valideringsfeil, gjør ikke bevisst manipulering legitim; ett avvik alene beviser heller ikke et regelbrudd.`,
      `Når TycoonX tydelig tilbyr levering som kan fremskyndes med Diamonds, kjøper den viste Diamond-kostnaden den kvalifiserte akselerasjonen i spillet, ikke et garantert leveringsresultat, overskudd eller rangering. Hvis en feil trekker Diamonds uten å gi den beskrevne handlingen, skal den direkte berørte transaksjonen avstemmes i samsvar med gjeldende rettigheter. En spillkorrigering er ikke i seg selv grunn til å fjerne urelaterte, gyldig kjøpte Diamonds, engangs-VIP i 30 dager eller Lifetime VIP. CK-Labs skal skille driftsfeil, utdatert tilstand, enkeltstående feil og kompromitterte kontoer fra bevisst eller gjentatt utnyttelse og korrigere direkte henførbare ugyldige poeng, belønninger eller verdier forholdsmessig.`,
    ],
  },
  pl: {
    label: 'Wyjaśnienie zasad rozgrywki · 10 września 2026 r.',
    title: 'Logistyka, praca, zawody i nagrody są systemami gry',
    paragraphs: [
      `Kupno, sprzedaż i wynajem ciężarówek, dostawy, prace związane z opieką, oferty pracy w Firmach, automatyczne wykonywanie zadań przez grę, rankingi, zawody i darmowe nagrody za rozgrywkę są normalnymi mechanikami TycoonX. Wysoka cena ciężarówki, wysokie lecz prawidłowe wynagrodzenie, wiele dostaw, wysoka pozycja, powtarzające się zwycięstwa lub korzystna losowa nagroda same w sobie nie oznaczają nadużycia. Opłaty, limity wynajmu, czasy dostaw, wymagania dotyczące pracy, tabele nagród, formaty zawodów i zasady rankingów mogą być zmieniane na przyszłość z uzasadnionych powodów związanych z grą, z zachowaniem obowiązujących bezwzględnie praw dotyczących informacji, zmian, zgodności, promocji i zakończenia umowy.`,
      `Nie używaj zmodyfikowanych klientów, bezpośrednich API, kontrolowanych kont, fikcyjnych ofert pracy, okrężnych transakcji ciężarówkami, sfałszowanych postępów, ustawiania zwycięstw, nieautoryzowanych botów, zmienionych danych cooldownu lub nagród ani błędów duplicate, replay lub race do tworzenia lub przesyłania wartości, wymuszania zadań systemowych, wielokrotnego odbierania nagród, manipulowania rankingami, ukrywania korzyści z exploitów lub ułatwiania zakazanego handlu za prawdziwe pieniądze. Automatyczne wykonywanie prac i rozliczenia prowadzone przez TycoonX są zamierzoną automatyzacją gry, a nie botem gracza. Przyjęcie żądania przez serwer wskutek błędu uprawnień lub walidacji nie legalizuje świadomej manipulacji; sama anomalia również nie dowodzi naruszenia.`,
      `Jeżeli TycoonX wyraźnie oferuje przyspieszenie dostawy za Diamonds, pokazany koszt kupuje kwalifikujące się przyspieszenie w grze, a nie gwarantowany wynik dostawy, zysk czy miejsce w rankingu. Jeśli błąd pobierze Diamonds, ale nie zapewni przedstawionej czynności, bezpośrednio dotknięta transakcja powinna zostać uzgodniona zgodnie z obowiązującymi prawami. Sama korekta rozgrywki nie uzasadnia usunięcia niezwiązanych z nią, prawidłowo kupionych Diamonds, jednorazowego VIP na 30 dni ani Lifetime VIP. CK-Labs powinna odróżniać awarie, nieaktualny stan, jednorazowe pomyłki i przejęte konta od świadomego lub powtarzanego wykorzystywania błędów oraz proporcjonalnie korygować bezpośrednio przypisane nieprawidłowe punkty, nagrody lub wartość.`,
    ],
  },
  th: {
    label: 'คำชี้แจงการเล่น · 10 กันยายน 2026',
    title: 'โลจิสติกส์ งาน การแข่งขัน และรางวัลเป็นระบบภายในเกม',
    paragraphs: [
      `การซื้อขายและให้เช่ารถบรรทุก การส่งของ งานดูแลกิจการ งานในบริษัท การทำงานอัตโนมัติที่ตัวเกมเป็นผู้ดำเนินการ ตารางคะแนน การแข่งขัน และรางวัลฟรีจากการเล่น ล้วนเป็นกลไกปกติของ TycoonX ราคาขายรถบรรทุกที่สูง เงินเดือนที่สูงแต่ถูกต้อง การส่งของจำนวนมาก อันดับสูง การชนะหลายครั้ง หรือสุ่มได้รางวัลดี ไม่ถือว่าเป็นการโกงโดยอัตโนมัติ ค่าธรรมเนียม ข้อจำกัดการเช่า ระยะเวลาส่งของ คุณสมบัติงาน ตารางรางวัล รูปแบบการแข่งขัน และกติกาการจัดอันดับอาจปรับสำหรับอนาคตได้ด้วยเหตุผลด้านเกมที่สมควร โดยยังคงสิทธิบังคับตามกฎหมายที่เกี่ยวกับการแจ้ง การเปลี่ยนแปลง ความสอดคล้อง โปรโมชั่น และการยุติสัญญา`,
      `ห้ามใช้ไคลเอนต์ดัดแปลง API โดยตรง บัญชีที่คุณควบคุม งานหลอก การซื้อขายรถบรรทุกวนกัน ความคืบหน้าปลอม การฮั้วผลแพ้ชนะ บอตที่ไม่ได้รับอนุญาต ข้อมูลคูลดาวน์หรือรางวัลที่ถูกแก้ไข หรือบั๊กแบบ duplicate, replay หรือ race เพื่อสร้างหรือส่งต่อมูลค่า บังคับงานระบบ รับรางวัลซ้ำ ปั่นอันดับ ซ่อนผลประโยชน์จาก exploit หรือช่วยการซื้อขายด้วยเงินจริงที่ห้ามไว้ ระบบทำงานอัตโนมัติและการชำระผลที่ TycoonX เป็นผู้ดำเนินการเป็นระบบอัตโนมัติของเกม ไม่ใช่บอตของผู้เล่น การที่เซิร์ฟเวอร์รับคำขอเพราะช่องโหว่ด้านสิทธิ์หรือการตรวจสอบไม่ได้ทำให้การดัดแปลงโดยเจตนากลายเป็นสิ่งถูกต้อง และความผิดปกติเพียงอย่างเดียวก็ไม่ใช่หลักฐานการโกง`,
      `หาก TycoonX แสดงชัดเจนว่าสามารถใช้ Diamonds เพื่อเร่งการส่งของ ค่า Diamonds ที่แสดงคือการซื้อสิทธิ์เร่งเวลาภายในเกมที่เข้าเงื่อนไข ไม่ใช่การรับประกันผลการส่งของ กำไร หรืออันดับ หากเกิดข้อบกพร่องที่หัก Diamonds แต่ไม่ได้มอบการเร่งตามที่แสดง ธุรกรรมที่ได้รับผลโดยตรงควรได้รับการแก้ไขตามสิทธิที่ใช้บังคับ การแก้สถานะเกมอย่างเดียวไม่ควรเป็นเหตุให้ลบ Diamonds ที่ซื้ออย่างถูกต้องและไม่เกี่ยวข้อง, VIP 30 วันแบบครั้งเดียว หรือ Lifetime VIP CK-Labs ควรแยกเหตุขัดข้อง สถานะเก่า ความผิดพลาดครั้งเดียว และบัญชีที่ถูกยึดจากการใช้ช่องโหว่โดยเจตนาหรือซ้ำ ๆ และแก้คะแนน รางวัล หรือมูลค่าที่ไม่ถูกต้องโดยตรงอย่างได้สัดส่วน`,
    ],
  },
  vi: {
    label: 'Làm rõ quy tắc chơi · 10 tháng 9, 2026',
    title: 'Hậu cần, việc làm, thi đấu và phần thưởng là các hệ thống trong game',
    paragraphs: [
      `Mua bán và cho thuê xe tải, giao hàng, công việc chăm sóc, tuyển dụng tại Công ty, tự động hoàn thành công việc do game vận hành, bảng xếp hạng, cuộc thi và phần thưởng chơi miễn phí đều là cơ chế bình thường của TycoonX. Giá xe tải cao, mức lương cao nhưng hợp lệ, giao hàng thường xuyên, thứ hạng cao, thắng nhiều lần hoặc nhận phần thưởng ngẫu nhiên tốt không tự động đồng nghĩa với gian lận. Phí, giới hạn thuê, thời gian giao hàng, yêu cầu công việc, bảng phần thưởng, thể thức thi đấu và quy tắc xếp hạng có thể được điều chỉnh cho tương lai vì lý do vận hành game chính đáng, đồng thời vẫn tuân thủ các quyền bắt buộc áp dụng về thông báo, thay đổi, tính phù hợp, khuyến mại và chấm dứt.`,
      `Không sử dụng client đã chỉnh sửa, API trực tiếp, tài khoản do bạn kiểm soát, công việc giả, giao dịch xe tải vòng tròn, tiến độ bịa đặt, dàn xếp thắng thua, bot không được phép, bản ghi cooldown/phần thưởng bị sửa hay lỗi duplicate, replay, race để tạo hoặc chuyển giá trị, ép chạy tác vụ hệ thống, nhận lặp phần thưởng, thao túng bảng xếp hạng, che giấu lợi ích từ exploit hoặc hỗ trợ giao dịch tiền thật bị cấm. Việc tự động hoàn thành công việc và quyết toán do TycoonX vận hành là tự động hóa dự kiến của game, không phải bot của người chơi. Việc máy chủ chấp nhận yêu cầu do lỗi quyền hoặc kiểm tra không làm cho hành vi thao túng có chủ ý trở thành hợp lệ; một bất thường đơn lẻ cũng không tự chứng minh vi phạm.`,
      `Khi TycoonX hiển thị rõ tùy chọn tăng tốc giao hàng bằng Diamonds, số Diamonds hiển thị mua quyền tăng tốc đủ điều kiện trong game, chứ không bảo đảm kết quả giao hàng, lợi nhuận hay thứ hạng. Nếu lỗi hệ thống trừ Diamonds nhưng không cung cấp hành động đã mô tả, giao dịch bị ảnh hưởng trực tiếp cần được đối soát theo các quyền áp dụng. Việc sửa trạng thái gameplay không tự nó là lý do để xóa Diamonds hợp lệ đã mua nhưng không liên quan, VIP 30 ngày một lần hoặc Lifetime VIP. CK-Labs cần phân biệt sự cố dịch vụ, trạng thái cũ, lỗi vô ý một lần và tài khoản bị xâm nhập với việc cố ý hoặc lặp lại khai thác lỗi, đồng thời sửa theo tỷ lệ các điểm, phần thưởng hoặc giá trị không hợp lệ có thể quy trực tiếp.`,
    ],
  },
  uk: {
    label: 'Уточнення правил гри · 10 вересня 2026 р.',
    title: 'Логістика, робота, змагання та нагороди є ігровими системами',
    paragraphs: [
      `Продаж і оренда вантажівок, доставки, роботи з догляду, вакансії Компаній, автоматичне виконання завдань самою грою, рейтинги, змагання та безкоштовні ігрові нагороди є звичайними механіками TycoonX. Висока ціна вантажівки, висока, але належна зарплата, багато доставок, високе місце, повторні перемоги чи вдала випадкова нагорода самі по собі не є зловживанням. Комісії, межі оренди, час доставки, вимоги до вакансій, таблиці нагород, формати змагань і правила рейтингів можуть змінюватися на майбутнє з обґрунтованих ігрових причин із дотриманням застосовних обов'язкових прав щодо інформування, змін, відповідності, реклами та припинення договору.`,
      `Не використовуйте модифікований клієнт, прямі API, контрольовані акаунти, фіктивні вакансії, кругові угоди з вантажівками, вигаданий прогрес, домовлені перемоги, несанкціонованих ботів, змінені дані cooldown або нагород, а також помилки duplicate, replay чи race для створення або перекидання цінності, примусового запуску системних завдань, багаторазового отримання нагород, маніпуляції рейтингами, приховування вигоди від exploit або забороненої торгівлі за реальні гроші. Автоматичне виконання робіт і системні розрахунки, які запускає TycoonX, є передбаченою автоматизацією гри, а не ботом гравця. Запит, прийнятий сервером через помилку дозволів або перевірки, не робить свідому маніпуляцію законною; одна аномалія також не доводить порушення.`,
      `Якщо TycoonX чітко пропонує прискорення доставки за Diamonds, показана вартість купує відповідне прискорення в грі, а не гарантує результат доставки, прибуток або місце в рейтингу. Якщо через дефект Diamonds списано, але показану дію не надано, безпосередньо заторкнуту транзакцію слід узгодити відповідно до застосовних прав. Виправлення ігрового стану саме по собі не є підставою видаляти не пов'язані з ним чинно придбані Diamonds, одноразовий 30-денний VIP чи Lifetime VIP. CK-Labs має відрізняти збої, застарілий стан, одноразові випадкові помилки та скомпрометовані акаунти від свідомого чи повторного використання вразливостей і пропорційно коригувати безпосередньо пов'язані недійсні бали, нагороди або цінність.`,
    ],
  },
  hi: {
    label: 'गेमप्ले स्पष्टीकरण · 10 सितंबर 2026',
    title: 'लॉजिस्टिक्स, नौकरियाँ, प्रतियोगिताएँ और पुरस्कार गेम सिस्टम हैं',
    paragraphs: [
      `TycoonX में ट्रक की खरीद-बिक्री और किराया, डिलीवरी, care jobs, Company jobs, गेम द्वारा अपने-आप पूरा किया जाने वाला काम, leaderboards, competitions और मुफ्त gameplay rewards सामान्य simulation mechanics हैं। ट्रक की ऊँची कीमत, वैध लेकिन बड़ा वेतन, बहुत सी deliveries, ऊँची rank, कई wins या अच्छा random reward अपने-आप abuse नहीं माना जाता। Fees, rental limits, delivery times, job requirements, reward tables, competition formats और ranking rules जैसे game parameters वैध gameplay कारणों से भविष्य के लिए बदले जा सकते हैं, लेकिन लागू होने वाले अनिवार्य notice, change, conformity, promotion और termination rights बने रहते हैं।`,
      `Value बनाने या funnel करने, system jobs को जबरन चलाने, reward बार-बार लेने, ranking manipulate करने, exploit से मिली value छिपाने या प्रतिबंधित real-money trading में मदद के लिए modified client, direct API, आपके नियंत्रण वाले accounts, sham jobs, circular truck trades, fabricated progress, win trading, unauthorized bots, बदले हुए cooldown/reward records या duplicate, replay, race bugs का इस्तेमाल न करें। TycoonX द्वारा चलाया गया automatic job completion और system settlement गेम की तय automation है, player bot नहीं। Permission या validation defect के कारण server का request स्वीकार करना जानबूझकर की गई manipulation को वैध नहीं बनाता; केवल एक anomaly भी अपने-आप wrongdoing का सबूत नहीं है।`,
      `जहाँ TycoonX साफ तौर पर Diamonds देकर delivery speed-up देता है, दिखाया गया Diamond cost उस eligible in-game acceleration को खरीदता है, किसी खास delivery result, profit या ranking outcome की गारंटी नहीं। यदि defect Diamonds काटता है लेकिन बताई गई action नहीं देता, तो सीधे प्रभावित transaction को लागू rights के अनुसार reconcile किया जाना चाहिए। केवल gameplay correction के कारण असंबंधित वैध purchased Diamonds, one-time 30-Day VIP या Lifetime VIP हटाए नहीं जाने चाहिए। CK-Labs को outage, stale state, एक बार की accidental action और account compromise को जानबूझकर या बार-बार exploit करने से अलग करना चाहिए और सीधे संबंधित invalid scores, rewards या value को proportionately correct करना चाहिए।`,
    ],
  },
  id: {
    label: 'Penjelasan gameplay · 10 September 2026',
    title: 'Logistik, pekerjaan, kompetisi, dan hadiah adalah sistem game',
    paragraphs: [
      `Jual-beli dan sewa truk, pengiriman, pekerjaan perawatan, lowongan Perusahaan, penyelesaian pekerjaan otomatis oleh game, papan peringkat, kompetisi, dan hadiah gameplay gratis adalah mekanik normal TycoonX. Harga truk yang tinggi, gaji besar tetapi sah, banyak pengiriman, peringkat tinggi, kemenangan berulang, atau hadiah acak yang menguntungkan tidak otomatis berarti penyalahgunaan. Biaya, batas sewa, waktu pengiriman, syarat pekerjaan, tabel hadiah, format kompetisi, dan aturan peringkat dapat disesuaikan untuk masa depan demi alasan game yang sah, dengan tetap menghormati hak wajib yang berlaku mengenai pemberitahuan, perubahan, kesesuaian, promosi, dan penghentian.`,
      `Jangan gunakan client yang dimodifikasi, API langsung, akun yang Anda kendalikan, lowongan palsu, transaksi truk melingkar, progres palsu, pengaturan kemenangan, bot tanpa izin, catatan cooldown atau hadiah yang diubah, maupun bug duplicate, replay, atau race untuk menciptakan atau menyalurkan nilai, memaksa pekerjaan sistem, memperoleh hadiah berulang, memanipulasi peringkat, menyembunyikan hasil exploit, atau memfasilitasi perdagangan uang nyata yang dilarang. Penyelesaian pekerjaan otomatis dan settlement yang dijalankan TycoonX adalah otomatisasi resmi game, bukan bot pemain. Permintaan yang diterima server karena cacat izin atau validasi tidak menjadikan manipulasi yang disengaja sah; satu anomali saja juga bukan bukti pelanggaran.`,
      `Jika TycoonX dengan jelas menawarkan percepatan pengiriman menggunakan Diamonds, biaya Diamond yang ditampilkan membeli percepatan dalam game yang memenuhi syarat tersebut, bukan menjamin hasil pengiriman, laba, atau posisi peringkat. Jika cacat sistem memotong Diamonds tetapi tidak memberikan tindakan yang dijanjikan, transaksi yang terdampak langsung harus direkonsiliasi sesuai hak yang berlaku. Koreksi gameplay saja tidak menjadi alasan untuk menghapus Diamonds sah yang dibeli dan tidak terkait, VIP 30 hari sekali beli, atau Lifetime VIP. CK-Labs harus membedakan gangguan, state yang kedaluwarsa, kesalahan satu kali, dan akun yang disusupi dari exploit yang disengaja atau berulang, serta memperbaiki secara proporsional skor, hadiah, atau nilai tidak sah yang dapat diatribusikan langsung.`,
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

export default function LogisticsJobsCompetitionsRuleNotice() {
  const pathname = usePathname();
  const locale = getLocale(pathname);
  if (!locale || !copies[locale]) return null;

  const copy = copies[locale];
  const rtl = locale === 'ar';

  return (
    <section className="max-w-3xl mx-auto px-4 pb-12" lang={htmlLang(locale)} dir={rtl ? 'rtl' : 'ltr'} aria-labelledby="tycoonx-logistics-jobs-competitions-rule-heading">
      <div className="rounded-xl border border-amber-400/20 bg-amber-400/[0.05] p-6">
        <p className="text-amber-300/80 text-xs font-medium tracking-wide mb-2">{copy.label}</p>
        <h2 id="tycoonx-logistics-jobs-competitions-rule-heading" className="text-white font-semibold mb-4">{copy.title}</h2>
        <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
          {copy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  );
}
