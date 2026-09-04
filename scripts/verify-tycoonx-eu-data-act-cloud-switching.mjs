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

const gate = read('TYCOONX_EU_DATA_ACT_CLOUD_SWITCHING_RELEASE_GATE.md');
const providerGate = read('TYCOONX_THIRD_PARTY_PROVIDER_CONTINUITY_OUTAGE_RELEASE_GATE.md');
const terms = read('tyconx-terms-of-service.md');
const purchases = read('tyconx-purchase-refund-policy.md');
const privacy = read('tyconx-privacy-policy.md');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

// Current Data Act scope and applicability.
for (const phrase of [
  'Regulation (EU) 2023/2854',
  'September 12, 2025',
  'CK-Labs-as-customer',
  'Article 1(3)(f)',
  'providers of data processing services, irrespective of where they are established',
  'does not assume that ordinary TycoonX gameplay itself is a data processing service',
]) {
  requireText('Data Act gate', gate, phrase);
}

// Chapter VI switching and contract safeguards.
for (const phrase of [
  'Article 23',
  'Article 25',
  'Article 26',
  'Article 27',
  'Article 28',
  'Article 29',
  'Article 30',
  'two months',
  '30 calendar days',
  '14 working days',
  'seven months',
  'retrieval period of at least **30 calendar days**',
  'structured, commonly used and machine-readable format',
  'functional equivalence',
]) {
  requireText('Data Act gate', gate, phrase);
}

// Switching-charge transition must not drift.
for (const phrase of [
  'Until **January 12, 2027**',
  'reduced switching charges',
  'costs directly linked to the switching process',
  'From **January 12, 2027**',
  'not impose switching charges on the customer for the switching process',
  'ongoing in-parallel use can have a different treatment from a one-off switching process',
]) {
  requireText('Data Act gate', gate, phrase);
}

// Migration must preserve provider/payment authority and paid entitlements.
for (const phrase of [
  'Changing database/cloud vendor cannot rewrite the original merchant, final completed consumer price, tax treatment, currency, refund state, or chargeback provenance',
  'purchased Diamonds do not expire merely because CK-Labs changes cloud/database/hosting provider',
  '**30-Day VIP is a one-time, non-renewing 30-day entitlement.**',
  '**Lifetime VIP is a one-time promotional entitlement available only during selected genuine sales windows. It may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability for purchase.**',
  'must not start a fresh 30 days',
  'add a hidden expiry',
  'reopen a closed Lifetime VIP sales window',
]) {
  requireText('Data Act gate', gate, phrase);
}

// Security/privacy and account-compromise separation.
for (const phrase of [
  'Do not confuse Data Act Article 28/32 non-personal-data safeguards with GDPR Chapter V',
  'transfer personal data to a new provider without an appropriate GDPR role, contract, security, and international-transfer analysis',
  'is not proof that the legitimate player committed fraud, hacking, chargeback abuse, or entitlement abuse',
  'keep moderation/suspension decisions separate unless independent evidence supports enforcement',
]) {
  requireText('Data Act gate', gate, phrase);
}

// Existing provider gate and public baseline remain aligned.
for (const phrase of [
  'Provider API, SDK, policy, price, tax, or rule change',
  'Planned provider migration',
  'Emergency provider replacement',
  'A database backup is not automatically authoritative for payments that occurred after the backup was taken',
  'Provider replacement is not itself the end of TycoonX’s commercial operating lifetime',
]) {
  requireText('provider continuity gate', providerGate, phrase);
}

for (const phrase of [
  '## 23. Third-party services and provider changes',
  'CK-Labs may replace, add, or discontinue payment processors, infrastructure providers, authentication methods, or platform integrations',
  'Mandatory rights relating to paid digital products remain unaffected.',
]) {
  requireText('canonical Terms', terms, phrase);
}

requireRegex('Purchases policy', purchases, /Apple App Store/i);
requireRegex('Purchases policy', purchases, /Google Play/i);
requireRegex('Purchases policy', purchases, /Xsolla/i);
requireRegex('Privacy policy', privacy, /service provider|processor|provider/i);

// Localization remains complete because canonical player-facing meaning did not change.
requireText('progress tracker', progress, '100/100');
requireText('progress tracker', progress, '25/25');
requireRegex('progress tracker', progress, /Exact next unfinished locale\/document:\*\*\s*None|Exact next unfinished locale\/document[^\n]*None/i);

// Release and brand invariants.
requireText('Data Act gate', gate, 'TycoonX is in full release as of **September 1, 2026**.');
forbidText('Data Act gate', gate, 'TyconX');
forbidText('canonical Terms', terms, 'TyconX');
forbidText('canonical Purchases', purchases, 'TyconX');
forbidText('canonical Privacy', privacy, 'TyconX');

// This gate must not accidentally claim that proposals are already law.
requireText('Data Act gate', gate, 'Do not treat a proposal as enacted law.');

console.log('TycoonX EU Data Act cloud switching verifier: PASS');
