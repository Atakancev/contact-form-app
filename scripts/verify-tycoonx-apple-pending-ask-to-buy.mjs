import fs from 'node:fs';

const gatePath = 'TYCOONX_APPLE_PENDING_PURCHASE_ASK_TO_BUY_RELEASE_GATE.md';
const purchasesPath = 'tyconx-purchase-refund-policy.md';
const minorGatePath = 'TYCOONX_MINOR_PURCHASE_PARENTAL_AUTHORIZATION_RELEASE_GATE.md';
const sandboxGatePath = 'TYCOONX_APPLE_SANDBOX_TESTFLIGHT_PRODUCTION_ISOLATION_RELEASE_GATE.md';
const orderingGatePath = 'TYCOONX_PAYMENT_EVENT_ORDERING_REPLAY_RECONCILIATION_RELEASE_GATE.md';
const progressPath = 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md';

const gate = fs.readFileSync(gatePath, 'utf8');
const purchases = fs.readFileSync(purchasesPath, 'utf8');
const minorGate = fs.readFileSync(minorGatePath, 'utf8');
const sandboxGate = fs.readFileSync(sandboxGatePath, 'utf8');
const orderingGate = fs.readFileSync(orderingGatePath, 'utf8');
const progress = fs.readFileSync(progressPath, 'utf8');

const failures = [];

function requireText(haystack, needle, label) {
  if (!haystack.includes(needle)) failures.push(`${label}: missing ${JSON.stringify(needle)}`);
}

function forbidText(haystack, needle, label) {
  if (haystack.includes(needle)) failures.push(`${label}: forbidden ${JSON.stringify(needle)}`);
}

// Core StoreKit pending-state semantics.
requireText(gate, 'pending is neither purchased nor failed', 'pending-state model');
requireText(gate, '.pending` means the purchase requires further action from the customer', 'pending definition');
requireText(gate, '.pending` is **not** a verified completed transaction', 'pending not completed');
requireText(gate, '.pending` is **not** a failed transaction', 'pending not failure');
requireText(gate, '.pending` is **not** proof that the player is a minor', 'pending not minor inference');
requireText(gate, '.pending` grants **no purchased Diamonds, no 30-Day VIP, and no Lifetime VIP**', 'no pending entitlement');
requireText(gate, 'Only a subsequently verified Apple transaction', 'verified completion authority');

// Later completion and exactly-once fulfillment.
requireText(gate, 'available through `Transaction.updates`', 'StoreKit later completion');
requireText(gate, 'Grant the corresponding economic mutation **exactly once**', 'exactly-once grant');
requireText(gate, 'Finish the StoreKit transaction only after', 'finish ordering');
requireText(gate, 'Replayed or repeated transaction updates must remain idempotent', 'transaction replay idempotency');
requireText(gate, 'does not need to keep the original purchase screen open', 'UI lifecycle independence');

// Ask to Buy scope.
requireText(gate, 'Ask to Buy is an approval workflow, not entitlement authority', 'Ask to Buy distinction');
requireText(gate, 'creating an Ask to Buy request grants nothing', 'request no grant');
requireText(gate, 'still waits for the underlying Apple purchase to become a verified completed transaction', 'approval not completion');
requireText(gate, 'one Ask to Buy approval cannot authorize later Diamond bundles', 'transaction-specific approval');
requireText(gate, 'Do not infer that every StoreKit `.pending` result is Ask to Buy', 'pending reason inference guard');

// German minor-law boundary.
requireText(gate, 'BGB § 108', 'German later-approval law');
requireText(gate, 'does not replace the required legal analysis of contractual capacity', 'platform/legal separation');
requireText(gate, 'must never be described as a waiver of non-waivable German/EU consumer rights', 'mandatory-rights safeguard');

// Diamonds.
requireText(gate, 'never mint spendable production Diamonds merely because StoreKit returned `.pending`', 'Diamond provisional grant guard');
requireText(gate, 'never let a pending Diamond quantity enter auctions, companies, markets, transfers', 'economy isolation');
requireText(gate, 'do not expire merely because time passes', 'Diamond non-expiry');

// 30-Day VIP.
requireText(gate, 'one-time, non-renewing entitlement lasting 30 consecutive days', '30-Day VIP exact semantics');
requireText(gate, 'start the 30-day period', '30-Day pending clock guard');
requireText(gate, 'must not create a fresh 30-day clock', '30-Day replay guard');

// Lifetime VIP sales-window doctrine.
requireText(gate, 'limited-time promotional one-time entitlement', 'Lifetime VIP limited-time product');
requireText(gate, 'may be withdrawn from future sale, may never return', 'Lifetime future availability');
requireText(gate, 'No reservation from pending alone', 'Lifetime pending reservation guard');
requireText(gate, 'No reopening after closure', 'Lifetime closed-window guard');
requireText(gate, 'Honor a genuine later provider completion when applicable', 'Lifetime valid late completion');
requireText(gate, 'Do not manually recreate a failed/expired request', 'Lifetime support recreation guard');
requireText(gate, 'One valid transaction = one Lifetime VIP entitlement', 'Lifetime idempotency');

// Lifecycle/account safety.
requireText(gate, 'pending purchase can outlive the original screen or app session', 'pending lifecycle');
requireText(gate, 'must not bind a later transaction to the wrong game account', 'account binding');
requireText(gate, 'do not silently recreate deleted gameplay state', 'account deletion safeguard');

// Fraud, finance, and test isolation.
requireText(gate, 'Pending is not a fraud or enforcement signal', 'fraud isolation');
requireText(gate, 'Do not infer age, parental status, household structure, or legal incapacity from `.pending` alone', 'sensitive inference guard');
requireText(gate, 'Pending purchase attempts are not settled sales', 'finance classification');
requireText(gate, 'sandbox/TestFlight/Xcode pending request must never mint unrestricted production Diamonds or production VIP', 'test isolation');
requireText(gate, 'a test approval cannot reopen a production Lifetime VIP sales window', 'test Lifetime isolation');

// Future states and support.
requireText(gate, 'Unknown future StoreKit purchase result/state', 'future-state handling');
requireText(gate, 'do not coerce it to `success`', 'future success guard');
requireText(gate, 'do not coerce it to fraud or chargeback', 'future fraud guard');
requireText(gate, 'support does not grant from screenshots', 'support screenshot safeguard');
requireText(gate, 'do not ask for Apple Account passwords', 'support credential minimization');

// Regression coverage.
requireText(gate, 'Diamond purchase returns `.pending`; zero purchased Diamonds are granted.', 'pending Diamond regression');
requireText(gate, 'Pending Diamond purchase later completes through `Transaction.updates`; the bundle grants once.', 'late Diamond completion regression');
requireText(gate, 'Ask to Buy is approved but the underlying Apple purchase has not produced a verified completed transaction', 'approval-before-completion regression');
requireText(gate, '30-Day VIP returns `.pending`; the 30-day clock does not start.', '30-Day pending regression');
requireText(gate, 'Lifetime VIP request becomes pending during an open genuine sales window', 'Lifetime pending-window regression');
requireText(gate, 'old Lifetime VIP pending request never completes after the window closes', 'Lifetime no-completion regression');
requireText(gate, 'Two workers observe the same later completed transaction concurrently', 'concurrency regression');

// Canonical public meaning already covers pending and later completion.
requireText(purchases, 'A purchase that Apple still reports as pending does not create a TycoonX paid entitlement until Apple reports a completed valid transaction.', 'canonical Apple pending rule');
requireText(purchases, 'If Apple later completes a provider-approved pending transaction', 'canonical Apple late completion');
requireText(purchases, 'entering a pending payment state before a sales window closes does not by itself reserve Lifetime VIP or an earlier price', 'canonical Lifetime pending rule');
requireText(purchases, 'A pending purchase does not reserve a second entitlement or create a duplicate grant.', 'canonical duplicate pending guard');

// Existing doctrine remains linked rather than replaced.
requireText(minorGate, 'Do not grant paid TycoonX value merely because an approval request exists.', 'existing minor Ask to Buy rule');
requireText(minorGate, 'A declined or unanswered Ask to Buy request does not create an entitlement.', 'existing minor declined rule');
requireText(sandboxGate, 'sandbox', 'existing Apple test isolation');
requireText(orderingGate, 'arrival order', 'existing payment ordering doctrine');

// Localization/release status.
requireText(gate, 'does not reopen the completed localization queue', 'no localization reopening');
requireText(progress, '25/25', 'localized hubs');
requireText(progress, 'all 100 localized full documents are current', 'localized documents');
requireText(progress, 'Exact next unfinished locale/document: None.', 'localization queue');
requireText(progress, 'September 1, 2026', 'full-release date');

// Source freshness and brand safeguards.
requireText(gate, 'Sources checked September 9, 2026', 'research checkpoint');
requireText(gate, 'https://developer.apple.com/documentation/storekit/product/purchaseresult', 'Apple PurchaseResult source');
requireText(gate, 'https://developer.apple.com/documentation/storekittest/sktesttransaction/pendingasktobuyconfirmation', 'Apple Ask to Buy test source');
requireText(gate, 'https://www.gesetze-im-internet.de/bgb/__108.html', 'BGB source');
forbidText(gate, 'TyconX', 'displayed brand typo');
forbidText(gate.toLowerCase(), 'tycoonx beta', 'stale beta wording');
forbidText(gate.toLowerCase(), 'tycoonx is in beta', 'stale beta wording');

if (failures.length > 0) {
  console.error('TycoonX Apple pending purchase / Ask to Buy verification failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX Apple pending purchase / Ask to Buy invariants verified.');
