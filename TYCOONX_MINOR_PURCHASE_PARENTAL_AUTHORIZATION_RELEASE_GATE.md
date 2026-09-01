# TycoonX Minor Purchase and Parental Authorization Release Gate

**Release status:** TycoonX is a full-release service from **September 1, 2026**. This gate must not describe the live game, purchases, VIP, Diamonds, users, or rewards as beta.

This document is an operational release gate for purchases involving minors, supervised accounts, family payment methods, parental approvals, and later parental disputes. It does not replace the canonical TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, or mandatory law.

The goal is to protect CK-Labs from unauthorized-minor purchases and refund/chargeback abuse without pretending that every purchase made by a young player is automatically valid, automatically invalid, or automatically fraudulent.

## 1. Core invariant

A TycoonX purchase involving a minor must be evaluated as a **transaction-specific authorization question**, not as a generic account label.

Do not use any of these shortcuts:

- `minor account = every purchase invalid`;
- `store transaction completed = every parental-authorization issue solved`;
- `parent later disputes payment = child committed fraud`;
- `parent once approved a purchase = all future purchases approved`;
- `family payment method = unlimited authorization`;
- `Google Family Link approval = authorization for an Xsolla web purchase`;
- `Apple Ask to Buy approval = authorization for a later unrelated purchase`;
- `free promotional grant = proof that a paid purchase was authorized`.

The release implementation should preserve enough evidence to identify the specific purchase, payment channel, product, price, currency, purchaser/account mapping, provider state, and any available parental or family approval associated with that transaction.

## 2. German contractual-capacity baseline

Where German law applies, TycoonX must not reduce contractual capacity to a simple age toggle.

Current BGB baseline:

- **BGB § 2**: majority begins at age 18.
- **BGB § 104**: a person who has not completed the seventh year of life is legally incapable within the statutory rule.
- For minors with limited contractual capacity, **BGB § 107** requires consent of the legal representative for a declaration that is not merely legally advantageous.
- A paid Diamond or VIP purchase normally creates a payment obligation and therefore must not be treated as merely legally advantageous merely because the purchased game value benefits the minor.
- Under **BGB § 108**, where required prior consent was absent, effectiveness of the contract can depend on later approval by the legal representative.
- **BGB § 110** can make a contract effective from the beginning where the minor performs the contractual obligation with means provided for that purpose or for the minor's free disposal by the representative, or by a third party with the representative's consent.

Do not turn § 110 into a blanket statement that every small in-game purchase by a minor is automatically valid. The source of the funds, the scope for which the funds were provided, the transaction structure, and the individual facts can matter.

Likewise, do not promise parents that every purchase by anyone under 18 is automatically void. The relevant capacity, consent, approval, payment-source, platform, and mandatory-law facts must be assessed.

## 3. Purchase authorization is separate from privacy consent

Parental authorization for a purchase and parental authorization for personal-data processing are not the same legal event.

Where GDPR Article 8 applies because CK-Labs relies on consent for an information-society-service processing activity offered directly to a child, the applicable child-consent rules and reasonable verification requirements must be handled separately.

Do not infer any of the following:

- purchase approval automatically authorizes optional analytics, marketing, profiling, cookies, or another consent-based processing purpose;
- privacy consent automatically authorizes a Diamond or VIP purchase;
- platform age information automatically proves contractual capacity under German law;
- a store age rating automatically proves the person can conclude every paid contract independently.

Collect only the minimum age, age-range, parental-authorization, transaction, and account-linkage information reasonably necessary for the actual purpose and applicable rule.

## 4. Apple App Store and Ask to Buy

Apple currently provides **Ask to Buy** for Family Sharing, allowing a parent or guardian to approve or decline eligible App Store purchases and in-app purchases for a child or other family member where the feature applies.

Operational rules:

1. Preserve the verified Apple transaction as the payment/entitlement authority after Apple reports valid completion.
2. Treat a provider-confirmed Ask to Buy approval as transaction-specific evidence associated with the approved Apple purchase.
3. Do not reuse one approval as consent for later Diamond bundles, another 30-Day VIP, Lifetime VIP, or another product.
4. Do not grant paid TycoonX value merely because an approval request exists. Grant only after the underlying Apple purchase is validly completed and verified.
5. A declined or unanswered Ask to Buy request does not create an entitlement.
6. A later Apple refund, revocation, reversal, or invalidation is handled through the normal transaction-specific reconciliation path.
7. Apple parental-control settings are controlled by Apple and the family organizer. CK-Labs must not claim that TycoonX can override or guarantee those settings.
8. A completed Apple family purchase can be useful evidence of authorization, but CK-Labs must not state that Apple approval waives mandatory consumer, refund, withdrawal, conformity, or unauthorized-payment rights.

Apple currently notes that Ask to Buy can apply to in-app purchases and that age/availability varies by country or region. Release documentation must therefore avoid hard-coding one universal Apple child age threshold.

## 5. Google Play, Family Link, and purchase approvals

Google Play currently allows family managers or parents to configure purchase approvals for family members and supervised Family Link accounts.

A critical scope rule is that **Google Play purchase approvals apply to purchases made through Google Play's billing system**.

Therefore:

- a Google Play or Family Link approval must not be treated as approval for an Xsolla checkout, an alternative-billing flow, or another external payment provider;
- a family payment method must not be treated as unlimited authority for every payment channel;
- a Google family manager's receipt or approval record can be useful evidence for the relevant Google Play transaction, but not for an unrelated web-shop transaction;
- TycoonX must still wait for authoritative Google `PURCHASED` state and verification before granting paid value;
- a pending approval request or `PENDING` purchase grants no Diamonds or VIP;
- the provider purchase token/order evidence remains part of the authoritative transaction record;
- refund, reversal, voided-purchase, and chargeback handling remains transaction-specific and idempotent.

Google also states that a family manager may be responsible for purchases made with the family payment method and receives receipts for relevant Google Play Billing purchases. TycoonX should preserve that provider evidence where available rather than inventing a separate CK-Labs parental-approval record for the same Google transaction.

## 6. Xsolla web-shop minors and parental controls

The TycoonX webshop using Xsolla requires separate analysis because Google or Apple family controls do not automatically govern a web checkout.

Current Xsolla public materials state that minors must not make purchases or use Xsolla services without the knowledge and consent of a parent or legal guardian. Xsolla's current Privacy Policy also describes a flow in which minors can purchase with verifiable parental consent and describes collecting parent information for that process. Xsolla separately offers parental-control functionality including age gating, guardian accounts, spending limits, approvals, and notifications.

Operational rules:

1. Verify which parental-control or age-gating features are **actually enabled for the CK-Labs Xsolla project**. Do not assume that a feature shown in Xsolla marketing is active in the live checkout.
2. Where Xsolla itself obtains or records parental authorization for a transaction, preserve the provider transaction and authorization status needed for reconciliation without duplicating unnecessary sensitive parent data in TycoonX.
3. If the live Xsolla configuration cannot lawfully establish a required parental authorization for a known minor, disable or block the affected checkout rather than inventing consent.
4. Google Family Link or Apple Ask to Buy must not be presented as authorization for Xsolla.
5. Do not ask a parent to send a password, CVV/CVC, full card number, government-ID image, authentication code, or another sensitive credential merely so TycoonX Support can mark a purchase as approved.
6. If Xsolla performs its own parental-verification process, CK-Labs should not unnecessarily duplicate that identity-verification dataset.
7. Xsolla merchant-of-record, refund, tax, fraud-screening, and parental-control responsibilities remain transaction/configuration specific. They do not remove CK-Labs responsibility for correct TycoonX entitlement delivery after valid payment confirmation.

## 7. Direct exhortations and child-focused purchase marketing

EU consumer law requires stronger care when commercial practices reach children.

**Point 28 of Annex I to Directive 2005/29/EC** treats as an unfair commercial practice the inclusion in an advertisement of a direct exhortation to children to buy advertised products or to persuade parents or other adults to buy them.

For TycoonX this means, where the rule applies, do not design child-directed purchase prompts such as:

- "Buy Diamonds now!" directed to children;
- "Ask your parents to buy Lifetime VIP for you!";
- "Tell your mom to unlock VIP today!";
- pressure copy using a child-focused character that directly tells a child to complete a purchase;
- child-targeted countdown copy that directly pressures the child to make the parent pay before time expires.

This is not a ban on every advertisement that a minor might happen to see. The classification depends on the actual commercial practice, audience, wording, design, medium, age controls, and context. The release rule is to avoid direct purchase exhortations to children and to review borderline child-focused monetization before launch.

The European Commission's 2025 CPC Network Key Principles on in-game virtual currencies also identify children as a vulnerable group that requires particular care. Treat those principles as an enforcement position and best-practice reference, not as a fictional standalone statute.

## 8. Minor purchase disputes are not automatically fraud

A parent or guardian may dispute a transaction because:

- the purchase was actually unauthorized;
- the family payment method or device was used outside the allowed scope;
- a child misunderstood a price, bundle, virtual-currency conversion, or promotion;
- a platform approval was missing or failed;
- the account or payment method was compromised;
- the purchase was duplicated;
- the family disputes whether consent existed;
- the parent is exercising a legitimate refund, withdrawal, conformity, or payment-dispute right;
- deliberate family chargeback abuse occurred.

These cases are not equivalent.

Do not automatically label the child, parent, or account fraudulent solely because a parent reports an unauthorized purchase or files a chargeback.

CK-Labs may investigate transaction evidence, prior authorization records, account security, spending pattern, provider state, and repeated abuse. Deliberate fraud, forged evidence, manipulated clients, coordinated refund cycling, or knowingly repeated unauthorized use can still justify proportionate enforcement when supported by evidence.

## 9. Refund, reversal, and entitlement correction

If Apple, Google, Xsolla, the contracting merchant, or mandatory law determines that a minor-related transaction must be refunded, reversed, canceled, or treated as invalid, TycoonX should correct the **specific corresponding entitlement or purchased value**.

Do not remove unrelated legitimately purchased value merely because another family transaction is disputed.

Examples:

- refund of one 500-Diamond purchase can justify correction of the corresponding purchased value, subject to mandatory law and actual consumption/transfer state;
- it does not automatically justify wiping unrelated Diamonds bought in another valid transaction;
- refund of one 30-Day VIP transaction can affect that transaction's entitlement, but it does not automatically cancel Lifetime VIP bought separately;
- a disputed Lifetime VIP purchase does not automatically invalidate an unrelated still-valid 30-Day VIP;
- a parent's valid dispute does not authorize CK-Labs to create a new real-world debt or silently charge another payment method.

Where disputed value has already been spent or transferred, use the existing transaction-specific correction and consumer-remedy gates. Do not invent a real-world debt against a minor from an in-game negative balance without specific lawful basis and legal review.

## 10. 30-Day VIP and Lifetime VIP safeguards

Minor-purchase handling must preserve the existing product distinctions.

### One-time 30-Day VIP

- remains one-time and non-renewing;
- parental approval does not convert it into recurring billing;
- a second approval does not restart the original entitlement unless it belongs to a separate valid later purchase;
- refund or invalidation affects the transaction-specific entitlement subject to mandatory rights;
- restore and family-account changes do not create a fresh 30-day clock.

### Lifetime VIP

- remains a one-time entitlement sold only during selected genuine sales windows;
- parental approval of one sale does not create continuous permission to buy later offers;
- ending the sales window does not cancel a valid approved purchase;
- a later parental dispute must be reconciled to the specific provider transaction;
- age-related account restrictions do not by themselves convert Lifetime VIP into 30-Day VIP or invent an expiry;
- if the underlying transaction is valid and the account remains eligible, one valid purchase still produces one Lifetime VIP entitlement.

## 11. Diamonds and spending controls

Diamonds are virtual game currency, but a child-facing purchase flow still requires transparent real-money pricing and appropriate purchase controls where applicable.

Do not use the Diamond layer to obscure the real cost of a child-facing purchase. Where EU/EEA virtual-currency pricing rules require real-money price information for purchasable virtual currency or purchasable in-game content, preserve those disclosures.

Where provider parental controls or spending limits apply, TycoonX must not deliberately route around them merely to increase conversion.

A technical ability to complete an alternative web purchase is not automatically legal authority to bypass a parent-controlled store purchase restriction.

## 12. Account age changes and migration

A user's age status can change over time. The system must not corrupt entitlement history when that happens.

Examples:

- a supervised minor becomes an adult;
- a Family Link account becomes unsupervised;
- Apple Ask to Buy is later disabled where Apple permits it;
- a user changes country and applicable family settings change;
- CK-Labs migrates authentication providers;
- a parent-supported account is recovered after compromise.

Do not rewrite old transaction authorization history merely because the account's current age status changed. Historical transactions remain tied to the evidence and rules applicable to the relevant transaction.

## 13. Evidence and data minimization

For a representative minor-related paid transaction, release evidence should preserve only what is reasonably needed, such as:

- TycoonX account identifier;
- provider and product identifier;
- provider transaction/order/purchase-token reference;
- purchase state;
- price and currency;
- purchase timestamp;
- available supervised/family/parental-approval state relevant to that transaction;
- entitlement delivery/correction record;
- refund, reversal, or dispute state if one exists;
- support decision and reason where manual review occurred.

Do **not** use release evidence to store:

- Apple, Google, Xsolla, email, or bank passwords;
- OTP/TAN/SMS/authenticator codes;
- CVV/CVC;
- full card numbers;
- authentication backup codes;
- full government-ID copies merely because a minor-related purchase was reviewed, unless CK-Labs itself has a specific lawful necessity and appropriate safeguards.

If a provider already completed required parental identity verification, prefer provider status/reference evidence over copying the verification document into TycoonX.

## 14. Support decision tree

When a parent, guardian, or user reports a possible minor purchase:

1. Identify the exact transaction and provider.
2. Freeze only risky future writes if necessary; do not destroy unrelated entitlement state.
3. Determine whether the transaction was Apple, Google Play Billing, Xsolla, or another authorized channel.
4. Check the provider's authoritative transaction state.
5. Check available transaction-specific family/parental approval evidence.
6. Determine whether the dispute is authorization, account compromise, duplicate billing, product delivery, withdrawal/refund, conformity, or suspected deliberate abuse.
7. Route the monetary refund request through the contracting merchant/provider where that provider controls the process.
8. Apply CK-Labs entitlement correction only after the authoritative transaction/remedy outcome supports it.
9. Preserve unrelated legitimate purchases.
10. Record the reason for any fraud or account-enforcement decision separately from the payment correction.

## 15. Mandatory regression scenarios

Before release of any new minor-facing or family-payment purchase flow, test at least these scenarios:

1. German user under seven attempts a direct web purchase without a verified representative flow.
2. German user aged 7-17 attempts a purchase where required representative authorization is absent.
3. German minor pays with means plausibly provided for free disposal and Support incorrectly assumes § 110 always resolves the case.
4. Apple Ask to Buy request is declined.
5. Apple Ask to Buy is approved but the underlying purchase never validly completes.
6. Apple Ask to Buy is approved and one valid purchase completes exactly once.
7. Google Family Link approval request is still pending.
8. Google Play purchase approval succeeds but Google purchase remains `PENDING`.
9. Google purchase becomes `PURCHASED` after approval and grants exactly once.
10. Google Family Link is enabled but the player opens an Xsolla checkout; Google approval is not reused as Xsolla consent.
11. Xsolla checkout identifies a minor and the configured parental-verification path is completed.
12. Xsolla checkout identifies a minor but no required lawful authorization path is available; checkout is blocked rather than silently approved.
13. Parent disputes a genuine unauthorized Diamond purchase; the account is not automatically labeled fraudulent.
14. Repeated coordinated chargeback abuse is supported by evidence; payment correction and account enforcement are recorded separately.
15. Refunded minor-related Diamond purchase removes only the corresponding invalid purchased value, subject to mandatory law.
16. Refunded 30-Day VIP does not remove unrelated Lifetime VIP.
17. Disputed Lifetime VIP does not erase unrelated purchased Diamonds.
18. A minor becomes an adult; historic transaction evidence is not rewritten.
19. A child-directed promotion says "ask your parents to buy" and fails release review under the direct-exhortation rule.
20. A general adult-facing promotion visible to some minors is reviewed on actual audience/design/context rather than automatically treated as point 28.
21. Support investigates a minor purchase without requesting passwords, CVV, OTP, or full card data.
22. Account compromise and parental authorization dispute occur together; both issues are classified separately.

## 16. Release evidence checklist

Before enabling or materially changing a purchase flow that can be used by minors or supervised accounts, record:

- [ ] platform/payment channel;
- [ ] age/supervision behavior relevant to that channel;
- [ ] parental approval mechanism actually available;
- [ ] whether approval applies only to that channel;
- [ ] authoritative payment-state evidence;
- [ ] product and entitlement mapping;
- [ ] refund/dispute route;
- [ ] support escalation route;
- [ ] privacy/data-minimization review;
- [ ] child-focused marketing review;
- [ ] direct-exhortation review;
- [ ] Diamonds real-money-price/transparency review where applicable;
- [ ] 30-Day VIP one-time/non-renewing check;
- [ ] Lifetime VIP limited-window and one-entitlement check;
- [ ] idempotency test;
- [ ] unrelated-entitlement isolation test.

## 17. Current-source watchlist

Re-check these before a material launch or payment-flow change because provider behavior can change:

- German BGB §§ 2, 104, 107, 108 and 110;
- GDPR Article 8 where consent-based child processing is relevant;
- Directive 2005/29/EC Annex I point 28 and current Commission guidance on direct exhortations to children;
- current CPC Network guidance/principles for in-game virtual currencies;
- Apple Ask to Buy, Family Sharing, child-account, and age-rating rules;
- Google Play Family Link, family payment method, purchase approvals, and alternative-billing scope;
- Xsolla General Terms, Privacy Policy, parental-control configuration, refund terms, and merchant setup.

Do not hard-code a provider age threshold or parental-control feature merely because it existed when this gate was written. Verify the actual country, provider, product, and live project configuration.

## 18. Canonical-document impact

This gate operationalizes public meaning that already exists in the canonical TycoonX documents:

- the Terms already say that local age and parental-authorization requirements must be satisfied;
- the Privacy Policy already contains a children/age-control section and separates legally required consent from ordinary use;
- the Purchases & Refunds Policy already separates Apple, Google Play, and Xsolla transactions and preserves mandatory rights;
- existing payment gates already require authoritative provider confirmation and transaction-specific correction.

Therefore this release gate does **not** by itself materially change the canonical English Terms, Purchases & Refunds Policy, Privacy Policy, or Community Standards and does not reopen the completed localization queue.

## 19. References checked September 1, 2026

- German Civil Code (BGB) §§ 2, 104, 107, 108 and 110, official federal text at `gesetze-im-internet.de`.
- Directive 2005/29/EC, Annex I point 28, EUR-Lex.
- European Commission, CPC Network Key Principles on in-game virtual currencies and June 3, 2025 stakeholder workshop summary.
- Apple Support, Ask to Buy guidance, current 2026 publication.
- Google Play Help, purchase approvals and family payment method guidance.
- Xsolla General Terms, Privacy Policy, and Parental Controls materials.

This is a release-control document, not a substitute for transaction-specific legal advice where a disputed minor contract raises uncertain facts or mandatory national-law consequences.
