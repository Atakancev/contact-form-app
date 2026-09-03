#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import process from 'node:process';

const gateFile = 'TYCOONX_APPLE_EU_EXTERNAL_PURCHASE_TOKEN_LIFECYCLE_GATE.md';
const transitionFile = 'TYCOONX_APPLE_EU_OCTOBER_2026_TRANSITION_GATE.md';
const progressFile = 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md';

const [gate, transition, progress] = await Promise.all([
  readFile(gateFile, 'utf8'),
  readFile(transitionFile, 'utf8'),
  readFile(progressFile, 'utf8'),
]);

const requiredGate = [
  ['Reviewed against current Apple documentation:** September 3, 2026', 'current Apple documentation checkpoint'],
  ['TycoonX went to full release on **September 1, 2026**', 'live full-release status'],
  ['ExternalPurchaseCustomLink.token(for:)', 'StoreKit custom-link token API'],
  ['`ACQUISITION`', 'EU ACQUISITION token type'],
  ['`SERVICES`', 'EU SERVICES token type'],
  ['at app launch', 'launch-time token request'],
  ['before every potential external-purchase transaction', 'pre-transaction token freshness'],
  ['`token(for:)` returning `nil`', 'nil token handling'],
  ['server-side account binding', 'server-side token/customer binding'],
  ['externalPurchaseId', 'Apple external purchase identifier'],
  ['refreshed token', 'refreshed token handling'],
  ['same token-period creation/expiration dates', 'token-period duplicate safeguard'],
  ['`SANDBOX`', 'sandbox identifier isolation'],
  ['Apple token is not proof of payment', 'token-versus-payment separation'],
  ['Apple reporting is a separate state machine', 'reporting state separation'],
  ['browser return', 'browser-return failure path'],
  ['process death', 'process-death recovery'],
  ['Xsolla', 'Xsolla payment channel'],
  ['Diamonds', 'Diamond entitlement isolation'],
  ['one-time, non-renewing 30-day entitlement', '30-Day VIP product invariant'],
  ['limited-time promotional one-time entitlement', 'Lifetime VIP product invariant'],
  ['may be withdrawn from future sale', 'Lifetime VIP withdrawal-from-sale rule'],
  ['may never return', 'Lifetime VIP no-return promise safeguard'],
  ['no expectation of continuous future availability', 'Lifetime VIP availability expectation safeguard'],
  ['refund', 'refund reconciliation'],
  ['reversed', 'reversal reconciliation'],
  ['chargeback', 'chargeback reconciliation'],
  ['account compromise', 'account-compromise separation'],
  ['data minimization', 'privacy/data minimization'],
  ['parental', 'parental eligibility safeguards'],
  ['provider outage', 'provider outage handling'],
  ['exactly-once TycoonX entitlement delivery', 'exactly-once entitlement delivery'],
  ['monthly Apple reporting', 'Apple reporting readiness'],
  ['100 completed localized legal documents', 'closed localization queue safeguard'],
  ['Source checkpoint', 'dated source checkpoint'],
];

const requiredTransition = [
  ['External-purchase token and transaction reporting', 'existing Apple EU transition reporting section'],
  ['within 15 days after the end of the calendar month', 'existing 15-day Apple reporting deadline'],
  ['tokens that did not result in a completed purchase', 'existing transactionless-token reporting rule'],
  ['External Purchase Server API', 'existing Apple server reporting route'],
];

const requiredProgress = [
  ['Localized full documents: `100 / 100`', '100/100 localized full documents'],
  ['Localized hubs: `25 / 25`', '25/25 localized hubs'],
  ['Exact next unfinished locale/document: `None`', 'closed localization queue'],
];

function missingFrom(text, rules) {
  return rules.filter(([needle]) => !text.includes(needle));
}

const missing = [
  ...missingFrom(gate, requiredGate).map((x) => [x[0], `${x[1]} in token lifecycle gate`]),
  ...missingFrom(transition, requiredTransition).map((x) => [x[0], `${x[1]} in Apple EU transition gate`]),
  ...missingFrom(progress, requiredProgress).map((x) => [x[0], `${x[1]} in localization tracker`]),
];

const forbidden = [
  [/\bTyconX\b/, 'displayed TycoonX brand typo'],
  [/TycoonX goes to full release on September 1, 2026/i, 'stale future-tense release wording'],
  [/\bTycoonX\b[^\n]{0,100}\bbeta\b|\bbeta\b[^\n]{0,100}\bTycoonX\b/i, 'live-service beta wording'],
  [/token[^\n]{0,80}(?:proves|proof of)[^\n]{0,40}(?:payment|purchase)/i, 'token incorrectly treated as payment proof'],
];

const forbiddenHits = forbidden.filter(([pattern]) => pattern.test(gate));

console.log('TycoonX Apple EU external purchase token lifecycle QA');
console.log(`Required checkpoints: ${requiredGate.length + requiredTransition.length + requiredProgress.length - missing.length}/${requiredGate.length + requiredTransition.length + requiredProgress.length}`);

if (missing.length || forbiddenHits.length) {
  console.error('\nFAILED:');
  for (const [, label] of missing) console.error(`- Missing ${label}`);
  for (const [, label] of forbiddenHits) console.error(`- Found ${label}`);
  process.exitCode = 1;
} else {
  console.log('\nPASS: Apple EU external-purchase tokens stay account-bound, payment-independent, sandbox-isolated, reportable, and idempotent without changing completed TycoonX localization.');
}
