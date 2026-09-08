import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const gatePath = path.join(root, 'TYCOONX_GOOGLE_PLAY_CHARGEBACK_REVIEW_IDENTITY_BINDING_GATE.md');
const baseGatePath = path.join(root, 'TYCOONX_GOOGLE_PLAY_CHARGEBACK_REVIEW_RELEASE_GATE.md');
const trackerPath = path.join(root, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');
const failures = [];

for (const filePath of [gatePath, baseGatePath, trackerPath]) {
  if (!fs.existsSync(filePath)) failures.push(`Missing required file: ${path.basename(filePath)}`);
}

if (failures.length) {
  console.error('TycoonX Google Play chargeback review identity-binding verification FAILED:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

const text = fs.readFileSync(gatePath, 'utf8');
const base = fs.readFileSync(baseGatePath, 'utf8');
const tracker = fs.readFileSync(trackerPath, 'utf8');

const required = [
  'TycoonX',
  'PendingRefundReviewNotification',
  'orders.reviewrefund',
  'packageName',
  'orderId',
  'pendingRefundToken',
  'sampleContentProvided',
  'refundPreference',
  'REFUND_PREFERENCE_UNSPECIFIED',
  'APPROVE',
  'DECLINE',
  'NEUTRAL',
  'androidpublisher',
  'obfuscatedAccountId',
  'obfuscatedProfileId',
  'Diamonds',
  'one-time 30-Day VIP',
  'Lifetime VIP',
];

for (const term of required) {
  if (!text.includes(term)) failures.push(`Missing required safeguard/reference: ${term}`);
}

const checks = [
  [/packageName`, `orderId`, and `pendingRefundToken` used in the outbound `ReviewRefund` call must come from the \*\*same durable review case\*\*/i, 'Same-case package/order/token binding is missing.'],
  [/Never combine the path for Order A with the token from Order B/i, 'Cross-order token poisoning blocker is missing.'],
  [/Do not obtain any of these provider identifiers from a mobile-client request/i, 'Untrusted client identifier isolation is missing.'],
  [/application routing must happen before entitlement or dispute logic/i, 'Multi-app package routing safeguard is missing.'],
  [/`orderId` identifies the Google Play purchase\/order[\s\S]{0,180}`pendingRefundToken` identifies the pending refund review/i, 'Order/token namespace separation is missing.'],
  [/distinct valid `pendingRefundToken` values concerning the same `orderId`[\s\S]{0,180}distinct review cases/i, 'Same-order distinct-review-token handling is missing.'],
  [/Immediately before submission, the worker must atomically verify/i, 'Pre-submit atomic identity recheck is missing.'],
  [/If any binding check fails, \*\*do not call Google\*\*/i, 'Fail-closed pre-submit blocker is missing.'],
  [/Never submit `REFUND_PREFERENCE_UNSPECIFIED` as a fallback/i, 'Unspecified-preference blocker is missing.'],
  [/successful HTTP\/API response therefore means only that the review submission call succeeded/i, 'Empty-success-body/refund-outcome separation is missing.'],
  [/service-account private keys or access tokens/i, 'Server credential secrecy safeguard is missing.'],
  [/must never be able to choose the Google `orderId`, `pendingRefundToken`, preference, or evidence/i, 'Mobile-client privileged-field isolation is missing.'],
  [/are not proof that the named human personally authorized the card\/payment method/i, 'Obfuscated-ID/cardholder-proof separation is missing.'],
  [/pending chargeback review cannot remove Diamonds by itself/i, 'Pending-review Diamond protection is missing.'],
  [/one non-renewing entitlement lasting \*\*30 consecutive days\*\*/i, '30-Day VIP product invariant is missing.'],
  [/Lifetime VIP remains a limited-time promotional one-time entitlement available only during selected genuine sales windows/i, 'Lifetime VIP sales-window invariant is missing.'],
  [/does not itself prove player misconduct and cannot justify confiscating unrelated legitimate purchases/i, 'Operational-failure/player-misconduct separation is missing.'],
  [/Order A path \+ Order B `pendingRefundToken` -> blocked before Google call/i, 'Cross-order QA case is missing.'],
  [/Google returns successful empty response -> no entitlement mutation/i, 'Empty-response QA case is missing.'],
  [/two review cases relating to one order -> no double Diamond clawback or duplicate VIP correction/i, 'Same-order multi-review double-correction QA case is missing.'],
];

for (const [regex, message] of checks) {
  if (!regex.test(text)) failures.push(message);
}

if (!/first API call/i.test(base) || !/24-hour/i.test(base) || !/consumptionPercentageMilliunits/i.test(base)) {
  failures.push('Base Google Play collaborative chargeback gate lost required first-call/deadline/evidence safeguards.');
}

if (/TyconX/.test(text)) failures.push('Displayed/legal typo TyconX found in the identity-binding gate.');
if (/\bTycoonX\b[^\n]{0,60}\bbeta\b|\bbeta\b[^\n]{0,60}\bTycoonX\b/i.test(text)) {
  failures.push('Stale TycoonX beta wording found in the identity-binding gate.');
}

if (!/All 25 target locales and all 100 localized full documents are current/i.test(tracker)) {
  failures.push('Localization tracker is not in the expected closed/current state.');
}

if (failures.length) {
  console.error('TycoonX Google Play chargeback review identity-binding verification FAILED:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX Google Play chargeback review identity-binding verification PASS');
