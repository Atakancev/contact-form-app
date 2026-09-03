#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_DSA_ARTICLE_16_NOTICE_ACTION_RELEASE_GATE.md');
const communityPath = path.join(ROOT, 'tycoonx-community-standards.md');
const progressPath = path.join(ROOT, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');
const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

const gate = await readFile(gatePath, 'utf8');
const community = await readFile(communityPath, 'utf8');
const progress = await readFile(progressPath, 'utf8');

// Article 16 hosting-service scope and core mechanism.
requireMatch(gate, /Article 16 sits in DSA Section 2/i, 'Missing Article 16 Section 2 hosting-service scope.');
requireMatch(gate, /easy to access/i, 'Missing easy-access requirement.');
requireMatch(gate, /user-friendly/i, 'Missing user-friendly requirement.');
requireMatch(gate, /available by electronic means/i, 'Missing electronic notice mechanism.');
requireMatch(gate, /sufficiently precise and adequately substantiated notices/i, 'Missing notice quality standard.');
requireMatch(gate, /exact electronic location/i, 'Missing exact electronic location requirement.');
requireMatch(gate, /chat or message ID/i, 'Missing in-app stable locator example.');

// All four Article 16(2) notice elements.
requireMatch(gate, /Why it is allegedly illegal/i, 'Missing substantiated illegality explanation.');
requireMatch(gate, /Where it is/i, 'Missing content location field.');
requireMatch(gate, /Who can be contacted/i, 'Missing reporter contact field.');
requireMatch(gate, /Bona fide confirmation/i, 'Missing bona fide accuracy/completeness confirmation.');
requireMatch(gate, /Articles 3 to 7 of Directive 2011\/93\/EU/i, 'Missing child-offence reporter identity exception.');
requireMatch(gate, /must not require the reporter's name and email address/i, 'Missing no-forced-identity rule for qualifying child-safety reports.');

// Processing, actual knowledge, safe harbour and no-general-monitoring boundaries.
requireMatch(gate, /not the same thing as a court order/i, 'Missing notice-vs-order separation.');
requireMatch(gate, /timely, diligent, non-arbitrary and objective/i, 'Missing Article 16 decision standard.');
requireMatch(gate, /Article 16\(3\).*actual knowledge or awareness/is, 'Missing Article 16(3) actual-knowledge analysis.');
requireMatch(gate, /without a detailed legal examination/i, 'Missing detailed-legal-examination threshold.');
requireMatch(gate, /Article 6.*acts expeditiously/is, 'Missing Article 6 expeditious action rule.');
requireMatch(gate, /specific notified item/i, 'Missing item-specific knowledge boundary.');
requireMatch(gate, /no general obligation to monitor/i, 'Missing Article 8 no-general-monitoring safeguard.');
requireMatch(gate, /Article 7/i, 'Missing voluntary good-faith investigation safeguard.');

// Reporter acknowledgement and decision/redress.
requireMatch(gate, /confirmation of receipt \*\*without undue delay\*\*/i, 'Missing receipt acknowledgement timing.');
requireMatch(gate, /decision regarding the reported information without undue delay/i, 'Missing reporter decision timing.');
requireMatch(gate, /possibilities for redress/i, 'Missing reporter redress information.');
requireMatch(gate, /automated means were used/i, 'Missing reporter automation disclosure.');

// Related DSA layers must remain separated.
requireMatch(gate, /reporter communication.*Article 16/is, 'Missing reporter communication record.');
requireMatch(gate, /affected-user communication.*Article 17/is, 'Missing Article 17 affected-user separation.');
requireMatch(gate, /strictly necessary/i, 'Missing notifier identity necessity safeguard.');
requireMatch(gate, /Article 19 micro\/small-enterprise exemption/i, 'Missing Article 19 scope boundary.');
requireMatch(gate, /does not by itself erase Article 16/i, 'Missing Article 16 vs Article 19 distinction.');
requireMatch(gate, /Article 22 applies/i, 'Missing trusted-flagger conditional route.');
requireMatch(gate, /Article 23 applies/i, 'Missing manifestly-unfounded notice misuse route.');
requireMatch(gate, /DSA Article 18 assessment/i, 'Missing criminal threat-to-life/safety escalation.');
requireMatch(gate, /Terrorist Content Online Regulation removal order/i, 'Missing TCO order separation.');
requireMatch(gate, /copyright, trademark and other intellectual-property/i, 'Missing IP specialist route.');

// Payment, product and account-compromise invariants.
requireMatch(gate, /legitimately purchased \*\*Diamonds\*\*/i, 'Missing Diamond isolation.');
requireMatch(gate, /one-time, non-renewing \*\*30-Day VIP\*\*/i, 'Missing 30-Day VIP product distinction.');
requireMatch(gate, /one-time promotional entitlement available only during selected genuine sales windows/i, 'Missing Lifetime VIP selected-window rule.');
requireMatch(gate, /may withdraw it from future sale, it may never return/i, 'Missing Lifetime VIP future-availability protection.');
requireMatch(gate, /Apple App Store, Google Play or Xsolla transaction/i, 'Missing payment-channel separation.');
requireMatch(gate, /compromised TycoonX account/i, 'Missing account-compromise handling.');
requireMatch(gate, /content decision from the attribution decision/i, 'Missing content-vs-account attribution boundary.');

// Privacy, audit and transparency evidence.
requireMatch(gate, /reporter privacy, data minimisation and security/i, 'Missing reporter privacy controls.');
requireMatch(gate, /report ID/i, 'Missing report audit identifier.');
requireMatch(gate, /acknowledgement timestamp/i, 'Missing acknowledgement audit timestamp.');
requireMatch(gate, /Article 16\(3\).*actual-knowledge assessment/is, 'Missing actual-knowledge audit field.');
requireMatch(gate, /Article 15 requires hosting-provider reports/i, 'Missing Article 15 reporting link.');
requireMatch(gate, /exemption from Article 15 reporting.*exemption from Article 16/is, 'Missing Article 15-vs-16 exemption boundary.');

// Fresh German enforcement evidence.
requireMatch(gate, /April 30, 2026[\s\S]*more than \*\*2,000 DSA complaints in 2025\*\*/i, 'Missing 2026 DSC activity-report evidence.');
requireMatch(gate, /June 12, 2026[\s\S]*Steam/i, 'Missing 2026 Steam Article 16 investigation evidence.');
requireMatch(gate, /July 6, 2026[\s\S]*eBay/i, 'Missing 2026 eBay Article 16 enforcement evidence.');
requireMatch(gate, /not yet a final decision/i, 'Missing cautious eBay enforcement-status wording.');

// Existing canonical Community Standards must already carry the public legal meaning.
requireMatch(community, /legally required electronic notice-and-action mechanism/i, 'Canonical Community Standards lost DSA notice-and-action commitment.');
requireMatch(community, /sufficiently precise notices in a timely, diligent, non-arbitrary, and objective manner/i, 'Canonical Community Standards lost Article 16 processing standard.');
requireMatch(community, /A report does not automatically prove that content is illegal/i, 'Canonical Community Standards lost notice-vs-proof safeguard.');
requireMatch(gate, /does not materially change the current canonical Community Standards meaning/i, 'Gate must remain operational rather than silently changing canonical meaning.');

// Localization and release state remains closed/current because canonical meaning did not change.
requireMatch(progress, /25\/25[^\n]*target locales/i, 'Progress file no longer confirms all 25 locales.');
requireMatch(progress, /100\/100 localized full documents are currently confirmed current/i, 'Progress file no longer confirms 100 localized full documents.');
requireMatch(progress, /Exact next unfinished locale\/document: None/i, 'Localization queue is not closed.');
requireMatch(progress, /TycoonX went to full release on \*\*September 1, 2026\*\*/i, 'Progress file lost full-release wording.');

for (const [name, text] of [
  ['Article 16 notice-and-action gate', gate],
  ['Community Standards', community],
  ['localization progress', progress],
]) {
  if (/TyconX/.test(text)) errors.push(`Displayed brand typo TyconX found in ${name}.`);
}

// Internal compliance prose may discuss removing stale beta language. Flag only wording that actually presents the live service as beta.
if (/TycoonX\s+(?:is|remains|currently is)\s+(?:in\s+)?beta\b/i.test(gate) || /TycoonX beta\b/i.test(gate)) {
  errors.push('Gate incorrectly presents the live TycoonX service as beta.');
}

console.log('TycoonX DSA Article 16 notice-and-action QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: Article 16 notices are usable, item-specific, timely, privacy-aware and separated from Article 17 reasons, payment state, entitlements, account compromise and authority-order workflows.');
}