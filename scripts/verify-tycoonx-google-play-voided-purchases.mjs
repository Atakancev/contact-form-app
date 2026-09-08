#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gatePath = path.join(root, 'TYCOONX_GOOGLE_PLAY_VOIDED_PURCHASES_RECONCILIATION_RELEASE_GATE.md');
const modernizationPath = path.join(root, 'TYCOONX_GOOGLE_PLAY_REFUND_API_MODERNIZATION_2026_GATE.md');
const rtdnPath = path.join(root, 'TYCOONX_GOOGLE_PLAY_RTDN_PUBSUB_AUTHENTICITY_RELEASE_GATE.md');
const progressPath = path.join(root, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const [gate, modernization, rtdn, progress] = await Promise.all([
  readFile(gatePath, 'utf8'),
  readFile(modernizationPath, 'utf8'),
  readFile(rtdnPath, 'utf8'),
  readFile(progressPath, 'utf8'),
]);

const failures = [];

const required = [
  'purchases.voidedpurchases.list',
  'cannot be older than 30 days',
  'current time minus 30 days',
  'see the record as voided',
  '`voidedTimeMillis`',
  'pagination token',
  '`nextPageToken`',
  'includeQuantityBasedPartialRefund',
  'defaults to `false`',
  '`voidedQuantity`',
  'default `type` is `0`',
  '`type=1`',
  '`orderId`',
  '`purchaseToken`',
  '`voidedSource`',
  '`voidedReason`',
  '`androidpublisher` OAuth scope',
  'durable reconciliation boundary',
  'deliberate overlap',
  'cumulative correction budget',
  'Purchased Diamonds',
  'One-time 30-Day VIP',
  'Lifetime VIP',
  'mandatory consumer rights',
];

for (const token of required) {
  if (!gate.includes(token)) {
    failures.push(`Missing Voided Purchases safeguard: ${token}`);
  }
}

if (!/startTime[\s\S]*cannot be older than 30 days/i.test(gate)) {
  failures.push('Google 30-day startTime query boundary is missing.');
}

if (!/filters apply[\s\S]*see the record as voided[\s\S]*not[\s\S]*voidedTimeMillis/i.test(gate)) {
  failures.push('Provider-seen-time versus voidedTimeMillis distinction is missing.');
}

if (!/pagination token[\s\S]*ignores `startTime` and `endTime`/i.test(gate)) {
  failures.push('Pagination-token time-filter override safeguard is missing.');
}

if (!/follow every returned pagination token[\s\S]*chain is exhausted/i.test(gate)) {
  failures.push('Full token-pagination exhaustion requirement is missing.');
}

if (!/advance the durable boundary only after[\s\S]*complete interval[\s\S]*durably reconciled/i.test(gate)) {
  failures.push('Crash-safe scan-boundary advancement rule is missing.');
}

if (!/overlap[\s\S]*idempotently[\s\S]*second correction/i.test(gate)) {
  failures.push('Overlap-window idempotency safeguard is missing.');
}

if (!/includeQuantityBasedPartialRefund=true/i.test(gate)) {
  failures.push('Explicit inclusion of quantity-based partial refunds is missing.');
}

if (!/default `false`[\s\S]*release blocker/i.test(gate)) {
  failures.push('Default-false partial-refund omission is not release-blocked.');
}

if (!/cumulative correction[\s\S]*original verified purchased quantity/i.test(gate)) {
  failures.push('Cumulative quantity correction cap is missing.');
}

if (!/quantity 5[\s\S]*200-Diamond[\s\S]*1,000 Diamonds[\s\S]*400 Diamonds/i.test(gate)) {
  failures.push('Concrete multi-quantity Diamond partial-refund example is missing.');
}

if (!/default `type=0`[\s\S]*future subscription/i.test(gate)) {
  failures.push('Default type=0 future-subscription scope safeguard is missing.');
}

if (!/shared subscription `purchaseToken`[\s\S]*`orderId`/i.test(gate)) {
  failures.push('Subscription renewal order identity safeguard is missing.');
}

if (!/`voidedSource=developer`[\s\S]*not evidence[\s\S]*chargeback/i.test(gate)) {
  failures.push('Developer-initiated void is not isolated from player-abuse classification.');
}

if (!/`voidedReason=unacknowledged purchase`[\s\S]*not proof of fraud/i.test(gate)) {
  failures.push('Unacknowledged-purchase operational-failure safeguard is missing.');
}

if (!/Transaction-specific correction and account-level enforcement are separate decisions/i.test(gate)) {
  failures.push('Transaction correction is not separated from account sanctions.');
}

if (!/RTDN[\s\S]*Voided Purchases API[\s\S]*one durable provider transaction[\s\S]*one cumulative correction budget/i.test(gate)) {
  failures.push('Cross-channel refund idempotency convergence is missing.');
}

if (!/Purchased Diamonds do not expire merely because time passes/i.test(gate)) {
  failures.push('Purchased Diamond non-expiry invariant is missing.');
}

if (!/30-Day VIP remains one non-renewing entitlement lasting 30 consecutive days/i.test(gate)) {
  failures.push('30-Day VIP product invariant is missing.');
}

if (!/Lifetime VIP remains a one-time promotional entitlement available only during selected genuine sales windows/i.test(gate)) {
  failures.push('Lifetime VIP selected-sales-window invariant is missing.');
}

if (!/historical Lifetime VIP record reopens a closed sales window/i.test(gate)) {
  failures.push('Historical Lifetime VIP reopening regression case is missing.');
}

if (!/API limitation is used to deny a mandatory consumer remedy/i.test(gate)) {
  failures.push('Mandatory consumer-remedy override is missing.');
}

if (!/purchases\.voidedpurchases\.list/i.test(modernization)) {
  failures.push('Refund modernization gate no longer references the Voided Purchases API.');
}

if (!/duplicate RTDN delivery[\s\S]*Voided Purchases polling/i.test(modernization)) {
  failures.push('Existing modernization cross-path idempotency rule is missing.');
}

if (!/state-change signal/i.test(rtdn) || !/authoritative Google/i.test(rtdn)) {
  failures.push('RTDN gate no longer requires authoritative Google reconciliation.');
}

if (!/25\/25/i.test(progress) || !/all 100 localized full documents are current/i.test(progress)) {
  failures.push('Localization tracker no longer confirms 25/25 hubs and 100 current localized documents.');
}

for (const [label, text] of [
  ['Voided Purchases gate', gate],
  ['refund modernization gate', modernization],
  ['RTDN gate', rtdn],
]) {
  if (/\bTyconX\b/.test(text)) {
    failures.push(`${label} contains stale displayed TyconX branding.`);
  }
  if (/\bTycoonX\s+beta\b/i.test(text)) {
    failures.push(`${label} contains stale live-service beta wording.`);
  }
}

if (!/TycoonX went to full release on \*\*September 1, 2026\*\*/i.test(progress)) {
  failures.push('Progress tracker no longer confirms the September 1, 2026 full release.');
}

if (failures.length > 0) {
  console.error('TycoonX Google Play Voided Purchases reconciliation verifier failed:\n');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX Google Play Voided Purchases reconciliation gate passed.');
