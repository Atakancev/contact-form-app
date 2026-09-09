#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');

const gate = read('TYCOONX_GOOGLE_PLAY_PRICE_EXPERIMENTS_RELEASE_GATE.md');
const discountGate = read('TYCOONX_GOOGLE_PLAY_DISCOUNT_OFFER_ELIGIBILITY_RELEASE_GATE.md');
const personalizedGate = read('TYCOONX_EU_PERSONALIZED_PRICING_AUTOMATED_OFFERS_RELEASE_GATE.md');
const providerPriceGate = read('TYCOONX_EU_GERMAN_PRICE_PROMOTION_PERSONALIZATION_RELEASE_GATE.md');
const purchases = read('tyconx-purchase-refund-policy.md');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const failures = [];

function must(text, pattern, label) {
  if (!pattern.test(text)) failures.push(label);
}

function literal(text, token, label = token) {
  if (!text.includes(token)) failures.push(label);
}

function mustNot(text, pattern, label) {
  if (pattern.test(text)) failures.push(label);
}

must(gate, /Last reviewed: September 9, 2026/i, 'current review date');
must(gate, /price experiments stay disabled for current TycoonX paid products/i, 'fail-closed current decision');
must(gate, /do not enable Google Play price experiments for current TycoonX Diamonds, one-time 30-Day VIP, or Lifetime VIP/i, 'all current paid products excluded by default');
must(gate, /future experiment needs a recorded pre-launch approval/i, 'deliberate future approval requirement');

must(gate, /price experiment is not a Google discount offer/i, 'experiment versus discount-offer separation');
must(gate, /app-level A\/B pricing mechanism applied at the purchase-option level/i, 'Google experiment model');
must(gate, /do not require a discount `offerToken` merely because a user saw an experiment variant/i, 'no fake offer token dependency');
must(gate, /authoritative Google purchase plus the exact provider-confirmed transaction price\/currency/i, 'transaction authority boundary');

for (const token of [
  '1,000 purchase options',
  'two variants plus the control',
  'one experiment at a time',
  'six months',
  '14 days',
  '30 days',
]) literal(gate, token, `current Google price-experiment checkpoint missing: ${token}`);

must(gate, /cannot be paused and a stopped experiment cannot be restarted/i, 'pause/restart checkpoint');
must(gate, /new product or purchase option while an experiment is active does not automatically add it/i, 'new product omission checkpoint');
must(gate, /countries\/regions or products cannot be added to a live experiment/i, 'live scope immutability checkpoint');
must(gate, /associated location overrides\/territories/i, 'associated territory scope checkpoint');

must(gate, /same account and device will see one price for the duration of an experiment/i, 'same-account/device stability');
must(gate, /not by itself evidence of hacking, regional-price abuse, account compromise or manipulated checkout/i, 'different experiment price not automatic abuse');
must(gate, /not proof of residence, nationality, tax domicile, card country or entitlement ownership/i, 'cohort not identity/residency evidence');

must(gate, /Article 246a § 1\(1\) sentence 1 no\. 6 EGBGB/i, 'German personalized-price disclosure rule');
must(gate, /personalized pricing based on automated decision-making\/profiling/i, 'EU personalized-pricing boundary');
must(gate, /do not feed spending history, churn likelihood, prior purchase\/refusal history, account value, age, engagement, inferred wealth, device fingerprint/i, 'behavioral/profile targeting block');
must(gate, /if the price is personalized on the basis of automated decision-making, provide every required pre-contract disclosure/i, 'personalized price disclosure escalation');
must(gate, /classify the actual mechanism and data inputs/i, 'no automatic personalized-price assumption');

must(gate, /can test both a decrease and an increase relative to the control price/i, 'increase/decrease experiment model');
must(gate, /actual local percentage movement can differ from the headline percentage configured in Play Console/i, 'local pricing-pattern percentage drift');
must(gate, /UWG § 5/i, 'German misleading-price safeguard');
must(gate, /do not reconstruct the amount paid later as `control price ± configured experiment percentage`/i, 'no reconstructed paid amount');
must(gate, /final total shown through the payment flow and the authoritative provider transaction evidence govern/i, 'final checkout/provider authority');

must(gate, /Completed purchases are not repriced when an experiment ends or reverts/i, 'non-retroactive experiment reversion');
must(gate, /later price decrease does not automatically create a refund, credit or price-match right/i, 'later decrease rule');
must(gate, /later increase does not create an extra charge on an already completed one-time purchase/i, 'later increase rule');
must(gate, /Refunds and chargebacks use the transaction's actual paid price, never the control price/i, 'refund actual-price rule');
must(gate, /lower experiment price as underpayment, regional-price abuse or coupon abuse/i, 'lower variant not abuse');

must(gate, /same Diamond quantity as the control/i, 'Diamonds quantity invariant');
must(gate, /purchased Diamonds do not expire solely because time passes/i, 'purchased Diamonds no-expiry rule');
must(gate, /not a price-only experiment and requires separate catalog, marketing, entitlement and localization review/i, 'bundle-content change review');

must(gate, /non-renewing entitlement lasting 30 consecutive days from activation or availability/i, '30-Day VIP exact semantics');
must(gate, /must not.*change the VIP duration/is, '30-Day VIP duration invariant');
must(gate, /must not.*create a subscription/is, '30-Day VIP non-recurring invariant');

must(gate, /Lifetime VIP is excluded from ordinary price experiments/i, 'Lifetime VIP experiment exclusion');
must(gate, /available only during selected genuine sales windows/i, 'Lifetime VIP selected-window rule');
must(gate, /may be withdrawn from sale, may never return/i, 'Lifetime VIP non-continuity rule');
must(gate, /automatic or delayed Google reversion cannot reopen a closed sale/i, 'Lifetime VIP no reversion reopening');
must(gate, /catalog-management state.*not authorization to keep Lifetime VIP purchasable/is, 'catalog deletion not sales authority');

must(gate, /one-time product cannot be deleted while it is used by an ongoing campaign or experiment/i, 'Google catalog deletion coupling');
must(gate, /urgent security\/legal shutdown of the purchase path/i, 'shutdown despite deletion block');
must(gate, /provider restriction on deletion does not override CK-Labs' obligation to stop an unlawful, erroneous or closed-window sale/i, 'deletion block not excuse');

must(gate, /France experiment excludes associated French territories/i, 'France territory example');
must(gate, /Play country\/experiment arm is provider catalog context, not proof of legal residence or nationality/i, 'region evidence boundary');
must(gate, /canceled within 24 hours of its scheduled start can occasionally go live temporarily/i, 'near-start cancellation propagation');
must(gate, /do not punish a user for buying a variant Google validly exposed/i, 'provider propagation not player fault');

must(gate, /must not become a fraud or marketing profile by default/i, 'experiment data purpose boundary');
must(gate, /infer willingness to pay, wealth, age or vulnerability merely from experiment arm/i, 'no sensitive inference from arm');
must(gate, /reconstruct provider-withheld analytics through invasive fingerprinting/i, 'no fingerprint reconstruction');
must(gate, /Data minimization and purpose limitation remain mandatory/i, 'privacy minimization');

must(gate, /count only authoritative completed provider transactions as paid revenue/i, 'finance completed-revenue rule');
must(gate, /record the actual paid amount\/currency rather than the control\/list price/i, 'finance actual-price rule');
must(gate, /Experiment statistical significance is not accounting authority/i, 'statistics not finance authority');

for (const scenario of [
  '**Lower-price Diamond variant:**',
  '**Higher-price Diamond variant:**',
  '**Same account/device stability:**',
  '**Different users, same market:**',
  '**Experiment reversion:**',
  '**Statistical-significance reversion:**',
  '**Six-month maximum:**',
  '**Refund at lower variant:**',
  '**Refund at higher variant:**',
  '**Pending purchase:**',
  '**Failed purchase:**',
  '**30-Day VIP variant:**',
  '**Lifetime VIP attempted experiment:**',
  '**Closed Lifetime window:**',
  '**Associated territory:**',
  '**Price-range boundary:**',
  '**Tax/local pricing:**',
  '**Personal-data targeting attempted:**',
  '**Pure provider cohort:**',
  '**Catalog deletion blocked:**',
  '**Canceled near start:**',
  '**New purchase option added mid-test:**',
  '**Experiment ends after outage:**',
  '**Support screenshot:**',
  '**Experiment report opt-out/data gap:**',
  '**Unknown future Google behavior:**',
]) literal(gate, scenario, `missing regression scenario: ${scenario}`);

must(gate, /BLOCK GOOGLE PLAY PRICE EXPERIMENTS for current TycoonX paid products/i, 'explicit release blocker');
must(gate, /German\/EU mandatory-rights review/i, 'mandatory-rights release blocker');

must(discountGate, /offer eligibility is not entitlement authority/i, 'existing discount-offer doctrine intact');
must(discountGate, /`fullPriceMicros` is provider metadata, not automatic legal authority for a crossed-out price claim/i, 'existing discount/reference price doctrine intact');
must(personalizedGate, /do not enable automated personalized pricing or personalized automated discounts/i, 'existing personalized-pricing default intact');
must(personalizedGate, /Article 246a § 1\(1\) sentence 1 no\. 6 EGBGB/i, 'existing German personalized-price doctrine intact');
must(providerPriceGate, /four-layer price truth chain/i, 'existing cross-provider price evidence doctrine intact');

must(purchases, /Purchased Diamonds do not expire solely because time passes/i, 'canonical Diamond invariant');
must(purchases, /one-time, non-renewing entitlement/i, 'canonical 30-Day VIP invariant');
must(purchases, /selected limited promotional sales windows/i, 'canonical Lifetime VIP sales-window invariant');
must(purchases, /final total price and currency displayed by the applicable checkout before confirmation govern that transaction/i, 'canonical final-price rule');
must(purchases, /prices may differ between Apple App Store, Google Play, the official TycoonX web shop, countries, regions, currencies, and genuine promotional windows/i, 'canonical future-price/channel rule');
must(purchases, /does not reduce any rights that cannot legally be waived/i, 'canonical mandatory-rights caveat');

must(progress, /25\/25/i, '25/25 localized hubs');
must(progress, /All 25 target locales and all 100 localized full documents are current/i, '100 localized documents current');
must(progress, /September 1, 2026/i, 'full-release date');

const badBrand = new RegExp('\\bTy' + 'conX\\b');
for (const [name, text] of [
  ['price-experiment gate', gate],
  ['discount-offer gate', discountGate],
  ['personalized-pricing gate', personalizedGate],
  ['provider-price gate', providerPriceGate],
  ['canonical Purchases policy', purchases],
]) {
  mustNot(text, badBrand, `legacy displayed brand spelling in ${name}`);
  mustNot(text, /TycoonX.{0,40}\bbeta\b|\bbeta\b.{0,40}TycoonX/i, `stale live-service beta wording in ${name}`);
}

if (failures.length) {
  console.error('TycoonX Google Play price experiments verification FAILED:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX Google Play price experiments verification passed.');
