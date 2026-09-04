#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import process from 'node:process';

const gateFile = 'TYCOONX_APPLE_EU_SELLER_MERCHANT_AUDIT_RELEASE_GATE.md';
const termsFile = 'tyconx-terms-of-service.md';
const purchasesFile = 'tyconx-purchase-refund-policy.md';
const progressFile = 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md';

const [gate, terms, purchases, progress] = await Promise.all([
  readFile(gateFile, 'utf8'),
  readFile(termsFile, 'utf8'),
  readFile(purchasesFile, 'utf8'),
  readFile(progressFile, 'utf8'),
]);

const requiredGate = [
  ['Reviewed against current Apple terms: September 4, 2026', 'dated Apple source checkpoint'],
  ['TycoonX went to full release on **September 1, 2026**', 'full-release status'],
  ['October 1, 2026', 'Attachment 14 transition date'],
  ['whichever is later', 'later-of signature/effective-date rule'],
  ['Attachment 14', 'Apple Attachment 14 scope'],
  ['seller in its own name and on its own account', 'Apple Section 5 seller rule'],
  ['Section 5.2(D)', 'third-party covered-sale rule'],
  ['made by someone other than the developer', 'third-party sale scenario'],
  ['signed agreement', 'provider contractual evidence'],
  ['merchant-of-record role', 'merchant-of-record separation'],
  ['One label cannot safely answer all six questions', 'role-separation invariant'],
  ['transaction-to-token-to-entitlement-to-report lineage', 'end-to-end transaction lineage'],
  ['within 15 days after the end of the calendar month', 'Apple reporting deadline'],
  ['tokens that did not result in a completed purchase', 'transactionless-token reporting'],
  ['Reporting state and entitlement state are separate state machines', 'reporting/entitlement separation'],
  ['credit on future invoices', 'Apple refund commission credit'],
  ['three years following the date reports are transmitted to Apple', 'three-year Apple audit retention'],
  ['within 30 days of the request', 'Apple audit response timing'],
  ['data minimization', 'privacy minimization'],
  ['Purchased Diamonds are transaction-specific consumable value and do not expire solely because time passes', 'purchased Diamond protection'],
  ['one-time, non-renewing 30-day entitlement', '30-Day VIP product distinction'],
  ['one-time promotional entitlement available only during selected genuine sales windows', 'Lifetime VIP limited-window distinction'],
  ['may be withdrawn from future sale, may never return', 'Lifetime VIP future availability rule'],
  ['later price decrease does not automatically create a refund, credit or price-match right', 'future price decrease rule'],
  ['later increase does not create an additional charge', 'future price increase rule'],
  ['account compromise', 'account compromise handling'],
  ['A chargeback is evidence of a payment dispute', 'chargeback/fraud separation'],
  ['provider outage', 'provider outage continuity'],
  ['provider or business transfer', 'provider/business transfer continuity'],
  ['Permanent service discontinuation does not erase', 'shutdown record continuity'],
  ['mandatory EU/German consumer rights', 'mandatory consumer-rights preservation'],
  ['Apple Developer Program License Agreement, Attachment 14', 'official Apple DPLA source'],
  ['reporting tokens and transactions', 'official Apple reporting source'],
  ['does not change the current player-facing meaning', 'localization non-reopening rationale'],
];

const requiredTerms = [
  ['Purchased Diamonds do not expire solely because time passes', 'canonical purchased-Diamond non-expiry'],
  ['one-time, non-renewing digital entitlement', 'canonical 30-Day VIP one-time rule'],
  ['limited promotional sales windows', 'canonical Lifetime VIP sales-window rule'],
  ['may act as merchant of record', 'canonical Xsolla qualified merchant wording'],
  ['The final total price and currency displayed by the applicable checkout before confirmation govern that transaction', 'canonical final-checkout-price rule'],
  ['A later price decrease does not automatically create a right to a refund', 'canonical future price decrease rule'],
  ['A later price increase does not create an additional charge', 'canonical future price increase rule'],
  ['authoritative server records', 'canonical authoritative records'],
  ['account is compromised', 'canonical account compromise handling'],
  ['force majeure', 'canonical force majeure coverage'],
  ['permanently discontinue', 'canonical permanent shutdown coverage'],
];

const requiredPurchases = [
  ['Apple App Store', 'purchases policy Apple channel'],
  ['Google Play', 'purchases policy Google channel'],
  ['Xsolla', 'purchases policy Xsolla channel'],
  ['30-Day VIP', 'purchases policy 30-Day VIP'],
  ['Lifetime VIP', 'purchases policy Lifetime VIP'],
  ['Diamonds', 'purchases policy Diamonds'],
  ['cannot legally be waived', 'purchases policy non-waivable-rights protection'],
];

const requiredProgress = [
  ['**25 / 25** localized legal hubs', '25/25 localized hubs completion'],
  ['**100 / 100** localized full documents', '100/100 localized documents completion'],
  ['**None**', 'no unfinished locale/document'],
  ['September 1, 2026', 'full-release date in tracker'],
];

const missing = [];
for (const [needle, label] of requiredGate) {
  if (!gate.includes(needle)) missing.push(`${gateFile}: ${label}`);
}
for (const [needle, label] of requiredTerms) {
  if (!terms.includes(needle)) missing.push(`${termsFile}: ${label}`);
}
for (const [needle, label] of requiredPurchases) {
  if (!purchases.includes(needle)) missing.push(`${purchasesFile}: ${label}`);
}
for (const [needle, label] of requiredProgress) {
  if (!progress.includes(needle)) missing.push(`${progressFile}: ${label}`);
}

const forbiddenGate = [
  [/\bTyconX\b/, 'legacy displayed brand spelling in new gate'],
  [/\bTycoonX\b[^\n]{0,100}\bbeta\b|\bbeta\b[^\n]{0,100}\bTycoonX\b/i, 'live-service beta wording in new gate'],
  [/Lifetime VIP[^\n]{0,100}(always available|permanently available|will return)/i, 'continuous Lifetime VIP availability promise'],
  [/30-Day VIP[^\n]{0,100}(auto-renew|automatically renews|subscription)/i, '30-Day VIP recurring characterization'],
];

const forbiddenHits = forbiddenGate.filter(([pattern]) => pattern.test(gate));

console.log('TycoonX Apple EU seller, merchant and audit QA');
console.log(`Gate checkpoints: ${requiredGate.length - missing.filter((item) => item.startsWith(gateFile)).length}/${requiredGate.length}`);
console.log(`Canonical Terms checkpoints: ${requiredTerms.length - missing.filter((item) => item.startsWith(termsFile)).length}/${requiredTerms.length}`);
console.log(`Purchases checkpoints: ${requiredPurchases.length - missing.filter((item) => item.startsWith(purchasesFile)).length}/${requiredPurchases.length}`);
console.log(`Localization tracker checkpoints: ${requiredProgress.length - missing.filter((item) => item.startsWith(progressFile)).length}/${requiredProgress.length}`);

if (missing.length || forbiddenHits.length) {
  console.error('\nFAILED:');
  for (const item of missing) console.error(`- Missing ${item}`);
  for (const [, label] of forbiddenHits) console.error(`- Found ${label}`);
  process.exitCode = 1;
} else {
  console.log('\nPASS: Apple EU seller/MoR roles, reporting, audit retention, refund reconciliation, product isolation, mandatory rights and localization invariants are present.');
}
