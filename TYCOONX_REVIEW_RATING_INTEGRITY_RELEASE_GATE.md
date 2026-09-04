# TycoonX Review & Rating Integrity Release Gate

**Review date: September 4, 2026**

Owner: CK-Labs

Scope: App Store ratings/reviews, Google Play ratings/reviews, in-app review prompts, public testimonials, website/social proof, support replies, reviewer/tester access, and any Diamond/VIP/promotion flow that could influence a public review or rating.

## Purpose

TycoonX may ask players for honest feedback and may provide test or reviewer access where operationally necessary. It must not buy, condition, filter, fabricate, or otherwise manipulate public ratings or reviews.

This gate closes an ambiguity in `TYCOONX_FREE_PROMOTIONAL_GOODWILL_GRANT_RELEASE_GATE.md`: **reviewer grant means access/value used for legitimate platform review, QA, testing, press/editorial evaluation, or another documented non-consumer-rating purpose**. A `review` or `reviewer` grant does **not** mean a reward for posting, changing, deleting, or improving an App Store or Google Play consumer review.

Store-discovery manipulation can threaten distribution. Reward-linked or misrepresented endorsements can also create German/EU consumer-law problems.

## P0 gate 1: never exchange TycoonX value for a store rating or review

Do not offer or grant any of the following in exchange for an App Store or Google Play rating/review:

- Diamonds;
- 30-Day VIP;
- Lifetime VIP;
- VIP time or extensions;
- discounts, coupons, promo codes, cashback, bonus items, priority support, queue priority, game resources, ranking advantages, event entries, or other gameplay/commercial value;
- a refund, conformity remedy, account recovery, restoration, support outcome, or another legal/contractual right; or
- a promise of future value if the player posts, changes, removes, or improves a review.

The prohibition applies even if the reward is offered for `any review` rather than explicitly for five stars. Google Play currently prohibits **fraudulent or incentivized reviews and ratings**. Apple also treats paid, incentivized, filtered, or fake feedback used to manipulate reviews or App Store discovery as prohibited manipulation.

Never write or imply:

- `Rate 5 stars and get 50 Diamonds`;
- `Leave a review to unlock VIP`;
- `Change your review to 5 stars and we will refund you`;
- `Delete your negative review and Support will restore your account`;
- `Review TycoonX to enter the giveaway`; or
- any materially equivalent arrangement.

A genuine reward for an unrelated in-game action remains possible. It must not be conditioned on store rating/review activity, sentiment, or review removal.

## P0 gate 2: never gate ordinary TycoonX access on review activity

Apple App Review Guideline **3.2.2(x)** currently says apps must not force users to rate/review an app, download other apps, or perform other store-related actions in order to access functionality, content, or use of the app.

TycoonX therefore must not require a player to:

- rate or review before entering or using the game;
- rate or review before receiving purchased Diamonds or VIP;
- rate or review before restoring an entitlement;
- rate or review before making a support request;
- rate or review before exercising a refund, withdrawal, conformity, deletion, privacy, or other mandatory right; or
- install/rate another app as a condition for normal TycoonX access.

A voluntary review prompt may be shown where platform rules allow it. Declining or dismissing it must not create a gameplay, support, payment, or entitlement penalty.

## P0 gate 3: Apple review prompts and replies

Apple's current App Review Guidelines, last updated **June 8, 2026**, direct developers under Guideline **5.6.1** to use the provided API to prompt for App Store ratings/reviews and state that **custom review prompts are disallowed**.

For iOS TycoonX:

- use Apple's supported review-request mechanism instead of a custom modal that imitates a store review prompt;
- do not ask whether a player `loves TycoonX` and send only satisfied users to the App Store while diverting dissatisfied users elsewhere for the purpose of skewing ratings;
- do not show a reward after the review request in a way that creates an implied exchange;
- do not attempt to detect whether the player actually posted a review and then grant value;
- do not repeatedly obstruct gameplay with review prompts; and
- do not make a review prompt a substitute for Support, refund, account recovery, or complaint handling.

Guideline 5.6.1 also says App Store review responses should stay targeted to the user's comments and should not include personal information, spam, or marketing.

Do not use a review reply to advertise Diamonds, Lifetime VIP, coupons, the Xsolla webshop, or another promotion.

Apple's current Developer Code of Conduct also warns against manipulating reviews/App Store discovery through paid, incentivized, filtered, or fake feedback.

## P0 gate 4: Google Play reviews must remain unincentivized and authentic

Google Play's current `User Ratings, Reviews, and Installs` policy prohibits manipulation of app placement, including **fraudulent or incentivized reviews and ratings**. Google specifically lists offering an incentive for a rating as a common violation and says not to offer rewards or incentives for ratings/reviews.

For Android TycoonX:

- do not exchange any reward for a Google Play rating/review;
- do not request a high rating as the condition for a benefit;
- do not ask a player to raise a rating in a review reply;
- do not use deceptive or forced review pop-ups;
- do not commission fake reviews, review farms, automated reviews, employee impersonation, or coordinated fake-account reviews;
- do not put or encourage affiliate links, coupons, game codes, email addresses, or promotional links inside user reviews as a growth mechanism; and
- prefer Google's supported in-app review flow when prompting players on Android.

A player may be invited to provide honest feedback without a reward. A positive rating must never become the expected price of receiving support or gameplay value.

## P0 gate 5: feedback routing must not become review filtering

CK-Labs may collect private product feedback, bug reports, feature requests, support tickets, surveys, or satisfaction feedback. It may also ask players to leave an honest public review.

Do not use private feedback as a manipulation filter. In particular, do not design a flow whose practical purpose is:

1. ask the player for a satisfaction score;
2. send only highly satisfied players to the App Store/Google Play review surface; and
3. suppress the public-review path for dissatisfied players so the store score is artificially improved.

Offering Support to a dissatisfied user is useful. The problem is conditioning the public review path on positive sentiment or otherwise filtering feedback to manipulate store discovery.

Do not retaliate against a player for leaving a negative review. A negative review is not by itself evidence of fraud, abuse, chargeback abuse, entitlement abuse, or bad-faith conduct.

## P0 gate 6: German/EU consumer-review authenticity rules on CK-Labs-owned surfaces

Separate German/EU rules apply if CK-Labs itself publishes consumer reviews or endorsements in marketing.

### German UWG § 5b(3)

Where a trader makes consumer reviews accessible, German **UWG § 5b(3)** treats as material information whether and how the trader ensures that the published reviews come from consumers who actually used or purchased the relevant goods/services.

If CK-Labs publishes `TycoonX player reviews`, `verified players`, `what our users say`, or a similar testimonial surface under its control:

- state accurately whether and how authenticity is checked;
- do not label an endorsement `verified player` without a supporting verification basis;
- use **reasonable and proportionate steps** appropriate to CK-Labs' scale and manipulation risk when claiming reviews are from real users;
- do not imply App Store/Google Play reviews were independently verified by CK-Labs unless that claim is supportable; and
- do not collect excessive personal data merely to prove that a player used TycoonX.

### Directive 2005/29/EC Annex I point 23b

Annex I **point 23b of Directive 2005/29/EC** and the corresponding German UWG rule prohibit stating that reviews come from consumers who actually used/purchased the product without reasonable and proportionate verification steps.

### Directive 2005/29/EC Annex I point 23c

Annex I **point 23c of Directive 2005/29/EC** and the corresponding German UWG rule prohibit submitting/commissioning false consumer reviews or endorsements and misrepresenting consumer reviews or social endorsements for promotion.

The European Commission's UCPD guidance specifically explains that this can cover engaging real consumers who receive **remuneration for posting positive reviews**.

CK-Labs must therefore not:

- pay or grant TycoonX value for positive public testimonials while presenting them as ordinary independent consumer reviews;
- invent reviewer names, quotes, star ratings, download claims, or customer stories;
- materially edit a negative/mixed review into a falsely positive testimonial;
- remove material qualifying context so a quoted review becomes misleading;
- buy social likes/reviews or use a third-party review-manipulation service; or
- present staff/test/reviewer comments as ordinary consumer experiences without truthful context.

A genuine press/reviewer quote may be used where legally and contractually permitted, but its source and commercial context must not be misrepresented as an ordinary unpaid player review.

## P0 gate 7: `reviewer/tester grant` has a narrow permitted meaning

A non-standard grant recorded as `review`, `reviewer`, `test`, `qa`, or similar may be legitimate when it exists for:

- Apple App Review access;
- Google Play review/testing access;
- internal QA;
- an external tester;
- press/editorial evaluation;
- accessibility/security/compliance testing; or
- another documented evaluation purpose that is **not a reward for a consumer store rating/review**.

For such grants:

- record the operational purpose and recipient category;
- do not require a positive public review in return;
- do not manufacture a production payment receipt;
- keep test value out of the live competitive economy where appropriate;
- apply a documented expiry/removal rule where access was genuinely temporary and the rule was clear; and
- preserve any genuine purchase the reviewer/tester later makes as an ordinary paid transaction.

If internal source code `review` is ambiguous, documentation/tooling should define it as platform/editorial/QA review access, not consumer-rating compensation.

## P0 gate 8: purchases and entitlements stay independent from ratings

A rating/review event must not change authoritative payment or entitlement state.

### Diamonds

- **No Diamonds may be minted merely because a store review was posted.**
- Removing/changing a review must not remove legitimately purchased Diamonds.
- A negative review cannot create a negative Diamond balance.

### One-time 30-Day VIP

30-Day VIP remains a **one-time, non-renewing 30-day entitlement**. A review/rating cannot restart, extend, shorten, revoke, or convert it into recurring billing.

### Lifetime VIP

Lifetime VIP remains a **one-time promotional entitlement offered only during selected genuine sales windows**. A window may be withdrawn from future sale, **may never return**, and creates no expectation of continuous availability.

A store review cannot create Lifetime VIP outside a valid grant/purchase path, expire a valid Lifetime VIP, reopen a closed sales window, or retroactively change the price of a completed Lifetime VIP purchase.

**Apple App Store, Google Play, and the CK-Labs TycoonX webshop using Xsolla** remain separate payment authorities. A review/rating is not proof of payment and is not a provider transaction.

## P0 gate 9: refunds, chargebacks, account compromise, and moderation remain separate

Do not use store-review activity as a shortcut for a separate enforcement decision.

- **A negative review is not a chargeback.**
- Deleting a review is not proof of refund abuse.
- Posting an inaccurate review does not by itself authorize entitlement confiscation.
- A suspected fake review from a **compromised account** does not prove the legitimate owner committed fraud.
- A player disputing an entitlement publicly does not waive Support, refund, platform dispute, or mandatory consumer remedies.

CK-Labs may respond to genuinely abusive, threatening, unlawful, spam, impersonation, or fraudulent conduct through the appropriate platform, moderation, legal, or account-security process. Keep that process separate from review sentiment.

## P0 gate 10: minors and vulnerable users

**Do not offer children Diamonds, VIP, discounts, contest entry, or other value for ratings/reviews.** Do not tell a child to ask a parent to leave a positive review in exchange for a reward.

Age/supervision signals must not become a review-manipulation score. If a platform or jurisdiction requires a different review/prompt experience for a supervised user, implement that requirement without reusing age data for unrelated marketing or monetization.

## Review-integrity QA scenarios

Before shipping or changing review-related UI, test at least:

1. Dismissing the iOS review request produces no gameplay, support, or entitlement penalty.
2. No Apple review prompt grants Diamonds/VIP after completion.
3. No custom iOS modal imitates a mandatory review gate.
4. A dissatisfied iOS user is not technically blocked from the ordinary App Store review path solely because of a low satisfaction score.
5. Dismissing the Google Play review flow produces no penalty.
6. No Google rating/review is tied to a coupon, Diamond reward, VIP extension, refund, or contest entry.
7. A one-star review does not flag the TycoonX account as fraud or entitlement abuse.
8. A review removal/edit does not alter Diamonds, 30-Day VIP, or Lifetime VIP.
9. App Store/Google review replies contain no personal data, store-manipulation request, or promotional reward.
10. A CK-Labs-owned testimonial surface discloses whether/how authenticity is checked where required.
11. A quoted testimonial retains material context and is not edited into a different endorsement.
12. A `review`-provenance server grant is demonstrably for platform/editorial/QA access, not a consumer store rating.
13. Apple, Google Play, and Xsolla payment states remain unchanged by review activity.
14. Account-compromise handling does not treat review sentiment as proof of the legitimate owner's intent.

## Minimum evidence to retain

Keep a proportionate dated packet containing, where applicable:

- current iOS review-prompt implementation/screenshots;
- current Android review-prompt implementation/screenshots;
- confirmation that no review reward exists in remote config, campaign config, support macros, or entitlement logic;
- review/tester grant source-code meaning and sample provenance;
- testimonial-authenticity method and consumer-facing disclosure where applicable;
- any press/reviewer commercial relationship relevant to how a quote is presented;
- support macros for public review replies;
- QA results for the scenarios above; and
- owner/date of the most recent Apple/Google/UWG review-policy check.

Do not retain unrelated review-author identity, payment data, or player activity merely to demonstrate compliance.

## Release blockers

Do not ship a review/rating flow if:

- a Diamond, VIP, coupon, refund, support, or gameplay benefit depends on posting or improving a store rating/review;
- ordinary gameplay/content is gated behind a rating/review;
- iOS uses a prohibited custom review prompt instead of the supported Apple mechanism;
- the flow filters users based on satisfaction for the purpose of manipulating public ratings;
- Google Play review activity is incentivized;
- CK-Labs commissions fake reviews or misleading endorsements;
- a CK-Labs-owned testimonial surface claims reviews are genuine/verified without the required reasonable and proportionate basis;
- a review reply exposes personal information or tries to buy a higher rating;
- `review` grant provenance could actually mean consumer-review compensation without a separate compliant purpose; or
- review activity can change unrelated payment, refund, Diamonds, 30-Day VIP, or Lifetime VIP state.

## Current references reviewed September 4, 2026

- Apple App Review Guidelines, including Guideline **3.2.2(x)**, Guideline **5.6.1**, Guideline **5.6.3**, and current review-manipulation language; page last updated June 8, 2026: https://developer.apple.com/app-store/review/guidelines/
- Google Play `User Ratings, Reviews, and Installs` policy: https://support.google.com/googleplay/android-developer/answer/9898684
- Google Play ratings / in-app review best-practice page: https://play.google.com/console/about/ratings/
- German UWG § 5b(3) and Annex nos. 23b/23c: https://www.gesetze-im-internet.de/uwg_2004/
- Directive 2005/29/EC Annex I points 23b/23c and Commission UCPD guidance: https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:52021XC1229(05)

## Canonical/localization impact

This gate clarifies operational meaning and **does not change the current canonical Terms of Service**, Purchases & Refunds Policy, Privacy Policy, or Community Standards meaning. Existing canonical references to `test`, `review`, `tester`, or `reviewer` grants should be operationally read as legitimate testing/platform/editorial access or another documented non-consumer-rating purpose, never as permission to buy public consumer ratings/reviews.

No localized document needs reopening solely because of this operational clarification. If CK-Labs later adds player-facing terms promising a reward for a public rating/review, that product/marketing design must be rejected rather than localized.