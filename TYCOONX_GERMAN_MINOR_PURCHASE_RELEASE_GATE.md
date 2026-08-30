# TycoonX German Minor Purchase & Parental Authorization Release Gate

Last reviewed: **2026-08-31**  
Operator/business name used in player-facing documents: **CK-Labs**

This is an operational release gate for TycoonX purchases involving minors, parental authorization, Apple Ask to Buy, Google Play purchase approvals, and the CK-Labs TycoonX web shop using Xsolla. It supplements the canonical TycoonX Terms, Purchases & Refunds Policy, Privacy Policy, platform rules, and mandatory consumer law.

The goal is not to treat every purchase by a minor as automatically valid or automatically void. TycoonX must preserve the actual German contract-capacity rules, the transaction-specific payment-channel record, mandatory consumer remedies, and reasonable anti-fraud controls without overreaching against children or parents.

## 1. P0: classify the purchaser and transaction before relying on payment completion

For a disputed purchase involving a person under 18 in Germany, record the facts needed to determine the legal and payment state before making a final entitlement or refund decision:

- [ ] age or legally sufficient age-range information, but only to the minimum extent necessary;
- [ ] TycoonX account involved;
- [ ] product: purchased Diamonds, one-time 30-Day VIP, limited-window Lifetime VIP, or another product;
- [ ] payment channel: Apple App Store, Google Play, Xsolla web shop, or another authorized channel;
- [ ] transaction/order identifier and authoritative payment state;
- [ ] whether a platform parental approval mechanism was used and its resulting state;
- [ ] whether a legal representative gave prior consent or later approval where that is legally relevant;
- [ ] whether the purchase may instead be effective under BGB § 110 because the minor fully performed using means made available for that purpose or for free disposal; and
- [ ] whether the entitlement/value remains unused, partly used, transferred, restored, refunded, reversed, or charged back.

Do not infer the legal validity of a minor's contract solely from the fact that a card, Apple Account, Google family payment method, Xsolla checkout, device, or TycoonX account technically allowed payment.

## 2. German contract-capacity baseline

### Under 7

Under **BGB § 104 no. 1**, a person who has not completed their seventh year is legally incapable of contracting. Under **BGB § 105(1)**, a declaration made by a person without legal capacity is void.

Release rules:

- [ ] Do not rely on an under-seven child having independently formed a valid paid TycoonX contract under German law.
- [ ] Where the actual contracting party is instead a parent/guardian or platform account holder, determine that from the real transaction and representation facts rather than inventing a child contract.
- [ ] Do not use Terms wording to claim that clicking Buy overrides mandatory legal-capacity law.

### Ages 7 to 17

Under **BGB § 106**, a minor who has completed their seventh year has limited legal capacity subject to §§ 107 to 113.

Under **BGB § 107**, a minor needs the consent of their legal representative for a declaration that is not merely legally beneficial. A paid TycoonX purchase normally creates a payment obligation and therefore must not be assumed to be merely legally beneficial.

Under **BGB § 108(1)**, where a minor enters a contract without the required consent, effectiveness depends on approval by the legal representative. If the other contracting party formally asks the representative to declare whether approval is given, **§ 108(2) provides a two-week response window**, after which no response is treated as refusal for that statutory mechanism.

Release rules:

- [ ] Do not state that every purchase by a 7-to-17-year-old is automatically final merely because payment authorization succeeded technically.
- [ ] Do not state that every purchase by a 7-to-17-year-old is automatically void either. Check consent, later approval, BGB § 110, the actual contracting party, and the applicable payment-channel facts.
- [ ] If CK-Labs uses the § 108(2) formal approval-request mechanism, log when the request was received by the legal representative and calculate the statutory two-week period correctly.
- [ ] A support reply asking a parent for clarification must not casually be labelled a formal § 108(2) request unless CK-Labs actually intends to trigger and manage that legal mechanism.

Official German sources checked for this gate:

- BGB § 104: https://www.gesetze-im-internet.de/bgb/__104.html
- BGB § 105: https://www.gesetze-im-internet.de/bgb/__105.html
- BGB § 106: https://www.gesetze-im-internet.de/bgb/__106.html
- BGB § 107: https://www.gesetze-im-internet.de/bgb/__107.html
- BGB § 108: https://www.gesetze-im-internet.de/bgb/__108.html
- BGB § 110: https://www.gesetze-im-internet.de/bgb/__110.html

## 3. BGB § 110: do not overstate the "pocket-money rule"

BGB § 110 provides that a contract entered into by a minor without the representative's consent is effective from the outset when the minor **performs the contractual performance** using means made available to them for that purpose or for free disposal by the representative, or by a third party with the representative's consent.

Founder-protective but lawful implementation:

- [ ] CK-Labs may rely on § 110 where the actual facts support it.
- [ ] Do not treat § 110 as a blanket rule that every small-value in-app purchase by a minor is automatically valid.
- [ ] Do not define a fixed euro amount and call everything below it automatically covered by § 110. The statutory test turns on the source/purpose of the means and performance, not a universal TycoonX price threshold.
- [ ] A parent's card merely being stored on a device is not, by itself, enough for CK-Labs to invent facts about whether those means were provided to the minor for the purchase or for free disposal.
- [ ] If the facts are genuinely disputed, preserve the transaction and entitlement evidence and use the proper merchant/refund/support route rather than manufacturing a legal conclusion from the game ledger alone.

## 4. Apple App Store / Ask to Buy

Apple's current Ask to Buy system lets a child or teen request permission for an app, download, or in-app purchase, and lets the family organizer or parent/guardian approve or decline it. Depending on age and country/region, Ask to Buy and related restrictions can be mandatory or enabled by default.

TycoonX purchase handling must preserve the existing StoreKit rules:

- [ ] A StoreKit purchase in `Product.PurchaseResult.pending` grants **zero Diamonds, zero 30-Day VIP time, and zero Lifetime VIP access** until a verified successful transaction actually completes.
- [ ] If Ask to Buy is approved later, the resulting verified transaction may be fulfilled exactly once through the normal idempotent Apple entitlement path.
- [ ] If Ask to Buy is declined and no successful transaction is produced, there is no paid entitlement to grant and no refund/clawback event to invent.
- [ ] Do not classify a declined Ask to Buy request as fraud, chargeback abuse, or an exploit merely because no purchase completed.
- [ ] A valid Apple parental approval is important platform evidence, but do not claim that it automatically determines every separate question of German contract law or eliminates mandatory consumer rights.
- [ ] Preserve the existing `appAccountToken`, transaction verification, cross-account duplicate protection, refund/revocation, and restore gates.

Current Apple references checked:

- Ask to Buy support / purchase approval: https://support.apple.com/105055
- Ask to Buy troubleshooting and country/age variation: https://support.apple.com/118233
- StoreKit purchase-result handling: https://developer.apple.com/documentation/storekit/product/purchaseresult

## 5. Google Play purchase approvals

Google currently allows parents in a family group to require approval for purchases or downloads on Google Play. Google expressly states that **purchase approval settings apply only to purchases made through Google Play's billing system**.

Release rules:

- [ ] Treat a completed Google Play approval plus a verified `PURCHASED` transaction as payment-channel evidence, not as a reason to skip entitlement validation.
- [ ] A pending purchase grants no paid TycoonX value until the authoritative Google state becomes purchased and the normal fulfilment conditions are satisfied.
- [ ] Do not assume a Google family approval covers a separate Xsolla web-shop transaction, Apple transaction, bank transfer, or another payment channel.
- [ ] Do not treat absence of a Google approval record as proof of fraud where Google approval was not configured or applicable to that transaction.
- [ ] Preserve current RTDN, Voided Purchases API, acknowledgement/consumption, duplicate-notification and refund/chargeback reconciliation gates.

Current Google reference checked:

- Google Play family/purchase approvals: https://support.google.com/googleplay/answer/15775392

## 6. Xsolla web-shop purchases involving minors or parental-payment disputes

The applicable Xsolla entity, merchant role, refund policy type, payment method, receipt, order state, and consumer route are transaction-specific. Do not hard-code one universal Xsolla legal outcome.

Current Xsolla materials state that the applicable Refund Policy type is shown in checkout and that the relevant Xsolla group company can depend on the payment method. Xsolla's current **Flexible Refund Policy** includes, among other things, a refund path for mistaken purchases of in-game currency when the currency has not been redeemed, while other policy types or transaction facts can differ.

Release rules:

- [ ] For a parent/guardian allegation of an unauthorized minor purchase, preserve the Xsolla transaction number, checkout/receipt evidence and TycoonX entitlement ledger before changing value.
- [ ] Send the payment/refund portion through the actual transaction's applicable Xsolla route where Xsolla is the relevant contracting/refund party, while CK-Labs handles TycoonX entitlement delivery/correction.
- [ ] Do not promise that every Xsolla purchase by a minor is refundable, and do not promise that none are. Apply the actual policy, German/EU mandatory rights, and contract-capacity facts.
- [ ] If the payment remains pending or was only a temporary authorization, grant nothing until successful payment is authoritatively confirmed.
- [ ] Where an eligible refund, reversal, invalid contract, or chargeback is confirmed, correct only the corresponding TycoonX value and directly related invalid effects, subject to mandatory law.

Current Xsolla references checked:

- Refund Policy selector / transaction-specific Xsolla entity: https://xsolla.com/refund-policy
- Flexible Refund Policy: https://xsolla.com/refund-policy/flexible-policy
- Digital purchase refund route: https://help.xsolla.com/refunds/refund-my-digital-purchase
- Unknown/unauthorized charge guidance: https://help.xsolla.com/en/unauthorized-charges/i-see-unknown-charges-for-xsolla

## 7. Child-vulnerability and purchase-design safeguards

The EU Consumer Protection Cooperation Network's current principles for in-game virtual currencies emphasize clear real-money pricing, avoiding structures that hide cost or force surplus virtual-currency purchases, respecting withdrawal rights, and respecting consumer vulnerabilities, particularly children.

For TycoonX:

- [ ] Do not use fake scarcity, misleading countdowns, fake crossed-out prices, or false "last chance" claims to pressure a child or parent into buying Lifetime VIP, Diamonds, or another product.
- [ ] Do not repeatedly nag a child to ask a parent to approve a purchase after the parent/guardian has declined it.
- [ ] Do not design the Diamond layer to deliberately obscure the real-money cost where EU/EEA rules require that price information.
- [ ] Do not force consumers to buy materially unnecessary surplus Diamonds merely to access a paid digital item/service where that practice would violate applicable consumer law.
- [ ] Make 30-Day VIP clearly one-time/non-renewing and Lifetime VIP clearly one-time and limited to genuine selected sales windows.
- [ ] Keep ordinary gameplay rewards separate from paid-purchase prompts so a child is not misled into believing real-money spending is mandatory to keep an earned entitlement.

EU reference checked:

- European Commission / CPC Key Principles on In-Game Virtual Currencies: https://commission.europa.eu/topics/consumers/consumer-rights-and-complaints/enforcement-consumer-protection/coordinated-actions/social-media-online-games-and-search-engines_en

## 8. Refund, reversal and entitlement correction rules

A minor-status dispute, lack of parental approval, refund, or chargeback must remain **transaction-specific**.

- [ ] Do not wipe the entire account balance merely because one transaction is disputed.
- [ ] Purchased Diamonds tied to the affected transaction must be separated from unrelated purchased Diamonds, promotional Diamonds, earned game value, and exploit-generated value where technically and legally possible.
- [ ] If disputed purchased Diamonds remain unused and a refund/reversal/invalidity is confirmed, remove the corresponding unused value as part of the transaction correction.
- [ ] If the corresponding Diamonds were spent, transferred, or exchanged, determine the lawful correction under the transaction facts and mandatory consumer law. Do not invent an unlimited debt or remove unrelated purchases automatically.
- [ ] If a 30-Day VIP transaction is invalidated/refunded, correct the entitlement tied to that purchase. Do not cancel an unrelated valid VIP purchase.
- [ ] If a Lifetime VIP transaction is invalidated/refunded, revoke only the Lifetime VIP arising from that transaction. Do not use the event to erase unrelated purchased Diamonds or gameplay assets.
- [ ] A parent disputing a purchase is not, by itself, proof that the child committed fraud, account compromise, or an exploit.
- [ ] Deliberate falsification, stolen-payment use, refund cycling, or other proven abuse can still be handled under the normal TycoonX fraud/abuse rules with proportionate, evidence-based action and mandatory rights preserved.

## 9. Privacy and evidence minimization for minor-purchase disputes

A purchase dispute involving a child can create pressure to collect excessive identity documents. Avoid that.

- [ ] Request only the minimum evidence reasonably needed to verify the transaction, account, representative relationship or legal issue.
- [ ] Prefer platform/merchant transaction identifiers and existing age-range/parental-control signals over collecting an exact birth date or identity document where unnecessary.
- [ ] Do not store a parent's payment-card details in TycoonX support evidence merely to prove a family relationship.
- [ ] Redact unnecessary identity/payment data from uploaded evidence where feasible.
- [ ] Apply the TycoonX Privacy Policy's retention, security, access-control, account-deletion and legal-claims rules to the dispute file.
- [ ] If a provider sends child/guardian data beyond what CK-Labs needs, do not repurpose it for advertising, personalized pricing, or unrelated profiling.

## 10. Release and support regression scenarios

Before relying on the production flow, retain dated evidence for at least these scenarios where applicable:

1. **German 17-year-old, prior parental consent:** successful transaction is validated and fulfilled exactly once.
2. **German 15-year-old, no required consent:** support does not falsely declare the purchase automatically final; any § 108 approval process is handled correctly.
3. **BGB § 110 scenario:** a genuinely supportable "own permitted funds" case is distinguished from merely using a stored parental card.
4. **Apple Ask to Buy approved later:** no value while pending; one grant after verified completion.
5. **Apple Ask to Buy declined:** no value, no fake refund, no fraud label.
6. **Google Play parental approval:** verified purchased transaction is fulfilled once; approval does not spill over to Xsolla.
7. **Xsolla parent dispute:** correct merchant/refund route is used and transaction/entitlement evidence is preserved.
8. **Unused Diamonds refunded:** only the corresponding purchased Diamond value is corrected.
9. **Partly used Diamonds disputed:** case is reviewed transaction-specifically without wiping unrelated purchases.
10. **30-Day VIP or Lifetime VIP dispute:** only the affected entitlement is corrected, with mandatory consumer remedies preserved.
11. **Chargeback after delivery:** entitlement correction is idempotent and does not duplicate a clawback after provider retries/webhooks.
12. **Privacy minimization:** support can resolve the case without unnecessarily retaining a child's exact birth date, a parent's full payment-card data, or unrelated identity documents.

## 11. Canonical legal and localization trigger

The canonical TycoonX Terms already state that where age, parental authorization, or other eligibility requirements apply under local law or platform rules, the user may use or purchase through TycoonX only when those requirements are satisfied. The canonical payment/refund framework already preserves mandatory consumer rights, transaction-specific refunds/reversals, authoritative provider records and proportionate entitlement correction.

This release gate therefore operationalizes existing public meaning and does **not** by itself require reopening the localized legal documents.

If canonical English Terms, Purchases & Refunds, or Privacy wording is later materially changed because of minor-contract, parental-authorization, child-purchase, refund, or child-data treatment, reopen the affected document type across **all 25 locales** and resynchronize in the required order before marking localization current again.

## 12. Release blockers

Do not mark the minor-purchase path production-ready for Germany if any of the following remains true:

- [ ] the support process says every minor purchase is automatically final or automatically void;
- [ ] CK-Labs assumes any low-price transaction automatically qualifies under BGB § 110;
- [ ] pending Apple/Google purchases can grant paid value;
- [ ] Ask to Buy decline can be misclassified as fraud or a completed refund;
- [ ] Google family approval is treated as covering the Xsolla web shop;
- [ ] a parent/guardian dispute can wipe unrelated Diamonds, VIP or gameplay value;
- [ ] the Xsolla policy/merchant is guessed instead of taken from the actual transaction;
- [ ] child/guardian identity or payment evidence is collected beyond what is reasonably necessary; or
- [ ] TycoonX purchase marketing exploits children's vulnerabilities or obscures legally required real-money price information.
