#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const files = {
  settlementGate: 'TYCOONX_XSOLLA_REFUND_SETTLEMENT_ALTERNATIVE_METHODS_RELEASE_GATE.md',
  xsollaGate: 'TYCOONX_XSOLLA_REFUND_CHARGEBACK_RELEASE_GATE.md',
  partialGate: 'TYCOONX_XSOLLA_PARTIAL_REFUND_OCCURRENCE_RECONCILIATION_GATE.md',
  purchases: 'tyconx-purchase-refund-policy.md',
  privacy: 'tyconx-privacy-policy.md',
  progress: 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md',
};

const errors = [];

async function load(key) {
  try {
    return await readFile(path.join(ROOT, files[key]), 'utf8');
  } catch {
    errors.push(`Missing ${files[key]}`);
    return '';
  }
}

const text = Object.fromEntries(
  await Promise.all(Object.keys(files).map(async (key) => [key, await load(key)])),
);

function requireMatch(key, pattern, message) {
  if (!pattern.test(text[key])) errors.push(`${files[key]}: ${message}`);
}

function forbidMatch(key, pattern, message) {
  if (pattern.test(text[key])) errors.push(`${files[key]}: ${message}`);
}

// Current Xsolla refund-settlement checkpoint.
requireMatch('settlementGate', /September 9, 2026/, 'missing current review date');
requireMatch('settlementGate', /up to 5-10 banking days/i, 'missing current payment-method-dependent settlement window');
requireMatch('settlementGate', /once a refund is issued, it \*\*cannot be canceled\*\*/i, 'missing irreversible-issued-refund provider rule');
requireMatch('settlementGate', /alternative refund.*PayPal or Xsolla balance/is, 'missing alternative refund-method handling');
requireMatch('settlementGate', /alternative refunds.*email.*contact/is, 'missing alternative-refund email requirement');
requireMatch('settlementGate', /Refund webhook is sent \*\*only after the money is transferred back to the user\*\*/i, 'missing full-refund settlement timing');
requireMatch('settlementGate', /partial-refund webhook.*when the user receives the funds/is, 'missing partial-refund settlement timing');
requireMatch('settlementGate', /WeChat.*CNY.*USD/is, 'missing documented refund-currency discrepancy case');

// Request versus settlement state machine.
requireMatch('settlementGate', /`refund_requested`/, 'missing requested state');
requireMatch('settlementGate', /`refund_processing`/, 'missing processing state');
requireMatch('settlementGate', /`refund_settled`/, 'missing settled state');
requireMatch('settlementGate', /`refund_failed_or_rejected`/, 'missing failed/rejected state');
requireMatch('settlementGate', /`refund_ambiguous`/, 'missing ambiguous state');
requireMatch('settlementGate', /support ticket.*API request.*local admin action.*not by itself proof that the user received funds/is, 'missing request-not-settlement rule');
requireMatch('settlementGate', /do not submit the same refund again merely because settlement is taking time/i, 'missing blind retry safeguard');
requireMatch('settlementGate', /temporary restriction.*proportionate.*reversible/is, 'missing narrow reversible pending-correction safeguard');
requireMatch('settlementGate', /do not permanently remove unrelated purchased Diamonds.*unrelated 30-Day VIP.*unrelated valid Lifetime VIP/is, 'missing unrelated-entitlement protection during processing');

// Alternative refund and privacy boundaries.
requireMatch('settlementGate', /not promise that every Xsolla refund returns through the original payment instrument/i, 'missing alternative-payment-method support wording');
requireMatch('settlementGate', /not invent an alternative destination or choose one on the player's behalf/i, 'missing alternative destination consent boundary');
requireMatch('settlementGate', /failed\/rejected or manual-review state/i, 'missing rejected-alternative-refund state handling');
requireMatch('settlementGate', /collect only what is reasonably necessary/i, 'missing data-minimisation rule');
requireMatch('settlementGate', /do not treat email possession as proof of account ownership or payment authorization/i, 'missing email/account-authority separation');
requireMatch('settlementGate', /Do not copy a refund email into marketing lists or unrelated analytics/i, 'missing refund-email purpose limitation');

// Fraud, FX, and accounting boundaries.
requireMatch('settlementGate', /Settlement delay is not fraud or entitlement abuse/i, 'missing settlement-delay abuse boundary');
requireMatch('settlementGate', /provider or CK-Labs outages.*operational events, not player sanctions/is, 'missing outage/player-sanction separation');
requireMatch('settlementGate', /does not retroactively change the historical checkout price or currency/i, 'missing historical price/currency rule');
requireMatch('settlementGate', /Do not deduct extra Diamonds or VIP to compensate CK-Labs for processor fees, FX spread, manual-refund costs/i, 'missing processor-cost player-protection rule');
requireMatch('settlementGate', /today's FX rate.*today's Diamond price.*today's VIP price/is, 'missing present-day repricing prohibition');

// Product invariants.
requireMatch('settlementGate', /Purchased Diamonds do not expire solely because time passes/i, 'missing purchased-Diamond non-expiry rule');
requireMatch('settlementGate', /30-Day VIP remains one non-renewing entitlement for \*\*30 consecutive days\*\*/i, 'missing exact 30-Day VIP model');
requireMatch('settlementGate', /Lifetime VIP remains a limited-time promotional one-time entitlement available only during selected genuine sales windows/i, 'missing Lifetime VIP sales-window model');
requireMatch('settlementGate', /may be withdrawn from future sale, may never return/i, 'missing Lifetime VIP future-availability caveat');
requireMatch('settlementGate', /must never reopen a closed Lifetime VIP sales window/i, 'refund path can reopen Lifetime VIP');

// Mandatory German/EU rights.
requireMatch('settlementGate', /BGB § 327n\(4\)/, 'missing German digital-product reimbursement rule');
requireMatch('settlementGate', /within 14 days/i, 'missing statutory 14-day reimbursement boundary');
requireMatch('settlementGate', /same means of payment unless another method is expressly agreed without additional cost/i, 'missing statutory reimbursement-method safeguard');
requireMatch('settlementGate', /BGB § 327o/, 'missing contract-termination reimbursement cross-reference');
requireMatch('settlementGate', /provider limitation does not by itself eliminate a mandatory statutory reimbursement obligation/i, 'missing processor-limitation/mandatory-rights separation');
requireMatch('settlementGate', /Role allocation must not be used to create a circular support dead end/i, 'missing provider-role support safeguard');

// Support/admin status must not overstate settlement.
requireMatch('settlementGate', /refund requested.*refund processing.*additional information required.*refund settled\/completed.*refund rejected\/failed/is, 'missing support status taxonomy');
requireMatch('settlementGate', /Do not show "Refunded".*only knows that a request was submitted/is, 'missing false-completion display safeguard');
requireMatch('settlementGate', /Do not promise an exact settlement date/i, 'missing timing-promise safeguard');

// Existing doctrine remains intact and non-duplicative.
requireMatch('xsollaGate', /request-versus-settlement safety/i, 'main Xsolla gate lost request-versus-settlement doctrine');
requireMatch('xsollaGate', /refund webhook is \*\*not resent\*\*/i, 'main Xsolla gate lost CK-Labs-initiated refund retry warning');
requireMatch('xsollaGate', /authoritative provider status/i, 'main Xsolla gate lost provider reconciliation requirement');
requireMatch('partialGate', /partial_refund.*when the user receives the funds/is, 'partial-refund gate lost settlement timing');
requireMatch('partialGate', /current exchange rate.*later regional price/is, 'partial-refund gate lost historical FX boundary');

// Canonical public purchase/privacy framework still covers the implemented meaning.
requireMatch('purchases', /TycoonX web shop powered by Xsolla/i, 'canonical Xsolla channel missing');
requireMatch('purchases', /Xsolla refunds, reverses, cancels, charges back, or invalidates a transaction/i, 'canonical Xsolla reversal framework missing');
requireMatch('purchases', /does not reduce any rights that cannot legally be waived/i, 'canonical mandatory-rights caveat missing');
requireMatch('purchases', /Purchased Diamonds do not expire solely because time passes/i, 'canonical purchased-Diamond non-expiry rule changed');
requireMatch('purchases', /30-Day VIP is a \*\*one-time, non-renewing entitlement\*\*/i, 'canonical 30-Day VIP model changed');
requireMatch('purchases', /selected limited promotional sales windows/i, 'canonical Lifetime VIP sales-window rule changed');
requireMatch('privacy', /Xsolla/i, 'Privacy Policy no longer covers Xsolla/payment-provider processing');
requireMatch('privacy', /refund/i, 'Privacy Policy no longer covers refund-related processing');

// Localization/release invariants.
requireMatch('progress', /25\/25/, 'localized hubs are no longer complete');
requireMatch('progress', /100\/100/, 'localized full documents are no longer complete');
requireMatch('progress', /Exact next unfinished locale\/document[^\n]*None/i, 'tracker no longer says there is no unfinished locale/document');
requireMatch('progress', /September 1, 2026/, 'full-release date invariant missing');

// Exact displayed brand and no stale live-service beta language in the reviewed legal prose.
const forbiddenBrand = ['Ty', 'conX'].join('');
for (const key of ['settlementGate', 'xsollaGate', 'partialGate', 'purchases', 'privacy']) {
  if (text[key].includes(forbiddenBrand)) errors.push(`${files[key]} contains forbidden displayed-brand spelling`);
  forbidMatch(key, /\bTycoonX\s+(?:is\s+)?(?:a\s+)?beta\b/i, 'contains stale live-service beta wording');
}

console.log('TycoonX Xsolla refund-settlement QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: Xsolla refund request-versus-settlement, alternative refund methods, privacy minimisation, FX handling, product isolation, mandatory rights, and release/localization invariants are present.');
}
