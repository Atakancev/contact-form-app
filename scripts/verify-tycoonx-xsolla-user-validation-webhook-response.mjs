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

requireMatch(gate, /September 8, 2026/, 'Gate is missing the current review checkpoint.');
requireMatch(gate, /two distinct user-validation surfaces/i, 'Gate must distinguish Xsolla user-validation surfaces.');
requireMatch(gate, /notification type `user_validation`/i, 'Gate is missing standard user_validation identification.');
requireMatch(gate, /user-validation-in-webshop/i, 'Gate is missing the Web Shop-specific validation endpoint.');
requireMatch(gate, /without a `notification_type` value/i, 'Gate must preserve the Web Shop-specific no-notification-type request contract.');
requireMatch(gate, /must not inherit each other's response codes/i, 'Gate must not collapse the two validation contracts.');

requireMatch(gate, /verify the Xsolla webhook signature against the raw request body/i, 'Standard user_validation must keep raw-body signature verification.');
requireMatch(gate, /resolve `user\.id` to an existing TycoonX account/i, 'Standard user_validation must map user.id deliberately.');
requireMatch(gate, /return success only after.*account-existence/is, 'Standard validation must not acknowledge before the account decision.');
requireMatch(gate, /do not grant Diamonds.*30-Day VIP.*Lifetime VIP/is, 'Validation must not become entitlement authority.');
requireMatch(gate, /do not treat successful validation as evidence that money was charged/i, 'Validation must not become payment authority.');
requireMatch(gate, /Do not return `INVALID_USER` merely because an internal dependency timed out/i, 'Temporary CK-Labs failures must not be mislabeled as invalid users.');
requireMatch(gate, /400.*5xx.*no response/is, 'Gate is missing standard user_validation failure conditions.');
requireMatch(gate, /validation webhook is not resent/i, 'Gate is missing standard user_validation no-retry behavior.');
requireMatch(gate, /player sees an error/i, 'Gate is missing the player-visible validation failure result.');
requireMatch(gate, /subsequent Payment and Successful payment for order webhooks are not sent/i, 'Gate is missing the downstream effect of failed standard validation.');
requireMatch(gate, /failed validation attempt is not proof of fraud/i, 'Validation failure must not become automatic misconduct proof.');

requireMatch(gate, /Web Shop-specific user validation has a different contract/i, 'Gate is missing Web Shop-specific contract separation.');
requireMatch(gate, /settings\.project_id.*settings\.merchant_id.*user\.id/is, 'Gate is missing current Web Shop validation request fields.');
requireMatch(gate, /documented response is `200`.*`404`/is, 'Gate is missing current Web Shop 200/404 responses.');
requireMatch(gate, /do not require `notification_type: user_validation`/i, 'Gate must not require the standard notification type on Web Shop validation.');
requireMatch(gate, /do not blindly return standard `204`\/`400`\/`5xx` semantics/i, 'Gate must not copy standard response semantics onto Web Shop validation.');
requireMatch(gate, /actual authentication\/integrity mechanism/i, 'Gate must require confirmation of the live Web Shop endpoint security mechanism.');
requireMatch(gate, /34\.102\.38\.178/, 'Gate is missing Xsolla current Web Shop source-IP checkpoint.');
requireMatch(gate, /IP allowlist.*defense-in-depth/is, 'Gate must not treat the documented Web Shop source IP as sole authentication.');

requireMatch(gate, /appPlayerId/i, 'Gate is missing Web Shop appPlayerId handling.');
requireMatch(gate, /passed in `custom_parameters`/i, 'Gate is missing current appPlayerId token-propagation behavior.');
requireMatch(gate, /appPlayerId.*stable internal account mapping/is, 'Gate must derive appPlayerId from stable TycoonX identity.');
requireMatch(gate, /never accept a client-supplied `appPlayerId` as authoritative/i, 'Gate must reject client-controlled appPlayerId authority.');
requireMatch(gate, /do not treat `appPlayerId` as transaction ID, order ID, refund ID, or proof of successful payment/i, 'Gate must keep appPlayerId out of payment authority.');

requireMatch(gate, /stable internal account identifier/i, 'Gate is missing stable account identity.');
requireMatch(gate, /Do not use a mutable nickname/i, 'Gate must block mutable nickname payment identity.');
requireMatch(gate, /Do not use an email address as the sole payment identity/i, 'Gate must block email as sole payment identity.');
requireMatch(gate, /account deletion\/recreation does not silently recycle/i, 'Gate must prevent payment-identity recycling.');
requireMatch(gate, /purpose limitation\/data minimization/i, 'Gate must preserve privacy minimization.');

requireMatch(gate, /user\.id.*appPlayerId.*user\.external_id.*transaction ID.*external_id.*order\.id/is, 'Gate must preserve distinct Xsolla identifier namespaces.');
requireMatch(gate, /must not be collapsed into one generic `id` field/i, 'Gate must prohibit generic-ID collapse.');
requireMatch(gate, /Equal-looking strings do not make these namespaces interchangeable/i, 'Gate must not infer identifier equivalence from similar values.');
requireMatch(gate, /combined.*user\.external_id/is, 'Gate is missing combined-order user.external_id mapping.');
requireMatch(gate, /order\.id.*idempotency/i, 'Gate is missing order.id idempotency.');
requireMatch(gate, /order\.mode.*sandbox/is, 'Gate is missing sandbox order-mode isolation.');
requireMatch(gate, /identity mismatch is a risk signal, not automatic proof/i, 'Gate must not turn identity mismatch into automatic fraud proof.');

requireMatch(gate, /200.*201.*204/is, 'Gate is missing current standard webhook success responses.');
requireMatch(gate, /Do not return a business-rejection `4xx` for a transient/i, 'Gate must not map transient CK-Labs failures to business-rejection 4xx.');
requireMatch(gate, /Do not return `2xx` before durable recording/i, 'Gate must not acknowledge payment events before durable recording.');
requireMatch(gate, /automatic payment refund.*certain `4xx`/is, 'Gate is missing combined-order 4xx automatic-refund behavior.');
requireMatch(gate, /400.*401.*402.*403.*404.*409.*415.*422/is, 'Gate is missing the current listed combined-order 4xx response set.');
requireMatch(gate, /disabled.*no automatic refund action/is, 'Gate must preserve the current default-disabled distinction.');
requireMatch(gate, /do not use `4xx` as an undocumented refund API substitute/i, 'Gate must prohibit status-code refund hacks.');
requireMatch(gate, /same HTTP number can have different meaning on different Xsolla endpoints/i, 'Gate must separate Web Shop 404 from combined-order 404 semantics.');
requireMatch(gate, /20 attempts within 12 hours/i, 'Gate is missing current combined-order retry limit.');
requireMatch(gate, /Never suspend or terminate an account merely because CK-Labs failed to acknowledge/i, 'Webhook failure must not become player enforcement.');

requireMatch(gate, /Purchased Diamonds do not expire solely because time passes/i, 'Gate must preserve purchased-Diamonds non-expiry.');
requireMatch(gate, /one-time non-renewing 30-Day VIP.*30 consecutive days/is, 'Gate must preserve one-time 30-Day VIP.');
requireMatch(gate, /Lifetime VIP remains a limited-time promotional one-time entitlement/i, 'Gate must preserve Lifetime VIP limited-window treatment.');
requireMatch(gate, /surrounding catalog\/token\/checkout eligibility path/i, 'Lifetime VIP sale-window checks must live in a product-aware path.');
requireMatch(gate, /user-validation payload that lacks product context/i, 'Gate must not pretend user validation necessarily has Lifetime VIP product context.');
requireMatch(gate, /valid Lifetime VIP transaction.*genuine offer/is, 'Gate must preserve valid provider-confirmed Lifetime VIP transactions.');

requireMatch(gate, /Minimum regression matrix/i, 'Gate is missing its regression matrix.');
for (const n of [1, 4, 5, 7, 8, 11, 13, 14, 15, 16, 18, 19, 20, 23]) {
  requireMatch(gate, new RegExp(`\\n${n}\\.`), `Gate regression matrix is missing case ${n}.`);
}
requireMatch(gate, /Release blockers/i, 'Gate is missing release blockers.');
requireMatch(gate, /cannot distinguish standard `user_validation` from Web Shop-specific validation/i, 'Gate must block release when the two validation flows are conflated.');
requireMatch(gate, /actual authentication\/integrity mechanism.*unknown/i, 'Gate must block release when Web Shop validation security is unresolved.');
requireMatch(gate, /does not know whether automatic payment refund is enabled/i, 'Gate must block release when auto-refund configuration is unknown.');
requireMatch(gate, /mandatory EU\/German consumer remedies/i, 'Gate must preserve mandatory EU/German remedies.');
requireMatch(gate, /implementation failure is not a basis to keep consumer money/i, 'CK-Labs implementation failure must not defeat mandatory remedies.');

requireMatch(refundGate, /raw request body/i, 'Existing Xsolla refund gate lost raw-body signature verification.');
requireMatch(refundGate, /20.*attempts.*12 hours/is, 'Existing Xsolla refund gate lost combined-order retry handling.');
requireMatch(idGate, /external ID.*unique.*sandbox.*live|sandbox.*live.*external ID/is, 'Existing Xsolla identifier gate lost cross-environment external-ID uniqueness.');

requireMatch(purchases, /TycoonX web shop powered by Xsolla/i, 'Canonical Purchases page is missing the Xsolla webshop section.');
requireMatch(purchases, /valid confirmation of successful payment/i, 'Canonical Purchases page lost provider-confirmed Xsolla fulfillment.');
requireMatch(purchases, /Purchased Diamonds do not expire solely because time passes/i, 'Canonical Purchases page lost purchased-Diamonds non-expiry.');
requireMatch(purchases, /30-Day VIP is a one-time, non-renewing entitlement lasting 30 consecutive days/i, 'Canonical Purchases page lost 30-Day VIP definition.');
requireMatch(purchases, /Lifetime VIP is a one-time entitlement.*selected limited promotional sales windows/is, 'Canonical Purchases page lost Lifetime VIP limited-window treatment.');
requireMatch(terms, /mandatory.*consumer|consumer.*mandatory/is, 'Canonical Terms no longer preserve mandatory consumer-law protections.');

requireMatch(progress, /25\/25/, 'Localization tracker no longer records all 25 hubs.');
requireMatch(progress, /all 100 localized full documents are current/i, 'Localization tracker no longer records all 100 documents current.');
requireMatch(progress, /Exact next unfinished locale\/document: None/i, 'Localization tracker unexpectedly reports unfinished localization work.');
requireMatch(progress, /September 1, 2026/, 'Localization tracker lost the full-release date invariant.');

for (const [label, text] of [['gate', gate], ['Purchases', purchases], ['Terms', terms]]) {
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
  console.log('PASS: Xsolla standard-vs-Web-Shop validation, account attribution, webhook response/refund, retry, sandbox, product-invariant, and mandatory-rights safeguards are present.');
}
