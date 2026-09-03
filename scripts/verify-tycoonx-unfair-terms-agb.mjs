#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();

const files = {
  gate: 'TYCOONX_GERMAN_EU_UNFAIR_TERMS_AGB_RELEASE_GATE.md',
  terms: 'tyconx-terms-of-service.md',
  purchases: 'tyconx-purchase-refund-policy.md',
  changeGate: 'TYCOONX_EU_DIGITAL_PRODUCT_CHANGE_SHUTDOWN_GATE.md',
  businessGate: 'TYCOONX_BUSINESS_TRANSFER_SUCCESSOR_RELEASE_GATE.md',
  recurringGate: 'TYCOONX_FUTURE_RECURRING_SUBSCRIPTION_RELEASE_GATE.md',
  adrGate: 'TYCOONX_GERMAN_CONSUMER_ADR_ODR_RETIREMENT_RELEASE_GATE.md',
  progress: 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md',
};

const loaded = Object.fromEntries(
  await Promise.all(
    Object.entries(files).map(async ([key, relativePath]) => [
      key,
      await readFile(path.join(ROOT, relativePath), 'utf8'),
    ]),
  ),
);

const failures = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) failures.push(message);
}

function requireAbsent(text, pattern, message) {
  if (pattern.test(text)) failures.push(message);
}

const { gate, terms, purchases, changeGate, businessGate, recurringGate, adrGate, progress } = loaded;

// Core German/EU standard-terms law.
requireMatch(gate, /BGB § 305c/i, 'Missing BGB § 305c surprising/ambiguous-term checkpoint.');
requireMatch(gate, /BGB § 307/i, 'Missing BGB § 307 transparency/unreasonable-disadvantage checkpoint.');
requireMatch(gate, /BGB § 308/i, 'Missing BGB § 308 discretionary-performance checkpoint.');
requireMatch(gate, /BGB § 309/i, 'Missing BGB § 309 prohibited-clause checkpoint.');
requireMatch(gate, /Directive 93\/13\/EEC/i, 'Missing EU Unfair Terms Directive 93/13/EEC checkpoint.');
requireMatch(gate, /§ 309 no\. 10|BGB § 309 no\. 10/i, 'Missing successor-operator checkpoint.');
requireMatch(gate, /§ 309 no\. 12|BGB § 309 no\. 12/i, 'Missing burden-of-proof checkpoint.');
requireMatch(gate, /§ 309 no\. 13|BGB § 309 no\. 13/i, 'Missing consumer-declaration form checkpoint.');
requireMatch(gate, /§ 309 no\. 14|BGB § 309 no\. 14/i, 'Missing ADR/court-access checkpoint.');
requireMatch(gate, /§ 309 nos\. 5 and 6|BGB § 309 nos\. 5 and 6/i, 'Missing damages/contractual-penalty checkpoint.');
requireMatch(gate, /§ 309 no\. 7|BGB § 309 no\. 7/i, 'Missing non-waivable liability checkpoint.');

// Founder-protective but proportionate drafting rules.
requireMatch(gate, /for any reason/i, 'Missing warning against unlimited discretionary language.');
requireMatch(gate, /sole discretion/i, 'Missing warning against sole-discretion drafting.');
requireMatch(gate, /mandatory-rights language is necessary but not sufficient/i, 'Missing safeguard against overreliance on a generic mandatory-rights savings clause.');
requireMatch(gate, /narrow power \+ real trigger \+ proportional consequence \+ preserved remedy/i, 'Missing proportional founder-protection drafting standard.');
requireMatch(gate, /authoritative records are strong evidence, not an irrebuttable legal presumption/i, 'Missing authoritative-record evidence boundary.');
requireMatch(gate, /account compromise/i, 'Missing account-compromise separation.');
requireMatch(gate, /chargeback/i, 'Missing chargeback handling.');
requireMatch(gate, /obvious error/i, 'Missing obvious-error limitation.');
requireMatch(gate, /future purchases/i, 'Missing future-price-change limitation.');
requireMatch(gate, /completed one-time purchase is not retroactively repriced/i, 'Missing no-retroactive-repricing protection.');

// Product invariants and payment-channel separation.
requireMatch(gate, /Purchased Diamonds/i, 'Missing purchased-Diamond protections.');
requireMatch(gate, /one-time, non-renewing 30-day entitlement/i, 'Missing one-time 30-Day VIP distinction.');
requireMatch(gate, /limited-time promotional one-time entitlement/i, 'Missing Lifetime VIP promotional entitlement distinction.');
requireMatch(gate, /selected genuine sales windows/i, 'Missing Lifetime VIP selected-sales-window rule.');
requireMatch(gate, /may never return/i, 'Missing Lifetime VIP may-never-return rule.');
requireMatch(gate, /no expectation of continuous future availability/i, 'Missing Lifetime VIP no-continuous-availability rule.');
requireMatch(gate, /Apple App Store/i, 'Missing Apple App Store role boundary.');
requireMatch(gate, /Google Play/i, 'Missing Google Play role boundary.');
requireMatch(gate, /Xsolla/i, 'Missing Xsolla role boundary.');
requireMatch(gate, /unrelated legitimate purchases|unrelated legitimate value/i, 'Missing unrelated-valid-value protection.');

// Cross-gate consistency.
requireMatch(changeGate, /BGB § 327r/i, 'Digital-product change gate lost BGB § 327r controls.');
requireMatch(changeGate, /30-day termination right/i, 'Digital-product change gate lost the statutory 30-day termination-right control.');
requireMatch(businessGate, /Lifetime VIP/i, 'Business-transfer gate lost Lifetime VIP continuity handling.');
requireMatch(recurringGate, /recurring/i, 'Future recurring-product gate is missing recurring-product controls.');
requireMatch(adrGate, /VSBG|§ 37/i, 'German ADR gate lost VSBG/post-dispute controls.');

// Canonical player-facing safeguards that this gate is intended to preserve.
requireMatch(terms, /ability to challenge an incorrect decision through Support/i, 'Canonical Terms lost the ability to challenge an authoritative-record correction.');
requireMatch(terms, /gross negligence/i, 'Canonical Terms lost gross-negligence liability carve-out.');
requireMatch(terms, /life, body, or health/i, 'Canonical Terms lost life/body/health liability carve-out.');
requireMatch(terms, /Mandatory refund, price-reduction, termination, warranty, or other consumer remedies/i, 'Canonical Terms lost permanent-discontinuation mandatory-remedy savings language.');
requireMatch(terms, /termination and objection rights where applicable law requires it/i, 'Canonical Terms lost successor-transfer consumer safeguards.');
requireMatch(terms, /one-time, non-renewing/i, 'Canonical Terms lost one-time 30-Day VIP distinction.');
requireMatch(terms, /Lifetime VIP/i, 'Canonical Terms lost Lifetime VIP coverage.');
requireMatch(purchases, /completed purchase is not retroactively repriced/i, 'Canonical Purchases policy lost completed-purchase repricing protection.');
requireMatch(purchases, /final total price and currency displayed by the applicable checkout/i, 'Canonical Purchases policy lost final-checkout-price rule.');

// Localization/release-state invariants.
requireMatch(progress, /100\/100 localized full documents are currently confirmed current/i, 'Progress tracker no longer confirms 100/100 localized full documents.');
requireMatch(progress, /25\/25.*target locales/is, 'Progress tracker no longer confirms 25/25 localized hubs/locales.');
requireMatch(progress, /Exact next unfinished locale\/document:\s*None/i, 'Progress tracker unexpectedly shows unfinished localization work.');
requireMatch(progress, /went to full release on September 1, 2026/i, 'Progress tracker lost the September 1, 2026 full-release state.');

for (const [name, text] of [
  ['unfair-terms gate', gate],
  ['canonical Terms', terms],
  ['canonical Purchases policy', purchases],
]) {
  requireAbsent(text, /TyconX/, `Displayed brand typo found in ${name}.`);
  requireAbsent(text, /\bTycoonX\s+(?:is|remains|currently is)\s+(?:a\s+)?beta\b/i, `Stale live-service beta wording found in ${name}.`);
}

console.log('TycoonX German/EU unfair-terms AGB QA');

if (failures.length) {
  console.error('\nFAILED:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log('PASS: German/EU standard-terms safeguards, paid-product invariants, payment-channel boundaries and canonical mandatory-rights protections are present.');
}
