#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import process from 'node:process';

const companionPath = 'TYCOONX_CRA_SRP_ROUTING_USER_NOTIFICATION_RELEASE_GATE.md';
const corePath = 'TYCOONX_EU_CYBER_RESILIENCE_ACT_2026_REPORTING_GATE.md';
const progressPath = 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md';

const [companion, core, progress] = await Promise.all([
  readFile(companionPath, 'utf8'),
  readFile(corePath, 'utf8'),
  readFile(progressPath, 'utf8'),
]);

const errors = [];

function requireText(text, value, message) {
  if (!text.includes(value)) errors.push(message);
}

function requirePattern(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

requireText(companion, 'September 11, 2026', 'Missing CRA Article 14 application date.');
requireText(companion, 'August 14, 2026', 'Missing latest ENISA AR interface-functions guidance checkpoint.');
requireText(companion, 'EU Login', 'Missing SRP EU Login readiness requirement.');
requirePattern(companion, /re-check the official SRP instructions immediately before the reporting duties start/i, 'Missing pre-go-live SRP guidance refresh requirement.');

requirePattern(companion, /cybersecurity of its products with digital elements are \*\*predominantly taken\*\*/i, 'Missing predominant cybersecurity-decision main-establishment test.');
requirePattern(companion, /highest number of employees in the Union/i, 'Missing Article 14(7) employee-count fallback.');
requirePattern(companion, /authorised representative acting for the highest number/i, 'Missing Article 14(7) authorised-representative fallback.');
requirePattern(companion, /importer placing the highest number/i, 'Missing Article 14(7) importer fallback.');
requirePattern(companion, /distributor making the highest number/i, 'Missing Article 14(7) distributor fallback.');
requirePattern(companion, /highest number of users of the manufacturer's products with digital elements/i, 'Missing Article 14(7) user-count fallback.');
requirePattern(companion, /same CSIRT designated as coordinator to which the manufacturer first reported/i, 'Missing user-count-route continuity option.');
requirePattern(companion, /Do not skip directly to the Member State with the largest user base/i, 'Missing statutory-order routing safeguard.');

requirePattern(companion, /Apple storefront.*Google Play storefront.*Xsolla merchant entity.*cloud data centre/is, 'Missing provider/location separation from CRA main establishment.');
requirePattern(companion, /provider migration alone does not automatically change the manufacturer or the main-establishment test/i, 'Missing provider-migration routing safeguard.');
requirePattern(companion, /business sale, merger, reorganisation/i, 'Missing successor/operator rerouting trigger.');

requirePattern(companion, /inform the \*\*impacted users\*\*.*where appropriate \*\*all users\*\*/is, 'Missing Article 14(8) impacted/all-user notice rule.');
requirePattern(companion, /structured, machine-readable format that is easily automatically processable/i, 'Missing Article 14(8) machine-readable communication rule.');
requirePattern(companion, /recorded "where appropriate" decision/i, 'Missing machine-readable appropriateness evidence.');
requirePattern(companion, /fails to inform users in a timely manner.*CSIRTs designated as coordinators may provide the information to users/is, 'Missing Article 14(8) CSIRT fallback user-notice rule.');

requirePattern(companion, /Article 17\(2\) public-awareness authority/i, 'Missing Article 17(2) public-awareness section.');
requirePattern(companion, /inform the public about the incident.*require the manufacturer to do so/is, 'Missing coordinator public-disclosure authority.');
requirePattern(companion, /do not promise absolute secrecy/i, 'Missing safeguard against false confidentiality promises.');

requirePattern(companion, /Third-party voluntary reports can create an urgent inbound signal/i, 'Missing Article 15 third-party report workflow.');
requirePattern(companion, /coordinator CSIRT must inform the manufacturer without undue delay/i, 'Missing Article 15(4) manufacturer-notification rule.');
requirePattern(companion, /allegation as automatically proven/i, 'Missing third-party-report evidentiary safeguard.');

requireText(companion, 'Apple', 'Missing Apple role separation.');
requireText(companion, 'Google Play', 'Missing Google Play role separation.');
requireText(companion, 'Xsolla', 'Missing Xsolla role separation.');
requireText(companion, 'Diamonds', 'Missing Diamonds isolation.');
requireText(companion, '30-Day VIP', 'Missing one-time 30-Day VIP isolation.');
requireText(companion, 'Lifetime VIP', 'Missing Lifetime VIP isolation.');
requirePattern(companion, /do not replay Apple, Google Play, or Xsolla entitlement events/i, 'Missing provider-event replay safeguard.');
requirePattern(companion, /correct only the affected state using reliable authoritative evidence/i, 'Missing narrow security-correction rule.');

requirePattern(core, /within 24 hours/i, 'Core CRA gate lost the 24-hour early-warning deadline.');
requirePattern(core, /within 72 hours/i, 'Core CRA gate lost the 72-hour notification deadline.');
requirePattern(core, /Single Reporting Platform/i, 'Core CRA gate lost the SRP requirement.');
requirePattern(core, /Article 14\(8\).*inform impacted users/is, 'Core CRA gate lost Article 14(8) user-notice coverage.');

requirePattern(progress, /25\/25/i, 'Localization tracker no longer confirms all 25 hubs.');
requirePattern(progress, /100\/100 localized full documents/i, 'Localization tracker no longer confirms all 100 localized documents.');
requirePattern(progress, /Exact next unfinished locale\/document: None/i, 'Localization tracker unexpectedly has an unfinished locale/document.');
requirePattern(progress, /full release on \*\*September 1, 2026\*\*/i, 'Localization tracker lost the full-release invariant.');

for (const [name, text] of [
  [companionPath, companion],
  [corePath, core],
]) {
  if (/TyconX/.test(text)) errors.push(`Displayed TycoonX brand typo found in ${name}.`);
}

console.log('TycoonX CRA SRP routing and user/public notification QA');
console.log(`Companion gate: ${companionPath}`);
console.log(`Core CRA gate: ${corePath}`);

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('\nPASS: CRA Article 14(7) routing, Article 14(8) user communication, Article 17(2) public-awareness handling, provider separation, and paid-entitlement safeguards are present.');
}
