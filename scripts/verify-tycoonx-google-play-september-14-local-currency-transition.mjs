#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gate = await readFile(path.join(root, 'TYCOONX_GOOGLE_PLAY_SEPTEMBER_14_2026_LOCAL_CURRENCY_TRANSITION_RELEASE_GATE.md'), 'utf8');
const pricing = await readFile(path.join(root, 'TYCOONX_PRICING_CATALOG_CONFIGURATION_ERROR_RELEASE_GATE.md'), 'utf8');
const billingCountry = await readFile(path.join(root, 'TYCOONX_GOOGLE_PLAY_BILLING_CONFIG_COUNTRY_PRIVACY_RELEASE_GATE.md'), 'utf8');
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
must(gate, /narrow dated companion to `TYCOONX_PRICING_CATALOG_CONFIGURATION_ERROR_RELEASE_GATE\.md`/i, 'non-duplicative parent-gate relationship');
literal(gate, 'September 14, 2026', 'Google cutover date');

for (const market of ['Argentina', 'Azerbaijan', 'Uzbekistan', 'Ethiopia']) {
  literal(gate, market, `missing affected market: ${market}`);
}

must(gate, /existing USD prices.*automatically convert to local currencies/is, 'automatic local-currency conversion');
must(gate, /USD to \*\*ETB\*\*/i, 'Ethiopia ETB conversion');
must(gate, /existing products will remain available for purchase during the transition/i, 'Google continuity statement');

must(gate, /pre-cutover evidence snapshot/i, 'pre-cutover configuration snapshot');
must(gate, /post-cutover.*re-query Google Play Console\/current catalog state/is, 'post-cutover reconciliation');
must(gate, /Do not recreate Google's converted prices with CK-Labs' own FX formula/i, 'no private FX recreation');
must(gate, /Keep customer currency, developer default currency, settlement currency and accounting currency separate/i, 'currency-role separation section');
must(gate, /developer default currency is based on the location of the developer's payments profile/i, 'developer default currency source rule');
must(gate, /customer-facing catalog\/checkout currency/i, 'customer currency model');
must(gate, /provider-confirmed transaction amount and transaction currency/i, 'transaction currency model');
must(gate, /Google settlement\/payout\/reporting currency and amount/i, 'settlement currency model');
must(gate, /internal accounting currency and FX normalization/i, 'accounting currency model');
must(gate, /Never overwrite the provider-confirmed customer transaction amount\/currency/i, 'no settlement overwrite of customer transaction');

must(gate, /Invalidate stale USD display caches near checkout/i, 'stale USD cache invalidation');
must(gate, /price, SKU and distribution changes can take a few hours/i, 'Google propagation-delay handling');
must(gate, /not treat the mismatch as player fraud, hacking, regional-price abuse, promotion abuse or entitlement abuse/i, 'transition mismatch not abuse');
must(gate, /locally relevant pricing patterns.*rounded/is, 'local price-pattern rounding handling');
must(gate, /difference from CK-Labs' own currency calculator is not automatically a catalog error/i, 'no false catalog error from FX difference');

must(gate, /Historical USD transactions remain historical transactions/i, 'historical transaction immutability');
must(gate, /retroactively replace an old transaction currency/i, 'no historical currency overwrite');
must(gate, /extra charge.*higher/is, 'no retroactive price increase');
must(gate, /automatic refund, credit or price-match.*lower/is, 'no automatic price match');
must(gate, /today's FX rate/i, 'no current-FX rewrite');
must(gate, /original Google transaction.*authoritative Google refund\/void state/is, 'refund uses original provider transaction');
must(gate, /RTDN, Voided Purchases/i, 'Google reversal paths converge');

must(gate, /Diamond bundle must grant the same configured transaction-specific Diamond quantity/i, 'Diamond quantity invariant');
must(gate, /Purchased Diamonds do not expire merely because time passes or the store currency changes/i, 'Diamond non-expiry invariant');
must(gate, /30-Day VIP remains exactly one non-renewing entitlement lasting \*\*30 consecutive days\*\*/i, '30-Day VIP exact invariant');
must(gate, /Lifetime VIP remains a limited-time promotional one-time entitlement.*selected genuine CK-Labs sales windows/is, 'Lifetime VIP sales-window definition');
must(gate, /Ethiopia market opening must not reopen Lifetime VIP/i, 'Ethiopia Lifetime closure');
must(gate, /every Google purchase option, offer or bundle capable of creating a new Lifetime VIP sale must remain disabled in Ethiopia/i, 'Lifetime sale-path closure in Ethiopia');
must(gate, /existing products remain available.*must not be interpreted as an instruction to reactivate/is, 'Google continuity wording cannot reopen closed offers');

must(gate, /Regional currency is not proof of residence or abuse/i, 'regional currency identity boundary');
must(gate, /BillingConfig.*ephemeral/is, 'BillingConfig privacy relationship');
must(gate, /provider currency migration does not itself create a discount/i, 'currency conversion is not a promotion');
must(gate, /UWG § 5/i, 'German misleading-practice checkpoint');
must(gate, /PAngV § 3/i, 'German total-price checkpoint');
must(gate, /Taxes and final consumer totals must not be hard-coded/i, 'tax-display safeguard');
must(gate, /Azerbaijan and Uzbekistan.*tax-inclusive pricing/is, 'current Azerbaijan/Uzbekistan tax-inclusive checkpoint');
must(gate, /Argentina and Ethiopia are not listed in that current tax-inclusive-pricing list/i, 'current Argentina/Ethiopia tax-list distinction');
must(gate, /dated operational checkpoint, not a permanent tax-law conclusion/i, 'tax-list drift safeguard');
must(gate, /do not infer tax treatment solely from a currency code or from another affected market/i, 'no currency-code tax inference');
must(gate, /Accounting normalization must not overwrite transaction evidence/i, 'accounting versus transaction currency separation');
must(gate, /Keep Google, Apple and Xsolla price states separate/i, 'channel price-state isolation');

for (const scenario of [
  '**Argentina stale USD cache:**',
  '**Azerbaijan conversion:**',
  '**Uzbekistan conversion:**',
  '**Ethiopia ordinary product:**',
  '**Ethiopia Lifetime VIP closed:**',
  '**Historical USD refund:**',
  '**30-Day VIP:**',
  '**Diamond quantity:**',
  '**Propagation lag:**',
  '**Promotion carry-over:**',
  '**Old screenshot:**',
  '**Accounting conversion:**',
  '**Channel isolation:**',
  '**Future price change:**',
  '**Tax presentation:**',
  '**Tax-inclusive checkpoint:**',
  '**Tax-list drift:**',
  '**Currency-role separation:**',
  '**Google continuity wording:**',
  '**Local pricing pattern:**',
]) {
  literal(gate, scenario, `missing regression scenario: ${scenario}`);
}

must(gate, /developer\.android\.com\/newsletter\/play-monthly\/2026\/content\/august/i, 'official Google cutover source');
must(gate, /support\.google\.com\/googleplay\/android-developer\/answer\/6334373/i, 'official Google pricing source');
must(gate, /support\.google\.com\/googleplay\/android-developer\/answer\/138000/i, 'official Google tax/VAT source');
must(gate, /support\.google\.com\/googleplay\/android-developer\/answer\/9306917/i, 'official Google developer currency source');
must(gate, /gesetze-im-internet\.de\/pangv_2022\/__3\.html/i, 'official PAngV source');
must(gate, /gesetze-im-internet\.de\/uwg_2004\/__5\.html/i, 'official UWG source');

must(pricing, /completed transaction price remains the transaction price/i, 'parent pricing gate historical-price baseline');
must(pricing, /Regional pricing, tax, and FX are not automatically errors/i, 'parent regional-price baseline');
must(pricing, /closing a Lifetime VIP sales window must also close\/deactivate every Play purchase option or offer/i, 'parent Lifetime closure rule');

must(billingCountry, /must not be used to create or enhance a TycoonX profile/i, 'BillingConfig profile restriction');
must(billingCountry, /country mismatch is a risk signal at most, not proof of abuse/i, 'BillingConfig mismatch boundary');

for (const token of ['mandatory rights', 'completed purchase', 'Lifetime VIP', '30-Day VIP', 'Diamonds']) {
  must(purchases, new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'), `canonical Purchases baseline missing: ${token}`);
}

for (const [label, text] of [
  ['local-currency gate', gate],
  ['pricing/catalog gate', pricing],
  ['BillingConfig gate', billingCountry],
  ['canonical Purchases policy', purchases],
]) {
  if (/\bTyconX\b/.test(text)) failures.push(`Displayed legacy brand spelling found in ${label}`);
  if (/TycoonX\s+beta/i.test(text)) failures.push(`Stale live-service beta wording found in ${label}`);
}

literal(progress, 'All 25 target locales and all 100 localized full documents are current.', 'localization completion marker');
literal(progress, 'Exact next unfinished locale/document: None', 'closed localization queue');
literal(progress, 'September 1, 2026', 'full-release date invariant');

console.log('TycoonX Google Play September 14, 2026 local-currency transition QA');

if (failures.length) {
  console.error('\nFAILED:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('PASS: cutover markets, local-currency conversion, currency-role separation, tax/VAT checkpoints, historical transaction integrity, promotions, entitlements, channel isolation, brand, release and localization safeguards are present.');
