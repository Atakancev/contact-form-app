import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function read(file) {
  return fs.readFileSync(path.join(root, file), 'utf8');
}

function requireText(text, needle, label) {
  if (!text.includes(needle)) {
    throw new Error(`Missing ${label}: ${needle}`);
  }
}

function requireRegex(text, regex, label) {
  if (!regex.test(text)) {
    throw new Error(`Missing ${label}: ${regex}`);
  }
}

function forbidRegex(text, regex, label) {
  if (regex.test(text)) {
    throw new Error(`Forbidden ${label}: ${regex}`);
  }
}

const gate = read('TYCOONX_TDDDG_TERMINAL_ACCESS_CONSENT_RELEASE_GATE.md');
const privacy = read('tyconx-privacy-policy.md');
const processors = read('TYCOONX_GDPR_PROCESSOR_SUBPROCESSOR_VENDOR_RELEASE_GATE.md');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

// German TDDDG baseline and GDPR separation.
requireText(gate, 'Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz (TDDDG)', 'current TDDDG name');
requireText(gate, 'Section 25(1) TDDDG', 'Section 25(1) consent rule');
requireText(gate, 'before', 'pre-access timing rule');
requireText(gate, 'Section 25(2)', 'statutory exceptions');
requireText(gate, '**strictly necessary**', 'strict necessity rule');
requireText(gate, 'Economic usefulness, revenue optimization, analytics convenience', 'business-necessity rejection');
requireText(gate, 'TDDDG:** may TycoonX store/access', 'TDDDG decision layer');
requireText(gate, 'GDPR:** if personal data is subsequently processed', 'GDPR second layer');
requireText(gate, 'A GDPR legitimate-interest assessment cannot cure terminal access', 'GDPR/TDDDG separation');
requireText(gate, 'Personal-data status is not a prerequisite', 'non-personal information scope');

// Websites, apps and technical scope.
requireText(gate, 'This applies to websites **and apps**', 'web/app scope');
requireText(gate, 'Browser cookies', 'cookie inventory');
requireText(gate, 'Web storage', 'web storage inventory');
requireText(gate, 'Mobile app local storage', 'mobile storage inventory');
requireText(gate, 'Device / hardware identifiers', 'device identifier inventory');
requireText(gate, 'Fingerprinting', 'fingerprinting inventory');
requireText(gate, 'SDK-generated identifiers', 'SDK identifier inventory');
requireText(gate, 'Remember-me / persistent login state', 'persistent login inventory');
requireText(gate, 'Xsolla or other checkout cookies', 'checkout cookie inventory');

// Strict necessity must be granular and minimal.
requireText(gate, 'Requested function:', 'requested-function test');
requireText(gate, 'Timing:', 'timing test');
requireText(gate, 'Content:', 'content minimization test');
requireText(gate, 'Duration:', 'duration test');
requireText(gate, 'Audience:', 'recipient/readability test');
requireText(gate, 'Alternative:', 'less intrusive alternative test');
requireText(gate, 'Separate purpose:', 'secondary-purpose test');
requireText(gate, 'short-lived session/authentication token', 'session example');
requireText(gate, 'general product analytics', 'analytics non-necessity example');
requireText(gate, 'broad device fingerprinting', 'fingerprinting caution');

// Consent quality and withdrawal.
requireText(gate, 'The optional storage/access must remain blocked until valid consent exists.', 'pre-consent block');
requireText(gate, 'Affirmative action', 'affirmative consent');
requireText(gate, 'Reject must be genuinely available', 'reject option');
requireText(gate, 'materially more effort than acceptance', 'equivalent-effort rejection');
requireText(gate, 'Withdrawal must be as easy as giving consent.', 'easy withdrawal');
requireText(gate, 'Re-consent after material change', 're-consent trigger');
requireText(gate, 'No pre-ticked boxes, silence, inactivity or inferred acceptance', 'no inferred consent');

// Platform/provider boundaries.
requireText(gate, "Apple's App Tracking Transparency (ATT)", 'Apple ATT boundary');
requireText(gate, 'A granted ATT permission does **not** automatically prove', 'ATT not TDDDG substitute');
requireText(gate, 'An ATT denial also must not be bypassed', 'ATT anti-circumvention');
requireText(gate, 'privacy manifests', 'Apple privacy manifest checkpoint');
requireText(gate, "Google Play's User Data and SDK requirements", 'Google Play boundary');
requireText(gate, 'An Android runtime permission does not automatically authorize', 'Android permission separation');
requireText(gate, 'Xsolla and TycoonX webshop boundary', 'Xsolla boundary');
requireText(gate, "Do not assume that Xsolla's own cookie or privacy notice cures", 'Xsolla responsibility separation');

// Security/analytics classification.
requireText(gate, 'Optional audience measurement, feature analytics, retention analytics and attribution require a Section 25 classification', 'analytics classification');
requireText(gate, 'Do not automatically classify all crash-reporting SDK terminal access as strictly necessary.', 'crash SDK classification');
requireText(gate, '"security" is not a magic Section 25 exemption', 'security non-blanket exception');
requireText(gate, 'provider\'s network-wide profiling identifier', 'provider security profiling caution');

// Paid entitlement isolation.
requireText(gate, 'Refusing or withdrawing consent for **optional** terminal access must not itself', 'paid-value isolation section');
requireText(gate, 'legitimately purchased **Diamonds**', 'Diamond isolation');
requireText(gate, 'original one-time **30-Day VIP** period', '30-Day VIP isolation');
requireText(gate, 'valid **Lifetime VIP** entitlement', 'Lifetime VIP isolation');
requireText(gate, 'replay Apple App Store, Google Play or Xsolla purchase fulfillment', 'purchase replay isolation');
requireText(gate, 'may be withdrawn from future sale and may never return', 'Lifetime VIP sales-window invariant');

// Evidence, blockers and regression scenarios.
requireText(gate, 'Consent records and minimization', 'consent evidence section');
requireText(gate, 'Release blockers', 'release blockers');
requireText(gate, 'Release evidence packet', 'evidence packet');
requireText(gate, 'Regression scenarios', 'regression scenarios');
requireRegex(gate, /24\. \*\*Business\/provider migration:/, '24 regression scenarios');
requireText(gate, 'EUR 300,000', 'Section 28 fine exposure');

// Canonical Privacy Policy already contains the public baseline this gate operationalizes.
requireText(privacy, '# TycoonX Privacy Policy', 'canonical Privacy title');
requireText(privacy, 'Merely using TycoonX is not treated as consent to processing that requires consent under applicable law.', 'canonical no-implied-consent rule');
requireText(privacy, 'certain marketing, cookies, analytics, or other optional features', 'canonical optional consent categories');
requireText(privacy, 'You can withdraw consent at any time for future processing', 'canonical withdrawal language');
requireText(privacy, 'Optional information or processing that is not necessary for the core Service is handled separately where required', 'canonical optional-processing separation');

// Existing vendor gate must keep SDK governance linked.
requireText(processors, 'SDK and dependency change gate', 'processor SDK change gate linkage');
requireText(processors, 'Google Play', 'Google provider coverage');
requireText(processors, 'Apple', 'Apple provider coverage');
requireText(processors, 'Xsolla', 'Xsolla provider coverage');

// Localization and release invariants.
requireRegex(progress, /25\/25/, '25 localized hubs');
requireRegex(progress, /100\/100/, '100 localized full documents');
requireText(progress, 'September 1, 2026', 'full-release date');
requireRegex(progress, /Exact next unfinished locale\/document:\s*None\b/i, 'closed localization queue');

// Rendered/legal prose must use the correct brand and must not describe the live service as beta.
for (const [file, text] of [
  ['TYCOONX_TDDDG_TERMINAL_ACCESS_CONSENT_RELEASE_GATE.md', gate],
  ['tyconx-privacy-policy.md', privacy],
]) {
  forbidRegex(text, /\bTyconX\b/, `${file} displayed TyconX typo`);
  forbidRegex(text, /TycoonX[^\n.]{0,80}\bbeta\b|\bbeta\b[^\n.]{0,80}TycoonX/i, `${file} live beta wording`);
}

console.log('PASS: TycoonX TDDDG terminal-access and consent gate invariants are present.');
