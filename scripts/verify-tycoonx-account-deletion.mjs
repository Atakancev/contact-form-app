#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gate = await readFile(path.join(root, 'TYCOONX_ACCOUNT_DELETION_RELEASE_GATE.md'), 'utf8');
const page = await readFile(path.join(root, 'app/tycoonx-delete-account/page.tsx'), 'utf8');
const form = await readFile(path.join(root, 'app/tycoonx-delete-account/DeleteAccountForm.tsx'), 'utf8');

const failures = [];

const gateRequired = [
  '30-Day VIP',
  'Lifetime VIP',
  'Diamonds',
  'statutory withdrawal',
  'completion confirmation',
  'Sign in with Apple',
  'Data safety',
  'one-time purchases rather than an auto-renewing VIP subscription',
  'move the entitlement atomically',
  'minimum transaction/entitlement evidence',
];

for (const token of gateRequired) {
  if (!gate.includes(token)) failures.push(`Account-deletion gate lost safeguard: ${token}`);
}

if (!/must not silently create a refund/i.test(gate)) {
  failures.push('Deletion must remain separate from automatic refunds.');
}
if (!/must not silently waive an applicable refund, statutory withdrawal, conformity, price-reduction, damages, or other mandatory remedy/i.test(gate)) {
  failures.push('Deletion must preserve mandatory consumer remedies.');
}
if (!/must not restart its 30-day clock/i.test(gate)) {
  failures.push('30-Day VIP restore safety is missing.');
}
if (!/must not create a second copy/i.test(gate)) {
  failures.push('Cross-account duplicate entitlement protection is missing.');
}
if (!/delete or irreversibly anonymize personal data that is no longer necessary/i.test(gate)) {
  failures.push('GDPR minimization/erasure safeguard is missing.');
}

const pageRequired = [
  'Purchases, VIP, and refunds',
  'Timing and confirmation',
  'one-time 30-Day VIP',
  'limited-window Lifetime VIP',
  'They are not recurring subscriptions.',
  'does not waive any refund, statutory withdrawal, conformity, or other mandatory consumer right',
  'within 30 days',
  'send confirmation',
];
for (const token of pageRequired) {
  if (!page.includes(token)) failures.push(`Public deletion page lost disclosure: ${token}`);
}

const formRequired = [
  'Deletion request received',
  'within 30 days',
  'completion confirmation',
  'Keep access to this email address',
];
for (const token of formRequired) {
  if (!form.includes(token)) failures.push(`Deletion request acknowledgement lost disclosure: ${token}`);
}

for (const [label, text] of [['gate', gate], ['page', page], ['form', form]]) {
  if (/\bTyconX\b/.test(text)) failures.push(`Displayed legacy TyconX spelling found in account-deletion ${label}.`);
  if (/\bbeta\b/i.test(text)) failures.push(`Stale beta wording found in account-deletion ${label}.`);
}

if (failures.length > 0) {
  console.error('TycoonX account deletion verifier failed:\n');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX account deletion verifier passed.');
