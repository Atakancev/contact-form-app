#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_EU_PROMOTION_DARK_PATTERN_RELEASE_GATE.md');
const purchasesPagePath = path.join(ROOT, 'app', 'tyconx-purchase-refund-policy', 'page.tsx');
const purchasesMarkdownPath = path.join(ROOT, 'tyconx-purchase-refund-policy.md');

const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

const gate = await readFile(gatePath, 'utf8');
const purchasesPage = await readFile(purchasesPagePath, 'utf8');
const purchasesMarkdown = await readFile(purchasesMarkdownPath, 'utf8');

requireMatch(gate, /Lifetime VIP windows must be real/i, 'Missing genuine Lifetime VIP window requirement.');
requireMatch(gate, /countdown must not automatically reset/i, 'Missing fake-countdown reset protection.');
requireMatch(gate, /No fake scarcity or false urgency/i, 'Missing scarcity/urgency protection.');
requireMatch(gate, /crossed-out price|reference price/i, 'Missing reference-price substantiation rule.');
requireMatch(gate, /PAngV § 11/i, 'Missing German PAngV § 11 price-reduction checkpoint.');
requireMatch(gate, /goods-only scope|applies when a trader announces a price reduction for a \*\*Ware\*\*/i, 'Missing goods-only scope for German PAngV § 11.');
requireMatch(gate, /does \*\*not\*\* apply to services, including digital services, or to digital content/i, 'Missing Commission Article 6a guidance excluding services/digital content from the price-indication rule.');
requireMatch(gate, /Diamonds, one-time 30-Day VIP and Lifetime VIP are purely digital monetization products/i, 'Missing TycoonX digital-product application of the PAngV scope analysis.');
requireMatch(gate, /lowest total price applied toward consumers during the preceding 30 days/i, 'Missing German 30-day prior-price safeguard for in-scope goods.');
requireMatch(gate, /PAngV § 11\(2\).*stepwise, uninterrupted increasing price reduction/is, 'Missing PAngV § 11(2) progressive-reduction rule.');
requireMatch(gate, /pre-campaign statutory reference price.*every reduction step/is, 'Missing progressive-reduction evidence trail.');
requireMatch(gate, /Current German PAngV § 11 does not contain that optional new-goods exception/i, 'Missing safeguard against inventing the optional Article 6a new-goods exception in Germany.');
requireMatch(gate, /Member State regulatory choices/i, 'Missing Article 6a national-regulatory-choice distinction.');
requireMatch(gate, /§ 11\(4\)\(1\).*individual price reductions/i, 'Missing PAngV individual-price-reduction exception checkpoint.');
requireMatch(gate, /publicly available coupon.*not.*individual|broadly available loyalty offer.*not.*individual/is, 'Missing safeguard against overusing the individual-discount exception.');
requireMatch(gate, /UWG § 5\(5\)/i, 'Missing German UWG § 5(5) price-reduction checkpoint.');
requireMatch(gate, /unreasonably short period/i, 'Missing UWG safeguard against a briefly inflated former price.');
requireMatch(gate, /advertiser bears the burden of proof/i, 'Missing UWG § 5(5) price-history burden-of-proof rule.');
requireMatch(gate, /Do not set a higher price only briefly to manufacture an apparent saving/i, 'Missing anti-manufactured-discount safeguard for digital offers.');
requireMatch(gate, /old sales window does not automatically become a truthful "was" price/i, 'Missing Lifetime VIP sales-window reference-price safeguard.');
requireMatch(gate, /same entitlement or bundle quantity.*same country\/region.*comparable storefront\/channel.*same currency/is, 'Missing like-for-like comparison basis for direct savings claims.');
requireMatch(gate, /Diamond quantity, VIP duration\/benefits.*material bundle contents changed/is, 'Missing changed-bundle comparison safeguard.');
requireMatch(gate, /Transactional promotion surfaces: material offer information/i, 'Missing transactional promotion material-information section.');
requireMatch(gate, /UWG §§ 5a and 5b/i, 'Missing UWG §§ 5a/5b transactional-offer checkpoint.');
requireMatch(gate, /essential product\/entitlement characteristics.*trader identity and address.*total price.*withdrawal right/is, 'Missing material transactional-offer information set.');
requireMatch(gate, /vague "terms apply" or generic legal link/i, 'Missing safeguard against hiding material terms behind a generic legal link.');
requireMatch(gate, /2021\/C 526\/02/i, 'Missing Commission Article 6a guidance reference.');
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

for (const [name, purchases] of [
  ['canonical purchases markdown', purchasesMarkdown],
  ['rendered canonical purchases page', purchasesPage],
]) {
  requireMatch(purchases, /Promotional claims, countdowns, crossed-out prices, stated savings, (?:limited-time statements, and )?other price-advantage claims must reflect the genuine offer and must not be misleading/i, `${name} lost truthful promotion/countdown protection.`);
  requireMatch(purchases, /Where a jurisdiction requires a (?:specific|particular) reference price, (?:price-history disclosure, or other discount rule|discount disclosure, or price-history rule) for the (?:particular|specific) product or offer/i, `${name} lost jurisdiction-specific discount-rule safeguard.`);
  requireMatch(purchases, /If a price is personalized on the basis of automated decision-making and applicable law requires disclosure of that fact/i, `${name} lost personalized-pricing disclosure safeguard.`);
  requireMatch(purchases, /Ordinary country-based, storefront-based, currency-based, tax-based, or generally available regional pricing is not described as personalized pricing/i, `${name} lost regional-vs-personalized pricing distinction.`);
  requireMatch(purchases, /final total price and currency displayed by the applicable checkout/i, `${name} lost final checkout price rule.`);
  requireMatch(purchases, /preselected paid extras/i, `${name} lost extra-payment protection.`);
  requireMatch(purchases, /Lifetime VIP may be sold at different prices in different genuine promotional sales windows/i, `${name} lost Lifetime VIP multi-window pricing rule.`);
  requireMatch(purchases, /Unrelated legitimately purchased value will not be removed merely because another promotion was invalid/i, `${name} lost narrow promotion-abuse correction protection.`);
}

for (const [name, text] of [
  ['promotion gate', gate],
  ['canonical purchases markdown', purchasesMarkdown],
  ['rendered canonical purchases page', purchasesPage],
]) {
  if (/TyconX/.test(text)) errors.push(`Displayed brand typo TyconX found in ${name}.`);
  if (/\bbeta\b/i.test(text)) errors.push(`Stale beta wording found in ${name}.`);
}

console.log('TycoonX EU promotion/dark-pattern QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: promotion, German digital-vs-goods price scope, progressive-reduction evidence, UWG material-offer disclosures, personalized pricing, extra-payment and child-directed purchase safeguards are present in canonical surfaces.');
}
