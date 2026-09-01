#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_30_DAY_VIP_ONE_TIME_ENTITLEMENT_RELEASE_GATE.md');
const termsPath = path.join(ROOT, 'tyconx-terms-of-service.md');
const purchasesPath = path.join(ROOT, 'tyconx-purchase-refund-policy.md');
const recurringPath = path.join(ROOT, 'TYCOONX_FUTURE_RECURRING_SUBSCRIPTION_RELEASE_GATE.md');
const crossPlatformPath = path.join(ROOT, 'TYCOONX_CROSS_PLATFORM_ENTITLEMENT_PARITY_RELEASE_GATE.md');
const conformityPath = path.join(ROOT, 'TYCOONX_EU_DIGITAL_PRODUCT_CONFORMITY_REMEDIES_RELEASE_GATE.md');
const progressPath = path.join(ROOT, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');
const renderedTermsPath = path.join(ROOT, 'app', 'tyconx-terms-of-service', 'page.tsx');
const renderedPurchasesPath = path.join(ROOT, 'app', 'tyconx-purchase-refund-policy', 'page.tsx');

const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

const [
  gate,
  terms,
  purchases,
  recurring,
  crossPlatform,
  conformity,
  progress,
  renderedTerms,
  renderedPurchases,
] = await Promise.all([
  readFile(gatePath, 'utf8'),
  readFile(termsPath, 'utf8'),
  readFile(purchasesPath, 'utf8'),
  readFile(recurringPath, 'utf8'),
  readFile(crossPlatformPath, 'utf8'),
  readFile(conformityPath, 'utf8'),
  readFile(progressPath, 'utf8'),
  readFile(renderedTermsPath, 'utf8'),
  readFile(renderedPurchasesPath, 'utf8'),
]);

// Core current-product classification.
requireMatch(gate, /one-time, non-renewing digital entitlement/i, '30-Day VIP gate lost the one-time/non-renewing product invariant.');
requireMatch(gate, /30 consecutive days/i, '30-Day VIP gate lost the 30-consecutive-day duration rule.');
requireMatch(gate, /does not automatically renew/i, '30-Day VIP gate lost the no-auto-renewal rule.');
requireMatch(gate, /does not create a recurring payment obligation/i, '30-Day VIP gate lost the no-recurring-billing rule.');
requireMatch(gate, /distinct from purchased Diamonds, Lifetime VIP, and any future recurring subscription/i, '30-Day VIP gate lost product isolation.');
requireMatch(gate, /future auto-renewing VIP product.*own product identifiers/is, '30-Day VIP gate lost future recurring-product separation.');

// Authoritative clock and idempotent fulfillment.
requireMatch(gate, /authoritative server\/provider evidence/i, 'Missing authoritative entitlement evidence rule.');
requireMatch(gate, /activation\/effective-start timestamp/i, 'Missing authoritative start timestamp requirement.');
requireMatch(gate, /authoritative expiry timestamp/i, 'Missing authoritative expiry timestamp requirement.');
requireMatch(gate, /fulfillment \*\*idempotent\*\*/i, 'Missing idempotent fulfillment rule.');
requireMatch(gate, /12 days remaining.*not receive a fresh 30 days/is, 'Missing restore-with-remaining-time safeguard.');
requireMatch(gate, /expired yesterday.*not receive another 30 days/is, 'Missing expired-restore safeguard.');
requireMatch(gate, /define the stacking rule before launch/i, 'Missing repeat-purchase/stacking decision gate.');

// Apple mapping.
requireMatch(gate, /Non-Renewing Subscription/i, 'Missing Apple Non-Renewing Subscription mapping checkpoint.');
requireMatch(gate, /does not renew automatically/i, 'Missing Apple no-auto-renewal taxonomy checkpoint.');
requireMatch(gate, /never configure the current product as an Auto-Renewable Subscription/i, 'Missing Apple anti-accidental-subscription rule.');

// Google Play mapping and lifecycle.
requireMatch(gate, /ProductType\.INAPP/i, 'Missing Google one-time INAPP classification.');
requireMatch(gate, /ProductType\.SUBS/i, 'Missing Google subscription separation.');
requireMatch(gate, /`PURCHASED`.*not while it is `PENDING`/is, 'Missing Google PURCHASED-vs-PENDING fulfillment rule.');
requireMatch(gate, /automatically refunded and revoked after three days/i, 'Missing Google three-day acknowledgement safeguard.');
requireMatch(gate, /consumable one-time product/i, 'Missing Google consumable repeat-purchase decision.');
requireMatch(gate, /non-consumable one-time product/i, 'Missing Google non-consumable repeat-purchase decision.');

// Xsolla one-time transaction/webhook handling.
requireMatch(gate, /one-time 30-day entitlement/i, 'Missing Xsolla one-time entitlement classification.');
requireMatch(gate, /not as an automatically renewing Xsolla subscription plan/i, 'Missing Xsolla recurring-product separation.');
requireMatch(gate, /`order_paid`\/payment handling idempotent/i, 'Missing Xsolla idempotent successful-payment handling.');
requireMatch(gate, /`order_canceled`\/refund handling transaction-specific/i, 'Missing Xsolla cancellation/refund isolation.');
requireMatch(gate, /expect provider retry delivery/i, 'Missing Xsolla webhook retry safeguard.');

// Consumer remedies and paid-product isolation.
requireMatch(gate, /§ 327b/i, 'Missing German digital-product supply checkpoint.');
requireMatch(gate, /§ 327l/i, 'Missing German cure checkpoint.');
requireMatch(gate, /§§ 327m and 327n/i, 'Missing German termination/price-reduction checkpoint.');
requireMatch(gate, /§§ 356 and 357a/i, 'Missing German withdrawal/service-performance checkpoint.');
requireMatch(gate, /material multi-day failure/i, 'Missing material-outage remedy review.');
requireMatch(gate, /must not automatically remove unrelated purchased Diamonds/i, 'Missing unrelated Diamonds isolation.');
requireMatch(gate, /or Lifetime VIP/i, 'Missing Lifetime VIP isolation.');
requireMatch(gate, /wrong SKU delivered/i, 'Missing product-mapping cure scenario.');
requireMatch(gate, /planned permanent TycoonX shutdown/i, 'Missing shutdown/remaining-period safeguard.');

// Canonical English meaning must remain aligned.
requireMatch(terms, /30-Day VIP.*one-time, non-renewing/is, 'Canonical Terms no longer clearly define 30-Day VIP as one-time/non-renewing.');
requireMatch(terms, /30 consecutive days/is, 'Canonical Terms lost the 30-day duration.');
requireMatch(terms, /does not automatically renew/i, 'Canonical Terms lost the no-auto-renewal statement.');
requireMatch(terms, /future recurring VIP product.*separate/is, 'Canonical Terms lost future recurring-product separation.');
requireMatch(terms, /30-Day VIP.*restored.*still valid/is, 'Canonical Terms lost still-valid 30-Day VIP restore handling.');

requireMatch(purchases, /30-Day VIP is a \*\*one-time, non-renewing entitlement\*\*/i, 'Canonical Purchases policy lost the 30-Day VIP classification.');
requireMatch(purchases, /30 consecutive days from activation or availability/i, 'Canonical Purchases policy lost the activation/availability clock.');
requireMatch(purchases, /does not automatically renew and does not create a recurring payment obligation/i, 'Canonical Purchases policy lost the no-recurring-payment rule.');
requireMatch(purchases, /Google Play.*must not silently create recurring billing/is, 'Canonical Purchases policy lost Google one-time protection.');
requireMatch(purchases, /30-Day VIP:\*\* restored from authoritative account or server records.*while still valid/is, 'Canonical Purchases policy lost authoritative restore handling.');

// Cross-gate consistency.
requireMatch(recurring, /one-time non-renewing 30-Day VIP/i, 'Future recurring subscription gate no longer preserves current 30-Day VIP classification.');
requireMatch(crossPlatform, /30-Day VIP/i, 'Cross-platform gate no longer covers 30-Day VIP.');
requireMatch(crossPlatform, /clock/i, 'Cross-platform gate lost 30-Day VIP clock protection.');
requireMatch(conformity, /30-Day VIP/i, 'Digital conformity gate no longer covers 30-Day VIP.');

// Localization/release invariants.
requireMatch(progress, /25\/25 localized hubs/i, 'Localization tracker no longer confirms all 25 localized hubs.');
requireMatch(progress, /100\/100 localized full documents/i, 'Localization tracker no longer confirms all 100 localized full documents.');
requireMatch(progress, /Exact next unfinished locale\/document: None/i, 'Localization tracker unexpectedly shows unfinished locale/document work.');
requireMatch(progress, /September 1, 2026/i, 'Localization tracker lost the September 1, 2026 full-release invariant.');
requireMatch(gate, /Last reviewed:\*\* September 1, 2026/i, '30-Day VIP gate review date is missing or stale.');

// Rendered canonical pages must still expose the current product meaning.
requireMatch(renderedTerms, /30-Day VIP/i, 'Rendered Terms lost 30-Day VIP wording.');
requireMatch(renderedPurchases, /30-Day VIP/i, 'Rendered Purchases page lost 30-Day VIP wording.');
requireMatch(renderedPurchases, /one-time, non-renewing entitlement/i, 'Rendered Purchases page lost one-time/non-renewing classification.');

// Display-brand and stale-live-copy guard. Technical path names are intentionally not scanned as prose.
for (const [name, text] of [
  ['30-Day VIP gate', gate],
  ['canonical Terms', terms],
  ['canonical Purchases policy', purchases],
  ['rendered Terms', renderedTerms],
  ['rendered Purchases policy', renderedPurchases],
]) {
  if (/TyconX/.test(text)) errors.push(`Displayed brand typo found in ${name}.`);
}

console.log('TycoonX one-time 30-Day VIP legal and entitlement QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: one-time classification, provider mapping, entitlement clock, restore, idempotency, consumer remedies, and paid-product isolation safeguards are present.');
}
