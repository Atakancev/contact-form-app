#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const GATE = path.join(ROOT, 'TYCOONX_XSOLLA_USER_VALIDATION_WEBHOOK_RESPONSE_RELEASE_GATE.md');
const REFUND_GATE = path.join(ROOT, 'TYCOONX_XSOLLA_REFUND_CHARGEBACK_RELEASE_GATE.md');
const ID_GATE = path.join(ROOT, 'TYCOONX_XSOLLA_TRANSACTION_ID_EXTERNAL_ID_RELEASE_GATE.md');
const PURCHASES = path.join(ROOT, 'app', 'tyconx-purchase-refund-policy', 'page.tsx');
const TERMS = path.join(ROOT, 'app', 'tyconx-terms-of-service', 'page.tsx');
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

const gate = await read(GATE, 'Xsolla user-validation/webhook-response gate');
const refundGate = await read(REFUND_GATE, 'Xsolla refund/chargeback gate');
const idGate = await read(ID_GATE, 'Xsolla transaction-identifier gate');
const purchases = await read(PURCHASES, 'canonical Purchases & Refunds page');
const terms = await read(TERMS, 'canonical Terms page');
const progress = await read(PROGRESS, 'localization progress tracker');

requireMatch(gate, /September 8, 2026/, 'Xsolla user-validation gate is missing the current review checkpoint.');
requireMatch(gate, /user_validation.*pre-payment gate/is, 'Gate must identify user_validation as pre-payment authorization rather than fulfillment.');
requireMatch(gate, /not retried|not resent/i, 'Gate is missing Xsolla user-validation no-retry behavior.');
requireMatch(gate, /400.*5xx.*no response/is, 'Gate is missing the failure responses that stop user-validation processing.');
requireMatch(gate, /player sees an error/i, 'Gate is missing the player-visible result of failed user validation.');
requireMatch(gate, /subsequent payment.*successful-payment-for-order|later payment.*successful-order/is, 'Gate is missing the rule that later payment/order webhooks do not follow a failed validation attempt.');
requireMatch(gate, /return success only after.*account-existence|success response.*account-existence/is, 'Gate must not acknowledge user validation before the account decision is made.');
requireMatch(gate, /does not grant Diamonds|do not grant Diamonds/is, 'Gate must keep user validation separate from entitlement fulfillment.');
requireMatch(gate, /not evidence that money was charged|not.*money was charged/is, 'Gate must not treat successful validation as payment authority.');
requireMatch(gate, /temporary CK-Labs infrastructure failure.*not.*invalid player account/is, 'Gate must distinguish transient infrastructure failure from an invalid player account.');
requireMatch(gate, /not proof of fraud.*hacking.*account compromise|failed validation attempt is not proof/is, 'Gate must not convert validation failure into automatic misconduct.');

requireMatch(gate, /stable internal account identifier/i, 'Gate is missing a stable internal payment identity requirement.');
requireMatch(gate, /Do not use a mutable nickname/i, 'Gate must block mutable nicknames as authoritative payment identity.');
requireMatch(gate, /Do not use an email address as the sole payment identity/i, 'Gate must block email as sole payment identity.');
requireMatch(gate, /account deletion.*does not silently recycle|deleted\/recreated account.*not silently recycled/is, 'Gate must protect historical identifiers from unsafe recycling.');
requireMatch(gate, /GDPR purpose limitation\/data minimization|purpose limitation.*data minimization/is, 'Gate must preserve privacy minimization for Xsolla account identifiers.');

requireMatch(gate, /user\.id.*user\.external_id.*transaction ID.*external_id.*order ID/is, 'Gate must preserve the distinct Xsolla identity namespaces.');
requireMatch(gate, /must not be collapsed into one generic `id` field/i, 'Gate must prohibit collapsing Xsolla identifiers into one generic ID.');
requireMatch(gate, /order ID as a player ID.*player ID as a transaction ID/is, 'Gate must prevent cross-namespace identifier misuse.');
requireMatch(gate, /combined.*user\.external_id/is, 'Gate is missing combined-order user.external_id account mapping.');
requireMatch(gate, /order\.id.*idempotency/i, 'Gate is missing order.id idempotency.');
requireMatch(gate, /order\.mode.*sandbox/is, 'Gate is missing sandbox order-mode isolation.');
requireMatch(gate, /identity mismatch.*risk signal.*not automatic proof|mismatch is a risk signal/i, 'Gate must not treat an identity mismatch as automatic fraud proof.');

requireMatch(gate, /200.*201.*204/is, 'Gate is missing documented webhook success responses.');
requireMatch(gate, /Do not return a business-rejection `4xx` for a transient/i, 'Gate must not map transient CK-Labs failures to business-rejection 4xx responses.');
requireMatch(gate, /Do not return `2xx` before durable recording/i, 'Gate must not acknowledge paid/refund events before durable recording.');
requireMatch(gate, /automatic payment refund.*enabled/is, 'Gate must require awareness of Xsolla automatic-refund configuration.');
requireMatch(gate, /certain `4xx` responses.*automatic refund|listed `4xx`.*automatic refunds/is, 'Gate is missing the financial consequence of 4xx when automatic refunds are enabled.');
requireMatch(gate, /do not intentionally use `4xx` as an undocumented refund API substitute/i, 'Gate must prohibit using webhook response codes as a refund API substitute.');
requireMatch(gate, /reconcile.*authoritative refund\/cancellation state|authoritative.*refund.*state/is, 'Gate must reconcile provider state before entitlement correction after response-code incidents.');
requireMatch(gate, /retry exhaustion.*not a player-fraud signal/i, 'Gate must separate retry exhaustion from player misconduct.');
requireMatch(gate, /never suspend\/terminate an account merely because CK-Labs failed to acknowledge/i, 'Gate must prohibit enforcement based only on CK-Labs webhook failure.');

requireMatch(gate, /Purchased Diamonds do not expire solely because time passes/i, 'Gate must preserve the purchased-Diamonds non-expiry invariant.');
requireMatch(gate, /one-time non-renewing 30-Day VIP.*30 consecutive days/is, 'Gate must preserve the one-time 30-Day VIP invariant.');
requireMatch(gate, /Lifetime VIP remains a limited-time promotional one-time entitlement/i, 'Gate must preserve Lifetime VIP limited-sales-window treatment.');
requireMatch(gate, /stale Xsolla item.*old identifier.*must not reopen a closed sales window/is, 'Gate must prevent stale Xsolla state from reopening Lifetime VIP sales.');
requireMatch(gate, /valid provider-confirmed Lifetime VIP transaction.*preserve|provider later authoritatively confirms a valid transaction/is, 'Gate must preserve valid provider-confirmed Lifetime VIP transactions.');
requireMatch(gate, /mandatory EU\/German consumer remedies/i, 'Gate must preserve mandatory EU/German remedies.');
requireMatch(gate, /implementation failure is not a basis to keep consumer money/i, 'Gate must not let CK-Labs implementation failure defeat mandatory remedies.');

requireMatch(gate, /Minimum regression matrix/i, 'Gate is missing its regression matrix.');
for (const n of [1, 5, 7, 9, 10, 11, 14, 15, 16, 20]) {
  requireMatch(gate, new RegExp(`\\n${n}\\.`), `Gate regression matrix is missing case ${n}.`);
}
requireMatch(gate, /Release blockers/i, 'Gate is missing release blockers.');
requireMatch(gate, /team does not know whether automatic payment refund is enabled/i, 'Gate must block release when production auto-refund configuration is unknown.');

requireMatch(refundGate, /raw request body/i, 'Existing Xsolla refund gate no longer preserves raw-body signature verification.');
requireMatch(refundGate, /20.*attempts.*12 hours/is, 'Existing Xsolla refund gate no longer preserves combined-webhook retry handling.');
requireMatch(idGate, /external ID.*unique.*sandbox.*live|sandbox.*live.*external ID/is, 'Existing Xsolla identifier gate no longer preserves cross-environment external-ID uniqueness.');

requireMatch(purchases, /TycoonX web shop powered by Xsolla/i, 'Canonical Purchases page is missing the official Xsolla webshop section.');
requireMatch(purchases, /valid confirmation of successful payment/i, 'Canonical Purchases page no longer requires provider-confirmed Xsolla fulfillment.');
requireMatch(purchases, /30-Day VIP is a one-time, non-renewing entitlement lasting 30 consecutive days/i, 'Canonical Purchases page lost the one-time 30-Day VIP definition.');
requireMatch(purchases, /Lifetime VIP is a one-time entitlement.*selected limited promotional sales windows/is, 'Canonical Purchases page lost Lifetime VIP limited-window treatment.');
requireMatch(purchases, /Purchased Diamonds do not expire solely because time passes/i, 'Canonical Purchases page lost purchased-Diamonds non-expiry.');
requireMatch(terms, /mandatory.*consumer|consumer.*mandatory/is, 'Canonical Terms no longer preserve mandatory consumer-law protections.');

requireMatch(progress, /25\/25/, 'Localization tracker no longer records all 25 localized hubs.');
requireMatch(progress, /100 localized full documents are current/i, 'Localization tracker no longer records all 100 localized documents as current.');
requireMatch(progress, /Exact next unfinished locale\/document: None/i, 'Localization tracker unexpectedly reports unfinished localization work.');
requireMatch(progress, /September 1, 2026/, 'Localization tracker lost the TycoonX full-release date invariant.');

for (const [label, text] of [
  ['gate', gate],
  ['Purchases', purchases],
  ['Terms', terms],
]) {
  if (/TyconX/.test(text)) errors.push(`${label} contains displayed brand typo "TyconX".`);
  if (/\bTycoonX\s+(?:is|remains|service is|game is)\s+(?:a\s+)?beta\b/i.test(text)) {
    errors.push(`${label} contains stale player-facing beta wording.`);
  }
}

console.log('TycoonX Xsolla user validation / webhook response QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: Xsolla user-validation, account-attribution, webhook-response, retry/refund, sandbox, product-invariant, and mandatory-rights safeguards are present.');
}
