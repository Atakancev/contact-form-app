#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_EU_GERMAN_INFLUENCER_AFFILIATE_MARKETING_RELEASE_GATE.md');
const promotionPath = path.join(ROOT, 'TYCOONX_EU_PROMOTION_DARK_PATTERN_RELEASE_GATE.md');
const directMarketingPath = path.join(ROOT, 'TYCOONX_EU_GERMAN_DIRECT_MARKETING_COMMUNICATIONS_RELEASE_GATE.md');
const dsaAdsPath = path.join(ROOT, 'TYCOONX_DSA_ADVERTISING_RECOMMENDER_MINORS_RELEASE_GATE.md');
const tdddgPath = path.join(ROOT, 'TYCOONX_TDDDG_TERMINAL_ACCESS_CONSENT_RELEASE_GATE.md');
const virtualCurrencyPath = path.join(ROOT, 'TYCOONX_EU_VIRTUAL_CURRENCY_RELEASE_GATE.md');
const progressPath = path.join(ROOT, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

const [gate, promotion, directMarketing, dsaAds, tdddg, virtualCurrency, progress] = await Promise.all([
  readFile(gatePath, 'utf8'),
  readFile(promotionPath, 'utf8'),
  readFile(directMarketingPath, 'utf8'),
  readFile(dsaAdsPath, 'utf8'),
  readFile(tdddgPath, 'utf8'),
  readFile(virtualCurrencyPath, 'utf8'),
  readFile(progressPath, 'utf8'),
]);

requireMatch(gate, /full release on \*\*September 1, 2026\*\*/i, 'Missing full-release invariant.');
requireMatch(gate, /does not state that TycoonX currently operates one/i, 'Gate must not invent a current influencer/affiliate program.');
requireMatch(gate, /UWG § 5a\(4\)/i, 'Missing German commercial-purpose rule.');
requireMatch(gate, /UWG Annex No\. 11/i, 'Missing German hidden-advertising rule.');
requireMatch(gate, /UWG Annex No\. 22/i, 'Missing fake-consumer/trader safeguard.');
requireMatch(gate, /UWG Annex No\. 23b/i, 'Missing consumer-review authenticity safeguard.');
requireMatch(gate, /No\. 23c prohibits.*fake consumer reviews/is, 'Missing fake-review prohibition.');
requireMatch(gate, /UWG Annex No\. 28/i, 'Missing direct-exhortation-to-children rule.');
requireMatch(gate, /March 21, 2025 CPC position on Star Stable Online/i, 'Missing current online-game influencer/children enforcement checkpoint.');
requireMatch(gate, /affiliate links.*discount codes.*commercial/is, 'Missing affiliate/promo-code disclosure rule.');
requireMatch(gate, /immediate proximity to the relevant link/i, 'Missing affiliate-link proximity safeguard.');
requireMatch(gate, /free or discounted:\s*\n\n- Diamonds;/i, 'Missing free-Diamond creator-benefit treatment.');
requireMatch(gate, /Lifetime VIP is a one-time entitlement, not a subscription/i, 'Missing Lifetime VIP product distinction.');
requireMatch(gate, /available only during selected genuine promotional sales windows/i, 'Missing Lifetime VIP limited-window rule.');
requireMatch(gate, /may withdraw it from future sale/i, 'Missing Lifetime VIP withdrawal-from-sale rule.');
requireMatch(gate, /may never return/i, 'Missing Lifetime VIP future-availability rule.');
requireMatch(gate, /30-Day VIP.*one-time, non-renewing/is, 'Missing one-time 30-Day VIP rule.');
requireMatch(gate, /final total price presented before transaction confirmation/i, 'Missing final-checkout-price authority.');
requireMatch(gate, /fake crossed-out former price/i, 'Missing false comparison-price safeguard.');
requireMatch(gate, /Ask your parents to get Lifetime VIP/i, 'Missing concrete child-pressure regression example.');
requireMatch(gate, /Apple.*prohibit.*manipulating ratings/is, 'Missing Apple review-manipulation safeguard.');
requireMatch(gate, /Google Play.*incentivized ratings\/reviews/is, 'Missing Google Play incentivized-review safeguard.');
requireMatch(gate, /Diamonds for a five-star review/i, 'Missing explicit store-review incentive prohibition.');
requireMatch(gate, /customer reviews may be used in marketing materials only with permission from the reviewer/i, 'Missing Apple review-reuse permission safeguard.');
requireMatch(gate, /creator agreement should clearly require/i, 'Missing creator-contract controls.');
requireMatch(gate, /affiliate dispute must not itself/is, 'Missing consumer-entitlement isolation from affiliate disputes.');
requireMatch(gate, /Xsolla Partner Network attribution is not legally invisible/i, 'Missing Xsolla creator-attribution section.');
requireMatch(gate, /tracking_id/i, 'Missing Xsolla tracking identifier checkpoint.');
requireMatch(gate, /persist.*localStorage/is, 'Missing Xsolla localStorage attribution checkpoint.');
requireMatch(gate, /TDDDG § 25/i, 'Missing German terminal-access cross-check.');
requireMatch(gate, /do not write\/read the attribution identifier before the consent decision/i, 'Missing pre-consent attribution block.');
requireMatch(gate, /consider a promo-code attribution path/i, 'Missing privacy-minimizing attribution alternative.');
requireMatch(gate, /DSA advertising rules can apply to a different relationship/i, 'Missing DSA/external-influencer separation.');
requireMatch(gate, /Giveaways, prizes and creator promotions need real rules/i, 'Missing creator-giveaway controls.');
requireMatch(gate, /Provider outages, code expiry and campaign termination/i, 'Missing provider/campaign-continuity controls.');
requireMatch(gate, /Business sale or successor operator/i, 'Missing successor-operator creator-marketing controls.');
requireMatch(gate, /Evidence packet for every material creator\/affiliate campaign/i, 'Missing campaign evidence packet.');
requireMatch(gate, /Release blockers/i, 'Missing release blockers.');
requireMatch(gate, /28\. \*\*Localized campaign\*\*/i, 'Missing 28-scenario regression matrix.');
requireMatch(gate, /Public legal wording trigger/i, 'Missing canonical/localization trigger.');
requireMatch(gate, /Do not update 25 locales merely to describe an internal marketing-control process/i, 'Missing anti-duplication localization rule.');

requireMatch(promotion, /Lifetime VIP/i, 'Promotion gate lost Lifetime VIP coverage.');
requireMatch(promotion, /crossed-out/i, 'Promotion gate lost crossed-out-price safeguards.');
requireMatch(directMarketing, /UWG § 7/i, 'Direct-marketing gate lost German channel-permission rule.');
requireMatch(dsaAds, /Article 26/i, 'DSA advertising gate lost Article 26 coverage.');
requireMatch(tdddg, /localStorage/i, 'TDDDG gate lost localStorage/device-access coverage.');
requireMatch(virtualCurrency, /purchased TycoonX Diamonds/i, 'EU virtual-currency gate lost purchased-Diamond coverage.');
requireMatch(progress, /100\/100 localized full documents are currently confirmed current/i, 'Localization tracker no longer confirms 100/100 current.');
requireMatch(progress, /Exact next unfinished locale\/document: None/i, 'Localization tracker no longer records no unfinished locale/document.');

for (const [name, text] of [
  ['influencer/affiliate gate', gate],
  ['promotion gate', promotion],
  ['direct-marketing gate', directMarketing],
  ['DSA advertising gate', dsaAds],
  ['TDDDG gate', tdddg],
  ['EU virtual-currency gate', virtualCurrency],
]) {
  if (/TyconX/.test(text)) errors.push(`Displayed brand typo TyconX found in ${name}.`);
}

for (const pattern of [
  /TycoonX beta/i,
  /beta version of TycoonX/i,
  /TycoonX is (?:currently )?(?:in )?beta/i,
  /beta users/i,
  /beta purchases/i,
]) {
  if (pattern.test(gate)) errors.push('Stale live-service beta wording found in influencer/affiliate gate.');
}

console.log('TycoonX influencer / creator / affiliate marketing QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: disclosure, child protection, truthful product claims, store-review integrity, Xsolla attribution, TDDDG/GDPR separation, entitlement isolation, and localization triggers are present.');
}
