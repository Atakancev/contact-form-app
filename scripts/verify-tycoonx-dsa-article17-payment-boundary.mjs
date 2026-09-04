#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_DSA_ARTICLE_17_PAYMENT_MODERATION_BOUNDARY_GATE.md');
const moderationPath = path.join(ROOT, 'TYCOONX_COMMUNITY_MODERATION_RELEASE_CHECKLIST.md');
const authorityPath = path.join(ROOT, 'TYCOONX_DSA_INTERMEDIARY_LIABILITY_AUTHORITY_ORDERS_RELEASE_GATE.md');
const progressPath = path.join(ROOT, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');
const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

const gate = await readFile(gatePath, 'utf8');
const moderation = await readFile(moderationPath, 'utf8');
const authority = await readFile(authorityPath, 'utf8');
const progress = await readFile(progressPath, 'utf8');

// Article 17 scope, quality, timing, and exceptions.
requireMatch(gate, /Article 17 of Regulation \(EU\) 2022\/2065/i, 'Missing Article 17 source rule.');
requireMatch(gate, /restriction imposed because user-provided information is considered illegal or incompatible/i, 'Missing information-linked Article 17 trigger.');
requireMatch(gate, /suspending, terminating, or otherwise restricting \*\*monetary payments\*\*/i, 'Missing Article 17 monetary-payment restriction category.');
requireMatch(gate, /Recital 55/i, 'Missing Recital 55 monetisation context.');
requireMatch(gate, /not automatically an Article 17 moderation decision/i, 'Missing commerce-vs-moderation boundary.');
requireMatch(gate, /at the latest from the date the restriction is imposed/i, 'Missing Article 17 timing rule.');
requireMatch(gate, /Article 17\(4\)[\s\S]*clear and easily comprehensible[\s\S]*precise and specific/i, 'Missing Article 17(4) reason-quality standard.');
requireMatch(gate, /effectively use the available redress routes/i, 'Missing effective-redress purpose of the reason.');

// Article 17(5) / Article 9 boundary.
requireMatch(gate, /Article 17\(5\)[\s\S]*does \*\*not\*\* apply to orders referred to in Article 9/i, 'Missing Article 17(5) Article 9 exclusion.');
requireMatch(gate, /route the order through `TYCOONX_DSA_INTERMEDIARY_LIABILITY_AUTHORITY_ORDERS_RELEASE_GATE\.md`/i, 'Missing authority-order gate routing.');
requireMatch(gate, /Article 9\(5\) recipient-notification workflow/i, 'Missing Article 9 recipient-notice separation.');
requireMatch(gate, /must not be converted into a fake Article 17 decision/i, 'Missing Article 9-to-Article 17 non-conversion rule.');
requireMatch(gate, /separate CK-Labs decision[\s\S]*Article 17 can apply/i, 'Missing separate provider-decision reclassification rule.');
requireMatch(gate, /`authority_order_action`[\s\S]*`provider_moderation_action`/i, 'Missing separate authority/provider moderation records.');
requireMatch(gate, /Never duplicate a sanction/i, 'Missing duplicate-sanction protection.');
requireMatch(authority, /Article 9 orders to act against illegal content/i, 'Authority-order gate lost Article 9 intake.');
requireMatch(authority, /inform the affected recipient at the time required by Article 9\(5\)/i, 'Authority-order gate lost Article 9(5) notice rule.');

// Deceptive high-volume commercial content must remain a narrow exception.
requireMatch(gate, /Article 17\(2\)[\s\S]*deceptive high-volume commercial content is a narrow exception/i, 'Missing narrow Article 17(2) exception section.');
requireMatch(gate, /intentional manipulation of the service[\s\S]*bots, fake accounts/i, 'Missing Recital 55 inauthentic-use context.');
requireMatch(gate, /commercial nature of the information/i, 'Missing commercial-nature exception evidence.');
requireMatch(gate, /high-volume dissemination pattern/i, 'Missing high-volume exception evidence.');
requireMatch(gate, /deceptive or inauthentic element/i, 'Missing deceptive/inauthentic exception evidence.');
requireMatch(gate, /Do \*\*not\*\* rely on the exception merely because/i, 'Missing exception anti-overreach rule.');
requireMatch(gate, /message is unwanted or repetitive/i, 'Missing ordinary-repetition safeguard.');
requireMatch(gate, /labels the content `spam`, `scam`, `commercial`, or `fraud`/i, 'Missing label-only exception safeguard.');
requireMatch(gate, /does not create a chargeback/i, 'Missing exception-vs-chargeback boundary.');
requireMatch(gate, /Where the factual basis is uncertain, do not stretch the exception/i, 'Missing uncertainty safeguard for Article 17(2).');

// Payment-channel and entitlement separation.
requireMatch(gate, /Apple App Store refund or reversal/i, 'Missing Apple transaction separation.');
requireMatch(gate, /Google Play refund, voided purchase/i, 'Missing Google transaction separation.');
requireMatch(gate, /Xsolla failed, pending, canceled, refunded, reversed, or charged-back transaction/i, 'Missing Xsolla transaction separation.');
requireMatch(gate, /RTDN or Developer API state is payment evidence, not a TycoonX moderation reason/i, 'Missing Google evidence boundary.');
requireMatch(gate, /linked but separate records/i, 'Missing mixed-incident record separation.');
requireMatch(gate, /payment\/transaction decision schema/i, 'Missing independent payment decision schema.');
requireMatch(gate, /must not silently generate a moderation violation/i, 'Missing payment-to-moderation non-propagation rule.');

// Required Article 17 reason content and security proportionality.
requireMatch(gate, /territorial scope and duration/i, 'Missing restriction scope/duration.');
requireMatch(gate, /facts and circumstances relied on/i, 'Missing facts/circumstances field.');
requireMatch(gate, /strictly necessary and lawful/i, 'Missing notifier-identity necessity safeguard.');
requireMatch(gate, /automated means were used/i, 'Missing automation disclosure.');
requireMatch(gate, /specific contractual\/policy ground/i, 'Missing contractual/policy ground.');
requireMatch(gate, /certified out-of-court dispute settlement/i, 'Missing redress information.');
requireMatch(gate, /generic permanent `security reasons` placeholder/i, 'Missing generic-security-reason rejection.');
requireMatch(gate, /reusable fraud thresholds/i, 'Missing anti-abuse detail protection.');

// Account compromise and product invariants.
requireMatch(gate, /compromised TycoonX account/i, 'Missing account-compromise boundary.');
requireMatch(gate, /does not by itself authorize CK-Labs to erase unrelated legitimately purchased Diamonds/i, 'Missing Diamond isolation.');
requireMatch(gate, /one-time, non-renewing 30-day entitlement/i, 'Missing 30-Day VIP product distinction.');
requireMatch(gate, /one-time promotional entitlement offered only during selected genuine sales windows/i, 'Missing Lifetime VIP selected-window rule.');
requireMatch(gate, /may be withdrawn from future sale, may never return/i, 'Missing Lifetime VIP availability protection.');
requireMatch(gate, /does not by itself create an expiry date/i, 'Missing Lifetime VIP expiry protection.');
requireMatch(gate, /Article 9 order, or reliance on the deceptive-high-volume-content exception does not by itself authorize/i, 'Missing Article 9/exception paid-value isolation.');

// Article 19 / 24(5) separation.
requireMatch(gate, /Article 19 micro\/small-enterprise exemption/i, 'Missing Article 19 classification rule.');
requireMatch(gate, /does not erase an Article 17 hosting-service duty/i, 'Missing Article 17 vs Article 19 distinction.');
requireMatch(gate, /Article 24\(5\) Transparency Database separation/i, 'Missing Article 24(5) separation.');
requireMatch(gate, /personal data must be removed from the public-database submission/i, 'Missing Transparency Database personal-data safeguard.');
requireMatch(gate, /online platforms[\s\S]*subset of hosting services/i, 'Missing online-platform database scope boundary.');
requireMatch(gate, /must not be injected into the DSA Transparency Database/i, 'Missing payment-only database exclusion.');
requireMatch(gate, /Article 9 order must not be converted into a fake Article 17 decision/i, 'Missing Article 9 database exclusion.');

// Platform rule cross-checks remain separate from DSA duties.
requireMatch(gate, /App Review Guideline 1\.2/i, 'Missing current Apple UGC reference.');
requireMatch(gate, /Google Play's current UGC rules/i, 'Missing current Google UGC reference.');
requireMatch(gate, /those platform requirements are distinct from Article 17/i, 'Missing platform-vs-DSA separation.');

// Fresh German enforcement evidence.
requireMatch(gate, /April 30, 2026[\s\S]*more than \*\*2,000 DSA complaints in 2025\*\*/i, 'Missing 2026 Bundesnetzagentur activity-report signal.');
requireMatch(gate, /July 6, 2026[\s\S]*eBay/i, 'Missing 2026 eBay enforcement signal.');
requireMatch(gate, /not yet a final decision/i, 'Missing cautious eBay enforcement-status wording.');

// Regression scenarios for the newly hardened boundaries.
requireMatch(gate, /test one valid Article 9 order/i, 'Missing Article 9 regression scenario.');
requireMatch(gate, /test one fake\/invalid authority email/i, 'Missing fake-authority regression scenario.');
requireMatch(gate, /test one deceptive-high-volume commercial-content classification/i, 'Missing Article 17(2) regression scenario.');
requireMatch(gate, /ordinary repeated\/non-commercial message/i, 'Missing exception overreach regression scenario.');

// Ensure this companion remains additive to the existing DSA moderation source of truth.
requireMatch(moderation, /EU DSA Article 17 statement of reasons/i, 'Existing moderation checklist lost Article 17 section.');
requireMatch(moderation, /Article 24\(5\) Transparency Database gate/i, 'Existing moderation checklist lost Article 24(5) section.');
requireMatch(gate, /narrow companion to `TYCOONX_COMMUNITY_MODERATION_RELEASE_CHECKLIST\.md`/i, 'Gate must remain a narrow companion rather than a duplicate replacement.');

// Localization/release state must remain closed and current because this gate does not change canonical player-facing meaning.
requireMatch(progress, /25\/25[^\n]*target locales/i, 'Progress file no longer confirms all 25 locales.');
requireMatch(progress, /100\/100 localized full documents are currently confirmed current/i, 'Progress file no longer confirms 100 localized documents.');
requireMatch(progress, /Exact next unfinished locale\/document: None/i, 'Localization queue is not closed.');
requireMatch(progress, /TycoonX went to full release on \*\*September 1, 2026\*\*/i, 'Progress file lost live-release wording.');

for (const [name, text] of [
  ['Article 17 payment boundary gate', gate],
  ['DSA moderation checklist', moderation],
  ['DSA authority-order gate', authority],
  ['localization progress', progress],
]) {
  if (/TyconX/.test(text)) errors.push(`Displayed brand typo TyconX found in ${name}.`);
}

// This operational/legal gate must not imply the live service is a beta.
if (/\bTycoonX\s+(?:is|remains|service is)\s+(?:a\s+)?beta\b/i.test(gate)) {
  errors.push('Stale live-service beta wording found in Article 17 payment boundary gate.');
}

console.log('TycoonX DSA Article 17 payment/moderation boundary QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: Article 17 reasons are separated from Article 9 authority orders, narrow deceptive-high-volume commercial content, Apple/Google/Xsolla payment state, entitlement reconciliation, account compromise, and Article 24(5) reporting.');
}
