#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gate = await readFile(path.join(root, 'TYCOONX_GDPR_INTERNATIONAL_TRANSFER_RELEASE_GATE.md'), 'utf8');
const privacy = await readFile(path.join(root, 'tyconx-privacy-policy.md'), 'utf8');
const pkg = await readFile(path.join(root, 'package.json'), 'utf8');

const failures = [];

const gateRequired = [
  'August 31, 2026',
  'Guidelines 05/2021',
  'Article 45',
  'Article 46',
  'Article 49',
  'Standard Contractual Clauses',
  'Implementing Decision (EU) 2021/914',
  'transfer-impact assessment',
  'supplementary measures',
  'Article 28',
  'EU-U.S. Data Privacy Framework',
  'January 23, 2026',
  'active self-certification',
  'certifications are renewed annually',
  'T-553/23',
  'C-703/25 P',
  'DPF List',
  'Diamonds',
  '30-Day VIP',
  'Lifetime VIP',
  'Apple',
  'Google',
  'Xsolla',
  'reopen all 25 localized Privacy documents',
];

for (const token of gateRequired) {
  if (!gate.includes(token)) failures.push(`International-transfer gate lost safeguard: ${token}`);
}

if (!/Remote administrator, support, moderation, security, or developer access from a third country can therefore matter/i.test(gate)) {
  failures.push('Third-country remote-access transfer safeguard is missing.');
}
if (!/do not blindly attach the 2021\/914 transfer SCCs/i.test(gate)) {
  failures.push('2021/914 SCC scope warning for GDPR-subject importers is missing.');
}
if (!/Article 49 derogations are not the default architecture/i.test(gate)) {
  failures.push('Article 49 non-routine-use safeguard is missing.');
}
if (!/Do not rely on a vendor's marketing page saying `DPF compliant`/i.test(gate)) {
  failures.push('Official DPF-list verification safeguard is missing.');
}
if (!/do not continue \*\*new\*\* transfers on the theory that its old certification is enough/i.test(gate)) {
  failures.push('Inactive-DPF new-transfer safeguard is missing.');
}
if (!/does not replace[\s\S]*Article 28 processor terms/i.test(gate)) {
  failures.push('DPF-versus-Article-28 distinction is missing.');
}
if (!/A measure counts only if it actually reduces the identified risk/i.test(gate)) {
  failures.push('Effective supplementary-measures safeguard is missing.');
}
if (!/`@marsidev\/react-turnstile` and `resend` dependencies/i.test(gate)) {
  failures.push('Concrete repository provider checkpoint is missing.');
}
if (!/An international-transfer incident does not by itself revoke purchased Diamonds, 30-Day VIP or Lifetime VIP/i.test(gate)) {
  failures.push('Paid-entitlement preservation safeguard is missing.');
}
if (!/continuing transfers after CK-Labs knows the chosen mechanism no longer provides a lawful basis/i.test(gate)) {
  failures.push('Mechanism-failure release blocker is missing.');
}

const privacyRequired = [
  '## 7. International Transfers',
  'adequacy decision',
  'Standard Contractual Clauses',
  'International transfers are not based merely on a statement that use of TycoonX equals consent',
  'request further information or an available copy of the relevant safeguards',
];
for (const token of privacyRequired) {
  if (!privacy.includes(token)) failures.push(`Canonical Privacy Policy lost transfer baseline: ${token}`);
}

for (const token of ['@marsidev/react-turnstile', 'resend']) {
  if (!pkg.includes(token)) failures.push(`package.json no longer contains expected transfer-inventory checkpoint dependency: ${token}`);
}

for (const [label, text] of [['gate', gate], ['privacy policy', privacy]]) {
  if (/\bTyconX\b/.test(text)) failures.push(`Displayed legacy TyconX spelling found in ${label}.`);
  if (/\bbeta\b/i.test(text)) failures.push(`Stale beta wording found in ${label}.`);
}

if (failures.length > 0) {
  console.error('TycoonX GDPR international-transfer verifier failed:\n');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX GDPR international-transfer verifier passed.');
