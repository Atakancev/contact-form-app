#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gate = await readFile(path.join(root, 'TYCOONX_APPLE_IAP_PRICE_SCHEDULE_TAX_INHERITANCE_RELEASE_GATE.md'), 'utf8');
const pricing = await readFile(path.join(root, 'TYCOONX_PRICING_CATALOG_CONFIGURATION_ERROR_RELEASE_GATE.md'), 'utf8');
const purchases = await readFile(path.join(root, 'tyconx-purchase-refund-policy.md'), 'utf8');
const progress = await readFile(path.join(root, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md'), 'utf8');

const failures = [];

function requireText(text, token, message) {
  if (!text.includes(token)) failures.push(message ?? `Missing required safeguard: ${token}`);
}

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) failures.push(message);
}

for (const token of [
  'TycoonX Apple IAP Price Schedule & Tax Inheritance Release Gate',
  'Global Price Change',
  'Temporary Price Change',
  'Custom Price Change',
  'one year',
  'deletes any scheduled price changes',
  'no longer inherits later changes',
  'Manually Adjusted',
  'future transactions only',
  'does not change the IAP price',
  'Match to parent app',
  'PAngV § 3',
  'Lifetime VIP',
  '30-Day VIP',
  'Diamonds',
  'September 7, 2026',
]) requireText(gate, token);

requireMatch(
  gate,
  /price schedule is not the same thing as product availability/i,
  'Apple pricing gate lost price-schedule versus sale-availability separation.',
);

requireMatch(
  gate,
  /fail closed for new direct Lifetime VIP acquisition until the intended sale configuration is revalidated/i,
  'Apple pricing gate lost Lifetime VIP fail-closed behavior after schedule deletion.',
);

requireMatch(
  gate,
  /must not silently:\s*\n\n- extend an expired sale;[\s\S]*- reopen a closed sale;/i,
  'Apple pricing gate lost protection against silently extending or reopening Lifetime VIP sales.',
);

requireMatch(
  gate,
  /player who buys through an official Apple flow.*not automatically committing promotion abuse or regional-price abuse/is,
  'Apple pricing gate lost the no-player-abuse inference for CK-Labs schedule mistakes.',
);

requireMatch(
  gate,
  /independently edited IAPs require explicit verification/i,
  'Apple pricing gate lost independent-IAP inheritance verification.',
);

requireMatch(
  gate,
  /manually manages a storefront.*will no longer make those automatic pricing adjustments/is,
  'Apple pricing gate lost manual storefront tax/FX responsibility.',
);

requireMatch(
  gate,
  /temporary price change.*maximum of \*\*one year\*\*/is,
  'Apple pricing gate lost Apple's one-year temporary-price maximum.',
);

requireMatch(
  gate,
  /repeated or automatically recreated temporary schedule.*fake scarcity/is,
  'Apple pricing gate lost fake-scarcity protection for repeated temporary pricing.',
);

requireMatch(
  gate,
  /IAP tax-category change affects \*\*future transactions only\*\*/i,
  'Apple pricing gate lost future-only tax-category handling.',
);

requireMatch(
  gate,
  /after an IAP receives its own tax category.*future changes to the app's tax category do not affect that IAP/is,
  'Apple pricing gate lost IAP tax-category inheritance separation.',
);

requireMatch(
  gate,
  /future Apple base-country edit.*does not retroactively reprice an already completed one-time TycoonX purchase/is,
  'Apple pricing gate lost completed-transaction isolation.',
);

requireMatch(
  gate,
  /later price decrease does not automatically create a refund, credit, or price-match right/i,
  'Apple pricing gate lost no-automatic-price-match rule.',
);

requireMatch(
  gate,
  /later price increase does not create an extra charge/i,
  'Apple pricing gate lost no-retroactive-extra-charge rule.',
);

requireMatch(
  gate,
  /mandatory.*refund.*withdrawal.*conformity.*price-reduction.*termination/is,
  'Apple pricing gate lost mandatory consumer-remedy preservation.',
);

requireMatch(
  gate,
  /Configuration drift is not player misconduct/i,
  'Apple pricing gate lost configuration-drift versus player-misconduct separation.',
);

requireMatch(
  gate,
  /German total-price check.*blocked if its displayed total price no longer matches/is,
  'Apple pricing gate lost German total-price regression coverage.',
);

requireMatch(
  pricing,
  /scheduled temporary, global, and custom price changes for future transactions/i,
  'Existing pricing/catalog gate lost the Apple scheduled-price baseline this gate supplements.',
);

requireText(
  purchases,
  'completed purchases are not retroactively repriced',
  'Canonical Purchases policy lost the no-retroactive-repricing baseline.',
);

for (const [label, text] of [
  ['Apple IAP price-schedule gate', gate],
  ['pricing/catalog gate', pricing],
  ['canonical Purchases policy', purchases],
]) {
  if (/\bTyconX\b/.test(text)) failures.push(`Displayed legacy brand spelling found in ${label}.`);
}

requireText(
  progress,
  '100/100 localized full documents are currently confirmed current',
  'Localization progress no longer confirms all 100 localized full documents as current.',
);
requireText(
  progress,
  '25/25 localized legal hubs are current',
  'Localization progress no longer confirms all 25 localized hubs as current.',
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

console.log('TycoonX Apple IAP price schedule and tax inheritance QA');

if (failures.length > 0) {
  console.error('\nFAILED:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('PASS: Apple IAP base-country schedule deletion, pricing inheritance, manual tax/FX responsibility, tax-category inheritance, Lifetime VIP sale integrity, completed-transaction, German total-price, localization, brand and release safeguards are present.');
