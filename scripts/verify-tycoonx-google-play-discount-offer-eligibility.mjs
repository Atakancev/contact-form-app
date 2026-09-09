#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gate = await readFile(path.join(root, 'TYCOONX_GOOGLE_PLAY_DISCOUNT_OFFER_ELIGIBILITY_RELEASE_GATE.md'), 'utf8');
const pricing = await readFile(path.join(root, 'TYCOONX_PRICING_CATALOG_CONFIGURATION_ERROR_RELEASE_GATE.md'), 'utf8');
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
must(gate, /narrow companion to `TYCOONX_PRICING_CATALOG_CONFIGURATION_ERROR_RELEASE_GATE\.md`/i, 'non-duplicative pricing-gate relationship');
must(gate, /offer eligibility is not entitlement authority/i, 'offer eligibility trust boundary');

for (const token of [
  '`productId`',
  '`purchaseOptionId`',
  '`offerId`',
  '`offerToken`',
  '`fullPriceMicros`',
  '`LimitedQuantityInfo`',
  '`ValidTimeWindow`',
  '`ITEM_UNAVAILABLE`',
]) literal(gate, token, `Google offer field/behavior missing: ${token}`);

must(gate, /do not choose an offer merely because it is the first, cheapest, previously cached, or most profitable offer/i, 'deterministic offer selection');
must(gate, /Offer tags.*not payment or entitlement authority/is, 'offer tags not entitlement authority');

must(gate, /consumed purchases count/i, 'consumed purchases count toward limited quantity');
must(gate, /pending purchases count/i, 'pending purchases count toward limited quantity');
must(gate, /canceled, refunded, or charged back do not count/i, 'reversed purchases excluded from limited quantity');
must(gate, /Google billing consumption remains separate from in-game Diamond spending/i, 'Google consumption versus Diamond spend separation');
must(gate, /pending purchases when calculating remaining offer quantity/i, 'pending offer reservation behavior');
must(gate, /do not grant the paid product while the purchase remains pending/i, 'no entitlement during pending purchase');

must(gate, /offer can therefore become eligible again after a qualifying provider reversal/i, 'refund can restore provider offer eligibility');
must(gate, /later successful repurchase is a \*\*new provider transaction\*\*/i, 're-purchase is not restoration');
must(gate, /double-claw back/i, 'no duplicate refund correction');
must(gate, /provider-approved refund into automatic fraud evidence/i, 'refund not automatic fraud');

must(gate, /countdown that continues after the provider offer is no longer eligible/i, 'countdown expiry integrity');
must(gate, /false scarcity, false countdown behavior, or an inaccurate claimed price advantage/i, 'anti-fake-urgency safeguard');
must(gate, /eligibility can change between displaying an offer and launching the billing flow/i, 'country/region recheck behavior');
must(gate, /`ITEM_UNAVAILABLE`.*not by itself evidence of VPN use, regional-price abuse, hacking, or account manipulation/is, 'ITEM_UNAVAILABLE not automatic abuse');

must(gate, /`fullPriceMicros` is provider metadata, not automatic legal authority for a crossed-out price claim/i, 'reference-price marketing boundary');
must(gate, /UWG § 5/i, 'German misleading-price rule');
must(gate, /PAngV § 11.*goods/is, 'no over-application of goods prior-price rule');
must(gate, /tax-exclusive countries.*formatted offer price does not include tax/is, 'Google formatted-price tax limitation');
must(gate, /PAngV § 3/i, 'German total-price rule');
must(gate, /do not globally label every Google `formattedPrice` value as “final total including all taxes”/i, 'tax-inclusive display guard');

must(gate, /Lifetime VIP.*selected genuine sales windows/is, 'Lifetime VIP limited-window definition');
must(gate, /not the sales-window control/i, 'redemption limit cannot control Lifetime sale window');
must(gate, /deactivate every Google purchase option\/offer\/bundle that can create a new Lifetime VIP sale/i, 'Lifetime sale-path closure');
must(gate, /refund or chargeback can change provider offer eligibility/i, 'Lifetime refund re-eligibility risk');

must(gate, /one-time 30-Day VIP remains exactly one non-renewing entitlement lasting \*\*30 consecutive days\*\*/i, '30-Day VIP exact product invariant');
must(gate, /future recurring VIP product.*own compliant recurring-product terms/is, 'future recurring product guard');

must(gate, /Pre-order offers are not approved for current TycoonX paid products/i, 'pre-order block for current products');
must(gate, /Early Access Program/i, 'current Google pre-order program status');
must(gate, /charge occurs at release/i, 'pre-order payment timing');
must(gate, /Diamonds, one-time 30-Day VIP, and Lifetime VIP are immediate paid digital entitlements/i, 'current immediate-delivery product semantics');

for (const scenario of [
  '**Consumed Diamond offer:**',
  '**Pending quantity:**',
  '**Canceled pending purchase:**',
  '**Refund re-eligibility:**',
  '**Expired offer:**',
  '**Region change:**',
  '**Offer-tag collision:**',
  '**Reference-price claim:**',
  '**Tax-exclusive market:**',
  '**Lifetime sale closure:**',
  '**30-Day VIP offer:**',
  '**Pre-order misconfiguration:**',
]) literal(gate, scenario, `Missing regression scenario: ${scenario}`);

must(pricing, /multiple purchase options, and a purchase option can have multiple offers/i, 'parent pricing gate lost multiple-offer model');
must(pricing, /selected offer token/i, 'parent pricing gate lost selected-offer-token rule');
must(pricing, /closing a Lifetime VIP sales window must also close\/deactivate every Play purchase option or offer/i, 'parent pricing gate lost Lifetime offer closure');
must(pricing, /final payable price before confirmation/i, 'parent pricing gate lost final Google checkout price boundary');

must(purchases, /mandatory rights/i, 'canonical Purchases policy lost mandatory-rights baseline');
must(purchases, /completed purchase/i, 'canonical Purchases policy lost completed-purchase framework');
must(purchases, /Lifetime VIP/i, 'canonical Purchases policy lost Lifetime VIP distinction');
must(purchases, /30-Day VIP/i, 'canonical Purchases policy lost 30-Day VIP distinction');
must(purchases, /Diamonds/i, 'canonical Purchases policy lost Diamonds distinction');

for (const [label, text] of [
  ['discount-offer gate', gate],
  ['pricing/catalog gate', pricing],
  ['canonical Purchases policy', purchases],
]) {
  if (/\bTyconX\b/.test(text)) failures.push(`Displayed legacy brand spelling found in ${label}`);
  if (/TycoonX\s+beta/i.test(text)) failures.push(`Stale live-service beta wording found in ${label}`);
}

literal(progress, 'All 25 target locales and all 100 localized full documents are current.', 'localization completion marker');
literal(progress, 'Exact next unfinished locale/document: None', 'closed localization queue');
literal(progress, 'September 1, 2026', 'full-release date invariant');

console.log('TycoonX Google Play one-time discount-offer eligibility QA');

if (failures.length) {
  console.error('\nFAILED:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('PASS: limited-quantity, pending/refund re-eligibility, time-window, region, price-display, Lifetime VIP, 30-Day VIP, pre-order, brand, release and localization safeguards are present.');
