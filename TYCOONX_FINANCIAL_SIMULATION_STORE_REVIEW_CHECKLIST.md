# TycoonX Financial-Simulation Store & Regulatory-Perimeter Checklist

Last reviewed: September 3, 2026

TycoonX is an entertainment and economic simulation game. Its in-game money, Diamonds, shares, companies, property, products, fictional loans, fictional bank balances, fictional stocks, fictional crypto-style assets, rewards, and other game assets are game mechanics. Under the current intended design, they are not real bank deposits, securities, investments, legal tender, cryptocurrency, stored-value money, claims against CK-Labs, or promises of real-world financial return.

This checklist prevents a fictional business/economy simulation from drifting, through code, marketing, payment design, player trading, or a future feature, into a materially different regulated financial, crypto-asset, e-money/payment, or gambling product without a fresh legal and platform review.

It is an operational release gate. It does not replace a feature-specific legal analysis if the product design changes.

## 1. Current-design invariant

The current TycoonX legal and product position should remain true in production:

- [ ] TycoonX game money, fictional stocks, fictional crypto-style assets, fictional bank balances, fictional loans, and fictional investment returns exist only as simulation mechanics.
- [ ] Purchased Diamonds are virtual in-game currency for use inside TycoonX and are not redeemable from CK-Labs for cash except where mandatory law requires otherwise.
- [ ] Diamonds do not represent a deposit, a cash balance held for the player, an interest-bearing account, an investment product, a cryptocurrency, or a promise by CK-Labs to repay a monetary amount.
- [ ] TycoonX does not connect a player to a real broker, securities exchange, cryptocurrency exchange, bank account, investment account, payment account, lending institution, or money-transfer service merely because the game simulates those concepts.
- [ ] TycoonX does not promise that gameplay profit, ROI, interest, stock performance, crypto-style performance, company value, or virtual wealth can produce real-world financial returns.
- [ ] No in-game asset is marketed as a safe place to store real money, an investment, a savings product, or a way to earn passive real-world income.
- [ ] A game mechanic using the words `bank`, `loan`, `stock`, `share`, `crypto`, `interest`, `investment`, `market`, `portfolio`, `profit`, or `dividend` is clearly contextualized as part of the TycoonX simulation where a reasonable player could otherwise misunderstand it as a real financial service.

A vocabulary match alone does not determine regulatory status. The actual functionality, economic rights, transferability, acceptance, redemption, technical architecture, and marketing matter.

## 2. Apple App Store positioning

Apple's current App Review Guidelines state that apps used for financial trading, investing, or money management should be submitted by the financial institution performing those services and must have the necessary licensing and permissions in the places where they are offered.

TycoonX should remain clearly outside that real-finance presentation unless CK-Labs intentionally changes the product and completes a fresh review.

- [ ] Keep App Store metadata, screenshots, previews, onboarding, support text, purchase copy, and App Review Notes consistent with TycoonX being a fictional business/economic simulation.
- [ ] If showing stock, crypto, company, loan, bank, investment, trading, or portfolio-style screens, avoid wording that implies CK-Labs executes real trades, holds real deposits, offers real loans, manages real money, provides regulated investment services, or guarantees real financial returns.
- [ ] Do not describe fictional TycoonX assets as real securities, real investments, bank deposits, cryptocurrency, cash equivalents, or withdrawable balances.
- [ ] Do not promise that in-game profit, ROI, stock performance, interest, or virtual wealth has real-world monetary value.
- [ ] Keep the public legal statement that virtual assets cannot be redeemed from CK-Labs for cash except where mandatory law requires otherwise.
- [ ] In App Review Notes, explain that financial-looking mechanics are game simulation systems using fictional game data and do not connect users to a broker, exchange, bank account, investment account, or real-world lending service while that remains factually true.
- [ ] If a feature ever does connect to a real financial service, do not hide that fact behind game terminology; stop and re-audit Apple licensing, developer-identity, local-law, payment, privacy, and disclosure requirements before release.

Apple's separate real-money gaming rules must also be rechecked before introducing any real-value prize or gambling loop. In particular, do not use In-App Purchase to buy credit or currency for use with real-money gaming.

## 3. Google Play Financial features declaration

Google requires developers to complete the Financial features declaration in Play Console. Google's current declaration categories include, among other things, banking and loans, mobile payments and digital wallets, money transfer, rewards/points, cryptocurrency wallets/exchanges, tokenized digital assets, stock trading and portfolio management, crowdfunding, credit services, financial advice, insurance, and `Other`. Google also provides an option to declare that the app does not provide financial features.

For TycoonX:

- [ ] Complete or recheck the TycoonX Financial features declaration in Play Console based on the actual shipped behavior.
- [ ] Do not decide the declaration solely from game vocabulary such as `stocks`, `bank`, `loan`, `crypto`, or `portfolio`.
- [ ] Preserve evidence showing that the current TycoonX mechanics are self-contained fictional simulation systems if CK-Labs selects that TycoonX does not provide real financial features.
- [ ] Make sure the Play Store listing and screenshots do not contradict the declaration by implying real investing, real crypto trading, real money management, real lending, or guaranteed earnings when the app is only a game.
- [ ] If Google review treats a simulation feature as falling within a declaration category, respond with accurate feature evidence rather than selecting inaccurate categories simply to clear review.
- [ ] Re-open this gate before adding real wallets, money transfer, real stock/crypto trading, loan facilitation, real financial advice, tokenized assets, or other functionality listed in Google's current declaration categories.

The declaration is a platform-policy classification. It does not by itself decide whether CK-Labs is legally a bank, payment institution, investment firm, crypto-asset service provider, lender, or gambling operator.

## 4. German/EU regulatory-perimeter trigger matrix

### 4.1 Closed-loop game value vs e-money/payment services

German ZAG § 1 defines e-money around an electronically stored monetary value that is a claim against the issuer, is issued on receipt of funds for payment transactions, and is accepted by natural or legal persons other than the issuer, subject to statutory exclusions.

The current TycoonX design should not be expanded in a way that assumes the existing game-currency wording automatically resolves that test.

Trigger a fresh German payment-services/e-money analysis before release if any future design does one or more of the following:

- [ ] promises the holder repayment or redemption of a Diamond or game-money balance in money;
- [ ] allows game value to be used to pay real-world third-party merchants, creators, service providers, or legal persons for goods/services outside the TycoonX simulation;
- [ ] turns a TycoonX balance into a general-purpose stored-value wallet;
- [ ] allows users to load money primarily for later real-world payment rather than to buy/consume TycoonX digital content;
- [ ] enables external cash withdrawal, bank transfer, card payout, gift-card redemption, or equivalent monetary settlement;
- [ ] enables a third-party marketplace in which TycoonX itself settles real monetary claims between players; or
- [ ] materially changes who accepts the value, what claim the holder has against CK-Labs, or what the value can buy outside the game.

Do not assume that calling value `Diamonds`, `credits`, `coins`, `points`, or `game currency` prevents financial regulation if the underlying functionality changes.

Conversely, ordinary server-side bookkeeping for closed-loop game value does not become a bank account merely because TycoonX displays a numerical balance.

### 4.2 MiCA / blockchain / crypto-assets

Under Regulation (EU) 2023/1114 (MiCA), a `crypto-asset` is a digital representation of value or a right that can be transferred and stored electronically using distributed-ledger technology or similar technology.

The current fictional TycoonX `crypto` market must remain clearly a simulation unless CK-Labs deliberately introduces actual token technology.

- [ ] Do not market a purely simulated database asset as a real cryptocurrency.
- [ ] Trigger a fresh MiCA, financial-instrument, AML, tax, custody, transfer, platform-policy, and consumer review before adding blockchain/DLT or similar token technology, external wallet addresses, on-chain transfers, token issuance, crypto custody, token exchange, token redemption, or externally transferable token ownership.
- [ ] Do not assume that a token is outside regulation merely because it has gameplay utility, is called a utility token, or is integrated into a game.
- [ ] Do not connect Diamonds or Lifetime VIP to a token, NFT, transferable on-chain receipt, or tokenized resale mechanism without a new review.

A fictional price chart labelled `crypto` inside the TycoonX simulation is not a reason to advertise TycoonX as a cryptocurrency investment app.

### 4.3 Real financial trading, lending, deposits, or advice

Stop and perform a dedicated licensing/perimeter review before TycoonX or CK-Labs:

- [ ] executes, routes, facilitates, or recommends real securities or crypto trades;
- [ ] connects users to a real brokerage or exchange account;
- [ ] takes repayable real-money deposits or markets a balance as protected savings;
- [ ] lends real money or arranges/facilitates real consumer credit;
- [ ] provides personalized recommendations about real investments, securities, crypto-assets, loans, or a user's real financial situation;
- [ ] promises real yield, interest, dividends, profit sharing, or investment return to purchasers; or
- [ ] pools user money or assets for a real investment purpose.

The current TycoonX simulated loan interest, company dividends, stock prices, crypto-style prices, bank interest, and similar mechanics must stay fictional and non-redeemable under the current legal framework.

### 4.4 Gambling / chance-mechanic trigger

The German GGL explains the GlüStV 2021 gambling concept as a game in which payment is required to acquire a chance to win and the decision about the win depends wholly or predominantly on chance. Public gambling generally requires the applicable permission.

TycoonX must not assume that a feature becomes legally harmless merely because it appears inside a business simulation or uses Diamonds instead of euros.

Before introducing or materially changing a paid chance mechanic:

- [ ] check whether money or purchased value is required to obtain a chance to win;
- [ ] check how strongly the result depends on chance;
- [ ] check whether the prize can be sold, transferred, redeemed, cashed out, or otherwise obtain real economic value;
- [ ] check whether the mechanic is accessible to a larger/public group and which jurisdictions it targets;
- [ ] recheck Apple and Google gambling, randomized-item, age-rating, and purchase rules; and
- [ ] run the dedicated randomized-purchase/Xsolla gate where applicable.

No cash-out is an important risk-control boundary, but it is not a universal declaration that every possible paid randomized design is legally unregulated. Feature-specific review remains required.

## 5. Product-specific commercial safeguards

### Diamonds

- [ ] Diamonds remain virtual in-game currency, not a real currency, bank balance, cryptocurrency, security, deposit, or investment.
- [ ] Purchasing Diamonds does not entitle the player to interest, yield, appreciation, dividends, or cash redemption from CK-Labs except where mandatory law requires a remedy.
- [ ] Regional Diamond prices, bundle sizes, promotions, and later price changes remain ordinary digital-content pricing under the Purchases & Refunds Policy, not an exchange-rate or investment-return promise.
- [ ] A refund, reversal, chargeback, duplicate correction, or invalid-payment correction affects the corresponding entitlement/value under the existing purchase rules; it does not create a debt investment or a promised financial return.

### One-time 30-Day VIP

- [ ] 30-Day VIP remains a one-time, non-renewing 30-day digital entitlement unless a future product is separately and clearly designed as recurring.
- [ ] Do not describe VIP as an investment, membership share, yield-bearing asset, or financial product.
- [ ] VIP benefits may support gameplay but do not create a claim to real-world financial performance, guaranteed in-game profits, or cash value.

### Lifetime VIP

- [ ] Lifetime VIP remains a one-time promotional digital entitlement offered only during selected genuine sales windows.
- [ ] It may be withdrawn from future sale and may never return; previous availability does not create an expectation of continuous availability.
- [ ] Different genuine sales windows may use different prices under the existing Purchases & Refunds rules.
- [ ] Do not describe Lifetime VIP as an investment, permanent asset with resale value, transferable financial instrument, store of value, or product expected to appreciate.
- [ ] Do not create an official cash resale, buyback, redemption, dividend, or secondary-market mechanism for Lifetime VIP without a fresh legal review.

## 6. P0 no-cash-out / no-real-value loop

- [ ] Do not create a path where purchased Diamonds or other paid TycoonX value can be converted into cash, transferable real-world monetary value, gift cards, external crypto-assets, or a withdrawable prize without a separate legal/platform review.
- [ ] Do not allow fictional stock, crypto, casino, lottery, race, betting, or chance-style mechanics to become a hidden real-money loop through cash redemption or transferable economic value.
- [ ] Do not let an unofficial player marketplace become an official CK-Labs-supported cash-out system through APIs, escrow, price support, advertising, or transaction settlement without a new review.
- [ ] Do not guarantee exchangeability between Diamonds and any real currency, stablecoin, crypto-asset, gift card, or third-party credit.
- [ ] Do not market third-party black-market prices for TycoonX accounts/items as official value.
- [ ] If any reward ever becomes redeemable outside TycoonX, stop relying on the current `fictional simulation only` position and perform a new gambling, financial-services, payment/e-money, consumer, tax, AML, Apple, Google, and Xsolla review before launch.

## 7. Marketing and UI wording gate

The public Terms contain the detailed legal distinction. Store metadata and product UI should use concise wording consistent with it rather than flooding users with legal text.

Recommended concepts to preserve where confusion is plausible:

- TycoonX is a business/economic simulation game.
- Game money, Diamonds, shares, companies, fictional stocks, fictional crypto-style assets, loans, and other game assets exist within the TycoonX simulation.
- They are not real-world securities, investments, bank deposits, cryptocurrency, payment accounts, or guaranteed cash value.
- TycoonX does not promise real financial returns.

High-risk wording that requires review before use includes claims such as:

- `invest real money`;
- `earn guaranteed returns`;
- `cash out your profits`;
- `withdraw your Diamonds`;
- `savings account` or `deposit account` where a user could understand it as a real CK-Labs financial account;
- `buy real shares`;
- `trade real crypto`;
- `passive income` or `APY` tied to a paid TycoonX product; or
- any suggestion that buying VIP or Diamonds is an investment opportunity.

Do not overload the App Store, Play Store, or checkout description with legal text. The dedicated Terms, Privacy Policy, Purchases & Refunds Policy, Community Standards, Custom EULA where applicable, and German legal notice remain the detailed sources.

## 8. Payment-channel boundary

Apple App Store, Google Play, and the official TycoonX web shop powered by Xsolla are payment channels for TycoonX digital products. Their involvement does not convert the purchased TycoonX item into a banking or investment product.

- [ ] Keep purchase confirmation, entitlement delivery, refunds, chargebacks, VAT/tax handling, failed/reversed payments, fraud screening, and regional availability assigned to CK-Labs and the applicable payment/platform provider according to the canonical Purchases & Refunds Policy.
- [ ] Do not describe Apple, Google, or Xsolla payment processing as CK-Labs holding a player deposit account.
- [ ] A pending payment is not a TycoonX investment balance and does not generate interest or return.
- [ ] A refund or chargeback is transaction reconciliation, not redemption of an appreciating game asset.
- [ ] A provider outage may delay a purchase or entitlement but does not turn an in-game balance into a financial claim beyond the rights the player already has under contract and mandatory law.

## 9. Security, exploits, and account compromise

Financial-looking game UI can make payment/account incidents easy to misdescribe. Keep the categories separate.

- [ ] An exploit creating fictional game money or game shares is an economy-integrity incident; it is not automatically a real securities or banking transaction.
- [ ] A stolen account spending Diamonds does not automatically prove that the legitimate account owner committed payment fraud.
- [ ] A chargeback does not automatically prove hacking, and a hacking report does not automatically prove a chargeback is valid.
- [ ] Correct duplicated, hacked, exploited, or invalid in-game value using authoritative server/store/payment records and the existing Terms/Purchases rules while preserving mandatory consumer remedies.
- [ ] Do not publish screenshots or support copy that accidentally describes a TycoonX fictional balance as a real-world bank balance or investment account.

## 10. Release evidence pack

Keep dated evidence sufficient to show what TycoonX actually is, not merely what the Terms say it is.

- [ ] Current Apple App Review Notes explaining the fictional financial-simulation mechanics.
- [ ] Current Google Play Financial features declaration and the evidence used to select its categories.
- [ ] Store-listing screenshots showing that financial-looking mechanics are presented as game/simulation features rather than real financial services.
- [ ] A short architecture note confirming whether any game asset is on-chain, externally transferable, cash-redeemable, third-party accepted, or linked to a real brokerage/bank/wallet.
- [ ] A product-flow recording showing that Diamonds are purchased for in-game use and do not expose a CK-Labs cash-out route.
- [ ] A list of every feature labelled bank, loan, stock, share, crypto, investment, casino, lottery, betting, portfolio, interest, dividend, or similar, with a `fictional simulation / separate review required` classification.
- [ ] Evidence that 30-Day VIP is one-time/non-renewing and Lifetime VIP remains a limited-window promotional entitlement with no cash-resale or investment promise.
- [ ] If a paid chance mechanic exists, the current feature-specific legal/platform review and randomized-purchase gate result.

Do not collect unnecessary player financial data merely to prove this checklist.

## 11. Automatic re-review triggers

Re-open this checklist before release if any of the following becomes true:

- real-world cash-out or redemption is introduced;
- a player can buy or sell TycoonX value for real money through an official CK-Labs mechanism;
- third-party real-world merchants accept TycoonX value;
- CK-Labs holds value primarily for later payment to third parties;
- blockchain, DLT, NFTs, tokens, external wallet addresses, or on-chain transfers are added;
- real brokerage, exchange, banking, lending, financial-advice, money-transfer, or wallet functionality is added;
- a paid chance mechanic gains a cash, transferable, or externally valuable prize;
- a real-money secondary market, buyback, escrow, or payout mechanism is supported;
- TycoonX marketing begins promising real profit, yield, interest, appreciation, cash income, or investment return; or
- Apple, Google Play, Xsolla, German/EU law, or the underlying TycoonX architecture materially changes the relevant classification.

A release must not rely on an old `simulation only` classification after the underlying economic functionality changes.

## 12. Sources checked on September 3, 2026

Primary references used for this gate:

- Apple App Review Guidelines, current version last updated June 8, 2026, including Guideline 3.1.1(viii) for real financial trading/investing/money-management apps and the real-money gaming rules in Guideline 5.3.
- Google Play Console Help, `Provide information for the Financial features declaration`, current page listing the financial-feature categories and the `My app doesn't provide any financial features` declaration option.
- German Payment Services Supervision Act (Zahlungsdiensteaufsichtsgesetz, ZAG) § 1, including the statutory e-money definition.
- Regulation (EU) 2023/1114 (MiCA), Article 3 definition of `crypto-asset`.
- Gemeinsame Glücksspielbehörde der Länder (GGL) FAQ on gambling types, updated September 12, 2025, including the GlüStV 2021 gambling definition and permit context.

If any cited platform rule or law changes, update this checklist before relying on it for a new release.