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
requireText(gate, 'having an IP address that differs from the account/storefront country', 'geo-blocking gate');
requireText(gate, 'future Diamond bundles, 30-Day VIP, or Lifetime VIP sales windows may use the currently applicable regional price', 'geo-blocking gate');
requireText(gate, 'a completed one-time purchase is not retroactively repriced', 'geo-blocking gate');
requireText(gate, 'Lifetime VIP may have different prices in different genuine regional sales windows', 'geo-blocking gate');
requireText(gate, 'Apple and Google storefront restrictions must be classified correctly', 'geo-blocking gate');
requireText(gate, 'Xsolla merchant/payment role does not remove CK-Labs interface obligations', 'geo-blocking gate');
requireText(gate, 'No entitlement over-correction', 'geo-blocking gate');
requireText(gate, 'unrelated purchased Diamonds, active 30-Day VIP, or valid Lifetime VIP', 'geo-blocking gate');
requireText(gate, 'Reviewed against the law and official guidance available on 2026-09-01', 'geo-blocking gate');

// Services Directive Article 20(2) and German enforcement from 2026-07-01
requireText(gate, 'Services Directive Article 20(2) and German § 22c DDG require a separate discrimination check', 'Services Directive gate');
requireText(gate, 'Directive 2006/123/EC Article 20(2)', 'Services Directive gate');
requireText(gate, 'objective criteria', 'Services Directive gate');
requireText(gate, '1 July 2026', 'German enforcement date');
requireText(gate, 'Bundesnetzagentur', 'German enforcement authority');
requireText(gate, '§ 22c(2) DDG', 'German DDG implementation');
requireText(gate, 'unjustified **domestic** discrimination', 'domestic discrimination safeguard');
requireText(gate, 'Never mark a regional-pricing rule compliant merely because Geo-Blocking Regulation Article 4(1)(b) applies', 'Article 4 carve-out limitation');
requireText(gate, 'German Article 20(2) public access condition', 'regional test matrix');
requireText(gate, 'Article 20(2) / § 22c DDG assessment', 'regional evidence');
requireText(gate, 'The Article 4(1)(b) copyright-content carve-out also must not be used as a shortcut around Article 20(2) / § 22c DDG.', 'founder-protective Services Directive rule');

// Apple storefront/price authority
requireText(gate, "customer's Apple Account country or region setting determine the storefront", 'Apple storefront authority');
requireText(gate, 'Apple-managed from the base price or manually managed by CK-Labs', 'Apple pricing mode');
requireText(gate, 'Apple may periodically update non-base storefront prices for taxes and foreign-exchange changes', 'Apple tax/FX adjustments');
requireText(gate, 'manually managed storefront becomes CK-Labs\' responsibility', 'Apple manual storefront ownership');
requireText(gate, "Do not compare today's App Store tier to an old purchase", 'Apple no retrospective comparison');

// Google Play current-price authority
requireText(gate, 'queryProductDetailsAsync', 'Google ProductDetails query');
requireText(gate, 'Do not treat cached ProductDetails as long-term price authority', 'Google stale catalog');
requireText(gate, 'selected eligible offer', 'Google offer selection');
requireText(gate, 'offer token', 'Google offer token evidence');
requireText(gate, 'tax-inclusive markets such as Germany', 'Google tax-inclusive pricing');

// Xsolla country/currency authority
requireText(gate, 'Xsolla country-source hierarchy and local-price safety', 'Xsolla country hierarchy');
requireText(gate, 'user.country.value', 'Xsolla explicit country');
requireText(gate, 'X-User-Ip', 'Xsolla IP source');
requireText(gate, 'IP-based country detection is not proof of residence', 'Xsolla IP limitation');
requireText(gate, 'catalog visibility and order creation', 'Xsolla regional restriction stages');
requireText(gate, 'later FX movement does not reprice the historical purchase', 'Xsolla no retrospective FX');

// Cross-channel pricing and transaction isolation
requireText(gate, 'Cross-channel price parity is not promised', 'cross-channel pricing');
requireText(gate, 'transaction-time provider, merchant, price, currency, tax treatment, and entitlement mapping', 'transaction-time evidence');
requireText(gate, 'Apple automatic tax/FX storefront update', 'regional test matrix');
requireText(gate, 'Google Play price changed since the last app session', 'regional test matrix');
requireText(gate, 'Xsolla explicit country value vs IP fallback', 'regional test matrix');
requireText(gate, 'Xsolla default-price currency conversion', 'regional test matrix');

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
forbidText(gate.toLowerCase(), 'tycoonx beta', 'geo-blocking gate release status');

if (failures.length > 0) {
  console.error('TycoonX EU geo-blocking verification failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX EU geo-blocking and regional-pricing invariants verified.');
