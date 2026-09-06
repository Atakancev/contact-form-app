#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const gatePath = 'TYCOONX_EU_GERMAN_CONSUMER_ADR_DISPUTE_RELEASE_GATE.md';
const checklistPath = 'TYCOONX_GERMAN_LEGAL_NOTICE_RELEASE_CHECKLIST.md';
const noticePath = 'TYCOONX_GERMAN_LEGAL_NOTICE.md';
const termsPath = 'tyconx-terms-of-service.md';
const purchasesPath = 'tyconx-purchase-refund-policy.md';
const impressumPath = 'app/tycoonx-impressum/page.tsx';
const progressPath = 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md';

const retiredDuplicatePaths = [
  'TYCOONX_GERMAN_CONSUMER_ADR_ODR_RETIREMENT_RELEASE_GATE.md',
  'TYCOONX_GERMAN_VSBG_CONSUMER_ADR_RELEASE_GATE.md',
  'TYCOONX_GERMAN_ADR_ODR_RELEASE_GATE.md',
  'TYCOONX_VSBG_CONSUMER_ADR_RELEASE_GATE.md',
  'scripts/verify-tycoonx-german-consumer-adr.mjs',
  'scripts/verify-tycoonx-german-vsbg-consumer-adr.mjs',
  'scripts/verify-tycoonx-german-adr.mjs',
  'scripts/verify-tycoonx-vsbg-consumer-adr.mjs',
];

const gate = fs.readFileSync(gatePath, 'utf8');
const checklist = fs.readFileSync(checklistPath, 'utf8');
const notice = fs.readFileSync(noticePath, 'utf8');
const terms = fs.readFileSync(termsPath, 'utf8');
const purchases = fs.readFileSync(purchasesPath, 'utf8');
const impressum = fs.readFileSync(impressumPath, 'utf8');
const progress = fs.readFileSync(progressPath, 'utf8');
const failures = [];

function requireText(haystack, needle, label) {
  if (!haystack.includes(needle)) failures.push(`${label}: missing ${JSON.stringify(needle)}`);
}

function forbidText(haystack, needle, label) {
  if (haystack.includes(needle)) failures.push(`${label}: forbidden ${JSON.stringify(needle)}`);
}

function collectTextFiles(root) {
  if (!fs.existsSync(root)) return [];
  const out = [];
  const stack = [root];
  while (stack.length) {
    const current = stack.pop();
    const stat = fs.statSync(current);
    if (stat.isDirectory()) {
      for (const entry of fs.readdirSync(current)) stack.push(path.join(current, entry));
    } else if (/\.(md|mdx|tsx|ts|jsx|js)$/.test(current)) {
      out.push(current);
    }
  }
  return out;
}

// Single current-law doctrine source and former ODR retirement.
requireText(gate, 'Reviewed against current law and official guidance:** September 5, 2026', 'review date');
requireText(gate, 'went to full release on **September 1, 2026**', 'full release');
requireText(gate, 'single TycoonX EU/German consumer ADR / VSBG / former-ODR operational release gate', 'single doctrine source');
requireText(gate, 'Regulation (EU) 2024/3228', 'ODR repeal');
requireText(gate, 'March 20, 2025', 'ODR complaint cutoff');
requireText(gate, 'July 20, 2025', 'ODR closure');
requireText(gate, 'Consumer Redress Portal', 'current EU redress portal');
requireText(gate, 'It is **not** a substitute', 'portal legal-role separation');

// Current German VSBG §§ 36/37 must remain distinct.
requireText(gate, '§ 36(1)(1) VSBG', 'VSBG §36 participation statement');
requireText(gate, '10 or fewer persons on December 31 of the preceding year', '§36 small-trader headcount');
requireText(gate, 'it applies to **§ 36(1)(1)**, not every VSBG obligation', 'narrow §36 exemption');
requireText(gate, '§ 36(1)(2)', '§36(1)(2) survives');
requireText(gate, 'does **not** remove the post-dispute duty in **§ 37 VSBG**', '§37 survives headcount');
requireText(gate, 'not labels such as `indie`, `solo`, `small`, `individual`', 'no assumed exemption');
requireText(gate, 'address and website', '§37 body details');
requireText(gate, 'willing or obliged', '§37 participation status');
requireText(gate, 'in text form', '§37 text form');
requireText(gate, 'consumer_contract_dispute_unresolved_at', 'unresolved-dispute state');
requireText(gate, 'not an admission of liability', '§37 no admission');
requireText(gate, 'Do not permanently hard-code a conciliation body', 'competence recheck');
requireText(gate, 'Universalschlichtungsstelle des Bundes - Zentrum für Schlichtung e. V.', 'current universal body checkpoint');
requireText(gate, 'Straßburger Str. 8', 'current body address');
requireText(gate, 'https://www.universalschlichtungsstelle.de', 'current body website');

// The German legal-notice checklist is an implementation surface of the same doctrine,
// not a second independent ADR verifier.
requireText(checklist, 'German VSBG §§ 36 and 37 impose different duties', 'legal-notice §36/§37 distinction');
requireText(checklist, 'ten or fewer persons on 31 December of the preceding year', 'legal-notice §36 headcount');
requireText(checklist, 'headcount, not full-time-equivalent working hours', 'legal-notice headcount method');
requireText(checklist, 'does **not** remove § 36(1) no. 2', 'legal-notice narrow §36 exemption');
requireText(checklist, 'The § 36(3) headcount exemption does **not** exempt CK-Labs from § 37.', 'legal-notice §37 survives');
requireText(checklist, 'current postal address and website', 'legal-notice §37 body details');
requireText(checklist, 'provide that information in **text form**', 'legal-notice §37 text form');
requireText(checklist, 'An ADR request, a § 37 notice, or a consumer’s decision to contact a conciliation body is not by itself evidence of fraud', 'legal-notice no-retaliation');
requireText(checklist, 'Directive (EU) **2025/2647**', 'legal-notice future ADR reform');
requireText(checklist, 'March 20, 2028', 'legal-notice transposition deadline');
requireText(checklist, 'September 20, 2028', 'legal-notice application date');
requireText(checklist, '20 working days', 'legal-notice future response period');
requireText(checklist, '30 working days', 'legal-notice future complex-case period');
requireText(checklist, 'Consumer Redress Portal', 'legal-notice current redress portal');
requireText(checklist, 'not** the former EU ODR platform', 'legal-notice ODR/portal separation');

requireText(notice, '## Verbraucherstreitigkeiten', 'German legal notice dispute section');
requireText(notice, '§ 37 VSBG', 'German legal notice §37');
requireText(notice, 'in Textform', 'German legal notice text-form rule');
requireText(notice, 'Die frühere EU-Plattform für Online-Streitbeilegung (ODR) wurde eingestellt.', 'German legal notice ODR sunset');
forbidText(notice, 'ec.europa.eu/consumers/odr', 'German legal notice stale ODR URL');

// Apple / Google / Xsolla responsibility boundaries.
requireText(gate, '### Apple App Store', 'Apple section');
requireText(gate, 'developer responsible for timely customer support for alternative-payment issues', 'Apple alternative-payment support');
requireText(gate, '### Google Play', 'Google section');
requireText(gate, 'authoritative Google transaction changes', 'Google transaction reconciliation');
requireText(gate, '### Xsolla webshop', 'Xsolla section');
requireText(gate, 'may act as merchant of record', 'Xsolla merchant role');
requireText(gate, "Do not copy Xsolla's own dispute/arbitration wording into CK-Labs Terms.", 'Xsolla dispute-clause isolation');

// Enforcement, products, pricing and shutdown.
requireText(gate, 'not by itself proof of hacking, exploit use, fraud, chargeback abuse, regional-price abuse, entitlement abuse, account compromise, or harassment', 'lawful complaint not abuse');
requireText(gate, 'must not suspend, terminate, reduce unrelated paid value', 'no retaliation');
requireText(gate, 'Purchased Diamonds do not expire solely because time passes.', 'Diamonds non-expiry');
requireText(gate, '30-Day VIP remains a one-time, non-renewing 30-day entitlement.', '30-Day VIP');
requireText(gate, 'Lifetime VIP remains a one-time promotional entitlement offered only during selected genuine sales windows.', 'Lifetime VIP sales-window rule');
requireText(gate, 'may never return', 'Lifetime VIP may never return');
requireText(gate, 'no expectation of continuous future availability for purchase', 'Lifetime VIP availability expectation');
requireText(gate, 'Completed one-time purchases are not retroactively repriced', 'future price separation');
requireText(gate, 'Lawful permanent TycoonX shutdown, sale, merger, reorganization, or successor-operator transfer', 'shutdown / successor');
requireText(gate, 'do not automatically blame the legitimate user', 'account-compromise safeguard');

// 2028 EU ADR transition is future law, not a current German deadline.
requireText(gate, 'Directive (EU) **2025/2647**', 'EU ADR reform');
requireText(gate, 'March 20, 2028', 'transposition deadline');
requireText(gate, 'September 20, 2028', 'application date');
requireText(gate, '20 working days', 'future trader response');
requireText(gate, '30 working days', 'future complex-case cap');
requireText(gate, 'do **not** present that future 20/30-working-day framework as though it were already a current German VSBG deadline', 'future/current separation');

// Public canonical and Impressum safeguards.
requireText(gate, 'DSA Article 21', 'DSA Article 21 boundary');
requireText(gate, 'A generic Impressum link is **not** a substitute', 'Impressum not §37 delivery');
requireText(gate, 'A conditional § 37 statement is **not** a substitute', 'Impressum not §36 substitute');
requireText(impressum, '§ 37 VSBG', 'public Impressum §37 reference');
requireText(impressum, 'Die frühere EU-Plattform für Online-Streitbeilegung (ODR) wurde eingestellt.', 'public Impressum ODR sunset');
forbidText(impressum, 'ec.europa.eu/consumers/odr', 'public Impressum stale ODR URL');

requireText(terms, '## 34. Consumer dispute resolution', 'canonical ADR section');
requireText(terms, 'whether CK-Labs is willing or legally obliged to participate', 'canonical truthful participation status');
requireText(terms, 'The former European Commission Online Dispute Resolution platform was discontinued in 2025.', 'canonical ODR sunset');
requireText(terms, 'Nothing in these Terms excludes, limits, or overrides rights that cannot legally be excluded or limited', 'canonical mandatory rights');
requireText(purchases, 'does not reduce any rights that cannot legally be waived', 'Purchases mandatory rights');
requireText(purchases, 'CK-Labs remains responsible for delivering the corresponding TycoonX entitlement after receiving valid confirmation of successful payment.', 'CK-Labs entitlement responsibility');

// Localization queue remains closed because public canonical meaning did not change.
requireText(progress, '25/25', 'localized hubs');
requireText(progress, 'All 25 target locales and all 100 localized full documents are current.', 'localized documents');
requireText(progress, 'Exact next unfinished locale/document: None.', 'localization queue');
requireText(progress, 'September 1, 2026', 'release invariant in progress tracker');
requireText(gate, 'does **not** by itself change the public canonical English Terms', 'no localization reopen');

// Retired overlapping doctrine must not reappear.
for (const file of retiredDuplicatePaths) {
  if (fs.existsSync(file)) failures.push(`Retired overlapping ADR source should stay removed: ${file}`);
}

// Player-facing/legal brand and stale ODR QA.
forbidText(gate, 'TyconX', 'gate brand');
forbidText(gate, 'TycoonX beta', 'gate beta wording');
const legalFiles = [
  termsPath,
  purchasesPath,
  'tyconx-privacy-policy.md',
  'tycoonx-community-standards.md',
  noticePath,
  impressumPath,
  ...collectTextFiles('app/tycoonx-legal'),
  ...collectTextFiles('app/tyconx-terms-of-service'),
  ...collectTextFiles('app/tyconx-purchase-refund-policy'),
  ...collectTextFiles('app/tyconx-privacy-policy'),
].filter((file, index, files) => fs.existsSync(file) && files.indexOf(file) === index);

for (const file of legalFiles) {
  const text = fs.readFileSync(file, 'utf8');
  forbidText(text, 'ec.europa.eu/consumers/odr', `${file} stale ODR URL`);
  forbidText(text, 'TyconX', `${file} displayed brand`);
  if (/\bTycoonX\b.{0,80}\bbeta\b|\bbeta\b.{0,80}\bTycoonX\b/is.test(text)) {
    failures.push(`${file}: stale live-service beta wording`);
  }
}

if (failures.length) {
  console.error('TycoonX consolidated EU/German consumer ADR verification failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX consolidated EU/German consumer ADR, VSBG §§ 36/37, legal-notice, former-ODR, Consumer Redress Portal, payment-channel and entitlement invariants verified.');
