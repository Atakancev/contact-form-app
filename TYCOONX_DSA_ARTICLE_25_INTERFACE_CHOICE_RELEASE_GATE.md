# TycoonX DSA Article 25 Interface & Choice Release Gate

Last reviewed: 2026-09-03
Owner: CK-Labs
Scope: TycoonX EU/EEA online interfaces, including UGC/social surfaces, in-game commercial prompts, Diamond/VIP offer surfaces, account/settings flows, and any CK-Labs-controlled interface that forms part of a DSA online-platform service.

## Purpose

This gate closes the interface-design gap between TycoonX's existing EU promotion, virtual-currency, youth-protection, checkout and DSA controls.

The central rule is simple: if a TycoonX surface is within DSA Article 25, CK-Labs must not design, organise or operate that online interface in a way that deceives or manipulates recipients or otherwise materially distorts or impairs their ability to make free and informed decisions.

This is not a rule that every commercial prompt must be visually neutral in every respect, and it does not prohibit genuine advertising, genuine promotions, upselling, or offering an additional service. It is a release gate against manipulative interface architecture and against using interface design to defeat a real choice.

## 1. Scope first: do not over-apply or under-apply Article 25

Article 25 is in Section 3 of Chapter III of Regulation (EU) 2022/2065 and applies to providers of **online platforms** when the statutory scope conditions are met.

Before treating Article 25 as a direct TycoonX obligation for a particular surface, record:

1. whether the relevant TycoonX functionality is an intermediary/hosting service;
2. whether it qualifies as an **online platform**, including the dissemination-to-the-public element;
3. whether the specific interface forms part of that online-platform service;
4. whether CK-Labs currently qualifies as a micro or small enterprise for DSA Article 19 purposes; and
5. whether any VLOP designation or other statutory circumstance removes the Article 19 exclusion.

### Article 19 micro/small-enterprise boundary

DSA Article 19 currently excludes qualifying micro and small online-platform providers from Section 3, except Article 24(3), subject to the statutory transition after loss of that status and the VLOP exception.

Therefore:

- do not automatically impose Article 25 on CK-Labs merely because TycoonX has online features;
- do not assume the exclusion merely because CK-Labs is an indie business;
- keep a dated, evidence-based Article 19 status determination;
- re-check the determination after material headcount, turnover, balance-sheet, ownership, linked-enterprise, restructuring or platform-scale changes; and
- if TycoonX were ever designated a VLOP, do not rely on micro/small status to avoid Section 3.

The Article 19 analysis is a DSA scope question. It does not switch off the Unfair Commercial Practices Directive, Consumer Rights Directive, GDPR, German UWG, German checkout rules, CPC in-game virtual-currency principles, platform rules or other applicable consumer protections.

## 2. Article 25(2): classify the legal route correctly

Article 25(2) states that the Article 25(1) prohibition does not apply to practices covered by Directive 2005/29/EC or Regulation (EU) 2016/679.

Operationally:

- if a practice is covered by the Unfair Commercial Practices Directive, analyse and fix it under that consumer-law route rather than claiming Article 25 duplicates the same prohibition;
- if a practice is covered by the GDPR, analyse and fix it under the GDPR route rather than using Article 25 as a substitute legal basis;
- do not interpret Article 25(2) as making the practice lawful; it allocates the applicable legal framework;
- where different interface elements raise different issues, document the applicable route for each element instead of applying one label to the entire screen; and
- keep TycoonX's existing EU promotion/dark-pattern and privacy gates active even when Article 25 itself is excluded.

### Practical example

A fake `Lifetime VIP ends in 04:59` timer that silently resets can already be an unfair commercial practice. The fact that Article 25(2) may leave that practice to consumer law does not make the timer acceptable.

A separate non-commercial account-choice interface that repeatedly obstructs a user's already-made choice may require an Article 25 analysis if that surface is within a non-exempt TycoonX online-platform service.

## 3. Choice prominence must not become choice distortion

Article 25(3)(a) identifies giving more prominence to certain choices when asking the recipient for a decision as a practice for which the Commission may issue guidance. Recital 67 also identifies non-neutral presentation, including visual, auditory or other prominence, as a dark-pattern risk.

TycoonX may still have a primary call-to-action. The release question is whether the whole design materially distorts the user's ability to make a free and informed decision.

Block release where a covered interface, considered as a whole:

- makes a paid or privacy-invasive option overwhelmingly prominent while making the genuine alternative effectively invisible or unintelligible;
- uses button wording that makes the less profitable choice sound dangerous, broken or unavailable when it is not;
- hides a valid decline, skip, back, sign-out, cancellation or settings route through deceptive placement;
- uses misleading visual hierarchy to suggest that a user must buy Diamonds or VIP to continue when the purchase is actually optional;
- creates a false system-warning appearance for an ordinary commercial offer; or
- uses accessibility barriers as a way to make one choice materially harder to exercise.

A larger `Buy` button is not automatically unlawful. A commercially preferred option may be highlighted where the alternative remains clear, accessible and genuinely usable and the presentation does not materially impair the decision.

## 4. Do not nag a completed choice into reversal

Article 25(3)(b) expressly identifies repeatedly requesting a user to make a choice where that choice has already been made, especially through pop-ups that interfere with the user experience.

TycoonX may remind players about genuinely new offers or materially changed circumstances. It must not turn a settled choice into a persistence contest.

Examples of release-risk patterns include:

- a player declines a Diamond offer and the same modal immediately reappears after each normal navigation action;
- a player dismisses a Lifetime VIP promotion and the same unchanged full-screen prompt repeatedly blocks ordinary gameplay in the same session;
- a player chooses a privacy or communication option and the interface repeatedly asks them to reverse it without a material change in context;
- a player selects `not now` and the interface treats every routine screen transition as permission to ask again; or
- an error message is used as a disguised way to reopen an already-declined commercial choice.

A later reminder can still be lawful where frequency, context and design are reasonable. Keep frequency caps for high-pressure monetization surfaces and document intentionally exceptional campaigns.

## 5. Entry, exit, cancellation and purchase discontinuation must be proportionate

Article 25(3)(c) identifies making termination harder than subscription. Recital 67 also points to making choices more difficult or time-consuming, making purchases unreasonably difficult to discontinue, and making sign-out unreasonably difficult.

For TycoonX:

- do not make account sign-out materially harder solely to keep a player captive in a commercial funnel;
- do not place a paid-offer flow over an account/security exit control in a way that blocks a genuine exit;
- do not add unnecessary screens designed only to wear down a user's attempt to leave a purchase flow;
- do not make a future recurring product easier to start than to cancel; the separate recurring-subscription release gate must be reopened before any such product is launched;
- keep the German electronic cancellation-button workflow available where its statutory scope applies; and
- do not confuse cancelling a future purchase or subscription with reversing a completed one-time purchase. Refund/withdrawal rights remain governed by the purchase channel, contract and mandatory law.

Current TycoonX 30-Day VIP is a one-time, non-renewing 30-day entitlement. It must not be presented as a subscription and there is no recurring plan to cancel unless CK-Labs later introduces a different product.

## 6. Commercial prompts inside gameplay

The fact that a prompt appears inside a game does not remove consumer-law or, where applicable, DSA interface obligations.

Do not:

- simulate a gameplay emergency that is actually only a Diamond purchase prompt unless the commercial nature is clear;
- obscure the real monetary implications of a Diamond decision;
- use loss framing to imply that legitimately purchased value will disappear unless the user buys again when that is untrue;
- make closing a promotion cause an unrelated gameplay penalty;
- misrepresent a free gameplay path as unavailable to force a paid alternative; or
- use a fake network, security, prison, production or account warning as a purchase nudge.

Genuine gameplay scarcity, deadlines, competitive events and resource management remain allowed. The key is not to misrepresent a commercial choice as a mandatory system or gameplay action.

## 7. Diamonds and the 2025 CPC in-game virtual-currency principles

TycoonX's dedicated EU/EEA Virtual Currency Release Gate remains the primary implementation gate for purchased Diamonds.

The CPC Network's March 21, 2025 Key Principles on In-Game Virtual Currencies remain a current EU consumer-enforcement benchmark. They address clear and transparent pricing and pre-contractual information, avoiding hidden costs or structures that force consumers to buy virtual currency, withdrawal rights, and consumer vulnerabilities, especially children.

Article 25 must not be used to narrow those protections. Where the relevant Diamond practice is covered by consumer law, apply the CPC/UCPD/CRD analysis even if Article 25 is excluded by Article 19 or Article 25(2).

Examples:

- do not hide the real-world cost of an item behind deliberately confusing Diamond conversions;
- do not force unnecessary paid-currency layers to detach spending from real money;
- do not use stranded Diamond balances as a manipulative reason to pressure another purchase;
- keep withdrawal and digital-content consent logic transaction-specific; and
- do not design monetization around exploiting a child's or vulnerable consumer's tendency to overspend.

## 8. Lifetime VIP, 30-Day VIP and genuine promotions

### Lifetime VIP

Lifetime VIP remains a **limited-time promotional one-time entitlement** offered only during selected genuine sales windows. CK-Labs may withdraw it from future sale, it may never return, and no continuous future availability is promised.

Interface safeguards:

- the limited sales window must be genuine;
- a countdown must correspond to the actual configured offer and must not silently reset as fake urgency;
- a later genuine sales window may have a different price;
- an old window does not create a right to a future offer or price;
- a purchase button cannot imply that generating/opening an Apple, Google Play or Xsolla payment flow itself grants the entitlement; and
- a user declining Lifetime VIP must not be trapped in a repeated blocking prompt designed to exhaust that refusal.

### 30-Day VIP

30-Day VIP remains a **one-time, non-renewing 30-day entitlement**. Do not use subscription terminology, automatic-renewal UI or cancellation dark patterns for this current product.

If recurring VIP is ever introduced, do not reuse the current one-time-product copy or interface. Reopen the dedicated recurring-subscription gate and update canonical/localized legal wording where the public contractual meaning changes.

## 9. Payment-channel separation remains mandatory

Apple App Store, Google Play and the CK-Labs TycoonX webshop using Xsolla have different payment, tax, refund, fraud-screening, regional-availability and reporting roles.

Article 25 compliance does not permit TycoonX to falsify those roles.

Do not:

- present a CK-Labs UI as if Apple, Google or Xsolla has approved a discount that it has not approved;
- hide the actual provider checkout total behind a lower CK-Labs teaser amount;
- treat opening an external checkout as proof of payment;
- grant Diamonds or VIP because a browser/deep-link callback occurred without authoritative payment confirmation;
- use a declined payment as an excuse to reopen the same purchase prompt indefinitely; or
- use a provider outage to display a fake urgency message such as `buy now or lose this forever` unless that claim is actually true.

Completed purchases are not retroactively repriced merely because a later interface, regional price, tax rate, currency rate or promotion changes, except where mandatory law requires a remedy.

## 10. Account compromise, fraud and abuse

A user-interface protection is not an entitlement-abuse rule, and an entitlement-abuse rule is not a license to manipulate the interface.

If CK-Labs detects account compromise, fraud, chargeback abuse, coupon abuse, regional-price manipulation, hacks, exploits or entitlement replay, it may apply proportionate security or transaction controls under the existing Terms and payment gates.

However:

- a compromised account must not be pressured into purchasing as a condition of basic security recovery unless the charge is genuinely for a separately lawful service and clearly disclosed;
- a fraud warning must not be fabricated merely to make an offer harder to decline;
- an interface flag alone is not authoritative proof that a payment was fraudulent;
- a reported account compromise does not automatically prove that the legitimate owner committed chargeback or entitlement abuse; and
- correction of invalid value should remain tied to the affected transaction, exploit or entitlement where possible, preserving unrelated legitimate purchased value and mandatory consumer remedies.

## 11. Children and minors

Where TycoonX interfaces are accessible to minors, apply the separate German youth-protection and DSA-minors gates in addition to this gate.

Commercial-interface QA must specifically reject:

- direct exhortations telling children to buy Diamonds/VIP or to persuade an adult to buy them;
- urgency or social-pressure design adapted to exploit children's credulity or impulsiveness;
- confusing virtual-currency presentation that makes real spending harder for a child to understand;
- bypassing Apple/Google parental controls by silently redirecting a supervised user to another payment route; and
- classifying a user as an adult merely because the account previously purchased Diamonds or VIP.

Do not collect unnecessary age, identity or child data merely to prove that a dark-pattern checklist was performed.

## 12. Accessibility is part of a genuine choice

A choice is not genuinely usable if the alternative is hidden from keyboard, screen-reader or other assistive-technology users while the commercially preferred action is accessible.

For purchase and account-choice flows:

- preserve meaningful labels and focus order;
- avoid controls whose accessible name contradicts the visible action;
- do not use inaccessible overlays to trap users in a promotion;
- keep decline/back/close controls operable through the supported accessibility path; and
- apply the separate BFSG accessibility gate where its statutory scope applies.

## 13. QA matrix

Before releasing or materially changing a high-impact TycoonX choice interface, test at least:

1. **Decline path:** decline a Diamond/VIP offer and confirm ordinary gameplay remains usable without an immediate identical blocking prompt.
2. **Prominence:** verify a commercially preferred action does not make a genuine alternative effectively invisible, mislabeled or inaccessible.
3. **Repeat choice:** exercise `not now` and confirm reminder frequency/context is reasonable rather than an immediate persistence loop.
4. **Exit:** abandon a purchase and confirm the player can return to the prior state without artificial friction.
5. **Sign-out/security:** confirm a paid prompt does not block account/security exit controls.
6. **Lifetime VIP timer:** allow a genuine window to expire and confirm the offer closes or the changed offer is truthfully represented.
7. **30-Day VIP:** confirm there is no auto-renewal/cancellation UI implying the current one-time product is recurring.
8. **Diamonds:** confirm real-money price/virtual-currency presentation passes the dedicated EU virtual-currency gate.
9. **Provider failure:** simulate Apple/Google/Xsolla failure and confirm no fake urgency or entitlement grant occurs.
10. **Account compromise:** trigger a security state and confirm it does not create a fabricated paid recovery requirement.
11. **Minor/supervised user:** confirm parental controls and child-protective purchase design are not bypassed.
12. **Accessibility:** confirm decline/back/close paths are operable using the supported assistive-technology path.
13. **Scope record:** confirm the current DSA online-platform and Article 19 status determination is dated and linked to the affected surface.
14. **Legal-route record:** where a questionable pattern is covered by UCPD or GDPR, confirm the issue is handled under that route rather than incorrectly claimed as an Article 25 duplicate.

## 14. Evidence to retain

For material purchase, privacy, account and repeated-choice surfaces, retain a lightweight record of:

- screen/flow version and release date;
- screenshots or short screen recordings of both the preferred and alternative choice path;
- reminder/prompt frequency configuration;
- relevant Lifetime VIP promotion configuration and timestamps;
- accessibility QA result;
- minor/supervised-user QA result where relevant;
- DSA surface classification and Article 19 status determination;
- legal-route classification where Article 25(2), UCPD or GDPR is relevant;
- Apple/Google/Xsolla checkout handoff evidence where payment is involved; and
- material incidents or support complaints showing that a supposedly optional path was not actually usable.

Follow TycoonX Privacy Policy retention/minimisation rules. Do not retain unrelated player content, credentials, private messages or payment data merely to prove that the UI was tested.

## 15. Current official legal checkpoint

Rechecked September 3, 2026 against Regulation (EU) 2022/2065.

- **Article 25(1):** covered online platforms must not design, organise or operate online interfaces so as to deceive or manipulate recipients or otherwise materially distort or impair free and informed decisions.
- **Article 25(2):** the Article 25(1) prohibition does not apply to practices covered by Directive 2005/29/EC or Regulation (EU) 2016/679.
- **Article 25(3):** examples identified for guidance include giving more prominence to certain choices, repeatedly asking for a choice already made, especially through interfering pop-ups, and making termination harder than subscription.
- **Recital 67:** the risk can arise from structure, design or functionality, including exploitative choice architecture, non-neutral presentation, unnecessary difficulty/time, unreasonable purchase discontinuation/sign-out friction, transaction nudging and difficult defaults. It also makes clear that legitimate practices such as lawful advertising are not in themselves dark patterns.
- **Article 19:** Section 3 generally does not apply to qualifying micro/small online-platform providers, except Article 24(3), including the statutory 12-month transition after loss of status, while a VLOP cannot rely on that exclusion.

The European Commission's current consumer enforcement material also remains relevant independently of Article 25. Its March 26, 2026 online-sales sweep reported recurring problems involving incorrect discount references, unexplained comparison prices, misleading scarcity/countdowns, non-consensual basket additions and drip pricing. Those are primarily consumer-law concerns and remain covered by the dedicated TycoonX EU Promotion & Dark-Pattern Release Gate.

The CPC Network's March 21, 2025 Key Principles on In-Game Virtual Currencies remain the dedicated consumer-enforcement benchmark for purchased Diamonds and are implemented through the TycoonX EU/EEA Virtual Currency Release Gate.

## Founder-protective interpretation

Nothing in this gate prevents CK-Labs from:

- highlighting a genuine recommended option;
- advertising Diamonds, 30-Day VIP or a genuine Lifetime VIP sales window;
- sending reasonable reminders about a materially new or changed offer;
- changing future prices, bundles, currencies or regional prices;
- ending, extending or replacing a genuine promotion where the changed commercial reality is represented truthfully;
- refusing or correcting fraud, chargeback abuse, coupon abuse, entitlement replay, hacks, exploits or obvious configuration errors on a lawful and proportionate basis; or
- changing or discontinuing features under the existing Terms and mandatory digital-product rules.

The protection comes from keeping the choice real, the interface truthful, the legal scope classified correctly, the payment/entitlement state authoritative, and non-waivable consumer rights intact.