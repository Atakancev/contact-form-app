#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import process from 'node:process';

const gate = await readFile('TYCOONX_APPLE_EU_ATTACHMENT14_COMMISSION_ATTRIBUTION_RELEASE_GATE.md', 'utf8');
const transition = await readFile('TYCOONX_APPLE_EU_OCTOBER_2026_TRANSITION_GATE.md', 'utf8');
const terms = await readFile('tyconx-terms-of-service.md', 'utf8');
const purchases = await readFile('tyconx-purchase-refund-policy.md', 'utf8');
const progress = await readFile('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md', 'utf8');

const requiredGate = [
  ['Last reviewed: September 4, 2026', 'current review date'],
  ['TycoonX went to full release on **September 1, 2026**', 'full-release status'],
  ['October 1, 2026', 'Attachment 14 transition date'],
  ['whichever is later', 'later acceptance/effective-date rule'],
  ['Apple In-App Purchase | **26%** | **15%**', 'Apple IAP 26/15 rate card'],
  ['Alternative payment processing within the app | **20%** | **10%**', 'alternative in-app 20/10 rate card'],
  ['**15% store services commission**', 'out-of-app 15 percent rate'],
  ['within **seven (7) calendar days', 'seven-calendar-day attribution window'],
  ['all digital goods and services usable within that app can be treated as promoted', 'broad promoted-goods attribution rule'],
  ['independently visits the public TycoonX webshop', 'standalone-webshop distinction'],
  ['do not intentionally drop or rewrite qualifying referral/token evidence', 'anti-attribution-evasion safeguard'],
  ['Xsolla settlement is treated as final net revenue without Apple reconciliation', 'provider-settlement reconciliation blocker'],
  ['final total customer price', 'customer-price ledger field'],
  ['transaction taxes/VAT', 'tax ledger field'],
  ['Apple commission basis', 'commission-basis ledger field'],
  ['EUR 10.00', 'commission calculation example'],
  ['Apple commission credit must not re-grant Diamonds or VIP', 'invoice-credit entitlement isolation'],
  ['do not expire solely because time passes', 'purchased Diamond non-expiry'],
  ['one-time, non-renewing 30-day entitlement', '30-Day VIP definition'],
  ['one-time promotional entitlement available only during selected genuine sales windows', 'Lifetime VIP limited-window definition'],
  ['may never return', 'Lifetime VIP non-return warning'],
  ['future purchases', 'future price-change boundary'],
  ['later price decrease does not automatically create a refund', 'no automatic price-match rule'],
  ['later price increase does not create an extra charge', 'no retroactive increase rule'],
  ['TycoonX currently has no recurring subscription product', 'no-current-recurring-product invariant'],
  ['Do not enable the Attachment 14 alternative-payment configuration', 'P0 fail-closed rule'],
  ['Minimum production regression scenarios', 'production regression matrix'],
  ["Apple's official EU payment-options guidance and current Developer Program License Agreement were rechecked on **September 4, 2026**", 'dated Apple source checkpoint'],
];

const requiredTransition = [
  ['Attachment 14', 'transition gate Attachment 14'],
  ['12 months', '12-month election lock'],
  ['within 15 days', 'monthly reporting deadline'],
  ['EU-specific VAT ID', 'VAT-ID blocker'],
  ['ExternalPurchaseCustomLink', 'StoreKit external-purchase API'],
];

const requiredCanonical = [
  [terms, '30-Day VIP', 'canonical Terms 30-Day VIP'],
  [terms, 'Lifetime VIP', 'canonical Terms Lifetime VIP'],
  [terms, 'Purchased Diamonds', 'canonical Terms purchased Diamonds'],
  [purchases, '30-Day VIP', 'Purchases policy 30-Day VIP'],
  [purchases, 'Lifetime VIP', 'Purchases policy Lifetime VIP'],
  [purchases, 'rights that cannot legally be waived', 'Purchases policy mandatory-rights safeguard'],
];

const missing = [];
for (const [needle, label] of requiredGate) if (!gate.includes(needle)) missing.push(label);
for (const [needle, label] of requiredTransition) if (!transition.includes(needle)) missing.push(label);
for (const [source, needle, label] of requiredCanonical) if (!source.includes(needle)) missing.push(label);

if (!/25\s*\/\s*25/.test(progress)) missing.push('25/25 localized hubs');
if (!/100\s*\/\s*100/.test(progress)) missing.push('100/100 localized full documents');
if (!/Exact next unfinished locale\/document[^\n]*None/i.test(progress)) missing.push('no unfinished locale/document');
if (!/September 1, 2026/.test(progress)) missing.push('full-release date in localization tracker');

const forbidden = [
  [/\bTycoonX\b[^\n]{0,90}\bbeta\b|\bbeta\b[^\n]{0,90}\bTycoonX\b/i, 'live-service beta wording in new gate'],
  [/Apple surcharge/i, 'misleading Apple surcharge label in new gate'],
  [/30-Day VIP[^\n]{0,80}(auto-renew|recurring subscription)/i, '30-Day VIP recurring-product drift'],
  [/Lifetime VIP[^\n]{0,80}(auto-renew|recurring subscription)/i, 'Lifetime VIP recurring-product drift'],
];
const forbiddenHits = forbidden.filter(([pattern]) => pattern.test(gate));

console.log('TycoonX Apple EU Attachment 14 commission/attribution QA');
console.log(`Required checkpoints: ${requiredGate.length + requiredTransition.length + requiredCanonical.length + 4 - missing.length}/${requiredGate.length + requiredTransition.length + requiredCanonical.length + 4}`);

if (missing.length || forbiddenHits.length) {
  console.error('\nFAILED:');
  for (const label of missing) console.error(`- Missing ${label}`);
  for (const [, label] of forbiddenHits) console.error(`- Found ${label}`);
  process.exitCode = 1;
} else {
  console.log('\nPASS: current Apple EU Attachment 14 commission rates, seven-day actionable-link attribution, entitlement isolation, pricing, consumer-rights, and localization invariants are present.');
}
