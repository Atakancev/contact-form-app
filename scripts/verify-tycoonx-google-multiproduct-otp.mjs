import fs from 'node:fs';

const read = (path) => fs.readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

const gate = read('TYCOONX_PAYMENT_ENTITLEMENT_RELEASE_GATES.md');
const terms = read('tyconx-terms-of-service.md');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const errors = [];
const requireMatch = (text, regex, message) => {
  if (!regex.test(text)) errors.push(message);
};

// Current Google Play multi-product and multi-quantity checkpoints.
requireMatch(gate, /Last reviewed: September 8, 2026/i, 'Payment gate review date is stale.');
requireMatch(gate, /Google Play multi-product one-time purchase bundles/i, 'Missing Google multi-product OTP gate.');
requireMatch(gate, /one Google `Purchase` and purchase token can represent \*\*multiple product IDs\*\*/i, 'Missing one-token/multiple-product invariant.');
requireMatch(gate, /Purchase\.getProducts\(\)/i, 'Missing client product-set resolution rule.');
requireMatch(gate, /`lineItems` returned by the Google Play Developer API/i, 'Missing server line-item resolution rule.');
requireMatch(gate, /per-line-item entitlement ledger or equivalent idempotent mapping/i, 'Missing per-line-item idempotency safeguard.');
requireMatch(gate, /do not grant any line item while the overall purchase is `PENDING`/i, 'Missing PENDING multi-product safeguard.');
requireMatch(gate, /RTDN `sku` field.*not supplied.*multi-product/is, 'Missing RTDN sku-absence safeguard.');
requireMatch(gate, /several line items sharing the same Google Order ID.*same multi-product transaction/is, 'Missing shared-Order-ID reconciliation safeguard.');
requireMatch(gate, /do not combine a subscription with a multi-product one-time bundle/i, 'Missing subscription exclusion.');
requireMatch(gate, /digital content and digital services.*same multi-product one-time bundle/is, 'Missing content/service mixing safeguard.');
requireMatch(gate, /Before ever bundling Diamonds with a VIP product, perform a current Play classification review/i, 'Missing Diamonds/VIP classification review safeguard.');
requireMatch(gate, /pre-order or rental purchase option/i, 'Missing pre-order/rental exclusion safeguard.');
requireMatch(gate, /closed Lifetime VIP sales window.*old bundle definition or cached `ProductDetails`/is, 'Missing stale Lifetime VIP catalog safeguard.');

// Multi-product refund behavior must not be confused with multi-quantity refunds.
requireMatch(gate, /individual items in such a purchase cannot be separately refunded/i, 'Missing Google multi-product all-or-nothing refund checkpoint.');
requireMatch(gate, /canceling it cancels all entitlements associated with that purchase/i, 'Missing bundled cancellation entitlement rule.');
requireMatch(gate, /never revoke unrelated purchases outside that purchase token\/order/i, 'Missing unrelated-purchase isolation.');
requireMatch(gate, /mandatory consumer remedy.*all-or-nothing multi-product refund mechanics/is, 'Missing mandatory-remedy escalation safeguard.');
requireMatch(gate, /if the product design predictably requires independent refundability, do \*\*not\*\* bundle/i, 'Missing independent-refundability product-design safeguard.');
requireMatch(gate, /distinguish \*\*multi-product\*\* purchases from \*\*multi-quantity\*\* purchases/i, 'Missing multi-product/multi-quantity separation.');
requireMatch(gate, /Voided Purchases \/ RTDN signals.*Developer API lookup/is, 'Missing authoritative multi-product refund reconciliation rule.');

// Google Play multi-quantity must be opt-in, Diamond-only, quantity-aware, and idempotent.
requireMatch(gate, /### 13\. Google Play multi-quantity one-time product purchases/i, 'Missing Google multi-quantity gate.');
requireMatch(gate, /keep Google Play multi-quantity disabled unless CK-Labs deliberately enables it for a specific consumable Diamond product/i, 'Missing multi-quantity fail-closed rule.');
requireMatch(gate, /Keep it disabled for 30-Day VIP, Lifetime VIP/i, 'Missing VIP multi-quantity prohibition.');
requireMatch(gate, /never assume every purchase has quantity 1/i, 'Missing quantity-one assumption safeguard.');
requireMatch(gate, /grant `Diamond bundle amount × verified purchased quantity` exactly once/i, 'Missing quantity-aware Diamond fulfillment formula.');
requireMatch(gate, /purchase token, product, original purchased quantity, granted Diamond quantity, and later refunded\/voided quantity/i, 'Missing quantity ledger fields.');
requireMatch(gate, /quantity 3 for a 500-Diamond consumable.*1,500 Diamonds once/is, 'Missing concrete quantity idempotency example.');
requireMatch(gate, /quarantine impossible or materially conflicting quantity evidence instead of silently guessing quantity 1/i, 'Missing quantity-conflict quarantine rule.');
requireMatch(gate, /do not classify a legitimate larger multi-quantity Diamond grant as entitlement abuse, fraud, hacking, or regional-price abuse/i, 'Missing player-enforcement safeguard.');

// Quantity-based partial refunds can happen more than once and the final remainder becomes a full refund.
requireMatch(gate, /REFUND_TYPE_QUANTITY_BASED_PARTIAL_REFUND/i, 'Missing quantity-based partial-refund RTDN safeguard.');
requireMatch(gate, /one purchase can be partially voided multiple times/i, 'Missing repeated partial-refund handling rule.');
requireMatch(gate, /final remaining quantity produces a full-refund notification/i, 'Missing partial-then-full transition rule.');
requireMatch(gate, /original verified purchase `quantity`.*`refundableQuantity`/is, 'Missing authoritative quantity/refundableQuantity reconciliation.');
requireMatch(gate, /Repeated or reordered notifications must not deduct the same refunded units twice/i, 'Missing partial-refund idempotency safeguard.');
requireMatch(gate, /newly refunded\/voided units from authoritative cumulative state/i, 'Missing cumulative quantity reconciliation.');
requireMatch(gate, /never claw back more Diamond value than `verified refunded unit count × original per-unit Diamond grant`/i, 'Missing proportional Diamond clawback cap.');
requireMatch(gate, /never deduct unrelated Diamonds or VIP from separate valid purchases/i, 'Missing unrelated-purchase isolation for partial refunds.');
requireMatch(gate, /remaining quantity is later fully refunded.*only the not-yet-corrected remainder/is, 'Missing partial-then-full no-double-deduction rule.');

// Critical Google API recovery trap: partial quantity voids are excluded by default.
requireMatch(gate, /Voided Purchases API trap/i, 'Missing Voided Purchases multi-quantity trap.');
requireMatch(gate, /default does not include quantity-based partial refunds/i, 'Missing default-exclusion warning.');
requireMatch(gate, /includeQuantityBasedPartialRefund=true/i, 'Missing Voided Purchases partial-refund include flag.');
requireMatch(gate, /process `voidedQuantity`/i, 'Missing voidedQuantity processing rule.');
requireMatch(gate, /same recovery call without the flag is treated as insufficient evidence that no partial refund exists/i, 'Missing false-negative recovery safeguard.');
requireMatch(gate, /rechecked September 8, 2026.*Play Billing integration, ProductPurchaseV2, RTDN, and Voided Purchases API guidance/is, 'Missing current multi-quantity documentation checkpoint.');

// Multi-quantity product invariants and regression coverage.
requireMatch(gate, /30-Day VIP remains one one-time, non-renewing 30-consecutive-day entitlement/i, '30-Day VIP multi-quantity invariant missing.');
requireMatch(gate, /quantity 2 must never become 60 days/i, 'Missing 30-Day VIP quantity-2 safeguard.');
requireMatch(gate, /Lifetime VIP remains one promotional entitlement available only during selected genuine sales windows/i, 'Lifetime VIP multi-quantity sales-window invariant missing.');
requireMatch(gate, /no quantity setting, stale product state, refund transition, or reconciliation path may reopen a closed sales window/i, 'Missing Lifetime VIP closed-window safeguard.');
requireMatch(gate, /partial refund followed by a full refund of the remaining quantity does not double-deduct prior refunded units/i, 'Missing partial/full regression case.');
requireMatch(gate, /quantity mismatch\/corrupt evidence quarantines instead of guessing/i, 'Missing quantity corruption regression case.');
requireMatch(gate, /analytics\/revenue treats one higher-quantity order as one provider purchase transaction with N units/i, 'Missing multi-quantity analytics safeguard.');
requireMatch(gate, /keep Google Play multi-quantity disabled for TycoonX/i, 'Missing multi-quantity fail-closed release decision.');

// Shared TycoonX paid-product invariants.
requireMatch(gate, /Purchased Diamonds remain consumable virtual currency and do not expire solely because time passes/i, 'Purchased Diamond invariant missing.');
requireMatch(gate, /30-Day VIP remains a \*\*one-time, non-renewing 30-day entitlement\*\*/i, '30-Day VIP multi-product invariant missing.');
requireMatch(gate, /Lifetime VIP remains a \*\*one-time promotional entitlement available only during selected genuine sales windows\*\*/i, 'Lifetime VIP multi-product invariant missing.');
requireMatch(gate, /may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability/i, 'Lifetime VIP future-availability rule missing.');
requireMatch(gate, /completed purchases are not retroactively repriced/i, 'Completed-purchase non-repricing safeguard missing.');
requireMatch(gate, /keep Google multi-product one-time purchases disabled for TycoonX/i, 'Missing multi-product fail-closed release decision.');
requireMatch(gate, /documentation updated September 1, 2026/i, 'Missing September 2026 Google multi-product documentation checkpoint.');
requireMatch(gate, /mandatory German\/EU withdrawal, conformity, cure, price-reduction, termination, refund, liability, and other non-waivable rights/i, 'Missing mandatory-rights safeguard for multi-quantity refunds.');

// Canonical public Terms must remain compatible without being rewritten for an unused platform feature.
requireMatch(terms, /## 4\. One-time 30-Day VIP/i, 'Canonical Terms lost 30-Day VIP section.');
requireMatch(terms, /one-time, non-renewing digital entitlement/i, 'Canonical 30-Day VIP non-renewal rule missing.');
requireMatch(terms, /## 5\. Limited-time Lifetime VIP/i, 'Canonical Terms lost Lifetime VIP section.');
requireMatch(terms, /limited promotional sales windows/i, 'Canonical Lifetime VIP sales-window rule missing.');
requireMatch(terms, /Purchased Diamonds do not expire solely because time passes/i, 'Canonical purchased-Diamond expiry rule missing.');
requireMatch(terms, /A completed one-time purchase is not retroactively repriced/i, 'Canonical completed-purchase pricing invariant missing.');
requireMatch(terms, /Nothing in these Terms excludes statutory withdrawal, conformity, update, warranty, price-reduction, termination, refund, or other rights that cannot legally be waived/i, 'Canonical mandatory-rights safeguard missing.');

// Localization and release invariants.
requireMatch(progress, /25\/25.*target locales/is, 'Localized hub completion invariant missing.');
requireMatch(progress, /All 25 target locales and all 100 localized full documents are current\./i, 'Localized full-document completion invariant missing.');
requireMatch(progress, /Exact next unfinished locale\/document: None/i, 'Localization queue is unexpectedly open.');
requireMatch(gate, /TycoonX/i, 'TycoonX brand invariant missing.');
requireMatch(terms, /TycoonX/i, 'Canonical TycoonX brand invariant missing.');

const legacyBrand = ['Ty', 'conX'].join('');
for (const [name, text] of [
  ['payment gate', gate],
  ['canonical Terms', terms],
]) {
  if (text.includes(legacyBrand)) errors.push(`Legacy displayed game-brand spelling found in ${name}.`);
  if (/\bTycoonX\s+(?:is|remains|currently|still)\s+(?:in\s+)?beta\b/i.test(text)) {
    errors.push(`Stale live-service beta wording found in ${name}.`);
  }
}

if (errors.length) {
  console.error('FAIL: TycoonX Google Play multi-product and multi-quantity one-time purchase safeguards are incomplete.');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: Google Play multi-product and multi-quantity fulfillment, partial-refund/void reconciliation, paid-product, pricing, mandatory-rights, brand, release, and localization safeguards are present.');
}
