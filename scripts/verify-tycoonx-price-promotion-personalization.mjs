import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function read(rel) {
  return fs.readFileSync(path.join(root, rel), 'utf8');
}

function assertIncludes(text, needle, label) {
  if (!text.includes(needle)) throw new Error(`Missing ${label}: ${needle}`);
}

function assertNotIncludes(text, needle, label) {
  if (text.includes(needle)) throw new Error(`Forbidden ${label}: ${needle}`);
}

const providerGate = read('TYCOONX_EU_GERMAN_PRICE_PROMOTION_PERSONALIZATION_RELEASE_GATE.md');
const promotionGate = read('TYCOONX_EU_PROMOTION_DARK_PATTERN_RELEASE_GATE.md');
const personalizedGate = read('TYCOONX_EU_PERSONALIZED_PRICING_AUTOMATED_OFFERS_RELEASE_GATE.md');
const terms = read('tyconx-terms-of-service.md');
const purchases = read('tyconx-purchase-refund-policy.md');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const providerChecks = [
  ['Review date: September 2, 2026', 'current provider-evidence review date'],
  ['does **not** duplicate the completed substantive rules', 'explicit non-duplication boundary'],
  ['Four-layer price truth chain', 'marketing/catalog/checkout/transaction truth chain'],
  ['Provider-generated prices are not automatically CK-Labs discounts', 'provider-price classification safeguard'],
  ['Apple App Store evidence', 'Apple provider evidence'],
  ['Google Play evidence', 'Google provider evidence'],
  ['Xsolla promotion evidence', 'Xsolla provider evidence'],
  ['provider-returned `regular` price is not automatically a legally valid reference price', 'Xsolla reference-price safeguard'],
  ['Xsolla timer and stacking test', 'Xsolla timer and stacking QA'],
  ['Cross-channel price comparisons', 'cross-channel comparison evidence'],
  ['Stale-cache and propagation failure handling', 'stale price handling'],
  ['Pending, failed, canceled, refunded and reversed payments', 'payment-state separation'],
  ['Entitlement delivery must remain idempotent', 'idempotent entitlement delivery'],
  ['Obvious configuration errors', 'obvious price/catalog error handling'],
  ['unrelated legitimately purchased Diamonds', 'Diamond isolation'],
  ['original one-time 30-Day VIP period', '30-Day VIP isolation'],
  ['closing a sales window does not expire an already valid Lifetime VIP', 'Lifetime VIP isolation'],
  ['A consumer reporting a price mismatch is not automatically committing fraud', 'complaint/fraud separation'],
  ['Minimum provider-parity regression scenarios', 'provider regression matrix'],
  ['Release evidence packet', 'provider evidence packet'],
];

for (const [needle, label] of providerChecks) assertIncludes(providerGate, needle, label);

const existingSubstantiveChecks = [
  [promotionGate, 'German 30-day prior-price rule: apply it only where it actually applies', 'existing PAngV scope gate'],
  [promotionGate, 'C-330/23, Aldi Süd', 'existing Aldi Süd reference-price gate'],
  [promotionGate, 'No fake scarcity or false urgency', 'existing scarcity gate'],
  [promotionGate, 'No drip pricing', 'existing total-price/dark-pattern gate'],
  [personalizedGate, 'EU Personalized Pricing & Automated Offers Release Gate', 'existing personalized-pricing gate'],
  [personalizedGate, 'Article 6(1)(ea)', 'existing EU personalized-price disclosure'],
  [personalizedGate, 'Article 246a § 1(1)', 'existing German personalized-price disclosure'],
  [personalizedGate, 'Personalized pricing is not the same as dynamic or regional pricing', 'existing regional/personalized distinction'],
];

for (const [text, needle, label] of existingSubstantiveChecks) assertIncludes(text, needle, label);

const canonicalChecks = [
  [terms, 'Purchased Diamonds do not expire solely because time passes.', 'Terms purchased-Diamond invariant'],
  [terms, 'one-time, non-renewing digital entitlement', 'Terms 30-Day VIP invariant'],
  [terms, 'limited promotional sales windows', 'Terms Lifetime VIP limited-window invariant'],
  [terms, 'A completed one-time purchase is not retroactively repriced', 'Terms completed-purchase invariant'],
  [terms, 'obvious pricing or configuration errors', 'Terms pricing-error safeguard'],
  [purchases, 'Diamonds', 'Purchases Diamond coverage'],
  [purchases, '30-Day VIP', 'Purchases 30-Day VIP coverage'],
  [purchases, 'Lifetime VIP', 'Purchases Lifetime VIP coverage'],
  [purchases, 'final total price and currency displayed by the applicable checkout', 'Purchases final checkout price rule'],
];

for (const [text, needle, label] of canonicalChecks) assertIncludes(text, needle, label);

assertIncludes(progress, '25/25', 'localized hub completion');
assertIncludes(progress, '100/100 localized full documents are currently confirmed current', 'localized full-document completion');
assertIncludes(progress, 'Exact next unfinished locale/document: None', 'no unfinished locale/document');
assertIncludes(progress, 'September 1, 2026', 'full-release invariant');

for (const [label, text] of [
  ['provider evidence gate', providerGate],
  ['promotion gate', promotionGate],
  ['personalized-pricing gate', personalizedGate],
  ['canonical Terms', terms],
  ['canonical Purchases & Refunds', purchases],
]) {
  assertNotIncludes(text, 'TyconX', `${label} displayed brand typo`);
  assertNotIncludes(text, 'TycoonX beta', `${label} stale live beta wording`);
}

console.log('TycoonX provider price/promotion integration verification passed.');
