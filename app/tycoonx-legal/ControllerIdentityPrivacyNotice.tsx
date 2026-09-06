'use client';

import { usePathname } from 'next/navigation';

type ControllerCopy = {
  label: string;
  title: string;
  paragraphs: string[];
};

const copies: Record<string, ControllerCopy> = {
  tr: {
    label: 'Gizlilik güncellemesi · 6 Eylül 2026',
    title: 'Veri sorumlusu ve iletişim',
    paragraphs: [
      'Bu Gizlilik Politikasında açıklanan kişisel veri işleme faaliyetleri bakımından veri sorumlusu, CK-Labs adı altında faaliyet gösteren Atakan Cevik’tir: Prämonstratenserstraße 80, 51069 Köln, Almanya.',
      'Gizlilik sorularınızı ve geçerli veri koruma haklarınızı kullanmaya yönelik taleplerinizi cevikdev@gmail.com adresine veya TycoonX Support üzerinden gönderebilirsiniz. Apple, Google, Xsolla ve diğer sağlayıcılar, bu Politikada açıklandığı ölçüde kendi işlemleri bakımından ayrıca bağımsız veri sorumlusu olarak hareket edebilir.',
    ],
  },
  de: {
    label: 'Datenschutz-Update · 6. September 2026',
    title: 'Verantwortlicher und Kontakt',
    paragraphs: [
      'Für die in dieser Datenschutzerklärung beschriebene Verarbeitung personenbezogener Daten ist Atakan Cevik, handelnd unter CK-Labs, Prämonstratenserstraße 80, 51069 Köln, Deutschland, Verantwortlicher.',
      'Datenschutzfragen und Anträge zur Ausübung anwendbarer Datenschutzrechte können an cevikdev@gmail.com oder über den TycoonX Support gesendet werden. Apple, Google, Xsolla und andere Anbieter können für ihre eigene Verarbeitung, soweit in dieser Datenschutzerklärung beschrieben, daneben als eigenständige Verantwortliche handeln.',
    ],
  },
  es: {
    label: 'Actualización de privacidad · 6 de septiembre de 2026',
    title: 'Responsable del tratamiento y contacto',
    paragraphs: [
      'El responsable del tratamiento de los datos personales descrito en esta Política de Privacidad es Atakan Cevik, que opera bajo el nombre CK-Labs, Prämonstratenserstraße 80, 51069 Köln, Alemania.',
      'Las consultas de privacidad y las solicitudes para ejercer los derechos de protección de datos aplicables pueden enviarse a cevikdev@gmail.com o a través del Soporte de TycoonX. Apple, Google, Xsolla y otros proveedores pueden actuar por separado como responsables independientes de sus propios tratamientos cuando así se indique en esta Política.',
    ],
  },
  es_MX: {
    label: 'Actualización de privacidad · 6 de septiembre de 2026',
    title: 'Responsable del tratamiento y contacto',
    paragraphs: [
      'El responsable del tratamiento de los datos personales descritos en este Aviso de Privacidad es Atakan Cevik, quien opera comercialmente como CK-Labs, Prämonstratenserstraße 80, 51069 Köln, Alemania.',
      'Las dudas de privacidad y las solicitudes para ejercer los derechos de protección de datos que correspondan pueden enviarse a cevikdev@gmail.com o mediante Soporte de TycoonX. Apple, Google, Xsolla y otros proveedores pueden actuar por separado como responsables independientes respecto de sus propios tratamientos cuando así se explique en este Aviso.',
    ],
  },
  fr: {
    label: 'Mise à jour confidentialité · 6 septembre 2026',
    title: 'Responsable du traitement et contact',
    paragraphs: [
      'Le responsable du traitement des données personnelles décrit dans la présente Politique de confidentialité est Atakan Cevik, exerçant sous le nom CK-Labs, Prämonstratenserstraße 80, 51069 Köln, Allemagne.',
      'Les questions relatives à la confidentialité et les demandes d’exercice des droits applicables en matière de protection des données peuvent être adressées à cevikdev@gmail.com ou au Support TycoonX. Apple, Google, Xsolla et d’autres prestataires peuvent agir séparément comme responsables de traitement indépendants pour leurs propres traitements lorsque cela est indiqué dans la présente Politique.',
    ],
  },
  fr_CA: {
    label: 'Mise à jour de la confidentialité · 6 septembre 2026',
    title: 'Responsable du traitement et coordonnées',
    paragraphs: [
      'Le responsable du traitement des renseignements personnels décrit dans la présente Politique de confidentialité est Atakan Cevik, faisant affaire sous le nom CK-Labs, Prämonstratenserstraße 80, 51069 Köln, Allemagne.',
      'Les questions sur la confidentialité et les demandes visant à exercer les droits applicables en matière de protection des données peuvent être envoyées à cevikdev@gmail.com ou au soutien TycoonX. Apple, Google, Xsolla et d’autres fournisseurs peuvent agir séparément comme responsables indépendants de leurs propres traitements lorsque la présente Politique le précise.',
    ],
  },
  it: {
    label: 'Aggiornamento privacy · 6 settembre 2026',
    title: 'Titolare del trattamento e contatti',
    paragraphs: [
      'Il titolare del trattamento dei dati personali descritto nella presente Informativa sulla privacy è Atakan Cevik, che opera con il nome CK-Labs, Prämonstratenserstraße 80, 51069 Köln, Germania.',
      'Le domande sulla privacy e le richieste per esercitare i diritti applicabili in materia di protezione dei dati possono essere inviate a cevikdev@gmail.com o tramite il Supporto TycoonX. Apple, Google, Xsolla e altri fornitori possono agire separatamente come titolari autonomi per i propri trattamenti, ove indicato nella presente Informativa.',
    ],
  },
  pt: {
    label: 'Atualização de privacidade · 6 de setembro de 2026',
    title: 'Responsável pelo tratamento e contactos',
    paragraphs: [
      'O responsável pelo tratamento dos dados pessoais descrito nesta Política de Privacidade é Atakan Cevik, que exerce atividade sob o nome CK-Labs, Prämonstratenserstraße 80, 51069 Köln, Alemanha.',
      'Questões de privacidade e pedidos para exercer direitos de proteção de dados aplicáveis podem ser enviados para cevikdev@gmail.com ou através do Suporte TycoonX. A Apple, a Google, a Xsolla e outros fornecedores podem atuar separadamente como responsáveis independentes pelos seus próprios tratamentos quando tal for indicado nesta Política.',
    ],
  },
  pt_BR: {
    label: 'Atualização de privacidade · 6 de setembro de 2026',
    title: 'Controlador e contato',
    paragraphs: [
      'O controlador dos dados pessoais descrito nesta Política de Privacidade é Atakan Cevik, que atua comercialmente como CK-Labs, Prämonstratenserstraße 80, 51069 Köln, Alemanha.',
      'Dúvidas sobre privacidade e solicitações para exercer direitos de proteção de dados aplicáveis podem ser enviadas para cevikdev@gmail.com ou pelo Suporte TycoonX. Apple, Google, Xsolla e outros fornecedores podem atuar separadamente como controladores independentes de seus próprios tratamentos quando isso for indicado nesta Política.',
    ],
  },
  ru: {
    label: 'Обновление конфиденциальности · 6 сентября 2026 года',
    title: 'Ответственный за обработку данных и контакты',
    paragraphs: [
      'Ответственным за обработку персональных данных, описанную в настоящей Политике конфиденциальности, является Atakan Cevik, осуществляющий деятельность под наименованием CK-Labs, Prämonstratenserstraße 80, 51069 Köln, Германия.',
      'Вопросы о конфиденциальности и запросы на осуществление применимых прав в области защиты данных можно направлять на cevikdev@gmail.com или через поддержку TycoonX. Apple, Google, Xsolla и другие поставщики могут отдельно выступать самостоятельными контролерами в отношении собственной обработки данных, когда это указано в настоящей Политике.',
    ],
  },
  ja: {
    label: 'プライバシー更新 · 2026年9月6日',
    title: 'データ管理者と連絡先',
    paragraphs: [
      '本プライバシーポリシーに記載された個人データ処理の管理者は、CK-Labs の名称で事業を行う Atakan Cevik（Prämonstratenserstraße 80, 51069 Köln, Germany）です。',
      'プライバシーに関するご質問や、適用されるデータ保護上の権利を行使するための請求は、cevikdev@gmail.com または TycoonX Support から送信できます。Apple、Google、Xsolla その他の事業者は、本ポリシーに記載される範囲で、それぞれの処理について独立した管理者として別個に行動する場合があります。',
    ],
  },
  ko: {
    label: '개인정보 보호 업데이트 · 2026년 9월 6일',
    title: '개인정보 처리자 및 연락처',
    paragraphs: [
      '이 개인정보 처리방침에 설명된 개인정보 처리의 책임자는 CK-Labs라는 상호로 사업을 운영하는 Atakan Cevik이며, 주소는 Prämonstratenserstraße 80, 51069 Köln, Germany입니다.',
      '개인정보 보호 관련 문의 및 적용되는 정보주체 권리 행사를 위한 요청은 cevikdev@gmail.com 또는 TycoonX Support를 통해 보낼 수 있습니다. Apple, Google, Xsolla 및 기타 제공업체는 이 방침에 설명된 범위에서 각자의 처리에 대해 별도의 독립적인 개인정보 처리자로 활동할 수 있습니다.',
    ],
  },
  zh: {
    label: '隱私更新 · 2026年9月6日',
    title: '資料控制者與聯絡方式',
    paragraphs: [
      '就本隱私政策所述的個人資料處理而言，資料控制者為以 CK-Labs 名義經營的 Atakan Cevik，地址為 Prämonstratenserstraße 80, 51069 Köln, Germany。',
      '如有隱私問題或要行使適用的資料保護權利，可透過 cevikdev@gmail.com 或 TycoonX Support 聯絡。Apple、Google、Xsolla 及其他服務提供者，若本政策有相應說明，可能就其自身的資料處理另行作為獨立資料控制者。',
    ],
  },
  zh_Hans: {
    label: '隐私更新 · 2026年9月6日',
    title: '数据控制者及联系方式',
    paragraphs: [
      '对于本隐私政策所述的个人数据处理，数据控制者为以 CK-Labs 名义经营的 Atakan Cevik，地址为 Prämonstratenserstraße 80, 51069 Köln, Germany。',
      '如有隐私问题或希望行使适用的数据保护权利，可通过 cevikdev@gmail.com 或 TycoonX Support 联系。Apple、Google、Xsolla 及其他服务提供商在本政策所述情况下，可能就其自身的数据处理另行作为独立的数据控制者。',
    ],
  },
  zh_Hant: {
    label: '隱私更新 · 2026年9月6日',
    title: '資料控制者與聯絡方式',
    paragraphs: [
      '就本隱私政策所述的個人資料處理而言，資料控制者為以 CK-Labs 名義經營的 Atakan Cevik，地址為 Prämonstratenserstraße 80, 51069 Köln, Germany。',
      '如有隱私問題或希望行使適用的資料保護權利，可透過 cevikdev@gmail.com 或 TycoonX Support 聯絡。Apple、Google、Xsolla 及其他服務提供者，在本政策所述情況下，可能就其自身的資料處理另行作為獨立資料控制者。',
    ],
  },
  ar: {
    label: 'تحديث الخصوصية · 6 سبتمبر 2026',
    title: 'المتحكم بالبيانات وبيانات الاتصال',
    paragraphs: [
      'المتحكم المسؤول عن معالجة البيانات الشخصية الموضحة في سياسة الخصوصية هذه هو Atakan Cevik، الذي يمارس نشاطه باسم CK-Labs، وعنوانه Prämonstratenserstraße 80, 51069 Köln, Germany.',
      'يمكن إرسال أسئلة الخصوصية وطلبات ممارسة حقوق حماية البيانات المعمول بها إلى cevikdev@gmail.com أو عبر دعم TycoonX. وقد تعمل Apple وGoogle وXsolla ومقدمو خدمات آخرون بشكل منفصل كمتحكمين مستقلين فيما يتعلق بمعالجاتهم الخاصة عندما يكون ذلك موضحًا في هذه السياسة.',
    ],
  },
  nl: {
    label: 'Privacy-update · 6 september 2026',
    title: 'Verwerkingsverantwoordelijke en contact',
    paragraphs: [
      'De verwerkingsverantwoordelijke voor de verwerking van persoonsgegevens die in dit Privacybeleid wordt beschreven, is Atakan Cevik, handelend onder de naam CK-Labs, Prämonstratenserstraße 80, 51069 Köln, Duitsland.',
      'Vragen over privacy en verzoeken om toepasselijke gegevensbeschermingsrechten uit te oefenen kunnen worden gestuurd naar cevikdev@gmail.com of via TycoonX Support. Apple, Google, Xsolla en andere aanbieders kunnen voor hun eigen verwerkingen afzonderlijk als onafhankelijke verwerkingsverantwoordelijken optreden wanneer dat in dit beleid wordt beschreven.',
    ],
  },
  sv: {
    label: 'Integritetsuppdatering · 6 september 2026',
    title: 'Personuppgiftsansvarig och kontakt',
    paragraphs: [
      'Personuppgiftsansvarig för den behandling av personuppgifter som beskrivs i denna integritetspolicy är Atakan Cevik, verksam under namnet CK-Labs, Prämonstratenserstraße 80, 51069 Köln, Tyskland.',
      'Integritetsfrågor och begäranden om att utöva tillämpliga dataskyddsrättigheter kan skickas till cevikdev@gmail.com eller via TycoonX Support. Apple, Google, Xsolla och andra leverantörer kan separat vara självständigt personuppgiftsansvariga för sin egen behandling när detta anges i policyn.',
    ],
  },
  nb: {
    label: 'Personvernoppdatering · 6. september 2026',
    title: 'Behandlingsansvarlig og kontakt',
    paragraphs: [
      'Behandlingsansvarlig for behandlingen av personopplysninger som beskrives i denne personvernerklæringen, er Atakan Cevik, som driver under navnet CK-Labs, Prämonstratenserstraße 80, 51069 Köln, Tyskland.',
      'Spørsmål om personvern og forespørsler om å utøve gjeldende personvernrettigheter kan sendes til cevikdev@gmail.com eller via TycoonX Support. Apple, Google, Xsolla og andre leverandører kan separat opptre som selvstendige behandlingsansvarlige for sin egen behandling når dette er beskrevet i erklæringen.',
    ],
  },
  pl: {
    label: 'Aktualizacja prywatności · 6 września 2026 r.',
    title: 'Administrator danych i kontakt',
    paragraphs: [
      'Administratorem danych osobowych przetwarzanych w sposób opisany w niniejszej Polityce prywatności jest Atakan Cevik, prowadzący działalność pod nazwą CK-Labs, Prämonstratenserstraße 80, 51069 Köln, Niemcy.',
      'Pytania dotyczące prywatności oraz wnioski o wykonanie przysługujących praw w zakresie ochrony danych można kierować na cevikdev@gmail.com lub przez TycoonX Support. Apple, Google, Xsolla i inni dostawcy mogą odrębnie działać jako niezależni administratorzy w odniesieniu do własnego przetwarzania, jeżeli opisano to w niniejszej Polityce.',
    ],
  },
  th: {
    label: 'อัปเดตความเป็นส่วนตัว · 6 กันยายน 2026',
    title: 'ผู้ควบคุมข้อมูลและช่องทางติดต่อ',
    paragraphs: [
      'ผู้ควบคุมข้อมูลส่วนบุคคลสำหรับการประมวลผลที่อธิบายในนโยบายความเป็นส่วนตัวนี้คือ Atakan Cevik ซึ่งดำเนินธุรกิจภายใต้ชื่อ CK-Labs ที่อยู่ Prämonstratenserstraße 80, 51069 Köln, Germany',
      'คำถามด้านความเป็นส่วนตัวและคำขอใช้สิทธิด้านการคุ้มครองข้อมูลที่เกี่ยวข้องสามารถส่งไปที่ cevikdev@gmail.com หรือผ่าน TycoonX Support ได้ Apple, Google, Xsolla และผู้ให้บริการรายอื่นอาจทำหน้าที่แยกต่างหากในฐานะผู้ควบคุมข้อมูลอิสระสำหรับการประมวลผลของตนเองตามที่อธิบายไว้ในนโยบายนี้',
    ],
  },
  vi: {
    label: 'Cập nhật quyền riêng tư · 6 tháng 9 năm 2026',
    title: 'Bên kiểm soát dữ liệu và thông tin liên hệ',
    paragraphs: [
      'Bên kiểm soát dữ liệu cá nhân đối với hoạt động xử lý được mô tả trong Chính sách quyền riêng tư này là Atakan Cevik, kinh doanh dưới tên CK-Labs, Prämonstratenserstraße 80, 51069 Köln, Đức.',
      'Các câu hỏi về quyền riêng tư và yêu cầu thực hiện những quyền bảo vệ dữ liệu áp dụng có thể được gửi tới cevikdev@gmail.com hoặc qua TycoonX Support. Apple, Google, Xsolla và các nhà cung cấp khác có thể hoạt động riêng với tư cách bên kiểm soát độc lập đối với hoạt động xử lý của chính họ khi Chính sách này có nêu rõ.',
    ],
  },
  uk: {
    label: 'Оновлення конфіденційності · 6 вересня 2026 року',
    title: 'Контролер даних і контакти',
    paragraphs: [
      'Контролером персональних даних щодо обробки, описаної в цій Політиці конфіденційності, є Atakan Cevik, який здійснює діяльність під назвою CK-Labs, Prämonstratenserstraße 80, 51069 Köln, Німеччина.',
      'Запитання щодо конфіденційності та запити про здійснення застосовних прав у сфері захисту даних можна надсилати на cevikdev@gmail.com або через TycoonX Support. Apple, Google, Xsolla та інші постачальники можуть окремо виступати незалежними контролерами щодо власної обробки, якщо це зазначено в цій Політиці.',
    ],
  },
  hi: {
    label: 'गोपनीयता अपडेट · 6 सितंबर 2026',
    title: 'डेटा नियंत्रक और संपर्क',
    paragraphs: [
      'इस गोपनीयता नीति में बताए गए व्यक्तिगत डेटा के प्रोसेसिंग के लिए डेटा नियंत्रक Atakan Cevik हैं, जो CK-Labs नाम से व्यवसाय करते हैं; पता: Prämonstratenserstraße 80, 51069 Köln, Germany।',
      'गोपनीयता संबंधी प्रश्न और लागू डेटा-सुरक्षा अधिकारों का प्रयोग करने के अनुरोध cevikdev@gmail.com या TycoonX Support के माध्यम से भेजे जा सकते हैं। Apple, Google, Xsolla और अन्य प्रदाता इस नीति में बताए गए मामलों में अपने स्वयं के प्रोसेसिंग के लिए अलग स्वतंत्र डेटा नियंत्रक के रूप में कार्य कर सकते हैं।',
    ],
  },
  id: {
    label: 'Pembaruan privasi · 6 September 2026',
    title: 'Pengendali data dan kontak',
    paragraphs: [
      'Pengendali data pribadi untuk pemrosesan yang dijelaskan dalam Kebijakan Privasi ini adalah Atakan Cevik, yang menjalankan usaha dengan nama CK-Labs, Prämonstratenserstraße 80, 51069 Köln, Jerman.',
      'Pertanyaan privasi dan permintaan untuk menggunakan hak perlindungan data yang berlaku dapat dikirim ke cevikdev@gmail.com atau melalui TycoonX Support. Apple, Google, Xsolla, dan penyedia lain dapat secara terpisah bertindak sebagai pengendali independen untuk pemrosesan mereka sendiri apabila hal tersebut dijelaskan dalam Kebijakan ini.',
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

export default function ControllerIdentityPrivacyNotice() {
  const pathname = usePathname();
  const match = pathname.match(/^\/tycoonx-legal\/([^/]+)\/privacy\/?$/);
  const locale = match?.[1] ?? null;
  if (!locale || !copies[locale]) return null;

  const copy = copies[locale];
  const rtl = locale === 'ar';

  return (
    <section
      className="max-w-3xl mx-auto px-4 pb-12"
      lang={htmlLang[locale] ?? locale}
      dir={rtl ? 'rtl' : 'ltr'}
      aria-labelledby="tycoonx-controller-identity-privacy-heading"
    >
      <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/[0.05] p-6">
        <p className="text-emerald-300/80 text-xs font-medium tracking-wide mb-2">{copy.label}</p>
        <h2 id="tycoonx-controller-identity-privacy-heading" className="text-white font-semibold mb-4">{copy.title}</h2>
        <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
          {copy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="flex flex-wrap gap-3 mt-5 text-sm">
          <a href="mailto:cevikdev@gmail.com" className="text-emerald-300 hover:text-emerald-200 transition">cevikdev@gmail.com</a>
          <a href="/tyconx-support" className="text-emerald-300 hover:text-emerald-200 transition">TycoonX Support</a>
          <a href="/tycoonx-impressum" className="text-emerald-300 hover:text-emerald-200 transition">Impressum / Legal Notice</a>
        </div>
      </div>
    </section>
  );
}
