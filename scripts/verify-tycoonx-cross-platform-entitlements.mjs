#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gate = await readFile(path.join(root, 'TYCOONX_CROSS_PLATFORM_ENTITLEMENT_PARITY_RELEASE_GATE.md'), 'utf8');
const terms = await readFile(path.join(root, 'tyconx-terms-of-service.md'), 'utf8');
const purchases = await readFile(path.join(root, 'tyconx-purchase-refund-policy.md'), 'utf8');
const progress = await readFile(path.join(root, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md'), 'utf8');

const failures = [];

const requireGate = (token) => {
  if (!gate.includes(token)) failures.push(`Missing cross-platform safeguard: ${token}`);
};

for (const token of [
  'Guideline **3.1.3(b), Multiplatform Services**',
  'including **consumable items in multi-platform games**',
  'provided those items are also available as In-App Purchases within the app',
  'recognition** and in-app **acquisition/steering**',
  'consumption-only',
  'virtual currency must only be used within the app or game title for which it was purchased',
  'one cross-platform ledger, no replay',
  'once and only once',
  'One-time 30-Day VIP: preserve one clock',
  'Lifetime VIP: one valid entitlement, not one copy per store',
  'source transaction identity',
  'Refunds and reversals remain transaction-specific',
  'Regional pricing and cross-platform access',
  'Account compromise and entitlement hijacking',
  'Provider outage, migration, and replacement',
  'Free, promotional, test, review, and goodwill grants',
  'Family Sharing and shared access are separate from owned cross-platform entitlement',
  'Mandatory consumer rights and conformity',
  'one TycoonX account entitlement state + transaction-specific source evidence + idempotent fulfillment + platform-specific purchase rules',
]) requireGate(token);

if (!/does not automatically permit an in-app Xsolla link/i.test(gate)) {
  failures.push('Cross-platform recognition must remain distinct from Xsolla/in-app external-payment steering.');
}

if (!/do not represent Guideline 3\.1\.3\(b\) as requiring identical pricing/i.test(gate)) {
  failures.push('Apple multiplatform access must not be misrepresented as a universal same-price requirement.');
}

if (!/do not use a nominal, hidden, unavailable, or permanently non-purchasable Apple product/i.test(gate)) {
  failures.push('Apple IAP availability must be genuine rather than nominal.');
}

if (!/Google states that apps do not need feature or price parity across platforms/i.test(gate)) {
  failures.push('Google cross-platform pricing parity distinction is missing.');
}

if (!/same account on iOS sees the correct server balance; no second grant on login/i.test(gate)) {
  failures.push('Xsolla-to-iOS Diamond regression test is missing.');
}

if (!/original expiry timestamp remains unchanged across iOS, Android, and web sign-in/i.test(gate)) {
  failures.push('30-Day VIP cross-platform clock regression test is missing.');
}

if (!/one valid Lifetime VIP remains one entitlement after use on multiple supported platforms/i.test(gate)) {
  failures.push('Lifetime VIP one-entitlement regression test is missing.');
}

if (!/refund on one channel removes unrelated value bought on another channel/i.test(gate)) {
  failures.push('Cross-channel refund-isolation blocker is missing.');
}

if (!/external-purchase steering disabled/i.test(gate)) {
  failures.push('Recognition-without-steering release test is missing.');
}

for (const [label, text, required] of [
  ['canonical Terms', terms, ['Apple App Store', 'Google Play', 'Xsolla', 'Diamonds', '30-Day VIP', 'Lifetime VIP', 'authoritative']],
  ['canonical Purchases policy', purchases, ['Apple', 'Google Play', 'Xsolla', 'Diamonds', '30-Day VIP', 'Lifetime VIP', 'refund']],
]) {
  for (const token of required) {
    if (!text.includes(token)) failures.push(`${label} no longer contains required cross-platform source concept: ${token}`);
  }
}

if (!progress.includes('100/100 localized full documents are currently confirmed current')) {
  failures.push('Localization progress no longer confirms all 100 localized full documents as current.');
}

if (!progress.includes('Exact next unfinished locale/document: None')) {
  failures.push('Localization queue is no longer closed; continue localization before incremental hardening.');
}

if (!progress.includes('September 1, 2026')) {
  failures.push('Full-release date invariant is missing from localization progress.');
}

for (const [label, text] of [
  ['cross-platform gate', gate],
  ['canonical Terms', terms],
  ['canonical Purchases policy', purchases],
]) {
  if (/\bTyconX\b/.test(text)) failures.push(`Displayed legacy brand spelling found in ${label}.`);
  if (/\bbeta\b/i.test(text)) failures.push(`Stale release-status wording found in ${label}.`);
}

if (failures.length > 0) {
  console.error('TycoonX cross-platform entitlement verifier failed:\n');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX cross-platform entitlement verifier passed.');
