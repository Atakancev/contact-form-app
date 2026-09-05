# TycoonX German Consumer ADR / VSBG Release Gate

**Last reviewed: September 5, 2026**

TycoonX went to full release on **September 1, 2026**. This gate covers the current German consumer-dispute information duties that can apply to CK-Labs under the **Verbraucherstreitbeilegungsgesetz (VSBG)**, the discontinued EU Online Dispute Resolution platform, and the newer EU Consumer Redress Portal / ADR framework.

This is an operational release gate. It does not replace transaction-specific legal advice and must not be used to waive mandatory consumer rights.

## 1. Current law first: do not confuse three different things

Keep these systems separate:

1. **German VSBG §§ 36 and 37** create trader information duties in different circumstances.
2. The old **EU ODR platform** under Regulation (EU) No 524/2013 was discontinued and that Regulation was repealed with effect from **July 20, 2025**.
3. The Commission's newer **Consumer Redress Portal** is a consumer-redress / ADR navigation tool. It is not the old ODR platform and must not be described as though the old ODR complaint-submission regime still exists.

No TycoonX website, Terms, support template, checkout footer, refund page or automated email should contain a stale mandatory ODR-platform link or tell a consumer to submit a complaint to the discontinued ODR platform.

## 2. VSBG § 36: general website / Terms information duty

Current § 36 VSBG requires a trader that maintains a website or uses general terms and conditions to provide certain consumer ADR information clearly and accessibly.

### § 36(1)(1): willingness or obligation to participate

A trader normally states whether it is willing or obliged to participate in dispute-resolution proceedings before a consumer conciliation body.

However, § 36(3) currently exempts a trader from **§ 36(1)(1)** if, on **December 31 of the preceding year**, the trader employed **ten or fewer persons**.

Operational rule:

- do not assume the exemption merely because CK-Labs is currently small;
- preserve the dated December 31 headcount used for the relevant following year;
- count persons rather than silently converting part-time staff into full-time equivalents where the current official guidance uses headcount;
- reassess after hiring, business transfer, merger, reorganization or another change that can affect the threshold;
- do not state that CK-Labs is “permanently exempt.”

### The small-business exemption is narrower than it looks

The ≤10-person exemption applies to **§ 36(1)(1)** only.

It does **not** erase:

- § 36(1)(2), where CK-Labs is legally obliged or has committed itself to participate before a particular consumer conciliation body; or
- § 37, after an actual consumer-contract dispute could not be resolved directly.

This distinction must be preserved in support tooling and legal QA. Never implement one boolean such as `vsbg_exempt = true` and use it to suppress every ADR notice.

## 3. VSBG § 36(1)(2): committed or legally required participation

If CK-Labs is obliged by law, membership rules, contract or another binding commitment to participate before a particular consumer conciliation body, § 36(1)(2) requires the applicable information even if the § 36(1)(1) small-business exemption applies.

Where this duty applies, the public information must identify the competent body and include its address and website together with the statement that CK-Labs participates as required or committed.

Do not name the **Universalschlichtungsstelle des Bundes** or any other ADR body in public TycoonX Terms merely because it is well known. First verify that the body is actually competent for the relevant dispute and whether CK-Labs is willing, committed or legally obliged to participate.

## 4. Where § 36 information must appear

When § 36 applies, the information must be:

- easy to access;
- clear and understandable;
- on the trader's website where it maintains one; and
- provided together with its general terms and conditions where it uses them.

For TycoonX, verify parity across the public legal website, the canonical Terms route, any Germany-specific legal/footer surface and any checkout-controlled page for which CK-Labs is the trader.

A support article hidden behind login is not a substitute for a required public website / Terms disclosure.

## 5. VSBG § 37: the post-dispute notice is a separate P0 workflow

Current § 37 VSBG applies when a dispute concerning a consumer contract **could not be settled directly between the trader and the consumer**.

The trader must then tell the consumer, in **text form**:

- which competent consumer conciliation body is relevant;
- the body's address;
- the body's website; and
- whether the trader is willing or obliged to participate in proceedings before that body.

Unlike § 36(1)(1), the official German guidance states that the number of employees does **not** remove the § 37 duty.

Therefore a small CK-Labs headcount must never suppress a required § 37 unresolved-dispute notice.

## 6. Define when a TycoonX dispute becomes “unresolved”

Do not send a § 37 notice on every support ticket. Also do not wait indefinitely once direct negotiations have clearly failed.

The support record should distinguish:

- initial complaint;
- requested evidence;
- CK-Labs response / proposed cure;
- consumer response;
- any Apple / Google / Xsolla merchant or refund-process dependency;
- final internal position; and
- `consumer_contract_dispute_unresolved_at` when the dispute could not be settled directly.

The § 37 notice should be generated from that state and retained with the support record.

## 7. Merchant / payment-channel roles must remain transaction-specific

TycoonX purchases can involve:

- Apple App Store In-App Purchase;
- Google Play; and
- the official TycoonX webshop using Xsolla.

The contracting merchant, refund procedure and applicable ADR route can differ by transaction. Do not use one universal sentence such as “Xsolla handles all consumer disputes” or “Apple is responsible for everything.”

For each unresolved purchase dispute preserve:

`TycoonX account -> product -> transaction ID -> channel -> contracting merchant -> refund/withdrawal route -> unresolved issue -> competent ADR body -> participation status -> § 37 notice`.

Where Apple, Google or an Xsolla entity is the contracting merchant for a particular payment issue, its own complaint/refund/ADR process can be relevant. CK-Labs remains responsible for its own TycoonX obligations such as valid entitlement delivery, account mapping, game-state correction and mandatory remedies that legally fall on CK-Labs.

Do not redirect a consumer to a payment provider merely to avoid resolving a CK-Labs-controlled defect.

## 8. Old EU ODR platform: remove stale links and stale legal claims

Regulation (EU) 2024/3228 repealed Regulation (EU) No 524/2013 with effect from **July 20, 2025** and discontinued the old EU Online Dispute Resolution platform.

Release QA must fail if player-facing TycoonX legal/support copy still says, for example:

- “The European Commission provides an ODR platform at …”; 
- “Submit your complaint through the EU ODR platform”; or
- language implying that an ODR-platform link is still a current mandatory online-trader disclosure.

Do not add a dead ODR URL for historical completeness in live consumer-facing legal prose.

Historical internal records may retain old ODR references where needed for audit context, but they must be labelled historical and must not be presented as a current consumer remedy.

## 9. Consumer Redress Portal: useful, but not a fake replacement ODR mandate

The Commission now operates the **Consumer Redress Portal**, including a solution finder and directory of ADR entities.

It can be useful for:

- identifying an appropriate ADR entity;
- cross-border consumer redress information;
- finding consumer assistance; and
- checking current ADR contact information.

Do not describe this portal as though it were the old ODR platform, and do not use a generic portal link instead of the specific competent-body information required by VSBG § 37.

Where the competent body is uncertain, verify it from the current official ADR-body list or competent German source before sending the § 37 notice.

## 10. Universalschlichtungsstelle des Bundes: fallback must still be verified

Current Federal Office of Justice guidance explains that where no specially competent ADR body applies, the **Universalschlichtungsstelle des Bundes** can be relevant in case of doubt.

Current public contact checkpoint:

- Universalschlichtungsstelle des Bundes
- Zentrum für Schlichtung e.V.
- Straßburger Straße 8
- 77694 Kehl am Rhein
- Website: https://www.universalschlichtungsstelle.de/

Do not hard-code this forever. Re-verify the competent body, address and website before relying on the notice in production.

## 11. A § 37 notice is not an admission of liability

Providing legally required ADR information does not by itself mean that CK-Labs:

- admits the consumer's claim is correct;
- admits negligence or breach;
- promises a refund;
- waives a limitation or defense permitted by mandatory law;
- accepts every ADR proposal; or
- agrees to participate where CK-Labs is neither willing nor legally obliged to participate.

The notice should truthfully state the current participation position without hostile or misleading wording.

## 12. A consumer complaint is not fraud, chargeback abuse or entitlement abuse

Opening a complaint, asking for ADR information, contacting an ADR body, contacting an authority, using ECC-Net or disputing a price/refund decision is **not by itself evidence** of:

- hacking or exploit use;
- fraud;
- chargeback abuse;
- regional-price abuse;
- entitlement abuse;
- account compromise; or
- harassment.

Account sanctions require separate, reliable evidence under the applicable TycoonX enforcement rules.

A consumer may simultaneously use a lawful complaint route and have a separate payment dispute. Keep those records independently attributable.

## 13. Chargebacks and ADR must not be conflated

A chargeback is a payment-channel process. ADR is a consumer-dispute-resolution process.

Rules:

- an ADR request does not automatically freeze the account;
- a § 37 notice does not automatically trigger a chargeback correction;
- a chargeback does not automatically prove that an ADR claim is abusive;
- provider refund/reversal records remain authoritative for payment state;
- CK-Labs may correct the specific refunded or reversed entitlement where legally permitted; and
- unrelated legitimate value must not be removed merely because another transaction is disputed.

## 14. Paid-product invariants

### Purchased Diamonds

**Purchased Diamonds do not expire solely because time passes.**

Sending a § 36 or § 37 notice, receiving an ADR request or communicating with ECC-Net must not expire, duplicate or regrant purchased Diamonds.

If the dispute concerns missing purchased Diamonds, reconcile the exact Apple, Google or Xsolla transaction and TycoonX entitlement ledger. Resolve or restore the valid value exactly once.

### One-time 30-Day VIP

**30-Day VIP remains a one-time, non-renewing 30-day entitlement.**

An ADR complaint, support escalation or account recovery must not restart the 30-day clock. If a mandatory remedy requires extension, cure, price reduction, termination or refund, handle that remedy explicitly rather than silently changing the product definition.

### Lifetime VIP

**Lifetime VIP remains a one-time promotional entitlement offered only during selected genuine sales windows.** It may be withdrawn from future sale, may never return, and creates **no expectation of continuous future availability for purchase**.

ADR handling must not:

- reopen a closed Lifetime VIP sales window;
- create a second Lifetime entitlement;
- add an expiry to a valid existing Lifetime entitlement;
- convert it into 30-Day VIP; or
- require the player to purchase it again merely because a support/ADR record was created.

Different genuine Lifetime VIP sales windows may use different future prices. A later lower price does not automatically create a refund or price-match right, and a later higher price does not add a charge to an already completed one-time purchase, except where mandatory law requires otherwise.

## 15. Pricing, promotions and regional pricing disputes

A consumer can dispute:

- an obvious catalog/configuration error;
- a misleading discount or countdown;
- regional pricing eligibility;
- tax/VAT presentation;
- FX conversion;
- a coupon; or
- an Apple / Google / Xsolla final checkout price.

The ADR record should preserve the final pre-confirmation total, currency, mandatory tax/fee presentation, storefront/country, promotion evidence and provider transaction record.

Do not rewrite a completed transaction to whatever the current price happens to be. Completed one-time purchases are not retroactively repriced merely because a later future price differs, subject to mandatory law.

## 16. Outages, provider failures and service shutdown

An outage or provider failure can create a consumer complaint without creating misconduct by the player.

Where Apple, Google, Xsolla, hosting, authentication or another provider caused a material failure, preserve the provider incident evidence but still determine which remedy and which trader responsibility apply to the consumer's contract.

For a lawful permanent TycoonX shutdown, ADR duties and unresolved consumer claims do not disappear merely because the service is closing. Preserve the legally required contact route, complaint records and remedy evidence for the applicable retention period.

A business sale, merger, reorganization or successor operator must transfer open consumer-dispute state in a lawful, privacy-compliant way so unresolved cases are not silently lost.

## 17. Security incidents and account compromise

A compromised account can produce a real consumer-contract dispute about purchases or entitlements.

Do not automatically blame the legitimate player for credential stuffing, stolen sessions, phishing or provider compromise. Preserve security evidence separately from the consumer claim and use the account-compromise gate for enforcement decisions.

A security emergency can justify temporary protective restrictions where lawful, but it does not erase § 37 or mandatory consumer-remedy duties after direct dispute resolution fails.

## 18. Directive (EU) 2025/2647: future implementation checkpoint, not current German law yet

Directive (EU) 2025/2647 amended the EU ADR framework after the ODR platform was discontinued.

Current EU timing:

- the Commission's Consumer Redress Portal is already live;
- Member States must adopt and publish transposition measures by **March 20, 2028**; and
- those measures are to apply from **September 20, 2028**.

The revised framework includes, among other things, a future duty for traders to respond within the applicable **20-working-day** period when contacted by an ADR entity about participation, once the relevant rules have been implemented and apply.

Do **not** present that future 20-working-day trader-response rule as though it were already a current September 2026 German VSBG duty unless German law is amended earlier and the applicable provision is in force.

Create a calendar/legal-review checkpoint for 2028 and update this gate when German transposition is enacted.

## 19. Evidence packet for each unresolved German consumer-contract dispute

Retain, subject to privacy/minimization and retention rules:

- case ID;
- TycoonX account reference;
- product / entitlement;
- Apple / Google / Xsolla / other channel;
- transaction/order reference where relevant;
- contracting merchant;
- complaint date;
- issue summary;
- requested evidence;
- CK-Labs response / attempted cure;
- provider refund/chargeback state where relevant;
- date direct negotiations became unresolved;
- competent ADR body source/date checked;
- body name/address/website;
- whether CK-Labs is willing or obliged to participate;
- § 37 notice text;
- notice timestamp and delivery channel;
- later ADR/ECC/authority correspondence; and
- final resolution / mandatory remedy / entitlement ledger action.

Do not put unnecessary payment credentials, passwords, authentication secrets or full payment-instrument data into the ADR packet.

## 20. Regression scenarios

1. **CK-Labs has ten or fewer persons on the preceding December 31.** Do not assume every VSBG duty disappears; § 37 still needs independent handling.
2. **CK-Labs grows above the § 36(3) threshold.** Reassess the general website/Terms participation statement for the following period.
3. **CK-Labs contractually commits to an ADR body while small.** § 36(1)(2) is not suppressed by the small-business exemption.
4. **A consumer opens an ordinary support ticket that is resolved.** Do not send an unnecessary § 37 notice.
5. **A consumer-contract dispute cannot be resolved directly.** Generate the competent-body § 37 notice in text form.
6. **Support tries to suppress § 37 because CK-Labs is small.** Fail.
7. **A Terms/footer template still links to the old EU ODR platform.** Remove the stale current-law claim/link.
8. **Support describes the Consumer Redress Portal as the old ODR platform.** Fail.
9. **The competent ADR body is uncertain.** Verify the current official list; do not invent a body.
10. **The Universalschlichtungsstelle contact details changed.** Refresh before sending; do not trust a permanently hard-coded address.
11. **Apple refunds a Diamond purchase during an ADR complaint.** Reconcile the refunded transaction only; do not delete unrelated value.
12. **Google purchase is pending and consumer complains.** Do not grant entitlement before authoritative success merely because ADR was mentioned.
13. **Xsolla chargeback and separate entitlement-delivery complaint exist.** Keep payment reversal and CK-Labs delivery issue separately attributable.
14. **Purchased Diamonds are missing after a provider outage.** Reconcile and restore exactly once where the transaction is valid.
15. **30-Day VIP complaint arrives on day 20.** Do not restart the original 30-day entitlement merely because a dispute file opens.
16. **Lifetime VIP window is closed when an ADR complaint is filed.** Do not reopen the sales window.
17. **Consumer disputes a later lower Lifetime VIP price.** Preserve mandatory remedies, but do not invent an automatic price-match right.
18. **Player requests ADR information after a ban.** The request itself is not proof of harassment, fraud or exploit abuse.
19. **Business is sold with open consumer cases.** Transfer open-case state lawfully to the responsible successor rather than dropping the cases.
20. **Permanent shutdown is announced.** Keep legally required unresolved-dispute and remedy channels operational for the applicable period.
21. **Staff assumes the future 20-working-day EU ADR response rule is already a 2026 German deadline.** Fail; verify the German implementation date first.
22. **A 2028 German transposition law enters into force.** Re-open this gate and update current duties before relying on the 2026 wording.

## 21. Release checklist

Before closing this gate, confirm:

- [ ] no current player-facing TycoonX legal/support page contains a stale EU ODR-platform requirement or dead ODR complaint instruction;
- [ ] the preceding-December-31 headcount evidence exists for § 36(3) classification;
- [ ] § 36(1)(1), § 36(1)(2) and § 37 are represented as separate states;
- [ ] if a § 36 public disclosure is required, it appears clearly on the website and with the Terms as required;
- [ ] unresolved consumer-contract disputes can generate a § 37 notice in text form;
- [ ] the § 37 template requires body name, address, website and truthful participation status;
- [ ] competent ADR-body data is checked from a current official source;
- [ ] Apple / Google / Xsolla merchant and refund roles remain transaction-specific;
- [ ] complaint/ADR status does not itself become fraud, chargeback or entitlement-abuse evidence;
- [ ] purchased Diamonds retain the non-expiry invariant;
- [ ] 30-Day VIP remains one-time and non-renewing;
- [ ] Lifetime VIP remains limited to selected genuine sales windows and has no promise of continuous future availability;
- [ ] mandatory German/EU consumer rights remain intact;
- [ ] open disputes survive provider migration, business transfer and lawful permanent shutdown where required;
- [ ] the 2028 EU ADR transposition/application dates are tracked without pretending the future rules are already current German law; and
- [ ] player-facing brand text is exactly **TycoonX**, with no legacy brand misspelling and no stale live-service beta wording.

## 22. Official reference checkpoint

Re-check before production/legal reliance:

- VSBG § 36: https://www.gesetze-im-internet.de/vsbg/__36.html
- VSBG § 37: https://www.gesetze-im-internet.de/vsbg/__37.html
- Federal Office of Justice VSBG trader guidance: https://www.bundesjustizamt.de/DE/Themen/Verbraucherrechte/Verbraucherstreitbeilegung/Unternehmen/Unternehmen.html
- Regulation (EU) 2024/3228 discontinuing the ODR platform: https://eur-lex.europa.eu/eli/reg/2024/3228/oj/eng
- Directive (EU) 2025/2647: https://eur-lex.europa.eu/eli/dir/2025/2647/oj/eng
- EU Consumer Redress Portal: https://consumer-redress.ec.europa.eu/
- Universalschlichtungsstelle des Bundes: https://www.universalschlichtungsstelle.de/

**Canonical-language impact:** none in this run. This gate operationalizes current German ADR/dispute-information duties and the post-ODR transition without changing the public canonical meaning of the TycoonX Terms, Purchases & Refunds Policy, Privacy Policy or Community Standards. Therefore no localized legal document is reopened by this file alone.
