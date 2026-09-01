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

const gate = read('TYCOONX_EU_GERMAN_DIRECT_MARKETING_COMMUNICATIONS_RELEASE_GATE.md');
const privacy = read('tyconx-privacy-policy.md');
const terms = read('tyconx-terms-of-service.md');
const promo = read('TYCOONX_EU_PROMOTION_DARK_PATTERN_RELEASE_GATE.md');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const gateChecks = [
  ['UWG § 7(2)(2)', 'German electronic-marketing baseline'],
  ['UWG § 7(3)', 'existing-customer exception'],
  ['Directive 2002/58/EC Article 13', 'EU ePrivacy electronic-marketing rule'],
  ['GDPR Article 7', 'consent withdrawal'],
  ['GDPR Article 21', 'direct-marketing objection'],
  ['DDG § 6', 'commercial-communication transparency'],
  ['service/transactional communications', 'service versus marketing separation'],
  ['mixed communications', 'mixed-message classification'],
  ['withdrawal must be as easy as giving it', 'easy consent withdrawal'],
  ['suppression', 'unsubscribe suppression'],
  ['purchased Diamonds', 'Diamond isolation'],
  ['one-time 30-Day VIP', '30-Day VIP isolation'],
  ['Lifetime VIP', 'Lifetime VIP isolation'],
  ['Apple', 'Apple role separation'],
  ['POST_NOTIFICATIONS', 'Android notification permission'],
  ['Xsolla', 'Xsolla role separation'],
  ['marketing opt-out', 'marketing opt-out neutrality'],
  ['account-compromise warning', 'security communication separation'],
  ['provider migration', 'provider migration suppression'],
  ['selected sales windows', 'Lifetime VIP selected sales windows'],
  ['one-time and non-renewing', '30-Day VIP non-renewal'],
  ['child-directed purchase exhortations', 'minor marketing protection'],
  ['September 1, 2026', 'full-release/current review date'],
];

for (const [needle, label] of gateChecks) {
  assertIncludes(gate, needle, label);
}

assertIncludes(privacy, 'Where consent is legally required, we ask for it separately.', 'Privacy consent separation');
assertIncludes(privacy, 'certain marketing, cookies, analytics', 'Privacy marketing consent category');
assertIncludes(privacy, 'withdraw consent at any time for future processing', 'Privacy consent withdrawal');
assertIncludes(terms, 'Lifetime VIP', 'canonical Lifetime VIP wording');
assertIncludes(terms, 'one-time, non-renewing digital entitlement', 'canonical 30-Day VIP wording');
assertIncludes(terms, 'Purchased Diamonds do not expire solely because time passes.', 'canonical purchased Diamond rule');
assertIncludes(promo, 'Lifetime VIP windows must be real', 'promotion-gate sales-window rule');
assertIncludes(promo, 'No fake scarcity or false urgency', 'promotion-gate truthful urgency rule');

assertIncludes(progress, 'Completed localized hubs: 25/25', 'localized hub completion');
assertIncludes(progress, 'Completed full localized documents: 100/100', 'localized full-document completion');
assertIncludes(progress, 'Exact next unfinished locale/document: **None**', 'no unfinished locale/document');
assertIncludes(progress, 'September 1, 2026', 'full release invariant');

for (const [label, text] of [
  ['direct-marketing gate', gate],
  ['canonical Privacy Policy', privacy],
  ['canonical Terms', terms],
  ['promotion gate', promo],
]) {
  assertNotIncludes(text, 'TyconX', `${label} displayed brand typo`);
  assertNotIncludes(text, 'TycoonX beta', `${label} stale live beta wording`);
}

console.log('TycoonX direct-marketing legal gate verification passed.');
