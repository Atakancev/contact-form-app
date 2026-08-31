#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import process from 'node:process';

const gateFile = 'TYCOONX_EU_CYBER_RESILIENCE_ACT_2026_REPORTING_GATE.md';
const securityPageFile = 'app/tycoonx-security/page.tsx';
const gate = await readFile(gateFile, 'utf8');
const securityPage = await readFile(securityPageFile, 'utf8');
const errors = [];

function requireGateText(value, message) {
  if (!gate.includes(value)) errors.push(message);
}

function requireGatePattern(pattern, message) {
  if (!pattern.test(gate)) errors.push(message);
}

function requirePageText(value, message) {
  if (!securityPage.includes(value)) errors.push(message);
}

requireGateText('September 11, 2026', 'Missing CRA Article 14 application date.');
requireGateText('December 11, 2027', 'Missing distinction from the CRA general application date.');
requireGateText('July 27, 2026', 'Missing current Commission CRA implementation-guidance checkpoint.');
requireGateText('within 24 hours', 'Missing 24-hour early-warning deadline.');
requireGateText('within 72 hours', 'Missing 72-hour notification deadline.');
requireGateText('14 days after a corrective or mitigating measure becomes available', 'Missing actively exploited vulnerability final-report deadline.');
requireGateText('one month after the 72-hour incident notification', 'Missing severe-incident final-report deadline.');
requireGateText('Single Reporting Platform', 'Missing CRA Single Reporting Platform requirement.');
requireGateText('CSIRT designated as coordinator', 'Missing CSIRT coordinator routing requirement.');
requireGateText('ENISA', 'Missing ENISA reporting/platform reference.');
requireGatePattern(/actively exploited vulnerability/i, 'Missing actively exploited vulnerability trigger.');
requireGatePattern(/reliable evidence.*malicious actor.*exploited/i, 'Missing CRA active-exploitation threshold.');
requireGatePattern(/severe incident/i, 'Missing severe-incident trigger.');
requireGatePattern(/Article 14\(8\).*inform impacted users/is, 'Missing Article 14(8) impacted-user notification requirement.');
requireGatePattern(/not the same threshold as GDPR Article 34/i, 'Missing CRA-versus-GDPR user-notice distinction.');
requireGatePattern(/awareness timestamp/i, 'Missing incident-awareness timestamp preservation.');
requireGatePattern(/main establishment/i, 'Missing manufacturer main-establishment routing check.');
requireGatePattern(/multiple.*legal\/process clock|more than one legal\/process clock/i, 'Missing multi-regime incident-clock warning.');
requireGatePattern(/mere act.*notification.*does.*not itself.*increased liability/is, 'Missing CRA notification/no-increased-liability safeguard.');
requireGatePattern(/microenterprises and small enterprises.*not subject.*administrative fines.*24-hour early-warning/is, 'Missing narrow micro/small 24-hour fine exception.');
requireGatePattern(/does not erase:[\s\S]*72-hour[\s\S]*final-report[\s\S]*impacted-user/i, 'Missing warning that micro/small status does not erase remaining Article 14 duties.');
requireGatePattern(/not treat small size as a blanket CRA exemption/i, 'Missing warning against assuming a small-business reporting exemption.');
requireGatePattern(/GDPR data minimisation/i, 'Missing privacy minimisation safeguard for security evidence.');
requireGatePattern(/human-reachable vulnerability intake/i, 'Missing human-reachable vulnerability intake gate.');
requireGatePattern(/mobile applications and computer games/i, 'Missing current Commission default-category product example.');
requireGatePattern(/cessation-of-operations plan/i, 'Missing later CRA cessation-of-operations roadmap item.');
requireGatePattern(/TycoonX/g, 'TycoonX brand is missing from CRA gate.');

requirePageText('Security & Vulnerability Reporting', 'Public TycoonX security page is missing its security-reporting heading.');
requirePageText('cevikdev@gmail.com', 'Public TycoonX security page is missing a human-reachable email contact.');
requirePageText('TycoonX Security', 'Public TycoonX security page is missing the dedicated report subject.');
requirePageText('actively exploited', 'Public TycoonX security page no longer asks reporters to flag active exploitation.');
requirePageText('No automatic bounty', 'Public TycoonX security page is missing the no-automatic-bounty clarification.');
requirePageText('authoritative TycoonX, Apple, Google, Xsolla', 'Public TycoonX security page is missing entitlement/payment reconciliation safeguards.');

for (const [name, text] of [[gateFile, gate], [securityPageFile, securityPage]]) {
  if (/TyconX/.test(text)) errors.push(`Displayed TycoonX brand typo found in ${name}.`);
  if (/\bbeta\b/i.test(text)) errors.push(`Stale beta wording found in ${name}.`);
}

console.log('TycoonX CRA 2026 reporting gate QA');
console.log(`Gate: ${gateFile}`);
console.log(`Public security intake: ${securityPageFile}`);

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('\nPASS: CRA 2026 reporting gate and public security intake contain the required release-critical safeguards.');
}
