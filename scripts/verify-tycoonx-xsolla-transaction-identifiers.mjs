#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const GATE = path.join(ROOT, 'TYCOONX_XSOLLA_TRANSACTION_ID_EXTERNAL_ID_RELEASE_GATE.md');
const REFUND_GATE = path.join(ROOT, 'TYCOONX_XSOLLA_REFUND_CHARGEBACK_RELEASE_GATE.md');
const PROGRESS = path.join(ROOT, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

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

const gate = await read(GATE, 'Xsolla transaction identifier release gate');
const refundGate = await read(REFUND_GATE, 'Xsolla refund/chargeback release gate');
const progress = await read(PROGRESS, 'localization progress tracker');

requireMatch(gate, /June 1, 2026/i, 'Gate is missing Xsolla\'s June 1, 2026 int64 transition date.');
requireMatch(gate, /int64/i, 'Gate is missing the Xsolla int64 transaction-ID requirement.');
requireMatch(gate, /9,223,372,036,854,775,807/, 'Gate is missing the documented int64 upper bound.');
requireMatch(gate, /4,300,000,000/, 'Gate is missing Xsolla\'s >2^32 transaction-ID test case.');
requireMatch(gate, /9,007,199,254,740,993/, 'Gate is missing the JavaScript unsafe-integer regression case.');
requireMatch(gate, /opaque exact identifier/i, 'Gate no longer treats provider transaction IDs as exact opaque identifiers.');
requireMatch(gate, /decimal string/i, 'Gate is missing exact decimal-string handling at JavaScript\/TypeScript boundaries.');
requireMatch(gate, /JavaScript `Number`|JavaScript.*Number/i, 'Gate is missing the JavaScript Number precision warning.');
requireMatch(gate, /32-bit integer/i, 'Gate is missing 32-bit truncation protection.');
requireMatch(gate, /foreigninvoice.*invoice_id.*status/is, 'Gate is missing Xsolla redirect parameter handling.');
requireMatch(gate, /status=done.*not.*substitute|Even `status=done`.*not/is, 'Gate must not make a successful return URL entitlement authority.');
requireMatch(gate, /empty `invoice_id`/i, 'Gate is missing the unfinished-checkout empty invoice_id case.');
requireMatch(gate, /`delivering` is not completion/i, 'Gate is missing redirect-state separation for delivering payments.');
requireMatch(gate, /unique across sandbox and live/i, 'Gate is missing cross-sandbox\/live external-ID uniqueness.');
requireMatch(gate, /fresh immutable external ID for every intended Xsolla payment/i, 'Gate is missing per-payment external-ID generation.');
requireMatch(gate, /never reset a short numeric sequence.*sandbox.*production/is, 'Gate is missing sandbox-to-production collision protection.');
requireMatch(gate, /duplicate external-ID error.*integration\/idempotency signal/i, 'Gate must treat duplicate external IDs as reconciliation signals rather than minting another payment.');
requireMatch(gate, /Xsolla transaction ID.*external_id.*user ID/is, 'Gate must keep provider transaction, external order, and player identities separate.');
requireMatch(gate, /Diamonds.*exact.*once/is, 'Gate is missing exactly-once Diamond fulfillment.');
requireMatch(gate, /30-Day VIP.*30 consecutive days.*once/is, 'Gate is missing one-time 30-Day VIP fulfillment semantics.');
requireMatch(gate, /Lifetime VIP.*limited-time promotional product.*may be withdrawn.*may never return/is, 'Gate is missing Lifetime VIP limited-sale semantics.');
requireMatch(gate, /integration incident.*not automatic evidence.*hacked/is, 'Gate must not classify an identifier bug as player hacking.');
requireMatch(gate, /refund.*exact provider transaction ID/is, 'Gate is missing exact-ID refund protection.');
requireMatch(gate, /rounded analytics value.*spreadsheet export/is, 'Gate is missing rounded\/spreadsheet identifier protection.');
requireMatch(gate, /unrelated legitimate purchases remain protected/i, 'Gate must protect unrelated legitimate paid value during refund reconciliation.');
requireMatch(gate, /Sandbox\/test transactions must never grant production Diamonds, 30-Day VIP, Lifetime VIP/i, 'Gate is missing sandbox entitlement isolation.');
requireMatch(gate, /final total price shown before confirmation governs a completed transaction/i, 'Gate is missing completed-price integrity.');
requireMatch(gate, /payment secrets.*access tokens.*full payment credentials/i, 'Gate is missing return-URL privacy protection.');
requireMatch(gate, /mandatory consumer rights/i, 'Gate is missing mandatory consumer-rights preservation.');
requireMatch(gate, /withdrawal.*conformity.*updates.*cure.*price reduction.*termination.*refunds.*liability/is, 'Gate is missing core German\/EU digital-product remedies.');

requireMatch(refundGate, /server-side confirmation/i, 'Existing Xsolla refund gate no longer requires server-side payment authority.');
requireMatch(refundGate, /transaction ID.*sole refund authority|sole refund authority.*transaction ID/is, 'Existing Xsolla refund gate no longer prevents arbitrary-ID refunds.');

requireMatch(progress, /100\/100/i, 'Localization tracker no longer confirms all 100 localized full documents.');
requireMatch(progress, /25\/25/i, 'Localization tracker no longer confirms all 25 localized hubs.');
requireMatch(progress, /Exact next unfinished locale\/document:\s*None\. All 25 target locales and all 100 localized full documents are current\./i, 'Localization tracker no longer confirms that the locale queue is closed.');

for (const [label, text] of [['gate', gate], ['refund gate', refundGate]]) {
  if (/TyconX/.test(text)) errors.push(`${label} contains displayed brand typo "TyconX".`);
  if (/\bTycoonX\s+(?:is|remains|service is|game is)\s+(?:a\s+)?beta\b/i.test(text)) {
    errors.push(`${label} contains stale player-facing beta wording.`);
  }
}

console.log('TycoonX Xsolla transaction identifier QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: Xsolla int64, external-ID, redirect, entitlement, refund, sandbox, privacy, and mandatory-rights safeguards are present.');
}
