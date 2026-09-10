'use client';

import { usePathname } from 'next/navigation';

type BreachCopy = {
  label: string;
  title: string;
  paragraphs: string[];
};

const copies: Record<string, BreachCopy> = {
  en: {
    label: 'Privacy update · 10 September 2026',
    title: 'Personal data breaches and required notifications',
    paragraphs: [
      'If CK-Labs becomes aware of a personal data breach affecting TycoonX, we will assess the incident, document it as required, take appropriate containment and remediation measures, and make any legally required notifications. Where the GDPR applies, CK-Labs will notify the competent supervisory authority without undue delay and, where feasible, within 72 hours after becoming aware of the breach, unless the breach is unlikely to result in a risk to the rights and freedoms of natural persons. Where required, reasons for a notification delay will also be provided.',
      'Where a personal data breach is likely to result in a high risk to your rights and freedoms, CK-Labs will communicate the breach to affected individuals without undue delay in clear and plain language, including the information and protective measures required by law, unless an applicable legal exception removes the individual-notification requirement. A security incident that does not meet a legal notification threshold may be handled without a public or individual notice. This section does not limit any mandatory data-protection rights or remedies.',
    ],
  },
  tr: {
    label: 'Gizlilik güncellemesi · 10 Eylül 2026',
    title: 'Kişisel veri ihlalleri ve zorunlu bildirimler',
    paragraphs: [
      'CK-Labs, TycoonX’i etkileyen bir kişisel veri ihlalinden haberdar olursa olayı değerlendirir, gerektiği şekilde kayıt altına alır, uygun sınırlama ve düzeltme önlemlerini alır ve kanunen zorunlu bildirimleri yapar. GDPR uygulandığında CK-Labs, ihlalin gerçek kişilerin hak ve özgürlükleri açısından risk oluşturmasının muhtemel olmadığı durumlar dışında, ihlalden haberdar olduktan sonra yetkili denetim makamını gereksiz gecikme olmaksızın ve mümkünse 72 saat içinde bilgilendirir. Hukuken gerekiyorsa bildirimdeki gecikmenin nedenleri de açıklanır.',
      'Bir kişisel veri ihlalinin hak ve özgürlükleriniz açısından yüksek risk oluşturması muhtemelse CK-Labs, uygulanabilir bir yasal istisna bireysel bildirim zorunluluğunu kaldırmadıkça, etkilenen kişileri gereksiz gecikme olmaksızın açık ve anlaşılır bir dille bilgilendirir ve kanunun gerektirdiği bilgi ile koruyucu önlemleri açıklar. Yasal bildirim eşiğini karşılamayan bir güvenlik olayı kamuya veya tek tek kullanıcılara bildirim yapılmadan ele alınabilir. Bu bölüm zorunlu veri koruma haklarını veya başvuru yollarını sınırlamaz.',
    ],
  },
  de: {
    label: 'Datenschutz-Update · 10. September 2026',
    title: 'Verletzungen des Schutzes personenbezogener Daten und vorgeschriebene Meldungen',
    paragraphs: [
      'Wird CK-Labs eine Verletzung des Schutzes personenbezogener Daten bekannt, die TycoonX betrifft, bewerten und dokumentieren wir den Vorfall im gesetzlich erforderlichen Umfang, ergreifen angemessene Eindämmungs- und Abhilfemaßnahmen und erfüllen die vorgeschriebenen Meldepflichten. Soweit die DSGVO gilt, meldet CK-Labs die Verletzung der zuständigen Aufsichtsbehörde unverzüglich und möglichst binnen 72 Stunden nach Bekanntwerden, es sei denn, sie führt voraussichtlich nicht zu einem Risiko für die Rechte und Freiheiten natürlicher Personen. Soweit vorgeschrieben, werden auch Gründe für eine verspätete Meldung angegeben.',
      'Ist eine Verletzung des Schutzes personenbezogener Daten voraussichtlich mit einem hohen Risiko für Ihre Rechte und Freiheiten verbunden, informiert CK-Labs die betroffenen Personen unverzüglich in klarer und einfacher Sprache und teilt die gesetzlich erforderlichen Angaben und Schutzmaßnahmen mit, sofern keine anwendbare gesetzliche Ausnahme die individuelle Benachrichtigung entfallen lässt. Ein Sicherheitsvorfall, der keinen gesetzlichen Meldeschwellenwert erreicht, kann ohne öffentliche oder individuelle Mitteilung bearbeitet werden. Zwingende Datenschutzrechte und Rechtsbehelfe bleiben unberührt.',
    ],
  },
  es: {
    label: 'Actualización de privacidad · 10 de septiembre de 2026',
    title: 'Brechas de datos personales y notificaciones obligatorias',
    paragraphs: [
      'Si CK-Labs tiene conocimiento de una brecha de datos personales que afecte a TycoonX, evaluaremos el incidente, lo documentaremos cuando corresponda, adoptaremos medidas adecuadas de contención y reparación y efectuaremos las notificaciones exigidas por la ley. Cuando sea aplicable el RGPD, CK-Labs notificará la brecha a la autoridad de control competente sin dilación indebida y, cuando sea posible, dentro de las 72 horas siguientes a haber tenido conocimiento de ella, salvo que sea improbable que suponga un riesgo para los derechos y libertades de las personas físicas. Cuando proceda, también se explicarán los motivos de cualquier retraso en la notificación.',
      'Cuando sea probable que una brecha de datos personales entrañe un alto riesgo para sus derechos y libertades, CK-Labs informará a las personas afectadas sin dilación indebida, con un lenguaje claro y sencillo e incluyendo la información y las medidas de protección exigidas por la ley, salvo que una excepción legal aplicable elimine la obligación de comunicación individual. Un incidente de seguridad que no alcance el umbral legal de notificación puede gestionarse sin aviso público o individual. Esta sección no limita ningún derecho ni recurso obligatorio en materia de protección de datos.',
    ],
  },
  es_MX: {
    label: 'Actualización de privacidad · 10 de septiembre de 2026',
    title: 'Incidentes con datos personales y avisos obligatorios',
    paragraphs: [
      'Si CK-Labs se entera de una vulneración de datos personales que afecte a TycoonX, evaluaremos el incidente, lo documentaremos cuando la ley lo exija, aplicaremos medidas adecuadas para contenerlo y corregirlo y realizaremos las notificaciones legalmente obligatorias. Cuando aplique el RGPD, CK-Labs notificará la vulneración a la autoridad de control competente sin demora indebida y, cuando sea posible, dentro de las 72 horas siguientes a tener conocimiento de ella, salvo que sea poco probable que genere un riesgo para los derechos y libertades de las personas físicas. Cuando corresponda, también se explicarán las razones de cualquier retraso en la notificación.',
      'Si es probable que una vulneración de datos personales genere un alto riesgo para sus derechos y libertades, CK-Labs informará a las personas afectadas sin demora indebida, con lenguaje claro y sencillo e incluyendo la información y las medidas de protección exigidas por la ley, salvo que una excepción legal aplicable elimine la obligación de aviso individual. Un incidente de seguridad que no alcance el umbral legal de notificación puede atenderse sin un aviso público o individual. Esta sección no limita derechos ni recursos obligatorios en materia de protección de datos.',
    ],
  },
  fr: {
    label: 'Mise à jour confidentialité · 10 septembre 2026',
    title: 'Violations de données personnelles et notifications obligatoires',
    paragraphs: [
      'Si CK-Labs prend connaissance d’une violation de données personnelles concernant TycoonX, nous évaluons l’incident, le documentons lorsque la loi l’exige, prenons des mesures appropriées de confinement et de correction et effectuons les notifications légalement requises. Lorsque le RGPD s’applique, CK-Labs notifie la violation à l’autorité de contrôle compétente dans les meilleurs délais et, si possible, au plus tard 72 heures après en avoir pris connaissance, sauf si la violation n’est pas susceptible d’engendrer un risque pour les droits et libertés des personnes physiques. Lorsque la loi l’exige, les motifs d’un éventuel retard de notification sont également communiqués.',
      'Lorsqu’une violation de données personnelles est susceptible d’engendrer un risque élevé pour vos droits et libertés, CK-Labs en informe les personnes concernées dans les meilleurs délais, dans un langage clair et simple, avec les informations et mesures de protection exigées par la loi, sauf si une exception légale applicable écarte cette obligation d’information individuelle. Un incident de sécurité qui n’atteint pas le seuil légal de notification peut être traité sans communication publique ou individuelle. La présente section ne limite aucun droit ni recours impératif en matière de protection des données.',
    ],
  },
  fr_CA: {
    label: 'Mise à jour de la confidentialité · 10 septembre 2026',
    title: 'Atteintes aux renseignements personnels et avis obligatoires',
    paragraphs: [
      'Si CK-Labs prend connaissance d’une atteinte à des données personnelles touchant TycoonX, nous évaluons l’incident, le documentons lorsque la loi l’exige, prenons les mesures appropriées pour le contenir et y remédier et effectuons les avis exigés par la loi. Lorsque le RGPD s’applique, CK-Labs avise l’autorité de contrôle compétente sans retard indu et, lorsque possible, dans les 72 heures suivant la prise de connaissance de l’atteinte, sauf s’il est peu probable qu’elle présente un risque pour les droits et libertés des personnes physiques. Lorsque requis, les raisons d’un retard de notification sont également fournies.',
      'Lorsqu’une atteinte à des données personnelles est susceptible d’entraîner un risque élevé pour vos droits et libertés, CK-Labs en informe les personnes touchées sans retard indu, dans un langage clair et simple, avec les renseignements et mesures de protection exigés par la loi, sauf si une exception légale applicable écarte l’obligation d’avis individuel. Un incident de sécurité qui n’atteint pas le seuil légal de notification peut être géré sans avis public ou individuel. La présente section ne limite aucun droit ni recours obligatoire en matière de protection des données.',
    ],
  },
  it: {
    label: 'Aggiornamento privacy · 10 settembre 2026',
    title: 'Violazioni dei dati personali e notifiche obbligatorie',
    paragraphs: [
      'Se CK-Labs viene a conoscenza di una violazione dei dati personali che riguarda TycoonX, valuteremo l’incidente, lo documenteremo quando richiesto, adotteremo adeguate misure di contenimento e rimedio ed effettueremo le notifiche previste dalla legge. Quando si applica il GDPR, CK-Labs notificherà la violazione all’autorità di controllo competente senza ingiustificato ritardo e, ove possibile, entro 72 ore dal momento in cui ne è venuta a conoscenza, salvo che sia improbabile che la violazione presenti un rischio per i diritti e le libertà delle persone fisiche. Ove richiesto, saranno inoltre indicate le ragioni di un eventuale ritardo nella notifica.',
      'Quando è probabile che una violazione dei dati personali presenti un rischio elevato per i suoi diritti e le sue libertà, CK-Labs informerà gli interessati senza ingiustificato ritardo, con un linguaggio chiaro e semplice e includendo le informazioni e le misure di protezione richieste dalla legge, salvo che un’eccezione legale applicabile escluda l’obbligo di comunicazione individuale. Un incidente di sicurezza che non raggiunge la soglia legale di notifica può essere gestito senza comunicazione pubblica o individuale. Questa sezione non limita alcun diritto o rimedio inderogabile in materia di protezione dei dati.',
    ],
  },
  pt: {
    label: 'Atualização de privacidade · 10 de setembro de 2026',
    title: 'Violações de dados pessoais e notificações obrigatórias',
    paragraphs: [
      'Se a CK-Labs tomar conhecimento de uma violação de dados pessoais que afete o TycoonX, avaliaremos o incidente, documentá-lo-emos quando exigido, adotaremos medidas adequadas de contenção e correção e efetuaremos as notificações legalmente obrigatórias. Quando o RGPD for aplicável, a CK-Labs notificará a autoridade de controlo competente sem demora injustificada e, sempre que possível, no prazo de 72 horas após ter tomado conhecimento da violação, salvo se for improvável que esta resulte num risco para os direitos e liberdades das pessoas singulares. Quando exigido, serão também indicados os motivos de qualquer atraso na notificação.',
      'Quando uma violação de dados pessoais for suscetível de resultar num risco elevado para os seus direitos e liberdades, a CK-Labs comunicará a violação às pessoas afetadas sem demora injustificada, em linguagem clara e simples e com as informações e medidas de proteção exigidas por lei, salvo se uma exceção legal aplicável afastar a obrigação de comunicação individual. Um incidente de segurança que não atinja o limiar legal de notificação pode ser tratado sem aviso público ou individual. Esta secção não limita quaisquer direitos ou meios de recurso imperativos em matéria de proteção de dados.',
    ],
  },
  pt_BR: {
    label: 'Atualização de privacidade · 10 de setembro de 2026',
    title: 'Violações de dados pessoais e notificações obrigatórias',
    paragraphs: [
      'Se a CK-Labs tomar conhecimento de uma violação de dados pessoais que afete o TycoonX, avaliaremos o incidente, faremos a documentação exigida, adotaremos medidas adequadas de contenção e correção e enviaremos as notificações obrigatórias por lei. Quando o GDPR for aplicável, a CK-Labs notificará a autoridade supervisora competente sem demora indevida e, quando possível, em até 72 horas após tomar conhecimento da violação, salvo se for improvável que ela resulte em risco aos direitos e às liberdades das pessoas físicas. Quando exigido, também serão informados os motivos de eventual atraso na notificação.',
      'Quando for provável que uma violação de dados pessoais resulte em alto risco aos seus direitos e liberdades, a CK-Labs comunicará a violação às pessoas afetadas sem demora indevida, em linguagem clara e simples e com as informações e medidas de proteção exigidas por lei, salvo se uma exceção legal aplicável afastar a obrigação de comunicação individual. Um incidente de segurança que não atinja o limite legal de notificação pode ser tratado sem aviso público ou individual. Esta seção não limita quaisquer direitos ou medidas legais obrigatórias de proteção de dados.',
    ],
  },
  ru: {
    label: 'Обновление конфиденциальности · 10 сентября 2026 г.',
    title: 'Нарушения безопасности персональных данных и обязательные уведомления',
    paragraphs: [
      'Если CK-Labs станет известно о нарушении безопасности персональных данных, затрагивающем TycoonX, мы оценим инцидент, задокументируем его в предусмотренных законом случаях, примем надлежащие меры по локализации и устранению последствий и направим обязательные уведомления. Если применяется GDPR, CK-Labs уведомит компетентный надзорный орган без неоправданной задержки и, по возможности, не позднее 72 часов с момента, когда стало известно о нарушении, кроме случаев, когда такое нарушение, вероятно, не создает риска для прав и свобод физических лиц. Если это требуется, также будут указаны причины задержки уведомления.',
      'Если нарушение безопасности персональных данных, вероятно, создает высокий риск для ваших прав и свобод, CK-Labs без неоправданной задержки уведомит затронутых лиц ясным и понятным языком и предоставит предусмотренную законом информацию и сведения о защитных мерах, если применимое законное исключение не отменяет обязанность индивидуального уведомления. Инцидент безопасности, не достигающий установленного законом порога уведомления, может быть урегулирован без публичного или индивидуального сообщения. Этот раздел не ограничивает обязательные права и средства правовой защиты в сфере защиты данных.',
    ],
  },
  ja: {
    label: 'プライバシー更新 · 2026年9月10日',
    title: '個人データ侵害と法令上必要な通知',
    paragraphs: [
      'CK-LabsがTycoonXに影響する個人データ侵害を把握した場合、当該事案を評価し、法令上必要な記録を行い、適切な封じ込め・是正措置を講じ、必要な通知を行います。GDPRが適用される場合、自然人の権利および自由に対するリスクが生じる可能性が低い場合を除き、CK-Labsは侵害を認識した後、不当な遅滞なく、可能な場合は72時間以内に管轄監督機関へ通知します。法令上必要な場合、通知が遅れた理由も説明します。',
      '個人データ侵害が利用者の権利および自由に高いリスクをもたらす可能性がある場合、適用される法的例外により個別通知が不要となる場合を除き、CK-Labsは影響を受ける方へ不当な遅滞なく、明確で分かりやすい言葉で、法令上必要な情報および保護措置を通知します。法的な通知基準に達しないセキュリティ事案は、公表または個別通知を行わずに対応する場合があります。本項は、強行的なデータ保護上の権利または救済を制限するものではありません。',
    ],
  },
  ko: {
    label: '개인정보 업데이트 · 2026년 9월 10일',
    title: '개인정보 침해와 법적 통지',
    paragraphs: [
      'CK-Labs가 TycoonX에 영향을 미치는 개인정보 침해를 인지한 경우, 해당 사건을 평가하고 법에서 요구하는 범위에서 기록하며 적절한 차단 및 시정 조치를 취하고 법적으로 필요한 통지를 합니다. GDPR이 적용되는 경우, 침해가 자연인의 권리와 자유에 위험을 초래할 가능성이 낮은 경우를 제외하고 CK-Labs는 침해를 인지한 뒤 부당한 지체 없이, 가능한 경우 72시간 이내에 관할 감독기관에 통지합니다. 법에서 요구하는 경우 통지가 지연된 사유도 제공합니다.',
      '개인정보 침해가 귀하의 권리와 자유에 높은 위험을 초래할 가능성이 있는 경우, 적용되는 법적 예외로 개별 통지 의무가 면제되지 않는 한 CK-Labs는 영향을 받은 사람에게 부당한 지체 없이 명확하고 쉬운 언어로 침해 사실과 법에서 요구하는 정보 및 보호 조치를 알립니다. 법적 통지 기준에 미달하는 보안 사고는 공개 또는 개별 통지 없이 처리될 수 있습니다. 이 조항은 강행적인 개인정보 보호 권리나 구제수단을 제한하지 않습니다.',
    ],
  },
  zh: {
    label: '隐私更新 · 2026年9月10日',
    title: '个人数据泄露与法定通知',
    paragraphs: [
      '如果 CK-Labs 发现影响 TycoonX 的个人数据泄露，我们会评估事件、按法律要求进行记录、采取适当的遏制和补救措施，并履行法定通知义务。在适用 GDPR 的情况下，除非该泄露不太可能对自然人的权利和自由造成风险，否则 CK-Labs 会在知悉泄露后及时通知有管辖权的监管机构，并在可行的情况下于 72 小时内完成通知。法律要求时，我们也会说明延迟通知的原因。',
      '如果个人数据泄露可能对您的权利和自由造成高风险，除非适用的法律例外免除个人通知义务，否则 CK-Labs 会及时以清晰易懂的语言通知受影响人员，并提供法律要求的信息和保护措施。未达到法定通知门槛的安全事件，可以在不作公开或个人通知的情况下处理。本节不限制任何强制适用的数据保护权利或救济。',
    ],
  },
  zh_Hans: {
    label: '隐私更新 · 2026年9月10日',
    title: '个人数据泄露与法定通知',
    paragraphs: [
      '如果 CK-Labs 发现影响 TycoonX 的个人数据泄露，我们会评估事件、依法记录、采取适当的遏制和补救措施，并履行法律要求的通知义务。在适用 GDPR 的情况下，除非该泄露不太可能对自然人的权利和自由造成风险，否则 CK-Labs 会在知悉泄露后及时通知有管辖权的监管机构，并在可行的情况下于 72 小时内完成。法律要求时，我们也会说明通知延迟的原因。',
      '如果个人数据泄露可能对您的权利和自由造成高风险，除非适用的法律例外免除个人通知义务，否则 CK-Labs 会及时以清晰易懂的语言通知受影响人员，并提供法律要求的信息和保护措施。未达到法定通知门槛的安全事件，可以在不作公开或个人通知的情况下处理。本节不限制任何强制适用的数据保护权利或救济。',
    ],
  },
  zh_Hant: {
    label: '隱私更新 · 2026年9月10日',
    title: '個人資料外洩與法定通知',
    paragraphs: [
      '如果 CK-Labs 發現影響 TycoonX 的個人資料外洩，我們會評估事件、依法留下紀錄、採取適當的控制與補救措施，並履行法律要求的通知義務。在 GDPR 適用的情況下，除非該外洩不太可能對自然人的權利與自由造成風險，否則 CK-Labs 會在知悉外洩後及時通知有管轄權的監管機關，並在可行的情況下於 72 小時內完成。法律要求時，我們也會說明通知延遲的原因。',
      '如果個人資料外洩可能對您的權利與自由造成高風險，除非適用的法律例外免除個別通知義務，否則 CK-Labs 會及時以清楚易懂的文字通知受影響人士，並提供法律要求的資訊與保護措施。未達法定通知門檻的安全事件，可以在不作公開或個別通知的情況下處理。本節不限制任何強制適用的資料保護權利或救濟。',
    ],
  },
  ar: {
    label: 'تحديث الخصوصية · 10 سبتمبر 2026',
    title: 'خروقات البيانات الشخصية والإشعارات الإلزامية',
    paragraphs: [
      'إذا علمت CK-Labs بخرق للبيانات الشخصية يؤثر في TycoonX، فسنقيّم الحادث ونوثقه حسبما يقتضي القانون ونتخذ تدابير مناسبة للاحتواء والمعالجة ونرسل الإشعارات المطلوبة قانونًا. وعندما تسري اللائحة العامة لحماية البيانات GDPR، تُخطر CK-Labs السلطة الرقابية المختصة دون تأخير غير مبرر، وحيثما أمكن خلال 72 ساعة من العلم بالخرق، ما لم يكن من غير المرجح أن يؤدي الخرق إلى خطر على حقوق الأشخاص الطبيعيين وحرياتهم. وعندما يقتضي القانون ذلك، نوضح أيضًا أسباب أي تأخير في الإخطار.',
      'إذا كان من المرجح أن يؤدي خرق البيانات الشخصية إلى خطر كبير على حقوقك وحرياتك، تُبلغ CK-Labs الأشخاص المتأثرين دون تأخير غير مبرر وبعبارات واضحة ومفهومة، مع تقديم المعلومات وتدابير الحماية التي يطلبها القانون، ما لم يُسقط استثناء قانوني منطبق واجب الإبلاغ الفردي. وقد يُعالج حادث أمني لا يبلغ الحد القانوني للإخطار دون إعلان عام أو إشعار فردي. ولا يحد هذا القسم من أي حقوق أو سبل انتصاف إلزامية في مجال حماية البيانات.',
    ],
  },
  nl: {
    label: 'Privacy-update · 10 september 2026',
    title: 'Inbreuken in verband met persoonsgegevens en verplichte meldingen',
    paragraphs: [
      'Als CK-Labs kennis krijgt van een inbreuk in verband met persoonsgegevens die TycoonX raakt, beoordelen en documenteren wij het incident voor zover wettelijk vereist, nemen wij passende maatregelen om het incident te beperken en te herstellen en doen wij de wettelijk vereiste meldingen. Wanneer de AVG van toepassing is, meldt CK-Labs de inbreuk zonder onredelijke vertraging en waar mogelijk binnen 72 uur na kennisneming aan de bevoegde toezichthoudende autoriteit, tenzij het onwaarschijnlijk is dat de inbreuk een risico inhoudt voor de rechten en vrijheden van natuurlijke personen. Indien vereist, worden ook de redenen voor een vertraagde melding verstrekt.',
      'Wanneer een inbreuk in verband met persoonsgegevens waarschijnlijk een hoog risico inhoudt voor uw rechten en vrijheden, informeert CK-Labs de betrokken personen zonder onredelijke vertraging in duidelijke en begrijpelijke taal en verstrekt zij de wettelijk vereiste informatie en beschermingsmaatregelen, tenzij een toepasselijke wettelijke uitzondering de individuele kennisgeving niet vereist. Een beveiligingsincident dat de wettelijke meldingsdrempel niet bereikt, kan zonder openbare of individuele kennisgeving worden afgehandeld. Deze bepaling beperkt geen dwingende gegevensbeschermingsrechten of rechtsmiddelen.',
    ],
  },
  sv: {
    label: 'Integritetsuppdatering · 10 september 2026',
    title: 'Personuppgiftsincidenter och obligatoriska underrättelser',
    paragraphs: [
      'Om CK-Labs får kännedom om en personuppgiftsincident som påverkar TycoonX kommer vi att bedöma incidenten, dokumentera den när lagen kräver det, vidta lämpliga begränsnings- och korrigeringsåtgärder och göra de anmälningar som krävs enligt lag. När GDPR gäller anmäler CK-Labs incidenten till behörig tillsynsmyndighet utan onödigt dröjsmål och, om möjligt, inom 72 timmar från det att vi fick kännedom om den, såvida det inte är osannolikt att incidenten medför en risk för fysiska personers rättigheter och friheter. När det krävs anger vi även skälen till en försenad anmälan.',
      'Om en personuppgiftsincident sannolikt leder till en hög risk för dina rättigheter och friheter informerar CK-Labs de berörda personerna utan onödigt dröjsmål, på ett klart och tydligt språk och med den information och de skyddsåtgärder som lagen kräver, om inte ett tillämpligt rättsligt undantag gör att individuell information inte krävs. En säkerhetsincident som inte når den rättsliga tröskeln för anmälan kan hanteras utan offentlig eller individuell information. Detta avsnitt begränsar inte tvingande dataskyddsrättigheter eller rättsmedel.',
    ],
  },
  nb: {
    label: 'Personvernoppdatering · 10. september 2026',
    title: 'Brudd på personopplysningssikkerheten og påkrevde varsler',
    paragraphs: [
      'Hvis CK-Labs blir kjent med et brudd på personopplysningssikkerheten som berører TycoonX, vurderer vi hendelsen, dokumenterer den når loven krever det, iverksetter egnede tiltak for å begrense og rette opp forholdet og sender varsler som er lovpålagt. Når GDPR gjelder, varsler CK-Labs kompetent tilsynsmyndighet uten ugrunnet opphold og, der det er mulig, innen 72 timer etter at vi ble kjent med bruddet, med mindre det er lite sannsynlig at bruddet medfører en risiko for fysiske personers rettigheter og friheter. Når det kreves, oppgir vi også årsakene til et forsinket varsel.',
      'Hvis et brudd på personopplysningssikkerheten sannsynligvis medfører høy risiko for dine rettigheter og friheter, informerer CK-Labs de berørte personene uten ugrunnet opphold, i et klart og forståelig språk og med informasjonen og beskyttelsestiltakene loven krever, med mindre et gjeldende lovlig unntak gjør at individuell varsling ikke er nødvendig. En sikkerhetshendelse som ikke når den lovbestemte terskelen for varsling, kan håndteres uten offentlig eller individuell melding. Dette avsnittet begrenser ikke ufravikelige personvernrettigheter eller rettsmidler.',
    ],
  },
  pl: {
    label: 'Aktualizacja prywatności · 10 września 2026 r.',
    title: 'Naruszenia ochrony danych osobowych i wymagane zawiadomienia',
    paragraphs: [
      'Jeśli CK-Labs dowie się o naruszeniu ochrony danych osobowych dotyczącym TycoonX, ocenimy zdarzenie, udokumentujemy je w wymaganym zakresie, podejmiemy odpowiednie działania ograniczające i naprawcze oraz dokonamy wymaganych prawem zawiadomień. Gdy zastosowanie ma RODO, CK-Labs zawiadomi właściwy organ nadzorczy bez zbędnej zwłoki i, w miarę możliwości, nie później niż w ciągu 72 godzin od stwierdzenia naruszenia, chyba że jest mało prawdopodobne, by naruszenie skutkowało ryzykiem naruszenia praw lub wolności osób fizycznych. Jeżeli jest to wymagane, podamy również przyczyny opóźnienia zawiadomienia.',
      'Jeżeli naruszenie ochrony danych osobowych może powodować wysokie ryzyko dla Twoich praw i wolności, CK-Labs poinformuje osoby, których dane dotyczą, bez zbędnej zwłoki, jasnym i prostym językiem oraz przekaże informacje i środki ochronne wymagane prawem, chyba że zastosowanie ma wyjątek prawny znoszący obowiązek indywidualnego zawiadomienia. Incydent bezpieczeństwa, który nie osiąga ustawowego progu zawiadomienia, może zostać obsłużony bez komunikatu publicznego lub indywidualnego. Niniejsza sekcja nie ogranicza bezwzględnie obowiązujących praw ani środków ochrony danych.',
    ],
  },
  th: {
    label: 'อัปเดตความเป็นส่วนตัว · 10 กันยายน 2026',
    title: 'เหตุละเมิดข้อมูลส่วนบุคคลและการแจ้งเตือนที่กฎหมายกำหนด',
    paragraphs: [
      'หาก CK-Labs ทราบถึงเหตุละเมิดข้อมูลส่วนบุคคลที่ส่งผลต่อ TycoonX เราจะประเมินเหตุการณ์ จัดทำบันทึกตามที่กฎหมายกำหนด ใช้มาตรการที่เหมาะสมเพื่อควบคุมและแก้ไขเหตุการณ์ และดำเนินการแจ้งเตือนตามที่กฎหมายกำหนด เมื่อ GDPR ใช้บังคับ CK-Labs จะแจ้งหน่วยงานกำกับดูแลที่มีอำนาจโดยไม่ล่าช้าเกินสมควร และหากเป็นไปได้ภายใน 72 ชั่วโมงนับจากทราบเหตุ เว้นแต่เหตุละเมิดนั้นไม่น่าจะก่อให้เกิดความเสี่ยงต่อสิทธิและเสรีภาพของบุคคลธรรมดา หากกฎหมายกำหนด เราจะแจ้งเหตุผลของความล่าช้าในการแจ้งด้วย',
      'หากเหตุละเมิดข้อมูลส่วนบุคคลมีแนวโน้มก่อให้เกิดความเสี่ยงสูงต่อสิทธิและเสรีภาพของคุณ CK-Labs จะแจ้งผู้ที่ได้รับผลกระทบโดยไม่ล่าช้าเกินสมควรด้วยภาษาที่ชัดเจนและเข้าใจง่าย พร้อมข้อมูลและมาตรการคุ้มครองตามที่กฎหมายกำหนด เว้นแต่ข้อยกเว้นตามกฎหมายที่ใช้บังคับจะทำให้ไม่ต้องแจ้งเป็นรายบุคคล เหตุการณ์ด้านความปลอดภัยที่ไม่ถึงเกณฑ์การแจ้งตามกฎหมายอาจได้รับการจัดการโดยไม่ต้องประกาศต่อสาธารณะหรือแจ้งรายบุคคล ข้อนี้ไม่จำกัดสิทธิหรือวิธีเยียวยาด้านการคุ้มครองข้อมูลที่กฎหมายบังคับใช้',
    ],
  },
  vi: {
    label: 'Cập nhật quyền riêng tư · 10 tháng 9 năm 2026',
    title: 'Vi phạm dữ liệu cá nhân và thông báo bắt buộc',
    paragraphs: [
      'Nếu CK-Labs biết về một vụ vi phạm dữ liệu cá nhân ảnh hưởng đến TycoonX, chúng tôi sẽ đánh giá sự cố, lập hồ sơ theo yêu cầu pháp luật, thực hiện các biện pháp phù hợp để khoanh vùng và khắc phục, đồng thời gửi các thông báo bắt buộc theo luật. Khi GDPR áp dụng, CK-Labs sẽ thông báo cho cơ quan giám sát có thẩm quyền mà không trì hoãn không cần thiết và, khi khả thi, trong vòng 72 giờ kể từ khi biết về vụ vi phạm, trừ khi vụ vi phạm không có khả năng gây ra rủi ro đối với quyền và tự do của thể nhân. Khi pháp luật yêu cầu, chúng tôi cũng sẽ nêu lý do của việc thông báo chậm.',
      'Khi một vụ vi phạm dữ liệu cá nhân có khả năng gây ra rủi ro cao đối với quyền và tự do của bạn, CK-Labs sẽ thông báo cho những người bị ảnh hưởng mà không trì hoãn không cần thiết, bằng ngôn ngữ rõ ràng, dễ hiểu và kèm theo thông tin cùng các biện pháp bảo vệ mà pháp luật yêu cầu, trừ khi một ngoại lệ pháp lý áp dụng loại bỏ nghĩa vụ thông báo riêng. Một sự cố an ninh không đạt ngưỡng thông báo theo luật có thể được xử lý mà không cần thông báo công khai hoặc riêng lẻ. Phần này không hạn chế bất kỳ quyền hay biện pháp khắc phục bắt buộc nào về bảo vệ dữ liệu.',
    ],
  },
  uk: {
    label: 'Оновлення конфіденційності · 10 вересня 2026 року',
    title: 'Порушення захисту персональних даних і обов’язкові повідомлення',
    paragraphs: [
      'Якщо CK-Labs стане відомо про порушення захисту персональних даних, що впливає на TycoonX, ми оцінимо інцидент, задокументуємо його у випадках, передбачених законом, вживемо належних заходів для локалізації та усунення наслідків і здійснимо обов’язкові повідомлення. Якщо застосовується GDPR, CK-Labs повідомить компетентний наглядовий орган без невиправданої затримки та, якщо це можливо, протягом 72 годин після того, як стало відомо про порушення, крім випадків, коли таке порушення навряд чи створює ризик для прав і свобод фізичних осіб. Коли цього вимагає закон, також буде наведено причини затримки повідомлення.',
      'Якщо порушення захисту персональних даних, імовірно, створює високий ризик для ваших прав і свобод, CK-Labs без невиправданої затримки повідомить постраждалих осіб чіткою та зрозумілою мовою і надасть інформацію та відомості про захисні заходи, яких вимагає закон, якщо застосовний правовий виняток не усуває обов’язок індивідуального повідомлення. Інцидент безпеки, який не досягає встановленого законом порогу для повідомлення, може бути опрацьований без публічного або індивідуального сповіщення. Цей розділ не обмежує обов’язкових прав чи засобів правового захисту у сфері захисту даних.',
    ],
  },
  hi: {
    label: 'गोपनीयता अपडेट · 10 सितंबर 2026',
    title: 'व्यक्तिगत डेटा उल्लंघन और आवश्यक सूचनाएँ',
    paragraphs: [
      'यदि CK-Labs को TycoonX को प्रभावित करने वाले व्यक्तिगत डेटा उल्लंघन की जानकारी मिलती है, तो हम घटना का आकलन करेंगे, कानून के अनुसार आवश्यक रिकॉर्ड रखेंगे, उचित रोकथाम और सुधारात्मक उपाय करेंगे तथा कानून द्वारा आवश्यक सूचनाएँ देंगे। जहाँ GDPR लागू होता है, वहाँ CK-Labs उल्लंघन की जानकारी मिलने के बाद बिना अनुचित देरी के और जहाँ संभव हो 72 घंटे के भीतर सक्षम पर्यवेक्षी प्राधिकरण को सूचित करेगा, जब तक कि उल्लंघन से प्राकृतिक व्यक्तियों के अधिकारों और स्वतंत्रताओं के लिए जोखिम उत्पन्न होने की संभावना न हो। जहाँ आवश्यक हो, विलंबित सूचना के कारण भी बताए जाएँगे।',
      'यदि किसी व्यक्तिगत डेटा उल्लंघन से आपके अधिकारों और स्वतंत्रताओं के लिए उच्च जोखिम होने की संभावना है, तो लागू कानूनी अपवाद द्वारा व्यक्तिगत सूचना की आवश्यकता हटाए जाने को छोड़कर CK-Labs प्रभावित व्यक्तियों को बिना अनुचित देरी के स्पष्ट और सरल भाषा में सूचित करेगा तथा कानून द्वारा अपेक्षित जानकारी और सुरक्षात्मक उपाय बताएगा। जो सुरक्षा घटना कानूनी सूचना-सीमा तक नहीं पहुँचती, उसे सार्वजनिक या व्यक्तिगत सूचना के बिना संभाला जा सकता है। यह अनुभाग किसी अनिवार्य डेटा-सुरक्षा अधिकार या उपाय को सीमित नहीं करता।',
    ],
  },
  id: {
    label: 'Pembaruan privasi · 10 September 2026',
    title: 'Pelanggaran data pribadi dan pemberitahuan yang diwajibkan',
    paragraphs: [
      'Jika CK-Labs mengetahui adanya pelanggaran data pribadi yang memengaruhi TycoonX, kami akan menilai insiden tersebut, mendokumentasikannya sebagaimana diwajibkan, mengambil langkah penahanan dan perbaikan yang sesuai, serta melakukan pemberitahuan yang diwajibkan hukum. Jika GDPR berlaku, CK-Labs akan memberi tahu otoritas pengawas yang berwenang tanpa penundaan yang tidak semestinya dan, jika memungkinkan, dalam waktu 72 jam setelah mengetahui pelanggaran tersebut, kecuali jika pelanggaran itu kecil kemungkinannya menimbulkan risiko terhadap hak dan kebebasan orang perseorangan. Jika diwajibkan, alasan keterlambatan pemberitahuan juga akan diberikan.',
      'Jika suatu pelanggaran data pribadi kemungkinan menimbulkan risiko tinggi terhadap hak dan kebebasan Anda, CK-Labs akan memberi tahu orang yang terdampak tanpa penundaan yang tidak semestinya dengan bahasa yang jelas dan mudah dipahami, termasuk informasi dan langkah perlindungan yang diwajibkan hukum, kecuali jika pengecualian hukum yang berlaku menghapus kewajiban pemberitahuan individual. Insiden keamanan yang tidak mencapai ambang pemberitahuan menurut hukum dapat ditangani tanpa pemberitahuan publik atau individual. Bagian ini tidak membatasi hak atau upaya hukum perlindungan data yang bersifat wajib.',
    ],
  },
};

const htmlLang: Record<string, string> = {
  es_MX: 'es-MX',
  fr_CA: 'fr-CA',
  pt_BR: 'pt-BR',
  zh_Hans: 'zh-Hans',
  zh_Hant: 'zh-Hant',
};

export default function PersonalDataBreachPrivacyNotice() {
  const pathname = usePathname();
  const canonical = pathname === '/tyconx-privacy-policy' || pathname === '/tyconx-privacy-policy/';
  const match = pathname.match(/^\/tycoonx-legal\/([^/]+)\/privacy\/?$/);
  const locale = canonical ? 'en' : match?.[1] ?? null;
  if (!locale || !copies[locale]) return null;

  const copy = copies[locale];
  const rtl = locale === 'ar';

  return (
    <section
      className="max-w-3xl mx-auto px-4 pb-12"
      lang={htmlLang[locale] ?? locale}
      dir={rtl ? 'rtl' : 'ltr'}
      aria-labelledby="tycoonx-personal-data-breach-heading"
    >
      <div className="rounded-xl border border-sky-400/20 bg-sky-400/[0.05] p-6">
        <p className="text-sky-300/80 text-xs font-medium tracking-wide mb-2">{copy.label}</p>
        <h2 id="tycoonx-personal-data-breach-heading" className="text-white font-semibold mb-4">{copy.title}</h2>
        <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
          {copy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  );
}
