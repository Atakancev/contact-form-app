# TycoonX Art, Direct Offers and Begging Release Gate

**Read-only implementation/legal audit. Reviewed September 10, 2026.**

Owner: CK-Labs  
Scope: current TycoonX Art Gallery auctions, art resale, art direct offers, publication/moderation, and Begging assistance.

This gate supplements the canonical English TycoonX Terms of Service and Community Standards. It does not create a permanent promise that current prices, ratios, time windows, cooldowns, moderation flows or auction mechanics will never change.

## 1. Code-first source boundary

This review was derived from the current `Atakancev/terrax-flutter` client and read-only production Supabase definitions for the relevant social/art functions, policies and triggers. No database row, function, trigger, policy, schema object, cron or configuration value was changed.

Current implementation evidence is useful for understanding intended gameplay. A successful server request is not an absolute legal safe harbor where a player knowingly exploits a defect, but a server defect is also not automatic proof of misconduct by the player.

## 2. Art and Begging have different intended purposes

TycoonX deliberately provides different value-transfer mechanics:

- **Art auctions and art direct offers** are genuine exchange mechanics for buying, collecting, reselling and transferring ownership of an in-game artwork.
- **Begging** is a genuine assistance mechanic through which one player may voluntarily help another player with in-game money.

Therefore a player may legitimately give another player in-game money through Begging. A player may also legitimately pay a high or low price for artwork based on their subjective interest, collecting strategy or speculation.

The legal problem begins when an art auction, resale, direct offer or another ordinary exchange mechanic is used mainly as a disguised donation, value-funneling route, circular transfer, RMT route, exploit-laundering route or coordinated limit-evasion method rather than for its actual gameplay purpose.

An unusual price, large bid, profitable resale, large Begging donation, repeated legitimate collecting activity or friendship between users is **not by itself proof of abuse**.

## 3. Current Art publication behavior

The reviewed `social_create_art_post(...)` path currently:

- requires authentication and an image;
- uses a per-user advisory lock;
- supports a durable client nonce for idempotency;
- uses fingerprint checks to prevent duplicate publication;
- can promote an eligible saved draft to an active listing;
- rejects art already recognized as published; and
- currently creates active listings with a one-day expiration.

The current single-flight draft guard also suppresses certain stale duplicate-draft requests.

Legal consequence: retrying after a network failure is not automatically exploit abuse. The system should reconcile duplicate/retry state before attributing intent. Knowingly defeating duplicate-publication controls to create repeated rewards, listings or economic state can be treated differently where evidence supports knowledge and repetition.

## 4. Current art editing and ownership distinction

The reviewed `social_update_owned_art(...)` path currently permits editing only where the caller is both the original artist and the current owner, and it does not permit editing an active listing.

TycoonX may distinguish creator/original artist from current in-game owner. Transfer of the in-game artwork does not by itself transfer copyright or other real-world intellectual-property rights unless expressly stated. Players must have the rights or permission required to upload their submitted content under the Community Standards and applicable law.

## 5. Art auction bidding is a real escrow-style gameplay mechanism

The current `social_bid_art(...)`/legacy bidding path is designed to:

- require an active, unexpired auction;
- require a bid above the current highest bid;
- reject insufficient wallet balance;
- hold/deduct the bidder's value;
- refund or release the previous highest bidder's value;
- charge only the additional difference when the same highest bidder raises their own bid through the current Finance V2 wrapper; and
- currently apply anti-sniping extension logic when a bid arrives near closing.

These current implementation details are balance/settlement rules, not permanent contractual promises. CK-Labs may prospectively change auction timing, minimum increments, extension logic, listing duration and similar gameplay settings, subject to mandatory law.

## 6. Auction finalization and resale

The current finalization path settles an expired active auction and, where there is a winning bidder, transfers in-game ownership to the winning bidder and credits the seller with the winning value. A cron processes expired auctions with locking/skip-locked behavior.

The current `social_resell_art(...)` path requires the current owner and starts a new active sale period. The reviewed design intentionally preserves the prior `highest_bid` as the next starting-price floor when an artwork is relisted.

That retained floor is a current gameplay rule, not a representation of real-world value, investment value or guaranteed future resale value.

## 7. Cancellation must preserve bidder value

The reviewed `social_cancel_listing(...)` path is the intended cancellation route. It cancels an active listing and, where a current highest bidder exists, refunds the held bid before clearing the bidder reference. The prior bid value can remain as the next starting-price floor.

A cancellation, moderation action or backend correction must not intentionally convert a legitimate bidder hold into a windfall for CK-Labs or another player. Where a technical defect prevents an expected refund, CK-Labs may reconcile the affected transaction from authoritative records, subject to mandatory consumer rights.

## 8. Art direct offers are a real current feature

The current TycoonX implementation supports formal direct offers for `art_gallery` items through the Post Office/direct-offer system.

The reviewed `social_postoffice_send_offer(...)` path currently:

- prohibits sending an offer to oneself;
- requires a positive amount;
- verifies the recipient currently owns the item;
- escrows the buyer's offer amount plus the applicable letter fee;
- permits only one live direct offer for the same item at a time;
- applies a current rolling per-kind offer limit;
- applies configured maximum amounts; and
- where an artwork has a positive reference highest bid, currently limits an art offer to a configured range around that reference bid.

Current defaults/ratios, limits and fees are implementation settings and can change prospectively.

## 9. Direct-offer counteroffers, expiry and settlement

The current direct-offer flow supports accept, decline and counteroffer states. Current pending offers expire after the applicable period and the expiry path refunds remaining escrow. If ownership changes before settlement, the current completion path rejects the stale transaction and refunds escrow.

A completed direct offer transfers the artwork's in-game ownership and pays the seller from the buyer's escrow. This is an intended goods/asset-for-value mechanic, not a donation mechanic.

Legitimate negotiation, a large bid, a low bid within the accepted rules or a profitable resale is not automatically abuse. Coordinated fake offers, circular transfers, controlled-account trading, fabricated price history, RMT or knowingly exploiting stale ownership/escrow state can be investigated when evidence supports that purpose.

## 10. Direct-offer preference implementation finding

The current Flutter client contains owner settings to enable/disable art direct offers and to set an art minimum offer amount.

However, the reviewed production `social_postoffice_send_offer(...)` definition does **not visibly enforce the recipient's `direct_offers_art_enabled` or `direct_offers_art_min_amount` preferences on the server** before creating an art offer. It enforces global/current offer limits and ownership checks, but the per-owner preference appears to be primarily client-side in the inspected path.

Engineering priority: enforce owner opt-out/minimum preferences server-side so a modified/direct client cannot bypass the receiving player's configured preference.

Legal consequence: receipt of an unwanted server-accepted offer caused by this mismatch is not misconduct by the recipient and should not create an obligation to respond or transact.

## 11. Critical self-bidding implementation finding

The reviewed auction bid guard rejects a bid where the bidder equals the art post's original `user_id`.

After an artwork has been transferred and later relisted, the **current seller is represented by `owner_id`**, which can differ from the original `user_id`. The reviewed self-bid check therefore appears to protect against bidding by the original artist rather than comprehensively rejecting bidding by the current seller.

This creates a potential post-resale self-bid path. A current owner could potentially attempt to bid on their own relisted artwork if they are not the original artist.

Engineering priority: the server bidding path should reject a bidder who is the current seller/owner, and tests should cover original-artist versus current-owner resale cases.

Legal consequence: intentionally self-bidding to fabricate demand, increase a price floor, create misleading price history, manipulate another player's behavior, transfer value circularly or exploit settlement is prohibited. A single accidental server-permitted action should still be distinguished from knowing/repeated manipulation before punitive enforcement.

## 12. Critical generic Art UPDATE authority finding

Production `social_art_posts` currently uses RLS that permits the current owner to UPDATE their row. The reviewed policy is row-based rather than visibly limited to only safe player-editable auction columns.

This creates an over-broad direct-write surface because auction-sensitive state such as `highest_bid`, `highest_bidder_id`, `status` and `expires_at` is normally supposed to be managed through dedicated server flows.

The current Finance V2 Art hold trigger observes changes in auction state for accounting/hold tracking, but the reviewed trigger does not itself reproduce the wallet debit and all validation performed by the bidding RPC.

A modified/direct client may therefore be able to attempt state transitions that bypass normal bid RPC invariants.

Engineering priority: make auction-managed fields server-owned. Prefer dedicated SECURITY DEFINER RPCs with narrow validation and remove or column-limit generic owner UPDATE authority for auction state.

A database request accepted because of an over-broad authorization surface is not permission to knowingly manufacture bids, price history, ownership or settlement. Conversely, the existence of malformed server state alone is not sufficient proof that the current owner caused it deliberately.

## 13. Active-row DELETE/refund implementation concern

Production RLS currently permits the current owner to DELETE their `social_art_posts` row. The reviewed normal cancellation path explicitly refunds an active highest bidder. The reviewed raw-delete accounting trigger marks an Art hold for legacy review but does not visibly perform the same wallet refund itself.

The reviewed `mod_delete_art_post(...)` path also performs a raw delete, while the separate `moderate_delete_social_art_post(...)` path explicitly handles bidder refund/release behavior.

Engineering priority: ensure **every** path capable of deleting/removing an active auction is refund-aware and atomic, or route active deletion through the same cancellation/moderation settlement primitive.

Until engineering confirms equivalence, support should reconcile any missing bidder refund from authoritative bid, wallet and Finance V2 records rather than treating the bidder's lost hold as intended gameplay.

## 14. Moderation can happen before or after publication

The current Flutter pre-publication moderation helper invokes the Art moderation Edge Function. In the reviewed client, an HTTP 202 response representing temporary moderation unavailability is treated as permitting the client flow to continue. Production also has a database trigger that requests Art moderation after relevant active inserts/changes.

Therefore TycoonX must **not promise that every artwork is reviewed before it becomes visible**. Player-facing rules may say that content can be automatically or manually reviewed before or after publication and can later be restricted or removed.

Moderation removal of an active auction should preserve/refund legitimate bidder value through the refund-aware moderation path. Moderation action should not be used as a shortcut to confiscate unrelated legitimate purchased Diamonds, VIP or unrelated game wealth.

Where applicable law requires notice, reasons, complaint/appeal mechanisms or other procedural safeguards for content restrictions, those rights remain intact.

## 15. Begging is the intended player-assistance channel

The reviewed `social_open_begging_post(...)` path currently:

- requires authentication;
- requires a non-empty message;
- limits the message to 50 words; and
- permits one Begging post in a rolling 24-hour period, with the post currently expiring after one day.

The reviewed donation path:

- requires a positive amount;
- prohibits donating to one's own Begging post;
- checks the donor's wallet;
- deducts the donation from the donor;
- adds it to the recipient post's collected/uncollected value; and
- records the donation.

The recipient later collects eligible uncollected donations through the current Begging collection RPC.

These exact numerical/time rules may be rebalanced prospectively. The important contractual distinction is the feature's purpose: **Begging is designed for voluntary in-game assistance.**

## 16. Genuine Begging is permitted

A player may voluntarily help another player through the available Begging feature. A genuine donation is not prohibited merely because:

- the amount is large;
- the users know one another;
- one player is substantially richer;
- the recipient later becomes successful; or
- the donor receives no direct economic return.

The absence of consideration is part of the Begging mechanic's intended purpose.

## 17. Begging abuse remains reviewable

Begging may not be used to facilitate separately prohibited conduct, including:

- prohibited real-money trading or off-platform sale of game value;
- use of stolen/compromised accounts to transfer value;
- exploit-generated or duplicated money laundering;
- controlled alternate accounts used to farm, manufacture or route value;
- automation or modified clients used to evade posting/donation limits;
- coordinated fraud or deceptive impersonation; or
- evasion of a sanction, freeze or other legitimate account restriction.

Enforcement must remain evidence-based. A large donation alone is not enough.

## 18. Art UGC and intellectual-property rules

Players remain responsible for ensuring that art they upload is lawful and that they have the necessary rights or permissions to submit and display it. TycoonX may moderate/remove content that violates the Community Standards, applicable law or third-party rights.

In-game ownership of an Art Gallery item is a gameplay entitlement. It does not turn the artwork into a real-world financial asset and does not guarantee copyright ownership, commercial exploitation rights, resale value, price appreciation, liquidity or convertibility to real money.

## 19. No market-value guarantee

Art price floors, highest bids, direct-offer reference ranges, auction histories and news stories are game mechanics. They are not valuations, appraisals, financial advice or guarantees that another player will pay the same or a higher amount later.

CK-Labs may prospectively rebalance Art mechanics, listing durations, direct-offer ratios, daily limits, publication rules, moderation systems and Begging limits for legitimate gameplay, security, operational or legal reasons, subject to mandatory law.

Completed legitimate transactions are not retroactively repriced solely because future balance settings change.

## 20. Server authority, defects and correction

For Art and Begging, authoritative server transaction, bid, offer, escrow, ownership and wallet records are primary operational evidence. Those records can still contain defects, duplicate jobs, stale state, authorization mistakes or source drift.

When correcting invalid state CK-Labs should:

1. identify the directly affected transaction/state;
2. avoid double-refunds or double-clawbacks;
3. preserve unrelated legitimate transactions and paid entitlements;
4. separate state correction from punitive account enforcement;
5. distinguish accidental one-off behavior, outages and account compromise from knowing/repeated exploitation; and
6. preserve mandatory EU/German and other non-waivable consumer rights.

## 21. Account compromise

A suspicious Art bid, direct offer, sale or Begging donation may result from account compromise. CK-Labs may temporarily restrict affected trade actions while investigating, preserve logs, reverse clearly unauthorized transactions where reliable evidence and law permit, and require reasonable account-security steps.

Compromise claims are not automatically accepted or rejected. Restoration depends on available reliable evidence and cannot be guaranteed where the prior state cannot reasonably be reconstructed. Unrelated users should not be punished merely because they unknowingly received an ordinary-looking transaction from a later-compromised account.

## 22. Evidence for collusion/self-dealing review

Relevant evidence may include transaction timing, repeated circular ownership, commonly controlled accounts, repeated self-bid patterns, impossible client state transitions, offer/escrow event history, linked exploit events, communications and security signals lawfully available to CK-Labs.

No single factor such as friendship, same Union, same Company, high price, low price, nationality, language, geographic region or one transaction should mechanically determine serious sanctions.

## 23. Proportional enforcement

Depending on severity and evidence, responses can include transaction reconciliation, auction cancellation, value correction, temporary marketplace restrictions, removal of invalid leaderboard/economic effects, warnings, suspension or termination.

Serious punitive sanctions should take account of intent, repetition, scale, concealment, coordinated behavior, security compromise and prior warnings where relevant. CK-Labs may act immediately where reasonably necessary to stop active fraud, exploitation, account compromise or security harm.

Corrections and sanctions do not waive non-waivable rights.

## 24. Release-blocking engineering follow-ups

The legal wording is designed to remain fair even while technical defects are investigated, but the following are engineering priorities:

**P0 - Art current-owner self-bid:** change the bid guard to reject the current `owner_id`/seller, not only the original artist `user_id`; cover resale in tests.

**P0 - Art generic UPDATE authority:** remove or column-limit direct owner writes to auction-managed fields and require validated RPC transitions.

**P0 - Active Art DELETE settlement:** make every active-delete/moderation path atomically refund/release a legitimate current bid hold or block raw deletion until safe settlement is complete.

**P1 - Direct-offer recipient preferences:** enforce `direct_offers_art_enabled` and the recipient's minimum art-offer amount server-side rather than relying on client behavior.

These findings were identified read-only. This legal run makes no production database changes.

## 25. Regression matrix

A release/QA pass should cover at least these scenarios:

1. original artist bids on their own active auction -> rejected;
2. current non-original owner relists and attempts to bid on their own auction -> rejected after engineering fix;
3. normal collector bids on a resale -> allowed;
4. bidder is outbid -> previous held value is refunded/released once;
5. same highest bidder raises their bid -> only the intended delta is newly held;
6. bid arrives after expiry -> rejected;
7. near-close bid -> current anti-sniping behavior is applied exactly once;
8. auction finalization -> ownership and seller value settle once;
9. repeated finalizer/cron execution -> no duplicate seller payout;
10. normal owner cancellation with active bidder -> bidder hold refunded once;
11. direct/raw delete attempt with active bidder -> blocked or refund-equivalent settlement occurs;
12. moderator removal with active bidder -> bidder refund/release occurs once;
13. moderation service temporarily returns 202 -> no false promise that art was pre-approved;
14. later post-publication moderation removes prohibited art -> appropriate notice/reason flow where legally required;
15. duplicate publish retry with same nonce -> one logical art publication;
16. duplicate fingerprint after network retry -> no double publication/reward;
17. legitimate saved draft promoted to active -> one listing;
18. modified client changes `highest_bid` directly -> blocked after engineering hardening;
19. modified client changes `highest_bidder_id` directly -> blocked;
20. modified client changes auction `expires_at`/`status` directly -> blocked unless through authorized transition;
21. malformed server state appears without attribution evidence -> corrected without automatic serious sanction;
22. genuine high-price art bid -> not automatically classified as gifting;
23. coordinated controlled accounts self-bid/circularly trade to fabricate demand -> reviewable abuse;
24. art purchase deliberately used as disguised donation -> reviewable where evidence establishes purpose;
25. ordinary speculative art resale -> allowed;
26. art direct offer to current owner -> ownership verified;
27. art direct offer to stale former owner -> rejected/refunded;
28. art direct offer accepted -> escrow pays seller and ownership moves once;
29. art direct offer expires -> escrow refunded once;
30. art direct offer declined -> escrow refunded once;
31. counteroffer -> previous escrow reconciled and current party's escrow held correctly;
32. second live offer for same art -> rejected under current rule;
33. buyer exceeds current offer amount/reference bounds -> rejected;
34. owner disables Art offers -> modified client cannot bypass after engineering fix;
35. owner sets a minimum Art direct-offer amount -> server enforces it after engineering fix;
36. player opens one genuine Begging post -> allowed;
37. player retries Begging creation due network error -> no punitive inference from retry alone;
38. user donates positive value to another player's Begging post -> allowed;
39. user tries to donate to own Begging post -> rejected;
40. legitimate very large Begging donation -> not automatically abuse;
41. controlled accounts route exploit-generated wealth through Begging -> reviewable abuse;
42. compromised account sends donation -> containment/reconciliation does not automatically punish innocent recipient;
43. Begging text violates content rules -> moderation can remove/restrict it;
44. Art or Begging backend outage causes stale client display -> authoritative reconciliation without abuse presumption;
45. invalid transaction correction -> unrelated purchased Diamonds/30-Day VIP/Lifetime VIP remain untouched;
46. future balance change lowers/raises Art ranges -> completed legitimate historical sale not retroactively repriced solely for that reason;
47. RMT using Art/Begging -> prohibited independently of whether the API accepted the transfer;
48. permanent feature retirement or provider replacement -> handled under canonical service-change/shutdown rules and mandatory law.

## 26. Mandatory-rights boundary

Nothing in this gate authorizes CK-Labs to waive mandatory withdrawal, conformity, update, notice, consent, price-reduction, termination, refund, liability, privacy, content-moderation or other non-waivable rights. Gameplay discipline and technical state correction remain separate from statutory remedies.

## 27. Release criterion

Art/Begging legal QA is considered complete only when:

- the canonical Terms clearly distinguish Art exchange from Begging assistance;
- all 25 localized Terms receive the same substantive rule in natural local language;
- the app does not promise guaranteed pre-publication moderation;
- the P0/P1 engineering risks above are tracked for technical remediation;
- support/enforcement distinguishes legitimate high-value behavior from evidence-supported abuse; and
- the localization progress tracker records this code-first audit and the next gameplay target without reopening unrelated completed documents.
