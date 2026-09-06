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
  'tycoonx-security',
];
const REQUIRED_RELEASE_FILES = [
  'TYCOONX_APPLE_CUSTOM_EULA.md',
  'TYCOONX_APPLE_CUSTOM_EULA_RELEASE_CHECKLIST.md',
  'TYCOONX_APPLE_EU_OCTOBER_2026_TRANSITION_GATE.md',
  'TYCOONX_APPLE_SOCIAL_MEDIA_AGE_RELEASE_GATE.md',
  'TYCOONX_GOOGLE_PLAY_2026_PAYMENT_TRANSITION_GATE.md',
  'TYCOONX_GOOGLE_PLAY_CHARGEBACK_REVIEW_RELEASE_GATE.md',
  'TYCOONX_GERMAN_LEGAL_NOTICE.md',
  'TYCOONX_GERMAN_LEGAL_NOTICE_RELEASE_CHECKLIST.md',
  'TYCOONX_PAYMENT_ENTITLEMENT_RELEASE_GATES.md',
  'TYCOONX_ACCOUNT_DELETION_RELEASE_GATE.md',
  'TYCOONX_AI_TRANSPARENCY_RELEASE_GATE.md',
  'TYCOONX_BFSG_ECOMMERCE_ACCESSIBILITY_RELEASE_GATE.md',
  'TYCOONX_EU_CYBER_RESILIENCE_ACT_2026_REPORTING_GATE.md',
  'TYCOONX_EU_PROMOTION_DARK_PATTERN_RELEASE_GATE.md',
  'TYCOONX_EU_VIRTUAL_CURRENCY_RELEASE_GATE.md',
  'TYCOONX_XSOLLA_REFUND_CHARGEBACK_RELEASE_GATE.md',
  'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md',
];

const CANONICAL_PUBLIC_FILES = [
  'tyconx-terms-of-service.md',
  'tyconx-purchase-refund-policy.md',
  'tyconx-privacy-policy.md',
  'tycoonx-community-standards.md',
  'TYCOONX_APPLE_CUSTOM_EULA.md',
  'TYCOONX_GERMAN_LEGAL_NOTICE.md',
];

const CRITICAL_ENGLISH_SURFACES = [
  {
    label: 'canonical Terms Markdown',
    path: path.join(ROOT, 'tyconx-terms-of-service.md'),
    required: [
      'mere crediting of purchased Diamonds',
      '14-day statutory withdrawal right',
      'purchased and unused Diamonds',
      'limited promotional sales windows',
      'commercial operating lifetime',
      'later price decrease does not automatically',
      'permanently discontinue',
    ],
  },
  {
    label: 'rendered Terms page',
    path: path.join(APP, 'tyconx-terms-of-service', 'page.tsx'),
    required: [
      'mere crediting of purchased Diamonds',
      '14-day statutory withdrawal right',
      'purchased and unused Diamonds',
      'limited promotional sales windows',
      'commercial operating lifetime',
      'later price decrease does not automatically',
      'permanently discontinue',
    ],
  },
  {
    label: 'canonical Purchases Markdown',
    path: path.join(ROOT, 'tyconx-purchase-refund-policy.md'),
    required: [
      'mere crediting of purchased Diamonds',
      '14-day statutory withdrawal right',
      'unused purchased Diamonds',
      'selected limited promotional sales windows',
      'real-world monetary price information',
      'later price decrease does not automatically',
      'electronic withdrawal function',
      'PENDING',
      'PURCHASED',
    ],
  },
  {
    label: 'rendered Purchases page',
    path: path.join(APP, 'tyconx-purchase-refund-policy', 'page.tsx'),
    required: [
      'mere crediting of purchased Diamonds',
      '14-day statutory withdrawal right',
      'unused purchased Diamonds',
      'selected limited promotional sales windows',
      'real-world monetary price information',
      'later price decrease does not automatically',
      'electronic withdrawal function',
      'PENDING',
      'PURCHASED',
    ],
  },
  {
    label: 'canonical Privacy Markdown',
    path: path.join(ROOT, 'tyconx-privacy-policy.md'),
    required: [
      'Merely using TycoonX is not treated as consent',
      'We do not sell personal data.',
      'Standard Contractual Clauses',
      'Private direct messages, private support communications, and non-public reports',
      'Deleting your TycoonX account is separate from requesting a payment refund.',
      'competent data-protection authority',
    ],
  },
  {
    label: 'rendered Privacy page',
    path: path.join(APP, 'tyconx-privacy-policy', 'page.tsx'),
    required: [
      'Merely using TycoonX is not treated as consent',
      'We do not sell personal data.',
      'Standard Contractual Clauses',
      'Private direct messages, private support communications, and non-public reports',
      'Deleting your TycoonX account is separate from requesting a payment refund.',
      'competent data-protection authority',
    ],
  },
  {
    label: 'canonical Community Standards Markdown',
    path: path.join(ROOT, 'tycoonx-community-standards.md'),
    required: [
      'notice-and-action mechanism',
      'Moderation decisions should target the relevant content or conduct',
      'A report does not automatically prove that content is illegal.',
      'Private direct messages, private support communications, and non-public reports are not licensed for public promotional use',
      'policy change does not retroactively make past lawful conduct a violation.',
      'child sexual abuse or exploitation',
    ],
  },
  {
    label: 'rendered Community Standards page',
    path: path.join(APP, 'tycoonx-community-standards', 'page.tsx'),
    required: [
      'notice-and-action mechanism',
      'Moderation decisions should target the relevant content or conduct',
      'A report does not automatically prove that content is illegal.',
      'Private direct messages, private support communications, and non-public reports are not licensed for public promotional use',
      'policy change does not retroactively make past lawful conduct a violation.',
      'child sexual abuse or exploitation',
    ],
  },
  {
    label: 'canonical German legal notice',
    path: path.join(ROOT, 'TYCOONX_GERMAN_LEGAL_NOTICE.md'),
    required: [
      'Angaben gemäß § 5 DDG',
      'Kontaktstelle nach dem Digital Services Act',
      'Deutsch und Englisch',
      'Die frühere EU-Plattform für Online-Streitbeilegung (ODR) wurde eingestellt.',
    ],
  },
  {
    label: 'rendered German legal notice',
    path: path.join(APP, 'tycoonx-impressum', 'page.tsx'),
    required: [
      'Angaben gemäß § 5 DDG',
      'Kontaktstelle nach dem Digital Services Act',
      'Deutsch und Englisch',
      'Die frühere EU-Plattform für Online-Streitbeilegung (ODR) wurde eingestellt.',
    ],
  },
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

for (const fileName of CANONICAL_PUBLIC_FILES) {
  const file = path.join(ROOT, fileName);
  if (!(await exists(file))) fail(`Missing canonical TycoonX public legal document: ${fileName}`);
}

for (const surface of CRITICAL_ENGLISH_SURFACES) {
  if (!(await exists(surface.path))) {
    fail(`Missing critical English legal surface: ${surface.label} (${rel(surface.path)})`);
    continue;
  }

  const text = await readFile(surface.path, 'utf8');
  for (const required of surface.required) {
    if (!text.includes(required)) {
      fail(`${surface.label} lost critical legal invariant: "${required}".`);
    }
  }
}

const supportPage = path.join(APP, 'tyconx-support', 'page.tsx');
if (await exists(supportPage)) {
  const text = await readFile(supportPage, 'utf8');
  if (!text.includes('href="/tycoonx-delete-account"')) {
    fail('TycoonX Support no longer exposes the dedicated public account-deletion route.');
  }
  if (!text.includes('href="/tycoonx-security"')) {
    fail('TycoonX Support no longer exposes the dedicated security/vulnerability reporting route.');
  }
}

const legalHubPage = path.join(LEGAL_ROOT, 'page.tsx');
if (await exists(legalHubPage)) {
  const text = await readFile(legalHubPage, 'utf8');
  if (!text.includes('href="/tycoonx-delete-account"')) {
    fail('TycoonX legal hub no longer links to account deletion.');
  }
  if (!text.includes('href="/tycoonx-security"')) {
    fail('TycoonX legal hub no longer links to security reporting.');
  }
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
    fail('Google Play 2026 payment gate is missing the collaborative chargeback-review cross-check.');
  }
}

const googleChargebackGate = path.join(ROOT, 'TYCOONX_GOOGLE_PLAY_CHARGEBACK_REVIEW_RELEASE_GATE.md');
if (await exists(googleChargebackGate)) {
  const text = await readFile(googleChargebackGate, 'utf8');
  if (!text.includes('PendingRefundReviewNotification') || !text.includes('orders.reviewrefund') || !/24 hours|24-hour/i.test(text)) {
    fail('Google Play chargeback gate is missing the current collaborative review workflow/deadline.');
  }
  if (!/first API call|first successful `ReviewRefund` submission/i.test(text)) {
    fail('Google Play chargeback gate is missing first-submission finality safeguards.');
  }
  if (!/not fabricate evidence|Never invent/i.test(text) || !/excessive personal data/i.test(text)) {
    fail('Google Play chargeback gate is missing evidence-integrity/privacy safeguards.');
  }
  if (!/must not automatically trigger account suspension or termination/i.test(text)) {
    fail('Google Play chargeback gate is missing the no-automatic-punishment safeguard.');
  }
}

const paymentEntitlementGate = path.join(ROOT, 'TYCOONX_PAYMENT_ENTITLEMENT_RELEASE_GATES.md');
if (await exists(paymentEntitlementGate)) {
  const text = await readFile(paymentEntitlementGate, 'utf8');
  const googleRecoveryRequirements = [
    'ProductDetails',
    'queryPurchasesAsync()',
    'obfuscatedAccountId',
    'obfuscatedProfileId',
  ];
  for (const required of googleRecoveryRequirements) {
    if (!text.includes(required)) {
      fail(`TycoonX payment gate lost Google Play recovery/attribution safeguard: "${required}".`);
    }
  }

  const germanWithdrawalRequirements = [
    'Vertrag widerrufen',
    'Widerruf bestätigen',
    'electronic communication method',
    'date and time of receipt',
  ];
  for (const required of germanWithdrawalRequirements) {
    if (!text.includes(required)) {
      fail(`TycoonX payment gate lost German BGB § 356a implementation safeguard: "${required}".`);
    }
  }

  if (!/Xsolla entity shown as the contracting party\/merchant/i.test(text)) {
    fail('TycoonX payment gate no longer requires transaction-specific Xsolla merchant evidence.');
  }
  if (!/dated release-evidence sample/i.test(text)) {
    fail('TycoonX payment gate no longer requires dated checkout/entitlement parity evidence.');
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

for (const fileName of CANONICAL_PUBLIC_FILES) {
  const file = path.join(ROOT, fileName);
  if (!(await exists(file))) continue;
  const text = await readFile(file, 'utf8');

  if (/TyconX/.test(text)) {
    fail(`Displayed brand typo "TyconX" found in canonical public legal document: ${fileName}`);
  }

  if (/\bbeta\b/i.test(text)) {
    fail(`Stale beta wording found in canonical public TycoonX legal document: ${fileName}`);
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
console.log(`Canonical public legal documents scanned: ${CANONICAL_PUBLIC_FILES.length}/${CANONICAL_PUBLIC_FILES.length}`);
console.log(`Critical English legal invariant surfaces: ${CRITICAL_ENGLISH_SURFACES.length}/${CRITICAL_ENGLISH_SURFACES.length}`);
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
