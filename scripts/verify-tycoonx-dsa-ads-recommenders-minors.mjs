import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');

const gate = read('TYCOONX_DSA_ADVERTISING_RECOMMENDER_MINORS_RELEASE_GATE.md');
const article14 = read('TYCOONX_DSA_ARTICLE_14_TERMS_MODERATION_RELEASE_GATE.md');
const community = read('tycoonx-community-standards.md');
const terms = read('tyconx-terms-of-service.md');
const deviceTracking = read('TYCOONX_EU_GERMAN_DEVICE_STORAGE_TRACKING_CONSENT_RELEASE_GATE.md');
const youth = read('TYCOONX_GERMAN_YOUTH_PROTECTION_RELEASE_GATE.md');
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

// DSA Section 3 scope and Article 19 exclusion must be explicit and evidence-based.
for (const needle of [
  'Article 19',
  'micro or small enterprises',
  'Recommendation 2003/361/EC',
  'very large online platform',
  'feature as an intermediary service, hosting service, online platform, or neither',
]) requireText(gate, needle, 'DSA scope gate');

// DSA definitions must distinguish paid platform ads from generic CK-Labs promotions.
for (const needle of [
  'Article 3(r)',
  'against remuneration specifically for promoting that information',
  'Diamond bundle card',
  'Lifetime VIP sales-window announcement',
  'not automatically an Article 26 advertisement',
]) requireText(gate, needle, 'DSA advertisement definition');

// Article 26 advertising transparency and user commercial-communication declaration.
for (const needle of [
  'Article 26(1)',
  'that the information is an advertisement',
  'on whose behalf',
  'who paid for',
  'main parameters',
  'Article 26(2)',
  'commercial communication',
  'Article 26(3)',
  'special categories of personal data',
]) requireText(gate, needle, 'DSA Article 26');

// Article 27 recommender transparency must be conditional and tied to canonical/localized updates.
for (const needle of [
  'Article 3(s)',
  'Article 27',
  'plain and intelligible language',
  'criteria most significant',
  'relative importance',
  'modify or influence those parameters',
  'canonical English terms/conditions',
  'update all affected localized legal documents',
]) requireText(gate, needle, 'DSA Article 27');

// Article 28 minor protection and profiling-ad prohibition.
for (const needle of [
  'Article 28(1)',
  'high level of privacy, safety, and security',
  'July 14, 2025',
  'Article 28(2)',
  'aware with reasonable certainty that the recipient is a minor',
  'Article 28(3)',
  'does not oblige online platforms to process additional personal data',
]) requireText(gate, needle, 'DSA Article 28');

// Platform-specific ad safety must remain separate from DSA/GDPR/TDDDG scope.
for (const needle of [
  'Apple App Store ad-policy parity',
  'App Review Guidelines',
  'ATT permission',
  'Google Play ad and Families-policy parity',
  'interest-based advertising or remarketing',
  'children or users of unknown age',
  'target-audience declarations',
]) requireText(gate, needle, 'Apple/Google policy parity');

// Payment-provider and entitlement boundaries.
for (const needle of [
  'Xsolla and CK-Labs commercial messages are separate',
  'purchased Diamonds',
  '30-Day VIP',
  'Lifetime VIP',
  'Apple, Google Play, or Xsolla purchase entitlements',
]) requireText(gate, needle, 'Commercial/payment separation');

// Existing public moderation wording must remain truthful and non-overstated.
for (const needle of [
  'automated rules or classifiers',
  'human review',
  'age and minor-safety controls',
]) requireText(community, needle, 'Canonical Community Standards');

// Existing Terms must preserve current purchase distinctions and mandatory rights.
for (const needle of [
  '30-Day VIP',
  'Lifetime VIP',
  'purchased Diamonds',
  'Apple App Store',
  'Google Play',
  'Xsolla',
]) requireText(terms, needle, 'Canonical Terms');

// Existing gates should remain complementary rather than contradicted.
for (const needle of [
  'Article 14(3)',
  'Article 14(4)',
]) requireText(article14, needle, 'Article 14 dependency');

requireRegex(deviceTracking, /AppTrackingTransparency|ATT/i, 'Device-tracking dependency');
requireRegex(youth, /minor|child|youth/i, 'Youth-protection dependency');

// Regression/evidence completeness.
for (const needle of [
  'Release and regression scenarios',
  'Paid third-party placement',
  'Chronological community feed',
  'Ranked community feed',
  'Minor known with reasonable certainty',
  'Vendor outage',
  'Micro/small status loss',
  'Evidence pack',
  'Change triggers',
]) requireText(gate, needle, 'Release evidence');

// Localization and full-release invariants.
for (const needle of [
  '25/25',
  '100/100',
  'Exact next unfinished locale/document: None',
  'September 1, 2026',
]) requireText(progress, needle, 'Localization/release progress');

requireText(gate, 'September 1, 2026', 'Full-release invariant');
requireText(gate, 'TycoonX', 'Brand invariant');
forbidRegex(gate, /\bTyconX\b/, 'DSA ads/recommender gate brand');
forbidRegex(community, /\bTyconX\b/, 'Community Standards brand');
forbidRegex(terms, /\bTyconX\b/, 'Terms brand');

// Do not permit stale live-service beta wording in the new gate.
forbidRegex(gate, /TycoonX.{0,40}\bbeta\b|\bbeta\b.{0,40}TycoonX/i, 'Full-release wording');

if (failures.length) {
  console.error('TycoonX DSA ads/recommender/minors verification FAILED');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX DSA ads/recommender/minors verification PASS');
console.log('Checked Article 19 scope, Article 26 ad transparency and special-category restrictions, Article 27 recommender transparency, Article 28 minor protections, Apple/Google policy separation, Xsolla/payment boundaries, entitlement isolation, localization completion and full-release branding.');