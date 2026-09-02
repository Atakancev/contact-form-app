#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_RANDOMIZED_PURCHASE_XSOLLA_GO_LIVE_CHECKLIST.md');
const virtualCurrencyPath = path.join(ROOT, 'TYCOONX_EU_VIRTUAL_CURRENCY_RELEASE_GATE.md');
const youthPath = path.join(ROOT, 'TYCOONX_GERMAN_YOUTH_PROTECTION_RELEASE_GATE.md');
const progressPath = path.join(ROOT, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

const [gate, virtualCurrency, youth, progress] = await Promise.all([
  readFile(gatePath, 'utf8'),
  readFile(virtualCurrencyPath, 'utf8'),
  readFile(youthPath, 'utf8'),
  readFile(progressPath, 'utf8'),
]);

requireMatch(gate, /full release on September 1, 2026/i, 'Missing full-release invariant.');
requireMatch(gate, /does not state that TycoonX currently has one/i, 'Checklist must not imply a randomized paid mechanic already exists.');
requireMatch(gate, /Apple.*odds.*each type.*before the purchase/is, 'Missing Apple randomized-item odds rule.');
requireMatch(gate, /Google Play.*odds.*in advance of.*close and timely proximity/is, 'Missing Google Play odds-proximity rule.');
requireMatch(gate, /spending Diamonds or another virtual currency that can be purchased with real money/i, 'Missing purchased-currency odds-disclosure safeguard.');
requireMatch(gate, /pity\/guarantee|guarantee or pity counter/i, 'Missing pity/guarantee probability safeguard.');
requireMatch(gate, /duplicate protection/i, 'Missing duplicate-protection probability safeguard.');
requireMatch(gate, /actual live probability table.*authoritative server\/configuration/is, 'Missing authoritative probability-table rule.');
requireMatch(gate, /Do not silently alter odds/i, 'Missing live-odds change safeguard.');
requireMatch(gate, /paid Diamonds do not hide the real purchase context/i, 'Missing paid-Diamond economic-context rule.');
requireMatch(gate, /TYCOONX_EU_VIRTUAL_CURRENCY_RELEASE_GATE\.md/, 'Missing EU virtual-currency cross-gate.');
requireMatch(gate, /§ 3\(1\).*Glücksspielstaatsvertrag 2021/i, 'Missing German GlüStV § 3(1) classification checkpoint.');
requireMatch(gate, /Entgelt.*Gewinnchance.*wholly or predominantly on chance/is, 'Missing German gambling-definition elements.');
requireMatch(gate, /does not prove that the mechanic is regulated gambling/i, 'Missing safeguard against automatic gambling classification.');
requireMatch(gate, /cash-out.*marketplace.*NFT\/token|NFT\/token.*external transfer/is, 'Missing cash-out/trading re-review trigger.');
requireMatch(gate, /do not enable it in Germany/i, 'Missing German unresolved-regulatory-risk release block.');
requireMatch(gate, /CPC Network.*March 21, 2025/is, 'Missing EU CPC virtual-currency checkpoint.');
requireMatch(gate, /consumer vulnerabilities.*children/i, 'Missing vulnerable-consumer/children checkpoint.');
requireMatch(gate, /South Korea.*probabilistic items/is, 'Missing Korea probabilistic-item checkpoint.');
requireMatch(gate, /effective start\/end timestamps for each probability table/i, 'Missing historical probability-version evidence.');
requireMatch(gate, /Do not promise cryptographic randomness.*provably fair/is, 'Missing unsupported fairness-claim safeguard.');
requireMatch(gate, /configuration error.*displayed odds.*authoritative live mechanic/is, 'Missing odds/config mismatch incident handling.');
requireMatch(gate, /idempotent under duplicate\/retried webhook delivery/i, 'Missing Xsolla idempotency safeguard.');
requireMatch(gate, /review-only odds/i, 'Missing store-review parity safeguard.');
requireMatch(gate, /paid-entitlement isolation/i, 'Missing entitlement-isolation section.');
requireMatch(gate, /one-time 30-Day VIP/i, 'Missing one-time 30-Day VIP invariant.');
requireMatch(gate, /Lifetime VIP remains a one-time entitlement.*selected genuine promotional sales windows/is, 'Missing Lifetime VIP limited-window invariant.');
requireMatch(gate, /may be withdrawn from future sale and may never return/i, 'Missing Lifetime VIP future-availability rule.');
requireMatch(gate, /22\. Regional kill switch/i, 'Missing randomized-purchase regression matrix.');
requireMatch(gate, /public legal wording trigger/i, 'Missing canonical/localization update trigger.');

requireMatch(virtualCurrency, /purchased TycoonX Diamonds/i, 'EU virtual-currency gate no longer covers purchased Diamonds.');
requireMatch(virtualCurrency, /children and vulnerable consumers/i, 'EU virtual-currency gate lost vulnerable-consumer protection.');
requireMatch(youth, /randomized or gambling-like mechanics/i, 'German youth gate lost randomized/gambling-like mechanic review.');
requireMatch(youth, /do not launch first and correct the rating later/i, 'German youth gate lost pre-launch rating safeguard.');
requireMatch(progress, /100\/100.*current/is, 'Localization tracker no longer confirms 100/100 localized documents are current.');
requireMatch(progress, /Exact next unfinished locale\/document:\s*\*\*None/i, 'Localization tracker no longer records no unfinished locale/document.');

for (const [name, text] of [
  ['randomized-purchase gate', gate],
  ['EU virtual-currency gate', virtualCurrency],
  ['German youth gate', youth],
]) {
  if (/TyconX/.test(text)) errors.push(`Displayed brand typo TyconX found in ${name}.`);
}

if (/\bTycoonX\b[^\n]{0,80}\bbeta\b|\bbeta\b[^\n]{0,80}\bTycoonX\b/i.test(gate)) {
  errors.push('Stale TycoonX beta wording found in randomized-purchase gate.');
}

console.log('TycoonX randomized-purchase / gambling-classification QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: platform odds disclosure, paid-Diamond transparency, German gambling classification, EU consumer safeguards, provider idempotency, entitlement isolation, and localization triggers are present.');
}
