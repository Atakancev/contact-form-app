#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_GERMAN_YOUTH_PROTECTION_RELEASE_GATE.md');
const appleAgeGatePath = path.join(ROOT, 'TYCOONX_APPLE_SOCIAL_MEDIA_AGE_RELEASE_GATE.md');
const communityGatePath = path.join(ROOT, 'TYCOONX_COMMUNITY_MODERATION_RELEASE_CHECKLIST.md');
const minorPurchaseGatePath = path.join(ROOT, 'TYCOONX_GERMAN_MINOR_PURCHASE_RELEASE_GATE.md');
const termsPath = path.join(ROOT, 'tyconx-terms-of-service.md');
const purchasesPath = path.join(ROOT, 'tyconx-purchase-refund-policy.md');
const communityPath = path.join(ROOT, 'tycoonx-community-standards.md');
const progressPath = path.join(ROOT, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

const [
  gate,
  appleAgeGate,
  communityGate,
  minorPurchaseGate,
  terms,
  purchases,
  community,
  progress,
] = await Promise.all([
  readFile(gatePath, 'utf8'),
  readFile(appleAgeGatePath, 'utf8'),
  readFile(communityGatePath, 'utf8'),
  readFile(minorPurchaseGatePath, 'utf8'),
  readFile(termsPath, 'utf8'),
  readFile(purchasesPath, 'utf8'),
  readFile(communityPath, 'utf8'),
  readFile(progressPath, 'utf8'),
]);

requireMatch(gate, /September 1, 2026/i, 'Missing September 1, 2026 full-release invariant.');
requireMatch(gate, /JMStV.*December 1, 2025/is, 'Missing current JMStV December 1, 2025 checkpoint.');
requireMatch(gate, /communication\/contact functions/i, 'Missing JMStV communication/contact usage-risk classification.');
requireMatch(gate, /purchase functions/i, 'Missing JMStV purchase-function usage-risk classification.');
requireMatch(gate, /gambling-like mechanisms/i, 'Missing JMStV gambling-like-mechanism usage-risk classification.');
requireMatch(gate, /excessive media use/i, 'Missing JMStV excessive-use risk classification.');
requireMatch(gate, /§ 5c/i, 'Missing JMStV § 5c age-rating/notice gate.');
requireMatch(gate, /§ 6/i, 'Missing JMStV § 6 youth-advertising gate.');
requireMatch(gate, /§ 7/i, 'Missing JMStV § 7 youth-protection-officer gate.');
requireMatch(gate, /22:00-06:00/i, 'Missing current under-16 time-window checkpoint.');
requireMatch(gate, /23:00-06:00/i, 'Missing current minors time-window checkpoint.');
requireMatch(gate, /IARC ratings.*corresponding IARC environment/is, 'Missing IARC distribution-scope distinction.');
requireMatch(gate, /Direct browser-play, direct download or another non-IARC distribution route/i, 'Missing non-IARC distribution reclassification trigger.');
requireMatch(gate, /Beginning in \*\*September 2026\*\*/i, 'Missing Apple September 2026 social-media answer checkpoint.');
requireMatch(gate, /Declared Age Range API/i, 'Missing Apple Declared Age Range safeguard.');
requireMatch(gate, /Google Play currently requires every app to have a content rating/i, 'Missing Google Play content-rating requirement.');
requireMatch(gate, /acceptance of the applicable Terms\/User Policy before users create or upload UGC/i, 'Missing Google UGC Terms-acceptance gate.');
requireMatch(gate, /in-app reporting/i, 'Missing UGC in-app reporting safeguard.');
requireMatch(gate, /user blocking/i, 'Missing UGC user-blocking safeguard.');
requireMatch(gate, /Ask your parents now so you do not miss this deal/i, 'Missing concrete anti-pressure child-purchase example.');
requireMatch(gate, /Lifetime VIP.*limited-time promotional offering/is, 'Missing Lifetime VIP limited-window promotion safeguard.');
requireMatch(gate, /core safety\/report\/block tools conditional on buying Diamonds or VIP/i, 'Missing no-paywall-for-safety safeguard.');
requireMatch(gate, /fewer than 50 employees/i, 'Missing § 7(2) smaller-provider employee threshold checkpoint.');
requireMatch(gate, /10 million average monthly accesses/i, 'Missing § 7(2) smaller-provider access threshold checkpoint.');
requireMatch(gate, /Small size by itself is therefore not a blanket exemption/i, 'Missing safeguard against false small-provider § 7 exemption.');
requireMatch(gate, /No paid membership or external service should be purchased/i, 'Missing no-unapproved-paid-service safeguard.');
requireMatch(gate, /all 25 locales/i, 'Missing localization reopening trigger.');
requireMatch(gate, /tr, de, es, es_MX, fr, fr_CA, it, pt, pt_BR, ru, ja, ko, zh, zh_Hans, zh_Hant, ar, nl, sv, nb, pl, th, vi, uk, hi, id/i, 'Missing exact localization-order invariant.');
requireMatch(gate, /unrelated legitimate purchased Diamonds/i, 'Missing unrelated purchased-Diamond protection.');
requireMatch(gate, /one-time 30-Day VIP/i, 'Missing one-time 30-Day VIP protection.');
requireMatch(gate, /valid Lifetime VIP/i, 'Missing Lifetime VIP protection.');

requireMatch(appleAgeGate, /Starting in \*\*September 2026\*\*/i, 'Apple social-age gate lost September 2026 submission requirement.');
requireMatch(appleAgeGate, /Declared Age Range API/i, 'Apple social-age gate lost Declared Age Range rule.');
requireMatch(communityGate, /Google Play currently requires robust, effective, and ongoing UGC moderation/i, 'Community moderation gate lost Google UGC moderation invariant.');
requireMatch(communityGate, /blocking for abusive users/i, 'Community moderation gate lost Apple blocking requirement.');
requireMatch(minorPurchaseGate, /BGB § 110/i, 'German minor-purchase gate is missing BGB § 110 safeguard.');

requireMatch(terms, /Where age, parental authorization, or other eligibility requirements apply under local law or platform rules/i, 'Canonical Terms lost age/parental eligibility safeguard.');
requireMatch(terms, /one-time, non-renewing digital entitlement/i, 'Canonical Terms lost one-time 30-Day VIP distinction.');
requireMatch(terms, /Lifetime VIP.*limited promotional sales windows/is, 'Canonical Terms lost limited-window Lifetime VIP rule.');
requireMatch(terms, /Mandatory consumer remedies remain unaffected/i, 'Canonical Terms lost mandatory-rights safeguard.');
requireMatch(purchases, /Diamonds/i, 'Canonical Purchases policy lost Diamonds coverage.');
requireMatch(purchases, /30-Day VIP/i, 'Canonical Purchases policy lost 30-Day VIP coverage.');
requireMatch(purchases, /Lifetime VIP/i, 'Canonical Purchases policy lost Lifetime VIP coverage.');
requireMatch(community, /child|minor|young/i, 'Canonical Community Standards lost child/minor safety context.');
requireMatch(progress, /100\/100/i, 'Localization progress no longer reports 100/100 full localized documents.');
requireMatch(progress, /25\/25/i, 'Localization progress no longer reports 25/25 localized hubs.');

for (const [name, text] of [
  ['German youth-protection gate', gate],
  ['canonical Terms', terms],
  ['canonical Purchases policy', purchases],
  ['canonical Community Standards', community],
]) {
  if (/TyconX/.test(text)) errors.push(`Displayed brand typo TyconX found in ${name}.`);
  if (/\bbeta\b/i.test(text)) errors.push(`Stale beta wording found in ${name}.`);
}

console.log('TycoonX German youth-protection QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: German JMStV usage-risk, age-rating, UGC, youth-advertising and § 7 classification safeguards are present.');
}
