# TycoonX German Consumer Dispute Resolution and Retired EU ODR Gate

**Last reviewed: September 11, 2026**  
Owner: CK-Labs  
Scope: TycoonX consumer-facing websites, legal notices, Terms, checkout support, purchase disputes, refund disputes and post-dispute support for German consumers.

This is an internal implementation and legal-readiness control. It does not replace the canonical TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy or Community Standards.

## 1. Core rule

Do not publish, restore or rely on the former European Commission Online Dispute Resolution platform as an active consumer complaint route.

Regulation (EU) 2024/3228 discontinued the EU ODR platform. New complaints stopped on March 20, 2025, and Regulation (EU) No 524/2013 was repealed with effect from July 20, 2025.

Accordingly:

- do not link to the former ODR platform as though it still accepts disputes;
- do not tell TycoonX players that they can submit a complaint through the former EU ODR platform;
- do not copy old German website templates that still contain the obsolete ODR link or obsolete ODR wording;
- do not treat removal of the old ODR link as removal of all German consumer-dispute information duties;
- separately assess and satisfy the German Verbraucherstreitbeilegungsgesetz, especially sections 36 and 37, where applicable.

Official sources:

- Regulation (EU) 2024/3228: https://eur-lex.europa.eu/eli/reg/2024/3228/oj
- German VSBG: https://www.gesetze-im-internet.de/vsbg/

## 2. Repository status checked on September 11, 2026

The repository search did not find the former Commission ODR URL, `OS-Plattform`, or the phrase `Online Dispute Resolution` in the current default branch.

That is a positive result. The purpose of this gate is to prevent obsolete ODR wording from being reintroduced later and to make the separate German VSBG duties explicit.

## 3. Section 36 VSBG - general website and Terms information

For a trader that maintains a website or uses terms and conditions, section 36 VSBG contains information duties concerning consumer conciliation.

The implementation must determine and document:

1. whether CK-Labs is willing to participate in dispute-resolution proceedings before a consumer conciliation body;
2. whether CK-Labs is legally obliged to participate under another rule, commitment or arrangement;
3. if CK-Labs has committed itself or is legally obliged to participate, which consumer conciliation body is competent and what address and website must be given;
4. whether the employee-count exemption in section 36(3) currently applies.

Section 36(3) exempts a trader that employed ten or fewer persons on December 31 of the previous year from the information obligation in section 36(1) no. 1. Do not turn this into a permanent hard-coded exemption. Reassess the employee count each year and whenever the legal/operator structure changes.

The exemption in section 36(3) is expressly tied to section 36(1) no. 1. Do not assume it automatically erases every other VSBG duty or a separate statutory/contractual obligation to participate.

If section 36 information is required, it must be easily accessible, clear and comprehensible. Where applicable it must appear on the website and be supplied together with the Terms and Conditions.

## 4. Section 37 VSBG - notice after an unresolved dispute

Section 37 VSBG is a separate post-dispute duty.

If CK-Labs and a consumer cannot resolve a dispute concerning a consumer contract, the consumer must be informed in text form of a consumer conciliation body competent for the dispute, including its address and website, and whether CK-Labs is willing or obliged to participate in proceedings before that body.

Do not use the former EU ODR platform for this notice.

The operational support flow should therefore have a distinct state for an unresolved consumer-contract dispute. Once that state is reached, support should be able to generate the current section 37 notice using verified conciliation-body information and CK-Labs' current participation position.

The post-dispute notice must not be confused with:

- an Apple refund request;
- a Google Play refund request;
- an Xsolla payment-support ticket;
- a chargeback;
- a statutory withdrawal request;
- a digital-product conformity complaint;
- an account-compromise report;
- a gameplay support ticket;
- an ordinary request for a goodwill refund.

One case can involve more than one of these processes, but they are not legally identical.

## 5. Apple, Google Play and Xsolla do not replace CK-Labs' VSBG analysis

Apple, Google Play and Xsolla can control or assist with payment confirmation, store refund processes, chargebacks, tax handling, fraud screening and provider-specific support.

Those provider processes do not by themselves decide whether CK-Labs has a German VSBG information duty.

For TycoonX:

- Apple purchase-support or refund tools should be described as Apple-controlled processes where that is accurate;
- Google Play purchase-support or refund tools should be described as Google-controlled processes where that is accurate;
- Xsolla payment support should be described according to the real webshop/payment arrangement;
- CK-Labs must still provide any information that German law independently requires from CK-Labs as the relevant trader/operator;
- no provider's dispute process should be represented as the discontinued EU ODR platform.

## 6. Product-specific examples

### Diamonds

A German player disputes a Diamond purchase made through the CK-Labs TycoonX webshop. The first step can include transaction verification and the applicable Xsolla refund/support process. If the contractual dispute remains unresolved, the separate section 37 VSBG assessment still applies.

A refund or dispute concerning one Diamond transaction must not be used as a reason to remove unrelated earned, promotional or separately purchased Diamonds.

### One-time 30-Day VIP

A player disputes one one-time, non-renewing 30-Day VIP purchase. Support must identify the exact payment source and transaction. The existence of an Apple, Google Play or Xsolla refund route does not replace a required German post-dispute notice.

A dispute about one 30-Day VIP source must not delete a separate valid Lifetime VIP or another unrelated valid VIP source.

### Lifetime VIP

Lifetime VIP remains a limited-time promotional one-time offering available only during selected genuine sales windows. It may be withdrawn from future sale and may never return.

If a German consumer dispute about a Lifetime VIP purchase cannot be resolved directly, section 37 must be handled separately from payment-provider support. The fact that the relevant promotional sales window has closed does not remove mandatory consumer dispute, withdrawal, conformity or other statutory rights.

## 7. Founder-protective operating rules

The legally safer operating model is:

- keep a clear first-line CK-Labs support path for purchase and contract complaints;
- identify the transaction and payment channel before making entitlement changes;
- distinguish a complaint, refund, withdrawal, chargeback and formal unresolved consumer dispute;
- state accurately whether CK-Labs is willing or obliged to participate in consumer conciliation;
- never promise participation in a specific conciliation body unless CK-Labs is actually willing or obliged and the body is competent;
- never claim that CK-Labs is legally exempt merely because the business is currently small without checking the applicable employee threshold and other duties;
- preserve evidence of the final support position and the section 37 notice when one is required;
- do not use conciliation language to threaten, deter or penalize a consumer for exercising mandatory rights;
- do not classify an ordinary refund, withdrawal or chargeback as fraud without separate evidence of intentional abuse.

## 8. Annual and change-trigger review

Recheck this gate when any of the following happens:

- the calendar year changes, because the section 36 employee-count test refers to December 31 of the previous year;
- CK-Labs hires employees or changes legal/operator structure;
- CK-Labs makes a binding commitment to participate in consumer conciliation;
- another law makes participation mandatory;
- the competent consumer conciliation body changes;
- a new German or EU ADR reform enters into force;
- the TycoonX webshop operator or merchant/payment structure changes;
- legal templates, footer links, checkout notices or Terms are replaced;
- Apple, Google Play or Xsolla support/refund wording is materially changed.

## 9. Regression checks

Before shipping or replacing a German legal/footer/support surface, verify all of the following:

1. No active link points consumers to the discontinued EU ODR platform.
2. No wording says the former EU ODR platform currently accepts complaints.
3. No old template refers to Regulation (EU) No 524/2013 as a current website-link obligation.
4. The current section 36 VSBG position has been documented from real CK-Labs facts.
5. The December 31 prior-year employee count has been checked before relying on section 36(3).
6. Any required section 36 information is clear and accessible in the required surfaces.
7. A support procedure exists for recognizing an unresolved consumer-contract dispute.
8. A current section 37 notice can be sent in text form where required.
9. The notice identifies the correct competent consumer conciliation body rather than a guessed or obsolete body.
10. The notice accurately states whether CK-Labs is willing or obliged to participate.
11. Apple, Google Play and Xsolla refund/support processes are not mislabeled as statutory consumer conciliation.
12. The process does not waive or limit mandatory withdrawal, conformity, refund, price-reduction, termination, liability or other consumer rights.
13. Entitlement changes remain source-specific and do not wipe unrelated valid Diamonds or VIP.
14. German-facing legal copy consistently displays the game name as `TycoonX`.
15. German-facing current-service copy does not describe TycoonX as beta.

## 10. Current closure condition

This gate is not fully closed merely because no obsolete ODR link is present in the repository.

Closure requires CK-Labs to verify and record its current section 36 position using real operator facts, including the relevant prior-year-end employee count and whether CK-Labs is willing or obliged to participate in consumer conciliation, then verify the correct competent consumer conciliation body and establish the section 37 post-dispute notice workflow.

Do not invent these facts in legal copy. Once verified, publish only the information actually required and keep it current.