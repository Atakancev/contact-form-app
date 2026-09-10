# TycoonX Bank, Credit, FX, Stocks and Crypto Legal / Authority Release Gate

**Updated: September 10, 2026**

**Status:** player-facing legal meaning is being synchronized in this repository. The implementation findings below remain engineering work. This legal audit made no production database change.

## 1. Scope

This gate maps TycoonX legal rules to the banking and investment-style gameplay that actually exists in the current Flutter client and production Supabase backend. It covers:

- legacy bank deposits, interest and loans retained by the current application;
- the current cash and savings system;
- credit quotes, notes, installments, late fees, default, collateral, debt recovery and bankruptcy;
- in-game foreign-exchange accounts, trading, cooldowns and Diamond-funded FX slot unlocks;
- stock and crypto holdings and buy/sell settlement;
- stock-price automation, crypto-price updates, price history and transaction-derived market signals; and
- evidence, account compromise, correction and sanction boundaries for these systems.

The implementation review used current Flutter source and read-only production Supabase metadata/function definitions. No exploit was executed and no database row, function, grant, policy, trigger, schema object, cron or configuration was changed.

## 2. Player-facing legal baseline

TycoonX banking, savings, loans, FX, stocks, crypto, Companies, shares and market prices are fictional game systems. They are not real bank accounts, deposits, securities, investment products, legal tender or cryptocurrency assets, and TycoonX does not promise a real-world return, redemption value, fixed yield or profit.

A legitimate deposit, interest credit, loan, installment, late payment, default, collateral consequence, bankruptcy, FX trade, stock/crypto purchase or sale, market gain or market loss is ordinary gameplay and is not automatically cheating.

Current interest rates, lending criteria, credit scores, collateral values, loan terms, late fees, cooldowns, commissions, spreads, market sessions, volatility, price formulas, trading limits and other balance parameters may change prospectively for legitimate reasons such as balance, economy health, security, technical compatibility, abuse prevention or service evolution. This is not an unlimited waiver of consumer rights. Where mandatory law governing a continuously supplied digital product requires a valid contractual reason, clear information, advance durable-medium notice, a termination option or another remedy for a qualifying change, CK-Labs must preserve those rights.

No display, trend, market article, projected interest figure, quote, price history or automated market state guarantees that the same value or performance will continue.

## 3. Debt, collateral and bankruptcy

Current TycoonX credit can use eligible virtual gameplay assets as collateral and can impose in-game consequences for missed payments. Current recovery code can sell or remove eligible virtual production, shop, housing and logistics assets and can ultimately apply broader virtual-economy bankruptcy consequences.

Those mechanics do not turn TycoonX debt into real-world debt. They also do not, merely because a player defaulted on an in-game loan, make unrelated valid purchased Diamonds, a valid one-time 30-Day VIP entitlement or valid Lifetime VIP ordinary collateral for that virtual debt. A separate purchase refund, reversal, chargeback, fraud finding or other independently valid payment rule remains governed by its own purchase terms.

A default, poor credit score, seized virtual collateral or bankruptcy state is not itself a Terms violation. Deliberately fabricating debt state, repayment state, collateral ownership, balances, holdings or other server state through a modified client, direct API/RPC use, authorization defect or other exploit is different.

Where a backend defect, duplicated job, stale state or other technical error incorrectly causes a debt, fee, seizure or bankruptcy consequence, CK-Labs should reconcile the affected state from reliable records and preserve any mandatory remedies. A technical defect is not converted into player misconduct merely because it occurred inside a risk-bearing gameplay system.

## 4. FX and Diamond-funded slots

FX accounts and currency prices are fictional TycoonX gameplay. They do not give the player ownership of real foreign currency or a right to exchange game balances for real currency.

The current game can require Diamonds to unlock an eligible additional FX-account slot. A valid Diamond spend is consideration for the in-game slot entitlement described by the current feature, not a promise that an FX trade will be profitable or that current FX rules will never change. If a technical error charges Diamonds without delivering the corresponding eligible slot, the affected transaction should be reconciled without using the incident as a reason to remove unrelated legitimate Diamonds, VIP or gameplay value.

The current Flutter `fxClearAccount(...)` path deletes from `new_bank_fx_accounts` directly, but the reviewed production DELETE policy requires both ownership by the authenticated user and an effectively zero holding balance. The separate server RPC also checks ownership and a near-zero balance. The earlier preliminary concern that the Flutter direct delete alone bypassed the zero-balance safeguard is therefore **not confirmed** by the current production policy and must not be carried forward as an open finding unless implementation changes.

## 5. Stocks, crypto and TycoonX-operated price movement

The canonical `buy_stock(...)` and `sell_stock(...)` wrappers reviewed in production bind the supplied player ID to `auth.uid()` and then perform wallet/position settlement through the legacy authority plus Finance V2 accounting. This is the intended settlement path for ordinary player trades.

TycoonX also intentionally operates automated stock-price movement. The reviewed server automation combines game-defined market sessions, player transaction demand, price-history momentum, mean reversion, volatility and randomness. Crypto prices have their own updater. These are simulation mechanics. A market price moving without a player's direct action is not, by itself, manipulation by that player.

Prohibited conduct can include knowingly fabricating holdings or market-history data, wash or circular trading through controlled accounts, using modified clients or direct APIs to bypass trading authority, deliberately tampering with price inputs or update functions, replay/race exploitation, external automation that bypasses game controls, exploit laundering and prohibited real-money trading.

A large gain, large loss, frequent trade, unusual timing, market swing or successful strategy alone is not sufficient proof of prohibited manipulation.

## 6. Authoritative evidence and enforcement

For serious economy correction or punitive enforcement, CK-Labs should use the strongest available transaction-specific evidence and reconcile records that can themselves be client-influenced or corrupted by a defect.

A client-authored row, convenience notification, stale screen, price-history row or database record is not automatically authoritative merely because it exists. Where a table or helper is writable through a currently over-broad authorization path, that source must be treated as potentially contaminated until correlated with settlement, wallet, Finance V2, authenticated actor and other server evidence.

A successful server call is not an absolute safe harbor for knowingly exploiting an obvious authorization or validation defect. Conversely, a server-accepted request, abnormal balance or suspicious record alone does not prove that the player knew of or intentionally exploited a defect.

Account compromise, ordinary retries, stale clients, outages, duplicated jobs and accidental one-off actions must be distinguished from knowing or repeated exploitation. Corrections should target directly attributable invalid state and downstream value where reasonably traceable, rather than unrelated legitimate purchases or unrelated legitimate wealth. Punitive sanctions should remain proportionate to reliable evidence and the seriousness/repetition of the conduct.

## 7. P0: direct `user_stocks` position authority

Production RLS currently permits a player to INSERT, UPDATE and DELETE their own `user_stocks` rows. The table validates positive quantity and non-negative average price, but the reviewed Finance V2 trigger mirrors a directly written row into the investment-basis shadow rather than rejecting non-settlement writes.

The reviewed canonical sale authority then reads `user_stocks` quantity and can credit the wallet for a valid sale. This creates a material server-authority gap: a modified/direct client may potentially create or increase a positive position without paying through the canonical buy settlement and later sell that fabricated position through the normal sale RPC.

**Engineering requirement:** player positions must be server-owned settlement state. Ordinary authenticated clients should not have generic INSERT/UPDATE/DELETE authority over holdings. Position mutations should occur only through audited buy/sell, IPO, corporate-action, migration, correction or other specifically authorized server transitions. Finance V2 must not convert an unauthorized direct position write into evidence of legitimate cost basis.

No exploit was executed during this audit.

## 8. P0: client-insertable `stock_transactions` affect automated demand

Production currently permits authenticated users to insert transaction rows for their own user ID. Constraints require a recognized type, positive quantity and non-negative price/total, but do not prove that wallet and position settlement actually occurred.

The reviewed `automate_stock_prices()` function reads recent `stock_transactions` buy/sell totals as a demand signal and also uses transaction totals for rolling volume. Consequently, a transaction-history row that did not come from a real settled trade can potentially contaminate market demand, volume, suspicion analysis and other downstream evidence.

**Engineering requirement:** trade-history creation must be tied to canonical server settlement. Generic client INSERT should be removed, or a hard server-side provenance/settlement guard must make fabricated rows impossible. Market automation and enforcement should prefer settlement-linked transaction records.

## 9. P0: publicly insertable `stock_price_history` affects momentum

The reviewed production policy named `Service role can insert price history` is currently granted to `public` with an unrestricted INSERT check. Anonymous/authenticated roles also have table INSERT privileges.

The stock automation reads recent price-history rows to calculate momentum and a historical reference used for 24-hour change. A client-created price-history row can therefore potentially contaminate market inputs and displayed/history metrics.

**Engineering requirement:** price history must be server-owned and written only by trusted pricing/corporate-action/migration paths. Revoke public/anonymous/authenticated insertion and keep the policy/role name aligned with its real scope.

## 10. P0: publicly executable price-mutating functions

The following reviewed SECURITY DEFINER functions currently expose EXECUTE to public/anonymous/authenticated roles and mutate market state without an internal trusted-caller check sufficient for ordinary player access:

- `force_update_stock(p_stock_id, new_price)`, which directly updates a stock price and writes price history;
- `bulk_update_crypto_prices(p_updates)`, which directly updates crypto prices and writes history;
- `automate_stock_prices()`, which changes stock prices and can change the market session; and
- `run_stock_price_automation_safe()`, which invokes stock-price automation.

`cleanup_stock_price_history()` is also broadly executable and deletes old price history, so it should be treated as a privileged maintenance helper even though its immediate gameplay impact is lower.

**Engineering requirement:** these functions should be trusted service/cron/admin paths only, with both narrow EXECUTE grants and an internal caller/authentication design that fails closed. Do not rely on an unguessable function name as access control.

## 11. P0: legacy bank rows remain client-writable economic state

Current production RLS permits users to UPDATE their own legacy `bank_accounts`, `bank_loans` and `bank_profiles` rows. The legacy account includes principal, daily interest rate and due time; the legacy loan includes principal, interest rate, due/status and repayment fields; the legacy bank profile includes credit score.

Current compatibility functions remain in use and can rely on those rows. In particular, legacy bank withdrawal/interest functions read the stored principal/rate/due state before crediting the user's wallet. The reviewed Finance V2 legacy triggers mirror state but do not make these fields immutable to generic client UPDATEs.

**Engineering requirement:** retained legacy economic state must be server-owned while any compatibility path remains callable. Remove generic client UPDATE authority over value-bearing fields or replace it with narrow server transitions. Migration/legacy support cannot be treated as outside the security boundary merely because the newer bank exists.

## 12. P0: debt-resolution helper is publicly executable

`new_bank_debt_recovery_resolve_note(p_note_id, p_user_id)` is currently a SECURITY DEFINER function executable by public/anonymous/authenticated roles. Its reviewed body updates unpaid installments and pledged collateral by `note_id` before the later credit-note UPDATE additionally checks `user_id`.

This is an authority/integrity problem. An internal debt-resolution helper must not be callable by an arbitrary player against a supplied note identifier.

**Engineering requirement:** restrict execution to trusted internal/service paths, bind note ownership before every mutation, and fail before any write when authorization is not established. Where feasible, remove externally supplied target user IDs from internal authority boundaries.

## 13. P0: internal bank ledger and private-finance helpers are publicly exposed

The read-only production review found additional SECURITY DEFINER helpers with public/anonymous/authenticated EXECUTE that take an arbitrary user ID or write authoritative-looking state:

- `new_bank_log_transaction(...)` can insert a bank transaction row for a supplied user without binding that user to the caller;
- `new_bank_get_transactions_internal(p_user_id, ...)` can read combined new/legacy bank history for a supplied user;
- `new_bank_get_quote_internal(p_user_id, ...)` can expose and process extensive finance state for a supplied user, including game wallet, bank/FX/savings/debt and credit-related information;
- `new_bank_get_collateral_candidates(p_user_id)` and `new_bank_get_professor_recovery_assets(p_user_id)` expose another player's game asset/value information when an identifier is supplied; and
- `new_bank_push_notification(p_user_id, ...)` can create official-looking bank notifications for a supplied player when the requested notification type is accepted.

This creates both integrity and privacy/game-intelligence risks. A bank transaction row or push notification created through such an exposed helper must not be treated as conclusive evidence of a genuine loan event, payment, default or seizure.

**Engineering requirement:** split user-facing wrappers from internal helpers. User-facing RPCs must derive the subject from `auth.uid()`. Internal arbitrary-user helpers must be service-only or otherwise strictly trusted. Ledger/event insertion must only be callable from authenticated server settlement paths.

## 14. P1: system processing helpers are too broadly callable

The reviewed ACLs also expose system-style functions such as `new_bank_process_credit_for_user(...)`, `new_bank_process_due_items()` and `new_bank_roll_forward_savings(...)` to public/anonymous/authenticated execution. Their operations are substantially driven by current server state and can be idempotent in places, but ordinary clients do not need authority to trigger system-wide or arbitrary-user processing.

**Engineering requirement:** move scheduled/internal processing to trusted service/cron execution and keep player-facing operations narrowly scoped to the authenticated player's action. This reduces race, notification-spam, evidence and future-regression risk.

Likewise, generic `new_bank_ensure_*` helpers that accept arbitrary player IDs should be reviewed and restricted or made safe by deriving the intended subject internally.

## 15. Current protected paths worth preserving

The review also confirmed several positive controls:

- canonical `buy_stock(...)` and `sell_stock(...)` wrappers bind `p_user_id` to `auth.uid()`;
- current `new_bank_debt_recovery_bankrupt_user(...)` execution is restricted to trusted roles;
- current `new_bank_seize_collateral(...)` execution is restricted to trusted roles;
- `new_bank_sell_debt_recovery_asset(...)` authenticates the caller and binds the active recovery case/note to that caller before sale;
- current FX-account DELETE RLS requires ownership and an effectively zero holding balance; and
- the server `new_bank_fx_clear_account(...)` RPC independently checks ownership and near-zero balance.

These controls should remain intact while the broader authorization surface is narrowed.

## 16. Privacy and evidence consequences

TycoonX can process gameplay financial history, virtual holdings, debt status, collateral selections, account identifiers and security/anti-abuse signals to operate the game, provide support, prevent fraud/abuse and resolve disputes as described by the Privacy Policy and applicable law.

That operational purpose does not justify exposing another player's private virtual-finance details to ordinary users through a broadly callable internal helper. Access should follow least privilege and the Privacy Policy must not be read as permission for unnecessary disclosure.

Anti-abuse analysis may combine reliable server evidence, but a client-writable position, client-insertable trade/history row or spoofable notification must be treated according to its evidentiary quality. Suspicion and containment can precede a final finding where needed for security, but irreversible correction or punitive enforcement should be based on reconciled evidence where reasonably possible.

## 17. Regression scenarios

The release/security regression set should include at least these cases:

1. A normal cash deposit settles once and appears in the authenticated player's records.
2. A normal savings deposit accrues under the then-current server rules without promising a permanent future rate.
3. A savings roll-forward retry does not duplicate posted interest.
4. A player cannot call an internal roll-forward helper to alter another player's savings state.
5. A legitimate credit quote reflects current server rules without promising future availability or a permanent rate.
6. A credit quote for player A cannot disclose player B's wallet, debt, savings, FX, collateral or credit state.
7. Taking a valid credit note creates the intended debt and installment schedule once.
8. Paying an installment reduces the correct note once.
9. A legitimate late payment can create the disclosed gameplay consequence without being treated as misconduct.
10. A legitimate default can enter debt recovery without being treated as a Terms violation.
11. A player cannot resolve another player's default by supplying that player's note ID to an internal helper.
12. A failed unauthorized debt-resolution attempt leaves installments, collateral and note state unchanged.
13. Collateral seizure is executed only through the trusted path and against the correct note/player.
14. A player in a valid recovery case can sell an eligible recovery asset only from their own case.
15. Ordinary in-game bankruptcy does not by itself revoke unrelated valid purchased Diamonds.
16. Ordinary in-game bankruptcy does not by itself revoke a valid one-time 30-Day VIP entitlement.
17. Ordinary in-game bankruptcy does not by itself revoke valid Lifetime VIP.
18. A duplicate scheduler run does not impose duplicate late fees, default or recovery consequences.
19. A backend defect that causes an incorrect fee/seizure is reconstructed and corrected from reliable records rather than classified as player cheating.
20. A compromised account case is separated from knowing debt-state manipulation where evidence supports compromise.
21. A normal FX account can be opened only according to current server eligibility.
22. An FX account with a material holding cannot be cleared through either the normal Flutter delete or the server RPC.
23. A zero-balance owned FX account can be cleared normally.
24. A valid Diamond FX-slot purchase charges the configured amount once and unlocks the eligible slot once.
25. A Diamond charge with a failed slot grant is reconciled as an entitlement failure rather than a promised investment loss.
26. FX trading obeys the server's current cooldown and settlement rules.
27. A current FX rate or historical chart is not represented as a guaranteed future rate.
28. A normal stock buy charges wallet value and creates/increases the settled position once.
29. A normal stock sale reduces a settled position and credits proceeds once.
30. A client cannot insert a positive `user_stocks` position and later monetize it through the canonical sell path.
31. A client cannot directly increase, replace or delete a server-owned position outside an authorized transition.
32. Finance V2 does not legitimize an unauthorized direct holding write merely by mirroring it.
33. A client cannot insert a fake buy/sell transaction that influences automated demand or volume without real settlement.
34. A client cannot insert arbitrary price-history rows that influence momentum or 24-hour statistics.
35. `force_update_stock(...)` rejects ordinary anonymous/authenticated callers.
36. `bulk_update_crypto_prices(...)` rejects ordinary anonymous/authenticated callers.
37. direct stock automation functions reject ordinary anonymous/authenticated callers.
38. price-history cleanup is limited to trusted maintenance execution.
39. legitimate TycoonX-operated automated market movement is not classified as player botting.
40. a large legitimate stock/crypto gain or loss is not alone treated as evidence of manipulation.
41. controlled-account wash/circular trading can be investigated when reliable evidence supports coordination and manipulative purpose.
42. a stale client quote does not override authoritative completed settlement.
43. a retry/race that the player encounters once is distinguished from intentional repeated exploitation.
44. an arbitrary caller cannot create a bank transaction record for another player.
45. an arbitrary caller cannot read another player's bank transaction history through an internal helper.
46. an arbitrary caller cannot query another player's private credit/asset-value state through internal helpers.
47. an arbitrary caller cannot send another player an official-looking default/seizure notification through an internal helper.
48. a convenience push notification alone cannot prove a genuine default or seizure.
49. a service/provider outage does not automatically make an affected failed/retried transaction abuse.
50. a correction of fabricated holdings removes the directly attributable invalid position/value and traceable downstream benefit without automatically removing unrelated legitimate paid value.
51. a serious/repeated intentional exploit may lead to proportionate restrictions or suspension under the canonical Terms.
52. mandatory consumer conformity, notice, change, termination, reduction/refund and other non-waivable rights remain available where their legal conditions are met.

## 18. German/EU mandatory-rights boundary

The canonical legal treatment must remain compatible with mandatory German/EU consumer law. In particular:

- BGB § 307 means standard terms must not unreasonably disadvantage the consumer and lack of clarity/comprehensibility can itself contribute to invalidity;
- BGB § 327d requires a covered digital product to be provided free of the relevant product and legal defects;
- BGB § 327i preserves statutory remedies for qualifying defects, including cure and, where the requirements are met, termination or price reduction and damages/expense reimbursement; and
- for qualifying continuous digital-product contracts, BGB § 327r can impose conditions on changes beyond what is necessary to maintain conformity, including a contractual change basis and valid reason, no additional consumer cost, clear information, and for certain material access/usability impairments advance durable-medium information plus statutory termination rights unless an exception applies.

Therefore the reservation to rebalance fictional rates, prices, cooldowns and formulas cannot be written as a waiver of mandatory change, conformity or remedy rights.

## 19. Release gate

This gameplay cluster is legally ready to mark mapped only when:

- the canonical Terms route and all 25 localized Terms routes display the synchronized banking/FX/stock/crypto clarification;
- wording clearly identifies these systems as fictional simulation mechanics rather than real banking/investment products;
- the wording distinguishes ordinary default/losses from misconduct, and intended TycoonX automation from prohibited external manipulation;
- Diamond FX-slot spending is distinguished from an investment return promise;
- ordinary gameplay debt is not used as an automatic basis to confiscate unrelated valid paid entitlements;
- the engineering findings above remain visible until technically remediated and verified;
- evidence quality, account compromise, outage and proportional correction boundaries remain explicit; and
- mandatory consumer rights remain intact.

Completion of this legal gate does **not** certify that the open P0/P1 backend authority issues are fixed. Legal wording cannot substitute for server-side authorization.
