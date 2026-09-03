import fs from 'node:fs';

const gatePath = 'TYCOONX_EU_SANCTIONS_PAYMENT_RESTRICTIONS_RELEASE_GATE.md';
const termsPath = 'tyconx-terms-of-service.md';
const purchasesPath = 'tyconx-purchase-refund-policy.md';
const geoPath = 'TYCOONX_EU_GEO_BLOCKING_REGIONAL_PRICING_RELEASE_GATE.md';
const xsollaPath = 'TYCOONX_XSOLLA_REFUND_CHARGEBACK_RELEASE_GATE.md';
const progressPath = 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md';

const gate = fs.readFileSync(gatePath, 'utf8');
const terms = fs.readFileSync(termsPath, 'utf8');
const purchases = fs.readFileSync(purchasesPath, 'utf8');
const geo = fs.readFileSync(geoPath, 'utf8');
const xsolla = fs.readFileSync(xsollaPath, 'utf8');
const progress = fs.readFileSync(progressPath, 'utf8');

const failures = [];

function requireText(haystack, needle, label) {
  if (!haystack.includes(needle)) failures.push(`${label}: missing ${JSON.stringify(needle)}`);
}

function requirePattern(haystack, pattern, label) {
  if (!pattern.test(haystack)) failures.push(`${label}: missing pattern ${pattern}`);
}

function forbidText(haystack, needle, label) {
  if (haystack.includes(needle)) failures.push(`${label}: forbidden ${JSON.stringify(needle)}`);
}

// Current EU/German sanctions baseline and anti-overblocking safeguards.
requireText(gate, 'Council Regulation (EU) No 269/2014 Article 2', 'sanctions gate');
requireText(gate, 'directly or indirectly', 'sanctions gate');
requireText(gate, 'owned or controlled', 'sanctions ownership/control');
requireText(gate, 'circumvention', 'sanctions anti-circumvention');
requireText(gate, 'risk-based', 'sanctions proportionality');
requireText(gate, 'does **not** by itself mean every TycoonX consumer connected with that country must be blocked', 'country overblocking safeguard');
requireText(gate, "nationality, residence, language, current IP address, Apple storefront, Google Play country, Xsolla country", 'identity-signal limitation');
requireText(gate, 'A provider decline is not proof of fraud.', 'provider decline safeguard');
requireText(gate, 'Deutsche Bundesbank', 'German financial sanctions authority');
requireText(gate, 'BAFA', 'German embargo/export authority');
requireText(gate, '2026-09-03', 'current review checkpoint');

// Data protection and state separation.
requireText(gate, 'GDPR lawful basis', 'GDPR sanctions screening');
requireText(gate, 'collect only the additional data reasonably necessary', 'data minimization');
requireText(gate, '`provider_unavailable`', 'payment-state model');
requireText(gate, '`compliance_review`', 'payment-state model');
requireText(gate, '`legally_prohibited`', 'payment-state model');
requireText(gate, '`payment_pending`', 'payment-state model');
requireText(gate, '`payment_completed`', 'payment-state model');
requireText(gate, '`payment_reversed_or_refunded`', 'payment-state model');

// Platform/provider allocation.
requireText(gate, "customer's Apple Account country or region determines the storefront", 'Apple storefront authority');
requireText(gate, 'users who previously downloaded an app from a country that is later deselected can generally continue receiving updates', 'Apple prior-user continuity');
requireText(gate, 'most specific current Google rule', 'Google country-rule specificity');
requireText(gate, 'Users can only access paid apps and games that have already been downloaded', 'Google Russia/Belarus nuance');
requireText(gate, '`0003-0003`', 'Xsolla restricted-country error');
requireText(gate, "Do not treat Xsolla's IP-derived country as conclusive proof of residence", 'Xsolla IP limitation');
requireText(gate, 'provider-controlled restriction', 'provider/legal distinction');

// Product and entitlement isolation.
requireText(gate, 'Purchased Diamonds are a TycoonX digital entitlement.', 'Diamonds');
requireText(gate, 'does not automatically confiscate Diamonds validly obtained before the restriction', 'Diamond continuity');
requireText(gate, 'one-time 30-day entitlement', '30-Day VIP product meaning');
requireText(gate, 'does not convert it into a recurring subscription', '30-Day VIP non-recurring');
requireText(gate, 'Lifetime VIP is a one-time entitlement offered only during selected genuine promotional sales windows.', 'Lifetime VIP limited-sale meaning');
requireText(gate, 'may be withdrawn from future sale, may never return', 'Lifetime VIP future availability');
requireText(gate, 'add an expiry date to a valid Lifetime VIP', 'Lifetime VIP entitlement isolation');
requireText(gate, 'mandatory consumer remedies', 'mandatory-rights safeguard');

// Refund, pricing, anti-circumvention, and account safeguards.
requireText(gate, 'never invent a chargeback because payment was blocked before completion', 'chargeback classification');
requireText(gate, 'do not use a sanctions label as a pretext for misleading regional price discrimination', 'regional-pricing safeguard');
requireText(gate, 'the final total price shown before confirmation governs the completed transaction', 'checkout price authority');
requireText(gate, 'use a VPN specifically to bypass a legal restriction', 'circumvention support prohibition');
requireText(gate, 'Future purchase availability and existing entitlement validity are separate questions.', 'future-sale/existing-right separation');
requireText(gate, 'A compromised account can create unusual geography or payment behavior.', 'account compromise');
requireText(gate, 'A provider change does not by itself cancel a valid TycoonX entitlement.', 'provider continuity');
requireText(gate, 'business transfer does not by itself erase valid Diamonds, active 30-Day VIP, or valid Lifetime VIP', 'business transfer continuity');
requireText(gate, 'Free/promotional/test grant is distinguished from a paid purchase', 'free grant classification');
requireText(gate, 'Permanent service discontinuation follows the separate shutdown gate', 'shutdown separation');

// Canonical player-facing meaning must remain protective and provider-aware.
requireText(terms, 'Prices may differ between Apple App Store, Google Play, the official TycoonX web shop, countries, regions, currencies, and separate promotional sales windows.', 'canonical Terms');
requireText(terms, 'Users must not falsify country, tax location, payment information, eligibility, or account information', 'canonical Terms regional abuse');
requireText(terms, 'Nothing in these Terms excludes, limits, or overrides rights that cannot legally be excluded or limited', 'canonical Terms mandatory rights');
requireText(purchases, 'TycoonX purchases may be offered through **Apple App Store In-App Purchase**, **Google Play**, and the **official TycoonX web shop powered by Xsolla**.', 'canonical Purchases channels');
requireText(purchases, '30-Day VIP is a **one-time, non-renewing entitlement**', 'canonical Purchases 30-Day VIP');
requireText(purchases, 'Lifetime VIP is a one-time premium entitlement offered only during **selected limited promotional sales windows**.', 'canonical Purchases Lifetime VIP');
requireText(purchases, 'Ending a sales window affects future availability only and does not by itself cancel or shorten an already valid Lifetime VIP entitlement.', 'canonical Purchases Lifetime continuity');
requireText(purchases, 'The final total price and currency displayed by the applicable checkout before confirmation govern that transaction', 'canonical Purchases final price');
requireText(purchases, 'A later price decrease does not automatically create a right to a refund, credit, partial refund, price match, additional Diamonds, or additional VIP time.', 'canonical Purchases no retrospective price match');

// Existing dedicated gates must remain present so this file does not replace them.
requireText(geo, 'Regulation (EU) 2018/302', 'geo-blocking gate dependency');
requireText(xsolla, 'chargeback', 'Xsolla chargeback gate dependency');

// Localization remains closed unless canonical meaning materially changes.
requireText(progress, '25/25', 'localization progress');
requireText(progress, '100/100 localized full documents are currently confirmed current', 'localization progress');
requirePattern(progress, /Exact next unfinished locale\/document:\s*None\.?/, 'localization progress');

// Branding and release-state invariants for this new legal prose.
forbidText(gate, 'TyconX', 'sanctions gate displayed branding');
forbidText(gate.toLowerCase(), 'tycoonx beta', 'sanctions gate release status');
forbidText(gate.toLowerCase(), 'tycoonx is in beta', 'sanctions gate release status');

if (failures.length > 0) {
  console.error('TycoonX EU/German sanctions and payment-restrictions verification failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX EU/German sanctions, payment-restrictions, and regional-availability invariants verified.');
