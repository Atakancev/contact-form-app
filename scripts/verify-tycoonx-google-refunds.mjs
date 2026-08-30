#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gatePath = path.join(root, 'TYCOONX_GOOGLE_PLAY_2026_PAYMENT_TRANSITION_GATE.md');
const text = await readFile(gatePath, 'utf8');

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

const failures = [];
for (const token of required) {
  if (!text.includes(token)) {
    failures.push(`Missing Google Play refund/reconciliation safeguard: ${token}`);
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

if (failures.length > 0) {
  console.error('TycoonX Google Play refund reconciliation verifier failed:\n');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX Google Play refund reconciliation verifier passed.');
