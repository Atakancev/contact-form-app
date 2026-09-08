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
  '`originalTransactionId`',
  'AppTransactionIdNotSupportedError',
  'TransactionIdIsNotOriginalTransactionIdError',
  'FamilyTransactionNotSupportedError',
  '20 Set App Account Token requests per second in production',
  'binding/version epoch',
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

if (!/path requires the transaction's \*\*`originalTransactionId`\*\*/i.test(text)) {
  failures.push('Set App Account Token must require originalTransactionId rather than an arbitrary Apple identifier.');
}

if (!/an `appTransactionId` is not accepted for this endpoint/i.test(text)) {
  failures.push('Set App Account Token appTransactionId rejection safeguard is missing.');
}

if (!/a non-original transaction identifier is rejected rather than silently redirected/i.test(text)) {
  failures.push('Set App Account Token non-original transaction rejection safeguard is missing.');
}

if (!/Family Sharing transactions with `inAppOwnershipType: FAMILY_SHARED` are not supported/i.test(text)) {
  failures.push('Set App Account Token Family Sharing unsupported-path safeguard is missing.');
}

if (!/supports the operation for consumables, non-consumables, non-renewing subscriptions, and auto-renewable subscriptions/i.test(text)) {
  failures.push('Set App Account Token supported-product scope is missing.');
}

if (!/current renewal transaction and subsequent renewals.*does not rewrite past transactions/is.test(text)) {
  failures.push('Auto-renewable Set App Account Token forward-only history rule is missing.');
}

if (!/never expose it directly to an untrusted client/i.test(text)) {
  failures.push('Set App Account Token must remain a privileged server-side operation.');
}

if (!/resolve and verify the correct Apple environment, bundle\/app context, original transaction identity, product, current refund\/revocation state, and current TycoonX binding before mutation/i.test(text)) {
  failures.push('Pre-mutation Set App Account Token authority check is missing.');
}

if (!/A `200 OK` from Set App Account Token means Apple accepted the attribution update.*does \*\*not\*\* itself prove a new payment/is.test(text)) {
  failures.push('Set App Account Token 200-versus-payment-authority boundary is missing.');
}

if (!/20 Set App Account Token requests per second in production.*sandbox App Store Server API limits are 10% of production limits/is.test(text)) {
  failures.push('Set App Account Token current rate-limit safeguard is missing.');
}

if (!/HTTP `429` and retryable provider\/server failures must not become evidence of player fraud or a reason to duplicate\/move paid value/i.test(text)) {
  failures.push('Set App Account Token rate-limit/provider-failure non-fraud safeguard is missing.');
}

if (!/blindly replaying the older request can overwrite the newer valid association/i.test(text)) {
  failures.push('Set App Account Token stale-retry overwrite hazard is missing.');
}

if (!/every retry or asynchronous replay must re-check the current CK-Labs ownership decision and binding\/version epoch immediately before calling Apple/i.test(text)) {
  failures.push('Set App Account Token retry-time binding-version check is missing.');
}

if (!/A stale retry must be discarded or quarantined rather than allowed to roll back a newer binding/i.test(text)) {
  failures.push('Set App Account Token stale-retry rollback blocker is missing.');
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

if (!/Set App Account Token with a non-original `transactionId`, an `appTransactionId`, and a `FAMILY_SHARED` transaction/is.test(text)) {
  failures.push('Unsupported Set App Account Token identifier regression matrix is missing.');
}

if (!/delayed\/retried Set App Account Token request created under binding epoch A.*moved to epoch B.*cannot overwrite the newer binding/is.test(text)) {
  failures.push('Stale Set App Account Token retry regression test is missing.');
}

if (!/Set App Account Token HTTP `429` or retryable provider error.*retry revalidates the current binding before resubmission/is.test(text)) {
  failures.push('Set App Account Token rate-limit/retry regression test is missing.');
}

if (!/auto-renewable test fixture.*current\/future renewals.*not back-written into historical past transactions/is.test(text)) {
  failures.push('Set App Account Token auto-renewable forward-only regression test is missing.');
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
