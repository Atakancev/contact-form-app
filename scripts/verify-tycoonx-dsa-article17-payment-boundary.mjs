#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_DSA_ARTICLE_17_PAYMENT_MODERATION_BOUNDARY_GATE.md');
const moderationPath = path.join(ROOT, 'TYCOONX_COMMUNITY_MODERATION_RELEASE_CHECKLIST.md');
const progressPath = path.join(ROOT, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');
const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

const gate = await readFile(gatePath, 'utf8');
const moderation = await readFile(moderationPath, 'utf8');
const progress = await readFile(progressPath, 'utf8');

// Article 17 scope and timing.
requireMatch(gate, /Article 17 of Regulation \(EU\) 2022\/2065/i, 'Missing Article 17 source rule.');
requireMatch(gate, /restriction imposed because user-provided information is considered illegal or incompatible/i, 'Missing information-linked Article 17 trigger.');
requireMatch(gate, /suspending, terminating, or otherwise restricting \*\*monetary payments\*\*/i, 'Missing Article 17 monetary-payment restriction category.');
requireMatch(gate, /Recital 55/i, 'Missing Recital 55 monetisation context.');
requireMatch(gate, /not automatically an Article 17 moderation decision/i, 'Missing commerce-vs-moderation boundary.');
requireMatch(gate, /at the latest when the restriction is imposed/i, 'Missing Article 17 timing rule.');
requireMatch(gate, /deceptive high-volume commercial content/i, 'Missing narrow Article 17 exception.');

// Payment-channel and entitlement separation.
requireMatch(gate, /Apple App Store refund or reversal/i, 'Missing Apple transaction separation.');
requireMatch(gate, /Google Play refund, voided purchase/i, 'Missing Google transaction separation.');
requireMatch(gate, /Xsolla failed, pending, canceled, refunded, reversed, or charged-back transaction/i, 'Missing Xsolla transaction separation.');
requireMatch(gate, /RTDN or Developer API state is payment evidence, not a TycoonX moderation reason/i, 'Missing Google evidence boundary.');
requireMatch(gate, /two linked but separate records/i, 'Missing mixed-incident record separation.');
requireMatch(gate, /payment\/transaction decision schema/i, 'Missing independent payment decision schema.');
requireMatch(gate, /must not silently generate a moderation violation/i, 'Missing payment-to-moderation non-propagation rule.');

// Required Article 17 reason quality.
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

// Article 19 / 24(5) separation.
requireMatch(gate, /Article 19 micro\/small-enterprise exemption/i, 'Missing Article 19 classification rule.');
requireMatch(gate, /does not erase an Article 17 hosting-service duty/i, 'Missing Article 17 vs Article 19 distinction.');
requireMatch(gate, /Article 24\(5\) Transparency Database separation/i, 'Missing Article 24(5) separation.');
requireMatch(gate, /personal data must be removed from the public-database submission/i, 'Missing Transparency Database personal-data safeguard.');
requireMatch(gate, /must not be injected into the DSA Transparency Database/i, 'Missing payment-only database exclusion.');

// Fresh German enforcement evidence.
requireMatch(gate, /April 30, 2026[\s\S]*more than \*\*2,000 DSA complaints in 2025\*\*/i, 'Missing 2026 Bundesnetzagentur activity-report signal.');
requireMatch(gate, /July 6, 2026[\s\S]*eBay/i, 'Missing 2026 eBay enforcement signal.');
requireMatch(gate, /not yet a final decision/i, 'Missing cautious eBay enforcement-status wording.');

// Ensure this companion remains additive to the existing DSA moderation source of truth.
requireMatch(moderation, /EU DSA Article 17 statement of reasons/i, 'Existing moderation checklist lost Article 17 section.');
requireMatch(moderation, /Article 24\(5\) Transparency Database gate/i, 'Existing moderation checklist lost Article 24(5) section.');
requireMatch(gate, /narrow companion to `TYCOONX_COMMUNITY_MODERATION_RELEASE_CHECKLIST\.md`/i, 'New gate must remain a narrow companion rather than a duplicate replacement.');

// Localization/release state must remain closed and current because this gate does not change canonical player-facing meaning.
requireMatch(progress, /25\/25[^\n]*target locales/i, 'Progress file no longer confirms all 25 locales.');
requireMatch(progress, /100\/100 localized full documents are currently confirmed current/i, 'Progress file no longer confirms 100 localized documents.');
requireMatch(progress, /Exact next unfinished locale\/document: None/i, 'Localization queue is not closed.');
requireMatch(progress, /TycoonX went to full release on \*\*September 1, 2026\*\*/i, 'Progress file lost live-release wording.');

for (const [name, text] of [
  ['Article 17 payment boundary gate', gate],
  ['DSA moderation checklist', moderation],
  ['localization progress', progress],
]) {
  if (/TyconX/.test(text)) errors.push(`Displayed brand typo TyconX found in ${name}.`);
}

// The new player-facing/legal gate must not imply the live service is a beta.
if (/\bbeta\b/i.test(gate)) errors.push('Stale beta wording found in Article 17 payment boundary gate.');

console.log('TycoonX DSA Article 17 payment/moderation boundary QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: Article 17 content-moderation reasons are separated from Apple/Google/Xsolla payment state, entitlement reconciliation, account compromise, and Article 24(5) reporting.');
}
