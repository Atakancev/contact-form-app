#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import process from 'node:process';

const file = 'TYCOONX_APPLE_EU_OCTOBER_2026_TRANSITION_GATE.md';
const text = await readFile(file, 'utf8');

const required = [
  ['Last reviewed: September 9, 2026', 'current review checkpoint'],
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
  ['payment-authorization signal', 'canMakePayments authorization-only boundary'],
  ['not as proof that the user is an adult or as an age-band classifier', 'no canMakePayments age inference'],
  ['isEligible', 'ExternalPurchaseCustomLink eligibility check'],
  ['showNotice', 'Apple disclosure sheet call'],
  ['alternative in-app payment flow must complete within TycoonX itself', 'same-app alternative-processing boundary'],
  ['hidden, dormant, or undocumented payment functionality', 'hidden-payment-functionality prohibition'],
  ['actionable out-of-app offer must open outside TycoonX', 'out-of-app destination boundary'],
  ['must not complete inside an embedded web view', 'embedded-web-view prohibition'],
  ['accurate information about the digital goods or services available at the destination', 'out-of-app offer accuracy requirement'],
  ['at least as prominently', 'Apple IAP prominence requirement'],
  ['App Store product page may not include information', 'App Store product-page alternative-payment restriction'],
  ['PCI Level 1', 'PSP PCI Level 1 review gate'],
  ['Payment Services Directive', 'PSP non-card payment-services compliance gate'],
  ['provided to testers **at no cost**', 'TestFlight alternative-payment no-cost rule'],
  ['within 15 days', 'monthly reporting deadline'],
  ['tokens that did not result in a completed purchase', 'transactionless-token reporting'],
  ['26.4 and later', 'External Purchase Server API OS-version split'],
  ['OS versions earlier than 26.4', 'pre-26.4 manual reporting route'],
  ['20% Apple commission', 'current alternative-processing commission snapshot'],
  ['26% Apple commission', 'current Apple IAP commission snapshot'],
  ['15% store-services commission', 'current out-of-app commission snapshot'],
  ['7 calendar days', 'current actionable-link attribution window'],
  ['dated operational snapshot', 'commission-rate change-safety boundary'],
  ['Third-party seller / merchant-of-record pass-through blocker', 'third-party seller pass-through control'],
  ['made by someone other than the developer', 'third-party seller Attachment 14 trigger'],
  ['merchant of record', 'merchant-of-record distinction'],
  ['transaction-level records', 'provider transaction-level reconciliation evidence'],
  ['EU-specific VAT ID', 'EU alternative-payment VAT-ID requirement'],
  ['one EU VAT ID is sufficient for all EU storefronts', 'single-EU-VAT-ID coverage rule'],
  ['within 30 calendar days of the invoice being issued', 'Apple invoice payment deadline'],
  ['payment dispute before the amount is due', 'Apple invoice-dispute timing'],
  ['future-invoice credit', 'Apple refund commission-credit reconciliation'],
  ['three years after transmission of the relevant reports', 'Apple books-and-records retention period'],
  ['audit request must be accommodated within **30 days**', 'Apple audit response timing'],
  ['unrelated player data', 'audit-retention privacy minimization'],
  ['all apps that offer alternative payment options in the EU', 'all-apps EU child-safety scope'],
  ['parental gate', 'child-safety parental gate'],
  ['Declared Age Range API', 'Declared Age Range separation'],
  ['AgeRangeService.isEligibleForAgeFeatures', 'age-feature eligibility signal'],
  ['AgeRangeService.requiredRegulatoryFeatures', 'current regulatory-feature signal'],
  ['future software update', 'future Apple child-safety API checkpoint'],
  ['RESCIND_CONSENT', 'parental consent-revocation notification'],
  ['Sandbox can test age-range scenarios', 'age-assurance sandbox coverage'],
  ['least information needed for the payment/age decision', 'age-data minimization'],
  ['Apple In-App Purchase', 'Apple IAP channel distinction'],
  ['Xsolla', 'Xsolla alternative-payment channel distinction'],
  ['Diamonds', 'Diamond entitlement protection'],
  ['one-time non-renewing 30-Day VIP', 'one-time 30-Day VIP protection'],
  ['valid Lifetime VIP', 'limited-window Lifetime VIP protection'],
  ['refunds', 'refund reconciliation'],
  ['chargebacks', 'chargeback reconciliation'],
  ['tax', 'alternative-payment tax responsibility'],
  ['Current rollout decision after full release', 'post-release rollout decision'],
  ['must not be used to extend a Lifetime VIP countdown', 'promotion countdown transition safeguard'],
  ['Apple’s current guidance and Attachment 14 were rechecked on **September 9, 2026**', 'dated current Apple source checkpoint'],
];

const missing = required.filter(([needle]) => !text.includes(needle));
const forbidden = [
  [/For the September 1, 2026 TycoonX full release/i, 'stale pre-release rollout wording'],
  [/TycoonX goes to full release on September 1, 2026/i, 'stale future-tense release wording'],
  [/\bTyconX\b/, 'displayed TycoonX brand typo'],
  [/\bTycoonX\b[^\n]{0,100}\bbeta\b|\bbeta\b[^\n]{0,100}\bTycoonX\b/i, 'live-service beta wording'],
  [/canMakePayments[^\n]{0,120}(?:proves?|confirms?|means?)\s+(?:the\s+)?(?:user\s+)?(?:is\s+)?(?:an\s+)?adult/i, 'unsafe canMakePayments adult inference'],
  [/merchant of record[^\n]{0,120}(?:means|proves|eliminates|removes)[^\n]{0,80}Apple commission/i, 'unsafe merchant-of-record Apple-obligation inference'],
  [/embedded web view[^\n]{0,80}(?:required|permitted|allowed)[^\n]{0,80}out-of-app/i, 'unsafe embedded-web-view out-of-app rule'],
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
  console.log('\nPASS: Apple EU October transition gate contains the current post-release payment-election, payment-flow, PSP, commission, third-party seller, reporting, audit, child-safety, age-assurance, entitlement, consumer-support, and brand checkpoints.');
}
