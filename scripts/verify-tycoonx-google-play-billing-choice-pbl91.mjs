#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), "utf8");

const gate = read("TYCOONX_GOOGLE_PLAY_BILLING_CHOICE_PBL_9_1_IMPLEMENTATION_GATE.md");
const broadGate = read("TYCOONX_GOOGLE_PLAY_2026_PAYMENT_TRANSITION_GATE.md");
const progress = read("TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md");
const recurring = read("TYCOONX_FUTURE_RECURRING_SUBSCRIPTION_RELEASE_GATE.md");

const failures = [];
const requirePattern = (label, text, pattern) => {
  if (!pattern.test(text)) failures.push(label);
};

const gateChecks = [
  ["review date", /Last reviewed:\s*September 5, 2026/i],
  ["full release wording", /went to full release on September 1, 2026/i],
  ["market routing control", /Market routing is a legal\/commercial control/i],
  ["UK Billing Choice", /United Kingdom[^\n]*Billing Choice program[^\n]*Billing Choice program/i],
  ["EEA External Offers", /European Economic Area \(EEA\)[^\n]*External Offers Program/i],
  ["US External Content Links", /United States[^\n]*External Content Links program/i],
  ["app or game eligibility", /app or game/i],
  ["server-readable routing", /server-readable market -> Google program -> payment-mode decision table/i],
  ["Billing Choice program", /BillingProgram\.BILLING_CHOICE/],
  ["enable program params", /EnableBillingProgramParams/],
  ["availability API", /isBillingProgramAvailableAsync/],
  ["availability details", /BillingProgramAvailabilityDetails\.BillingChoiceAvailabilityDetails/],
  ["Google screen type", /ChoiceScreenType\.GOOGLE_RENDERED/],
  ["developer screen type", /ChoiceScreenType\.DEVELOPER_RENDERED/],
  ["billing choice info API", /getBillingChoiceInfoAsync/],
  ["billing choice info Kotlin", /getBillingChoiceInfo\(\)/],
  ["billing choice info params", /GetBillingChoiceInfoParams/],
  ["Google image URL", /playBillingChoiceImageUrl/],
  ["Google loyalty info", /playBillingLoyaltyInfo/],
  ["supported image layout", /RECTANGULAR_FOUR_BY_ONE/],
  ["no stale local Google banner", /stale local (screenshot|asset)/i],
  ["no rewritten loyalty copy", /Do not invent, translate, shorten, rewrite, or permanently hard-code Google loyalty wording/i],
  ["information dialog", /showBillingProgramInformationDialog/],
  ["information dialog params", /BillingProgramInformationDialogParams/],
  ["dialog OK gate", /only when the information-dialog result is `OK`/i],
  ["developer-rendered listener omission 1B", /Scenario 1B[\s\S]*without `DeveloperProvidedBillingListener`/i],
  ["developer-rendered listener omission 2B", /Scenario 2B[\s\S]*without `DeveloperProvidedBillingListener`/i],
  ["Google-rendered listener", /Google-rendered[\s\S]*DeveloperProvidedBillingListener/i],
  ["reporting params", /BillingProgramReportingDetailsParams/],
  ["reporting API", /createBillingProgramReportingDetailsAsync/],
  ["IN_APP", /DeveloperBillingType\.IN_APP/],
  ["EXTERNAL_LINK", /DeveloperBillingType\.EXTERNAL_LINK/],
  ["developer option params", /DeveloperBillingOptionParams/],
  ["developer billing option", /enableDeveloperBillingOption/],
  ["external link launch", /launchExternalLink/],
  ["external link params", /LaunchExternalLinkParams/],
  ["external link availability", /isExternalLinkAvailable/],
  ["external token", /externalTransactionToken/],
  ["scenario 1A", /Scenario 1A/i],
  ["scenario 1B", /Scenario 1B/i],
  ["scenario 2A", /Scenario 2A/i],
  ["scenario 2B", /Scenario 2B/i],
  ["1B custom choice after OK", /Launch the custom choice screen only when the information-dialog result is `OK`/i],
  ["2B current sequence safeguard", /Do not blindly import the scenario 1B information-dialog sequence into scenario 2B/i],
  ["supervised users", /supervised-user|supervised users?/i],
  ["parental controls", /parental-control|parental control/i],
  ["24 hour reporting", /24-hour/i],
  ["program labelled queues", /reporting queues program-labelled/i],
  ["nullable link URI", /getLinkUri\(\).*nullable|null\/empty link URI/is],
  ["wrong choice type regression", /wrong `ChoiceScreenType`/i],
  ["info fetch failure regression", /getBillingChoiceInfoAsync` success and failure paths/i],
  ["loyalty regression", /loyalty-info-present \/ loyalty-info-absent/i],
  ["dialog failure regression", /information dialog `OK`, dismissal, error/i],
  ["reporting-details failure regression", /createBillingProgramReportingDetails` failure/i],
  ["external link unavailable regression", /external-link unavailable/i],
  ["process death", /process death/i],
  ["idempotency", /idempotent/i],
  ["payment proof separation", /not payment proof/i],
  ["authoritative payment", /authoritative payment confirmation/i],
  ["Diamonds", /Purchased Diamonds do not expire solely because time passes/i],
  ["30 Day VIP", /30-Day VIP is a one-time, non-renewing 30-day entitlement/i],
  ["Lifetime windows", /Lifetime VIP is a limited-time promotional one-time entitlement offered only during selected genuine sales windows/i],
  ["Lifetime may never return", /may never return/i],
  ["future recurring gate", /TYCOONX_FUTURE_RECURRING_SUBSCRIPTION_RELEASE_GATE\.md/],
  ["order button safeguard", /order-button/i],
  ["cancellation button safeguard", /cancellation-button/i],
  ["Xsolla separation", /Xsolla/],
];

for (const [label, pattern] of gateChecks) requirePattern(`gate: ${label}`, gate, pattern);

const broadChecks = [
  ["Billing Choice", /Billing Choice/i],
  ["EEA External Offers", /EEA External Offers Program/i],
  ["September 30 rollout", /September 30, 2026/i],
  ["October 1 US reporting", /October 1, 2026/i],
  ["24 hour reporting", /24 hours/i],
  ["Xsolla", /Xsolla/],
  ["refund", /refund/i],
  ["chargeback", /chargeback/i],
  ["entitlement", /entitlement/i],
];
for (const [label, pattern] of broadChecks) requirePattern(`broad gate: ${label}`, broadGate, pattern);

requirePattern("recurring product gate", recurring, /recurring/i);
requirePattern("progress: 25 hubs", progress, /25\s*\/\s*25|25\/25/i);
requirePattern("progress: 100 documents", progress, /100\s*\/\s*100|100\/100/i);
requirePattern("progress: no unfinished locale", progress, /Exact next unfinished locale\/document[^\n]*(None|none)/i);

if (/\bTyconX\b/.test(gate)) failures.push("gate: displayed brand typo TyconX");
if (/TycoonX\s+beta/i.test(gate)) failures.push("gate: stale beta wording");
if (/goes to full release/i.test(gate)) failures.push("gate: stale future release wording");

if (failures.length) {
  console.error("TycoonX Google Play Billing Choice PBL 9.1 verifier: FAIL");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("TycoonX Google Play Billing Choice PBL 9.1 verifier: PASS");
