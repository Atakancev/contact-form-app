'use client';

import { usePathname } from 'next/navigation';

type RuleCopy = {
  title: string;
  paragraphs: string[];
};

const copies: Record<string, RuleCopy> = {
  en: {
    title: 'Social, chat and creator-content rules',
    paragraphs: [
      'TycoonX includes public and restricted community spaces, including Company and Union chat, Executive Company Chat, meeting and social rooms, Home Rooms, Post Office, profiles, Music, Books and other creator content. Public content may be seen by other players. Restricted spaces are intended only for currently authorized participants, subject to lawful CK-Labs moderation, security, support and legal-compliance access. A feature described as anonymous may hide identity from ordinary recipients, but it does not make the account anonymous to CK-Labs or lawful authorities.',
      'Do not use altered clients, direct APIs, guessed identifiers or access-control defects to enter, read, post to or manipulate a space you are not entitled to use. Impersonation, phishing, scams, doxxing, malicious links, evading blocks or mutes, prohibited real-money trading and manipulated creator auctions are prohibited. Music and Book trading is genuine gameplay: a high price alone is not abuse, but fabricated bids, settlement state, controlled-account trades or exploit-created value are not legitimate merely because a server accepted a defective request.',
      'TycoonX may use automated and human moderation before or after publication, so visible content is not necessarily pre-approved. Reports, AI flags and notifications are signals, not automatic proof of wrongdoing. CK-Labs should distinguish bugs, outages, stale state and account compromise from knowing abuse, apply proportionate corrections and preserve applicable appeal, privacy, Digital Services Act and mandatory consumer rights. A social moderation or state correction does not by itself reclassify unrelated valid purchase records, including Diamonds, one-time 30-Day VIP or Lifetime VIP, as fraudulent.',
    ],
  },
  tr: {
    title: 'Sosyal alan, sohbet ve üretici içeriği kuralları',
    paragraphs: [
      'TycoonX; Şirket ve Birlik sohbetleri, Yönetici Şirket Sohbeti, toplantı ve sosyal odalar, Ev Odaları, Postane, profiller, Müzik, Kitaplar ve diğer üretici içerikleri dahil hem herkese açık hem de erişimi sınırlı topluluk alanları içerir. Herkese açık içerikler diğer oyuncular tarafından görülebilir. Sınırlı alanlar yalnızca o anda yetkili katılımcılar içindir; CK-Labs yasal moderasyon, güvenlik, destek ve hukuki yükümlülükler için gerekli erişimi sürdürebilir. Anonim olarak sunulan bir özellik kimliğinizi normal alıcılardan gizleyebilir, ancak hesabınızı CK-Labs veya hukuken yetkili makamlara karşı anonim hale getirmez.',
      'Yetkiniz olmayan bir alana girmek, içeriği okumak, mesaj göndermek veya alanı değiştirmek için değiştirilmiş istemci, doğrudan API, tahmin edilmiş kimlikler ya da erişim kontrolü açıkları kullanmayın. Kimliğe bürünme, oltalama, dolandırıcılık, özel bilgileri ifşa etme, zararlı bağlantılar, engel veya susturma kurallarını aşma, yasaklı gerçek para ticareti ve üretici açık artırmalarını manipüle etme yasaktır. Müzik ve Kitap ticareti gerçek oyun mekaniğidir; yüksek fiyat tek başına ihlal değildir, ancak sahte teklifler, sahte ödeme durumu, kontrol edilen hesaplar arası işlemler veya açıkla oluşturulan değer, hatalı bir sunucu isteği kabul etti diye meşru olmaz.',
      'TycoonX içerikleri yayımdan önce veya sonra otomatik ya da insan incelemesiyle denetleyebilir; bu nedenle görünür içerik mutlaka önceden onaylanmış değildir. Raporlar, yapay zeka işaretleri ve bildirimler tek başına ihlal kanıtı değildir. CK-Labs hata, kesinti, eski durum ve hesap ele geçirilmesini bilinçli kötüye kullanımdan ayırmalı, orantılı düzeltme uygulamalı ve geçerli itiraz, gizlilik, Dijital Hizmetler Yasası ve zorunlu tüketici haklarını korumalıdır. Sosyal moderasyon veya durum düzeltmesi, ilgisiz ve geçerli Diamond, tek seferlik 30 Günlük VIP ya da Lifetime VIP satın alma kayıtlarını kendiliğinden hileli hale getirmez.',
    ],
  },
  de: {
    title: 'Regeln für Social-Bereiche, Chats und Creator-Inhalte',
    paragraphs: [
      'TycoonX enthält öffentliche und zugangsbeschränkte Community-Bereiche, darunter Unternehmens- und Union-Chats, den Executive Company Chat, Meeting- und Social-Räume, Home Rooms, Post Office, Profile, Musik, Bücher und weitere Creator-Inhalte. Öffentliche Inhalte können von anderen Spielern gesehen werden. Beschränkte Bereiche sind nur für aktuell berechtigte Teilnehmer bestimmt; CK-Labs darf im rechtlich zulässigen Umfang für Moderation, Sicherheit, Support und gesetzliche Pflichten zugreifen. Eine als anonym bezeichnete Funktion kann die Identität gegenüber normalen Empfängern verbergen, macht das Konto aber nicht gegenüber CK-Labs oder zuständigen Behörden anonym.',
      'Verwende keine manipulierten Clients, direkten APIs, erratenen Kennungen oder Zugriffslücken, um Bereiche zu betreten, zu lesen, zu beschreiben oder zu verändern, für die du keine Berechtigung hast. Identitätsmissbrauch, Phishing, Betrug, Doxxing, schädliche Links, das Umgehen von Blocks oder Mutes, verbotener Echtgeldhandel und manipulierte Creator-Auktionen sind untersagt. Musik- und Buchhandel sind echte Spielmechaniken. Ein hoher Preis allein ist kein Missbrauch, manipulierte Gebote, Abrechnungszustände, Geschäfte zwischen kontrollierten Konten oder durch Exploits erzeugte Werte werden jedoch nicht dadurch legitim, dass der Server eine fehlerhafte Anfrage angenommen hat.',
      'TycoonX kann Inhalte vor oder nach der Veröffentlichung automatisiert oder durch Menschen moderieren; sichtbare Inhalte sind daher nicht zwingend vorab freigegeben. Meldungen, KI-Markierungen und Benachrichtigungen sind Hinweise und kein automatischer Beweis für Fehlverhalten. CK-Labs soll Fehler, Ausfälle, veraltete Zustände und kompromittierte Konten von bewusstem Missbrauch unterscheiden, Korrekturen verhältnismäßig vornehmen und anwendbare Beschwerde-, Datenschutz-, DSA- und zwingende Verbraucherrechte wahren. Eine Social-Moderation oder Zustandskorrektur macht für sich allein unabhängige gültige Kaufdatensätze wie Diamonds, einmaliges 30-Tage-VIP oder Lifetime VIP nicht betrügerisch.',
    ],
  },
  es: {
    title: 'Reglas sociales, de chat y de contenido de creadores',
    paragraphs: [
      'TycoonX incluye espacios comunitarios públicos y restringidos, como chats de Empresa y Unión, Chat Ejecutivo de Empresa, salas de reunión y sociales, Home Rooms, Oficina de Correos, perfiles, Música, Libros y otros contenidos de creadores. El contenido público puede ser visto por otros jugadores. Los espacios restringidos están destinados únicamente a participantes con autorización vigente, sin perjuicio del acceso lícito de CK-Labs para moderación, seguridad, soporte y cumplimiento legal. Una función presentada como anónima puede ocultar la identidad frente a destinatarios ordinarios, pero no vuelve anónima la cuenta frente a CK-Labs ni frente a autoridades con base legal.',
      'No uses clientes modificados, APIs directas, identificadores adivinados ni fallos de control de acceso para entrar, leer, publicar o manipular espacios a los que no tienes derecho. Se prohíben la suplantación, el phishing, las estafas, el doxxing, los enlaces maliciosos, eludir bloqueos o silenciamientos, el comercio prohibido con dinero real y la manipulación de subastas de creadores. El comercio de Música y Libros forma parte del juego: un precio alto no constituye abuso por sí solo, pero ofertas inventadas, estados de liquidación manipulados, operaciones entre cuentas controladas o valor creado mediante exploits no se vuelven legítimos porque un servidor haya aceptado una solicitud defectuosa.',
      'TycoonX puede moderar contenido de forma automática o humana antes o después de publicarlo, por lo que el contenido visible no está necesariamente preaprobado. Los reportes, señales de IA y notificaciones son indicios, no prueba automática de una infracción. CK-Labs debe diferenciar errores, caídas, estados desactualizados y cuentas comprometidas del abuso consciente, aplicar correcciones proporcionadas y respetar los derechos aplicables de reclamación, privacidad, Reglamento de Servicios Digitales y protección obligatoria del consumidor. Una moderación social o corrección de estado no convierte por sí sola en fraudulentos otros registros de compra válidos, incluidos Diamonds, VIP único de 30 días o Lifetime VIP.',
    ],
  },
  es_MX: {
    title: 'Reglas de comunidad, chat y contenido de creadores',
    paragraphs: [
      'TycoonX tiene espacios públicos y restringidos de comunidad, como chats de Empresa y Unión, Chat Ejecutivo de Empresa, salas de reunión y sociales, Home Rooms, Oficina Postal, perfiles, Música, Libros y otros contenidos creados por jugadores. Lo público puede verlo otra gente. Los espacios restringidos son solo para quienes tengan acceso vigente, sin impedir el acceso legal de CK-Labs para moderación, seguridad, soporte y cumplimiento. Si una función se muestra como anónima, puede ocultar tu identidad a destinatarios normales, pero no vuelve anónima la cuenta frente a CK-Labs ni frente a autoridades que actúen legalmente.',
      'No uses clientes modificados, APIs directas, IDs adivinados ni fallas de permisos para entrar, leer, publicar o manipular un espacio al que no tienes acceso. Están prohibidos la suplantación, phishing, fraudes, doxxing, links maliciosos, evadir bloqueos o silencios, comercio prohibido con dinero real y manipular subastas de creadores. Comprar y vender Música o Libros es parte real del juego: un precio alto por sí mismo no es abuso, pero pujas inventadas, liquidaciones manipuladas, operaciones entre cuentas controladas o valor creado con exploits no se vuelven válidos solo porque el servidor aceptó una solicitud defectuosa.',
      'TycoonX puede moderar antes o después de publicar mediante sistemas automáticos o revisión humana, así que ver un contenido no significa que ya fue aprobado. Reportes, alertas de IA y notificaciones son señales, no prueba automática. CK-Labs debe separar errores, caídas, información desactualizada y cuentas comprometidas del abuso intencional, corregir de forma proporcional y respetar derechos aplicables de reclamación, privacidad, Reglamento de Servicios Digitales y protección obligatoria al consumidor. Una corrección social no convierte por sí sola otros registros válidos de Diamonds, VIP único de 30 días o Lifetime VIP en fraude.',
    ],
  },
  fr: {
    title: 'Règles des espaces sociaux, des chats et des contenus créateurs',
    paragraphs: [
      'TycoonX comprend des espaces communautaires publics et restreints, notamment les chats d’Entreprise et d’Union, l’Executive Company Chat, les salles de réunion et espaces sociaux, les Home Rooms, la Poste, les profils, la Musique, les Livres et d’autres contenus de créateurs. Les contenus publics peuvent être vus par d’autres joueurs. Les espaces restreints sont réservés aux participants actuellement autorisés, sous réserve des accès licites de CK-Labs pour la modération, la sécurité, l’assistance et le respect des obligations légales. Une fonction présentée comme anonyme peut masquer l’identité aux destinataires ordinaires, sans rendre le compte anonyme vis-à-vis de CK-Labs ou des autorités légalement compétentes.',
      'N’utilisez pas de client modifié, d’API directe, d’identifiant deviné ou de faille de contrôle d’accès pour entrer, lire, publier ou modifier un espace auquel vous n’êtes pas autorisé. L’usurpation d’identité, le phishing, les escroqueries, le doxxing, les liens malveillants, le contournement des blocages ou silences, le commerce interdit en argent réel et la manipulation des enchères de créateurs sont interdits. Le commerce de Musique et de Livres est un mécanisme normal du jeu : un prix élevé n’est pas à lui seul un abus, mais de fausses enchères, un règlement manipulé, des échanges entre comptes contrôlés ou une valeur créée par exploit ne deviennent pas légitimes parce qu’un serveur a accepté une requête défectueuse.',
      'TycoonX peut modérer les contenus automatiquement ou humainement avant ou après leur publication ; un contenu visible n’est donc pas nécessairement préapprouvé. Les signalements, indicateurs d’IA et notifications sont des indices, pas une preuve automatique d’infraction. CK-Labs doit distinguer les bugs, pannes, états obsolètes et comptes compromis des abus volontaires, appliquer des corrections proportionnées et préserver les droits applicables de recours, de confidentialité, du règlement sur les services numériques et de protection impérative des consommateurs. Une modération sociale ou correction d’état ne rend pas, à elle seule, frauduleux des achats valides sans rapport, tels que Diamonds, VIP unique de 30 jours ou Lifetime VIP.',
    ],
  },
  fr_CA: {
    title: 'Règles de communauté, de clavardage et de contenu des créateurs',
    paragraphs: [
      'TycoonX propose des espaces communautaires publics et à accès restreint, dont les clavardages d’Entreprise et d’Union, l’Executive Company Chat, les salles de réunion et espaces sociaux, les Home Rooms, la Poste, les profils, la Musique, les Livres et d’autres contenus de créateurs. Le contenu public peut être vu par d’autres joueurs. Les espaces restreints sont réservés aux participants qui ont actuellement l’autorisation d’y accéder, sous réserve des accès légitimes de CK-Labs pour la modération, la sécurité, le soutien et les obligations légales. Une fonction indiquée comme anonyme peut cacher l’identité aux destinataires ordinaires, mais elle ne rend pas le compte anonyme pour CK-Labs ou pour les autorités agissant légalement.',
      'N’utilisez pas un client modifié, une API directe, des identifiants devinés ou une faille d’autorisation pour entrer dans un espace, le lire, y publier ou le modifier sans droit d’accès. L’usurpation, l’hameçonnage, la fraude, le doxxing, les liens malveillants, le contournement des blocages ou mises en sourdine, le commerce interdit en argent réel et les enchères de créateurs manipulées sont interdits. Le commerce de Musique et de Livres fait partie du jeu : un prix élevé ne constitue pas à lui seul un abus, mais une fausse mise, un règlement manipulé, une opération entre comptes contrôlés ou une valeur créée par un exploit ne devient pas légitime parce que le serveur a accepté une requête défectueuse.',
      'TycoonX peut modérer le contenu automatiquement ou manuellement avant ou après sa publication; un contenu visible n’est donc pas forcément déjà approuvé. Les signalements, indicateurs d’IA et notifications sont des signaux, pas une preuve automatique. CK-Labs doit distinguer les bogues, pannes, données périmées et comptes compromis d’un abus volontaire, appliquer des corrections proportionnées et respecter les droits applicables de contestation, de vie privée, du règlement sur les services numériques et de protection obligatoire du consommateur. Une correction sociale ne rend pas, à elle seule, frauduleux des achats valides sans lien, notamment Diamonds, VIP unique de 30 jours ou Lifetime VIP.',
    ],
  },
  it: {
    title: 'Regole per social, chat e contenuti dei creator',
    paragraphs: [
      'TycoonX comprende spazi della community pubblici e riservati, tra cui chat di Azienda e Unione, Executive Company Chat, sale riunioni e sociali, Home Rooms, Ufficio Postale, profili, Musica, Libri e altri contenuti dei creator. I contenuti pubblici possono essere visti da altri giocatori. Gli spazi riservati sono destinati solo ai partecipanti attualmente autorizzati, fatto salvo l’accesso lecito di CK-Labs per moderazione, sicurezza, assistenza e adempimenti legali. Una funzione indicata come anonima può nascondere l’identità ai normali destinatari, ma non rende l’account anonimo nei confronti di CK-Labs o delle autorità che agiscono legalmente.',
      'Non usare client modificati, API dirette, identificativi indovinati o falle nei controlli di accesso per entrare, leggere, pubblicare o manipolare spazi ai quali non sei autorizzato. Sono vietati impersonificazione, phishing, truffe, doxxing, link dannosi, elusione di blocchi o silenziamenti, commercio proibito con denaro reale e manipolazione delle aste dei creator. Il commercio di Musica e Libri è parte reale del gioco: un prezzo alto da solo non è abuso, ma offerte inventate, stati di regolamento manipolati, operazioni tra account controllati o valore creato tramite exploit non diventano legittimi solo perché il server ha accettato una richiesta difettosa.',
      'TycoonX può moderare i contenuti automaticamente o tramite persone prima o dopo la pubblicazione, quindi un contenuto visibile non è necessariamente già approvato. Segnalazioni, indicatori AI e notifiche sono segnali, non prove automatiche di violazione. CK-Labs deve distinguere bug, disservizi, stato non aggiornato e account compromessi dagli abusi consapevoli, applicare correzioni proporzionate e rispettare i diritti applicabili di reclamo, privacy, Digital Services Act e tutela inderogabile dei consumatori. Una moderazione sociale o correzione dello stato non rende di per sé fraudolenti altri acquisti validi, inclusi Diamonds, VIP una tantum di 30 giorni o Lifetime VIP.',
    ],
  },
  pt: {
    title: 'Regras de comunidade, chat e conteúdos de criadores',
    paragraphs: [
      'O TycoonX inclui espaços comunitários públicos e de acesso restrito, como chats de Empresa e União, Executive Company Chat, salas de reunião e sociais, Home Rooms, Correios, perfis, Música, Livros e outros conteúdos de criadores. Os conteúdos públicos podem ser vistos por outros jogadores. Os espaços restritos destinam-se apenas a participantes atualmente autorizados, sem prejuízo do acesso lícito da CK-Labs para moderação, segurança, apoio e cumprimento legal. Uma funcionalidade apresentada como anónima pode ocultar a identidade perante destinatários comuns, mas não torna a conta anónima perante a CK-Labs ou autoridades legalmente competentes.',
      'Não uses clientes modificados, APIs diretas, identificadores adivinhados ou falhas de controlo de acesso para entrar, ler, publicar ou alterar um espaço ao qual não tens direito. São proibidos a usurpação de identidade, phishing, burlas, doxxing, ligações maliciosas, contornar bloqueios ou silenciamentos, comércio proibido com dinheiro real e manipulação de leilões de criadores. O comércio de Música e Livros faz parte do jogo: um preço elevado, por si só, não é abuso, mas licitações inventadas, liquidação manipulada, operações entre contas controladas ou valor criado através de exploits não se tornam legítimos só porque o servidor aceitou um pedido com falhas.',
      'O TycoonX pode moderar conteúdos automática ou manualmente antes ou depois da publicação, pelo que um conteúdo visível não está necessariamente pré-aprovado. Denúncias, sinalizações de IA e notificações são indícios, não prova automática de infração. A CK-Labs deve distinguir erros, falhas de serviço, estado desatualizado e contas comprometidas de abuso consciente, aplicar correções proporcionais e preservar os direitos aplicáveis de reclamação, privacidade, Regulamento dos Serviços Digitais e proteção obrigatória do consumidor. Uma correção social não transforma, por si só, outros registos de compra válidos, como Diamonds, VIP único de 30 dias ou Lifetime VIP, em fraude.',
    ],
  },
  pt_BR: {
    title: 'Regras de comunidade, chat e conteúdo de criadores',
    paragraphs: [
      'O TycoonX tem espaços comunitários públicos e restritos, incluindo chats de Empresa e União, Executive Company Chat, salas de reunião e sociais, Home Rooms, Correios, perfis, Música, Livros e outros conteúdos de criadores. Conteúdo público pode ser visto por outros jogadores. Espaços restritos são destinados somente a participantes com autorização atual, sem impedir o acesso legítimo da CK-Labs para moderação, segurança, suporte e cumprimento da lei. Uma função apresentada como anônima pode esconder a identidade de destinatários comuns, mas não torna a conta anônima para a CK-Labs nem para autoridades que atuem legalmente.',
      'Não use clientes modificados, APIs diretas, identificadores adivinhados ou falhas de acesso para entrar, ler, publicar ou manipular espaços aos quais você não tem direito. São proibidos falsidade de identidade, phishing, golpes, doxxing, links maliciosos, contornar bloqueios ou silenciamentos, comércio proibido com dinheiro real e manipulação de leilões de criadores. Negociar Música e Livros faz parte do jogo: preço alto sozinho não é abuso, mas lances inventados, liquidação manipulada, operações entre contas controladas ou valor criado por exploit não se tornam legítimos só porque o servidor aceitou uma solicitação defeituosa.',
      'O TycoonX pode moderar conteúdo automática ou manualmente antes ou depois da publicação, então conteúdo visível não está necessariamente pré-aprovado. Denúncias, alertas de IA e notificações são sinais, não prova automática de infração. A CK-Labs deve diferenciar bugs, indisponibilidade, estado desatualizado e conta comprometida de abuso consciente, aplicar correções proporcionais e preservar direitos aplicáveis de recurso, privacidade, Regulamento de Serviços Digitais e proteção obrigatória do consumidor. Uma moderação social ou correção de estado não transforma, por si só, outros registros de compra válidos, incluindo Diamonds, VIP único de 30 dias ou Lifetime VIP, em fraude.',
    ],
  },
  ru: {
    title: 'Правила социальных функций, чатов и авторского контента',
    paragraphs: [
      'В TycoonX есть публичные и ограниченные пространства сообщества: чаты Компаний и Союзов, Executive Company Chat, переговорные и социальные комнаты, Home Rooms, Почта, профили, Музыка, Книги и другой пользовательский контент. Публичный контент могут видеть другие игроки. Ограниченные пространства предназначены только для участников с действующим доступом, при этом CK-Labs может получать законный доступ для модерации, безопасности, поддержки и выполнения правовых обязанностей. Функция, обозначенная как анонимная, может скрывать личность от обычного получателя, но не делает аккаунт анонимным для CK-Labs или органов, действующих на законном основании.',
      'Запрещено использовать изменённый клиент, прямые API-запросы, угаданные идентификаторы или ошибки контроля доступа, чтобы входить, читать, писать или изменять пространство без права доступа. Запрещены выдача себя за другое лицо или сотрудника, фишинг, мошенничество, доксинг, вредоносные ссылки, обход блокировок или мутов, запрещённая торговля за реальные деньги и манипуляции аукционами авторов. Торговля Музыкой и Книгами является обычной игровой механикой: высокая цена сама по себе не нарушение, но фиктивные ставки, поддельное состояние расчёта, сделки между контролируемыми аккаунтами или созданная эксплойтом стоимость не становятся законными только потому, что сервер принял ошибочный запрос.',
      'TycoonX может применять автоматическую и ручную модерацию до или после публикации, поэтому видимый контент не обязательно уже одобрен. Жалобы, сигналы ИИ и уведомления являются индикаторами, а не автоматическим доказательством нарушения. CK-Labs должна отличать ошибки, сбои, устаревшее состояние и взлом аккаунта от сознательного злоупотребления, применять соразмерные исправления и сохранять применимые права на обжалование, конфиденциальность, защиту по Закону о цифровых услугах ЕС и обязательные права потребителей. Социальная модерация или исправление состояния сами по себе не превращают другие действительные покупки, включая Diamonds, разовый VIP на 30 дней или Lifetime VIP, в мошеннические.',
    ],
  },
  ja: {
    title: 'ソーシャル、チャット、クリエイターコンテンツのルール',
    paragraphs: [
      'TycoonX には、会社・ユニオンチャット、Executive Company Chat、会議室やソーシャルルーム、Home Rooms、郵便、プロフィール、音楽、書籍など、公開またはアクセス制限付きのコミュニティ機能があります。公開コンテンツは他のプレイヤーに見られる場合があります。制限付きスペースは、その時点で権限を持つ参加者のみを対象としますが、CK-Labs はモデレーション、セキュリティ、サポート、法令遵守のために適法な範囲でアクセスできます。「匿名」と表示される機能は通常の受取人に身元を隠すことがありますが、CK-Labs や法的権限を持つ当局に対してアカウントそのものを匿名にするものではありません。',
      '改変クライアント、直接 API、推測した ID、アクセス制御の不具合を使い、権限のないスペースへ侵入、閲覧、投稿、操作してはいけません。なりすまし、フィッシング、詐欺、個人情報の暴露、悪意あるリンク、ブロックやミュートの回避、禁止されたリアルマネートレード、クリエイターオークションの操作は禁止です。音楽や書籍の取引は正規のゲームプレイであり、高額というだけで不正にはなりません。ただし、架空の入札、決済状態の改ざん、管理下アカウント間の取引、エクスプロイトで作った価値は、不具合のあるリクエストをサーバーが受理しただけでは正当化されません。',
      'TycoonX は公開の前後に自動または人手でコンテンツをモデレーションする場合があり、表示されていること自体は事前承認を意味しません。通報、AI フラグ、通知は判断材料であって、自動的な違反の証明ではありません。CK-Labs は、バグ、障害、古い状態、アカウント侵害と意図的な悪用を区別し、比例した修正を行い、適用される異議申立て、プライバシー、デジタルサービス法、強行的な消費者の権利を尊重します。ソーシャル機能の修正だけを理由に、無関係な有効な Diamonds、1回限りの30日 VIP、Lifetime VIP の購入記録が詐欺扱いになることはありません。',
    ],
  },
  ko: {
    title: '소셜, 채팅 및 크리에이터 콘텐츠 규칙',
    paragraphs: [
      'TycoonX에는 회사 및 연합 채팅, Executive Company Chat, 회의실과 소셜 룸, Home Rooms, 우편, 프로필, 음악, 책 등 공개 또는 접근 제한 커뮤니티 기능이 있습니다. 공개 콘텐츠는 다른 플레이어가 볼 수 있습니다. 제한된 공간은 현재 권한이 있는 참여자만을 위한 것이며, CK-Labs는 운영상 필요한 범위에서 합법적인 모더레이션, 보안, 지원 및 법적 의무를 위해 접근할 수 있습니다. 익명으로 표시되는 기능은 일반 수신자에게 신원을 숨길 수 있지만, CK-Labs나 적법한 권한을 가진 기관에 계정 자체를 익명으로 만드는 것은 아닙니다.',
      '수정된 클라이언트, 직접 API, 추측한 식별자 또는 접근 제어 결함을 이용하여 권한 없는 공간에 들어가거나 읽고, 게시하고, 조작해서는 안 됩니다. 사칭, 피싱, 사기, 신상 공개, 악성 링크, 차단 또는 음소거 우회, 금지된 현금 거래, 크리에이터 경매 조작은 금지됩니다. 음악과 책 거래는 정상적인 게임플레이입니다. 가격이 높다는 이유만으로 악용은 아니지만, 조작된 입찰이나 정산 상태, 통제 계정 간 거래, 익스플로잇으로 만든 가치는 서버가 결함 있는 요청을 받아들였다는 이유만으로 정당해지지 않습니다.',
      'TycoonX는 게시 전이나 후에 자동 또는 사람의 검토로 콘텐츠를 모더레이션할 수 있으므로, 보인다는 사실이 사전 승인을 의미하지 않습니다. 신고, AI 플래그 및 알림은 신호이지 자동적인 위반 증거가 아닙니다. CK-Labs는 버그, 장애, 오래된 상태, 계정 침해와 고의적 악용을 구분하고 비례적으로 수정하며 적용되는 이의제기, 개인정보 보호, 디지털 서비스법 및 강행적 소비자 권리를 보장해야 합니다. 소셜 모더레이션이나 상태 수정만으로 관련 없는 유효한 Diamonds, 1회성 30일 VIP 또는 Lifetime VIP 구매 기록이 사기로 바뀌지는 않습니다.',
    ],
  },
  zh: {
    title: '社交、聊天與創作者內容規則',
    paragraphs: [
      'TycoonX 設有公開及受限的社群空間，包括公司與聯盟聊天、Executive Company Chat、會議及社交房間、Home Rooms、郵局、個人檔案、音樂、書籍及其他創作者內容。公開內容可能被其他玩家看見；受限空間只供當下有權限的參與者使用，但 CK-Labs 仍可在合法範圍內為審核、安全、支援及法律遵循而存取。標示為匿名的功能可向一般收件者隱藏身分，但不代表帳號對 CK-Labs 或依法行事的主管機關匿名。',
      '不得使用修改版客戶端、直接 API、猜測的識別碼或存取控制漏洞，進入、讀取、發文或操控你無權使用的空間。冒充他人、釣魚、詐騙、公開他人私人資料、惡意連結、規避封鎖或靜音、禁止的真實貨幣交易，以及操縱創作者拍賣均被禁止。音樂與書籍交易是正常遊戲玩法；價格高並不單獨構成濫用，但偽造出價、竄改結算狀態、受控帳號間交易或利用漏洞產生的價值，不會只因伺服器接受了有缺陷的請求就變成合法。',
      'TycoonX 可在內容發布前後進行自動或人工審核，因此看得到的內容不一定已事先核准。檢舉、AI 標記與通知只是訊號，不是自動成立的違規證據。CK-Labs 應區分程式錯誤、服務中斷、過期狀態、帳號遭入侵與蓄意濫用，採取合比例的修正，並保留適用的申訴、隱私、數位服務法及強制性消費者權利。社交功能的審核或狀態修正，本身不會把無關且有效的 Diamonds、一次性 30 天 VIP 或 Lifetime VIP 購買紀錄變成詐欺。',
    ],
  },
  zh_Hans: {
    title: '社交、聊天与创作者内容规则',
    paragraphs: [
      'TycoonX 设有公开和受限的社区空间，包括公司与联盟聊天、Executive Company Chat、会议及社交房间、Home Rooms、邮局、个人资料、音乐、书籍和其他创作者内容。公开内容可能被其他玩家看到；受限空间仅供当前有权限的参与者使用，但 CK-Labs 仍可在合法范围内为审核、安全、支持和法律合规而访问。标示为匿名的功能可以向普通收件人隐藏身份，但并不意味着账号对 CK-Labs 或依法行事的主管机关匿名。',
      '不得使用修改版客户端、直接 API、猜测的标识符或访问控制漏洞，进入、读取、发帖或操控你无权使用的空间。冒充他人、网络钓鱼、诈骗、公开他人隐私信息、恶意链接、规避屏蔽或静音、禁止的真实货币交易以及操纵创作者拍卖均被禁止。音乐和书籍交易是正常游戏玩法；价格高本身不构成滥用，但伪造出价、篡改结算状态、受控账号间交易或利用漏洞创造的价值，不会因为服务器接受了有缺陷的请求就变得合法。',
      'TycoonX 可以在内容发布前后进行自动或人工审核，因此可见内容并不一定已经预先批准。举报、AI 标记和通知只是信号，不是自动成立的违规证据。CK-Labs 应区分程序错误、服务中断、过期状态、账号被入侵与蓄意滥用，采取相称的修正，并保留适用的申诉、隐私、数字服务法及强制性消费者权利。社交功能的审核或状态修正本身不会把无关且有效的 Diamonds、一次性 30 天 VIP 或 Lifetime VIP 购买记录变成欺诈。',
    ],
  },
  zh_Hant: {
    title: '社交、聊天與創作者內容規則',
    paragraphs: [
      'TycoonX 設有公開及受限的社群空間，包括公司與聯盟聊天、Executive Company Chat、會議及社交房間、Home Rooms、郵局、個人檔案、音樂、書籍及其他創作者內容。公開內容可能被其他玩家看見；受限空間只供目前有權限的參與者使用，但 CK-Labs 仍可在合法範圍內為審核、安全、支援及法規遵循而存取。標示為匿名的功能可向一般收件者隱藏身分，但不表示帳號對 CK-Labs 或依法行事的主管機關匿名。',
      '不得使用修改版客戶端、直接 API、猜測的識別碼或存取控制漏洞，進入、讀取、發文或操控你無權使用的空間。冒充他人、網路釣魚、詐騙、揭露他人私人資料、惡意連結、規避封鎖或靜音、禁止的真實貨幣交易及操縱創作者拍賣均被禁止。音樂與書籍交易是正常遊戲玩法；價格高本身不代表濫用，但偽造出價、竄改結算狀態、受控帳號間交易或利用漏洞創造的價值，不會因伺服器接受有缺陷的請求就變得正當。',
      'TycoonX 可以在內容發布前後進行自動或人工審核，因此可見內容不一定已經事先核准。檢舉、AI 標記與通知只是訊號，不是自動成立的違規證據。CK-Labs 應區分程式錯誤、服務中斷、過期狀態、帳號遭入侵與蓄意濫用，採取合比例的修正，並保留適用的申訴、隱私、數位服務法及強制性消費者權利。社交功能的審核或狀態修正本身不會把無關且有效的 Diamonds、一次性 30 天 VIP 或 Lifetime VIP 購買紀錄變成詐欺。',
    ],
  },
  ar: {
    title: 'قواعد الميزات الاجتماعية والدردشة ومحتوى المبدعين',
    paragraphs: [
      'يضم TycoonX مساحات مجتمعية عامة وأخرى مقيّدة، بما في ذلك دردشات الشركات والاتحادات وExecutive Company Chat وغرف الاجتماعات والغرف الاجتماعية وHome Rooms ومكتب البريد والملفات الشخصية والموسيقى والكتب وغيرها من محتويات المبدعين. قد يشاهد اللاعبون الآخرون المحتوى العام. أما المساحات المقيّدة فهي مخصّصة للمشاركين المخوّلين حاليًا، مع احتفاظ CK-Labs بحق الوصول المشروع لأغراض الإشراف والأمان والدعم والامتثال القانوني. وقد تخفي الميزة الموصوفة بأنها مجهولة الهوية هوية المرسل عن المستلمين العاديين، لكنها لا تجعل الحساب مجهولًا أمام CK-Labs أو السلطات التي تتصرف وفق القانون.',
      'لا تستخدم عميلًا معدّلًا أو واجهات API مباشرة أو معرّفات مخمّنة أو ثغرات في التحكم بالوصول للدخول إلى مساحة لا يحق لك استخدامها أو قراءتها أو النشر فيها أو التلاعب بها. يُحظر انتحال الهوية والتصيد والاحتيال وكشف المعلومات الخاصة والروابط الضارة والتحايل على الحظر أو الكتم والتجارة المحظورة بأموال حقيقية والتلاعب بمزادات المبدعين. تداول الموسيقى والكتب جزء حقيقي من اللعب؛ والسعر المرتفع وحده ليس إساءة، لكن العطاءات الوهمية أو حالة التسوية المتلاعب بها أو الصفقات بين حسابات خاضعة لسيطرة واحدة أو القيمة الناتجة عن استغلال ثغرة لا تصبح مشروعة لمجرد أن الخادم قبل طلبًا معيبًا.',
      'قد يستخدم TycoonX إشرافًا آليًا أو بشريًا قبل النشر أو بعده، لذلك لا يعني ظهور المحتوى أنه حصل على موافقة مسبقة. البلاغات وإشارات الذكاء الاصطناعي والإشعارات مؤشرات وليست دليلًا تلقائيًا على المخالفة. ينبغي لـ CK-Labs التمييز بين الأخطاء والانقطاعات والحالة القديمة واختراق الحساب وبين الإساءة المتعمدة، وتطبيق تصحيحات متناسبة، والحفاظ على حقوق الاعتراض والخصوصية وقانون الخدمات الرقمية وحقوق المستهلك الإلزامية حيث تنطبق. ولا يحوّل إجراء اجتماعي أو تصحيح للحالة، بمفرده، سجلات شراء صحيحة وغير مرتبطة مثل Diamonds أو VIP لمرة واحدة لمدة 30 يومًا أو Lifetime VIP إلى معاملات احتيالية.',
    ],
  },
  nl: {
    title: 'Regels voor sociale functies, chat en makerscontent',
    paragraphs: [
      'TycoonX bevat openbare en afgeschermde communityruimtes, waaronder Bedrijfs- en Uniechat, Executive Company Chat, vergader- en sociale ruimtes, Home Rooms, Post Office, profielen, Muziek, Boeken en andere makerscontent. Openbare content kan door andere spelers worden gezien. Afgeschermde ruimtes zijn bedoeld voor deelnemers die op dat moment bevoegd zijn, met behoud van rechtmatige toegang door CK-Labs voor moderatie, beveiliging, ondersteuning en wettelijke verplichtingen. Een functie die als anoniem wordt aangeboden kan je identiteit voor gewone ontvangers verbergen, maar maakt het account niet anoniem voor CK-Labs of bevoegde autoriteiten.',
      'Gebruik geen aangepaste clients, directe API’s, gegokte identifiers of fouten in toegangscontrole om een ruimte te betreden, lezen, beschrijven of manipuleren waarvoor je geen toegang hebt. Identiteitsmisbruik, phishing, oplichting, doxxing, schadelijke links, het omzeilen van blokkades of mutes, verboden handel voor echt geld en manipulatie van veilingen van makers zijn verboden. Muziek- en Boekenhandel zijn echte spelmechanieken: een hoge prijs alleen is geen misbruik, maar verzonnen biedingen, gemanipuleerde afwikkeling, transacties tussen gecontroleerde accounts of door exploits gecreëerde waarde worden niet legitiem doordat de server een foutief verzoek accepteerde.',
      'TycoonX kan content vóór of na publicatie automatisch of door mensen modereren; zichtbare content is dus niet noodzakelijk vooraf goedgekeurd. Meldingen, AI-signalen en notificaties zijn aanwijzingen, geen automatisch bewijs van een overtreding. CK-Labs moet bugs, storingen, verouderde status en accountmisbruik door derden onderscheiden van bewust misbruik, proportionele correcties toepassen en toepasselijke bezwaar-, privacy-, DSA- en dwingende consumentenrechten respecteren. Een sociale moderatie of statuscorrectie maakt op zichzelf geen andere geldige aankoopgegevens, waaronder Diamonds, eenmalige 30-dagen-VIP of Lifetime VIP, frauduleus.',
    ],
  },
  sv: {
    title: 'Regler för sociala funktioner, chatt och skaparinnehåll',
    paragraphs: [
      'TycoonX har offentliga och begränsade communityytor, bland annat Företags- och Unionchatt, Executive Company Chat, mötes- och sociala rum, Home Rooms, Post Office, profiler, Musik, Böcker och annat skaparinnehåll. Offentligt innehåll kan ses av andra spelare. Begränsade ytor är avsedda endast för deltagare som för närvarande har behörighet, med laglig åtkomst för CK-Labs när det behövs för moderering, säkerhet, support och rättsliga skyldigheter. En funktion som anges vara anonym kan dölja identiteten för vanliga mottagare, men gör inte kontot anonymt för CK-Labs eller behöriga myndigheter.',
      'Använd inte modifierade klienter, direkta API:er, gissade identifierare eller brister i åtkomstkontroll för att gå in i, läsa, skriva i eller manipulera en yta du saknar rätt till. Identitetsintrång, nätfiske, bedrägerier, doxxing, skadliga länkar, kringgående av blockering eller tystning, förbjuden handel med riktiga pengar och manipulerade skaparauktioner är förbjudna. Handel med Musik och Böcker är normal gameplay: ett högt pris är inte i sig missbruk, men påhittade bud, manipulerad avräkning, affärer mellan kontrollerade konton eller värde skapat genom exploits blir inte legitimt bara för att servern accepterade en felaktig begäran.',
      'TycoonX kan moderera innehåll automatiskt eller manuellt före eller efter publicering, så synligt innehåll är inte nödvändigtvis förhandsgodkänt. Rapporter, AI-flaggor och aviseringar är signaler, inte automatiskt bevis på en överträdelse. CK-Labs ska skilja buggar, driftstörningar, inaktuell status och kapade konton från medvetet missbruk, göra proportionerliga korrigeringar och bevara tillämpliga rättigheter till klagomål, integritet, DSA-skydd och tvingande konsumentskydd. Social moderering eller en statuskorrigering gör inte i sig andra giltiga köp, inklusive Diamonds, engångs-VIP i 30 dagar eller Lifetime VIP, bedrägliga.',
    ],
  },
  nb: {
    title: 'Regler for sosiale funksjoner, chat og skaperinnhold',
    paragraphs: [
      'TycoonX har offentlige og begrensede fellesskapsområder, blant annet Bedrifts- og Union-chat, Executive Company Chat, møte- og sosiale rom, Home Rooms, Post Office, profiler, Musikk, Bøker og annet skaperinnhold. Offentlig innhold kan ses av andre spillere. Begrensede områder er bare ment for deltakere som har gjeldende tilgang, samtidig som CK-Labs kan ha lovlig tilgang for moderering, sikkerhet, støtte og juridiske plikter. En funksjon som beskrives som anonym kan skjule identiteten for vanlige mottakere, men gjør ikke kontoen anonym overfor CK-Labs eller myndigheter som handler med rettslig grunnlag.',
      'Ikke bruk modifiserte klienter, direkte API-er, gjettede identifikatorer eller feil i tilgangskontroll for å gå inn i, lese, skrive i eller manipulere et område du ikke har rett til å bruke. Identitetsmisbruk, phishing, svindel, doxxing, skadelige lenker, omgåelse av blokkering eller demping, forbudt handel med ekte penger og manipulerte skaperauksjoner er forbudt. Handel med Musikk og Bøker er vanlig gameplay: en høy pris alene er ikke misbruk, men oppdiktede bud, manipulert oppgjør, handler mellom kontrollerte kontoer eller verdi skapt gjennom exploits blir ikke legitimt bare fordi serveren godtok en mangelfull forespørsel.',
      'TycoonX kan moderere innhold automatisk eller manuelt før eller etter publisering, så synlig innhold er ikke nødvendigvis forhåndsgodkjent. Rapporter, AI-flagg og varsler er signaler, ikke automatisk bevis på brudd. CK-Labs skal skille feil, driftsavbrudd, utdatert tilstand og kompromitterte kontoer fra bevisst misbruk, bruke forholdsmessige korrigeringer og bevare gjeldende klage-, personvern-, DSA- og ufravikelige forbrukerrettigheter. Sosial moderering eller en tilstandskorrigering gjør ikke i seg selv andre gyldige kjøp, inkludert Diamonds, engangs-VIP i 30 dager eller Lifetime VIP, til svindel.',
    ],
  },
  pl: {
    title: 'Zasady funkcji społecznościowych, czatu i treści twórców',
    paragraphs: [
      'TycoonX obejmuje publiczne i ograniczone przestrzenie społeczności, w tym czaty Firm i Unii, Executive Company Chat, sale spotkań i przestrzenie społeczne, Home Rooms, Pocztę, profile, Muzykę, Książki i inne treści twórców. Treści publiczne mogą być widoczne dla innych graczy. Przestrzenie ograniczone są przeznaczone wyłącznie dla aktualnie uprawnionych uczestników, z zachowaniem zgodnego z prawem dostępu CK-Labs na potrzeby moderacji, bezpieczeństwa, wsparcia i obowiązków prawnych. Funkcja oznaczona jako anonimowa może ukrywać tożsamość przed zwykłym odbiorcą, ale nie czyni konta anonimowym wobec CK-Labs ani właściwych organów działających zgodnie z prawem.',
      'Nie używaj zmodyfikowanych klientów, bezpośrednich API, zgadywanych identyfikatorów ani błędów kontroli dostępu, aby wejść do, czytać, publikować lub zmieniać przestrzeń, do której nie masz prawa. Zakazane są podszywanie się, phishing, oszustwa, doxxing, złośliwe linki, omijanie blokad lub wyciszeń, niedozwolony handel za prawdziwe pieniądze oraz manipulowanie aukcjami twórców. Handel Muzyką i Książkami jest normalną mechaniką gry: sama wysoka cena nie jest nadużyciem, ale fikcyjne oferty, zmanipulowany stan rozliczenia, transakcje między kontrolowanymi kontami lub wartość utworzona przez exploit nie stają się prawidłowe tylko dlatego, że serwer zaakceptował wadliwe żądanie.',
      'TycoonX może moderować treści automatycznie lub przez ludzi przed publikacją albo po niej, więc widoczna treść nie musi być wcześniej zatwierdzona. Zgłoszenia, flagi AI i powiadomienia są sygnałami, a nie automatycznym dowodem naruszenia. CK-Labs powinno odróżniać błędy, awarie, nieaktualny stan i przejęcie konta od świadomego nadużycia, stosować proporcjonalne korekty i zachowywać mające zastosowanie prawa do odwołania, prywatności, ochrony wynikającej z DSA oraz bezwzględnie obowiązujące prawa konsumenta. Moderacja społecznościowa lub korekta stanu sama w sobie nie czyni oszustwem innych ważnych zakupów, w tym Diamonds, jednorazowego VIP na 30 dni czy Lifetime VIP.',
    ],
  },
  th: {
    title: 'กฎเกี่ยวกับโซเชียล แชต และเนื้อหาจากครีเอเตอร์',
    paragraphs: [
      'TycoonX มีพื้นที่ชุมชนทั้งแบบสาธารณะและแบบจำกัดสิทธิ์ เช่น แชตบริษัทและสหภาพ, Executive Company Chat, ห้องประชุมและห้องสังคม, Home Rooms, ที่ทำการไปรษณีย์, โปรไฟล์, เพลง, หนังสือ และเนื้อหาจากครีเอเตอร์อื่น ๆ เนื้อหาสาธารณะอาจถูกผู้เล่นคนอื่นเห็นได้ ส่วนพื้นที่จำกัดสิทธิ์มีไว้สำหรับผู้ที่มีสิทธิ์ในขณะนั้นเท่านั้น โดย CK-Labs ยังอาจเข้าถึงได้อย่างชอบด้วยกฎหมายเพื่อการดูแลเนื้อหา ความปลอดภัย การสนับสนุน และการปฏิบัติตามกฎหมาย ฟีเจอร์ที่ระบุว่าไม่เปิดเผยตัวตนอาจซ่อนตัวตนจากผู้รับทั่วไป แต่ไม่ได้ทำให้บัญชีไม่เปิดเผยต่อ CK-Labs หรือหน่วยงานที่มีอำนาจตามกฎหมาย',
      'ห้ามใช้ไคลเอนต์ที่ดัดแปลง API โดยตรง รหัสที่คาดเดา หรือช่องโหว่การควบคุมสิทธิ์ เพื่อเข้า อ่าน โพสต์ หรือจัดการพื้นที่ที่คุณไม่มีสิทธิ์ใช้งาน ห้ามสวมรอย ฟิชชิง หลอกลวง เปิดเผยข้อมูลส่วนตัว ลิงก์อันตราย หลบเลี่ยงการบล็อกหรือปิดเสียง ซื้อขายด้วยเงินจริงที่ต้องห้าม และบิดเบือนการประมูลของครีเอเตอร์ การซื้อขายเพลงและหนังสือเป็นส่วนหนึ่งของเกมตามปกติ ราคาสูงเพียงอย่างเดียวไม่ใช่การละเมิด แต่ราคาเสนอปลอม สถานะการชำระที่ถูกแก้ไข การซื้อขายระหว่างบัญชีที่ควบคุมร่วมกัน หรือมูลค่าที่สร้างจาก exploit ไม่กลายเป็นสิ่งถูกต้องเพียงเพราะเซิร์ฟเวอร์ยอมรับคำขอที่มีข้อบกพร่อง',
      'TycoonX อาจใช้การดูแลเนื้อหาแบบอัตโนมัติหรือโดยบุคคลก่อนหรือหลังเผยแพร่ ดังนั้นการมองเห็นเนื้อหาไม่ได้หมายความว่าได้รับอนุมัติล่วงหน้าแล้ว รายงาน ธงจาก AI และการแจ้งเตือนเป็นเพียงสัญญาณ ไม่ใช่หลักฐานอัตโนมัติของการกระทำผิด CK-Labs ควรแยกข้อผิดพลาด ระบบล่ม สถานะเก่า และบัญชีถูกยึดจากการจงใจใช้ในทางที่ผิด ใช้การแก้ไขอย่างได้สัดส่วน และคงสิทธิ์ในการอุทธรณ์ ความเป็นส่วนตัว สิทธิตามกฎหมายบริการดิจิทัล และสิทธิผู้บริโภคที่บังคับใช้ การแก้ไขด้านโซเชียลเพียงอย่างเดียวไม่ทำให้รายการซื้อที่ถูกต้องและไม่เกี่ยวข้อง เช่น Diamonds, VIP 30 วันแบบครั้งเดียว หรือ Lifetime VIP กลายเป็นการฉ้อโกง',
    ],
  },
  vi: {
    title: 'Quy tắc về tính năng xã hội, trò chuyện và nội dung sáng tạo',
    paragraphs: [
      'TycoonX có các không gian cộng đồng công khai và hạn chế, gồm chat Công ty và Liên minh, Executive Company Chat, phòng họp và phòng xã hội, Home Rooms, Bưu điện, hồ sơ, Âm nhạc, Sách và nội dung do người chơi sáng tạo. Nội dung công khai có thể được người chơi khác nhìn thấy. Không gian hạn chế chỉ dành cho người đang có quyền truy cập, đồng thời CK-Labs có thể truy cập hợp pháp khi cần cho kiểm duyệt, an ninh, hỗ trợ và nghĩa vụ pháp lý. Tính năng được mô tả là ẩn danh có thể giấu danh tính với người nhận thông thường, nhưng không khiến tài khoản ẩn danh với CK-Labs hoặc cơ quan có thẩm quyền hợp pháp.',
      'Không dùng ứng dụng đã sửa đổi, API trực tiếp, mã định danh đoán được hoặc lỗi kiểm soát truy cập để vào, đọc, đăng hay thao túng không gian mà bạn không có quyền sử dụng. Nghiêm cấm giả mạo danh tính, lừa đảo phishing, gian lận, doxxing, liên kết độc hại, né chặn hoặc tắt tiếng, giao dịch tiền thật bị cấm và thao túng đấu giá của người sáng tạo. Giao dịch Âm nhạc và Sách là gameplay hợp lệ: giá cao tự nó không phải lạm dụng, nhưng giá thầu giả, trạng thái quyết toán bị thao túng, giao dịch giữa các tài khoản cùng kiểm soát hoặc giá trị tạo từ exploit không trở nên hợp lệ chỉ vì máy chủ đã nhận một yêu cầu có lỗi.',
      'TycoonX có thể kiểm duyệt tự động hoặc thủ công trước hoặc sau khi nội dung được đăng, vì vậy nội dung đang hiển thị chưa chắc đã được phê duyệt trước. Báo cáo, cờ AI và thông báo chỉ là tín hiệu, không phải bằng chứng vi phạm tự động. CK-Labs cần phân biệt lỗi, gián đoạn, trạng thái cũ và tài khoản bị xâm nhập với hành vi cố ý lạm dụng, áp dụng điều chỉnh tương xứng và bảo đảm các quyền khiếu nại, quyền riêng tư, quyền theo Đạo luật Dịch vụ Kỹ thuật số và quyền người tiêu dùng bắt buộc khi áp dụng. Việc kiểm duyệt xã hội hoặc sửa trạng thái tự nó không biến các giao dịch mua hợp lệ không liên quan như Diamonds, VIP 30 ngày một lần hay Lifetime VIP thành gian lận.',
    ],
  },
  uk: {
    title: 'Правила соціальних функцій, чатів і контенту авторів',
    paragraphs: [
      'TycoonX містить публічні та обмежені простори спільноти, зокрема чати Компаній і Союзів, Executive Company Chat, кімнати для зустрічей і спілкування, Home Rooms, Пошту, профілі, Музику, Книги та інший авторський контент. Публічний контент можуть бачити інші гравці. Обмежені простори призначені лише для учасників із чинним доступом, при цьому CK-Labs може мати законний доступ для модерації, безпеки, підтримки та виконання правових обов’язків. Функція, позначена як анонімна, може приховувати особу від звичайного одержувача, але не робить обліковий запис анонімним для CK-Labs або органів, що діють на законній підставі.',
      'Не використовуйте модифіковані клієнти, прямі API, вгадані ідентифікатори чи помилки контролю доступу, щоб входити, читати, публікувати або змінювати простір, до якого у вас немає права доступу. Заборонено видавати себе за інших, здійснювати фішинг, шахрайство, доксинг, поширювати шкідливі посилання, обходити блокування чи заглушення, вести заборонену торгівлю за реальні гроші та маніпулювати аукціонами авторів. Торгівля Музикою та Книгами є нормальною механікою гри: сама висока ціна не є порушенням, але вигадані ставки, підроблений стан розрахунку, угоди між контрольованими обліковими записами або створена експлойтом цінність не стають легітимними лише тому, що сервер прийняв дефектний запит.',
      'TycoonX може модерувати контент автоматично або вручну до чи після публікації, тому видимий контент не обов’язково вже схвалений. Скарги, позначки ШІ та сповіщення є сигналами, а не автоматичним доказом порушення. CK-Labs має відрізняти помилки, збої, застарілий стан і компрометацію облікового запису від свідомого зловживання, застосовувати пропорційні виправлення та зберігати застосовні права на оскарження, приватність, захист за Актом про цифрові послуги і обов’язкові права споживачів. Соціальна модерація чи виправлення стану самі по собі не перетворюють інші чинні покупки, зокрема Diamonds, одноразовий VIP на 30 днів або Lifetime VIP, на шахрайські.',
    ],
  },
  hi: {
    title: 'सोशल, चैट और क्रिएटर कंटेंट के नियम',
    paragraphs: [
      'TycoonX में सार्वजनिक और सीमित कम्युनिटी स्पेस हैं, जिनमें Company और Union चैट, Executive Company Chat, मीटिंग और सोशल रूम, Home Rooms, Post Office, प्रोफाइल, Music, Books और अन्य क्रिएटर कंटेंट शामिल हैं। सार्वजनिक कंटेंट दूसरे खिलाड़ी देख सकते हैं। सीमित स्पेस केवल उन प्रतिभागियों के लिए हैं जिनके पास उस समय वैध पहुंच है, जबकि CK-Labs मॉडरेशन, सुरक्षा, सहायता और कानूनी अनुपालन के लिए कानूनन आवश्यक पहुंच रख सकता है। Anonymous बताई गई सुविधा सामान्य प्राप्तकर्ता से पहचान छिपा सकती है, लेकिन खाता CK-Labs या कानूनी अधिकार वाले अधिकारियों के लिए अनाम नहीं हो जाता।',
      'ऐसे स्पेस में प्रवेश, पढ़ने, पोस्ट करने या बदलाव करने के लिए संशोधित क्लाइंट, सीधे API, अनुमान लगाए गए पहचानकर्ता या एक्सेस-कंट्रोल की कमी का उपयोग न करें जहां आपको अनुमति नहीं है। किसी की पहचान बनना, phishing, धोखाधड़ी, doxxing, हानिकारक लिंक, block या mute को दरकिनार करना, प्रतिबंधित real-money trading और क्रिएटर नीलामी में हेरफेर निषिद्ध है। Music और Books का व्यापार सामान्य gameplay है: केवल ऊंची कीमत अपने आप में दुरुपयोग नहीं है, लेकिन नकली bid, बदली हुई settlement state, नियंत्रित खातों के बीच सौदे या exploit से बनाई गई value सिर्फ इसलिए वैध नहीं हो जाती कि server ने दोषपूर्ण request स्वीकार कर ली।',
      'TycoonX प्रकाशन से पहले या बाद में automated या human moderation कर सकता है, इसलिए दिखाई देने वाला कंटेंट जरूरी नहीं कि पहले से स्वीकृत हो। Reports, AI flags और notifications संकेत हैं, अपने आप उल्लंघन का प्रमाण नहीं। CK-Labs को bugs, outages, पुराने state और account compromise को जानबूझकर किए गए abuse से अलग करना चाहिए, proportionate correction करना चाहिए और लागू appeal, privacy, Digital Services Act तथा अनिवार्य consumer rights बनाए रखने चाहिए। Social moderation या state correction अपने आप असंबंधित वैध खरीद रिकॉर्ड, जैसे Diamonds, एक बार मिलने वाला 30-Day VIP या Lifetime VIP, को fraud नहीं बनाता।',
    ],
  },
  id: {
    title: 'Aturan sosial, chat, dan konten kreator',
    paragraphs: [
      'TycoonX memiliki ruang komunitas publik dan terbatas, termasuk chat Perusahaan dan Union, Executive Company Chat, ruang rapat dan sosial, Home Rooms, Kantor Pos, profil, Musik, Buku, dan konten kreator lainnya. Konten publik dapat dilihat pemain lain. Ruang terbatas hanya ditujukan bagi peserta yang saat itu memiliki akses, dengan tetap memungkinkan akses CK-Labs yang sah untuk moderasi, keamanan, dukungan, dan kewajiban hukum. Fitur yang disebut anonim dapat menyembunyikan identitas dari penerima biasa, tetapi tidak membuat akun anonim terhadap CK-Labs atau otoritas yang bertindak berdasarkan hukum.',
      'Jangan memakai klien yang dimodifikasi, API langsung, pengenal yang ditebak, atau celah kontrol akses untuk masuk, membaca, mengirim, atau memanipulasi ruang yang bukan hakmu. Penyamaran identitas, phishing, penipuan, doxxing, tautan berbahaya, menghindari blokir atau mute, perdagangan uang nyata yang dilarang, dan manipulasi lelang kreator dilarang. Perdagangan Musik dan Buku adalah gameplay yang sah: harga tinggi saja bukan penyalahgunaan, tetapi bid palsu, status penyelesaian yang dimanipulasi, transaksi antarakun yang dikendalikan bersama, atau nilai hasil exploit tidak menjadi sah hanya karena server menerima permintaan yang cacat.',
      'TycoonX dapat memoderasi konten secara otomatis atau oleh manusia sebelum maupun sesudah publikasi, sehingga konten yang terlihat belum tentu telah disetujui sebelumnya. Laporan, tanda AI, dan notifikasi adalah sinyal, bukan bukti otomatis pelanggaran. CK-Labs harus membedakan bug, gangguan, status usang, dan akun yang dibajak dari penyalahgunaan yang disengaja, menerapkan koreksi secara proporsional, serta menjaga hak banding, privasi, Digital Services Act, dan hak konsumen wajib yang berlaku. Moderasi sosial atau koreksi status tidak dengan sendirinya menjadikan catatan pembelian valid lain, termasuk Diamonds, VIP 30 Hari sekali beli, atau Lifetime VIP, sebagai penipuan.',
    ],
  },
};

const localeLang: Record<string, string> = {
  tr: 'tr', de: 'de', es: 'es-ES', es_MX: 'es-MX', fr: 'fr-FR', fr_CA: 'fr-CA',
  it: 'it', pt: 'pt-PT', pt_BR: 'pt-BR', ru: 'ru', ja: 'ja', ko: 'ko',
  zh: 'zh', zh_Hans: 'zh-Hans', zh_Hant: 'zh-Hant', ar: 'ar', nl: 'nl', sv: 'sv',
  nb: 'nb', pl: 'pl', th: 'th', vi: 'vi', uk: 'uk', hi: 'hi', id: 'id',
};

export default function SocialUgcRuleNotice() {
  const pathname = usePathname();
  const canonical = pathname === '/tyconx-terms-of-service';
  const match = pathname.match(/^\/tycoonx-legal\/([^/]+)\/terms\/?$/);

  if (!canonical && !match) return null;

  const locale = canonical ? 'en' : match?.[1] ?? 'en';
  const copy = copies[locale] ?? copies.en;
  const rtl = locale === 'ar';

  return (
    <section
      lang={canonical ? 'en' : localeLang[locale] ?? locale}
      dir={rtl ? 'rtl' : 'ltr'}
      aria-label={copy.title}
      className="mx-auto mb-10 mt-2 w-full max-w-4xl px-6"
    >
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-800 shadow-sm">
        <h2 className="mb-3 text-xl font-semibold text-slate-950">{copy.title}</h2>
        <div className="space-y-3 text-sm leading-6">
          {copy.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
