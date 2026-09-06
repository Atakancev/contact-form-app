#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), "utf8");

const gate = read("TYCOONX_ANDROID_DEVELOPER_VERIFICATION_2026_RELEASE_GATE.md");
const playGate = read("TYCOONX_GOOGLE_PLAY_2026_PAYMENT_TRANSITION_GATE.md");
const progress = read("TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md");

const failures = [];
const requirePattern = (label, text, pattern) => {
  if (!pattern.test(text)) failures.push(label);
};

const checks = [
  ["review date", /Last reviewed:\s*September 6, 2026/i],
  ["full release status", /went to full release on September 1, 2026/i],
  ["September 30 enforcement", /September 30, 2026/i],
  ["initial countries", /Brazil, Indonesia, Singapore and Thailand/i],
  ["certified devices", /certified (Android )?devices/i],
  ["Android 7 plus", /Android 7 or later|Android 7\+/i],
  ["seven initial stores", /Google Play[\s\S]*HONOR App Market[\s\S]*OPPO App Market[\s\S]*Galaxy Store[\s\S]*Palm Store[\s\S]*V-Appstore[\s\S]*GetApps/i],
  ["2027 global expansion", /globally in 2027|2027 and beyond|2027 global/i],
  ["separate September rules", /Two different September 30, 2026 rules must not be mixed together/i],
  ["initial store limitation", /first phase does not yet apply to direct sideloading or stores outside the initial participating-store list/i],
  ["Play rule not four-country limited", /Play policy consequence is not limited to the four first-rollout countries/i],
  ["global Play removal risk", /removed from Google Play/i],
  ["Play all-form-factor registration", /apps across all Play-distributed form factors must be registered/i],
  ["off-Play first phase mobile tablet", /initial enforcement in the selected regions applies to \*\*mobile and tablet\*\*/i],
  ["no single android verified flag", /generic `android_verified=true` flag/i],
  ["identity verification separate", /verify developer identity/i],
  ["package registration separate", /register Play package names|register package names/i],
  ["REGISTERED state", /final \*\*REGISTERED\*\* state/i],
  ["not in review", /not merely draft, in review, pending transfer/i],
  ["actual Play status required", /must check the actual package status shown in Play Console/i],
  ["99 percent auto registration is not proof", /more than 99% of Play apps[\s\S]*not a legal or operational presumption/i],
  ["majority key rule", /more than 50% of known installs/i],
  ["50 install rule", /at least 50 installs/i],
  ["first come rule", /first-come, first-served/i],
  ["registration request or justification", /registration request or justification/i],
  ["signing ownership", /adi-registration\.properties/i],
  ["private key prohibited", /Never upload, transmit or commit a private signing key/i],
  ["public fingerprint evidence", /public certificate fingerprint/i],
  ["accurate account data", /legal name\/address|legal name, address/i],
  ["payments profile consistency", /Google payments profile/i],
  ["public disclosure awareness", /displayed on Google Play/i],
  ["official transfer process", /official Google Play account\/app transfer process/i],
  ["PENDING_TRANSFER", /PENDING_TRANSFER/],
  ["no unofficial account transfer", /unofficial marketplace|informal credential handoff/i],
  ["off Play support", /Off-Play distribution/i],
  ["Play Console can register off Play", /Play Console to register apps distributed both on and off Google Play/i],
  ["direct sideload first phase", /Direct sideloading and other stores outside that list are not yet subject to the new check during this first phase/i],
  ["no permanent sideload promise", /Do not tell users that direct website APK distribution will remain exempt through 2027 or indefinitely/i],
  ["enterprise exception isolated", /Android Enterprise\/private-app exceptions must not leak into the public game/i],
  ["public game not enterprise exemption", /TycoonX is a public consumer game/i],
  ["no permanent country hardcode", /Do not hard-code the four-country or seven-store list/i],
  ["not fraud", /User-facing installation\/update failures are not fraud/i],
  ["Diamonds non expiry", /Purchased Diamonds do not expire solely because time passes/i],
  ["Diamonds no duplicate", /must not delete, duplicate or regrant purchased Diamonds/i],
  ["30-Day VIP one time", /30-Day VIP remains a one-time, non-renewing 30-day entitlement/i],
  ["30-Day VIP no restart", /must not restart the original 30-day clock/i],
  ["Lifetime VIP selected windows", /Lifetime VIP remains a one-time promotional entitlement offered only during selected genuine sales windows/i],
  ["Lifetime VIP may never return", /may never return/i],
  ["Lifetime VIP no continuous availability", /no expectation of continuous availability for purchase/i],
  ["mandatory consumer remedies", /mandatory conformity, cure, price-reduction, termination, refund, damages and update obligations/i],
  ["Google not blanket excuse", /Google blocked the app, therefore no remedy exists/i],
  ["old versions", /Old and unsupported app versions/i],
  ["evidence packet", /Evidence packet/i],
  ["scope distinction in evidence", /distinction between the initial four-country\/seven-store Android installation scope and the Play Console package-registration obligation/i],
  ["no government ID in evidence packet", /government-ID scans/i],
  ["regression scenarios", /Regression scenarios/i],
  ["Play outside initial countries regression", /Play app outside the four initial countries remains unregistered/i],
  ["direct sideload regression", /Direct sideload on September 30/i],
  ["form factor regression", /Play non-phone form factor/i],
  ["official Android source", /developer\.android\.com\/developer-verification/i],
  ["official FAQ source", /developer\.android\.com\/developer-verification\/guides\/faq/i],
  ["official Play package source", /support\.google\.com\/googleplay\/android-developer\/answer\/16984799/i],
];

for (const [label, pattern] of checks) requirePattern(`gate: ${label}`, gate, pattern);

requirePattern("existing Google Play gate remains present", playGate, /TycoonX Google Play 2026 Payment Transition Gate/i);
requirePattern("existing Google Play gate preserves Xsolla", playGate, /Xsolla/i);
requirePattern("progress: all 25 hubs current", progress, /25\s*\/\s*25|25\/25/i);
requirePattern("progress: all 100 full documents current", progress, /100\s*\/\s*100|100\/100/i);
requirePattern("progress: no unfinished localization", progress, /Exact next unfinished locale\/document[^\n]*(None|none)/i);

if (/\bTyconX\b/.test(gate)) failures.push("gate: displayed brand typo");
if (/TycoonX\s+beta/i.test(gate)) failures.push("gate: stale beta wording");
if (/goes to full release/i.test(gate)) failures.push("gate: stale future release wording");

// The current first-phase Android OS enforcement is not a blanket rule for every
// distribution channel on September 30. Fail if future edits collapse the two scopes.
if (/September 30, 2026[^\n]{0,120}(all stores|all sideload|all Android installs)/i.test(gate)) {
  failures.push("gate: initial Android enforcement overstated beyond participating stores");
}

if (failures.length > 0) {
  console.error("TycoonX Android developer verification 2026 verifier: FAIL");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("TycoonX Android developer verification 2026 verifier: PASS");