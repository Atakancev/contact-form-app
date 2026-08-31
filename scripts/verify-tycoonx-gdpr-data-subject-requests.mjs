#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gate = await readFile(path.join(root, 'TYCOONX_GDPR_DATA_SUBJECT_REQUEST_RELEASE_GATE.md'), 'utf8');
const privacy = await readFile(path.join(root, 'tyconx-privacy-policy.md'), 'utf8');
const progress = await readFile(path.join(root, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md'), 'utf8');

const failures = [];

const gateRequired = [
  'August 31, 2026',
  'GDPR Article 12',
  'one month',
  'two further months',
  'reasonable doubts',
  'Article 15',
  'Article 15(4)',
  'C-154/21',
  'C-487/21',
  'C-307/22',
  'actual identity of those recipients',
  'Article 19',
  'Article 20',
  'machine-readable',
  'Article 21',
  'manifestly unfounded or excessive',
  'Diamonds',
  '30-Day VIP',
  'Lifetime VIP',
  'Apple',
  'Google Play',
  'Xsolla',
  'reopen all 25 localized Privacy documents',
  'September 1, 2026',
];

for (const token of gateRequired) {
  if (!gate.includes(token)) failures.push(`GDPR rights gate lost safeguard: ${token}`);
}

const criticalRules = [
  ['request recognition', /qualify even if the user does not cite an article number or use legal terminology/i],
  ['deadline integrity', /do not convert “one month” into an internal blanket “30-day” rule/i],
  ['proportionate identity', /Do not automatically require a passport, national ID card, selfie, notarized document/i],
  ['individualized access', /Do not answer only with a generic privacy-policy link/i],
  ['non-blanket redaction', /do not use “trade secret”, “anti-fraud”, “security”, or “other users” as a blanket reason/i],
  ['recipient specificity', /do not assume that saying only “service providers” is always enough/i],
  ['audit-history integrity', /Do not interpret rectification as permission to rewrite immutable evidence incorrectly/i],
  ['erasure isolation', /Do not use one narrow retained transaction record as a reason to keep unrelated profile, chat, social, marketing, analytics, or gameplay data indefinitely/i],
  ['portability entitlement isolation', /transfer Lifetime VIP or 30-Day VIP to another person/i],
  ['privacy-right non-retaliation', /must not be penalized by automatically revoking Diamonds, 30-Day VIP, Lifetime VIP/i],
  ['fee threshold', /burden of demonstrating manifestly unfounded\/excessive character lies with the controller/i],
  ['secure response', /privacy response can itself create a data breach if it is sent to the wrong person/i],
  ['processor responsibility', /Do not tell the user to contact a CK-Labs processor instead merely because CK-Labs outsourced storage or support/i],
];

for (const [label, pattern] of criticalRules) {
  if (!pattern.test(gate)) failures.push(`GDPR rights gate lost ${label} safeguard.`);
}

const privacyRequired = [
  '## 9. Your Privacy Rights',
  'access personal data we hold about you',
  'correct inaccurate data',
  'request deletion',
  'restrict certain processing',
  'object to processing based on legitimate interests',
  'receive certain data in a portable format',
  'withdraw consent',
  'verify your identity before acting on a request',
  '## 13. Automated Security and Moderation',
];

for (const token of privacyRequired) {
  if (!privacy.includes(token)) failures.push(`Canonical Privacy Policy lost rights baseline: ${token}`);
}

if (!progress.includes('100/100 localized full documents are currently confirmed current')) {
  failures.push('Localization progress no longer confirms 100/100 localized full documents current; privacy-localization review may be required.');
}
if (!progress.includes('Exact next unfinished locale/document: None')) {
  failures.push('Localization progress now has unfinished work; continue locale/document queue before new duplicate localization.');
}

for (const [label, text] of [
  ['GDPR rights gate', gate],
  ['privacy policy', privacy],
]) {
  if (/\bTyconX\b/.test(text)) failures.push(`Displayed legacy TyconX spelling found in ${label}.`);
  if (/\bbeta\b/i.test(text)) failures.push(`Stale beta wording found in ${label}.`);
}

if (failures.length > 0) {
  console.error('TycoonX GDPR data-subject request verifier failed:\n');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX GDPR data-subject request verifier passed.');
