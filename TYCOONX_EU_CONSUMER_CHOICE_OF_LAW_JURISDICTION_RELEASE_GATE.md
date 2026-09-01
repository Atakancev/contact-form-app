# TycoonX EU Consumer Choice-of-Law & Jurisdiction Release Gate

Last reviewed: September 2, 2026
Owner: CK-Labs
Scope: TycoonX Terms, Purchases & Refunds, support and dispute communications, Apple App Store purchases, Google Play purchases, the official TycoonX webshop using Xsolla, and any future consumer-facing contract or dispute clause.

## Purpose

The canonical TycoonX Terms currently choose German law while expressly preserving mandatory consumer protections available under the law of the consumer's habitual country of residence and leaving consumer jurisdiction to mandatory statutory rules.

This gate protects that wording from being weakened by a future checkout, provider migration, support template, promotion, business transfer, or copied third-party dispute clause.

It is an implementation and release-evidence gate. It does not replace the TycoonX Terms, Purchases & Refunds Policy, Privacy Policy, Community Standards, applicable platform terms, or mandatory consumer law.

## P0: do not confuse governing law, jurisdiction, ADR, payment disputes, and provider contracts

For every consumer dispute path, distinguish at least:

1. the law governing the CK-Labs/TycoonX contractual relationship;
2. mandatory consumer protections that remain applicable despite a contractual choice of law;
3. the courts that have jurisdiction over a particular dispute;
4. any voluntary or legally required consumer ADR process;
5. a payment-provider refund, chargeback, or dispute process; and
6. the separate contract, if any, between the consumer and Apple, Google, Xsolla, a bank, or another provider.

A clause governing one of these relationships must not be copied into another relationship merely because the same purchase appears in both systems.

## 1. Rome I Regulation Article 6 - consumer choice of law

For an EU consumer contract within Article 6 of Regulation (EC) No 593/2008 (Rome I), the baseline is the law of the country where the consumer has habitual residence when the professional:

- pursues commercial or professional activities in that country; or
- directs such activities to that country or to several countries including it,

and the contract falls within the scope of those activities.

Rome I permits the parties to choose another governing law, but that choice must not deprive a qualifying consumer of the protection of provisions that cannot be derogated from by agreement under the law that would otherwise apply under Article 6(1).

### TycoonX implementation rule

The canonical clause choosing German law is acceptable only together with the mandatory-rights safeguard. Never change it into wording such as:

- `German law applies exclusively regardless of where the consumer lives`;
- `all local consumer laws are excluded`;
- `only German statutory remedies apply`; or
- `by buying Diamonds or VIP you waive the law of your home country`.

The safe meaning is:

> German law governs the contract to the extent a choice is permitted, without depriving a qualifying consumer of mandatory protections that remain applicable under conflict-of-laws rules.

Do not promise that every rule of a consumer's home country automatically applies to every transaction. Article 6 has scope conditions and exceptions. The correct position must be assessed for the actual consumer, destination market, product, channel, and dispute.

## 2. Directed-activity evidence

Do not decide Rome I Article 6 or Brussels I consumer jurisdiction from IP address alone.

Relevant evidence can include, depending on context:

- whether TycoonX deliberately offers or markets the Service in the consumer's Member State;
- localized legal or commercial pages;
- languages offered for commercial use;
- country or storefront availability;
- currencies and regional prices;
- advertising or promotions aimed at that market;
- payment methods offered for that market;
- support and customer-service targeting; and
- other facts showing commercial activity directed to the country.

The presence of one signal does not always decide the legal question by itself. Keep the assessment factual and transaction-specific.

## 3. Brussels I Recast - EU consumer jurisdiction

Where Section 4 of Regulation (EU) No 1215/2012 (Brussels I Recast) applies to a TycoonX consumer contract, Articles 17 to 19 provide special consumer jurisdiction protections.

Subject to the Regulation's conditions:

- the consumer may bring proceedings against the other party either in the courts of the Member State where that other party is domiciled or in the courts for the place where the consumer is domiciled;
- the other party may generally bring proceedings against the consumer only in the courts of the Member State where the consumer is domiciled; and
- pre-dispute jurisdiction agreements may depart from those protections only in the limited circumstances permitted by Article 19.

### TycoonX implementation rule

Do not add a clause such as:

- `exclusive jurisdiction: Cologne, Germany` for every consumer;
- `all disputes must be brought only in German courts`;
- `you waive the courts of your country`; or
- `CK-Labs may sue any consumer only in Cologne`.

A German venue can be stated for disputes where a lawful venue clause is actually permitted, such as certain business-to-business relationships, but it must not be presented as overriding mandatory consumer jurisdiction rules.

The current canonical TycoonX Terms use the safer rule: **for consumers, jurisdiction is determined by mandatory statutory rules**.

## 4. Article 19 - no casual pre-dispute forum waiver

For a consumer relationship within the Brussels I consumer section, do not treat a checkbox, purchase click, Terms acceptance, or account creation as permission to strip the consumer of the protected forum.

Article 19 permits departure from the consumer-jurisdiction section only in limited situations, including an agreement entered into after the dispute has arisen, an agreement that gives the consumer additional courts, or certain agreements where both parties are domiciled or habitually resident in the same Member State and the national law permits the clause.

A provider's standard arbitration or forum clause does not automatically satisfy Article 19 for the CK-Labs/TycoonX contract.

## 5. Mandatory arbitration and class-action wording

Do not import US-style mandatory arbitration, jury-trial waiver, class-action waiver, one-year claim limitation, or California-only forum wording from a provider agreement into TycoonX consumer Terms merely because CK-Labs uses that provider.

If a future dispute-resolution mechanism is considered, it must first receive a jurisdiction-specific consumer-law review and must preserve any non-waivable right to a competent court, statutory remedy, regulator, or ADR route.

Nothing in this gate prevents a consumer and CK-Labs from voluntarily settling a particular dispute, using mediation or ADR, or entering a lawful post-dispute agreement where permitted.

## 6. German law clause - founder-protective use

Choosing German law remains useful for CK-Labs because it provides a predictable contractual baseline for the operator and aligns the canonical Terms with the operator's German legal framework.

The protective drafting rule is not to abandon German law. It is to pair the choice with a correct mandatory-rights caveat and avoid an unenforceable exclusive-forum promise.

A clause that overreaches can create more uncertainty, enforcement cost, and consumer-law risk than a clause that states the lawful limit clearly.

## 7. Apple App Store relationship

Apple's current consumer terms are a separate Apple/consumer contract. Apple currently states for users in the EU and certain other European countries that its governing law and forum can follow the user's usual place of residence.

TycoonX must not copy Apple's forum clause into the CK-Labs Terms as if Apple had decided jurisdiction for CK-Labs.

Conversely, the CK-Labs German-law clause does not rewrite the Apple/consumer contract.

For an App Store purchase, record separately:

- the Apple transaction record and Apple-controlled refund route;
- the CK-Labs TycoonX entitlement obligation;
- the law/forum applicable to a dispute with CK-Labs; and
- the law/forum applicable to a separate dispute with Apple.

A refund request made to Apple does not itself waive the consumer's court rights against CK-Labs where a separate CK-Labs claim remains.

## 8. Google Play relationship

Google Play's current EEA terms govern the separate relationship with Google and include their own purchase, refund, withdrawal, and dispute provisions.

Do not state that a Google term automatically determines the governing law or court for a separate CK-Labs/TycoonX dispute.

Likewise, a CK-Labs clause cannot remove a consumer right that arises under the separate Google/consumer transaction where Google is responsible for that right.

Keep provider refund decisions, CK-Labs entitlement delivery, and CK-Labs consumer-law obligations transaction-specific.

## 9. Xsolla webshop relationship

Xsolla currently publishes separate customer and publisher legal agreements. Some Xsolla agreements contain California governing-law, arbitration, or class-action language, while Xsolla also recognizes that mandatory national consumer rights can apply.

Do not copy a California-law, Los Angeles arbitration, class-action waiver, short claim limitation, or other Xsolla dispute clause into the CK-Labs/TycoonX consumer Terms merely because Xsolla is used as merchant of record or payment provider.

For each Xsolla transaction, identify:

- the exact Xsolla entity shown at checkout/receipt;
- whether Xsolla is the merchant of record for the transaction;
- the transaction-specific Xsolla customer terms;
- the CK-Labs obligation to deliver or reconcile the TycoonX entitlement; and
- whether the consumer's complaint is against Xsolla, CK-Labs, or both concerning different obligations.

A provider's arbitration clause can govern the provider's own contract only to the extent valid and applicable to that relationship. It is not a reusable CK-Labs waiver template.

## 10. ADR and court rights remain separate

The German VSBG/consumer ADR gates remain separate from court jurisdiction.

Providing information about a Verbraucherschlichtungsstelle under § 37 VSBG does not:

- create mandatory arbitration where none exists;
- waive a consumer's competent court;
- make CK-Labs voluntarily participate in every ADR procedure unless CK-Labs has made that commitment or is legally required to participate; or
- convert an ADR request into evidence of fraud or payment abuse.

The discontinued former EU ODR platform is not a substitute for the current court or ADR framework.

## 11. Refunds, chargebacks, and litigation are not the same thing

A consumer may use a provider refund process, statutory withdrawal, conformity remedy, ADR process, regulator complaint, chargeback process where available, or court action.

Using one route does not automatically waive another non-waivable route, subject to rules against double recovery and the final effect of a valid settlement, judgment, refund, or other legally binding resolution.

A consumer filing a lawful complaint or claim is not by itself evidence of:

- fraud;
- chargeback abuse;
- exploit use;
- account compromise;
- regional-price abuse; or
- entitlement abuse.

CK-Labs can still investigate actual forged evidence, deliberate refund cycling, fraudulent payment instruments, exploit-generated value, manipulated transactions, or other independently evidenced abuse.

## 12. Paid-entitlement isolation while a dispute is pending

A dispute about governing law, jurisdiction, ADR, or forum does not by itself authorize unrelated entitlement removal.

- A jurisdiction dispute concerning one Diamond transaction must not wipe unrelated legitimately purchased Diamonds.
- Filing a claim must not restart, extend, shorten, or duplicate the original one-time 30-Day VIP clock.
- Filing a claim, ADR request, or provider complaint does not create a hidden expiry for valid Lifetime VIP or convert it into 30-Day VIP.
- A real refund, reversal, invalid payment, final judgment, settlement, serious Terms violation, or other lawful underlying basis may still support the transaction-specific correction permitted by the canonical Terms.

Do not freeze an entire TycoonX account merely because a user contests forum or governing law unless a separate security, fraud, payment, legal-process, or enforcement basis reasonably requires a restriction.

## 13. Regional pricing does not choose governing law by itself

Regional price assignment, currency, VAT treatment, storefront, payment method, or IP geolocation can be evidence relevant to market targeting, but none of them alone should be treated as a contractual choice of governing law or forum.

A player paying a German EUR price does not automatically lose mandatory protections of another qualifying habitual-residence law.

A player temporarily travelling does not automatically acquire a new habitual residence merely because the device IP address changes.

Regional-price abuse remains a separate factual question and must not be invented merely to avoid a consumer forum.

## 14. Account residence, payment country, and habitual residence are different concepts

Do not automatically equate:

- App Store country;
- Google Play country;
- Xsolla billing country;
- payment-card issuing country;
- IP geolocation;
- profile country;
- tax location; or
- temporary travel location

with the legal concept of habitual residence for Rome I or domicile for Brussels I.

Where the distinction matters to a material dispute, preserve the minimum relevant evidence and assess it lawfully rather than silently choosing whichever signal favors CK-Labs.

## 15. Business sale, merger, and successor operator

If TycoonX is sold, merged, reorganized, or transferred to a successor operator:

- do not assume the old German-law clause automatically remains optimal or valid in the same form;
- assess the successor's establishment, directed markets, platform contracts, and consumer-law obligations;
- preserve existing non-waivable rights;
- provide any notice or consent required for the contractual transfer; and
- do not use the business transfer as a device to move existing consumers into a less protective forum retroactively.

A successor can adopt lawful new terms prospectively subject to the legal-document-change gate and mandatory consumer rules.

## 16. Permanent shutdown and provider exit

A permanent service shutdown, Apple/Google removal, Xsolla termination, provider migration, or infrastructure failure does not retroactively change the law or forum governing an already existing consumer dispute.

Shutdown may affect the substantive entitlement and remedies as described in the permanent-shutdown gate, but it does not create a new right for CK-Labs to impose a previously unavailable exclusive forum.

## 17. Support and legal-response rules

Support must not tell a consumer:

- `you can only sue us in Cologne`;
- `German law means your country's consumer protections do not apply`;
- `using Apple/Google/Xsolla means you have no claim against CK-Labs`;
- `using ADR means you waived court`; or
- `a chargeback means you forfeited all legal remedies`.

Support may explain which entity handled the payment, which refund route is operationally appropriate, what records CK-Labs needs, and which TycoonX entitlement is affected.

Escalate material cross-border jurisdiction questions rather than improvising a binding legal conclusion from profile country or IP address.

## 18. Release test matrix

Before a material change to governing-law, forum, dispute, or provider wording, test at least:

1. German consumer using Apple App Store;
2. German consumer using Google Play;
3. German consumer using the Xsolla webshop;
4. French consumer deliberately served by TycoonX who buys through Xsolla;
5. another EU consumer deliberately served by a localized TycoonX offer;
6. EU consumer temporarily travelling outside the home Member State;
7. user whose payment-card country differs from habitual residence;
8. provider terms containing a California or arbitration clause;
9. consumer opening German VSBG ADR while retaining court rights;
10. consumer making a lawful chargeback/refund request and later raising a separate conformity claim;
11. business transfer to a successor operator;
12. provider migration after a dispute has already arisen;
13. dispute about one Diamond purchase with unrelated paid value on the same account;
14. active one-time 30-Day VIP during a jurisdiction dispute; and
15. valid Lifetime VIP during a jurisdiction dispute.

For each scenario, capture the contracting entities, relevant country/residence facts, applicable provider terms, CK-Labs clause, mandatory-rights caveat, forum analysis, entitlement effect, and escalation decision.

## 19. Evidence CK-Labs should retain

Maintain a dated release record showing:

- the exact canonical governing-law and consumer-jurisdiction text;
- the Terms version accepted or otherwise incorporated for the relevant transaction where needed;
- the transaction channel and contracting merchant;
- provider terms/version or durable transaction record where legally necessary and available;
- the country/market configuration used for the offer;
- any material cross-border consumer-jurisdiction assessment;
- ADR information sent under a mandatory post-dispute duty;
- the entitlement record and any transaction-specific correction; and
- the reason for any restriction or enforcement action separate from the consumer's use of a lawful remedy.

Apply GDPR data minimization and retention rules. This gate is not permission to retain unnecessary identity, travel, IP, or payment data merely because a future jurisdiction dispute is theoretically possible.

## 20. Regression rules

This gate must never be weakened to say that:

- choosing German law eliminates mandatory protections of a qualifying consumer's habitual-residence law;
- every EU consumer must litigate only in Germany;
- accepting TycoonX Terms automatically creates a valid pre-dispute exclusive German forum for every consumer;
- Apple, Google, or Xsolla dispute wording can automatically be copied into the CK-Labs consumer relationship;
- provider arbitration automatically replaces German/EU consumer court rights;
- a consumer's lawful use of refund, ADR, regulator, chargeback, or court mechanisms proves fraud;
- a jurisdiction dispute permits wiping unrelated Diamonds, restarting 30-Day VIP, or expiring Lifetime VIP; or
- a regional price, IP address, or payment-card country automatically proves habitual residence.

## 21. Localization impact

This release gate does **not** by itself change the public canonical English Terms. The current canonical wording already states that German law applies without depriving consumers of mandatory protections available under the law of their habitual country of residence where applicable, and that consumer jurisdiction is determined by mandatory statutory rules.

Therefore the completed localization queue does not need to be reopened for this operational hardening alone.

If the canonical governing-law or jurisdiction meaning is materially changed later, reopen the localized **Terms** documents in the prescribed locale order and update `TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md` after each localization change.

## Current legal checkpoint

Reviewed on September 2, 2026 against:

- Regulation (EC) No 593/2008 (Rome I), especially Article 6 on consumer contracts;
- Regulation (EU) No 1215/2012 (Brussels I Recast), especially Articles 17, 18, and 19 on consumer jurisdiction;
- the European e-Justice Portal's current explanation of cross-border jurisdiction and consumer cases;
- current Apple Media Services terms, which separately address governing law/forum for Apple's own relationship with users;
- current Google Play EEA terms, which separately govern Google Play purchases, refunds, withdrawal, and dispute handling; and
- current Xsolla customer/publisher legal materials, which demonstrate why provider-specific governing-law/arbitration language must not be transplanted automatically into CK-Labs consumer Terms.

Recheck current provider terms before a material provider, checkout, or dispute-clause change.

## Founder-protective interpretation

This gate does not prevent CK-Labs from choosing German law, defending claims, contesting an incorrect forum, using lawful ADR, settling disputes, correcting a refunded or invalid transaction, enforcing genuine anti-fraud rules, or using Apple, Google, and Xsolla according to their valid transaction roles.

It protects CK-Labs by avoiding dispute clauses that look strong but are unenforceable against consumers, by keeping provider contracts separate, and by preserving transaction-specific entitlement corrections without retaliating against lawful consumer remedies.
