# TycoonX Social, Chat & UGC Release Gate

Last reviewed: **September 10, 2026**  
Operator: **CK-Labs**  
Status: **code-first, read-only production audit**

TycoonX went to full release on **September 1, 2026**. The live game, users, purchases, VIP, Diamonds, rewards and current legal terms must not be described as beta.

## 1. Scope

This gate maps the deployed Social/UGC implementation to the TycoonX Terms, Privacy Policy and Community Standards. It covers public/country chat, Company and Union chat, Executive Company Chat, mentions/replies/polls/pins, Company meeting rooms, private social tables, Home Rooms, Post Office letters, profiles, Music, Books, reports, moderation, restoration, scams, phishing, impersonation, access-control evasion and implementation-specific creator-economy risks.

It supplements, rather than duplicates, `TYCOONX_UGC_COPYRIGHT_URHDAG_RELEASE_GATE.md`, which remains the detailed control for creator rights, the operational UGC licence, intellectual-property complaints, UrhDaG classification and repeat-infringement handling.

No database row, function, trigger, policy, grant, schema object, cron, balance or configuration was changed during this audit.

## 2. Player-facing baseline

TycoonX contains public and restricted community spaces. Public chat, profiles and creator listings can be visible to other players. Company, Union, Executive Company Chat, admitted meeting rooms, current private social tables, Home Rooms and similar restricted spaces are intended only for participants or roles authorized for that space, subject to lawful CK-Labs access for moderation, security, support, abuse investigation and legal compliance.

Restricted does not mean end-to-end encrypted or inaccessible to CK-Labs. It does mean the product should enforce the audience it represents to players. A backend authorization defect is not a contractual permission for another player to enter, read, route into or disclose a restricted space.

A player-facing anonymous feature may hide the sender from ordinary recipients as represented by the interface. It does not make the account anonymous to CK-Labs or authorities acting under applicable law. Conversely, implementation should not unnecessarily reveal an identity that the product represents as hidden from the recipient.

## 3. P0: ordinary Company and Union chat are not currently server-confidential

The reviewed `messages` table has broad permissive SELECT policies. The additional restrictive server boundary applies when `is_executive_company_message` is true, but an equivalent membership condition was not found for ordinary Company or Union message reads.

The Flutter client filters the requested channel, but client filtering is not a confidentiality boundary against a modified/direct client.

**Required remediation:** make message visibility server-authoritative. Company Chat should require active membership in the matching Company, Union Chat should require active membership in the matching Union, Executive Company Chat should reuse its authoritative access function, and role-gated support/ambassador channels should apply their current role boundary. Public/country chat should remain intentionally public only to the audience the product represents.

## 4. P0: message routing and privileged row fields are too client-writable

The current Flutter chat path inserts directly into `messages` and supplies routing fields such as `company_id`, `union_id`, `country` and `is_executive_company_message`. Current non-executive INSERT/owner UPDATE authority does not visibly make all restricted routing fields server-validated or immutable.

The owner UPDATE surface can also undermine the permission-aware `toggle_chat_message_pin(...)` RPC if authors can modify `pinned` directly.

**Required remediation:** validate destination access on INSERT, reject invalid routing combinations, make routing immutable after creation except through trusted moderation/migration, make `pinned` server-owned, and limit ordinary player UPDATE to intended editable content fields.

## 5. P0: Executive Company Chat content can leak through notifications

The reviewed `can_access_executive_company_chat(...)` function is materially stronger than the current notification audience logic. It requires the feature to be unlocked and limits access to the CEO or active members whose normalized role is not `specialist`.

The reviewed direct mention, reply, channel-wide and group-mention notification paths can nevertheless include the full message body without consistently applying that same access check. This can disclose Executive Company Chat content to specialists, outsiders mentioned by nickname, or users whose prior access was later revoked.

**Required remediation:** every push containing restricted message content must apply the same current authorization rule as reading the parent message. Recheck access at send time for direct mentions, replies, group mentions and channel-wide pushes. If access is unavailable or ambiguous, do not include restricted content in the push.

## 6. P0: social Music auction state can be fabricated and converted into wallet value

The ordinary Flutter Social service uses dedicated server RPCs. The canonical Music bid RPC authenticates, locks the listing, requires an active auction and higher bid, blocks current-owner self-bids, checks funds, handles the previous bidder and records the bid.

The current `social_music_posts` owner UPDATE policy is broader than that RPC and can expose auction-managed fields such as `highest_bid`, `highest_bidder_id`, `expires_at`, `status` and `owner_id`. Reviewed finalization/cancellation settlement then relies on listing bid state when crediting wallets without independently proving that every represented amount is backed by the authoritative accepted bid/hold.

This is a P0 economy-integrity issue because manipulated listing state can potentially become a wallet credit path.

**Required remediation:** remove ordinary owner write authority from settlement-managed Music fields; separate creator-editable metadata from auction state; require finalization/cancellation to reconcile against authoritative bid/hold records; verify seller, winner, exact held amount, auction state and idempotency inside one locked trusted settlement boundary; and never treat listing bid fields alone as financial authority.

A genuine high Music bid or resale is not abuse merely because the amount is large. Knowing fabricated bids, settlement manipulation, controlled-account circular trading, exploit laundering and prohibited RMT remain reviewable.

## 7. P1: anonymous Post Office sender identity is exposed by the raw authorized row

TycoonX has a real anonymous Post Office option. Stored letters retain `from_user_id`, while the reviewed RLS permits both sender and recipient to SELECT the underlying letter row. A technically capable recipient can therefore potentially retrieve the sender identifier even when the ordinary interface presents the letter as anonymous.

**Required remediation:** if sender anonymity to the recipient remains a product promise, expose a recipient-safe view/RPC that redacts sender identity for anonymous letters. CK-Labs may retain operator-side identity where lawfully necessary for moderation, security, fraud prevention and legal obligations.

## 8. P1: poll authorization is not bound to the parent channel

`vote_chat_poll(...)` and `get_chat_poll_vote_counts(...)` validate poll structure but do not consistently prove that the caller can read the parent message. Vote-row policies focus on voter identity/anonymity rather than the parent room audience.

**Required remediation:** create one authoritative parent-message access decision and reuse it for reads, poll voting, counts, voter-identity visibility, reactions, reply lookup and message-derived notifications.

## 9. P1: Home Room collection data bypasses the intended entrance boundary

The reviewed Home Room RPCs are comparatively strong. Entry requires resident/invitation/admission state, profile loading requires resident or active membership, chat requires recent active membership, saved collections verify ownership, and playback control is resident-only.

However, several underlying collection/profile tables permit broad authenticated SELECT access. A direct client can therefore potentially read collection/playback/layout state without satisfying the intended entrance check.

**Required remediation:** align raw reads with the intended room audience or expose only an intentional minimal public view while using the validated RPC for private state.

## 10. P1: callable moderation notification can impersonate an official moderation event

`notify_moderation_event(...)` is SECURITY DEFINER, accepts event details and an affected user, accesses the server notification secret internally and, in the reviewed version, does not establish a trusted caller before sending official-looking moderation notifications.

The function does not itself ban a user, but it can create misleading moderation pushes or staff alerts if callable by an ordinary client.

**Required remediation:** make moderation notification dispatch trigger/service/staff-internal only and derive notification facts from authoritative moderation records where possible. A notification is evidence that a notification was sent, not proof that the underlying violation occurred.

## 11. Brand defect in deployed notification prose

The reviewed `handle_new_message_mention()` fallback still contains a **legacy misspelling of the TycoonX brand** in a player-facing global-channel label.

The database was not changed in this audit. The next approved migration touching that function should correct the player-facing label to **TycoonX Community Global Chat Channel** and review all notification/localization branches for the same legacy spelling.

Technical route/function/file names may retain lowercase compatibility identifiers where changing them would break integrations. Rendered player-facing prose must always use **TycoonX**.

## 12. Positive controls confirmed

Important controls already exist and should be preserved:

- Executive Company Chat has a restrictive read function based on current Company access.
- Private restaurant/social-table messages bind private reads/inserts to active table membership and validate reply-table consistency.
- Company meeting-room validation checks current Company membership plus management/admission state; blocked members are removed from the room membership where intended.
- Company meeting-room history clearing is restricted to active executive roles.
- Home Room chat uses active membership and a recent heartbeat, and its read policy limits history to the current visit.
- `message_reports` and `user_reports` bind reporter identity and separate ordinary reporter visibility from staff review.
- moderation review/enforcement data have staff-oriented access controls in the reviewed policies.
- `restore_ai_moderation_action(...)` and `restore_moderated_content(...)` contain internal staff checks and require recovery reasons.
- Book publication, restocking, price changes and reviews use authenticated server RPCs with ownership, caps and eligibility checks.

## 13. Moderation timing, reports and evidence

Current chat moderation can run after message insertion/update and invokes a moderation Edge Function asynchronously. A moderation-service failure is warning-only in the reviewed trigger, so visible content is not necessarily pre-approved.

CK-Labs may use automated and human moderation before or after publication. Reports, model scores, anomaly flags and notifications are signals rather than infallible proof. Serious enforcement should consider the actual content, authoritative records, context, repeated conduct, security evidence and reliable counterevidence.

Accidental one-off events, stale state, outages and account compromise should be distinguished from knowing/repeated abuse. Moderation mistakes should be reversible where technically and legally appropriate. Applicable notice, statement-of-reasons, complaint, appeal, privacy and other mandatory rights remain intact.

Deletion from a player-facing surface does not necessarily mean immediate erasure from backups, moderation evidence, fraud/security records or legally required retention. Continued processing must remain justified under the Privacy Policy and applicable law.

## 14. Scams, impersonation, phishing and access-control evasion

The Community Standards should continue to prohibit impersonating CK-Labs, TycoonX staff or other players for deception; phishing; fraudulent compensation/refund/VIP/Diamond offers; malicious or deceptive links; doxxing; evading blocks/mutes through alternate accounts; using modified clients/direct APIs/guessed IDs to access restricted spaces; and using chat, Post Office or creator commerce for prohibited RMT, exploit laundering or disguised value transfers.

A request accepted because of a validation defect is not automatically a safe harbor. Equally, an unexpected message, leaked push, suspicious notification or contaminated row alone does not prove that the affected player intentionally caused the defect.

## 15. Music, Books and creator rights

Music and Books are genuine TycoonX creator/gameplay systems. Their virtual prices, bids, ownership and proceeds are game mechanics, not real-world valuations, securities, collecting-society royalties or guarantees of income.

Users retain the rights they hold in UGC and grant only the operational licence described by the canonical legal documents. They must have the rights necessary for material they upload or share. CK-Labs may moderate/remove content under the Terms, Community Standards and applicable law without claiming ownership of the user's copyright merely because it was uploaded to TycoonX.

The separate UGC copyright/UrhDaG gate controls rights-holder notices, classification and repeat-infringement procedure.

## 16. Account compromise, outages and proportionate correction

When suspicious social/economy activity is linked to account compromise, authorization defects, moderation failures, stale clients, retry/race conditions or provider outages, preserve evidence and contain ongoing harm first.

Corrections should target directly attributable invalid state. Fabricated Music settlement value can be reversed when authoritative evidence supports that conclusion. A social moderation or chat correction does not by itself reclassify unrelated valid purchase records as fraudulent. Diamonds, one-time 30-Day VIP and Lifetime VIP remain governed by their purchase, refund, chargeback, entitlement and termination rules.

A lawful account suspension/termination can affect access to the Service where the Terms and law allow it, but it does not erase mandatory consumer remedies or permit CK-Labs to relabel a genuine technical defect as misconduct merely to avoid those remedies.

## 17. Current platform and EU/German law checkpoint

As reviewed on September 10, 2026:

- Apple App Review Guideline 1.2 requires UGC/social apps to provide objectionable-content filtering, reporting with timely response, blocking of abusive users and published contact information. Creator content remains subject to UGC moderation rules.
- Google Play's current UGC policy requires clear terms/user-policy acceptance before users create/upload UGC, definitions/prohibitions for objectionable behavior, robust ongoing moderation, in-app reporting and blocking for 1:1 interactions such as messaging, tagging and mentions.
- Where the EU Digital Services Act applies, covered content-restriction and complaint duties can require reasons and accessible complaint/redress safeguards.
- GDPR processing principles including lawfulness, fairness, transparency, purpose limitation, data minimisation, accuracy and applicable integrity/confidentiality/security duties remain independent of in-game access labels.
- German BGB consumer and digital-product protections remain intact. Social moderation, access restrictions and UGC rules are not a waiver of mandatory conformity, remedy, change, termination, privacy or liability rights.

## 18. Regression cases

Before this cluster is operationally P0-clean, verify at least that unauthorized users cannot read or post to Company/Union chat; message authors cannot rewrite routing or pin state; Executive content-bearing pushes go only to users who can currently read the message; restricted polls inherit parent access; private Home Room state requires the intended audience; anonymous-letter recipients cannot retrieve hidden sender identity through the supported/direct data surface; ordinary clients cannot dispatch official moderation notifications; Music owners cannot directly mutate settlement fields; Music finalization/cancellation refuse unbacked amounts; genuine Music auctions settle exactly once; compromised-account incidents are distinguished from intentional abuse; unrelated valid purchase records are not rewritten merely because of a social correction; Arabic remains RTL; regional locale variants remain distinct; and every rendered player-facing brand reference uses **TycoonX**.

## 19. Release decision

**Legal wording status:** synchronized through `SocialUgcRuleNotice.tsx` in English plus all 25 target locales.

**Operational status:** **not P0 clean**. Legal wording cannot substitute for server confidentiality or financial authority. Priority engineering remediation remains restricted Company/Union chat access, Executive notification audience checks, Music auction settlement authority, message routing/privileged state, anonymous Post Office redaction and moderation-notification least privilege.

Do not conceal these implementation findings by increasing operational-readiness percentages.