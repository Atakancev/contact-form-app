#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gatePath = path.join(root, 'TYCOONX_GOOGLE_PLAY_2026_PAYMENT_TRANSITION_GATE.md');
const chargebackGatePath = path.join(root, 'TYCOONX_GOOGLE_PLAY_CHARGEBACK_REVIEW_RELEASE_GATE.md');
const modernizationGatePath = path.join(root, 'TYCOONX_GOOGLE_PLAY_REFUND_API_MODERNIZATION_2026_GATE.md');
const [text, chargebackText, modernizationText] = await Promise.all([
  readFile(gatePath, 'utf8'),
  readFile(chargebackGatePath, 'utf8'),
  readFile(modernizationGatePath, 'utf8'),
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

const modernizationRequired = [
  'queryPurchaseHistory()',
  'deprecated since Play Billing Library 7',
  'queryPurchasesAsync(QueryPurchaseParams, PurchasesResponseListener)',
  'purchases.voidedpurchases.list',
  'orders.refund',
  'purchases.subscriptions.refund',
  'revoke=true',
  'Consumed in-app items',
  'TycoonX backend ledger',
  'Purchased Diamonds',
  'One-time 30-Day VIP',
  'Lifetime VIP',
  'mandatory consumer remedy',
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

for (const token of modernizationRequired) {
  if (!modernizationText.includes(token)) {
    failures.push(`Missing Google Play refund API modernization safeguard: ${token}`);
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

if (!/Do not reintroduce `queryPurchaseHistory\(\)` as a required refund, restoration, fraud, chargeback, or entitlement-reconciliation dependency/i.test(modernizationText)) {
  failures.push('Deprecated queryPurchaseHistory dependency blocker is missing.');
}

if (!/For purchases that need processing on-device, use `queryPurchasesAsync/i.test(modernizationText)) {
  failures.push('Current on-device purchase processing path is missing.');
}

if (!/voided or cancelled purchases[\s\S]*server-side Voided Purchases API/i.test(modernizationText)) {
  failures.push('Voided purchases are no longer explicitly routed to the server-side API.');
}

if (!/historical purchase record[\s\S]*TycoonX backend/i.test(modernizationText)) {
  failures.push('Historical purchase authority is no longer assigned to the backend ledger.');
}

if (!/legacy `purchases\.subscriptions\.refund` endpoint is deprecated[\s\S]*`orders\.refund`/i.test(modernizationText)) {
  failures.push('Deprecated subscription refund endpoint migration rule is missing.');
}

if (!/Do not deliberately create acknowledgement failures as a pseudo-refund mechanism/i.test(modernizationText)) {
  failures.push('Explicit-refund versus acknowledgement-failure safeguard is missing.');
}

if (!/Never double-remove the same Diamond value/i.test(modernizationText)) {
  failures.push('Diamond refund idempotency safeguard is missing.');
}

if (!/30-Day VIP remains a one-time, non-renewing 30-day entitlement/i.test(modernizationText)) {
  failures.push('30-Day VIP refund invariant is missing.');
}

if (!/Lifetime VIP remains a one-time promotional entitlement available only during selected genuine sales windows/i.test(modernizationText)) {
  failures.push('Lifetime VIP limited-sales-window refund invariant is missing.');
}

if (!/API\/tool limitation is used to deny a mandatory consumer remedy/i.test(modernizationText)) {
  failures.push('Mandatory consumer remedy safeguard is missing from refund modernization gate.');
}

for (const [label, candidate] of [
  ['chargeback gate', chargebackText],
  ['refund modernization gate', modernizationText],
]) {
  if (/\bTyconX\b/.test(candidate)) {
    failures.push(`${label} contains stale displayed TyconX branding.`);
  }
  if (/\bTycoonX\s+beta\b/i.test(candidate)) {
    failures.push(`${label} contains stale live-service beta wording.`);
  }
}

if (failures.length > 0) {
  console.error('TycoonX Google Play refund reconciliation verifier failed:\n');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX Google Play refund, refund-API modernization, and collaborative chargeback verifier passed.');
