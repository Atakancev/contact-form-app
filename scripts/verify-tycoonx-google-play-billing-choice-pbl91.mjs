#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");

const read = (relativePath) =>
  fs.readFileSync(path.join(root, relativePath), "utf8");

const gate = read("TYCOONX_GOOGLE_PLAY_BILLING_CHOICE_PBL_9_1_IMPLEMENTATION_GATE.md");
const broadGate = read("TYCOONX_GOOGLE_PLAY_2026_PAYMENT_TRANSITION_GATE.md");
const progress = read("TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md");
const recurring = read("TYCOONX_FUTURE_RECURRING_SUBSCRIPTION_RELEASE_GATE.md");

const failures = [];

const requirePattern = (label, text, pattern) => {
  if (!pattern.test(text)) failures.push(label);
};

const gateChecks = [
  ["review date", /Last reviewed:\s*September 3, 2026/i],
  ["fresh Google guidance date", /September 2, 2026/i],
  ["live release wording", /went to full release on September 1, 2026/i],
  ["BillingProgram", /BillingProgram\.BILLING_CHOICE/],
  ["EnableBillingProgramParams", /EnableBillingProgramParams/],
  ["enableBillingProgram", /enableBillingProgram/],
  ["availability API", /isBillingProgramAvailableAsync/],
  ["availability details", /BillingProgramAvailabilityDetails/],
  ["choice screen type", /ChoiceScreenType/],
  ["developer billing option params", /DeveloperBillingOptionParams/],
  ["developer billing option", /enableDeveloperBillingOption/],
  ["reporting details params", /BillingProgramReportingDetailsParams/],
  ["IN_APP classification", /DeveloperBillingType\.IN_APP/],
  ["EXTERNAL_LINK classification", /DeveloperBillingType\.EXTERNAL_LINK/],
  ["reporting details API", /createBillingProgramReportingDetailsAsync|createBillingProgramReportingDetails/],
  ["information dialog", /showBillingProgramInformationDialog/],
  ["external link launch", /launchExternalLink/],
  ["external link params", /LaunchExternalLinkParams/],
  ["external transaction token", /externalTransactionToken/],
  ["Google-rendered scenario", /Google-rendered/i],
  ["developer-rendered scenario", /developer-rendered/i],
  ["scenario 1A", /Scenario 1A/i],
  ["scenario 1B", /Scenario 1B/i],
  ["scenario 2A", /Scenario 2A/i],
  ["scenario 2B", /Scenario 2B/i],
  ["supervised users", /supervised users?/i],
  ["parental controls", /parental[- ]control/i],
  ["24-hour reporting", /within 24 hours/i],
  ["Diamonds", /Diamonds/],
  ["30-Day VIP", /30-Day VIP/],
  ["one-time 30-Day VIP", /30-Day VIP[^\n]*one-time|one-time[^\n]*30-Day VIP/i],
  ["non-renewing 30-Day VIP", /30-Day VIP[^\n]*non-renewing|non-renewing[^\n]*30-Day VIP/i],
  ["Lifetime VIP", /Lifetime VIP/],
  ["selected Lifetime VIP windows", /selected genuine (promotional )?sales windows/i],
  ["Lifetime VIP may never return", /may never return/i],
  ["no continuous Lifetime expectation", /no expectation of continuous/i],
  ["future recurring gate", /TYCOONX_FUTURE_RECURRING_SUBSCRIPTION_RELEASE_GATE\.md/],
  ["subscription replacement original transaction id", /setOriginalExternalTransactionId/],
  ["nullable link URI", /null or empty|nullable link URI/i],
  ["process death", /process death/i],
  ["pending payment", /PENDING|pending/i],
  ["duplicate retry safety", /duplicate/i],
  ["idempotency", /idempotent/i],
  ["German order-button safeguard", /order-button/i],
  ["German cancellation-button safeguard", /cancellation-button/i],
  ["Xsolla separation", /Xsolla/],
  ["payment proof separation", /not payment proof|not as proof/i],
  ["authoritative payment confirmation", /authoritative payment confirmation/i],
];

for (const [label, pattern] of gateChecks) {
  requirePattern(`gate: ${label}`, gate, pattern);
}

const broadChecks = [
  ["Billing Choice", /Billing Choice/i],
  ["EEA External Offers", /EEA External Offers Program/i],
  ["June 30 rollout", /June 30, 2026/i],
  ["September 30 rollout", /September 30, 2026/i],
  ["October 1 US reporting", /October 1, 2026/i],
  ["24-hour reporting", /24 hours/i],
  ["Xsolla", /Xsolla/],
  ["refunds", /refund/i],
  ["chargebacks", /chargeback/i],
  ["entitlements", /entitlement/i],
];

for (const [label, pattern] of broadChecks) {
  requirePattern(`broad gate: ${label}`, broadGate, pattern);
}

requirePattern("recurring gate exists and distinguishes recurring products", recurring, /recurring/i);
requirePattern("progress: 25 localized hubs", progress, /25\s*\/\s*25|25\/25/i);
requirePattern("progress: 100 localized documents", progress, /100\s*\/\s*100|100\/100/i);
requirePattern("progress: no unfinished locale/document", progress, /Exact next unfinished locale\/document[^\n]*(None|none)/i);

if (/\bTyconX\b/.test(gate)) failures.push("gate: displayed brand typo TyconX");
if (/TycoonX\s+beta/i.test(gate)) failures.push("gate: stale beta wording");
if (/goes to full release/i.test(gate)) failures.push("gate: stale future release wording");

if (failures.length > 0) {
  console.error("TycoonX Google Play Billing Choice PBL 9.1 verifier: FAIL");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("TycoonX Google Play Billing Choice PBL 9.1 verifier: PASS");
