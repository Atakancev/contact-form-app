#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), "utf8");

const gate = read("TYCOONX_GERMAN_VSBG_CONSUMER_ADR_RELEASE_GATE.md");
const progress = read("TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md");

const failures = [];
const requirePattern = (label, text, pattern) => {
  if (!pattern.test(text)) failures.push(label);
};

const checks = [
  ["review date", /Last reviewed:\s*September 5, 2026/i],
  ["full release status", /went to full release on \*\*September 1, 2026\*\*/i],
  ["VSBG 36", /VSBG § 36/i],
  ["VSBG 37", /VSBG § 37/i],
  ["small business headcount", /ten or fewer persons/i],
  ["December 31 threshold date", /December 31 of the preceding year/i],
  ["narrow exemption", /applies to \*\*§ 36\(1\)\(1\)\*\* only/i],
  ["36 1 2 survives", /§ 36\(1\)\(2\)/i],
  ["37 survives headcount", /number of employees does \*\*not\*\* remove the § 37 duty/i],
  ["no universal exemption flag", /Never implement one boolean such as `vsbg_exempt = true`/i],
  ["website terms placement", /on the trader's website|with its general terms and conditions/i],
  ["unresolved state", /consumer_contract_dispute_unresolved_at/i],
  ["text form", /in \*\*text form\*\*/i],
  ["body address website", /body's address[\s\S]*body's website/i],
  ["Apple", /Apple App Store In-App Purchase/i],
  ["Google", /Google Play/i],
  ["Xsolla", /TycoonX webshop using Xsolla/i],
  ["merchant mapping", /contracting merchant -> refund\/withdrawal route/i],
  ["ODR repeal date", /July 20, 2025/i],
  ["Regulation 2024 3228", /Regulation \(EU\) 2024\/3228/i],
  ["no stale ODR", /stale mandatory ODR-platform link|stale current-law claim\/link/i],
  ["Consumer Redress Portal", /Consumer Redress Portal/i],
  ["portal not old ODR", /Do not describe this portal as though it were the old ODR platform/i],
  ["Universalschlichtungsstelle", /Universalschlichtungsstelle des Bundes/i],
  ["Kehl address", /Straßburger Straße 8[\s\S]*77694 Kehl/i],
  ["ADR no liability admission", /not an admission of liability/i],
  ["complaint not fraud", /not by itself evidence[\s\S]*fraud/i],
  ["chargeback separation", /Chargebacks and ADR must not be conflated/i],
  ["Diamonds non expiry", /Purchased Diamonds do not expire solely because time passes/i],
  ["30 Day VIP", /30-Day VIP remains a one-time, non-renewing 30-day entitlement/i],
  ["Lifetime selected windows", /Lifetime VIP remains a one-time promotional entitlement offered only during selected genuine sales windows/i],
  ["Lifetime may never return", /may never return/i],
  ["Lifetime no continuous availability", /no expectation of continuous future availability for purchase/i],
  ["price no retroactive repricing", /Completed one-time purchases are not retroactively repriced/i],
  ["outages", /Outages, provider failures and service shutdown/i],
  ["business transfer", /business sale, merger, reorganization or successor operator/i],
  ["account compromise", /Security incidents and account compromise/i],
  ["future directive", /Directive \(EU\) 2025\/2647/i],
  ["2028 transposition", /March 20, 2028/i],
  ["2028 application", /September 20, 2028/i],
  ["20 working day future rule", /20-working-day/i],
  ["not current 2026 rule", /Do \*\*not\*\* present that future 20-working-day trader-response rule as though it were already a current September 2026 German VSBG duty/i],
  ["evidence packet", /Evidence packet for each unresolved German consumer-contract dispute/i],
  ["22 scenarios", /22\. \*\*A 2028 German transposition law enters into force/i],
  ["release checklist", /Release checklist/i],
  ["official 36 source", /https:\/\/www\.gesetze-im-internet\.de\/vsbg\/__36\.html/i],
  ["official 37 source", /https:\/\/www\.gesetze-im-internet\.de\/vsbg\/__37\.html/i],
  ["official EU portal", /https:\/\/consumer-redress\.ec\.europa\.eu\//i],
  ["canonical impact none", /Canonical-language impact:\*\* none in this run/i],
];

for (const [label, pattern] of checks) requirePattern(`gate: ${label}`, gate, pattern);

requirePattern("progress: 25 hubs current", progress, /25\s*\/\s*25|25\/25/i);
requirePattern("progress: 100 documents current", progress, /100\s*\/\s*100|100\/100/i);
requirePattern("progress: none unfinished", progress, /Exact next unfinished locale\/document[^\n]*(None|none)/i);

if (/\bTyconX\b/.test(gate)) failures.push("gate: legacy displayed brand spelling");
if (/TycoonX\s+beta/i.test(gate)) failures.push("gate: stale beta wording");
if (/goes to full release/i.test(gate)) failures.push("gate: stale future release wording");

if (failures.length > 0) {
  console.error("TycoonX German consumer ADR verifier: FAIL");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("TycoonX German consumer ADR verifier: PASS");
