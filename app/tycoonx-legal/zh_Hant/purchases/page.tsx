const sections = [
  {
    title: '產品類型',
    body: [
      'Diamonds 是 TycoonX 中使用的虛擬遊戲貨幣。已購買的 Diamonds 僅供在 TycoonX 內使用，除非強制性法律另有要求，不能向 CK-Labs 兌換現金。已購買的 Diamonds 不會僅因時間經過而失效。',
      '在 Apple 平台上，已購買的 Diamonds 預計作為可消耗型 In-App Purchase 提供；在 Google Play 上，它們屬於應用程式內數位商品，並在平台規則要求時使用適用的 Google Play 結算系統；在 TycoonX 官方網頁商店中，Diamond 套餐可透過 Xsolla 結帳購買。',
      '如果相關付款被退款、沖正、拒付、重複、認定為詐欺、因技術錯誤產生或因其他原因無效，CK-Labs 可以更正或撤銷對應的 Diamond 購買。透過促銷、贈送、活動、補償、測試、審核或免費方式取得的 Diamonds，可在法律及平台規則允許的範圍內適用另行清楚揭露的條件。',
      '30-Day VIP 是一次性、不自動續費的數位權益，除非購買介面明確另有說明。它自該權益在購買者的 TycoonX 帳戶中啟用或可用之日起連續有效 30 天，不會自動續費，也不會產生循環扣款義務。',
      '在 Apple 平台上，30-Day VIP 預計使用 Apple 認可的非自動續費權益架構；在 Google Play 上，如產品被宣傳為一次性 30-Day VIP，就不得暗中形成重複扣款。如果允許日後再次購買 30-Day VIP，產品設定也不得在前一權益已提供或到期後永久阻止下一次合法購買。',
      'Lifetime VIP 是一次性高級權益，僅會在 CK-Labs 選定的限時促銷銷售期間提供，並非長期或持續販售的產品。CK-Labs 可在遵守適用法律及已向消費者提出的具體有效報價前提下，開始、結束、縮短、延長或停止真實銷售期間，也可以選擇日後不再提供 Lifetime VIP。',
      'Lifetime VIP 過去曾經販售，不會產生其必須持續販售、日後一定回歸或按相同價格回歸的權利或期待。不同的真實銷售期間可以採用不同價格，之後較低的價格不會自動產生對較早已完成購買的價格匹配權。任何倒數、截止日期及限時說明都必須反映真實報價，不得誤導。',
      '銷售期間結束只影響未來是否仍能購買，不會因此自動取消或縮短已有效的 Lifetime VIP。銷售結束前僅僅開啟商品頁面、加入購物車、開始結帳或進入待處理付款狀態，並不會自動保留 Lifetime VIP 或舊價格。如果 Apple、Google、Xsolla 或其他授權服務商之後依其規則確認一筆有效交易，CK-Labs 將依該交易對應的報價及強制性法律處理。',
      '在 Apple 平台上，Lifetime VIP 預計作為非消耗型 In-App Purchase 提供；在 Google Play 上，預計作為與購買者 Google 帳戶連結的一次性非消耗型商品提供；在 TycoonX 官方網頁商店中，可透過 Xsolla 作為一次性網頁購買提供。法律、平台或付款紀錄要求時，有效 Lifetime VIP 可在驗證後恢復或重新連結。',
      '「Lifetime」表示購買帳戶在 TycoonX 服務商業營運期間所享有的權益，只要 TycoonX 仍在營運並提供服務。它不承諾 TycoonX 永久存在。該「商業營運期」的含義，以及目前銷售屬於限時銷售，必須在購買介面或緊接購買前清楚揭露。',
      '如果停止服務、缺陷、未提供服務或重大變更依法產生退款、減價、解除契約或其他強制性消費者救濟，這些權利仍繼續適用。',
    ],
  },
  {
    title: 'Apple App Store 購買',
    body: [
      '透過 Apple In-App Purchase 完成的購買由 Apple 處理付款並提供 App Store 交易紀錄。Apple 負責其 App Store 購買的消費者退款申請流程。CK-Labs 可以調查交付及權益問題，但無法控制 Apple 的退款決定。',
      'Apple 仍將交易顯示為待處理時，不會產生 TycoonX 付費權益，直到 Apple 回報一筆有效完成的交易。若 Apple 之後依其規則完成一筆原先待處理、且確實屬於原報價的有效交易，即使促銷期間已結束，TycoonX 也可以在確認時提供相應權益。',
      '如果 Apple 對交易退款、撤銷、沖正或認定無效，CK-Labs 可以撤銷或更正對應 TycoonX 權益或虛擬價值，避免使用者同時保留退款金額與已失效購買的價值。',
    ],
  },
  {
    title: 'Google Play 購買',
    body: [
      'Google 透過適用的 Google Play 結算安排處理交易，並提供用於驗證購買的訂單或交易資訊。Google Play 政策要求應用程式內數位商品或服務使用 Google Play Billing 時，除非適用的地區計畫、平台規則或法律允許其他方式，TycoonX 將使用該結算系統。',
      'Lifetime VIP 預計作為一次性非消耗型 Google Play 商品提供，使有效購買與購買者的 Google 帳戶保持連結。一次性 30-Day VIP 不得暗中形成重複扣款；如預計允許重複購買，其商品設定也不得永久阻止使用者在前一合法 30 天權益已提供或到期後再次正常購買。',
      'Google Play 交易處於 `PENDING` 狀態時不會產生 TycoonX 付費權益。只有 Google 回報有效完成狀態 `PURCHASED` 且必要驗證成功後，才會發放對應權益。若待處理交易之後成為有效完成購買，且服務商確認該交易確實屬於相應限時報價，即使促銷已結束，也可以在完成確認時提供對應權益。',
      'Google 可以直接處理符合資格的退款申請。依 Google 規則、CK-Labs 政策及適用法律，CK-Labs 在某些情況下也可能透過 Google 的開發者工具處理符合資格的退款。',
      '如果 Google 對交易退款、沖正、拒付、取消或認定無效，CK-Labs 可以撤銷或更正對應權益或虛擬價值。',
    ],
  },
  {
    title: '由 Xsolla 提供付款支援的 TycoonX 官方網頁商店',
    body: [
      'TycoonX 官方網頁商店的購買可由 Xsolla 處理。依具體結帳安排，Xsolla 集團中的某家公司可能作為該筆交易的 Merchant of Record。',
      '當 Xsolla 作為 Merchant of Record 時，結帳介面或收據中顯示的 Xsolla 實體，可依其適用條款負責付款處理、交易稅費或 VAT、詐欺篩查、退款、付款爭議及拒付。',
      '具體適用的 Xsolla 實體、付款方式、價格、稅費、退款政策及法律要求的購買資訊，以該筆交易的結帳介面與收據為準。該筆購買顯示的 Xsolla 交易條款及退款政策，與強制性消費者法律一併適用。',
      'CK-Labs 在收到有效的成功付款確認後，仍負責交付相應的 TycoonX 權益。僅僅從結帳介面返回、客戶端顯示「成功」訊息或訂單已建立，不會在收到有效服務商確認前自動產生發放付費價值的義務。',
      '如果一筆有效 Xsolla 交易因處理延遲而稍後才被確認，CK-Labs 可依服務商確認的交易及適用報價，在確認時提供對應權益。如果 Xsolla 對交易退款、沖正、取消、拒付或認定無效，CK-Labs 可以撤銷或更正對應 TycoonX 權益或虛擬價值。',
      '網頁商店購買不會賦予繞過 Apple 或 Google 應用程式內平台規則的權利。TycoonX 是否可以在應用程式中展示或連結至外部網頁商店報價，取決於適用的平台、國家或地區、計畫及法律。',
    ],
  },
  {
    title: '價格、地區定價與未來價格變更',
    body: [
      'CK-Labs 可以針對未來購買調整價格、套餐內容、Diamond 數量、VIP 價格、地區價格、幣別、商品可用性及促銷報價。現有價格不代表日後必須繼續提供相同產品、數量、折扣或價格。',
      'Apple App Store、Google Play、TycoonX 官方網頁商店、不同國家或地區、幣別以及不同真實促銷銷售期間之間的價格都可能不同。平台定價系統、稅費、VAT、貨幣換算、匯率變動、當地定價慣例或付款服務商規則，也可能導致當地價格變動。',
      '使用者確認購買前，適用結帳介面顯示的最終總價與幣別適用於該筆交易，但法律允許更正的明顯定價或設定錯誤除外。僅僅開啟商品頁面、進入結帳流程或在確認前看到快取中的舊價格，並不會把該價格鎖定給未來交易。對已完成訂單，以服務商確認的交易紀錄及依法具有約束力的結帳資訊為準，但強制性法律另有規定者除外。',
      '在德國及其他法律有要求的地區，強制性稅費與不可避免的價格組成部分，將依適用價格顯示規則包含或顯示。',
      'CK-Labs 日後更改價格，不會僅因這一原因對已完成的一次性購買追溯重新定價。之後降價不會自動產生退款、抵扣、部分退款、價格匹配、額外 Diamonds 或額外 VIP 時長的權利；之後漲價也不會對已完成的一次性購買產生額外收費，但強制性法律另有要求者除外。',
      'Lifetime VIP 可以在不同的真實促銷銷售期間採用不同價格。在某一期間購買，不會產生享有日後較低促銷價的權利，也不要求未來銷售期間沿用較早價格。',
      '促銷文案、倒數、刪除線價格、節省金額、限時說明及其他價格優惠表述，都必須反映真實報價，不得誤導。如果某一司法管轄區對具體商品或報價要求特定參考價格、折扣揭露或價格歷史規則，相應行銷與結帳介面必須遵守。',
      '如果 CK-Labs 日後推出訂閱或其他循環收費產品，適用於該產品的價格變更、通知、同意、取消與續費規則將另行適用。這裡的一次性購買價格變更規則，不授權任何未揭露的重複扣款。',
    ],
  },
  {
    title: '結帳資訊與付款確認',
    body: [
      '消費者提交付費訂單前，適用結帳介面必須在法律要求的位置清楚展示依法需要的締約前資訊。依交易類型，這可能包括商品主要特徵、包含強制性稅費的總價、期間或終止條件、交付或啟用資訊、重要功能、相容性或互通性資訊，以及契約交易方的身分與聯絡資訊。',
      '如果會產生付款義務的線上結帳適用德國法律，最終下單步驟必須依法清楚表明付款義務。CK-Labs 不會依賴隱藏文字、預先勾選的付費附加項或含糊不清的最終下單控制來製造付款義務。',
      '如果價格基於自動化決策進行個人化，而適用法律要求揭露這項事實，相應報價或結帳介面必須在下單前揭露。僅因國家或地區、商店、幣別、稅制或一般公開地區定價不同，並不代表這些地區價格屬於個人化定價。',
    ],
  },
  {
    title: '德國電子撤回功能',
    body: [
      '對於透過線上使用者介面訂立且適用該要求的遠距契約，在法定撤回期間內，德國法律要求提供電子撤回功能。',
      '如果該要求適用於 TycoonX 交易，且 CK-Labs 是負責相關線上介面的契約經營者，CK-Labs 必須依法提供標示清楚、持續可用、位置醒目且易於存取的撤回功能、確認步驟，以及透過可長期保存媒介提供的必要收件確認。',
      '如果 Apple、Google、Xsolla 或其他服務商是契約銷售方，或控制法律上相關的購買與撤回介面，則該服務商依法合規的撤回或退款流程可以成為適用管道。這種職責分配不會取消任何強制性的法定撤回權。',
      '法律要求的電子撤回功能，是其他合法撤回方式的補充，而不是替代或取消。',
    ],
  },
  {
    title: '恢復購買與權益恢復',
    body: [
      'Lifetime VIP：只要權益仍然有效，應在必要驗證後支援恢復或找回。30-Day VIP：在仍然有效且法律或產品規則要求時，應依權威帳戶或伺服器紀錄恢復。Diamonds：作為可消耗型購買，在已被消耗後不會透過「恢復購買」再次發放一份；適用時，目前 TycoonX 帳戶餘額由權威帳戶狀態維護。',
      '任何恢復操作都不會產生重複的已購買價值。',
      '刪除 TycoonX 帳戶可能永久刪除個人資料與遊戲狀態，但不一定會取消或消除獨立存在的有效 Apple、Google、Xsolla 或其他付款服務商交易。如果有效 Lifetime VIP 或其他可恢復權益依平台規則、服務商紀錄、契約或強制性法律仍與購買者連結，CK-Labs 可以要求合理證明同一購買者仍控制相關平台或付款帳戶，再將該權益連結至符合資格的 TycoonX 帳戶。',
      '帳戶刪除後恢復付費權益，不會重新建立已刪除的遊戲進度、已消耗 Diamonds、庫存、社群紀錄、交易紀錄或已轉移資產，除非適用法律另有要求。',
    ],
  },
  {
    title: '交付問題',
    body: [
      '如果使用者已被扣款但購買內容沒有出現，應先確認目前使用的是正確 TycoonX 帳戶；適用時使用「恢復購買」；給待處理的服務商交易或通知合理處理時間；問題仍存在時，攜帶訂單或交易資訊聯絡 TycoonX 客服。',
      'CK-Labs 可以在發放、恢復、變更或退款權益前，向 Apple、Google、Xsolla 或適用服務商驗證該筆交易。',
      '待處理購買不會保留第二份權益，也不會產生重複發放。如果服務商之後確認該待處理交易已成為有效完成購買，CK-Labs 將依權威交易紀錄與現有權益狀態進行核對與更正。',
    ],
  },
  {
    title: '明顯錯誤、失敗付款與重複發放',
    body: [
      '如果結帳、商品目錄、幣別、稅費、商品、數量或權益設定中存在明顯錯誤，CK-Labs 或適用付款服務商可以對未來交易更正該錯誤，並在法律允許時取消尚未履行的錯誤交易，退回實際支付金額，而不是提供明顯非預期的價值。強制性權利及已依法成立並具有約束力的契約，仍由適用法律決定。',
      '截圖、過期快取頁面、遭竄改客戶端、舊版應用程式、非官方來源或客戶端顯示錯誤，不會推翻有效最終結帳紀錄或可靠的權威伺服器與付款服務商紀錄。',
      '因重試、重複 webhook、商店通知重複、競態條件、漏洞、恢復錯誤、憑證遭竊或類似技術故障產生的重複權益或虛擬價值，可以被移除或合併，使帳戶最終只保留實際有效購買的價值。',
      '如果付款仍在待處理、被拒絕、被沖正、被取消、未通過詐欺審核或從未獲得有效確認，CK-Labs 可以延遲或暫不發放相應權益，直到收到有效成功交易確認。',
    ],
  },
  {
    title: '促銷、優惠券與報價濫用',
    body: [
      '促銷可依時間、國家或地區、平台、帳戶、購買歷史、資格、數量、兌換次數或其他清楚說明的條件限制。除非報價另有說明，促銷不一定可以疊加，也不會自動產生享有未來促銷的權利。',
      '使用者不得利用技術錯誤、重複兌換優惠券、竄改地區或身分資訊、自動化購買濫用、退款循環、批量養號或其他方式，取得超出真實報價範圍的促銷價值。',
      '如果優惠或折扣透過詐欺、技術濫用、重複兌換或其他無效方式取得，CK-Labs 可以在法律允許範圍內拒絕購買、僅撤銷無效促銷價值，或退款並撤回受影響交易。與該無效促銷無關的合法購買價值，不會僅因另一項促銷無效而被移除。',
      'CK-Labs 在法律強制義務之外自願提供的善意補償、免費延長、酌情退款、獎勵、補償、促銷福利或測試/審核贈予，本身不構成責任承認，也不代表日後其他情況必須提供相同救濟或福利。',
    ],
  },
  {
    title: '退款、沖正與拒付',
    body: [
      '退款或付款沖正不會賦予使用者同時保留退回款項與對應付費數位價值的權利。',
      '如果付款在價值已入帳後被退款、沖正、拒付、取消或認定無效，CK-Labs 可以在適用法律允許範圍內撤銷對應 VIP 或其他權益、移除相應未使用 Diamonds 或虛擬價值、撤銷與該無效交易直接相關的遊戲內交易、在已消耗或轉移退款價值時進行等值餘額更正，或在調查付款爭議期間暫時限制購買或經濟功能。',
      '除非為撤銷特定無效交易而合理必要，或法律另有允許，CK-Labs 不會利用這些更正移除與該問題無關的合法購買價值。',
      '退款通常透過原購買使用的付款管道處理，並在服務商要求時退回原付款方式。退款獲准與款項實際到達銀行、發卡機構、錢包或其他付款方式的時間可能不同。對於第三方結算時間、貨幣換算差異、銀行或發卡機構費用及匯率變動，CK-Labs 無法控制，但服務商規則及強制性法律仍適用。',
      '如果 Apple、Google、Xsolla 或其他服務商是契約銷售方，或由其簽發交易收據或稅務文件，則相關收據或發票的格式與更正流程由該服務商控制。CK-Labs 可以協助識別 TycoonX 交易及處理權益問題，但不能承諾更改或重新簽發第三方商戶的帳單或稅務文件。如果法律要求 CK-Labs 自行簽發收據、發票、貸項通知或其他文件，則以適用法律為準。',
    ],
  },
  {
    title: '未經授權或詐欺性購買',
    body: [
      '如懷疑存在未經授權的購買，使用者應儘快向相關付款服務商及 TycoonX 客服報告。',
      '為防止詐欺及重複交付，CK-Labs 可以調查收據、交易識別碼、權益紀錄、伺服器日誌、帳戶活動、裝置或工作階段資訊、付款服務商事件及相關安全紀錄。',
      '偽造收據、竄改客戶端、付款濫用、故意虛假詐欺報告、濫用拒付，或試圖在已取得退款後繼續保留對應數位價值，可能依 TycoonX 服務條款及適用法律導致權益更正、購買限制、帳戶暫停或終止。',
    ],
  },
  {
    title: '歐盟與德國的撤回權及數位產品權利',
    body: [
      '本政策中的任何內容都不會排除法律上不得放棄的法定權利。對德國消費者而言，《德國民法典》BGB 第 327 條及後續條款可能適用於付費數位內容與數位服務。',
      '對 Diamonds 等立即提供的數位內容，法定撤回權只有在所有法律條件都符合時，才可能在開始提供後消滅，包括針對該筆交易明確同意提前履行、確認知悉撤回權可能因此喪失，以及取得所要求的契約確認。僅接受一般服務條款，不用來取代法律要求的另行同意。',
      '對 30-Day VIP 這類限時數位服務，即時啟用本身不會因服務已開始就自動消滅所有法定撤回權。在適用法律允許提前履行時，結帳介面可以要求消費者明確請求提前開始提供服務；如消費者之後依法撤回，任何可能應付金額只能在法律允許範圍內決定。',
      '對 Lifetime VIP 這類持續性權益，一次性購買價格及不自動續費的性質，本身不會消滅法定撤回權或強制性數位服務救濟。提前履行請求、撤回權屆滿、撤回後按比例付款、終止或其他後果，只有在該交易符合相應法律條件時才適用。',
      'CK-Labs 不會對 Diamonds、30-Day VIP 與 Lifetime VIP 使用一條籠統的「概不退款」或「放棄全部撤回權」條款，因為這些產品在法律上的處理可能不同。',
    ],
  },
  {
    title: '必要更新與受支援版本',
    body: [
      '付費 TycoonX 內容不承諾每一個歷史應用程式版本、裝置、作業系統、API 或平台整合都會永久受到支援。',
      '如果德國數位產品法律適用，CK-Labs 將在法律相關期間內提供並告知為保持相應付費數位產品符合契約所必要的更新，包括必要的安全更新。',
      '如果必要更新已提供，且使用者已被清楚告知更新可用及不安裝的後果，那麼在適用法律規定範圍內，如果不符合契約的情況完全由未安裝該更新造成，未在合理時間內安裝更新可能影響相關權利主張。只有在 CK-Labs 提供適當安裝說明時，本規則才適用，也不會取消與無關缺陷、未提供服務或無效權益有關的權利。',
      '只要產品條款、平台規則或強制性法律要求，有效付費權益應繼續與購買者連結，並在受支援版本上被識別。要求更新不得用來重複收費、刪除仍有效且可恢復的 Lifetime VIP，或規避依法仍應提供的救濟。',
    ],
  },
  {
    title: '跨平台存取、Family Sharing 與重複權益紀錄',
    body: [
      '有效購買只有在 TycoonX 支援該存取，且適用商店、付款服務商、國家或地區及平台規則允許時，才可能在另一台受支援 TycoonX 裝置或平台上被識別。跨平台識別本身不會產生新交易或額外付費發放。',
      '同一底層購買不能透過恢復、帳戶遷移、跨裝置使用、跨平台連結、webhook 重試或重複服務商紀錄被重複放大。除非具體報價明確另有說明，同一個 Lifetime VIP 被多次識別不會產生多份 Lifetime VIP 福利，同一個 30-Day VIP 被多次識別也不會延長原本有效期間。',
      '彼此獨立完成、且並非重複紀錄的有效購買仍是獨立交易。CK-Labs 可以合併技術權益紀錄，但不會因此取消一筆獨立有效購買，也不會移除強制性退款、瑕疵擔保或其他消費者救濟。',
      'Apple Family Sharing 僅在 CK-Labs 已為相應符合資格的 In-App Purchase 啟用該功能，且 Apple 將購買回報為可共享時適用。如果提供 Family Sharing，家庭成員的存取權取決於原購買者仍然有效的共享權益，並可在 Apple 回報共享或底層權益已結束、被撤銷或退款時終止。共享存取不會為每一位家庭成員產生獨立購買，也不會產生超出 Apple 規則與強制性法律的獨立退款權。',
      '如果 TycoonX 沒有明確將某個 Apple 商品標示為支援 Family Sharing，該購買不包含提供 Family Sharing 的承諾。',
    ],
  },
  {
    title: '永久停止服務',
    body: [
      '如果 TycoonX 被永久停止，帳戶、Diamonds、VIP、虛擬物品及遊戲資料的線上存取也可能終止。服務關閉不會因此自動把虛擬物品變成可向 CK-Labs 兌換現金的資產。',
      'Lifetime VIP 與購買帳戶所對應的 TycoonX 商業營運期連結，不是購買者的生物壽命，也不是服務必須永久存在的無限承諾。',
      '如果因停止服務的具體原因或時間點，強制性法律賦予退款、減價、解除契約、瑕疵擔保或其他消費者救濟，本條不會放棄或限制這些權利。',
    ],
  },
  {
    title: '聯絡資訊',
    body: [
      'TycoonX 由 CK-Labs 營運。對於交付問題、購買疑問、疑似詐欺或權益爭議，可使用應用程式內 TycoonX 客服或寄送電子郵件至 cevikdev@gmail.com。',
      '對於由 Apple、Google 或 Xsolla 控制的退款事項，使用者可能還需要使用相應服務商的官方退款或支援流程。',
      '法律要求的其他營運者身分及地址資訊，將透過適用於 TycoonX 的法律聲明或 Impressum 頁面提供。',
    ],
  },
];

export default function TraditionalChineseTycoonXPurchasesAndRefunds() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white" lang="zh-Hant">
      <div className="border-b border-white/5 px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium tracking-wide">TycoonX · CK-Labs · 繁體中文</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">購買與退款政策</h1>
          <p className="text-zinc-500 text-sm">最後更新：2026 年 8 月 26 日</p>
          <p className="text-zinc-400 text-sm leading-relaxed mt-6">
            本政策適用於 TycoonX 中由 CK-Labs 提供的付費數位內容與權益，並補充 TycoonX 服務條款。它涵蓋 Diamonds、一次性 30-Day VIP、限時 Lifetime VIP、Apple App Store、Google Play、由 Xsolla 提供付款支援的 TycoonX 官方網頁商店、價格與促銷、退款、拒付、恢復購買、帳戶與權益更正，以及適用的強制性消費者權利。
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-2">
        {sections.map((section, i) => (
          <section key={section.title} className="rounded-xl p-6 hover:bg-white/[0.03] transition">
            <div className="flex gap-4">
              <span className="text-xs text-zinc-600 font-mono mt-1 w-6 shrink-0">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h2 className="text-white font-semibold mb-3">{section.title}</h2>
                <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
                  {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="rounded-xl border border-white/10 bg-[#111111] p-6 mt-8">
          <h2 className="text-white font-semibold mb-3">其他 TycoonX 法律頁面</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">本政策應與 TycoonX 服務條款一併閱讀。隱私及社群規則分別由隱私政策與社群標準說明。</p>
          <div className="flex flex-wrap gap-3">
            <a href="/tycoonx-legal/zh_Hant/terms" className="inline-flex bg-indigo-600 hover:bg-indigo-500 transition text-white text-sm font-medium px-4 py-2 rounded-lg">繁體中文服務條款</a>
            <a href="/tycoonx-legal/zh_Hant" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">繁體中文法律中心</a>
            <a href="/tyconx-privacy-policy" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">隱私政策</a>
            <a href="/tycoonx-community-standards" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">社群標準</a>
            <a href="/tyconx-support" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">TycoonX 客服</a>
          </div>
        </section>
      </div>
    </main>
  );
}
