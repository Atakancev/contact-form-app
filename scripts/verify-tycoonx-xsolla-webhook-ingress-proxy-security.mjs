#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const GATE = path.join(ROOT, 'TYCOONX_XSOLLA_WEBHOOK_INGRESS_PROXY_SECURITY_RELEASE_GATE.md');
const REFUND_GATE = path.join(ROOT, 'TYCOONX_XSOLLA_REFUND_CHARGEBACK_RELEASE_GATE.md');
const VALIDATION_GATE = path.join(ROOT, 'TYCOONX_XSOLLA_USER_VALIDATION_WEBHOOK_RESPONSE_RELEASE_GATE.md');
const PURCHASES = path.join(ROOT, 'app', 'tyconx-purchase-refund-policy', 'page.tsx');
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

const gate = await read(GATE, 'Xsolla webhook ingress/proxy security gate');
const refundGate = await read(REFUND_GATE, 'existing Xsolla refund/chargeback gate');
const validationGate = await read(VALIDATION_GATE, 'existing Xsolla user-validation gate');
const purchases = await read(PURCHASES, 'canonical Purchases & Refunds page');
const progress = await read(PROGRESS, 'legal localization progress tracker');

requireMatch(gate, /September 8, 2026/, 'Ingress gate is missing the current review checkpoint.');
requireMatch(gate, /focused ingress-security companion/i, 'Ingress gate must remain a narrow companion rather than duplicate Xsolla refund doctrine.');

for (const address of [
  '185.30.20.0/24',
  '185.30.21.0/24',
  '185.30.22.0/24',
  '185.30.23.0/24',
  '34.102.38.178',
  '34.94.43.207',
  '35.236.73.234',
  '34.94.69.44',
  '34.102.22.197',
]) {
  requireMatch(gate, new RegExp(address.replaceAll('.', '\\.').replace('/', '\\/')), `Ingress gate is missing current Xsolla base webhook source ${address}.`);
}

requireMatch(gate, /Login product.*additional source|additional source addresses when its Login product/is, 'Ingress gate must keep Xsolla Login-only sources conditional.');
requireMatch(gate, /Do not treat this dated list as immutable/i, 'Ingress gate must require future Xsolla source-list review.');
requireMatch(gate, /source IP is defense in depth|allowed source IP is defense in depth/i, 'Ingress gate must keep source IP secondary to signature verification.');
requireMatch(gate, /Authorization: Signature <signature_value>/i, 'Ingress gate is missing Xsolla signature-header format.');
requireMatch(gate, /exact raw request body/i, 'Ingress gate must preserve the exact raw signed body.');
requireMatch(gate, /raw_body \+ project secret.*SHA-1.*lowercase-hex/is, 'Ingress gate is missing Xsolla raw-body-plus-secret SHA-1 construction.');
requireMatch(gate, /constant-time comparison/i, 'Ingress gate must require timing-safe signature comparison where supported.');
requireMatch(gate, /fail closed.*missing, malformed, or mismatching signature/is, 'Ingress gate must fail closed on invalid signature.');
requireMatch(gate, /valid signature.*does not by itself prove payment success/is, 'Ingress gate must not treat signature validity as payment authority.');

requireMatch(gate, /Reverse proxies and `X-Forwarded-For`/i, 'Ingress gate is missing reverse-proxy source handling.');
requireMatch(gate, /immediate network peer.*explicitly trusted/is, 'Ingress gate must trust forwarded IP only through an explicit trusted proxy.');
requireMatch(gate, /never let an arbitrary internet client choose the effective source IP/i, 'Ingress gate must block client-controlled forwarded-IP spoofing.');
requireMatch(gate, /origin can be reached directly.*block the direct path|block the direct path.*origin/is, 'Ingress gate must protect direct-origin bypass around trusted proxies.');
requireMatch(gate, /naive string-prefix test for CIDR membership/i, 'Ingress gate must reject naive CIDR prefix matching.');
requireMatch(gate, /X-Forwarded-For: 34\.102\.38\.178/i, 'Ingress gate is missing a concrete forwarded-IP spoof regression example.');

requireMatch(gate, /Preserve the exact signed body through ingress/i, 'Ingress gate is missing body-integrity controls across proxy/WAF middleware.');
requireMatch(gate, /parse and re-serialize JSON before signature verification/i, 'Ingress gate must block pre-verification JSON normalization.');
requireMatch(gate, /request-size limits.*bounded against abuse/is, 'Ingress gate must retain bounded request-size protection.');
requireMatch(gate, /Do not temporarily accept unsigned callbacks/i, 'Ingress gate must not bypass signature verification during middleware regressions.');

requireMatch(gate, /CSRF exemption must be narrow/i, 'Ingress gate is missing narrow CSRF-exemption scoping.');
requireMatch(gate, /dedicated Xsolla server-to-server callback route/i, 'Ingress gate must scope CSRF exemption to the Xsolla callback.');
requireMatch(gate, /Do not disable CSRF protection for the whole TycoonX website/i, 'Ingress gate must prevent site-wide CSRF disabling.');

requireMatch(gate, /Durable ingest before a success acknowledgement/i, 'Ingress gate is missing the durable-ingest acknowledgement boundary.');
requireMatch(gate, /durably record or enqueue.*idempotency identity/is, 'Ingress gate must durably ingest the verified event before success acknowledgement.');
requireMatch(gate, /only then return.*successful acknowledgement/is, 'Ingress gate must acknowledge only after durable ingest.');
requireMatch(gate, /Do not return `2xx`.*process memory/is, 'Ingress gate must not acknowledge events that exist only in volatile memory.');
requireMatch(gate, /user_validation.*synchronous purchase-authorization/is, 'Ingress gate must preserve standard user-validation response semantics.');

requireMatch(gate, /unknown `notification_type`.*not fall through.*paid/is, 'Ingress gate must fail closed on unknown webhook event types.');
requireMatch(gate, /Do not guess a product from price alone/i, 'Ingress gate must not infer product identity from price.');
requireMatch(gate, /Do not guess an account from nickname or email alone/i, 'Ingress gate must not infer payment identity from mutable profile data.');

requireMatch(gate, /full `Authorization` signature value.*general application logs/is, 'Ingress gate must keep signatures out of general logs.');
requireMatch(gate, /full raw webhook payload.*general application logs/is, 'Ingress gate must minimize raw webhook payload logging.');
requireMatch(gate, /purpose limitation.*data minimization.*integrity\/confidentiality/is, 'Ingress gate must preserve privacy/security principles for webhook evidence.');

requireMatch(gate, /order\.mode: "sandbox"/i, 'Ingress gate must preserve Xsolla sandbox isolation.');
requireMatch(gate, /Authenticity does not make a sandbox transaction production money/i, 'Ingress gate must separate signed test events from production payment authority.');
requireMatch(gate, /not player misconduct/i, 'Ingress incidents must not become automatic player misconduct.');
requireMatch(gate, /reconcile the affected transaction from authoritative Xsolla records/i, 'Ingress failures must reconcile from authoritative provider state.');

requireMatch(gate, /Purchased Diamonds do not expire merely because time passes/i, 'Ingress gate is missing the purchased-Diamonds non-expiry invariant.');
requireMatch(gate, /30-Day VIP.*30 consecutive days/is, 'Ingress gate is missing the one-time 30-Day VIP duration invariant.');
requireMatch(gate, /Lifetime VIP remains a limited-time promotional one-time entitlement/is, 'Ingress gate is missing Lifetime VIP limited-sales-window semantics.');
requireMatch(gate, /may be withdrawn from future sale, may never return/i, 'Ingress gate is missing Lifetime VIP future-availability protection.');
requireMatch(gate, /does not by itself reopen a closed Lifetime VIP sales window/i, 'Ingress gate must block stale/replayed traffic from reopening Lifetime VIP sales.');
requireMatch(gate, /mandatory EU\/German withdrawal, conformity, update, notice, consent, price-reduction, termination, refund, liability, privacy, accessibility/i, 'Ingress gate must preserve mandatory EU/German consumer rights.');

requireMatch(refundGate, /raw request body/i, 'Existing Xsolla refund gate no longer preserves raw-body signature verification.');
requireMatch(refundGate, /constant-time comparison/i, 'Existing Xsolla refund gate no longer preserves timing-safe signature comparison.');
requireMatch(refundGate, /source IP.*substitute for signature verification|IP allowlist.*substitute for signature verification/is, 'Existing Xsolla refund gate no longer keeps IP checks secondary to signature verification.');
requireMatch(validationGate, /two distinct user-validation surfaces/i, 'Existing Xsolla validation gate no longer distinguishes its two validation contracts.');

requireMatch(purchases, /TycoonX web shop powered by Xsolla/i, 'Canonical Purchases page is missing the Xsolla purchase-channel section.');
requireMatch(purchases, /valid confirmation of successful payment/i, 'Canonical Purchases page no longer requires valid provider confirmation before Xsolla fulfillment.');
requireMatch(purchases, /Lifetime VIP.*selected limited promotional sales windows/is, 'Canonical Purchases page is missing Lifetime VIP selected sales-window semantics.');
requireMatch(progress, /All 25 target locales and all 100 localized full documents are current/i, 'Localization progress no longer confirms 100 localized full documents current.');
requireMatch(progress, /25\/25.*target locales/i, 'Localization progress no longer confirms all 25 localized hubs.');

for (const [label, text] of [
  ['ingress gate', gate],
  ['Purchases', purchases],
  ['progress tracker', progress],
]) {
  if (/TyconX/.test(text)) errors.push(`${label} contains displayed brand typo "TyconX".`);
  if (/\bTycoonX\s+(?:is|remains|service is|game is)\s+(?:a\s+)?beta\b/i.test(text)) {
    errors.push(`${label} contains stale player-facing beta wording.`);
  }
}

console.log('TycoonX Xsolla webhook ingress/proxy security QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: Xsolla webhook source/proxy trust, raw-body integrity, signature, CSRF scope, durable-ingest, sandbox, entitlement, and mandatory-rights safeguards are present.');
}
