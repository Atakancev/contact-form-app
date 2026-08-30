#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gatePath = path.join(root, 'TYCOONX_APPLE_ACCOUNT_BINDING_RELEASE_GATE.md');
const text = await readFile(gatePath, 'utf8');

const required = [
  'appAccountToken',
  'same `appAccountToken` value for all ordinary Apple In-App Purchases made by that TycoonX account',
  'appTransactionId',
  'inAppOwnershipType',
  'Set App Account Token',
  'REFUND_FULL',
  'REFUND_PRORATED',
  'FAMILY_REVOKE',
  'revocationPercentage',
  '0` to `100000',
  '0.0` to `100.0',
  'App Store Connect reporting is the source of truth for financial and accounting purposes',
  '30-Day VIP',
  'Lifetime VIP',
  'Diamonds',
  'Family Sharing',
  'account-compromise',
];

const failures = [];

for (const token of required) {
  if (!text.includes(token)) {
    failures.push(`Missing Apple account-binding safeguard: ${token}`);
  }
}

if (!/do not reject an otherwise verified legitimate Apple purchase solely because `appAccountToken` is absent/i.test(text)) {
  failures.push('Missing-token purchases must not be automatically classified as invalid or fraudulent.');
}

if (!/do not automatically merge TycoonX accounts merely because they present the same Apple-account continuity signal/i.test(text)) {
  failures.push('appTransactionId must not become an automatic account-merge credential.');
}

if (!/do not grant a second copy/i.test(text) || !/do not silently move the entitlement to account B/i.test(text)) {
  failures.push('Cross-account collision must prevent both duplicate grants and silent entitlement moves.');
}

if (!/move a restorable entitlement atomically rather than copying it/i.test(text)) {
  failures.push('Supported entitlement migration must be atomic rather than duplicative.');
}

if (!/Consumed Diamonds are not a transferable non-consumable restore right/i.test(text)) {
  failures.push('Consumed Diamond purchases must not be recreated through account migration/restore.');
}

if (!/new value overrides the previous `appAccountToken`/i.test(text)) {
  failures.push('Set App Account Token overwrite behavior must be documented.');
}

if (!/never expose this endpoint directly to an untrusted client/i.test(text)) {
  failures.push('Set App Account Token must remain a privileged server-side operation.');
}

if (!/a prorated refund must not be processed as though Apple refunded 100% of the purchase/i.test(text)) {
  failures.push('Prorated Apple refunds must not be escalated into full entitlement removal.');
}

if (!/calculate the correction against the original transaction's paid entitlement, not against the player's entire Diamond balance or all VIP history/i.test(text)) {
  failures.push('Refund correction must remain transaction-specific.');
}

if (!/do not invent a fake fractional-Lifetime-VIP product state/i.test(text)) {
  failures.push('Lifetime VIP prorated-refund fallback is missing.');
}

if (!/`FAMILY_REVOKE` must be handled as Family Sharing loss of access, not automatically as a full cash refund/i.test(text)) {
  failures.push('Family Sharing revocation must remain distinct from a full refund.');
}

if (!/same Apple transaction presented while signed into TycoonX account B, proving no duplicate grant and no silent transfer/i.test(text)) {
  failures.push('Cross-account restore regression test is missing.');
}

if (!/`REFUND_PRORATED` test proving `revocationPercentage` is applied transaction-specifically and is not rounded into a full refund/i.test(text)) {
  failures.push('Prorated-refund release evidence requirement is missing.');
}

if (/\bTyconX\b/.test(text)) {
  failures.push('Displayed legacy TyconX spelling found in Apple account-binding gate.');
}

if (/\bbeta\b/i.test(text)) {
  failures.push('Stale beta wording found in Apple account-binding gate.');
}

if (failures.length > 0) {
  console.error('TycoonX Apple account binding verifier failed:\n');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX Apple account binding verifier passed.');
