#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_EU_PROMOTION_DARK_PATTERN_RELEASE_GATE.md');
const purchasesPath = path.join(ROOT, 'app', 'tyconx-purchase-refund-policy', 'page.tsx');

const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

const gate = await readFile(gatePath, 'utf8');
const purchases = await readFile(purchasesPath, 'utf8');

requireMatch(gate, /Lifetime VIP windows must be real/i, 'Missing genuine Lifetime VIP window requirement.');
requireMatch(gate, /countdown must not automatically reset/i, 'Missing fake-countdown reset protection.');
requireMatch(gate, /No fake scarcity or false urgency/i, 'Missing scarcity/urgency protection.');
requireMatch(gate, /crossed-out price|reference price/i, 'Missing reference-price substantiation rule.');
requireMatch(gate, /PAngV § 11/i, 'Missing German PAngV § 11 price-reduction checkpoint.');
requireMatch(gate, /30-day lowest-prior-total-price|lowest total price used toward consumers in the 30 days/i, 'Missing German 30-day prior-price safeguard.');
requireMatch(gate, /must not be mechanically described as an automatic rule for every TycoonX Diamond or VIP digital entitlement/i, 'Missing product-scope distinction for the German 30-day prior-price rule.');
requireMatch(gate, /§ 11\(4\)\(1\).*individual price reductions/i, 'Missing PAngV individual-price-reduction exception checkpoint.');
requireMatch(gate, /C-330\/23, Aldi Süd/i, 'Missing CJEU Aldi Süd prior-price checkpoint.');
requireMatch(gate, /Article 6\(1\)\(ea\)/i, 'Missing Consumer Rights Directive automated personalized-pricing disclosure checkpoint.');
requireMatch(gate, /EGBGB Art\. 246a § 1\(1\) no\. 6/i, 'Missing German automated personalized-pricing disclosure checkpoint.');
requireMatch(gate, /regional pricing.*individualized automated pricing|individualized automated pricing.*regional pricing/is, 'Missing regional-vs-personalized pricing distinction.');
requireMatch(gate, /before the consumer places the order/i, 'Missing pre-contract timing for personalized-pricing disclosure.');
requireMatch(gate, /Do not hide user-specific automated pricing behind labels/i, 'Missing anti-mislabeling safeguard for individualized automated pricing.');
requireMatch(gate, /No drip pricing/i, 'Missing drip-pricing protection.');
requireMatch(gate, /No preselected paid extras/i, 'Missing preselected-extra-payment protection.');
requireMatch(gate, /"Free" must really mean free/i, 'Missing false-free-claim protection.');
requireMatch(gate, /mandatory legal rights as a special bonus/i, 'Missing statutory-rights marketing protection.');
requireMatch(gate, /Child-directed purchase pressure is prohibited/i, 'Missing child-directed purchase-pressure protection.');
requireMatch(gate, /UWG Annex no\. 7/i, 'Missing German UWG Annex no. 7 checkpoint.');
requireMatch(gate, /UWG Annex no\. 28/i, 'Missing German UWG Annex no. 28 checkpoint.');
requireMatch(gate, /Directive 2011\/83\/EU Article 22/i, 'Missing EU additional-payment consent checkpoint.');
requireMatch(gate, /Apple, Google or Xsolla/i, 'Missing payment-provider parity in offer-change handling.');
requireMatch(gate, /authoritative|provider-confirmed pending transactions/i, 'Missing authoritative pending-transaction handling.');
requireMatch(gate, /completed prior purchases are not retroactively repriced/i, 'Missing completed-purchase repricing protection.');
requireMatch(gate, /may never return/i, 'Missing accurate limited-sale future-availability wording.');

requireMatch(purchases, /Promotional claims, countdowns, crossed-out prices, stated savings, limited-time statements, and other price-advantage claims must reflect the genuine offer and must not be misleading/i, 'Canonical Purchases policy lost truthful promotion/countdown protection.');
requireMatch(purchases, /Where a jurisdiction requires a (?:specific|particular) reference price, (?:price-history disclosure, or other discount rule|discount disclosure, or price-history rule) for the (?:particular|specific) product or offer/i, 'Canonical Purchases policy lost jurisdiction-specific discount-rule safeguard.');
requireMatch(purchases, /If a price is personalized on the basis of automated decision-making and applicable law requires disclosure of that fact/i, 'Canonical Purchases policy lost personalized-pricing disclosure safeguard.');
requireMatch(purchases, /Ordinary country-based, storefront-based, currency-based, tax-based, or generally available regional pricing is not described as personalized pricing/i, 'Canonical Purchases policy lost regional-vs-personalized pricing distinction.');
requireMatch(purchases, /final total price and currency displayed by the applicable checkout/i, 'Canonical Purchases policy lost final checkout price rule.');
requireMatch(purchases, /preselected paid extras/i, 'Canonical Purchases policy lost extra-payment protection.');
requireMatch(purchases, /Lifetime VIP may be sold at different prices in different genuine promotional sales windows/i, 'Canonical Purchases policy lost Lifetime VIP multi-window pricing rule.');
requireMatch(purchases, /Unrelated legitimately purchased value will not be removed merely because another promotion was invalid/i, 'Canonical Purchases policy lost narrow promotion-abuse correction protection.');

for (const [name, text] of [['promotion gate', gate], ['canonical purchases', purchases]]) {
  if (/TyconX/.test(text)) errors.push(`Displayed brand typo TyconX found in ${name}.`);
  if (/\bbeta\b/i.test(text)) errors.push(`Stale beta wording found in ${name}.`);
}

console.log('TycoonX EU promotion/dark-pattern QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: promotion, countdown, prior-price, personalized-pricing, extra-payment and child-directed purchase safeguards are present.');
}
