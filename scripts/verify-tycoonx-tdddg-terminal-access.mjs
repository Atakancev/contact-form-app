import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const exists = file => fs.existsSync(path.join(root, file));

function requireText(text, needle, label) {
  if (!text.includes(needle)) throw new Error(`Missing ${label}: ${needle}`);
}
function requireRegex(text, regex, label) {
  if (!regex.test(text)) throw new Error(`Missing ${label}: ${regex}`);
}
function forbidRegex(text, regex, label) {
  if (regex.test(text)) throw new Error(`Forbidden ${label}: ${regex}`);
}
function requireMissing(file, label) {
  if (exists(file)) throw new Error(`Obsolete duplicate still exists (${label}): ${file}`);
}

const gate = read('TYCOONX_TDDDG_TERMINAL_ACCESS_CONSENT_RELEASE_GATE.md');
const privacy = read('tyconx-privacy-policy.md');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');
const pkg = read('package.json');
const contact = read('app/ContactForm.tsx');

// One current source of truth.
requireText(gate, 'single TycoonX operational gate', 'single-source statement');
requireText(gate, 'September 3, 2026', 'current review date');
requireText(gate, 'Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz (TDDDG)', 'current TDDDG name');
requireText(gate, 'Section 25(1) TDDDG', 'Section 25 consent baseline');
requireText(gate, 'Section 25(2)', 'statutory exceptions');
requireText(gate, '**strictly necessary**', 'strict necessity');
requireText(gate, 'Personal-data status is not a prerequisite', 'terminal scope independent of personal-data status');
requireText(gate, 'This applies to websites **and apps**', 'web and app scope');
requireText(gate, 'EUR 300,000', 'current Section 28 maximum');

// Granular necessity and GDPR separation.
for (const needle of [
  'Requested function:', 'Timing:', 'Content:', 'Duration:', 'Audience:', 'Alternative:', 'Separate purpose:',
  'A GDPR legitimate-interest assessment cannot cure terminal access',
  'general product analytics', 'campaign attribution', 'broad device fingerprinting',
]) requireText(gate, needle, `granular rule ${needle}`);

// Inventory and fail-closed consent handling.
for (const needle of [
  'Browser cookies', 'Web storage', 'Mobile app local storage', 'Device / hardware identifiers',
  'Fingerprinting', 'SDK-generated identifiers', 'Remember-me / persistent login state',
  'Xsolla or other checkout cookies', 'Cloudflare Turnstile',
  'must fail closed', '`unknown`', '`not asked`', '`failed`', '`migration missing`',
  'optional consent-requiring access stays disabled',
]) requireText(gate, needle, `inventory/fail-closed control ${needle}`);

// Consent UX.
requireText(gate, 'remain blocked until valid consent exists', 'pre-consent block');
requireText(gate, 'No pre-ticked boxes, silence, inactivity or inferred acceptance.', 'affirmative consent');
requireText(gate, 'Reject must be genuinely available.', 'reject control');
requireText(gate, 'first-layer route to reject all', 'first-layer reject-all');
requireText(gate, 'substantially equivalent effort', 'reject/accept effort parity');
requireText(gate, 'Withdrawal must be as easy as giving consent.', 'withdrawal parity');
requireText(gate, 'low contrast, smaller controls, countdowns, repeated nagging', 'dark-pattern safeguards');

// Current repository Turnstile checkpoint.
requireText(pkg, '@marsidev/react-turnstile', 'Turnstile dependency');
requireText(contact, "import { Turnstile } from '@marsidev/react-turnstile';", 'Turnstile import');
requireText(contact, '<Turnstile', 'Turnstile rendered in contact flow');
for (const needle of [
  '@marsidev/react-turnstile', 'app/ContactForm.tsx', 'pre-clearance', '`cf_clearance`',
  'Ephemeral IDs', 'Siteverify/server-side validation', 'actual deployed configuration',
]) requireText(gate, needle, `Turnstile checkpoint ${needle}`);

// Apple, Google and Xsolla boundaries.
for (const needle of [
  'Apple App Tracking Transparency (ATT)',
  'does **not** automatically prove German Section 25 consent',
  'An ATT denial also must not be bypassed',
  "Google Play's User Data and SDK requirements",
  'An Android runtime permission does not automatically authorize',
  'Xsolla and webshop boundary',
  "Do not assume Xsolla's privacy/cookie notices cure",
]) requireText(gate, needle, `platform/provider boundary ${needle}`);

// Security and entitlement isolation.
requireText(gate, '`security` is not a magic Section 25 exemption', 'security non-blanket rule');
requireText(gate, 'Refusing or withdrawing consent for **optional** terminal access must not itself', 'paid-value isolation');
requireText(gate, 'legitimately purchased **Diamonds**', 'Diamond isolation');
requireText(gate, 'original one-time **30-Day VIP** period', '30-Day VIP isolation');
requireText(gate, 'valid **Lifetime VIP** entitlement', 'Lifetime VIP isolation');
requireText(gate, 'may be withdrawn from future sale, may never return', 'Lifetime VIP selected-window invariant');
requireText(gate, 'Apple App Store, Google Play or Xsolla purchase fulfillment', 'payment-channel isolation');

// Outages, evidence and canonical trigger.
for (const needle of [
  'Provider outages and replacements', 'optional consent-requiring technology stays disabled',
  'Release blockers', 'Release evidence packet', 'Regression scenarios',
  'terminal-access inventory diff', 'fail-closed tests for `unknown`, outage and migration states',
  'Cloudflare Turnstile production configuration and runtime-storage evidence',
  'reopen the Privacy Policy across all 25 target locales',
]) requireText(gate, needle, `release/evidence control ${needle}`);

// Canonical Privacy already carries the public baseline, so consolidation alone should not reopen localization.
requireText(privacy, '# TycoonX Privacy Policy', 'canonical Privacy title');
requireText(privacy, 'Merely using TycoonX is not treated as consent to processing that requires consent under applicable law.', 'canonical no-implied-consent rule');
requireText(privacy, 'certain marketing, cookies, analytics, or other optional features', 'canonical optional consent categories');
requireText(privacy, 'You can withdraw consent at any time for future processing', 'canonical withdrawal language');
requireRegex(progress, /25\/25/, '25 localized hubs');
requireRegex(progress, /100\/100/, '100 localized documents');
requireRegex(progress, /Exact next unfinished locale\/document:\s*None\b/i, 'closed localization queue');
requireText(progress, 'September 1, 2026', 'full-release date');

// Duplicates must stay gone.
for (const [file, label] of [
  ['TYCOONX_TDDDG_COOKIE_TRACKING_RELEASE_GATE.md', 'old cookie gate'],
  ['TYCOONX_TDDDG_DEVICE_ACCESS_CONSENT_RELEASE_GATE.md', 'old device gate'],
  ['TYCOONX_EU_GERMAN_DEVICE_STORAGE_TRACKING_CONSENT_RELEASE_GATE.md', 'old EU/German tracking gate'],
  ['scripts/verify-tycoonx-tdddg-cookie-tracking.mjs', 'old cookie verifier'],
  ['scripts/verify-tycoonx-tdddg-device-access.mjs', 'old device verifier'],
  ['scripts/verify-tycoonx-device-tracking-consent.mjs', 'old tracking verifier'],
]) requireMissing(file, label);

// Brand/release invariants for player-facing and legal prose.
for (const [file, text] of [
  ['TYCOONX_TDDDG_TERMINAL_ACCESS_CONSENT_RELEASE_GATE.md', gate],
  ['tyconx-privacy-policy.md', privacy],
]) {
  forbidRegex(text, /\bTyconX\b/, `${file} displayed TyconX typo`);
  forbidRegex(text, /TycoonX[^\n.]{0,80}\bbeta\b|\bbeta\b[^\n.]{0,80}TycoonX/i, `${file} live beta wording`);
}
forbidRegex(gate, /Before September 1, 2026|before TycoonX full release|pre-release gate/i, 'stale pre-release wording');

console.log('PASS: consolidated TycoonX TDDDG terminal-access gate invariants are present.');
