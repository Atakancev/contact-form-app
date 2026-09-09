#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gate = await readFile(path.join(root, 'TYCOONX_GOOGLE_PLAY_TEST_PURCHASE_PRODUCTION_ISOLATION_RELEASE_GATE.md'), 'utf8');
const ack = await readFile(path.join(root, 'TYCOONX_GOOGLE_PLAY_ACKNOWLEDGEMENT_CONSUMPTION_RELEASE_GATE.md'), 'utf8');
const pending = await readFile(path.join(root, 'TYCOONX_GOOGLE_PLAY_PENDING_PURCHASE_ATTRIBUTION_RELEASE_GATE.md'), 'utf8');
const purchases = await readFile(path.join(root, 'tyconx-purchase-refund-policy.md'), 'utf8');
const progress = await readFile(path.join(root, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md'), 'utf8');

const failures = [];

function must(text, pattern, label) {
  if (!pattern.test(text)) failures.push(label);
}

function literal(text, token, label = token) {
  if (!text.includes(token)) failures.push(label);
}

must(gate, /Last reviewed: September 9, 2026/, 'current review date');
must(gate, /narrow operational release gate for Google Play \*\*test purchases\*\*/i, 'narrow test-purchase scope');
must(gate, /TycoonX is in full release/i, 'full-release status');

literal(gate, 'ProductPurchaseV2.testPurchaseContext', 'ProductPurchaseV2 test context');
literal(gate, 'fopType', 'test form-of-payment type');
must(gate, /fopType == TEST/i, 'TEST classification rule');
must(gate, /only for test purchases/i, 'server test-context semantics');
must(gate, /made using a test card/i, 'TEST fop meaning');

must(gate, /test payment methods that do not charge real money/i, 'no-real-money test instruments');
must(gate, /same app purchase flow as real purchases/i, 'shared purchase-flow warning');
must(gate, /taxes are not computed for test purchases/i, 'test tax distinction');
must(gate, /test track is \*\*not\*\* the same as making a test purchase/i, 'track versus transaction distinction');
must(gate, /regular users on testing tracks can make real purchases/i, 'real purchase on test-track safeguard');
must(gate, /real payment methods/i, 'Play Billing Lab real-payment safeguard');

must(gate, /do not count it as real CK-Labs revenue/i, 'no real revenue from test purchase');
must(gate, /VAT, payout, cohort, ARPU, LTV/i, 'commercial metrics separation');
must(gate, /test marker.*durable/is, 'durable test marker');
must(gate, /valid purchase token.*does not override the authoritative test context/is, 'valid token does not erase test status');

must(gate, /no production Diamonds, production 30-Day VIP, or production Lifetime VIP/i, 'production entitlement isolation');
must(gate, /allowlisted tester\/account path/i, 'explicit tester allowlist');
must(gate, /isolated from the ordinary production economy/i, 'live economy isolation');
must(gate, /test entitlement must be safely reversible or disposable/i, 'test entitlement cleanup');
must(gate, /must not create 1,000 unrestricted production Diamonds/i, 'Diamond example');

must(gate, /Do not mark a transaction as test merely because/i, 'no inferred test classification');
must(gate, /server-side provider record.*controls whether a specific transaction is a test purchase/is, 'provider authority');
must(gate, /do not deny the player's paid entitlement simply because the account or build is used for testing/i, 'genuine tester purchase protection');

must(gate, /consumption does not transform a test transaction into a real paid transaction/i, 'consumption keeps test classification');
must(gate, /test 30-Day VIP purchase must never become an ordinary paid 30-consecutive-day production entitlement/i, '30-Day VIP test isolation');
must(gate, /test Lifetime VIP purchase must never create an unrestricted production Lifetime VIP entitlement/i, 'Lifetime VIP test isolation');
must(gate, /no test purchase.*can reopen a closed Lifetime VIP sales window/is, 'Lifetime sale-window closure');
must(gate, /limited-time promotional one-time offering.*selected genuine sales windows/is, 'Lifetime canonical invariant');

must(gate, /refunded after roughly 3 minutes/i, 'accelerated test refund');
must(gate, /production Google acknowledgement deadline from three days to three minutes/i, 'production deadline isolation');
must(gate, /accelerated test refund.*not.*player fraud/is, 'test refund not fraud');

must(gate, /test `PENDING` still grants no paid value/i, 'test pending no grant');
must(gate, /simulated chargeback.*only the corresponding test transaction/is, 'simulated chargeback isolation');
must(gate, /no simulated refund\/chargeback may create a production player sanction/i, 'no sanctions from simulations');

must(gate, /must not be used to infer a player's residence, nationality, wealth/i, 'privacy inference restriction');
must(gate, /test order totals must not be used as evidence.*tax treatment/is, 'test tax evidence restriction');
must(gate, /support sees that a transaction is test/i, 'support visibility');
must(gate, /test records cannot satisfy checks that require proof of a genuine historical paid purchase/i, 'test purchase not payment proof');

must(gate, /Ambiguous provider evidence fails closed for production value/i, 'ambiguity fail-closed');
must(gate, /Quarantine the transaction for reconciliation/i, 'ambiguous transaction quarantine');
must(gate, /Provider outage or CK-Labs verification failure is not player misconduct/i, 'provider failure not misconduct');

must(gate, /Nothing in this gate reduces rights attached to a genuine paid purchase/i, 'mandatory-rights boundary');
must(gate, /labeling something “test” internally cannot be used to evade mandatory law/i, 'no test-label rights waiver');
must(gate, /must not imply that the live TycoonX service is a beta/i, 'no live beta implication');

for (const scenario of [
  '**Test Diamond purchase:**',
  '**Real Diamond purchase on test track:**',
  '**Test Diamond consume:**',
  '**Test pending decline:**',
  '**Test pending approval:**',
  '**Unacknowledged test purchase:**',
  '**Test chargeback simulation:**',
  '**Test 30-Day VIP:**',
  '**Test Lifetime VIP:**',
  '**Replay through RTDN:**',
  '**Support replay:**',
  '**Ambiguous verification:**',
  '**Finance export:**',
  '**Regional analytics:**',
  '**Genuine historical purchase on same tester account:**',
]) {
  literal(gate, scenario, `missing regression scenario: ${scenario}`);
}

must(gate, /developer\.android\.com\/google\/play\/billing\/test/i, 'official Google test source');
must(gate, /developers\.google\.com\/android-publisher\/api-ref\/rest\/v3\/purchases\.productsv2/i, 'official ProductPurchaseV2 source');
must(gate, /developer\.android\.com\/google\/play\/billing\/backend/i, 'official backend source');

must(ack, /three days/i, 'production three-day acknowledgement baseline');
must(ack, /Purchased Diamonds are consumable in Google billing, not expendable in the game/i, 'Diamond settlement baseline');
must(ack, /30-Day VIP remains a \*\*one-time, non-renewing entitlement lasting 30 consecutive days\*\*/i, '30-Day VIP baseline');
must(ack, /Lifetime VIP is a one-time promotional entitlement available only during selected genuine sales windows/i, 'Lifetime VIP baseline');
must(pending, /PENDING/i, 'pending-purchase baseline');

for (const token of ['mandatory rights', 'Lifetime VIP', '30-Day VIP', 'Diamonds']) {
  must(purchases, new RegExp(token, 'i'), `canonical Purchases baseline missing: ${token}`);
}

for (const [label, text] of [
  ['test-purchase gate', gate],
  ['acknowledgement gate', ack],
  ['pending gate', pending],
  ['canonical Purchases policy', purchases],
]) {
  if (/\bTyconX\b/.test(text)) failures.push(`Displayed legacy brand spelling found in ${label}`);
  if (/TycoonX\s+beta/i.test(text)) failures.push(`Stale live-service beta wording found in ${label}`);
}

literal(progress, 'All 25 target locales and all 100 localized full documents are current.', 'localization completion marker');
literal(progress, 'Exact next unfinished locale/document: None', 'closed localization queue');
literal(progress, 'September 1, 2026', 'full-release date invariant');

console.log('TycoonX Google Play test-purchase production-isolation QA');

if (failures.length) {
  console.error('\nFAILED:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('PASS: Google test-purchase classification, production-value isolation, entitlement invariants, refund/chargeback simulation isolation, privacy, brand, release and localization safeguards are present.');