#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gate = await readFile(path.join(root, 'TYCOONX_GDPR_RETENTION_DELETION_RELEASE_GATE.md'), 'utf8');
const privacy = await readFile(path.join(root, 'tyconx-privacy-policy.md'), 'utf8');
const accountDeletion = await readFile(path.join(root, 'TYCOONX_ACCOUNT_DELETION_RELEASE_GATE.md'), 'utf8');
const progress = await readFile(path.join(root, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md'), 'utf8');

const failures = [];

const gateRequired = [
  'August 31, 2026',
  'Article 5(1)(e)',
  'Article 17',
  'storage limitation',
  'AO § 147',
  '10 years',
  '8 years',
  '6 years',
  'UStG § 14b',
  'HGB § 257',
  'BGB § 195',
  'three years',
  'BGB § 199',
  'legal hold',
  'backup lifecycle',
  'deletion tombstones',
  'genuine anonymization',
  'pseudonymization',
  'Diamonds',
  '30-Day VIP',
  'Lifetime VIP',
  'Apple',
  'Google Play',
  'Xsolla',
  'September 1, 2026',
  '25 localized Privacy pages',
];

for (const token of gateRequired) {
  if (!gate.includes(token)) failures.push(`Retention gate lost required safeguard: ${token}`);
}

const criticalRules = [
  ['no blanket legal retention', /do not use `we may keep data for legal reasons` as a universal retention basis/i],
  ['no universal period', /Do not collapse these into one period such as `10 years`, `account lifetime`, or `forever for fraud prevention`/i],
  ['tax scope isolation', /does not authorize keeping unrelated profile, chat, gameplay, marketing, or device data/i],
  ['claims scope isolation', /do not translate `three-year limitation period` into `keep every user's complete data/i],
  ['legal hold review', /next review date/i],
  ['diamond anti-replay', /must not be replayed as a new grant/i],
  ['30-day clock integrity', /must not restart the 30-day clock/i],
  ['lifetime restore isolation', /recreating deleted gameplay progress/i],
  ['system-wide deletion', /Account deletion must propagate across systems/i],
  ['backup resurrection protection', /previously deleted records are not silently resurrected into production/i],
  ['private-message limitation', /private communications are not retained indefinitely/i],
  ['security no-forever rule', /Avoid `forever because security` retention/i],
  ['payment correction isolation', /must not be used to delete unrelated purchased Diamonds, an unrelated active 30-Day VIP, or a separate valid Lifetime VIP/i],
  ['provider migration minimization', /migrate only data still needed for a lawful current purpose/i],
];

for (const [label, pattern] of criticalRules) {
  if (!pattern.test(gate)) failures.push(`Retention gate lost ${label} safeguard.`);
}

const privacyRequired = [
  '## 8. Data Retention',
  'only for as long as reasonably necessary',
  'private communications are not retained indefinitely',
  'backup copies may remain for a limited backup lifecycle',
  'When an account is deleted, we delete or anonymize personal data that is no longer necessary',
  '## 10. Account Deletion and Paid Entitlements',
  'minimum transaction and entitlement evidence',
  'Deleting your TycoonX account is separate from requesting a payment refund',
];

for (const token of privacyRequired) {
  if (!privacy.includes(token)) failures.push(`Canonical Privacy Policy lost retention baseline: ${token}`);
}

const deletionRequired = [
  'Retain only the minimum data still supported by a valid legal basis',
  'Do not use an erasure exception as a reason to keep unrelated gameplay, profile, chat, social, or marketing data',
  '30-Day VIP is a one-time time-limited entitlement',
  'valid Lifetime VIP purchase may remain restorable after deletion',
  'Minimum transaction/entitlement evidence retained for restoration',
];

for (const token of deletionRequired) {
  if (!accountDeletion.includes(token)) failures.push(`Account-deletion gate lost retention/deletion invariant: ${token}`);
}

if (!progress.includes('100/100 localized full documents are currently confirmed current')) {
  failures.push('Localization progress no longer confirms 100/100 localized full documents current; continue the localization queue first.');
}
if (!progress.includes('Exact next unfinished locale/document: None')) {
  failures.push('Localization progress now has unfinished work; do not duplicate completed localization.');
}
if (!progress.includes('September 1, 2026')) {
  failures.push('Release-status invariant lost from localization progress.');
}

// Canonical player-facing privacy copy must never render the legacy game spelling.
if (/\bTyconX\b/.test(privacy)) failures.push('Displayed legacy TyconX spelling found in canonical Privacy Policy.');

// The live-service canonical Privacy Policy must not describe TycoonX as beta.
const staleBetaPatterns = [
  /TycoonX\s+(?:is|remains|operates as)\s+(?:a\s+)?beta/i,
  /beta\s+(?:service|version|users?|purchases?|VIP|Diamonds?|rewards?)/i,
];
for (const pattern of staleBetaPatterns) {
  if (pattern.test(privacy)) failures.push('Stale live-service beta wording found in canonical Privacy Policy.');
}

if (failures.length > 0) {
  console.error('TycoonX GDPR retention/deletion verifier failed:\n');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX GDPR retention/deletion verifier passed.');
