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

const gate = read('TYCOONX_EU_GERMAN_DEVICE_STORAGE_TRACKING_CONSENT_RELEASE_GATE.md');
const privacy = read('tyconx-privacy-policy.md');
const terms = read('tyconx-terms-of-service.md');
const marketing = read('TYCOONX_EU_GERMAN_DIRECT_MARKETING_COMMUNICATIONS_RELEASE_GATE.md');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const gateChecks = [
  ['TDDDG § 25(1)', 'German terminal-device consent baseline'],
  ['TDDDG § 25(2)', 'German statutory device-access exceptions'],
  ['strictly necessary', 'strict necessity test'],
  ['Planet49', 'device-access scope reference'],
  ['not itself obviously personal data', 'TDDDG/GDPR layer separation'],
  ['optional analytics/advertising SDK', 'pre-consent SDK blocking'],
  ['fail-closed', 'unknown consent state handling'],
  ['Reject all', 'first-layer rejection path'],
  ['Withdrawal must be as easy as giving consent', 'easy withdrawal'],
  ['AppTrackingTransparency', 'Apple ATT gate'],
  ['must not substitute hashed email/device fingerprinting', 'ATT anti-circumvention scenario'],
  ['App Store privacy', 'Apple privacy disclosure reconciliation'],
  ['Google Play User Data', 'Google Play data policy gate'],
  ['prominent in-app disclosure and affirmative consent', 'Google prominent disclosure and consent'],
  ['Google Consent Mode', 'Google consent tooling separation'],
  ['Xsolla checkout has a separate provider privacy boundary', 'Xsolla provider boundary'],
  ['Xsolla Cookie Policy', 'Xsolla cookie-policy reference'],
  ['purchased Diamonds', 'Diamond entitlement isolation'],
  ['one-time, non-renewing entitlement', '30-Day VIP product distinction'],
  ['Lifetime VIP is a limited-time promotional offering', 'Lifetime VIP product distinction'],
  ['consent-manager failures fail closed', 'CMP outage rule'],
  ['Provider replacement requires a fresh data-flow review', 'provider migration review'],
  ['parent approves a purchase', 'minor purchase/consent separation'],
  ['September 1, 2026', 'full-release date'],
  ['2026-09-02', 'current review date'],
];

for (const [needle, label] of gateChecks) {
  assertIncludes(gate, needle, label);
}

assertIncludes(privacy, 'Where consent is legally required, we ask for it separately.', 'Privacy consent separation');
assertIncludes(privacy, 'certain marketing, cookies, analytics, or other optional features', 'Privacy optional-consent category');
assertIncludes(privacy, 'withdraw consent at any time for future processing', 'Privacy consent withdrawal');
assertIncludes(privacy, 'analytics information supplied by integrated service providers', 'Privacy integrated analytics disclosure');
assertIncludes(privacy, 'Apple, Google, Xsolla', 'Privacy provider-role coverage');

assertIncludes(terms, 'Purchased Diamonds do not expire solely because time passes.', 'canonical purchased-Diamond rule');
assertIncludes(terms, 'one-time, non-renewing digital entitlement', 'canonical 30-Day VIP rule');
assertIncludes(terms, 'Lifetime VIP', 'canonical Lifetime VIP rule');

assertIncludes(marketing, 'technical notification permission', 'marketing technical/legal permission separation');
assertIncludes(marketing, 'legal direct-marketing permission', 'marketing legal permission separation');

assertIncludes(progress, '25/25', 'localized hub completion');
assertIncludes(progress, '100/100 localized full documents are currently confirmed current', 'localized full-document completion');
assertIncludes(progress, 'Exact next unfinished locale/document: None', 'no unfinished locale/document');
assertIncludes(progress, 'September 1, 2026', 'full-release invariant');

for (const [label, text] of [
  ['device tracking consent gate', gate],
  ['canonical Privacy Policy', privacy],
  ['canonical Terms', terms],
  ['direct-marketing gate', marketing],
]) {
  assertNotIncludes(text, 'TyconX', `${label} displayed brand typo`);
  assertNotIncludes(text, 'TycoonX beta', `${label} stale live beta wording`);
}

console.log('TycoonX EU/German device storage and tracking consent verification passed.');
