const sections = [
  {
    title: 'TycoonX and these Terms',
    body: [
      'TycoonX is an entertainment and economic simulation game operated by CK-Labs. These Terms govern use of the TycoonX mobile and web applications, websites, support services, payment entitlements, community features, and related online services.',
      'Nothing in these Terms excludes, limits, or overrides rights that cannot legally be excluded or limited, including mandatory consumer rights in the European Union, Germany, or the user’s country of residence.',
    ],
  },
  {
    title: 'Game simulation and virtual assets',
    body: [
      'In-game money, Diamonds, shares, companies, property, items, products, rewards, statistics, and other game assets are fictional digital game elements unless CK-Labs expressly states otherwise.',
      'They are not bank deposits, securities, investments, legal tender, cryptocurrency, stored-value money, or claims against CK-Labs. They do not create ownership of real-world assets and are not guaranteed to have or retain real-world monetary value.',
      'Except where mandatory law requires otherwise, virtual assets cannot be redeemed from CK-Labs for cash and have no guaranteed resale value, exchange rate, purchasing power, or future utility.',
    ],
  },
  {
    title: 'Accounts, eligibility, and security',
    body: [
      'You are responsible for keeping your account credentials, connected platform accounts, devices, and payment accounts secure and for using reasonable security measures available to you. You must promptly contact TycoonX Support if you believe your account or payment account has been compromised.',
      'You must not sell, rent, transfer, commercially trade, or share an account or paid entitlement except where TycoonX expressly provides a supported transfer mechanism or CK-Labs expressly permits it.',
      'CK-Labs may temporarily restrict an account or specific functions where reasonably necessary to investigate suspected compromise, fraud, payment disputes, exploit activity, abusive conduct, or other security concerns. Emergency restrictions may be applied before investigation is complete when reasonably necessary to protect users, payments, game integrity, or infrastructure.',
      'Where age, parental authorization, or other eligibility requirements apply under local law or platform rules, you may use or purchase through TycoonX only when those requirements are satisfied.',
    ],
  },
  {
    title: 'Diamonds and other virtual items',
    body: [
      'Diamonds and other virtual items are licensed digital game content or entitlements for use only inside TycoonX. Except where mandatory law requires otherwise, purchasing them does not transfer ownership of the underlying game data.',
      'Purchased Diamonds do not expire solely because time passes. CK-Labs may correct or remove Diamonds where the corresponding purchase is refunded, reversed, charged back, fraudulent, duplicated, technically erroneous, or otherwise invalid.',
      'Promotional, gifted, event, beta, test, compensation, or free Diamonds and benefits may have separately disclosed conditions, limits, eligibility requirements, or expiry where permitted by law and platform rules. Free or promotional grants do not automatically create a right to equivalent future grants.',
      'The gameplay utility of Diamonds and other virtual items may change for valid reasons such as balancing, economy stability, anti-inflation measures, security, abuse prevention, technical changes, new features, bug fixes, or legal requirements, subject to mandatory digital-product law.',
    ],
  },
  {
    title: 'One-time 30-Day VIP',
    body: [
      'A product described as 30-Day VIP, 30 Days VIP, or similar is a one-time, non-renewing digital entitlement unless the purchase screen clearly states otherwise.',
      'It provides the VIP features described at purchase for 30 consecutive days beginning when the entitlement is activated or otherwise made available to the purchasing TycoonX account.',
      'It does not automatically renew and does not create a recurring payment obligation. Any future recurring VIP product would require its own clear recurring-price, renewal, cancellation, and consent information.',
    ],
  },
  {
    title: 'Limited-time Lifetime VIP',
    body: [
      'Lifetime VIP is a one-time digital entitlement that may be offered only during limited promotional sales windows selected by CK-Labs. It is not a permanently available product.',
      'CK-Labs may start, end, shorten, extend, or discontinue a genuine Lifetime VIP sales window and may choose never to offer Lifetime VIP again, subject to applicable law and any specific offer already made to a consumer.',
      'Previous availability does not create a right or expectation that Lifetime VIP will remain available, return later, or return at the same price. A later promotion does not create a right to purchase during an earlier closed sales window.',
      'A valid Lifetime VIP purchase is intended to remain active for the commercial operating lifetime of the TycoonX Service for the purchasing account, while TycoonX continues to be operated and made available by CK-Labs and while the account remains eligible to use the Service.',
      'Lifetime does not mean the biological lifetime of the purchaser, CK-Labs, any owner, device, platform, payment provider, server, or other company, and it is not a promise that TycoonX will operate forever or for a fixed minimum number of years beyond mandatory law and the reasonable expectations created by the specific offer.',
      'Lifetime VIP may end if TycoonX is permanently discontinued, the account is deleted at the user’s request, the account is lawfully terminated for a serious or repeated Terms violation, the purchase is refunded or invalid, or continued supply becomes prohibited or impossible because of law, platform rules, or another circumstance recognized by applicable law. Mandatory consumer remedies remain unaffected.',
      'Ending a Lifetime VIP sales window affects future availability only and does not by itself cancel or shorten a valid Lifetime VIP already purchased.',
    ],
  },
  {
    title: 'VIP features and digital-product changes',
    body: [
      'VIP may include changing gameplay benefits, convenience features, cosmetics, limits, automation features, access privileges, or other benefits. CK-Labs may improve, replace, rebalance, add, or remove individual features for valid reasons such as game balance, economy health, security, abuse prevention, technical compatibility, platform requirements, legal compliance, accessibility, or evolution of the Service.',
      'For a digital product supplied continuously over time, any change beyond what is necessary to maintain conformity will be made only where the contract and applicable law permit it. Where required, the change will have a valid contractual reason, will not impose additional cost on the consumer, and will be communicated clearly.',
      'If a change more than insignificantly impairs access or use, CK-Labs will provide the advance notice, durable-medium information, termination right, unchanged-version option, refund, price reduction, or other remedy required by applicable law.',
    ],
  },
  {
    title: 'Authorized purchase channels',
    body: [
      'TycoonX paid digital products may be offered through Apple App Store In-App Purchase, Google Play, and the official TycoonX web shop using Xsolla, plus any other channel expressly authorized by CK-Labs in the future.',
      'Prices, currencies, taxes, payment methods, billing entities, refund procedures, promotional availability, and regional availability may differ by channel. A price or promotion on one channel does not require CK-Labs to offer the same price or promotion on another channel unless applicable law or platform rules require otherwise.',
      'A purchase does not create a right to bypass Apple, Google, Xsolla, tax, country, platform, or payment-provider restrictions. Users must not falsify country, tax location, payment information, eligibility, or account information to obtain an offer or regional price for which they are not eligible.',
    ],
  },
  {
    title: 'Apple App Store purchases',
    body: [
      'For purchases made through Apple In-App Purchase, Apple processes the payment and provides the App Store transaction record. Apple operates the consumer refund-request process for App Store purchases, while CK-Labs handles TycoonX entitlement delivery and game-state issues.',
      'Purchased Diamonds are intended to be consumable in-app purchases. Lifetime VIP is intended to be a non-consumable purchase and restorable while valid. One-time 30-Day VIP is intended to be a non-renewing entitlement with authoritative entitlement state maintained where needed.',
      'If Apple refunds, revokes, reverses, or invalidates a transaction, CK-Labs may revoke or correct the corresponding TycoonX entitlement or virtual value so the refunded or invalid purchase is not retained twice.',
    ],
  },
  {
    title: 'Google Play purchases',
    body: [
      'For purchases made through Google Play, Google processes the transaction through the applicable Google Play billing arrangement and provides transaction or order information used to validate the purchase.',
      'Where Google Play policy requires Google Play Billing for in-app digital goods or services, TycoonX will use that system unless an applicable regional program, platform rule, or law permits another method.',
      'Google may process eligible refunds directly, and CK-Labs may also be able to process eligible refunds through Google’s developer tools according to Google rules and applicable law.',
      'If Google refunds, reverses, charges back, cancels, or invalidates a transaction, CK-Labs may revoke or correct the corresponding entitlement or virtual value.',
    ],
  },
  {
    title: 'TycoonX web shop powered by Xsolla',
    body: [
      'Purchases made through the official TycoonX web shop may be processed by Xsolla. Depending on the checkout arrangement, an Xsolla group company may act as merchant of record.',
      'When Xsolla acts as merchant of record, the Xsolla entity shown during checkout or on the receipt may be responsible under its applicable terms for payment processing, applicable transaction taxes or VAT, fraud screening, refunds, payment disputes, and chargebacks.',
      'The exact Xsolla entity, payment method, price, taxes, refund policy, and legally required purchase information are determined by the checkout and receipt for that transaction.',
      'CK-Labs remains responsible for delivering the corresponding TycoonX entitlement after receiving valid confirmation of successful payment. If Xsolla refunds, reverses, cancels, charges back, or invalidates a transaction, CK-Labs may revoke or correct the related TycoonX entitlement or virtual value.',
    ],
  },
  {
    title: 'Prices, regional pricing, and future price changes',
    body: [
      'CK-Labs may change prices, Diamond bundle sizes or quantities, VIP prices, regional prices, currencies, product availability, and promotional offers for future purchases. A current price or bundle is not a promise that the same price, quantity, discount, or product will remain available later.',
      'Prices may differ between Apple App Store, Google Play, the official TycoonX web shop, countries, regions, currencies, and separate promotional sales windows. Platform pricing systems, tax or VAT changes, foreign-exchange movements, local pricing conventions, or payment-provider rules may cause local prices to change.',
      'The final total price and currency displayed by the applicable checkout before confirmation govern that transaction, subject to correction of obvious pricing or configuration errors where permitted by law. Mandatory taxes and unavoidable price components will be displayed as required by applicable law.',
      'A completed one-time purchase is not retroactively repriced merely because CK-Labs later changes a price. A later price decrease does not automatically create a right to a refund, credit, partial refund, price match, additional Diamonds, or additional VIP time. A later price increase does not create an additional charge for an already completed one-time purchase, except where mandatory law requires otherwise.',
      'Lifetime VIP may be sold at different prices in different genuine sales windows. Purchasing during one sales window does not create a right to a later lower promotional price or a promise that any future sales window will use the same price.',
      'Promotional claims, countdowns, crossed-out prices, stated savings, limited-time statements, and other price-advantage claims must reflect the genuine offer and must not be misleading.',
    ],
  },
  {
    title: 'Obvious errors, failed payments, and duplicate grants',
    body: [
      'If a checkout, catalog, currency, tax, product, quantity, or entitlement configuration contains an obvious error, CK-Labs or the applicable payment provider may correct the error for future transactions and, where legally permitted, cancel an unfulfilled erroneous transaction and refund the amount actually paid rather than provide unintended value. Mandatory rights and any already binding contract remain governed by applicable law.',
      'A screenshot, stale cached display, manipulated client, outdated app version, unofficial source, or client-side display error does not override the final valid checkout record or authoritative server and payment-provider records.',
      'Duplicate entitlements or virtual value created by retries, replayed webhooks, store-notification duplication, race conditions, bugs, restore errors, compromised credentials, or other technical failures may be removed or consolidated so that the user receives only the valid value actually purchased.',
      'If a payment is pending, rejected, reversed, cancelled, fails fraud review, or is never confirmed, CK-Labs may delay or withhold the corresponding entitlement until a valid successful transaction is confirmed.',
    ],
  },
  {
    title: 'Promotions, coupons, and offer abuse',
    body: [
      'Promotions may be limited by time, country, platform, account, purchase history, eligibility, quantity, redemption count, or other clearly stated conditions. Unless the offer states otherwise, promotions cannot be combined and do not create entitlement to a future promotion.',
      'Users must not exploit technical errors, duplicate coupon redemption, manipulated region or identity information, automated purchase abuse, refund cycling, account farming, or other methods to obtain promotional value beyond the genuine offer.',
      'Where a promotion or discount was obtained through fraud, technical abuse, duplicate redemption, or another invalid method, CK-Labs may reject the purchase, revoke only the invalid promotional value, or refund and unwind the affected transaction where permitted by law. Unrelated legitimately purchased value will not be removed merely because another promotion was invalid.',
    ],
  },
  {
    title: 'Delivery, restore, and authoritative records',
    body: [
      'A paid entitlement is delivered only after the applicable payment channel reports a valid successful transaction and required validation is completed. Network interruptions, provider delays, fraud review, incomplete authentication, store outages, or service outages may delay delivery.',
      'Lifetime VIP should be restorable or recoverable after verification while valid. A valid 30-Day VIP should be restored from authoritative account or server records where applicable. Diamonds are consumable purchases and are not restored as a second purchase after consumption.',
      'Where a client display conflicts with valid authoritative server records, signed store records, provider transaction records, or verified backups, CK-Labs may use the reliable authoritative records to correct the account, subject to the user’s mandatory legal rights and the ability to challenge an incorrect decision through Support.',
    ],
  },
  {
    title: 'Refunds, reversals, and chargebacks',
    body: [
      'Refund rights depend on the purchase channel, product type, country, applicable provider rules, and mandatory consumer law. A refund or payment reversal does not entitle a user to keep both the returned money and the corresponding paid digital value.',
      'If a payment is refunded, reversed, cancelled, charged back, or found invalid after value has been credited, CK-Labs may, subject to applicable law, revoke the related entitlement, remove the corresponding unused Diamonds or virtual value, reverse directly related invalid game transactions, apply an equivalent correction where refunded value was already consumed or transferred, or temporarily restrict purchase and economy functions while a payment dispute is investigated.',
      'CK-Labs will not use these corrections to remove unrelated legitimately purchased value except where reasonably necessary to reverse the specific invalid transaction or as otherwise permitted by law.',
      'Knowingly filing false fraud reports, abusive chargebacks, or repeated payment disputes for purchases that were authorized and received may lead to purchase restrictions or account enforcement after reasonable investigation, without limiting genuine fraud-reporting or consumer rights.',
    ],
  },
  {
    title: 'EU and German withdrawal and digital-product rights',
    body: [
      'Nothing in these Terms excludes statutory withdrawal, conformity, update, warranty, price-reduction, termination, refund, or other rights that cannot legally be waived.',
      'For immediately supplied digital content such as a Diamond bundle, a statutory withdrawal right may expire after supply begins only when every legally required condition is satisfied, including any required transaction-specific express consent to early performance, acknowledgement of the loss of the withdrawal right, and contractual confirmation.',
      'A 30-Day VIP and Lifetime VIP are supplied over time. Immediate activation or a one-time purchase price does not by itself eliminate every statutory withdrawal or digital-service remedy. Any early-performance request, proportional payment after withdrawal, termination, or other consequence applies only where the legal requirements for that transaction are satisfied.',
      'Accepting these general Terms is not intended to replace a separate transaction-specific consent where the law requires one.',
    ],
  },
  {
    title: 'Game integrity, exploits, and cheating',
    body: [
      'You must not hack, tamper with, exploit, interfere with, or abuse TycoonX; intentionally use bugs, race conditions, duplicated transactions, invalid receipts, manipulated clients, unauthorized APIs, scripts, bots, macros, or automation for unfair advantage; bypass security or rate limits; evade sanctions; or knowingly receive or retain assets created by exploits, fraud, unauthorized transfers, or manipulated game state.',
      'If an exploit, hack, bug, payment error, unauthorized tool, compromised system, or data corruption creates invalid game state, CK-Labs may use authoritative server records, transaction records, backups, audit logs, and other reliable evidence to restore integrity.',
      'CK-Labs may invalidate, reverse, remove, recalculate, or roll back affected transactions, balances, assets, items, rewards, entitlements, scores, company state, market activity, or other records. Corrections may affect accounts that received invalid assets even if the current holder did not create the exploit, provided CK-Labs acts reasonably and preserves any remedy required for legitimate paid value.',
    ],
  },
  {
    title: 'Account compromise and unauthorized activity',
    body: [
      'If your account is compromised, contact TycoonX Support as soon as possible. CK-Labs may investigate available server logs and may restore or correct game state where reasonably verifiable and technically feasible, but cannot promise that every action, trade, transfer, deletion, or consequence can be reversed.',
      'To the extent permitted by law, CK-Labs is not responsible for losses caused solely by a user’s disclosure of credentials, insecure device, unauthorized account sharing, or failure to use reasonable security measures. This does not exclude liability for a security failure caused by CK-Labs or liability that cannot legally be excluded.',
    ],
  },
  {
    title: 'Economy balancing, corrections, and resets',
    body: [
      'To keep the multiplayer economy functional, fair, and technically stable, CK-Labs may make balancing changes to production speeds, prices, rewards, taxes, limits, demand, supply, formulas, energy costs, probabilities, NPC behavior, market rules, company rules, progression, and similar mechanics.',
      'CK-Labs may correct obvious errors, duplicated rewards, impossible balances, corrupted records, exploit-generated value, unintended calculations, or other invalid game state.',
      'A broad economy reset, server reset, migration, or rollback affecting legitimate paid digital value will be handled subject to applicable law. These Terms do not create an unlimited right to confiscate legitimately purchased value without any remedy where mandatory law requires one.',
    ],
  },
  {
    title: 'Updates, supported versions, and compatibility',
    body: [
      'TycoonX may require users to install reasonable updates or use supported app versions where necessary for security, anti-fraud controls, compatibility, legal compliance, platform requirements, or correct operation of online features.',
      'CK-Labs may stop supporting obsolete app versions, devices, operating systems, APIs, or payment integrations when continued support is no longer reasonably practicable, provided mandatory update, conformity, notice, and remedy obligations are respected.',
      'A user who intentionally continues using an unsupported or materially outdated client may experience unavailable features or incorrect local display until a supported version is installed. Authoritative server and payment records remain controlling for entitlement verification, subject to mandatory rights.',
    ],
  },
  {
    title: 'Third-party services and provider changes',
    body: [
      'TycoonX depends on third-party platforms and infrastructure that may include Apple, Google, Xsolla, hosting, database, network, authentication, storage, and other providers. Their independent outages, policy changes, regional restrictions, account actions, or technical failures may affect TycoonX.',
      'CK-Labs may replace, add, or discontinue payment processors, infrastructure providers, authentication methods, or platform integrations for valid technical, commercial, security, legal, or availability reasons, subject to applicable law and reasonable continuity of valid paid entitlements where required.',
      'CK-Labs is not responsible for independent third-party conduct beyond the extent imposed by applicable law, but will remain responsible for CK-Labs obligations that cannot be shifted to a third party.',
    ],
  },
  {
    title: 'Availability, outages, security incidents, and force majeure',
    body: [
      'The Service may occasionally be unavailable because of maintenance, updates, security events, hosting failures, network failures, third-party outages, cyberattacks, emergency fixes, capacity issues, natural disasters, governmental action, labor disruption, war, widespread infrastructure failure, or other events outside reasonable control.',
      'CK-Labs may temporarily disable purchases, markets, transfers, multiplayer functions, logins, or other features when reasonably necessary to protect users, payment integrity, data, or infrastructure.',
      'CK-Labs may use backups, snapshots, transaction logs, or other recovery methods after a serious incident, including forcing reauthentication, invalidating sessions, freezing affected transactions, or rolling back demonstrably corrupted game state. Mandatory rights relating to paid digital products remain unaffected.',
      'No clause in these Terms excludes liability where such exclusion is prohibited by law.',
    ],
  },
  {
    title: 'Permanent discontinuation',
    body: [
      'CK-Labs may permanently discontinue all or part of TycoonX for a valid reason, including severe technical or security problems, legal or regulatory requirements, platform removal, payment-provider restrictions, unsustainable operating conditions, force majeure, or a business decision to cease operating the Service.',
      'Where legally required and reasonably practicable, CK-Labs will provide advance notice. When TycoonX permanently ends, online accounts, Diamonds, virtual items, companies, leaderboards, and VIP benefits may also end. Lifetime VIP ends with the commercial operating lifetime of the Service.',
      'Virtual items do not automatically become redeemable for cash merely because the Service closes. Mandatory refund, price-reduction, termination, warranty, or other consumer remedies that apply because of the circumstances or timing of discontinuation remain unaffected.',
    ],
  },
  {
    title: 'Business transfer, sale, merger, or successor operator',
    body: [
      'CK-Labs may sell, transfer, reorganize, merge, finance, or otherwise transfer the TycoonX business, technology, assets, or operation to a successor or affiliated entity.',
      'Where permitted by law, rights and obligations connected with TycoonX may be transferred to the successor so the Service and valid entitlements can continue. CK-Labs will provide notice, obtain consent, or preserve termination and objection rights where applicable law requires it.',
      'A business transfer does not by itself erase a valid paid entitlement. If the successor continues TycoonX, valid entitlements should continue according to the applicable Terms and mandatory law, subject to any lawful transition arrangements.',
    ],
  },
  {
    title: 'Suspension and termination',
    body: [
      'CK-Labs may warn, restrict, suspend, reset affected invalid state, or terminate accounts for serious or repeated violations of these Terms, fraud, cheating, security threats, unlawful activity, abusive conduct, payment abuse, ban evasion, or conduct that materially harms other users or the Service.',
      'Where immediate action is reasonably necessary to protect users, game integrity, payments, or infrastructure, CK-Labs may suspend first and investigate afterward. Where appropriate, users may contact Support to dispute an enforcement decision.',
      'Termination for cause remains subject to mandatory law and applicable platform rules. CK-Labs will not rely on this section to eliminate non-waivable consumer remedies.',
    ],
  },
  {
    title: 'User content and community features',
    body: [
      'If TycoonX allows you to submit messages, names, descriptions, images, creative works, or other content, you remain responsible for content you submit and must have the rights necessary to submit it.',
      'You grant CK-Labs a non-exclusive, worldwide, royalty-free license to host, store, reproduce, display, format, translate, transmit, moderate, and technically adapt submitted content only as reasonably necessary to operate, secure, promote, and improve TycoonX, subject to applicable privacy and intellectual-property law.',
      'CK-Labs may remove or restrict content that violates these Terms, community rules, law, third-party rights, platform rules, or reasonable safety requirements. Mandatory rights concerning user content remain unaffected.',
    ],
  },
  {
    title: 'CK-Labs intellectual property',
    body: [
      'TycoonX software, branding, interfaces, game systems, artwork, text, databases, and other CK-Labs materials are protected by intellectual-property and other applicable laws.',
      'Subject to these Terms, CK-Labs grants you a limited, personal, non-exclusive, non-transferable, revocable right to use TycoonX for its intended consumer use while the Service and your account remain available. This license does not permit copying, reverse engineering except where law expressly permits it, resale, commercial exploitation, or unauthorized distribution.',
    ],
  },
  {
    title: 'Liability and statutory rights',
    body: [
      'CK-Labs liability is unlimited where limitation is prohibited by law, including for intent, gross negligence, injury to life, body, or health, fraudulently concealed defects, expressly assumed guarantees, and liability under mandatory product-liability law.',
      'For damage caused by simple negligence, CK-Labs is liable for breach of essential contractual obligations only to the extent permitted by law. In such cases, liability may be limited to damage that was foreseeable and typical for the contract at the time it was concluded. Any mandatory stricter liability remains unaffected.',
      'Nothing in these Terms limits statutory rights for defective, non-conforming, unavailable, or materially changed digital products where those rights cannot be waived.',
    ],
  },
  {
    title: 'Changes to these Terms',
    body: [
      'CK-Labs may update these Terms to reflect changes in law, platform requirements, payment providers, security needs, technical operation, new features, or other valid reasons.',
      'Material changes that affect existing consumer rights or ongoing paid digital services will be communicated in the manner and timeframe required by applicable law. A change to these Terms does not retroactively authorize conduct that was unlawful when the relevant transaction occurred.',
      'Where applicable law requires express consent rather than notice or continued use, CK-Labs will request that consent.',
    ],
  },
  {
    title: 'Governing law, disputes, and severability',
    body: [
      'These Terms are governed by German law, without depriving consumers of mandatory protections available under the law of their habitual country of residence where those protections apply.',
      'For consumers, jurisdiction is determined by mandatory statutory rules. These Terms do not impose mandatory arbitration or require a consumer to litigate in a location where applicable law gives the consumer another forum.',
      'If a provision of these Terms is invalid or unenforceable, the remaining provisions remain in effect to the extent legally possible. The invalid provision is replaced only by the applicable statutory rule or a lawful interpretation, not by an unlimited expansion in favor of CK-Labs.',
      'A failure by CK-Labs to enforce a provision once does not automatically waive the right to enforce that provision later.',
    ],
  },
];

export default function TycoonXTermsOfService() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="border-b border-white/5 px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium tracking-wide">TycoonX · CK-Labs</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Terms of Service</h1>
          <p className="text-zinc-500 text-sm">Last updated August 24, 2026</p>
          <p className="text-zinc-400 text-sm leading-relaxed mt-6">
            These Terms govern TycoonX accounts, gameplay, virtual assets, Diamonds, one-time 30-Day VIP, limited-time Lifetime VIP, purchases, pricing, Apple App Store, Google Play, the official Xsolla-powered web shop, security, service changes, outages, enforcement, and permanent discontinuation.
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
          <h2 className="text-white font-semibold mb-3">Purchases, privacy & support</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">TycoonX is operated by CK-Labs. Use the detailed Purchases & Refunds Policy for payment-specific information and TycoonX Support for account, purchase, or enforcement questions.</p>
          <div className="flex flex-wrap gap-3">
            <a href="/tyconx-purchase-refund-policy" className="inline-flex bg-indigo-600 hover:bg-indigo-500 transition text-white text-sm font-medium px-4 py-2 rounded-lg">Purchases & Refunds</a>
            <a href="/tyconx-privacy-policy" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Privacy Policy</a>
            <a href="/tyconx-support" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">TycoonX Support</a>
            <a href="mailto:cevikdev@gmail.com" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">cevikdev@gmail.com</a>
          </div>
          <p className="text-zinc-600 text-xs leading-relaxed mt-4">Additional legally required operator identity and address details must be made available in the applicable legal notice or imprint for the Service.</p>
        </section>
      </div>
    </main>
  );
}
