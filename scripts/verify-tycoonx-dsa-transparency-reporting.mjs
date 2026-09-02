#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_DSA_TRANSPARENCY_REPORTING_GATE.md');
const communityPath = path.join(ROOT, 'tycoonx-community-standards.md');
const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

const gate = await readFile(gatePath, 'utf8');
const community = await readFile(communityPath, 'utf8');

requireMatch(gate, /Article 15\(2\).*micro or small enterprise/is, 'Missing Article 15(2) micro/small exemption analysis.');
requireMatch(gate, /Implementing Regulation \*\*\(EU\) 2024\/2835\*\*/i, 'Missing current harmonised reporting regulation.');
requireMatch(gate, /July 1, 2025/i, 'Missing harmonised-reporting application date.');
requireMatch(gate, /January 1 through December 31/i, 'Missing ordinary calendar-year reporting period.');
requireMatch(gate, /no later than \*\*two months after the end of the reporting period\*\*/i, 'Missing two-month publication deadline.');
requireMatch(gate, /first full annual reporting cycle.*January 1 through December 31, 2026/is, 'Missing first full 2026 harmonised cycle.');
requireMatch(gate, /February 2026/i, 'Missing February 2026 transitional harmonised-report checkpoint.');
requireMatch(gate, /transition period ended on \*\*December 31, 2025\*\*/i, 'Missing end of reporting transition period.');
requireMatch(gate, /do not backdate or fabricate a report/i, 'Missing missed-report remediation safeguard.');

requireMatch(gate, /CSV or XLSX version of the Annex I templates/i, 'Missing mandatory harmonised CSV/XLSX template format.');
requireMatch(gate, /completed in accordance with Annex II/i, 'Missing Annex II completion instructions.');
requireMatch(gate, /human-readable HTML\/PDF summary may be offered in addition.*must not replace/is, 'Missing safeguard against substituting a human-readable summary for the harmonised template.');
requireMatch(gate, /at least five years after publication/i, 'Missing five-year transparency-report retention period.');
requireMatch(gate, /all published versions.*publicly accessible/is, 'Missing public retention of all published report versions.');
requireMatch(gate, /explicitly mark the \*\*version and date\*\*/i, 'Missing corrected-report version/date marking.');
requireMatch(gate, /publish a corrected version rather than silently overwriting history/i, 'Missing non-destructive correction safeguard.');

requireMatch(gate, /Member State orders/i, 'Missing Article 15 authority-order reporting data.');
requireMatch(gate, /Article 16 illegal-content notices/i, 'Missing Article 16 notice reporting data.');
requireMatch(gate, /Own-initiative moderation/i, 'Missing own-initiative moderation reporting data.');
requireMatch(gate, /Complaints and reversals/i, 'Missing complaint/reversal reporting data.');
requireMatch(gate, /accuracy indicators/i, 'Missing automated moderation accuracy reporting requirement.');
requireMatch(gate, /possible error rates/i, 'Missing automated moderation error-rate reporting requirement.');
requireMatch(gate, /safeguards applied/i, 'Missing automated moderation safeguard reporting requirement.');

requireMatch(gate, /Article 24\(3\) is expressly excepted/i, 'Missing Article 24(3) small-enterprise exception distinction.');
requireMatch(gate, /respond without undue delay.*Article 24\(3\)/is, 'Missing Article 24(3) authority-request readiness.');
requireMatch(gate, /shall not include personal data/i, 'Missing Article 24(3) personal-data safeguard.');
requireMatch(gate, /Article 24\(5\) DSA Transparency Database alignment/i, 'Missing Article 24(5) Transparency Database integration section.');
requireMatch(gate, /From \*\*July 1, 2025\*\*.*aligned the Transparency Database content categories/is, 'Missing July 2025 Transparency Database schema alignment.');
requireMatch(gate, /remove personal data before database submission/i, 'Missing Article 24(5) personal-data removal safeguard.');
requireMatch(gate, /web form or API/i, 'Missing current Transparency Database submission-channel awareness.');
requireMatch(gate, /batches of up to 100/i, 'Missing current Transparency Database batch-API limit checkpoint.');
requireMatch(gate, /Do \*\*not\*\* import Article 19's 12-month transition/i, 'Missing Article 15 versus Article 19 transition distinction.');

requireMatch(gate, /Do not publish Apple, Google Play, or Xsolla order IDs/i, 'Missing payment-data isolation safeguard.');
requireMatch(gate, /Do not alter purchased Diamonds, valid one-time 30-Day VIP, or valid Lifetime VIP/i, 'Missing entitlement isolation safeguard.');
requireMatch(gate, /Transparency Database retry must not restart or extend the original one-time 30-Day VIP period/i, 'Missing database-retry entitlement isolation safeguard.');
requireMatch(gate, /stable event\/category identifiers/i, 'Missing reproducible event-data requirement.');
requireMatch(gate, /Version the moderation taxonomy/i, 'Missing moderation taxonomy versioning.');
requireMatch(gate, /went to full release on \*\*September 1, 2026\*\*/i, 'Missing TycoonX full-release invariant.');

requireMatch(community, /Where the EU Digital Services Act \("DSA"\).*applies/i, 'Canonical Community Policy lost conditional DSA safeguard.');
requireMatch(community, /electronic notice-and-action mechanism/i, 'Canonical Community Policy lost DSA notice-and-action commitment.');

for (const [name, text] of [['DSA transparency gate', gate], ['canonical Community Policy', community]]) {
  if (/TyconX/.test(text)) errors.push(`Displayed brand typo TyconX found in ${name}.`);
}

if (/\b(?:is|remains|currently|still)\s+(?:in\s+)?beta\b/i.test(gate)) {
  errors.push('Stale release-status wording found in DSA transparency gate.');
}

console.log('TycoonX DSA transparency reporting QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: Article 15/24 classification, 2024/2835 cycles and CSV/XLSX format, five-year version retention, Transparency Database alignment, privacy, and entitlement safeguards are present.');
}
