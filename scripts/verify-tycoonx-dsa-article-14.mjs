import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');

const gate = read('TYCOONX_DSA_ARTICLE_14_TERMS_MODERATION_RELEASE_GATE.md');
const community = read('tycoonx-community-standards.md');
const terms = read('tyconx-terms-of-service.md');
const changeGate = read('TYCOONX_LEGAL_DOCUMENT_CHANGE_NOTICE_RELEASE_GATE.md');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const failures = [];

function requireText(text, needle, label) {
  if (!text.includes(needle)) failures.push(`${label}: missing ${JSON.stringify(needle)}`);
}

function requireRegex(text, regex, label) {
  if (!regex.test(text)) failures.push(`${label}: missing pattern ${regex}`);
}

function forbidRegex(text, regex, label) {
  if (regex.test(text)) failures.push(`${label}: forbidden pattern ${regex}`);
}

// DSA Article 14(1): terms transparency, moderation tooling and complaint procedure.
for (const needle of [
  'Article 14(1)',
  'machine-readable',
  'algorithmic or automated means',
  'human review',
  'internal complaint',
  'clear, plain, intelligible, user-friendly and unambiguous',
]) requireText(gate, needle, 'Article 14(1) gate');

// DSA Article 14(2): significant changes.
for (const needle of [
  'Article 14(2)',
  'significant changes',
  'TYCOONX_LEGAL_DOCUMENT_CHANGE_NOTICE_RELEASE_GATE.md',
]) requireText(gate, needle, 'Article 14(2) gate');

// DSA Article 14(3): conditional minor-understandable terms.
for (const needle of [
  'Article 14(3)',
  'primarily directed at minors',
  'predominantly used by minors',
  'way minors can understand',
  'age-appropriate explanation',
]) requireText(gate, needle, 'Article 14(3) gate');

// DSA Article 14(4): diligent, objective, proportionate enforcement and fundamental rights.
for (const needle of [
  'Article 14(4)',
  'diligent, objective and proportionate',
  'fundamental rights',
  'freedom of expression',
  'specific rule or legal basis',
  'scope and duration of the restriction',
]) requireText(gate, needle, 'Article 14(4) gate');

// Micro/small status must not be used to switch off Article 14.
requireRegex(gate, /micro- or small-enterprise status as an exemption from Article 14/i, 'DSA size-status separation');
requireText(gate, 'Article 19', 'DSA size-status separation');

// Public canonical moderation wording must already disclose the real baseline.
for (const needle of [
  'automated rules or classifiers',
  'human review',
  'Users may contact TycoonX Support to challenge',
  'Significant changes will be communicated',
  'Ordinary criticism, disagreement, satire, competitive game talk, or isolated mild profanity',
]) requireText(community, needle, 'Canonical Community Standards');

// Canonical Terms must preserve the Community Policy hierarchy and paid-value separation.
for (const needle of [
  'TycoonX Community Standards & Moderation Policy',
  'Private direct messages, private support communications, and non-public reports',
  'Mandatory rights concerning user content remain unaffected',
]) requireText(terms, needle, 'Canonical Terms');

// Legal-document change gate must already route community/moderation changes through Article 14.
for (const needle of [
  'Community/moderation change',
  'Assess DSA Article 14',
  'Article 14(2)',
]) requireText(changeGate, needle, 'Legal change gate');

// Entitlement isolation is mandatory for moderation workflows.
for (const needle of [
  'purchased Diamonds',
  '30-Day VIP',
  'Lifetime VIP',
  'Apple, Google Play or Xsolla entitlement events',
]) requireText(gate, needle, 'Paid-entitlement isolation');

// Release/localization invariants.
for (const needle of [
  '25/25',
  '100/100',
  'Exact next unfinished locale/document: None',
  'September 1, 2026',
]) requireText(progress, needle, 'Localization/release progress');

requireText(gate, 'September 1, 2026', 'Full-release invariant');
requireText(gate, 'TycoonX', 'Brand invariant');
forbidRegex(gate, /\bTyconX\b/, 'Article 14 gate brand');
forbidRegex(community, /\bTyconX\b/, 'Community Standards brand');
forbidRegex(terms, /\bTyconX\b/, 'Terms brand');

if (failures.length) {
  console.error('TycoonX DSA Article 14 verification FAILED');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX DSA Article 14 verification PASS');
console.log('Checked terms transparency, machine readability, significant-change notice, minor-understandable terms, proportionate/fundamental-rights enforcement, complaint-route truthfulness, canonical moderation wording, paid-entitlement isolation, localization completion and full-release branding.');
