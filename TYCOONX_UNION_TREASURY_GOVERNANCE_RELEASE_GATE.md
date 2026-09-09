# TycoonX Union Treasury & Governance Legal Release Gate

**Code-first read-only audit. Last reviewed: September 10, 2026.**

Owner: CK-Labs  
Scope: TycoonX Union membership fees, treasury deposits/withdrawals, maintenance, projects/rewards, polls, level upgrades, closure, account compromise, alternate-account/limit evasion, and the server-authority boundary.

This gate supplements the canonical English TycoonX Terms of Service and the synchronized player-facing Terms clarification. It does not replace mandatory consumer law, the Privacy Policy, or the Community Standards.

## 1. Sources actually inspected

This review was based on current deployed behavior rather than generic multiplayer-game assumptions:

- current Flutter Union entry points in `Atakancev/terrax-flutter/lib/services/union_service.dart`;
- read-only production Supabase definitions for Union treasury, fee, maintenance, project, poll, upgrade and closure RPCs;
- current Union table grants, RLS policies, constraints and Finance V2 treasury authority guard;
- the active `union_daily_sweep()` schedule and current function body; and
- the current TycoonX Terms and code-first gameplay map.

No production row, function, trigger, policy, schema object or configuration value was changed by this audit.

## 2. Player-facing legal baseline

TycoonX Unions are fictional cooperative gameplay structures. Union treasury, membership fees, project contributions, project rewards, maintenance, levels, XP, member limits, polls, roles and other Union state are in-game mechanics, not bank accounts, deposits, securities, partnerships, legal entities, escrow, fiduciary accounts or claims to real-world money.

A player does not acquire real-world ownership of Union treasury merely because they contributed in-game money to it, paid membership fees, became leader/officer, or voted in a poll.

This does not allow CK-Labs to ignore a valid paid digital-product right or mandatory consumer remedy merely by labeling an issue “Union gameplay.”

## 3. Legitimate Union value movement must not be mislabeled as cheating

The deployed game intentionally permits Union value movement. In particular:

- `pay_union_membership_fee()` moves the member’s in-game money to the Union treasury;
- `union_leader_deposit(...)` moves the leader’s in-game money into the Union treasury;
- `union_leader_withdraw(...)` moves Union treasury value to the leader’s in-game wallet;
- `donate_union_project(...)` moves a member’s money into a Union Project and, on completion, into Union treasury before any configured project reward distribution;
- completed projects can distribute a configured portion of the collected project value among active members; and
- maintenance and level upgrades intentionally spend Union treasury.

A large leader withdrawal, large deposit, high membership fee, large project contribution, project reward or expensive level upgrade is not automatically abuse merely because substantial in-game value moves.

Enforcement should focus on purpose, authority, exploit knowledge, coordinated account control, false state, or other concrete evidence, not a simplistic amount threshold.

## 4. Leader treasury withdrawal is an intended mechanic, not an automatic theft finding

The current production `union_leader_withdraw(...)` route requires the authenticated player to be an active Union member whose current Union role is `leader`, verifies sufficient Union treasury, debits Union treasury, credits the leader’s player wallet, and records a `leader_withdraw` Union transaction.

Therefore TycoonX must not describe every leader withdrawal as prohibited “stealing from the Union.” The feature intentionally allows a leader distribution.

However, this does not create an unlimited safe harbor. A withdrawal may still be reviewed where reliable evidence shows, for example:

- a manipulated client or authorization weakness was used to become or appear to become leader;
- a compromised leader account was used without the account holder’s authorization;
- an exploit or duplicated transaction created the treasury being withdrawn;
- multiple controlled accounts were coordinated to evade another game restriction;
- the withdrawal was part of prohibited RMT or another off-platform exchange; or
- a server defect created a clearly invalid balance or duplicate payout.

Correction of invalid Union/player state is distinct from punitive enforcement. Accidental one-off receipt should not automatically be treated as knowing exploitation.

## 5. Membership fees and automatic collection

Membership fees are genuine Union gameplay. Current Union settings include a membership fee and payment mode. The deployed manual fee RPC charges the active member’s wallet, credits Union treasury and advances the next fee-due time.

The current daily sweep can also collect due membership fees for Unions configured for automatic collection or members who have enabled auto-pay. The sweep uses current server-side due-state and available player funds.

Legal/UX rules:

- payment of an in-game Union membership fee is not a real-world subscription or recurring monetary charge;
- changing a Union’s in-game membership fee does not authorize any Apple, Google, Xsolla or real-currency charge;
- inability to afford an in-game membership fee is not fraud or misconduct;
- an automatic in-game deduction that was duplicated, taken contrary to the authoritative due state, or caused by a server defect may be corrected; and
- current fee amounts, collection intervals and auto-pay mechanics are balance/configuration rules, not permanent contractual promises.

## 6. Maintenance and the seven-unpaid-day closure path

The active production `union_daily_sweep()` currently runs on a daily cron and charges the Union’s configured daily maintenance fee when treasury is sufficient. If treasury is insufficient, `unpaid_days` increases. At seven unpaid days, the current sweep changes the Union status to `closed` and changes active member statuses to `left`.

This is a gameplay consequence, not an account sanction or accusation of wrongdoing.

The Terms clarification must make the material consequence understandable without promising that the current exact seven-day threshold, maintenance amount or sweep clock will never change.

Where a platform outage, duplicate sweep, stale job, clock/configuration error, Finance V2 mismatch or other backend defect wrongly advances unpaid state or closes a Union, CK-Labs should use reliable records to reconcile the directly attributable state where reasonably feasible. The player must not be accused of intentional non-payment merely because the automated job malfunctioned.

A Union closed through maintenance does not automatically entitle members to a personal cash payout of Union treasury. Any valid paid digital-product remedy or mandatory statutory right remains separate and unaffected.

## 7. Manual maintenance payment

The current `pay_union_maintenance_now()` path lets an active Union member cure one unpaid maintenance day when the Union is active and treasury has enough value. It reduces `unpaid_days` by one and charges the current daily maintenance fee from Union treasury.

A manual payment button is a recovery gameplay feature, not a promise that every accumulated maintenance state can always be cured after closure or that a historic maintenance price remains available forever.

A stale client must not be used to create a false expectation where the authoritative Union is already closed or the current treasury is insufficient.

## 8. Union Projects, 50% donor limit and rewards

`donate_union_project(...)` is an expressly designed contribution mechanic. The current production implementation limits one user’s cumulative contribution to 50% of the project target.

A legitimate contribution, including the maximum permitted contribution, is allowed and is not a disguised gift merely because it benefits the Union or other active members.

However, coordinated controlled accounts must not be used primarily to defeat the per-user contribution limit, recycle exploit-generated value, manufacture project completion/rewards, or exchange outside consideration for in-game outcomes.

The current project completion path:

- moves the collected project value into Union treasury;
- grants Union XP based on the project amount;
- can retain all project value in treasury or distribute a configured percentage among active members; and
- records the resulting Union/player transactions.

Receiving a legitimate project reward is not automatically suspicious and must not be treated as a donation from another player. It is a feature-defined distribution from Union state.

A project cannot currently be cancelled after it has donations. This current implementation limit should not be converted into a promise that project-cancellation rules can never change.

## 9. Level upgrades debit before completion

The current `start_union_level_upgrade()` route is leader-only. It checks XP and Union treasury, calculates current upgrade cost and duration, immediately debits the treasury, records the start, and stores a future completion time. `sync_union_level_upgrade(...)` completes the upgrade after the server time has passed, spends the required Union XP, increases the Union level and updates the member limit.

Important reconciliation rule: an outage, app closure or delayed sync after a valid upgrade start is not cheating and must not cause a second charge. If the cost was authoritatively debited but completion state becomes inconsistent because of a backend defect, CK-Labs should reconcile the transaction and state rather than treating a retry as automatic abuse.

Current upgrade costs, durations, XP requirements and member limits are balancing rules and may change prospectively for valid game-design/economy reasons, subject to mandatory law.

## 10. Polls are governance gameplay, not real-world corporate voting

Current TycoonX Union polls are in-game governance/social tools. The deployed poll RPC allows authorized Union leadership to create a poll with configured options and settings. Union members may vote according to the poll’s settings, including whether vote changes are allowed and whether results remain hidden until closure.

Unless a specific TycoonX feature expressly states that a poll automatically performs a particular server action, a poll result is not itself a real-world contract, shareholder resolution, fiduciary instruction, legal election or ownership right against CK-Labs.

Poll manipulation through unauthorized accounts, automation, exploit-created memberships or controlled-account vote farming can be reviewed where supported by evidence. An unpopular result, coordinated legitimate political campaigning inside a Union, or a changed vote where the feature expressly permits vote changes is not automatically abuse.

## 11. Union closure by leader

The current `collapse_union()` RPC is leader-only and changes the Union to `closed`, marks active members as `left`, cancels pending applications, deactivates recruitment, and records the closure.

A leader’s authorized use of this feature is an intended governance action. It is not automatically a Terms violation merely because members disagree with it.

However:

- a compromised account, manipulated leader state, exploit, or unauthorized access used to collapse a Union may be investigated and, where reliable evidence permits, corrected;
- a client-visible confirmation should clearly communicate that closure is consequential and may affect membership, active Union functions, projects/recruitment and shared Union state;
- Union treasury is shared in-game state and is not automatically distributable as personal player money on closure unless the feature expressly provides such a distribution; and
- CK-Labs must not use Union closure as a hidden route to confiscate unrelated purchased Diamonds, VIP or other unrelated legitimate paid value.

## 12. Authority and role state must be server-verified at action time

Support and enforcement should use authoritative role, Union and transaction evidence from the time of the action. A later screenshot showing a different role is not conclusive proof of earlier authority.

Leader/officer permissions are in-game permissions only. They do not make a player an employee, agent, trustee, director or legal representative of CK-Labs or another player.

A rogue leader/officer action is not automatically attributable to every Union member. Member-wide sanctions require their own evidence.

## 13. Critical implementation finding: broad `unions` UPDATE surface

The current Flutter client directly updates the `unions` table for ordinary Union settings such as description, membership fee, approval mode and payment mode.

The current production RLS UPDATE policy permits an active Union leader **or officer** to update the relevant `unions` row using `is_union_leader_or_officer(id)`. Current authenticated table privileges expose UPDATE on all `unions` columns, including sensitive fields such as `leader_id`, `status`, `union_level`, `union_xp`, `member_limit`, maintenance state and treasury.

The current Finance V2 deferred authority guard protects treasury consistency while `reporting_mode = FULL_AUTHORITY`, but the reviewed trigger does not make non-treasury governance fields immutable. No reviewed constraint prevents a permitted row updater from changing `leader_id` to another valid auth user.

**Release/security consequence:** a modified or direct client may be able to attempt sensitive Union-state updates that the normal Flutter UI never offers. In particular, a broad update path to `leader_id` could undermine later leader-only RPC assumptions if not blocked elsewhere.

This is an implementation-security finding, not a player-facing permission grant. A database request succeeding because of an over-broad policy does not convert manipulated state into authorized gameplay.

Required engineering follow-up outside this legal run:

1. move ordinary Union settings changes behind a narrowly scoped RPC or restrict UPDATE privileges/trigger validation to intended mutable fields;
2. make `leader_id`, `status`, level/XP/member-limit, maintenance state and other server-owned fields non-writable through generic authenticated table UPDATE;
3. ensure any intentional leadership-transfer feature has its own authenticated, auditable, constrained transaction;
4. keep Finance V2 treasury authority protection intact; and
5. regression-test officer attempts to alter leader identity or server-owned Union progression fields.

No production database policy or function was changed during this audit.

## 14. Current `union_members` direct-update mismatch

The current production `union_members` table has RLS enabled. The reviewed policy set exposes member reads but no generic authenticated UPDATE policy, while historic/other Flutter paths have used direct member-row updates for some settings in earlier code revisions.

Legal/support rule: a UI or client failure caused by RLS/source drift must not be framed as player misconduct. Engineering should continue to prefer narrowly scoped RPCs for role changes and member payment preferences so authority and audit semantics are explicit.

## 15. Server-authoritative does not mean server-infallible

For Union disputes, authoritative server transactions, role history, provider logs, Finance V2 records, project donation rows, poll rows and reliable backups are primary operational evidence. They can still contain state produced by bugs, duplicated jobs, over-broad RLS, stale clients, race conditions, compromise or configuration mistakes.

Accordingly:

1. server records beat stale client displays for ordinary state;
2. a successful server request is not an absolute safe harbor for knowing manipulation;
3. objective technical evidence can justify correction of demonstrably invalid server state;
4. directly attributable invalid state should be corrected without sweeping unrelated legitimate wealth;
5. state correction is not automatically a cheating sanction;
6. accidental one-off use, compromise and outages must be distinguished from knowing/repeated exploitation; and
7. unrelated legitimate paid value and mandatory consumer rights remain protected.

## 16. Account compromise and destructive Union actions

Where a credible compromise report involves a large treasury withdrawal, Union closure, settings mutation, project action or other destructive governance event, CK-Labs may temporarily restrict affected Union/economy actions while preserving evidence and investigating.

Restoration is not guaranteed where reliable prior state cannot be established, but CK-Labs should use available authoritative logs and avoid blaming every Union member for actions attributable to one compromised account.

A compromise claim is not automatically accepted merely because an unfavorable Union action occurred. Evidence may include authentication/security history, authoritative transaction timing, role state, device/session evidence lawfully retained, communications and surrounding activity.

## 17. Founder-protective but fair enforcement boundary

Permitted responses can include:

- no action where evidence does not support abuse;
- correcting duplicated or invalid Union/player state;
- reversing a directly attributable exploit-generated withdrawal or reward;
- temporarily freezing relevant Union/economy actions during investigation;
- warning or feature-limiting knowing first-time abuse where proportionate; or
- suspension/termination for serious or repeated exploitation, RMT, account manipulation or sanction evasion where permitted by the Terms and law.

Do not automatically:

- confiscate unrelated purchased Diamonds or valid VIP;
- punish every Union member because a leader acted improperly;
- label a high withdrawal, contribution, fee or reward as fraud based only on amount;
- punish a player for a maintenance cron/provider outage they did not cause;
- treat a failed or unavailable client action as attempted cheating; or
- rely on an over-broad RLS acceptance as proof that manipulated state was intended gameplay.

## 18. German/EU mandatory-rights boundary

German BGB § 307 requires standard terms to remain clear and not unreasonably disadvantage consumers. That is why this gate distinguishes intended Union value movement from abuse and does not use hidden implementation knowledge to turn ordinary gameplay into a violation.

Where the statutory digital-product regime applies, mandatory conformity and remedy rules remain separate from Union discipline. A backend defect, outage or non-conforming paid digital service cannot be relabeled as “Union risk” to eliminate a remedy that German/EU law makes mandatory.

## 19. Regression scenarios

Before relying on Union behavior for enforcement or releasing a materially changed Union implementation, test at least these scenarios:

1. leader makes a legitimate large treasury deposit;
2. leader makes a legitimate large treasury withdrawal;
3. non-leader tries the leader withdrawal RPC;
4. compromised leader performs a withdrawal;
5. member manually pays a valid due membership fee;
6. auto-pay collects one valid due fee;
7. duplicate sweep must not charge the same due fee twice;
8. insufficient wallet for an auto fee is not fraud;
9. Union treasury pays normal daily maintenance;
10. one unpaid maintenance day increments correctly;
11. seven genuine unpaid maintenance days close the Union once;
12. cron outage/duplicate run does not create false intentional-nonpayment enforcement;
13. manual maintenance cures only the authoritative unpaid state;
14. member makes a legitimate project contribution below the current cap;
15. member legitimately contributes exactly the current cap;
16. controlled alternate accounts coordinate primarily to evade the per-user project cap;
17. project completion credits treasury once;
18. configured project reward distribution pays active members once;
19. receipt of a legitimate project reward is not classified as a disguised gift;
20. project cancellation is rejected after donations under current implementation;
21. Union level upgrade debits cost once and records completion time;
22. delayed sync after app closure completes without a second charge;
23. retry during an in-progress upgrade does not duplicate cost;
24. legitimate poll vote is counted once;
25. vote change works only where the poll permits it;
26. controlled-account vote farming is reviewable separately from ordinary coordinated voting;
27. leader legitimately collapses a Union;
28. compromised leader collapse is investigated as compromise rather than automatically final;
29. Union closure does not confiscate unrelated purchased Diamonds/VIP;
30. ordinary leader/officer settings edit changes only intended settings;
31. modified client attempts to update `leader_id` through generic `unions` UPDATE;
32. modified client attempts to alter `union_level`, `union_xp`, `member_limit`, `status` or maintenance state;
33. direct treasury mutation conflicts with Finance V2 authority and is rejected/reconciled;
34. stale client displays an active Union after authoritative closure;
35. account restoration uses authoritative evidence rather than a screenshot alone;
36. sanctions target involved accounts/actions rather than all Union members;
37. balance correction preserves unrelated legitimate paid value; and
38. mandatory consumer remedies remain available for a qualifying digital-product defect.

## 20. Release decision

**Legal doctrine: PASS with the synchronized player-facing clarification.**

**Implementation authority: NEEDS ENGINEERING HARDENING.** The generic authenticated `unions` UPDATE surface is broader than the ordinary Flutter settings UI and should be narrowed before it is relied upon as a security boundary.

The legal documents must not promise that the current exact maintenance fee, seven-day threshold, contribution cap, project reward percentage, level cost/duration, member limit or poll settings are immutable. They must clearly distinguish genuine Union mechanics from manipulation, RMT, exploit use and account compromise.

Next code-first gameplay legal target after this gate: **Art/Begging**, including auction bids, direct offers, duplicate publication, genuine art purchases, intended assistance, self-bidding/collusion, moderation and server-authority/correction boundaries.
