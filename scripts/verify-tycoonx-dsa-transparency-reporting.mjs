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
requireMatch(gate, /end of February/i, 'Missing current annual publication-cycle checkpoint.');
requireMatch(gate, /first harmonised reports were published in \*\*February 2026\*\*/i, 'Missing February 2026 first harmonised-report checkpoint.');
requireMatch(gate, /do not backdate or fabricate a report/i, 'Missing missed-report remediation safeguard.');

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
requireMatch(gate, /Article 24\(5\) Transparency Database/i, 'Missing separation from Article 24(5) Transparency Database duties.');
requireMatch(gate, /Do \*\*not\*\* import Article 19's 12-month transition/i, 'Missing Article 15 versus Article 19 transition distinction.');

requireMatch(gate, /Do not publish Apple, Google Play, or Xsolla order IDs/i, 'Missing payment-data isolation safeguard.');
requireMatch(gate, /Do not alter purchased Diamonds, valid one-time 30-Day VIP, or valid Lifetime VIP/i, 'Missing entitlement isolation safeguard.');
requireMatch(gate, /stable event\/category identifiers/i, 'Missing reproducible event-data requirement.');
requireMatch(gate, /Version the moderation taxonomy/i, 'Missing moderation taxonomy versioning.');
requireMatch(gate, /September 1, 2026/i, 'Missing TycoonX full-release invariant.');

requireMatch(community, /Where the EU Digital Services Act \("DSA"\).*applies/i, 'Canonical Community Policy lost conditional DSA safeguard.');
requireMatch(community, /electronic notice-and-action mechanism/i, 'Canonical Community Policy lost DSA notice-and-action commitment.');

for (const [name, text] of [['DSA transparency gate', gate], ['canonical Community Policy', community]]) {
  if (/TyconX/.test(text)) errors.push(`Displayed brand typo TyconX found in ${name}.`);
}

if (/\bbeta\b/i.test(gate)) errors.push('Stale beta wording found in DSA transparency gate.');

console.log('TycoonX DSA transparency reporting QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: Article 15/24 reporting classification, harmonised templates, micro/small exemption, privacy, and entitlement safeguards are present.');
}
