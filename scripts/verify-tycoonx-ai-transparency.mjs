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

const gate = read('TYCOONX_AI_TRANSPARENCY_RELEASE_GATE.md');
const privacy = read('tyconx-privacy-policy.md');
const terms = read('tyconx-terms-of-service.md');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

for (const needle of [
  'Last reviewed: August 31, 2026',
  '2 August 2026',
  'Article 50(1)',
  'Article 50(2)',
  'Article 50(4)',
  'Article 4',
  'from the start of the first interaction',
  'machine-readable',
  '2 December 2026',
  'first exposure',
  'human-review/editorial-control',
  'Code of Practice on Transparency of AI-generated Content',
  'voluntary',
  'equivalently adequate means',
  'AI literacy',
  'Diamonds',
  '30-Day VIP',
  'Lifetime VIP',
  'Apple',
  'Google Play',
  'Xsolla',
  'September 1, 2026',
]) {
  requireText(gate, needle, 'AI transparency gate');
}

for (const needle of [
  'there is a genuine two-way exchange',
  'directly with the natural person',
  'recipient is a natural person',
  'spelling, grammar, formatting or other superficial review',
  'authority to approve, alter or reject publication',
  'No AI officer, certificate or large formal training programme',
  'An AI error, hallucination, moderation label or fraud score must never itself alter paid value.',
]) {
  requireText(gate, needle, 'AI Act implementation detail');
}

requireRegex(gate, /provider[\s\S]{0,140}deployer[\s\S]{0,140}downstream provider/i, 'AI role classification');
requireRegex(gate, /fictional[\s\S]{0,300}public-interest/i, 'fictional/public-interest distinction');
requireRegex(gate, /public-interest[\s\S]{0,600}human review/i, 'public-interest human-review safeguard');
requireRegex(gate, /emotion recognition[\s\S]{0,160}biometric categorisation/i, 'sensitive AI safeguard');

for (const needle of [
  'Third-party AI services are not exempt from these rules.',
  'obtain explicit permission before transmitting or sharing the data where applicable platform rules or law require it',
  'Automated signals may lead to review, temporary restrictions, moderation, or investigation.',
]) {
  requireText(privacy, needle, 'canonical Privacy Policy AI safeguard');
}

requireText(terms, 'TycoonX', 'canonical Terms branding');
requireText(progress, '25/25', 'localization hub status');
requireText(progress, '100/100 localized full documents are currently confirmed current', 'localized full-document status');
requireText(progress, 'Exact next unfinished locale/document: None.', 'localization queue status');
requireText(progress, 'September 1, 2026', 'release status');

if (/\bTyconX\b/.test(gate)) {
  throw new Error('AI transparency gate contains stale displayed brand spelling.');
}

console.log('TycoonX AI transparency verification passed.');
