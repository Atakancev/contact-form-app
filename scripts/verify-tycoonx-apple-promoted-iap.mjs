#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_APPLE_PROMOTED_IAP_LIFETIME_SALE_WINDOW_RELEASE_GATE.md');
const lifetimePath = path.join(ROOT, 'TYCOONX_LIFETIME_VIP_LIMITED_PROMOTIONAL_ENTITLEMENT_RELEASE_GATE.md');
const progressPath = path.join(ROOT, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const [gate, lifetime, progress] = await Promise.all([
  readFile(gatePath, 'utf8'),
  readFile(lifetimePath, 'utf8'),
  readFile(progressPath, 'utf8'),
]);

const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

// Current Apple promoted-IAP platform facts.
requireMatch(gate, /up to \*\*20 In-App Purchases\*\*/i, 'Promoted-IAP gate lost Apple 20-product limit.');
requireMatch(gate, /does not yet have the app installed.*continue the transaction in the app/is, 'Promoted-IAP gate lost install-then-continue flow.');
requireMatch(gate, /support the \*\*`PurchaseIntent` API\*\*/i, 'Promoted-IAP gate lost current PurchaseIntent requirement.');
requireMatch(gate, /up to \*\*24 hours\*\* to reflect/i, 'Promoted-IAP gate lost App Store promotion propagation warning.');
requireMatch(gate, /`Product\.PromotionInfo`/i, 'Promoted-IAP gate lost device-level promotion visibility control.');
requireMatch(gate, /deprecated in favor of `PurchaseIntent\.intents`/i, 'Promoted-IAP gate lost deprecated StoreKit 1 promoted-purchase boundary.');
requireMatch(gate, /do not run both promoted-purchase mechanisms for the same runtime flow/i, 'Promoted-IAP gate lost duplicate StoreKit flow prevention.');

// Promotion is not payment authority.
requireMatch(gate, /Promotion is merchandising, not entitlement authority/i, 'Promoted-IAP gate lost merchandising-vs-payment distinction.');
requireMatch(gate, /not by itself proof of payment/i, 'Promoted-IAP gate lost no-payment-proof rule.');
requireMatch(gate, /do not grant Diamonds merely because TycoonX receives a purchase intent/i, 'Promoted-IAP gate lost Diamond pre-verification protection.');
requireMatch(gate, /do not start one-time 30-Day VIP merely because/i, 'Promoted-IAP gate lost 30-Day VIP pre-verification protection.');
requireMatch(gate, /do not activate Lifetime VIP merely because/i, 'Promoted-IAP gate lost Lifetime VIP pre-verification protection.');
requireMatch(gate, /single verified Apple transaction.*once/is, 'Promoted-IAP gate lost exactly-once transaction fulfillment.');

// Lifetime VIP limited-sale integrity.
requireMatch(gate, /Lifetime VIP remains a limited-time promotional offering available only during selected genuine sales windows/i, 'Promoted-IAP gate lost limited Lifetime VIP sale meaning.');
requireMatch(gate, /Do not intentionally leave Lifetime VIP promoted after.*sale has closed/is, 'Promoted-IAP gate lost closed-window de-merchandising rule.');
requireMatch(gate, /previously purchased Lifetime VIP must remain restorable.*does not require.*continue merchandising/is, 'Promoted-IAP gate lost restore-vs-new-sale distinction.');
requireMatch(gate, /visible disappearance.*must not be the only technical control/i, 'Promoted-IAP gate lost 24-hour propagation sale-cutoff safeguard.');
requireMatch(gate, /enforce the campaign's current buy eligibility in TycoonX/i, 'Promoted-IAP gate lost in-app campaign eligibility check.');
requireMatch(gate, /stale Apple merchandising surface must not by itself become evidence of/is, 'Promoted-IAP gate lost stale-promotion abuse boundary.');
requireMatch(gate, /do not silently resurrect the closed offer/i, 'Promoted-IAP gate lost closed-sale anti-reopening rule.');
requireMatch(gate, /do not discard a valid payment solely because.*after the public countdown reached zero/is, 'Promoted-IAP gate lost delayed-valid-payment protection.');

// Install/continuation timing gap.
requireMatch(gate, /App not installed when the customer selects the promotion/i, 'Promoted-IAP gate lost not-installed timing scenario.');
requireMatch(gate, /sale is valid when the customer selects it.*installation completes after.*window has ended/is, 'Promoted-IAP gate lost sale-close-during-install regression case.');
requireMatch(gate, /completed payment before the cutoff/i, 'Promoted-IAP gate lost hard payment-completion cutoff disclosure option.');
requireMatch(gate, /honors an Apple purchase initiated before the cutoff/i, 'Promoted-IAP gate lost initiation-before-cutoff alternative.');

// Product distinctions.
requireMatch(gate, /Purchased Diamonds do not expire merely because time passes/i, 'Promoted-IAP gate lost purchased Diamond non-expiry rule.');
requireMatch(gate, /consumable In-App Purchases do not appear in App Store search results/i, 'Promoted-IAP gate lost Apple consumable search-result limitation.');
requireMatch(gate, /30 consecutive days/i, 'Promoted-IAP gate lost one-time 30-Day VIP duration.');
requireMatch(gate, /must never restart an already-started valid 30-Day VIP period/i, 'Promoted-IAP gate lost 30-Day VIP restart protection.');
requireMatch(gate, /commercial operating lifetime of the TycoonX Service/i, 'Promoted-IAP gate lost Lifetime VIP commercial-lifetime meaning.');
requireMatch(gate, /may be withdrawn from future sale and may never return/i, 'Promoted-IAP gate lost Lifetime VIP no-return rule.');
requireMatch(gate, /App Store promotion does not create a right to continuous sale/i, 'Promoted-IAP gate lost no-continuous-availability promise.');
requireMatch(gate, /restore right must not be confused with a right for new customers to keep buying/i, 'Promoted-IAP gate lost restore-vs-new-purchase rule.');

// Price, metadata, Family Sharing, regional abuse.
requireMatch(gate, /do not display a false price, fake discount, fake countdown, fake scarcity claim/i, 'Promoted-IAP gate lost truthful-promotion rule.');
requireMatch(gate, /do not describe a family-sharing benefit unless it is actually enabled/i, 'Promoted-IAP gate lost Family Sharing marketing boundary.');
requireMatch(gate, /final total price shown before the completed transaction governs/i, 'Promoted-IAP gate lost final-price rule.');
requireMatch(gate, /later lower price does not automatically create a refund, credit, price match/i, 'Promoted-IAP gate lost no-automatic-price-match rule.');
requireMatch(gate, /later higher price does not create an extra charge/i, 'Promoted-IAP gate lost no-retroactive-extra-charge rule.');
requireMatch(gate, /accepting a genuinely displayed Apple storefront price is not automatically regional-price abuse/i, 'Promoted-IAP gate lost legitimate regional-price boundary.');
requireMatch(gate, /fail that purchase continuation safely and refresh current product information/i, 'Promoted-IAP gate lost stale-price fail-safe.');

// German/EU consumer protection.
requireMatch(gate, /Germany's current UWG Annex no\. 7/i, 'Promoted-IAP gate lost German limited-time-offer rule.');
requireMatch(gate, /false statement.*only for a very limited time/is, 'Promoted-IAP gate lost false limited-time claim doctrine.');
requireMatch(gate, /mandatory German\/EU withdrawal, conformity, update, cure, price-reduction, termination, refund, liability/i, 'Promoted-IAP gate lost mandatory-rights preservation.');

// Fraud, refund, and transaction isolation.
requireMatch(gate, /screenshot of the promoted App Store item.*not.*proof/is, 'Promoted-IAP gate lost screenshot-evidence boundary.');
requireMatch(gate, /separate account-recovery\/security analysis from payment\/refund/i, 'Promoted-IAP gate lost account-compromise separation.');
requireMatch(gate, /do not create a special no-refund rule/i, 'Promoted-IAP gate lost refund-channel neutrality.');
requireMatch(gate, /reconcile only the entitlement\/value attributable to the affected transaction/i, 'Promoted-IAP gate lost transaction-specific refund correction.');
requireMatch(gate, /do not remove unrelated purchases/i, 'Promoted-IAP gate lost unrelated-entitlement isolation.');

// Adjacent canonical operational invariants remain intact.
requireMatch(lifetime, /offered only during selected limited promotional sales windows/i, 'Lifetime VIP gate lost selected-sale-window meaning.');
requireMatch(lifetime, /may choose never to offer it again/i, 'Lifetime VIP gate lost no-return rule.');
requireMatch(lifetime, /Apple currently describes a \*\*Non-Consumable\*\* In-App Purchase/i, 'Lifetime VIP gate lost Apple non-consumable mapping.');
requireMatch(lifetime, /stop any App Store merchandising\/promotion|stop presenting the offer as purchasable/i, 'Lifetime VIP gate lost closed-sale presentation control.');

// Localization and release invariants.
requireMatch(progress, /100\/100 localized full documents/i, 'Localization tracker no longer confirms all 100 localized full documents.');
requireMatch(progress, /25\/25.*target locales/is, 'Localization tracker no longer confirms all 25 localized hubs/target locales.');
requireMatch(progress, /Exact next unfinished locale\/document: None/i, 'Localization tracker unexpectedly reports unfinished locale/document work.');
requireMatch(progress, /September 1, 2026/i, 'Localization tracker lost TycoonX full-release date.');
requireMatch(gate, /Last reviewed:\*\* September 7, 2026/i, 'Promoted-IAP gate review date is stale.');

// Brand and stale live-beta wording guard.
for (const [name, text] of [
  ['Apple promoted-IAP gate', gate],
  ['Lifetime VIP gate', lifetime],
]) {
  if (/TyconX/.test(text)) errors.push(`Displayed brand typo found in ${name}.`);
}
if (/TycoonX[^\n]{0,80}\bbeta\b/i.test(gate)) {
  errors.push('Apple promoted-IAP gate contains stale live-service beta wording.');
}

console.log('TycoonX Apple promoted In-App Purchase and Lifetime VIP sale-window QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: PurchaseIntent handling, 24-hour App Store propagation, Lifetime VIP sale-window integrity, product isolation, refund boundaries, truthful limited-time marketing, and mandatory-rights safeguards are present.');
}
