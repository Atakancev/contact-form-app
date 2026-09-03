# TycoonX German Consumer ADR / Retired EU ODR Platform Release Gate

**Status:** Internal legal/commercial release gate for CK-Labs  
**Checked against current law:** September 3, 2026  
**Applies to:** TycoonX website, Terms, support, payment disputes, entitlement disputes, German consumer complaints, Apple App Store purchases, Google Play purchases, and the official TycoonX webshop using Xsolla.

## 1. Purpose

This gate prevents two opposite mistakes:

1. keeping a stale link or statement that tells German/EU consumers to use the former European Commission Online Dispute Resolution platform; and
2. assuming that the closure of that platform eliminated Germany's separate consumer-conciliation information duties under the Verbraucherstreitbeilegungsgesetz (VSBG).

The former EU ODR platform is closed. Regulation (EU) 2024/3228 repealed Regulation (EU) No 524/2013 with effect from **July 20, 2025**. Complaints could no longer be submitted from March 20, 2025, and the platform was discontinued by July 20, 2025.

TycoonX must therefore not tell players that the old EU ODR platform is available, must not keep the obsolete `ec.europa.eu/consumers/odr` link in current consumer-facing legal/support copy, and must not describe submission through that platform as a current remedy.

The European Commission now maintains consumer-redress information and a list of recognised consumer ADR bodies. That does not mean CK-Labs is automatically legally obliged to participate in every ADR procedure.

## 2. Current German VSBG duties remain separate

The German VSBG remains in force. Current § 36 and § 37 duties must be evaluated independently of the retired EU ODR platform.

### § 36 VSBG: general website / Terms information

A trader that maintains a website or uses general terms and conditions must assess § 36 VSBG.

Under current § 36(1), the trader generally has to communicate clearly and accessibly:

- the extent to which it is willing or legally obliged to participate in consumer-conciliation proceedings; and
- where it has committed itself to participate or is legally obliged to participate, the competent consumer-conciliation body, including the legally required address/website information and participation statement.

Under current § 36(3), a trader that employed **10 or fewer persons on December 31 of the preceding year** is exempt from the information duty in § 36(1) no. 1.

Important: this is not a universal exemption from all VSBG obligations. The statutory small-employer exception is tied to § 36(1) no. 1. Do not convert it into a blanket statement that a small business has no consumer-conciliation duties.

### Required CK-Labs evidence

Before publishing or changing a German ADR statement, retain a dated internal record of:

- the number of persons employed by the relevant CK-Labs contracting business on December 31 of the preceding year;
- whether CK-Labs has voluntarily committed to participate before any consumer-conciliation body;
- whether any law, platform arrangement, sector-specific rule, contract, settlement or undertaking makes participation mandatory;
- the exact contracting entity for the relevant TycoonX channel; and
- the competent body, if one must be named.

Do not rely on an old employee-count assumption indefinitely. Recheck after material hiring, restructuring, business transfer, merger, successor-operator change or other event that can affect the legal classification.

## 3. § 37 VSBG applies after an unresolved consumer dispute

Current § 37 VSBG is operationally important even where a § 36(3) small-employer exemption applies.

If a dispute arising from a consumer contract **could not be settled directly between the trader and the consumer**, the trader must provide the consumer, in text form, with information about a competent consumer-conciliation body, including its address and website, and must state whether the trader is willing or obliged to participate in proceedings before that body.

This post-dispute step must not be replaced by a generic support closure such as:

- "case closed";
- "contact Apple";
- "contact Google";
- "contact Xsolla";
- "use the EU ODR platform"; or
- "we do not offer refunds".

Whether § 37 applies, and which trader/body is relevant, must be determined from the actual contract and dispute.

### Support workflow trigger

A support case should be treated as a potential § 37 trigger when all of the following are true:

1. the complainant is acting as a consumer;
2. the complaint concerns a consumer contract within the VSBG scope;
3. CK-Labs is the relevant trader for the disputed contractual issue; and
4. ordinary complaint handling has reached a genuine impasse and the dispute has not been resolved.

The § 37 communication should be delivered in a durable text form appropriate to the case, such as email or another retained text-form message, and a copy should be preserved in the support record.

## 4. Do not invent ADR participation

TycoonX must not state that CK-Labs "participates", "must participate", "will participate", or "refuses all ADR" unless the statement reflects the current factual and legal position.

The safest founder-protective rule is accuracy, not an unnecessarily broad promise.

A voluntary decision to participate in one specific dispute does not automatically mean CK-Labs has permanently committed to participate in all future disputes unless the wording, applicable rules or another undertaking creates that commitment.

Likewise, declining voluntary ADR in a case does not remove:

- mandatory consumer rights;
- statutory court remedies;
- refund or withdrawal rights;
- digital-content/digital-service conformity remedies;
- data-protection rights;
- Digital Services Act remedies where separately applicable; or
- an ADR participation duty that is independently mandatory.

## 5. Resolve the correct consumer-conciliation body at the time of notice

Do not hardcode an old arbitration body into TycoonX support templates without periodic verification.

Before sending a § 37 notice or publishing a body required under § 36(1) no. 2:

- identify whether a sector-specific recognised consumer-conciliation body is competent;
- if relying on the federal universal consumer-conciliation body, confirm that it is competent for the dispute at that time;
- verify the current official name, postal address and website;
- verify any jurisdictional, value, language, subject-matter or trader-participation conditions; and
- retain the source and date checked.

Use the current German/EU official ADR-body lists rather than a copied address from an old Terms template.

## 6. Payment-channel responsibility must be separated from TycoonX responsibility

ADR routing must follow the actual disputed contract and responsibility. Do not automatically route every payment complaint to CK-Labs, and do not automatically send every player to the payment provider.

### Apple App Store

For an Apple App Store purchase, Apple may control payment processing and the App Store refund-request process. CK-Labs remains responsible for TycoonX-side matters such as entitlement delivery, account mapping, restoration where applicable, and game-state corrections within CK-Labs's responsibility.

A dispute can contain both provider-side and CK-Labs-side issues. Support must separate them rather than using Apple's refund role as a blanket disclaimer.

### Google Play

Google may process the Play transaction and eligible refund/reversal actions under its rules. CK-Labs remains responsible for TycoonX entitlement fulfilment, server reconciliation and game-side corrections within its control.

Google's role does not automatically eliminate a German § 37 duty for a distinct unresolved consumer dispute for which CK-Labs is the relevant trader.

### Xsolla webshop

For the official TycoonX webshop, the transaction-specific Xsolla entity may act as merchant of record and may be responsible for payment processing, transaction taxes/VAT, fraud screening, refunds, disputes and chargebacks under the applicable checkout terms.

CK-Labs must still handle the TycoonX-side entitlement and service obligations that remain its responsibility.

Before issuing an ADR notice, determine whether the unresolved dispute concerns:

- the Xsolla payment contract;
- the TycoonX digital entitlement/service supplied by CK-Labs;
- both; or
- another provider relationship.

Do not misidentify CK-Labs as the merchant for a transaction merely because the product is used inside TycoonX, and do not misidentify Xsolla as responsible for a TycoonX server-state error merely because it processed the payment.

## 7. Refunds, chargebacks and ADR are different processes

ADR is not a substitute for authoritative payment-state reconciliation.

A consumer opening, requesting or mentioning an ADR procedure must not by itself:

- create a refund;
- create a chargeback;
- mark a payment as fraudulent;
- revoke unrelated entitlements;
- remove unrelated Diamonds;
- create a negative Diamond balance;
- restart or shorten 30-Day VIP;
- add an expiry to valid Lifetime VIP; or
- suspend an account for "payment abuse".

Entitlement changes require an independent lawful basis such as an authoritative refund/reversal/chargeback, a demonstrated invalid grant, fraud/exploit findings supported by evidence, or another basis allowed by the Terms and mandatory law.

A consumer's use of an ADR, complaint, court or statutory-remedy channel must not be treated as retaliation-worthy conduct.

## 8. Product-specific rules remain intact

### Diamonds

Purchased Diamonds remain governed by the purchase transaction, authoritative payment record, the TycoonX entitlement ledger and mandatory consumer rights.

An unresolved complaint about a Diamond purchase may require a § 37 notice where the statutory conditions are met, but the notice itself does not remove, consume, freeze or refund Diamonds.

### One-time 30-Day VIP

30-Day VIP remains a **one-time, non-renewing 30-day entitlement**. ADR handling must not accidentally transform it into a subscription, extend/restart it without a proper basis, or alter the recorded activation period merely because a complaint was filed.

### Lifetime VIP

Lifetime VIP remains a one-time promotional entitlement offered only during **selected genuine sales windows**. It may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability.

A dispute about an old Lifetime VIP purchase must be evaluated against the actual purchase record, the offer shown at the time, the commercial-lifetime wording, mandatory consumer law and the current service/account state. A later different sales price or the absence of a future sales window does not by itself create a refund or price-match right.

## 9. Account compromise, fraud and exploit investigations

A complaint submitted by a compromised account or concerning a compromised payment method may justify proportionate security controls, but ADR status and fraud status are separate.

Do not classify the legitimate account owner as a fraudster merely because:

- a disputed transaction exists;
- the payment account was compromised;
- an attacker consumed Diamonds;
- an attacker initiated a chargeback; or
- the consumer escalated the complaint to an ADR body.

Preserve relevant account-security and payment evidence, use reasonable verification, and separate restoration/security questions from any final misconduct finding.

## 10. No stale EU ODR language in current legal/support copy

Current player-facing TycoonX legal and support copy must not contain wording that presents the former European ODR platform as available.

Examples of stale language to remove include statements such as:

- "The European Commission provides an Online Dispute Resolution platform at ...";
- "You may submit your complaint through the EU ODR platform";
- "OS-Plattform der EU" followed by the retired complaint URL; or
- a live hyperlink to `ec.europa.eu/consumers/odr` offered as a present dispute route.

Historical/internal legal notes may mention the retired platform when they clearly state that it has been discontinued. Technical archives may retain historical records if needed for evidence, but those records must not be surfaced as current consumer instructions.

## 11. Current Commission consumer-redress resources are not an automatic participation promise

The European Commission's current consumer-redress pages and official list of ADR bodies can be used to identify recognised bodies and consumer information.

Linking to general consumer information does not itself mean CK-Labs agrees to participate before every listed body.

Any public wording must distinguish:

- where the player can find consumer-redress information;
- whether CK-Labs is willing or legally obliged to participate in a particular ADR procedure; and
- which body is actually competent.

## 12. Directive (EU) 2025/2647: future implementation watch, not a current German shortcut

Directive (EU) 2025/2647 entered into force on **January 19, 2026**, but Member States have until **March 20, 2028** to transpose the amendments and are to apply them from **September 20, 2028**.

Do not present its future harmonised procedures as already applicable German national obligations merely because the Directive is in force at EU level.

The future framework includes, among other changes, a response obligation where an EU-established trader is contacted by a competent ADR entity and asked whether it agrees to participate: the response period is not to exceed **20 working days**, with extension in complex/exceptional cases up to **30 working days** under the Directive's conditions.

### Future watch

Before September 20, 2028, or earlier if Germany transposes the Directive sooner, re-audit:

- the German VSBG implementation;
- any new response deadlines;
- website/Terms information duties;
- cross-border ADR tooling;
- human-review requirements if automated systems are used in ADR processing;
- the competent body/contact data; and
- whether a canonical TycoonX legal-text change is required.

Do not reopen all localizations until the canonical English meaning materially changes.

## 13. Support template requirements

A German consumer-dispute closure template must be structured so staff can insert verified case-specific data rather than making broad promises.

Minimum fields:

- consumer name/account reference as reasonably necessary;
- affected contract/order/transaction identifier;
- short statement that direct resolution was unsuccessful;
- competent consumer-conciliation body's verified name;
- verified postal address;
- verified website;
- whether CK-Labs is willing or obliged to participate in that procedure;
- date the information was sent; and
- support-case evidence reference.

Do not include unnecessary payment-card data, passwords, authentication secrets, full provider tokens or unrelated private messages in the ADR notice.

## 14. No retaliation and no waiver of mandatory remedies

Nothing in TycoonX legal/support copy may state or imply that a consumer loses statutory rights because the consumer:

- complains;
- asks for a refund;
- exercises a withdrawal right;
- contacts an ADR body;
- brings a court claim;
- contacts a consumer-protection authority; or
- challenges a CK-Labs entitlement decision.

CK-Labs may defend itself, correct inaccurate claims and rely on valid contractual/platform rules, but may not create an unfair contractual penalty for exercising mandatory legal remedies.

## 15. Service shutdown or business transfer

Permanent TycoonX shutdown, a sale of the business, merger, reorganisation or successor operator does not automatically erase already-arisen consumer disputes.

Before a planned permanent shutdown or business transfer:

- preserve legally required complaint/transaction records for the applicable retention period;
- keep an accessible route for unresolved consumer disputes for as long as legally required;
- identify which entity remains responsible for historical consumer contracts;
- update any § 36 public ADR statement if the operator/obligation changes; and
- ensure unresolved disputes that reach the § 37 stage receive the correct text-form information.

Mandatory consumer remedies and valid claims survive according to applicable law even if the Service changes operator or closes.

## 16. Outages and provider failures

An outage at Apple, Google, Xsolla, hosting, authentication, email or support infrastructure can delay operational handling, but it does not permanently erase a statutory duty.

Maintain a recoverable queue for unresolved consumer-dispute notices and record:

- when the duty was identified;
- what provider failure prevented the ordinary workflow;
- what temporary communication was used where possible; and
- when the required information was ultimately sent.

Do not backdate notices.

## 17. Release evidence checklist

Before treating this gate as production-ready, retain evidence for all applicable items:

- [ ] no current player-facing TycoonX legal page links to the retired EU ODR complaint platform as an available remedy;
- [ ] no current support macro tells consumers to file through the retired EU ODR platform;
- [ ] CK-Labs's current § 36 VSBG classification is dated and documented;
- [ ] prior-year December 31 employee-count evidence exists if relying on § 36(3);
- [ ] any voluntary or mandatory ADR participation commitment has been checked;
- [ ] competent-body data is verified from a current official source before use;
- [ ] support has a § 37 trigger and text-form closure workflow;
- [ ] Apple, Google Play, Xsolla and CK-Labs responsibilities are separated transaction by transaction;
- [ ] ADR escalation does not automatically change Diamonds or VIP entitlements;
- [ ] account-compromise cases do not automatically become fraud findings;
- [ ] shutdown/successor procedures preserve unresolved dispute handling where required;
- [ ] a future-law reminder exists for Directive (EU) 2025/2647 / German transposition before September 20, 2028; and
- [ ] the exact displayed brand remains `TycoonX`.

## 18. Authoritative legal references checked for this gate

- **German VSBG § 36**: current general consumer-conciliation information duty, including the § 36(3) exemption from § 36(1) no. 1 for traders with 10 or fewer persons employed on December 31 of the preceding year.
- **German VSBG § 37**: post-dispute text-form information about a competent consumer-conciliation body and whether the trader is willing/obliged to participate.
- **Regulation (EU) 2024/3228**: repeal of Regulation (EU) No 524/2013 and discontinuation of the European ODR platform, with repeal effective July 20, 2025.
- **European Commission Consumer Redress**: current Commission notice that the former ODR platform is discontinued and current access to consumer-redress/ADR-body information.
- **Directive (EU) 2025/2647**: entered into force January 19, 2026; transposition due March 20, 2028; national measures are to apply from September 20, 2028; future ADR-entity contact response framework includes a 20-working-day period, extendable under the Directive's conditions to no more than 30 working days.

## 19. Canonical/localization decision

This gate does **not** by itself require a canonical Terms, Purchases & Refunds Policy, Privacy Policy or Community Standards change.

Reason: the present hardening is primarily an operational German dispute-resolution classification, support-routing and stale-ODR-removal control. A canonical legal-text change becomes necessary only if current public TycoonX copy contains stale ODR instructions, if CK-Labs's participation status needs to be published under applicable § 36 duties, or if another material consumer-facing meaning changes.

If a canonical English document is materially changed later, reopen only the affected localized document type and synchronize all 25 locales in the required order.
