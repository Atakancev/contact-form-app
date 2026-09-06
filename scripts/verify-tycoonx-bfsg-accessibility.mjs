#!/usr/bin/env node

import { access, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_BFSG_ECOMMERCE_ACCESSIBILITY_RELEASE_GATE.md');
const checkoutPath = path.join(ROOT, 'TYCOONX_GERMAN_ECOMMERCE_CHECKOUT_RELEASE_GATE.md');
const termsPath = path.join(ROOT, 'tyconx-terms-of-service.md');
const purchasesPath = path.join(ROOT, 'tyconx-purchase-refund-policy.md');
const progressPath = path.join(ROOT, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

// Keep one operational BFSG doctrine source. Retired parallel gates/verifiers
// must stay absent so future edits cannot silently diverge.
const duplicatePaths = [
  path.join(ROOT, 'TYCOONX_ACCESSIBILITY_BFSG_RELEASE_GATE.md'),
  path.join(ROOT, 'scripts', 'verify-tycoonx-accessibility-bfsg.mjs'),
  path.join(ROOT, 'TYCOONX_GERMAN_BFSG_ACCESSIBILITY_RELEASE_GATE.md'),
  path.join(ROOT, 'TYCOONX_GERMAN_BFSG_ACCESSIBILITY_ECOMMERCE_RELEASE_GATE.md'),
  path.join(ROOT, 'scripts', 'verify-tycoonx-german-bfsg-accessibility.mjs'),
  path.join(ROOT, 'TYCOONX_GERMAN_EU_ACCESSIBILITY_ECOMMERCE_RELEASE_GATE.md'),
  path.join(ROOT, 'scripts', 'verify-tycoonx-accessibility-ecommerce.mjs'),
];

const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

async function requireMissing(filePath, message) {
  try {
    await access(filePath);
    errors.push(message);
  } catch {
    // Expected: retired duplicate path does not exist.
  }
}

const [gate, checkout, terms, purchases, progress] = await Promise.all([
  readFile(gatePath, 'utf8'),
  readFile(checkoutPath, 'utf8'),
  readFile(termsPath, 'utf8'),
  readFile(purchasesPath, 'utf8'),
  readFile(progressPath, 'utf8'),
]);

// Current review, scope and microenterprise evidence.
requireMatch(gate, /Last reviewed: September 6, 2026/i, 'Missing current BFSG review checkpoint.');
requireMatch(gate, /single TycoonX operational doctrine/i, 'Missing single-source BFSG doctrine rule.');
requireMatch(gate, /June 28, 2025/i, 'Missing BFSG applicability date.');
requireMatch(gate, /BFSG § 3\(3\)/i, 'Missing BFSG § 3(3) service exemption.');
requireMatch(gate, /fewer than 10 persons/i, 'Missing microenterprise person threshold.');
requireMatch(gate, /annual turnover of \*\*no more than €2 million\*\*/i, 'Missing microenterprise turnover threshold.');
requireMatch(gate, /annual balance-sheet total of \*\*no more than €2 million\*\*/i, 'Missing microenterprise balance-sheet threshold.');
requireMatch(gate, /financial limb is an \*\*OR\*\*, not an AND/i, 'Missing correct statutory turnover-or-balance-sheet test.');
requireMatch(gate, /person-count requirement still has to be satisfied/i, 'Missing person-count conjunction safeguard.');
requireMatch(gate, /not a permanent product feature/i, 'Missing rule against permanent hard-coded exemption.');
requireMatch(gate, /not a universal BFSG exemption/i, 'Missing service/product exemption separation.');

// § 14, Annex 3, formal nonconformity and authority information.
requireMatch(gate, /BFSG § 14/i, 'Missing BFSG § 14 service-provider gate.');
requireMatch(gate, /Annex 3/i, 'Missing BFSG Annex 3 information gate.');
requireMatch(gate, /as long as the service is offered or provided/i, 'Missing Annex 3 information-retention rule.');
requireMatch(gate, /terms and conditions or in another clearly perceptible manner/i, 'Missing Annex 3 publication-location rule.');
requireMatch(gate, /hidden, orphaned, non-indexed, inaccessible, or support-only document/i, 'Missing hidden-Annex-3 safeguard.');
requireMatch(gate, /general description of the relevant service/i, 'Missing Annex 3 service description.');
requireMatch(gate, /description of how the service meets the applicable accessibility requirements/i, 'Missing Annex 3 conformity explanation.');
requireMatch(gate, /competent market-surveillance authority/i, 'Missing Annex 3 authority requirement.');
requireMatch(gate, /BFSG § 30.*formal nonconformity/is, 'Missing BFSG § 30 formal-nonconformity rule.');
requireMatch(gate, /MLBF AöR/i, 'Missing current MLBF checkpoint.');
requireMatch(gate, /Carl-Miller-Straße 6, 39112 Magdeburg/i, 'Missing current MLBF address checkpoint.');
requireMatch(gate, /verify the current authority name and contact route/i, 'Missing authority freshness safeguard.');
requireMatch(gate, /Erklärung zur Barrierefreiheit/i, 'Missing public-sector statement terminology warning.');

// BFSGV service/e-commerce accessibility and end-to-end behavior.
requireMatch(gate, /BFSGV § 12/i, 'Missing BFSGV § 12 requirements.');
requireMatch(gate, /perceivable, operable, understandable, and robust/i, 'Missing POUR accessibility principles.');
requireMatch(gate, /zoom, larger-text and orientation behavior/i, 'Missing zoom/larger-text/orientation safeguard.');
requireMatch(gate, /session expiry, security timeout, or countdown behavior/i, 'Missing timeout accessibility safeguard.');
requireMatch(gate, /BFSGV § 19/i, 'Missing BFSGV § 19 e-commerce requirements.');
requireMatch(gate, /identification, authentication, security, and payment functions/i, 'Missing § 19 identification/authentication/security/payment coverage.');
requireMatch(gate, /information on the accessibility of products for sale and services offered/i, 'Missing § 19 accessibility-information duty.');
requireMatch(gate, /insofar as that information is supplied by the responsible economic operator/i, 'Missing § 19 responsible-economic-operator limitation.');
requireMatch(gate, /do not invent an accessibility characteristic, certification, or provider statement/i, 'Missing unsupported accessibility-claim safeguard.');
requireMatch(gate, /CAPTCHA, OTP, anti-bot challenge, SCA\/3DS flow/i, 'Missing accessible security-challenge coverage.');
requireMatch(gate, /whole relevant shop journey matters/i, 'Missing end-to-end shop journey rule.');
requireMatch(gate, /BFSG Annex 1/i, 'Missing Annex 1 market-surveillance test model.');
requireMatch(gate, /full procedure must be tested/i, 'Missing complete-procedure test rule.');

// Mandatory consumer controls.
requireMatch(gate, /BGB § 356a electronic withdrawal function/i, 'Missing § 356a withdrawal accessibility rule.');
requireMatch(gate, /future BGB § 312k termination button/i, 'Missing future recurring termination-button accessibility rule.');
requireMatch(gate, /screen-reader or keyboard-only user cannot operate/i, 'Missing inaccessible-legal-control safeguard.');
requireMatch(checkout, /BGB § 356a/i, 'German checkout gate lost § 356a protection.');
requireMatch(checkout, /`Vertrag widerrufen`/i, 'German checkout gate lost first withdrawal control label.');
requireMatch(checkout, /`Widerruf bestätigen`/i, 'German checkout gate lost confirmation withdrawal control label.');

// Provider boundaries and standards/change control.
requireMatch(gate, /Apple App Store/i, 'Missing Apple responsibility boundary.');
requireMatch(gate, /Accessibility Nutrition Labels/i, 'Missing Apple accessibility metadata separation.');
requireMatch(gate, /Google Play/i, 'Missing Google Play responsibility boundary.');
requireMatch(gate, /TalkBack/i, 'Missing Android TalkBack checkpoint.');
requireMatch(gate, /Xsolla web shop/i, 'Missing Xsolla responsibility boundary.');
requireMatch(gate, /live TycoonX configuration/i, 'Missing live provider-configuration evidence rule.');
requireMatch(gate, /BFSG § 1\(4\)\(4\)/i, 'Missing narrow third-party-content exception.');
requireMatch(gate, /neither financed nor developed by CK-Labs nor under CK-Labs control/i, 'Missing third-party factual control test.');
requireMatch(gate, /EN 301 549 V3\.2\.1 \(2021-03\)/i, 'Missing EN 301 549 engineering checkpoint.');
requireMatch(gate, /WCAG 2\.2 as forward-looking engineering guidance/i, 'Missing forward-looking WCAG 2.2 safeguard.');
requireMatch(gate, /BFSG § 14.*service-provider duty/is, 'Missing BFSG § 14 service-provider numbering distinction.');
requireMatch(gate, /BFSGV § 14.*telecommunications services/is, 'Missing BFSGV § 14 telecommunications numbering distinction.');
requireMatch(gate, /July 10, 2026 and effective July 16, 2026/i, 'Missing exact BFSGV 2026 amendment/effective-date checkpoint.');
requireMatch(gate, /amended BFSGV § 7.*replaced BFSGV § 14/is, 'Missing scope of July 2026 BFSGV amendment.');
requireMatch(gate, /did \*\*not\*\* replace BFSGV § 19/i, 'Missing safeguard that 2026 amendment did not replace e-commerce § 19.');

// §§ 16-17 narrow exceptions, including cadence/funding rules.
requireMatch(gate, /Fundamental alteration and disproportionate burden are narrow routes/i, 'Missing narrow exception heading.');
requireMatch(gate, /Annex 4 criteria/i, 'Missing Annex 4 assessment requirement.');
requireMatch(gate, /retain it for \*\*five years from the last provision of the service\*\*/i, 'Missing § 17 documentation-retention rule.');
requireMatch(gate, /§ 17\(3\).*\*\*at least every five years\*\*/is, 'Missing § 17(3) five-year reassessment cadence.');
requireMatch(gate, /whenever the service changes or the competent authority requests a new assessment/i, 'Missing § 17(3) change/authority reassessment triggers.');
requireMatch(gate, /§ 17\(4\).*public or private funding/is, 'Missing § 17(4) accessibility-funding restriction.');
requireMatch(gate, /authority information\/notification requirement.*§ 17\(5\)/is, 'Missing § 17(5) authority rule.');

// Accessibility state must not become discriminatory commerce or enforcement logic.
requireMatch(gate, /Accessibility state must not become pricing, fraud, or entitlement logic/i, 'Missing accessibility-state separation doctrine.');
requireMatch(gate, /deny an otherwise valid genuine promotion/i, 'Missing promotion nondiscrimination rule.');
requireMatch(gate, /assign a worse regional price/i, 'Missing regional-price nondiscrimination rule.');
requireMatch(gate, /change fraud scoring merely because assistive technology is used/i, 'Missing assistive-tech/fraud separation.');
requireMatch(gate, /unnecessary disability profile/i, 'Missing accessibility telemetry minimization rule.');
requireMatch(gate, /Accessibility complaint or request is not evidence of fraud/i, 'Missing complaint/enforcement separation.');

// Product and entitlement invariants.
requireMatch(gate, /Purchased Diamonds.*do not expire solely because time passes/is, 'Missing purchased-Diamond persistence rule.');
requireMatch(gate, /30-Day VIP remains a \*\*one-time, non-renewing 30-day entitlement\*\*/i, 'Missing one-time 30-Day VIP invariant.');
requireMatch(gate, /Lifetime VIP remains a \*\*one-time promotional entitlement offered only during selected genuine sales windows\*\*/i, 'Missing limited-window Lifetime VIP invariant.');
requireMatch(gate, /hidden accessibility strings/i, 'Missing accessible-copy product-parity rule.');
requireMatch(gate, /Accessibility retries must be idempotent/i, 'Missing accessibility retry idempotency rule.');
requireMatch(gate, /Permanent TycoonX service discontinuation does not eliminate accrued mandatory consumer remedies/i, 'Missing shutdown survival rule.');
requireMatch(gate, /sale, merger, reorganization, or successor operator/i, 'Missing successor-operator BFSG reassessment.');

// Canonical public product distinctions stay unchanged.
requireMatch(terms, /Purchased Diamonds do not expire solely because time passes/i, 'Canonical Terms lost Diamond persistence.');
requireMatch(terms, /One-time 30-Day VIP/i, 'Canonical Terms lost 30-Day VIP section.');
requireMatch(terms, /Limited-time Lifetime VIP/i, 'Canonical Terms lost Lifetime VIP section.');
requireMatch(purchases, /official TycoonX web shop powered by Xsolla/i, 'Canonical Purchases lost Xsolla channel.');
requireMatch(purchases, /30-Day VIP is a \*\*one-time, non-renewing entitlement\*\*/i, 'Canonical Purchases lost 30-Day VIP distinction.');
requireMatch(purchases, /Lifetime VIP is a one-time premium entitlement offered only during \*\*selected limited promotional sales windows\*\*/i, 'Canonical Purchases lost Lifetime VIP sales-window distinction.');

// Localization and full-release invariants.
requireMatch(progress, /25\/25/i, 'Localization tracker no longer confirms 25/25 hubs.');
requireMatch(progress, /All 25 target locales and all 100 localized full documents are current/i, 'Localization tracker no longer confirms 100/100 documents.');
requireMatch(progress, /Exact next unfinished locale\/document: None/i, 'Localization queue is no longer closed.');
requireMatch(progress, /full release on \*\*September 1, 2026\*\*/i, 'Localization tracker lost full-release invariant.');

for (const [name, text] of [
  ['BFSG accessibility gate', gate],
  ['German checkout gate', checkout],
  ['canonical Terms', terms],
  ['canonical Purchases policy', purchases],
]) {
  if (/TyconX/.test(text)) errors.push(`Displayed brand typo found in ${name}.`);
  if (/\bTycoonX\s+beta\b/i.test(text)) errors.push(`Stale live-service beta wording found in ${name}.`);
}

for (const duplicatePath of duplicatePaths) {
  await requireMissing(
    duplicatePath,
    `Retired BFSG gate/verifier exists at ${path.relative(ROOT, duplicatePath)}; keep one consolidated TycoonX accessibility doctrine.`,
  );
}

console.log('TycoonX German BFSG / European Accessibility Act QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: BFSG scope/exemption, Annex 3/§ 30 formal compliance, § 19 e-commerce information/functions, 2026 numbering/change control, provider boundaries, end-to-end accessibility, nondiscrimination, and paid-entitlement safeguards are present.');
}
