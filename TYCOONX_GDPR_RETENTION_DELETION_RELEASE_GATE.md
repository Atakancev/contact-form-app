# TycoonX GDPR Retention / Deletion Release Gate

**Last reviewed: August 31, 2026**

This release gate turns the TycoonX Privacy Policy's retention language into an operational retention and deletion model for CK-Labs. It is deliberately stricter than a generic "keep data as long as necessary" statement: every retained category needs a real purpose, legal basis, start event, review/deletion trigger, and system owner.

Nothing in this gate removes a GDPR erasure right, statutory consumer remedy, tax/accounting duty, provider refund process, valid entitlement-restoration right, or other non-waivable right. It also does not create a blanket right for CK-Labs to keep all account data merely because one narrow record must remain.

## 1. GDPR baseline: storage limitation is the default

Under GDPR Article 5(1)(e), identifiable personal data must not be kept longer than necessary for the purposes for which it is processed. Article 5(2) also requires CK-Labs to be able to demonstrate compliance.

Under Article 17, personal data must be erased without undue delay where an erasure ground applies, including where the data is no longer necessary, subject to the statutory exceptions. Those exceptions include, among other things, processing necessary to comply with a legal obligation or to establish, exercise, or defend legal claims.

Release rules:

- do not use `we may keep data for legal reasons` as a universal retention basis;
- do not keep the whole TycoonX account because one purchase, invoice, chargeback, fraud incident, or legal claim requires a narrow record;
- where one lawful purpose ends but another remains, reduce the retained data to what is actually needed for the surviving purpose;
- use deletion or genuine anonymization when identifiable data is no longer needed; and
- document retention decisions so CK-Labs can explain why a category still exists and when it will be deleted or reviewed.

## 2. One retention schedule, not one universal number

TycoonX must maintain a dated retention schedule. Each row should record at least:

1. data category;
2. system/provider where it exists;
3. purpose;
4. GDPR legal basis or other applicable legal basis;
5. retention start event;
6. ordinary active-retention period;
7. archive/restricted-retention period, if any;
8. deletion or irreversible-anonymization trigger;
9. lawful hold/exception conditions;
10. who can access the retained data;
11. processor/independent-controller role where a third party is involved; and
12. review owner and last review date.

At minimum, create separate rows for:

- account and profile data;
- authentication and recovery data;
- current gameplay state;
- economy and entitlement ledgers;
- purchased Diamond purchase/spend/refund/correction evidence;
- 30-Day VIP entitlement history;
- Lifetime VIP entitlement and restore evidence;
- Apple App Store transaction evidence;
- Google Play transaction evidence;
- Xsolla transaction/refund/chargeback evidence;
- tax, accounting, invoice, and payout records;
- statutory withdrawal and consumer-remedy records;
- support tickets and attachments;
- moderation reports, appeals, and enforcement history;
- public chat, private chat, and other user-generated content;
- security, anti-fraud, exploit, account-compromise, and audit logs;
- analytics and diagnostics;
- optional-consent evidence and withdrawal records;
- data-subject request and deletion-request evidence;
- legal holds and litigation/dispute evidence;
- backups, replicas, object storage, caches, and search indexes; and
- shutdown or successor-transfer evidence where applicable.

Do not collapse these into one period such as `10 years`, `account lifetime`, or `forever for fraud prevention`.

## 3. German tax and commercial records: classify the document first

Current German retention rules do **not** use one universal ten-year period.

### AO § 147

Current Abgabenordnung § 147(3) generally provides different periods depending on the record category:

- **10 years** for the records identified in § 147(1) no. 1 and the relevant customs records in no. 4a;
- **8 years** for booking vouchers under § 147(1) no. 4; and
- **6 years** for the other records listed in § 147(1), subject to the statutory rules and any longer tax relevance described there.

The ordinary period begins under § 147(4) at the end of the calendar year in which the relevant record/event identified by the statute occurred.

### UStG § 14b

Current UStG § 14b generally requires covered invoices to be retained for **8 years**, beginning at the end of the calendar year in which the invoice was issued, subject to the statute's details and the interaction with AO § 147.

### HGB § 257

Where HGB § 257 applies to CK-Labs for the particular record/entity status, it currently distinguishes:

- **10 years** for the records in § 257(1) no. 1;
- **8 years** for booking vouchers in § 257(1) no. 4; and
- **6 years** for the other covered commercial records.

Do not assume HGB merchant-record rules apply merely because TycoonX is commercially operated. Confirm the actual legal status and record category.

### Release rule

For each retained tax/accounting record, record the specific category and legal source. A narrow legal duty to retain an invoice, booking voucher, payout statement, or accounting record does not authorize keeping unrelated profile, chat, gameplay, marketing, or device data for the same period.

Apple, Google, or Xsolla may be the transaction-specific merchant, commissionaire, payment provider, or independent controller for parts of a payment flow. That can change which document CK-Labs itself is legally required to retain. Preserve CK-Labs' actual accounting and transaction evidence, but do not duplicate full provider datasets without a purpose.

## 4. Civil claims are not a blanket retention permission

BGB § 195 sets the regular limitation period at **three years**. Under BGB § 199(1), that period generally begins at the end of the year in which the claim arose and the creditor knew, or should without gross negligence have known, the relevant circumstances and debtor, unless a different rule applies. Longer maximum periods can apply to particular claims.

Operational rule:

- do not translate `three-year limitation period` into `keep every user's complete data for four calendar years`;
- identify the evidence actually needed to establish, exercise, or defend the reasonably foreseeable claim;
- restrict access to claim-related evidence;
- delete or anonymize unrelated data on its normal schedule; and
- review the hold when the claim, appeal, chargeback, investigation, or limitation reason ends.

A specific active dispute or legal hold can justify longer retention of relevant evidence, but it must be scoped and reviewed rather than becoming a permanent account archive.

## 5. Legal holds must be narrow, documented, and reviewable

Every legal hold should record:

- case or incident reference;
- reason for the hold;
- categories/systems covered;
- start date;
- legal/support owner;
- access restriction;
- next review date; and
- release condition.

Do not place an entire user's historical TycoonX account on indefinite hold because one payment or moderation issue is disputed.

Examples:

- a chargeback over one Diamond order may justify retaining that order, entitlement-ledger entries, relevant support correspondence, and fraud evidence, but not unrelated private chats;
- an account-compromise dispute may justify retaining relevant login/security events and transaction state, but not unrelated marketing analytics; and
- a moderation appeal may justify retaining the reported content and decision evidence for the appeal/dispute period, but not every private message the player has ever sent.

## 6. Diamonds, 30-Day VIP, and Lifetime VIP require different retention logic

### Purchased Diamonds

Separate current spendable balance from historical transaction evidence.

A user having zero Diamonds does not automatically mean CK-Labs can immediately delete every purchase/spend/refund/correction record if some minimum ledger evidence remains necessary for accounting, refund/withdrawal processing, chargebacks, fraud prevention, or legal claims.

Conversely, needing the minimum authoritative ledger does not justify retaining a deleted player's full gameplay profile indefinitely.

A retained Diamond ledger must not be replayed as a new grant after account deletion, restore, provider reconciliation, or migration.

### One-time 30-Day VIP

30-Day VIP is a one-time, non-recurring, time-limited entitlement. Retain enough history to prove purchase/activation/expiry/refund/reversal where needed. Once the entitlement is expired and the relevant accounting, refund, dispute, and security periods have ended, do not keep additional identifiable VIP telemetry merely because the product once existed.

Historical evidence must not restart the 30-day clock during restoration or migration.

### Lifetime VIP

Lifetime VIP is a one-time, limited-window promotional entitlement for the commercial operating lifetime of TycoonX. It may be withdrawn from sale and may never return.

A minimal purchaser/transaction/entitlement proof may need to survive deletion of ordinary gameplay data where the contract, provider records, platform restoration rules, or mandatory law support later restoration. Keep that proof separated from deleted profile/gameplay data as far as reasonably practicable.

Retention for restoration does not authorize:

- recreating deleted gameplay progress;
- recreating consumed Diamonds;
- duplicating Lifetime VIP onto multiple accounts;
- retaining unrelated chats or analytics; or
- treating Lifetime VIP as continuously available for future sale.

## 7. Account deletion must propagate across systems

The public account-deletion flow and GDPR erasure workflow must map to actual systems, not only delete one primary account row.

The deletion implementation must classify and, where applicable, delete/anonymize or restrict records in:

- primary account/profile storage;
- gameplay/economy tables and ledgers;
- authentication systems;
- chat and UGC storage;
- search indexes;
- caches;
- object/file storage;
- support systems;
- analytics/diagnostics systems;
- security/fraud systems;
- payment/entitlement reconciliation stores;
- data exports/warehouse copies if any;
- notification/contact lists; and
- processors that act on CK-Labs' deletion instructions.

Where Apple, Google, Xsolla, a bank, card network, authentication provider, or other third party is an independent controller for its own data, a TycoonX deletion does not falsely promise that CK-Labs can erase that independent controller's legal records. CK-Labs must still delete its own unnecessary copies and send processor deletion instructions where CK-Labs is entitled and required to do so.

## 8. Backups are not a permanent erasure exception

Deletion may not be technically instantaneous in every backup, but `it is in a backup` is not a lawful reason to preserve identifiable data forever.

Backup rules:

- define and document the backup lifecycle;
- restrict ordinary access to backup copies;
- do not use expired/deleted data from backups for marketing, profiling, ordinary gameplay, or unrelated analytics;
- delete or overwrite backups through the normal documented lifecycle where immediate selective deletion is not reasonably possible;
- where a backup is restored after a disaster, reapply deletion tombstones/suppression lists so previously deleted records are not silently resurrected into production; and
- review unusually long or immutable backup retention against necessity, security, legal obligations, and GDPR storage limitation.

The Privacy Policy's reference to a limited backup lifecycle must match the real technical lifecycle.

## 9. Genuine anonymization is different from pseudonymization

Data can remain outside GDPR only where anonymization is genuinely effective under the applicable legal standard. Replacing a user ID with a stable hash or internal pseudonym while CK-Labs retains the re-identification key is ordinarily not the same thing as irreversible anonymization.

Before treating a dataset as anonymous:

- assess direct and indirect identifiers;
- assess whether CK-Labs or a reasonably likely party can re-identify individuals using retained auxiliary data;
- remove or generalize linkable identifiers where necessary; and
- document the anonymization method and purpose.

Do not label a merely pseudonymized anti-fraud, analytics, or economy dataset `anonymous` in the Privacy Policy or internal retention schedule.

## 10. Private communications and moderation evidence

The canonical Privacy Policy already says private communications are not retained indefinitely merely because they were once reviewed for moderation. The implementation must reflect that promise.

Required distinction:

- ordinary private message content follows its normal product/deletion lifecycle;
- content actually reported or necessary for an active safety/moderation case may be retained separately for a proportionate case/appeal period;
- evidence needed for a serious abuse, security, legal, or regulatory matter may receive a documented legal hold; and
- once the specific reason expires, the case copy must return to the applicable deletion schedule.

A repeat-offender safety model should prefer proportionate enforcement markers where sufficient rather than retaining every underlying private communication indefinitely.

## 11. Security, exploit, fraud, and account-compromise logs

Security logs can be important to protect TycoonX, investigate hacks/exploits, defend chargebacks, detect account takeover, and prevent repeated abuse. They still require a defined retention model.

Use at least two layers:

- a rolling ordinary security-log period suited to detection/investigation; and
- a narrower incident/hold copy for events tied to a real investigation, dispute, fraud case, exploit case, account compromise, or legal claim.

Avoid `forever because security` retention. Document why a repeat-abuse identifier remains necessary, how long it is reviewed, who can access it, and whether a less identifying alternative is sufficient.

## 12. Analytics and optional-consent evidence

Analytics data should move toward aggregation/anonymization where identifiable event-level data is no longer needed.

Where optional processing relies on consent, retain enough consent evidence to demonstrate what the user chose and when, including withdrawal where relevant. This does not justify keeping the optional tracking data itself forever.

Consent withdrawal should stop future consent-based processing and place existing data onto the correct deletion/anonymization path unless another valid legal basis independently supports a particular retained record.

## 13. Refunds, chargebacks, and failed/reversed payments

Payment state and entitlement state need enough historical evidence to prevent double refunds, duplicate entitlement delivery, double clawbacks, and fraud.

For each Apple, Google Play, or Xsolla transaction, the minimum retained evidence should be determined from the real channel and purpose, potentially including:

- provider/merchant;
- product ID;
- transaction/order/token identifier where necessary;
- transaction state;
- entitlement action;
- refund/reversal/chargeback state;
- relevant amount/currency/tax accounting evidence; and
- reconciliation timestamps.

Do not keep full card data that CK-Labs does not need or normally receive.

A failed or reversed payment record must not be used to delete unrelated purchased Diamonds, an unrelated active 30-Day VIP, or a separate valid Lifetime VIP.

## 14. Provider replacement, business transfer, and permanent shutdown

If CK-Labs replaces a payment, infrastructure, storage, authentication, analytics, or support provider:

- migrate only data still needed for a lawful current purpose;
- do not use migration as a reason to revive expired data;
- instruct the outgoing processor to delete/return data where the contract and law require it;
- preserve only the transition evidence needed for accounting, security, entitlement continuity, disputes, or legal obligations; and
- update the retention schedule and Privacy disclosure where the material processing changes.

If TycoonX is sold, merged, reorganized, transferred, or permanently discontinued, the successor/shutdown process must include the retention schedule. A closure does not authorize indefinite storage of the final production database.

## 15. Release evidence required

Do not mark this gate operationally complete until CK-Labs has dated evidence of:

- a real retention schedule with the fields listed above;
- the actual backup lifecycle;
- one end-to-end account-deletion test across relevant systems;
- one test showing a narrow tax/accounting record survives while unrelated profile/chat data is deleted;
- one test showing an active legal hold preserves only scoped evidence;
- one test showing a released legal hold returns records to normal deletion;
- one deleted-account test with purchased Diamonds that does not replay or duplicate value;
- one expired 30-Day VIP test showing historical evidence cannot restart the entitlement;
- one Lifetime VIP restoration test preserving at most one valid entitlement without restoring deleted gameplay;
- one Apple/Google/Xsolla reconciliation test showing provider evidence can remain without keeping unnecessary payment/profile data;
- one backup-restore test showing deletion tombstones/suppressions are reapplied; and
- one review proving no production data category is configured as `forever`, `permanent`, or equivalent without a documented lawful reason and review trigger.

## 16. Canonical/public wording rule

The current canonical TycoonX Privacy Policy already states that data is kept only as long as reasonably necessary, distinguishes category-specific reasons, limits private-message retention, identifies a limited backup lifecycle, and separates minimum paid-entitlement restoration evidence from ordinary deleted gameplay data.

Therefore this gate is an **operational hardening layer**, not a reason by itself to reopen the localized Privacy queue.

If CK-Labs later publishes concrete retention periods, changes the purpose/legal basis materially, or changes what survives account deletion in a way that alters the public Privacy meaning, update the canonical English Privacy Policy first and then reopen only the **25 localized Privacy pages** in the required locale order.

## 17. Brand and release invariants

- All rendered legal/support prose must display **TycoonX**, never `TyconX`.
- TycoonX goes to full release on **September 1, 2026**. Do not describe the live Service, legal terms, purchases, users, VIP, Diamonds, or rewards as beta.
- Technical route/file names containing `tyconx` may remain only where changing them risks breaking URLs or integrations.

## Official sources reviewed August 31, 2026

- GDPR Article 5, storage limitation/accountability: `https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679`
- GDPR Article 17, right to erasure and exceptions: `https://eur-lex.europa.eu/eli/reg/2016/679/art_17/oj/eng`
- German AO § 147, current document-retention rules: `https://www.gesetze-im-internet.de/ao_1977/__147.html`
- German UStG § 14b, current invoice-retention rules: `https://www.gesetze-im-internet.de/ustg_1980/__14b.html`
- German HGB § 257, current commercial-record rules: `https://www.gesetze-im-internet.de/hgb/__257.html`
- German BGB § 195, regular limitation period: `https://www.gesetze-im-internet.de/bgb/__195.html`
- German BGB § 199, start and maximum periods: `https://www.gesetze-im-internet.de/bgb/__199.html`

## Current status

Canonical public retention wording: **already suitable; no material public-language change required in this run**.

Operational retention/deletion readiness: **not complete until the real system-by-system retention schedule, backup lifecycle, legal-hold workflow, and deletion/restore tests are evidenced**.
