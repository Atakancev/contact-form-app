import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function read(file) {
  return fs.readFileSync(path.join(root, file), 'utf8');
}

function requireText(label, text, needle) {
  if (!text.includes(needle)) {
    throw new Error(`${label}: missing required text: ${needle}`);
  }
}

function requireRegex(label, text, regex) {
  if (!regex.test(text)) {
    throw new Error(`${label}: missing required pattern: ${regex}`);
  }
}

function forbidText(label, text, needle) {
  if (text.includes(needle)) {
    throw new Error(`${label}: forbidden text found: ${needle}`);
  }
}

const gate = read('TYCOONX_THIRD_PARTY_PROVIDER_CONTINUITY_OUTAGE_RELEASE_GATE.md');
const terms = read('tyconx-terms-of-service.md');
const purchases = read('tyconx-purchase-refund-policy.md');
const privacy = read('tyconx-privacy-policy.md');
const paymentGate = read('TYCOONX_PAYMENT_ENTITLEMENT_RELEASE_GATES.md');
const changeGate = read('TYCOONX_EU_DIGITAL_PRODUCT_CHANGE_SHUTDOWN_GATE.md');
const crossPlatform = read('TYCOONX_CROSS_PLATFORM_ENTITLEMENT_PARITY_RELEASE_GATE.md');
const economyGate = read('TYCOONX_GAME_ECONOMY_RESET_CORRECTION_RELEASE_GATE.md');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

// Dedicated gate classification and source-of-truth safeguards.
for (const phrase of [
  'Temporary provider outage or degradation',
  'Provider API, SDK, policy, price, tax, or rule change',
  'Planned provider migration',
  'Emergency provider replacement',
  'Provider account suspension or termination',
  'Regional provider availability loss',
  'Permanent provider exit',
  'Freeze uncertain writes before guessing',
  'Every critical provider needs an authority map',
]) {
  requireText('provider gate', gate, phrase);
}

// Provider-specific recovery must not depend on a single notification or client screen.
for (const phrase of [
  'App Store Server Notifications V2',
  'Do not make one notification the only recovery path',
  '`PENDING` is not `PURCHASED`',
  'Real-time Developer Notifications as state-change signals',
  'Deduplicate Pub/Sub notifications',
  'combined `order_paid` / `order_canceled` webhooks',
  'A browser return URL, local success page, or locally created order is not final payment authority',
  'reconcile transaction state after recovery',
]) {
  requireText('provider gate', gate, phrase);
}

// Payment-provider replacement must preserve historical transaction provenance.
for (const phrase of [
  'Replacing a payment provider does not rewrite old contracts',
  'Do not retroactively change a completed transaction’s price, currency, tax, or payment channel',
  'historic transaction merchant/price/tax/refund provenance would be overwritten',
]) {
  requireText('provider gate', gate, phrase);
}

// Authentication migration must not orphan paid entitlements or demand dangerous credentials.
for (const phrase of [
  'Maintain a stable CK-Labs internal account identifier',
  'prevent automatic creation of duplicate accounts',
  'purchased Diamond provenance, active 30-Day VIP, Lifetime VIP',
  'never ask users for Apple/Google/Xsolla/email passwords, full card numbers, CVVs, authentication backup codes',
]) {
  requireText('provider gate', gate, phrase);
}

// Infrastructure recovery must reconcile snapshot boundaries exactly once.
for (const phrase of [
  'A database backup is not automatically authoritative for payments that occurred after the backup was taken',
  'reconcile provider transactions that completed across the snapshot/cutover boundary exactly once',
  'prevent a restored snapshot from restarting 30-Day VIP',
  'prevent migration from adding a hidden expiry to Lifetime VIP or duplicating it',
]) {
  requireText('provider gate', gate, phrase);
}

// GDPR/provider migration controls.
for (const phrase of [
  'Article 28',
  'Article 32',
  'Article 44',
  'merely updating the Privacy Policy is not universal consent',
  'verify deletion/return obligations when the old provider relationship ends',
]) {
  requireText('provider gate', gate, phrase);
}

// Mandatory German digital-product remedies remain intact.
for (const phrase of [
  'BGB § 327b',
  'BGB § 327e',
  'BGB § 327f',
  'BGB § 327l',
  'BGB § 327m',
  'BGB § 327n',
  'BGB § 327r',
  'Do not promise automatic money compensation for every short outage',
  'Do not impose a blanket “third-party outage = no remedy” rule either',
]) {
  requireText('provider gate', gate, phrase);
}

// Product isolation and no duplicate/restored reset behavior.
for (const phrase of [
  'A provider outage does not make valid purchased Diamonds expire',
  'Provider migration or restore does not start a fresh 30-day period',
  'Provider replacement is not itself the end of TycoonX’s commercial operating lifetime',
  'Do not convert Lifetime VIP into 30-Day VIP, invent a migration expiry, or duplicate the entitlement',
]) {
  requireText('provider gate', gate, phrase);
}

// Current public Terms must retain the already-localized baseline, so this operational gate does not silently drift.
for (const phrase of [
  '## 23. Third-party services and provider changes',
  'CK-Labs may replace, add, or discontinue payment processors, infrastructure providers, authentication methods, or platform integrations',
  'CK-Labs is not responsible for independent third-party conduct beyond the extent imposed by applicable law, but remains responsible for CK-Labs obligations that cannot be shifted to a third party.',
  '## 24. Availability, outages, security incidents, and force majeure',
  'Mandatory rights relating to paid digital products remain unaffected.',
]) {
  requireText('canonical Terms', terms, phrase);
}

// Existing payment gate parity.
for (const phrase of [
  'Never grant Diamonds, 30-Day VIP, Lifetime VIP, or any other paid entitlement while Google reports the purchase as `PENDING`.',
  'Do not treat a browser return URL, client-side success message, or locally created order as final payment authority.',
  'Verify webhook authenticity/signatures and make fulfillment idempotent so retries cannot duplicate Diamonds or VIP.',
]) {
  requireText('payment gate', paymentGate, phrase);
}

// Existing change/outage gate must continue to preserve provider migrations and mandatory remedies.
for (const phrase of [
  'provider migrations and permanent service discontinuation',
  'Temporary outages are not automatically permanent termination',
  'Provider discontinuation and business transfers do not erase CK-Labs duties',
]) {
  requireText('digital change gate', changeGate, phrase);
}

// Cross-platform and rollback gates must continue to prevent duplication and paid-value loss.
requireRegex('cross-platform gate', crossPlatform, /does not create (?:a )?second purchase|must not create a second purchase/i);
requireRegex('economy gate', economyGate, /snapshot|rollback/i);
requireRegex('economy gate', economyGate, /30-Day VIP/i);
requireRegex('economy gate', economyGate, /Lifetime VIP/i);

// Canonical purchases/privacy remain present and provider-aware.
requireRegex('purchases policy', purchases, /Apple App Store/i);
requireRegex('purchases policy', purchases, /Google Play/i);
requireRegex('purchases policy', purchases, /Xsolla/i);
requireRegex('privacy policy', privacy, /service provider|processor|provider/i);

// Localization queue remains closed unless canonical public meaning changes.
requireText('progress tracker', progress, '100/100');
requireText('progress tracker', progress, '25/25');
requireRegex('progress tracker', progress, /Exact next unfinished locale\/document:\*\*\s*None|Exact next unfinished locale\/document[^\n]*None/i);

// Release/brand invariants.
requireText('provider gate', gate, 'TycoonX is in full release as of **September 1, 2026**.');
forbidText('provider gate', gate, 'TyconX');
forbidText('canonical Terms', terms, 'TyconX');
forbidText('canonical Purchases', purchases, 'TyconX');
forbidText('canonical Privacy', privacy, 'TyconX');

console.log('TycoonX provider continuity legal verifier: PASS');
