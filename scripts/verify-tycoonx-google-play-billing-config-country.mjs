import fs from 'node:fs';

const gatePath = 'TYCOONX_GOOGLE_PLAY_BILLING_CONFIG_COUNTRY_PRIVACY_RELEASE_GATE.md';
const termsPath = 'tyconx-terms-of-service.md';
const privacyPath = 'tyconx-privacy-policy.md';
const progressPath = 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md';

const gate = fs.readFileSync(gatePath, 'utf8');
const terms = fs.readFileSync(termsPath, 'utf8');
const privacy = fs.readFileSync(privacyPath, 'utf8');
const progress = fs.readFileSync(progressPath, 'utf8');

const failures = [];

function requireText(haystack, needle, label) {
  if (!haystack.includes(needle)) failures.push(`${label}: missing ${JSON.stringify(needle)}`);
}

function forbidText(haystack, needle, label) {
  if (haystack.includes(needle)) failures.push(`${label}: forbidden ${JSON.stringify(needle)}`);
}

// Current Google Play BillingConfig handling.
requireText(gate, 'getBillingConfigAsync()', 'BillingConfig gate');
requireText(gate, 'country the user currently uses for Google Play', 'Play Country meaning');
requireText(gate, 'designed for one-time use', 'Google one-time-use rule');
requireText(gate, 'can change at any time', 'Google changeability rule');
requireText(gate, 'do **not** persist the returned `countryCode`', 'no persistent BillingConfig storage');
requireText(gate, 'must not be used to create or enhance a TycoonX profile', 'profile restriction');
requireText(gate, 'advertising or marketing', 'marketing restriction');
requireText(gate, 'ISO-3166-1 alpha-2', 'country code format');
requireText(gate, 'A screenshot, debug log, analytics event, or support export containing the value is still storage.', 'logging restriction');

// Regional-pricing and evidence separation.
requireText(gate, 'Play Country is not transaction or entitlement authority', 'authority separation');
requireText(gate, 'current user-eligible `ProductDetails` / offer data', 'fresh ProductDetails rule');
requireText(gate, 'authoritative purchase-token verification controls fulfillment', 'purchase verification');
requireText(gate, 'Do not substitute Play Country for legal residence, tax location, or identity', 'country concept separation');
requireText(gate, 'A country mismatch is a risk signal at most, not proof of abuse', 'abuse-evidence boundary');
requireText(gate, 'do not retain it "just in case"', 'no dispute-hoarding rule');
requireText(gate, 'Do not attempt to reconstruct a historical `BillingConfig` value later', 'no reconstructed historical evidence');
requireText(gate, 'query current eligible product/offer information close to the purchase flow', 'fresh purchase flow');
requireText(gate, 'do not silently fall back to a stored historical `BillingConfig` country', 'failure handling');

// Product invariants.
requireText(gate, 'Lifetime VIP remains a limited-time promotional one-time entitlement', 'Lifetime VIP limited sale');
requireText(gate, 'may be withdrawn from sale, may never return', 'Lifetime VIP future availability');
requireText(gate, 'a stored or stale country value must never reopen a closed Lifetime VIP sale', 'Lifetime VIP fail closed');
requireText(gate, 'Purchased Diamonds remain consumable virtual currency and do not expire merely because time passes', 'Diamond invariant');
requireText(gate, 'One-time 30-Day VIP remains a non-renewing entitlement lasting exactly 30 consecutive days', '30-Day VIP invariant');
requireText(gate, 'must not confiscate unrelated legitimate Diamonds, 30-Day VIP, or Lifetime VIP', 'unrelated entitlement isolation');

// Privacy/data protection.
requireText(gate, 'GDPR Article 5', 'GDPR Article 5');
requireText(gate, 'Article 25', 'GDPR Article 25');
requireText(gate, 'Article 32', 'GDPR Article 32');
requireText(gate, 'no account-table or profile-table field for this Play value', 'database-persistence prohibition');
requireText(gate, 'no analytics user property containing it', 'analytics-persistence prohibition');
requireText(gate, 'no automated fraud score that persists it', 'fraud-score persistence prohibition');

// Regression coverage.
requireText(gate, 'Play Country changes between sessions', 'regression matrix');
requireText(gate, 'Play Country differs from IP', 'regression matrix');
requireText(gate, '`getBillingConfigAsync()` failure/null response', 'regression matrix');
requireText(gate, 'Lifetime VIP campaign closed', 'regression matrix');
requireText(gate, 'Telemetry inspection', 'regression matrix');

// Canonical legal safeguards remain in place without a material player-facing change.
requireText(terms, 'Prices may differ between Apple App Store, Google Play, the official TycoonX web shop, countries, regions, currencies, and separate promotional sales windows.', 'canonical Terms');
requireText(terms, 'A completed one-time purchase is not retroactively repriced', 'canonical Terms');
requireText(terms, 'Users must not falsify country, tax location, payment information, eligibility, or account information', 'canonical Terms');
requireText(terms, 'Nothing in these Terms excludes, limits, or overrides rights that cannot legally be excluded or limited', 'canonical Terms');

requireText(privacy, 'We do not sell personal data.', 'canonical Privacy');
requireText(privacy, 'data minimization', 'canonical Privacy');
requireText(privacy, 'Apple, Google, Xsolla, or other authorized payment or platform providers', 'canonical Privacy');
requireText(privacy, 'risk signals or investigation records', 'canonical Privacy');

// Localization/release invariants.
requireText(progress, '25/25', 'localization progress');
requireText(progress, 'All 25 target locales and all 100 localized full documents are current.', 'localization progress');
requireText(progress, 'Exact next unfinished locale/document: None.', 'localization queue');
requireText(progress, 'TycoonX went to full release on **September 1, 2026**.', 'release status');

forbidText(gate, 'TyconX', 'displayed branding');
forbidText(gate.toLowerCase(), 'tycoonx beta', 'release status');
forbidText(gate.toLowerCase(), 'tycoonx is in beta', 'release status');

if (failures.length > 0) {
  console.error('TycoonX Google Play BillingConfig country verification failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX Google Play BillingConfig country/privacy invariants verified.');
