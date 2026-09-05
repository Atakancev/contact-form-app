import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');

const gate = read('TYCOONX_GDPR_PERSONAL_DATA_BREACH_RELEASE_GATE.md');
const privacy = read('tyconx-privacy-policy.md');
const renderedPrivacy = read('app/tyconx-privacy-policy/page.tsx');
const renderedTerms = read('app/tyconx-terms-of-service/page.tsx');
const craGate = read('TYCOONX_EU_CYBER_RESILIENCE_ACT_2026_REPORTING_GATE.md');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const failures = [];

function requireText(text, needle, label) {
  if (!text.includes(needle)) failures.push(`${label}: missing ${JSON.stringify(needle)}`);
}

function requireRegex(text, regex, label) {
  if (!regex.test(text)) failures.push(`${label}: missing pattern ${regex}`);
}

function forbidRegex(text, regex, label) {
  if (regex.test(text)) failures.push(`${label}: forbidden pattern ${regex}`);
}

// The personal-data-breach gate is the single GDPR breach doctrine source of truth.
// Overlapping gates/verifiers must remain absent so the 72-hour clock and risk doctrine cannot diverge.
for (const stalePath of [
  'TYCOONX_GDPR_BREACH_INCIDENT_RESPONSE_GATE.md',
  'TYCOONX_GDPR_SECURITY_INCIDENT_RESPONSE_GATE.md',
  'TYCOONX_GDPR_PERSONAL_DATA_BREACH_RESPONSE_RELEASE_GATE.md',
  'scripts/verify-tycoonx-gdpr-breach.mjs',
  'scripts/verify-tycoonx-gdpr-incidents.mjs',
  'scripts/verify-tycoonx-gdpr-breach-response.mjs',
]) {
  if (fs.existsSync(path.join(root, stalePath))) {
    failures.push(`Duplicate GDPR incident-response source reappeared: ${stalePath}`);
  }
}

// GDPR breach definition and security dimensions.
for (const needle of [
  'Article 4(12)',
  'confidentiality',
  'integrity',
  'availability',
  'Not every outage, crash, exploit or cybersecurity alert is necessarily a personal data breach',
]) requireText(gate, needle, 'GDPR breach definition');

// Awareness must use the EDPB threshold and cannot wait for perfect forensics.
for (const needle of [
  'reasonable degree of certainty',
  'awareness timestamp',
  'Do not wait for:',
  'provider postmortems that arrive after the statutory deadline',
]) requireText(gate, needle, 'Awareness/timing');

// Article 33 notification and Article 34 communication thresholds.
for (const needle of [
  'unlikely to result in a risk',
  'not later than 72 hours after awareness',
  'high risk',
  'without undue delay',
  'Article 33(5)',
]) requireText(gate, needle, 'Notification thresholds');

// Article 33 notification contents and phased notification.
for (const needle of [
  'categories and approximate number of affected individuals',
  'likely consequences of the breach',
  'Article 33(4)',
  'provided in phases',
  'reasons for the delay',
]) requireText(gate, needle, 'Article 33 operational controls');

// Processor/controller boundary.
for (const needle of [
  'Article 33(2)',
  'without undue delay',
  'controller/processor/independent-controller role',
  "provider saying \"we are investigating\" does not pause CK-Labs' clock",
]) requireText(gate, needle, 'Processor/provider boundary');

// Article 34 user notices and exceptions.
for (const needle of [
  'clear and plain language',
  'Article 34(3)',
  'effective encryption',
  'disproportionate effort',
  'equally effective public communication',
]) requireText(gate, needle, 'Article 34 controls');

// Cross-border authority mapping, including current NRW route and non-EEA successor handling.
for (const needle of [
  'LDI NRW',
  'lead-supervisory-authority / one-stop-shop',
  'not established in the EEA',
  'Article 27 representative',
  'does not trigger one-stop-shop',
]) requireText(gate, needle, 'Supervisory-authority mapping');

// Platform/provider duties stay separate from CK-Labs duties.
for (const needle of [
  'Apple',
  'Google Play',
  'Xsolla',
  "Their own incident duties do not replace CK-Labs' GDPR duties",
]) requireText(gate, needle, 'Provider separation');

// Paid-entitlement isolation during security containment/recovery.
for (const needle of [
  'purchased Diamonds',
  '30-Day VIP',
  'Lifetime VIP',
  'must not replay Apple, Google Play or Xsolla entitlement events',
]) requireText(gate, needle, 'Paid-entitlement isolation');

// Security communications must not silently become marketing permission.
for (const needle of [
  'Breach communications must not become marketing',
  're-subscribe an opted-out player',
  'optional marketing consent',
]) requireText(gate, needle, 'Security/marketing separation');

// Canonical Privacy Policy must already expose the baseline security, provider and support concepts.
for (const needle of [
  'Security, Fraud, and Abuse Data',
  'We use technical and organizational measures designed to protect TycoonX data',
  'No online service can guarantee absolute security',
  'If you believe your account has been compromised or discover a security vulnerability',
  'Apple, Google, Xsolla, and other authorized payment providers',
  'hosting, database, storage, analytics, crash-reporting, moderation, notification, or security providers',
  'For privacy requests, account deletion, security reports',
]) requireText(privacy, needle, 'Canonical Privacy Policy');

// The rendered legal pages must retain the same operational security promises and transaction evidence boundaries.
requireRegex(renderedPrivacy, /title:\s*['\"]Security['\"]/, 'Rendered Privacy security section');
requireRegex(renderedPrivacy, /security vulnerability/i, 'Rendered Privacy security-report route');
requireRegex(renderedPrivacy, /Security and fraud data/i, 'Rendered Privacy security/fraud data');
requireRegex(renderedTerms, /account[^\n]{0,120}compromised/i, 'Rendered Terms account-compromise handling');
requireRegex(renderedTerms, /authoritative server and payment-provider records/i, 'Rendered Terms authoritative-record boundary');

// GDPR and CRA incident reporting stay legally separate. CRA reporting begins September 11, 2026.
for (const needle of [
  'September 11, 2026',
  'Article 14',
  'Single Reporting Platform',
]) requireText(craGate, needle, 'CRA parallel reporting gate');
requireRegex(craGate, /GDPR|personal data breach/i, 'CRA/GDPR separation');

// Release evidence and scenario coverage must be concrete.
for (const needle of [
  'breach-register template',
  'Article 33 authority-notification template',
  'Article 34 player-communication template',
  'tabletop test',
  'Wrong-recipient support export',
  'Ransomware availability breach',
  'SDK unauthorized transmission',
  'Delayed notification',
  'Phased update',
]) requireText(gate, needle, 'Release evidence/regressions');

// Localization/release invariants remain complete and no stale branding is introduced.
for (const needle of [
  '25/25',
  '100/100',
  'Exact next unfinished locale/document: None',
  'September 1, 2026',
]) requireText(progress, needle, 'Localization/release progress');

requireText(gate, 'September 1, 2026', 'Full-release invariant');
requireText(gate, 'TycoonX', 'Brand invariant');
forbidRegex(gate, /\bTyconX\b/, 'GDPR breach gate brand');
forbidRegex(privacy, /\bTyconX\b/, 'Privacy Policy brand');
forbidRegex(renderedPrivacy, /\bTyconX\b/, 'Rendered Privacy brand');
forbidRegex(renderedTerms, /\bTyconX\b/, 'Rendered Terms brand');

// Prevent stale live-service beta characterization while allowing legally useful generic test references elsewhere.
forbidRegex(gate, /TycoonX[^\n]{0,40}\bbeta\b|\bbeta\b[^\n]{0,40}TycoonX/i, 'GDPR breach gate release status');

if (failures.length) {
  console.error('TycoonX GDPR personal data breach verification FAILED');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX GDPR personal data breach verification PASS');
console.log('Checked the consolidated breach doctrine, awareness timing, 72-hour/phased authority notification, high-risk player communication, breach-register evidence, processor/provider boundaries, cross-border authority mapping, GDPR/CRA separation, rendered legal-page parity, paid-entitlement isolation, localization completion and full-release branding.');