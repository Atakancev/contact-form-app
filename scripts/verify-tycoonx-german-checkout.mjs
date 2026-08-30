#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_GERMAN_ECOMMERCE_CHECKOUT_RELEASE_GATE.md');
const purchasesPath = path.join(ROOT, 'tyconx-purchase-refund-policy.md');
const renderedPurchasesPath = path.join(ROOT, 'app', 'tyconx-purchase-refund-policy', 'page.tsx');

const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

const gate = await readFile(gatePath, 'utf8');
const purchases = await readFile(purchasesPath, 'utf8');
const renderedPurchases = await readFile(renderedPurchasesPath, 'utf8');

requireMatch(gate, /BGB § 312j/i, 'Missing BGB § 312j checkout gate.');
requireMatch(gate, /zahlungspflichtig bestellen/i, 'Missing explicit German payment-obligation button rule.');
requireMatch(gate, /Fuhrmann-2/i, 'Missing CJEU Fuhrmann-2 button-wording safeguard.');
requireMatch(gate, /only the words on the button|words on the button/i, 'Missing rule that nearby text cannot cure an ambiguous order button.');
requireMatch(gate, /Conny/i, 'Missing CJEU Conny conditional-payment safeguard.');
requireMatch(gate, /contract covered by § 312j\(2\).*only if|concluded only if/i, 'Missing § 312j(4) contract-formation consequence.');
requireMatch(gate, /BGB § 312i/i, 'Missing electronic-order mechanics gate.');
requireMatch(gate, /detect and correct input errors/i, 'Missing pre-order input-error correction requirement.');
requireMatch(gate, /confirm receipt of the order electronically/i, 'Missing immediate electronic order acknowledgement requirement.');
requireMatch(gate, /retrieve and save the contract terms/i, 'Missing contract-terms retrieval/storage requirement.');
requireMatch(gate, /BGB § 312f/i, 'Missing durable-medium contract confirmation gate.');
requireMatch(gate, /durable medium/i, 'Missing durable-medium confirmation requirement.');
requireMatch(gate, /purchased TycoonX Diamonds.*withdrawal right|Diamonds.*withdrawal treatment/is, 'Missing purchased-Diamond withdrawal carve-out.');
requireMatch(gate, /BGB § 312e/i, 'Missing undisclosed-extra-cost gate.');
requireMatch(gate, /additional cost.*not.*properly disclosed|hidden fee/is, 'Missing non-collectability protection for undisclosed extra costs.');
requireMatch(gate, /Xsolla entity and legal address/i, 'Missing transaction-specific Xsolla merchant evidence.');
requireMatch(gate, /receipt and order-confirmation behavior/i, 'Missing Xsolla receipt/order confirmation evidence.');
requireMatch(gate, /Apple App Store and Google Play responsibility split/i, 'Missing platform responsibility split.');
requireMatch(gate, /Do not copy the German `zahlungspflichtig bestellen` label mechanically/i, 'Missing rule against blindly duplicating provider-controlled checkout wording.');
requireMatch(gate, /Lifetime VIP checkout formation/i, 'Missing Lifetime VIP checkout formation safeguards.');
requireMatch(gate, /one-time entitlement rather than a recurring subscription/i, 'Missing Lifetime VIP one-time product distinction.');

for (const [name, text] of [
  ['German checkout gate', gate],
  ['canonical Purchases policy', purchases],
  ['rendered Purchases policy', renderedPurchases],
]) {
  if (/TyconX/.test(text)) errors.push(`Displayed brand typo TyconX found in ${name}.`);
  if (/\bbeta\b/i.test(text)) errors.push(`Stale beta wording found in ${name}.`);
}

requireMatch(purchases, /Before a consumer places a paid order, the applicable checkout must present the legally required pre-contract information clearly and at the legally required point in the flow/i, 'Canonical Purchases policy lost pre-contract checkout-information rule.');
requireMatch(purchases, /final ordering step must make that payment obligation clear/i, 'Canonical Purchases policy lost German payment-obligation rule.');
requireMatch(purchases, /identity and contact information of the contracting trader/i, 'Canonical Purchases policy lost contracting-trader identity rule.');
requireMatch(purchases, /total price including mandatory taxes and charges/i, 'Canonical Purchases policy lost total-price rule.');
requireMatch(purchases, /official TycoonX web shop powered by Xsolla/i, 'Canonical Purchases policy lost Xsolla channel distinction.');

requireMatch(renderedPurchases, /Before a consumer places a paid order/i, 'Rendered Purchases page lost pre-contract checkout-information rule.');
requireMatch(renderedPurchases, /payment obligation clear/i, 'Rendered Purchases page lost German payment-obligation rule.');

console.log('TycoonX German e-commerce checkout QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: German checkout formation, confirmation, price, merchant-role and TycoonX product safeguards are present.');
}
