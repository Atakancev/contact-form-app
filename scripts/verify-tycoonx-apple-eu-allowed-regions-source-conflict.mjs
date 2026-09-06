#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import process from 'node:process';

const gate = await readFile('TYCOONX_APPLE_EU_ALLOWED_REGIONS_SOURCE_CONFLICT_GATE.md', 'utf8');
const tracker = await readFile('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md', 'utf8');

const requiredGate = [
  ['Last reviewed: September 6, 2026', 'dated source checkpoint'],
  ['TycoonX went to full release on **September 1, 2026**', 'full-release status'],
  ['Iceland (`is`)', 'Iceland current program-specific evidence'],
  ['Norway (`no`)', 'Norway current program-specific evidence'],
  ['does **not** include Iceland or Norway', 'documented Apple source divergence'],
  ['Apple program term', 'program terminology separated from geopolitical membership'],
  ['isAlternativePaymentEligible = isEuropeanUnionMember(country)', 'forbidden geopolitical-code shortcut example'],
  ['fail closed for the alternative-payment route in that storefront', 'unresolved-source-conflict fail-closed rule'],
  ['actual TycoonX account/app eligibility and StoreKit runtime eligibility', 'account and runtime evidence'],
  ['Certificates, Identifiers & Profiles', 'App ID capability evidence'],
  ['provisioning profile', 'provisioning-profile evidence'],
  ['production-signed binary', 'signed-binary entitlement evidence'],
  ['App Store Connect storefront', 'storefront configuration evidence'],
  ['canMakePayments', 'StoreKit payment runtime check'],
  ['ExternalPurchaseCustomLink.isEligible', 'StoreKit custom-link eligibility check'],
  ['device language, GPS location, IP address, SIM country', 'location-signal non-authority rule'],
  ['separate Apple storefront eligibility from TycoonX locale', 'locale/storefront separation'],
  ['versioned and auditable', 'release-manifest requirement'],
  ['Storefront changes are re-evaluated', 'storefront-change re-evaluation'],
  ['does not retroactively rewrite a completed transaction', 'completed-transaction protection'],
  ['a later price decrease does not automatically create a refund', 'future price decrease rule'],
  ['a later increase does not create an extra charge', 'future price increase rule'],
  ['Regional-price abuse should be acted on only from reliable transaction/account evidence', 'regional abuse evidence threshold'],
  ['Purchased Diamonds do not expire merely because time passes', 'Diamond persistence'],
  ['one-time, non-renewing', '30-Day VIP one-time non-renewing invariant'],
  ['limited-time promotional offering available only during selected genuine sales windows', 'Lifetime VIP sales-window invariant'],
  ['may never return', 'Lifetime VIP no-continuous-availability expectation'],
  ['A successful Xsolla payment is not proof that Apple allowed the route', 'provider/program authority separation'],
  ['without deleting existing entitlements', 'fail-closed entitlement preservation'],
  ['Payment options on the App Store in the EU', 'program-specific Apple source'],
  ['StoreKit external purchases or offers entitlement', 'generic entitlement Apple source'],
  ['Rechecked **September 6, 2026**', 'fresh source recheck date'],
  ['does **not** reopen completed localizations by itself', 'localization non-reopen rule'],
];

const forbiddenGate = [
  [/\bTyconX\b/, 'displayed TycoonX brand typo'],
  [/\bTycoonX\b[^\n]{0,100}\bbeta\b|\bbeta\b[^\n]{0,100}\bTycoonX\b/i, 'live-service beta wording'],
  [/Iceland\s+(?:and|&)\s+Norway\s+are\s+EU\s+member states/i, 'false EU-membership statement'],
  [/Iceland\s+is\s+an\s+EU\s+member state/i, 'false Iceland EU-membership statement'],
  [/Norway\s+is\s+an\s+EU\s+member state/i, 'false Norway EU-membership statement'],
  [/always available in Iceland/i, 'permanent Iceland route promise'],
  [/always available in Norway/i, 'permanent Norway route promise'],
];

const requiredTracker = [
  ['All 25 target locales and all 100 localized full documents are current', 'closed localization queue'],
  ['Exact next unfinished locale/document', 'next-work tracker field'],
  ['None', 'no unfinished locale/document'],
];

const missing = [];
for (const [needle, label] of requiredGate) {
  if (!gate.includes(needle)) missing.push(`gate: ${label}`);
}
for (const [needle, label] of requiredTracker) {
  if (!tracker.includes(needle)) missing.push(`tracker: ${label}`);
}

const forbiddenHits = forbiddenGate
  .filter(([pattern]) => pattern.test(gate))
  .map(([, label]) => label);

console.log('TycoonX Apple EU allowed-regions source-conflict QA');
console.log(`Gate checkpoints: ${requiredGate.length - missing.filter((item) => item.startsWith('gate:')).length}/${requiredGate.length}`);
console.log(`Tracker checkpoints: ${requiredTracker.length - missing.filter((item) => item.startsWith('tracker:')).length}/${requiredTracker.length}`);

if (missing.length || forbiddenHits.length) {
  console.error('\nFAILED:');
  for (const item of missing) console.error(`- Missing ${item}`);
  for (const item of forbiddenHits) console.error(`- Found ${item}`);
  process.exitCode = 1;
} else {
  console.log('\nPASS: Apple EU allowed-region routing preserves current-source conflict handling, fail-closed storefront eligibility, product entitlements, pricing rules, TycoonX branding, and the completed localization queue.');
}
