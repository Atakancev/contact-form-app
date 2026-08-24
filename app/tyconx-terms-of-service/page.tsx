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
      'You are responsible for keeping your account credentials, connected platform accounts, devices, and payment accounts secure and for using reasonable security measures available to you. You must promptly contact TyconX Support if you believe your account or payment account has been compromised.',
      'CK-Labs may temporarily restrict an account when reasonably necessary to investigate suspected compromise, fraud, abuse, security incidents, payment disputes, or violations of these Terms.',
    ],
  },
  {
    title: 'Diamonds and virtual items',
    body: [
      'Diamonds and other virtual items are licensed digital game content or entitlements for use only inside TyconX. Except where mandatory law requires otherwise, you do not acquire property ownership in the underlying game data and virtual items cannot be exchanged with CK-Labs for cash or other real-world value.',
      'Purchased Diamonds do not expire solely because time passes. CK-Labs may correct or remove Diamonds where the corresponding purchase is refunded, reversed, charged back, fraudulent, duplicated, technically erroneous, or otherwise invalid. Promotional or free Diamonds may have separately disclosed conditions where permitted by law and platform rules.',
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
      'Lifetime VIP is a one-time digital entitlement that may be offered only during limited promotional sales windows selected by CK-Labs. It is not a permanently available product. CK-Labs may start, end, shorten, extend, or discontinue a sales window and may choose never to offer Lifetime VIP again, subject to applicable law and any specific offer already made to a consumer.',
      'The fact that another user previously purchased Lifetime VIP, or that CK-Labs previously ran a Lifetime VIP sales window, does not create a right or expectation that the product will remain available or return later. Ending a sales window affects future availability only and does not by itself cancel or shorten a valid Lifetime VIP entitlement already purchased.',
      'Any countdown, closing date, or other time-limited sales statement displayed for a Lifetime VIP offer should reflect the genuine sales window communicated for that offer. CK-Labs may later decide to run a separate future promotion, but a later promotion does not create a right to purchase during a closed sales window.',
      'Lifetime VIP is intended to remain active for the commercial operating lifetime of the TyconX Service for the purchasing account, while TyconX continues to be operated and made available by CK-Labs and while the account remains eligible to use the Service.',
      'Lifetime does not mean the biological lifetime of the purchaser, the lifetime of CK-Labs, any owner, device, platform, or server, and it is not a promise that TyconX will operate forever or for a fixed minimum number of years beyond what mandatory law requires or what a consumer may reasonably expect from the specific offer.',
      'Lifetime VIP may end if TyconX is permanently discontinued, the relevant product or platform is lawfully discontinued and no equivalent access can reasonably be provided, the account is deleted at the user’s request or lawfully terminated for a serious or repeated Terms violation, the purchase is refunded or invalid, or continuation is prohibited by law or platform requirements. Mandatory consumer remedies remain unaffected.',
      'The commercial-lifetime meaning and the limited-time nature of the current sales offer must also be shown clearly at or immediately before the Lifetime VIP purchase screen.',
    ],
  },
  {
    title: 'VIP features may evolve',
    body: [
      'VIP may include changing gameplay benefits, convenience features, cosmetics, limits, automation features, access privileges, or other benefits. CK-Labs may improve, replace, rebalance, add, or remove individual VIP features for valid reasons such as game balance, security, technical limitations, legal compliance, platform requirements, abuse prevention, or evolution of the Service.',
      'For a digital product supplied continuously over time, a change beyond what is necessary to keep the product contract-compliant will be made only on a contractual basis that provides a valid reason, without additional cost to the consumer, and with clear information where mandatory law requires this. If a change more than insignificantly impairs access or use, mandatory law may require advance notice on a durable medium and may give the consumer a time-limited right to terminate without charge.',
      'Where mandatory law requires advance information, a valid contractual reason, continued access to an unchanged version, price reduction, termination rights, or another remedy, those requirements remain applicable.',
    ],
  },
  {
    title: 'Authorized purchase channels',
    body: [
      'TyconX paid digital products may be offered through Apple App Store In-App Purchase, Google Play, and the official TyconX web shop using Xsolla, plus any other channel expressly authorized by CK-Labs in the future.',
      'Prices, currencies, taxes, payment methods, billing entities, refund procedures, and regional availability may differ by channel. A price or promotion on one channel does not require CK-Labs to offer the same price on another channel unless applicable law or platform rules require otherwise.',
      'A purchase does not create a right to bypass the rules of Apple, Google, Xsolla, or another payment provider. External payment options may be displayed or linked inside an app only where the relevant platform rules, regional programs, and law permit it.',
    ],
  },
  {
    title: 'Apple App Store purchases',
    body: [
      'For purchases made through Apple In-App Purchase, Apple processes the payment and provides the App Store transaction record. Apple operates the consumer refund-request process for App Store purchases. CK-Labs may investigate delivery and entitlement issues but does not control whether Apple approves or rejects a refund request.',
      'Purchased Diamonds are intended to be consumable in-app purchases. Lifetime VIP is intended to be a non-consumable purchase and is restorable while the entitlement remains valid. A one-time 30-Day VIP is intended to be a non-renewing entitlement, with CK-Labs maintaining the authoritative account entitlement state where needed.',
      'If Apple refunds, revokes, reverses, or invalidates a transaction, CK-Labs may revoke or correct the corresponding TyconX entitlement or virtual value so the refunded purchase is not retained twice.',
    ],
  },
  {
    title: 'Google Play purchases',
    body: [
      'For purchases made through Google Play, Google processes the payment through the applicable Google Play billing arrangement and provides transaction or order information used to validate the purchase.',
      'Where Google Play policy requires Google Play Billing for in-app digital goods or services, TyconX will use that system unless an applicable regional alternative-billing or external-offers program, platform rule, or law permits another method. Google may process some refund requests directly, and CK-Labs may also be able to process eligible refunds through Google Play according to Google rules and applicable law.',
      'If Google refunds, reverses, charges back, cancels, or invalidates a transaction, CK-Labs may revoke or correct the corresponding entitlement or virtual value. Google Play purchase, refund, and alternative-billing rules may vary by country and may change.',
    ],
  },
  {
    title: 'TyconX web shop powered by Xsolla',
    body: [
      'Purchases made through the official TyconX web shop may be processed by Xsolla. Depending on the checkout arrangement, an Xsolla group company may act as merchant of record. When it does, the Xsolla entity shown at checkout or on the receipt may be responsible under its terms for payment processing, applicable transaction taxes or VAT, fraud screening, refunds, payment disputes, and chargebacks.',
      'The exact Xsolla entity, payment method, price, taxes, refund policy, and legally required purchase information for a web-shop transaction are determined by the checkout and receipt applicable to that transaction. Xsolla currently presents the refund-policy type applicable to a purchase in its checkout, and that transaction-specific policy applies together with mandatory law.',
      'CK-Labs remains responsible for delivering the corresponding TyconX digital entitlement after CK-Labs receives valid confirmation of a successful transaction. If Xsolla refunds, reverses, cancels, charges back, or invalidates a transaction, CK-Labs may revoke or correct the related TyconX entitlement or virtual value.',
      'A web-shop purchase does not create a right to advertise, link to, or complete the Xsolla purchase inside an Apple or Google app where the relevant platform rules do not permit it.',
    ],
  },
  {
    title: 'Prices, taxes, delivery, and verification',
    body: [
      'The total price and currency displayed by the applicable checkout provider before confirmation govern that transaction, subject to correction of obvious pricing errors where permitted by law. Taxes, VAT, payment-provider charges, and currency conversion may be handled by Apple, Google, Xsolla, CK-Labs, or another authorized provider depending on the channel.',
      'A paid entitlement is delivered only after the payment channel reports a valid successful transaction and required validation is completed. If you were charged but did not receive the entitlement, contact TyconX Support with the order or transaction identifier shown on your receipt.',
      'CK-Labs may reject or reverse duplicate grants created by retries, replayed webhooks, forged receipts, manipulated clients, compromised credentials, or similar technical or fraudulent activity.',
    ],
  },
  {
    title: 'Refunds, reversals, and chargebacks',
    body: [
      'Refund rights depend on the purchase channel, product type, country, applicable provider rules, and mandatory consumer law. A refund or payment reversal does not entitle a user to keep both the returned money and the corresponding paid digital value.',
      'If a payment is refunded, reversed, cancelled, charged back, or found invalid after value has been credited, CK-Labs may, subject to applicable law, revoke the related VIP entitlement, remove unused Diamonds or virtual value, reverse directly related invalid game transactions, apply an equivalent balance correction where refunded value was already consumed or transferred, or temporarily restrict purchase/economy functions while a payment dispute is investigated.',
      'Nothing in these Terms limits refund, price-reduction, termination, withdrawal, warranty, or other rights that cannot legally be waived.',
    ],
  },
  {
    title: 'EU and German withdrawal rights',
    body: [
      'For immediately supplied digital content such as a Diamond bundle, a statutory withdrawal right may expire after supply begins only if every legal requirement is satisfied, including any required transaction-specific express consent to early performance, acknowledgement of the loss of the withdrawal right, and contractual confirmation. Merely accepting these Terms is not intended to replace a separate consent where the law requires one.',
      'A 30-Day VIP is supplied over a period of time. Immediate activation does not automatically remove every statutory withdrawal right merely because access has begun. Where the law permits early performance, the checkout may request the consumer’s express request for it, and any amount due after a valid withdrawal is determined only as permitted by law.',
      'Lifetime VIP is also an entitlement supplied over time rather than a single Diamond-style consumable delivery. Its one-time price and non-renewing nature do not by themselves eliminate statutory withdrawal or digital-service remedies. Any early-performance request, expiry of a withdrawal right, proportional payment after withdrawal, or other consequence applies only where the legal requirements for that specific transaction are satisfied.',
      'CK-Labs will not use one blanket no-refunds or waive-all-withdrawal-rights clause for Diamonds, 30-Day VIP, and Lifetime VIP because their legal treatment can differ.',
    ],
  },
  {
    title: 'Game integrity, exploits, and cheating',
    body: [
      'You must not hack, tamper with, exploit, interfere with, or abuse TyconX; use manipulated clients, invalid receipts, unauthorized APIs, scripts, bots, macros, or automation for unfair advantage; bypass security or rate limits; evade sanctions; or knowingly receive or retain assets created by exploits, fraud, unauthorized transfers, or manipulated game state.',
      'If an exploit, hack, bug, payment error, unauthorized tool, compromised system, or data corruption creates invalid game state, CK-Labs may use authoritative server records, transaction records, backups, audit logs, and other reliable evidence to restore integrity. We may invalidate, reverse, remove, recalculate, or roll back affected transactions, balances, assets, items, rewards, entitlements, scores, company state, market activity, or other records.',
      'Corrections may affect accounts that received invalid assets even if the current holder did not personally create the exploit, provided CK-Labs acts reasonably and does not remove legitimately purchased value without the correction, replacement, refund, or other remedy required by law.',
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
    title: 'Availability, outages, security incidents, and recovery',
    body: [
      'The Service may occasionally be unavailable because of maintenance, updates, security events, hosting failures, network failures, third-party outages, attacks, emergency fixes, capacity issues, or events outside our reasonable control. CK-Labs does not guarantee uninterrupted, error-free, latency-free, or permanently available operation.',
      'CK-Labs may use backups, snapshots, transaction logs, or other recovery methods following a serious incident. Emergency measures may include disabling features, forcing reauthentication, invalidating sessions, freezing affected transactions, rolling back demonstrably corrupted game state, or temporarily taking servers offline. Mandatory rights relating to paid digital products remain unaffected.',
    ],
  },
  {
    title: 'Permanent discontinuation',
    body: [
      'CK-Labs may permanently discontinue all or part of TyconX for a valid reason, including severe technical or security problems, legal or regulatory requirements, platform removal, payment-provider restrictions, unsustainable operating conditions, force majeure, or a business decision to cease operating the Service.',
      'Where legally required and reasonably practicable, CK-Labs will provide advance notice. When TyconX permanently ends, online accounts, Diamonds, virtual items, companies, leaderboards, and VIP benefits may also end. Lifetime VIP ends with the commercial operating lifetime of the Service. Virtual items do not automatically become redeemable for cash merely because the Service closes.',
      'This does not waive any mandatory refund, price-reduction, termination, warranty, or other consumer remedy that may apply because of the circumstances or timing of discontinuation.',
    ],
  },
  {
    title: 'Suspension and termination',
    body: [
      'CK-Labs may warn, restrict, suspend, reset, or terminate accounts for serious or repeated violations of these Terms, fraud, cheating, security threats, unlawful activity, abusive conduct, payment abuse, or conduct that materially harms other users or the Service.',
      'Where immediate action is reasonably necessary to protect users, game integrity, payments, or infrastructure, CK-Labs may suspend first and investigate afterward. Where appropriate, users may contact Support to dispute an enforcement decision. Termination for cause remains subject to mandatory law and applicable platform rules.',
    ],
  },
  {
    title: 'Liability and statutory rights',
    body: [
      'Nothing in these Terms excludes or limits liability where exclusion or limitation is prohibited by law, including liability for intent or gross negligence, injury to life, body, or health caused by negligence or intent, fraudulently concealed defects, expressly given guarantees, mandatory product-liability rules, or other non-excludable liability.',
      'For damage caused by ordinary negligence, CK-Labs is liable, where permitted by law, only for breach of an essential contractual obligation whose performance is necessary for the proper performance of the contract and on whose performance you may regularly rely. In such cases, liability is limited to the type of damage reasonably foreseeable when the contract was concluded.',
      'For consumers in Germany, mandatory digital-product rules in Sections 327 et seq. BGB may provide rights relating to supply, conformity, updates, remedies, price reduction, termination, reimbursement, and certain modifications. These Terms operate together with those rights and do not replace them.',
    ],
  },
  {
    title: 'Governing law',
    body: [
      'These Terms are governed by the laws of the Federal Republic of Germany to the extent this choice is permitted. If you are a consumer and mandatory consumer law in your country of habitual residence provides greater protection, that mandatory protection remains applicable.',
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
            These Terms govern TyconX, including Diamonds, one-time 30-Day VIP, limited-time Lifetime VIP offers, Apple App Store purchases, Google Play purchases, and the official TyconX web shop powered by Xsolla. Mandatory consumer rights remain unaffected.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-2">
        <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/[0.06] p-5 mb-8">
          <p className="text-zinc-300 text-sm leading-relaxed">
            Important: Lifetime VIP is a limited-time promotional product, not a permanently available offer. If purchased, Lifetime VIP means the commercial operating lifetime of the TyconX Service for the purchasing account. It is not a promise that TyconX will operate forever. Both points must be shown at checkout before purchase.
          </p>
        </div>

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
          <h2 className="text-white font-semibold mb-3">Legal & support</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">TyconX is operated by CK-Labs. For purchase delivery issues, account disputes, security reports, or legal questions, use TyconX Support or email us.</p>
          <div className="flex flex-wrap gap-3">
            <a href="/tyconx-purchase-refund-policy" className="inline-flex bg-indigo-600 hover:bg-indigo-500 transition text-white text-sm font-medium px-4 py-2 rounded-lg">Purchases & Refunds</a>
            <a href="/tyconx-privacy-policy" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Privacy Policy</a>
            <a href="/tyconx-support" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">TyconX Support</a>
            <a href="mailto:cevikdev@gmail.com" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">cevikdev@gmail.com</a>
          </div>
          <p className="text-zinc-600 text-xs leading-relaxed mt-4">Additional legally required operator information should be provided in the applicable legal notice or imprint.</p>
        </section>
      </div>
    </main>
  );
}
