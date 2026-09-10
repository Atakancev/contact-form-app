# TycoonX VIP Entitlement and Commercial-Integrity Recheck

**Last reviewed: September 10, 2026.**  
Owner: CK-Labs  
Scope: read-only production verification of VIP entitlement provenance, Diamond-to-VIP conversion, expiry communications and provider-state boundaries.

This is an internal legal/implementation release gate. It does not replace the canonical TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, Community Standards, provider terms or mandatory law. It does not authorize a production database change, entitlement change, balance change, sanction or player communication.

## 1. Result

The current paid-entitlement implementation has several strong server-authoritative controls, but a new **P0 entitlement-provenance chain** and a separate **P0 commercial-communication authority defect** remain open.

The existing legal wording does not need to be expanded to normalize either defect. They should be fixed technically. Until then, an abnormal VIP state or a VIP-expiry notification is not automatically reliable evidence of a valid purchase, a valid expiry, fraud or player intent.

## 2. P0: self-writable `profiles.vip` can be promoted into persistent preserved VIP

A fresh production check reconfirmed that the authenticated role can update its own `profiles.vip` field under the current generic owner-update surface. The authoritative Diamond-pass and Xsolla entitlement tables are not directly writable by the authenticated role, which is an important positive control, but two trusted entitlement paths currently use the raw `profiles.vip` boolean as evidence that a prior VIP entitlement should be preserved.

### Diamond-to-VIP path

`activate_vip_with_diamonds()` is otherwise materially server-authoritative:

- it derives the account from `auth.uid()`;
- it reads the current Diamond cost from `game_config` rather than trusting a client price;
- it locks the player's profile;
- it verifies and deducts the Diamond balance atomically;
- it records the Diamond exchange event; and
- it creates a 30-day VIP period, queued after a later existing provider-backed VIP expiry where applicable.

However, when no prior Diamond pass or recognized RevenueCat/Xsolla entitlement exists, the function can set `preserve_prior_vip = true` merely because `profiles.vip` was already true. `xsolla_effective_vip(...)` then treats a Diamond-pass `preserve_prior_vip` flag as continuing VIP without an expiry condition.

Because `profiles.vip` itself remains client-writable, an unauthorized self-set VIP boolean can therefore contaminate the otherwise trusted Diamond conversion path and become persistent preserved VIP state.

### Xsolla subscription path

`xsolla_apply_subscription_event(...)` is not directly executable by ordinary authenticated/anonymous roles, which is a strong boundary. But on the first recognized Xsolla subscription record it can also derive `preserve_prior_vip` from the pre-existing `profiles.vip` boolean when no active RevenueCat entitlement is present. `xsolla_effective_vip(...)` treats the preserved Xsolla flag as continuing VIP after the dated subscription period.

This creates the same provenance problem when a genuine provider event arrives after an unauthorized self-set profile VIP state. A real later purchase must not be able to launder an untrusted earlier boolean into an indefinite trusted entitlement.

### Acceptance criterion

1. Make `profiles.vip` server-owned before relying on it as entitlement provenance.
2. Do not infer a preserved prior entitlement from a bare profile boolean. Preserve only a separately identified authoritative source, for example a valid Lifetime VIP/manual staff grant record with provenance, a valid provider entitlement, or a documented migration record.
3. Store the prior entitlement source/type and, where applicable, transaction/grant identifier rather than only a boolean.
4. Make effective-VIP calculation derive from authoritative entitlement records. A convenience/cache boolean on `profiles` should be an output/cache, not the source of truth.
5. Regression-test: no prior VIP; valid 30-day VIP; Lifetime VIP; staff/complimentary grant; Diamond pass; Xsolla purchase; RevenueCat purchase; expired purchase; refunded/reversed purchase; compromised account; and an intentionally corrupted `profiles.vip` cache.
6. A legitimate 30-Day VIP or Lifetime VIP must survive the hardening. The fix must not erase valid paid or documented complimentary entitlements merely because the cache/provenance model changes.

## 3. P0 commercial integrity: arbitrary VIP-expiry renewal notices can be generated

`send_vip_expiry_professor_notification(p_user_id, p_expires_at, p_lead_days, p_source)` is currently SECURITY DEFINER and executable by both anonymous and authenticated client roles. The reviewed function does not authenticate the caller, does not bind the target user to the caller, and does not verify the supplied expiry timestamp/source against RevenueCat, Xsolla, Diamond-pass or another authoritative entitlement record.

If the target profile exists and is active, the function can create an official-looking in-app VIP-expiry reminder. If push notifications are enabled and the service credential is available, it can also invoke the notification delivery path. The reminder tells the recipient that VIP is expiring in one or three days and encourages renewal.

That is not merely an evidence-quality concern. It is a commercial-communication integrity problem because a false expiry/renewal message could influence a consumer's purchase decision.

The EU Unfair Commercial Practices Directive prohibits misleading commercial practices capable of causing a transactional decision the consumer would not otherwise make, including misleading information about a product, the trader's commitments, price advantages or the need for a service. German UWG §§ 5 and 5a likewise prohibit misleading commercial actions/omissions in the applicable circumstances. The safe technical design is therefore to make renewal reminders consequences of authoritative entitlement state, not caller-authored assertions.

### Acceptance criterion

- Remove anonymous/ordinary-client EXECUTE permission from the raw sender.
- Make the sender internal to a trusted scheduler/service operation or require a fail-closed trusted-caller check.
- Derive the target account, real expiry, entitlement source and lead window from authoritative server/provider records inside the trusted operation.
- Do not accept an arbitrary caller-supplied expiry/source as the fact used in purchase-oriented copy.
- Preserve idempotency so retries cannot spam the same reminder.
- Log the authoritative entitlement/source record that justified the reminder.
- Never use a reminder row or push-delivery record as independent proof that the entitlement itself existed or expired.
- Test recipients with Lifetime VIP, a later stacked entitlement, a refunded/reversed entitlement, a Diamond pass, a one-time 30-Day VIP, no VIP, disabled notifications and a pending provider transaction.

## 4. P1: global expiry-reminder processor should be scheduler/service-only

`process_vip_expiry_professor_reminders(...)` is also currently SECURITY DEFINER and executable by anonymous/authenticated roles.

Unlike the raw sender, the reviewed processor does materially better entitlement validation: it derives candidate expiries from RevenueCat/Xsolla state, checks active profile/VIP state, excludes conflicting later/active sources, uses one-day/three-day windows and has a uniqueness/deduplication log. Ordinary callers therefore do not appear able to fabricate an arbitrary expiry through this wrapper alone.

Even so, a global production reminder sweep is a service/scheduler responsibility rather than an ordinary player action. Restrict its execution to the trusted worker path and retain its current server-derived selection and deduplication controls.

## 5. P1 release-language cleanup: legacy free-VIP claim RPC remains deployed but disabled

The historical `claim_beta_vip()` RPC remains executable by authenticated users. Current production `game_config.free_vip_beta_enabled` is **false**, so the reviewed function cannot currently grant free VIP through that path. This is a positive and important distinction: the function's mere presence is **not** evidence that live TycoonX currently offers free VIP through that historical mechanism.

However, the disabled function still contains stale player-readable pre-release wording in its error path. TycoonX has been in full release since September 1, 2026. An approved engineering cleanup should retire/revoke the obsolete RPC if no supported client still requires it, or at minimum replace player-readable stale release wording with neutral current-service wording while preserving any compatibility-sensitive technical identifier that must remain temporarily.

Do not reactivate the historical free-VIP flag as part of legal cleanup.

## 6. Positive controls verified in the same sweep

The following controls should be preserved and should not be misreported as vulnerabilities:

- RevenueCat purchase-application functions reviewed in the privilege scan are not executable by ordinary anonymous/authenticated roles.
- Xsolla purchase/subscription/reversal application functions reviewed in the privilege scan are not executable by ordinary anonymous/authenticated roles.
- `vip_diamond_pass_state`, `vip_diamond_exchange_events`, Xsolla entitlement tables and RevenueCat event/subscriber tables reviewed here do not grant ordinary authenticated users direct mutation authority.
- `activate_vip_with_diamonds()` binds the purchaser to `auth.uid()`, uses the server-configured Diamond cost, checks/locks the balance, deducts Diamonds atomically and records an exchange event. The defect is the provenance of a pre-existing VIP boolean, not caller control of the Diamond price.
- The current server-configured Diamond-to-VIP cost observed in this read-only check is an implementation/catalog value, not a permanent legal promise. Future lawful changes remain governed by the displayed offer and canonical future-price rules.
- `claim_bulk_diamond_energy_refill(...)` binds to `auth.uid()`, validates the Diamond count, locks the profile, checks available Diamonds, applies its current server-side window limit, deducts Diamonds and updates energy atomically. Its one-Diamond wrapper delegates to this checked path.
- `refund_legacy_logistics_trucks(...)` binds to the authenticated user, limits eligibility to that user's non-withdrawn legacy trucks and withdraws the refunded records before/with the wallet credit, materially reducing repeat-refund risk in the reviewed path.
- Anonymous EXECUTE visibility on `collect_vip_energy()` / `get_vip_energy_status()` does not by itself permit anonymous collection because those reviewed functions fail when `auth.uid()` is null. Least-privilege cleanup is still preferable, but this is not the same as an anonymous VIP grant.

## 7. Legal/product effect

No canonical English or localized legal clause should promise that a raw `profiles.vip` boolean is authoritative. The legal documents should continue to rely on valid transaction, provider, server and documented-grant records, subject to mandatory rights and the user's right to challenge an incorrect record.

A valid purchase or documented Lifetime VIP/complimentary entitlement must not be removed merely because CK-Labs later repairs the cache/provenance model. Conversely, an entitlement that exists only because of knowing manipulation of a client-writable field can be investigated and proportionately corrected using reliable evidence. Account compromise, support mistakes, migration defects and provider reconciliation errors must remain distinguishable from intentional abuse.

False or unverified renewal reminders must be corrected as operational incidents. They must not be used to deny a refund, prove an expiry, prove fraud or override the authoritative transaction/entitlement record.

## 8. Next verification

After engineering remediation lands, recheck all of the following read-only before closing this gate:

1. authenticated column privileges and RLS for `profiles.vip`;
2. authoritative source/provenance used by Diamond-to-VIP preservation;
3. authoritative source/provenance used by Xsolla preservation;
4. `xsolla_effective_vip(...)` handling of preserved entitlements;
5. EXECUTE privileges and internal authorization for the raw VIP-expiry sender;
6. expiry/source derivation inside that sender or its trusted wrapper;
7. EXECUTE privileges for the global reminder processor;
8. retirement/neutralization of stale pre-release player-readable error text;
9. no regression to valid 30-Day VIP, Lifetime VIP, Diamond or provider refund/reversal behavior; and
10. current Apple/Google/Xsolla plus German/EU legal/provider baseline.

Until those controls are fixed, the technical commercial-readiness gate remains open.