#!/usr/bin/env node

import { readFile } from 'node:fs/promises';

const gateFile = 'TYCOONX_CRA_SENSITIVE_NOTIFICATION_DISSEMINATION_2026_881_GATE.md';
const coreGateFile = 'TYCOONX_EU_CYBER_RESILIENCE_ACT_2026_REPORTING_GATE.md';
const companionGateFile = 'TYCOONX_CRA_SRP_ROUTING_USER_NOTIFICATION_RELEASE_GATE.md';
const progressFile = 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md';

const [gate, coreGate, companionGate, progress] = await Promise.all([
  readFile(gateFile, 'utf8'),
  readFile(coreGateFile, 'utf8'),
  readFile(companionGateFile, 'utf8'),
  readFile(progressFile, 'utf8'),
]);

const errors = [];

function requireText(text, value, message) {
  if (!text.includes(value)) errors.push(message);
}

function requirePattern(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

requireText(gate, 'Last reviewed: 2026-09-03', 'Sensitive-dissemination gate review date is stale.');
requirePattern(gate, /TycoonX went to full release on \*\*September 1, 2026\*\*/i, 'Missing live TycoonX release status.');
requireText(gate, 'September 11, 2026', 'Missing CRA Article 14 reporting start date.');
requireText(gate, 'Commission Delegated Regulation (EU) 2026/881', 'Missing Delegated Regulation (EU) 2026/881.');
requireText(gate, '10 May 2026', 'Missing delegated regulation entry-into-force checkpoint.');
requireText(gate, '31 August 2026', 'Missing current ENISA SRP FAQ checkpoint.');

requirePattern(gate, /Do not confuse filing with dissemination/i, 'Missing filing-versus-dissemination separation.');
requirePattern(gate, /Never delay a 24-hour early warning, 72-hour notification/i, 'Missing safeguard that sensitivity cannot pause statutory filing.');
requirePattern(gate, /Never reset the incident awareness timestamp/i, 'Missing awareness-clock safeguard.');
requirePattern(gate, /CSIRT controls whether and for how long onward dissemination is delayed/i, 'Missing CSIRT decision-control rule.');
requirePattern(gate, /cannot impose it unilaterally/i, 'Missing safeguard against unilateral manufacturer secrecy.');
requirePattern(gate, /period strictly necessary/i, 'Missing strictly-necessary duration rule.');

requirePattern(gate, /security risks? of dissemination outweighs? the security benefits?/i, 'Missing cybersecurity risk-versus-benefit assessment.');
requireText(gate, 'Traffic Light Protocol', 'Missing TLP handling-restriction assessment.');
requireText(gate, 'Permissible Actions Protocol', 'Missing PAP handling-restriction assessment.');
requirePattern(gate, /effective risk mitigation measure.*expected.*within 72 hours/is, 'Missing 72-hour expected-mitigation condition.');
requirePattern(gate, /exploitation technique/i, 'Missing exploit-enablement sensitivity condition.');
requirePattern(gate, /coordinated vulnerability disclosure/i, 'Missing coordinated-vulnerability-disclosure condition.');
requirePattern(gate, /Commercial inconvenience is not the same thing as a justified cybersecurity-related ground/i, 'Missing anti-reputation/anti-commercial-delay safeguard.');

requirePattern(gate, /particularly exceptional circumstances \(PEC\)/i, 'Missing PEC terminology.');
requirePattern(gate, /first 72-hour window/i, 'Missing ENISA first-72-hour PEC assessment timing.');
requirePattern(gate, /Article 16\(2\).*points \(a\) to \(c\)/is, 'Missing Article 16(2)(a)-(c) PEC limitation.');
requirePattern(gate, /confined to the Member State of the receiving coordinator CSIRT/i, 'Missing Article 16(2)(a) single-Member-State condition.');
requirePattern(gate, /contrary to that Member State's essential interests/i, 'Missing Article 16(2)(b) essential-interests condition.');
requirePattern(gate, /imminent high cybersecurity risk stemming from further dissemination/i, 'Missing Article 16(2)(c) imminent-risk condition.');
requirePattern(gate, /actively marks? in that 72-hour notification/i, 'Missing explicit 72-hour PEC marking requirement.');
requirePattern(gate, /general request for confidentiality is not a substitute/i, 'Missing distinction between generic sensitivity and PEC selection.');
requirePattern(gate, /does not mean:[\s\S]*24-hour[\s\S]*72-hour deadline[\s\S]*final-report[\s\S]*user-notification/is, 'Missing warning that PEC does not erase other duties.');

requirePattern(gate, /passwords, signing keys, private keys, reusable API tokens/i, 'Missing secret-minimisation safeguard.');
requirePattern(gate, /GDPR data-minimisation/i, 'Missing GDPR minimisation safeguard.');
requireText(gate, 'Apple', 'Missing Apple provider separation.');
requireText(gate, 'Google Play', 'Missing Google Play provider separation.');
requireText(gate, 'Xsolla', 'Missing Xsolla provider separation.');
requirePattern(gate, /provider NDA.*mandatory legal reporting/i, 'Missing provider-NDA versus mandatory-reporting safeguard.');

requireText(gate, 'Diamonds', 'Missing Diamonds entitlement isolation.');
requireText(gate, '30-Day VIP', 'Missing one-time 30-Day VIP entitlement isolation.');
requireText(gate, 'Lifetime VIP', 'Missing Lifetime VIP entitlement isolation.');
requirePattern(gate, /selected genuine promotional sales windows/i, 'Missing Lifetime VIP limited-window invariant.');
requirePattern(gate, /may be withdrawn from future sale, may never return/i, 'Missing Lifetime VIP future-availability invariant.');
requirePattern(gate, /account compromise/i, 'Missing account-compromise separation.');
requirePattern(gate, /good-faith vulnerability reporter/i, 'Missing good-faith researcher safeguard.');
requirePattern(gate, /Evidence packet for every delayed-dissemination request/i, 'Missing delayed-dissemination evidence packet.');
requirePattern(gate, /Release test cases/i, 'Missing tabletop test cases.');
requirePattern(gate, /PASS for legal-runbook wording, subject to production evidence/i, 'Missing honest production-evidence status.');

requirePattern(coreGate, /within 24 hours/i, 'Core CRA gate lost the 24-hour deadline.');
requirePattern(coreGate, /within 72 hours/i, 'Core CRA gate lost the 72-hour deadline.');
requirePattern(coreGate, /Article 14\(8\) requires manufacturers to inform impacted users/i, 'Core CRA gate lost user-notification handling.');
requirePattern(companionGate, /Article 14\(7\)/i, 'CRA routing companion lost Article 14(7) routing.');
requirePattern(companionGate, /Article 17\(2\)/i, 'CRA routing companion lost Article 17(2) public-awareness handling.');

requirePattern(progress, /25\/25/i, 'Localization tracker no longer confirms 25/25 hubs.');
requirePattern(progress, /100\/100 localized full documents are currently confirmed current/i, 'Localization tracker no longer confirms 100/100 localized documents.');
requirePattern(progress, /Exact next unfinished locale\/document: None/i, 'Localization queue is unexpectedly open; continue localization before standalone hardening.');

for (const [name, text] of [
  [gateFile, gate],
  [coreGateFile, coreGate],
  [companionGateFile, companionGate],
]) {
  if (/TyconX/.test(text)) errors.push(`Displayed TycoonX brand typo found in ${name}.`);
  if (/\bTycoonX\b.{0,40}\bbeta\b|\bbeta\b.{0,40}\bTycoonX\b/i.test(text)) {
    errors.push(`Stale live-service beta wording found in ${name}.`);
  }
}

console.log('TycoonX CRA sensitive-notification dissemination QA');
console.log(`Gate: ${gateFile}`);

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('\nPASS: CRA 2026/881 delayed-dissemination, PEC, entitlement-isolation, and localization guards are present.');
}
