#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), "utf8");

const gate = read("TYCOONX_GERMAN_TDDDG_DEVICE_STORAGE_CONSENT_RELEASE_GATE.md");
const privacy = read("tyconx-privacy-policy.md");
const progress = read("TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md");

const failures = [];
const requirePattern = (label, text, pattern) => {
  if (!pattern.test(text)) failures.push(label);
};

const checks = [
  ["review date", /Last reviewed:\s*September 5, 2026/i],
  ["full release", /went to full release on \*\*September 1, 2026\*\*/i],
  ["TDDDG 25", /§ 25 TDDDG/i],
  ["apps not cookie only", /not only a browser-cookie rule/i],
  ["terminal info not necessarily personal", /not limited to whether the information is personal data/i],
  ["separate GDPR layer", /Two layers must be classified separately: TDDDG and GDPR/i],
  ["legitimate interest no TDDDG override", /legitimate interest does \*\*not\*\* by itself remove a § 25\(1\) TDDDG consent requirement/i],
  ["prior informed consent", /clear and comprehensive information/i],
  ["affirmative action", /require a real affirmative action/i],
  ["no use equals consent", /do not treat app launch, scrolling, continuing to play, closing a notice, or silence as consent/i],
  ["transmission exception", /§ 25\(2\)\(1\)/i],
  ["strict necessity", /§ 25\(2\)\(2\)/i],
  ["expressly requested service", /expressly requested digital service/i],
  ["not business convenience", /commercially valuable[\s\S]*standard in the games industry/i],
  ["feature invocation", /only after the user actually invokes it/i],
  ["SDK pre consent block", /SDK before initialization, not after the first event/i],
  ["cold start", /cold-start network\/device behavior/i],
  ["consent refusal path", /Consent UI must not use deceptive pressure/i],
  ["legal info accessible", /Privacy Policy \/ imprint must remain accessible before consent/i],
  ["analytics purpose split", /Analytics and performance diagnostics require purpose-by-purpose classification/i],
  ["security necessity record", /Security, fraud, entitlement and anti-cheat tooling needs its own necessity record/i],
  ["no consent equals no fraud inference", /missing consent or disabled optional analytics SDK is not evidence of hacking/i],
  ["Apple purchase channel", /Apple App Store/i],
  ["Google purchase channel", /Google Play/i],
  ["Xsolla channel", /TycoonX webshop using Xsolla/i],
  ["purchase works without optional consent", /required purchase validation and entitlement delivery must remain available when optional analytics\/advertising consent is refused/i],
  ["Diamonds non expiry", /Purchased Diamonds do not expire solely because time passes/i],
  ["30 Day VIP", /30-Day VIP remains a one-time, non-renewing 30-day entitlement/i],
  ["Lifetime selected windows", /Lifetime VIP remains a limited-time promotional one-time entitlement offered only during selected genuine sales windows/i],
  ["Lifetime may never return", /may never return/i],
  ["Lifetime no continuous availability", /no expectation of continuous future availability for purchase/i],
  ["Xsolla web storage split", /Xsolla \/ webshop WebView and browser storage/i],
  ["ATT separation", /Apple ATT is not a substitute for German TDDDG consent/i],
  ["privacy manifest separation", /privacy-manifest declarations are transparency metadata, not a magic legal basis/i],
  ["Google separation", /Google Play Data safety and prominent disclosure are also separate layers/i],
  ["SDK responsibility", /review third-party SDK behavior/i],
  ["withdrawal propagation", /Consent withdrawal \/ preference changes must propagate/i],
  ["reinstall no resurrect", /reinstall \/ restore where consent should not be silently resurrected/i],
  ["old clients", /Old\/unsupported clients and fail-open behavior/i],
  ["provider transfer", /Provider replacement \/ business transfer \/ permanent shutdown/i],
  ["fine ceiling", /EUR 300,000/i],
  ["production inventory", /Production inventory required before claiming compliance/i],
  ["20 scenarios", /20\. \*\*Cold-start traffic audit:/i],
  ["evidence packet", /Release evidence packet/i],
  ["canonical no material change", /does \*\*not\*\* by itself change canonical public legal meaning/i],
  ["official TDDDG 25", /https:\/\/www\.gesetze-im-internet\.de\/ttdsg\/__25\.html/i],
  ["official TDDDG 28", /https:\/\/www\.gesetze-im-internet\.de\/ttdsg\/__28\.html/i],
  ["DSK guidance", /OH_Digitale_Dienste\.pdf/i],
  ["Apple guidelines", /developer\.apple\.com\/app-store\/review\/guidelines/i],
  ["Google user data", /support\.google\.com\/googleplay\/android-developer\/answer\/10144311/i],
  ["release checklist", /Release checklist/i],
];

for (const [label, pattern] of checks) requirePattern(`gate: ${label}`, gate, pattern);

requirePattern("privacy: mere use not consent", privacy, /Merely using TycoonX is not treated as consent/i);
requirePattern("privacy: consent optional cookies analytics", privacy, /certain marketing, cookies, analytics, or other optional features/i);
requirePattern("privacy: withdrawal", privacy, /withdraw consent at any time for future processing/i);
requirePattern("privacy: providers", privacy, /Apple, Google, Xsolla/i);

requirePattern("progress: 25 hubs current", progress, /25\s*\/\s*25|25\/25/i);
requirePattern("progress: 100 documents current", progress, /100\s*\/\s*100|100\/100/i);
requirePattern("progress: none unfinished", progress, /Exact next unfinished locale\/document[^\n]*(None|none)/i);

if (/\bTyconX\b/.test(gate)) failures.push("gate: legacy displayed brand spelling");
if (/TycoonX\s+beta/i.test(gate)) failures.push("gate: stale beta wording");
if (/goes to full release/i.test(gate)) failures.push("gate: stale future release wording");

if (failures.length > 0) {
  console.error("TycoonX German TDDDG device-consent verifier: FAIL");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("TycoonX German TDDDG device-consent verifier: PASS");
