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

requireGateText('Last reviewed: 2026-09-05', 'CRA gate review date is stale.');
requireGatePattern(/TycoonX went to full release on \*\*September 1, 2026\*\*/i, 'Missing post-release TycoonX status.');
requireGateText('September 11, 2026', 'Missing CRA Article 14 application date.');
requireGateText('December 11, 2027', 'Missing distinction from the CRA general application date.');
requireGateText('July 27, 2026', 'Missing current Commission CRA implementation-guidance checkpoint.');
requireGateText('September 4, 2026', 'Missing latest ENISA SRP FAQ checkpoint.');
requireGatePattern(/dedicated public SRP URL.*published before.*goes live/is, 'Missing current SRP public-URL status checkpoint.');
requireGatePattern(/must not claim that the SRP is already live/i, 'Missing safeguard against prematurely claiming SRP go-live.');

requireGatePattern(/Within 24 hours/i, 'Missing 24-hour early-warning deadline.');
requireGatePattern(/Within 72 hours/i, 'Missing 72-hour notification deadline.');
requireGateText('14 days after a corrective or mitigating measure becomes available', 'Missing actively exploited vulnerability final-report deadline.');
requireGatePattern(/one month after the submission of the 72-hour incident notification/i, 'Missing severe-incident final-report deadline.');
requireGateText('Single Reporting Platform', 'Missing CRA Single Reporting Platform requirement.');
requireGateText('CSIRT designated as coordinator', 'Missing CSIRT coordinator routing requirement.');
requireGateText('ENISA', 'Missing ENISA reporting/platform reference.');
requireGatePattern(/personal EU Login with Multi Factor Authentication \(MFA\)/i, 'Missing personal EU Login and MFA requirement.');
requireGatePattern(/one Primary AR and up to 20 Secondary ARs/i, 'Missing current Primary/Secondary Assigned Representative model.');
requireGatePattern(/non-validated AR can submit up to 20 notifications/i, 'Missing current pending-validation submission safeguard.');
requireGatePattern(/validation runs in parallel with reporting/i, 'Missing current SRP representative-validation workflow.');
requireGatePattern(/no reporting API is provided in the initial SRP release/i, 'Missing current initial-release no-SRP-API implementation constraint.');
requireGatePattern(/voluntary reporting functionality is planned for a later phase/i, 'Missing distinction between mandatory launch reporting and later voluntary reporting.');
requireGatePattern(/different from the European Vulnerability Database \(EUVD\)/i, 'Missing SRP-versus-EUVD distinction.');

requireGatePattern(/current \*\*72-hour counter\*\*/i, 'Missing current SRP 72-hour-counter implementation warning.');
requireGatePattern(/48 hours after the 24-hour report is submitted/i, 'Missing current SRP 48-hours-after-24-hour-submission counter behavior.');
requireGatePattern(/Calculate the 24-hour and 72-hour deadlines independently from that awareness timestamp/i, 'Missing independent awareness-based deadline calculation.');
requireGatePattern(/SRP counters and reminder emails as operational aids, not as the authoritative legal clock/i, 'Missing warning not to use the SRP UI as the legal deadline clock.');
requireGatePattern(/Do not rewrite the awareness timestamp merely to match the interface counter/i, 'Missing anti-awareness-timestamp manipulation safeguard.');
requireGatePattern(/does not implement the same type of final-report counter for actively exploited vulnerabilities/i, 'Missing current actively-exploited-vulnerability final-counter limitation.');

requireGatePattern(/SRP outage contingency/i, 'Missing SRP-outage contingency section.');
requireGatePattern(/SRP is temporarily unavailable[\s\S]*contact the designated CSIRT directly/is, 'Missing temporary-unavailability/direct-CSIRT fallback.');
requireGatePattern(/direct CSIRT contact.*does \*\*not\*\* replace the SRP filing/is, 'Missing requirement to file through SRP after outage restoration.');
requireGatePattern(/Do not change the incident awareness timestamp/i, 'Missing anti-clock-reset safeguard during SRP outages.');

requireGatePattern(/September 11 transition and older products/i, 'Missing September 11 legacy-product transition section.');
requireGatePattern(/including products placed on the market before December 11, 2027/i, 'Missing legacy-product reporting-scope checkpoint.');
requireGatePattern(/already aware of the active exploitation before September 11, 2026[\s\S]*does not require a retrospective Article 14 report/is, 'Missing pre-start-date awareness transition rule.');
requireGatePattern(/becomes aware on or after September 11[\s\S]*reporting duty can apply/is, 'Missing post-start-date awareness transition rule.');

requireGatePattern(/actively exploited vulnerability/i, 'Missing actively exploited vulnerability trigger.');
requireGatePattern(/reliable evidence that a malicious actor has exploited/i, 'Missing CRA active-exploitation threshold.');
requireGatePattern(/severe incident/i, 'Missing severe-incident trigger.');
requireGatePattern(/Article 14\(8\) requires manufacturers to inform impacted users/i, 'Missing Article 14(8) impacted-user notification requirement.');
requireGatePattern(/not the same threshold as GDPR Article 34/i, 'Missing CRA-versus-GDPR user-notice distinction.');
requireGatePattern(/more than one legal\/process clock/i, 'Missing multi-regime incident-clock warning.');
requireGatePattern(/mere act of making a notification does not itself subject the notifying person to increased liability/i, 'Missing CRA notification/no-increased-liability safeguard.');
requireGatePattern(/microenterprises and small enterprises are not subject to administrative fines for missing the 24-hour early-warning deadline/i, 'Missing narrow micro/small 24-hour fine exception.');
requireGatePattern(/not treat small size as a blanket CRA exemption/i, 'Missing warning against assuming a small-business reporting exemption.');
requireGatePattern(/GDPR data minimisation/i, 'Missing privacy minimisation safeguard for security evidence.');
requireGatePattern(/human-reachable vulnerability intake/i, 'Missing human-reachable vulnerability intake gate.');
requireGatePattern(/mobile applications and computer games/i, 'Missing current Commission default-category product example.');
requireGatePattern(/cessation-of-operations plan/i, 'Missing later CRA cessation-of-operations roadmap item.');

requireGateText('Diamonds', 'Missing Diamonds security-response isolation.');
requireGateText('30-Day VIP', 'Missing one-time 30-Day VIP security-response isolation.');
requireGateText('Lifetime VIP', 'Missing Lifetime VIP security-response isolation.');
requireGatePattern(/selected genuine promotional sales windows/i, 'Missing Lifetime VIP limited-sale invariant.');
requireGatePattern(/Purchased Diamonds.*do not expire solely because time passes/is, 'Missing purchased-Diamonds non-expiry invariant.');
requireGatePattern(/30-Day VIP remains a one-time, non-renewing 30-day entitlement/i, 'Missing exact one-time 30-Day VIP invariant.');

requireGatePattern(/Regression scenarios/i, 'Missing CRA production regression scenarios.');
requireGatePattern(/SRP displays an apparently earlier 72-hour due time/is, 'Missing SRP-counter-mismatch regression scenario.');
requireGatePattern(/duplicate SRP submission or retry occurs[\s\S]*does not duplicate a Diamond or VIP entitlement event/is, 'Missing duplicate-report entitlement-isolation scenario.');

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
  console.log('\nPASS: CRA September 2026 reporting, September 4 ENISA SRP workflow, independent awareness-based deadline calculation, outage handling, user notification and paid-entitlement safeguards are present.');
}
