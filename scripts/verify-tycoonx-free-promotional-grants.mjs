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

const gate = read('TYCOONX_FREE_PROMOTIONAL_GOODWILL_GRANT_RELEASE_GATE.md');
const terms = read('tyconx-terms-of-service.md');
const purchases = read('tyconx-purchase-refund-policy.md');
const promo = read('TYCOONX_EU_PROMOTION_DARK_PATTERN_RELEASE_GATE.md');
const marketing = read('TYCOONX_EU_GERMAN_DIRECT_MARKETING_COMMUNICATIONS_RELEASE_GATE.md');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const gateChecks = [
  ['Last reviewed: September 4, 2026', 'current review date'],
  ['explicit provenance', 'grant provenance'],
  ['support_goodwill', 'support goodwill source'],
  ['idempotency key', 'grant idempotency'],
  ['Purchased Diamonds do not expire solely because time passes.', 'purchased Diamond non-expiry'],
  ['promotional-Diamond expiry rule must never be applied to the purchased portion', 'paid/promotional Diamond isolation'],
  ['one-time, non-renewing 30-day entitlement', '30-Day VIP definition'],
  ['selected genuine sales windows', 'Lifetime VIP sales-window definition'],
  ['may never return', 'Lifetime VIP future availability'],
  ['free grant does not prove that Lifetime VIP is currently on sale', 'Lifetime VIP grant/sale separation'],
  ['Point 20 of Annex I to Directive 2005/29/EC', 'EU free-claim rule'],
  ['German UWG Annex', 'German free-claim rule'],
  ['free to download; optional in-game purchases available', 'safer game free wording'],
  ['Point 19 of Annex I to Directive 2005/29/EC', 'prize-promotion rule'],
  ['fake winners', 'giveaway truthfulness'],
  ['hidden confiscation rules', 'promotion condition safeguard'],
  ['duplicate technical grant', 'duplicate-grant distinction'],
  ['compromised account', 'account compromise safeguard'],
  ['Apple App Store', 'Apple separation'],
  ['purchased through In-App Purchase may not expire', 'Apple purchased-currency rule'],
  ['Google Play', 'Google separation'],
  ['Xsolla webshop', 'Xsolla separation'],
  ['promo applied', 'client-side promo non-authority'],
  ['refund or chargeback', 'refund/chargeback provenance'],
  ['mandatory refund/conformity/withdrawal remedy', 'mandatory remedy separation'],
  ['September 1, 2026', 'full release date'],
  ['must not imply TycoonX is a beta', 'test/review beta prohibition'],
  ['optional marketing consent', 'marketing-consent separation'],
  ['regional eligibility', 'regional promotion rule'],
  ['Do not create a fake €0 sale', 'accounting reality rule'],
  ['No canonical Terms, Purchases & Refunds, Privacy, or Community Standards wording needs to change', 'no canonical meaning change'],
];

for (const [needle, label] of gateChecks) {
  assertIncludes(gate, needle, label);
}

const canonicalChecks = [
  [terms, 'Purchased Diamonds do not expire solely because time passes.', 'Terms purchased Diamond non-expiry'],
  [terms, 'one-time, non-renewing digital entitlement', 'Terms 30-Day VIP non-renewal'],
  [terms, 'limited promotional sales windows', 'Terms Lifetime VIP limited sales windows'],
  [terms, 'may choose never to offer it again', 'Terms Lifetime VIP may never return'],
  [terms, 'Promotional, gifted, event, compensation, test, review, complimentary, or other free grants', 'Terms free-grant provenance concept'],
  [purchases, 'Promotional, gifted, event, compensation, test, review, or free Diamonds may have separate clearly disclosed conditions', 'Purchases promotional Diamond conditions'],
  [purchases, 'one-time, non-renewing entitlement', 'Purchases 30-Day VIP non-renewal'],
  [purchases, 'selected limited promotional sales windows', 'Purchases Lifetime VIP sales windows'],
  [purchases, 'A voluntary goodwill credit, free extension, discretionary refund, bonus, compensation, promotional benefit, or tester/review grant', 'Purchases goodwill rule'],
  [purchases, 'Unrelated legitimately purchased value will not be removed merely because another promotion was invalid.', 'Purchases unrelated value protection'],
  [promo, 'Lifetime VIP windows must be real', 'promotion gate Lifetime window truthfulness'],
  [promo, 'No fake scarcity or false urgency', 'promotion gate anti-dark-pattern rule'],
  [marketing, 'marketing opt-out', 'marketing gate opt-out separation'],
];

for (const [text, needle, label] of canonicalChecks) {
  assertIncludes(text, needle, label);
}

assertIncludes(progress, 'exists for all **25/25** target locales', 'localized hub completion');
assertIncludes(progress, '**100/100 localized full documents are currently confirmed current**', 'localized full-document completion');
assertIncludes(progress, '**Exact next unfinished locale/document: None.', 'no unfinished locale/document');
assertIncludes(progress, 'September 1, 2026', 'full release invariant');

for (const [label, text] of [
  ['free/promotional grant gate', gate],
  ['canonical Terms', terms],
  ['canonical Purchases policy', purchases],
  ['promotion gate', promo],
  ['direct-marketing gate', marketing],
]) {
  assertNotIncludes(text, 'TyconX', `${label} displayed brand typo`);
  assertNotIncludes(text, 'TycoonX beta', `${label} stale live beta wording`);
}

console.log('TycoonX free/promotional/goodwill grant legal gate verification passed.');
