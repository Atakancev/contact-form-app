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

// Keep one consolidated BFSG source of truth. These names cover both the
// historical duplicate naming pattern and the tempting German-prefixed naming
// pattern so a future audit cannot accidentally recreate parallel legal gates.
const duplicatePaths = [
  path.join(ROOT, 'TYCOONX_ACCESSIBILITY_BFSG_RELEASE_GATE.md'),
  path.join(ROOT, 'scripts', 'verify-tycoonx-accessibility-bfsg.mjs'),
  path.join(ROOT, 'TYCOONX_GERMAN_BFSG_ACCESSIBILITY_RELEASE_GATE.md'),
  path.join(ROOT, 'scripts', 'verify-tycoonx-german-bfsg-accessibility.mjs'),
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
    // Expected: duplicate file does not exist.
  }
}

const [gate, checkout, terms, purchases, progress] = await Promise.all([
  readFile(gatePath, 'utf8'),
  readFile(checkoutPath, 'utf8'),
  readFile(termsPath, 'utf8'),
  readFile(purchasesPath, 'utf8'),
  readFile(progressPath, 'utf8'),
]);

// Scope and microenterprise exemption.
requireMatch(gate, /Last reviewed: September 2, 2026/i, 'Missing current BFSG review checkpoint.');
requireMatch(gate, /June 28, 2025/i, 'Missing BFSG June 28, 2025 applicability checkpoint.');
requireMatch(gate, /BFSG § 3\(3\)/i, 'Missing BFSG § 3(3) microenterprise service exemption.');
requireMatch(gate, /fewer than 10 persons/i, 'Missing microenterprise person-count threshold.');
requireMatch(gate, /annual turnover of \*\*no more than €2 million\*\*/i, 'Missing microenterprise turnover threshold.');
requireMatch(gate, /annual balance-sheet total of \*\*no more than €2 million\*\*/i, 'Missing microenterprise balance-sheet threshold.');
requireMatch(gate, /reassess at least when annual accounts become available/i, 'Missing microenterprise reassessment trigger.');
requireMatch(gate, /not a permanent product feature/i, 'Missing rule against hard-coded permanent BFSG exemption.');
requireMatch(gate, /not a universal BFSG exemption/i, 'Missing rule against extending the service exemption to separately covered products.');
requireMatch(gate, /do not publish a false claim of statutory BFSG compliance/i, 'Missing anti-misleading conformity claim rule.');

// BFSG § 14 and Annex 3 public information.
requireMatch(gate, /BFSG § 14/i, 'Missing BFSG § 14 service-provider gate.');
requireMatch(gate, /Annex 3/i, 'Missing BFSG Annex 3 public-information gate.');
requireMatch(gate, /general description of the relevant service/i, 'Missing Annex 3 service description.');
requireMatch(gate, /descriptions and explanations necessary to understand how the service is performed/i, 'Missing Annex 3 operation explanation.');
requireMatch(gate, /description of how the service meets the applicable accessibility requirements/i, 'Missing Annex 3 conformity explanation.');
requireMatch(gate, /competent market-surveillance authority/i, 'Missing Annex 3 market-surveillance authority requirement.');
requireMatch(gate, /Marktüberwachungsstelle der Länder für die Barrierefreiheit von Produkten und Dienstleistungen.*MLBF AöR/is, 'Missing current MLBF authority checkpoint.');
requireMatch(gate, /Carl-Miller-Straße 6, 39112 Magdeburg/i, 'Missing current MLBF address checkpoint.');
requireMatch(gate, /\+49 391 289 230 23/i, 'Missing current MLBF telephone checkpoint.');
requireMatch(gate, /kontakt@mlbf-barrierefrei\.de/i, 'Missing current MLBF email checkpoint.');
requireMatch(gate, /verify the current authority name and contact route/i, 'Missing authority freshness safeguard.');
requireMatch(gate, /as long as the service is offered or provided/i, 'Missing § 14 information-retention rule.');
requireMatch(gate, /Erklärung zur Barrierefreiheit/i, 'Missing public-sector statement terminology warning.');

// BFSGV § 12 and § 19 technical service rules.
requireMatch(gate, /BFSGV § 12/i, 'Missing BFSGV § 12 general service requirements.');
requireMatch(gate, /perceivable, operable, understandable, and robust/i, 'Missing POUR accessibility principles.');
requireMatch(gate, /more than one sensory channel/i, 'Missing multi-sensory information requirement.');
requireMatch(gate, /alternative representation for non-text content/i, 'Missing non-text alternative requirement.');
requireMatch(gate, /BFSGV § 19/i, 'Missing BFSGV § 19 electronic-commerce requirements.');
requireMatch(gate, /identification functions/i, 'Missing accessible identification-function rule.');
requireMatch(gate, /authentication functions/i, 'Missing accessible authentication-function rule.');
requireMatch(gate, /security functions/i, 'Missing accessible security-function rule.');
requireMatch(gate, /payment functions/i, 'Missing accessible payment-function rule.');
requireMatch(gate, /CAPTCHA, OTP, anti-bot challenge/i, 'Missing accessible security-challenge safeguard.');
requireMatch(gate, /whole website\/app of the online shop can be relevant/i, 'Missing whole-shop journey scope safeguard.');

// Legal consumer controls must remain accessible.
requireMatch(gate, /BGB § 356a electronic withdrawal function/i, 'Missing accessibility rule for German withdrawal function.');
requireMatch(gate, /future BGB § 312k termination button/i, 'Missing accessibility rule for future recurring termination button.');
requireMatch(gate, /screen-reader or keyboard-only user cannot operate/i, 'Missing rule against visually correct but inaccessible legal controls.');
requireMatch(checkout, /BGB § 356a/i, 'German checkout gate lost § 356a withdrawal-function protection.');
requireMatch(checkout, /`Vertrag widerrufen`/i, 'German checkout gate lost first withdrawal control label.');
requireMatch(checkout, /`Widerruf bestätigen`/i, 'German checkout gate lost final withdrawal control label.');

// Standards-change control.
requireMatch(gate, /EN 301 549 V3\.2\.1 \(2021-03\)/i, 'Missing current EN 301 549 reference checkpoint.');
requireMatch(gate, /WCAG 2\.1/i, 'Missing current EN/WCAG 2.1 reference.');
requireMatch(gate, /WCAG 2\.2 as forward-looking engineering guidance/i, 'Missing forward-looking WCAG 2.2 safeguard.');
requireMatch(gate, /do not falsely state that a future or draft standard is already the binding harmonised standard/i, 'Missing standards-status safeguard.');

// Apple, Google, Xsolla boundaries.
requireMatch(gate, /Apple App Store accessibility metadata is separate/i, 'Missing Apple accessibility metadata separation.');
requireMatch(gate, /Accessibility Nutrition Labels/i, 'Missing Apple Accessibility Nutrition Labels checkpoint.');
requireMatch(gate, /first launch, login, purchase, and settings/i, 'Missing Apple common-task accessibility scope.');
requireMatch(gate, /Google \/ Android accessibility engineering is separate/i, 'Missing Android accessibility separation.');
requireMatch(gate, /TalkBack/i, 'Missing Android TalkBack test requirement.');
requireMatch(gate, /Switch Access/i, 'Missing Android Switch Access checkpoint.');
requireMatch(gate, /Xsolla and third-party checkout responsibility/i, 'Missing Xsolla accessibility responsibility boundary.');
requireMatch(gate, /actual project and payment methods offered to German consumers/i, 'Missing live Xsolla configuration evidence rule.');

// Consolidated third-party-content and market-surveillance safeguards.
requireMatch(gate, /BFSG § 1\(4\)\(4\)/i, 'Missing narrow third-party-content exclusion.');
requireMatch(gate, /neither financed nor developed.*nor under its control/is, 'Missing third-party-content control test.');
requireMatch(gate, /not a blanket rule.*third-party SDK, iframe, browser sheet, hosted checkout/is, 'Missing warning against blanket provider-content exemption.');
requireMatch(gate, /BFSG § 28\(2\)/i, 'Missing BFSG service market-surveillance checkpoint.');
requireMatch(gate, /BFSG Annex 1/i, 'Missing Annex 1 end-to-end monitoring checkpoint.');
requireMatch(gate, /all procedural steps.*ordinary standard sequence/is, 'Missing Annex 1 full-procedure test rule.');
requireMatch(gate, /home page, login, sitemap, contact, help pages\/functions, pages with legal information/is, 'Missing Annex 1 sample categories.');
requireMatch(gate, /If a sampled page is one step in a procedure, the full procedure is tested/i, 'Missing Annex 1 full-procedure consequence.');
requireMatch(gate, /success, pending, validation, error, provider-failure, and recovery states/i, 'Missing transaction-state accessibility regression coverage.');

// Nonconformity, enforcement, and narrow exceptions.
requireMatch(gate, /Nonconformity, correction, authority notification, and enforcement/i, 'Missing BFSG nonconformity workflow.');
requireMatch(gate, /take necessary corrective measures to restore conformity/i, 'Missing BFSG corrective-action requirement.');
requireMatch(gate, /inform the competent German market-surveillance authority/i, 'Missing BFSG authority-notification rule.');
requireMatch(gate, /BFSG § 37.*€100,000/is, 'Missing BFSG maximum service fine checkpoint.');
requireMatch(gate, /BFSG §§ 32 and 33/i, 'Missing consumer/association administrative-rights checkpoint.');
requireMatch(gate, /Fundamental alteration and disproportionate burden are narrow, documented routes/i, 'Missing narrow statutory exception gate.');
requireMatch(gate, /Annex 4 criteria/i, 'Missing disproportionate-burden Annex 4 evidence requirement.');
requireMatch(gate, /retained for five years from the last provision of the service/i, 'Missing BFSG § 17 documentation-retention checkpoint.');

// TycoonX product and entitlement isolation.
requireMatch(gate, /Diamond bundle selection/i, 'Missing Diamond purchase-flow accessibility coverage.');
requireMatch(gate, /one-time 30-Day VIP selection/i, 'Missing 30-Day VIP accessibility coverage.');
requireMatch(gate, /Lifetime VIP selection while a genuine sales window exists/i, 'Missing Lifetime VIP accessibility coverage.');
requireMatch(gate, /must not duplicate purchased Diamonds/i, 'Missing purchased-Diamond isolation.');
requireMatch(gate, /30-Day VIP.*must not restart, pause, extend, shorten, or duplicate/is, 'Missing 30-Day VIP entitlement isolation.');
requireMatch(gate, /Lifetime VIP.*hidden expiry, downgrade, or duplicate/is, 'Missing Lifetime VIP entitlement isolation.');
requireMatch(gate, /accessibility complaint is not evidence of fraud/i, 'Missing accessibility complaint/fraud separation.');
requireMatch(gate, /must never replay entitlement fulfillment/i, 'Missing provider retry entitlement replay protection.');

// Canonical public product distinctions remain intact.
requireMatch(terms, /Purchased Diamonds do not expire solely because time passes/i, 'Canonical Terms lost purchased-Diamond persistence rule.');
requireMatch(terms, /One-time 30-Day VIP/i, 'Canonical Terms lost one-time 30-Day VIP section.');
requireMatch(terms, /Limited-time Lifetime VIP/i, 'Canonical Terms lost limited-time Lifetime VIP section.');
requireMatch(purchases, /official TycoonX web shop powered by Xsolla/i, 'Canonical Purchases policy lost Xsolla web-shop channel.');
requireMatch(purchases, /30-Day VIP is a \*\*one-time, non-renewing entitlement\*\*/i, 'Canonical Purchases policy lost one-time 30-Day VIP distinction.');
requireMatch(purchases, /Lifetime VIP is a one-time premium entitlement offered only during \*\*selected limited promotional sales windows\*\*/i, 'Canonical Purchases policy lost limited-window Lifetime VIP distinction.');
requireMatch(purchases, /final total price and currency displayed by the applicable checkout/i, 'Canonical Purchases policy lost final-checkout-price rule.');
requireMatch(purchases, /German electronic withdrawal function/i, 'Canonical Purchases policy lost German withdrawal-function baseline.');

// Localization and full-release invariants.
requireMatch(progress, /25\/25/i, 'Localization tracker no longer confirms 25/25 hubs.');
requireMatch(progress, /100\/100 localized full documents are currently confirmed current/i, 'Localization tracker no longer confirms 100/100 full documents.');
requireMatch(progress, /Exact next unfinished locale\/document: None/i, 'Localization tracker no longer has a closed locale/document queue.');
requireMatch(progress, /full release on \*\*September 1, 2026\*\*/i, 'Localization tracker lost September 1, 2026 full-release invariant.');

for (const [name, text] of [
  ['BFSG accessibility gate', gate],
  ['German checkout gate', checkout],
  ['canonical Terms', terms],
  ['canonical Purchases policy', purchases],
]) {
  if (/TyconX/.test(text)) errors.push(`Displayed brand typo TyconX found in ${name}.`);
  if (/\bTycoonX\s+beta\b/i.test(text)) errors.push(`Stale TycoonX beta wording found in ${name}.`);
}

if (/before full release/i.test(gate)) errors.push('Stale pre-release wording found in the live-service BFSG gate.');

for (const duplicatePath of duplicatePaths) {
  await requireMissing(
    duplicatePath,
    `Duplicate BFSG gate/verifier exists at ${path.relative(ROOT, duplicatePath)}; keep TYCOONX_BFSG_ECOMMERCE_ACCESSIBILITY_RELEASE_GATE.md and scripts/verify-tycoonx-bfsg-accessibility.mjs as the single source of truth.`,
  );
}

console.log('TycoonX German BFSG / European Accessibility Act QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: BFSG scope/exemption, Annex 3, Annex 1 end-to-end sampling, provider boundaries, enforcement, e-commerce accessibility, and TycoonX paid-entitlement safeguards are present.');
}
