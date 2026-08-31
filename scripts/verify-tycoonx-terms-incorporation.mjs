#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_GERMAN_TERMS_INCORPORATION_CONTRACT_RECORD_GATE.md');
const termsPath = path.join(ROOT, 'tyconx-terms-of-service.md');
const purchasesPath = path.join(ROOT, 'tyconx-purchase-refund-policy.md');
const progressPath = path.join(ROOT, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

const gate = await readFile(gatePath, 'utf8');
const terms = await readFile(termsPath, 'utf8');
const purchases = await readFile(purchasesPath, 'utf8');
const progress = await readFile(progressPath, 'utf8');

requireMatch(gate, /BGB § 305/i, 'Missing BGB § 305 incorporation rule.');
requireMatch(gate, /reasonable opportunity to review/i, 'Missing reasonable opportunity to review standard terms.');
requireMatch(gate, /BGB § 305b/i, 'Missing individual-agreement priority rule.');
requireMatch(gate, /BGB § 305c/i, 'Missing surprising/ambiguous clause safeguard.');
requireMatch(gate, /BGB § 306/i, 'Missing non-incorporation/invalidity consequence.');
requireMatch(gate, /BGB § 307/i, 'Missing transparency safeguard.');
requireMatch(gate, /version-pinned acceptance evidence/i, 'Missing version-pinned Terms acceptance evidence section.');
requireMatch(gate, /cryptographic hash|immutable content identifier/i, 'Missing immutable Terms-version evidence safeguard.');
requireMatch(gate, /termsAccepted = true/i, 'Missing warning against unversioned boolean acceptance evidence.');
requireMatch(gate, /preserve the historical document itself/i, 'Missing historical Terms preservation rule.');
requireMatch(gate, /BGB § 312i/i, 'Missing electronic-contract terms retrieval/version rule.');
requireMatch(gate, /BGB § 312f/i, 'Missing durable-medium confirmation rule.');
requireMatch(gate, /C-49\/11.*Content Services/i, 'Missing Content Services durable-medium checkpoint.');
requireMatch(gate, /mutable Terms webpage.*not automatically a durable-medium/is, 'Missing mutable-webpage durable-medium safeguard.');
requireMatch(gate, /Apple App Store evidence split/i, 'Missing Apple contract/acceptance evidence separation.');
requireMatch(gate, /Do not invent a CK-Labs acceptance timestamp from the Apple transaction timestamp/i, 'Missing Apple transaction-vs-Terms-acceptance safeguard.');
requireMatch(gate, /Google Play evidence split/i, 'Missing Google purchase-token-vs-Terms-acceptance separation.');
requireMatch(gate, /purchase token/i, 'Missing Google purchase-token evidence.');
requireMatch(gate, /Xsolla evidence split/i, 'Missing Xsolla merchant-vs-CK-Labs Terms separation.');
requireMatch(gate, /contract is formed when Xsolla sends the order-confirmation email/i, 'Missing current Xsolla contract-formation checkpoint.');
requireMatch(gate, /Purchased Diamonds/i, 'Missing purchased-Diamond evidence rules.');
requireMatch(gate, /One-time 30-Day VIP/i, 'Missing one-time 30-Day VIP evidence rules.');
requireMatch(gate, /Lifetime VIP/i, 'Missing Lifetime VIP evidence rules.');
requireMatch(gate, /account compromise/i, 'Missing account-compromise evidence safeguard.');
requireMatch(gate, /chargeback/i, 'Missing chargeback evidence safeguard.');
requireMatch(gate, /Preserve unrelated valid purchased Diamonds, 30-Day VIP, and Lifetime VIP/i, 'Missing unrelated entitlement isolation rule.');
requireMatch(gate, /September 1, 2026|August 31, 2026/i, 'Missing current release-era checkpoint.');

requireMatch(terms, /A change to these Terms does not retroactively authorize conduct that was unlawful when the relevant transaction occurred/i, 'Canonical Terms lost non-retroactivity safeguard.');
requireMatch(terms, /Where applicable law requires express consent rather than notice or continued use, CK-Labs will request that consent/i, 'Canonical Terms lost express-consent safeguard for Terms changes.');
requireMatch(terms, /final total price and currency displayed by the applicable checkout before confirmation govern that transaction/i, 'Canonical Terms lost completed-transaction price evidence rule.');
requireMatch(terms, /reliable authoritative server records, signed store records, provider transaction records, or verified backups/i, 'Canonical Terms lost authoritative record hierarchy.');
requireMatch(purchases, /Before a consumer places a paid order/i, 'Canonical Purchases policy lost pre-contract information rule.');
requireMatch(purchases, /contracting trader/i, 'Canonical Purchases policy lost contracting-trader distinction.');

requireMatch(progress, /100\/100 localized full documents are currently confirmed current/i, 'Localization tracker no longer confirms 100/100 current documents.');
requireMatch(progress, /Exact next unfinished locale\/document: None/i, 'Localization queue unexpectedly reopened; continue from that queue before further hardening.');
requireMatch(progress, /tr, de, es, es_MX, fr, fr_CA, it, pt, pt_BR, ru, ja, ko, zh, zh_Hans, zh_Hant, ar, nl, sv, nb, pl, th, vi, uk, hi, id/i, 'Localization order invariant missing.');

for (const [name, text] of [
  ['Terms incorporation gate', gate],
  ['canonical Terms', terms],
  ['canonical Purchases policy', purchases],
]) {
  if (/TyconX/.test(text)) errors.push(`Displayed brand typo found in ${name}.`);
  if (/\bbeta\b/i.test(text)) errors.push(`Stale live-service beta wording found in ${name}.`);
}

console.log('TycoonX Terms incorporation and contract-record QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: Terms incorporation, version evidence, durable-medium confirmation, channel separation, and entitlement safeguards are present.');
}
