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

const gate = read('TYCOONX_REVIEW_RATING_INTEGRITY_RELEASE_GATE.md');
const grants = read('TYCOONX_FREE_PROMOTIONAL_GOODWILL_GRANT_RELEASE_GATE.md');
const terms = read('tyconx-terms-of-service.md');
const purchases = read('tyconx-purchase-refund-policy.md');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const gateChecks = [
  ['Review date: September 4, 2026', 'review date'],
  ['reviewer grant means access/value used for legitimate platform review', 'review-grant interpretation'],
  ['does **not** mean a reward for posting, changing, deleting, or improving', 'consumer-review reward exclusion'],
  ['never exchange TycoonX value for a store rating or review', 'review reward prohibition'],
  ['Rate 5 stars and get 50 Diamonds', 'concrete prohibited reward example'],
  ['never gate ordinary TycoonX access on review activity', 'review access gate prohibition'],
  ['3.2.2(x)', 'Apple forced-review access rule'],
  ['5.6.1', 'Apple review prompt/reply rule'],
  ['5.6.3', 'Apple discovery-fraud rule'],
  ['custom review prompts are disallowed', 'Apple custom prompt rule'],
  ['paid, incentivized, filtered, or fake feedback', 'Apple review-manipulation boundary'],
  ['User Ratings, Reviews, and Installs', 'Google review policy'],
  ['fraudulent or incentivized reviews and ratings', 'Google incentivized review prohibition'],
  ['feedback routing must not become review filtering', 'review filtering safeguard'],
  ['German **UWG § 5b(3)**', 'German review disclosure rule'],
  ['point 23b of Directive 2005/29/EC', 'EU review authenticity rule'],
  ['point 23c of Directive 2005/29/EC', 'EU fake review rule'],
  ['reasonable and proportionate steps', 'review verification standard'],
  ['remuneration for posting positive reviews', 'paid positive review safeguard'],
  ['reviewer/tester grant` has a narrow permitted meaning', 'reviewer/tester grant boundary'],
  ['Apple App Review access', 'Apple reviewer access example'],
  ['not a reward for a consumer store rating/review', 'review source-code boundary'],
  ['No Diamonds may be minted merely because a store review was posted.', 'Diamond review isolation'],
  ['one-time, non-renewing 30-day entitlement', '30-Day VIP invariant'],
  ['selected genuine sales windows', 'Lifetime VIP sales-window invariant'],
  ['may never return', 'Lifetime VIP availability invariant'],
  ['Apple App Store, Google Play, and the CK-Labs TycoonX webshop using Xsolla', 'payment-channel separation'],
  ['A negative review is not a chargeback.', 'chargeback separation'],
  ['compromised account', 'account-compromise separation'],
  ['Do not offer children Diamonds, VIP, discounts, contest entry, or other value for ratings/reviews.', 'minor safeguard'],
  ['page last updated June 8, 2026', 'Apple source freshness'],
  ['does not change the current canonical Terms of Service', 'no canonical meaning change'],
];

for (const [needle, label] of gateChecks) {
  assertIncludes(gate, needle, label);
}

assertIncludes(grants, 'tester/review grants', 'existing grant gate review provenance');
assertIncludes(grants, 'test/review grants', 'existing test/review operational section');
assertIncludes(grants, 'must not imply TycoonX is a beta', 'full-release grant wording');

assertIncludes(terms, 'Purchased Diamonds do not expire solely because time passes.', 'Terms purchased Diamond non-expiry');
assertIncludes(terms, 'one-time, non-renewing digital entitlement', 'Terms 30-Day VIP invariant');
assertIncludes(terms, 'limited promotional sales windows', 'Terms Lifetime VIP window rule');
assertIncludes(terms, 'may choose never to offer Lifetime VIP again', 'Terms Lifetime VIP may-never-return rule');
assertIncludes(purchases, 'one-time, non-renewing entitlement', 'Purchases 30-Day VIP invariant');
assertIncludes(purchases, 'selected limited promotional sales windows', 'Purchases Lifetime VIP window rule');
assertIncludes(purchases, 'tester/review grant', 'Purchases tester/reviewer grant concept');

assertIncludes(progress, 'exists for all **25/25** target locales', 'localized hub completion');
assertIncludes(progress, '**100/100 localized full documents are currently confirmed current**', 'localized full-document completion');
assertIncludes(progress, '**Exact next unfinished locale/document: None.', 'no unfinished locale/document');
assertIncludes(progress, 'September 1, 2026', 'full release invariant');

for (const [label, text] of [
  ['review integrity gate', gate],
  ['free/promotional grant gate', grants],
  ['canonical Terms', terms],
  ['canonical Purchases policy', purchases],
]) {
  assertNotIncludes(text, 'TyconX', `${label} displayed brand typo`);
  assertNotIncludes(text, 'TycoonX beta', `${label} stale live beta wording`);
}

console.log('TycoonX review/rating integrity legal gate verification passed.');
