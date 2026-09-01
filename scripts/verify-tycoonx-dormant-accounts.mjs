#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();

const files = {
  gate: 'TYCOONX_DORMANT_INACTIVE_ACCOUNT_ENTITLEMENT_RELEASE_GATE.md',
  terms: 'tyconx-terms-of-service.md',
  privacy: 'tyconx-privacy-policy.md',
  deletion: 'TYCOONX_ACCOUNT_DELETION_RELEASE_GATE.md',
  lifetime: 'TYCOONX_LIFETIME_VIP_LIMITED_PROMOTIONAL_ENTITLEMENT_RELEASE_GATE.md',
  vip30: 'TYCOONX_30_DAY_VIP_ONE_TIME_ENTITLEMENT_RELEASE_GATE.md',
  progress: 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md',
};

const content = {};
for (const [key, relativePath] of Object.entries(files)) {
  content[key] = await readFile(path.join(root, relativePath), 'utf8');
}

const failures = [];

function requireText(text, token, message) {
  if (!text.includes(token)) failures.push(message);
}

function requirePattern(text, pattern, message) {
  if (!pattern.test(text)) failures.push(message);
}

requireText(content.gate, 'Last reviewed: September 1, 2026', 'Dormant-account gate is not reviewed for the full-release date.');
requireText(content.gate, '**DORMANT:**', 'Missing distinct DORMANT state.');
requireText(content.gate, '**ARCHIVED:**', 'Missing distinct ARCHIVED state.');
requireText(content.gate, '**SECURITY_RESTRICTED:**', 'Missing distinct SECURITY_RESTRICTED state.');
requireText(content.gate, '**DELETION_PENDING:**', 'Missing distinct DELETION_PENDING state.');
requireText(content.gate, '**TERMINATED:**', 'Missing distinct TERMINATED state.');
requirePattern(content.gate, /Changing an account to `DORMANT` or `ARCHIVED` must not silently perform.*`DELETED` or `TERMINATED`/is, 'Dormant/archive state is not clearly separated from deletion/termination.');

requireText(content.gate, 'GDPR Article 5(1)(e)', 'Missing GDPR storage-limitation safeguard.');
requireText(content.gate, 'GDPR Article 17', 'Missing GDPR erasure safeguard.');
requirePattern(content.gate, /does not mean every piece of personal data associated with the account may be retained forever/i, 'Missing Lifetime VIP data-minimization safeguard.');
requireText(content.gate, 'BGB § 307', 'Missing German standard-term fairness safeguard.');
requirePattern(content.gate, /Do not rely on a blanket clause saying all paid value is forfeited after inactivity/i, 'Missing blanket inactivity-forfeiture prohibition.');

requireText(content.gate, 'Purchased Diamonds do not expire solely because time passes.', 'Missing canonical purchased-Diamond non-expiry rule.');
requirePattern(content.gate, /Purchased Diamonds must not expire solely because an account is dormant, archived, or unused/i, 'Missing dormant-account Diamond non-expiry safeguard.');
requirePattern(content.gate, /inactivity fee, dormant-account fee, maintenance debit, or negative balance.*purchased Diamonds/is, 'Missing hidden inactivity-fee safeguard.');
requirePattern(content.gate, /credits or in-game currencies purchased through In-App Purchase may not expire/i, 'Missing Apple purchased-currency non-expiry rule.');

requirePattern(content.gate, /30-Day VIP.*30 consecutive days/is, 'Missing 30-Day VIP consecutive-period model.');
requirePattern(content.gate, /does not pause the 30 consecutive days/i, 'Missing 30-Day VIP no-pause rule.');
requirePattern(content.gate, /does not receive another 30 days from a historical transaction replay/i, 'Missing 30-Day VIP no-restart safeguard.');
requirePattern(content.gate, /operator-side outage.*player inactivity/is, 'Missing outage-versus-inactivity remedy separation.');

requirePattern(content.gate, /Lifetime VIP.*commercial operating lifetime of the TycoonX Service/is, 'Missing Lifetime VIP commercial-lifetime definition.');
requirePattern(content.gate, /Dormancy alone is not a hidden expiry event/i, 'Missing Lifetime VIP no-hidden-inactivity-expiry rule.');
requirePattern(content.gate, /restore or reactivate one valid Lifetime VIP exactly once/i, 'Missing idempotent Lifetime VIP reactivation rule.');
requirePattern(content.gate, /must not create duplicate Lifetime VIP/i, 'Missing cross-account Lifetime VIP duplication safeguard.');

requireText(content.gate, '`queryPurchasesAsync()`', 'Missing current Google Play purchase reconciliation API.');
requireText(content.gate, '`purchaseToken`', 'Missing Google Play purchase-token verification.');
requirePattern(content.gate, /`queryPurchaseHistory\(\)` is deprecated/i, 'Missing deprecated Google purchase-history warning.');
requirePattern(content.gate, /tracked on the backend/i, 'Missing backend historical purchase record safeguard.');
requirePattern(content.gate, /consumed Diamond purchase must not be replayed/i, 'Missing Google consumable replay safeguard.');

requireText(content.gate, 'Xsolla currently documents `new`, `paid`, `done`, `canceled`, and `expired` order states.', 'Missing Xsolla order-state model.');
requirePattern(content.gate, /must be tied to authoritative successful payment\/order state and must be idempotent/i, 'Missing Xsolla authoritative-state/idempotency safeguard.');
requirePattern(content.gate, /must not create another Xsolla order or silently charge a payment method/i, 'Missing Xsolla no-reactivation-charge safeguard.');

requirePattern(content.gate, /inactivity by itself must not be treated as:/i, 'Missing inactivity-not-misconduct classification.');
for (const token of ['fraud;', 'account compromise;', 'a chargeback;', 'exploit use;', 'a request to delete the account;']) {
  requireText(content.gate, token, `Missing inactivity classification safeguard: ${token}`);
}
requirePattern(content.gate, /fail closed for paid-entitlement destruction/i, 'Missing paid-entitlement bulk-cleanup fail-closed rule.');
requirePattern(content.gate, /Do not charge a stored payment method to "reactivate" a dormant account/i, 'Missing no-hidden-reactivation-charge safeguard.');
requirePattern(content.gate, /Support must not request passwords, full card numbers, CVVs, OTP\/TAN\/SMS codes/i, 'Missing secure support evidence rule.');

requireText(content.terms, '**Purchased Diamonds do not expire solely because time passes.**', 'Canonical Terms lost purchased-Diamond non-expiry language.');
requirePattern(content.terms, /30 consecutive days.*activated or otherwise made available/is, 'Canonical Terms lost 30-Day VIP consecutive-period rule.');
requirePattern(content.terms, /commercial operating lifetime of the TycoonX Service for the purchasing account/is, 'Canonical Terms lost Lifetime VIP commercial-lifetime rule.');

requirePattern(content.privacy, /active account and gameplay data may be retained while the account remains active and as needed to provide the Service/i, 'Privacy Policy lost active-account retention distinction.');
requirePattern(content.privacy, /valid entitlement-restoration needs/i, 'Privacy Policy lost entitlement-restoration retention basis.');
requirePattern(content.privacy, /delete or anonymize personal data that is no longer necessary/i, 'Privacy Policy lost post-deletion minimization language.');

requirePattern(content.deletion, /Deleting a TycoonX account must not silently create a refund/i, 'Account deletion gate lost deletion-versus-refund separation.');
requirePattern(content.deletion, /must not restart its 30-day clock/i, 'Account deletion gate lost 30-Day VIP restore-clock safeguard.');
requirePattern(content.deletion, /Lifetime VIP.*restorable after deletion/is, 'Account deletion gate lost Lifetime VIP restore safeguard.');

requirePattern(content.lifetime, /limited.*sales window/is, 'Lifetime VIP gate lost limited-window requirement.');
requirePattern(content.lifetime, /commercial operating lifetime/is, 'Lifetime VIP gate lost commercial-lifetime meaning.');
requirePattern(content.vip30, /one-time.*non-renewing/is, '30-Day VIP gate lost one-time/non-renewing distinction.');

requireText(content.progress, 'All 25 target locales and all 100 localized full documents are current.', 'Localization tracker no longer confirms 100/100 documents current.');
requireText(content.progress, 'TycoonX goes to full release on **September 1, 2026**.', 'Localization tracker lost full-release invariant.');

if (/\bTyconX\b/.test(content.gate)) {
  failures.push('Displayed legacy TyconX spelling found in dormant-account gate.');
}
if (/\bTycoonX beta\b/i.test(content.gate)) {
  failures.push('Stale TycoonX beta wording found in dormant-account gate.');
}

if (failures.length > 0) {
  console.error('TycoonX dormant/inactive account verifier failed:\n');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('PASS: TycoonX dormancy, GDPR minimization, Apple/Google/Xsolla reconciliation, Diamonds, 30-Day VIP, Lifetime VIP, deletion, and reactivation safeguards are present.');
