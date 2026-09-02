#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_GERMAN_ECOMMERCE_CHECKOUT_RELEASE_GATE.md');
const purchasesPath = path.join(ROOT, 'tyconx-purchase-refund-policy.md');
const renderedPurchasesPath = path.join(ROOT, 'app', 'tyconx-purchase-refund-policy', 'page.tsx');
const recurringPath = path.join(ROOT, 'TYCOONX_FUTURE_RECURRING_SUBSCRIPTION_RELEASE_GATE.md');
const progressPath = path.join(ROOT, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

const [gate, purchases, renderedPurchases, recurring, progress] = await Promise.all([
  readFile(gatePath, 'utf8'),
  readFile(purchasesPath, 'utf8'),
  readFile(renderedPurchasesPath, 'utf8'),
  readFile(recurringPath, 'utf8'),
  readFile(progressPath, 'utf8'),
]);

// German checkout formation.
requireMatch(gate, /BGB § 312j/i, 'Missing BGB § 312j checkout gate.');
requireMatch(gate, /zahlungspflichtig bestellen/i, 'Missing explicit German payment-obligation button rule.');
requireMatch(gate, /Fuhrmann-2/i, 'Missing CJEU Fuhrmann-2 button-wording safeguard.');
requireMatch(gate, /based on the words on the button|words on the button/i, 'Missing rule that nearby text cannot cure an ambiguous order button.');
requireMatch(gate, /Conny/i, 'Missing CJEU Conny conditional-payment safeguard.');
requireMatch(gate, /concluded only if/i, 'Missing § 312j(4) contract-formation consequence.');
requireMatch(gate, /BGB § 312i/i, 'Missing electronic-order mechanics gate.');
requireMatch(gate, /detect and correct input errors/i, 'Missing pre-order input-error correction requirement.');
requireMatch(gate, /confirm receipt of the order electronically/i, 'Missing immediate electronic order acknowledgement requirement.');
requireMatch(gate, /retrieve and save the contract terms/i, 'Missing contract-terms retrieval/storage requirement.');
requireMatch(gate, /BGB § 312f/i, 'Missing durable-medium contract confirmation gate.');
requireMatch(gate, /durable medium/i, 'Missing durable-medium confirmation requirement.');
requireMatch(gate, /purchased TycoonX Diamonds.*withdrawal right|Diamonds.*withdrawal treatment/is, 'Missing purchased-Diamond withdrawal carve-out.');
requireMatch(gate, /BGB § 312e/i, 'Missing undisclosed-extra-cost gate.');
requireMatch(gate, /hidden fee/is, 'Missing non-collectability protection for undisclosed extra costs.');

// BGB § 356a electronic withdrawal function.
requireMatch(gate, /BGB § 356a/i, 'Missing BGB § 356a electronic withdrawal-function gate.');
requireMatch(gate, /`Vertrag widerrufen`/i, 'Missing statutory first-step withdrawal label or equivalent rule.');
requireMatch(gate, /continuously available/i, 'Missing continuous availability requirement for withdrawal function.');
requireMatch(gate, /prominently placed/i, 'Missing prominent-placement requirement for withdrawal function.');
requireMatch(gate, /easily accessible/i, 'Missing easy-access requirement for withdrawal function.');
requireMatch(gate, /consumer's name/i, 'Missing consumer-name field requirement.');
requireMatch(gate, /identifying the contract or the part of the contract/i, 'Missing contract/partial-contract identification requirement.');
requireMatch(gate, /electronic communication method/i, 'Missing receipt-contact field requirement.');
requireMatch(gate, /`Widerruf bestätigen`/i, 'Missing statutory final withdrawal-confirmation label or equivalent rule.');
requireMatch(gate, /immediate receipt confirmation on a durable medium/i, 'Missing immediate durable-medium withdrawal receipt.');
requireMatch(gate, /date and time the withdrawal was received/i, 'Missing withdrawal receipt date/time requirement.');
requireMatch(gate, /before the withdrawal period expired/i, 'Missing § 356a(5) timely-submission safeguard.');
requireMatch(gate, /queue delay, email delay, provider retry, or later manual review must not convert a timely submission into a late one/i, 'Missing queue/provider delay deadline safeguard.');
requireMatch(gate, /existence and placement of the electronic withdrawal function/i, 'Missing EGBGB pre-contract information about withdrawal-function placement.');
requireMatch(gate, /supplements other legally valid ways/i, 'Missing rule preserving other valid withdrawal routes.');

// Withdrawal versus termination and early expiry.
requireMatch(gate, /Do not confuse withdrawal with BGB § 312k termination/i, 'Missing § 356a versus § 312k distinction.');
requireMatch(gate, /`Verträge hier kündigen`.*`jetzt kündigen`/is, 'Missing § 312k termination labels in separation rule.');
requireMatch(gate, /do not hide the function based on an assumed early expiry/i, 'Missing early-expiry fail-safe.');
requireMatch(gate, /BGB § 356\(6\)/i, 'Missing paid digital-content early-expiry conditions.');
requireMatch(gate, /express consent to begin before the period ends/i, 'Missing express consent condition for paid digital content.');
requireMatch(gate, /acknowledgement that this causes loss of the withdrawal right/i, 'Missing acknowledgement-of-loss condition.');
requireMatch(gate, /required confirmation under § 312f/i, 'Missing § 312f confirmation condition for early expiry.');
requireMatch(gate, /BGB § 356\(5\)/i, 'Missing service early-expiry distinction.');
requireMatch(gate, /Merely crediting Diamonds is not an automatic switch/i, 'Missing Diamond immediate-crediting safeguard.');

// Provider role and entitlement isolation.
requireMatch(gate, /Xsolla-specific release evidence and withdrawal routing/i, 'Missing Xsolla withdrawal-role evidence.');
requireMatch(gate, /Xsolla entity and legal address/i, 'Missing transaction-specific Xsolla merchant evidence.');
requireMatch(gate, /who provides the § 356a withdrawal function/i, 'Missing provider-specific § 356a responsibility evidence.');
requireMatch(gate, /Apple App Store and Google Play responsibility split/i, 'Missing platform responsibility split.');
requireMatch(gate, /Do not copy `zahlungspflichtig bestellen`, `Vertrag widerrufen`, or `Widerruf bestätigen` mechanically/i, 'Missing rule against blindly duplicating German controls inside provider-owned native flows.');
requireMatch(gate, /Withdrawal, refund, and entitlement isolation/i, 'Missing withdrawal-entitlement isolation section.');
requireMatch(gate, /withdrawal flow must be idempotent/i, 'Missing withdrawal idempotency rule.');
requireMatch(gate, /unrelated legitimate Diamonds must not be deleted/i, 'Missing unrelated-Diamond protection.');
requireMatch(gate, /30-Day VIP must not restart, extend, duplicate/i, 'Missing 30-Day VIP withdrawal isolation.');
requireMatch(gate, /Lifetime VIP.*hidden expiry/is, 'Missing Lifetime VIP withdrawal isolation.');
requireMatch(gate, /withdrawal request is not itself proof of fraud/i, 'Missing founder-protective withdrawal/fraud distinction.');
requireMatch(gate, /must never replay an Apple, Google, or Xsolla entitlement grant/i, 'Missing provider callback replay protection.');
requireMatch(gate, /Do not repurpose the withdrawal contact method for marketing/i, 'Missing withdrawal-contact marketing separation.');

// Lifetime and recurring product distinction.
requireMatch(gate, /Lifetime VIP checkout formation/i, 'Missing Lifetime VIP checkout formation safeguards.');
requireMatch(gate, /one-time entitlement rather than a recurring subscription/i, 'Missing Lifetime VIP one-time product distinction.');
requireMatch(gate, /Current 30-Day VIP remains one-time and non-renewing/i, 'Missing current 30-Day VIP one-time distinction.');
requireMatch(gate, /Lifetime VIP remains a one-time limited-window promotional entitlement/i, 'Missing Lifetime VIP limited-window distinction.');
requireMatch(recurring, /BGB § 312k/i, 'Recurring-subscription gate lost German termination-button rule.');
requireMatch(recurring, /Verträge hier kündigen/i, 'Recurring-subscription gate lost first termination-button label.');
requireMatch(recurring, /jetzt kündigen/i, 'Recurring-subscription gate lost final termination-button label.');

// Canonical public wording already promises the electronic withdrawal function without overloading the public policy with implementation detail.
requireMatch(purchases, /## 7\. German electronic withdrawal function/i, 'Canonical Purchases policy lost German electronic withdrawal section.');
requireMatch(purchases, /clearly labelled, continuously available, prominently placed, easily accessible withdrawal function/i, 'Canonical Purchases policy lost § 356a availability/placement baseline.');
requireMatch(purchases, /confirmation step/i, 'Canonical Purchases policy lost withdrawal confirmation-step baseline.');
requireMatch(purchases, /receipt confirmation on a durable medium/i, 'Canonical Purchases policy lost durable-medium withdrawal receipt baseline.');
requireMatch(purchases, /supplements rather than removes any other legally valid way/i, 'Canonical Purchases policy lost alternative withdrawal-route safeguard.');
requireMatch(purchases, /Before a consumer places a paid order, the applicable checkout must present the legally required pre-contract information clearly and at the legally required point in the flow/i, 'Canonical Purchases policy lost pre-contract checkout-information rule.');
requireMatch(purchases, /final ordering step must make that payment obligation clear/i, 'Canonical Purchases policy lost German payment-obligation rule.');
requireMatch(purchases, /identity and contact information of the contracting trader/i, 'Canonical Purchases policy lost contracting-trader identity rule.');
requireMatch(purchases, /total price including mandatory taxes and charges/i, 'Canonical Purchases policy lost total-price rule.');
requireMatch(purchases, /official TycoonX web shop powered by Xsolla/i, 'Canonical Purchases policy lost Xsolla/webshop channel distinction.');

requireMatch(renderedPurchases, /German electronic withdrawal function/i, 'Rendered Purchases page lost German withdrawal-function section.');
requireMatch(renderedPurchases, /continuously available/i, 'Rendered Purchases page lost withdrawal availability baseline.');
requireMatch(renderedPurchases, /durable medium/i, 'Rendered Purchases page lost withdrawal durable-medium baseline.');
requireMatch(renderedPurchases, /Before a consumer places a paid order/i, 'Rendered Purchases page lost pre-contract checkout-information rule.');
requireMatch(renderedPurchases, /payment obligation clear/i, 'Rendered Purchases page lost German payment-obligation rule.');

// Localization/full-release invariants.
requireMatch(progress, /25\/25/i, 'Localization tracker no longer confirms 25/25 hubs.');
requireMatch(progress, /100\/100 localized full documents are currently confirmed current/i, 'Localization tracker no longer confirms 100/100 full documents.');
requireMatch(progress, /Exact next unfinished locale\/document: None/i, 'Localization tracker no longer has a closed locale/document queue.');
requireMatch(progress, /full release on \*\*September 1, 2026\*\*/i, 'Localization tracker lost September 1, 2026 full-release invariant.');

for (const [name, text] of [
  ['German checkout gate', gate],
  ['canonical Purchases policy', purchases],
  ['rendered Purchases policy', renderedPurchases],
  ['future recurring-subscription gate', recurring],
]) {
  if (/TyconX/.test(text)) errors.push(`Displayed brand typo TyconX found in ${name}.`);
  if (/\bTycoonX\s+beta\b/i.test(text)) errors.push(`Stale TycoonX beta wording found in ${name}.`);
}

console.log('TycoonX German e-commerce checkout and withdrawal QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: German checkout formation, § 356a withdrawal function, provider-role, deadline, and TycoonX entitlement safeguards are present.');
}
