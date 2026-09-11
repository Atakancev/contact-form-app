# TycoonX Minors, Purchases, and Child Consumer Protection Gate

Status: **release/commercial compliance gate**

Last reviewed: **September 11, 2026**

This gate covers TycoonX commercial design, advertising, checkout, refund/support handling, and entitlement reconciliation where children or other minors may interact with paid products. It supplements the canonical TycoonX Terms of Service and Purchases & Refunds Policy. It does not replace mandatory law, platform rules, or transaction-specific rights.

## 1. Why this gate exists

TycoonX offers paid digital products including purchased Diamonds, one-time non-renewing 30-Day VIP, and limited-time promotional Lifetime VIP. A game can comply with ordinary adult checkout rules and still create a separate legal problem if its wording, visual design, urgency mechanics, notifications, or support handling exploit children or incorrectly assume that every purchase made from a device/account is automatically binding on a minor.

The current canonical Terms already state that where age, parental authorization, or other eligibility requirements apply under local law or platform rules, use and purchase are permitted only when those requirements are satisfied. This gate turns that general rule into concrete commercial acceptance criteria.

## 2. EU/German baseline

### 2.1 No direct exhortations to children

Point 28 of Annex I to Directive 2005/29/EC prohibits advertising that directly exhorts children to buy advertised products or to persuade their parents or other adults to buy them. Germany implements the same black-list rule in the Annex to § 3(3) UWG, item 28.

For TycoonX, this means commercial copy must not address a child with instructions such as:

- “Buy Diamonds now.”
- “Get VIP before it is gone.”
- “Ask your parents to buy Lifetime VIP.”
- “Tell your parents you need this pack.”
- “Convince an adult to buy this for you.”

This does **not** prohibit every neutral product description visible to a minor. The key risk is a direct commercial exhortation to children or pressure designed around their vulnerability.

### 2.2 Child vulnerability must affect the design review

The EU Consumer Protection Cooperation Network’s March 21, 2025 work on online games and in-game virtual currencies specifically identifies child vulnerability as an area that game companies must respect. In the Star Stable coordinated action, CPC authorities identified direct exhortations to children, time-limited pressure, unclear virtual-currency information, and influencer marketing that unduly influences children as problematic practices.

TycoonX therefore must review the **whole commercial presentation**, not only the legal terms. A technically true offer may still be high risk if the presentation pressures children, obscures the real-money cost, or encourages them to recruit an adult purchaser.

### 2.3 German contract capacity is not replaced by a successful payment

For German law:

- under § 104 BGB, a person who has not completed their seventh year is legally incapable of contracting;
- under § 106 BGB, a minor who has completed their seventh year has limited contractual capacity under §§ 107–113 BGB;
- under § 107 BGB, a minor generally needs the legal representative’s consent for a declaration that is not merely legally advantageous;
- under § 108 BGB, a contract concluded without required consent generally depends on the representative’s later approval;
- § 110 BGB can make a minor’s contract effective from the outset where the minor performs the contractual obligation using means provided for that purpose or for free disposal by the representative, or by a third party with the representative’s consent.

Do **not** convert § 110 BGB into a blanket “pocket-money exception” saying that every small in-game purchase by a minor is automatically valid. Its statutory conditions must actually be satisfied.

A platform password, biometric confirmation, stored card, family device, successful provider charge, or successful server entitlement grant is useful transaction evidence, but it is not by itself a universal legal conclusion that every possible parental-consent or minor-capacity issue has been resolved.

## 3. Product-specific TycoonX rules

### Purchased Diamonds

- Always show the Diamond quantity and the real-money total required by the applicable checkout rules.
- Do not hide the real-money significance behind Diamond-only labels where EU consumer rules require monetary-price transparency.
- Do not use child-directed pressure to acquire more Diamonds because a player lacks enough for an item.
- Do not deliberately structure a flow to make a child repeatedly ask an adult for additional top-ups.
- The existing withdrawal, refund, reversal, chargeback, and consumed-value reconciliation rules remain applicable independently of the player’s age.

### One-time 30-Day VIP

- It is a **one-time, non-renewing 30-day entitlement** unless a future distinct product clearly and lawfully states otherwise.
- Never describe it to a child in recurring/subscription-like language that creates false urgency or fear of losing status.
- Do not use a child-directed prompt such as “Ask your parents to renew,” particularly because the current 30-Day VIP does not automatically renew.

### Lifetime VIP

- Lifetime VIP remains a limited-time promotional offering available only during genuine selected sales windows.
- A genuine limited-time window may be communicated accurately, but the fact that an offer is genuinely limited does not authorize pressure techniques targeted at children.
- Never tell a child that they must persuade a parent/adult to buy before the window ends.
- Ending a sales window affects future availability only and does not cancel an already-valid purchase.

## 4. Offer and UI acceptance criteria

A TycoonX commercial surface fails this gate if it does any of the following where children are reasonably part of the audience:

1. Directly tells children to buy Diamonds, VIP, or another paid product.
2. Directly tells children to ask, persuade, pressure, or convince an adult to buy.
3. Uses fake, resettable, or misleading countdowns.
4. Uses a genuine countdown in a way specifically designed to pressure children rather than neutrally describe the offer.
5. Hides or materially obscures the real-money cost behind virtual-currency presentation.
6. Uses confusing exchange steps designed to make the real cost difficult to understand.
7. Uses loss-of-status, social embarrassment, peer pressure, or fear language aimed at children to drive payment.
8. Uses notifications to repeatedly pressure a child after a declined or abandoned purchase.
9. Designs an insufficient-Diamonds screen to push repeated top-ups without clear price information.
10. Makes a paid product look free because acquisition first requires purchasing virtual currency.
11. Presents an influencer, ambassador, creator, or promotional message aimed at children without required commercial disclosure.
12. Treats an Apple/Google family approval feature as permission to use otherwise unlawful child-directed marketing.

## 5. Neutral wording examples

Lower-risk neutral wording:

- “500 Diamonds — €X.XX total.”
- “30-Day VIP — one-time purchase, no automatic renewal.”
- “Lifetime VIP is available during this sales window. The final price is shown before confirmation.”
- “You do not have enough Diamonds for this item.”

High-risk child-directed wording:

- “You need more Diamonds — buy them now!”
- “Ask your parents before this deal disappears!”
- “Tell your parents to get VIP for you.”
- “Everyone else has VIP. Don’t miss out!” where intentionally directed at children to create purchase pressure.

The correct review question is not just whether a sentence is literally true. It is whether the full presentation improperly exploits a child’s vulnerability or directly exhorts a child to purchase or recruit an adult purchaser.

## 6. Apple App Store channel

Apple provides family and device-level controls that can restrict or approve purchases, including Ask to Buy and Screen Time purchase restrictions. These controls are useful safeguards and transaction evidence.

TycoonX must nevertheless keep its own advertising and game UI compliant. Apple approval does not create permission for TycoonX to use a child-directed commercial practice that is independently prohibited by consumer law.

For an App Store transaction disputed as an unauthorized child/minor purchase:

- preserve the Apple transaction identifier and entitlement provenance;
- direct the refund request through Apple where Apple controls the consumer refund process;
- do not promise a refund CK-Labs cannot directly issue through that channel;
- do not make false statements that every completed Apple transaction is automatically legally binding regardless of mandatory law;
- if Apple refunds/revokes the transaction, reconcile only the entitlement/value attributable to that transaction under the existing source-authoritative refund rules.

## 7. Google Play channel

Google Play supports family purchase approvals, including settings that can require approval for in-app purchases made through Google Play Billing. Those controls are important safeguards but do not replace TycoonX’s own consumer-law duties.

For a Google Play transaction disputed as an unauthorized child/minor purchase:

- retain the Google order/purchase identifier and entitlement provenance;
- use the applicable Google refund/developer process and mandatory consumer rules;
- distinguish a parent’s enabled approval configuration from assumptions about legal capacity in every possible case;
- if Google refunds, revokes, cancels, or invalidates the purchase, correct only the attributable entitlement/value and preserve unrelated valid purchases.

## 8. Official TycoonX webshop using Xsolla

The webshop needs extra care because platform-family controls available inside Apple or Google ecosystems may not automatically apply to a web checkout.

For the Xsolla flow:

- the checkout must identify the contracting merchant and show the required product/price information;
- country, age, parental-consent, and payment rules applicable to the transaction must be respected;
- if an age or parental-authorization mechanism is legally required for a particular user/transaction, it must not be bypassed merely because the payment provider can technically process the card;
- payment-provider fraud approval is not the same legal question as a minor’s contractual capacity;
- CK-Labs should retain the transaction/order identifiers needed to distinguish the provider’s payment decision from TycoonX entitlement delivery;
- an authorized provider refund/reversal must be reconciled source-by-source under the existing Xsolla entitlement rules.

If Xsolla acts as merchant of record, the exact allocation of payment, refund, tax, fraud-screening, and consumer-contract responsibilities must follow the transaction-specific checkout and merchant terms. CK-Labs remains responsible for its own TycoonX game UI, advertising, entitlement delivery, and statements it makes to players.

## 9. Support handling for parent/minor purchase disputes

A support agent or automated support flow must not answer every complaint with either “the child bought it, therefore refund” or “the payment succeeded, therefore no refund.” Both are too simplistic.

The support record should capture, where reasonably available and lawful:

1. purchase channel;
2. transaction/order identifier;
3. purchased product and amount;
4. purchasing account and receiving TycoonX account, including gift provenance where relevant;
5. claimed purchaser/user age category when material to the dispute;
6. whether parental/guardian authorization is disputed;
7. provider approval/family-control evidence that is actually available;
8. refund/reversal status from the authoritative provider;
9. whether paid value has been consumed;
10. any mandatory-law deadline or remedy that applies.

Do not ask for excessive identity or child data merely to create a defensive record. Collect only information reasonably necessary for the support/legal purpose and handle it under the Privacy Policy and applicable data-protection rules.

## 10. Refund and entitlement integrity

A minor-related dispute must use the same source-authoritative transaction model required elsewhere in the TycoonX legal/payment project.

Examples:

- If Apple refunds a 500-Diamond purchase, reconcile that transaction’s purchased Diamond provenance. Do not delete unrelated event Diamonds.
- If a Google 30-Day VIP transaction is refunded, remove only that entitlement source and recompute any other valid VIP source.
- If an Xsolla Lifetime VIP transaction is valid and an unrelated Diamond purchase is disputed, do not cancel Lifetime VIP merely because both purchases belong to the same account.
- If a parent disputes a gift purchase, trace the immutable original purchase and gift recipient. Do not claw value from an arbitrary account inferred from a later webhook.

Age-related support claims do not authorize punitive account sanctions by themselves. Fraud, account compromise, deliberate misuse, ordinary family authorization disputes, and a child’s legal-capacity issue are different factual/legal categories and must not be collapsed into one “abuse” label.

## 11. Promotions and notifications

Before publishing a TycoonX promotion, review all variants that may reach minors:

- in-game banners;
- pop-ups;
- Post Office messages;
- push notifications;
- email where used;
- store promotional text;
- creator/influencer scripts;
- social posts linked from the game;
- VIP expiry reminders;
- Diamond-shortage prompts;
- Lifetime VIP countdowns;
- localized variants.

The legal review must look at wording, timing, repetition, visual hierarchy, animation, scarcity cues, and whether the presentation is directed at or foreseeably tailored to children.

A generic adult-audience promotional sentence does not become unlawful merely because a minor happens to see it. Conversely, changing “child” to “player” does not cure a design that is intentionally directed at children.

## 12. Localization requirements

If child/minor-specific commercial or legal copy is ever added to player-facing TycoonX surfaces, localization must preserve the same protection in every supported language. Do not translate a neutral English sentence into a more aggressive sales command in another locale.

Locale review should pay particular attention to:

- imperative verbs equivalent to “buy”, “get now”, “ask your parents”, “convince”, or “don’t miss out”;
- culturally natural but coercive phrases;
- diminutives or slang that intentionally target young children;
- translated countdown/scarcity wording;
- whether a local-language price explanation remains understandable to a young audience where required.

Arabic layouts must remain RTL where applicable. Regional variants such as es/es_MX, fr/fr_CA and pt/pt_BR must be reviewed independently rather than assumed identical.

## 13. Evidence and audit trail

For each materially different monetization surface, retain enough QA evidence to show:

- product/SKU;
- country/locale;
- channel;
- exact displayed price/currency;
- exact CTA/button wording;
- countdown/scarcity wording if any;
- screenshots or equivalent durable capture of the relevant commercial presentation;
- whether an age-aware or family approval flow is controlled by Apple, Google, Xsolla, CK-Labs, or another party;
- date/version of the reviewed UI;
- result of the child-directed-marketing review.

This does not require storing unnecessary personal data about individual children.

## 14. Regression scenarios

The following should be part of commercial QA:

1. German 15-year-old attempts to buy Diamonds through Apple with Ask to Buy enabled.
2. German 15-year-old attempts the same purchase where the family setting does not require approval.
3. Google Play child account requests approval for an in-app Diamond purchase.
4. Webshop user claims a minor used a stored family card without authorization.
5. Player lacks 20 Diamonds for an item and sees the top-up prompt.
6. Lifetime VIP has 30 minutes left in a genuine sale window.
7. Lifetime VIP sale ends and no pressure message is sent asking children to persuade adults.
8. 30-Day VIP expiry notification is shown to an account identified by a platform as a child account.
9. Promotion is translated into German, Turkish, Spanish, Mexican Spanish, French, Canadian French, Portuguese, Brazilian Portuguese, Arabic, Japanese, Korean, and Chinese variants without adding direct child exhortation.
10. Creator/ambassador promotion for Diamonds is reviewed for commercial disclosure and child-directed pressure.
11. Parent disputes a purchased Diamond transaction after some paid Diamonds were spent.
12. Parent disputes one 30-Day VIP source while another valid VIP source exists.
13. Parent disputes a gift purchase whose recipient differs from the payer account.
14. Payment provider approves the charge but later determines/refunds it under its child/family purchase process.
15. Support receives a minor-related claim but has no reliable age evidence; support does not invent an age or automatically accuse the account of fraud.
16. A product screen visible to everyone uses neutral price information rather than child-targeted imperative language.

## 15. Release blockers

Treat these as blockers for a TycoonX commercial surface aimed at or materially tailored to children:

- direct exhortation to purchase;
- direct exhortation to persuade an adult to purchase;
- misleading/fake scarcity;
- child-targeted undue time pressure;
- materially unclear real-money price presentation;
- a support policy that categorically denies mandatory minor-capacity/authorization rights because payment technically succeeded;
- a support policy that automatically refunds every minor-related complaint without checking channel, provenance, and applicable law;
- entitlement reversal that destroys unrelated legitimate purchases;
- use of family/parental approval tooling as a claimed waiver of non-waivable consumer rights.

## 16. Current TycoonX legal-document decision

No canonical legal rewrite is required solely because of this gate. The current Terms already preserve local age/parental-authorization requirements and mandatory rights. The immediate gap is operational/commercial: every purchase surface and promotion should be tested against child-consumer rules, especially Diamonds and genuine limited-time Lifetime VIP promotions.

If a future audit shows the live TycoonX UI contains a child-directed exhortation, misleading pressure, or a materially new product rule that changes the canonical English legal meaning, fix the UI first where appropriate and then update the canonical English document and synchronize the affected localized document type in the required locale order.

## 17. Primary current references

- Directive 2005/29/EC, Annex I point 28 (direct exhortations to children): https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02005L0029-20260927
- German UWG, Annex to § 3(3), item 28: https://www.gesetze-im-internet.de/uwg_2004/anhang.html
- European Commission / CPC Network, online games and Key Principles on In-Game Virtual Currencies, including the March 21, 2025 Star Stable position: https://commission.europa.eu/topics/consumers/consumer-rights-and-complaints/enforcement-consumer-protection/coordinated-actions/social-media-online-games-and-search-engines_en
- BGB § 104: https://www.gesetze-im-internet.de/bgb/__104.html
- BGB § 106: https://www.gesetze-im-internet.de/bgb/__106.html
- BGB § 107: https://www.gesetze-im-internet.de/bgb/__107.html
- BGB § 108: https://www.gesetze-im-internet.de/bgb/__108.html
- BGB § 110: https://www.gesetze-im-internet.de/bgb/__110.html
- Apple Support, purchase restrictions / Ask to Buy: https://support.apple.com/en-us/102470
- Google For Families, Google Play purchase approvals: https://support.google.com/families/answer/7039872

## 18. Practical founder rule

Do not solve child-consumer risk by making TycoonX legally hostile to every minor or by assuming every disputed family purchase is fraud. The safer rule is narrower:

**No child-directed purchase pressure, clear real-money information, respect actual capacity/authorization law, use platform family controls correctly, and reconcile any refund or reversal only to the authoritative transaction that created the paid value.**
