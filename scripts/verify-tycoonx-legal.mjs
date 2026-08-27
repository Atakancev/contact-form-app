#!/usr/bin/env node

import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const APP = path.join(ROOT, 'app');
const LEGAL_ROOT = path.join(APP, 'tycoonx-legal');

const LOCALES = [
  'tr', 'de', 'es', 'es_MX', 'fr', 'fr_CA', 'it', 'pt', 'pt_BR', 'ru',
  'ja', 'ko', 'zh', 'zh_Hans', 'zh_Hant', 'ar', 'nl', 'sv', 'nb', 'pl',
  'th', 'vi', 'uk', 'hi', 'id',
];

const DOCS = ['terms', 'purchases', 'privacy', 'community'];
const REQUIRED_PUBLIC_ROUTES = [
  'tyconx-terms-of-service',
  'tyconx-purchase-refund-policy',
  'tyconx-privacy-policy',
  'tycoonx-community-standards',
  'tyconx-support',
  'tycoonx-eula',
  'tycoonx-impressum',
];
const REQUIRED_RELEASE_FILES = [
  'TYCOONX_APPLE_CUSTOM_EULA.md',
  'TYCOONX_APPLE_CUSTOM_EULA_RELEASE_CHECKLIST.md',
  'TYCOONX_GERMAN_LEGAL_NOTICE.md',
  'TYCOONX_GERMAN_LEGAL_NOTICE_RELEASE_CHECKLIST.md',
  'TYCOONX_PAYMENT_ENTITLEMENT_RELEASE_GATES.md',
  'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md',
];

const errors = [];
const warnings = [];

async function exists(target) {
  try {
    await stat(target);
    return true;
  } catch {
    return false;
  }
}

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...await walk(full));
    else out.push(full);
  }
  return out;
}

function rel(file) {
  return path.relative(ROOT, file).replaceAll(path.sep, '/');
}

function fail(message) {
  errors.push(message);
}

function warn(message) {
  warnings.push(message);
}

for (const locale of LOCALES) {
  const hub = path.join(LEGAL_ROOT, locale, 'page.tsx');
  if (!(await exists(hub))) fail(`Missing localized hub: ${rel(hub)}`);

  for (const doc of DOCS) {
    const page = path.join(LEGAL_ROOT, locale, doc, 'page.tsx');
    if (!(await exists(page))) fail(`Missing localized document: ${rel(page)}`);
  }
}

const expectedDocs = LOCALES.length * DOCS.length;
let presentDocs = 0;
for (const locale of LOCALES) {
  for (const doc of DOCS) {
    if (await exists(path.join(LEGAL_ROOT, locale, doc, 'page.tsx'))) presentDocs += 1;
  }
}
if (presentDocs !== expectedDocs) {
  fail(`Localized document count is ${presentDocs}/${expectedDocs}, expected ${expectedDocs}/${expectedDocs}.`);
}

for (const route of REQUIRED_PUBLIC_ROUTES) {
  const page = path.join(APP, route, 'page.tsx');
  if (!(await exists(page))) fail(`Missing public TycoonX legal/support route: ${rel(page)}`);
}

for (const fileName of REQUIRED_RELEASE_FILES) {
  const file = path.join(ROOT, fileName);
  if (!(await exists(file))) fail(`Missing TycoonX legal release source/checklist: ${fileName}`);
}

const formatter = path.join(LEGAL_ROOT, 'LegalInlineFormatting.tsx');
const layout = path.join(LEGAL_ROOT, 'layout.tsx');
if (!(await exists(formatter))) fail('Missing shared legal inline formatter. Raw **...** markers may leak to users.');
if (!(await exists(layout))) fail('Missing TycoonX legal layout. Shared legal formatting may not apply to localized pages.');

if (await exists(formatter)) {
  const text = await readFile(formatter, 'utf8');
  if (!text.includes('BOLD_PATTERN') || !text.includes('**')) {
    fail('LegalInlineFormatting.tsx no longer appears to support **...** emphasis markers.');
  }
}

if (await exists(layout)) {
  const text = await readFile(layout, 'utf8');
  if (!text.includes('LegalInlineFormatting')) {
    fail('app/tycoonx-legal/layout.tsx does not mount LegalInlineFormatting.');
  }
  if (!text.includes('data-tycoonx-legal-root')) {
    fail('app/tycoonx-legal/layout.tsx is missing the shared legal root marker.');
  }
}

const arPages = [
  path.join(LEGAL_ROOT, 'ar', 'page.tsx'),
  ...DOCS.map((doc) => path.join(LEGAL_ROOT, 'ar', doc, 'page.tsx')),
];
for (const file of arPages) {
  if (!(await exists(file))) continue;
  const text = await readFile(file, 'utf8');
  if (!/dir=["']rtl["']/.test(text)) {
    fail(`Arabic legal page is missing explicit RTL direction: ${rel(file)}`);
  }
}

const appFiles = (await walk(APP)).filter((file) => {
  const r = rel(file).toLowerCase();
  return (r.includes('tycoonx') || r.includes('tyconx')) && /\.(tsx|ts|jsx|js|md)$/.test(r);
});

for (const file of appFiles) {
  const text = await readFile(file, 'utf8');

  if (/TyconX/.test(text)) {
    fail(`Displayed brand typo "TyconX" found in ${rel(file)}`);
  }

  if (/\bbeta\b/i.test(text)) {
    fail(`Stale beta wording found in TycoonX player-facing/legal source: ${rel(file)}`);
  }

  const markdownBold = text.match(/\*\*[^*\n]+?\*\*/g) ?? [];
  if (markdownBold.length > 0 && !rel(file).startsWith('app/tycoonx-legal/')) {
    warn(`${markdownBold.length} Markdown emphasis marker(s) found outside the localized legal tree: ${rel(file)}. Verify the page renders Markdown instead of showing literal **.`);
  }
}

const localizedFiles = (await walk(LEGAL_ROOT)).filter((file) => /page\.tsx$/.test(file));
let markerCount = 0;
for (const file of localizedFiles) {
  const text = await readFile(file, 'utf8');
  markerCount += (text.match(/\*\*[^*\n]+?\*\*/g) ?? []).length;
}

console.log(`TycoonX legal QA`);
console.log(`Localized full documents: ${presentDocs}/${expectedDocs}`);
console.log(`Localized hubs: ${LOCALES.length}/${LOCALES.length}`);
console.log(`Required public legal/support routes: ${REQUIRED_PUBLIC_ROUTES.length}/${REQUIRED_PUBLIC_ROUTES.length}`);
console.log(`Required legal release files: ${REQUIRED_RELEASE_FILES.length}/${REQUIRED_RELEASE_FILES.length}`);
console.log(`Localized **...** emphasis markers covered by shared formatter: ${markerCount}`);

if (warnings.length > 0) {
  console.log('\nWarnings:');
  for (const item of warnings) console.log(`- ${item}`);
}

if (errors.length > 0) {
  console.error('\nFAILED:');
  for (const item of errors) console.error(`- ${item}`);
  process.exitCode = 1;
} else {
  console.log('\nPASS: no TycoonX legal regression blockers found.');
}
