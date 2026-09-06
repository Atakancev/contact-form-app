# TycoonX CRA Germany Coordinator Cutover 2026 Gate

Last reviewed: September 6, 2026

This is a narrow September 2026 cutover supplement for CK-Labs. It does **not** duplicate or replace the substantive CRA reporting rules already maintained in `TYCOONX_EU_CYBER_RESILIENCE_ACT_2026_REPORTING_GATE.md`, `TYCOONX_CRA_SRP_ROUTING_USER_NOTIFICATION_RELEASE_GATE.md`, or `TYCOONX_CRA_SENSITIVE_NOTIFICATION_DISSEMINATION_2026_881_GATE.md`.

Its purpose is to prevent a routing or operational mistake during the final days before the Cyber Resilience Act Article 14 reporting obligations become applicable on **September 11, 2026**.

## Why this supplement exists

ENISA updated its CRA Single Reporting Platform materials on **September 4, 2026** and published a current list of CSIRTs designated as coordinators. The current list identifies **Germany** with **CERT-Bund / the German Federal Office for Information Security (BSI)** contact pages.

At the same time, the current ENISA SRP FAQ contains an internal legal cross-reference inconsistency:

- its general routing answer correctly says the relevant national CSIRT is determined under **CRA Article 14(7)**;
- its answer about the September 11 platform launch currently contains a reference to **Article 15(7)**; but
- Regulation (EU) 2024/2847 itself places mandatory manufacturer routing in **Article 14(7)**. Article 15 governs voluntary reporting and currently contains paragraphs 1 through 5, not an Article 15(7).

For TycoonX operations, the Regulation controls the legal routing analysis. The inconsistent FAQ cross-reference must not be copied into code, incident runbooks, legal notices, support copy, or an SRP filing workflow.

## P0 before September 11, 2026

### 1. Use Article 14(7) as the mandatory-routing authority

For a mandatory actively exploited vulnerability or severe-incident notification:

- use **CRA Article 14(7)** for the coordinator-routing analysis;
- do not implement or document `Article 15(7)` as the legal basis for mandatory routing;
- treat ENISA's FAQ as useful operational guidance, while resolving any conflict against the operative Regulation and later binding/current official materials;
- preserve a dated note when an official guidance page contains a material inconsistency rather than silently choosing the interpretation that is commercially or operationally easier; and
- do not delay a mandatory filing merely because a non-binding guidance cross-reference is imperfect when the Regulation and current routing list provide a workable route.

The existing Article 14(7) fallback logic in `TYCOONX_CRA_SRP_ROUTING_USER_NOTIFICATION_RELEASE_GATE.md` remains authoritative for the internal TycoonX runbook.

### 2. Do not select Germany from a postal address alone

CRA Article 14(7) says the manufacturer's main establishment in the Union is primarily the Member State where decisions related to the cybersecurity of its products with digital elements are predominantly taken.

Therefore:

- do not select Germany merely because a controller, trader, legal notice, tax, payment, App Store, Google Play, Xsolla, hosting, or correspondence address is in Germany;
- do not select another Member State merely because a cloud region, data centre, store entity, payment provider, contractor, or player population is located there;
- document where TycoonX cybersecurity decisions are predominantly taken and apply the statutory fallback only if that Member State cannot be determined; and
- keep the route evidence separate from GDPR controller establishment, VAT establishment, platform seller/trader status, and payment-provider merchant-of-record analysis.

If the documented Article 14(7) analysis resolves the TycoonX manufacturer's main establishment to **Germany**, ENISA's coordinator list updated September 4, 2026 currently points to **CERT-Bund / BSI**. Re-verify that listing immediately before any real filing because coordinator details and operational contact routes can change.

### 3. Preserve the current Germany coordinator evidence

For a Germany-routed filing, preserve with the incident/release evidence:

- the ENISA `List of CSIRTs Designated as Coordinators` page title;
- its visible **Updated: 04/09/2026** date;
- the Germany entry linking to the BSI CERT-Bund German and English pages;
- the retrieval date used by CK-Labs;
- the Article 14(7) routing conclusion and why it applies to TycoonX; and
- the current official SRP route actually used when the notification is submitted.

Do not hard-code an email address or old bookmark as permanent legal authority. Where direct CSIRT contact is needed during a platform outage, obtain the then-current contact route from ENISA/BSI official sources and preserve what was used.

### 4. The public SRP URL is not a guessed endpoint

ENISA's FAQ updated September 4 currently says the dedicated public SRP URL will be published on the ENISA SRP page before the platform goes live. It says the platform is scheduled to be operational from **September 11, 2026**.

Until the real public endpoint is published and verified:

- do not invent an SRP URL;
- do not bookmark a staging, demonstration, vendor, search-result, or lookalike domain and treat it as production;
- do not send vulnerability, player, security, authentication, payment, or entitlement data to an unverified endpoint;
- keep EU Login and MFA readiness separate from proof that the production SRP endpoint is live; and
- immediately before a real notification, navigate from current ENISA official material or another verified official route rather than relying on an old copied link.

### 5. SRP outage contact does not replace the SRP filing

The existing CRA gate already preserves ENISA's outage guidance. This supplement adds the Germany-specific operational mapping without changing that rule.

If the documented Article 14(7) route is Germany and the SRP is temporarily unavailable:

- preserve evidence of the SRP outage;
- keep the original TycoonX awareness timestamp and statutory deadline calculation unchanged;
- where immediate communication is necessary, use a current verified official CERT-Bund/BSI channel;
- do not treat that direct contact as the completed CRA SRP notification; and
- submit through the SRP as soon as the platform becomes available again, preserving both records.

A provider outage, SRP outage, failed login, expired session, MFA issue, or browser failure is not permission to fabricate a later awareness timestamp.

### 6. Keep reporting state separate from player enforcement and paid entitlements

A CRA notification, a decision to contact CERT-Bund/BSI, an SRP registration problem, a coordinator-routing question, or a security investigation is **not itself** proof that a TycoonX player hacked the game, committed fraud, caused a chargeback, abused an entitlement, or compromised an account.

Do not mutate paid value merely because a CRA workflow exists:

- purchased **Diamonds** remain governed by their transaction and entitlement records;
- **30-Day VIP** remains a one-time, non-renewing 30-day entitlement and is not restarted, shortened, or canceled merely because of a CRA report; and
- **Lifetime VIP** remains a one-time promotional entitlement sold only during selected genuine sales windows and is not revoked merely because a security notification was filed.

A separately supported exploit, fraud, compromised-payment, refund, reversal, duplicate grant, or account-security finding can still be handled under the applicable TycoonX rules. Keep that evidence and legal basis separate from the CRA filing itself.

### 7. Minimum cutover evidence

Before treating CRA reporting as operationally ready, retain dated evidence showing that:

1. the current TycoonX Article 14(7) main-establishment analysis has an owner and a documented result;
2. the runbook cites **Article 14(7)**, not the erroneous `Article 15(7)` FAQ cross-reference, for mandatory routing;
3. the ENISA coordinator list dated September 4, 2026 was checked;
4. if Germany is the resolved route, the current coordinator evidence points to **CERT-Bund / BSI**;
5. the production SRP URL was obtained from a verified current official source once published;
6. at least one responsible operator has usable EU Login + MFA before a real incident consumes the 24-hour window;
7. the SRP-outage process preserves the original awareness timestamp and later completes the SRP filing; and
8. CRA incident/reporting state cannot directly grant, revoke, subtract, restart, or otherwise mutate Diamonds, 30-Day VIP, or Lifetime VIP.

## Release blockers

Do not declare the CRA cutover path ready if any of the following is true:

- a mandatory-routing runbook or implementation says **Article 15(7)** is the applicable CRA routing rule;
- Germany is selected solely from a postal/controller/trader/payment/provider address without the Article 14(7) cybersecurity-decision analysis;
- the Germany coordinator is hard-coded without dated ENISA/BSI evidence;
- an unofficial or guessed SRP endpoint can receive real incident data;
- direct CERT-Bund/BSI contact during an SRP outage is treated as eliminating the later SRP filing requirement;
- an SRP outage can reset or postpone the recorded legal awareness timestamp;
- a CRA filing automatically suspends a player or mutates paid entitlements; or
- current official guidance changes materially and the runbook continues using a stale route without review.

## Player-facing legal and localization impact

This cutover supplement changes no player-facing contractual meaning. It does not change the TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, Community Standards, product definitions, prices, refund rights, withdrawal rights, conformity/update rights, or entitlement rules.

Accordingly, this checkpoint does **not** reopen the completed 25-locale localization queue. If a future CRA implementation change materially changes canonical player-facing Privacy, security-notice, Terms, Purchases, or Community wording, reopen only the affected document type and resynchronize all 25 locales in the required order.

## Official sources checked September 6, 2026

- Regulation (EU) 2024/2847, Articles 14-16: https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng
- ENISA CRA Single Reporting Platform FAQ, updated September 4, 2026: https://www.enisa.europa.eu/topics/product-security/single-reporting-platform-srp/frequently-asked-questions
- ENISA List of CSIRTs Designated as Coordinators, updated September 4, 2026: https://www.enisa.europa.eu/topics/product-security/single-reporting-platform-srp/list-of-csirts-designated-as-coordinators
- BSI CERT-Bund: https://www.bsi.bund.de/CERT-Bund/
- BSI CERT-Bund English: https://www.bsi.bund.de/EN/CERT-Bund/

## Manual regression command

Run locally without GitHub Actions or paid services:

```bash
node scripts/verify-tycoonx-cra-germany-coordinator-cutover.mjs
```
