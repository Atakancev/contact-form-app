#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import process from 'node:process';

const file = 'TYCOONX_APPLE_EU_OCTOBER_2026_TRANSITION_GATE.md';
const text = await readFile(file, 'utf8');

const required = [
  ['October 1, 2026', 'October 1, 2026 effective date'],
  ['Attachment 14', 'Attachment 14'],
  ['12 months', '12-month payment-election lock'],
  ['without an actionable link', 'non-actionable-offer election distinction'],
  ['StoreKit External Purchases or Offers Entitlement', 'StoreKit entitlement'],
  ['ExternalPurchaseCustomLink', 'ExternalPurchaseCustomLink API'],
  ['canMakePayments', 'canMakePayments runtime check'],
  ['isEligible', 'ExternalPurchaseCustomLink eligibility check'],
  ['showNotice', 'Apple disclosure sheet call'],
  ['at least as prominently', 'Apple IAP prominence requirement'],
  ['App Store product page may not include information', 'App Store product-page alternative-payment restriction'],
  ['PCI Level 1', 'PSP PCI Level 1 review gate'],
  ['within 15 days', 'monthly reporting deadline'],
  ['seven days', 'actionable-link attribution window'],
  ['parental gate', 'child-safety parental gate'],
  ['refunds', 'refund reconciliation'],
  ['chargebacks', 'chargeback reconciliation'],
  ['tax', 'alternative-payment tax responsibility'],
];

const missing = required.filter(([needle]) => !text.includes(needle));

console.log('TycoonX Apple EU October 2026 transition QA');
console.log(`Required checkpoints: ${required.length - missing.length}/${required.length}`);

if (missing.length) {
  console.error('\nFAILED:');
  for (const [, label] of missing) console.error(`- Missing ${label}`);
  process.exitCode = 1;
} else {
  console.log('\nPASS: Apple EU October transition gate contains all current release checkpoints.');
}
