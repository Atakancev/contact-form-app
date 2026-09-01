import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function read(rel) {
  return fs.readFileSync(path.join(root, rel), 'utf8');
}

function assertIncludes(text, needle, label) {
  if (!text.includes(needle)) {
    throw new Error(`Missing ${label}: ${needle}`);
  }
}

function assertNotIncludes(text, needle, label) {
  if (text.includes(needle)) {
    throw new Error(`Forbidden ${label}: ${needle}`);
  }
}

const gate = read('TYCOONX_EU_GERMAN_PRICE_PROMOTION_PERSONALIZATION_RELEASE_GATE.md');
const terms = read('tyconx-terms-of-service.md');
const purchases = read('tyconx-purchase-refund-policy.md');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const gateChecks = [
  ['Review date: September 2, 2026', 'current review date'],
  ['PAngV § 3', 'German total-price rule'],
  ['PAngV § 11', 'German prior-price rule'],
  ['goods (`Waren`)', 'PAngV goods-only scope warning'],
  ['must **not automatically claim that PAngV § 11 itself directly governs every TycoonX digital promotion**', 'no overgeneralization of goods rule'],
  ['UWG §§ 5, 5a and 5b', 'German misleading-price fallback'],
  ['Case C-330/23, Aldi Süd', 'CJEU prior-price authority'],
  ['September 26, 2024', 'Aldi Süd judgment date'],
  ['Lifetime VIP remains a **limited-time promotional offering available only during selected genuine sales windows**', 'Lifetime VIP scarcity distinction'],
  ['Article 246a § 1(1) no. 6 EGBGB', 'German personalized-price disclosure'],
  ['Consumer Rights Directive Article 6(1)(ea)', 'EU personalized-price disclosure'],
  ['ordinary regional or dynamic pricing', 'regional/dynamic versus personalized separation'],
  ['predicted willingness to pay', 'automated personalized pricing example'],
  ['Apple storefront prices by country', 'Apple regional-price example'],
  ['Google Play local prices', 'Google regional-price example'],
  ['Xsolla country/currency/VAT differences', 'Xsolla regional-price example'],
  ['provider-generated regular price', 'provider reference-price safeguard'],
  ['Xsolla currently supports discount promotions', 'Xsolla promotion behavior'],
  ['Apple currently supports country/storefront-specific In-App Purchase pricing', 'Apple pricing boundary'],
  ['Google Play currently allows market-specific local prices', 'Google pricing boundary'],
  ['Completed purchases are not retroactively repriced', 'completed-transaction isolation'],
  ['unrelated purchased Diamonds', 'Diamond isolation'],
  ['original one-time 30-Day VIP clock', '30-Day VIP isolation'],
  ['valid Lifetime VIP', 'Lifetime VIP isolation'],
  ['Direct exhortations to children', 'child marketing safeguard'],
  ['20. A promotion complaint does not automatically flag the account as fraud.', 'fraud-separation regression scenario'],
];

for (const [needle, label] of gateChecks) {
  assertIncludes(gate, needle, label);
}

const termsChecks = [
  ['Purchased Diamonds do not expire solely because time passes.', 'purchased-Diamond invariant'],
  ['one-time, non-renewing digital entitlement', '30-Day VIP invariant'],
  ['Lifetime VIP', 'Lifetime VIP invariant'],
  ['limited promotional sales windows', 'Lifetime VIP limited-window invariant'],
  ['A completed one-time purchase is not retroactively repriced', 'completed purchase price invariant'],
  ['Where a jurisdiction imposes a specific reference-price, price-history, or discount-disclosure rule', 'reference-price law hook'],
  ['If a price is personalized on the basis of automated decision-making', 'personalized-price disclosure hook'],
  ['Ordinary country-based, storefront-based, currency-based, tax-based, or generally available regional pricing is not described as personalized pricing', 'regional/personalized distinction'],
  ['obvious pricing or configuration errors', 'obvious-error safeguard'],
  ['Promotions may be limited by time, country, platform, account, purchase history, eligibility, quantity, redemption count', 'promotion eligibility safeguard'],
];

for (const [needle, label] of termsChecks) {
  assertIncludes(terms, needle, label);
}

assertIncludes(purchases, 'Lifetime VIP', 'Purchases Lifetime VIP coverage');
assertIncludes(purchases, '30-Day VIP', 'Purchases 30-Day VIP coverage');
assertIncludes(purchases, 'Diamonds', 'Purchases Diamond coverage');

assertIncludes(progress, '25/25', 'localized hub completion');
assertIncludes(progress, '100/100 localized full documents are currently confirmed current', 'localized full-document completion');
assertIncludes(progress, 'Exact next unfinished locale/document: None', 'no unfinished locale/document');
assertIncludes(progress, 'September 1, 2026', 'full-release invariant');

for (const [label, text] of [
  ['price promotion gate', gate],
  ['canonical Terms', terms],
  ['canonical Purchases & Refunds', purchases],
]) {
  assertNotIncludes(text, 'TyconX', `${label} displayed brand typo`);
  assertNotIncludes(text, 'TycoonX beta', `${label} stale live beta wording`);
}

console.log('TycoonX EU/German price promotion and personalization verification passed.');
