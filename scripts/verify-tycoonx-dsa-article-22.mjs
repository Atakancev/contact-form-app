import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');

const gate = read('TYCOONX_DSA_ARTICLE_22_TRUSTED_FLAGGER_RELEASE_GATE.md');
const article14 = read('TYCOONX_DSA_ARTICLE_14_TERMS_MODERATION_RELEASE_GATE.md');
const redress = read('TYCOONX_DSA_ARTICLE_20_21_REDRESS_RELEASE_GATE.md');
const misuse = read('TYCOONX_DSA_ARTICLE_23_MISUSE_RELEASE_GATE.md');
const authorityOrders = read('TYCOONX_DSA_INTERMEDIARY_LIABILITY_AUTHORITY_ORDERS_RELEASE_GATE.md');
const community = read('tycoonx-community-standards.md');
const terms = read('tyconx-terms-of-service.md');
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

// Article 19 scope must be explicit and must not erase hosting-service duties.
for (const needle of [
  'Article 19',
  'micro and small enterprises',
  'Recommendation 2003/361/EC',
  '12 months after loss of micro/small status',
  'very large online platform',
  'intermediary service, hosting service, online platform, or neither',
  'Do not use this scope assessment to weaken Article 16',
]) requireText(gate, needle, 'DSA Article 19 scope');

// Article 22 identity, expertise and route verification.
for (const needle of [
  'Article 22 trusted flaggers',
  'Digital Services Coordinator',
  'designated area of expertise',
  'Commission\'s current public trusted-flagger information',
  'Article 16 mechanism',
  'spoofed domains',
  'suspension, revocation',
]) requireText(gate, needle, 'Trusted-flagger verification');

// Priority must not be treated as automatic enforcement.
for (const needle of [
  'given priority and processed and decided upon without undue delay',
  'priority review and a decision without undue delay',
  'automatic deletion',
  'automatic account suspension',
  'automatic finding that content is illegal',
  'remain responsible for verifying whether the notified content is illegal',
]) requireText(gate, needle, 'Article 22 priority semantics');

// Article 16 notice quality and knowledge threshold must remain intact.
for (const needle of [
  'Article 16 quality requirements still matter',
  'sufficiently precise and adequately substantiated',
  'Article 16(3)',
  'without a detailed legal examination',
  'not an irrebuttable legal judgment',
]) requireText(gate, needle, 'Article 16 dependency');

// Authority-order separation.
for (const needle of [
  'Do not confuse a trusted flagger with an authority order',
  'Article 9 order',
  'Article 10 order',
  'Article 18 safety/criminal escalation',
  'not transformed into a court, police authority or regulator',
]) requireText(gate, needle, 'Authority separation');

// Human review, proportionality and redress.
for (const needle of [
  'Human review, proportionality and fundamental rights remain relevant',
  'Article 17 statement of reasons',
  'Article 20/21 redress',
  'diligent, objective and non-arbitrary',
  'narrower action',
]) requireText(gate, needle, 'Moderation proportionality');

// Article 22(6) poor-notice escalation is a key founder-protective rule.
for (const needle of [
  'Article 22(6)',
  'significant number of insufficiently precise, inaccurate or inadequately substantiated notices',
  'necessary explanations and supporting documents',
  'awarding Digital Services Coordinator',
  'one good-faith disagreement',
  'suspension or revocation',
]) requireText(gate, needle, 'Article 22(6) escalation');

// Current 2026 guideline state and German operational source.
for (const needle of [
  'July 2, 2026',
  'September 2, 2026',
  'draft/under development',
  'consultation closed July 10, 2026',
  'second half of 2026',
  'Bundesnetzagentur',
]) requireText(gate, needle, 'Current-law watch');

// Provider and payment-role separation.
for (const needle of [
  'Apple, Google Play and Xsolla do not become trusted flaggers automatically',
  'App Store policy notice',
  'Google Play policy notice',
  'Xsolla payment/fraud/refund notice',
  'separate lawful payment basis',
]) requireText(gate, needle, 'Provider separation');

// Paid-entitlement isolation.
for (const needle of [
  'purchased **Diamonds**',
  '**30-Day VIP**',
  '**Lifetime VIP**',
  'replay an Apple App Store, Google Play or Xsolla entitlement event',
  'create a chargeback or refund',
]) requireText(gate, needle, 'Entitlement isolation');

// Regression and evidence coverage.
for (const needle of [
  'Release and regression scenarios',
  'Fake trusted flagger',
  'Verified status, wrong expertise',
  'Micro/small exclusion currently applies',
  'Repeated low-quality trusted-flagger notices',
  'Duplicate notice delivery',
  'Intake outage',
  'Evidence pack',
  'Change triggers',
]) requireText(gate, needle, 'Regression/evidence coverage');

// Existing DSA gates must remain complementary.
requireRegex(article14, /Article 14\(4\)|proportionate/i, 'Article 14 dependency');
requireRegex(redress, /Article 20|complaint/i, 'Article 20/21 dependency');
requireRegex(misuse, /Article 23|manifestly unfounded/i, 'Article 23 dependency');
requireRegex(authorityOrders, /Article 9|authority order/i, 'Authority-order dependency');

// Current public legal docs must still preserve general moderation and paid-product distinctions.
for (const needle of [
  'automated rules or classifiers',
  'human review',
]) requireText(community, needle, 'Canonical Community Standards');

for (const needle of [
  'purchased Diamonds',
  '30-Day VIP',
  'Lifetime VIP',
  'Apple App Store',
  'Google Play',
  'Xsolla',
]) requireText(terms, needle, 'Canonical Terms');

// Localization and full-release invariants.
for (const needle of [
  '25/25',
  '100/100',
  'Exact next unfinished locale/document: None',
  'September 1, 2026',
]) requireText(progress, needle, 'Localization/release progress');

requireText(gate, 'September 1, 2026', 'Full-release invariant');
requireText(gate, 'TycoonX', 'Brand invariant');
forbidRegex(gate, /\bTyconX\b/, 'Article 22 gate brand');
forbidRegex(community, /\bTyconX\b/, 'Community Standards brand');
forbidRegex(terms, /\bTyconX\b/, 'Terms brand');
forbidRegex(gate, /TycoonX.{0,40}\bbeta\b|\bbeta\b.{0,40}TycoonX/i, 'Full-release wording');

if (failures.length) {
  console.error('TycoonX DSA Article 22 trusted-flagger verification FAILED');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX DSA Article 22 trusted-flagger verification PASS');
console.log('Checked Article 19 scope, trusted-flagger identity/expertise, priority without automatic removal, Article 16 notice quality, Articles 9/10/18 separation, Article 22(6) escalation, provider/payment boundaries, entitlement isolation, localization completion and full-release branding.');