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

const gate = read('TYCOONX_GERMAN_CONSUMER_ADR_ODR_RETIREMENT_RELEASE_GATE.md');
const terms = read('tyconx-terms-of-service.md');
const purchases = read('tyconx-purchase-refund-policy.md');
const privacy = read('tyconx-privacy-policy.md');
const community = read('tycoonx-community-standards.md');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

for (const needle of [
  'Regulation (EU) 2024/3228',
  'July 20, 2025',
  'March 20, 2025',
  '§ 36 VSBG',
  '§ 37 VSBG',
  '10 or fewer persons on December 31 of the preceding year',
  'not a universal exemption from all VSBG obligations',
  'could not be settled directly between the trader and the consumer',
  'in text form',
  'Do not invent ADR participation',
  'Apple App Store',
  'Google Play',
  'Xsolla',
  'Refunds, chargebacks and ADR are different processes',
  'Diamonds',
  'one-time, non-renewing 30-day entitlement',
  'selected genuine sales windows',
  'Account compromise',
  'No stale EU ODR language',
  'Directive (EU) 2025/2647',
  'January 19, 2026',
  'March 20, 2028',
  'September 20, 2028',
  '20 working days',
  '30 working days',
  'No retaliation',
  'Service shutdown or business transfer',
]) {
  requireText(gate, needle, 'German consumer ADR gate');
}

requireRegex(
  gate,
  /§ 36\(3\)[\s\S]{0,1000}10 or fewer persons[\s\S]{0,1200}not a universal exemption/i,
  '§ 36 small-employer boundary',
);
requireRegex(
  gate,
  /§ 37 VSBG[\s\S]{0,1800}could not be settled directly[\s\S]{0,1800}text form/i,
  '§ 37 post-dispute workflow',
);
requireRegex(
  gate,
  /Apple App Store[\s\S]{0,3500}Google Play[\s\S]{0,3500}Xsolla/i,
  'payment-channel responsibility separation',
);
requireRegex(
  gate,
  /Refunds, chargebacks and ADR are different processes[\s\S]{0,1800}Diamonds[\s\S]{0,1000}30-Day VIP[\s\S]{0,1000}Lifetime VIP/i,
  'entitlement isolation',
);
requireRegex(
  gate,
  /Directive \(EU\) 2025\/2647[\s\S]{0,1800}20 working days[\s\S]{0,1200}30 working days/i,
  'future ADR Directive response framework',
);

for (const [text, context] of [
  [terms, 'canonical Terms'],
  [purchases, 'canonical Purchases policy'],
  [privacy, 'canonical Privacy Policy'],
  [community, 'canonical Community Standards'],
]) {
  requireText(text, 'TycoonX', `${context} branding`);
}

requireText(terms, 'Nothing in these Terms excludes, limits, or overrides rights that cannot legally be excluded or limited', 'mandatory consumer-rights safeguard');
requireText(terms, 'Apple App Store In-App Purchase', 'Apple purchase-channel coverage');
requireText(terms, 'Google Play', 'Google purchase-channel coverage');
requireText(terms, 'official TycoonX web shop using Xsolla', 'Xsolla purchase-channel coverage');
requireText(purchases, 'one-time, non-renewing entitlement', '30-Day VIP product distinction');
requireText(purchases, 'selected limited promotional sales windows', 'Lifetime VIP product distinction');

requireText(progress, '25/25', 'localized hub status');
requireText(progress, '100/100 localized full documents are currently confirmed current', 'localized full-document status');
requireText(progress, 'Exact next unfinished locale/document: None.', 'localization queue status');
requireText(progress, 'September 1, 2026', 'live-release status');

const playerFacingFiles = [
  'tyconx-terms-of-service.md',
  'tyconx-purchase-refund-policy.md',
  'tyconx-privacy-policy.md',
  'tycoonx-community-standards.md',
];

const collectLegalPages = (directory) => {
  if (!fs.existsSync(directory)) return [];
  const out = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      out.push(...collectLegalPages(full));
    } else if (entry.isFile() && /\.(tsx?|mdx?|html?)$/i.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
};

const localizedDir = path.join(root, 'app', 'tycoonx-legal');
const filesToScan = [
  ...playerFacingFiles.map((relativePath) => path.join(root, relativePath)),
  ...collectLegalPages(localizedDir),
];

const staleOdrUrl = /ec\.europa\.eu\/consumers\/odr/i;
const stalePresentTenseOdr = /(?:submit|file|lodge|bring).{0,120}(?:complaint|dispute).{0,120}(?:ODR|Online Dispute Resolution|OS-Plattform)/i;

for (const fullPath of filesToScan) {
  const text = fs.readFileSync(fullPath, 'utf8');
  const relative = path.relative(root, fullPath);

  if (staleOdrUrl.test(text)) {
    throw new Error(`${relative}: contains the retired EU ODR complaint URL.`);
  }
  if (stalePresentTenseOdr.test(text)) {
    throw new Error(`${relative}: may present the retired EU ODR platform as a current complaint route.`);
  }
  if (/\bTyconX\b/.test(text)) {
    throw new Error(`${relative}: contains stale displayed brand spelling.`);
  }
  if (/TycoonX\s+(?:is|remains|currently is)\s+(?:in\s+)?beta\b/i.test(text)) {
    throw new Error(`${relative}: contains stale live-service beta wording.`);
  }
}

if (/\bTyconX\b/.test(gate)) {
  throw new Error('German consumer ADR gate contains stale displayed brand spelling.');
}
if (/TycoonX\s+(?:is|remains|currently is)\s+(?:in\s+)?beta\b/i.test(gate)) {
  throw new Error('German consumer ADR gate contains stale live-service beta wording.');
}

console.log('TycoonX German consumer ADR / retired ODR verification passed.');
