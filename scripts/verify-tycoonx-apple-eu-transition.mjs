#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import process from 'node:process';

const file = 'TYCOONX_APPLE_EU_OCTOBER_2026_TRANSITION_GATE.md';
const text = await readFile(file, 'utf8');

const required = [
  ['October 1, 2026', 'October 1, 2026 effective date'],
  ['whichever is later', 'later-of October 1 / agreement effective-date rule'],
  ['Attachment 14', 'Attachment 14'],
  ['12 months', '12-month payment-election lock'],
  ['without an actionable link', 'non-actionable-offer election distinction'],
  ['genuine opportunity to choose alternative payment processing within the app', 'alternative-only in-app processing choice'],
  ['same screen as any out-of-app offers', 'same-screen alternative-processing requirement'],
  ['StoreKit External Purchases or Offers Entitlement', 'StoreKit entitlement'],
  ['ExternalPurchaseCustomLink', 'ExternalPurchaseCustomLink API'],
  ['canMakePayments', 'canMakePayments runtime check'],
  ['isEligible', 'ExternalPurchaseCustomLink eligibility check'],
  ['showNotice', 'Apple disclosure sheet call'],
  ['at least as prominently', 'Apple IAP prominence requirement'],
  ['App Store product page may not include information', 'App Store product-page alternative-payment restriction'],
  ['PCI Level 1', 'PSP PCI Level 1 review gate'],
  ['within 15 days', 'monthly reporting deadline'],
  ['tokens that did not result in a completed purchase', 'transactionless-token reporting'],
  ['26.4 and later', 'External Purchase Server API OS-version split'],
  ['OS versions earlier than 26.4', 'pre-26.4 manual reporting route'],
  ['EU-specific VAT ID', 'EU alternative-payment VAT-ID requirement'],
  ['one EU VAT ID is sufficient for all EU storefronts', 'single-EU-VAT-ID coverage rule'],
  ['within 30 days of receiving the invoice', 'Apple invoice payment deadline'],
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
