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
  [/more than 1000 candidate usage records[\s\S]{0,160}more than 1000 `consumptionUsageEvents`/i, 'Over-1000 usage-event QA case is missing.'],
  [/unknown future `refundReason`[\s\S]{0,180}rather than auto-mapped to `CHARGEBACK`/i, 'Unknown future refund reason QA case is missing.'],
  [/duplicate RTDN delivery[\s\S]{0,180}does not reset the 24-hour deadline/i, 'Duplicate deadline QA case is missing.'],
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
