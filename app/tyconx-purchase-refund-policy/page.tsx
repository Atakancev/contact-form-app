const sections = [
  {
    title: 'Product types',
    body: [
      'Diamonds are virtual in-game currency. Purchased Diamonds do not expire solely because time passes, are for use only inside TycoonX, and are not redeemable from CK-Labs for cash except where mandatory law requires otherwise.',
      '30-Day VIP is a one-time, non-renewing entitlement lasting 30 consecutive days from activation or availability to the account unless the purchase screen expressly states otherwise.',
      'Lifetime VIP is a one-time entitlement that may be offered only during selected limited promotional sales windows. It is not a permanently available product. CK-Labs may end or discontinue a sales window and may choose never to offer Lifetime VIP again, subject to applicable law and any specific offer already made to a consumer.',
      'Ending a Lifetime VIP sales window affects future availability only and does not by itself cancel or shorten an already valid purchase. Lifetime VIP is intended for the commercial operating lifetime of the TycoonX Service for the purchasing account and does not promise that TycoonX will operate forever. The commercial-lifetime meaning and the limited-time nature of the offer must be shown clearly at or immediately before checkout.',
    ],
  },
  {
    title: 'Apple App Store purchases',
    body: [
      'Apple processes purchases made through Apple In-App Purchase and operates the App Store refund-request process. CK-Labs may investigate delivery and entitlement issues but does not control Apple’s refund decision.',
      'Purchased Diamonds are intended to be consumable in-app purchases. Lifetime VIP is intended to be a non-consumable purchase and is restorable while valid. One-time 30-Day VIP is intended to be a non-renewing entitlement with CK-Labs maintaining the authoritative account entitlement state where needed.',
      'If Apple refunds, revokes, reverses, or invalidates a transaction, CK-Labs may revoke or correct the corresponding TycoonX entitlement or virtual value so the refunded purchase is not retained twice.',
    ],
  },
  {
    title: 'Google Play purchases',
    body: [
      'Google processes the transaction through the applicable Google Play billing arrangement and provides transaction or order information used to validate the purchase.',
      'Where Google Play policy requires Google Play Billing for in-app digital goods or services, TycoonX will use that system unless an applicable regional program, platform rule, or law permits an alternative.',
      'Google may process eligible refund requests directly. CK-Labs may also be able to process eligible Google Play refunds through Google’s developer tools, subject to Google rules, CK-Labs policy, and applicable law.',
      'If Google refunds, reverses, charges back, cancels, or invalidates a transaction, CK-Labs may revoke or correct the corresponding entitlement or virtual value.',
    ],
  },
  {
    title: 'TycoonX web shop powered by Xsolla',
    body: [
      'Purchases made through the official TycoonX web shop may be processed by Xsolla. Depending on the applicable checkout arrangement, an Xsolla group company may act as merchant of record.',
      'When Xsolla acts as merchant of record, the Xsolla entity shown at checkout or on the receipt may be responsible under its applicable terms for payment processing, transaction taxes or VAT, fraud screening, refunds, payment disputes, and chargebacks.',
      'The exact Xsolla entity, payment method, price, taxes, refund policy, and legally required purchase information are determined by the checkout and receipt for the transaction. The transaction-specific Xsolla terms and refund policy shown for that purchase apply together with mandatory consumer law.',
      'CK-Labs remains responsible for delivering the corresponding TycoonX entitlement after receiving valid confirmation of successful payment. If Xsolla refunds, reverses, cancels, charges back, or invalidates a transaction, CK-Labs may revoke or correct the corresponding TycoonX entitlement or virtual value.',
    ],
  },
  {
    title: 'Prices, regional pricing, and future price changes',
    body: [
      'CK-Labs may change the prices, bundle sizes, Diamond quantities, VIP prices, regional prices, currencies, availability, and promotional offers for future purchases. A current price is not a promise that the same product, quantity, discount, or price will remain available later.',
      'Prices may differ between Apple App Store, Google Play, the official TycoonX web shop, countries, regions, currencies, and separate promotional sales windows. Platform pricing systems, taxes, VAT, currency conversion, foreign-exchange movements, local pricing conventions, or payment-provider rules may also cause local prices to change.',
      'The final total price and currency displayed by the applicable checkout before the user confirms the purchase govern that transaction, subject to correction of obvious pricing errors where permitted by law. For consumers in Germany and elsewhere where required, mandatory taxes and unavoidable price components must be included or presented as required by applicable price-display law.',
      'A completed one-time purchase is not retroactively repriced merely because CK-Labs later changes a price. A later price decrease does not automatically create a right to a refund, credit, partial refund, price match, or additional Diamonds or VIP time, and a later price increase does not create an additional charge for an already completed one-time purchase, except where mandatory law requires otherwise.',
      'Lifetime VIP may be sold at different prices in different genuine promotional sales windows. Purchasing in one sales window does not create a right to a later lower promotional price, and a future sales window does not require CK-Labs to match an earlier price.',
      'Promotional claims, countdowns, crossed-out prices, stated savings, limited-time statements, and other price-advantage claims must reflect the genuine offer and must not be misleading. CK-Labs may end a genuine promotion or later run a separate promotion, but will not use false pricing or false urgency to mislead consumers.',
      'If CK-Labs later introduces a recurring subscription or another product with recurring charges, any price-change, notice, consent, cancellation, or renewal rules required for that recurring product will apply separately. The one-time price-change rules above do not authorize an undisclosed recurring charge.',
    ],
  },
  {
    title: 'Restore and cross-device recovery',
    body: [
      'Lifetime VIP should be restorable or recoverable after verification while the entitlement remains valid. A valid 30-Day VIP should be restored from authoritative account or server records where required.',
      'Diamonds are consumable purchases and are not restored as a second purchase after consumption. The current TycoonX account balance is preserved through TycoonX account/server state where applicable. Restore operations never create duplicate paid value.',
    ],
  },
  {
    title: 'Delivery problems',
    body: [
      'If you were charged but the purchased content does not appear, confirm you are using the correct TycoonX account, use Restore Purchases where applicable, allow reasonable time for a pending provider transaction to complete, and contact TycoonX Support with the order or transaction details if the issue remains.',
      'CK-Labs may validate the transaction with Apple, Google, Xsolla, or the applicable provider before granting, restoring, changing, or refunding an entitlement.',
    ],
  },
  {
    title: 'Refunds, reversals, and chargebacks',
    body: [
      'A refund or payment reversal does not entitle a user to keep both the returned money and the corresponding paid digital value.',
      'If a payment is refunded, reversed, charged back, cancelled, or found invalid after value was credited, CK-Labs may, subject to applicable law, revoke the related entitlement, remove unused Diamonds or virtual value, reverse directly related invalid game transactions, apply an equivalent balance correction where refunded value was already consumed or transferred, or temporarily restrict purchase/economy functions while a payment dispute is investigated.',
      'CK-Labs will not use these corrections to remove unrelated legitimately purchased value except where reasonably necessary to reverse a specific invalid transaction or as otherwise permitted by law.',
    ],
  },
  {
    title: 'Unauthorized or fraudulent purchases',
    body: [
      'Users should promptly report suspected unauthorized purchases to the relevant payment provider and TycoonX Support.',
      'CK-Labs may investigate receipts, transaction identifiers, entitlement records, server logs, account activity, device/session information, payment-provider events, and related security records to prevent fraud and duplicate delivery.',
      'Fraudulent receipts, manipulated clients, payment abuse, deliberate false fraud reports, abusive chargebacks, or attempts to retain refunded digital value may lead to entitlement correction, purchase restrictions, account suspension, or termination in accordance with the TycoonX Terms and applicable law.',
    ],
  },
  {
    title: 'EU and German withdrawal rights',
    body: [
      'Nothing in this Policy excludes statutory rights that cannot legally be waived. For German consumers, Sections 327 et seq. BGB may apply to paid digital content and digital services.',
      'For immediately supplied digital content such as a Diamond bundle, a statutory withdrawal right may expire after supply begins only if every legal requirement is satisfied, including any required transaction-specific express consent to early performance, acknowledgement of the loss of the withdrawal right, and contractual confirmation. Accepting the general Terms is not intended to replace a separate consent where the law requires one.',
      'A 30-Day VIP is supplied over a period of time. Immediate activation does not automatically eliminate every statutory withdrawal right merely because access has begun. Where applicable law allows early performance, the checkout may request the consumer’s express request for it, and any amount due after a valid withdrawal is determined only as permitted by law.',
      'Lifetime VIP is also an entitlement supplied over time. Its one-time purchase price and non-renewing nature do not by themselves eliminate statutory withdrawal rights or mandatory digital-service remedies. Any early-performance request, expiry of a withdrawal right, proportional payment following withdrawal, or other consequence applies only where the legal requirements for that transaction are satisfied.',
      'CK-Labs will not use one blanket no-refunds or waive-all-withdrawal-rights clause for Diamonds, 30-Day VIP, and Lifetime VIP because their legal treatment can differ.',
    ],
  },
  {
    title: 'Service discontinuation',
    body: [
      'If TycoonX is permanently discontinued, online access to accounts, Diamonds, VIP, virtual items, and game data may also end. Virtual items do not automatically become redeemable for cash merely because the Service closes.',
      'Lifetime VIP is tied to the commercial operating lifetime of TycoonX for the purchasing account, not the biological lifetime of the user and not an unlimited promise that the Service will exist forever. Mandatory refund, price-reduction, termination, warranty, or other consumer remedies remain unaffected.',
    ],
  },
];

export default function TycoonXPurchaseRefundPolicy() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="border-b border-white/5 px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium tracking-wide">TycoonX · CK-Labs</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Purchases & Refunds</h1>
          <p className="text-zinc-500 text-sm">Last updated August 24, 2026</p>
          <p className="text-zinc-400 text-sm leading-relaxed mt-6">
            This policy covers Diamonds, one-time 30-Day VIP, limited-time Lifetime VIP offers, price changes, Apple App Store purchases, Google Play purchases, and the official TycoonX web shop powered by Xsolla. It supplements the Terms of Service and does not reduce mandatory consumer rights.
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
          <h2 className="text-white font-semibold mb-3">Legal & support</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">TycoonX is operated by CK-Labs. For delivery problems, purchase questions, suspected fraud, or entitlement disputes, use TycoonX Support or email us.</p>
          <div className="flex flex-wrap gap-3">
            <a href="/tyconx-terms-of-service" className="inline-flex bg-indigo-600 hover:bg-indigo-500 transition text-white text-sm font-medium px-4 py-2 rounded-lg">Terms of Service</a>
            <a href="/tyconx-privacy-policy" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Privacy Policy</a>
            <a href="/tyconx-support" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">TycoonX Support</a>
            <a href="mailto:cevikdev@gmail.com" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">cevikdev@gmail.com</a>
          </div>
        </section>
      </div>
    </main>
  );
}
