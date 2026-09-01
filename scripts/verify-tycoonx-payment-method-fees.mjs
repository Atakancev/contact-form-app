import fs from 'node:fs';

const gatePath = 'TYCOONX_EU_GERMAN_PAYMENT_METHOD_FEE_SURCHARGE_RELEASE_GATE.md';
const termsPath = 'tyconx-terms-of-service.md';
const purchasesPath = 'tyconx-purchase-refund-policy.md';
const checkoutGatePath = 'TYCOONX_GERMAN_ECOMMERCE_CHECKOUT_RELEASE_GATE.md';
const progressPath = 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md';

const gate = fs.readFileSync(gatePath, 'utf8');
const terms = fs.readFileSync(termsPath, 'utf8');
const purchases = fs.readFileSync(purchasesPath, 'utf8');
const checkoutGate = fs.readFileSync(checkoutGatePath, 'utf8');
const progress = fs.readFileSync(progressPath, 'utf8');

const failures = [];

function requireText(haystack, needle, label) {
  if (!haystack.includes(needle)) failures.push(`${label}: missing ${JSON.stringify(needle)}`);
}

function forbidText(haystack, needle, label) {
  if (haystack.includes(needle)) failures.push(`${label}: forbidden ${JSON.stringify(needle)}`);
}

// Legal classification and German/EU surcharge protections.
requireText(gate, 'BGB § 312a(4)', 'payment-fee gate');
requireText(gate, 'customary and reasonable payment method that is free of charge', 'BGB 312a(4) free method');
requireText(gate, 'fee exceeds the cost borne by the trader', 'BGB 312a(4) cost ceiling');
requireText(gate, 'BGB § 270a', 'German surcharge prohibition');
requireText(gate, 'SEPA Core Direct Debit', 'German surcharge prohibition');
requireText(gate, 'SEPA credit transfer', 'German surcharge prohibition');
requireText(gate, 'payment card in a consumer payment transaction', 'German card surcharge rule');
requireText(gate, 'Directive 2011/83/EU', 'EU payment-fee law');
requireText(gate, 'Article 19', 'EU payment-fee law');
requireText(gate, 'do not add a CK-Labs consumer surcharge merely because the player selected an ordinary covered card, SEPA transfer, or SEPA direct debit', 'German safe operational rule');

// Substance over labels and total-price separation.
requireText(gate, 'Changing the label does not change the substance.', 'fee substance classification');
requireText(gate, '`service fee`', 'fee label classification');
requireText(gate, '`processing fee`', 'fee label classification');
requireText(gate, 'mandatory taxes and unavoidable charges must be disclosed', 'total-price handling');
requireText(gate, 'must not appear only after the consumer has submitted the paid order', 'no late surcharge');
requireText(gate, 'artificially low headline price plus a compulsory `payment fee`', 'no split pricing');

// Apple and Google developer fees must not alter consumer entitlements.
requireText(gate, 'developer/merchant economics', 'Apple developer fee separation');
requireText(gate, 'must not debit extra Diamonds', 'Apple entitlement isolation');
requireText(gate, 'October 1, 2026', 'Apple EU transition awareness');
requireText(gate, 'Google Play service fees and billing fees', 'Google developer fee separation');
requireText(gate, 'must not retroactively alter a completed purchase', 'Google no retroactive fee pass-through');
requireText(gate, 'must not cause a 500-Diamond purchase to deliver fewer Diamonds', 'Google entitlement quantity isolation');

// Xsolla fee fields and provider-controlled checkout evidence.
requireText(gate, '`xsolla_fee`', 'Xsolla financial field');
requireText(gate, '`payment_method_fee`', 'Xsolla financial field');
requireText(gate, 'is not by itself proof that CK-Labs may impose the same amount as a consumer surcharge', 'Xsolla fee-field limitation');
requireText(gate, 'whether any consumer-facing fee varies by payment method', 'Xsolla checkout evidence');
requireText(gate, 'Identify the contracting trader, applicable country law, payment instrument, fee basis', 'Xsolla provider-controlled fee review');

// Gross payment, settlement, and entitlement must not collapse into one value.
requireText(gate, '**consumer charged total**', 'gross payment evidence');
requireText(gate, '**merchant/provider fee and settlement amount**', 'merchant settlement evidence');
requireText(gate, '**TycoonX entitlement promised**', 'entitlement evidence');
requireText(gate, 'Do not calculate the number of Diamonds or VIP duration from CK-Labs\' net payout after provider fees.', 'entitlement isolation');
requireText(gate, 'the player still receives the 500 Diamonds', 'Diamond quantity example');
requireText(gate, 'Merchant fees cannot shorten the 30-Day VIP clock', '30-Day VIP isolation');
requireText(gate, 'partially revoke Lifetime VIP', 'Lifetime VIP isolation');

// Refunds, disputes, external issuer fees, promotions, and migration.
requireText(gate, 'do not withhold an otherwise required refund merely because CK-Labs paid a provider fee', 'refund protection');
requireText(gate, 'do not automatically treat that challenge as chargeback abuse or fraud', 'fee dispute isolation');
requireText(gate, 'external bank/card-issuer/wallet FX or account fee', 'external issuer fee classification');
requireText(gate, 'A payment-method mismatch, card-country mismatch, VPN, travel, or IP-country mismatch is not automatically fraud.', 'regional/fraud separation');
requireText(gate, '`Pending` is not paid.', 'pending payment handling');
requireText(gate, 'must not be repaired by silently charging the difference on a future TycoonX purchase', 'no future catch-up charge');
requireText(gate, 'Replacing Xsolla, changing Apple/Google payment options, or adding another future provider does not rewrite historical transactions.', 'provider migration evidence');

// Release QA and current checkpoint.
requireText(gate, 'covered consumer card with no CK-Labs surcharge', 'release matrix');
requireText(gate, 'SEPA transfer with no CK-Labs surcharge', 'release matrix');
requireText(gate, 'fee amount greater than documented merchant cost', 'release matrix');
requireText(gate, 'Xsollla', 'intentional impossible marker');
