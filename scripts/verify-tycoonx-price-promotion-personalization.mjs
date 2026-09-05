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
  ['Review date: September 5, 2026', 'current provider-evidence review date'],
  ['does **not** duplicate the completed substantive rules', 'explicit non-duplication boundary'],
  ['Four-layer price truth chain', 'marketing/catalog/checkout/transaction truth chain'],
  ['German/EU legal scope checkpoint for digital promotions', 'digital promotion legal-scope checkpoint'],
  ['PAngV § 11', 'German PAngV scope checkpoint'],
  ['goods-only statutory 30-day rule', 'goods-only 30-day scope boundary'],
  ['German UWG § 5(5)', 'German briefly-inflated-price safeguard'],
  ['German UWG Annex no. 7', 'German fake limited-time safeguard'],
  ['Provider-generated prices are not automatically CK-Labs discounts', 'provider-price classification safeguard'],
  ['Apple App Store evidence', 'Apple provider evidence'],
  ['global, temporary and custom', 'Apple price-schedule modes'],
  ['Apple tax/FX/storefront adjustment', 'Apple tax/FX classification safeguard'],
  ['Google Play evidence', 'Google provider evidence'],
  ['`DiscountDisplayInfo` is display information only', 'Google discount-display arithmetic safeguard'],
  ['getPriceAmountMicros()', 'Google authoritative localized offer price'],
  ['getFormattedPrice()', 'Google formatted final price'],
  ['offerToken', 'Google offer-token evidence'],
  ['ValidTimeWindow', 'Google offer-validity evidence'],
  ['Xsolla promotion evidence', 'Xsolla provider evidence'],
  ['provider-returned `regular` price is not automatically a legally valid reference price', 'Xsolla reference-price safeguard'],
  ['multiple percentage discounts are not normally additive', 'Xsolla stacking arithmetic safeguard'],
  ['€6.84', 'Xsolla sequential discount example'],
  ['Xsolla timer and stacking test', 'Xsolla timer and stacking QA'],
  ['Cross-channel price comparisons', 'cross-channel comparison evidence'],
  ['Nationality by itself is not proof of regional-price abuse', 'regional-price anti-profiling safeguard'],
  ['Promotion evidence model', 'campaign evidence schema'],
  ['reference-price claim type and basis', 'reference-price evidence field'],
  ['exact countdown source and the behavior after expiry', 'countdown evidence field'],
  ['Stale-cache and propagation failure handling', 'stale price handling'],
  ['Pending, failed, canceled, refunded and reversed payments', 'payment-state separation'],
  ['Entitlement delivery must remain idempotent', 'idempotent entitlement delivery'],
  ['Obvious configuration errors', 'obvious price/catalog error handling'],
  ['Purchased Diamonds do not expire solely because time passes.', 'Diamond time-expiry invariant'],
  ['one-time, non-renewing 30-day entitlement', '30-Day VIP invariant'],
  ['may be withdrawn from future sale, may never return', 'Lifetime VIP limited-window invariant'],
  ['A later decrease does not automatically create a refund, credit or price-match right', 'completed-price decrease rule'],
  ['a later increase does not create an extra charge', 'completed-price increase rule'],
  ['A consumer reporting a price mismatch is not automatically committing fraud', 'complaint/fraud separation'],
  ['Minimum provider-parity regression scenarios', 'provider regression matrix'],
  ['Release evidence packet', 'provider evidence packet'],
];

for (const [needle, label] of providerChecks) assertIncludes(providerGate, needle, label);

const existingSubstantiveChecks = [
  [promotionGate, 'German 30-day prior-price rule: goods-only scope, not a default rule for TycoonX digital entitlements', 'existing PAngV goods-only scope gate'],
  [promotionGate, 'C-330/23, Aldi Süd', 'existing Aldi Süd reference-price gate'],
  [promotionGate, 'UWG § 5(5)', 'existing UWG prior-price-duration gate'],
  [promotionGate, 'advertiser bears the burden of proof', 'existing UWG price-history evidence burden'],
  [promotionGate, 'No fake scarcity or false urgency', 'existing scarcity gate'],
  [promotionGate, 'UWG Annex no. 7', 'existing false time-limitation gate'],
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
  [purchases, 'Lifetime VIP may be sold at different prices in different genuine promotional sales windows', 'Purchases multi-window Lifetime VIP pricing'],
  [purchases, 'Unrelated legitimately purchased value will not be removed merely because another promotion was invalid', 'Purchases promotion-abuse isolation'],
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
