import fs from 'node:fs';

const read = (path) => fs.readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

const gate = read('TYCOONX_PAYMENT_ENTITLEMENT_RELEASE_GATES.md');
const terms = read('tyconx-terms-of-service.md');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const errors = [];
const requireMatch = (text, regex, message) => {
  if (!regex.test(text)) errors.push(message);
};

// Current Google Play multi-product one-time purchase checkpoint.
requireMatch(gate, /Last reviewed: September 4, 2026/i, 'Payment gate review date is stale.');
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

// Refund and revocation behavior must not be guessed from single-product assumptions.
requireMatch(gate, /individual items in such a purchase cannot be separately refunded/i, 'Missing Google multi-product all-or-nothing refund checkpoint.');
requireMatch(gate, /canceling it cancels all entitlements associated with that purchase/i, 'Missing bundled cancellation entitlement rule.');
requireMatch(gate, /never revoke unrelated purchases outside that purchase token\/order/i, 'Missing unrelated-purchase isolation.');
requireMatch(gate, /mandatory consumer remedy.*all-or-nothing multi-product refund mechanics/is, 'Missing mandatory-remedy escalation safeguard.');
requireMatch(gate, /if the product design predictably requires independent refundability, do \*\*not\*\* bundle/i, 'Missing independent-refundability product-design safeguard.');
requireMatch(gate, /distinguish \*\*multi-product\*\* purchases from \*\*multi-quantity\*\* purchases/i, 'Missing multi-product/multi-quantity separation.');
requireMatch(gate, /REFUND_TYPE_QUANTITY_BASED_PARTIAL_REFUND/i, 'Missing quantity-based partial-refund RTDN safeguard.');
requireMatch(gate, /Voided Purchases \/ RTDN signals.*Developer API lookup/is, 'Missing authoritative refund reconciliation rule.');

// TycoonX paid-product invariants.
requireMatch(gate, /Purchased Diamonds remain consumable virtual currency and do not expire solely because time passes/i, 'Purchased Diamond invariant missing.');
requireMatch(gate, /30-Day VIP remains a \*\*one-time, non-renewing 30-day entitlement\*\*/i, '30-Day VIP invariant missing.');
requireMatch(gate, /Lifetime VIP remains a \*\*one-time promotional entitlement available only during selected genuine sales windows\*\*/i, 'Lifetime VIP sales-window invariant missing.');
requireMatch(gate, /may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability/i, 'Lifetime VIP future-availability rule missing.');
requireMatch(gate, /completed purchases are not retroactively repriced/i, 'Completed-purchase non-repricing safeguard missing.');
requireMatch(gate, /keep Google multi-product one-time purchases disabled for TycoonX/i, 'Missing fail-closed release decision.');
requireMatch(gate, /documentation updated September 1, 2026/i, 'Missing September 2026 Google documentation checkpoint.');

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
requireMatch(progress, /100\/100 localized full documents are currently confirmed current/i, 'Localized full-document completion invariant missing.');
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
  console.error('FAIL: TycoonX Google Play multi-product one-time purchase safeguards are incomplete.');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: Google Play multi-product fulfillment, refund/revocation, paid-product, pricing, mandatory-rights, brand, release, and localization safeguards are present.');
}
