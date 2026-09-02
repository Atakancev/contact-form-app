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

requireGateText('Last reviewed: 2026-09-03', 'CRA gate review date is stale.');
requireGatePattern(/TycoonX went to full release on \*\*September 1, 2026\*\*/i, 'Missing post-release TycoonX status.');
requireGateText('September 11, 2026', 'Missing CRA Article 14 application date.');
requireGateText('December 11, 2027', 'Missing distinction from the CRA general application date.');
requireGateText('July 27, 2026', 'Missing current Commission CRA implementation-guidance checkpoint.');
requireGateText('August 31, 2026', 'Missing latest ENISA SRP FAQ checkpoint.');
requireGatePattern(/dedicated public SRP URL.*published before go-live/is, 'Missing current SRP public-URL status checkpoint.');
requireGatePattern(/must not claim that the SRP is already live/i, 'Missing safeguard against prematurely claiming SRP go-live.');

requireGatePattern(/within 24 hours/i, 'Missing 24-hour early-warning deadline.');
requireGatePattern(/within 72 hours/i, 'Missing 72-hour notification deadline.');
requireGateText('14 days after a corrective or mitigating measure becomes available', 'Missing actively exploited vulnerability final-report deadline.');
requireGatePattern(/one month after the submission of the 72-hour incident notification/i, 'Missing severe-incident final-report deadline.');
requireGateText('Single Reporting Platform', 'Missing CRA Single Reporting Platform requirement.');
requireGateText('CSIRT designated as coordinator', 'Missing CSIRT coordinator routing requirement.');
requireGateText('ENISA', 'Missing ENISA reporting/platform reference.');
requireGateText('EU Login', 'Missing current SRP EU Login access requirement.');
requireGatePattern(/personal EU Login.*two-factor authentication/is, 'Missing personal-EU-Login and 2FA requirement.');
requireGatePattern(/one Primary AR.*20 Secondary ARs/is, 'Missing current Primary/Secondary Assigned Representative model.');
requireGatePattern(/non-validated AR can submit up to 20 notifications/i, 'Missing current pending-validation submission safeguard.');
requireGatePattern(/validation.*CSIRT designated as coordinator.*after first access.*parallel with reporting/is, 'Missing current SRP representative-validation workflow.');
requireGatePattern(/no reporting API will be provided at this stage/i, 'Missing current no-SRP-API implementation constraint.');
requireGatePattern(/one SRP submission.*CSIRT designated as coordinator.*ENISA/is, 'Missing single-submission SRP routing model.');
requireGatePattern(/same notification record.*72-hour.*Final Report/is, 'Missing same-record staged SRP workflow.');
requireGatePattern(/voluntary-reporting functionality.*later SRP phase/i, 'Missing distinction between mandatory September 2026 reporting and later voluntary reporting.');
requireGatePattern(/English only/i, 'Missing launch-language operational checkpoint.');
requireGatePattern(/different from the European Vulnerability Database \(EUVD\)/i, 'Missing SRP-versus-EUVD distinction.');

requireGatePattern(/manufacturer\/operator legal name[\s\S]*product name \*\*TycoonX\*\*[\s\S]*awareness timestamp/is, 'Missing minimum internal SRP incident packet.');
requireGatePattern(/Member States where TycoonX is available/i, 'Missing SRP Member-State availability field.');
requireGatePattern(/unlawful or malicious acts are suspected/i, 'Missing severe-incident malicious-act reporting field.');
requireGatePattern(/24-hour, 72-hour and final-report versions as immutable evidence/i, 'Missing immutable SRP submission evidence requirement.');

requireGatePattern(/SRP outage contingency/i, 'Missing SRP-outage contingency section.');
requireGatePattern(/SRP is temporarily unavailable[\s\S]*contact the designated CSIRT directly/is, 'Missing ENISA temporary-unavailability/direct-CSIRT fallback.');
requireGatePattern(/direct CSIRT contact.*does \*\*not\*\* replace the SRP filing/is, 'Missing requirement to file through SRP after outage restoration.');
requireGatePattern(/Do not change the incident awareness timestamp/i, 'Missing anti-clock-reset safeguard during SRP outages.');

requireGatePattern(/sensitive-notification handling is not a self-created secrecy veto/i, 'Missing sensitive-report dissemination safeguard.');
requireGatePattern(/unilaterally prevent.*CSIRT.*ENISA.*market-surveillance authorities/is, 'Missing warning against treating sensitivity as a unilateral dissemination veto.');
requireGatePattern(/actively exploited vulnerability/i, 'Missing actively exploited vulnerability trigger.');
requireGatePattern(/reliable evidence that a malicious actor has exploited/i, 'Missing CRA active-exploitation threshold.');
requireGatePattern(/severe incident/i, 'Missing severe-incident trigger.');
requireGatePattern(/Article 14\(8\) requires manufacturers to inform impacted users/i, 'Missing Article 14(8) impacted-user notification requirement.');
requireGatePattern(/not the same threshold as GDPR Article 34/i, 'Missing CRA-versus-GDPR user-notice distinction.');
requireGatePattern(/awareness timestamp/i, 'Missing incident-awareness timestamp preservation.');
requireGatePattern(/main establishment/i, 'Missing manufacturer main-establishment routing check.');
requireGatePattern(/more than one legal\/process clock/i, 'Missing multi-regime incident-clock warning.');
requireGatePattern(/mere act of making a notification does not itself subject the notifying person to increased liability/i, 'Missing CRA notification/no-increased-liability safeguard.');
requireGatePattern(/microenterprises and small enterprises are not subject to administrative fines for missing the 24-hour early-warning deadline/i, 'Missing narrow micro/small 24-hour fine exception.');
requireGatePattern(/does not erase:[\s\S]*72-hour[\s\S]*final-report[\s\S]*impacted-user/i, 'Missing warning that micro/small status does not erase remaining Article 14 duties.');
requireGatePattern(/not treat small size as a blanket CRA exemption/i, 'Missing warning against assuming a small-business reporting exemption.');
requireGatePattern(/GDPR data minimisation/i, 'Missing privacy minimisation safeguard for security evidence.');
requireGatePattern(/human-reachable vulnerability intake/i, 'Missing human-reachable vulnerability intake gate.');
requireGatePattern(/mobile applications and computer games/i, 'Missing current Commission default-category product example.');
requireGatePattern(/cessation-of-operations plan/i, 'Missing later CRA cessation-of-operations roadmap item.');
requireGateText('Diamonds', 'Missing Diamonds security-response isolation.');
requireGateText('30-Day VIP', 'Missing one-time 30-Day VIP security-response isolation.');
requireGateText('Lifetime VIP', 'Missing Lifetime VIP security-response isolation.');
requireGatePattern(/selected genuine promotional sales windows/i, 'Missing Lifetime VIP limited-sale invariant.');

requirePageText('Security & Vulnerability Reporting', 'Public TycoonX security page is missing its security-reporting heading.');
requirePageText('cevikdev@gmail.com', 'Public TycoonX security page is missing a human-reachable email contact.');
requirePageText('TycoonX Security', 'Public TycoonX security page is missing the dedicated report subject.');
requirePageText('actively exploited', 'Public TycoonX security page no longer asks reporters to flag active exploitation.');
requirePageText('No automatic bounty', 'Public TycoonX security page is missing the no-automatic-bounty clarification.');
requirePageText('authoritative TycoonX, Apple, Google, Xsolla', 'Public TycoonX security page is missing entitlement/payment reconciliation safeguards.');

for (const [name, text] of [[gateFile, gate], [securityPageFile, securityPage]]) {
  if (/TyconX/.test(text)) errors.push(`Displayed TycoonX brand typo found in ${name}.`);
  if (/\bbeta\b/i.test(text)) errors.push(`Stale pre-release wording found in ${name}.`);
}

console.log('TycoonX CRA 2026 reporting gate QA');
console.log(`Gate: ${gateFile}`);
console.log(`Public security intake: ${securityPageFile}`);

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('\nPASS: CRA September 2026 reporting, SRP outage handling, current ENISA workflow, user notification and paid-entitlement safeguards are present.');
}
