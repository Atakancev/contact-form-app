import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const gatePath = path.join(root, 'TYCOONX_EU_GERMAN_GREEN_CLAIMS_SUSTAINABILITY_MARKETING_RELEASE_GATE.md');
const progressPath = path.join(root, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

function fail(message) {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
}

function read(file) {
  if (!fs.existsSync(file)) {
    fail(`Missing required file: ${path.relative(root, file)}`);
    return '';
  }
  return fs.readFileSync(file, 'utf8');
}

function requireAll(text, needles, label) {
  for (const needle of needles) {
    if (!text.includes(needle)) fail(`${label} is missing required text: ${needle}`);
  }
}

const gate = read(gatePath);
const progress = read(progressPath);

requireAll(gate, [
  'TycoonX went to full release on **1 September 2026**',
  '27 September 2026',
  'Directive (EU) 2024/825',
  'BGBl. 2026 I No. 43',
  'generic environmental claim',
  'recognised excellent environmental performance',
  'clear and prominent on the same medium',
  'sustainability label',
  'certification scheme',
  'public authorities',
  'entire product or trader',
  'offsetting of greenhouse gas emissions',
  'clear, objective, publicly available and verifiable commitments',
  'detailed and realistic implementation plan',
  'independent third-party expert',
  'Diamonds',
  'one-time, non-renewing 30-day entitlement',
  'limited-time promotional offering available only during selected genuine sales windows',
  'may be withdrawn from sale, may never return',
  'Apple App Store',
  'Google Play',
  'Xsolla',
  'mandatory consumer rights',
], 'Green-claims gate');

if (gate.includes('TyconX')) fail('Green-claims gate contains prohibited displayed brand spelling TyconX.');
if (/\bTycoonX\s+beta\b/i.test(gate)) fail('Green-claims gate contains stale live-service beta wording.');
if (/TycoonX goes to full release on September 1, 2026/i.test(gate)) {
  fail('Green-claims gate contains stale future-tense release wording.');
}

requireAll(progress, [
  '25/25',
  '100/100',
  'Exact next unfinished locale/document: `None.',
], 'Localization progress tracker');

const targetLocales = [
  'tr', 'de', 'es', 'es_MX', 'fr', 'fr_CA', 'it', 'pt', 'pt_BR', 'ru', 'ja', 'ko',
  'zh', 'zh_Hans', 'zh_Hant', 'ar', 'nl', 'sv', 'nb', 'pl', 'th', 'vi', 'uk', 'hi', 'id',
];
const docTypes = ['terms', 'purchases', 'privacy', 'community'];

for (const locale of targetLocales) {
  const hub = path.join(root, 'app', 'tycoonx-legal', locale);
  if (!fs.existsSync(hub)) fail(`Missing localized hub: app/tycoonx-legal/${locale}`);
  for (const doc of docTypes) {
    const file = path.join(hub, doc, 'page.tsx');
    if (!fs.existsSync(file)) fail(`Missing localized document: app/tycoonx-legal/${locale}/${doc}/page.tsx`);
  }
}

const playerFacingRoots = [
  'tyconx-terms-of-service.md',
  'tyconx-purchase-refund-policy.md',
  'tyconx-privacy-policy.md',
  'tycoonx-community-standards.md',
  'app/tyconx-terms-of-service',
  'app/tyconx-purchase-refund-policy',
  'app/tyconx-privacy-policy',
  'app/tyconx-support',
  'app/tycoonx-community-standards',
  'app/tycoonx-eula',
  'app/tycoonx-impressum',
  'app/tycoonx-legal',
  'app/tycoonx-security',
];

const riskyPatterns = [
  { re: /\benvironmentally friendly\b/i, label: 'environmentally friendly' },
  { re: /\beco[- ]friendly\b/i, label: 'eco-friendly' },
  { re: /\bclimate[- ]neutral\b/i, label: 'climate neutral' },
  { re: /\bcarbon[- ]neutral\b/i, label: 'carbon neutral' },
  { re: /\bcarbon[- ]negative\b/i, label: 'carbon negative' },
  { re: /\bnet[- ]zero\b/i, label: 'net zero' },
  { re: /\bumweltfreundlich\b/i, label: 'umweltfreundlich' },
  { re: /\bklimaneutral\b/i, label: 'klimaneutral' },
  { re: /\bklimafreundlich\b/i, label: 'klimafreundlich' },
  { re: /\bCO2[- ]neutral\b/i, label: 'CO2-neutral' },
  { re: /\bCO₂[- ]neutral\b/i, label: 'CO₂-neutral' },
];

function collectFiles(entry) {
  const full = path.join(root, entry);
  if (!fs.existsSync(full)) return [];
  const stat = fs.statSync(full);
  if (stat.isFile()) return [full];
  const out = [];
  for (const name of fs.readdirSync(full)) {
    const child = path.join(full, name);
    const childStat = fs.statSync(child);
    if (childStat.isDirectory()) out.push(...collectFiles(path.relative(root, child)));
    else if (/\.(?:md|tsx?|jsx?|json)$/i.test(name)) out.push(child);
  }
  return out;
}

const reviewedFiles = [...new Set(playerFacingRoots.flatMap(collectFiles))];
for (const file of reviewedFiles) {
  const text = read(file);
  for (const { re, label } of riskyPatterns) {
    if (re.test(text)) {
      fail(`Potential environmental marketing claim '${label}' found in ${path.relative(root, file)}. Review against the 27 September 2026 green-claims gate.`);
    }
  }
}

if (!process.exitCode) {
  console.log(`PASS: TycoonX green-claims gate present; 25 hubs / 100 localized documents present; ${reviewedFiles.length} player-facing files checked for high-risk environmental marketing phrases.`);
}
