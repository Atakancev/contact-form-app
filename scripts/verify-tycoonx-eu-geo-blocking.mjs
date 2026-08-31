import fs from 'node:fs';

const gatePath = 'TYCOONX_EU_GEO_BLOCKING_REGIONAL_PRICING_RELEASE_GATE.md';
const termsPath = 'tyconx-terms-of-service.md';
const progressPath = 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md';

const gate = fs.readFileSync(gatePath, 'utf8');
const terms = fs.readFileSync(termsPath, 'utf8');
const progress = fs.readFileSync(progressPath, 'utf8');

const failures = [];

function requireText(haystack, needle, label) {
  if (!haystack.includes(needle)) failures.push(`${label}: missing ${JSON.stringify(needle)}`);
}

function forbidText(haystack, needle, label) {
  if (haystack.includes(needle)) failures.push(`${label}: forbidden ${JSON.stringify(needle)}`);
}

requireText(gate, 'Regulation (EU) 2018/302', 'geo-blocking gate');
requireText(gate, 'Article 3 online-interface access applies separately', 'geo-blocking gate');
requireText(gate, 'Article 4(1)(b)', 'geo-blocking gate');
requireText(gate, 'online games', 'geo-blocking gate');
requireText(gate, 'Accepted payment methods cannot be discriminated against merely by EU origin', 'geo-blocking gate');
requireText(gate, 'Article 5', 'geo-blocking gate');
requireText(gate, 'Do not automatically force an EU customer', 'geo-blocking gate');
requireText(gate, 'originally requested version accessible', 'geo-blocking gate');
requireText(gate, 'Viewing another regional price is not the same as being eligible to purchase it', 'geo-blocking gate');
requireText(gate, 'using an IP address that differs from the account/storefront country', 'geo-blocking gate');
requireText(gate, 'future Diamond bundles, 30-Day VIP, or Lifetime VIP sales windows may use the currently applicable regional price', 'geo-blocking gate');
requireText(gate, 'a completed one-time purchase is not retroactively repriced', 'geo-blocking gate');
requireText(gate, 'Lifetime VIP may have different prices in different genuine regional sales windows', 'geo-blocking gate');
requireText(gate, 'Apple and Google storefront restrictions must be classified correctly', 'geo-blocking gate');
requireText(gate, 'Xsolla merchant/payment role does not remove CK-Labs interface obligations', 'geo-blocking gate');
requireText(gate, 'No entitlement over-correction', 'geo-blocking gate');
requireText(gate, 'unrelated purchased Diamonds, active 30-Day VIP, or valid Lifetime VIP', 'geo-blocking gate');
requireText(gate, 'Reviewed against the law and official guidance available on 2026-08-31', 'geo-blocking gate');

requireText(terms, 'Prices may differ between Apple App Store, Google Play, the official TycoonX web shop, countries, regions, currencies, and separate promotional sales windows.', 'canonical Terms');
requireText(terms, 'A completed one-time purchase is not retroactively repriced', 'canonical Terms');
requireText(terms, 'Users must not falsify country, tax location, payment information, eligibility, or account information', 'canonical Terms');
requireText(terms, 'Lifetime VIP may be sold at different prices in different genuine sales windows.', 'canonical Terms');
requireText(terms, 'Nothing in these Terms excludes, limits, or overrides rights that cannot legally be excluded or limited', 'canonical Terms');

requireText(progress, '25/25', 'localization progress');
requireText(progress, '100/100 localized full documents are currently confirmed current', 'localization progress');
requireText(progress, 'Exact next unfinished locale/document: None.', 'localization progress');

forbidText(gate, 'TyconX', 'geo-blocking gate displayed branding');
forbidText(gate.toLowerCase(), 'tycoonx is in beta', 'geo-blocking gate release status');

if (failures.length > 0) {
  console.error('TycoonX EU geo-blocking verification failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX EU geo-blocking and regional-pricing invariants verified.');
