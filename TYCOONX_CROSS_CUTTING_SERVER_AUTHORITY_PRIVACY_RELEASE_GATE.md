# TycoonX Cross-Cutting Server Authority & Privacy Release Gate

**Status:** implementation-derived internal release gate  
**Reviewed:** September 10, 2026  
**Owner:** CK-Labs  
**Scope:** current TycoonX Flutter/server behavior, read-only production Supabase access-control/function review, and the existing canonical/localized legal framework.

This document is internal implementation/legal QA. It does not replace the canonical English TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy or Community Standards. No database row, function, trigger, policy, grant, schema object, cron, balance or configuration was changed during this review.

## 1. Cross-cutting rule

TycoonX must distinguish three separate questions:

1. **Was a request technically accepted?** A database/RPC response can be accepted because of a permission, validation, race, legacy or configuration defect.
2. **Was the resulting state legitimate gameplay?** Technical acceptance is not an automatic safe harbor for a player who knowingly manipulates an unintended path.
3. **Is there reliable evidence of knowing abuse?** An abnormal or server-accepted state alone is not enough to prove intent. Account compromise, stale state, outages, ordinary UI actions and one-off defects must be separated from altered-client/API manipulation or knowing repeated exploitation.

Containment, state correction and punitive enforcement are different actions. Corrections should target directly attributable invalid state. Unrelated valid purchased Diamonds, one-time 30-Day VIP and Lifetime VIP must not be removed merely because a separate gameplay state required correction, unless the paid entitlement itself is directly invalid or mandatory law permits the specific remedy.

Server-owned security, entitlement, moderation, progression and economy state should be fail-closed. A normal player client should receive only the minimum read/write capability needed for the feature being used.

## 2. P0: self-service profile privilege, entitlement and moderation state

### Observed production surface

The reviewed `profiles` access model allows an authenticated player to update their own row. Current authenticated UPDATE column grants include fields that should be server/staff-owned, including `vip`, `is_admin`, `is_mod`, `is_support`, `banned`, `silent`, related reason/until fields, `multi_account_whitelisted`, `active`, `is_tester`, role/status flags and other internal state.

The review found dedicated protection around direct `profiles.money` changes, and the authenticated profile UPDATE grant does not include the Diamond balance. However, no equivalent general guard was found that makes the reviewed privilege/entitlement/moderation columns immutable to the ordinary player role.

This is a **P0 release-blocking authority defect** until the effective deployed path is narrowed and regression-tested. The review did not attempt to exploit or alter any account.

### Required remediation

- Revoke ordinary client UPDATE authority over server/staff-owned profile columns.
- Maintain an explicit allowlist for genuinely player-editable profile/settings fields rather than relying on a broad row-owner rule.
- Use dedicated authenticated RPCs for sensitive transitions that a player is legitimately allowed to request.
- Add a fail-closed server guard for protected columns so an accidentally broadened grant or future policy cannot silently re-open the path.
- Keep moderation/admin/support/test/whitelist and paid-entitlement authority separate from ordinary profile editing.
- Reconcile any suspicious historical changes from authoritative payment, staff, audit and gameplay evidence before treating them as valid or abusive.

## 3. P0 privacy: public profile reads expose internal fields

### Observed production surface

The reviewed `profiles` SELECT policy/grants are broad enough that public/anonymous reads can expose substantially more than a public player card needs, including device/platform metadata, wallet-like values, last-login/activity state, moderation/security flags and reasons, notification/status fields, multi-account/role flags and other internal state.

This should be treated as an **implementation/privacy defect**, not normalized by rewriting the Privacy Policy as though every stored profile field were intended to be public.

### Required remediation

- Replace broad public profile-row access with a deliberately designed public profile view/RPC exposing only fields that are genuinely meant to be public, such as nickname/avatar/public ranking or other intentionally public game identity data.
- Keep device/security identifiers, private economic/account state, moderation reasons, internal flags and other non-public fields limited to the player, authorized staff or trusted service paths as appropriate.
- Review whether country/activity/ranking fields are genuinely necessary for public display and expose only the minimum needed for the product purpose.
- Re-test both anonymous and authenticated direct API reads, not only Flutter UI behavior.

### Legal/privacy boundary

This finding creates a serious GDPR data-minimisation, privacy-by-default and security/access-control risk. It is not described here as an automatic legal conclusion about a particular incident. GDPR Article 5 requires personal data to be adequate, relevant and limited to what is necessary and processed with appropriate integrity/confidentiality. Article 25 requires data protection by design/default, including default accessibility limited to what is necessary. Article 32 requires security appropriate to risk.

## 4. P0: arbitrary wallet-credit refund helper

The reviewed `specialization_upgrade_refund_wallet_credit(...)` function is SECURITY DEFINER, broadly executable in the inspected grants, accepts a caller-supplied target user and amount, changes that user's money balance and creates corresponding Finance V2 refund records. The reviewed function does not establish a trusted caller or independently derive the target/amount from an authoritative locked specialization-refund source before crediting value.

This is a **P0 economy-integrity defect**. It was not invoked or tested during this review.

Required remediation:

- remove ordinary/public/anonymous EXECUTE access;
- require a trusted internal caller in the function itself, not only at the grant layer;
- derive user, amount and refund eligibility from the authoritative locked queue/refund record;
- require a real refundable source event and deterministic idempotency key controlled by the server; and
- reconcile generated Finance V2 evidence against the underlying specialization event before treating a refund row as independently authoritative.

## 5. P0: arbitrary XP/progression and collection evidence helpers

The reviewed `gain_xp(...)` and `award_collect_xp(...)` functions are broadly executable SECURITY DEFINER paths. They accept caller-controlled target/amount inputs, can change XP/level progression, and in the collection path can create collection/finance evidence without first proving the complete underlying player-owned collection event inside the reviewed boundary.

Required remediation:

- make raw XP/progression helpers internal only;
- bind caller-facing collection to `auth.uid()` and a server-locked asset/resource owned by that player;
- derive the collected quantity and resulting XP from authoritative server state, rather than trusting a client-supplied award amount; and
- make evidence/log creation part of the same validated idempotent transaction.

A duplicated or invalid progression result should be corrected proportionately. Its presence alone does not establish that the affected player knowingly caused it.

## 6. P0: connected-fill helpers can impersonate a supplied user

The reviewed `_internal_shop_connected_fill(...)` and `_internal_industrial_connected_fill(...)` overloads are broadly executable SECURITY DEFINER functions that accept a supplied user identifier and rewrite the JWT subject context before acting on that user's shop/facility/asset state.

A normal untrusted client must never be able to choose another effective authenticated identity for a privileged internal operation. The review did not attempt cross-user execution.

Required remediation:

- remove client/public EXECUTE access;
- do not rewrite the authenticated subject from an untrusted function parameter;
- let a trusted worker derive the target identity from authoritative queued work; and
- make nested purchase/fill operations independently verify ownership and destination authority rather than relying solely on an inherited rewritten claim.

## 7. P0: generic official-looking notification sender

The reviewed `send_company_event_notification(...)` is a broadly executable SECURITY DEFINER function that accepts a target, title/body, notification type and metadata and invokes the notification delivery path using server-side credentials. `notify_moderation_event(...)` has a similar previously documented problem for moderation notifications.

Official-looking push notifications must be generated from a trusted server event, not from arbitrary client-supplied facts.

Required remediation:

- restrict generic senders to trusted service/trigger/staff paths;
- bind recipient, category and content to an authoritative event where practical;
- do not expose server notification credentials indirectly through a generic player-callable sender; and
- treat a delivered push as evidence that a notification was sent, not proof that the underlying Company/moderation/debt/gameplay event actually occurred.

## 8. Deployed player-facing brand defects

The read-only production review found legacy player-facing `TyconX` spelling in database-generated content, including multilingual welcome copy and a market label, and the prior Social/UGC audit found the same legacy spelling in a global-channel notification label. A currently deployed market/NPC profile also uses the legacy spelling.

This conflicts with the strict TycoonX player-facing brand rule. Technical identifiers may retain `tyconx` where needed for compatibility, but rendered headings, descriptions, notifications, welcome text and NPC/market display names must say **TycoonX**.

No database change was made. An approved migration should replace the player-facing strings/display name and review dependent references safely rather than renaming technical identifiers blindly.

## 9. P1 residual authorization/privacy hygiene

The sweep also keeps the following items open for narrower review/remediation:

- `apply_hunger_decay(...)` accepts an arbitrary target in a broadly executable privileged helper and should be scheduler/server-bound.
- Bank/debt/internal helpers previously recorded in the Bank/Credit gate still need trusted-caller and target binding.
- User-friend and delivery/activity-log read surfaces should be reviewed against the actual intended audience and Privacy Policy purpose.
- Industrial sale configuration should reject invalid non-positive external sale prices at the setter as well as at purchase settlement, even though the reviewed industrial purchase path independently rejects a non-positive external price.
- Client-authored or client-writable logs, anomaly flags, notification records and economic history should never be the sole basis for a serious sanction.

## 10. Positive controls confirmed in this sweep

The review also confirmed controls that should be preserved:

- direct client changes to `profiles.money` are protected by a Finance V2 authority trigger/guard;
- the authenticated profile UPDATE grant reviewed here does not include the Diamond balance;
- the reviewed industrial external purchase settlement rejects non-positive seller prices, so the inconsistent industrial sale setter did not establish the negative-price wallet-mint path found in other market families;
- the constrained sensitive-table scan did not identify a relevant public/authenticated table with RLS disabled and broad DML in the reviewed subset; and
- existing legal notices already distinguish technical acceptance from legitimate gameplay, intentional exploitation from backend error/account compromise, and proportional correction from unrelated paid-entitlement removal.

These positive controls do not neutralize the P0 findings above.

## 11. Evidence, correction and enforcement rules

For founder protection and fairness, investigations should use the strongest available evidence in context: authoritative payment/store records, server transaction/ledger history, immutable or protected audit records, ownership state, trusted moderation/staff actions, correlated security signals and surrounding behavior.

Do not treat these as conclusive on their own:

- a client-authored anomaly flag;
- a push-notification payload;
- a row the player was technically permitted to edit because of a defect;
- an isolated impossible/abnormal result;
- a retry during an outage; or
- a server-side record that can itself be generated by the vulnerable helper being investigated.

Knowing use of an altered client, direct API/RPC calls, scripts or coordinated accounts to manipulate protected state can violate the TycoonX Terms even if a defective backend accepts the request. But a player who merely receives a mistaken grant, stale result, duplicated reward or compromised-account action is not automatically guilty of exploitation.

Where correction is justified, CK-Labs should reconstruct the directly attributable invalid state using the best available records. A security emergency can justify temporary containment or restricted access while evidence is preserved. Punitive suspension/termination should follow the applicable Terms and mandatory rights rather than being used as a substitute for fixing a technical defect.

## 12. Mandatory consumer and privacy rights

Nothing in this gate authorizes CK-Labs to disclaim non-waivable rights or convert a real service/security defect into player misconduct by contract.

For covered German consumer digital-product relationships, BGB § 327d requires the digital product to meet applicable conformity requirements and § 327i preserves qualifying remedies. BGB § 307 also limits unfair or unclear standard terms. Those rules remain separate from legitimate anti-fraud/anti-exploit enforcement.

The same separation applies to privacy/security. A Privacy Policy describes intended processing and disclosures; it should not be expanded merely to legitimize accidental overexposure caused by an authorization defect. Remediate the access boundary and update the policy only when the intended processing itself changes materially.

## 13. Release-blocking remediation order

1. **Profiles:** narrow public SELECT and authenticated UPDATE; add a protected-column guard; separate public profile data from private/security/economic state.
2. **Money/progression:** lock down `specialization_upgrade_refund_wallet_credit(...)`, `gain_xp(...)` and `award_collect_xp(...)`; derive target/value from authoritative server events.
3. **Identity impersonation:** remove client access to `_internal_shop_connected_fill(...)` and `_internal_industrial_connected_fill(...)` and eliminate untrusted JWT-subject rewriting.
4. **Official notifications:** lock down generic Company/moderation senders and bind messages to trusted events.
5. **Brand:** replace deployed player-facing legacy spelling with `TycoonX` through an approved migration.
6. **Residuals:** close previously documented P0/P1 findings across Company, Union, Art, markets, banking, Logistics/rewards and Social/UGC.
7. **Reconciliation:** if telemetry suggests prior exploitation or exposure, reconstruct affected state/events before sanctions or player-impacting corrections.
8. **Regression tests:** test anonymous, normal authenticated, owner, unrelated player, staff/service, stale-client and compromised-account cases at the server boundary.

## 14. Minimum regression scenarios

Before considering this cluster operationally closed, verify at minimum that:

1. a normal player can edit intended public profile fields;
2. a normal player cannot set their own VIP/admin/mod/support/test/whitelist/moderation authority state;
3. an anonymous user cannot fetch device/security/private economic/moderation fields from another player's public profile surface;
4. a player cannot use a refund helper to choose an arbitrary target or amount;
5. a player cannot grant arbitrary XP to self or another player;
6. collection XP cannot be generated without a valid owned collect event;
7. connected-fill helpers cannot be called by an ordinary client as another user;
8. nested fill/purchase settlement still verifies actual ownership;
9. a normal player cannot send arbitrary official Company/moderation push content to another player;
10. notification delivery does not become proof of the underlying enforcement event;
11. direct profile-money edits remain blocked;
12. Diamond balance remains server/payment-authoritative;
13. invalid industrial external prices fail both configuration and settlement paths;
14. account-compromise evidence is considered before punitive enforcement;
15. an innocent recipient of bad state is not automatically classified as an exploiter;
16. repeated knowing altered-client/API abuse remains sanctionable even when the backend previously accepted it;
17. corrections are limited to attributable invalid state and dependent proceeds;
18. unrelated valid Diamonds, one-time 30-Day VIP and Lifetime VIP remain untouched by unrelated gameplay corrections;
19. public profile output contains only the intentionally public field set;
20. all database-generated player-facing brand strings display `TycoonX`;
21. legacy technical identifiers can remain unchanged where compatibility requires it;
22. public/anonymous privilege scans are repeated after each authorization migration;
23. SECURITY DEFINER functions with user/target/value parameters have explicit trusted-caller or authenticated-owner checks;
24. client-writable evidence is never the sole basis for a serious sanction; and
25. mandatory privacy, consumer, notice, conformity, remedy and appeal rights remain intact.

## 15. Status after this audit

The legal/localization corpus does **not** need a ninth 25-locale player-facing notice from this sweep. The existing canonical/localized Terms already state the material legal rule: knowing exploitation of an authorization/validation defect is prohibited, technical server acceptance is not a safe harbor, backend error/compromise is not automatic proof of misconduct, and corrections should be proportionate.

The newly discovered profile/public-data/privileged-helper issues are implementation mismatches and release-blocking engineering findings. Rewriting player-facing legal prose to make those insecure access paths appear intended would reduce, not improve, legal/privacy quality.

**Next substantive code-first target:** residual gameplay/privacy surface and remediation verification, especially Housing, profile/profession/energy helpers, friends/activity/log exposure, remaining broadly executable privileged functions and closure status of the P0 findings across all audited clusters.