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

requireMatch(gate, /Last reviewed: September 9, 2026/i, 'Gate review date was not advanced for the token-lifecycle audit.');
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

// Pay Station token lifecycle and stale-checkout controls.
requireMatch(gate, /24-hour lifetime by default/i, 'Gate is missing Xsolla\'s current default Pay Station token lifetime.');
requireMatch(gate, /Invalidate token/i, 'Gate is missing Xsolla token invalidation support.');
requireMatch(gate, /POST \/projects\/\{project_id\}\/token\/\{token\}\/expire/i, 'Gate is missing the current Xsolla invalidate-token endpoint.');
requireMatch(gate, /invalidate-token operation is idempotent|invalidation is idempotent/i, 'Gate is missing idempotent Xsolla token invalidation semantics.');
requireMatch(gate, /Token issuance is not payment/i, 'Gate must not treat Pay Station token creation as payment authority.');
requireMatch(gate, /temporary checkout authorization only/i, 'Gate is missing the temporary-checkout-capability boundary.');
requireMatch(gate, /token.*bound to.*order.*external ID.*account.*environment.*product/is, 'Gate is missing token-to-order/account/environment/product binding.');
requireMatch(gate, /Do not rely on Xsolla's default 24-hour expiry.*only control/is, 'Gate must not rely only on default expiry for shorter offers or security incidents.');
requireMatch(gate, /explicitly invalidate still-unpaid tokens/is, 'Gate is missing proactive invalidation for stale unpaid checkout tokens.');
requireMatch(gate, /Token invalidation is a checkout control.*not a refund or revocation mechanism/is, 'Gate must keep token invalidation separate from refunds and entitlement revocation.');
requireMatch(gate, /already authoritatively completed.*must not erase or revoke/is, 'Gate must protect legitimate purchases completed before token invalidation.');
requireMatch(gate, /Lifetime VIP.*token.*does .*not by itself reserve Lifetime VIP.*reserve the old price.*keep the sales window open/is, 'Gate is missing the Lifetime VIP stale-token reservation rule.');
requireMatch(gate, /Lifetime VIP window closes.*stop issuing new Lifetime VIP tokens.*invalidate still-unpaid/is, 'Gate is missing Lifetime VIP token closure behavior.');
requireMatch(gate, /stale or replayed token after closure cannot create a new Lifetime VIP sale/i, 'Gate must prevent stale-token Lifetime VIP sales after campaign closure.');
requireMatch(gate, /support must not manually recreate a sale.*old token URL or checkout screenshot/is, 'Gate is missing support protection against stale Lifetime VIP checkout evidence.');
requireMatch(gate, /provider confirmation arrives late.*reconcile the actual transaction chronology.*honor a legitimate completed purchase exactly once/is, 'Gate must preserve legitimate delayed Lifetime VIP completion.');
requireMatch(gate, /30-Day VIP.*token creation.*does not start the 30-day clock/is, 'Gate must not start 30-Day VIP at Pay Station token creation.');
requireMatch(gate, /Diamonds.*token creation grants zero Diamonds/is, 'Gate must not grant Diamonds from token creation.');
requireMatch(gate, /same token\/session.*concurrently.*idempotency/is, 'Gate is missing parallel-token/session exactly-once protection.');
requireMatch(gate, /stale token is not permission to bypass.*catalog\/configuration error.*closed promotion.*regional-availability.*price change.*currency\/tax\/FX/is, 'Gate is missing stale-token price/catalog/regional/tax protections.');
requireMatch(gate, /completed.*not retroactively repriced/is, 'Gate must preserve provider-confirmed economics for completed purchases.');
requireMatch(gate, /Treat a live Pay Station token as sensitive bearer-style checkout metadata/i, 'Gate is missing sensitive token handling.');
requireMatch(gate, /analytics events.*crash logs.*support notes/is, 'Gate is missing token minimization in non-payment telemetry/support storage.');
requireMatch(gate, /account-compromise.*invalidate.*unpaid token.*Do not confiscate unrelated legitimate paid value/is, 'Gate is missing compromised-token handling without unrelated entitlement confiscation.');
requireMatch(gate, /token screenshot.*support lead.*not transaction proof/is, 'Gate must not treat token screenshots as payment proof.');
requireMatch(gate, /Sandbox Pay Station tokens.*sandbox-only/i, 'Gate is missing Xsolla sandbox-token isolation.');
requireMatch(gate, /provider.*replaced|replacement or discontinuation of Xsolla/i, 'Gate is missing token retirement on provider replacement.');
requireMatch(gate, /15\. An invalidation request is retried/is, 'Gate is missing the 15-case token-lifecycle regression matrix.');

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
requireMatch(gate, /stale checkout.*token invalidation error.*provider delay/is, 'Gate must preserve mandatory remedies for token-lifecycle integration failures.');

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

console.log('TycoonX Xsolla transaction identifier and token-lifecycle QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: Xsolla int64, external-ID, redirect, token-expiry/invalidation, stale-checkout, entitlement, refund, sandbox, privacy, and mandatory-rights safeguards are present.');
}
