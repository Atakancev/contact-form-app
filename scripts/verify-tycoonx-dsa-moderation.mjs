#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_COMMUNITY_MODERATION_RELEASE_CHECKLIST.md');
const communityPath = path.join(ROOT, 'tycoonx-community-standards.md');
const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

const gate = await readFile(gatePath, 'utf8');
const community = await readFile(communityPath, 'utf8');

// DSA Article 16 notice-and-action essentials.
requireMatch(gate, /Article 16 notice-and-action mechanism/i, 'Missing DSA Article 16 gate.');
requireMatch(gate, /sufficiently substantiated explanation/i, 'Missing Article 16 substantiated-explanation field.');
requireMatch(gate, /exact electronic location/i, 'Missing Article 16 exact-location field.');
requireMatch(gate, /good-faith statement/i, 'Missing Article 16 good-faith statement field.');
requireMatch(gate, /without undue delay/i, 'Missing DSA without-undue-delay handling requirement.');

// DSA Article 17 exact reason requirements.
requireMatch(gate, /Article 17 statement of reasons/i, 'Missing DSA Article 17 statement-of-reasons gate.');
requireMatch(gate, /at the latest when the restriction is imposed/i, 'Missing Article 17 timing requirement.');
requireMatch(gate, /territorial scope and duration/i, 'Missing Article 17 scope/duration field.');
requireMatch(gate, /facts and circumstances relied on/i, 'Missing Article 17 facts/circumstances field.');
requireMatch(gate, /strictly necessary/i, 'Missing strict-necessity protection for notifier identity.');
requireMatch(gate, /automated means were used/i, 'Missing Article 17 automated-means disclosure.');
requireMatch(gate, /legal ground relied on/i, 'Missing Article 17 illegal-content legal-ground field.');
requireMatch(gate, /specific contractual\/policy ground/i, 'Missing Article 17 Terms/policy ground field.');
requireMatch(gate, /certified out-of-court dispute settlement/i, 'Missing Article 17 redress information.');
requireMatch(gate, /generic reason such as `policy violation`/i, 'Missing generic-reason rejection safeguard.');

// DSA Article 18 emergency escalation.
requireMatch(gate, /Article 18 serious-criminal-offence escalation gate/i, 'Missing DSA Article 18 emergency gate.');
requireMatch(gate, /threat to the life or safety of a person/i, 'Missing Article 18 threshold.');
requireMatch(gate, /law-enforcement or judicial authority/i, 'Missing Article 18 authority escalation.');
requireMatch(gate, /emergency escalation route/i, 'Missing operational Article 18 escalation path.');
requireMatch(gate, /Digital Services Coordinator at the Bundesnetzagentur/i, 'Missing current German DSA coordinator reference.');
requireMatch(gate, /not a blanket permission to disclose unrelated account data/i, 'Missing Article 18 privacy/data-minimization safeguard.');

// Article 19 / Article 24(5) classification and database safeguards.
requireMatch(gate, /Article 24\(5\) Transparency Database gate/i, 'Missing DSA Transparency Database gate.');
requireMatch(gate, /Article 17 can apply to a hosting service/i, 'Missing hosting-service vs online-platform distinction.');
requireMatch(gate, /micro or small enterprise/i, 'Missing Article 19 micro/small analysis.');
requireMatch(gate, /12-month transition/i, 'Missing Article 19 post-status-loss transition checkpoint.');
requireMatch(gate, /without undue delay.*Article 24\(5\)/is, 'Missing Article 24(5) submission timing rule.');
requireMatch(gate, /strip all personal data before database submission/i, 'Missing Article 24(5) personal-data removal requirement.');
requireMatch(gate, /do not copy user-specific redress options into the public database/i, 'Missing database redress-field separation.');
requireMatch(gate, /API or Commission webform/i, 'Missing Transparency Database submission-method evidence.');

// Canonical public-policy guardrails remain present without overpromising.
requireMatch(community, /Where the EU Digital Services Act \("DSA"\).*applies/i, 'Community Policy lost conditional DSA applicability safeguard.');
requireMatch(community, /electronic notice-and-action mechanism/i, 'Community Policy lost DSA notice-and-action commitment.');
requireMatch(community, /statement of reasons/i, 'Community Policy lost DSA statement-of-reasons safeguard.');
requireMatch(community, /automated rules or classifiers/i, 'Community Policy lost moderation automation disclosure.');
requireMatch(community, /preserve or report relevant evidence where required by law/i, 'Community Policy lost serious-safety evidence/reporting safeguard.');

for (const [name, text] of [['DSA moderation gate', gate], ['canonical Community Policy', community]]) {
  if (/TyconX/.test(text)) errors.push(`Displayed brand typo TyconX found in ${name}.`);
  if (/\bbeta\b/i.test(text)) errors.push(`Stale beta wording found in ${name}.`);
}

console.log('TycoonX DSA moderation QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: Article 16/17/18, Article 19 classification and Article 24(5) Transparency Database safeguards are present.');
}
