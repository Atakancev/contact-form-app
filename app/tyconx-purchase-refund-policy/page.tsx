const sections = [
  {
    title: 'Product types',
    body: [
      'Diamonds are virtual in-game currency. On Apple platforms they are intended to be sold as Consumable In-App Purchases. Purchased Diamonds do not expire solely because time passes and are not redeemable from CK-Labs for cash.',
      '30-Day VIP is intended to be a one-time, non-renewing entitlement. On Apple platforms it is intended to be configured as a Non-Renewing Subscription. It lasts for 30 consecutive days from activation or availability to the account and does not automatically renew.',
      'Lifetime VIP is intended to be a Non-Consumable In-App Purchase on Apple platforms. It is a one-time purchase and is restorable while the entitlement remains valid. Lifetime means the commercial lifetime of the TyconX Service while TyconX continues to be operated and made available by CK-Labs. It does not promise that TyconX will operate forever.',
    ],
  },
  {
    title: 'App Store purchases',
    body: [
      'For purchases made through Apple In-App Purchase, Apple processes the payment and provides the App Store transaction record. Apple operates the consumer refund-request process for App Store purchases.',
      'Users who want to request an Apple refund should use Apple’s official refund process at reportaproblem.apple.com or the refund controls Apple makes available in their region. CK-Labs can investigate delivery, entitlement, account, and game-state issues but does not control whether Apple approves or rejects a refund request.',
      'If Apple refunds, revokes, reverses, or invalidates a transaction, CK-Labs may revoke or correct the corresponding TyconX entitlement, Diamonds, virtual items, or account value so the refunded purchase is not retained twice.',
    ],
  },
  {
    title: 'Restore Purchases',
    body: [
      'TyconX should provide a user-initiated Restore Purchases mechanism where applicable. Lifetime VIP is restorable as a non-consumable entitlement.',
      'For 30-Day VIP, CK-Labs is responsible for restoring the valid non-renewing entitlement state from authoritative account or server records where required.',
      'Diamonds are consumable purchases and are not restored as a repeat Apple transaction after consumption. The current TyconX account balance is preserved through TyconX account/server state where applicable. A restore operation does not create duplicate value.',
    ],
  },
  {
    title: 'Delivery problems',
    body: [
      'If you were charged but the purchased content does not appear, confirm that you are using the correct TyconX account, use Restore Purchases where applicable, allow reasonable time for a pending App Store transaction to complete, and then contact TyconX Support if the issue remains.',
      'CK-Labs may validate the transaction with the applicable payment provider and correct the entitlement where the purchase is valid.',
    ],
  },
  {
    title: 'Refunds, reversals, and chargebacks',
    body: [
      'A refund or payment reversal does not entitle a user to keep both the refunded money and the corresponding paid digital value.',
      'If a payment is refunded, reversed, charged back, cancelled, or found invalid after value has been credited, CK-Labs may, subject to applicable law, revoke the related entitlement, remove corresponding unspent virtual value, reverse related invalid game transactions, apply an equivalent balance correction where the refunded value has already been consumed or transferred, or temporarily restrict purchase/economy functions while a payment dispute is investigated.',
      'CK-Labs will not use these corrections to remove unrelated legitimately purchased value except where reasonably necessary to reverse a specific invalid transaction or as otherwise permitted by law.',
    ],
  },
  {
    title: 'Unauthorized or fraudulent purchases',
    body: [
      'Users should promptly report suspected unauthorized purchases to the payment provider and TyconX Support.',
      'CK-Labs may investigate purchase receipts, transaction identifiers, entitlement records, server logs, account activity, device/session information, and related security records to prevent fraud and duplicate delivery.',
      'Fraudulent receipts, manipulated clients, payment abuse, chargeback abuse, or attempts to retain refunded digital value may lead to entitlement correction, purchase restrictions, account suspension, or termination in accordance with the TyconX Terms of Service and applicable law.',
    ],
  },
  {
    title: 'EU and German consumer rights',
    body: [
      'Nothing in this Policy excludes statutory rights that cannot legally be waived. For consumers in Germany, paid digital content and digital services may be subject to Sections 327 et seq. of the German Civil Code (BGB), including rules on supply, conformity, updates, remedies, price reduction, termination, and certain modifications.',
      'Consumers may also have a statutory right of withdrawal for distance contracts. For digital content that is not supplied on a physical medium, the withdrawal right only expires after supply begins if all legal requirements for that expiry are satisfied, including any required express consent, acknowledgement of loss of the right, and contractual confirmation.',
      'Where a purchase is made through Apple, Apple’s purchase and refund process applies in addition to mandatory law.',
    ],
  },
  {
    title: 'Service discontinuation',
    body: [
      'If TyconX is permanently discontinued, online access to accounts, Diamonds, VIP, virtual items, and game data may also end. Virtual items do not automatically become redeemable for cash merely because the Service closes.',
      'Lifetime VIP is tied to the commercial lifetime of the TyconX Service, not the biological lifetime of the user or an unlimited promise that the Service will exist forever.',
      'This does not waive any mandatory refund, price-reduction, termination, warranty, or other remedy that applies because of the circumstances or timing of discontinuation.',
    ],
  },
  {
    title: 'Changes to products',
    body: [
      'CK-Labs may rebalance or modify game mechanics and VIP features for valid game-design, economy, security, technical, platform, legal, or abuse-prevention reasons, subject to applicable law.',
      'Where mandatory law requires advance notice, a valid contractual reason, continued access to an unchanged version, price reduction, termination, refund, or another remedy, those requirements remain applicable.',
    ],
  },
];

export default function TyconXPurchaseRefundPolicy() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="border-b border-white/5 px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium tracking-wide">TyconX · CK-Labs</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Purchases & Refunds Policy</h1>
          <p className="text-zinc-500 text-sm">Last updated August 24, 2026</p>
          <p className="text-zinc-400 text-sm leading-relaxed mt-6">This Policy applies to paid digital content and entitlements offered in TyconX by CK-Labs. It supplements the TyconX Terms of Service and does not reduce rights that cannot legally be waived.</p>
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
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">TyconX is operated by CK-Labs. For delivery problems, purchase questions, suspected fraud, or entitlement disputes, use TyconX Support.</p>
          <div className="flex flex-wrap gap-3">
            <a href="/tyconx-support" className="inline-flex bg-indigo-600 hover:bg-indigo-500 transition text-white text-sm font-medium px-4 py-2 rounded-lg">TyconX Support</a>
            <a href="/tyconx-terms-of-service" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Terms of Service</a>
            <a href="/tyconx-privacy-policy" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Privacy Policy</a>
          </div>
        </section>
      </div>
    </main>
  );
}
