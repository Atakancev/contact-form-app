#!/usr/bin/env node

import fs from 'node:fs';

const read = (path) => fs.readFileSync(path, 'utf8');
const fail = (message) => {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
};
const requireText = (text, needle, label) => {
  if (!text.includes(needle)) fail(`${label}: missing ${needle}`);
};
const forbidText = (text, needle, label) => {
  if (text.includes(needle)) fail(`${label}: forbidden ${needle}`);
};

const gate = read('TYCOONX_XSOLLA_MANDATORY_CONSUMER_RIGHTS_OVERRIDE_RELEASE_GATE.md');
const xsolla = read('TYCOONX_XSOLLA_REFUND_CHARGEBACK_RELEASE_GATE.md');
const terms = read('tyconx-terms-of-service.md');
const purchases = read('tyconx-purchase-refund-policy.md');
const refundedValue = read('TYCOONX_REFUNDED_TRANSFERRED_VALUE_RECONCILIATION_RELEASE_GATE.md');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

requireText(gate, '**Last reviewed:** September 5, 2026', 'override gate review date');
requireText(gate, 'Provider policy is not a mandatory-rights waiver', 'provider-policy boundary');
requireText(gate, 'Banned or suspended accounts', 'ban/refund separation');
requireText(gate, 'do not reject a statutory withdrawal, non-supply, lack-of-conformity, price-reduction, termination, or reimbursement claim solely because the TycoonX account is banned or suspended', 'ban mandatory-rights safeguard');
requireText(gate, 'Technical problems, non-supply, and lack of conformity', 'technical-defect handling');
requireText(gate, 'A support label such as "technical problem" is not a legal conclusion', 'technical-label safeguard');
requireText(gate, 'Digital-content withdrawal must use the actual statutory conditions', 'withdrawal-law boundary');
requireText(gate, 'prior express request or consent', 'withdrawal consent requirement');
requireText(gate, 'acknowledgement that the withdrawal right would be lost', 'withdrawal acknowledgement requirement');
requireText(gate, 'confirmation on a durable medium', 'durable-medium requirement');
requireText(gate, 'do not infer valid withdrawal-loss consent solely because an account logged in, the app launched, an entitlement was credited', 'no use-only withdrawal inference');
requireText(gate, 'Purchased Diamonds do not expire solely because time passes', 'Diamond invariant');
requireText(gate, '30-Day VIP remains a one-time, non-renewing 30-day entitlement', '30-Day VIP invariant');
requireText(gate, 'Lifetime VIP remains a one-time promotional entitlement offered only during selected genuine sales windows', 'Lifetime VIP invariant');
requireText(gate, 'Refund, remedy, and enforcement are three separate states', 'three-state separation');
requireText(gate, '`account_banned = true` does not mean `statutory_refund_right = false`', 'ban/refund state invariant');
requireText(gate, '`refund_approved = true` does not mean `account_ban = false`', 'refund/enforcement state invariant');
requireText(gate, 'Support decision record', 'support decision matrix');
requireText(gate, 'No double remedy and no double punishment', 'double-recovery safeguard');
requireText(gate, 'one correction budget', 'single correction budget');
requireText(gate, 'Minimum regression cases', 'regression coverage');
requireText(gate, 'globally maps `banned account` to `no consumer remedy`', 'ban blocker');
requireText(gate, 'globally maps `technical problem` to `no remedy`', 'technical blocker');
requireText(gate, 'globally maps `content used` to `withdrawal right lost`', 'withdrawal blocker');
requireText(gate, 'BGB § 307', 'German unfair-terms safeguard');
requireText(gate, 'Directive (EU) 2019/770', 'EU digital-product safeguard');

requireText(xsolla, 'A chargeback request alone is not proof of fraud.', 'existing Xsolla dispute safeguard');
requireText(xsolla, 'Never use a blanket "no refunds" statement for Diamonds, 30-Day VIP, and Lifetime VIP.', 'existing no-blanket-refund safeguard');
requireText(xsolla, 'where mandatory law gives a consumer a refund, price reduction, termination, conformity remedy, or other right, that right overrides this operational gate', 'existing mandatory-rights override');

requireText(terms, 'Nothing in these Terms excludes statutory withdrawal, conformity, update, warranty, price-reduction, termination, refund, or other rights that cannot legally be waived.', 'canonical Terms mandatory-rights safeguard');
requireText(terms, 'merely crediting purchased Diamonds as immediately supplied digital content that automatically removes the statutory withdrawal right', 'canonical Diamond withdrawal safeguard');
requireText(terms, 'A 30-Day VIP and Lifetime VIP are supplied over time.', 'canonical VIP digital-service safeguard');

requireText(purchases, 'transaction-specific Xsolla terms and refund policy shown for that purchase apply together with mandatory consumer law', 'canonical Purchases Xsolla mandatory-law parity');
requireText(purchases, 'A player’s unrelated gameplay violation, transfer violation, or real-money-trading violation does not by itself erase those rights', 'canonical unrelated-enforcement safeguard');
requireText(purchases, 'does not reduce any rights that cannot legally be waived', 'canonical Purchases non-waiver');

requireText(refundedValue, 'One invalid source transaction creates one correction budget', 'refunded-value anti-double-recovery');
requireText(refundedValue, 'Lawful refund, withdrawal, or chargeback activity is not automatically fraud', 'lawful-remedy enforcement separation');

requireText(progress, '100/100 localized full documents are currently confirmed current', 'localized full-document completion');
requireText(progress, '25/25', 'localized hub completion');
requireText(progress, 'Exact next unfinished locale/document: None', 'closed localization queue');

forbidText(gate, 'TyconX', 'brand typo');
forbidText(gate, 'TycoonX beta', 'stale live-service beta wording');

if (!process.exitCode) {
  console.log('PASS: Xsolla support cannot use provider refund boilerplate to erase mandatory TycoonX consumer rights, product distinctions, or independent enforcement state.');
}
