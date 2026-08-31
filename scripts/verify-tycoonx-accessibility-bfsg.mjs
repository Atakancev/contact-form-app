#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import process from 'node:process';

const gateFile = 'TYCOONX_ACCESSIBILITY_BFSG_RELEASE_GATE.md';
const progressFile = 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md';

const gate = await readFile(gateFile, 'utf8');
const progress = await readFile(progressFile, 'utf8');
const errors = [];

function requireGateText(value, message) {
  if (!gate.includes(value)) errors.push(message);
}

function requireGatePattern(pattern, message) {
  if (!pattern.test(gate)) errors.push(message);
}

requireGateText('Last reviewed: August 31, 2026', 'Missing current BFSG review checkpoint.');
requireGateText('June 28, 2025', 'Missing BFSG application date.');
requireGateText('BFSG § 3(3)', 'Missing microenterprise service exemption.');
requireGateText('BFSG § 2 no. 17', 'Missing statutory microenterprise definition.');
requireGateText('fewer than 10 persons', 'Missing BFSG headcount threshold.');
requireGateText('EUR 2 million', 'Missing BFSG turnover/balance-sheet threshold.');
requireGateText('BFSGV § 19', 'Missing e-commerce accessibility requirements.');
requireGatePattern(/identification, authentication, security and payment functions.*perceivable, operable, understandable and robust/is, 'Missing BFSGV § 19 functional requirements.');
requireGateText('BFSG § 14(1)', 'Missing service-provider accessibility-information duty.');
requireGateText('BFSG Annex 3 no. 1', 'Missing Annex 3 service-information requirement.');
requireGateText('Information zur Barrierefreiheit', 'Missing private-sector BFSG information terminology.');
requireGateText('Erklärung zur Barrierefreiheit', 'Missing warning against confusing public-sector statement terminology.');
requireGateText('Marktüberwachungsstelle der Länder für die Barrierefreiheit von Produkten und Dienstleistungen', 'Missing current MLBF authority name.');
requireGateText('Carl-Miller-Straße 6, 39112 Magdeburg', 'Missing current MLBF authority checkpoint.');
requireGateText('BFSG § 37', 'Missing BFSG enforcement/fine checkpoint.');
requireGateText('EUR 100,000', 'Missing maximum fine for covered service non-conformity.');
requireGateText('BFSG §§ 16 and 17', 'Missing fundamental-alteration/disproportionate-burden framework.');
requireGatePattern(/not informal excuses to skip accessibility work/i, 'Missing narrow-exception warning.');
requireGateText('Apple Accessibility Nutrition Labels', 'Missing Apple accessibility metadata checkpoint.');
requireGatePattern(/initially optional.*intended to become required/is, 'Missing current Apple label status distinction.');
requireGatePattern(/common tasks.*evaluation criteria/is, 'Missing Apple common-task evaluation requirement.');
requireGateText('Diamonds', 'Missing Diamond entitlement isolation.');
requireGateText('30-Day VIP', 'Missing 30-Day VIP entitlement isolation.');
requireGateText('Lifetime VIP', 'Missing Lifetime VIP entitlement isolation.');
requireGatePattern(/accessibility complaint.*not be treated as chargeback fraud, entitlement abuse, exploit use or regional-price abuse/is, 'Missing accessibility-complaint abuse safeguard.');
requireGateText('September 1, 2026', 'Missing TycoonX full-release checkpoint.');
requireGateText('https://www.mlbf-barrierefrei.de/', 'Missing current MLBF source.');
requireGateText('https://developer.apple.com/help/app-store-connect/manage-app-accessibility/overview-of-accessibility-nutrition-labels', 'Missing current Apple accessibility source.');

if (!progress.includes('25/25')) errors.push('Localization progress no longer confirms 25/25 hubs.');
if (!progress.includes('100/100 localized full documents are currently confirmed current')) errors.push('Localization progress no longer confirms 100/100 current full documents.');
if (!progress.includes('Exact next unfinished locale/document: None')) errors.push('Localization progress reports unfinished localized work.');

for (const [name, text] of [[gateFile, gate], [progressFile, progress]]) {
  if (/TyconX/.test(text)) errors.push(`Displayed TycoonX brand typo found in ${name}.`);
}

if (/\bbeta\b/i.test(gate)) errors.push(`Stale release-status wording found in ${gateFile}.`);

console.log('TycoonX BFSG accessibility gate QA');
console.log(`Gate: ${gateFile}`);
console.log(`Localization tracker: ${progressFile}`);

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('\nPASS: BFSG applicability, service-information, MLBF, Apple accessibility metadata and entitlement-isolation safeguards are present.');
}
