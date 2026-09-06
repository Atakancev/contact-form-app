#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();

const files = {
  supplement: path.join(root, 'TYCOONX_CRA_GERMANY_COORDINATOR_CUTOVER_2026_GATE.md'),
  mainCra: path.join(root, 'TYCOONX_EU_CYBER_RESILIENCE_ACT_2026_REPORTING_GATE.md'),
  routing: path.join(root, 'TYCOONX_CRA_SRP_ROUTING_USER_NOTIFICATION_RELEASE_GATE.md'),
  progress: path.join(root, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md'),
};

const [supplement, mainCra, routing, progress] = await Promise.all(
  Object.values(files).map((file) => readFile(file, 'utf8')),
);

const failures = [];

const requiredSupplementTokens = [
  'September 11, 2026',
  'September 4, 2026',
  'Article 14(7)',
  'Article 15(7)',
  'CERT-Bund',
  'BSI',
  'Single Reporting Platform',
  'SRP',
  'EU Login',
  'MFA',
  'awareness timestamp',
  'Diamonds',
  '30-Day VIP',
  'Lifetime VIP',
  'TycoonX',
];

for (const token of requiredSupplementTokens) {
  if (!supplement.includes(token)) {
    failures.push(`Missing CRA Germany cutover safeguard: ${token}`);
  }
}

if (!/internal legal cross-reference inconsistency/i.test(supplement)) {
  failures.push('ENISA FAQ Article 14(7)/15(7) cross-reference inconsistency is not documented.');
}

if (!/Regulation \(EU\) 2024\/2847 itself places mandatory manufacturer routing in \*\*Article 14\(7\)\*\*/i.test(supplement)) {
  failures.push('The operative CRA Article 14(7) routing authority is not explicit.');
}

if (!/Article 15 governs voluntary reporting and currently contains paragraphs 1 through 5/i.test(supplement)) {
  failures.push('Article 15 voluntary-reporting boundary is missing.');
}

if (!/do not implement or document `Article 15\(7\)` as the legal basis for mandatory routing/i.test(supplement)) {
  failures.push('Article 15(7) must be blocked as a mandatory-routing basis.');
}

if (!/do not select Germany merely because a controller, trader, legal notice, tax, payment, App Store, Google Play, Xsolla, hosting, or correspondence address is in Germany/i.test(supplement)) {
  failures.push('Germany must not be inferred from a postal/controller/payment/provider address alone.');
}

if (!/decisions related to the cybersecurity of its products with digital elements are predominantly taken/i.test(supplement)) {
  failures.push('CRA main-establishment cybersecurity-decision test is missing.');
}

if (!/If the documented Article 14\(7\) analysis resolves the TycoonX manufacturer's main establishment to \*\*Germany\*\*, ENISA's coordinator list updated September 4, 2026 currently points to \*\*CERT-Bund \/ BSI\*\*/i.test(supplement)) {
  failures.push('Conditional Germany -> CERT-Bund/BSI mapping is missing.');
}

if (!/do not invent an SRP URL/i.test(supplement)) {
  failures.push('Unverified SRP endpoint protection is missing.');
}

if (!/do not treat that direct contact as the completed CRA SRP notification/i.test(supplement)) {
  failures.push('Direct CSIRT contact must not replace later SRP filing.');
}

if (!/A provider outage, SRP outage, failed login, expired session, MFA issue, or browser failure is not permission to fabricate a later awareness timestamp/i.test(supplement)) {
  failures.push('CRA awareness timestamp integrity safeguard is missing.');
}

if (!/A CRA notification[\s\S]*is \*\*not itself\*\* proof that a TycoonX player hacked the game, committed fraud, caused a chargeback, abused an entitlement, or compromised an account/i.test(supplement)) {
  failures.push('CRA-reporting state is not sufficiently isolated from player enforcement.');
}

if (!/30-Day VIP.*one-time, non-renewing 30-day entitlement/is.test(supplement)) {
  failures.push('One-time non-renewing 30-Day VIP invariant is missing.');
}

if (!/Lifetime VIP.*selected genuine sales windows/is.test(supplement)) {
  failures.push('Lifetime VIP selected-sales-window invariant is missing.');
}

if (!/does \*\*not\*\* reopen the completed 25-locale localization queue/i.test(supplement)) {
  failures.push('No-localization-reopen conclusion is missing.');
}

const mainCraRequired = [
  'Article 14(7)',
  'September 11, 2026',
  'Single Reporting Platform',
  'awareness timestamp',
];
for (const token of mainCraRequired) {
  if (!mainCra.includes(token)) {
    failures.push(`Existing main CRA gate lost required invariant: ${token}`);
  }
}

if (!/Article 14\(7\)/i.test(routing)) {
  failures.push('Existing CRA routing gate no longer contains Article 14(7).');
}

if (!/All 25 target locales and all 100 localized full documents are current/i.test(progress)) {
  failures.push('Localization progress no longer confirms all 100 documents current.');
}

if (!/Localized full documents:\*\* 100\/100, \*\*100%\*\*/i.test(progress)) {
  failures.push('Localized full-document metric is not 100/100 (100%).');
}

if (!/Localized hubs:\*\* 25\/25, \*\*100%\*\*/i.test(progress)) {
  failures.push('Localized hub metric is not 25/25 (100%).');
}

for (const [label, text] of Object.entries({ supplement, mainCra, routing, progress })) {
  if (/\bTyconX\b/.test(text)) {
    failures.push(`Displayed legacy TyconX spelling found in ${label}.`);
  }
}

if (/\bTycoonX\b[^\n]{0,120}\bbeta\b|\bbeta\b[^\n]{0,120}\bTycoonX\b/i.test(supplement)) {
  failures.push('CRA Germany cutover gate contains stale live-service beta wording.');
}

if (failures.length > 0) {
  console.error('TycoonX CRA Germany coordinator cutover verifier failed:\n');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX CRA Germany coordinator cutover verifier passed.');
