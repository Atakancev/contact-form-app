# TycoonX Free, Promotional, Goodwill & Test Grant Release Gate

Last reviewed: September 4, 2026
Owner: CK-Labs
Scope: free/promotional Diamonds, complimentary VIP, support compensation, goodwill credits, event rewards, tester/review grants, coupons, promo codes, giveaways, migration grants, and other non-standard entitlement grants in TycoonX.

## Purpose

TycoonX already distinguishes paid purchases from promotional, gifted, event, compensation, test, review, or free grants in the canonical Terms of Service and Purchases & Refunds Policy. This gate turns that public meaning into an operational rule set.

The goal is two-sided:

- CK-Labs must be able to run lawful promotions, compensate players, test entitlement systems, correct migrations, and make discretionary goodwill grants without accidentally creating a permanent paid-product promise; and
- a free, test, or promotional grant must never overwrite, weaken, expire, refund, or otherwise contaminate a legitimate paid entitlement.

This gate does not make every free grant revocable at will. A grant may become binding under the stated offer, settlement, support commitment, competition rules, platform rules, or mandatory law. Any limitation, expiry, eligibility condition, or revocation ground must therefore be genuine, lawful, and communicated where required.

## P0 gate 1: every grant has explicit provenance

Do not represent all entitlement rows as if they were ordinary purchases.

Every non-standard grant should have durable server-side provenance sufficient to determine why it exists. At minimum, preserve where applicable:

- TycoonX account/user identifier;
- entitlement or currency type;
- quantity or duration;
- grant source, such as `paid`, `promo`, `coupon`, `event`, `support_goodwill`, `compensation`, `test`, `review`, `migration`, `creator_reward`, or another documented source;
- campaign/support/migration reference;
- grant timestamp;
- expiry, if one lawfully applies;
- eligibility conditions or campaign version;
- operator/system actor that created it;
- whether a payment-provider transaction exists;
- whether the grant is refundable or restorable and through which authority;
- any later correction/revocation reason; and
- idempotency key or equivalent protection where automated retries are possible.

A free server-side grant must not be assigned a fabricated Apple transaction ID, Google order ID, or Xsolla transaction ID merely to fit a purchase-shaped data model.

A real Apple, Google, or Xsolla purchase must not be downgraded to `promo` or `goodwill` merely because CK-Labs later gives the user extra value.

## P0 gate 2: paid value and free value remain separate

### Purchased Diamonds

Purchased Diamonds remain subject to the paid-product rules in the canonical Terms and Purchases policy.

- Purchased Diamonds do not expire solely because time passes.
- A promotional-Diamond expiry rule must never be applied to the purchased portion of a mixed balance.
- A support compensation grant must not convert existing purchased Diamonds into promotional Diamonds.
- A promotion, giveaway, tester grant, or event reward is not a payment reversal and cannot create a negative purchased-Diamond balance.
- If the UI shows one combined Diamond balance, the backend must still retain enough provenance to apply refund, expiry, restoration, and correction rules accurately.

If exact unit-level provenance is not technically feasible, use a documented ledger/accounting method that still prevents paid value from being silently treated as expiring promotional value.

### One-time 30-Day VIP

30-Day VIP remains a **one-time, non-renewing 30-day entitlement**.

A complimentary 30-Day VIP grant may exist, but its provenance must be distinguishable from a paid 30-Day VIP transaction. A free grant must not:

- silently turn the paid product into a recurring subscription;
- restart an already running paid 30-Day VIP unless the offer expressly and lawfully provides a separate extension or later activation;
- shorten an existing paid entitlement;
- make an unrelated paid transaction appear refunded; or
- manufacture a second charge.

If CK-Labs grants extra VIP days as compensation, record the compensation rule and resulting entitlement period explicitly rather than rewriting the original purchase record.

### Lifetime VIP

Lifetime VIP remains a one-time promotional digital entitlement sold only during **selected genuine sales windows**. A sales window may be withdrawn from future sale, may never return, and creates no expectation of continuous future purchase availability.

A complimentary or support-granted Lifetime VIP must be clearly distinguishable from a paid Lifetime VIP purchase. A free grant does not prove that Lifetime VIP is currently on sale and must not be used to imply that a closed sales window remains open.

A valid complimentary Lifetime VIP grant must not silently add an expiry date merely because no purchase transaction exists, unless the grant was actually a different time-limited benefit and was described that way. Conversely, CK-Labs should not label a short goodwill VIP extension as `Lifetime VIP` merely to make the reward sound larger.

Ending a Lifetime VIP sales window affects future sales only. It is not a revocation event for an already valid paid or validly granted Lifetime VIP entitlement.

## P0 gate 3: `free` claims must actually be truthful

EU consumer law treats `free`, `gratis`, `without charge`, and equivalent claims strictly. Point 20 of Annex I to Directive 2005/29/EC prohibits describing a product as free where the consumer must pay anything beyond the unavoidable cost of responding to the commercial practice and collecting or receiving the item. The German UWG Annex contains the corresponding prohibition on falsely advertising an offer as `gratis`, `umsonst`, `kostenfrei`, or equivalent.

For TycoonX:

- do not call a Diamond/VIP offer `free` if obtaining that exact offer actually requires an undisclosed payment;
- do not hide a recurring charge behind a `free trial`, `free VIP`, or `free reward` label;
- if a bonus is conditional on buying another product, disclose the purchase condition prominently and apply the applicable consumer-law rules for the exact offer rather than presenting the whole transaction as cost-free;
- do not inflate the paid component merely to recover the price of something advertised as free;
- do not describe a discount as a free entitlement when the user is merely paying a reduced price for it; and
- do not treat the platform-generated `Free` download label as permission for separate CK-Labs marketing to imply that all TycoonX content and optional purchases are free.

The European Commission's online-games consumer guidance specifically warns against promoting games as `free` where paid add-ons mean the game is not free in its entirety. Safer CK-Labs wording, where factually accurate, is specific about the claim, for example `free to download; optional in-game purchases available`, rather than a blanket claim that everything in TycoonX is free.

## P0 gate 4: promotions and giveaways must deliver what was promised

Point 19 of Annex I to Directive 2005/29/EC prohibits claiming to offer a competition or prize promotion without awarding the described prizes or a reasonable equivalent.

For a TycoonX giveaway, contest, creator event, referral campaign, launch reward, or community prize:

- define the actual prize, quantity, eligibility, selection method, deadline, country/platform limits, and redemption conditions before launch where those details are relevant;
- do not advertise a prize pool that CK-Labs does not intend or have the technical ability to award;
- preserve winner/eligibility evidence sufficient to explain the result without collecting unnecessary personal data;
- if a promised exact prize becomes genuinely impossible to deliver, assess whether a reasonable equivalent and participant communication are legally appropriate instead of silently substituting materially weaker value;
- do not retroactively rewrite the campaign because participation was higher than expected; and
- do not use fake winners, fake scarcity, fake redemption counters, or fake expiry timers.

A discretionary surprise goodwill grant that was never advertised as a competition is not automatically a prize promotion. Keep the factual campaign type accurate.

## P0 gate 5: promotion conditions cannot become hidden confiscation rules

Free or promotional value may have separate clearly disclosed conditions where permitted by law and platform rules. That can include genuine eligibility rules, redemption limits, account limits, campaign periods, or an expiry for a grant that was clearly offered as time-limited.

Do not:

- add an expiry retroactively after presenting a grant as permanent;
- delete a valid grant merely because a later campaign offers less value;
- confiscate unrelated paid value because one coupon or free grant was abused;
- treat a good-faith support complaint as promotion abuse;
- turn a campaign eligibility rule into an unrelated account ban; or
- use `subject to change` as a blanket right to erase an already earned binding reward.

Where fraud, duplicate redemption, account farming, manipulated region/identity information, exploit abuse, or a technical duplicate caused an invalid grant, CK-Labs may correct the affected invalid promotional value where permitted by law. The correction should be tied to the invalid grant and supporting evidence.

## P0 gate 6: accidental and duplicate grants are corrected idempotently

Promotional systems are especially vulnerable to retries, queue duplication, cron overlap, repeated webhooks, double support clicks, campaign race conditions, and migration replay.

For every automated grant path:

- use a stable campaign/grant idempotency key;
- make retries return or reconcile the existing grant rather than minting new value;
- distinguish a duplicate technical grant from a valid user redemption of two separately permitted rewards;
- keep a correction ledger rather than silently rewriting history where practicable;
- do not remove more value than the invalid duplicate actually created; and
- do not use a duplicate grant as evidence that the player intentionally exploited the system unless there is separate evidence of knowing abuse.

If a compromised account triggered or redeemed a grant, containment and account recovery come first. The event does not automatically prove fraud by the legitimate account owner.

## P0 gate 7: Apple, Google Play, Xsolla, and CK-Labs grants have different authorities

### Apple App Store

Apple's current App Review Guidelines state that credits or in-game currencies **purchased through In-App Purchase may not expire**. That purchased-currency rule must not be defeated by relabelling purchased Diamonds as promotional after delivery.

Apple also permits gifting of eligible In-App Purchase items under its rules, but an Apple/StoreKit gift is not the same thing as a CK-Labs server-side goodwill grant. Preserve the original purchaser/refund authority and the StoreKit transaction state where Apple is involved.

If CK-Labs uses Apple offer codes or another Apple-managed promotion, the Apple transaction/redemption record remains the authoritative platform record for that Apple flow. A manually granted TycoonX reward must not masquerade as an Apple redemption.

### Google Play

Google Play supports platform-managed promotions and promo codes for eligible products. Where CK-Labs uses that mechanism, preserve the Google order/purchase state and product configuration required for the platform flow.

A server-side TycoonX support grant is not a Google Play purchase merely because the same entitlement can also be bought through Google Play. It must not create a fake Google order, refund, acknowledgement, or chargeback state.

### Xsolla webshop

Xsolla currently supports discount, bonus, promo-code, coupon, and free-item mechanics for supported webshop catalog flows. Xsolla's current promo-code documentation distinguishes a promo code used during a paid purchase from coupons that can award bonus items independently.

When the Xsolla campaign is the grant authority:

- preserve the actual Xsolla campaign/promo/coupon and transaction state;
- do not grant a purchase-conditioned promo-code bonus before the payment condition is actually satisfied;
- apply configured per-user/total redemption and regional restrictions consistently;
- reconcile refund/reversal state against the paid transaction and bonus rules; and
- do not let a client-side `promo applied` screen mint entitlement before authoritative confirmation where payment is required.

A CK-Labs-only grant remains a CK-Labs entitlement event and should not be fabricated into an Xsolla transaction.

## P0 gate 8: refunds and chargebacks affect the correct provenance

A refund or chargeback of a paid transaction can justify unwinding the paid entitlement and directly linked purchase bonus where the offer/provider rules and applicable law support that result. It does not automatically authorize removal of unrelated goodwill, compensation, event, or other paid purchases.

Examples:

- refund of a 100-Diamond purchase should not erase a separate 20-Diamond support compensation grant merely because the UI displays `120` as one balance;
- refund of a Lifetime VIP purchase may unwind that affected paid Lifetime VIP entitlement where legally appropriate, but must not revoke a different Lifetime VIP that was validly granted under a separate support settlement unless that separate grant itself has a valid revocation basis;
- a chargeback on one Xsolla bundle does not cancel an unrelated Apple purchase; and
- missing a payment-provider evidence deadline is not proof that a free grant was fraudulent.

Keep provider refund state, TycoonX entitlement state, and promotion provenance independently auditable.

## P0 gate 9: support compensation and settlements need precise language

Support may give discretionary goodwill value beyond a mandatory legal remedy. That is allowed, but the record should distinguish:

- mandatory refund/conformity/withdrawal remedy;
- negotiated settlement or binding support commitment;
- voluntary goodwill compensation; and
- ordinary promotional reward.

A voluntary goodwill credit does not by itself admit liability or promise the same remedy in future cases. But once CK-Labs expressly promises a specific settlement or compensation and the user accepts or relies on it in a legally relevant way, Support must not assume the `goodwill` label makes that promise meaningless.

Do not offer Diamonds or VIP as a substitute for a mandatory cash refund, price reduction, withdrawal consequence, conformity remedy, or other non-waivable consumer right unless the consumer may lawfully choose that alternative and any required agreement is genuinely voluntary.

## P0 gate 10: test, review, staging, and staff grants must not imply TycoonX is a beta

TycoonX went to full release on **September 1, 2026**.

Internal/test/staging/review grants may continue where operationally useful, but player-facing wording must not describe the live TycoonX service, its purchases, Diamonds, VIP, rewards, or legal terms as beta.

For test/review grants:

- mark the grant provenance internally;
- use non-production or sandbox payment environments where platform/payment testing supports them;
- do not fabricate production payment receipts;
- prevent test grants from entering production leaderboards/economy where that would create unfair competitive value unless the grant is intentionally a valid live reward;
- remove or isolate accidental production test value through a documented correction rather than treating it as a paid refund; and
- keep reviewer/tester access conditions separate from ordinary consumer purchase terms.

A tester or reviewer who later makes a genuine purchase receives the normal paid-product rights for that genuine transaction.

## P0 gate 11: minors, marketing consent, and privacy remain separate

A free reward must not be used to bypass another legal control.

- Do not make a child-facing `free Diamonds` message a direct exhortation to buy paid content or pressure a parent.
- Do not condition a legally required service, refund, account recovery, or consumer remedy on accepting optional marketing.
- If a reward is tied to an optional marketing-consent campaign, validate the GDPR/ePrivacy/direct-marketing basis and whether consent remains freely given; do not assume `free Diamonds` cures an otherwise invalid consent design.
- Do not use Age Signals, child/supervision status, account-compromise evidence, or payment-fraud data to target promotional value unless that purpose is independently lawful and compatible with the relevant data source.
- Collect only the personal data needed to administer the campaign, prevent abuse, comply with law, and resolve disputes.

## P0 gate 12: regional eligibility is allowed, regional deception is not

A genuine promotion may be limited by country, platform, currency, payment method, storefront, age eligibility, or another lawful campaign criterion where disclosed and permitted.

Do not:

- advertise a promotion to a user known to be categorically ineligible and then reveal the exclusion only after checkout;
- invent a fake country restriction merely to deny an already earned reward;
- use a VPN or region mismatch alone as conclusive proof of fraud without examining the relevant evidence; or
- remove unrelated paid entitlements because the user attempted an ineligible promo code.

Where regional pricing or regional promotion abuse is supported by evidence, correct the affected transaction/promotion proportionately under the canonical TycoonX rules and applicable law.

## P0 gate 13: accounting and tax labels must follow reality

Do not infer tax/accounting treatment merely from the player-facing word `free`, `bonus`, or `gift`.

A zero-price grant, purchase-linked bonus, support compensation, provider-funded promotion, creator reward, and refunded purchase can have different accounting or tax consequences. Preserve the factual source and transaction linkage so CK-Labs or its tax adviser can classify it correctly.

Do not create a fake €0 sale merely to represent every server-side grant if no sale occurred.

## Release evidence checklist

Before enabling a new grant or promotion type, retain evidence of:

- [ ] exact player-facing offer text and eligibility;
- [ ] whether the reward is actually free, purchase-conditioned, discounted, or a prize;
- [ ] grant provenance/source code and idempotency behavior;
- [ ] paid-versus-promotional Diamond separation;
- [ ] 30-Day VIP duration/non-renewal behavior;
- [ ] Lifetime VIP sales-window and grant behavior;
- [ ] any expiry and where it was disclosed before/at grant;
- [ ] duplicate-grant replay test;
- [ ] account-compromise handling;
- [ ] refund/chargeback behavior for purchase-linked bonuses;
- [ ] Apple/Google/Xsolla/CK-Labs authority mapping;
- [ ] regional/coupon limits and server enforcement;
- [ ] minor/marketing-consent review where relevant;
- [ ] support wording for goodwill versus mandatory remedies; and
- [ ] audit evidence that unrelated legitimate purchased value survives promo correction.

## Release blockers

Do not ship or enable a grant/promotion flow if any of these is true:

1. paid and promotional Diamonds cannot be distinguished enough to prevent unlawful expiry/confiscation;
2. a `free` claim actually hides a required payment or recurring charge;
3. a promised giveaway/prize cannot be delivered as advertised or lawfully substituted;
4. a free VIP grant can overwrite or shorten a paid VIP entitlement;
5. a closed Lifetime VIP sales window is reopened implicitly by a server grant or misleading message;
6. duplicate retries can mint repeated grants without idempotency;
7. a server-side grant fabricates Apple, Google, or Xsolla transaction evidence;
8. a refund/chargeback removes unrelated grants or purchases;
9. mandatory consumer remedies are replaced by goodwill without a lawful voluntary choice;
10. a test/review grant causes the live service to be described as beta;
11. optional marketing consent is coerced through an entitlement design; or
12. support cannot explain why the grant exists and what rules apply to it.

## Canonical public meaning

This gate implements, but does not expand beyond, the current canonical TycoonX public rules that:

- purchased Diamonds do not expire solely because time passes;
- promotional, gifted, event, compensation, test, review, or free Diamonds may have separate clearly disclosed conditions where permitted by law/platform rules;
- 30-Day VIP is one-time and non-renewing;
- Lifetime VIP is a one-time entitlement sold only during selected genuine promotional sales windows, may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability;
- promotions may have genuine eligibility and redemption conditions;
- invalid promotional value obtained through fraud, technical abuse, or duplicate redemption may be corrected proportionately;
- voluntary goodwill beyond mandatory law does not automatically admit liability or promise identical future treatment; and
- mandatory consumer rights remain intact.

No canonical Terms, Purchases & Refunds, Privacy, or Community Standards wording needs to change merely to implement this operational separation. If future product design materially changes that public meaning, update the English canonical document first and synchronize every affected localized document.

## Official references checked September 4, 2026

- Directive 2005/29/EC (Unfair Commercial Practices Directive), Annex I points 19 and 20: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32005L0029
- European Commission UCPD guidance, including use of `free` claims and gaming practices: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52021XC1229(05)
- European Commission online-games consumer enforcement page: https://commission.europa.eu/topics/consumers/consumer-rights-and-complaints/enforcement-consumer-protection/coordinated-actions/social-media-online-games-and-search-engines_en
- German UWG and Annex: https://www.gesetze-im-internet.de/uwg_2004/
- Apple App Review Guidelines, including In-App Purchase currency/gifting rules: https://developer.apple.com/app-store/review/guidelines/
- Google Play promotions: https://support.google.com/googleplay/android-developer/answer/6321495
- Xsolla promo codes: https://developers.xsolla.com/xps/game-keys/promotions/promo-codes/
- Xsolla bonus promotions: https://developers.xsolla.com/solutions/web-shop/promotions/bonus-promotion/
