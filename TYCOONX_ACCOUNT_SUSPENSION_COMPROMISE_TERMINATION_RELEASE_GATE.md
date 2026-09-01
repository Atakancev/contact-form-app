# TycoonX Account Suspension, Compromise & Termination Release Gate

**Release QA reference. Last reviewed: September 1, 2026.**

Owner: CK-Labs  
Scope: TycoonX account security restrictions, moderation restrictions, payment-risk restrictions, temporary suspensions, account-compromise recovery, final termination, appeals, paid-entitlement consequences, and related Apple App Store, Google Play, Xsolla, EU, German, and DSA requirements.

## Purpose

TycoonX already has player-facing Terms and Community Standards that allow proportionate warnings, restrictions, temporary suspensions, emergency protective action, and termination for serious or repeated violations while preserving mandatory consumer rights.

This gate closes the operational gap between those public rules and production enforcement. Its core rule is:

> A security freeze, a moderation action, a payment-risk hold, and a final contractual termination are different decisions and must not be collapsed into one generic `banned = true` state.

The gate is intentionally founder-protective. CK-Labs needs the ability to react quickly to hacked accounts, fraud, exploits, harassment, unlawful content, chargeback abuse, payment attacks, ban evasion, and infrastructure threats. At the same time, an emergency restriction must not silently become a permanent finding of fault, and a compromised account must not automatically lose unrelated legitimate purchases.

The canonical English Terms of Service, Purchases & Refunds Policy, Privacy Policy, and Community Standards remain the player-facing source. This gate does not materially change their present meaning. If production policy later changes that meaning, update the canonical English source first and reopen only the affected localized document type across all 25 locales in the required order.

## 1. Classify the action before enforcing it

Every material account action should be classified as one or more of the following:

1. **Security containment**: a temporary protective restriction because account compromise, credential theft, bot activity, suspicious device activity, or another security incident is reasonably suspected.
2. **Moderation restriction**: a content or social-feature action based on Community Standards, illegal-content concerns, harassment, spam, abuse, or platform UGC requirements.
3. **Payment-risk restriction**: a purchase, transfer, marketplace, or economy hold related to a pending payment dispute, suspected payment fraud, chargeback review, regional-price abuse, entitlement replay, or provider risk signal.
4. **Exploit/economy containment**: a temporary or final correction of exploit-generated, duplicated, impossible, or technically invalid state.
5. **Contractual suspension**: a temporary restriction imposed because available evidence supports a Terms violation serious enough to justify suspension.
6. **Final termination**: an end to the account relationship for a sufficiently serious or repeated lawful ground after the applicable review, notice, warning, redress, and consumer-law analysis.

Do not use one category as proof of another.

Examples:

- An impossible-login pattern can justify a security freeze without proving that the account owner cheated.
- A Google chargeback review can justify a transaction-specific payment investigation without proving that every purchase on the account is fraudulent.
- A public-chat violation can justify a chat restriction without automatically justifying removal of unrelated purchased Diamonds.
- An exploit-generated balance can be corrected without treating an unrelated valid Lifetime VIP transaction as invalid.

## 2. Emergency containment may come first, but it must remain reversible

CK-Labs may need to act before a full investigation where delay would create material risk to users, payments, data, game integrity, or infrastructure.

Reasonable emergency measures can include:

- temporarily blocking login or requiring reauthentication;
- forcing credential or session reset;
- freezing high-risk marketplace, transfer, company-treasury, gift, or purchase functions;
- suspending chat or UGC posting;
- stopping suspicious entitlement restoration or transfer;
- preventing further spending of disputed or technically duplicated value;
- preserving relevant logs and transaction references; and
- preventing an active exploit from continuing.

Emergency containment should be scoped to the risk where practicable. A suspicious payment should not automatically disable every unrelated social feature, and a chat-safety incident should not automatically freeze every purchase unless a separate reason exists.

A temporary protective restriction is not itself a final finding that the user committed fraud, cheating, payment abuse, or another Terms violation.

## 3. Account compromise is a separate factual question

A compromised account can produce activity that looks like intentional misconduct by the legitimate owner. TycoonX must preserve that possibility until the evidence supports a conclusion.

Possible compromise indicators include:

- abrupt device, session, geography, authentication, or behavior changes;
- credential-reset or takeover reports;
- unauthorized purchases or chargebacks reported promptly;
- unusual transfer, marketplace, gifting, company-treasury, or liquidation activity;
- simultaneous or impossible session patterns;
- a newly linked platform/payment account inconsistent with prior history; or
- a support report supported by provider transaction/account evidence.

None of those signals alone proves compromise, and none proves intentional abuse by the legitimate account owner.

Do not use an absolute rule such as "the account owner is responsible for every action performed while logged in" to avoid investigating credible compromise. The current Terms require users to take reasonable security measures and report suspected compromise, but they do not convert every unauthorized action into conclusive owner misconduct.

## 4. Account recovery must use proportionate verification

Recovery should establish enough confidence that the claimant controls or is entitled to control the relevant TycoonX account without collecting unnecessary secrets.

Useful verification signals can include, where lawfully available:

- access to the established account email or authentication method;
- prior account identifiers known to CK-Labs;
- Apple transaction/original transaction identifiers and, where available, the relevant `appAccountToken` association;
- Google Play purchase token, order information, and, where available, obfuscated account/profile identifiers;
- Xsolla transaction/order identifiers and the transaction-specific checkout/receipt information;
- prior support history that does not expose another person's private data;
- historical account/device/session evidence used proportionately; and
- other internal evidence reasonably necessary to distinguish the legitimate claimant from the attacker.

Never ask a player to send:

- their Apple, Google, Xsolla, email, or banking password;
- a full payment-card number or card security code;
- an authentication backup code that would let CK-Labs sign in as the player; or
- unrelated sensitive personal information merely to make recovery easier for Support.

Where a less intrusive verification method works, use it.

## 5. Provider account-binding signals are evidence, not magic identity proof

### Apple App Store

Apple's current StoreKit/App Store Server model allows an `appAccountToken` to associate a transaction with a customer account on the developer's service. Apple also exposes App Store transaction identifiers and restore information for restorable purchases.

For TycoonX:

- use `appAccountToken`, transaction ID, original transaction ID, and signed transaction data where available to improve attribution;
- do not treat a developer-generated `appAccountToken` as independent proof of a person's civil identity;
- do not reassign a valid purchase to another TycoonX account merely because a claimant can quote a public product ID;
- restoration must remain idempotent; and
- a recovered Lifetime VIP must resolve to one valid entitlement, not a second Lifetime VIP.

### Google Play

Google currently recommends secure backend purchase verification using the purchase token and supports `obfuscatedAccountId` and `obfuscatedProfileId` for purchase attribution.

For TycoonX:

- verify the purchase token against authoritative Google state where required;
- use obfuscated account/profile identifiers where they were actually supplied;
- do not reject an otherwise valid historical purchase solely because those optional attribution identifiers are absent;
- keep purchase attribution separate from a conclusion about whether the TycoonX account was compromised; and
- do not grant value while the provider transaction is still pending rather than completed.

### Xsolla

Xsolla payment, fraud, refund, cancellation, and chargeback signals are transaction-specific. Xsolla documentation itself distinguishes reasons such as integration error, provider cancellation, test payment, potential fraud, and payment-system fraud notification.

For TycoonX:

- do not convert every Xsolla cancellation or refund reason into a permanent TycoonX account ban;
- preserve the transaction-specific reason and evidence;
- treat an integration error differently from proven intentional payment fraud;
- keep a provider fraud signal available for investigation without treating it as automatic proof of every unrelated account action; and
- reconcile final entitlement state to the authoritative Xsolla transaction outcome.

## 6. Paid entitlements must be isolated from the enforcement reason

The enforcement system must know exactly which paid value, if any, is connected to the investigated conduct.

### Purchased Diamonds

- A moderation suspension does not invalidate purchased Diamonds.
- A security freeze does not itself authorize permanent Diamond removal.
- A refunded, reversed, charged-back, duplicated, fraudulent, or otherwise invalid Diamond transaction can support transaction-specific correction.
- Exploit-generated or duplicate value can be corrected without removing unrelated valid Diamond purchases.
- Account termination can make account-bound game value inaccessible where the contract and law permit, but it must not be disguised as a transaction refund or provider reversal that never occurred.

### One-time 30-Day VIP

- A temporary security hold does not restart the 30-day clock.
- A restore or account recovery must preserve the original valid entitlement period unless a separate remedy or voluntary extension applies.
- If a restriction is later found to have been erroneous and materially deprived the user of a paid period, assess the applicable conformity, extension, price-reduction, termination, refund, or goodwill path instead of silently ignoring the lost time.
- A valid suspension for the user's own serious misconduct does not automatically promise a clock pause or extension unless the contract, platform rule, or mandatory law requires one.

### Limited-time Lifetime VIP

- Lifetime VIP remains one valid account-linked entitlement for the commercial operating lifetime of TycoonX while the account remains eligible under the Terms.
- A temporary investigation does not itself revoke Lifetime VIP.
- A final lawful account termination for sufficiently serious or repeated Terms violations can affect continued access as the Terms provide, but mandatory consumer remedies remain intact.
- A mistaken termination that is reversed must not create a second Lifetime VIP when access is restored.
- A provider refund/reversal remains transaction-specific and must not be invented merely because the account was moderated.

## 7. German continuing-contract termination requires a real good-cause analysis

Where German law applies and the relevant TycoonX relationship is a continuing obligation, BGB § 314 can be relevant to extraordinary termination for good cause.

BGB § 314 requires an individual assessment of whether continuation is unreasonable after considering all circumstances and balancing both parties' interests.

Where the good cause consists of a contractual breach, § 314(2) generally requires an unsuccessful cure period or warning before termination, subject to the statutory exceptions, including special circumstances that justify immediate termination after balancing the parties' interests.

Operational implications:

- do not define every minor Terms violation as automatically sufficient for permanent termination;
- preserve warnings and prior enforcement where recurrence matters;
- record why a warning or cure opportunity was given, failed, or was legally unnecessary;
- record why immediate termination was necessary where no prior warning was used;
- distinguish serious one-off conduct from trivial or accidental conduct;
- account for credible compromise evidence before attributing intentional conduct to the account owner; and
- make a final termination decision within the legally relevant reasonable period after the decisive facts become known where § 314(3) applies.

BGB § 307 also matters for standard-form Terms. A clause that is unclear or unreasonably disadvantages consumers can be ineffective. Founder-protective termination language should therefore be specific enough to explain real grounds and safeguards rather than claiming an unlimited right to terminate any account at any time for any reason.

## 8. DSA Article 17 can require a statement of reasons

Where a TycoonX feature qualifies as a hosting service under the Digital Services Act and CK-Labs imposes a restriction because user-provided information is illegal content or incompatible with the Terms, DSA Article 17 can require a clear and specific statement of reasons.

The covered restriction categories include, where the legal conditions apply:

- restricting visibility of information;
- suspending, terminating, or otherwise restricting monetary payments;
- suspending or terminating the service in whole or in part; and
- suspending or terminating the user's account.

Where Article 17 applies and relevant electronic contact details are known, the statement is due at the latest when the restriction is imposed, subject to the Regulation's exceptions.

The reason record should support the legally required information, including where applicable:

- what restriction was imposed;
- its territorial scope and duration where relevant;
- the facts and circumstances relied on;
- whether the decision followed a notice/report;
- whether automated means were used;
- the legal ground or Terms ground relied on; and
- available redress or complaint options.

Do not send a fake DSA statement for a pure payment-provider reversal that is unrelated to user-provided information. Classify the legal basis first.

The separate TycoonX DSA Article 20/21 and Article 23 gates remain controlling where those provisions apply.

## 9. Apple and Google UGC rules support enforcement, but not arbitrary enforcement

Apple's current App Review Guideline 1.2 requires apps with UGC/social services to provide mechanisms including reporting and the ability to block abusive users from the service.

Google Play's current UGC policy requires robust, effective, and ongoing moderation, appropriate action against UGC or users, in-app reporting, and blocking functionality for relevant UGC experiences.

These platform rules support TycoonX taking real action against abuse. They do not require a permanent whole-account ban for every first or low-severity violation.

Use the least broad effective action where practicable:

- content removal for a content-specific violation;
- mute or messaging restriction for communication abuse;
- marketplace restriction for marketplace abuse;
- payment hold for a payment-specific risk;
- temporary whole-account suspension for serious cross-feature risk; and
- final termination for sufficiently serious or repeated conduct where lawful.

Severe child-safety, credible violence, serious fraud, active security compromise, or similarly urgent risks can justify immediate protective action while the required follow-up review and reporting occurs.

## 10. Chargebacks and account compromise must not be conflated

A chargeback can arise from genuine account/payment compromise, buyer misunderstanding, provider error, duplicate billing, or intentional payment abuse.

Do not automatically classify every chargeback as fraud by the TycoonX account owner.

For a chargeback-related account action, record separately:

- whether the underlying purchase was actually completed and delivered;
- whether the user disputes authorizing the payment;
- whether there is credible account-compromise evidence;
- what value was consumed or transferred;
- the provider's authoritative transaction state;
- any Google collaborative chargeback-review outcome where applicable;
- any Xsolla refund/chargeback reason;
- any Apple refund/revocation state; and
- whether the investigated behavior extends beyond the single disputed transaction.

Knowingly false fraud reports or abusive repeated chargebacks can support purchase restrictions or account enforcement after reasonable investigation. A good-faith unauthorized-payment report must remain protected.

## 11. Exploit correction and punishment are separate decisions

When a bug or exploit creates impossible or duplicated value, CK-Labs may need to restore game integrity even before deciding whether the player intentionally exploited it.

Separate:

1. **state correction**: remove exploit-generated, duplicated, impossible, or otherwise invalid value; from
2. **conduct enforcement**: warning, feature restriction, suspension, or termination based on evidence of intentional or repeated abuse.

A player can have invalid exploit-generated value corrected without being permanently banned where intent is not established. Conversely, deliberate large-scale exploit abuse can justify stronger enforcement even after the invalid state has already been corrected.

Never use exploit correction as a shortcut to confiscate unrelated valid purchases.

## 12. Final termination requires an entitlement-consequence review

Before final account termination, the case should answer:

- What contractual/legal ground supports termination?
- Is the conduct serious enough, repeated enough, or otherwise sufficient?
- Was a warning or cure opportunity required and, if so, provided?
- If no warning was used, why was immediate termination justified?
- Is account compromise credibly excluded, unresolved, or established?
- Does a DSA statement of reasons or another notice apply?
- Does an appeal/internal complaint route apply?
- Are there purchased Diamonds, active 30-Day VIP, or Lifetime VIP?
- Which paid entitlements are actually related to invalid/refunded transactions?
- Does termination create a separate digital-product conformity, refund, price-reduction, or other mandatory consumer-remedy issue?
- Are any user-created-content retrieval, privacy, or data-deletion rights triggered?
- What records must be preserved for disputes, provider reconciliation, security, or legal obligations?

Do not let a support macro answer those questions implicitly.

## 13. Reversal of an enforcement action must also be idempotent

If an investigation or appeal shows that a restriction was mistaken or too broad:

- restore account access without creating duplicate entitlements;
- restore one valid Lifetime VIP, not another Lifetime VIP grant;
- restore the authoritative 30-Day VIP state and separately assess any lost paid period;
- restore legitimate Diamond state from the ledger without replaying historical purchases;
- remove temporary security/payment flags that no longer have a basis;
- preserve necessary audit history without continuing an unjustified active restriction; and
- correct downstream moderation/payment systems that cached the old state where technically practicable.

An appeal success should not require the player to reinstall the app or create another account to regain a valid server-side entitlement.

## 14. Evidence and audit record

For every material suspension or termination, preserve a proportionate case record containing, where applicable:

- enforcement case ID;
- account ID;
- trigger/event time;
- action classification from Section 1;
- scope and duration;
- emergency-containment flag;
- Terms/Community/legal ground;
- evidence sources relied on;
- automated signals used and whether a human made the final decision;
- compromise indicators and recovery status;
- relevant Apple, Google, or Xsolla transaction references without unnecessary payment data;
- related entitlement-ledger entries;
- warning/cure history;
- notice/reason statement sent;
- appeal/review result;
- final entitlement consequences; and
- retention/deletion basis for the case record.

The audit trail should make it possible to explain a decision later without retaining every piece of account data forever.

## 15. Privacy and security limits

Account-security and enforcement processing remains subject to the TycoonX Privacy Policy and applicable data-protection law.

- Use access controls and least privilege for enforcement data.
- Do not expose the reporter's private details to the reported user unless law requires it.
- Do not include another user's private messages in a reason statement merely to make it more persuasive.
- Do not retain raw device/security telemetry indefinitely without a purpose and retention basis.
- Keep payment identifiers protected and do not store card security codes or credentials.
- Treat high-risk fraud/moderation profiling under the separate automated-decision and AI gates where applicable.

## 16. Release regression scenarios

Before relying on the production suspension/termination system, verify at least these cases:

1. **Compromised account transfer spree**: suspicious transfers are frozen immediately, but final owner fault is not assumed before recovery review.
2. **Public-chat harassment**: chat restriction does not remove unrelated purchased Diamonds or VIP.
3. **Single low-severity violation**: system does not automatically convert it into permanent account termination.
4. **Severe child-safety incident**: immediate protective restriction is available and evidence is preserved for required reporting/review.
5. **Google chargeback plus compromise claim**: transaction is isolated; genuine compromise remains possible; unrelated purchases remain untouched.
6. **Xsolla integration-error refund**: refund reconciliation does not automatically place the whole TycoonX account into permanent fraud ban state.
7. **Apple refunded Diamond order**: only the affected transaction/value is corrected; a separate Lifetime VIP remains valid.
8. **Exploit-generated 1,000 Diamonds**: invalid exploit value is corrected separately from the conduct-enforcement decision.
9. **Mistaken suspension with active 30-Day VIP**: original entitlement is restored and lost paid time is separately assessed for the proper remedy.
10. **Mistaken termination with Lifetime VIP**: reinstatement recognizes one valid Lifetime VIP and does not duplicate it.
11. **Old provider identifiers missing**: a valid historical purchase is not rejected solely because an optional account-binding identifier was never supplied.
12. **Account recovery claimant**: Support does not request account passwords, full card details, or authentication backup codes.
13. **German repeated breach**: warning history and the BGB § 314 good-cause analysis are preserved before final termination where required.
14. **Immediate German termination**: the record explains the special circumstances making a prior warning/cure opportunity unnecessary where that legal route is relied on.
15. **DSA content-based account suspension**: Article 17 classification produces a clear reason statement with the required case facts and redress information where applicable.
16. **Pure provider payment reversal**: system does not falsely label the transaction event as a DSA content-moderation decision.
17. **Appeal succeeds**: downstream account/payment/moderation flags are cleared without replaying purchases.
18. **Account termination plus creative content**: any applicable content-retrieval/privacy/deletion workflow is handled separately from paid-entitlement enforcement.

## 17. Stop-ship conditions

Do not rely on the production suspension/termination system for final high-impact enforcement if any of the following is true:

- one generic ban flag is the only distinction between security containment and final misconduct finding;
- a temporary security restriction permanently removes paid value;
- every chargeback automatically becomes permanent-account fraud;
- there is no way to distinguish exploit-state correction from punishment;
- final termination can occur without a recorded ground, evidence, scope, and decision time;
- German final termination relies on a blanket Terms clause without the required good-cause/warning analysis where BGB § 314 applies;
- an applicable DSA Article 17 restriction cannot produce the legally required reason information;
- an account-recovery flow asks for passwords or full payment credentials;
- restoring a recovered account can duplicate Lifetime VIP or restart 30-Day VIP automatically;
- a provider refund on one transaction removes unrelated value; or
- the system cannot reverse an erroneous suspension without manual database surgery.

## 18. Canonical public-language invariants

The canonical public legal documents should continue to preserve all of the following meanings:

- users have reasonable account-security duties and should report suspected compromise;
- CK-Labs can take emergency protective action before an investigation is complete when reasonably necessary;
- suspension and termination can be used for serious or repeated violations, fraud, cheating, security threats, unlawful activity, abuse, payment abuse, ban evasion, or material harm to the Service;
- enforcement remains subject to mandatory law and applicable platform rules;
- unrelated legitimate paid value is not automatically confiscated merely because another issue exists;
- genuine fraud/account-compromise reporting remains protected;
- purchased Diamonds, one-time 30-Day VIP, and limited-time Lifetime VIP remain legally and operationally distinct;
- provider refunds/reversals are transaction-specific;
- appeal/review routes remain available where required; and
- TycoonX is the displayed brand and is treated as the fully released live service from September 1, 2026.

## 19. Current external reference points

Current references checked for this release gate include:

- German BGB § 314, termination of continuing obligations for good cause: https://www.gesetze-im-internet.de/bgb/__314.html
- German BGB § 307, standard-terms fairness/transparency control: https://www.gesetze-im-internet.de/bgb/__307.html
- EU Digital Services Act, especially Article 17: https://eur-lex.europa.eu/eli/reg/2022/2065/oj/eng
- Apple App Review Guidelines, especially Guideline 1.2 UGC: https://developer.apple.com/app-store/review/guidelines/
- Apple StoreKit purchase/restoration guidance and App Store Server transaction identifiers: https://developer.apple.com/documentation/storekit/offering-completing-and-restoring-in-app-purchases
- Apple `appAccountToken`: https://developer.apple.com/documentation/AppStoreServerNotifications/appAccountToken
- Google Play UGC policy: https://support.google.com/googleplay/android-developer/answer/9876937
- Google Play purchase attribution and verification guidance: https://developer.android.com/google/play/billing/developer-payload
- Google Play backend integration guidance: https://developer.android.com/google/play/billing/backend
- Xsolla payment/refund reason documentation: https://developers.xsolla.com/webhooks/payments/add-payment-account

## 20. Founder-protective rule of thumb

The strongest defensible TycoonX enforcement position is not "CK-Labs can ban anyone and keep everything." It is:

> CK-Labs can act immediately when necessary to protect users, payments, game integrity, or infrastructure; can correct invalid or exploit-generated state; can proportionately suspend or terminate accounts for proven serious or repeated violations where lawful; keeps transaction and entitlement consequences scoped to the actual evidence; preserves mandatory consumer and platform rights; and can reverse a mistaken decision without duplicating paid value.

That model is both more protective for CK-Labs in a real dispute and less vulnerable to being characterized as arbitrary or unfair.
