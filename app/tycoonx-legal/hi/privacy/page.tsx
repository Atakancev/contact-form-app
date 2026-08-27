const sections = [
  {
    title: "हम कौन-सी जानकारी प्रोसेस करते हैं",
    body: [
      "अकाउंट और प्रोफ़ाइल डेटा, जैसे supported sign-in identifiers, email address, display name, avatar, language, time zone, settings और account lifecycle events।",
      "TycoonX की persistent game world चलाने के लिए आवश्यक gameplay और economy data, जिसमें progression, inventory, virtual currency और Diamond balances, companies, production, market activity, housing, jobs, contracts, loans, stocks, transactions और VIP entitlement status शामिल हैं।",
      "Purchase और entitlement data, जैसे payment platform, product identifier, transaction identifiers, signed transaction या receipt information, purchase/activation/expiry status, refund/revocation/chargeback status और delivery, restore, migration या correction history। Platform stores या payment processors से हमें आम तौर पर आपका पूरा payment-card number नहीं मिलता।",
      "Security और fraud data, जैसे login/session records, IP address, Service को उपलब्ध device/platform information, app version, diagnostics, suspicious access patterns, invalid purchase validations, exploit indicators, anti-abuse signals और moderation/security logs।",
      "Communications और community content, जैसे public या private chats, reports, profile/company content, support tickets, contact-form submissions, bug reports, appeals, attachments, timestamps, sender/recipient identifiers और moderation status।",
      "Usage और analytics information, जैसे feature usage, sessions, retention, performance, interaction events और aggregated economy/balancing metrics।",
    ],
  },
  {
    title: "डेटा हमें कहाँ से मिलता है",
    body: [
      "जब आप account बनाते या उपयोग करते हैं, TycoonX खेलते हैं, TycoonX Support से संपर्क करते हैं, community content जमा करते हैं या settings बदलते हैं, तब हमें data सीधे आपसे मिलता है। हमें उन services से भी सीमित जानकारी मिलती है जिन्हें आप TycoonX के साथ चुनते या उपयोग करते हैं, जिसमें supported authentication providers और Apple, Google, Xsolla या अन्य authorized payment provider शामिल हैं, जब वे purchase, entitlement, refund, revocation, fraud या transaction-status information भेजते हैं।",
      "Payment providers card, bank, billing-address, tax-location या अन्य payment details अपनी privacy notices के तहत independently process कर सकते हैं। CK-Labs को सामान्यतः full payment instrument details के बजाय वह transaction और entitlement information मिलती है जो TycoonX purchases को deliver और reconcile करने के लिए आवश्यक है।",
    ],
  },
  {
    title: "हम जानकारी क्यों प्रोसेस करते हैं",
    body: [
      "हम information को accounts बनाने और सुरक्षित रखने, TycoonX चलाने और sync करने, valid purchases deliver और restore करने, duplicate delivery और fraud रोकने, cheating या exploits detect करने, incidents investigate करने, invalid game state correct करने, support देने, community features moderate करने, Terms और Community Standards लागू करने, technical problems diagnose करने, Service improve करने, operational/legal notices भेजने और legal obligations पूरी करने के लिए process करते हैं।",
    ],
  },
  {
    title: "कानूनी आधार",
    body: [
      "जहाँ GDPR या समान कानून लागू होता है, हम specific processing के लिए उपयुक्त legal basis पर निर्भर करते हैं: gameplay, account access, purchase delivery और support के लिए contract performance; security, anti-fraud, game integrity, diagnostics, proportionate community moderation और legal defense के लिए legitimate interests जहाँ आपके overriding rights या interests उन्हें रोकते नहीं; required recordkeeping और authority requests के लिए legal obligations; और optional processing के लिए जहाँ कानून माँगे वहाँ consent।",
      "केवल TycoonX उपयोग करना उस processing के लिए consent नहीं माना जाता जिसके लिए कानून consent की माँग करता है। जहाँ consent आवश्यक है, हम उसे अलग से माँगते हैं और future processing के लिए उसे वापस लिया जा सकता है।",
    ],
  },
  {
    title: "TycoonX देने के लिए आवश्यक डेटा",
    body: [
      "कुछ information TycoonX contract perform करने या purchase process करने के लिए आवश्यक है। उदाहरण के लिए, persistent game state बनाए रखने के लिए account identifier और paid content को सही तरह deliver, restore, refund, revoke या reconcile करने के लिए valid transaction या entitlement information आवश्यक है। Required information न मिलने या verify न हो पाने पर हम account create/authenticate, purchase deliver, entitlement restore या affected feature प्रदान करने में असमर्थ हो सकते हैं।",
      "Core Service के लिए जरूरी न होने वाली optional information या processing को जहाँ कानून माँगे वहाँ अलग तरह से संभाला जाता है, जिसमें applicable consent controls शामिल हैं।",
    ],
  },
  {
    title: "हम जानकारी कैसे साझा करते हैं",
    body: [
      "हम personal data बेचते नहीं हैं। हम केवल उतनी information share कर सकते हैं जितनी reasonably necessary हो: hosting, databases, authentication, storage, analytics, diagnostics, moderation, communications, notifications या security support करने वाले service providers के साथ; purchase validation, restoration, refunds, revocations, fraud और disputes के लिए Apple, Google, Xsolla या अन्य authorized platform/payment partners के साथ; जहाँ आप public/social game features जानबूझकर उपयोग करते हैं वहाँ other players के साथ; जहाँ कानून माँगे वहाँ authorities के साथ; और lawful business transfer में शामिल parties के साथ।",
      "Apple, Google, Xsolla, banks, card networks या अन्य payment participants अपनी payment, fraud, tax, account या platform processing के कुछ हिस्सों के लिए independent controllers हो सकते हैं। उनकी own privacy notices और legal obligations उस independent processing पर लागू होती हैं। TycoonX backend के कुछ हिस्सों के लिए Supabase जैसे infrastructure providers का उपयोग करता है और service providers applicable contractual तथा legal safeguards के अधीन होते हैं।",
      "जहाँ platform rules माँगते हैं, CK-Labs से user data पाने वाले third parties को उस data के लिए वही या equivalent level of protection देना होगा जो इस Policy में वर्णित है और applicable platform rules require करते हैं।",
      "Third-party AI services इन rules से बाहर नहीं हैं। यदि TycoonX किसी third-party AI service का उपयोग इस तरह करता है जिसमें personal data share होता है, तो CK-Labs उस sharing का disclosure करेगा और applicable platform rules या law जहाँ माँगें वहाँ data transmit या share करने से पहले explicit permission प्राप्त करेगा। ऐसे provider को authorized purposes तक सीमित रखा जाएगा और appropriate privacy/security safeguards लागू होंगे।",
    ],
  },
  {
    title: "Public और private community content",
    body: [
      "TycoonX में आप जो content जानबूझकर public करते हैं, वह Service के हिस्से के रूप में other users को दिखाया जा सकता है। जहाँ TycoonX Terms और Community Standards public user-generated content को TycoonX community या promotional purposes में feature करने की अनुमति देते हैं, CK-Labs appropriate legal basis का उपयोग करेगा और sharing context, applicable settings, third-party rights तथा mandatory law का सम्मान करेगा। यदि specific promotional use के लिए consent आवश्यक है, तो CK-Labs उसे अलग से माँगेगा।",
      "Private direct messages, private support communications और non-public reports को Service provide, secure, moderate, support, investigate या legally protect करने के लिए जरूरत के अनुसार process किया जाता है। केवल इसलिए कि CK-Labs उन्हें operational purposes के लिए process करता है, उन्हें public या public promotional use में नहीं डाला जाता।",
      "Private communications तक moderation या legal-review access केवल वहाँ सीमित है जहाँ processing reasonably necessary और lawful हो, जैसे report का जवाब देना, users की सुरक्षा, abuse/fraud की जाँच, law compliance या legal claims establish/defend करना।",
    ],
  },
  {
    title: "International transfers",
    body: [
      "TycoonX और कुछ providers आपके residence country के बाहर information process कर सकते हैं। जहाँ GDPR या similar transfer restrictions लागू हैं, हम आवश्यकता होने पर appropriate legal transfer mechanism का उपयोग करते हैं, जैसे adequacy decision, Standard Contractual Clauses या अन्य recognized safeguard। International transfers केवल इस कथन पर आधारित नहीं हैं कि TycoonX उपयोग करना consent है।",
      "जहाँ applicable law आपको international transfer safeguards के बारे में information पाने का अधिकार देता है, वहाँ आप TycoonX Support से अधिक जानकारी या relevant safeguards की उपलब्ध copy माँग सकते हैं, lawful redactions और third-party confidentiality requirements के अधीन।",
    ],
  },
  {
    title: "Data retention",
    body: [
      "हम personal data केवल उतने समय रखते हैं जितना उसके purpose के लिए reasonably necessary हो और उसके बाद उतनी additional period जितनी law require या permit करे। Active account/game data account active रहने तक; support records reasonable follow-up और dispute periods तक; purchase, refund, entitlement, restore, accounting और tax records legally required, contract-performance, fraud-prevention या dispute-related periods तक; और security, anti-fraud, exploit, moderation तथा audit records Service की सुरक्षा, incident investigation या claims defense के लिए reasonable period तक रखे जा सकते हैं।",
      "Private communications केवल इसलिए indefinitely retain नहीं की जातीं कि वे कभी moderation के लिए review हुई थीं। Longer retention के लिए अलग lawful need होना चाहिए, जैसे active dispute, safety investigation, legal claim या legal obligation। Backups limited backup lifecycle तक रह सकते हैं, फिर delete या overwrite किए जाते हैं। Anonymized या genuinely aggregated data वहाँ retain किया जा सकता है जहाँ वह किसी person को identify नहीं करता।",
    ],
  },
  {
    title: "आपके privacy rights",
    body: [
      "Applicable law के अनुसार आपको access, correction, deletion, restriction, objection, कुछ data portable format में पाने, consent-based processing के लिए consent withdraw करने और competent data-protection authority में complaint करने के rights मिल सकते हैं।",
      "जहाँ उपलब्ध हो आप TycoonX के भीतर account deletion request कर सकते हैं या TycoonX Support से संपर्क कर सकते हैं। हमें आपकी identity verify करनी पड़ सकती है। कुछ records legal, tax, accounting, contract-performance, fraud-prevention, security, dispute-resolution, entitlement-restoration या legal-claims purposes के लिए required या permitted होने पर retain किए जा सकते हैं।",
    ],
  },
  {
    title: "Account deletion और paid entitlements",
    body: [
      "TycoonX account delete करना payment refund माँगने से अलग है। Account deletion account-linked gameplay progress, Diamonds, consumable value, inventory, social data और अन्य profile state को permanently remove कर सकती है। इससे अपने-आप cash redemption या refund का अधिकार नहीं बनता।",
      "TycoonX account delete करने से अलग Apple, Google, Xsolla या अन्य payment-provider transaction record अपने-आप erase या invalidate नहीं होता। जहाँ valid Lifetime VIP या अन्य non-consumable/restorable entitlement platform rules, provider records, contract या mandatory law के तहत purchaser से जुड़ा रहता है, CK-Labs उस entitlement को verify और restore करने के लिए minimum transaction तथा entitlement evidence retain कर सकता है।",
      "Later restore के लिए reasonable proof माँगा जा सकता है कि वही purchaser relevant platform या payment account को control करता है। Paid entitlement restore होने से deleted gameplay progress, consumed Diamonds, inventory, history या transferred assets recreate नहीं होते, जब तक applicable law कुछ और न कहे। Refund rights payment-provider process और mandatory law के अनुसार रहते हैं।",
    ],
  },
  {
    title: "बच्चे और age-related controls",
    body: [
      "TycoonX उस minimum age से कम बच्चों के लिए directed नहीं है जिस age पर user की jurisdiction independent use की अनुमति देती है। जहाँ parental consent legally required है, required authorization के बिना Service का उपयोग नहीं किया जाना चाहिए। यदि हमें पता चलता है कि child personal data ऐसी circumstances में collect हुआ जो applicable law पूरी नहीं करतीं, तो हम account restrict कर सकते हैं और information कानून के अनुसार delete कर सकते हैं।",
      "CK-Labs limited age, age-range, parental-authorization या platform age-control information को law compliance, age-appropriate social restrictions, App Store/Google Play requirements या minors की सुरक्षा के लिए reasonably necessary होने पर process कर सकता है। TycoonX कुछ age groups के लिए community features restrict या disable कर सकता है, भले underlying game उपलब्ध रहे।",
    ],
  },
  {
    title: "Security",
    body: [
      "हम TycoonX data की सुरक्षा के लिए designed technical और organizational measures उपयोग करते हैं, जैसे access controls, authentication controls, applicable encrypted network transport, monitoring, rate limiting, purchase validation, audit logging, backups और Service के अनुरूप अन्य safeguards।",
      "कोई online service absolute security guarantee नहीं कर सकती। यदि आपको लगता है कि account compromise हुआ है या security vulnerability मिली है, तो तुरंत TycoonX Support से संपर्क करें। इससे applicable law के तहत CK-Labs की required security obligations कम नहीं होतीं।",
    ],
  },
  {
    title: "Automated security और moderation",
    body: [
      "TycoonX suspicious activity, spam, fraud, abusive content, exploit patterns, invalid purchases या users/Service को नुकसान पहुँचाने वाले conduct की पहचान के लिए automated rules, signals या systems उपयोग कर सकता है। Automated signals review, temporary restrictions, moderation या investigation शुरू कर सकते हैं।",
      "जहाँ applicable law उन solely automated decisions को restrict करता है जो legal या similarly significant effects डालते हैं, CK-Labs required safeguards लागू करेगा, जिसमें law जहाँ माँगे वहाँ human involvement या review शामिल है। ऐसे decisions से जुड़े rights प्रभावित नहीं होते।",
    ],
  },
  {
    title: "Third-party links और services",
    body: [
      "TycoonX third-party services से link या interoperate कर सकता है। वे third parties अपनी privacy policies के तहत information process कर सकते हैं। CK-Labs independent third-party privacy practices के लिए जिम्मेदार नहीं है, सिवाय जहाँ applicable law CK-Labs को जिम्मेदार बनाता हो।",
    ],
  },
  {
    title: "इस Policy में बदलाव",
    body: [
      "TycoonX, data practices, providers, security measures, community features या legal requirements में बदलाव दिखाने के लिए हम यह Policy update कर सकते हैं। हम Last updated date बदलेंगे और जहाँ required हो additional notice देंगे। यदि किसी बदलाव के लिए consent आवश्यक है, तो हम continued use को अपने-आप consent नहीं मानेंगे बल्कि consent माँगेंगे।",
    ],
  },
];

export default function HindiTycoonXPrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white" lang="hi">
      <div className="border-b border-white/5 px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium tracking-wide">TycoonX · CK-Labs</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Privacy Policy</h1>
          <p className="text-zinc-500 text-sm">अंतिम अपडेट: 27 अगस्त 2026</p>
          <p className="text-zinc-400 text-sm leading-relaxed mt-6">यह Privacy Policy बताती है कि TycoonX का संचालन करने वाला CK-Labs, TycoonX mobile/web applications, websites, support services, community features और related online services के उपयोग के दौरान personal data कैसे process करता है।</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-2">
        {sections.map((section, i) => (
          <section key={section.title} className="rounded-xl p-6 hover:bg-white/[0.03] transition">
            <div className="flex gap-4">
              <span className="text-xs text-zinc-600 font-mono mt-1 w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h2 className="text-white font-semibold mb-3">{section.title}</h2>
                <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
                  {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="rounded-xl border border-white/10 bg-[#111111] p-6 mt-8">
          <h2 className="text-white font-semibold mb-3">Controller और संपर्क</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">इस Policy में वर्णित TycoonX processing के लिए CK-Labs controller है। Privacy requests, account deletion, security reports, purchase-related privacy questions, moderation-data questions या अन्य data-protection concerns के लिए TycoonX Support का उपयोग करें या हमें email करें।</p>
          <div className="flex flex-wrap gap-3">
            <a href="/tyconx-support" className="inline-flex bg-indigo-600 hover:bg-indigo-500 transition text-white text-sm font-medium px-4 py-2 rounded-lg">TycoonX Support</a>
            <a href="mailto:cevikdev@gmail.com" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">cevikdev@gmail.com</a>
            <a href="/tycoonx-legal/hi/terms" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">सेवा की शर्तें</a>
            <a href="/tycoonx-legal/hi/community" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Community Standards</a>
          </div>
          <p className="text-zinc-600 text-xs leading-relaxed mt-4">जहाँ कानून अतिरिक्त operator identity या address details की माँग करता है, वे Service के लागू legal notice या imprint में उपलब्ध कराए जाएंगे।</p>
        </section>
      </div>
    </main>
  );
}
