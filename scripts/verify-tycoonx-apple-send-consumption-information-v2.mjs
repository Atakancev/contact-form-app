#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gatePath = path.join(root, 'TYCOONX_APPLE_SEND_CONSUMPTION_INFORMATION_V2_RELEASE_GATE.md');
const refundGatePath = path.join(root, 'TYCOONX_APPLE_REFUND_ENTITLEMENT_RELEASE_GATE.md');
const privacyPath = path.join(root, 'tyconx-privacy-policy.md');
const progressPath = path.join(root, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const [gate, refundGate, privacy, progress] = await Promise.all([
  readFile(gatePath, 'utf8'),
  readFile(refundGatePath, 'utf8'),
  readFile(privacyPath, 'utf8'),
  readFile(progressPath, 'utf8'),
]);

const failures = [];
const requireGate = (pattern, message) => {
  if (!pattern.test(gate)) failures.push(message);
};
const requireRefundGate = (pattern, message) => {
  if (!pattern.test(refundGate)) failures.push(message);
};
const requirePrivacy = (pattern, message) => {
  if (!pattern.test(privacy)) failures.push(message);
};

requireGate(/inApps\/v2\/transactions\/consumption\/\{transactionId\}/i, 'Missing current Apple V2 endpoint.');
requireGate(/deprecated Send Consumption Information V1/i, 'Missing V1 deprecation rule.');
requireGate(/five fields in total/i, 'Missing current five-field V2 payload boundary.');
requireGate(/required: `customerConsented`[\s\S]*required: `deliveryStatus`[\s\S]*required: `sampleContentProvided`[\s\S]*optional: `consumptionPercentage`[\s\S]*optional: `refundPreference`/i, 'Missing three-required/two-optional V2 field set.');
requireGate(/within \*\*12 hours\*\* of receiving `CONSUMPTION_REQUEST`/i, 'Missing 12-hour Apple response window.');
requireGate(/deadline is not permission to[\s\S]*infer consent[\s\S]*send stale or guessed consumption data/i, 'Missing deadline fail-closed safeguards.');
requireGate(/If the customer has not consented, \*\*do not respond\*\*/i, 'Missing no-consent no-call rule.');
requireGate(/must not be silently bundled into:[\s\S]*App Tracking Transparency permission/i, 'Missing ATT/consumption-consent separation.');
requireGate(/withdrawn, expires, or becomes invalid[\s\S]*do not send further consumption information/i, 'Missing consent withdrawal rule.');
requireGate(/freely given, specific, informed and unambiguous consent/i, 'Missing GDPR consent-quality rule.');
requireGate(/HTTP 202 Accepted/i, 'Missing Apple 202 acknowledgement boundary.');
requireGate(/does \*\*not\*\* mean:[\s\S]*refund was denied[\s\S]*refund was granted/i, 'Missing 202-is-not-refund-decision rule.');
requireGate(/UNDELIVERED_SERVER_OUTAGE/i, 'Missing server-outage delivery status.');
requireGate(/If `deliveryStatus` is not `DELIVERED`, `consumptionPercentage` must be `0`/i, 'Missing undelivered percentage-zero rule.');
requireGate(/`refundPreference` is optional/i, 'Missing optional refund-preference rule.');
requireGate(/must not configure every refund request as `DECLINE` by default/i, 'Missing blanket-decline protection.');
requireGate(/`consumptionPercentage` uses integer milliunits from \*\*0 through 100000\*\*/i, 'Missing consumption milliunit range.');
requireGate(/final refund percentage may differ/i, 'Missing consumption-vs-final-refund distinction.');
requireGate(/1,000 Diamonds[\s\S]*400 Diamonds[\s\S]*`40000` milliunits/i, 'Missing transaction-specific Diamond consumption example.');
requireGate(/unrelated promotional\/free Diamonds/i, 'Missing unrelated-Diamond exclusion.');
requireGate(/one non-renewing \*\*30-consecutive-day\*\* access period/i, 'Missing 30-Day VIP invariant.');
requireGate(/Lifetime VIP remains a limited-time promotional offering available only during selected genuine sales windows/i, 'Missing Lifetime VIP sales-window invariant.');
requireGate(/may be withdrawn from sale, may never return/i, 'Missing Lifetime VIP availability limitation.');
requireGate(/`CONSUMPTION_REQUEST` alone never authorizes a Diamond deduction/i, 'Missing request-is-not-clawback rule.');
requireGate(/existence of a `CONSUMPTION_REQUEST`[\s\S]*does not by itself prove:[\s\S]*fraud[\s\S]*chargeback abuse[\s\S]*account compromise/i, 'Missing refund-request vs abuse separation.');
requireGate(/production and sandbox credentials, endpoints, ledgers, and evidence isolated/i, 'Missing Apple environment isolation.');
requireGate(/Privacy Policy and App Store privacy disclosures remain accurate/i, 'Missing privacy disclosure release block.');
requireGate(/App Store Connect privacy answers accurate and up to date/i, 'Missing App Store privacy-label maintenance rule.');
requireGate(/mandatory German\/EU consumer and data-protection law/i, 'Missing mandatory-rights preservation.');
requireGate(/player who refuses optional Apple consumption-data sharing must not lose ordinary contractual gameplay\/service/i, 'Missing no-service-penalty consent rule.');
requireGate(/V2 uses exactly the three required and two optional current fields/i, 'Missing V2 field regression case.');
requireGate(/blanket automatic `DECLINE` policy -> release fails/i, 'Missing blanket-decline QA case.');
requireGate(/later `REFUND` -> final correction uses Apple's final refund\/revocation evidence/i, 'Missing final-refund-authority QA case.');
requireGate(/Apple WWDC25, \*\*Dive into App Store server APIs for In-App Purchase\*\*/i, 'Missing current WWDC25 source.');
requireGate(/Guidelines 05\/2020 on consent under Regulation 2016\/679/i, 'Missing EDPB consent source.');

requireRefundGate(/`CONSUMPTION_REQUEST`: Apple is asking for information that may inform a refund decision\. It is not itself proof that a refund has been granted/i, 'Existing Apple refund gate lost request-vs-decision distinction.');
requireRefundGate(/final refund percentage may differ from the consumption percentage/i, 'Existing Apple refund gate lost final-percentage authority.');
requirePrivacy(/Where consent is legally required, we ask for it separately/i, 'Canonical Privacy Policy no longer promises separate consent where required.');
requirePrivacy(/Apple, Google, Xsolla, or other authorized payment or platform providers where needed to validate purchases, restores, entitlement status, refunds/i, 'Canonical Privacy Policy no longer covers payment/refund platform sharing.');

for (const [name, text] of [
  ['new Apple V2 gate', gate],
  ['existing Apple refund gate', refundGate],
  ['canonical Privacy Policy', privacy],
]) {
  if (/\bTyconX\b/.test(text)) failures.push(`Displayed legacy game-name spelling found in ${name}.`);
  if (/\bTycoonX\b[^\n]{0,50}\bbeta\b/i.test(text)) failures.push(`Stale live-service beta wording found in ${name}.`);
}

if (!/100\/100/.test(progress) || !/25\/25/.test(progress)) {
  failures.push('Localization progress is no longer complete; re-open the required locale/document queue first.');
}
if (!/went to full release on \*\*September 1, 2026\*\*/i.test(progress)) {
  failures.push('Localization tracker lost the September 1, 2026 full-release rule.');
}

if (failures.length) {
  console.error('TycoonX Apple Send Consumption Information V2 verifier failed:\n');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX Apple Send Consumption Information V2 verifier passed.');
