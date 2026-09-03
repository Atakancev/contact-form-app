#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_GERMAN_BFSG_ACCESSIBILITY_RELEASE_GATE.md');
const termsPath = path.join(ROOT, 'tyconx-terms-of-service.md');
const purchasesPath = path.join(ROOT, 'tyconx-purchase-refund-policy.md');
const privacyPath = path.join(ROOT, 'tyconx-privacy-policy.md');
const communityPath = path.join(ROOT, 'tycoonx-community-standards.md');
const progressPath = path.join(ROOT, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

const [gate, terms, purchases, privacy, community, progress] = await Promise.all([
  readFile(gatePath, 'utf8'),
  readFile(termsPath, 'utf8'),
  readFile(purchasesPath, 'utf8'),
  readFile(privacyPath, 'utf8'),
  readFile(communityPath, 'utf8'),
  readFile(progressPath, 'utf8'),
]);

// Live-release and scope invariants.
requireMatch(gate, /went to full release on \*\*September 1, 2026\*\*/i, 'Missing live September 1, 2026 release-state invariant.');
if (/goes to full release/i.test(gate)) errors.push('Stale future-tense September 1 release wording remains in BFSG gate.');
requireMatch(gate, /June 28, 2025/i, 'Missing BFSG June 28, 2025 applicability checkpoint.');
requireMatch(gate, /BFSG § 2 no\. 26/i, 'Missing BFSG electronic-commerce definition checkpoint.');
requireMatch(gate, /websites or mobile applications/i, 'Missing website/mobile-app e-commerce scope.');
requireMatch(gate, /Do not assume that the whole TycoonX game is automatically an in-scope BFSG service/i, 'Missing safeguard against overbroad whole-game classification.');

// Microenterprise exemption must be classified, not guessed.
requireMatch(gate, /BFSG § 3\(3\)/i, 'Missing BFSG § 3(3) microenterprise service-provider exemption.');
requireMatch(gate, /fewer than 10 persons/i, 'Missing BFSG microenterprise employee threshold.');
requireMatch(gate, /EUR 2 million/i, 'Missing BFSG microenterprise financial threshold.');
requireMatch(gate, /dated internal classification/i, 'Missing dated microenterprise classification requirement.');
requireMatch(gate, /do not.*assume the exemption forever/is, 'Missing safeguard against permanent exemption assumption.');
requireMatch(gate, /service-specific, not a universal accessibility waiver/i, 'Missing service-specific exemption safeguard.');
requireMatch(gate, /independent accessibility duties/i, 'Missing independent-law accessibility separation.');
requireMatch(gate, /mandatory consumer information, withdrawal, conformity, update or remedy rights/i, 'Missing mandatory consumer-rights preservation.');

// Whole e-commerce service and high-risk functional areas.
requireMatch(gate, /whole website or app of an online shop/i, 'Missing whole online-shop website/app accessibility checkpoint.');
requireMatch(gate, /login, checkout, payment, cancellation or refund path/i, 'Missing critical commerce-journey accessibility scope.');
requireMatch(gate, /BFSGV § 19/i, 'Missing BFSGV § 19 e-commerce requirement.');
requireMatch(gate, /perceivable, operable, understandable and robust/i, 'Missing BFSGV § 19 functional requirements.');
requireMatch(gate, /programmatic label/i, 'Missing accessible form-label requirement.');
requireMatch(gate, /keyboard and assistive-technology users/i, 'Missing keyboard/assistive-technology requirement.');
requireMatch(gate, /CAPTCHA or anti-bot controls/i, 'Missing accessible anti-bot control checkpoint.');
requireMatch(gate, /Accessibility and security are both requirements/i, 'Missing accessibility/security balance safeguard.');

// Standards status must not be overstated.
requireMatch(gate, /EN 301 549/i, 'Missing EN 301 549 benchmark.');
requireMatch(gate, /Web Content Accessibility Guidelines \(WCAG\)/i, 'Missing WCAG benchmark.');
requireMatch(gate, /M\/587/i, 'Missing EAA standardisation-request checkpoint.');
requireMatch(gate, /do not claim that passing one automated WCAG scanner proves full BFSG compliance/i, 'Missing automated-scan limitation safeguard.');
requireMatch(gate, /do not claim a specific standard creates a presumption of conformity/i, 'Missing harmonisation-status safeguard.');
requireMatch(gate, /manual keyboard and screen-reader checks/i, 'Missing manual critical-journey accessibility QA.');

// Accessibility information and authority.
requireMatch(gate, /BFSG § 14 and Annex 3/i, 'Missing BFSG § 14 / Annex 3 accessibility-information gate.');
requireMatch(gate, /general description of the service/i, 'Missing Annex 3 general-service description.');
requireMatch(gate, /how the service meets the applicable BFSGV accessibility requirements/i, 'Missing Annex 3 conformity description.');
requireMatch(gate, /MLBF AöR/i, 'Missing current German market-surveillance authority.');
requireMatch(gate, /Information zur Barrierefreiheit/i, 'Missing private-service BFSG accessibility-information terminology.');
requireMatch(gate, /Erklärung zur Barrierefreiheit/i, 'Missing distinction from public-sector accessibility statement.');

// Third parties and platform boundaries.
requireMatch(gate, /Xsolla.*Merchant of Record/is, 'Missing Xsolla Merchant-of-Record non-waiver safeguard.');
requireMatch(gate, /third-party content.*blanket exclusion/is, 'Missing safeguard against overbroad BFSG third-party-content exclusion.');
requireMatch(gate, /provider migration.*mandatory accessibility re-test trigger/is, 'Missing provider-migration re-test trigger.');
requireMatch(gate, /Apple App Store and Google Play purchases/i, 'Missing Apple/Google purchase-path separation.');
requireMatch(gate, /platform-controlled steps from CK-Labs-controlled steps/i, 'Missing platform-vs-CK-Labs responsibility mapping.');
requireMatch(gate, /external Xsolla web checkout/i, 'Missing external-webshop accessibility separation.');

// Product and pricing invariants.
requireMatch(gate, /real-money price and currency/i, 'Missing accessible Diamond real-money price requirement.');
requireMatch(gate, /Diamond quantity/i, 'Missing accessible Diamond quantity requirement.');
requireMatch(gate, /one-time, non-renewing 30-day entitlement/i, 'Missing one-time 30-Day VIP product distinction.');
requireMatch(gate, /Lifetime VIP remains a \*\*limited-time promotional offering available only during selected genuine sales windows\*\*/i, 'Missing Lifetime VIP limited-window rule.');
requireMatch(gate, /may be withdrawn from future sale, may never return/i, 'Missing Lifetime VIP future-availability rule.');
requireMatch(gate, /prices may differ by platform, country and channel/i, 'Missing channel/country pricing distinction.');
requireMatch(gate, /final total shown before confirmation governs the completed transaction/i, 'Missing completed-transaction price invariant.');
requireMatch(gate, /later price decrease does not automatically create a refund, credit or price-match right/i, 'Missing later-price-decrease safeguard.');
requireMatch(gate, /later increase does not create an extra charge/i, 'Missing later-price-increase safeguard.');
requireMatch(gate, /secret higher-priced sales channel/i, 'Missing no-accessibility-surcharge safeguard.');

// Entitlement/payment isolation.
requireMatch(gate, /An accessibility complaint is not proof of fraud, hacking, chargeback, entitlement abuse, account compromise or payment reversal/i, 'Missing accessibility/payment-abuse separation.');
requireMatch(gate, /remove unrelated legitimately purchased Diamonds/i, 'Missing unrelated purchased-Diamond protection.');
requireMatch(gate, /negative Diamond balance/i, 'Missing negative-Diamond safeguard.');
requireMatch(gate, /restart, shorten or duplicate a valid 30-Day VIP period/i, 'Missing 30-Day VIP state protection.');
requireMatch(gate, /add an expiry to valid Lifetime VIP/i, 'Missing Lifetime VIP state protection.');
requireMatch(gate, /authoritative Apple, Google Play, Xsolla or server payment records/i, 'Missing authoritative-record safeguard.');
requireMatch(gate, /idempotency controls/i, 'Missing idempotent manual-accommodation safeguard.');

// Enforcement, burden and operational resilience.
requireMatch(gate, /authenticate an authority communication/i, 'Missing authority-message authentication.');
requireMatch(gate, /restrictions on offering\/providing the service/i, 'Missing BFSG enforcement consequence checkpoint.');
requireMatch(gate, /fundamental alteration and disproportionate burden are not casual escape clauses/i, 'Missing BFSG §§ 16-17 safeguard.');
requireMatch(gate, /ordinary engineering inconvenience/i, 'Missing disproportionate-burden anti-abuse safeguard.');
requireMatch(gate, /security-critical forced update/i, 'Missing forced-update accessibility checkpoint.');
requireMatch(gate, /preserve paid entitlement state through the upgrade/i, 'Missing old-client/upgrade entitlement safeguard.');
requireMatch(gate, /Data minimization and accessibility testing/i, 'Missing accessibility-testing privacy safeguard.');
requireMatch(gate, /Never offer a different Diamond\/VIP price because a user disclosed a disability/i, 'Missing disability-based pricing prohibition safeguard.');

// Evidence and localization.
requireMatch(gate, /Required evidence packet/i, 'Missing BFSG release evidence packet.');
requireMatch(gate, /screen-reader test results/i, 'Missing screen-reader evidence requirement.');
requireMatch(gate, /A single Lighthouse, axe or other automated score is not a complete release-evidence packet/i, 'Missing automated-score limitation.');
requireMatch(gate, /all 25 locales/i, 'Missing localization reopening invariant.');
requireMatch(gate, /tr, de, es, es_MX, fr, fr_CA, it, pt, pt_BR, ru, ja, ko, zh, zh_Hans, zh_Hant, ar, nl, sv, nb, pl, th, vi, uk, hi, id/i, 'Missing exact locale order.');
requireMatch(progress, /100\/100 localized full documents are currently confirmed current/i, 'Localization tracker no longer confirms 100/100 documents current.');
requireMatch(progress, /25\/25/i, 'Localization tracker no longer confirms 25/25 hubs.');
requireMatch(progress, /Exact next unfinished locale\/document: None/i, 'Localization tracker no longer reports a closed queue.');

// Canonical public legal documents must retain the required commercial and mandatory-rights meaning.
requireMatch(terms, /one-time, non-renewing digital entitlement/i, 'Canonical Terms lost one-time 30-Day VIP distinction.');
requireMatch(terms, /Lifetime VIP.*limited promotional sales windows/is, 'Canonical Terms lost limited-window Lifetime VIP rule.');
requireMatch(terms, /Mandatory consumer remedies remain unaffected/i, 'Canonical Terms lost mandatory-consumer-rights safeguard.');
requireMatch(purchases, /Diamonds/i, 'Canonical Purchases policy lost Diamonds coverage.');
requireMatch(purchases, /30-Day VIP/i, 'Canonical Purchases policy lost 30-Day VIP coverage.');
requireMatch(purchases, /Lifetime VIP/i, 'Canonical Purchases policy lost Lifetime VIP coverage.');
requireMatch(privacy, /data minimization|minimisation/i, 'Canonical Privacy Policy lost data-minimization context.');
requireMatch(community, /account|security|compromis/i, 'Canonical Community Standards lost account/security context.');

for (const [name, text] of [
  ['BFSG accessibility gate', gate],
  ['canonical Terms', terms],
  ['canonical Purchases policy', purchases],
  ['canonical Privacy Policy', privacy],
  ['canonical Community Standards', community],
]) {
  if (/TyconX/.test(text)) errors.push(`Displayed brand typo TyconX found in ${name}.`);
  if (/\bTycoonX\b[^\n]{0,80}\bbeta\b|\bbeta\b[^\n]{0,80}\bTycoonX\b/i.test(text)) {
    errors.push(`Stale TycoonX beta wording found in ${name}.`);
  }
}

console.log('TycoonX German BFSG accessibility QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: BFSG scope, microenterprise classification, accessible e-commerce/payment controls, provider boundaries, entitlement isolation and localization invariants are present.');
}
