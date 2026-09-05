#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), "utf8");

const gate = read("TYCOONX_GERMAN_BFSG_ACCESSIBILITY_ECOMMERCE_RELEASE_GATE.md");
const progress = read("TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md");

const failures = [];
const requirePattern = (label, text, pattern) => {
  if (!pattern.test(text)) failures.push(label);
};

const checks = [
  ["review date", /Last reviewed:\s*September 5, 2026/i],
  ["full release status", /went to full release on September 1, 2026/i],
  ["BFSG June 28 2025 applicability", /June 28, 2025/i],
  ["electronic commerce scope", /service in electronic commerce|services in electronic commerce/i],
  ["microenterprise headcount", /fewer than 10 persons/i],
  ["microenterprise turnover", /annual turnover of \*\*no more than EUR 2 million\*\*/i],
  ["microenterprise balance sheet", /annual balance-sheet total of \*\*no more than EUR 2 million\*\*/i],
  ["microenterprise service exemption", /§ 3\(3\)/i],
  ["headcount alone prohibited", /Do not mark `bfsg_exempt = true` merely because CK-Labs has fewer than 10 workers/i],
  ["product exemption separation", /service exemption is not a blanket exemption for products/i],
  ["Apple flow", /Apple App Store in-app purchase journey/i],
  ["Google flow", /Google Play purchase journey/i],
  ["Xsolla flow", /TycoonX webshop purchase journey using Xsolla/i],
  ["platform ownership boundary", /Platform\/payment-provider boundary/i],
  ["P U R robust", /perceivable, operable, understandable and robust/i],
  ["BFSGV 19", /BFSGV § 19/i],
  ["identification authentication payment", /identification, authentication, security and payment functions/i],
  ["Annex 3", /Annex 3 public accessibility information/i],
  ["authority", /Marktüberwachungsstelle der Länder für die Barrierefreiheit von Produkten und Dienstleistungen/i],
  ["market surveillance", /BFSG §§ 28-30/i],
  ["100k fine", /up to \*\*EUR 100,000\*\*/i],
  ["disproportionate burden", /Fundamental alteration \/ disproportionate burden is not a shortcut/i],
  ["price accessibility", /Price, promotion and regional-pricing information must remain accessible/i],
  ["no entitlement authority", /accessibility failures never become entitlement authority/i],
  ["Diamonds non expiry", /Purchased Diamonds do not expire solely because time passes/i],
  ["Diamonds no duplicate", /must not automatically delete, duplicate or regrant purchased Diamonds/i],
  ["30-Day VIP one-time", /30-Day VIP remains a \*\*one-time, non-renewing 30-day entitlement\*\*/i],
  ["30-Day VIP no restart", /does not restart the original 30-day clock/i],
  ["Lifetime selected windows", /Lifetime VIP remains a \*\*one-time promotional entitlement offered only during selected genuine sales windows\*\*/i],
  ["Lifetime may never return", /may never return/i],
  ["Lifetime no continuous availability", /no expectation of continuous future availability|no expectation of continuous future availability for purchase/i],
  ["mandatory remedies", /mandatory German\/EU consumer rights/i],
  ["no blanket provider excuse", /Apple\/Google\/Xsolla is responsible, so CK-Labs has no duty/i],
  ["complaint not abuse", /player reporting an accessibility barrier is not evidence of abuse/i],
  ["business transfer", /business sale, merger, reorganization or successor operator/i],
  ["permanent shutdown", /lawful permanent service shutdown/i],
  ["old versions", /Old \/ unsupported versions and security emergencies/i],
  ["evidence packet", /Accessibility evidence packet/i],
  ["20 scenarios", /20\. \*\*Permanent shutdown\*\*/i],
  ["official BFSG source", /https:\/\/www\.gesetze-im-internet\.de\/bfsg\//i],
  ["official BFSGV source", /https:\/\/www\.gesetze-im-internet\.de\/bfsgv\//i],
  ["release checklist", /Release checklist/i],
];

for (const [label, pattern] of checks) requirePattern(`gate: ${label}`, gate, pattern);

requirePattern("progress: all 25 hubs current", progress, /25\s*\/\s*25|25\/25/i);
requirePattern("progress: all 100 full documents current", progress, /100\s*\/\s*100|100\/100/i);
requirePattern("progress: no unfinished localization", progress, /Exact next unfinished locale\/document[^\n]*(None|none)/i);

if (/\bTyconX\b/.test(gate)) failures.push("gate: displayed brand typo TyconX");
if (/TycoonX\s+beta/i.test(gate)) failures.push("gate: stale beta wording");
if (/goes to full release/i.test(gate)) failures.push("gate: stale future release wording");

if (failures.length > 0) {
  console.error("TycoonX German BFSG accessibility verifier: FAIL");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("TycoonX German BFSG accessibility verifier: PASS");
