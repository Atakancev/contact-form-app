#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import process from 'node:process';

const file = 'TYCOONX_APPLE_EU_OCTOBER_2026_TRANSITION_GATE.md';
const text = await readFile(file, 'utf8');

const required = [
  ['Last reviewed: September 3, 2026', 'current review checkpoint'],
  ['TycoonX went to full release on **September 1, 2026**', 'live full-release status'],
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
  ['Apple In-App Purchase', 'Apple IAP channel distinction'],
  ['Xsolla', 'Xsolla alternative-payment channel distinction'],
  ['Diamonds', 'Diamond purchase-screen coverage'],
  ['30-Day VIP', 'one-time 30-Day VIP coverage'],
  ['Lifetime VIP', 'limited-window Lifetime VIP coverage'],
  ['refunds', 'refund reconciliation'],
  ['chargebacks', 'chargeback reconciliation'],
  ['tax', 'alternative-payment tax responsibility'],
  ['Current rollout decision after full release', 'post-release rollout decision'],
  ['must not be used to extend a Lifetime VIP countdown', 'promotion countdown transition safeguard'],
  ['Apple’s current guidance was rechecked on **September 3, 2026**', 'dated current Apple source checkpoint'],
];

const missing = required.filter(([needle]) => !text.includes(needle));
const forbidden = [
  [/For the September 1, 2026 TycoonX full release/i, 'stale pre-release rollout wording'],
  [/TycoonX goes to full release on September 1, 2026/i, 'stale future-tense release wording'],
  [/\bTyconX\b/, 'displayed TycoonX brand typo'],
  [/\bTycoonX\b[^\n]{0,100}\bbeta\b|\bbeta\b[^\n]{0,100}\bTycoonX\b/i, 'live-service beta wording'],
];
const forbiddenHits = forbidden.filter(([pattern]) => pattern.test(text));

console.log('TycoonX Apple EU October 2026 transition QA');
console.log(`Required checkpoints: ${required.length - missing.length}/${required.length}`);

if (missing.length || forbiddenHits.length) {
  console.error('\nFAILED:');
  for (const [, label] of missing) console.error(`- Missing ${label}`);
  for (const [, label] of forbiddenHits) console.error(`- Found ${label}`);
  process.exitCode = 1;
} else {
  console.log('\nPASS: Apple EU October transition gate contains the current post-release payment, reporting, entitlement, consumer-support, and brand checkpoints.');
}
