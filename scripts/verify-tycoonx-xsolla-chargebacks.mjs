#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const GATE = path.join(ROOT, 'TYCOONX_XSOLLA_REFUND_CHARGEBACK_RELEASE_GATE.md');
const PURCHASES = path.join(ROOT, 'app', 'tyconx-purchase-refund-policy', 'page.tsx');
const PRIVACY = path.join(ROOT, 'app', 'tyconx-privacy-policy', 'page.tsx');

const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

async function read(target, label) {
  try {
    return await readFile(target, 'utf8');
  } catch {
    errors.push(`Missing ${label}: ${path.relative(ROOT, target)}`);
    return '';
  }
}

const gate = await read(GATE, 'Xsolla chargeback release gate');
const purchases = await read(PURCHASES, 'canonical Purchases & Refunds page');
const privacy = await read(PRIVACY, 'canonical Privacy Policy page');

requireMatch(gate, /August 30, 2026/, 'Xsolla gate is missing the current review checkpoint.');
requireMatch(gate, /applicable refund-policy type is shown/i, 'Xsolla gate no longer preserves transaction-specific refund-policy handling.');
requireMatch(gate, /group company.*checkout.*receipt|checkout.*receipt.*group company/is, 'Xsolla gate no longer preserves transaction-specific merchant identity.');
requireMatch(gate, /server-side confirmation/i, 'Xsolla gate no longer requires server-side payment authority.');
requireMatch(gate, /idempotent/i, 'Xsolla gate no longer requires idempotent payment/refund processing.');
requireMatch(gate, /January 22, 2025/, 'Xsolla gate no longer records the combined/separate webhook model split.');
requireMatch(gate, /combined.*order_paid.*order_canceled/is, 'Xsolla gate is missing the combined order webhook model.');
requireMatch(gate, /separate.*payment.*refund.*order_paid.*order_canceled/is, 'Xsolla gate is missing the separate Store\/Payments webhook model.');
requireMatch(gate, /raw request body/i, 'Xsolla gate no longer requires signature verification against the raw webhook body.');
requireMatch(gate, /20.*attempts.*12 hours/is, 'Xsolla gate is missing the current combined-webhook retry window.');
requireMatch(gate, /12.*attempts.*48 hours/is, 'Xsolla gate is missing the current refund-webhook retry window.');
requireMatch(gate, /still complete.*4xx.*5xx|4xx.*5xx.*veto|veto.*refund/is, 'Xsolla gate no longer warns that HTTP errors cannot safely veto a provider-initiated refund.');
requireMatch(gate, /5.?10 banking days/i, 'Xsolla gate is missing the current payment-method-dependent refund timing warning.');
requireMatch(gate, /refund.*cannot be canceled|cannot be canceled.*refund/is, 'Xsolla gate is missing the irreversible-issued-refund warning.');
requireMatch(gate, /partial refunds are payment-method and transaction specific/i, 'Xsolla gate is missing transaction-specific partial-refund handling.');
requireMatch(gate, /do not fabricate evidence/i, 'Xsolla gate is missing evidence-integrity protection.');
requireMatch(gate, /unrelated private chats|private messages/i, 'Xsolla gate is missing privacy minimization for dispute evidence.');
requireMatch(gate, /record what evidence was disclosed/i, 'Xsolla gate is missing an evidence-disclosure audit trail.');
requireMatch(gate, /chargeback request alone is not proof of fraud/i, 'Xsolla gate is missing the safeguard against treating every dispute as fraud.');
requireMatch(gate, /do not confiscate unrelated legitimate purchases/i, 'Xsolla gate is missing narrow entitlement-correction protection.');
requireMatch(gate, /full payment-card numbers|full payment-card/i, 'Xsolla gate no longer warns support not to collect full card data.');
requireMatch(gate, /commercial-cost input|commercial.*cost/i, 'Xsolla gate is missing chargeback-cost handling.');
requireMatch(gate, /mandatory consumer law/i, 'Xsolla gate is missing mandatory-rights preservation.');

requireMatch(purchases, /TycoonX web shop powered by Xsolla/, 'Canonical Purchases page is missing its Xsolla section.');
requireMatch(purchases, /refund policy.*checkout.*receipt|checkout.*receipt.*refund policy/is, 'Canonical Purchases page no longer makes Xsolla refund terms transaction-specific.');
requireMatch(purchases, /refunds, reversals, and chargebacks/i, 'Canonical Purchases page is missing refund/chargeback reconciliation.');
requireMatch(purchases, /unrelated legitimately purchased value/i, 'Canonical Purchases page no longer protects unrelated legitimate paid value.');

requireMatch(privacy, /Apple, Google, Xsolla.*fraud and disputes/is, 'Canonical Privacy Policy no longer permits necessary payment-partner fraud/dispute sharing.');
requireMatch(privacy, /We do not sell personal data/i, 'Canonical Privacy Policy is missing the no-sale statement.');
requireMatch(privacy, /only what is reasonably necessary/i, 'Canonical Privacy Policy no longer limits sharing to reasonably necessary data.');

for (const [label, text] of [['gate', gate], ['Purchases', purchases], ['Privacy', privacy]]) {
  if (/TyconX/.test(text)) errors.push(`${label} contains displayed brand typo "TyconX".`);
  if (/\bbeta\b/i.test(text)) errors.push(`${label} contains stale release wording.`);
}

console.log('TycoonX Xsolla refund/chargeback QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: Xsolla webhook, refund, chargeback, privacy, and entitlement safeguards are present.');
}
