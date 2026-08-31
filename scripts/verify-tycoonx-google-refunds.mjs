#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gatePath = path.join(root, 'TYCOONX_GOOGLE_PLAY_2026_PAYMENT_TRANSITION_GATE.md');
const chargebackGatePath = path.join(root, 'TYCOONX_GOOGLE_PLAY_CHARGEBACK_REVIEW_RELEASE_GATE.md');
const [text, chargebackText] = await Promise.all([
  readFile(gatePath, 'utf8'),
  readFile(chargebackGatePath, 'utf8'),
]);

const required = [
  'Real-time Developer Notifications (RTDN)',
  'VoidedPurchaseNotification',
  'purchases.voidedpurchases.list',
  'messageId',
  'purchaseToken',
  'orderId',
  'ONE_TIME_PRODUCT_CANCELED',
  'REFUND_TYPE_FULL_REFUND',
  'REFUND_TYPE_QUANTITY_BASED_PARTIAL_REFUND',
  'refundableQuantity',
  'queryPurchaseHistory()',
  'duplicate RTDN replay',
  'pending purchase canceled before completion',
];

const chargebackRequired = [
  'PendingRefundReviewNotification',
  'pendingRefundToken',
  'orders.reviewrefund',
  '24 hours',
  'CHARGEBACK',
  'APPROVE',
  'DECLINE',
  'NEUTRAL',
  'first API call',
  'ignores later calls',
  'still return an `OK` status',
  'submitted_once',
  'immutable request hash',
  'The review response must not itself grant or revoke TycoonX value',
  'One-time 30-Day VIP',
  'Lifetime VIP',
  'unrelated purchased Diamonds',
];

const failures = [];
for (const token of required) {
  if (!text.includes(token)) {
    failures.push(`Missing Google Play refund/reconciliation safeguard: ${token}`);
  }
}

for (const token of chargebackRequired) {
  if (!chargebackText.includes(token)) {
    failures.push(`Missing collaborative chargeback safeguard: ${token}`);
  }
}

if (!/state-change signal, not as the complete purchase record/i.test(text)) {
  failures.push('RTDN is no longer explicitly treated as a signal requiring authoritative state verification where needed.');
}

if (!/periodic server-side pull reconciliation/i.test(text)) {
  failures.push('Voided Purchases API fallback reconciliation is missing.');
}

if (!/correct only the refunded quantity\/value/i.test(text)) {
  failures.push('Quantity-based partial-refund proportionality safeguard is missing.');
}

if (!/unrelated legitimate purchases/i.test(text)) {
  failures.push('Unrelated legitimate-purchase protection is missing.');
}

if (!/lawful refund is not mislabeled as fraud/i.test(text)) {
  failures.push('Refund-versus-fraud classification safeguard is missing.');
}

if (!/first successful `ReviewRefund` submission[\s\S]*operationally final/i.test(chargebackText)) {
  failures.push('First ReviewRefund submission is no longer explicitly treated as operationally final.');
}

if (!/must not[\s\S]*placeholder\/default data/i.test(chargebackText)) {
  failures.push('Placeholder-first ReviewRefund submission safeguard is missing.');
}

if (!/later HTTP\/API `OK` response[\s\S]*proof that Google replaced the first review response/i.test(chargebackText)) {
  failures.push('False-success safeguard for ignored later ReviewRefund calls is missing.');
}

if (!/ReviewRefund request or response must never directly[\s\S]*grant Diamonds/i.test(chargebackText)) {
  failures.push('ReviewRefund is not sufficiently isolated from entitlement grants.');
}

if (!/pending review alone does not justify revocation/i.test(chargebackText)) {
  failures.push('Lifetime VIP pending-review non-revocation safeguard is missing.');
}

if (!/chargeback review must not automatically trigger account suspension or termination/i.test(chargebackText)) {
  failures.push('Good-faith chargeback review is no longer isolated from automatic account enforcement.');
}

if (/\bTyconX\b/.test(chargebackText)) {
  failures.push('Displayed/internal legal prose contains stale TyconX branding.');
}

if (/\bbeta\b/i.test(chargebackText)) {
  failures.push('Chargeback gate contains stale live-service beta wording.');
}

if (failures.length > 0) {
  console.error('TycoonX Google Play refund reconciliation verifier failed:\n');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX Google Play refund and collaborative chargeback verifier passed.');
