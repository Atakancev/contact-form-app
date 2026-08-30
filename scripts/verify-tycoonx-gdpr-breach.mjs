#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gate = await readFile(path.join(root, 'TYCOONX_GDPR_BREACH_INCIDENT_RESPONSE_GATE.md'), 'utf8');
const privacy = await readFile(path.join(root, 'tyconx-privacy-policy.md'), 'utf8');

const failures = [];

const gateRequired = [
  'Article 4(12)',
  'within 72 hours',
  'without undue delay',
  'Article 33(5)',
  'Article 34',
  'reasonable degree of certainty',
  'phases without undue further delay',
  'LDI NRW',
  'cross-border processing',
  'Diamonds',
  '30-Day VIP',
  'Lifetime VIP',
  'Apple',
  'Google Play',
  'Xsolla',
  'September 1, 2026',
  'tabletop exercise',
];

for (const token of gateRequired) {
  if (!gate.includes(token)) failures.push(`GDPR breach gate lost safeguard: ${token}`);
}

if (!/unless the breach is unlikely to result in a risk to the rights and freedoms of natural persons/i.test(gate)) {
  failures.push('Article 33 risk-threshold safeguard is missing.');
}
if (!/likely to result in a high risk/i.test(gate)) {
  failures.push('Article 34 high-risk threshold is missing.');
}
if (!/Do not wait for an exact user count/i.test(gate)) {
  failures.push('Phased Article 33 notification safeguard is missing.');
}
if (!/Every confirmed personal data breach must be documented/i.test(gate)) {
  failures.push('Article 33(5) breach-register requirement is missing.');
}
if (!/do not revoke Diamonds, 30-Day VIP or Lifetime VIP merely because an account or infrastructure incident occurred/i.test(gate)) {
  failures.push('Paid-entitlement preservation during incidents is missing.');
}
if (!/Account compromise does not automatically entitle a player to a refund/i.test(gate)) {
  failures.push('Account-compromise/refund distinction is missing.');
}
if (!/no real personal data breach should be created for testing/i.test(gate)) {
  failures.push('Safe tabletop-testing restriction is missing.');
}
if (!/reopen all 25 localized Privacy documents/i.test(gate)) {
  failures.push('Canonical Privacy localization reopening trigger is missing.');
}

const privacyRequired = [
  'investigate incidents',
  'security reports',
  'technical and organizational measures',
  'data-protection supervisory authority',
];
for (const token of privacyRequired) {
  if (!privacy.toLowerCase().includes(token.toLowerCase())) {
    failures.push(`Canonical Privacy Policy lost incident/security baseline: ${token}`);
  }
}

for (const [label, text] of [['gate', gate], ['privacy policy', privacy]]) {
  if (/\bTyconX\b/.test(text)) failures.push(`Displayed legacy TyconX spelling found in ${label}.`);
  if (/\bbeta\b/i.test(text)) failures.push(`Stale beta wording found in ${label}.`);
}

if (failures.length > 0) {
  console.error('TycoonX GDPR breach verifier failed:\n');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX GDPR breach verifier passed.');
