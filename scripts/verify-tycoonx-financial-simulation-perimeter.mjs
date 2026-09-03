#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), "utf8");

const gate = read("TYCOONX_FINANCIAL_SIMULATION_STORE_REVIEW_CHECKLIST.md");
const terms = read("tyconx-terms-of-service.md");
const purchases = read("tyconx-purchase-refund-policy.md");
const progress = read("TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md");

const failures = [];
const requirePattern = (label, text, pattern) => {
  if (!pattern.test(text)) failures.push(label);
};

const gateChecks = [
  ["review date", /Last reviewed:\s*September 3, 2026/i],
  ["fictional simulation position", /entertainment and economic simulation game/i],
  ["Apple financial-services rule", /financial trading, investing, or money management/i],
  ["Google Financial features declaration", /Financial features declaration/i],
  ["Google no-financial-features option", /does not provide financial features/i],
  ["German ZAG", /ZAG § 1|ZAG \u00a7 1/i],
  ["e-money issuer claim", /claim against the issuer/i],
  ["third-party acceptance trigger", /third-party real-world merchants|persons other than the issuer/i],
  ["MiCA", /Regulation \(EU\) 2023\/1114|MiCA/i],
  ["DLT trigger", /distributed-ledger technology|DLT/i],
  ["external wallet trigger", /external wallet/i],
  ["real brokerage trigger", /real brokerage/i],
  ["real lending trigger", /real consumer credit|lends real money/i],
  ["real financial advice trigger", /personalized recommendations about real investments|real financial advice/i],
  ["German gambling authority", /GGL|Gemeinsame Glücksspielbehörde/i],
  ["paid chance trigger", /payment is required to acquire a chance to win|paid chance mechanic/i],
  ["no cash-out", /no-cash-out|cash-out/i],
  ["Diamonds", /Diamonds/],
  ["Diamonds not investment", /Diamonds[^\n]*(not a real currency|not.*investment)|not.*investment[^\n]*Diamonds/i],
  ["30-Day VIP", /30-Day VIP/],
  ["one-time 30-Day VIP", /30-Day VIP[^\n]*one-time|one-time[^\n]*30-Day VIP/i],
  ["non-renewing 30-Day VIP", /30-Day VIP[^\n]*non-renewing|non-renewing[^\n]*30-Day VIP/i],
  ["Lifetime VIP", /Lifetime VIP/],
  ["selected Lifetime windows", /selected genuine sales windows/i],
  ["Lifetime may never return", /may never return/i],
  ["no continuous availability expectation", /no expectation of continuous availability/i],
  ["Apple Google Xsolla", /Apple App Store[\s\S]*Google Play[\s\S]*Xsolla/i],
  ["refund/chargeback separation", /refund or chargeback|refunds, chargebacks/i],
  ["account compromise", /account compromise/i],
  ["future re-review triggers", /Automatic re-review triggers/i],
];

for (const [label, pattern] of gateChecks) {
  requirePattern(`gate: ${label}`, gate, pattern);
}

const termsChecks = [
  ["simulation disclaimer", /economic simulation game/i],
  ["Diamonds not real finance", /Diamonds[\s\S]{0,400}(not bank deposits|not securities|not investments|not legal tender|not cryptocurrency)/i],
  ["cash-redemption restriction", /cannot be redeemed from CK-Labs for cash|not redeemable from CK-Labs for cash/i],
  ["30-Day VIP one-time", /30-Day VIP[\s\S]{0,300}one-time/i],
  ["Lifetime promotional windows", /Lifetime VIP[\s\S]{0,800}(selected|limited)[\s\S]{0,120}(sales windows|promotional)/i],
  ["mandatory rights", /mandatory consumer|mandatory law|cannot legally be waived/i],
];

for (const [label, pattern] of termsChecks) {
  requirePattern(`terms: ${label}`, terms, pattern);
}

const purchaseChecks = [
  ["Diamonds virtual currency", /Diamonds are virtual in-game currency/i],
  ["Diamonds cash restriction", /not redeemable from CK-Labs for cash/i],
  ["30-Day VIP one-time non-renewing", /30-Day VIP is a \*\*one-time, non-renewing entitlement\*\*/i],
  ["Lifetime selected windows", /Lifetime VIP[\s\S]{0,300}selected limited promotional sales windows/i],
  ["future pricing", /future purchases/i],
  ["Apple", /Apple App Store/i],
  ["Google", /Google Play/i],
  ["Xsolla", /Xsolla/i],
  ["mandatory rights", /does not reduce any rights that cannot legally be waived/i],
];

for (const [label, pattern] of purchaseChecks) {
  requirePattern(`purchases: ${label}`, purchases, pattern);
}

requirePattern("progress: 25 localized hubs", progress, /25\s*\/\s*25|25\/25/i);
requirePattern("progress: 100 localized full documents", progress, /100\s*\/\s*100|100\/100/i);
requirePattern("progress: no unfinished locale/document", progress, /Exact next unfinished locale\/document[^\n]*(None|none)/i);

if (/\bTyconX\b/.test(gate)) failures.push("gate: displayed brand typo TyconX");
if (/TycoonX\s+beta/i.test(gate)) failures.push("gate: stale beta wording");
if (/goes to full release/i.test(gate)) failures.push("gate: stale future-release wording");

const forbiddenInvestmentClaims = [
  /Diamonds are an investment/i,
  /Lifetime VIP is an investment/i,
  /guaranteed real-world returns?/i,
  /guaranteed cash value/i,
];
for (const pattern of forbiddenInvestmentClaims) {
  if (pattern.test(gate)) failures.push(`gate: forbidden financial claim ${pattern}`);
}

if (failures.length > 0) {
  console.error("TycoonX financial-simulation perimeter verifier: FAIL");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("TycoonX financial-simulation perimeter verifier: PASS");
