const sections = [
  {
    title: 'Information We Process',
    body: [
      'Account and profile data such as supported sign-in identifiers, email address, display name, avatar, language, time zone, settings, and account lifecycle events.',
      'Gameplay and economy data needed to operate the persistent TycoonX world, including progression, inventory, virtual currency and Diamond balances, companies, production, market activity, housing, jobs, contracts, loans, stocks, transactions, and VIP entitlement state.',
      'Purchase and entitlement data such as payment platform, product identifier, transaction identifiers, signed transaction or receipt information, purchase/activation/expiry status, refund/revocation/chargeback status, and delivery or correction history. We generally do not receive your full payment-card number from platform stores or payment processors.',
      'Security and fraud data such as login/session records, IP address, device/platform information made available to the Service, app version, diagnostics, suspicious access patterns, invalid purchase validations, exploit indicators, anti-abuse signals, and moderation/security logs.',
      'Communications and community content such as chats, reports, profile/company content, support tickets, contact-form submissions, bug reports, appeals, attachments, timestamps, and moderation status.',
      'Usage and analytics information such as feature usage, sessions, retention, performance, interaction events, and aggregated economy/balancing metrics.',
    ],
  },
  {
    title: 'Sources of Data',
    body: [
      'We receive data directly from you when you create or use an account, play TycoonX, contact Support, submit community content, or change settings. We also receive limited information from services you choose or use with TycoonX, including supported authentication providers and Apple, Google, Xsolla, or another authorized payment provider when they send purchase, entitlement, refund, revocation, fraud, or transaction-status information.',
      'Payment providers may process payment-card, bank, billing-address, tax-location, or other payment details independently under their own privacy notices. CK-Labs generally receives the transaction and entitlement information needed to deliver and reconcile TycoonX purchases rather than the full payment instrument details.',
    ],
  },
  {
    title: 'Why We Process Information',
    body: [
      'We process information to create and secure accounts, operate and synchronize TycoonX, deliver and restore valid purchases, prevent duplicate delivery and fraud, detect cheating or exploits, investigate incidents, correct invalid game state, provide support, moderate community features, enforce the Terms, diagnose technical problems, improve the Service, send operational/legal notices, and comply with legal obligations.',
    ],
  },
  {
    title: 'Legal Bases',
    body: [
      'Where the GDPR or similar law applies, we rely on the legal basis appropriate to the specific processing: performance of a contract for gameplay, account access, purchase delivery and support; legitimate interests for security, anti-fraud, game integrity, diagnostics and legal defense where those interests are not overridden; legal obligations for required recordkeeping and authority requests; and consent where the law requires it for optional processing.',
      'Merely using TycoonX is not treated as consent to processing that legally requires consent. Where consent is required, we ask for it separately and it can be withdrawn for future processing.',
    ],
  },
  {
    title: 'Data Needed to Provide TycoonX',
    body: [
      'Some information is necessary to perform the TycoonX contract or process a purchase. For example, an account identifier is needed to maintain persistent game state, and valid transaction or entitlement information is needed to deliver, restore, refund, or revoke paid content correctly. If required information is not provided or cannot be verified, we may be unable to create or authenticate an account, deliver a purchase, restore an entitlement, or provide the affected feature.',
      'Optional information or processing that is not necessary for the core Service is handled separately where required, including consent controls where applicable.',
    ],
  },
  {
    title: 'How We Share Information',
    body: [
      'We do not sell personal data. We may share only what is reasonably necessary with service providers supporting hosting, databases, authentication, storage, analytics, diagnostics, moderation, communications, notifications or security; platform/payment partners such as Apple, Google, Xsolla or other authorized providers for purchase validation, refunds, revocations, fraud and disputes; other players where you intentionally use public/social game features; authorities where legally required; and parties involved in a lawful business transfer.',
      'Apple, Google, Xsolla, banks, card networks, or other payment participants may act as independent controllers for parts of their own payment, fraud, tax, account, or platform processing. Their own privacy notices and legal obligations apply to that independent processing. TycoonX currently uses infrastructure such as Supabase for parts of its backend, and service providers are subject to applicable contractual and legal safeguards.',
    ],
  },
  {
    title: 'International Transfers',
    body: [
      'TycoonX and some providers may process information outside your country of residence. Where the GDPR or similar transfer restrictions apply, we use an appropriate legal transfer mechanism where required, such as an adequacy decision, Standard Contractual Clauses, or another recognized safeguard. International transfers are not based merely on a statement that use of TycoonX equals consent.',
      'Where applicable law gives you a right to information about the safeguards used for an international transfer, you may contact TycoonX Support to request further information or an available copy of the relevant safeguards, subject to lawful redactions and third-party confidentiality requirements.',
    ],
  },
  {
    title: 'Data Retention',
    body: [
      'We keep personal data only for as long as reasonably necessary for its purpose and for additional periods required or permitted by law. Active account/game data may be retained while the account is active; support records for reasonable follow-up and dispute periods; purchase, refund, accounting and tax records for legally required or dispute-related periods; and security, anti-fraud, exploit, moderation and audit records for a reasonable period needed to protect the Service, investigate incidents or defend claims.',
      'Backups may remain for a limited backup lifecycle before deletion or overwrite. Anonymized or genuinely aggregated data may be retained where it no longer identifies a person.',
    ],
  },
  {
    title: 'Your Privacy Rights',
    body: [
      'Depending on applicable law, you may have rights to access, correct, delete, restrict, object, receive certain data in a portable format, withdraw consent where processing is consent-based, and lodge a complaint with a competent data-protection authority.',
      'You can request account deletion through TycoonX where available or contact TycoonX Support. We may need to verify your identity. Certain records may still be retained where required or permitted for legal, tax, accounting, fraud-prevention, security, dispute-resolution, or legal-claims purposes.',
    ],
  },
  {
    title: 'Account Deletion and Paid Entitlements',
    body: [
      'Deleting your TycoonX account is separate from requesting a payment refund. Account deletion may permanently remove access to account-linked progress, Diamonds, virtual items, and VIP entitlements. It does not automatically create a right to cash redemption or a refund. Refund rights remain governed by the payment provider and applicable mandatory law.',
    ],
  },
  {
    title: 'Children',
    body: [
      'TycoonX is not directed to children below the minimum age permitted for independent use in the user’s jurisdiction. Where parental consent is legally required, the Service should not be used without the required authorization. If we learn that personal data was collected from a child in circumstances that do not satisfy applicable law, we may restrict the account and delete information as required.',
    ],
  },
  {
    title: 'Security',
    body: [
      'We use technical and organizational measures designed to protect TycoonX data, such as access controls, authentication controls, encrypted network transport where applicable, monitoring, rate limiting, purchase validation, audit logging, backups, and other safeguards appropriate to the Service.',
      'No online service can guarantee absolute security. If you believe your account has been compromised or discover a security vulnerability, contact TycoonX Support promptly. This does not reduce CK-Labs obligations for security measures required by applicable law.',
    ],
  },
  {
    title: 'Automated Security and Moderation',
    body: [
      'TycoonX may use automated rules, signals, or systems to identify suspicious activity, spam, fraud, abusive content, exploit patterns, invalid purchases, or other conduct that may threaten users or the Service. Automated signals may lead to review, temporary restrictions, moderation, or investigation.',
      'Where applicable law restricts solely automated decisions that produce legal or similarly significant effects, CK-Labs will apply the required safeguards, including human involvement or review where the law requires it. Rights concerning such decisions remain unaffected.',
    ],
  },
  {
    title: 'Third-Party Links and Services',
    body: [
      'TycoonX may link to or interoperate with third-party services. Those third parties may process information under their own privacy policies. CK-Labs is not responsible for independent third-party privacy practices except to the extent applicable law makes CK-Labs responsible.',
    ],
  },
  {
    title: 'Changes to This Policy',
    body: [
      'We may update this Policy to reflect changes to TycoonX, data practices, providers, security measures, or legal requirements. We will update the Last updated date and provide additional notice where required. If a change requires consent, we will request that consent rather than treating continued use alone as consent.',
    ],
  },
];

export default function TycoonXPrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="border-b border-white/5 px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium tracking-wide">TycoonX · CK-Labs</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Privacy Policy</h1>
          <p className="text-zinc-500 text-sm">Last updated August 24, 2026</p>
          <p className="text-zinc-400 text-sm leading-relaxed mt-6">
            This Privacy Policy explains how CK-Labs, operator of TycoonX, processes personal data when you use the TycoonX mobile or web applications, websites, support services, and related online services.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-2">
        {sections.map((section, i) => (
          <section key={section.title} className="rounded-xl p-6 hover:bg-white/[0.03] transition">
            <div className="flex gap-4">
              <span className="text-xs text-zinc-600 font-mono mt-1 w-6 shrink-0">{String(i + 1).padStart(2, '0')}</span>
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
          <h2 className="text-white font-semibold mb-3">Controller & contact</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">CK-Labs is the controller for the TycoonX processing described in this Policy. For privacy requests, account deletion, security reports, purchase-related privacy questions, or other data-protection concerns, use TycoonX Support or email us.</p>
          <div className="flex flex-wrap gap-3">
            <a href="/tyconx-support" className="inline-flex bg-indigo-600 hover:bg-indigo-500 transition text-white text-sm font-medium px-4 py-2 rounded-lg">TycoonX Support</a>
            <a href="mailto:cevikdev@gmail.com" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">cevikdev@gmail.com</a>
            <a href="/tyconx-terms-of-service" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Terms of Service</a>
          </div>
          <p className="text-zinc-600 text-xs leading-relaxed mt-4">Additional legally required operator identity and address details must be made available in the applicable legal notice or imprint for the Service.</p>
        </section>
      </div>
    </main>
  );
}
