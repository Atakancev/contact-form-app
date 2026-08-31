#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gate = await readFile(path.join(root, 'TYCOONX_GDPR_AUTOMATED_DECISION_RELEASE_GATE.md'), 'utf8');
const privacy = await readFile(path.join(root, 'tyconx-privacy-policy.md'), 'utf8');
const community = await readFile(path.join(root, 'tycoonx-community-standards.md'), 'utf8');

const failures = [];

const gateRequired = [
  'August 31, 2026',
  'GDPR Article 22',
  'solely automated',
  'meaningful human',
  'legal effect or similarly significant effect',
  'Article 22(2)',
  'Article 22(3)',
  'human intervention',
  'express their point of view',
  'contest the decision',
  'C-203/22',
  'Dun & Bradstreet Austria',
  'C-634/21',
  'SCHUFA',
  'Article 35(3)(a)',
  'DPIA',
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
  if (!gate.includes(token)) failures.push(`Automated-decision gate lost safeguard: ${token}`);
}

if (!/A rubber-stamp review does not safely remove a decision from Article 22/i.test(gate)) {
  failures.push('Meaningful-human-review safeguard is missing.');
}
if (!/Do not treat proposed future amendments to the GDPR as current law/i.test(gate)) {
  failures.push('Digital Omnibus/current-law safeguard is missing.');
}
if (!/do not answer an access request only with `our algorithm detected suspicious activity`/i.test(gate)) {
  failures.push('Meaningful-explanation safeguard is missing.');
}
if (!/do not use `trade secret` as a blanket reason/i.test(gate)) {
  failures.push('Trade-secret non-blanket-refusal safeguard is missing.');
}
if (!/A chargeback on one transaction must not automatically erase unrelated legitimate purchases/i.test(gate)) {
  failures.push('Transaction-isolation safeguard is missing.');
}
if (!/A suspicious Diamond purchase must not automatically revoke Lifetime VIP/i.test(gate)) {
  failures.push('Cross-product entitlement isolation safeguard is missing.');
}
if (!/A moderation decision can require a DSA Article 17 statement of reasons/i.test(gate)) {
  failures.push('DSA/GDPR separation safeguard is missing.');
}
if (!/automate detection and reversible protection/i.test(gate)) {
  failures.push('Founder-protective reversible-automation rule is missing.');
}

const privacyRequired = [
  '## 13. Automated Security and Moderation',
  'Automated signals may lead to review, temporary restrictions, moderation, or investigation',
  'solely automated decisions that produce legal or similarly significant effects',
  'human involvement or review',
];
for (const token of privacyRequired) {
  if (!privacy.includes(token)) failures.push(`Canonical Privacy Policy lost Article 22 baseline: ${token}`);
}

const communityRequired = [
  'automated rules or classifiers',
  'human review',
  'reasons for a restriction',
  'Automated signals may prioritize content for review or support temporary protective restrictions',
];
for (const token of communityRequired) {
  if (!community.includes(token)) failures.push(`Community Standards lost automation/moderation baseline: ${token}`);
}

for (const [label, text] of [
  ['automated-decision gate', gate],
  ['privacy policy', privacy],
  ['community standards', community],
]) {
  if (/\bTyconX\b/.test(text)) failures.push(`Displayed legacy TyconX spelling found in ${label}.`);
  if (/\bbeta\b/i.test(text)) failures.push(`Stale beta wording found in ${label}.`);
}

if (failures.length > 0) {
  console.error('TycoonX GDPR automated-decision verifier failed:\n');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX GDPR automated-decision verifier passed.');
