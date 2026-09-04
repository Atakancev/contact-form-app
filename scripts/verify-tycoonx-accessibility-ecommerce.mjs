#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_GERMAN_EU_ACCESSIBILITY_ECOMMERCE_RELEASE_GATE.md');
const termsPath = path.join(ROOT, 'tyconx-terms-of-service.md');
const progressPath = path.join(ROOT, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');
const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

const gate = await readFile(gatePath, 'utf8');
const terms = await readFile(termsPath, 'utf8');
const progress = await readFile(progressPath, 'utf8');

// Current German/EU legal scope and effective date.
requireMatch(gate, /Barrierefreiheitsstärkungsgesetz \(BFSG\)/i, 'Missing BFSG source rule.');
requireMatch(gate, /Directive \(EU\) 2019\/882/i, 'Missing European Accessibility Act source.');
requireMatch(gate, /June 28, 2025/i, 'Missing BFSG application date.');
requireMatch(gate, /BFSG § 1\(3\)\(5\)[\s\S]*services in electronic commerce/i, 'Missing e-commerce service scope.');
requireMatch(gate, /BFSG § 2\(26\)[\s\S]*websites or mobile applications/i, 'Missing e-commerce definition.');
requireMatch(gate, /Do \*\*not\*\* assume that every gameplay screen is automatically an e-commerce service/i, 'Missing scope anti-overreach safeguard.');

// Microenterprise exemption must be factual and renewable.
requireMatch(gate, /BFSG § 3\(3\) exempts \*\*microenterprises that offer or provide services\*\*/i, 'Missing service microenterprise exemption.');
requireMatch(gate, /fewer than 10 persons/i, 'Missing microenterprise headcount threshold.');
requireMatch(gate, /not more than EUR 2 million/i, 'Missing microenterprise financial threshold.');
requireMatch(gate, /annual balance-sheet total of \*\*not more than EUR 2 million\*\*/i, 'Missing balance-sheet alternative threshold.');
requireMatch(gate, /must not be assumed merely because TycoonX is independently developed/i, 'Missing exemption anti-assumption rule.');
requireMatch(gate, /headcount increase[\s\S]*financial change[\s\S]*sale, merger, reorganization, or operator change/i, 'Missing exemption recheck triggers.');
requireMatch(gate, /do not make a false claim of statutory BFSG conformity or certified WCAG compliance/i, 'Missing false-conformity safeguard.');

// BFSG/BFSGV service duties.
requireMatch(gate, /BFSG § 14/i, 'Missing BFSG service-provider duty.');
requireMatch(gate, /Annex 3/i, 'Missing Annex 3 accessibility-information duty.');
requireMatch(gate, /perceivable, operable, understandable, and robust/i, 'Missing POUR accessibility standard.');
requireMatch(gate, /BFSGV § 12/i, 'Missing general service requirements.');
requireMatch(gate, /BFSGV § 19/i, 'Missing e-commerce-specific requirements.');
requireMatch(gate, /identification, authentication, security, and payment functions/i, 'Missing BFSGV § 19 critical functions.');
requireMatch(gate, /final total price and mandatory tax\/fee information/i, 'Missing accessible total-price requirement.');
requireMatch(gate, /final purchase\/confirmation control clearly communicates that the action creates a payment obligation/i, 'Missing accessible payment-obligation confirmation.');

// Product invariants.
requireMatch(gate, /Purchased Diamonds do not expire solely because time passes/i, 'Missing purchased-Diamond non-expiry invariant.');
requireMatch(gate, /one-time, non-renewing 30-day entitlement/i, 'Missing one-time 30-Day VIP invariant.');
requireMatch(gate, /one-time promotional entitlement offered only during selected genuine sales windows/i, 'Missing Lifetime VIP selected-window invariant.');
requireMatch(gate, /may be withdrawn from future sale and may never return/i, 'Missing Lifetime VIP future-availability limitation.');
requireMatch(gate, /Hidden accessible text must not contradict the visible offer/i, 'Missing accessible-text offer-parity rule.');

// Apple / Google Play / Xsolla role split.
requireMatch(gate, /Apple controls its own App Store \/ StoreKit purchase UI/i, 'Missing Apple-controlled checkout boundary.');
requireMatch(gate, /Google controls its own Play Billing UI/i, 'Missing Google-controlled checkout boundary.');
requireMatch(gate, /Xsolla hosts or controls a checkout component/i, 'Missing Xsolla checkout boundary.');
requireMatch(gate, /does \*\*not\*\* automatically remove CK-Labs responsibility/i, 'Missing CK-Labs retained responsibility for Xsolla path.');
requireMatch(gate, /provider outage or accessibility defect does not authorize CK-Labs to fabricate a successful transaction/i, 'Missing provider-outage entitlement safeguard.');

// Third-party exception, burden rules, and enforcement.
requireMatch(gate, /BFSG § 1\(4\)\(4\)/i, 'Missing third-party-content exception boundary.');
requireMatch(gate, /BFSG §§ 16 and 17/i, 'Missing fundamental-alteration/disproportionate-burden safeguards.');
requireMatch(gate, /at least every five years/i, 'Missing disproportionate-burden reassessment interval.');
requireMatch(gate, /Marktüberwachungsstelle der Länder für die Barrierefreiheit von Produkten und Dienstleistungen \(MLBF\)/i, 'Missing current German market-surveillance authority.');
requireMatch(gate, /BFSG § 28/i, 'Missing service market-surveillance rule.');
requireMatch(gate, /BFSG § 30/i, 'Missing formal non-conformity rule.');
requireMatch(gate, /up to \*\*EUR 100,000\*\*/i, 'Missing current maximum fine signal.');

// Accessibility cannot become pricing, fraud, or entitlement discrimination.
requireMatch(gate, /must \*\*not\*\* be used to:[\s\S]*increase a player's price/i, 'Missing accessibility-vs-pricing separation.');
requireMatch(gate, /flag the account as fraudulent/i, 'Missing accessibility-vs-fraud separation.');
requireMatch(gate, /remove Diamonds/i, 'Missing accessibility-vs-Diamonds separation.');
requireMatch(gate, /cancel 30-Day VIP/i, 'Missing accessibility-vs-30-Day VIP separation.');
requireMatch(gate, /expire Lifetime VIP/i, 'Missing accessibility-vs-Lifetime VIP separation.');
requireMatch(gate, /Do not create an unnecessary disability profile/i, 'Missing accessibility telemetry minimization rule.');

// Continuity and release evidence.
requireMatch(gate, /Old app versions, outages, and provider changes/i, 'Missing old-version/provider continuity section.');
requireMatch(gate, /Permanent TycoonX service discontinuation does not eliminate accrued mandatory consumer remedies/i, 'Missing shutdown-remedy survival rule.');
requireMatch(gate, /Business sale, merger, reorganization, or successor operator/i, 'Missing successor-operator accessibility continuity.');
requireMatch(gate, /Release evidence packet/i, 'Missing accessibility release evidence packet.');
requireMatch(gate, /P0 release blockers/i, 'Missing accessibility P0 blockers.');
requireMatch(gate, /Regression scenarios/i, 'Missing accessibility regression scenarios.');

// Canonical TycoonX commercial meaning remains aligned.
requireMatch(terms, /Purchased Diamonds do not expire solely because time passes/i, 'Canonical Terms lost purchased-Diamond non-expiry wording.');
requireMatch(terms, /one-time, non-renewing digital entitlement/i, 'Canonical Terms lost one-time 30-Day VIP wording.');
requireMatch(terms, /limited promotional sales windows/i, 'Canonical Terms lost Lifetime VIP sales-window wording.');
requireMatch(terms, /official TycoonX web shop using \*\*Xsolla\*\*/i, 'Canonical Terms lost Xsolla web-shop channel.');
requireMatch(terms, /accessibility/i, 'Canonical Terms lost accessibility as a valid feature-change reason.');

// Localization/release state must remain closed because this gate does not change canonical player-facing meaning.
requireMatch(progress, /25\/25[^\n]*target locales/i, 'Progress file no longer confirms all 25 localized hubs.');
requireMatch(progress, /100\/100 localized full documents are currently confirmed current/i, 'Progress file no longer confirms all 100 localized documents.');
requireMatch(progress, /Exact next unfinished locale\/document: None/i, 'Localization queue is not closed.');
requireMatch(progress, /TycoonX went to full release on \*\*September 1, 2026\*\*/i, 'Progress file lost TycoonX full-release date.');

for (const [name, text] of [
  ['accessibility e-commerce gate', gate],
  ['canonical Terms', terms],
  ['localization progress', progress],
]) {
  if (/TyconX/.test(text)) errors.push(`Displayed brand typo TyconX found in ${name}.`);
}

if (/\bTycoonX\s+(?:is|remains|service is)\s+(?:a\s+)?beta\b/i.test(gate)) {
  errors.push('Stale live-service beta wording found in accessibility e-commerce gate.');
}

console.log('TycoonX German/EU accessibility e-commerce QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: BFSG scope/exemption, Annex 3/BFSGV e-commerce accessibility, Apple/Google/Xsolla responsibility, pricing/entitlement isolation, and TycoonX release/localization invariants are present.');
}
