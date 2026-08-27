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
  'tycoonx-delete-account',
];
const REQUIRED_RELEASE_FILES = [
  'TYCOONX_APPLE_CUSTOM_EULA.md',
  'TYCOONX_APPLE_CUSTOM_EULA_RELEASE_CHECKLIST.md',
  'TYCOONX_APPLE_EU_OCTOBER_2026_TRANSITION_GATE.md',
  'TYCOONX_GOOGLE_PLAY_2026_PAYMENT_TRANSITION_GATE.md',
  'TYCOONX_GERMAN_LEGAL_NOTICE.md',
  'TYCOONX_GERMAN_LEGAL_NOTICE_RELEASE_CHECKLIST.md',
  'TYCOONX_PAYMENT_ENTITLEMENT_RELEASE_GATES.md',
  'TYCOONX_ACCOUNT_DELETION_RELEASE_GATE.md',
  'TYCOONX_AI_TRANSPARENCY_RELEASE_GATE.md',
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

const deletionForm = path.join(APP, 'tycoonx-delete-account', 'DeleteAccountForm.tsx');
if (!(await exists(deletionForm))) {
  fail('Missing TycoonX public account deletion request form.');
} else {
  const text = await readFile(deletionForm, 'utf8');
  if (!text.includes('TycoonX Account Deletion Request')) {
    fail('TycoonX deletion form no longer clearly identifies account-deletion requests.');
  }
  if (!text.includes('/api/contact')) {
    fail('TycoonX deletion form no longer submits through the configured request endpoint.');
  }
}

const aiGate = path.join(ROOT, 'TYCOONX_AI_TRANSPARENCY_RELEASE_GATE.md');
if (await exists(aiGate)) {
  const text = await readFile(aiGate, 'utf8');
  if (!text.includes('Article 50') || !text.includes('August 2, 2026')) {
    fail('TycoonX AI transparency gate is missing the current EU AI Act Article 50 applicability checkpoint.');
  }
  if (!/interact(?:ing|ion)? directly|directly with a natural person/i.test(text)) {
    fail('TycoonX AI transparency gate no longer clearly covers direct human-AI interaction disclosure.');
  }
  if (!/third-party AI/i.test(text)) {
    fail('TycoonX AI transparency gate no longer covers third-party AI data-sharing requirements.');
  }
}

const appleEuGate = path.join(ROOT, 'TYCOONX_APPLE_EU_OCTOBER_2026_TRANSITION_GATE.md');
if (await exists(appleEuGate)) {
  const text = await readFile(appleEuGate, 'utf8');
  if (!text.includes('October 1, 2026') || !text.includes('Attachment 14')) {
    fail('Apple EU transition gate is missing the October 1, 2026 Attachment 14 checkpoint.');
  }
  if (!text.includes('StoreKit External Purchases or Offers Entitlement')) {
    fail('Apple EU transition gate is missing the current alternative-payment entitlement checkpoint.');
  }
  if (!text.includes('ExternalPurchaseCustomLink API')) {
    fail('Apple EU transition gate is missing the ExternalPurchaseCustomLink API requirement.');
  }
  if (!text.includes('12 months')) {
    fail('Apple EU transition gate no longer records the 12-month payment-option commitment.');
  }
  if (!/parental gate/i.test(text)) {
    fail('Apple EU transition gate no longer covers child-safety parental-gate requirements.');
  }
}

const googlePaymentGate = path.join(ROOT, 'TYCOONX_GOOGLE_PLAY_2026_PAYMENT_TRANSITION_GATE.md');
if (await exists(googlePaymentGate)) {
  const text = await readFile(googlePaymentGate, 'utf8');
  if (!text.includes('June 30, 2026') || !/new install/i.test(text) || !/existing install/i.test(text)) {
    fail('Google Play 2026 payment gate is missing the June 30 install-cohort checkpoint.');
  }
  if (!text.includes('October 1, 2026') || !/United States external content links/i.test(text)) {
    fail('Google Play 2026 payment gate is missing the October 1 US external-link reporting/fee checkpoint.');
  }
  if (!/24-hour external-link attribution/i.test(text)) {
    fail('Google Play 2026 payment gate is missing the 24-hour external-link attribution checkpoint.');
  }
  if (!/Externaltransactions APIs/i.test(text)) {
    fail('Google Play 2026 payment gate is missing external transaction backend reporting.');
  }
  if (!text.includes('September 30, 2026') || !/Australia and Japan/i.test(text)) {
    fail('Google Play 2026 payment gate is missing the September 30 Australia/Japan rollout checkpoint.');
  }
  if (!/Xsolla transaction ID/i.test(text) || !/Google external transaction/i.test(text)) {
    fail('Google Play 2026 payment gate no longer requires Xsolla/Google/TycoonX reconciliation.');
  }
  if (!text.includes('PendingRefundReviewNotification') || !text.includes('orders.reviewrefund') || !/24-hour response window/i.test(text)) {
    fail('Google Play 2026 payment gate is missing the collaborative chargeback-review 24-hour safeguard.');
  }
  if (!/never fabricate/i.test(text) || !/excessive personal data/i.test(text)) {
    fail('Google Play chargeback gate is missing evidence-integrity/privacy safeguards.');
  }
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
