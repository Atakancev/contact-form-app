# TycoonX Consumer ADR / ODR 2026 Recheck

Checked: **September 11, 2026**

Scope: CK-Labs / TycoonX legal and support handling for German and EU consumer dispute-resolution information. This is an implementation/compliance checkpoint, not a promise that CK-Labs voluntarily participates in a consumer conciliation procedure.

## Result

No stale reference to the former EU Online Dispute Resolution Platform was found in the current `Atakancev/contact-form-app` repository using searches for the former ODR terminology and dispute-resolution wording. The current TycoonX legal pages therefore do **not** need a player-facing localization rewrite solely for the ODR-platform shutdown.

Do not add the old EU ODR-platform link or language telling players to submit a complaint through that platform.

## Current EU position

Regulation (EU) 2024/3228 discontinued the European Online Dispute Resolution Platform and repealed Regulation (EU) No 524/2013.

- Submission of new complaints to the former ODR platform ended on **March 20, 2025**.
- Regulation (EU) No 524/2013 was repealed with effect from **July 20, 2025**.
- The platform itself was discontinued and its case information was to be deleted by **July 20, 2025**.

Official source: https://eur-lex.europa.eu/eli/reg/2024/3228/oj

Directive (EU) 2025/2647 subsequently amended the EU consumer ADR framework following discontinuation of the ODR platform. It entered into force on **January 19, 2026**; Member States have later transposition/application deadlines in 2028. This should remain on the legal-change watchlist rather than being treated as if every future provision were already implemented in German law today.

Official source: https://eur-lex.europa.eu/eli/dir/2025/2647/oj

## Current German VSBG checkpoint

### Section 36 VSBG: general website / terms information

Under current § 36 VSBG, a trader that maintains a website or uses terms and conditions must, where the provision applies, clearly and accessibly state the extent to which it is willing or obliged to participate in dispute-resolution proceedings before a consumer conciliation body.

If the trader has committed itself to participation, or is legally obliged to participate, the information must also identify the competent consumer conciliation body, including its address and website, and state that the trader will participate before that body.

§ 36(3) contains a limited small-business exception from the information duty in § 36(1) no. 1 for a trader that employed **ten or fewer persons on December 31 of the preceding year**. This exception must not be generalized beyond its statutory wording. In particular, it should not be used as a blanket statement that all VSBG duties disappear.

Official source: https://www.gesetze-im-internet.de/vsbg/__36.html

### Section 37 VSBG: information after an unresolved consumer dispute

§ 37 VSBG is operationally separate from the general website disclosure. If a dispute concerning a consumer contract cannot be settled directly between the trader and consumer, the trader must inform the consumer in **text form** about a competent consumer conciliation body, including its address and website, and must also state whether the trader is willing or obliged to participate in proceedings before that body.

Official source: https://www.gesetze-im-internet.de/vsbg/__37.html

## TycoonX implementation rule

1. Do **not** restore or add the obsolete EU ODR-platform link.
2. Do **not** claim that CK-Labs participates in consumer ADR unless that willingness or legal obligation is factually correct.
3. Do **not** claim that CK-Labs refuses ADR unless that is the actual current business position and the statement is legally appropriate.
4. Recheck the § 36 disclosure annually against the actual CK-Labs headcount as of December 31 of the preceding year and against any participation commitment or statutory obligation then applicable.
5. Maintain a support/legal response path for § 37 so an unresolved German consumer-contract dispute can receive the required text-form information without staff having to improvise it.
6. The § 37 response must use the actually competent consumer conciliation body at the time of the dispute. Do not hard-code a body into permanent TycoonX legal copy without verifying competence and current contact details.
7. Apple App Store, Google Play and Xsolla involvement does not justify an obsolete ODR reference. Allocation of refund/payment responsibilities to those providers remains separate from CK-Labs' own mandatory consumer-information duties where applicable.
8. Do not use ADR language to waive mandatory court access, statutory remedies, withdrawal rights, conformity rights, refund rights, liability rules, or other non-waivable German/EU consumer protections.

## Support acceptance test

Before commercial/legal readiness is treated as complete, verify that CK-Labs can handle this scenario:

> A German consumer disputes a TycoonX purchase or digital entitlement. Support exchanges messages with the consumer but the dispute cannot be settled directly.

The escalation workflow should be able to produce a text-form notice that:

- identifies the competent consumer conciliation body with current address and website;
- states accurately whether CK-Labs is willing or obliged to participate;
- does not point to the discontinued EU ODR platform;
- does not falsely transfer CK-Labs' own legal duties to Apple, Google or Xsolla;
- preserves all mandatory consumer rights; and
- stores enough evidence to show what information was sent and when.

## Repository impact

No canonical TycoonX Terms, Purchases & Refunds, Privacy Policy, Community Standards, localized full document, or localized legal hub required modification from this checkpoint because no stale ODR-platform reference was found and no new player-facing legal meaning was introduced.

The next material legal synchronization should occur only if the canonical legal meaning changes or an actual TycoonX page/support template is found to contain obsolete or inaccurate ADR/ODR wording.
