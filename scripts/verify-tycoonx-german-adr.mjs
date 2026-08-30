#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_GERMAN_ADR_ODR_RELEASE_GATE.md');
const termsPath = path.join(ROOT, 'tyconx-terms-of-service.md');
const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

const gate = await readFile(gatePath, 'utf8');
const terms = await readFile(termsPath, 'utf8');

// ODR shutdown safeguards.
requireMatch(gate, /March 20, 2025/i, 'Missing ODR complaint-submission cutoff.');
requireMatch(gate, /July 20, 2025/i, 'Missing ODR repeal/deletion date.');
requireMatch(gate, /Regulation \(EU\) 2024\/3228/i, 'Missing ODR repeal regulation.');
requireMatch(gate, /must not direct users to the old EU ODR platform as an active complaint mechanism/i, 'Missing stale ODR-link prohibition.');
requireMatch(gate, /ec\.europa\.eu\/consumers\/odr/i, 'Missing stale ODR URL regression marker.');

// VSBG § 36 general information rules.
requireMatch(gate, /VSBG § 36 general website \/ Terms information/i, 'Missing VSBG § 36 gate.');
requireMatch(gate, /ten or fewer persons on December 31 of the previous year/i, 'Missing § 36(3) employee-count threshold.');
requireMatch(gate, /not.*blanket exemption from all VSBG duties/is, 'Missing small-business non-blanket-exemption safeguard.');
requireMatch(gate, /website.*terms and conditions/is, 'Missing § 36 website/Terms placement requirement.');
requireMatch(gate, /Do \*\*not\*\* state that CK-Labs is generally willing to participate/i, 'Missing voluntary-ADR overcommitment safeguard.');

// VSBG § 37 post-dispute rules.
requireMatch(gate, /VSBG § 37 after an unresolved consumer-contract dispute/i, 'Missing VSBG § 37 gate.');
requireMatch(gate, /in text form/i, 'Missing § 37 text-form requirement.');
requireMatch(gate, /consumer conciliation body competent for the dispute/i, 'Missing § 37 competent-body reference.');
requireMatch(gate, /whether CK-Labs is willing or obliged to participate/i, 'Missing § 37 participation-status statement.');
requireMatch(gate, /ten or fewer employees/i, 'Missing employee-count independence safeguard for § 37.');
requireMatch(gate, /Do not send the § 37 notice merely because a user opened a normal support ticket/i, 'Missing false-trigger prevention for § 37 notices.');

// Competent-body and current-contact safeguards.
requireMatch(gate, /Universalschlichtungsstelle des Bundes/i, 'Missing residual German conciliation body.');
requireMatch(gate, /Straßburger Straße 8/i, 'Missing current residual-body address.');
requireMatch(gate, /77694 Kehl/i, 'Missing current residual-body postal location.');
requireMatch(gate, /sector-specific conciliation body/i, 'Missing sector-specific competence safeguard.');

// Future ADR transition horizon.
requireMatch(gate, /Directive \(EU\) \*\*2025\/2647\*\*/i, 'Missing 2028 ADR transition directive.');
requireMatch(gate, /March 20, 2028/i, 'Missing ADR transposition deadline.');
requireMatch(gate, /September 20, 2028/i, 'Missing ADR application-date checkpoint.');
requireMatch(gate, /do not present future Directive 2025\/2647 duties as if they were already the current German VSBG rule/i, 'Missing future-law/current-law distinction.');

// Canonical Terms should keep a conditional ADR position rather than accidentally promising universal participation.
requireMatch(terms, /## 34\. Consumer dispute resolution/i, 'Canonical Terms lost consumer dispute-resolution section.');
requireMatch(terms, /whether CK-Labs is willing or legally obliged to participate/i, 'Canonical Terms lost conditional VSBG participation wording.');
requireMatch(terms, /Nothing in these Terms creates a voluntary general commitment to participate/i, 'Canonical Terms accidentally lost no-voluntary-blanket-commitment safeguard.');

for (const [name, text] of [['German ADR gate', gate], ['canonical Terms', terms]]) {
  if (/TyconX/.test(text)) errors.push(`Displayed brand typo TyconX found in ${name}.`);
  if (/\bbeta\b/i.test(text)) errors.push(`Stale beta wording found in ${name}.`);
}

console.log('TycoonX German consumer ADR / ODR sunset QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: ODR sunset, VSBG §§ 36/37, competent-body, and 2028 ADR transition safeguards are present.');
}
