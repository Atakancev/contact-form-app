# TycoonX Cross-Cutting Server Authority & Privacy Release Gate

**Status:** implementation-derived internal release gate  
**Reviewed:** September 10, 2026  
**Owner:** CK-Labs  
**Scope:** current TycoonX Flutter/server behavior, read-only production Supabase access-control/function review, and the existing canonical/localized legal framework.

This document is internal implementation/legal QA. It does not replace the canonical English TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy or Community Standards. No database row, function, trigger, policy, grant, schema object, cron, balance or configuration was changed during this review.

## 1. Cross-cutting rule

TycoonX must distinguish three separate questions:

1. **Was a request technically accepted?** A database/RPC response can succeed because of a permission, validation, race, legacy or configuration defect.
2. **Was the resulting state legitimate gameplay?** Technical acceptance is not an automatic safe harbor for a player who knowingly manipulates an unintended path.
3. **Is there reliable evidence of knowing abuse?** An abnormal or server-accepted state alone is not enough to prove intent. Account compromise, stale state, outages, ordinary UI actions and one-off defects must be separated from altered-client/API manipulation or knowing repeated exploitation.

Containment, state correction and punitive enforcement are different actions. Corrections should target directly attributable invalid state. Unrelated valid purchased Diamonds, one-time 30-Day VIP and Lifetime VIP must not be removed merely because a separate gameplay state required correction, unless the paid entitlement itself is directly invalid or mandatory law permits the specific remedy.

Server-owned security, entitlement, moderation, progression and economy state should be fail-closed. A normal player client should receive only the minimum read/write capability needed for the feature being used.

## 2. Remediation checkpoint: previously documented P0s remain open

The September 10 residual read-only production sweep rechecked the most important cross-cutting findings rather than assuming earlier documentation had already been remediated. The following privileged functions still expose execution to ordinary client roles without a sufficient trusted-caller boundary in the reviewed deployed definitions:

- `specialization_upgrade_refund_wallet_credit(...)`;
- `gain_xp(...)` and `award_collect_xp(...)`;
- `_internal_shop_connected_fill(...)` and `_internal_industrial_connected_fill(...)`;
- `send_company_event_notification(...)`; and
- `notify_moderation_event(...)`.

The reviewed self-profile UPDATE surface also remains broad, and the reviewed public profile SELECT surface remains broader than a public player card requires. These findings are therefore **not closed** merely because they are already documented.

## 3. P0: self-service profile privilege, entitlement, moderation and gameplay state

The reviewed `profiles` access model still allows an authenticated player to update their own row, while current authenticated UPDATE column grants include fields that should be server/staff-owned or protected by a dedicated server transition. The reviewed surface includes VIP and staff/moderation authority fields as well as gameplay-control fields such as `energy`, `hunger` and `last_level_reward_claimed`.

Direct `profiles.money` changes remain separately protected by Finance V2, and the reviewed authenticated UPDATE grant does not include the Diamond balance. No equivalent general protected-column guard was found for the wider sensitive profile surface.

This remains a **P0 release-blocking authority defect**. It also amplifies other access-control risks: any policy that trusts profile role flags such as admin/support status is only as strong as the protection around those flags.

### Required remediation

- Replace broad self-row UPDATE with an explicit allowlist for genuinely player-editable fields.
- Make paid-entitlement, staff/moderation, anti-abuse, progression checkpoint, energy/hunger and other server-owned state immutable to ordinary direct table writes.
- Use dedicated authenticated RPCs for transitions a player is legitimately allowed to request.
- Add a fail-closed server guard for protected columns so a future grant/policy regression cannot silently reopen them.
- Re-test downstream policies that rely on profile role flags after those flags are server-owned.

## 4. P0 privacy: public profile reads expose internal fields

The reviewed `profiles` SELECT surface still permits anonymous/public reads of substantially more information than a public player card needs. The inspected public column set includes device/platform metadata, wallet-like values, last-login/activity state, moderation/security flags and reasons, internal roles, paid-status/state and other account information.

This must be treated as an **implementation/privacy defect**, not normalized by expanding the Privacy Policy as though all stored profile fields were intentionally public.

### Required remediation

- Replace broad public profile-row access with a deliberately designed public profile view/RPC exposing only fields genuinely intended for public display.
- Keep device/security identifiers, private economic/account state, moderation reasons, internal flags and other non-public fields restricted to the player, authorized staff or trusted services as appropriate.
- Re-test anonymous and authenticated direct API reads, not only Flutter UI behavior.
- Apply GDPR data minimisation, privacy by design/default and risk-appropriate security to the resulting field set.

## 5. P0: arbitrary wallet-credit and raw progression helpers

### Refund wallet credit

`specialization_upgrade_refund_wallet_credit(...)` remains a broadly executable SECURITY DEFINER path in the reviewed production grants. It accepts caller-influenced target/value inputs and must instead derive user, amount, refund eligibility and idempotency from an authoritative locked refund source.

### Arbitrary target XP/collection XP

`gain_xp(...)` and `award_collect_xp(...)` remain broadly executable privileged helpers without a sufficient authenticated-owner/trusted-source boundary in the reviewed definitions. Raw XP/progression helpers should be internal, and collection XP must be tied to a server-validated owned collection event.

### Arbitrary self XP

`rpc_add_xp(amount)` is also still callable by an authenticated client and forwards the caller-provided positive amount into current-user XP/level application without independently proving the underlying reward event. The current Flutter `AuthService.addXP(...)` uses this RPC, including from current job UI code. This means server authority cannot be fixed only by locking down the older arbitrary-target `gain_xp(...)` helper.

Required direction: player actions should call feature-specific settlement/reward RPCs that derive XP from authoritative state. A generic client-supplied XP amount should not be the final authority.

## 6. P0: arbitrary self energy and direct energy/hunger state

The current production `rpc_add_energy(amount integer)` is SECURITY DEFINER and accepts any positive caller-provided amount for the authenticated user's energy. The reviewed definition does not prove a purchase, reward, timer tick, housing state or other source event and does not impose the intended gameplay cap inside that function.

The same residual sweep confirmed that authenticated profile UPDATE authority also includes `energy` and `hunger`, so merely revoking the generic energy RPC would not close the authority gap.

Required remediation:

- make energy/hunger server-owned state;
- replace raw additive helpers with feature-specific, source-validated transitions;
- derive amount/cap/cooldown from authoritative server state; and
- keep legitimate timers, housing effects, rewards and purchases distinguishable in evidence/logging.

A bad energy value is not, by itself, proof that the affected player intentionally created it.

## 7. Positive remediation: persona training is materially safer than stale migration code suggests

The current production definitions of the legacy persona-training compatibility RPCs were rechecked because older repository migrations contain broader client-trusting implementations.

Current `rpc_add_persona_stats(...)` now authenticates the caller, restricts the accepted reward shape, consumes a user/session-bound energy receipt, records structured session/attempt evidence and only grants the expected stat/XP after the server-side checks pass. Current `rpc_spend_energy_for_persona(...)` validates the quick-training cost/reward relationship and delegates to the server-owned quick-training path.

This is a **positive remediation control**. Do not classify the obsolete migration body as current production behavior. The remaining raw `rpc_add_xp(...)` and profile energy/state authority findings are separate.

## 8. P0: connected-fill helpers can impersonate a supplied user

The reviewed `_internal_shop_connected_fill(...)` and `_internal_industrial_connected_fill(...)` overloads remain broadly executable SECURITY DEFINER functions that accept a supplied user identifier without binding the operation to the actual caller.

Required remediation:

- remove client/public EXECUTE access;
- do not rewrite or substitute authenticated identity from an untrusted parameter;
- let a trusted worker derive the target from authoritative queued work; and
- make nested purchase/fill operations independently verify ownership and destination authority.

## 9. P0 Housing: tenant cooldown enforcement relies on client-writable state

The current Housing re-rental rule checks `new_housing_tenant_cooldowns` and blocks re-renting from the same owner for the current implementation's 24-hour cooldown. However, the inspected table policy/grants allow an authenticated player to INSERT and UPDATE their own cooldown row.

That makes a server-enforced gameplay restriction dependent on player-writable enforcement state. A modified client can potentially alter the row used to decide whether the cooldown has elapsed.

Separately, `set_housing_tenant_cooldown(p_user_id, p_plot_id, p_owner_id, p_reason)` is a broadly executable SECURITY DEFINER helper that accepts a supplied target user and writes the target's cooldown timestamp/state without establishing the caller as that target or as a trusted service.

This is a **P0 Housing authority defect** even though the ordinary Flutter flow uses the legitimate rent/leave/action RPCs.

Required remediation:

- make Housing cooldown rows server-owned;
- revoke ordinary direct INSERT/UPDATE authority over cooldown enforcement state;
- make the raw setter internal/trusted only; and
- let the canonical rent/leave/eviction transitions write the cooldown atomically.

The current 24-hour value is implementation evidence, not a permanent contractual promise.

## 10. P0 Housing: internal plot-spawn helper is exposed to client roles

`_spawn_next_house_plot(p_country text)` is a SECURITY DEFINER internal Housing helper that creates the next Housing auction plot/block state for a supplied country. The reviewed production privileges allow anonymous/authenticated execution, while repository usage shows it as an internal operation called from Housing maintenance/settlement paths.

A normal player has no need to invoke a global supply-creation helper directly. Restrict it to trusted Housing settlement/scheduler paths and keep the advisory locking/uniqueness protections.

## 11. P1 Housing: global maintenance/foreclosure execution should be service-bound, but invocation is not itself proof of cheating

`new_housing_daily_cron()` and `new_housing_foreclose_overdue()` are broadly executable SECURITY DEFINER system functions in the reviewed production privileges. The current foreclosure function derives overdue targets from server state rather than accepting an arbitrary target user.

The current Flutter bank service itself invokes `new_housing_foreclose_overdue()` before loading mortgage information. Therefore calling that function through the ordinary client flow must **not** be treated as misconduct merely because it mutates global overdue Housing state.

Architecturally, system-wide settlement/maintenance should still move to a trusted scheduler/service boundary to reduce race/resource-amplification risk and keep one canonical foreclosure implementation. Existing repository research also documents multiple materially different Housing foreclosure/maintenance implementations, so settlement semantics should be unified before treating generated records as perfectly authoritative.

## 12. Positive Housing controls confirmed

The residual review confirmed several controls that should be preserved:

- Housing mortgage rows are restricted to the borrower's own read surface in the reviewed policy set.
- Housing rent applications are readable by the applicant or the relevant property owner.
- Housing transaction logs are restricted to the relevant user.
- Current owner-eviction settlement returns stored tenant deposit value through the Finance V2-wrapped path instead of silently treating it as forfeited.
- Current tenant-leave settlement records deposit release.
- Public Housing plot reads are consistent with the feature's public market/auction purpose.

These positive controls do not neutralize the cooldown/plot-spawn authority findings.

## 13. P1: official-looking Housing notifications are not authoritative evidence

The reviewed `notify_housing_event(...)` overloads and `notify_housing_event_core(...)` are privileged functions callable more broadly than necessary and accept target/event facts. Even when the content is template-based, an official-looking push/notification must not become proof that the underlying rent, eviction, mortgage or foreclosure event actually occurred.

Restrict raw notification helpers to trusted transitions and derive event facts from the canonical Housing record. For enforcement/support decisions, use Housing ownership, tenancy, mortgage, payment and Finance V2 evidence rather than the notification alone.

## 14. P1: activity/news service proxies should not be ordinary client-callable

The reviewed `invoke_daily_activity_news(...)` overloads and `invoke_regenerate_daily_activity(...)` are SECURITY DEFINER service-proxy functions with broad client execution and no ordinary-player need identified in current Flutter code search. They should be scheduler/staff/service-bound so a normal client cannot trigger global regeneration/service work or amplify provider/resource usage.

`cleanup_old_login_fingerprints()` is lower risk in the reviewed state because the underlying fingerprint rows remain protected by RLS, but cleanup should still be owned by maintenance/service code rather than exposed as a player feature.

## 15. Friends/activity/log privacy boundary

The residual privacy scan did **not** find a comparable broad cross-user raw read in the reviewed Housing transaction logs, profile strategy reveals or login fingerprint tables. Login fingerprints are readable by the player for their own rows and by authorized admin/support paths; Housing transaction logs and strategy reveals are caller-bound in the reviewed policies.

`social_list_user_friends(p_user_id, ...)` intentionally supports displaying another user's accepted-friends list and returns a narrow set of friend identity fields. The current Flutter Friends service uses that behavior. This should be treated as a product/privacy-design decision, not automatically as a security defect. CK-Labs should confirm that visible friend connections match the intended UI/privacy expectation and avoid exposing additional profile fields through that route.

Because some admin/support access rules depend on profile role flags, their practical trustworthiness still depends on fixing the profile-role authority defect in section 3.

## 16. Generic official notification senders remain open

`send_company_event_notification(...)` and `notify_moderation_event(...)` remain broadly executable privileged helpers in the reviewed deployment. Official-looking Company/moderation notifications should come from trusted server/staff events, not arbitrary caller-supplied facts.

A delivered push proves that a notification was sent. It does not independently prove that the underlying Company, moderation, debt, Housing or gameplay event occurred.

## 17. Deployed player-facing brand defects remain open

The read-only production review continues to show legacy brand spelling in database-generated welcome/market/notification content and a deployed market/NPC display identity. A backend activity guard also contains a legacy market-name comparison tied to that old display identity.

This conflicts with the strict player-facing **TycoonX** brand rule. No database change was made. An approved migration should update rendered strings/display names and carefully review behavioral comparisons that depend on the old stored name, while leaving compatibility-sensitive technical identifiers alone where required.

## 18. Evidence, correction and enforcement rules

For founder protection and fairness, investigations should use the strongest available evidence in context: authoritative payment/store records, server transaction/ledger history, immutable or protected audit records, ownership state, trusted moderation/staff actions, correlated security signals and surrounding behavior.

Do not treat these as conclusive on their own:

- a client-authored anomaly flag;
- a push-notification payload;
- a row the player was technically permitted to edit because of a defect;
- an isolated impossible/abnormal result;
- a retry during an outage; or
- a server-side record that can itself be generated by the vulnerable helper being investigated.

Knowing use of an altered client, direct API/RPC calls, scripts or coordinated accounts to manipulate protected state can violate the TycoonX Terms even if a defective backend accepts the request. But a player who merely receives a mistaken grant, stale result, duplicated reward, incorrect Housing state or compromised-account action is not automatically guilty of exploitation.

Where correction is justified, CK-Labs should reconstruct directly attributable invalid state using the best available records. A security emergency can justify temporary containment or restricted access while evidence is preserved. Punitive suspension/termination should follow the applicable Terms and mandatory rights rather than being used as a substitute for fixing a technical defect.

## 19. Mandatory consumer and privacy rights

Nothing in this gate authorizes CK-Labs to disclaim non-waivable rights or convert a real service/security defect into player misconduct by contract.

For covered German consumer digital-product relationships, BGB § 327d requires the digital product to meet applicable conformity requirements and § 327i preserves qualifying remedies. BGB § 307 also limits unfair or unclear standard terms. Certain changes to continuously supplied digital products remain subject to BGB § 327r. Those rules remain separate from legitimate anti-fraud/anti-exploit enforcement.

The same separation applies to privacy/security. GDPR Article 5 data minimisation/integrity-confidentiality, Article 25 privacy by design/default and Article 32 risk-appropriate security remain relevant to access-control design. A Privacy Policy describes intended processing and disclosures; it should not be expanded merely to legitimize accidental overexposure caused by an authorization defect.

## 20. Release-blocking remediation order

1. **Profiles/public data:** narrow public SELECT and authenticated UPDATE; add protected-column guard; make role/VIP/moderation/progression/energy state server-owned.
2. **XP/energy/progression:** close `rpc_add_xp(...)`, `rpc_add_energy(...)`, `gain_xp(...)`, `award_collect_xp(...)` and arbitrary refund-credit authority; replace with source-validated feature settlement.
3. **Housing authority:** make tenant cooldown state server-owned; restrict `set_housing_tenant_cooldown(...)` and `_spawn_next_house_plot(...)`; service-bind global Housing maintenance/foreclosure.
4. **Identity impersonation:** remove client access to connected-fill internals and eliminate untrusted effective-user substitution.
5. **Official notifications/service proxies:** lock down Company/moderation/Housing senders and activity/news invokers.
6. **Previously audited systems:** close the outstanding P0/P1 findings in Company, Union, Art, markets, banking, Logistics/rewards and Social/UGC gates.
7. **Brand:** replace deployed player-facing legacy spelling with `TycoonX` through an approved migration without breaking technical identifiers.
8. **Reconciliation/regression:** reconstruct any affected state before sanctions and re-test anonymous, normal authenticated, owner, unrelated player, staff/service, stale-client and compromised-account cases.

## 21. Minimum regression scenarios

Before considering the cross-cutting authority cluster operationally closed, verify at minimum that:

1. a normal player can edit only intended profile fields;
2. a normal player cannot set VIP/admin/mod/support/test/whitelist/moderation state;
3. a normal player cannot directly set arbitrary energy, hunger or level-reward checkpoint state;
4. an anonymous user cannot fetch device/security/private economic/moderation fields from another player's public profile surface;
5. a player cannot use a refund helper to choose an arbitrary target or amount;
6. a player cannot choose an arbitrary raw XP amount through generic XP helpers;
7. collection XP requires a valid owned collect event;
8. current persona training still requires the server-validated energy/reward path;
9. a player cannot choose an arbitrary raw positive energy grant;
10. connected-fill helpers cannot be called as another user;
11. nested fill/purchase settlement independently verifies ownership/destination;
12. Housing cooldown cannot be backdated or otherwise edited by the affected player;
13. a player cannot set another player's Housing cooldown through a raw helper;
14. a normal or anonymous client cannot create Housing auction supply through `_spawn_next_house_plot(...)`;
15. ordinary mortgage viewing cannot become a basis to punish a user merely because the client invoked server-side overdue settlement;
16. Housing foreclosure/maintenance produces one canonical, reconcilable settlement outcome;
17. owner eviction returns the tenant's valid stored deposit under the current settlement rule;
18. Housing notifications are not accepted as sole proof of an underlying event;
19. ordinary clients cannot trigger global daily-activity/news regeneration;
20. direct profile-money edits remain blocked;
21. Diamond balance remains server/payment-authoritative;
22. public friend-list output remains narrow and matches the intended social/privacy design;
23. login fingerprint and Housing transaction-log reads remain caller/staff scoped;
24. role-based admin/support data policies remain secure after role fields are locked down;
25. a normal player cannot send arbitrary official Company/moderation/Housing push content;
26. a delivered notification does not become proof of the underlying enforcement event;
27. invalid industrial external prices continue to fail settlement and are rejected earlier where possible;
28. account-compromise evidence is considered before punitive enforcement;
29. an innocent recipient of bad state is not automatically classified as an exploiter;
30. repeated knowing altered-client/API abuse remains sanctionable even when the backend previously accepted it;
31. corrections are limited to attributable invalid state and dependent proceeds;
32. unrelated valid Diamonds, one-time 30-Day VIP and Lifetime VIP remain untouched by unrelated gameplay corrections;
33. player-facing database-generated brand strings display `TycoonX`; and
34. mandatory privacy, consumer, notice, conformity, remedy and appeal rights remain intact.

## 22. Status after this residual audit

No ninth 25-locale player-facing notice is required from this residual sweep. The existing canonical/localized Terms already state the material legal rule about knowing exploit use, technical server acceptance, account compromise, evidence quality and proportional correction. The newly confirmed profile/privacy, XP/energy and Housing issues are implementation mismatches that should be fixed technically rather than normalized as intended contractual behavior.

The residual Housing/profile/energy/friends/activity/log sweep is now complete for legal mapping. The next substantive work is **P0/P1 remediation verification and final release-readiness consolidation** across every audited gate. Database remediation remains outside this legal audit unless explicitly approved.