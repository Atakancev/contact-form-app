import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function read(rel) {
  return fs.readFileSync(path.join(root, rel), 'utf8');
}

function assertIncludes(text, needle, label) {
  if (!text.includes(needle)) {
    throw new Error(`Missing ${label}: ${needle}`);
  }
}

function assertNotIncludes(text, needle, label) {
  if (text.includes(needle)) {
    throw new Error(`Forbidden ${label}: ${needle}`);
  }
}

const gate = read('TYCOONX_DSA_ARTICLE_18_CRIMINAL_OFFENCE_SAFETY_REPORTING_RELEASE_GATE.md');
const article16 = read('TYCOONX_DSA_ARTICLE_16_NOTICE_ACTION_RELEASE_GATE.md');
const community = read('tycoonx-community-standards.md');
const terms = read('tyconx-terms-of-service.md');
const purchases = read('tyconx-purchase-refund-policy.md');
const privacy = read('tyconx-privacy-policy.md');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const gateChecks = [
  ['Review date: September 4, 2026', 'review date'],
  ['Article 18 is a hosting-service duty, not an online-platform-only duty', 'hosting-service scope'],
  ['Do **not** use the DSA Article 19 micro/small-enterprise exemption to switch off Article 18', 'Article 19 boundary'],
  ['suspicion that a criminal offence involving a threat to the life or safety of a person or persons', 'Article 18 threshold'],
  ['has taken place;', 'past offence temporal scope'],
  ['is taking place;', 'current offence temporal scope'],
  ['is likely to take place.', 'future offence temporal scope'],
  ['incitement to terrorism, sexual abuse and exploitation of children, and trafficking in human beings', 'Commission examples'],
  ['March 18, 2026', 'Commission consultation summary date'],
  ['Awareness can arise from more than an Article 16 notice', 'awareness-source separation'],
  ['Prompt notification needs a dedicated urgent path', 'prompt-notification control'],
  ['must **promptly** inform the competent law-enforcement or judicial authorities', 'promptly requirement'],
  ['Identify the Member State or Member States correctly', 'Member State routing'],
  ['where the suspected offender resides or is located', 'suspected-offender Member State definition'],
  ['where the victim of the suspected offence resides or is located', 'victim Member State definition'],
  ['Reasonable-certainty fallback must be implemented', 'Article 18(2) fallback'],
  ['Europol', 'Europol fallback'],
  ['"All relevant information available" does not mean dump the whole account', 'data-minimization boundary'],
  ['Article 10', 'GDPR offence-data safeguard'],
  ['Preserve evidence without creating indefinite shadow retention', 'evidence retention'],
  ['Article 18 does not create a general monitoring duty', 'no general monitoring'],
  ['DSA Article 7', 'voluntary investigation protection'],
  ['Article 16 notice-and-action and Article 18 notification are separate tracks', 'Article 16/18 separation'],
  ['Article 18 is not an Article 9 authority order', 'Article 9 separation'],
  ['Terrorist Content Online procedures remain separate', 'TCO separation'],
  ['Child sexual abuse/exploitation cases need specialized handling', 'child-safety separation'],
  ['Do not automatically tip off a suspected offender', 'tip-off control'],
  ['Account compromise changes attribution, not the safety facts', 'account-compromise attribution'],
  ['Article 18 must not mutate payment or entitlement state by itself', 'payment isolation'],
  ['one-time, non-renewing 30-Day VIP', '30-Day VIP invariant'],
  ['selected genuine sales windows', 'Lifetime VIP sales-window invariant'],
  ['may never return', 'Lifetime VIP availability invariant'],
  ['Old app versions and provider outages cannot silently disable the safety route', 'continuity controls'],
  ['Business transfer or provider replacement requires safety-process continuity', 'business-transfer continuity'],
  ['Permanent service discontinuation does not erase open safety/legal duties', 'shutdown continuity'],
  ['Human review and automation controls', 'automation safeguards'],
  ['Minimum audit record', 'audit controls'],
  ['Minimum regression scenarios', 'regression tests'],
  ['Release blockers', 'release blockers'],
  ['Current legal reference checkpoint', 'source checkpoint'],
  ['does **not** change the current canonical legal documents\' material player-facing meaning', 'no canonical meaning change'],
];

for (const [needle, label] of gateChecks) {
  assertIncludes(gate, needle, label);
}

assertIncludes(article16, 'Criminal threats to life or safety require an Article 18 check', 'Article 16 crossover');
assertIncludes(article16, 'prompt notification to the appropriate law-enforcement or judicial authority', 'Article 16 Article 18 escalation');

const communityChecks = [
  ['credible threats, targeted harassment, bullying, stalking, or encouragement of violence', 'Community threat prohibition'],
  ['child sexual abuse or exploitation material, grooming, or sexual exploitation of minors', 'Community child-safety prohibition'],
  ['Immediate temporary action may be taken before a full review', 'Community immediate protective action'],
  ['mandatory reporting obligation', 'Community mandatory reporting preservation'],
  ['CK-Labs may take immediate protective action and preserve or report relevant evidence where required by law.', 'Community child-safety reporting'],
];

for (const [needle, label] of communityChecks) {
  assertIncludes(community, needle, label);
}

assertIncludes(terms, 'Purchased Diamonds do not expire solely because time passes.', 'Terms Diamond invariant');
assertIncludes(terms, 'one-time, non-renewing digital entitlement', 'Terms 30-Day VIP invariant');
assertIncludes(terms, 'limited promotional sales windows', 'Terms Lifetime VIP window invariant');
assertIncludes(terms, 'may choose never to offer Lifetime VIP again', 'Terms Lifetime VIP availability invariant');
assertIncludes(purchases, 'one-time, non-renewing entitlement', 'Purchases 30-Day VIP invariant');
assertIncludes(purchases, 'selected limited promotional sales windows', 'Purchases Lifetime VIP window invariant');
assertIncludes(privacy, '### 1.4 Security, Fraud, and Abuse Data', 'Privacy security data section');
assertIncludes(privacy, '## 8. Data Retention', 'Privacy retention section');
assertIncludes(privacy, '## 9. Your Privacy Rights', 'Privacy rights section');
assertIncludes(privacy, '## 12. Security', 'Privacy security section');

assertIncludes(progress, 'exists for all **25/25** target locales', 'localized hub completion');
assertIncludes(progress, '**100/100 localized full documents are currently confirmed current**', 'localized full-document completion');
assertIncludes(progress, '**Exact next unfinished locale/document: None.', 'no unfinished locale/document');
assertIncludes(progress, 'September 1, 2026', 'full-release invariant');

for (const [label, text] of [
  ['Article 18 gate', gate],
  ['Article 16 gate', article16],
  ['canonical Community Standards', community],
  ['canonical Terms', terms],
  ['canonical Purchases policy', purchases],
  ['canonical Privacy Policy', privacy],
]) {
  assertNotIncludes(text, 'TyconX', `${label} displayed brand typo`);
  assertNotIncludes(text, 'TycoonX beta', `${label} stale live beta wording`);
}

console.log('TycoonX DSA Article 18 criminal-offence safety reporting verification passed.');
