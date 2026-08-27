#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import process from 'node:process';

const file = 'TYCOONX_EU_CYBER_RESILIENCE_ACT_2026_REPORTING_GATE.md';
const text = await readFile(file, 'utf8');
const errors = [];

function requireText(value, message) {
  if (!text.includes(value)) errors.push(message);
}

function requirePattern(pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

requireText('September 11, 2026', 'Missing CRA Article 14 application date.');
requireText('December 11, 2027', 'Missing distinction from the CRA general application date.');
requireText('within 24 hours', 'Missing 24-hour early-warning deadline.');
requireText('within 72 hours', 'Missing 72-hour notification deadline.');
requireText('14 days after a corrective or mitigating measure becomes available', 'Missing actively exploited vulnerability final-report deadline.');
requireText('one month after the 72-hour incident notification', 'Missing severe-incident final-report deadline.');
requireText('Single Reporting Platform', 'Missing CRA Single Reporting Platform requirement.');
requireText('CSIRT designated as coordinator', 'Missing CSIRT coordinator routing requirement.');
requirePattern(/actively exploited vulnerability/i, 'Missing actively exploited vulnerability trigger.');
requirePattern(/reliable evidence.*malicious actor.*exploited/i, 'Missing CRA active-exploitation threshold.');
requirePattern(/severe incident/i, 'Missing severe-incident trigger.');
requirePattern(/inform impacted users/i, 'Missing Article 14 impacted-user notification requirement.');
requirePattern(/awareness timestamp/i, 'Missing incident-awareness timestamp preservation.');
requirePattern(/main establishment/i, 'Missing manufacturer main-establishment routing check.');
requirePattern(/microenterprise/i, 'Missing microenterprise treatment warning.');
requirePattern(/not treat small size as a blanket CRA exemption/i, 'Missing warning against assuming a small-business reporting exemption.');
requirePattern(/GDPR data minimisation/i, 'Missing privacy minimisation safeguard for security evidence.');
requirePattern(/human-reachable vulnerability intake/i, 'Missing human-reachable vulnerability intake gate.');
requirePattern(/TycoonX/g, 'TycoonX brand is missing.');

if (/TyconX/.test(text)) errors.push('Displayed TycoonX brand typo found.');
if (/\bbeta\b/i.test(text)) errors.push('Stale beta wording found.');

console.log('TycoonX CRA 2026 reporting gate QA');
console.log(`Gate: ${file}`);

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('\nPASS: CRA 2026 reporting gate contains the required release-critical safeguards.');
}
