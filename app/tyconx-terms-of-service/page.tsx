const sections = [
  {
    title: 'Game simulation and virtual assets',
    body: [
      'TyconX is an entertainment and economic simulation game operated by CK-Labs. In-game money, Diamonds, shares, companies, property, items, products, rewards, statistics, and other game assets are fictional digital game elements unless CK-Labs expressly states otherwise.',
      'They are not bank deposits, securities, investments, legal tender, cryptocurrency, stored-value money, or claims against CK-Labs. They do not create ownership of any real-world asset and are not guaranteed to have or retain real-world monetary value.',
    ],
  },
  {
    title: 'Accounts and security',
    body: [
      'You are responsible for keeping your account credentials and connected platform accounts secure and for using reasonable security measures available to you. You must promptly contact TyconX Support if you believe your account or payment account has been compromised.',
      'CK-Labs may temporarily restrict an account when reasonably necessary to investigate suspected compromise, fraud, abuse, security incidents, payment disputes, or violations of these Terms.',
    ],
  },
  {
    title: 'Diamonds and virtual items',
    body: [
      'Diamonds and other virtual items are licensed digital game content or entitlements for use only inside TyconX. Except where mandatory law requires otherwise, you do not acquire property ownership in the underlying game data. Virtual items cannot be exchanged with CK-Labs for cash or other real-world value.',
      'Purchased Diamonds do not expire solely because time passes. CK-Labs may correct or remove Diamonds where the corresponding purchase is refunded, reversed, charged back, fraudulent, duplicated, technically erroneous, or otherwise invalid. Promotional, gifted, event, beta, compensation, test, or free Diamonds may have separately disclosed conditions.',
      'The gameplay utility of Diamonds and other game assets may change for valid balancing, economy, anti-inflation, security, bug-fix, technical, or legal reasons, subject to applicable law. No fixed exchange rate, purchasing power, resale value, or future feature set is guaranteed.',
    ],
  },
  {
    title: '30-Day VIP',
    body: [
      'A product described as 30-Day VIP, 30 Days VIP, or similar is a one-time, non-renewing digital entitlement unless the purchase screen expressly states otherwise. It provides the VIP features described at purchase for 30 consecutive days beginning when the entitlement is activated or otherwise made available to your account.',
      'It does not automatically renew and does not create a recurring payment obligation unless a separate offer clearly states that it is recurring and you expressly accept it.',
    ],
  },
  {
    title: 'Lifetime VIP',
    body: [
      'Lifetime VIP is a one-time digital entitlement intended to remain active for the commercial lifetime of the TyconX Service, while the Service continues to be operated and made available by CK-Labs and while the purchasing account remains eligible to use it.',
      'Lifetime does not mean the biological lifetime of the purchaser, the lifetime of any owner, employee, company, device, or platform, and it is not a promise that TyconX will operate forever or for a fixed minimum number of years beyond what mandatory law requires or what a consumer may reasonably expect from the specific offer.',
      'Lifetime VIP may end if TyconX is permanently discontinued, the relevant platform or product is lawfully discontinued and no equivalent access can reasonably be provided, the account is lawfully terminated for a serious or repeated Terms violation, the purchase is refunded, reversed, charged back, cancelled, fraudulent, or invalid, or continuation is prohibited by law or platform requirements. Mandatory consumer remedies remain unaffected.',
    ],
  },
  {
    title: 'VIP features may evolve',
    body: [
      'VIP may include changing gameplay benefits, convenience features, cosmetics, limits, automation features, access privileges, or other benefits. CK-Labs may improve, replace, rebalance, add, or remove individual VIP features for valid reasons such as game balance, security, technical limitations, legal compliance, platform requirements, abuse prevention, or evolution of the Service.',
      'Where mandatory law requires advance information, a valid contractual reason, continued access to an unchanged version, price reduction, termination rights, or another remedy, those requirements remain applicable.',
    ],
  },
  {
    title: 'Purchases, refunds, and chargebacks',
    body: [
      'Purchases may be processed by Apple, Google, Xsolla, or another authorized payment provider. The payment provider may be the merchant of record and may apply its own payment, tax, cancellation, and refund rules in addition to these Terms.',
      'If a payment is refunded, reversed, cancelled, charged back, or found invalid after content has been credited, CK-Labs may revoke the corresponding entitlement, remove the corresponding Diamonds or virtual items, or correct the account balance. If value was already consumed or transferred, CK-Labs may apply an equivalent balance correction, including a temporary negative balance or restriction, to prevent duplicate value being retained.',
      'Nothing in these Terms limits refund, price-reduction, termination, withdrawal, warranty, or other rights that cannot legally be waived.',
    ],
  },
  {
    title: 'Apple App Store purchases',
    body: [
      'For purchases made through Apple In-App Purchase, Apple processes the payment and operates its refund process. A user may request an eligible refund through Apple. CK-Labs may assist with entitlement or delivery issues but does not control Apple’s refund decision.',
      'Purchased Diamonds are treated as consumable in-app purchases. Lifetime VIP is intended to be treated as a non-consumable in-app purchase and must be restorable while the entitlement remains valid. A one-time 30-Day VIP is intended to be treated as a non-renewing subscription, and CK-Labs is responsible for keeping and restoring the valid entitlement state across the user’s devices where required.',
      'If Apple refunds or reverses a purchase, CK-Labs may revoke or correct the related TyconX entitlement or virtual value so that the refunded value is not retained twice.',
    ],
  },
  {
    title: 'Withdrawal rights',
    body: [
      'Consumers may have a statutory right of withdrawal depending on the product, purchase channel, country, and manner in which digital content or a digital service is supplied.',
      'Where applicable law permits a withdrawal right to expire after immediate supply of digital content begins, that loss applies only if all legally required conditions are satisfied, including any required express consent and acknowledgement. For time-limited digital services, immediate use does not remove any statutory right unless the law permits it and the legally required conditions are met.',
    ],
  },
  {
    title: 'Game integrity, exploits, and cheating',
    body: [
      'You must not hack, tamper with, exploit, interfere with, or abuse TyconX; use manipulated clients, invalid receipts, unauthorized APIs, scripts, bots, macros, or automation for unfair advantage; bypass security or rate limits; evade sanctions; or knowingly receive or retain assets created by exploits, fraud, unauthorized transfers, or manipulated game state.',
      'If an exploit, hack, bug, payment error, unauthorized tool, compromised system, or data corruption creates invalid game state, CK-Labs may use authoritative server records, transaction records, backups, audit logs, and other reliable evidence to restore integrity. We may invalidate, reverse, remove, recalculate, or roll back affected transactions, balances, assets, items, rewards, entitlements, scores, company state, market activity, or other records.',
      'Corrections may affect accounts that received invalid assets even if the current holder did not personally create the exploit, provided CK-Labs acts reasonably and does not remove legitimately purchased value without the correction, replacement, refund, or other remedy required by applicable law.',
    ],
  },
  {
    title: 'Account compromise',
    body: [
      'If your account is compromised, contact Support as soon as possible. CK-Labs may investigate available server logs and may restore or correct game state where reasonably verifiable and technically feasible, but cannot promise that every action, trade, transfer, deletion, or other consequence can be reversed.',
      'To the extent permitted by law, CK-Labs is not responsible for losses caused solely by your disclosure of credentials, insecure device, unauthorized account sharing, or failure to use reasonable security measures. This does not exclude liability for a security failure caused by CK-Labs or any liability that cannot legally be excluded.',
    ],
  },
  {
    title: 'Economy balancing and corrections',
    body: [
      'To keep the multiplayer economy functional, fair, and technically stable, CK-Labs may make balancing changes to production speeds, prices, rewards, taxes, limits, demand, supply, formulas, energy costs, probabilities, NPC behavior, market rules, company rules, progression, and similar mechanics.',
      'CK-Labs may correct obvious errors, duplicated rewards, impossible balances, corrupted records, exploit-generated value, or calculations that did not operate as intended. For paid digital products supplied over time, materially impairing changes remain subject to applicable mandatory digital-product law.',
    ],
  },
  {
    title: 'Availability, outages, and recovery',
    body: [
      'The Service may occasionally be unavailable because of maintenance, updates, security events, hosting failures, network failures, third-party outages, attacks, emergency fixes, capacity issues, or events outside our reasonable control. CK-Labs does not guarantee uninterrupted, error-free, latency-free, or permanently available operation.',
      'CK-Labs may use backups, snapshots, transaction logs, or other recovery methods following a serious incident. Recovery may result in loss or reversal of recent game actions after the latest reliable recovery point. Mandatory rights relating to paid digital products remain unaffected.',
    ],
  },
  {
    title: 'Permanent discontinuation',
    body: [
      'CK-Labs may permanently discontinue all or part of TyconX for a valid reason, including severe technical or security problems, legal or regulatory requirements, platform removal, payment-provider restrictions, unsustainable operating conditions, force majeure, or a business decision to cease operating the Service.',
      'Where legally required and reasonably practicable, CK-Labs will provide advance notice through the Service, email, account notice, or another durable medium. When the Service permanently ends, access to online game data, virtual items, Diamonds, accounts, companies, leaderboards, and VIP benefits may also end. Virtual items do not become redeemable for cash merely because the Service closes.',
      'This section does not waive any mandatory refund, price-reduction, termination, warranty, or other consumer remedy that may apply to a paid digital product because of the circumstances or timing of discontinuation.',
    ],
  },
  {
    title: 'Suspension and termination',
    body: [
      'CK-Labs may warn, restrict, suspend, reset, or terminate accounts for serious or repeated violations of these Terms, fraud, cheating, security threats, unlawful activity, abusive conduct, payment abuse, or conduct that materially harms other users or the Service.',
      'Where immediate action is reasonably necessary to protect users, game integrity, payments, or infrastructure, CK-Labs may suspend first and investigate afterward. Where appropriate, users may contact Support to dispute an enforcement decision.',
      'Termination for cause may result in loss of access to game progress and entitlements, subject to mandatory law and applicable platform rules.',
    ],
  },
  {
    title: 'User content and community features',
    body: [
      'You remain responsible for content you submit through chat, profiles, support, companies, forums, or other social features. You must not submit unlawful, infringing, threatening, harassing, hateful, fraudulent, privacy-invasive, sexually exploitative, malicious, or otherwise prohibited content.',
      'You grant CK-Labs a non-exclusive, worldwide, royalty-free license to host, reproduce, process, display, transmit, moderate, and technically adapt user content only as reasonably necessary to operate, secure, moderate, and improve the Service, subject to applicable privacy and intellectual-property law.',
    ],
  },
  {
    title: 'Intellectual property',
    body: [
      'TyconX, including its software, game systems, visual design, branding, databases, text, artwork, audio, and other protected elements, is owned by or licensed to CK-Labs and is protected by applicable intellectual-property laws.',
      'These Terms grant you only a personal, limited, revocable, non-exclusive, non-transferable right to use the Service for lawful personal entertainment, subject to these Terms.',
    ],
  },
  {
    title: 'Third-party platforms and services',
    body: [
      'The Service may depend on third parties such as Apple, Google, Supabase, cloud infrastructure, payment processors, authentication providers, analytics providers, notification services, and hosting providers. Their services and terms may affect availability or functionality.',
      'CK-Labs is not responsible for independent acts or failures of third parties beyond the extent for which CK-Labs is legally responsible under mandatory law.',
    ],
  },
  {
    title: 'Apple-specific license terms',
    body: [
      'For the iOS version, any license between you and CK-Labs is between you and CK-Labs only, not Apple. CK-Labs, not Apple, is responsible for TyconX and its content, maintenance and support, warranties to the extent applicable, product claims, legal or regulatory compliance claims, and intellectual-property claims relating to TyconX.',
      'The license is non-transferable and limited to use on Apple-branded products that you own or control, as permitted by the applicable Apple Media Services usage rules, including permitted Family Sharing or similar Apple account features where applicable.',
      'You must comply with applicable third-party terms when using TyconX. You represent that you are not located in a country or region subject to a United States Government embargo or designated as supporting terrorism and that you are not on a United States Government prohibited or restricted party list.',
      'Apple and Apple’s subsidiaries are third-party beneficiaries of these Apple-specific license terms and may enforce them against you as a third-party beneficiary after your acceptance of these Terms. Apple has no obligation to provide maintenance or support for TyconX.',
    ],
  },
  {
    title: 'Changes to these Terms',
    body: [
      'CK-Labs may update these Terms when reasonably necessary because of new features, legal requirements, security issues, platform requirements, business-model changes, abuse patterns, or changes to the Service. Material changes will be notified where required by law.',
      'Changes will not retroactively remove rights that have already accrued under mandatory law. If applicable law requires your consent to a change, the change will not bind you without that consent.',
    ],
  },
  {
    title: 'Statutory digital-product rights',
    body: [
      'If you are a consumer, mandatory laws governing digital content and digital services may give you rights relating to supply, conformity, updates, remedies, price reduction, termination, reimbursement, and certain modifications.',
      'For consumers in Germany, this includes, where applicable, Sections 327 et seq. of the German Civil Code (BGB). These Terms operate together with those mandatory rights and do not replace them.',
    ],
  },
  {
    title: 'Liability',
    body: [
      'Nothing in these Terms excludes or limits liability where exclusion or limitation is prohibited by law, including liability for intent or gross negligence, injury to life, body, or health caused by negligence or intent, fraudulently concealed defects, expressly given guarantees, mandatory product-liability rules, or other non-excludable liability.',
      'For damage caused by ordinary negligence, CK-Labs is liable, where permitted by law, only for breach of an essential contractual obligation whose performance is necessary for the proper performance of the contract and on whose performance you may regularly rely. In such cases, liability is limited to the type of damage reasonably foreseeable when the contract was concluded.',
    ],
  },
  {
    title: 'Governing law and severability',
    body: [
      'These Terms are governed by the laws of the Federal Republic of Germany to the extent this choice is permitted. If you are a consumer and mandatory consumer law in your country of habitual residence provides greater protection, that mandatory protection remains applicable.',
      'If any provision is invalid or unenforceable, the remaining provisions remain effective to the extent permitted by law. An invalid consumer clause is not preserved through an interpretation that would unlawfully reduce statutory rights.',
    ],
  },
];

export default function TyconXTermsOfService() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="border-b border-white/5 px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium tracking-wide">TyconX · CK-Labs</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Terms of Service</h1>
          <p className="text-zinc-500 text-sm">Last updated August 24, 2026</p>
          <p className="text-zinc-400 text-sm leading-relaxed mt-6">
            These Terms govern your use of TyconX and related services operated by CK-Labs. Nothing in these Terms excludes, limits, or overrides rights that cannot legally be excluded or limited, including mandatory consumer rights in Germany, the European Union, or your country of residence.
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
          <h2 className="text-white font-semibold mb-3">Contact</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">TyconX is operated by CK-Labs. For support, purchase issues, account disputes, security reports, or legal questions, use the TyconX Support Center or email us.</p>
          <div className="flex flex-wrap gap-3">
            <a href="/tyconx-support" className="inline-flex bg-indigo-600 hover:bg-indigo-500 transition text-white text-sm font-medium px-4 py-2 rounded-lg">TyconX Support</a>
            <a href="mailto:cevikdev@gmail.com" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">cevikdev@gmail.com</a>
            <a href="/tyconx-purchase-refund-policy" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Purchases & Refunds</a>
            <a href="/tyconx-privacy-policy" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Privacy Policy</a>
          </div>
        </section>
      </div>
    </main>
  );
}
