#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();

async function load(relativePath) {
  return readFile(path.join(ROOT, relativePath), 'utf8');
}

const gatePath = 'TYCOONX_GDPR_PERSONAL_DATA_BREACH_RESPONSE_RELEASE_GATE.md';
const privacyPath = 'tyconx-privacy-policy.md';
const compromisePath = 'TYCOONX_ACCOUNT_SUSPENSION_COMPROMISE_TERMINATION_RELEASE_GATE.md';
const securityPagePath = 'app/tycoonx-security/page.tsx';
const progressPath = 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md';

const [gate, privacy, compromise, securityPage, progress] = await Promise.all([
  load(gatePath),
  load(privacyPath),
  load(compromisePath),
  load(securityPagePath),
  load(progressPath),
]);

const errors = [];

function requireText(source, label, values) {
  for (const value of values) {
    if (!source.includes(value)) {
      errors.push(`${label} is missing required invariant: ${JSON.stringify(value)}`);
    }
  }
}

requireText(gate, gatePath, [
  'Last reviewed: September 4, 2026',
  'Article 4(12)',
  'confidentiality, integrity, or availability',
  'not later than 72 hours after CK-Labs becomes aware of it',
  'unless the breach is unlikely to result in a risk',
  'reasons for the delay',
  'provided in phases without undue further delay',
  'Article 33(5)',
  'unlikely to result in risk',
  'likely to result in a **high risk**',
  'clear and plain language',
  'effective encryption',
  'disproportionate effort',
  'without undue delay** after becoming aware of a personal data breach',
  '`first_signal_at`',
  '`controller_awareness_at`',
  'reasonable degree of certainty',
  'A compromised TycoonX account',
  'does **not** by itself prove that CK-Labs violated the GDPR',
  'Not every TycoonX outage is a personal data breach.',
  'Independent-controller scenario',
  'Apple, Google, Xsolla',
  'A personal-data breach notification is not itself',
  'Purchased Diamonds',
  'one-time, non-renewing 30-day entitlement',
  'Lifetime VIP remains a one-time promotional entitlement offered only during selected genuine sales windows.',
  'may be withdrawn from future sale, may never return',
  'LDI NRW',
  'lead supervisory authority',
  'Do not use the breach notice as a liability waiver',
  'security mailbox cannot become a dead end separate from the Article 33 process',
  'Production regression matrix',
  'P0 blockers',
]);

requireText(privacy, privacyPath, [
  '## 1.4 Security, Fraud, and Abuse Data',
  'investigate incidents and restore or correct corrupted or invalid game state',
  'Authorities and legal recipients',
  'investigate security incidents',
  '## 8. Data Retention',
  'security, anti-fraud, exploit, moderation, and audit records',
  '## 12. Security',
  'No online service can guarantee absolute security.',
  'This does not reduce CK-Labs obligations for security measures required by applicable law.',
]);

requireText(compromise, compromisePath, [
  'A security freeze, a moderation action, a payment-risk hold, and a final contractual termination are different decisions',
  'Account compromise is a separate factual question',
  'None of those signals alone proves compromise, and none proves intentional abuse by the legitimate account owner.',
  'Chargebacks and account compromise must not be conflated',
]);

requireText(securityPage, securityPagePath, [
  'Security & Vulnerability Reporting',
  'accounts, data, purchases, entitlements, infrastructure, or users',
  'ongoing security incident',
  'Mandatory consumer and data-protection rights remain unaffected.',
  'Where law requires security reporting or user notification',
]);

requireText(progress, progressPath, [
  '25/25',
  '100/100',
  'Exact next unfinished locale/document: None.',
  'September 1, 2026',
]);

const forbiddenBrand = ['Ty', 'conX'].join('');
for (const [label, source] of [
  [gatePath, gate],
  [privacyPath, privacy],
  [compromisePath, compromise],
  [securityPagePath, securityPage],
]) {
  if (source.includes(forbiddenBrand)) {
    errors.push(`${label} contains the legacy displayed game-brand spelling.`);
  }
}

for (const [label, source] of [
  [privacyPath, privacy],
  [securityPagePath, securityPage],
]) {
  if (/\bTycoonX\b.{0,80}\bbeta\b|\bbeta\b.{0,80}\bTycoonX\b/is.test(source)) {
    errors.push(`${label} contains stale live-service beta wording.`);
  }
}

if (!gate.includes('Permanent discontinuation of TycoonX does not erase already-triggered GDPR authority or data-subject notification obligations.')) {
  errors.push(`${gatePath} lost permanent-shutdown breach continuity.`);
}

if (!gate.includes('A user-notification email must not itself trigger a Diamond correction.')) {
  errors.push(`${gatePath} lost breach-notice versus Diamond-state isolation.`);
}

if (!gate.includes('A breach investigation does not reopen a closed Lifetime VIP sales window.')) {
  errors.push(`${gatePath} lost Lifetime VIP closed-window isolation.`);
}

if (errors.length > 0) {
  console.error('TycoonX GDPR personal data breach response QA FAILED');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('TycoonX GDPR personal data breach response QA PASS');
  console.log('Articles 33/34 timing, processor escalation, account-compromise separation, outage classification, product isolation, release state, and localization completion are guarded.');
}
