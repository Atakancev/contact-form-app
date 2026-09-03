import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), 'utf8');

const requireText = (text, needle, context) => {
  if (!text.includes(needle)) {
    throw new Error(`${context}: missing required text: ${needle}`);
  }
};

const requireRegex = (text, regex, context) => {
  if (!regex.test(text)) {
    throw new Error(`${context}: missing required pattern: ${regex}`);
  }
};

const gate = read('TYCOONX_EU_AI_ACT_NCII_CSAM_PROHIBITION_RELEASE_GATE.md');
const aiTransparency = read('TYCOONX_AI_TRANSPARENCY_RELEASE_GATE.md');
const terms = read('tyconx-terms-of-service.md');
const purchases = read('tyconx-purchase-refund-policy.md');
const privacy = read('tyconx-privacy-policy.md');
const community = read('tycoonx-community-standards.md');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

for (const needle of [
  'Regulation (EU) **2026/1744**',
  '27 July 2026',
  '2 December 2026',
  'Article 5(1)(ba)',
  'Article 5(1)(bb)',
  'Article 5(1a)',
  'Article 5(1b)',
  'non-consensual intimate material',
  'child sexual abuse material',
  'freely given, specific, informed, unambiguous, and explicit consent',
  'reasonably foreseeable and reproducible outcome without significant technical modification',
  'reasonable and adequate technical safety measures and other safeguards',
  'Accidental generation',
  'Correct observed or reported misuse',
  'Private communications and privacy',
  'Account compromise and false positives',
  'Payment and entitlement isolation',
  'Diamonds',
  '30-Day VIP',
  'Lifetime VIP',
  'Apple',
  'Google Play',
  'Xsolla',
  'September 1, 2026',
]) {
  requireText(gate, needle, 'NCII/CSAM prohibition gate');
}

for (const needle of [
  'no `nudify`, `undress`, `remove clothes`, sexual deepfake, or equivalent feature',
  'There is no product, promotion, artistic-feature, role-play, fictional-character, or `AI only` exception',
  'do not use an overbroad rule',
  'do not falsely accuse a player of deliberate sexual-content abuse solely because a classifier or model produced an unexpected result',
  'A single keyword blacklist is not automatically sufficient.',
  'does not itself authorize indiscriminate scanning of every private TycoonX communication',
  'A prohibited request or output appearing under an account is not automatically proof that the legitimate account owner intentionally created it.',
  'does **not by itself** change payment state',
  'may be withdrawn from future sale, may never return, and creates no expectation of continuous future sales availability',
  'disclosure cannot legalize an AI practice that Article 5 prohibits',
]) {
  requireText(gate, needle, 'founder-protective implementation safeguard');
}

requireRegex(
  gate,
  /Article 5\(1\)\(ba\)[\s\S]{0,1800}identifiable natural person[\s\S]{0,1800}explicit consent/i,
  'NCII consent boundary',
);
requireRegex(
  gate,
  /Article 5\(1a\)[\s\S]{0,2500}intended purpose[\s\S]{0,2500}reasonably foreseeable and reproducible/i,
  'provider-side Article 5(1a) test',
);
requireRegex(
  gate,
  /Payment and entitlement isolation[\s\S]{0,2200}Diamonds[\s\S]{0,1000}30-Day VIP[\s\S]{0,1000}Lifetime VIP/i,
  'paid-entitlement isolation',
);
requireRegex(
  gate,
  /TycoonX went to full release on \*\*September 1, 2026\*\*/i,
  'live-release wording',
);

requireText(aiTransparency, 'Article 50(1)', 'existing AI transparency gate');
requireText(aiTransparency, 'Article 50(4)', 'existing AI transparency gate');
requireText(aiTransparency, '2 December 2026', 'existing AI transparency transition');

for (const [text, context] of [
  [terms, 'canonical Terms'],
  [purchases, 'canonical Purchases policy'],
  [privacy, 'canonical Privacy Policy'],
  [community, 'canonical Community Standards'],
]) {
  requireText(text, 'TycoonX', `${context} branding`);
}

requireText(terms, 'game integrity, exploits, automation, and cheating', 'canonical Terms integrity safeguard');
requireText(terms, 'Account compromise and unauthorized activity', 'canonical Terms compromise safeguard');
requireText(terms, 'Nothing in these Terms excludes statutory withdrawal, conformity, update, warranty, price-reduction, termination, refund, or other rights that cannot legally be waived.', 'mandatory consumer rights');
requireText(purchases, 'one-time, non-renewing entitlement', '30-Day VIP product distinction');
requireText(purchases, 'selected limited promotional sales windows', 'Lifetime VIP promotional distinction');

requireText(progress, '25/25', 'localized hub status');
requireText(progress, '100/100 localized full documents are currently confirmed current', 'localized full-document status');
requireText(progress, 'Exact next unfinished locale/document: None.', 'localization queue status');
requireText(progress, 'September 1, 2026', 'release status');

if (/\bTyconX\b/.test(gate)) {
  throw new Error('NCII/CSAM gate contains stale displayed brand spelling.');
}
if (/TycoonX goes to full release on/i.test(gate)) {
  throw new Error('NCII/CSAM gate still describes the September 1, 2026 release as future.');
}
if (/\bbeta\b/i.test(gate)) {
  throw new Error('NCII/CSAM gate contains stale beta wording.');
}

console.log('TycoonX AI Act NCII/CSAM verification passed.');
