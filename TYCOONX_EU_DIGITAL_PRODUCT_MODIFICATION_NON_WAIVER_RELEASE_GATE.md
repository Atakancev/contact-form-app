# TycoonX EU/German Digital Product Modification & Non-Waiver Release Gate

**Release QA reference. Last reviewed: September 4, 2026.**

This gate supplements the existing TycoonX digital-product change, economy-reset, conformity, checkout, payment and shutdown gates with one narrow issue that must not be lost in implementation: mandatory German/EU digital-product rights cannot be converted into a pre-written waiver simply because a player updates the app, keeps playing, restores a purchase, clicks through a migration screen, accepts a server-side rebalance, or uses Apple, Google Play or Xsolla.

The canonical English TycoonX Terms and Purchases & Refunds Policy remain the player-facing legal source. This gate does not materially change their current public meaning. It operationalizes the mandatory-rights language already present there. If a future implementation decision changes that public meaning, reopen only the affected localized document type and resynchronize all 25 locales in the required order.

## 1. BGB § 327s is a hard implementation boundary

Where the German digital-product rules apply, **BGB § 327s** restricts agreements that disadvantage the consumer by departing from the statutory digital-product framework.

For modifications, BGB § 327s(2) means CK-Labs cannot rely on a consumer-disadvantageous agreement departing from the statutory rules unless that agreement was made **after the consumer was informed about the modification under BGB § 327r**.

BGB § 327s(3) also applies the digital-product rules where another arrangement is used to circumvent them. Product design, account state, store routing, labels or technical architecture must therefore not be used to achieve indirectly what the mandatory rules would prohibit directly.

BGB § 327s(4) contains a separate rule for exclusions or limitations of damages claims. Do not stretch that exception into a general permission to waive modification, conformity, termination, repayment, update or other mandatory rights.

BGB § 327s(5) preserves BGB § 327h. A pre-contract deviation from objective product requirements has its own statutory conditions and cannot be disguised as a later modification waiver.

## 2. Directive (EU) 2019/770 Article 22 points in the same direction

Article 22 of Directive (EU) 2019/770 makes the digital-content and digital-services consumer protections mandatory unless the Directive provides otherwise.

A contractual term that disadvantages the consumer by excluding, derogating from or varying the effect of the national implementing rules before a covered modification under Article 19 has been brought to the consumer's attention is not binding on the consumer.

The Directive does allow CK-Labs to offer arrangements that are **more protective** than the statutory minimum. The safe product strategy is therefore to preserve mandatory rights and add clearer support, notice, extensions or goodwill where useful, rather than attempting to contract below the legal floor.

## 3. A forced app update is not a rights-waiver event

A required security update, minimum-version block, App Store update, Google Play update, server-protocol migration or authentication migration may be technically necessary. That does not turn the update flow into a blanket consumer-rights waiver.

Do not make a player accept wording such as the following merely to install or continue using a required update:

- all future changes are accepted regardless of impact;
- no refund, termination, price-reduction or conformity right can arise from future changes;
- continued use permanently waives rights relating to an already announced material modification;
- purchased Diamonds can be removed without transaction-specific or legally valid grounds;
- 30-Day VIP may be shortened or restarted without applicable remedy analysis; or
- Lifetime VIP may be given a hidden expiry merely because a new app version is required.

A technical update can have its own necessary technical notice. If the same release also contains a discretionary product modification, classify and assess that modification separately under BGB § 327r / Directive Article 19 where applicable.

## 4. Continued use is not a blanket substitute for the statutory modification process

A player continuing to log in after a notice does not automatically cure a defective modification process or erase rights that mandatory law preserves.

For a covered modification, first establish the statutory basis, valid reason, no-additional-cost rule, clear information, and any required advance durable-medium notice and termination route. Do not reverse that order by deploying the change first and later arguing that ordinary gameplay amounted to advance consent to anything CK-Labs might change.

If CK-Labs later reaches a specific post-notice agreement with the consumer, record what modification was already disclosed, what the consumer specifically agreed to, when the agreement was made, and why the agreement is otherwise valid and not misleading or coercive.

A generic `By continuing you accept all changes and waive all claims` banner is not an acceptable substitute for that evidence.

## 5. Do not bundle mandatory access with an unrelated waiver

A consumer must not be forced to surrender statutory digital-product rights merely to:

- log back into TycoonX after maintenance;
- restore a valid purchase;
- receive already purchased Diamonds;
- continue the remaining period of a valid 30-Day VIP;
- restore a valid Lifetime VIP;
- install a required security update;
- recover a compromised account;
- request support;
- exercise privacy or account-deletion rights; or
- use a conformity, withdrawal, termination, price-reduction or refund route that mandatory law provides.

Where a separate contractual consent is genuinely needed, keep it specific to its real purpose rather than hiding it inside entitlement restoration or security recovery.

## 6. Apple, Google Play and Xsolla terms do not erase CK-Labs duties

A platform or payment provider can control parts of checkout, payment authorization, tax handling, refund processing, chargeback processing, fraud screening and regional availability. Those provider roles do not create a blanket waiver of CK-Labs obligations that applicable consumer law places on CK-Labs for its own digital product and entitlement delivery.

Likewise, a player accepting Apple, Google Play or Xsolla terms is not proof that the player waived every statutory remedy against CK-Labs concerning TycoonX.

Operationally keep four records separate:

1. provider/store terms and transaction state;
2. TycoonX Terms and product promise;
3. the statutory consumer-rights layer; and
4. any later transaction-specific settlement or post-notice agreement.

A provider refund or reversal remains authoritative for the provider-controlled payment state where applicable. It does not authorize unrelated confiscation or a fabricated waiver of a different transaction.

## 7. Economy rebalancing remains prospective unless a valid correction basis exists

TycoonX may lawfully evolve its fictional economy for legitimate reasons such as inflation control, game balance, fairness, technical stability, security, abuse prevention and long-term game health. The Terms do not promise fixed production speeds, yields, market values, reward rates, tax rates, probabilities or relative competitive advantages forever.

That founder protection must not be implemented as `the user accepted all future economy changes, therefore no mandatory remedy can ever apply`.

If a prospective rebalance materially affects access to or usability of an ongoing paid digital product, assess BGB § 327r and the existing digital-product-change gate. If a correction targets exploit-generated, duplicated, corrupted or otherwise invalid state, use authoritative evidence and isolate invalid value from unrelated legitimate paid value.

A balance change and an invalid-state correction are different legal and technical events.

## 8. Purchased Diamonds stay transaction-specific

Purchased Diamonds are paid in-game virtual currency and must remain distinguishable from free, promotional, gameplay-earned, duplicated, refunded, reversed or exploit-generated value where technically relevant.

A player cannot be made to waive all Diamond-related statutory rights merely by updating the app or continuing to play.

At the same time, this gate does not create a promise that purchased Diamonds have a fixed real-money redemption value, fixed in-game purchasing power, immutable gameplay utility, or permanent availability of every item they can currently buy. Legitimate prospective economy changes remain possible subject to the contract and mandatory law.

Where a specific Diamond transaction is refunded, reversed, charged back, duplicated or invalid, correct that transaction and corresponding value using authoritative records. Do not use a generic waiver as a substitute for transaction evidence.

## 9. 30-Day VIP stays one-time and non-renewing

30-Day VIP is a **one-time, non-renewing 30-day entitlement**. A modification, update or migration must not silently turn it into a recurring subscription or restart its original clock.

A checkbox or update-screen acceptance cannot be used to pre-authorize any future shortening of a valid paid period without the product-specific legal analysis and any mandatory remedy that applies.

If a material covered modification impairs the paid service during the 30-day period, assess the applicable conformity, cure, price-reduction, termination, refund or other mandatory consequences. A voluntary extension can be offered as goodwill but should be recorded separately from the original transaction.

## 10. Lifetime VIP sales-window and service-lifetime rules remain distinct

Lifetime VIP remains a **one-time promotional entitlement available only during selected genuine sales windows**. CK-Labs may withdraw it from future sale, it may never return, different genuine future sales windows can have different prices, and past availability creates no expectation that Lifetime VIP must remain continuously purchasable.

A valid completed Lifetime VIP entitlement remains governed by the existing Terms, including the commercial operating lifetime of TycoonX and mandatory consumer-law limits. Ending a sales window is not the same event as terminating an already valid entitlement.

Do not use a future update, server migration, new Terms version or `continue` button to add a hidden expiry or to claim that all mandatory remedies connected with a future material modification or lawful permanent shutdown were waived in advance.

## 11. Settlement after a disclosed problem is different from an advance waiver

BGB § 327s does not mean CK-Labs can never resolve a dispute with a consumer. The timing and substance matter.

Where applicable law permits it, a specific agreement reached **after** the relevant modification information or defect/problem notification can be assessed separately. Preserve evidence of:

- the exact issue or modification already known to the consumer;
- the date and durable record of the relevant information;
- the remedy or compromise offered;
- what the consumer specifically accepted;
- whether money, Diamonds, VIP time or another benefit was offered as voluntary settlement/goodwill; and
- whether any mandatory right remained non-waivable despite the agreement.

Do not pre-fill a supposed settlement into the general Terms or force it through a security/update screen before the concrete issue exists.

## 12. Chargebacks, fraud and account compromise remain separate

Exercising a digital-product right is not proof of fraud or chargeback abuse. Filing a good-faith complaint about a material modification is not an exploit.

Conversely, BGB § 327s does not stop CK-Labs from acting on independently supported fraud, a genuine chargeback, a reversed payment, duplicated entitlement, account compromise, exploit abuse or another valid enforcement basis.

Keep the events separate:

- modification/remedy event;
- payment/refund/chargeback event;
- entitlement-correction event;
- account-security event; and
- moderation/enforcement event.

One event may trigger another only when the evidence and applicable rules independently support it.

## 13. Security emergencies permit necessary containment, not hidden commercial degradation

CK-Labs may take proportionate immediate action when reasonably necessary to stop an exploit, protect accounts, disable a compromised payment path, block a vulnerable client or contain an infrastructure incident.

If advance notice is genuinely impossible, document the emergency reason, affected scope, start time, review point and later communication. Do not use the emergency label as a permanent shortcut for a discretionary paid-feature reduction that should have gone through the normal modification analysis.

Once the emergency is stable, reassess whether any temporary measure became a longer-term product modification and whether conformity or remedy duties arise.

## 14. Permanent shutdown cannot be pre-waived into `no remedy ever`

The existing Terms correctly allow for lawful permanent TycoonX discontinuation and state that Lifetime VIP refers to the commercial operating lifetime of the Service rather than guaranteeing that the Service will operate forever.

That founder protection does not support a blanket pre-written clause saying permanent shutdown can **never** produce a refund, price reduction, termination right or another mandatory consumer remedy.

At shutdown, use the existing product-by-product closure runbook for:

- purchased and unused Diamonds;
- active 30-Day VIP and remaining paid time;
- valid Lifetime VIP;
- pending/refunded/reversed transactions;
- Apple, Google Play and Xsolla responsibilities;
- account/data termination and qualifying content retrieval; and
- post-shutdown support and legally required records.

## 15. BGB § 327h is not a shortcut around later modification rules

BGB § 327h allows certain deviations from objective digital-product requirements only if the consumer was specifically informed before making the contractual declaration that a particular characteristic deviates from those objective requirements and that deviation was expressly and separately agreed in the contract.

Do not convert that mechanism into a generic statement that `all future changes are separately agreed`.

A concrete pre-contract product characteristic and a later BGB § 327r modification are different events with different requirements.

## 16. Anti-circumvention engineering checks

The following implementation patterns require rejection or legal review before release:

- renaming a permanent paid-feature removal as temporary maintenance while leaving it removed indefinitely;
- splitting one material change into many small server toggles solely to argue that each individual change is insignificant;
- moving a promised feature behind a new paid tier and calling the change `no additional cost` because the old product technically still exists;
- forcing a new Terms checkbox solely to create evidence that all future § 327r rights were waived;
- using an unsupported-version block to avoid delivering a conforming unchanged version that CK-Labs has actually promised to maintain;
- converting a mandatory monetary remedy into Diamonds without a valid legal basis or consumer choice where required;
- deleting the whole account because the consumer terminated only one affected digital-product contract; or
- using an Apple, Google Play or Xsolla provider state as proof that unrelated consumer claims were surrendered.

The label used in code or Support does not control the legal substance.

## 17. Evidence packet for a material modification

For every potentially material change to an ongoing paid TycoonX digital product, preserve a minimal release record containing:

- change ID and owner;
- old and new product behavior;
- contractual valid reason;
- conformity/security-versus-discretionary classification;
- affected products and population;
- no-additional-cost analysis;
- access/usability impairment assessment;
- required notice text and delivery evidence;
- modification effective date;
- BGB § 327r 30-day calculation where relevant;
- unchanged-version availability/conformity evidence if relied upon;
- any post-notice consumer agreement separately recorded;
- entitlement-impact test for Diamonds, 30-Day VIP and Lifetime VIP; and
- any refund, price-reduction, termination, cure or other remedy outcome.

Do not retain unrelated chats, raw payment credentials or unnecessary personal data merely to prove this release gate.

## 18. Minimum regression scenarios

Before production parity is claimed, test at least these cases:

| Scenario | Expected result |
| --- | --- |
| Required security update with no commercial change | Update can be required where lawful; installing it does not waive unrelated statutory rights |
| Material VIP feature degradation announced in advance | BGB § 327r analysis, durable-medium notice where required, and applicable termination/remedy path remain available |
| Player keeps playing after material-change notice | Continued play alone is not logged as a blanket waiver of every statutory right |
| Post-notice specific settlement | Exact disclosed issue, timing, remedy and consumer agreement are recorded separately |
| Economy rebalance changes ordinary market values | No promise of fixed market value; assess paid-product impact rather than assuming either automatic refund or automatic waiver |
| Exploit created invalid Diamonds next to purchased Diamonds | Correct proven invalid value; preserve unrelated verified purchased value |
| 30-Day VIP player installs forced update | Original one-time expiry remains authoritative; update does not create recurrence or restart clock |
| Lifetime VIP player migrates to a new app/server version | Valid entitlement is preserved; migration does not create hidden expiry or reopen a sales window |
| Apple/Google/Xsolla transaction is refunded | Provider-controlled transaction consequences apply; unrelated purchases and statutory claims remain separate |
| Compromised account accepts a change screen | Investigate ownership/session evidence; do not treat attacker activity as conclusive waiver by legitimate owner |
| Permanent shutdown | Product-by-product mandatory remedy analysis remains available; no `no remedy ever` shortcut |
| User terminates one affected contract | Do not require deletion of the entire TycoonX account or surrender of unrelated purchases |

## 19. Brand and release-status invariants

- Player-facing and legal prose must display **TycoonX** exactly.
- Technical route/file names containing `tyconx` may remain only where changing them could break URLs or integrations.
- TycoonX went to full release on **September 1, 2026**.
- Do not describe the live game, current purchases, VIP, Diamonds, rewards, users or legal terms as beta.
- Genuine test, staging, review, promotional or complimentary grants may remain described as such only where legally or operationally useful and must not imply that the live Service is a beta.

## 20. Localization reopening rule

This internal gate does not itself change canonical player-facing meaning. The existing English legal documents already preserve mandatory consumer rights and the § 327r modification framework.

If future implementation requires a material public change:

1. update the canonical English document first;
2. mark only the affected localized document type as reopened in `TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md`;
3. resynchronize all 25 locales in the exact required order; and
4. mark each locale current only after native-language QA preserves the canonical meaning.

## 21. Official legal references checked September 4, 2026

- German BGB § 327r, modifications to digital products: https://www.gesetze-im-internet.de/bgb/__327r.html
- German BGB § 327s, deviating agreements and anti-circumvention: https://www.gesetze-im-internet.de/bgb/__327s.html
- German BGB § 327h, separately agreed deviations from objective product requirements: https://www.gesetze-im-internet.de/bgb/__327h.html
- German BGB §§ 327 et seq., digital-product framework: https://www.gesetze-im-internet.de/bgb/
- Directive (EU) 2019/770, Articles 19 and 22: https://eur-lex.europa.eu/eli/dir/2019/770/oj

## Release decision

Do not mark TycoonX digital-product modification handling production-ready merely because the Terms contain a broad change clause or the app displays an `Accept` button. Production must prove valid modification classification, mandatory-rights preservation, anti-circumvention, transaction-specific entitlement handling, and a real remedy path where applicable.