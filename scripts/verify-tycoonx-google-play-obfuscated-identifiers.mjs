import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const gatePath = path.join(root, 'TYCOONX_GOOGLE_PLAY_OBFUSCATED_IDENTIFIER_PRIVACY_RELEASE_GATE.md');
const pendingPath = path.join(root, 'TYCOONX_GOOGLE_PLAY_PENDING_PURCHASE_ATTRIBUTION_RELEASE_GATE.md');
const chargebackPath = path.join(root, 'TYCOONX_GOOGLE_PLAY_CHARGEBACK_REVIEW_RELEASE_GATE.md');
const privacyPath = path.join(root, 'tyconx-privacy-policy.md');
const trackerPath = path.join(root, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');
const failures = [];

for (const filePath of [gatePath, pendingPath, chargebackPath, privacyPath, trackerPath]) {
  if (!fs.existsSync(filePath)) failures.push(`Missing required file: ${path.basename(filePath)}`);
}

if (failures.length) {
  console.error('TycoonX Google Play obfuscated identifier verification FAILED:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

const text = fs.readFileSync(gatePath, 'utf8');
const pending = fs.readFileSync(pendingPath, 'utf8');
const chargeback = fs.readFileSync(chargebackPath, 'utf8');
const privacy = fs.readFileSync(privacyPath, 'utf8');
const tracker = fs.readFileSync(trackerPath, 'utf8');

const required = [
  'TycoonX',
  'setObfuscatedAccountId()',
  'setObfuscatedProfileId()',
  'obfuscatedAccountId',
  'obfuscatedProfileId',
  '64 characters',
  'clear-text email',
  'one-way hash',
  'PendingRefundReviewNotification',
  'consumptionUsageEvents[]',
  'purchase token',
  'Diamonds',
  'one-time non-renewing 30-Day VIP',
  'Lifetime VIP',
  'Article 5',
  'Article 25',
  'Article 32',
  'pseudonymous',
];

for (const term of required) {
  if (!text.includes(term)) failures.push(`Missing required safeguard/reference: ${term}`);
}

const checks = [
  [/not proof by itself that payment completed/i, 'Identifier/payment-authority separation is missing.'],
  [/must never grant, restore, refund, revoke, or migrate paid value solely because/i, 'Identifier-only entitlement blocker is missing.'],
  [/Do not use as the Google obfuscated identifier:[\s\S]{0,350}- email address;/i, 'Clear-text email/PII blocker is missing.'],
  [/within Google's current \*\*64-character\*\* limit/i, '64-character construction guard is missing.'],
  [/secret\/key[\s\S]{0,180}server-side/i, 'Server-side derivation-secret rule is missing.'],
  [/version the mapping/i, 'Identifier versioning rule is missing.'],
  [/sandbox identifiers and test evidence[\s\S]{0,120}production purchase attribution/i, 'Sandbox/production namespace separation is missing.'],
  [/Missing identifiers are a reconciliation case, not fraud/i, 'Missing-identifier safe attribution rule is missing.'],
  [/risk signal, not proof/i, 'Mismatch/risk-signal distinction is missing.'],
  [/omit the optional identifier rather than guess/i, 'Chargeback evidence omit-rather-than-guess rule is missing.'],
  [/current user snapshot/i, 'Historical usage-event provenance rule is missing.'],
  [/not automatically anonymous data/i, 'Pseudonymous-versus-anonymous GDPR rule is missing.'],
  [/data protection by design and by default/i, 'GDPR Article 25 implementation rule is missing.'],
  [/one period of exactly 30 consecutive days/i, '30-Day VIP duration protection is missing.'],
  [/Lifetime VIP remains a limited-time promotional offering available only during selected genuine sales windows/i, 'Lifetime VIP sales-window rule is missing.'],
  [/matching pseudonymous identifier as proof that the player personally authorized a payment/i, 'Account compromise authorization distinction is missing.'],
  [/identifiers longer than 64 characters are rejected[\s\S]{0,100}rather than truncated into collisions/i, '64-character collision QA case is missing.'],
  [/historical chargeback usage event retains its contemporaneous identifier version/i, 'Historical identifier QA case is missing.'],
];

for (const [regex, message] of checks) {
  if (!regex.test(text)) failures.push(message);
}

if (!/purchases made outside the app (?:may|might) not contain `obfuscatedAccountId` or `obfuscatedProfileId`/i.test(pending)) {
  failures.push('Existing pending-purchase gate no longer preserves missing-identifier behavior.');
}

if (!/pendingRefundToken/i.test(chargeback) || !/consumptionUsageEvents/i.test(chargeback)) {
  failures.push('Existing collaborative chargeback gate is missing expected review evidence safeguards.');
}

if (!/account identifiers and authentication information/i.test(privacy)) {
  failures.push('Canonical Privacy Policy no longer discloses account identifier processing.');
}
if (!/IP address and device or platform information/i.test(privacy)) {
  failures.push('Canonical Privacy Policy no longer discloses relevant security/network data.');
}
if (!/Apple, Google, Xsolla, or other authorized payment or platform providers/i.test(privacy)) {
  failures.push('Canonical Privacy Policy no longer discloses payment/platform partner sharing.');
}
if (!/data minimization/i.test(privacy) || !/pseudonymization/i.test(privacy)) {
  failures.push('Canonical Privacy Policy no longer preserves minimization/pseudonymization safeguards.');
}

if (/TyconX/.test(text)) {
  failures.push('Displayed/legal brand typo found in the obfuscated identifier gate.');
}
if (/\bTycoonX\b[^\n]{0,60}\bbeta\b|\bbeta\b[^\n]{0,60}\bTycoonX\b/i.test(text)) {
  failures.push('Stale live-service beta wording found in the obfuscated identifier gate.');
}
if (!/All 25 target locales and all 100 localized full documents are current/i.test(tracker)) {
  failures.push('Localization tracker is not in the expected closed/current state.');
}

if (failures.length) {
  console.error('TycoonX Google Play obfuscated identifier verification FAILED:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX Google Play obfuscated identifier verification PASS');
