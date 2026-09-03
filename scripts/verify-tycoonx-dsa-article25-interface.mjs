#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_DSA_ARTICLE_25_INTERFACE_CHOICE_RELEASE_GATE.md');
const promoGatePath = path.join(ROOT, 'TYCOONX_EU_PROMOTION_DARK_PATTERN_RELEASE_GATE.md');
const currencyGatePath = path.join(ROOT, 'TYCOONX_EU_VIRTUAL_CURRENCY_RELEASE_GATE.md');
const progressPath = path.join(ROOT, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');
const termsPath = path.join(ROOT, 'tyconx-terms-of-service.md');
const purchasesPath = path.join(ROOT, 'tyconx-purchase-refund-policy.md');

const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

const [gate, promoGate, currencyGate, progress, terms, purchases] = await Promise.all([
  readFile(gatePath, 'utf8'),
  readFile(promoGatePath, 'utf8'),
  readFile(currencyGatePath, 'utf8'),
  readFile(progressPath, 'utf8'),
  readFile(termsPath, 'utf8'),
  readFile(purchasesPath, 'utf8'),
]);

requireMatch(gate, /DSA Article 25/i, 'Missing DSA Article 25 scope.');
requireMatch(gate, /Article 25\(1\)/i, 'Missing Article 25(1) interface prohibition.');
requireMatch(gate, /deceives or manipulates.*free and informed decisions/is, 'Missing free-and-informed-decision rule.');
requireMatch(gate, /Article 25\(2\)/i, 'Missing Article 25(2) UCPD/GDPR boundary.');
requireMatch(gate, /Directive 2005\/29\/EC/i, 'Missing Unfair Commercial Practices Directive boundary.');
requireMatch(gate, /Regulation \(EU\) 2016\/679/i, 'Missing GDPR boundary.');
requireMatch(gate, /Article 25\(3\)\(a\)|giving more prominence to certain choices/i, 'Missing choice-prominence checkpoint.');
requireMatch(gate, /repeatedly requesting.*choice.*already been made/is, 'Missing repeated-choice/pop-up checkpoint.');
requireMatch(gate, /making termination harder than subscription|termination harder than subscription/i, 'Missing termination-vs-subscription checkpoint.');
requireMatch(gate, /Recital 67/i, 'Missing DSA Recital 67 checkpoint.');
requireMatch(gate, /Article 19/i, 'Missing Article 19 micro/small-enterprise scope.');
requireMatch(gate, /micro or small enterprise/i, 'Missing micro/small-enterprise classification requirement.');
requireMatch(gate, /12-month transition/i, 'Missing Article 19 post-status-loss transition.');
requireMatch(gate, /VLOP/i, 'Missing VLOP exception.');
requireMatch(gate, /surface.*online platform|online-platform service/is, 'Missing per-surface online-platform classification.');
requireMatch(gate, /larger `Buy` button is not automatically unlawful/i, 'Missing founder-protective prominence nuance.');
requireMatch(gate, /frequency caps/i, 'Missing repeated-prompt frequency control.');
requireMatch(gate, /sign-out/i, 'Missing sign-out friction protection.');
requireMatch(gate, /purchase flow/i, 'Missing purchase-discontinuation protection.');
requireMatch(gate, /fake network, security, prison, production or account warning/i, 'Missing anti-fake-gameplay-warning purchase nudge rule.');
requireMatch(gate, /March 21, 2025 Key Principles on In-Game Virtual Currencies/i, 'Missing CPC virtual-currency checkpoint.');
requireMatch(gate, /real-world cost/i, 'Missing Diamond real-cost transparency link.');
requireMatch(gate, /Lifetime VIP remains a \*\*limited-time promotional one-time entitlement\*\*/i, 'Missing Lifetime VIP limited-window product distinction.');
requireMatch(gate, /may never return/i, 'Missing Lifetime VIP no-return assurance.');
requireMatch(gate, /30-Day VIP remains a \*\*one-time, non-renewing 30-day entitlement\*\*/i, 'Missing one-time 30-Day VIP distinction.');
requireMatch(gate, /Apple App Store, Google Play and the CK-Labs TycoonX webshop using Xsolla/i, 'Missing Apple/Google/Xsolla channel separation.');
requireMatch(gate, /opening an external checkout as proof of payment/i, 'Missing external-checkout-not-payment rule.');
requireMatch(gate, /authoritative payment confirmation/i, 'Missing authoritative entitlement-delivery rule.');
requireMatch(gate, /Completed purchases are not retroactively repriced/i, 'Missing completed-purchase repricing protection.');
requireMatch(gate, /account compromise/i, 'Missing account-compromise handling.');
requireMatch(gate, /chargeback abuse/i, 'Missing chargeback-abuse handling.');
requireMatch(gate, /unrelated legitimate purchased value/i, 'Missing narrow correction safeguard.');
requireMatch(gate, /children and minors/i, 'Missing minors interface section.');
requireMatch(gate, /parental controls/i, 'Missing parental-control safeguard.');
requireMatch(gate, /Accessibility is part of a genuine choice/i, 'Missing accessibility-choice safeguard.');
requireMatch(gate, /March 26, 2026 online-sales sweep/i, 'Missing current 2026 EU enforcement checkpoint.');
requireMatch(gate, /fake.*countdown|countdown.*silently reset/is, 'Missing fake-countdown safeguard.');

requireMatch(promoGate, /No fake scarcity or false urgency/i, 'Existing promotion gate lost scarcity/urgency controls.');
requireMatch(promoGate, /No manipulative checkout hierarchy/i, 'Existing promotion gate lost manipulative-checkout controls.');
requireMatch(currencyGate, /Key Principles on In-Game Virtual Currencies/i, 'Existing virtual-currency gate lost CPC principles.');
requireMatch(currencyGate, /Purchased Diamonds and withdrawal rights/i, 'Existing virtual-currency gate lost withdrawal-rights controls.');

requireMatch(progress, /25\/25.*target locales/is, 'Progress tracker no longer confirms 25/25 localized hubs.');
requireMatch(progress, /100\/100 localized full documents are currently confirmed current/i, 'Progress tracker no longer confirms 100/100 localized full documents.');
requireMatch(progress, /Exact next unfinished locale\/document:\s*None/i, 'Progress tracker unexpectedly shows unfinished localization work.');
requireMatch(progress, /went to full release on September 1, 2026/i, 'Progress tracker lost live-release status.');

requireMatch(terms, /Lifetime VIP/i, 'Canonical Terms lost Lifetime VIP coverage.');
requireMatch(terms, /one-time, non-renewing/i, 'Canonical Terms lost one-time 30-Day VIP distinction.');
requireMatch(purchases, /final total price and currency displayed by the applicable checkout/i, 'Canonical Purchases policy lost final-checkout-price rule.');
requireMatch(purchases, /completed purchase is not retroactively repriced/i, 'Canonical Purchases policy lost no-retroactive-repricing rule.');

for (const [name, text] of [
  ['Article 25 gate', gate],
  ['promotion gate', promoGate],
  ['virtual-currency gate', currencyGate],
  ['progress tracker', progress],
  ['canonical Terms', terms],
  ['canonical Purchases policy', purchases],
]) {
  if (/TyconX/.test(text)) errors.push(`Displayed brand typo found in ${name}.`);
}

if (/\bTycoonX\s+(?:is|remains|currently is)\s+(?:a\s+)?beta\b/i.test(gate)) {
  errors.push('Stale live-service beta wording found in Article 25 gate.');
}

console.log('TycoonX DSA Article 25 interface QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: Article 25 scope, Article 19 SME boundary, UCPD/GDPR routing, choice architecture, Diamond/VIP, payment, minors and accessibility safeguards are present.');
}
