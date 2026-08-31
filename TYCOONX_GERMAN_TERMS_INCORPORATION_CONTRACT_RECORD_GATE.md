# TycoonX German Terms Incorporation & Contract Record Release Gate

**Last reviewed: August 31, 2026**

Owner: CK-Labs  
Scope: TycoonX account creation, Terms acceptance, paid product screens, CK-Labs-controlled web ordering, Apple App Store purchases, Google Play purchases, the official TycoonX webshop using Xsolla, material Terms changes, contract confirmations, and dispute evidence.

## Purpose

TycoonX already has detailed public Terms, Purchases & Refunds, Privacy, Community Standards, payment-channel rules, withdrawal safeguards, price rules, and checkout requirements. This gate addresses a separate enforcement risk: **proving which contract terms were actually made available, incorporated, accepted, and preserved for the relevant account or transaction**.

A legally strong Terms page is not enough if CK-Labs cannot show that the applicable terms were properly incorporated into the relevant contract or if the only historical evidence is a mutable web page showing today's wording.

This gate is operational. It does not create a new consumer waiver, does not override mandatory law, and does not convert Apple, Google Play, or Xsolla transaction records into proof of acceptance of a CK-Labs term that the player was never actually shown.

## P0: identify the contract layer before relying on any Terms version

For every paid TycoonX channel, distinguish at least these layers where applicable:

1. the player's general TycoonX account/service relationship with CK-Labs;
2. the product-specific TycoonX offer for Diamonds, one-time 30-Day VIP, Lifetime VIP, or another entitlement;
3. the payment or purchase contract controlled by Apple, Google Play, Xsolla, or another merchant/payment provider;
4. the applicable platform license/EULA layer; and
5. mandatory consumer law that applies regardless of contract wording.

Do not assume that one acceptance event automatically incorporates every other party's terms.

Examples:

- accepting the TycoonX Terms when creating an account does not by itself prove acceptance of a later Xsolla merchant contract;
- receiving an Apple transaction record does not by itself prove acceptance of a newly changed CK-Labs Terms version;
- a Google Play purchase token proves important purchase state, but not that a hidden CK-Labs clause was incorporated;
- an Xsolla order-confirmation email may evidence Xsolla's contract and transaction, but CK-Labs must separately prove any CK-Labs term it needs to enforce against the player.

## 1. German BGB § 305: incorporation of standard terms

Where CK-Labs relies on pre-formulated standard terms against a German consumer, the release design must preserve the requirements of BGB § 305(2) where applicable.

Before or at contract conclusion, the user must receive:

- an express reference to the applicable terms, unless a statutory exceptional method applies;
- a reasonable opportunity to review the content in a way that also appropriately considers a disability recognizable to the trader; and
- a real basis for agreement to those terms.

Operationally:

- do not hide the Terms link after the final account or purchase action;
- do not make the link unreadably small or visually indistinguishable from non-interactive text;
- do not present only a vague statement such as "terms apply" without a usable way to access the terms that CK-Labs later wants to enforce;
- the version offered for review must be the version CK-Labs records as applicable to that acceptance event; and
- if acceptance is required, the acceptance control must not be pre-completed in a way that makes the user's agreement fictitious.

A broad historical account acceptance should not be treated as consent to a materially different future contractual obligation merely because the same URL now contains new text.

## 2. Specific promises and checkout terms can prevail

BGB § 305b gives individually agreed terms priority over standard terms.

For TycoonX this means a clear product-specific promise, confirmed checkout term, support settlement, or other genuine individual agreement must not be silently overridden by contradictory boilerplate.

Examples:

- if a completed Lifetime VIP checkout clearly promised a particular included feature for that transaction, CK-Labs should not assume a generic clause can erase that specific promise where mandatory or applicable contract law gives the specific agreement priority;
- if Support agrees in writing to restore a verified entitlement as settlement of a specific dispute, the historical Terms version should not be used to pretend that agreement never happened; and
- the final confirmed purchase price for a completed one-time purchase remains the transaction price even if a general pricing page changes later, subject to mandatory law and a valid correction of an obvious error where legally permitted.

## 3. No hidden surprising term strategy

BGB § 305c(1) excludes unusually surprising standard terms from becoming part of the contract where the other party would not reasonably expect them in the circumstances.

Do not attempt to place a commercially important restriction in an unrelated or misleading location merely to increase CK-Labs' theoretical protection.

High-risk examples include trying to hide:

- a recurring payment inside wording for a product presented as one-time;
- a transfer of Lifetime VIP to a materially shorter fixed duration;
- a blanket loss of mandatory refunds or withdrawal rights;
- a broad right to erase unrelated purchased Diamonds because one separate transaction was disputed; or
- a forced arbitration/forum term inconsistent with mandatory consumer jurisdiction.

BGB § 305c(2) also places ambiguity risk on the user of the standard terms. Founder protection therefore comes from clear drafting and consistent checkout behavior, not deliberately broad ambiguity.

## 4. Unincorporated or invalid clauses do not void the whole contract automatically

BGB § 306 generally preserves the rest of the contract when standard terms were not incorporated or are invalid, and statutory law fills the resulting gap.

Do not operationally assume:

- "the user clicked accept, therefore every clause is enforceable"; or
- "if one clause fails, the entire purchase disappears and CK-Labs can erase the entitlement."

Entitlement correction must still be tied to the actual transaction, provider state, valid contract terms, and mandatory law.

## 5. Transparency remains a separate requirement

Under BGB § 307, lack of clarity and comprehensibility can itself contribute to an unfair standard term.

For TycoonX, product terms that materially affect paid value should remain especially clear about:

- purchased Diamonds versus promotional/free Diamonds;
- one-time 30-Day VIP versus any future recurring subscription;
- limited-window Lifetime VIP versus a promise that TycoonX operates forever;
- refund/reversal consequences versus unrelated paid value;
- regional pricing versus individualized automated pricing;
- platform/payment-provider responsibilities versus CK-Labs entitlement responsibilities; and
- future changes versus already completed one-time purchases.

This gate does not authorize a clause merely because it is prominently displayed. Substantive fairness and mandatory consumer law still apply.

## 6. Version-pinned acceptance evidence

Where CK-Labs relies on acceptance of the TycoonX Terms or another CK-Labs contractual document, keep proportionate evidence sufficient to reconstruct the event without retaining unnecessary personal data.

A strong record can include:

- document name;
- public version identifier and/or publication date;
- cryptographic hash or immutable content identifier for the exact accepted text;
- acceptance timestamp;
- acceptance surface, such as account creation, material Terms update, or CK-Labs-controlled checkout;
- language/locale shown;
- authenticated account reference where appropriate;
- app/web version where relevant to reproduce the UI;
- whether acceptance was required or the document was informational only; and
- the specific product/order reference where the acceptance was transaction-specific.

Do not record a boolean such as `termsAccepted = true` with no way to identify which Terms version it refers to if CK-Labs later needs that record for a material dispute.

Do not use this gate as a reason to collect passports, payment card details, device fingerprints, or unrelated behavior merely to prove Terms acceptance.

## 7. Preserve the historical document itself

For every Terms version that can still matter to an account, purchase, dispute, chargeback, entitlement, or limitation period, preserve an immutable or reproducible historical copy.

A git commit can be useful internal evidence, but consumer-facing contractual evidence should not depend on the user understanding Git or repository history.

Where an old version is archived publicly, label it as historical so it is not mistaken for the current Terms. Where it is retained only internally, CK-Labs must still be able to reproduce the exact content relied upon in a dispute.

Never rewrite the historical acceptance record so that an old acceptance appears to have been given to the current Terms text.

## 8. BGB § 312i: reproducible terms at electronic contract conclusion

The existing TycoonX German e-commerce gate requires applicable electronic ordering systems to let the customer retrieve and save the contract terms, including applicable standard terms, in reproducible form at the time of contract conclusion.

This gate adds the evidence requirement:

- record which contractual document/version the user could retrieve and save at that moment;
- do not point the historical record only to a mutable `latest` URL;
- if the checkout provider controls the contract text, retain provider evidence showing what the customer received or could reproduce; and
- if CK-Labs controls a separate product-specific term, keep that version linked to the relevant order or offer evidence.

## 9. BGB § 312f: durable-medium confirmation is not just a web link

Where CK-Labs is the responsible trader for a covered German distance contract, BGB § 312f requires the contract confirmation on a durable medium within the statutory timing rules.

The confirmation must reproduce the contractual content and required pre-contract information unless that information was already supplied on a durable medium in the legally sufficient way.

A mutable Terms webpage that CK-Labs can later change unilaterally is not automatically a durable-medium contract confirmation merely because the email says "see our Terms here."

The Court of Justice held in **C-49/11, Content Services** that making required distance-contract information available only through a hyperlink on the trader's website did not satisfy the relevant durable-medium requirement in the predecessor EU distance-selling framework. The current Consumer Rights Directive guidance continues to use that judgment when explaining durable medium.

Operationally, where CK-Labs owns the § 312f duty, use a method such as an email or downloadable immutable document that gives the consumer the required personally addressed information in a form that remains accessible for an adequate period and can be reproduced unchanged.

Do not treat a screenshot generated only by CK-Labs after a dispute has started as equivalent to the confirmation the consumer should have received at contract formation.

## 10. Withdrawal evidence remains transaction-specific

If a digital-content transaction can lose a withdrawal right after early performance, preserve the exact transaction-specific consent, acknowledgement, and durable-medium confirmation required by law.

Do not infer those elements from:

- general acceptance of the TycoonX Terms;
- merely launching the app;
- merely crediting purchased Diamonds;
- an old consent from another product; or
- an Apple, Google Play, or Xsolla transaction ID that contains no such consent evidence.

Purchased and unused Diamonds retain the separate withdrawal treatment already required by the canonical Terms and Purchases & Refunds Policy where an applicable statutory withdrawal right exists.

One-time 30-Day VIP and Lifetime VIP also remain separately classified digital entitlements. Immediate activation or one-time pricing does not by itself prove the loss of every mandatory withdrawal or digital-product remedy.

## 11. Apple App Store evidence split

Apple transaction information is authoritative evidence for important App Store purchase facts, but it is not a universal CK-Labs Terms-acceptance ledger.

Release evidence should keep separate:

- the Apple product identifier;
- verified transaction/original transaction identifiers as applicable;
- transaction date/state and revocation/refund information;
- the TycoonX account to which CK-Labs delivered the entitlement where lawfully linkable;
- the applicable Apple license/EULA path; and
- the CK-Labs Terms version actually shown/accepted through a CK-Labs-controlled surface, if CK-Labs needs to rely on that acceptance.

Do not invent a CK-Labs acceptance timestamp from the Apple transaction timestamp.

A restored Lifetime VIP transaction can prove an Apple entitlement even where the user's TycoonX account was later deleted; restoration rules remain governed by the canonical Terms, Apple rules, and mandatory law.

## 12. Google Play evidence split

Google Play recommends server-side verification using the purchase token and provides transaction/order information for one-time products. Those records are important for entitlement and refund reconciliation.

Keep separate:

- product ID;
- purchase token;
- order ID when available;
- purchase state;
- acknowledgement/consumption state where relevant;
- refund/void state;
- account linkage using supported privacy-preserving identifiers where configured; and
- the CK-Labs Terms version separately shown/accepted where CK-Labs relies on it.

A pending Google Play purchase with no completed purchase state must not become a fake Terms-acceptance event or a paid entitlement.

Do not deny an otherwise valid purchase merely because an optional account-linking identifier was not present if the authoritative purchase can be safely reconciled another way.

## 13. Xsolla evidence split

Xsolla's current Refund Policy states that, under the covered arrangement, the customer's transaction is with the applicable Xsolla company, the relevant Xsolla entity can depend on payment method, and the contract is formed when Xsolla sends the order-confirmation email.

For the official TycoonX webshop, retain transaction-specific evidence of:

- the actual Xsolla entity/merchant shown for the selected payment method;
- the applicable Xsolla policy version/type shown at checkout;
- product, price, currency, taxes, and unavoidable charges;
- the Xsolla transaction/order identifier;
- the provider's payment/order confirmation state;
- the order-confirmation/receipt behavior; and
- the TycoonX entitlement delivered after authoritative successful payment confirmation.

If CK-Labs also relies on its own Terms for the service/account relationship, preserve the separate CK-Labs incorporation/acceptance evidence. Do not merge the Xsolla merchant contract and CK-Labs service Terms into one fictional acceptance event.

## 14. Terms changes after release

A new Terms version must have an effective-date and change record.

For an existing player:

- do not overwrite the old acceptance record;
- classify whether the change is informational, applies only to future purchases, changes an ongoing contractual relationship, or requires notice/express consent under applicable law;
- where express consent is required, a banner saying "Terms updated" is not a substitute for that consent;
- where notice is sufficient, keep evidence of the notice method and effective date where material; and
- a Terms update does not retroactively authorize conduct that was unlawful or contradict the final terms of an already completed one-time purchase.

If a material canonical Terms change affects the meaning that localized Terms must preserve, reopen only the Terms localization queue and resynchronize all 25 locales in the required order before marking them current again.

## 15. Account compromise, fraud, chargebacks, and entitlement disputes

Terms-version evidence is useful but must not replace transaction evidence.

Examples:

- a compromised account accepting a later Terms update does not automatically prove that the legitimate owner authorized a disputed purchase;
- a chargeback on one Diamond purchase does not make all historical Terms acceptances invalid;
- a user disputing a Terms version does not automatically prove fraud;
- duplicate entitlement correction should target the duplicate grant rather than unrelated purchased value; and
- where an authoritative provider record conflicts with a manipulated/stale client display, the reliable provider/server record can be used subject to the user's ability to challenge an error and mandatory law.

Preserve unrelated valid purchased Diamonds, 30-Day VIP, and Lifetime VIP unless there is an independent lawful basis to alter them.

## 16. Product-specific evidence

### Purchased Diamonds

Record the exact Diamond product/bundle identifier, purchased quantity, final transaction state, final transaction price/currency, provider/order reference, and the applicable contract/Terms version evidence that CK-Labs actually needs.

Do not use a general virtual-item clause to erase a mandatory withdrawal or conformity remedy.

### One-time 30-Day VIP

Evidence must preserve that the current product is one-time and non-renewing, the activation/start basis, the valid paid-through period, and the relevant product/Terms version.

A later introduction of a recurring VIP SKU must not rewrite old 30-Day VIP purchases as subscriptions.

### Lifetime VIP

Evidence must preserve:

- that the purchase was one-time;
- the genuine limited promotional sales window;
- the final confirmed price/currency;
- the commercial-lifetime meaning disclosed for the offer;
- the product and provider transaction identifiers; and
- the Terms/product wording applicable to that purchase.

A later Lifetime VIP sales window can use a different future price but does not rewrite the earlier completed purchase terms.

## 17. Minimum release evidence matrix

Before relying on this gate as operationally complete, capture at least one representative record for each live paid channel showing:

1. the applicable trader/merchant and contract layer;
2. the product-specific pre-purchase description;
3. the Terms/policy version shown or incorporated where relevant;
4. the exact final purchase state from the provider;
5. the contract/order confirmation route;
6. any legally required durable-medium information;
7. the entitlement delivered by CK-Labs;
8. the refund/withdrawal route;
9. the historical document content that can be reproduced later; and
10. how the record is linked without storing unnecessary personal data.

Also test:

- a user who accepted an older TycoonX Terms version and never accepted a later version requiring express consent;
- a successful purchase immediately before a Terms update;
- a pending purchase that never completes;
- an account-compromise dispute;
- a provider refund/chargeback;
- a restored Lifetime VIP after reinstall/account recovery; and
- a support settlement that creates a specific individual agreement different from generic boilerplate.

## 18. Data minimization and retention

Contract evidence can be legally useful, but do not retain it forever without a reason.

Set retention by category based on:

- contract performance;
- mandatory accounting/tax retention where applicable;
- payment and chargeback periods;
- limitation periods and legal claims;
- security/fraud needs; and
- applicable GDPR storage-limitation requirements.

Separate long-lived evidence such as an order ID, Terms version/hash, amount, currency, and entitlement action from unnecessary gameplay telemetry or message content.

## Current legal and platform checkpoint

Reviewed on August 31, 2026 against:

- German BGB § 305 on incorporation of standard terms: `https://www.gesetze-im-internet.de/bgb/__305.html`
- German BGB § 305b on priority of individual agreements: `https://www.gesetze-im-internet.de/bgb/__305b.html`
- German BGB § 305c on surprising and ambiguous standard terms: `https://www.gesetze-im-internet.de/bgb/__305c.html`
- German BGB § 306 on consequences of non-incorporation/invalidity: `https://www.gesetze-im-internet.de/bgb/__306.html`
- German BGB § 307 on transparency/substantive review: `https://www.gesetze-im-internet.de/bgb/__307.html`
- German BGB § 312f on durable-medium distance-contract confirmation: `https://www.gesetze-im-internet.de/bgb/__312f.html`
- German BGB § 312i on electronic-commerce contract mechanics: `https://www.gesetze-im-internet.de/bgb/__312i.html`
- CJEU C-49/11, Content Services, on a mere mutable website hyperlink not satisfying the relevant durable-medium confirmation requirement: `https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:62011CJ0049`
- European Commission guidance on Directive 2011/83/EU, including durable-medium confirmation: `https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52021XC1229(04)`
- Apple App Store Server API transaction-history documentation: `https://developer.apple.com/documentation/appstoreserverapi`
- Google Play Billing integration and one-time-purchase lifecycle documentation: `https://developer.android.com/google/play/billing/integrate` and `https://developer.android.com/google/play/billing/lifecycle/one-time`
- Xsolla Refund Policy, current June 16, 2026 legal version as surfaced by Xsolla's legal-agreements page: `https://xsolla.com/refund-policy`

## Founder-protective interpretation

This gate does not require CK-Labs to force a new checkbox on every screen, duplicate Apple/Google/Xsolla contract formation, preserve unnecessary personal data, or obtain fresh consent for every non-material legal edit.

It protects CK-Labs by making the legally relevant record reconstructable: **which terms applied, which specific product was offered, who the contracting merchant was, what the provider confirmed, what the user could review, what was sent on a durable medium where required, and which TycoonX entitlement was delivered**.

That evidence is more defensible than relying on a current mutable Terms URL or an undated `accepted = true` flag, while keeping mandatory consumer rights intact.