# TycoonX EU/German Digital Product Conformity & Remedies Release Gate

**Release QA reference. Last reviewed: September 1, 2026.**

Owner: CK-Labs  
Scope: TycoonX paid and account-linked digital products, including purchased Diamonds, one-time 30-Day VIP, limited-time Lifetime VIP, entitlement delivery, Restore Purchases, paid-feature availability, required updates, material defects, provider outages, and transaction-specific remedies across Apple App Store, Google Play, and the official TycoonX webshop using Xsolla.

## Purpose

TycoonX already has separate gates for withdrawal rights, refunds and chargebacks, digital-product modifications, outages, economy corrections, and permanent shutdown. This gate closes the remaining operational gap: **what happens when a valid digital purchase is not supplied, is supplied incorrectly, or becomes materially non-conforming?**

For German consumers, BGB §§ 327 et seq. can apply to consumer contracts for digital content and digital services. BGB § 327 expressly treats a digital representation of value as a price for this framework. Directive (EU) 2019/770 supplies the EU-level conformity and remedy model.

This gate is deliberately transaction-specific. It must not be used to turn every minor gameplay bug into an automatic full refund, and it must not be used in the opposite direction to reject mandatory remedies with an “all sales final,” “virtual items have no value,” “third-party outage,” or similar blanket statement.

The canonical English Terms of Service and Purchases & Refunds Policy remain player-facing. This gate does not materially change their present meaning. If a future implementation decision changes that meaning, update the canonical English source first and reopen the affected localized document type across all 25 locales in the required order.

## 1. Keep payment validity, delivery, conformity, and remedy status separate

A single TycoonX purchase can have several legally different states:

1. **Payment state:** pending, completed, failed, reversed, refunded, charged back, cancelled, or otherwise invalid according to the authoritative payment provider.
2. **Delivery state:** whether the purchased digital product or access was actually made available to the correct TycoonX account.
3. **Conformity state:** whether the delivered product has the quantity, functionality, compatibility, continuity, security, accessibility, agreed characteristics, and other qualities required by the contract and applicable law.
4. **Remedy state:** no remedy required, cure in progress, cure completed, price reduction, termination, refund/repayment, damages review, provider dispute, or voluntary goodwill compensation.

Do not collapse these into one generic `refund_status` or `purchase_valid` decision.

Examples:

- A valid Apple transaction with no Diamond credit is primarily a **delivery/conformity problem**, not payment fraud.
- A valid Google purchase with active 30-Day VIP but one broken VIP automation can be a **conformity issue** even though the entitlement row exists.
- An Xsolla transaction that remains pending is not a completed paid entitlement merely because the browser returned to a success-looking page.
- A completed transaction that is later authoritatively reversed is a **payment reversal**; that is different from a consumer asserting a statutory defect remedy.

## 2. Product classification must preserve TycoonX distinctions

### Purchased Diamonds

Purchased Diamonds are paid virtual in-game currency and must be distinguished from promotional, test, review, compensation, gifted, or free Diamonds.

For conformity operations:

- delivery means crediting the purchased quantity exactly once to the correct account after valid provider confirmation;
- a retry, restore, webhook replay, reconnect, or platform switch must not replay an already delivered Diamond purchase;
- later consumption of validly delivered Diamonds does not convert a prior missing-delivery event into successful delivery;
- a defect affecting one Diamond transaction must not authorize correction of unrelated valid Diamond purchases; and
- a statutory remedy analysis must not be replaced by the statement that Diamonds are “virtual” or “non-refundable.”

The separate purchased-Diamond withdrawal rules remain controlling for statutory withdrawal questions.

### One-time 30-Day VIP

30-Day VIP is a one-time, non-renewing entitlement for 30 consecutive days. For conformity analysis, treat its paid service period as a defined time-limited period rather than as a recurring subscription.

- Restoration should recover the same valid entitlement and original clock.
- A technical restore must not silently restart a fresh 30-day period unless a legally required or voluntarily granted remedy specifically provides additional time.
- If material paid functionality is unavailable during part of the paid period, record the affected duration and assess cure, price reduction, extension, termination, or another remedy separately.
- A defect in 30-Day VIP does not itself affect Lifetime VIP or Diamonds.

### Limited-time Lifetime VIP

Lifetime VIP remains a one-time promotional entitlement available only during selected genuine sales windows. It may be withdrawn from sale and may never return. “Lifetime” means the commercial operating lifetime of TycoonX for the purchasing account while the Service operates; it is not a promise that TycoonX will exist forever.

For conformity analysis:

- restoration means reattaching or recognizing **one** valid entitlement after verification, not granting a second Lifetime VIP;
- the source transaction, purchaser linkage, original sales window, and entitlement history must remain auditable;
- ending a future sales window does not make an already valid Lifetime VIP defective;
- a material failure to provide the purchased entitlement while TycoonX continues to operate can still require a conformity/remedy analysis; and
- the commercial-lifetime definition does not waive a mandatory remedy caused by a defect, non-supply, material change, or the circumstances of a later shutdown.

## 3. Delivery must be provable, not merely assumed

Under German BGB § 327b, unless another supply time is agreed, a consumer can demand supply immediately after contract conclusion and the trader must supply immediately. The trader bears the burden of proving supply under § 327b(6).

For TycoonX, a provider receipt alone does not prove that the entitlement was actually made accessible in the correct account.

Minimum delivery evidence should include, where available:

- Apple transaction ID, Google order/purchase token, or Xsolla transaction/order identifier;
- product ID and product type;
- authoritative completed-payment timestamp;
- TycoonX account ID to which the value was delivered;
- entitlement or ledger write identifier;
- quantity or entitlement state before and after delivery;
- delivery timestamp;
- idempotency key / provider event identifier; and
- any restore or reconciliation event.

A client-side “Success” screen, cached balance, screenshot, browser return URL, or receipt uploaded by the player is useful evidence but is not by itself the authoritative server-delivery record.

## 4. Non-supply has its own escalation path

BGB § 327c provides a separate route where a due digital product is not supplied. In the normal case, if the consumer requests immediate supply and the trader still does not supply without undue delay, contract termination can become available. The statute also contains cases where that prior request is unnecessary, including refusal, clear inability/unwillingness to supply, or a missed time that was essential under the contract/circumstances.

TycoonX support must therefore not trap a confirmed missing purchase in endless troubleshooting.

### Missing-delivery playbook

1. Confirm whether the transaction is truly completed rather than pending.
2. Confirm the correct TycoonX account and product mapping.
3. Check whether the provider event was already processed.
4. Reconcile the authoritative transaction against the entitlement ledger.
5. If value is genuinely missing, deliver or restore it idempotently where lawful and technically possible.
6. Record the consumer’s request for supply and the time CK-Labs was notified.
7. If supply cannot be completed promptly, escalate to the legally applicable termination/repayment or provider-refund path instead of requiring repetitive support contacts.

A promotion ending after a provider-confirmed transaction does not by itself justify refusing delivery of the valid purchase.

## 5. Conformity is broader than “the entitlement row exists”

Under BGB §§ 327d and 327e, an in-scope digital product must satisfy subjective requirements, objective requirements, and applicable integration requirements. For continuously supplied digital products, the relevant conformity period is the whole agreed supply period.

Operationally, check at least:

- **quantity:** the correct Diamond quantity or promised paid capacity/value was supplied;
- **functionality:** paid VIP functions materially operate as promised;
- **compatibility/interoperability:** supported environment representations are accurate;
- **continuity:** a continuously supplied entitlement is materially available during its paid period;
- **security:** the product is not left materially insecure where security forms part of conformity;
- **accessibility:** where legally relevant, accessibility can form part of objective expectations;
- **integration:** failures caused by CK-Labs integration or inadequate instructions are not automatically shifted to the consumer;
- **customer assistance/instructions:** any assistance or instructions promised as part of the contract are provided; and
- **version/update state:** required updates are supplied and communicated for the legally relevant period.

Public claims can matter. Under BGB § 327e, advertising and other public statements can shape objective consumer expectations unless a statutory exception applies. Store descriptions, VIP feature lists, checkout copy, web pages, social promotion, and Lifetime VIP sales-window copy therefore must be supportable by the actual product.

Do not promise “always online,” “zero downtime,” “every feature forever,” or similar absolutes unless CK-Labs genuinely intends and can legally support them.

## 6. A hidden Terms clause cannot simply redefine a defect away

BGB § 327h permits deviation from specified objective conformity requirements only under strict conditions: the consumer must be specifically informed before the contractual declaration that a particular characteristic deviates, and that deviation must be expressly and separately agreed in the contract.

Founder-protective Terms can accurately reserve lawful balance changes, feature evolution, supported-version changes, provider migrations, and service-lifetime limits. They should **not** be used as a generic mechanism to say that any missing or materially broken purchased feature was “never promised.”

If a product characteristic genuinely and lawfully differs from the normal objective expectation, implement any required specific pre-contract disclosure and separate agreement at the legally relevant point. Do not bury the deviation inside a long general Terms paragraph.

## 7. Cure is the normal first conformity remedy, but not an endless loop

Under BGB § 327l, when the consumer requests cure, the trader must restore conformity within a reasonable time from notice, without significant inconvenience to the consumer, and bear the necessary cure costs. Cure can be excluded where impossible or only possible at disproportionate cost under the statutory test.

TycoonX cure may include:

- idempotently crediting a missing purchased Diamond quantity;
- re-linking one valid Lifetime VIP entitlement;
- restoring the remaining valid 30-Day VIP period;
- repairing a server-side entitlement mapping;
- correcting an account-binding error;
- deploying a patch or server fix;
- providing a required supported-version update;
- restoring a broken paid function; or
- correcting a provider-to-account reconciliation failure.

Cure must not create a windfall or duplicate value. Examples:

- If 500 purchased Diamonds were never delivered, cure is normally the missing 500, not replaying every historical Diamond order.
- If 30-Day VIP has 12 days remaining, a technical restore normally recovers those 12 days rather than restarting 30 days, unless a separate remedy/compensation decision grants extra time.
- A Lifetime VIP restore recognizes one valid entitlement, not one entitlement per device or platform.

At the same time, support must not use “we are still investigating” indefinitely. BGB § 327m permits escalation to termination in specified circumstances, including failed or refused cure, a defect that persists after attempted cure, severe defects justifying immediate termination, or circumstances showing proper cure will not occur.

## 8. Price reduction and termination must be available where mandatory

BGB § 327i provides the remedy framework for defective digital products, including cure, termination under § 327m, price reduction under § 327n, and potentially damages/expenses where the legal requirements are met.

For TycoonX operations:

- a **minor** defect does not automatically justify full contract termination under German law, subject to statutory exceptions;
- price reduction can still be available under § 327n where its conditions are met;
- for continuous supply, § 327n apportions a price reduction to the period of defectiveness;
- a severe defect can justify immediate termination in the statutory circumstances;
- persistent failure after attempted cure must be escalated rather than reset to “try Restore Purchases again”; and
- any remedy should be scoped to the affected contract/product/value unless package-contract law or another mandatory rule produces a broader consequence.

### German repayment mechanics

Where BGB § 327n(4) applies after a valid price reduction, the overpaid amount must be refunded without undue delay and in any event within **14 days** after receipt of the reduction declaration. The same payment method is generally used unless the consumer expressly agrees otherwise and incurs no cost. The trader cannot charge the consumer the trader’s refund cost.

BGB § 327o applies corresponding repayment mechanics to covered contract termination. For continuous supply, the statutory repayment can include the portion of the paid period during which the product was defective.

If Apple, Google, Xsolla, or another transaction-specific provider controls the actual repayment rail, route the refund through the proper provider while tracking the mandatory consumer outcome. A platform workflow must not be treated as permission to let an applicable statutory repayment deadline expire without escalation.

## 9. Outages require a defect-impact assessment, not automatic full refunds or automatic denial

A temporary outage is not automatically a total failure of every paid contract. Equally, “third-party outage” is not a blanket waiver of mandatory conformity remedies.

For a material incident, preserve:

- incident start/end time;
- platforms, countries, and functions affected;
- whether new purchases were accepted during the incident;
- whether provider payments completed while TycoonX delivery failed;
- whether 30-Day VIP clocks continued running;
- which Lifetime VIP functions were unavailable;
- whether purchased Diamonds could be used;
- whether the failure was CK-Labs, Apple, Google, Xsolla, hosting, authentication, network, or another provider;
- cure performed and restoration time; and
- any mandatory or voluntary extension, price reduction, termination, refund, or goodwill action.

A short inconvenience can have no mandatory monetary remedy in a particular case. A long or repeated material failure can have a different result. The decision must follow the actual product, duration, severity, contract, and mandatory law rather than a fixed “no outage refunds” rule.

Voluntary Diamond gifts, VIP extensions, or goodwill credits are separate from statutory remedies and should be recorded as such.

## 10. Required updates and unsupported app versions need evidence

BGB § 327f requires required updates, including security updates, to be made available and communicated during the legally relevant period.

If CK-Labs relies on a consumer’s failure to install a required update as the sole reason a defect is not CK-Labs’ responsibility, preserve evidence that:

- the update was actually available;
- the consumer was informed about availability;
- the consumer was informed about the consequences of not installing it;
- a reasonable installation period was available; and
- the failure was not caused by defective installation instructions from CK-Labs.

An old or unsupported app version can legitimately be blocked where security, compatibility, platform, or legal requirements justify it. But that block does not automatically erase a valid paid entitlement. Provide a supported update/access path where the contract and mandatory law require continued access.

## 11. Compatibility and burden-of-proof rules affect support evidence

Under BGB § 327k, a lack of conformity appearing within one year after supply can trigger a statutory presumption regarding conformity at supply. For continuously supplied digital products, the statute contains a corresponding presumption during the supply period.

CK-Labs cannot safely defeat that presumption by merely saying “your device is unsupported.” The statutory compatibility/cooperation exceptions depend on clear pre-contract information about technical requirements or necessary consumer cooperation, and the cooperation route must use the least intrusive suitable technical means.

Practical rule:

- keep material compatibility/system requirements accurate at or before purchase;
- do not ask for broad screenshots, device dumps, passwords, or unrelated personal data when a less intrusive diagnostic will answer the question;
- distinguish a genuinely unsupported environment from a server-side defect affecting supported users; and
- preserve only the diagnostic evidence needed under the Privacy Policy and GDPR data-minimization rules.

## 12. Remedy and evidence retention periods must not be invented downward

BGB § 327j contains statutory limitation-period rules for digital-product claims, including a general two-year period for specified claims from supply and additional protection for continuously supplied products and update duties. It also prevents limitation from expiring too quickly after a defect first appears.

Do not configure support-ticket deletion, purchase-log deletion, or entitlement-history deletion so aggressively that CK-Labs cannot investigate a claim that remains legally live. At the same time, this is not permission to retain the entire account indefinitely. Apply the separate GDPR retention/deletion gate and preserve only the records reasonably necessary for the legal purpose and applicable period.

## 13. Mandatory digital-product rights are not waivable by broad boilerplate

BGB § 327s prevents reliance on consumer agreements that disadvantage the consumer contrary to the digital-product rules before the relevant statutory point, and it also addresses circumvention.

Therefore do not use any of the following as an automatic rejection reason where mandatory digital-product law applies:

- “all sales are final”;
- “virtual currency has no monetary value”;
- “no refunds under any circumstances”;
- “use at your own risk”;
- “provider outages are never our responsibility”;
- “the Terms allow us to change anything at any time”;
- “Lifetime VIP ends whenever CK-Labs chooses”;
- “you accepted the Terms, so conformity rights do not apply”; or
- “your only remedy is a chargeback.”

The existing TycoonX limitation, force-majeure, modification, security, suspension, and shutdown clauses remain useful to the extent lawful, but they do not waive non-waivable consumer remedies.

## 14. Do not confuse defect remedies with fraud, exploits, account compromise, or chargebacks

Each of these requires separate evidence:

### Genuine defect claim

A player saying “I paid for VIP and the paid feature did not work” is not evidence of fraud or entitlement abuse.

### Account compromise

If the account was hijacked, first contain the security risk and determine which activity belonged to the legitimate player. A compromise can coexist with a valid payment or with an unauthorized payment. Do not automatically deny a conformity remedy because the account had a security incident.

### Hacks/exploits

Exploit-generated value can be corrected using reliable evidence, but an exploit investigation does not erase unrelated purchased value. If an exploit created 10,000 invalid Diamonds and the account also has 500 verified purchased Diamonds, isolate the invalid value where technically and legally possible.

### Chargeback

A chargeback is a payment dispute and is not the only route for a digital-product defect. A good-faith statutory remedy request must not be labelled an abusive chargeback merely because the player asks for money back after failed cure.

### Regional-price or promotion abuse

A separate region/promotion abuse finding must be based on its own facts. It is not established merely because the same user also reported a defect.

## 15. Apple, Google Play, Xsolla, and CK-Labs roles must remain transaction-specific

Payment-channel responsibilities and digital-product conformity responsibilities overlap but are not identical.

### Apple App Store

- Apple supplies the App Store transaction record and controls its consumer refund-request process under Apple’s rules.
- CK-Labs must still reconcile provider-confirmed transactions into the correct TycoonX entitlement state and investigate delivery/functionality under CK-Labs control.
- An Apple refund/revocation event is not the same event as a CK-Labs cure of missing delivery.

### Google Play

- Google supplies authoritative Google Play purchase/order state and may control or provide refund/void mechanisms under its rules.
- A `PENDING` purchase does not become a paid TycoonX entitlement until valid completion is confirmed.
- CK-Labs must not call a pending transaction a defectively delivered purchase when the contract/payment has not yet reached the valid completed state, but must reconcile it if Google later reports completion.

### Xsolla webshop

- The transaction-specific Xsolla entity and checkout may act as merchant of record and can control payment processing, tax handling, fraud screening, refunds, disputes, and chargebacks under the applicable setup.
- CK-Labs remains responsible for its own TycoonX entitlement delivery after valid successful payment confirmation and for product functionality within CK-Labs’ control.

### Role-allocation rule

Do not promise that CK-Labs can override a provider’s transaction record, edit a third-party tax invoice, force a bank settlement, or approve a provider-controlled refund when it cannot. Equally, do not send a consumer in circles between CK-Labs and a platform where CK-Labs can itself cure the missing entitlement or service defect.

## 16. A practical production triage matrix

| Situation | Primary classification | First operational action | Do not do |
| --- | --- | --- | --- |
| Apple says purchased; Diamonds missing | Non-supply/delivery | Verify transaction + idempotently credit missing valid amount | Replay all Diamond history |
| Google purchase still `PENDING` | Pending payment | Wait for authoritative completion / reconcile later | Grant paid value early |
| Xsolla confirms Lifetime VIP; no VIP access | Non-supply/conformity | Re-link one valid Lifetime VIP | Create duplicate Lifetime VIP |
| 30-Day VIP active; material VIP feature broken | Conformity | Cure feature, record affected period | Restart 30 days automatically |
| Paid function remains broken after cure attempt | Persistent defect | Escalate to § 327m/§ 327n analysis where applicable | Force endless troubleshooting |
| Security update required | Update/conformity | Provide update + required notice | Erase entitlement for using old version |
| Multi-day provider outage | Outage + conformity impact | Record impact and assess affected paid period | Blanket deny all remedies |
| Payment later refunded/reversed | Payment reversal | Correct only corresponding paid value where lawful | Confiscate unrelated purchases |
| Account hijack plus missing purchase | Security + delivery | Secure account, then independently reconcile purchase | Treat compromise as proof of fraud |
| Economy rollback affects exploit and paid Diamonds | Economy correction | Isolate invalid exploit value from verified paid value | Zero entire balance without evidence |

## 17. Minimum remedy decision record

For material claims, retain a lightweight record containing only what is necessary:

- user/account identifier;
- transaction/provider identifier;
- product type and product ID;
- paid amount/currency where relevant;
- completed/pending/refunded/reversed provider state;
- promised product characteristic at purchase time where disputed;
- delivery evidence;
- defect/non-supply description;
- app/platform/version if materially relevant;
- consumer notification/request timestamp;
- cure attempts and timestamps;
- outage/provider incident linkage if any;
- statutory/provider/voluntary remedy category;
- exact entitlement or monetary correction;
- decision reason and reviewer; and
- closure timestamp.

Do not retain unrelated chats, full device contents, passwords, unnecessary location history, or other excessive personal data just because a purchase dispute exists.

## 18. Release-day regression scenarios

Do not mark production parity complete until these cases are tested against real entitlement logic or an equivalent staging/test environment:

1. **Apple purchased Diamonds, event lost:** one valid Diamond grant occurs after reconciliation; a repeated reconciliation does nothing.
2. **Google pending purchase:** no paid entitlement is granted before `PURCHASED`; later valid completion grants exactly once.
3. **Xsolla paid Lifetime VIP, missing access:** one Lifetime VIP is restored; no duplicate is created.
4. **30-Day VIP restore on day 18:** original expiry is preserved unless a separate remedy explicitly grants extension.
5. **30-Day VIP multi-day material outage:** affected period is recorded and a conformity/remedy assessment occurs rather than automatic full refund or automatic denial.
6. **VIP feature remains broken after attempted cure:** support escalates to price-reduction/termination analysis where applicable.
7. **Required security update:** update and consequences are communicated; supported-version access works; entitlement remains linked.
8. **Unsupported-device dispute:** support can show the pre-contract technical requirement if relying on incompatibility.
9. **Duplicate webhook during cure:** no duplicate Diamonds, 30-Day VIP, or Lifetime VIP result.
10. **Provider refund after successful cure:** only the transaction-specific refunded value is corrected; unrelated purchases remain intact.
11. **Account compromise:** security containment does not silently decide the separate consumer-remedy issue.
12. **Exploit rollback:** invalid exploit value is corrected without wiping verified unrelated paid value.
13. **Severe immediate defect:** the workflow can bypass repeated cure attempts where German law permits immediate termination.
14. **Statutory price reduction:** any CK-Labs-controlled repayment path can meet the applicable 14-day German repayment requirement or escalate promptly to the provider that controls the payment rail.
15. **Public VIP promise changed before purchase:** marketing/checkout evidence can show what was actually promised and whether a specific deviation was separately agreed where required.

## 19. Brand, release, and localization invariants

- Player-facing and legal prose must display **TycoonX** exactly.
- Existing technical routes or file names containing `tyconx` may remain only where changing them risks breaking URLs or integrations.
- TycoonX full release date is **September 1, 2026**.
- Current legal prose, purchases, VIP, Diamonds, rewards, users, and live service must not be described as beta.
- Genuine promotional, free, test, staging, review, or complimentary grants may be identified accurately where legally useful without implying that the live game is a beta.
- The 25 required localized hubs and 100 localized full documents remain current unless canonical English player-facing meaning materially changes.

## 20. Official legal references checked September 1, 2026

- German BGB § 327, scope of digital-product rules: https://www.gesetze-im-internet.de/bgb/__327.html
- BGB § 327b, supply and burden of proving supply: https://www.gesetze-im-internet.de/bgb/__327b.html
- BGB § 327c, rights where supply does not occur: https://www.gesetze-im-internet.de/bgb/__327c.html
- BGB §§ 327d–327e, conformity/product defects: https://www.gesetze-im-internet.de/bgb/__327d.html and https://www.gesetze-im-internet.de/bgb/__327e.html
- BGB § 327f, required updates including security updates: https://www.gesetze-im-internet.de/bgb/__327f.html
- BGB § 327h, specific and separately agreed deviations from objective requirements: https://www.gesetze-im-internet.de/bgb/__327h.html
- BGB §§ 327i–327o, consumer remedies, limitation, burden of proof, cure, termination, reduction, and repayment: https://www.gesetze-im-internet.de/bgb/
- BGB § 327s, restrictions on disadvantageous deviations/circumvention: https://www.gesetze-im-internet.de/bgb/__327s.html
- Directive (EU) 2019/770 on digital content and digital services, especially Articles 8, 12, and 14: https://eur-lex.europa.eu/eli/dir/2019/770/oj

## Founder-protective interpretation

This framework does **not** mean every transient error, balance change, maintenance period, provider delay, or minor inconvenience creates a full refund right. German/EU law provides a structured conformity and remedy model, often beginning with proper cure. CK-Labs can require reasonable verification, prevent duplicate fulfillment, correct invalid transactions, isolate exploit-generated value, require supported software for genuine security/compatibility reasons, and use Apple/Google/Xsolla transaction-specific processes where they control payment mechanics.

The founder protection comes from preserving reliable evidence, curing real defects quickly, distinguishing minor from severe/persistent failures, isolating the affected contract/value, and using the legally correct remedy path. It does not come from an overbroad waiver that is unenforceable against mandatory consumer rights.

## Release decision

Do not mark digital-product conformity/remedy readiness complete until TycoonX can prove, for Diamonds, one-time 30-Day VIP, and Lifetime VIP, that a valid completed transaction can be delivered exactly once, a missing or materially defective entitlement can be cured without duplication, persistent/severe defects can escalate to the applicable mandatory remedy, and provider refunds/reversals cannot corrupt unrelated legitimate entitlements.
