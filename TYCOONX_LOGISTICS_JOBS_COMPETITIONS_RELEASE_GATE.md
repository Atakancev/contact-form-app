# TycoonX Logistics, Jobs, Competitions & Rewards Release Gate

**Read-only code-first legal and implementation audit. Last reviewed: September 10, 2026.**

Owner: CK-Labs  
Scope: TycoonX truck commerce and deliveries, care jobs, Company recruitment, automated job completion, daily/level/hourly rewards, competitions, rankings and related correction/enforcement boundaries.

This document supplements, but does not replace, the canonical English TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy and Community Standards. No database row, function, trigger, policy, grant, schema object, cron, balance or configuration is changed by this audit.

## 1. Release principle

The legal rule must follow the mechanics TycoonX actually exposes. Truck sales/rentals, deliveries, care jobs, Company recruitment, built-in job automation, leaderboards, competitions and gameplay rewards are intended simulation systems. Ordinary use is not cheating merely because it moves large amounts of virtual value, produces a high rank, repeats frequently, or produces a favorable random result.

The opposite is also true: a request accepted only because of an authorization, RLS, validation, cooldown, replay or settlement defect is not automatically a legal safe harbor when a player knowingly uses that weakness to fabricate progress, value, ranking or rewards. Enforcement still requires reliable evidence and must distinguish an accidental one-off action, stale state, an outage or account compromise from knowing or repeated exploitation.

Current fees, durability thresholds, fleet limits, job requirements, salaries, cooldowns, reward tables, ranking formulas, competition formats and other game parameters are implementation state rather than permanent contractual promises. They may be changed prospectively for legitimate game reasons, subject to applicable mandatory information, conformity, modification, promotion, termination and other consumer rights.

## 2. Intended Logistics gameplay

Current reviewed Logistics paths establish that:

- players may acquire, own, sell and rent eligible trucks through TycoonX's intended truck-market functions;
- the reviewed sale/rental settlement paths check the authenticated buyer/seller roles, prevent buying or renting one's own listing, validate relevant truck/listing state, move the agreed virtual money and transfer or rent the truck;
- current listing fees, rental conditions and vehicle-condition thresholds are game parameters and should not be written as permanent promises;
- `new_start_fleet_delivery(...)` and `new_start_loaded_fleet_delivery(...)` bind the truck to the authenticated player, validate destination demand, funds/cargo/energy and other eligibility, and perform delivery settlement server-side;
- `new_claim_fleet_delivery(...)` binds the delivery to the authenticated player, requires the delivery to be en route and requires arrival before claim;
- a truck can incur durability wear and, in applicable asynchronous delivery flows, crash risk as gameplay outcomes;
- expiry, maintenance, capacity, route, request, cargo and availability constraints are normal gameplay when the backend applies them correctly; and
- a server or provider defect that incorrectly expires a truck, loses cargo, duplicates settlement or charges without delivering the promised action is a correction/support issue, not automatically player misconduct.

A high sale price, large delivery margin, repeated delivery, frequent rental or ordinary favorable route outcome is not, by itself, evidence of abuse.

## 3. Diamond-funded Logistics acceleration

`logistics_speed_up_delivery(...)` is an intended TycoonX mechanic that currently allows an eligible player to spend Diamonds to accelerate an active delivery. The current amount and time formula are implementation parameters and should not be frozen into the Terms unless CK-Labs deliberately makes a separate fixed offer.

The legal distinction is:

- the Diamond spend buys the eligible in-game acceleration described at the time of confirmation;
- it does not guarantee a particular profit, ranking result, future market price, crash-free outcome or continued availability of that mechanic;
- completed valid acceleration transactions are not retroactively repriced merely because a later Diamond price, balance, speed-up formula or promotion changes;
- if a defect deducts Diamonds but does not provide the represented acceleration, CK-Labs should reconcile that directly affected transaction and preserve any mandatory remedy; and
- an unrelated gameplay correction does not by itself justify removing unrelated valid purchased Diamonds, one-time 30-Day VIP or Lifetime VIP.

Promotional/free Diamonds and purchased Diamonds remain legally distinguishable even when both can be spent on the same eligible gameplay action.

## 4. Care jobs are genuine labor gameplay

Current care-job mechanics cover agriculture, livestock, mining, industrial and shop care work. Player-facing `accept_*_care_job(...)` wrappers delegate to the Finance V2 care-job settlement path. TycoonX also contains system-operated auto-posting and auto-completion so eligible jobs may be created or completed by built-in automation.

Normal care-job work and built-in TycoonX automation are intended gameplay. A player receiving a legitimate wage from an ordinary job, or a job being completed by TycoonX's own configured automation, is not player botting.

Potential misconduct requires additional evidence, for example knowingly coordinating sham jobs primarily to funnel value between controlled accounts, fabricating completion state through a modified client or direct API, deliberately replaying a settlement defect, using unauthorized external automation, or laundering exploit-generated value through job wages.

A high wage alone is not proof of abuse. A job that is automatically completed, cancelled as stale, delayed by lock contention or affected by an outage is also not, by itself, evidence against either player.

## 5. Company jobs and recruitment are genuine gameplay

Current reviewed Company recruitment includes job posting, job requirements, applications, acceptance, membership creation, role/salary assignment, post closing and optional sponsorship. The richer current Flutter form sends role, salary, description, slots, trial period, minimum level, product-research requirement and specialization requirement to the server RPC.

Legitimate recruitment, a high salary, selective requirements, repeated applications, a rejected application or a Company changing an open job post are normal game behavior when performed through authorized mechanics.

Sham recruitment may be reviewed when reliable evidence shows that a job, salary or controlled-account arrangement was created mainly to funnel value, evade another system's limits, manipulate rankings, hide exploit proceeds or facilitate prohibited real-money trading. Enforcement should evaluate purpose and surrounding evidence rather than use an automatic amount threshold.

## 6. Rewards, competitions and leaderboards

TycoonX contains server-side level-up rewards, daily tasks/streak rewards, an hourly randomized reward mechanic, Company/stock and other ranking surfaces, and game-specific competition or match reward settlement.

Legal baseline:

- a high rank, repeated win, favorable random spin, legitimate streak, unusually large lawful reward or leaderboard movement is not automatically abuse;
- free or promotional gameplay Diamonds are not represented as purchased Diamonds merely because they share the same in-game balance or can be spent on an eligible action;
- reward tables, event formats, eligibility, ranking formulas and future competition prizes may change prospectively for legitimate reasons, subject to applicable mandatory rights and truthful promotional representations;
- a clearly represented completed valid award should not be clawed back merely because CK-Labs later changes the reward table;
- a genuinely duplicated, accidental, exploit-generated or configuration-error reward may be reconciled proportionately under the canonical economy-correction rules; and
- win trading, controlled-account feeding, fabricated progress, modified-client/API manipulation, unauthorized bots, replay/race exploitation and deliberate duplicate claiming remain prohibited when supported by reliable evidence.

Client-influenceable trackers, stale displays and anomaly flags should not be treated as automatically conclusive evidence. Server records can also be contaminated by a permissions defect, so enforcement should reconstruct the actual settlement where reasonably possible.

## 7. P0: global care-job automation helpers are too broadly executable

Production inspection found SECURITY DEFINER system helpers including `_auto_complete_care_jobs_aged(...)` and `_auto_post_care_jobs_batched(...)` executable by public/anonymous/authenticated roles. The reviewed bodies do not establish a trusted service/cron caller before scanning and mutating global care-job state. Several module-specific auto-post helpers are also broader than an ordinary player needs.

This is a material authority problem because these are system-wide mutation functions rather than ordinary caller-scoped player actions.

**Required engineering remediation:**

1. revoke public/anonymous/authenticated EXECUTE from cron/system batch functions that do not need direct player access;
2. permit only the trusted scheduler/service role actually required;
3. add an internal fail-closed trusted-caller check where practical so grant drift alone cannot reopen the surface;
4. keep player-facing `accept_*_care_job(...)` wrappers caller-bound; and
5. preserve idempotency, row locking and Finance V2 settlement evidence for automatic completion.

Legal consequence: a player using ordinary visible care-job controls must not be classified as a bot merely because TycoonX's own auto-completer later handles the job. Deliberately invoking an exposed system batch helper to force or manipulate global job processing is different.

## 8. P0: daily-task stock-consumption helper accepts an arbitrary user

`_daily_task_consume_user_product_stock(p_user_id, p_product_name, p_quantity)` is SECURITY DEFINER and, under the reviewed production grants, is executable by public/anonymous/authenticated roles. Its body accepts the supplied `p_user_id` and directly consumes that user's agriculture, livestock, mining or industrial product stock. It does not bind the target to `auth.uid()`.

The normal player-facing `daily_task_claim(...)` correctly derives the player from `auth.uid()` and calls the helper internally. The helper itself should therefore not be a public arbitrary-user API.

**Required engineering remediation:** make arbitrary-user daily-task helpers trusted/internal only, or remove the user parameter from public wrappers and derive it from `auth.uid()`. Apply the same review to `_daily_task_apply_veteran_bypass(...)`, `_daily_task_ensure_state(...)` and `_daily_task_refresh_user_tasks(...)` because they also accept supplied user IDs and are broader than ordinary clients require.

A victim whose stock is altered through such a defect has not voluntarily delivered or forfeited that stock. Where authoritative evidence permits reconstruction, CK-Labs should correct the directly affected state and preserve applicable remedies.

## 9. P0: hourly reward cooldown state is client-writable

Production RLS currently gives a player generic ALL access to their own `hourly_chart_rewards` row. The reviewed `spin_hourly_chart_reward()` trusts `next_spin_at` from that row to decide whether another reward can be claimed, then can award money, XP, energy or a gameplay Diamond.

That makes the cooldown tracker insufficiently server-authoritative: a modified/direct client can potentially alter its own cooldown state before calling the otherwise authenticated reward RPC.

**Required engineering remediation:**

- make the reward tracker SELECT-only to ordinary clients;
- mutate `last_spin_at`, `next_spin_at`, `total_spins` and notification/control fields only through trusted reward/notification transitions;
- preserve row locking and an idempotent reward event/claim key; and
- derive enforcement/reconciliation from trusted reward events rather than the client-writable tracker alone.

A favorable random result itself is not suspicious. Deliberately resetting or fabricating cooldown state to obtain repeated rewards is reviewable when reliable evidence establishes that conduct.

## 10. P0: level-up reward checkpoint is not visibly monotonic/server-owned

`claim_level_up_rewards()` uses `profiles.last_level_reward_claimed` as the checkpoint that determines which historical levels still pay money and energy. Production RLS also includes a generic "Users can update their own profile" policy. A Finance V2 trigger blocks direct money updates, but the reviewed trigger set does not visibly make `last_level_reward_claimed` immutable or monotonic for client-originated updates.

This creates a material risk that a modified client could lower the checkpoint and reclaim historical level rewards through the legitimate claim RPC.

**Required engineering remediation:** make the checkpoint server-owned; reject decreases from ordinary clients; permit exceptional migration/correction only through a trusted audited path; and keep reward claiming idempotent per user/level.

If a backend migration itself resets a checkpoint and duplicates a reward without knowing player manipulation, that should be treated as a defect/correction case rather than automatic fraud.

## 11. P0/P1: Company job RLS has cross-company predicates

The reviewed `company_job_posts` management policy and `company_job_applications` manager-read policy contain the predicate `mm.company_id = mm.company_id`. That is a self-comparison rather than a comparison to the target job/application company's ID.

Under the current broad table privileges, this can make an active qualifying manager/HR/CEO relationship in one Company satisfy the subquery for rows belonging to another Company.

Impact:

- **P0 integrity:** generic row access may bypass the safer Company-specific RPC permission checks for job-post mutation.
- **P1 privacy/confidentiality:** a manager may be able to read applications belonging to another Company, exposing applicant identity/note or other recruitment information beyond the intended audience.

**Required engineering remediation:** correlate each RLS subquery to the protected row's `company_id`, narrow direct table mutation where an RPC is intended, and regression-test two unrelated Companies with manager/applicant roles.

The richer job RPCs reviewed in production do perform Company-specific permission checks and should remain the canonical mutation path.

## 12. P1: stale Company job overloads have weaker validation

Production currently retains older overloaded `company_job_post_create(...)` signatures alongside the richer current version used by Flutter. The richer version clamps `salary_offer` to a non-negative value, while reviewed older overloads do not apply the same validation.

This creates avoidable validation drift for direct callers even though the current normal UI uses the richer signature.

**Required engineering remediation:** retire unused overloads, or make every surviving signature delegate to one authoritative implementation with the same permission, salary, slot, trial and requirement validation.

## 13. P1: global match/reward settlement should use least privilege

`fm_settle_match_rewards()` is a SECURITY DEFINER system-wide settlement function and is currently executable by authenticated users. The reviewed function does have useful idempotency/locking behavior: it selects only finished matches with `reward_paid=false`, locks them, calculates rewards, updates teams and marks the reward paid. The reviewed Football Manager match/team/player tables expose authenticated read policies rather than general player write policies.

This does not by itself prove a value exploit, but ordinary clients do not need authority to trigger a global reward-settlement sweep.

**Required engineering remediation:** restrict settlement execution to the trusted server/scheduler path unless there is a documented product reason for public triggering, and retain the current `reward_paid`/locking protections.

The same least-privilege review should cover system notification/reward-processing helpers that can iterate other users.

## 14. P2: stale legacy Logistics compatibility path

The reviewed `finance_v2_start_logistics_job(...)` currently delegates to `public.rpc_logistics_start_job(...)`, while a read-only production lookup found no current function by that delegated name. The current new Logistics delivery paths are separate and active.

This should be treated as legacy compatibility hygiene rather than a player promise. Retire or repair unreachable stale paths so an unsupported old client cannot create confusing failure behavior. Old or unsupported clients do not gain a permanent right to a retired implementation, subject to applicable update/conformity obligations.

## 15. Evidence and enforcement boundary

For suspected Logistics/job/reward abuse, relevant evidence can include server settlement events, truck ownership/listing history, delivery logs, care-job state, Company membership/permission history, reward events, cooldown state, login/security signals and communications where lawfully processed.

Do not treat any single weak signal as conclusive where it can be caused by stale UI, a client-writable row, a known RLS defect, a system retry or an outage. In particular:

- a high wage is not proof of value funneling;
- a high truck price is not proof of collusion;
- a repeated win/high rank is not proof of win trading;
- a random Diamond reward is not proof of entitlement abuse;
- system auto-completion is not player botting; and
- a duplicate-looking result can be a retry/idempotency defect.

Where reliable evidence establishes knowing abuse, proportionate responses can include containment, correction of directly attributable invalid value/progress/rank/rewards, leaderboard disqualification, feature restrictions, suspension or termination under the canonical Terms. Unrelated valid paid entitlements should not be automatically confiscated as a shortcut.

## 16. Account compromise, outages and restoration

If a compromised account is used for sham jobs, reward exploitation, truck transfers or other manipulation, CK-Labs may temporarily contain affected features while reviewing authoritative security/economy evidence. The account owner should report compromise promptly and reasonably cooperate with restoration checks.

CK-Labs cannot promise perfect reconstruction when evidence is unavailable or conflicting. But a known authorization defect, provider outage, duplicate cron run, stale UI or system failure must not automatically be treated as intentional abuse by the affected player.

Corrections should target the invalid transaction, value, job, reward, score, listing or entitlement actually attributable to the incident. Purchased Diamonds, one-time 30-Day VIP and Lifetime VIP remain governed by their separate purchase/entitlement rules and mandatory rights.

## 17. Mandatory German/EU consumer-law boundary

This gate does not waive non-waivable consumer rights.

For German consumer contracts, BGB § 307 remains relevant to standard terms: unclear or unreasonably disadvantageous clauses can be ineffective. Gameplay rules therefore distinguish intended automation and ordinary economic behavior from exploit conduct instead of treating every unusual outcome as prohibited.

Where the German digital-product rules apply, BGB § 327d requires contractual conformity and § 327i preserves statutory remedies for qualifying defects. A genuine backend defect cannot be relabeled ordinary gameplay risk merely to avoid a mandatory remedy.

For qualifying continuous digital-product contracts, BGB § 327r can condition changes beyond those needed to maintain conformity, including a contractual basis and valid reason, no additional cost, clear information and, for qualifying access/usability impairment, advance durable-medium information and statutory termination consequences. TycoonX balancing language remains subject to those requirements.

## 18. Release-blocking checklist

Before treating this cluster as technically hardened, engineering should be able to answer **yes** to all of the following:

- system-wide care auto-post/auto-complete helpers are trusted-only;
- arbitrary-user daily-task helpers are trusted-only or caller-bound;
- hourly reward cooldown state is server-owned;
- level-up reward checkpoints are server-owned and monotonic for ordinary clients;
- Company job RLS is correctly correlated to the target Company;
- Company application reads cannot cross unrelated Companies;
- stale Company job overloads cannot bypass current validation;
- system-wide reward/match settlement uses least privilege;
- active Logistics settlement binds truck, cargo/job and caller as intended;
- Diamond speed-up settlement is idempotent and transaction-reconcilable;
- reward/event history used for enforcement is server-authoritative enough for its evidentiary weight;
- correction tooling can remove directly attributable invalid free rewards/progress without automatically confiscating unrelated valid paid value; and
- mandatory consumer remedies remain available where applicable.

## 19. Regression scenarios

1. Player sells a truck at a high but valid price: allowed absent additional abuse evidence.
2. Player buys their own truck listing: server rejects.
3. Controlled accounts repeatedly circle the same truck mainly to move value: reviewable.
4. Legitimate truck rental expires: normal gameplay.
5. Rental expires early because of a backend defect: correction/support case, not automatic misconduct.
6. Player repeatedly performs profitable deliveries through normal UI: allowed.
7. Player uses a direct API to deliver with another player's truck: server must reject.
8. Delivery request becomes stale before settlement: server must revalidate.
9. Diamond speed-up is charged and acceleration applies: valid transaction.
10. Diamond speed-up is charged but acceleration does not apply: reconcile directly affected spend/remedy.
11. Later speed-up price changes: prior completed spend is not retroactively repriced.
12. Player receives a high care-job wage: not automatically abuse.
13. Two controlled accounts create sham care jobs mainly to funnel wealth: reviewable.
14. TycoonX auto-completes an eligible care job: intended system automation.
15. Player uses an exposed global care-auto-complete helper to force system processing: prohibited technical abuse when knowing/repeated.
16. Global care auto-complete runs twice because of a scheduler defect: reconstruct/correct; do not presume player abuse.
17. Anonymous caller attempts arbitrary-user daily-task stock consumption: must be impossible after hardening.
18. Player completes their own daily product task through `daily_task_claim`: allowed.
19. Backend task helper consumes another player's stock due authorization defect: victim has not voluntarily forfeited stock.
20. Player spins hourly reward after legitimate cooldown: allowed.
21. Player gets a Diamond from the random hourly reward: legitimate free gameplay reward.
22. Player directly lowers `next_spin_at` to farm spins: prohibited technical manipulation.
23. Reward tracker is accidentally reset by migration and duplicate reward is granted: correct duplicate state proportionately; investigate intent separately.
24. Player levels normally and claims pending level rewards: allowed.
25. Player directly lowers `last_level_reward_claimed` then reclaims historical rewards: prohibited technical manipulation.
26. Migration lowers the checkpoint without player action: defect/correction case.
27. Company posts a high-salary legitimate vacancy: allowed.
28. Company uses job salary mainly to funnel value to a controlled account: reviewable.
29. Candidate fails level/research/specialization requirement: application rejection is normal gameplay.
30. Manager of Company A edits Company B's post through generic table RLS: must be impossible.
31. Manager of Company A reads Company B applications through the tautological RLS predicate: privacy/authorization defect requiring remediation.
32. Current Flutter uses richer Company job RPC: server validates current requirements.
33. Direct caller invokes stale weaker overload: should not bypass current validation after hardening.
34. Player earns a high leaderboard position legitimately: allowed.
35. Controlled accounts intentionally feed wins/rank to one another: reviewable.
36. One repeated win caused by matchmaking randomness: not enough for punishment.
37. Free reward is duplicated by replay/race defect and knowingly farmed: invalid duplicate value may be corrected and exploitation sanctioned proportionately.
38. Player receives a later lower reward after CK-Labs prospectively rebalances reward tables: not a retroactive repricing of the earlier valid award.
39. CK-Labs advertises a specific competition prize and valid winner completes eligibility: honor the represented award subject to stated lawful conditions and mandatory law.
40. `fm_settle_match_rewards()` is invoked concurrently: locking/`reward_paid` must prevent duplicate settlement.
41. Ordinary client tries to invoke a system-wide match settlement after hardening: denied.
42. Stale legacy Logistics function calls a removed dependency: old-client failure is an engineering/update issue, not a promise that legacy Logistics must remain forever.
43. Player account is compromised and exploiter drains value through sham jobs/truck trades: contain and reconstruct where reasonably possible; do not automatically treat owner as intentional cheater.
44. Provider/backend outage delays job completion or reward visibility: stale display is not authoritative forfeiture.
45. Invalid free reward is corrected: unrelated purchased Diamonds and valid VIP remain untouched absent a separate lawful basis.
46. Legitimate purchased Diamond balance is affected by a reconciliation bug: purchase evidence and mandatory remedies remain available.
47. A high rank is removed solely because it “looks impossible” without reliable evidence: fail; investigate first.
48. Reliable server evidence proves modified-client reward farming: directly attributable invalid rewards/rank can be corrected and sanctions applied proportionately.

## 20. Next implementation-first area

After this gate, the next unfinished deployed-game legal audit is **Social/UGC**: Company/Union chat, rooms, music/books and remaining user-content surfaces, impersonation, scams, moderation, appeals, user-content rights, privacy exposure and related enforcement evidence.