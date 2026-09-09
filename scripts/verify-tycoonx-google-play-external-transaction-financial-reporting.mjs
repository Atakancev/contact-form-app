#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), "utf8");

const gate = read("TYCOONX_GOOGLE_PLAY_EXTERNAL_TRANSACTION_FINANCIAL_REPORTING_RELEASE_GATE.md");
const billingChoice = read("TYCOONX_GOOGLE_PLAY_BILLING_CHOICE_PBL_9_1_IMPLEMENTATION_GATE.md");
const paymentTransition = read("TYCOONX_GOOGLE_PLAY_2026_PAYMENT_TRANSITION_GATE.md");
const purchases = read("tyconx-purchase-refund-policy.md");
const progress = read("TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md");

const failures = [];
const requirePattern = (label, text, pattern) => {
  if (!pattern.test(text)) failures.push(label);
};

const checks = [
  ["review date", /Last reviewed:\s*September 9, 2026/i],
  ["full release", /went to full release on September 1, 2026/i],
  ["not entitlement authority", /not payment confirmation and not entitlement authority/i],
  ["authoritative provider completion", /authoritative provider payment completion/i],
  ["stable non PII id", /stable, non-PII `externalTransactionId`/i],
  ["external ID unique", /unique across transactions for the app/i],
  ["external ID length", /1-63 characters/i],
  ["external ID allowed chars", /letters, digits, `_` and `-`/i],
  ["PII prohibition", /not to put personally identifiable information such as email addresses/i],
  ["opaque ID", /random or internal opaque reporting ID/i],
  ["do not recycle IDs", /never recycle an old external transaction ID/i],
  ["ambiguous timeout ID reuse", /never create a second ID merely because the first API request timed out/i],
  ["original pre tax", /`originalPreTaxAmount`/],
  ["original tax", /`originalTaxAmount`/],
  ["transaction time", /`transactionTime`/],
  ["tax address", /`userTaxAddress`/],
  ["customer currency", /actual transaction currency/i],
  ["no settlement overwrite", /settlement, payout, bookkeeping, or developer-account currency/i],
  ["no current catalog rewrite", /today's Diamond bundle price|today's VIP price/i],
  ["no tax fabrication", /unknown tax field is a reconciliation problem/i],
  ["completion time semantics", /time the transaction was completed/i],
  ["RFC 3339", /RFC 3339/i],
  ["no token time substitution", /reporting-token creation time/i],
  ["no worker time substitution", /worker-processing time/i],
  ["create time separation", /output-only `createTime` is the time Google was notified/i],
  ["tax two letter", /two-letter `regionCode`/i],
  ["India area", /`administrativeArea` for India/i],
  ["no profile country shortcut", /profile country/i],
  ["no IP only shortcut", /IP geolocation alone/i],
  ["tax address not fraud proof", /not use `userTaxAddress` as proof of permanent residence.*fraud/is],
  ["Diamonds zero from report", /reporting token or successful Google external-transaction report grants zero Diamonds/i],
  ["Diamonds no time expiry", /Purchased Diamonds do not expire solely because time passes/i],
  ["30 Day exact", /30-Day VIP remains one non-renewing entitlement lasting 30 consecutive days from activation or availability/i],
  ["30 Day clock separation", /reporting-token creation, report submission and `createTime` do not start the VIP clock/i],
  ["Lifetime limited window", /Lifetime VIP remains a limited-time promotional one-time entitlement offered only during selected genuine sales windows/i],
  ["Lifetime may never return", /may never return/i],
  ["Lifetime no reopen", /cannot reopen a closed Lifetime VIP sales window/i],
  ["manual sunset", /manual reporting of alternative billing only and user-choice billing is being sunset/i],
  ["no spreadsheet architecture", /spreadsheets, monthly manual Play reporting/i],
  ["migrated field restricted", /`migratedTransactionProgram` for migrating subscriptions from manual monthly reporting/i],
  ["no migrated field for current products", /do not use that field for purchased Diamonds, one-time 30-Day VIP or Lifetime VIP/i],
  ["reported state", /`TRANSACTION_REPORTED`/],
  ["canceled state", /`TRANSACTION_CANCELED`/],
  ["separate state domains", /provider payment state;[\s\S]*Google external-reporting state;[\s\S]*TycoonX entitlement-delivery state/i],
  ["refund endpoint", /`refundexternaltransaction`/],
  ["partial refund id", /unique `refundId`/i],
  ["partial pre tax", /`refundPreTaxAmount`/],
  ["refund actual time", /actual `refundTime`/i],
  ["no invented refund tax", /do not send an additional tax-refund amount/i],
  ["current amounts reconcile", /`currentPreTaxAmount` and `currentTaxAmount`/],
  ["refund isolation", /refund of transaction A must never revoke.*transaction B/is],
  ["test purchase", /`testPurchase`/],
  ["test no production revenue", /do not count a Google test transaction as production revenue/i],
  ["get reconciliation", /`getexternaltransaction`/],
  ["outage no fabricated success", /Do not fabricate success, payment completion, tax data or refund data/i],
  ["pause affected offers", /pausing new affected alternative-billing offers/i],
  ["provider replacement", /replaces Xsolla/i],
  ["historical currency", /keep original transaction currency, amount, tax and provider identifiers historically accurate/i],
  ["backend OAuth", /Android Publisher OAuth scope.*secure backend/is],
  ["no client credentials", /credentials embedded in the TycoonX APK\/app bundle/i],
  ["least privilege", /support users able to create\/refund arbitrary Google external transactions/i],
  ["23 regressions", /23\. mandatory German\/EU consumer remedies/i],
  ["mandatory rights", /mandatory rights concerning provision, conformity, updates, cure, termination, price reduction, damages, withdrawal/i],
  ["no fraud rewrite", /internal reporting mistake must not be rewritten as player fraud/i],
  ["manual evidence", /legacy manual alternative-billing reporting is not the production transaction-reporting architecture/i],
];

for (const [label, pattern] of checks) requirePattern(`gate: ${label}`, gate, pattern);

requirePattern("billing choice: external token", billingChoice, /externalTransactionToken/);
requirePattern("billing choice: 24 hour reporting", billingChoice, /24-hour/i);
requirePattern("billing choice: authoritative payment", billingChoice, /authoritative payment confirmation/i);
requirePattern("payment transition: Xsolla", paymentTransition, /Xsolla/);
requirePattern("payment transition: refund", paymentTransition, /refund/i);
requirePattern("canonical purchases: Diamonds", purchases, /Diamonds/i);
requirePattern("canonical purchases: 30 Day VIP", purchases, /30-Day VIP/i);
requirePattern("canonical purchases: Lifetime VIP", purchases, /Lifetime VIP/i);
requirePattern("progress: 25 hubs", progress, /25\s*\/\s*25|25\/25/i);
requirePattern("progress: 100 documents", progress, /100 localized full documents are current/i);
requirePattern("progress: no unfinished locale", progress, /Exact next unfinished locale\/document:\s*None/i);

if (/\bTyconX\b/.test(gate)) failures.push("gate: displayed brand typo TyconX");
if (/TycoonX\s+beta/i.test(gate)) failures.push("gate: stale beta wording");
if (/goes to full release/i.test(gate)) failures.push("gate: stale future release wording");

if (failures.length) {
  console.error("TycoonX Google Play external transaction financial reporting verifier: FAIL");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`TycoonX Google Play external transaction financial reporting verifier: PASS (${checks.length} gate checks)`);
