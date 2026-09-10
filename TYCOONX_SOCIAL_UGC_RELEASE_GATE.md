# TycoonX Social, Chat & UGC Release Gate

Last reviewed: **September 10, 2026**  
Operator: **CK-Labs**  
Status: **code-first, read-only production audit**

TycoonX went to full release on **September 1, 2026**. The live game, users, purchases, VIP, Diamonds, rewards and current legal terms must not be described as beta.

## 1. Scope and relationship to existing legal controls

This gate maps the deployed Social/UGC implementation to the TycoonX Terms, Privacy Policy and Community Standards. It covers:

- global/country, Company, Union and Executive Company Chat;
- direct nickname, group and team mentions, replies, reactions, polls and pins;
- Company meeting rooms, restaurant/private tables and Home Rooms;
- avatars, displayed Art, books, music and playback;
- Post Office letters, including the player-facing anonymous option;
- reports, moderation, restoration and enforcement evidence;
- scams, phishing, impersonation, malicious links, doxxing and access-control evasion; and
- social Music and Books where they introduce implementation-specific settlement or UGC risks.

This gate does **not** duplicate the general copyright doctrine in `TYCOONX_UGC_COPYRIGHT_URHDAG_RELEASE_GATE.md`. That gate remains controlling for creator rights, the limited operational UGC licence, IP complaints, UrhDaG classification and repeat-infringement handling.

No database row, function, trigger, policy, grant, schema object, cron, balance or configuration was changed during this audit.

## 2. Player-facing baseline

TycoonX contains public and restricted community spaces. Public chat, public profiles, public creator listings and other intentionally public surfaces can be visible to other players. Company, Union, Executive Company Chat, admitted meeting rooms, active private social tables, Home Rooms and similar restricted spaces are intended to be available only to the participants or roles authorized for that space, subject to lawful CK-Labs moderation, security, support, legal-compliance and abuse-investigation access.

Restricted does not mean end-to-end encrypted, inaccessible to CK-Labs, or immune from lawful preservation. It does mean the product should enforce the audience that TycoonX represents to players. A backend authorization defect is not a contractual permission for another player to enter, read, route into or disclose a restricted space.

A player-facing anonymous feature may hide the sender from ordinary recipients as represented by the interface. It is not a promise that CK-Labs, payment/security systems or authorities acting under applicable law can never identify the account. Conversely, an implementation must not unnecessarily reveal an identity that the product represents as hidden from the recipient.

## 3. P0: ordinary Company and Union chat are not currently server-confidential

The current `messages` table has broad permissive SELECT policies with `qual = true`. The additional restrictive server boundary applies only when `is_executive_company_message` is true.

Result under the reviewed production policy set:

- Executive Company Chat has a server-side read boundary through `can_access_executive_company_chat(...)`.
- Ordinary Company Chat and Union Chat do **not** have an equivalent server membership condition at the `messages` SELECT policy layer.
- The Flutter client filters the channel it requests, but client filtering is not a confidentiality control against a modified/direct client.

### Required remediation

Make message visibility server-authoritative. A SELECT policy or trusted read RPC/view should require the correct current audience for each restricted channel:

- Company Chat: active membership in the matching Company;
- Union Chat: active membership in the matching Union;
- Executive Company Chat: `can_access_executive_company_chat(...)` or its authoritative successor;
- role-gated support/ambassador channels: the matching current role/access rule; and
- intentionally public/country channels: the intended public/country rule.

Do not rely on the Flutter query to protect private history.

## 4. P0: message routing and privileged row fields are too client-writable

The normal Flutter chat path inserts directly into `messages` and supplies routing fields such as `company_id`, `union_id`, `country` and `is_executive_company_message`. Current INSERT policy primarily binds `user_id` to `auth.uid()`, while the restrictive membership boundary is specific to Executive Company Chat. The inspected message triggers moderate/archive/notify, but do not provide a general Company/Union membership check before a non-executive row is accepted.

The owner UPDATE policy is also row-wide. In the reviewed schema, a message author can potentially attempt to change routing or privileged state such as `company_id`, `union_id`, `country`, `is_executive_company_message` or `pinned`, rather than being limited to safe editable content fields.

This also weakens the otherwise permission-aware `toggle_chat_message_pin(...)` RPC. The RPC correctly checks staff, Company manager/CEO, or matching ambassador authority, but a raw owner UPDATE should not provide a second route to the `pinned` field.

### Required remediation

Use server-authoritative message creation/update transitions. At minimum:

- validate the destination channel against the authenticated caller on INSERT;
- reject invalid simultaneous routing combinations;
- make routing fields immutable after creation except through a trusted migration/moderation path;
- make `pinned` server-owned and change it only through the authorized pin RPC;
- limit player UPDATE to the intended editable content fields; and
- preserve current Executive Company Chat restrictions when refactoring.

## 5. P0: Executive Company Chat content can leak through push notifications

The reviewed `can_access_executive_company_chat(...)` function is materially stronger than the notification path. It requires the Executive Chat feature to be unlocked and limits access to the CEO or active members whose normalized role is not `specialist`.

However, current notification triggers can send the full message body outside that audience:

1. `handle_new_message_mention()` resolves an ordinary `@nickname` and can send `sender: full message content` without first checking that the mentioned player can access the parent Executive Company Chat.
2. Its reply notification can target the author of an older message without rechecking current channel access. This matters after role or membership changes.
3. Its channel-wide Executive Company Chat notification branch checks active Company membership but does not apply the Executive Chat role rule, so a specialist can potentially receive the push body when that notification preference is enabled.
4. `handle_new_message_group_mentions()` can send an Executive Company Chat `@all` body to active Company members without filtering the recipients through the Executive Chat access function.

### Required remediation

Every push containing restricted message content must apply the **same current authorization rule as reading that message**. Recheck access at send time for direct mentions, replies, group mentions and channel-wide pushes. If access is unavailable or ambiguous, send no content-bearing push. Prefer a generic access-safe notification only if there is a documented product need.

Revoked access must also stop future reply/mention content leaks from historical messages.

## 6. P0: social Music auction state can be fabricated and converted into wallet value

The ordinary Flutter Social service uses the dedicated `social_create_music_post(...)` and `social_bid_music(...)` RPCs. The canonical bid RPC is reasonably defensive: it authenticates, locks the listing, requires an active auction, requires a higher bid, blocks bidding by the current owner, checks wallet funds, handles the prior bidder and records a bid.

The current `social_music_posts` owner UPDATE policy is much broader. An owner can potentially attempt to alter auction-managed fields including `highest_bid`, `highest_bidder_id`, `expires_at`, `status` and `owner_id` directly.

This becomes P0 because the reviewed legacy settlement functions underlying `social_finalize_music_auction(...)` and cancellation trust the listing's `highest_bid` / `highest_bidder_id` state when crediting wallets. They do not independently prove that the represented amount is backed by an authoritative accepted bid/escrow hold before every credit.

A manipulated listing row must therefore never be the sole financial source of truth.

### Required remediation

- Remove ordinary owner write authority from all settlement-managed Music fields.
- Keep title/creator-editable metadata separate from auction state.
- Finalization and cancellation must reconcile against an authoritative bid/hold ledger and refuse any credit that is not fully backed by the expected hold.
- Validate seller, winning bidder, exact held amount, auction state and idempotency inside one trusted settlement boundary.
- Preserve row locking and duplicate-settlement protection.
- Treat any current contaminated rows as reconciliation work, not as proof that every recipient intentionally exploited the defect.

The legal rule may prohibit knowing manipulation, fake bids, circular/controlled-account auctions, exploit laundering and RMT. It must not characterize an ordinary high Music bid or genuine resale as misconduct merely because the price is large.

## 7. P1: anonymous Post Office sender identity is visible in the raw authorized row

TycoonX has a real `p_is_anonymous` Post Office option. The stored letter nevertheless contains `from_user_id`, and the current RLS permits both sender and recipient to SELECT the `social_postoffice_letters` row.

That means the normal interface may hide the sender while a technically capable recipient can potentially obtain `from_user_id` through the direct data API. This is inconsistent with a player-facing anonymous presentation.

### Required remediation

If the product continues to promise sender anonymity **to the recipient**, do not expose the raw sender identifier to that recipient. Use a recipient-safe view/RPC or column-level design that returns a redacted sender for anonymous letters, while retaining lawful operator-side identity for security, moderation, fraud prevention and legal obligations.

Legal copy should say that anonymous mode does not make the user anonymous to CK-Labs or lawful authorities. It should not be used to excuse avoidable recipient-side identity disclosure.

## 8. P1: poll authorization is not bound to the parent channel

`vote_chat_poll(...)` and `get_chat_poll_vote_counts(...)` are SECURITY DEFINER and validate poll structure, but the reviewed functions do not first prove that the caller is entitled to read the parent `messages` row. `chat_poll_votes` policies likewise focus on voter identity/anonymity rather than the parent room audience.

A known restricted poll ID should not become an alternate access route to poll participation, counts or non-anonymous voter information.

### Required remediation

Create one authoritative `can_read_message(message_id, auth.uid())` decision and reuse it for message reads, poll voting, counts, voter-identity visibility, reactions, reply lookup, mention/reply notifications and any future message-derived feature.

## 9. P1: Home Room collection data bypasses the intended entrance boundary

The current Home Room RPCs are comparatively strong:

- `home_room_enter(...)` requires the resident, a live invitation, or admitted door request and enforces occupancy/kick state;
- `home_room_load_profile(...)` requires the resident or an active room member;
- `home_room_send_message(...)` requires a recent active membership heartbeat;
- `home_room_save_collection(...)` verifies the resident's ownership of displayed Art, books and music; and
- `home_room_set_playback(...)` is resident-only.

But authenticated SELECT policies on `home_room_art_slots`, `home_room_book_slots`, `home_room_playlist_items` and `home_room_profiles` currently use `true`. A direct client can therefore potentially read collection/playback/layout rows without first satisfying the entrance check used by `home_room_load_profile(...)`.

### Required remediation

Align raw reads with the intended room audience or remove direct table reads in favour of the validated profile RPC. Public discovery data, if desired, should be exposed intentionally through a separate minimal view rather than through private room-state tables.

## 10. P1: callable moderation notification can impersonate an official moderation event

`notify_moderation_event(...)` is SECURITY DEFINER, accepts an arbitrary affected user/source/action payload, reads the service-role notification secret internally and currently has broad EXECUTE access. The reviewed function itself does not establish a trusted caller before sending an official-looking moderation push to the affected user and alerts to staff.

The function does not itself ban the user, but it can produce authoritative-looking messages such as content being automatically changed and repeated violations potentially leading to a ban. Such notifications can be used for harassment, support impersonation or evidence pollution if callable by an ordinary client.

### Required remediation

Make moderation notification dispatch trigger/service/staff-internal only. Derive notification fields from the authoritative moderation event where possible rather than accepting arbitrary client-supplied event facts.

A notification alone is not proof that a violation happened. Enforcement should use the underlying content, moderation record, report/review evidence and surrounding context.

## 11. Brand defect: a live server-generated push still contains `TyconX`

The current `handle_new_message_mention()` fallback channel name contains the player-facing text `TyconX Community Global Chat Channel`.

This violates the mandatory brand rule. The database was not changed in this audit. The next approved database migration touching this function should replace that display string with **`TycoonX Community Global Chat Channel`** and verify all notification/localization branches for the same misspelling.

Technical route/function/file names may retain `tyconx` only where necessary for compatibility; rendered player-facing text may not.

## 12. Positive controls confirmed in this review

Not every social surface is weak. Important controls already exist:

- Executive Company Chat has a restrictive RLS boundary through `can_access_executive_company_chat(...)`.
- Private restaurant/social-table messages require current table membership for private reads/inserts and validate reply-table consistency.
- Company meeting-room access validation requires current Company membership plus management/admission state; blocking removes non-host table membership.
- Company meeting-room chat clearing is restricted to active CEO/COO/CFO roles.
- Home Room chat uses active membership and a current heartbeat, and its chat read policy limits history to the current visit.
- `message_reports` and `user_reports` bind the reporter identity and separate ordinary reporter visibility from staff review.
- moderation review/enforcement records have staff-oriented read policies.
- `restore_ai_moderation_action(...)` and `restore_moderated_content(...)` include an internal staff-role check and require a recovery reason.
- Book publication, restocking, price changes and reviews use authenticated server RPCs with ownership, caps and eligibility checks.

These controls should be preserved while closing the broader access paths.

## 13. Moderation timing, reports and evidence

Current chat moderation can be triggered after INSERT/UPDATE and calls an external moderation Edge Function asynchronously. A failure produces a warning rather than blocking the original row. Therefore TycoonX must not promise that all visible UGC has already been manually or automatically approved before publication.

The lawful operational position is:

- CK-Labs may use automated and human moderation before or after publication;
- reports, model scores, anomaly flags and notifications are signals rather than infallible proof;
- serious enforcement should consider the actual content, server records, context, repeat behavior, account/security evidence and any reliable counterevidence;
- accidental one-off events, stale state, outages and account compromise should be distinguished from knowing or repeated abuse;
- moderation mistakes should be reversible where technically and legally appropriate; and
- applicable notice, statement-of-reasons, complaint, appeal, privacy and other mandatory rights remain intact.

Deletion from a player-facing surface does not necessarily mean immediate erasure from backups, abuse evidence, dispute records or legally required retention. Any continued processing must remain justified under the Privacy Policy and applicable law.

## 14. Scams, impersonation, phishing and access-control evasion

The Community Standards should continue to prohibit, as applicable:

- impersonating CK-Labs, TycoonX staff/support/moderators or another player for deception;
- phishing for passwords, verification codes, payment credentials or account access;
- fraudulent compensation/refund/VIP/Diamond offers;
- malicious or deceptive links and fake external payment pages;
- doxxing or unlawful disclosure of private personal information;
- using blocked/muted/alternate accounts to evade a safety or contact restriction;
- using modified clients, direct APIs, guessed IDs or authorization defects to enter, read, post to, notify from, or manipulate a channel/room the account is not entitled to use; and
- using chat, Post Office, creator listings or social auctions to arrange prohibited real-money trading, exploit laundering or disguised value transfers.

A server request being accepted because of a validation defect is not automatically a safe harbor. Equally, a strange message, unexpected recipient, leaked push or contaminated row alone does not prove that the affected account intentionally caused the defect.

## 15. Music, Books and other creator content

Music and Books are genuine TycoonX creator/gameplay systems. Their virtual prices, bids, royalties and ownership are game mechanics, not real-world valuations, securities, royalty societies or guarantees of income.

Users retain the rights they hold in their UGC and grant only the operational licence described by the canonical legal documents. They must have the rights necessary for material they upload or share. CK-Labs may moderate or remove content under the Terms, Community Standards and applicable law, but should not claim ownership of a user's copyright merely because the work is uploaded to TycoonX.

The separate copyright/UrhDaG gate controls rights-holder notices, classification and repeat-infringement procedure.

## 16. Account compromise, outages and proportionate correction

When suspicious social/economy activity is connected to an account compromise, authorization bug, moderation defect, stale client, retry/race condition or provider outage, first preserve evidence and contain ongoing harm.

Corrections should target the invalid state directly attributable to the incident. For example, fabricated Music settlement value may be reversed when authoritative evidence supports that conclusion. A social moderation or chat correction does not, by itself, reclassify unrelated valid purchase records as fraudulent. Diamonds, one-time 30-Day VIP and Lifetime VIP remain governed by their purchase, refund, chargeback, entitlement and termination rules.

A ban or termination can affect access to the Service where the Terms and law allow it, but it does not erase mandatory consumer remedies or permit CK-Labs to characterize a genuine technical defect as misconduct merely to avoid those remedies.

## 17. Current platform and EU/German law checkpoint

As reviewed on September 10, 2026:

- Apple App Review Guideline 1.2 requires UGC/social apps to provide objectionable-content filtering, reporting with timely response, blocking of abusive users and published contact information. Apple also treats creator content as UGC and requires the relevant moderation rules.
- Google Play's current UGC policy requires clear terms/user policy acceptance before users create/upload UGC, definitions/prohibitions for objectionable behavior, robust ongoing moderation, in-app reporting, and blocking for 1:1 interactions such as direct messaging, tagging or mentions.
- Where the EU Digital Services Act applies, content-restriction and platform complaint duties can include clear reasons and internal complaint-handling safeguards. Do not contract out of an applicable DSA right.
- GDPR Article 5 requires, among other principles, lawful/fair/transparent processing, purpose limitation, data minimisation and accuracy. Applicable integrity/confidentiality and security obligations remain separate from a contractual statement that a room is merely a game feature.
- German BGB consumer and digital-product protections remain intact. Social moderation, access restrictions or UGC rules are not a waiver of mandatory conformity, remedy, change, termination, privacy or liability rights.

## 18. Release regression cases

Before treating this cluster as operationally hardened, test at least these cases against the production-like server rules:

1. non-member cannot SELECT ordinary Company Chat history;
2. non-member cannot INSERT into another Company's chat;
3. former Company member loses restricted history access;
4. non-member cannot SELECT Union Chat history;
5. non-member cannot INSERT into another Union's chat;
6. message author cannot rewrite a normal message into another channel;
7. ordinary author cannot set `pinned=true` directly;
8. authorized manager/admin pin RPC still works;
9. specialist cannot read Executive Company Chat;
10. specialist cannot receive Executive Company Chat body through channel push;
11. outsider nickname mentioned in Executive Company Chat receives no restricted body;
12. Executive `@all` excludes users who cannot read Executive Chat;
13. reply to an old message does not leak body after recipient access is revoked;
14. direct/team/group mentions use the same parent-message authorization;
15. restricted poll cannot be voted by an unauthorized user with a known message ID;
16. restricted poll counts are not exposed to unauthorized users;
17. non-anonymous restricted poll voter identities remain channel-bound;
18. private social-table chat still requires current table membership;
19. Company meeting-room blocked member cannot re-enter/read chat;
20. Home Room non-visitor cannot query private collection/playback state through raw tables;
21. active Home Room visitor can load only the represented resident collection;
22. Home Room current-visit chat history rule still works;
23. anonymous Post Office recipient cannot obtain sender ID through ordinary client/API responses;
24. CK-Labs can still identify anonymous-letter sender where lawfully needed for moderation/security;
25. ordinary client cannot dispatch an official moderation notification to another user;
26. moderation restoration remains staff-only in practice;
27. moderation outage does not falsely mark unreviewed content as approved;
28. report submission does not automatically prove a violation;
29. blocked/muted user evasion can be reviewed without exposing unnecessary private data;
30. Music owner cannot alter bid/escrow/expiry/settlement fields directly;
31. Music finalization refuses an unbacked fabricated winning amount;
32. Music cancellation refuses to refund a fabricated/unheld amount;
33. genuine Music bid/outbid/finalization still settles exactly once;
34. high genuine Music price alone does not trigger punishment;
35. Book author cannot review own book;
36. Book reviewer must satisfy current ownership/read eligibility;
37. creator-content moderation preserves applicable IP complaint/redress paths;
38. compromised-account social abuse is distinguished from confirmed intentional abuse where evidence supports compromise;
39. correction of exploit-created wallet value does not silently rewrite unrelated purchase records;
40. all generated player-facing text spells **TycoonX** exactly;
41. no live current-service page describes TycoonX as beta; and
42. every affected localized Terms route preserves the same legal meaning, with Arabic RTL and genuine locale variants.

## 19. Release decision

**Legal wording status:** suitable for synchronization once the accompanying Social/UGC Terms notice is deployed.

**Operational status:** **not P0 clean**. The legal documents can describe intended access and abuse rules, but they cannot substitute for server-side confidentiality and financial authority. The ordinary Company/Union message policies, Executive notification audience, Music auction settlement authority and callable official moderation notification path require engineering remediation before TycoonX can be described as fully hardened.

Do not conceal those implementation findings by increasing the operational-readiness percentage.