import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const gatePath = path.join(root, 'TYCOONX_GOOGLE_PLAY_CHARGEBACK_REVIEW_RELEASE_GATE.md');
const trackerPath = path.join(root, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');
const failures = [];

for (const filePath of [gatePath, trackerPath]) {
  if (!fs.existsSync(filePath)) {
    failures.push(`Missing required file: ${path.basename(filePath)}`);
  }
}

if (failures.length) {
  console.error('TycoonX Google Play chargeback review verification FAILED:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

const text = fs.readFileSync(gatePath, 'utf8');
const tracker = fs.readFileSync(trackerPath, 'utf8');

const required = [
  'TycoonX',
  'PendingRefundReviewNotification',
  'pendingRefundToken',
  'orders.reviewrefund',
  'sampleContentProvided',
  'consumptionPercentageMilliunits',
  '100000',
  '45200',
  '45.2%',
  'consumptionUsageEvents',
  'consumptionTime',
  'RFC 3339',
  'ipAddress',
  'obfuscatedAccountId',
  'obfuscatedProfileId',
  '1000',
  '5000 characters',
  'regionCode',
  'never inferred',
  'APPROVE',
  'DECLINE',
  'NEUTRAL',
  'CHARGEBACK',
  'Diamonds',
  'one-time 30-Day VIP',
  'Lifetime VIP',
  'mandatory consumer rights',
];

for (const term of required) {
  if (!text.includes(term)) failures.push(`Missing required safeguard/reference: ${term}`);
}

const checks = [
  [/first CK-Labs receipt timestamp/i, 'First-receipt deadline anchor is missing.'],
  [/never reset the 24-hour deadline/i, 'Duplicate/redelivery deadline reset blocker is missing.'],
  [/`45200` means `45\.2%`/i, 'Milliunit conversion example is missing.'],
  [/not Google's final refund percentage/i, 'Consumption evidence/final-refund separation is missing.'],
  [/omit this optional field rather than guess/i, 'Optional consumption evidence omit-rather-than-guess rule is missing.'],
  [/Google's `consumptionTime` means the time the user consumed, used, downloaded, opened, or streamed/i, 'Google consumptionTime meaning is missing.'],
  [/valid \*\*RFC 3339\*\* time syntax/i, 'RFC 3339 consumptionTime requirement is missing.'],
  [/not the Google purchase time, purchase-completion time, entitlement-credit time, RTDN arrival time, worker time, support-ticket time, current login time/i, 'Consumption-time source separation is missing.'],
  [/do not replace missing historical timestamps with `now`/i, 'No-now timestamp fabrication rule is missing.'],
  [/future timestamp caused by clock skew[\s\S]{0,100}reconcil/i, 'Future/clock-skew timestamp quarantine rule is missing.'],
  [/pre-purchase sample\/trial evidence in `sampleContentProvided`[\s\S]{0,160}do not mislabel/i, 'Sample versus consumption-event separation is missing.'],
  [/event `ipAddress`[\s\S]{0,180}same recorded consumption event/i, 'Event-time IP binding rule is missing.'],
  [/Do not substitute the purchase IP, latest login IP, support-session IP, device's current IP/i, 'Unrelated-IP substitution blocker is missing.'],
  [/`obfuscatedAccountId` or `obfuscatedProfileId`[\s\S]{0,200}same recorded usage/i, 'Usage-event obfuscated-ID binding is missing.'],
  [/fungible purchased Diamonds[\s\S]{0,220}do not reconstruct granular usage events after the fact/i, 'Fungible-Diamond evidence non-reconstruction rule is missing.'],
  [/distinguish \*\*delivery\/activation\*\* from actual \*\*use\*\*/i, 'VIP activation/use evidence distinction is missing.'],
  [/does not authorize CK-Labs to begin retaining IP or location history merely because such fields are available/i, 'No-new-telemetry-for-disputes rule is missing.'],
  [/more than \*\*1000 `consumptionUsageEvents`\*\*/i, 'Google 1000-event cap is missing.'],
  [/within the current \*\*5000 characters\*\* limit/i, 'Usage-description length cap is missing.'],
  [/Do not set it to `true` merely because TycoonX itself is free-to-play/i, 'Free-to-play/sample flag distinction is missing.'],
  [/unknown future `refundReason` must enter a safe current-documentation\/manual-review path/i, 'Future refundReason safe handling is missing.'],
  [/`regionCode` is \*\*never inferred\*\*/i, 'Coarse-location non-inference rule is missing.'],
  [/regional-price catalog[\s\S]{0,180}proof of where gameplay consumption occurred/i, 'Regional pricing/location evidence separation is missing.'],
  [/`ReviewRefund` request or response must never directly:[\s\S]{0,160}- grant Diamonds;/i, 'Review response/entitlement separation is missing.'],
  [/one-time 30-Day VIP/i, 'One-time 30-Day VIP distinction is missing.'],
  [/Lifetime VIP remains a limited-time promotional offering available only during selected genuine sales windows/i, 'Lifetime VIP sales-window separation is missing.'],
  [/45\.2%[\s\S]{0,180}`45200`[\s\S]{0,40}`consumptionPercentageMilliunits`/i, 'Milliunit QA regression case is missing.'],
  [/recorded Diamond spend at `2026-09-09T12:00:00Z`[\s\S]{0,220}RFC 3339 `consumptionTime`/i, 'Consumption-time QA regression case is missing.'],
  [/unknown consumption timestamp is omitted rather than backfilled with `now`/i, 'Unknown-time QA regression case is missing.'],
  [/event `ipAddress` comes from the same recorded usage event or is omitted/i, 'Event-IP QA regression case is missing.'],
  [/usage-event `obfuscatedAccountId` \/ `obfuscatedProfileId` cannot be copied across TycoonX accounts/i, 'Obfuscated-ID QA regression case is missing.'],
  [/pre-purchase sample\/trial evidence does not become a post-purchase consumption event/i, 'Sample/usage QA regression case is missing.'],
  [/fungible Diamond pool[\s\S]{0,180}cannot manufacture granular spend events/i, 'Fungible-Diamond QA regression case is missing.'],
  [/more than 1000 candidate usage records[\s\S]{0,160}more than 1000 `consumptionUsageEvents`/i, 'Over-1000 usage-event QA case is missing.'],
  [/unknown future `refundReason`[\s\S]{0,180}rather than auto-mapped to `CHARGEBACK`/i, 'Unknown future refund reason QA case is missing.'],
  [/duplicate RTDN delivery[\s\S]{0,180}does not reset the 24-hour deadline/i, 'Duplicate deadline QA case is missing.'],
  [/simulated test chargeback[\s\S]{0,220}must never create a production fraud strike/i, 'Test-chargeback production-isolation rule is missing.'],
  [/`consumptionTime` can be backfilled from purchase time, current time, support time/i, 'Release blocker for fabricated consumptionTime is missing.'],
];

for (const [regex, message] of checks) {
  if (!regex.test(text)) failures.push(message);
}

if (/TyconX/.test(text)) {
  failures.push('Displayed/legal typo TyconX found in the chargeback gate.');
}

if (/\bTycoonX\b[^\n]{0,60}\bbeta\b|\bbeta\b[^\n]{0,60}\bTycoonX\b/i.test(text)) {
  failures.push('Stale TycoonX beta wording found in the chargeback gate.');
}

if (!/All 25 target locales and all 100 localized full documents are current/i.test(tracker)) {
  failures.push('Localization tracker is not in the expected closed/current state.');
}

if (failures.length) {
  console.error('TycoonX Google Play chargeback review verification FAILED:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX Google Play chargeback review verification PASS');
