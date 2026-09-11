# TycoonX German Minor Purchase, Contract Capacity and Parental Approval Gate

Status: legal and payment implementation gate
Last reviewed: 2026-09-11
Scope: Germany first, with EU unfair-commercial-practice baseline and Apple, Google Play and Xsolla channel separation

## Purpose

This gate protects CK-Labs and TycoonX when a purchase, refund, chargeback, entitlement dispute or support case involves a child or other minor. It is intentionally separate from privacy age rules, platform family settings, fraud controls, account compromise, withdrawal rights and ordinary refund policy.

Do not invent a universal TycoonX minimum purchase age in product copy without first confirming the actual account policy, target audience, store configuration and applicable law. A platform age rating is not the same question as contractual capacity to make a paid purchase.

The goal is not to block legitimate family purchases. The goal is to avoid treating every successful payment as automatically binding, every parental complaint as fraud, or every platform family feature as proof that German civil-law requirements were satisfied.

## 1. German civil-law baseline

### 1.1 Children under seven

Under BGB § 104 no. 1, a person who has not completed their seventh year is legally incapable of contracting. Under BGB § 105(1), a declaration of intent by a legally incapable person is void.

For TycoonX, do not treat a checkout completed solely by a child under seven as binding merely because Apple, Google Play, Xsolla, a card network or another provider processed the payment.

### 1.2 Minors aged seven to seventeen

BGB § 106 gives minors who have completed their seventh year limited legal capacity subject to §§ 107 to 113 BGB.

Under § 107 BGB, a minor needs the consent of the legal representative for a declaration that does not give the minor only a legal advantage. A paid TycoonX purchase that creates a payment obligation is ordinarily not merely legally advantageous.

Under § 108 BGB, where required consent was missing when the minor concluded the contract, effectiveness can depend on later approval by the legal representative. Support and payment systems must therefore avoid reducing every case to the binary assumption that a provider receipt alone proves final contractual validity.

### 1.3 BGB § 110 is a narrow fact-specific rule

Do not label every low-value purchase as automatically valid under the so-called pocket-money rule.

BGB § 110 provides that a contract concluded by a minor without representative consent is deemed effective from the beginning where the minor performs the contractual obligation using means provided for that purpose or for the minor's free disposal by the representative, or by a third party with the representative's consent.

For TycoonX this requires facts. Relevant questions can include:

- who supplied the payment means;
- whether those means were actually left for the minor's free disposal or specifically for this purpose;
- whether the contractual payment was actually performed;
- whether another approval rule already applies; and
- whether the purchase record corresponds to the transaction being disputed.

Do not create an automated rule such as `purchase under EUR X = valid under § 110`. The statute contains no TycoonX-specific monetary threshold.

## 2. Keep five different questions separate

A support or payment case involving a minor can raise several different issues. Record them separately:

1. Was the payment technically authorised by Apple, Google Play, Xsolla or another payment provider?
2. Was the person using the TycoonX account actually the purchaser?
3. Did a parent or legal representative approve the transaction where approval was legally required?
4. Is the contract effective under the applicable civil law, including §§ 104 to 110 BGB where German law applies?
5. Is there a separate refund, withdrawal, conformity, fraud, account-compromise or chargeback issue?

A yes to one question does not automatically answer all the others.

## 3. Apple App Store purchases

Apple's Ask to Buy feature can require a child or teen to request approval for eligible App Store downloads and in-app purchases, depending on Family Sharing settings, age and country or region.

Treat a genuine Apple family-approval signal as useful transaction evidence where Apple exposes it. Do not treat it as a universal legal waiver or as proof of every civil-law fact that CK-Labs might need to establish.

Also do not infer the reverse. Absence of an Ask to Buy signal does not prove that the purchaser was an adult, that approval was unnecessary, or that a parent intentionally authorised the purchase.

Apple controls its family-account and App Store approval flow. CK-Labs remains responsible for its own product representation, entitlement delivery, support handling and any legal consequence allocated to CK-Labs by mandatory law.

## 4. Google Play purchases

Google Play provides family purchase-approval functionality and Family Link controls for purchases made through Google Play's billing system. Google also states that purchase-approval settings concern purchases made through that billing system.

Treat an available Google family approval as relevant evidence, not as a substitute for the full legal-capacity analysis. Likewise, do not assume that a missing family approval proves adulthood or intentional parental authorisation.

Where an alternative or external payment route is lawfully used, do not pretend Google family controls govern a transaction that was actually concluded through a different channel.

## 5. CK-Labs TycoonX webshop and Xsolla

A successful Xsolla payment is strong evidence that a payment event occurred. It is not by itself a rule that overrides German contract-capacity law.

For a complaint involving a minor, preserve the authoritative Xsolla transaction, payment state, payer information lawfully available to CK-Labs, refund/reversal/chargeback status, SKU, amount, currency, tax presentation and entitlement event.

Do not ask Xsolla to decide questions that belong to CK-Labs or applicable consumer/civil law. Conversely, do not promise that CK-Labs can override provider-controlled payment or refund processes where it cannot.

## 6. TycoonX product distinctions must survive the minor-purchase workflow

### Diamonds

Diamonds are TycoonX virtual currency, not cash, a bank deposit, an investment or a claim to a fixed monetary redemption value.

If one disputed Diamond purchase is cancelled, refunded or determined not to be binding, correct only the value attributable to that transaction where technically and legally appropriate. Do not erase unrelated purchased Diamonds, earned Diamonds, promotional Diamonds or other legitimate balances merely because the account also contains disputed value.

If some disputed Diamonds have already been consumed, investigate the transaction and resulting entitlement history. Do not invent a personal debt claim against a minor or force a negative-money outcome without a valid legal and contractual basis.

### One-time 30-Day VIP

TycoonX 30-Day VIP is a one-time, non-renewing 30-day entitlement. It is not a recurring subscription.

A disputed, refunded or ineffective 30-Day VIP transaction must be reconciled against that specific source. Do not remove another independently valid 30-Day VIP period or Lifetime VIP merely because one source is reversed.

### Lifetime VIP

Lifetime VIP is a limited-time promotional offering sold only during selected genuine sales windows. CK-Labs may withdraw it from sale, it may never return, and different genuine sales windows may use different lawful prices. It does not promise that TycoonX itself or any provider will operate forever.

A minor-purchase dispute about Lifetime VIP must still be evaluated transaction by transaction. Do not use the promotional nature of the offer to defeat mandatory rights, and do not remove an independently valid Lifetime VIP because a different purchase is disputed.

## 7. Gifts

Keep purchaser and recipient roles separate.

An adult purchasing a TycoonX gift for a minor is not the same legal fact pattern as the minor personally entering the paid transaction. Likewise, a minor receiving a benefit is not automatically the same as the minor undertaking a payment obligation.

If a minor is the purchaser of a gift for another player, analyse the minor purchaser's contractual capacity and payment authorisation rather than treating the recipient's age or account as decisive.

Refunds, reversals and entitlement corrections for gifts must preserve the original purchaser, recipient, provider transaction and granted entitlement provenance.

## 8. Parent or guardian complaints

When a parent or guardian says a minor made an unauthorised purchase:

1. Preserve the transaction and entitlement records before changing value.
2. Identify the exact provider, order or transaction, SKU, amount and recipient.
3. Determine whether the account was used by the minor, an adult family member or an unknown third party.
4. Check any provider family-approval or purchase-verification evidence that is actually available.
5. Keep legal-capacity analysis separate from account takeover, stolen payment credentials and ordinary buyer's remorse.
6. Follow the provider's required refund or dispute channel where the provider controls that process.
7. Reconcile only the affected entitlement source after an authoritative refund, reversal, chargeback or legal determination requires correction.
8. Preserve mandatory withdrawal, conformity and other consumer remedies.

Do not automatically suspend or permanently ban a player merely because a parent raises a genuine capacity or authorisation dispute. Fraud or abuse sanctions require their own evidence.

## 9. Shared devices, shared accounts and account compromise

A child using a parent's device or logged-in store account can look technically similar to several very different situations:

- intentional family authorisation;
- permission limited to one purchase but not another;
- accidental purchase;
- use without the parent's consent;
- compromised credentials; or
- deliberate chargeback abuse after authorised consumption.

Do not collapse these cases into one automated fraud label. Investigate the available payment, authentication, device, support and entitlement evidence proportionately.

## 10. Advertising and promotions directed at children

The German UWG Annex to § 3(3), no. 28, treats as always impermissible a direct exhortation included in advertising that asks children to buy the advertised product or service themselves, or to persuade their parents or other adults to buy it for them.

For TycoonX, child-directed advertising must therefore not use calls to action whose message is effectively:

- buy these Diamonds now;
- buy VIP now; or
- get your parent or another adult to purchase this paid item for you.

This does not prohibit every age-neutral description of TycoonX or every generally available promotion. Marketing context, audience, creative, targeting and wording still matter. Promotions must also remain non-misleading, including Lifetime VIP sale windows, countdowns, crossed-out prices, coupons and regional pricing.

Do not use urgency, social pressure or fear of gameplay disadvantage to circumvent the rule through equivalent child-directed wording.

## 11. Privacy and data minimisation

Do not introduce unnecessary date-of-birth collection, identity-document collection or child profiling merely because this gate exists.

If CK-Labs later decides to implement age assurance, parental consent evidence or a dedicated child-account flow, perform a separate GDPR and privacy review first. Collect only information necessary for the defined purpose, restrict access, define retention, and update the Privacy Policy and localized copies if the canonical processing description materially changes.

Contractual capacity, GDPR child-consent rules, app-store family settings and content age ratings are separate legal/product questions.

## 12. Required transaction and case provenance

Where available and lawful, retain enough evidence to reconstruct a disputed transaction without relying on a mutable aggregate VIP flag or current Diamond balance alone:

- provider and channel;
- provider order, transaction or purchase token;
- SKU/product and quantity or VIP duration;
- TycoonX purchaser account;
- gift recipient where applicable;
- amount, currency and tax context;
- authoritative payment state;
- provider family-approval or verification signal, if actually exposed;
- entitlement grant identifier and timestamp;
- consumed amount where relevant and reliably attributable;
- refund, reversal or chargeback identifier and state;
- support correspondence and claimed purchaser/guardian relationship;
- entitlement correction taken and reason;
- reviewer and decision timestamp.

Do not store sensitive family data merely because it might someday be useful.

## 13. Refunds, reversals and chargebacks

A parental or minor-capacity complaint is not automatically a chargeback-abuse case.

If Apple, Google Play or Xsolla authoritatively refunds or reverses a transaction, reconcile the corresponding TycoonX entitlement according to the provider event and applicable law. Preserve unrelated transactions and legitimate value from other sources.

If a chargeback appears after a parent reports an unauthorised minor purchase, investigate the underlying authorisation/capacity facts before classifying the account as abusive where the system permits such review.

Conversely, this gate does not prevent CK-Labs from acting on genuine fraud, fabricated guardian claims, repeated intentional abuse, hacked accounts or manipulated payment evidence when supported by reliable facts and mandatory law.

## 14. Price, tax, currency and promotion rules still apply

Minor-purchase handling does not change the general TycoonX price framework:

- future Diamond bundle content and prices may change;
- 30-Day VIP and Lifetime VIP future prices may change;
- regional prices and channels may differ;
- provider tax, VAT and foreign-exchange treatment can change local totals;
- the final total shown before confirmation governs a completed transaction subject to mandatory law and legally relevant error correction;
- completed purchases are not retroactively repriced merely because a later price is lower;
- a later price increase does not create an additional charge on a completed one-time purchase;
- genuine Lifetime VIP sales windows may use different prices; and
- promotional claims and countdowns must not be misleading.

None of these rules eliminates a minor's mandatory civil-law protections.

## 15. P0 and P1 implementation gates

### P0 before automated adverse action in a minor-related case

- Never infer contractual adulthood from payment success alone.
- Never infer parental approval solely from the absence of a provider family-control signal.
- Never remove unrelated Diamonds or independent VIP sources.
- Never classify a guardian complaint as fraud solely because paid value was delivered or used.
- Never create a universal monetary threshold and call it the § 110 rule.
- Never direct child-targeted advertising to tell children to buy or persuade adults to buy.

### P1 operational requirements

- Support must be able to locate a transaction by authoritative provider identifier.
- Entitlement provenance must identify which purchase created which Diamond or VIP grant.
- Gift transactions must preserve purchaser and recipient separately.
- Provider refund/reversal events must be idempotent.
- Minor-capacity cases must have a review reason distinct from fraud, chargeback abuse and account compromise.
- Legal/support templates must not invent an age minimum that is absent from the actual TycoonX account policy.

## 16. QA and tabletop scenarios

1. A six-year-old completes a payment on an already logged-in family device.
2. A twelve-year-old makes an Apple in-app purchase after a genuine Ask to Buy approval.
3. A twelve-year-old Apple purchase has no family-approval signal available to CK-Labs.
4. A fifteen-year-old makes a Google Play purchase approved through a family workflow.
5. A Google Play family payment succeeds but CK-Labs cannot see any meaningful approval metadata.
6. A German parent disputes an Xsolla card purchase allegedly made by a fourteen-year-old.
7. A sixteen-year-old pays using money expressly left for free disposal and § 110 may be relevant.
8. Support cannot establish who supplied the payment means, so § 110 cannot be assumed.
9. An adult buys Diamonds as a gift for a child account.
10. A minor buys a gift for an adult player.
11. One disputed Diamond transaction is refunded after some of its Diamonds were consumed.
12. The account also contains earned and promotional Diamonds that must remain intact.
13. One of two stacked 30-Day VIP purchases is reversed.
14. The account has Lifetime VIP plus a separately disputed 30-Day VIP purchase.
15. A Lifetime VIP purchase is disputed by a guardian after the promotional sales window has closed.
16. A child uses a parent's store account with permission for one transaction but allegedly not a later transaction.
17. A genuine account compromise initially appears to be family use.
18. A guardian complaint is followed by a provider chargeback.
19. A user repeatedly fabricates guardian complaints after consuming paid value and separate fraud evidence exists.
20. An advertisement targeted at children tells them to buy Diamonds.
21. An advertisement targeted at children tells them to persuade a parent to buy VIP.
22. An age-neutral Lifetime VIP campaign uses a genuine sale window without child-directed pressure.
23. A regional-price or FX difference is incorrectly alleged to prove an unauthorised minor purchase.
24. A duplicate provider callback grants the same product twice before a guardian dispute.
25. An old app version does not expose current family or purchase-verification UX.
26. Apple, Google Play or Xsolla changes a family/payment rule and TycoonX must update the operational gate without silently weakening mandatory rights.
27. CK-Labs considers collecting date of birth solely to simplify support cases and rejects the change pending privacy/data-minimisation review.

## 17. Canonical legal and localization sync trigger

This file is an implementation and legal-review gate, not a substitute for the canonical Terms, Purchases & Refunds Policy or Privacy Policy.

Do not add an arbitrary universal age threshold to the canonical TycoonX legal documents solely because this gate exists. If CK-Labs adopts a concrete minor account policy, age-assurance process, parental-consent workflow, child-specific purchase restriction or new personal-data collection, review whether canonical English wording must materially change. If it changes, update every localized affected document and `TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md` in the required locale order.

## 18. Official references checked on 2026-09-11

German Civil Code:

- BGB § 104: https://www.gesetze-im-internet.de/bgb/__104.html
- BGB § 105: https://www.gesetze-im-internet.de/bgb/__105.html
- BGB § 106: https://www.gesetze-im-internet.de/bgb/__106.html
- BGB § 107: https://www.gesetze-im-internet.de/bgb/__107.html
- BGB § 108: https://www.gesetze-im-internet.de/bgb/__108.html
- BGB § 110: https://www.gesetze-im-internet.de/bgb/__110.html

German unfair-commercial-practice rule:

- UWG Annex to § 3(3), no. 28, direct exhortation to children: https://www.gesetze-im-internet.de/uwg_2004/anhang.html

Platform family controls:

- Apple Ask to Buy: https://support.apple.com/105055
- Google Play purchase approvals: https://support.google.com/googleplay/answer/7039872

These provider documents describe provider-controlled family and approval features. They do not replace mandatory German civil-law analysis where that law applies.
