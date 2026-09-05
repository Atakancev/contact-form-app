#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), "utf8");

const gatePath = "TYCOONX_GERMAN_CHECKOUT_ORDER_BUTTON_RELEASE_GATE.md";
const gate = read(gatePath);
const progress = read("TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md");

const failures = [];
const requirePattern = (label, text, pattern) => {
  if (!pattern.test(text)) failures.push(label);
};

const checks = [
  ["review date", /Last reviewed:\s*\*\*September 5, 2026\*\*/i],
  ["full release status", /went to full release on \*\*September 1, 2026\*\*/i],
  ["BGB 312i", /BGB § 312i/i],
  ["BGB 312j", /BGB § 312j/i],
  ["312j 3", /BGB § 312j\(3\)/i],
  ["312j 4 contract formation", /BGB § 312j\(4\)[\s\S]*contract is (not )?formed|contract is formed only if/i],
  ["statutory model wording", /zahlungspflichtig bestellen/i],
  ["button text itself", /button text itself/i],
  ["CJEU Fuhrmann", /C-249\/21[\s\S]*Fuhrmann-2/i],
  ["BGH X ZR 81 23", /X ZR 81\/23/i],
  ["BGH I ZR 159 24", /I ZR 159\/24/i],
  ["Article 246a", /Article 246a § 1\(1\)/i],
  ["total price tax", /total price including taxes and charges/i],
  ["personalized price", /price was personalized on the basis of automated decision-making/i],
  ["multiple paid contracts", /multiple paid contracts|multiple independent paid services/i],
  ["Apple separation", /Apple can control the final StoreKit\/App Store purchase confirmation/i],
  ["Google separation", /Google can control the final Play Billing confirmation/i],
  ["Xsolla evidence", /Germany-facing Xsolla checkout[\s\S]*production evidence packet/i],
  ["merchant of record not enough", /Xsolla is Merchant of Record[\s\S]*does not.*prove German § 312j compliance/i],
  ["Diamonds one time", /Purchased Diamonds[\s\S]*one-time purchase and not a recurring subscription/i],
  ["Diamonds non expiry", /Purchased Diamonds do not expire solely because time passes/i],
  ["Diamonds withdrawal", /must not be abused to characterize purchased Diamonds as immediately supplied digital content/i],
  ["30 Day VIP exact", /30-Day VIP remains a \*\*one-time, non-renewing 30-day entitlement\*\*/i],
  ["Lifetime selected windows", /Lifetime VIP remains a \*\*limited-time promotional one-time entitlement\*\* offered only during selected genuine sales windows/i],
  ["Lifetime may never return", /may never return/i],
  ["Lifetime no continuous availability", /no expectation of continuous future availability for purchase/i],
  ["future price changes", /change future prices[\s\S]*future purchases/i],
  ["no retroactive repricing", /later increase does not create an additional charge on an already completed one-time purchase/i],
  ["failed payment", /Failed payment:[\s\S]*do not grant paid entitlement/i],
  ["pending payment", /Pending payment:[\s\S]*authoritative paid state/i],
  ["duplicate callback", /Duplicate callback:[\s\S]*do not grant the same Diamonds or VIP twice/i],
  ["duplicate accidental grant", /Duplicate accidental grant:[\s\S]*do not remove unrelated legitimate purchases/i],
  ["fraud separation", /checkout formatting defect is not evidence of player misconduct/i],
  ["withdrawal not fraud", /consumer invokes statutory withdrawal or conformity rights/i],
  ["old client", /old TycoonX client must not be able to bypass/i],
  ["outage fail closed", /fail closed for new paid orders/i],
  ["provider replacement", /Replacing Apple\/Google\/Xsolla/i],
  ["business transfer", /Business sale, merger, reorganization or successor operator/i],
  ["permanent shutdown", /Permanent service discontinuation/i],
  ["mandatory rights", /Mandatory EU\/German rights remain intact/i],
  ["evidence model", /market -> language -> product\/SKU -> entitlement/i],
  ["18 scenarios", /18\. \*\*Permanent shutdown:\*\*/i],
  ["release checklist", /## Release checklist/i],
  ["official 312i", /https:\/\/www\.gesetze-im-internet\.de\/bgb\/__312i\.html/i],
  ["official 312j", /https:\/\/www\.gesetze-im-internet\.de\/bgb\/__312j\.html/i],
  ["official 246a", /https:\/\/www\.gesetze-im-internet\.de\/bgbeg\/art_246a__1\.html/i],
  ["canonical impact none", /Canonical-language impact:\s*none in this run/i],
];

for (const [label, pattern] of checks) requirePattern(`gate: ${label}`, gate, pattern);

requirePattern("progress: 25 hubs current", progress, /25\s*\/\s*25|25\/25/i);
requirePattern("progress: 100 documents current", progress, /100\s*\/\s*100|100\/100/i);
requirePattern("progress: none unfinished", progress, /Exact next unfinished locale\/document[^\n]*(None|none)/i);

if (/\bTyconX\b/.test(gate)) failures.push("gate: legacy displayed brand spelling");
if (/TycoonX\s+beta/i.test(gate)) failures.push("gate: stale beta wording");
if (/goes to full release/i.test(gate)) failures.push("gate: stale future release wording");

if (failures.length > 0) {
  console.error("TycoonX German checkout/order-button verifier: FAIL");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("TycoonX German checkout/order-button verifier: PASS");
