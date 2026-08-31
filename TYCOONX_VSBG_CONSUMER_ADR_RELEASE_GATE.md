# TycoonX German Consumer ADR / VSBG Release Gate

Last reviewed: **September 1, 2026**

This gate governs TycoonX consumer-dispute information for Germany. It is an implementation and release-evidence checklist. It does not replace the canonical TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, Community Standards, or transaction-specific mandatory consumer rights.

The current TycoonX legal copy already preserves the right baseline: support first, German consumer-conciliation information where required, no false general promise to participate, and no obsolete EU Online Dispute Resolution platform link. The remaining release task is to prove the actual CK-Labs VSBG classification and keep website, Terms, support and dispute handling aligned with it.

## 1. Current-law checkpoint

As of September 1, 2026:

- **§ 36 VSBG** governs the general consumer-conciliation information duty for traders that maintain a website or use standard terms and conditions.
- **§ 37 VSBG** applies after a dispute concerning a consumer contract could not be resolved directly between the trader and consumer and requires the consumer to receive specified information in **text form**.
- the former EU Online Dispute Resolution platform is no longer a current dispute-resolution route. Regulation (EU) 2024/3228 repealed the ODR regime with effect from **July 20, 2025**;
- Directive (EU) **2025/2647** entered into force on **January 19, 2026**, but Member States have until **March 20, 2028** to transpose the amended ADR rules and the Directive generally requires application from **September 20, 2028**. Do not treat those future amendments as if they had already replaced the current German VSBG in September 2026; and
- DSA Article 21 out-of-court dispute settlement is a separate mechanism from VSBG consumer conciliation and must not be merged with it.

Official references:

- German VSBG: https://www.gesetze-im-internet.de/vsbg/
- Regulation (EU) 2024/3228: https://eur-lex.europa.eu/eli/reg/2024/3228/oj/eng
- Directive (EU) 2025/2647: https://eur-lex.europa.eu/eli/dir/2025/2647/oj/eng
- Federal Office of Justice list of recognized consumer conciliation bodies: https://www.bundesjustizamt.de/SharedDocs/Downloads/DE/Verbraucherschutz/Liste_Verbraucherschlichtungsstellen.pdf

## 2. Release-day classification record

Before relying on an exemption or publishing a participation statement, preserve a dated internal record containing:

1. the number of persons employed by the relevant CK-Labs trader on **December 31, 2025** for purposes of § 36(3) VSBG;
2. whether CK-Labs has voluntarily committed itself to participate before any Verbraucherschlichtungsstelle;
3. whether any law, contract, platform arrangement, sector rule, court order, settlement, or other binding instrument requires participation;
4. if participation is required or voluntarily committed, the exact competent consumer conciliation body, current address and website;
5. the public website wording in force on September 1, 2026;
6. the wording supplied together with the TycoonX Terms where § 36 requires it; and
7. the support template used when § 37 applies after an unresolved consumer dispute.

Do not infer the employee-count exemption from the words “indie”, “small”, “solo”, “individual”, or from a developer-store account type. Use the actual statutory employee-count snapshot.

## 3. § 36 VSBG general information duty

Where § 36(1) no. 1 applies, TycoonX must tell consumers, in an easily accessible, clear and comprehensible way, **to what extent CK-Labs is willing or obliged to participate** in dispute-resolution proceedings before a consumer conciliation body.

The information must appear:

- on the trader's website if it maintains a website; and
- together with its standard terms and conditions if it uses standard terms and conditions.

A vague statement such as “consumer ADR may be available” is not a substitute for the required participation-status statement when § 36(1) no. 1 applies.

### Employee-count exemption

Under § 36(3) VSBG, a trader that employed **ten or fewer persons on December 31 of the previous year** is exempt from the information duty in **§ 36(1) no. 1**.

Important limits:

- this is not a blanket exemption from the VSBG;
- it does not erase § 37 after an unresolved consumer-contract dispute;
- it does not create a right to misstate whether CK-Labs has voluntarily committed or is legally obliged to participate; and
- it does not remove § 36(1) no. 2 where CK-Labs has committed itself or is legally obliged to participate and that provision therefore requires the competent body information.

If CK-Labs later grows beyond the exemption threshold, recalculate using the legally relevant December 31 snapshot rather than waiting for the next Terms rewrite.

## 4. § 36(1) no. 2 when participation is committed or mandatory

If CK-Labs has committed itself to participate or is legally obliged to participate, the consumer-facing information must identify the competent Verbraucherschlichtungsstelle and include:

- its address;
- its website; and
- a statement that CK-Labs will participate in proceedings before that body.

Do not name a conciliation body merely because it appears on a general list. Confirm that it is actually competent for the relevant TycoonX consumer dispute and that its details are current.

The Federal Office of Justice currently lists the **Universalschlichtungsstelle des Bundes - Zentrum für Schlichtung e. V.** among recognized bodies. Its presence on the list does not mean TycoonX must name it in every case or that CK-Labs has automatically committed to participate.

## 5. § 37 VSBG after an unresolved dispute

If CK-Labs and a consumer cannot resolve a dispute about a consumer contract, apply § 37 separately from the general website notice.

The consumer must receive, in **text form**:

- the competent consumer conciliation body;
- that body's address;
- that body's website; and
- whether CK-Labs is willing or obliged to participate there.

Operational rule: the support case should not be marked fully closed until the required § 37 information has been generated and preserved where the provision applies.

A generic footer link to the Impressum is not a substitute for the transaction-specific text-form § 37 notice after an unresolved dispute.

## 6. Keep VSBG, DSA and payment disputes separate

Do not collapse the following into one “appeal” flow:

- a § 37 VSBG consumer-contract notice;
- a DSA Article 20 internal moderation complaint;
- DSA Article 21 certified out-of-court dispute settlement;
- an Apple refund request;
- a Google Play refund, void, chargeback or collaborative chargeback review;
- an Xsolla refund, reversal or chargeback;
- a GDPR complaint or data-subject request; or
- a court claim.

They can involve the same facts, but they have different legal bases, deadlines, decision makers and consequences.

Do not tell a consumer that using Apple, Google Play or Xsolla support replaces a mandatory VSBG route where German law requires one. Likewise, a VSBG notice does not itself order Apple, Google Play or Xsolla to refund a transaction.

## 7. No obsolete EU ODR wording

The former EU ODR platform must not be presented as a current mandatory dispute-resolution mechanism.

Release QA must reject:

- a live link to the former ODR platform presented as the current EU complaint route;
- wording saying consumers “must” submit disputes through the discontinued platform;
- boilerplate copied from pre-July-2025 website templates; or
- language that confuses the repealed ODR platform with DSA Article 21 or German VSBG conciliation.

Historical references are acceptable only when clearly identified as historical or explaining why no current ODR link is provided.

## 8. Directive (EU) 2025/2647 future-change watch

Do not prematurely rewrite TycoonX as though the 2025 ADR amendment were already fully transposed in Germany.

Create a legal-review checkpoint no later than **March 20, 2028**, and earlier if Germany publishes implementing legislation before then. Before **September 20, 2028**, verify the final German implementation and update TycoonX legal/support flows as necessary.

If Germany implements the Directive earlier than the Union deadline, follow the actual German effective date rather than this planning date.

## 9. Founder-protective but fair dispute handling

CK-Labs may protect itself against duplicate, abusive or fraudulent claims, but the VSBG information duties must not be turned into a waiver of mandatory consumer rights.

Safe rules:

- preserve transaction-specific evidence and the actual disputed order;
- distinguish a refund request from a payment chargeback;
- distinguish a good-faith legal complaint from entitlement abuse;
- do not demand that a consumer waive court rights, statutory withdrawal rights, conformity remedies or other mandatory rights as the price of receiving legally required ADR information;
- do not characterize a consumer as fraudulent merely because they use a legally available conciliation or complaint route; and
- do not promise that a conciliation body can bind a platform, payment provider or court beyond its legal competence.

## 10. Diamonds, 30-Day VIP and Lifetime VIP isolation

Receiving or processing a VSBG complaint must never by itself:

- grant, replay, remove or duplicate purchased **Diamonds**;
- restart, shorten, extend or duplicate a one-time **30-Day VIP**;
- revoke, duplicate, convert or recreate **Lifetime VIP**;
- create an Apple App Store refund;
- create a Google Play refund or void;
- create an Xsolla refund, reversal or chargeback; or
- convert a consumer-law disagreement into hack, exploit, chargeback-abuse or regional-price-abuse findings.

Entitlement changes require the separate authoritative transaction, entitlement, contractual and mandatory-consumer-law analysis already defined by the TycoonX payment gates.

A consumer who wins a conciliation recommendation does not automatically receive unrelated in-game value. A consumer who loses or declines conciliation does not thereby forfeit unrelated valid purchases.

## 11. Current TycoonX Impressum assessment

`app/tycoonx-impressum/page.tsx` currently includes:

- provider information under **§ 5 DDG**;
- electronic contact information;
- a conditional DSA contact point;
- a consumer-disputes section that correctly does not link to the discontinued EU ODR platform; and
- a conditional § 37 VSBG statement.

That public page should not be changed to claim a general VSBG participation obligation or voluntary commitment until the § 36 classification record in this gate is completed.

If § 36(1) no. 1 applies, add the exact participation-status wording to the website and ensure it is supplied together with the TycoonX Terms as required. If the § 36(3) exemption applies and CK-Labs has no separate commitment or legal participation duty, retain the evidence rather than inventing an unnecessary statutory claim.

## 12. Minimum release evidence

Keep a dated packet containing:

- December 31, 2025 employee-count evidence;
- voluntary/mandatory ADR participation status;
- screenshot or saved HTML of the TycoonX Impressum consumer-disputes section;
- the canonical Terms section dealing with consumer dispute resolution;
- one successful direct-resolution support example;
- one simulated unresolved German consumer-contract case showing the § 37 text-form notice;
- the source and date used to verify the competent conciliation body's details;
- evidence that the old EU ODR URL is not presented as a current route; and
- a reminder for the 2028 Directive (EU) 2025/2647 implementation review.

Do not store unrelated private chat, credentials, full card information or excessive account history merely to prove ADR compliance.

## 13. Release tests

Before declaring this gate operationally complete, test at least:

1. a resolved German purchase dispute does not unnecessarily create a § 37 notice;
2. an unresolved German consumer-contract dispute produces the required text-form information where § 37 applies;
3. the competent body's address and website come from a current authoritative source;
4. the website/Terms participation-status statement matches the actual § 36 classification;
5. a user opening a VSBG dispute does not trigger an Apple, Google Play or Xsolla refund automatically;
6. a VSBG dispute does not change unrelated Diamonds, 30-Day VIP or Lifetime VIP;
7. a moderation appeal is not mislabeled as a VSBG consumer-contract dispute merely because the user also bought VIP;
8. the discontinued EU ODR platform is not presented as the current complaint route;
9. DSA Article 21 information remains separate where applicable; and
10. employee-count evidence is recalculated for the next legally relevant year rather than copied forward indefinitely.

## 14. Canonical/localization consequence

This gate does **not** materially change the canonical English Terms, Purchases & Refunds Policy, Privacy Policy or Community Standards as of September 1, 2026. The canonical Terms already state the conditional German consumer-conciliation rule, § 37 handling and discontinued ODR status.

Therefore the completed 25-locale localization queue remains closed unless a future § 36 classification produces a material public Terms change. If that happens, reopen only the affected localized document type and synchronize it in the required locale order.

## 15. Release decision

**Open operational item:** complete and preserve the actual CK-Labs § 36 VSBG classification record. Until that is documented, do not publish a new statement claiming that CK-Labs is generally obliged or voluntarily committed to participate in consumer conciliation.

This unresolved classification does not justify removing the existing § 37 safeguard, the current consumer-support route, or any mandatory TycoonX consumer remedy.