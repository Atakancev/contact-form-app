#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gate = await readFile(path.join(root, 'TYCOONX_ACCOUNT_SUSPENSION_COMPROMISE_TERMINATION_RELEASE_GATE.md'), 'utf8');
const terms = await readFile(path.join(root, 'tyconx-terms-of-service.md'), 'utf8');
const community = await readFile(path.join(root, 'tycoonx-community-standards.md'), 'utf8');
const purchases = await readFile(path.join(root, 'tyconx-purchase-refund-policy.md'), 'utf8');
const googleChargebacks = await readFile(path.join(root, 'TYCOONX_GOOGLE_PLAY_CHARGEBACK_REVIEW_RELEASE_GATE.md'), 'utf8');
const appleBinding = await readFile(path.join(root, 'TYCOONX_APPLE_ACCOUNT_BINDING_RELEASE_GATE.md'), 'utf8');
const xsolla = await readFile(path.join(root, 'TYCOONX_XSOLLA_REFUND_CHARGEBACK_RELEASE_GATE.md'), 'utf8');
const dsaRedress = await readFile(path.join(root, 'TYCOONX_DSA_ARTICLE_20_21_REDRESS_RELEASE_GATE.md'), 'utf8');
const dsaMisuse = await readFile(path.join(root, 'TYCOONX_DSA_ARTICLE_23_MISUSE_RELEASE_GATE.md'), 'utf8');
const progress = await readFile(path.join(root, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md'), 'utf8');

const failures = [];

function requireText(text, token, message) {
  if (!text.includes(token)) failures.push(message ?? `Missing required safeguard: ${token}`);
}

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) failures.push(message);
}

for (const token of [
  'Security containment',
  'Payment-risk restriction',
  'Final termination',
  'A temporary protective restriction is not itself a final finding',
  'Account compromise is a separate factual question',
  'Never ask a player to send',
  'appAccountToken',
  'obfuscatedAccountId',
  'purchase token',
  'Xsolla',
  'BGB § 314',
  'BGB § 307',
  'DSA Article 17',
  "Apple's current App Review Guideline 1.2",
  "Google Play's current UGC policy",
  'purchased Diamonds',
  '30-Day VIP',
  'Lifetime VIP',
  'A chargeback can arise from genuine account/payment compromise',
  'Exploit correction and punishment are separate decisions',
  'Reversal of an enforcement action must also be idempotent',
  'September 1, 2026',
]) requireText(gate, token);

requireMatch(
  gate,
  /security freeze does not itself authorize permanent Diamond removal/i,
  'Missing protection against permanent Diamond removal from a security freeze alone.',
);

requireMatch(
  gate,
  /temporary security hold does not restart the 30-day clock/i,
  'Missing one-time 30-Day VIP clock preservation during security holds.',
);

requireMatch(
  gate,
  /mistaken termination that is reversed must not create a second Lifetime VIP/i,
  'Missing Lifetime VIP non-duplication safeguard after enforcement reversal.',
);

requireMatch(
  gate,
  /Do not automatically classify every chargeback as fraud by the TycoonX account owner/i,
  'Missing chargeback-versus-account-compromise safeguard.',
);

requireMatch(
  gate,
  /state correction[\s\S]*conduct enforcement/i,
  'Missing exploit-state-correction versus conduct-enforcement separation.',
);

requireMatch(
  gate,
  /system cannot reverse an erroneous suspension without manual database surgery/i,
  'Missing stop-ship rule for reversible enforcement state.',
);

requireText(
  terms,
  'CK-Labs may temporarily restrict an account or specific functions where reasonably necessary to investigate suspected compromise, fraud, payment disputes, exploit activity, abusive conduct, or other security concerns.',
  'Canonical Terms lost temporary compromise/fraud investigation authority.',
);

requireText(
  terms,
  'CK-Labs may warn, restrict, suspend, reset affected invalid state, or terminate accounts for serious or repeated violations of these Terms, fraud, cheating, security threats, unlawful activity, abusive conduct, payment abuse, ban evasion, or conduct that materially harms other users or the Service.',
  'Canonical Terms lost suspension/termination grounds.',
);

requireText(
  terms,
  'Termination for cause remains subject to mandatory law and applicable platform rules. CK-Labs will not rely on this section to eliminate non-waivable consumer remedies.',
  'Canonical Terms lost mandatory-rights safeguard for termination.',
);

requireText(
  community,
  'Moderation decisions should target the relevant content or conduct and should not be used to confiscate unrelated legitimate paid digital value unless a separate lawful reason applies.',
  'Community Standards lost unrelated-paid-value protection.',
);

requireText(
  community,
  'Immediate temporary action may be taken before a full review where reasonably necessary to protect users, evidence, payments, game integrity, or infrastructure. CK-Labs may later reverse or modify a restriction if additional information changes the assessment.',
  'Community Standards lost reversible emergency moderation safeguard.',
);

requireText(
  purchases,
  'CK-Labs will not use these corrections to remove unrelated legitimately purchased value except where reasonably necessary to reverse a specific invalid transaction or as otherwise permitted by law.',
  'Purchases policy lost transaction-specific paid-value isolation.',
);

requireMatch(
  googleChargebacks,
  /account compromise/i,
  'Google collaborative chargeback gate no longer accounts for account compromise.',
);
requireMatch(
  googleChargebacks,
  /good-faith|good faith/i,
  'Google collaborative chargeback gate lost protection for good-faith disputes.',
);
requireText(
  appleBinding,
  'appAccountToken',
  'Apple account-binding gate lost appAccountToken handling.',
);
requireMatch(
  xsolla,
  /chargeback/i,
  'Xsolla gate no longer covers chargebacks.',
);
requireMatch(
  xsolla,
  /refund/i,
  'Xsolla gate no longer covers refunds.',
);
requireMatch(
  dsaRedress,
  /Article 20/i,
  'DSA redress gate no longer covers Article 20.',
);
requireMatch(
  dsaRedress,
  /Article 21/i,
  'DSA redress gate no longer covers Article 21.',
);
requireMatch(
  dsaMisuse,
  /Article 23/i,
  'DSA misuse gate no longer covers Article 23.',
);

for (const [label, text] of [
  ['account enforcement gate', gate],
  ['canonical Terms', terms],
  ['canonical Community Standards', community],
  ['canonical Purchases policy', purchases],
  ['Google chargeback gate', googleChargebacks],
  ['Apple account-binding gate', appleBinding],
  ['Xsolla refund gate', xsolla],
  ['DSA redress gate', dsaRedress],
  ['DSA misuse gate', dsaMisuse],
]) {
  if (/\bTyconX\b/.test(text)) failures.push(`Displayed legacy brand spelling found in ${label}.`);
}

if (/\bbeta\b/i.test(gate)) failures.push('Stale live-service beta wording found in account enforcement gate.');
if (/\bbeta\b/i.test(terms)) failures.push('Stale live-service beta wording found in canonical Terms.');
if (/\bbeta\b/i.test(community)) failures.push('Stale live-service beta wording found in canonical Community Standards.');
if (/\bbeta\b/i.test(purchases)) failures.push('Stale live-service beta wording found in canonical Purchases policy.');

requireText(
  progress,
  '100/100 localized full documents are currently confirmed current',
  'Localization progress no longer confirms all 100 localized full documents as current.',
);
requireText(
  progress,
  'Exact next unfinished locale/document: None',
  'Localization queue is no longer closed; localization must resume before incremental hardening.',
);
requireText(
  progress,
  'September 1, 2026',
  'Full-release date invariant is missing from localization progress.',
);

console.log('TycoonX account suspension, compromise and termination QA');

if (failures.length > 0) {
  console.error('\nFAILED:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('PASS: emergency containment, compromise recovery, German termination safeguards, DSA reason handling, platform moderation, entitlement isolation, reversible enforcement, localization, brand and release invariants are present.');
