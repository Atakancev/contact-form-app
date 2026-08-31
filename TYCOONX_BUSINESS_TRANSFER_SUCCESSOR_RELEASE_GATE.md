# TycoonX Business Transfer & Successor Operator Release Gate

**Status:** P0 legal / entitlement / platform-migration gate  
**Reviewed:** August 31, 2026  
**Applies to:** any sale, asset transfer, statutory merger, reorganization, financing transaction, operator change, developer-account transfer, or successor arrangement affecting TycoonX.

## Purpose

TycoonX may lawfully be sold, reorganized, merged, financed, or moved to a successor operator. The canonical Terms already preserve that possibility and also state that a business transfer does not by itself erase a valid paid entitlement.

The operational risk is assuming that one generic "business transfer" clause automatically transfers every consumer contract, every legal obligation, every platform account, every payment relationship, and every item of personal data in the same way. It does not.

Before a transaction closes, CK-Labs must classify the legal structure, preserve valid player entitlements, map payment/provider responsibilities, secure the data transfer, and provide any notice, consent, objection, termination, or other consumer right required by applicable law.

This gate does not prevent a legitimate sale or reorganization. It is designed to make a transition survivable and defensible without accidentally deleting paid value, breaking logins, losing refund evidence, or claiming a broader transfer right than the law provides.

## 1. First classify the transaction

Do not treat all business changes as legally identical.

### Share or ownership change where the same operating legal entity remains the contracting party

A change in the ownership of the entity operating TycoonX can be materially different from replacing the contracting legal entity itself. If the same legal entity remains the controller, contracting party, and platform/payment account holder, the consumer-contract and GDPR analysis may be narrower, although transparency, corporate, tax, platform, and security duties can still change.

### Asset sale or contractual transfer to a different legal entity

A transfer of assets, source code, trademarks, domains, databases, or receivables does not by itself prove that every consumer-facing contractual obligation has validly moved to the buyer.

Under German law, **BGB § 398** provides for assignment of a claim. A transfer of the corresponding debt or contractual obligation is a different issue. **BGB § 415** expressly provides, for the debt-assumption situation it governs, that effectiveness can depend on the creditor's approval where the assumption was agreed between the debtor and the third-party transferee.

Accordingly:

- do not describe an asset sale as automatically substituting the buyer for CK-Labs in every player contract merely because the Terms mention a possible business transfer;
- identify which rights, claims, liabilities, consumer contracts, licenses, warranties, refund duties, data-processing roles, and platform/payment relationships actually transfer under the chosen transaction structure;
- obtain player consent, give notice, preserve termination/objection rights, or use another lawful mechanism where the specific contract and applicable law require it; and
- do not manufacture a fictional consent event from continued gameplay where actual consent is legally required.

### Statutory merger or other universal succession

A statutory reorganization can operate differently from an ordinary asset sale. For example, **UmwG § 20(1) no. 1** provides that, on registration of an in-scope merger, the transferring entity's assets including liabilities pass to the acquiring entity.

Do not mechanically apply the asset-sale consent analysis to a transaction that legally effects universal succession, and do not claim universal succession for a transaction that does not qualify for it. Transaction counsel should classify the actual structure before CK-Labs changes player-facing wording or records.

## 2. Paid-entitlement continuity is a P0 closing item

A business transaction must not become an excuse to erase legitimate paid value.

Before a successor takes operational control, create a reconciliation package that can prove, per account and transaction where reasonably necessary:

- purchased Diamond balance and the ledger distinction between purchased, spent, refunded/reversed, promotional, gameplay-earned, duplicate, and disputed value;
- active one-time **30-Day VIP**, activation time, expiry time, and remaining paid period;
- valid **Lifetime VIP**, original purchase channel, transaction/reference identifier, restore evidence, and current validity state;
- pending, refunded, reversed, charged-back, revoked, canceled, disputed, and fraud-reviewed transactions;
- platform/provider source of truth for Apple, Google Play, and Xsolla transactions; and
- prior manual entitlement corrections or support outcomes that materially affect the current state.

### Required migration invariants

- A valid Diamond balance must not reset merely because the operator, company ownership, backend provider, developer account, or payment integration changes.
- A valid 30-Day VIP must retain its remaining paid time unless a lawful remedy or separately valid transaction state requires otherwise.
- A valid Lifetime VIP must continue if the successor continues operating TycoonX, subject to the applicable contract, mandatory law, and lawful transition arrangements.
- A transfer must not duplicate entitlements. Migrating one Lifetime VIP record must not create a second Lifetime VIP, and migrating one Diamond ledger must not replay the original purchase as a fresh grant.
- A refunded, reversed, fraudulent, duplicated, or invalid transaction may still be corrected, but the correction must remain tied to the affected transaction/value where possible.
- A chargeback on one Diamond transaction must not automatically remove a separate valid Lifetime VIP or unrelated 30-Day VIP.
- A business transfer does not create a new cash-redemption promise for Diamonds or other virtual assets.

If continuity cannot be provided, CK-Labs and the successor must assess the mandatory termination, conformity, refund, price-reduction, notice, or other consumer remedies that apply. Do not replace a legally required remedy with a generic statement that the company was sold.

## 3. Lifetime VIP needs an explicit successor decision

Lifetime VIP remains a limited-window promotional offering that may be withdrawn from future sale and may never return. A business transfer does not require the successor to reopen Lifetime VIP sales.

However, the successor must distinguish **future sales availability** from **already purchased valid Lifetime VIP**.

Before closing:

- document the exact commercial-lifetime meaning promised in the applicable Terms/offer at the time of purchase;
- preserve the transaction evidence needed to restore valid Lifetime VIP after device changes, reinstallations, or account migration;
- include outstanding Lifetime VIP obligations in the transaction's entitlement/liability schedule;
- confirm whether Apple/Google/provider restoration paths remain operable after the developer-account transition; and
- prohibit the migration script from converting Lifetime VIP into 30-Day VIP, a subscription, Diamonds, or another product without a lawful basis and any required consumer agreement.

A successor may change future TycoonX features or eventually discontinue the Service only within the existing digital-product, modification, shutdown, notice, and mandatory-remedy rules.

## 4. GDPR controller-change and data-transfer gate

A sale or reorganization involving player data is itself a data-processing event. Corporate necessity does not remove GDPR requirements.

### Determine who is the controller before and after closing

Record:

- current controller identity and contact details;
- successor controller identity and contact details;
- effective transition date;
- whether CK-Labs and the successor are temporarily separate controllers, joint controllers, or controller/processor for any transition activity;
- purposes and legal bases for the transaction-stage disclosure and post-closing processing;
- categories of data actually transferred;
- recipients/processors/subprocessors involved;
- retention/deletion split between transferor and successor; and
- any third-country access or international-transfer mechanism.

Do not use "business sale" as a blanket legal basis for copying every historical TycoonX record. Minimize the transaction dataset and separately justify data that is retained by CK-Labs after closing for tax, accounting, disputes, fraud evidence, legal claims, or another lawful purpose.

### Transparency must follow the real controller

GDPR Articles **13 and 14** require, among other things, transparency about the controller's identity/contact details, processing purposes and legal basis, and recipients/categories of recipients. Article 14 applies where the new controller obtains personal data other than directly from the player, subject to the Regulation's exceptions.

Where Article 14 applies, the successor must also respect its timing rules, including the applicable reasonable-period / one-month limit and earlier timing where the data are used to communicate with the person or disclosed onward.

Therefore:

- update the TycoonX Privacy Policy, legal notice/imprint, support identity, and relevant store metadata to identify the correct operator/controller by the legally effective time;
- give additional direct notice where required by law or needed for fair and transparent processing;
- explain material new purposes, recipients, international transfers, or rights where they actually change;
- do not state that players "consented to the sale" merely because the Privacy Policy disclosed that a business transfer could occur; and
- if post-closing processing would require consent, obtain that consent separately rather than treating the corporate transaction itself as consent.

### Keep privacy rights working during the transition

The transition plan must preserve access, rectification, erasure, restriction, objection, portability, complaint, account-deletion, and other applicable rights workflows.

Open requests must have an owner. A request received before closing must not disappear because the support system or controller changed. The transferor and successor must document who will answer it, which entity holds the relevant data, and how the statutory deadline will be preserved.

## 5. Security and credential handover

Never "transfer the business" by sharing old owner passwords, personal Apple/Google credentials, root database passwords, or long-lived production secrets with the buyer.

Before and immediately after closing where relevant:

- provision successor-controlled accounts and least-privilege access;
- rotate API keys, webhook secrets, signing keys, service-role credentials, recovery methods, and administrator credentials that should no longer remain with the transferor;
- preserve only legally needed historic logs and transaction evidence;
- remove former personnel access on an agreed cutover schedule;
- verify backups and a rollback/reconciliation plan;
- preserve the audit trail for entitlement migration; and
- treat an accidental disclosure during due diligence or migration as a security/privacy incident under the applicable incident-response gates.

Do not delete old transaction evidence before verifying the successor can service refunds, chargebacks, entitlement restores, statutory claims, and accounting questions that depend on that evidence.

## 6. Apple App Store transfer checkpoint

Apple's current App Store Connect guidance expressly supports transferring an app after it has been sold to another developer while keeping it available for download. Apple currently states that the transferred app keeps its Bundle ID, reviews and ratings, and users continue receiving updates.

That continuity does not mean every integration migrates automatically.

As of August 31, 2026, Apple's transfer guidance requires CK-Labs and the successor to review, where applicable:

- app-transfer eligibility and both parties' current Apple agreements;
- In-App Purchase product status and product-ID conflicts in the recipient account;
- new/updated support, marketing, privacy-policy, App Review, and App Store contact information when the recipient accepts the transfer;
- existing App Privacy answers;
- **Sign in with Apple** transfer identifiers for users;
- keychain-sharing changes, including the risk that users may need to sign in again after a transferred app is updated;
- APNs certificates/keys and push-server configuration;
- webhooks that may otherwise continue pointing to the transferor's server;
- Game Center and other capabilities used by the shipped TycoonX build;
- sales/payment history that the transferor should preserve before access changes; and
- alternative-distribution or EU alternative-terms requirements if the affected TycoonX distribution uses them.

Do not start an Apple transfer until purchased Diamonds, 30-Day VIP and Lifetime VIP restoration/reconciliation behavior has been tested against the planned recipient account and backend ownership model.

## 7. Google Play transfer checkpoint

Google Play currently provides a Play Console process for transferring apps to a different developer account. The exact eligibility, payment-profile, API-access, app-signing, order/refund, service-account, and product implications must be checked against the current Play Console transfer instructions at the time of a real transaction.

Before a transfer:

- export and preserve the reports and transaction evidence CK-Labs will need after its access changes;
- document the app package, signing configuration, linked Google Cloud/Play Developer API access, Pub/Sub/RTDN configuration, service accounts, webhooks, purchase-token reconciliation, and refund/voided-purchase workflows;
- verify that the successor can validate existing purchase tokens and process future provider state changes before cutover;
- test a valid prior Diamond purchase, active 30-Day VIP, and any supported restorable non-consumable/Lifetime VIP path after the transfer; and
- do not assume that transferring the Play listing automatically transfers every external cloud resource, legal agreement, support mailbox, or CK-Labs database credential.

If the then-current Google process differs from this gate, the current Google process controls the platform implementation. Mandatory consumer and data-protection rights remain separate.

## 8. Xsolla / official web shop checkpoint

Xsolla's current integration is organized around a Publisher Account/company, `merchant_id`, projects/`project_id`, API keys, catalog configuration, webhooks, legal settings, and a signed licensing arrangement before real payments are enabled.

A sale of TycoonX does not by itself prove that the existing Xsolla agreement, legal entity, merchant relationship, project, tax/KYC status, payout setup, or API credentials can simply be handed to the successor.

Before closing:

- ask Xsolla through the applicable account/support process what is required for the specific legal-entity/operator change;
- record whether the existing project can remain, must be amended, or must be migrated;
- complete any required successor KYC/tax/licensing steps before routing real payments to the successor;
- preserve transaction, refund, chargeback, payout, and entitlement reconciliation evidence from the old setup;
- rotate API keys and webhook secrets rather than sharing a broad old company credential indefinitely;
- update the webshop's Terms/Privacy links and merchant/operator disclosures to the correct entity; and
- test that provider refunds/reversals received after cutover still reach a system that can correct only the affected TycoonX value.

A successor must not issue a second entitlement merely because the same historical transaction is imported into a new Xsolla/TycoonX ledger.

## 9. Provider replacement is not the same as a business sale

TycoonX may replace hosting, database, authentication, support, analytics, payment, anti-fraud, moderation, or other providers without selling the entire business.

For each replacement:

- classify whether the provider is a processor, independent controller, merchant/payment participant, platform, or another role;
- migrate only the data and credentials needed for the new provider;
- terminate or narrow old provider access when appropriate;
- preserve refund/transaction evidence where the old provider may still send reversals or where legal retention is required;
- update Privacy/Terms/checkout disclosures when the public legal meaning or recipient information materially changes; and
- keep old and new provider records linked enough to avoid duplicate grants or loss of valid entitlements.

## 10. Player communication for a successor transition

Where notice is required or commercially appropriate, the communication should state in clear language:

- the effective date of the operator/controller change;
- the successor's identity and support/contact information;
- whether the TycoonX service itself continues;
- the effect on valid Diamonds, 30-Day VIP and Lifetime VIP;
- whether the Terms or Privacy Policy change and when;
- whether action or consent is required from the player;
- any material login, restore, platform, or support changes; and
- the mandatory objection, termination, withdrawal, refund, privacy, or other rights that apply.

Do not create unnecessary alarm by saying a corporate transaction automatically cancels accounts or purchases when it does not. Equally, do not hide a real controller or contracting-party change behind a generic "we updated our Terms" notice.

## 11. Service shutdown instead of transfer

If a proposed transaction fails and TycoonX will instead be permanently discontinued, use the separate digital-product change/shutdown gate and canonical shutdown rules.

Do not pretend that a non-existent successor has assumed player obligations. Preserve required records, provide legally required notice, and apply mandatory refund, price-reduction, termination, conformity, warranty, data-export/deletion, and other remedies according to the actual shutdown circumstances.

## 12. Closing checklist

Do not complete operational cutover until the responsible owner can answer **yes** to each applicable item:

- [ ] Transaction structure is classified: same-entity ownership change, asset/contract transfer, statutory universal succession, or another documented structure.
- [ ] Contract-transfer analysis distinguishes assigned claims from transferred obligations and identifies any required consent/notice/termination rights.
- [ ] Purchased Diamond balances and transaction lineage reconcile before and after migration.
- [ ] Active 30-Day VIP retains the correct remaining paid time.
- [ ] Valid Lifetime VIP continues if the successor continues TycoonX, subject to the applicable contract and mandatory law.
- [ ] Pending refunds, reversals, chargebacks, disputes, and provider notifications have an owner after cutover.
- [ ] No migration step duplicates a Diamond grant or VIP entitlement.
- [ ] New controller/operator identity and contact information are correct in the Privacy Policy, Terms/legal notice, support surfaces, and applicable store metadata by the legally required time.
- [ ] GDPR Articles 13/14 transparency and any international-transfer consequences have been reviewed.
- [ ] Open privacy and account-deletion requests remain tracked across the cutover.
- [ ] Apple transfer-specific Sign in with Apple, keychain, push, webhook, App Privacy, IAP, and reporting dependencies have been reviewed where applicable.
- [ ] Google Play transfer, signing/API/RTDN/order/refund dependencies have been reviewed against the current Play process.
- [ ] Xsolla has confirmed the required treatment of the actual company/legal-entity/project change before real payments are moved.
- [ ] Old administrator/API access is rotated or removed on a controlled schedule.
- [ ] Historical purchase/refund/accounting evidence needed for claims remains available to the entity that must service those claims.
- [ ] Any required player notice, consent, objection, or termination route is ready before the effective date.

## 13. Evidence to retain

Keep a dated transition record containing only what is reasonably necessary, including:

- transaction/legal structure and effective date;
- old and new operator/controller identity;
- contract/entitlement migration decision;
- Apple/Google/Xsolla transfer confirmations and configuration snapshots relevant to TycoonX;
- before/after entitlement reconciliation totals and sampled account-level evidence;
- credential/access-rotation record without storing secrets in the compliance file;
- copies of player notices and the Terms/Privacy versions in force at transition;
- provider/subprocessor and international-transfer changes;
- open refund/chargeback/privacy/support cases handed over; and
- exceptions or failed migrations and how they were resolved.

Retention of this evidence remains subject to the Privacy Policy, data minimization, security, and applicable statutory retention rules.

## 14. Current legal/platform reference checkpoint

Reviewed August 31, 2026 against:

- German **BGB § 398** (assignment of claims);
- German **BGB § 415** (approval rule for the debt-assumption situation it governs);
- German **UmwG § 20(1) no. 1** (transfer of assets including liabilities by universal succession for an in-scope registered merger);
- GDPR Articles **13 and 14** on controller identity, purposes/legal basis, recipients and transparency, together with the other applicable GDPR principles and rights;
- Apple's current App Store Connect **Overview of app transfer**, **App transfer criteria**, **Initiate an app transfer**, and **Accept an app transfer** documentation; and
- Google's current Play Console help category for **Transfer apps to a different developer account**, with transaction-time verification required because transfer mechanics can change;
- Xsolla's current Publisher Account documentation describing company/merchant ID, project ID, API keys, legal settings, transaction reporting and the licensing step required for real payments.

Official reference links:

- https://www.gesetze-im-internet.de/bgb/__398.html
- https://www.gesetze-im-internet.de/bgb/__415.html
- https://www.gesetze-im-internet.de/umwg_1995/__20.html
- https://eur-lex.europa.eu/eli/reg/2016/679/oj
- https://developer.apple.com/help/app-store-connect/transfer-an-app/overview-of-app-transfer
- https://developer.apple.com/help/app-store-connect/transfer-an-app/app-transfer-criteria
- https://developer.apple.com/help/app-store-connect/transfer-an-app/accept-an-app-transfer
- https://support.google.com/googleplay/android-developer/answer/6230247
- https://developers.xsolla.com/sdk/publisher-account/
- https://developers.xsolla.com/api/getting-started/

## Founder-protective result

This gate preserves CK-Labs' ability to sell, merge, reorganize, finance, or transfer TycoonX without promising that CK-Labs must operate the game forever. It also prevents the opposite mistake: assuming a company transaction automatically extinguishes purchased value, silently transfers contracts that legally require another mechanism, converts a Privacy disclosure into consent, or eliminates mandatory consumer remedies.

The safest transition is one in which the legal structure, controller identity, provider accounts, entitlement ledger, refund/chargeback evidence, and player communication all describe the same real-world operator on the same effective date.