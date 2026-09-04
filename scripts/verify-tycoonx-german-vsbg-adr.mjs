#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();

async function load(relativePath) {
  return readFile(path.join(ROOT, relativePath), 'utf8');
}

const checklistPath = 'TYCOONX_GERMAN_LEGAL_NOTICE_RELEASE_CHECKLIST.md';
const noticePath = 'TYCOONX_GERMAN_LEGAL_NOTICE.md';
const termsPath = 'tyconx-terms-of-service.md';
const progressPath = 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md';

const [checklist, notice, terms, progress] = await Promise.all([
  load(checklistPath),
  load(noticePath),
  load(termsPath),
  load(progressPath),
]);

const errors = [];

function requireText(source, label, values) {
  for (const value of values) {
    if (!source.includes(value)) {
      errors.push(`${label} is missing required invariant: ${JSON.stringify(value)}`);
    }
  }
}

requireText(checklist, checklistPath, [
  'Last reviewed: September 4, 2026',
  'German VSBG §§ 36 and 37 impose different duties',
  'ten or fewer persons on 31 December of the preceding year',
  'headcount, not full-time-equivalent working hours',
  'does **not** remove § 36(1) no. 2',
  'The § 36(3) headcount exemption does **not** exempt CK-Labs from § 37.',
  'current postal address and website',
  'provide that information in **text form**',
  'Universalschlichtungsstelle des Bundes',
  'Straßburger Str. 8, 77694 Kehl, Germany',
  'https://www.universalschlichtungsstelle.de',
  'An ADR request, a § 37 notice, or a consumer’s decision to contact a conciliation body is not by itself evidence of fraud',
  'one-time non-renewing 30-Day VIP entitlement',
  'reopen a closed Lifetime VIP sales window',
  'Directive (EU) **2025/2647**',
  'January 19, 2026',
  'March 20, 2028',
  'September 20, 2028',
  '20 working days',
  '30 working days',
  'Consumer Redress Portal',
  'not** the former EU ODR platform',
]);

requireText(notice, noticePath, [
  '## Verbraucherstreitigkeiten',
  '§ 37 VSBG',
  'in Textform',
  'Die frühere EU-Plattform für Online-Streitbeilegung (ODR) wurde eingestellt.',
]);

requireText(terms, termsPath, [
  '## 34. Consumer dispute resolution',
  '§ 37 VSBG',
  'Nothing in these Terms creates a voluntary general commitment to participate',
  'These Terms do not impose mandatory arbitration',
  'Purchased Diamonds do not expire solely because time passes.',
  'one-time, non-renewing digital entitlement',
  'limited promotional sales windows',
  'Mandatory consumer remedies remain unaffected.',
]);

requireText(progress, progressPath, [
  '25/25',
  '100/100',
  'Exact next unfinished locale/document: None.',
  'September 1, 2026',
]);

const forbiddenBrand = ['Ty', 'conX'].join('');
for (const [label, source] of [
  [checklistPath, checklist],
  [noticePath, notice],
  [termsPath, terms],
]) {
  if (source.includes(forbiddenBrand)) {
    errors.push(`${label} contains the legacy displayed game-brand spelling.`);
  }
}

for (const [label, source] of [
  [noticePath, notice],
  [termsPath, terms],
]) {
  if (/\bTycoonX\b.{0,80}\bbeta\b|\bbeta\b.{0,80}\bTycoonX\b/is.test(source)) {
    errors.push(`${label} contains stale live-service beta wording.`);
  }
}

if (errors.length > 0) {
  console.error('TycoonX German VSBG / EU ADR QA FAILED');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('TycoonX German VSBG / EU ADR QA PASS');
  console.log('Current VSBG §§ 36/37 workflow, 2028 EU ADR transition, product isolation, release state, and localization completion are guarded.');
}
