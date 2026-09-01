#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gate = await readFile(path.join(root, 'TYCOONX_PRICING_CATALOG_CONFIGURATION_ERROR_RELEASE_GATE.md'), 'utf8');
const purchases = await readFile(path.join(root, 'tyconx-purchase-refund-policy.md'), 'utf8');
const termsGate = await readFile(path.join(root, 'TYCOONX_GERMAN_TERMS_INCORPORATION_CONTRACT_RECORD_GATE.md'), 'utf8');
const conformity = await readFile(path.join(root, 'TYCOONX_EU_DIGITAL_PRODUCT_CONFORMITY_REMEDIES_RELEASE_GATE.md'), 'utf8');
const apple = await readFile(path.join(root, 'TYCOONX_APPLE_REFUND_ENTITLEMENT_RELEASE_GATE.md'), 'utf8');
const google = await readFile(path.join(root, 'TYCOONX_GOOGLE_PLAY_2026_PAYMENT_TRANSITION_GATE.md'), 'utf8');
const xsolla = await readFile(path.join(root, 'TYCOONX_XSOLLA_REFUND_CHARGEBACK_RELEASE_GATE.md'), 'utf8');
const progress = await readFile(path.join(root, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md'), 'utf8');

const failures = [];

function requireText(text, token, message) {
  if (!text.includes(token)) failures.push(message ?? `Missing required safeguard: ${token}`);
}

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) failures.push(message);
}

for (const token of [
  'BGB § 119',
  'BGB § 121',
  'BGB § 122',
  'BGB § 143',
  'do not state that every wrong price is automatically void',
  'No unilateral retroactive repricing of a completed one-time purchase',
  'wrong catalog price is different from a wrong fulfillment',
  'duplicate or excess entitlement grant',
  'Apple App Store',
  'Google Play',
  'Xsolla webshop',
  'purchased Diamonds',
  '30-Day VIP',
  'Lifetime VIP',
  'Promotion and coupon mistakes',
  'Regional pricing, tax, and FX are not automatically errors',
  'Account compromise remains separate',
  'September 1, 2026',
]) requireText(gate, token);

requireMatch(
  gate,
  /obviousness alone is not a replacement for the statutory analysis and required declaration/i,
  'Missing safeguard against treating obviousness as automatic invalidity.',
);

requireMatch(
  gate,
  /must not silently become a different completed price after the fact/i,
  'Missing no-silent-retroactive-repricing safeguard.',
);

requireMatch(
  gate,
  /do not secretly keep the original payment and also remove the paid entitlement/i,
  'Missing refund-versus-entitlement double-loss safeguard.',
);

requireMatch(
  gate,
  /checkout clearly sold \*\*Lifetime VIP\*\* and TycoonX accidentally activated one-time 30-Day VIP/i,
  'Missing Lifetime VIP product-mapping defect safeguard.',
);

requireMatch(
  gate,
  /do not remove unrelated purchased Diamonds, unrelated 30-Day VIP time, or a separate valid Lifetime VIP/i,
  'Missing unrelated paid-value isolation.',
);

requireMatch(
  gate,
  /official interface normally presented and processed/i,
  'Missing protection against labeling ordinary acceptance of a misconfigured offer as fraud.',
);

requireMatch(
  gate,
  /valid low-price transaction is disputed as unauthorized/i,
  'Missing account-compromise versus price-validity separation.',
);

requireText(
  purchases,
  'subject to correction of obvious pricing or configuration errors where permitted by law',
  'Canonical Purchases policy lost the legally limited obvious-error baseline.',
);

requireText(
  purchases,
  'Mandatory rights and any already binding contract remain governed by applicable law.',
  'Canonical Purchases policy lost the binding-contract and mandatory-rights safeguard for obvious errors.',
);

requireText(
  purchases,
  'Duplicate entitlements or virtual value created by retries, replayed webhooks, store-notification duplication, race conditions, bugs, restore errors, compromised credentials, or similar technical failures may be removed or consolidated so the account receives only the valid value actually purchased.',
  'Canonical Purchases policy lost duplicate-grant correction language.',
);

requireText(
  termsGate,
  'the final confirmed purchase price for a completed one-time purchase remains the transaction price even if a general pricing page changes later, subject to mandatory law and a valid correction of an obvious error where legally permitted.',
  'German contract-record gate lost its completed-price/obvious-error distinction.',
);

requireMatch(
  conformity,
  /Diamonds/i,
  'Digital-product conformity gate no longer covers Diamonds.',
);
requireMatch(
  conformity,
  /30-Day VIP/i,
  'Digital-product conformity gate no longer covers 30-Day VIP.',
);
requireMatch(
  conformity,
  /Lifetime VIP/i,
  'Digital-product conformity gate no longer covers Lifetime VIP.',
);

for (const [label, text] of [
  ['pricing/catalog error gate', gate],
  ['canonical Purchases policy', purchases],
  ['German contract-record gate', termsGate],
  ['digital conformity gate', conformity],
  ['Apple refund gate', apple],
  ['Google Play payment gate', google],
  ['Xsolla refund gate', xsolla],
]) {
  if (/\bTyconX\b/.test(text)) failures.push(`Displayed legacy brand spelling found in ${label}.`);
}

if (/\bbeta\b/i.test(gate)) failures.push('Stale live-service beta wording found in pricing/catalog error gate.');
if (/\bbeta\b/i.test(purchases)) failures.push('Stale live-service beta wording found in canonical Purchases policy.');

requireText(
  progress,
  '100/100 localized full documents are currently confirmed current',
  'Localization progress no longer confirms all 100 localized full documents as current.',
);
requireText(
  progress,
  'Exact next unfinished locale/document: None',
  'Localization queue is no longer closed; localization must resume before incremental hardening.',
);
requireText(
  progress,
  'September 1, 2026',
  'Full-release date invariant is missing from localization progress.',
);

console.log('TycoonX pricing, catalog and configuration error QA');

if (failures.length > 0) {
  console.error('\nFAILED:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('PASS: German mistake-law safeguards, contract/merchant separation, no silent retroactive repricing, fulfillment-versus-pricing classification, provider reconciliation, entitlement isolation, localization, brand and release invariants are present.');
