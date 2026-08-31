#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_FUTURE_RECURRING_SUBSCRIPTION_RELEASE_GATE.md');
const termsPath = path.join(ROOT, 'tyconx-terms-of-service.md');
const purchasesPath = path.join(ROOT, 'tyconx-purchase-refund-policy.md');
const renderedTermsPath = path.join(ROOT, 'app', 'tyconx-terms-of-service', 'page.tsx');
const renderedPurchasesPath = path.join(ROOT, 'app', 'tyconx-purchase-refund-policy', 'page.tsx');
const progressPath = path.join(ROOT, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

const [gate, terms, purchases, renderedTerms, renderedPurchases, progress] = await Promise.all([
  readFile(gatePath, 'utf8'),
  readFile(termsPath, 'utf8'),
  readFile(purchasesPath, 'utf8'),
  readFile(renderedTermsPath, 'utf8'),
  readFile(renderedPurchasesPath, 'utf8'),
  readFile(progressPath, 'utf8'),
]);

requireMatch(gate, /one-time non-renewing 30-Day VIP/i, 'Recurring gate lost the one-time 30-Day VIP distinction.');
requireMatch(gate, /Lifetime VIP remains a one-time limited-window promotional entitlement/i, 'Recurring gate lost the Lifetime VIP one-time distinction.');
requireMatch(gate, /must provide genuine ongoing or recurring value/i, 'Recurring gate lost the sustained-value rule.');
requireMatch(gate, /BGB § 309 no\. 9/i, 'Missing BGB § 309 no. 9 recurring-term gate.');
requireMatch(gate, /longer than \*\*two years\*\*/i, 'Missing two-year maximum initial-term safeguard.');
requireMatch(gate, /notice period of no more than \*\*one month\*\*/i, 'Missing one-month cancellation-notice safeguard.');
requireMatch(gate, /BGB § 312k/i, 'Missing German § 312k termination-button gate.');
requireMatch(gate, /Verträge hier kündigen/i, 'Missing German termination-button label safeguard.');
requireMatch(gate, /jetzt kündigen/i, 'Missing German termination confirmation-button safeguard.');
requireMatch(gate, /at any time without observing a notice period/i, 'Missing § 312k(6) non-compliance consequence.');
requireMatch(gate, /existing subscriber/i, 'Missing existing-subscriber price-change classification.');
requireMatch(gate, /BGB § 327r.*do not by themselves create a free-standing right/is, 'Missing rule that § 327r does not itself authorize recurring price increases.');
requireMatch(gate, /Germany as `Consent required`/i, 'Missing current Apple Germany price-increase consent checkpoint.');
requireMatch(gate, /default is an \*\*opt-in price increase\*\*/i, 'Missing Google Play default opt-in price increase rule.');
requireMatch(gate, /37-day advance period/i, 'Missing current Google Play opt-in migration timing checkpoint.');
requireMatch(gate, /opt-out.*only in eligible locations/is, 'Missing Google Play opt-out eligibility safeguard.');
requireMatch(gate, /SUBSCRIPTION_PRICE_CHANGE_UPDATED/i, 'Missing Google subscription price-change RTDN safeguard.');
requireMatch(gate, /Xsolla.*active.*subscription.*changed/is, 'Missing Xsolla active-subscription price-change checkpoint.');
requireMatch(gate, /informational provider email alone is not a substitute/i, 'Missing rule that provider email is not affirmative consent where consent is required.');
requireMatch(gate, /Canceled` must not automatically mean `remove access now`/i, 'Missing cancel-versus-revoke entitlement distinction.');
requireMatch(gate, /one-time Diamonds, one-time 30-Day VIP and Lifetime VIP remain unaffected/i, 'Missing unrelated one-time entitlement isolation test.');
requireMatch(gate, /Last reviewed: August 31, 2026/i, 'Recurring gate review date is stale or missing.');

requireMatch(terms, /30-Day VIP.*one-time, non-renewing/is, 'Canonical Terms no longer clearly keep 30-Day VIP one-time/non-renewing.');
requireMatch(terms, /Lifetime VIP.*one-time digital entitlement/is, 'Canonical Terms no longer clearly keep Lifetime VIP one-time.');
requireMatch(terms, /future recurring VIP product would require its own clear recurring-price, renewal, cancellation, and consent information/i, 'Canonical Terms lost future recurring-product separation.');
requireMatch(terms, /recurring subscription.*price-change, renewal, notice, consent, and cancellation rules/is, 'Canonical Terms lost separate recurring price-change rules.');

requireMatch(purchases, /30-Day VIP is a \*\*one-time, non-renewing entitlement\*\*/i, 'Canonical Purchases policy no longer keeps 30-Day VIP one-time/non-renewing.');
requireMatch(purchases, /Lifetime VIP is a one-time premium entitlement/i, 'Canonical Purchases policy no longer keeps Lifetime VIP one-time.');
requireMatch(purchases, /recurring subscription.*price-change, renewal, notice, consent, and cancellation rules/is, 'Canonical Purchases policy lost separate recurring price-change rules.');

requireMatch(progress, /Exact next unfinished locale\/document: None/i, 'Localization tracker unexpectedly shows an unfinished locale/document.');
requireMatch(progress, /100\/100 localized full documents/i, 'Localization tracker no longer confirms all 100 localized full documents current.');

for (const [name, text] of [
  ['recurring subscription gate', gate],
  ['canonical Terms', terms],
  ['canonical Purchases policy', purchases],
  ['rendered Terms', renderedTerms],
  ['rendered Purchases policy', renderedPurchases],
]) {
  if (/TyconX/.test(text)) errors.push(`Displayed brand typo TyconX found in ${name}.`);
  if (/\bbeta\b/i.test(text)) errors.push(`Stale live-service beta wording found in ${name}.`);
}

requireMatch(renderedTerms, /30-Day VIP/i, 'Rendered Terms lost 30-Day VIP product wording.');
requireMatch(renderedTerms, /Lifetime VIP/i, 'Rendered Terms lost Lifetime VIP product wording.');
requireMatch(renderedPurchases, /one-time, non-renewing entitlement/i, 'Rendered Purchases page lost the 30-Day VIP one-time/non-renewing distinction.');
requireMatch(renderedPurchases, /future recurring/i, 'Rendered Purchases page lost future recurring-product separation.');

console.log('TycoonX future recurring subscription legal QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: recurring-product classification, German cancellation, price-change consent, provider lifecycle, and TycoonX one-time product safeguards are present.');
}
