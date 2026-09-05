# TycoonX EU/German Consumer ADR & Dispute Release Gate

**Status:** release/legal operations gate  
**Reviewed against current law and official guidance:** September 5, 2026

This is the **single TycoonX EU/German consumer ADR / VSBG / former-ODR operational release gate** for CK-Labs. It does not replace the canonical English Terms of Service, Purchases & Refunds Policy, Privacy Policy, Community Standards, transaction-specific platform terms, or mandatory law.

TycoonX went to full release on **September 1, 2026**. Nothing in this gate may describe the live game, current purchases, users, VIP, Diamonds, rewards, or legal terms as beta.

## 1. Core invariant

A consumer dispute must be handled according to the **actual transaction, contracting party, applicable mandatory law, dispute type, payment state, entitlement state, and current ADR rules**.

Do not assume that:

- Apple, Google Play, or Xsolla handling payment/refund infrastructure removes CK-Labs duties that independently apply;
- a provider support process replaces a German VSBG notice owed by CK-Labs;
- a complaint, refund request, chargeback, ADR request, regulator contact, or court claim is itself evidence of fraud or entitlement abuse;
- provider arbitration wording can be copied into CK-Labs Terms;
- the former EU ODR platform still exists;
- the Commission Consumer Redress Portal is simply the old ODR platform under a new name;
- a small-business employee exemption removes every VSBG duty; or
- an ADR route removes non-waivable court, withdrawal, conformity, refund, data-protection, accessibility, DSA, or other consumer rights.

## 2. Former EU ODR platform: closed

Regulation (EU) 2024/3228 discontinued the European Online Dispute Resolution platform. New complaints stopped on **March 20, 2025**, and the old platform was discontinued by **July 20, 2025**.

Release rules:

- Do **not** add or restore `ec.europa.eu/consumers/odr` as a current TycoonX consumer remedy.
- Remove stale wording such as “submit your complaint through the EU ODR platform” from live Terms, checkout, support macros, receipts, emails, legal notices, and localized pages.
- Historical/internal evidence may mention the old system only when clearly labelled as discontinued.
- Do not invent a replacement mandatory link merely because the old ODR duty disappeared.

Official source: https://eur-lex.europa.eu/eli/reg/2024/3228/oj

## 3. Consumer Redress Portal: current resource, different legal role

The European Commission now operates the **Consumer Redress Portal**, including a Solution Finder and directory of certified ADR entities.

It can help consumers and traders identify possible redress routes and ADR bodies. It is **not** a substitute for the transaction-specific competent-body information required by German § 37 VSBG where that duty applies, and linking to the portal does not itself create a CK-Labs promise to participate before every listed ADR body.

Current portal: https://consumer-redress.ec.europa.eu/

## 4. German VSBG § 36: general website / Terms information

Current German law separates § 36 from the post-dispute duty in § 37.

Under **§ 36(1)(1) VSBG**, a trader that maintains a website or uses general terms must, where applicable, state clearly and accessibly whether it is willing or obliged to participate in consumer-conciliation proceedings.

Under **§ 36(3)**, the § 36(1)(1) information duty does not apply where the trader employed **10 or fewer persons on December 31 of the preceding year**.

This exemption is narrow:

- it applies to **§ 36(1)(1)**, not every VSBG obligation;
- it does not remove **§ 36(1)(2)** if CK-Labs has committed or is legally obliged to participate before a particular body;
- it does **not** remove the post-dispute duty in **§ 37 VSBG**; and
- it must be based on dated actual headcount evidence, not labels such as `indie`, `solo`, `small`, `individual`, a store-account type, or an FTE assumption.

At least annually preserve:

- the relevant CK-Labs trader/entity;
- the actual number of persons employed on the preceding December 31;
- whether § 36(1)(1) applies or § 36(3) is relied upon;
- whether CK-Labs has voluntarily committed to ADR participation;
- whether law, membership rules, contract, settlement, platform arrangement, or another binding undertaking creates participation duties; and
- the current public TycoonX wording.

Reassess after hiring, restructuring, sale, merger, reorganization, successor-operator change, or contracting-entity change.

Official source: https://www.gesetze-im-internet.de/vsbg/__36.html

## 5. German VSBG § 37: unresolved consumer-contract dispute

Under **§ 37 VSBG**, if a dispute concerning a consumer contract could not be resolved directly between the trader and consumer, the trader must provide the consumer with information about a competent consumer conciliation body, including its **address and website**, and state whether the trader is **willing or obliged** to participate.

The notice must be provided **in text form**. Employee headcount does not remove this separate post-dispute duty.

Do not send a § 37 notice mechanically after a first support message. Also do not suppress it because an internal ticket was labelled `closed`, `denied`, or `resolved` while the consumer still disputes the outcome.

Support should maintain a state such as `consumer_contract_dispute_unresolved_at` only after a genuine attempt at direct resolution has failed. Preserve the complaint, attempted cure/explanation, consumer response, provider dependency where relevant, final internal position, unresolved timestamp, and sent notice.

The § 37 notice must use currently verified case-specific data:

- competent ADR body name;
- current postal address;
- current website;
- whether CK-Labs is willing to participate; and
- whether CK-Labs is legally or contractually obliged to participate.

Providing a § 37 notice is **not an admission of liability**, not a promise of refund, and not a voluntary ADR commitment where none exists.

Official source: https://www.gesetze-im-internet.de/vsbg/__37.html

## 6. Competent ADR body: verify, do not hard-code forever

Do not permanently hard-code a conciliation body into support tooling without rechecking competence.

Where no specially competent body applies, the **Universalschlichtungsstelle des Bundes - Zentrum für Schlichtung e. V.** may be relevant within its remit. Current checkpoint reviewed for this gate:

Straßburger Str. 8  
77694 Kehl  
Germany  
https://www.universalschlichtungsstelle.de

Before each production template revision and where competence is uncertain, verify the current official body list, subject-matter competence, address, website, relevant value/language limits, and whether another sector-specific body has priority.

BfJ guidance / lists: https://www.bundesjustizamt.de/DE/Themen/Verbraucherrechte/Verbraucherstreitbeilegung/Verbraucherstreitbeilegung_node.html

## 7. Do not accidentally create a broader ADR promise

Unless CK-Labs deliberately adopts a participation commitment after legal/business review:

- do not state that CK-Labs “will participate in consumer arbitration” generally;
- do not state that every dispute must use ADR;
- do not describe ADR as a mandatory substitute for court rights;
- do not add a binding-arbitration or class-action waiver copied from Apple, Google, Xsolla, or another provider;
- do not promise acceptance of every ADR proposal; and
- do not state that CK-Labs refuses every ADR process if a legal or contractual participation duty applies.

If CK-Labs later changes its participation position, document scope, body, effective date, contractual/legal basis, and whether the canonical English Terms meaning materially changed enough to require localization resynchronization.

## 8. Payment-channel responsibility remains transaction-specific

For every unresolved purchase dispute preserve this chain:

`TycoonX account -> product -> transaction ID -> channel -> contracting merchant -> price/currency/tax -> payment state -> refund/withdrawal route -> entitlement state -> unresolved issue -> competent ADR body -> participation status -> § 37 notice`

### Apple App Store

For Apple In-App Purchase, Apple controls its transaction/refund infrastructure. CK-Labs remains responsible for TycoonX-side entitlement delivery, account mapping, restoration and game-state correction within CK-Labs's control, plus mandatory obligations that independently fall on CK-Labs.

For EU alternative-payment configurations, current Apple guidance makes the developer responsible for timely customer support for alternative-payment issues and for applicable payment/billing, refund, tax and legal obligations associated with that route. Do not tell a user to seek an Apple refund for a transaction Apple did not process.

Current Apple guidance: https://developer.apple.com/support/payment-options-on-the-app-store-in-the-eu

### Google Play

Google controls Play transaction infrastructure and provides developer tooling for eligible order/refund actions. CK-Labs remains responsible for correct TycoonX entitlement fulfilment and reconciliation after authoritative Google transaction changes.

A Google refund or refund request is not automatically fraud. A separate unresolved CK-Labs consumer-contract dispute can still require a CK-Labs § 37 notice where German law applies.

Current Google developer order/refund guidance: https://support.google.com/googleplay/android-developer/answer/2741495

### Xsolla webshop

For the official TycoonX webshop, the transaction-specific Xsolla entity may act as merchant of record under the checkout arrangement and applicable Xsolla terms. Preserve the actual merchant shown at checkout/receipt, Xsolla transaction ID, product, price, currency, tax treatment, applicable refund-policy type/version, payment/refund/chargeback state, and CK-Labs entitlement action.

Do not misidentify CK-Labs as merchant merely because the purchased value is used inside TycoonX. Do not misidentify Xsolla as responsible for a TycoonX server-side delivery defect merely because it processed payment.

Do not copy Xsolla's own dispute/arbitration wording into CK-Labs Terms. Provider terms govern the relationship they define and remain subject to mandatory consumer law.

Current Xsolla legal agreements: https://xsolla.com/legal-agreements  
Current Xsolla refund policy: https://xsolla.com/refund-policy

## 9. Dispute classification must remain separate from enforcement

At minimum distinguish:

- purchase not delivered;
- duplicate/accidental purchase;
- withdrawal request;
- non-conforming digital product/service;
- refund/reversal/chargeback;
- unauthorized payment or account compromise;
- regional-pricing/tax/FX disagreement;
- promotion/coupon dispute;
- Diamond balance/correction;
- 30-Day VIP clock dispute;
- Lifetime VIP validity/restoration;
- suspension/termination dispute;
- privacy/data-protection complaint;
- Community Standards / DSA moderation complaint; and
- ADR, regulator, or court escalation.

Do not use one generic `fraud` or `chargeback` label to collapse those categories.

A consumer may lawfully request a refund, invoke withdrawal/conformity rights, contact an ADR body, ECC-Net, a regulator, a bank, Apple, Google, Xsolla, or a court. That procedural act is not by itself proof of hacking, exploit use, fraud, chargeback abuse, regional-price abuse, entitlement abuse, account compromise, or harassment.

Where independent evidence supports forged receipts, stolen instruments, exploit-generated entitlements, manipulated regional eligibility, coordinated refund cycling, or other deliberate abuse, CK-Labs may investigate and enforce proportionately under the applicable Terms and mandatory law.

## 10. No retaliation; payment state still matters

CK-Labs must not suspend, terminate, reduce unrelated paid value, or otherwise punish an account **solely because** the user exercises a lawful consumer-redress route.

This does not prevent transaction-specific correction after an authoritative refund, reversal, chargeback, failed payment, duplicate grant, invalid payment, or proven fraud/exploit abuse where lawful.

ADR status and payment status are different facts. Provider/store/payment records remain authoritative for payment state, while CK-Labs server records remain authoritative for its entitlement actions subject to mandatory rights and evidence correction.

## 11. Paid-product invariants during disputes

### Purchased Diamonds

**Purchased Diamonds do not expire solely because time passes.**

A dispute concerning one Diamond transaction must not automatically remove unrelated legitimately purchased Diamonds. If a specific transaction is authoritatively refunded or invalidated, correct that transaction and provably related invalid downstream value only where lawful. Missing valid purchased value should be reconciled and restored exactly once.

### One-time 30-Day VIP

**30-Day VIP remains a one-time, non-renewing 30-day entitlement.**

A support, ADR, reinstall, account-recovery, or provider-review event must not restart the original 30-day clock. Any mandatory cure, extension, price reduction, termination, or refund must be handled expressly rather than silently changing the product definition.

### Lifetime VIP

**Lifetime VIP remains a one-time promotional entitlement offered only during selected genuine sales windows.** It may be withdrawn from future sale, may never return, and creates **no expectation of continuous future availability for purchase**.

ADR handling must not reopen a closed sales window, create a second Lifetime entitlement, add an expiry to a valid Lifetime entitlement, convert Lifetime VIP into 30-Day VIP, or force repurchase merely because a dispute exists.

Different genuine future Lifetime VIP sales windows may use different prices. A later price decrease does not automatically create a refund/credit/price-match right, and a later increase does not add a charge to an already completed one-time purchase, except where mandatory law requires otherwise.

## 12. Pricing, promotions, tax and regional disputes

For disputes about an obvious catalog/configuration error, discount/countdown, coupon, regional eligibility, currency, FX, tax/VAT, or displayed provider price, preserve the evidence actually shown before confirmation plus the final authoritative transaction record.

Completed one-time purchases are not retroactively repriced merely because a later future price, bundle, regional price, tax treatment, exchange rate, or promotion differs, except where mandatory law requires a remedy.

A pricing complaint is not itself regional-price abuse. Investigate manipulation only on independent evidence.

## 13. Outages, security incidents, shutdown and successor operators

An Apple, Google, Xsolla, hosting, authentication, support, or communications outage can delay operational handling but does not permanently erase a statutory duty. Keep recoverable queues/evidence and do not backdate notices.

A compromised account or payment method may justify proportionate protective security controls, but do not automatically blame the legitimate user for credential stuffing, phishing, stolen sessions, provider compromise, or attacker-initiated purchases/chargebacks. Security evidence and consumer-remedy evidence remain separate.

Lawful permanent TycoonX shutdown, sale, merger, reorganization, or successor-operator transfer does not automatically erase already-arisen consumer disputes or mandatory remedies. Preserve legally required complaint/payment records, identify which entity remains responsible for historical contracts, preserve an accessible dispute route for as long as legally required, and transfer open dispute state lawfully and with appropriate privacy controls.

## 14. Current EU ADR reform: Directive (EU) 2025/2647

Directive (EU) **2025/2647** is in force at EU level. Member States must adopt and publish transposition measures by **March 20, 2028** and apply them from **September 20, 2028**.

The amended framework includes a future trader-response rule when a competent ADR entity asks whether a trader will participate: the response period must not exceed **20 working days**, with extension in complex or exceptional cases up to a maximum of **30 working days**, subject to the Directive's exceptions and national implementation.

As of September 5, 2026, do **not** present that future 20/30-working-day framework as though it were already a current German VSBG deadline unless German transposition makes it applicable earlier.

Create a legal-watch checkpoint for German implementation and re-audit:

- VSBG §§ 36/37 wording and triggers;
- any trader-response deadline;
- website/Terms information;
- cross-border ADR tooling and Consumer Redress Portal integration;
- ADR contact-point changes;
- data-minimization/human-review obligations relevant to ADR handling; and
- whether canonical TycoonX legal meaning must be resynchronized across locales.

Official source: https://eur-lex.europa.eu/eli/dir/2025/2647/oj

## 15. DSA Article 21 and public Impressum boundary

German VSBG consumer conciliation remains separate from **DSA Article 21** certified out-of-court dispute settlement for eligible platform-moderation decisions.

Do not collapse into one generic appeal flow:

- § 37 VSBG consumer-contract notice;
- DSA Article 20 internal complaint;
- DSA Article 21 out-of-court settlement;
- Apple/Google/Xsolla refund/reversal process;
- GDPR complaint/data-subject request; or
- court claim.

The TycoonX Impressum may contain provider information, DSA contact information, a conditional § 37 statement, and an accurate retired-ODR statement. A generic Impressum link is **not** a substitute for the case-specific § 37 text-form notice. A conditional § 37 statement is **not** a substitute for a § 36(1)(1) website/Terms participation statement if that general duty applies.

## 16. Minimum unresolved-dispute evidence packet

Retain only what is reasonably necessary under privacy/minimization and retention rules:

- case/account reference;
- product and entitlement;
- Apple/Google/Xsolla/other channel;
- transaction/order reference where relevant;
- contracting merchant;
- complaint and attempted-resolution chronology;
- authoritative payment/refund/chargeback state;
- CK-Labs entitlement state/correction history;
- `consumer_contract_dispute_unresolved_at` timestamp;
- competent ADR body source/date checked;
- body name/address/website;
- willingness/obligation status;
- § 37 notice text, timestamp and delivery channel; and
- later ADR/authority/court correspondence and final remedy.

Do not include passwords, authentication secrets, full payment-card data, unnecessary provider tokens, or unrelated private messages.

## 17. Release evidence / QA scenarios

Before marking this area ready, verify at least these scenarios:

1. CK-Labs is at or below the § 36(3) headcount threshold: do not suppress § 37 or § 36(1)(2).
2. CK-Labs later exceeds the threshold: reassess public § 36 information.
3. A normal support case resolves: do not send an unnecessary § 37 notice.
4. A covered consumer-contract dispute genuinely remains unresolved: send the current competent-body notice in text form.
5. A stale 2024 support macro contains the retired ODR URL: remove it.
6. A user asks about the Consumer Redress Portal: describe it accurately without implying universal CK-Labs participation.
7. Apple refunds a Diamond purchase: reconcile only that transaction and do not auto-ban the account.
8. A Google Play purchase is disputed: separate Play payment state from CK-Labs entitlement obligations.
9. Xsolla is merchant of record: preserve the Xsolla contract/refund route while still fixing a CK-Labs server-delivery defect.
10. One Diamond purchase is disputed: unrelated legitimate purchased Diamonds remain untouched.
11. 30-Day VIP is revalidated: do not restart its original clock.
12. Lifetime VIP is disputed: do not add an expiry or reopen a closed sales window.
13. A consumer contacts ADR, ECC-Net, regulator or court: do not treat that act itself as fraud.
14. An account was compromised: separate account-security restoration from final misconduct findings.
15. A provider outage blocks support delivery: retain a recoverable queue and send the real notice later without backdating.
16. TycoonX permanently shuts down or changes operator: unresolved duties/claims are not silently discarded.
17. An ADR entity cites Directive (EU) 2025/2647 in 2026: apply current German law and keep future 2028 rules distinct.
18. German transposition of Directive (EU) 2025/2647 becomes applicable: refresh this gate and canonical copy where legally necessary.

## 18. Canonical/localization boundary

This operational consolidation does **not** by itself change the public canonical English Terms, Purchases & Refunds Policy, Privacy Policy, or Community Standards. Therefore it does not reopen the completed localization queue.

If CK-Labs later materially changes the public ADR participation commitment, consumer-dispute clause, mandatory-arbitration position, court/jurisdiction terms, or legally required public § 36 meaning, resynchronize the affected canonical document into the 25 target locales in the required order.

## 19. Brand, release and operational invariants

- Display the game name exactly as **TycoonX** in player-facing/legal prose.
- Technical route/file names containing `tyconx` may remain where needed for compatibility.
- TycoonX has been in full release since **September 1, 2026**.
- No GitHub Actions or paid service is required by this gate.
- No database change is required by this gate.

## 20. Single source of truth

Do not create a second overlapping gate or verifier for the same VSBG §§ 36/37, former ODR platform, Consumer Redress Portal, or EU ADR-transition doctrine. Future legal changes belong here and in the surviving verifier.

### Current authoritative references

- VSBG current text: https://www.gesetze-im-internet.de/vsbg/BJNR025410016.html
- § 36 VSBG: https://www.gesetze-im-internet.de/vsbg/__36.html
- § 37 VSBG: https://www.gesetze-im-internet.de/vsbg/__37.html
- Federal Office of Justice consumer ADR guidance: https://www.bundesjustizamt.de/DE/Themen/Verbraucherrechte/Verbraucherstreitbeilegung/Verbraucherstreitbeilegung_node.html
- Regulation (EU) 2024/3228: https://eur-lex.europa.eu/eli/reg/2024/3228/oj
- Directive (EU) 2025/2647: https://eur-lex.europa.eu/eli/dir/2025/2647/oj
- Consumer Redress Portal: https://consumer-redress.ec.europa.eu/
- Apple EU payment-option guidance: https://developer.apple.com/support/payment-options-on-the-app-store-in-the-eu
- Google Play order/refund guidance: https://support.google.com/googleplay/android-developer/answer/2741495
- Xsolla legal agreements: https://xsolla.com/legal-agreements
- Xsolla refund policy: https://xsolla.com/refund-policy
