#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gate = await readFile(path.join(root, 'TYCOONX_ACCOUNT_DELETION_RELEASE_GATE.md'), 'utf8');
const page = await readFile(path.join(root, 'app/tycoonx-delete-account/page.tsx'), 'utf8');
const form = await readFile(path.join(root, 'app/tycoonx-delete-account/DeleteAccountForm.tsx'), 'utf8');
const terms = await readFile(path.join(root, 'tyconx-terms-of-service.md'), 'utf8');
const privacy = await readFile(path.join(root, 'tyconx-privacy-policy.md'), 'utf8');
const progress = await readFile(path.join(root, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md'), 'utf8');

const failures = [];

const requireText = (label, text, token) => {
  if (!text.includes(token)) failures.push(`${label} lost safeguard: ${token}`);
};

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
  'BGB § 327p',
  'BGB § 327q',
  'BGB § 357(8)',
  'Directive (EU) 2019/770',
  'free of charge, without hindrance, within a reasonable time',
  'commonly used / customary machine-readable format',
  'jointly created content',
  'does not, by itself, invalidate the contract',
  'consent withdrawn = account closed',
  'does not mean that every voluntary account deletion is automatically the same legal event',
  'Apple/Google deletion rules',
  'account compromise',
  'service shutdown',
];

for (const token of gateRequired) requireText('Account-deletion gate', gate, token);

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
if (!/do not force a consumer to delete the whole TycoonX account merely to exercise a transaction-specific statutory withdrawal, refund, price-reduction, conformity, or termination remedy/i.test(gate)) {
  failures.push('Transaction-specific remedy must remain separate from whole-account deletion.');
}
if (!/do not automatically exclude jointly created content from retrieval/i.test(gate)) {
  failures.push('BGB § 327p jointly-created-content retrieval nuance is missing.');
}
if (!/must not continue using non-personal content that the consumer supplied or created/i.test(gate)) {
  failures.push('BGB § 327p post-termination continued-use restriction is missing.');
}
if (!/withdrawing consent or objecting to further processing does not automatically authorize CK-Labs to terminate TycoonX access/i.test(gate)) {
  failures.push('BGB § 327q privacy-right/termination separation is missing.');
}
if (!/must not claim damages from the consumer merely because exercising data-protection rights/i.test(gate)) {
  failures.push('BGB § 327q damages safeguard is missing.');
}
if (!/permanent TycoonX shutdown can create the same problem at larger scale/i.test(gate)) {
  failures.push('Permanent-shutdown content retrieval planning is missing.');
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
  'separate right to retrieve qualifying content that you provided or created',
  'valid request after contract termination',
];
for (const token of pageRequired) requireText('Public deletion page', page, token);

const formRequired = [
  'Deletion request received',
  'within 30 days',
  'completion confirmation',
  'Keep access to this email address',
];
for (const token of formRequired) requireText('Deletion request acknowledgement', form, token);

const termsRequired = [
  'Mandatory rights concerning user content remain unaffected.',
  'Deleting a TycoonX account may permanently remove profile and gameplay data',
  'Mandatory consumer remedies remain unaffected.',
];
for (const token of termsRequired) requireText('Canonical Terms', terms, token);

const privacyRequired = [
  'Deleting your TycoonX account is separate from requesting a payment refund.',
  'withdraw consent where processing is based on consent',
  'Deleting the TycoonX account does not necessarily erase or invalidate a separate Apple, Google, Xsolla, or other payment-provider transaction record.',
];
for (const token of privacyRequired) requireText('Canonical Privacy Policy', privacy, token);

if (!progress.includes('25/25')) failures.push('Localization progress no longer confirms 25/25 hubs.');
if (!progress.includes('100/100 localized full documents are currently confirmed current')) {
  failures.push('Localization progress no longer confirms 100/100 current full documents.');
}
if (!progress.includes('Exact next unfinished locale/document: None')) {
  failures.push('Localization queue unexpectedly has an unfinished locale/document.');
}

for (const [label, text] of [
  ['gate', gate],
  ['page', page],
  ['form', form],
  ['canonical Terms', terms],
  ['canonical Privacy Policy', privacy],
]) {
  if (/\bTyconX\b/.test(text)) failures.push(`Displayed legacy TyconX spelling found in account-deletion ${label}.`);
}

// Detect stale player-facing statements that actually call the live service a beta.
const staleBetaPatterns = [
  /TycoonX\s+(?:is|remains|currently is)\s+(?:in\s+)?beta/i,
  /TycoonX\s+beta\s+(?:service|game|purchase|VIP|Diamonds?)/i,
  /beta\s+(?:TycoonX\s+)?(?:service|game|purchase|VIP|Diamonds?)/i,
];
for (const [label, text] of [
  ['gate', gate],
  ['page', page],
  ['form', form],
  ['canonical Terms', terms],
  ['canonical Privacy Policy', privacy],
]) {
  for (const pattern of staleBetaPatterns) {
    if (pattern.test(text)) failures.push(`Stale live-service beta wording found in account-deletion ${label}.`);
  }
}

if (failures.length > 0) {
  console.error('TycoonX account deletion verifier failed:\n');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX account deletion verifier passed.');
