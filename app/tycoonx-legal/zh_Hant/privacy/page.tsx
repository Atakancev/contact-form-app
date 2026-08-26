const sections = [
  {
    title: '我們處理的資訊',
    body: [
      '我們可能處理帳戶及個人資料資訊，例如受支援的登入識別碼、電子郵件地址、顯示名稱、頭像、語言、時區、設定，以及帳戶建立、登入、恢復、暫停與刪除等生命週期事件。',
      '為維持持續存在的 TycoonX 遊戲世界，我們會處理必要的遊戲與經濟資料，包括進度、庫存、虛擬貨幣與 Diamonds 餘額、公司、生產、市場活動、住房、工作、契約、貸款、股票、交易，以及 VIP 權益狀態。',
      '我們可能處理購買與權益資訊，例如付款平台、商品識別碼、交易識別碼、簽章交易或收據資訊、購買、啟用與到期狀態、退款、撤銷與拒付狀態，以及權益交付、恢復、遷移或更正紀錄。平台商店或付款處理商通常不會向 CK-Labs 提供你的完整銀行卡號。',
      '我們可能處理安全與反詐欺資料，例如登入與工作階段紀錄、IP 位址、服務可取得的裝置或平台資訊、應用程式版本、診斷資訊、可疑存取模式、無效購買驗證、漏洞利用跡象、反濫用訊號，以及審核與安全日誌。',
      '我們可能處理溝通與社群內容，例如公開或私人聊天、檢舉、個人資料或公司內容、客服工單、聯絡表單、漏洞報告、申訴、附件、時間戳記、傳送者或接收者識別碼，以及審核狀態。',
      '我們也可能處理功能使用、工作階段、留存、效能、互動事件，以及彙總後的遊戲經濟與平衡指標等使用與分析資訊。',
    ],
  },
  {
    title: '資料來源',
    body: [
      '當你建立或使用帳戶、遊玩 TycoonX、聯絡客服、提交社群內容或修改設定時，我們會直接從你取得相關資料。我們也可能從你選擇或使用的 TycoonX 相關服務取得有限資訊，包括受支援的身分驗證提供商，以及 Apple、Google、Xsolla 或其他授權付款服務商傳送的購買、權益、退款、撤銷、詐欺或交易狀態資訊。',
      '付款服務商可能依其自身隱私政策獨立處理銀行卡、銀行帳戶、帳單地址、稅務所在地或其他付款資訊。CK-Labs 通常收到的是交付與核對 TycoonX 購買所需的交易與權益資訊，而不是完整付款工具資訊。',
    ],
  },
  {
    title: '我們為什麼處理這些資訊',
    body: [
      '我們處理資訊是為了建立並保護帳戶、營運與同步 TycoonX、交付與恢復有效購買、防止重複發放與詐欺、識別作弊或漏洞利用、調查事件、更正無效遊戲狀態、提供客服、審核社群功能、執行服務條款與社群標準、診斷技術問題、改進服務、傳送營運或法律通知，以及履行適用的法律義務。',
    ],
  },
  {
    title: '法律依據',
    body: [
      '在 GDPR 或類似法律適用時，我們會依具體處理活動採用適當的法律依據：為履行契約而處理遊戲、帳戶存取、購買交付與客服所需資料；在不被你的權利與利益優先推翻的情況下，基於合法利益進行安全、反詐欺、遊戲完整性、診斷、適度社群審核及法律抗辯；為滿足法定紀錄保存與主管機關要求而履行法律義務；以及在法律要求時，基於同意處理可選功能。',
      '僅僅使用 TycoonX 不會被視為對依法必須取得同意的處理作出同意。需要同意時，我們會另行徵求，你也可以就未來處理撤回同意。',
    ],
  },
  {
    title: '提供 TycoonX 所必需的資料',
    body: [
      '部分資訊是履行 TycoonX 契約或處理購買所必需的。例如，需要帳戶識別碼來維持持續遊戲狀態，需要有效交易或權益資訊來正確交付、恢復、退款、撤銷或核對付費內容。如果這些必要資訊未提供或無法驗證，我們可能無法建立或驗證帳戶、交付購買、恢復權益或提供受影響功能。',
      '對核心服務並非必需的可選資訊或處理，我們會在法律要求時分開處理，並提供適用的同意控制。',
    ],
  },
  {
    title: '我們如何分享資訊',
    body: [
      '我們不出售個人資料。我們只會在合理必要範圍內與下列對象分享資訊：為 TycoonX 提供託管、資料庫、身分驗證、儲存、分析、診斷、審核、通訊、通知或安全服務的服務供應商；為購買驗證、恢復、退款、撤銷、詐欺調查及爭議處理提供支援的 Apple、Google、Xsolla 或其他授權平台與付款合作方；當你主動使用公開或社交功能時的其他玩家；依法有權接收資訊的主管機關；以及依法進行業務轉移時的相關方。',
      'Apple、Google、Xsolla、銀行、銀行卡組織或其他付款參與方，可能就其自身的付款、詐欺、稅務、帳戶或平台處理獨立承擔資料控制者責任。其自身隱私政策與法律義務適用於這些獨立處理。TycoonX 目前在部分後端功能中使用 Supabase 等基礎設施服務，相關服務供應商受適用契約與法律保障約束。',
      '在平台規則要求時，任何從 CK-Labs 接收使用者資料的第三方，都必須對從 CK-Labs 取得的資料提供與本政策及適用平台規則要求相同或等同的保護程度。',
      '第三方 AI 服務同樣適用這些規則。如果 TycoonX 使用第三方 AI 服務並涉及分享個人資料，CK-Labs 會清楚揭露該分享，並在適用平台規則或法律要求時，在傳輸或分享前取得明確許可。此類供應商只能為已授權目的處理資料，並必須採取適當的隱私與安全保障。',
    ],
  },
  {
    title: '公開與私人社群內容',
    body: [
      '你主動在 TycoonX 中公開的內容，可作為服務的一部分向其他使用者展示。當 TycoonX 服務條款與社群標準允許將公開使用者生成內容用於 TycoonX 社群展示或推廣時，CK-Labs 會採用適當的法律依據，並尊重內容發布時的脈絡、適用設定、第三方權利與強制性法律。如果某項具體推廣用途依法需要同意，我們會另行徵求同意。',
      '私人訊息、私人客服溝通與非公開檢舉，只會在提供、保護、審核、支援、調查或依法保護服務所必要的範圍內處理。它們不會僅因 CK-Labs 為這些營運目的需要處理，就被公開或用於公開推廣。',
      '對私人通訊進行審核或法律審查，只限於合理必要且合法的情況，例如回應檢舉、保護使用者、調查濫用或詐欺、履行法律義務，或提出、行使或抗辯法律請求。',
    ],
  },
  {
    title: '國際資料傳輸',
    body: [
      'TycoonX 及部分服務供應商可能在你居住國以外處理資訊。在 GDPR 或類似跨境傳輸限制適用時，我們會在需要時採用適當的法律傳輸機制，例如充分性決定、標準契約條款或其他被認可的保障措施。國際傳輸不會僅因你使用 TycoonX 就被視為已經同意。',
      '如果適用法律賦予你了解國際傳輸保障措施的權利，你可以聯絡 TycoonX 客服取得更多資訊，或在可提供範圍內索取相關保障文件副本，但我們可以依法進行必要刪減並保護第三方機密資訊。',
    ],
  },
  {
    title: '資料保存',
    body: [
      '我們只會在達成處理目的所合理需要的期間保存個人資料，並在法律要求或允許的額外期間繼續保存。活躍帳戶與遊戲資料可在帳戶有效期間保存；客服紀錄可在合理的後續處理與爭議期間保存；購買、退款、權益、恢復、會計與稅務紀錄可在法定、契約履行、反詐欺或爭議處理所需期間保存；安全、反詐欺、漏洞利用、審核及稽核紀錄可在保護服務、調查事件或抗辯法律請求所合理需要的期間保存。',
      '私人通訊不會僅因曾被審核而被無限期保存。更長的保存必須有獨立且合法的需要，例如正在處理的爭議、安全調查、法律請求或法定義務。備份資料可在有限的備份生命週期內保留，之後刪除或覆寫。真正匿名化或彙總到無法再識別個人的資料，可以在其不再屬於個人資料的範圍內繼續保存。',
    ],
  },
  {
    title: '你的隱私權利',
    body: [
      '依適用法律，你可能有權存取、更正或刪除個人資料，限制某些處理，反對基於合法利益的處理，以可攜格式取得某些資料，在處理基於同意時撤回同意，以及向有管轄權的資料保護監管機構提出申訴。',
      '在 TycoonX 提供帳戶刪除功能時，你可以透過該功能申請刪除，也可以聯絡 TycoonX 客服。我們可能需要合理驗證你的身分。對於法律、稅務、會計、契約履行、反詐欺、安全、爭議解決、權益恢復或法律請求所要求或允許保存的紀錄，我們仍可能在必要範圍內繼續保存。',
    ],
  },
  {
    title: '帳戶刪除與付費權益',
    body: [
      '刪除 TycoonX 帳戶與申請付款退款是兩件不同的事。帳戶刪除可能永久移除與帳戶連結的遊戲進度、Diamonds、已消耗價值、庫存、社群資料與其他個人資料狀態，但不會自動產生現金兌換或退款權。',
      '刪除 TycoonX 帳戶不一定會刪除或使獨立存在的 Apple、Google、Xsolla 或其他付款服務商交易紀錄失效。如果依平台規則、服務商紀錄、契約或強制性法律，有效的 Lifetime VIP 或其他非消耗型或可恢復權益仍與購買者連結，CK-Labs 可以保存為驗證並恢復該權益所合理必要的最低限度交易與權益證據。',
      '日後恢復可能要求提供合理證據，證明同一購買者仍控制相關平台或付款帳戶。恢復付費權益不會重新建立已刪除的遊戲進度、已消耗 Diamonds、庫存、歷史紀錄或已轉移資產，除非適用法律另有要求。退款權仍受付款服務商流程及強制性法律約束。',
    ],
  },
  {
    title: '兒童與年齡相關控制',
    body: [
      'TycoonX 並非面向低於使用者所在司法管轄區允許獨立使用服務最低年齡的兒童。如果法律要求父母或監護人同意，則未取得相應授權不得使用服務。如果我們發現兒童個人資料是在不符合適用法律的情況下被收集，我們可以限制該帳戶，並依法刪除相關資訊。',
      '為遵守法律、實施適齡的社交功能限制、符合 App Store 或 Google Play 要求或保護未成年人，CK-Labs 可以在合理必要範圍內處理有限的年齡、年齡層、父母授權或平台年齡控制資訊。即使基礎遊戲仍然可用，TycoonX 也可以對某些年齡層限制或關閉社群功能。',
    ],
  },
  {
    title: '安全',
    body: [
      '我們採用旨在保護 TycoonX 資料的技術與組織措施，例如存取控制、身分驗證控制、適用情況下的加密網路傳輸、監控、限流、購買驗證、稽核日誌、備份，以及與服務風險相符的其他保障。',
      '任何線上服務都無法保證絕對安全。如果你認為帳戶遭盜用或發現安全漏洞，請及時聯絡 TycoonX 客服。這不會減少 CK-Labs 依適用法律應承擔的安全措施義務。',
    ],
  },
  {
    title: '自動化安全與審核',
    body: [
      'TycoonX 可能使用自動化規則、訊號或系統識別可疑活動、垃圾訊息、詐欺、濫用內容、漏洞利用模式、無效購買或其他可能威脅使用者或服務的行為。自動化訊號可能觸發人工複核、暫時限制、審核或調查。',
      '如果適用法律限制僅依賴自動化處理並產生法律效果或類似重大影響的決定，CK-Labs 會提供法律要求的保障，包括在法律要求時進行人工介入或複核。你就此類決定享有的法定權利不受影響。',
    ],
  },
  {
    title: '第三方連結與服務',
    body: [
      'TycoonX 可能連結至第三方服務或與其互通。這些第三方可能依其自身隱私政策處理資訊。除非適用法律規定 CK-Labs 對特定第三方處理負有責任，否則 CK-Labs 不對獨立第三方的隱私作法負責。',
    ],
  },
  {
    title: '本政策的變更',
    body: [
      '我們可能更新本政策，以反映 TycoonX、資料處理方式、服務供應商、安全措施、社群功能或法律要求的變更。我們會更新「最後更新」日期，並在法律要求時提供額外通知。如果某項變更需要取得同意，我們會請求該同意，不會僅以你繼續使用 TycoonX 作為同意依據。',
    ],
  },
];

export default function TycoonXPrivacyPolicyZhHant() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white" lang="zh-Hant">
      <div className="border-b border-white/5 px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium tracking-wide">TycoonX · CK-Labs · 繁體中文</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">隱私政策</h1>
          <p className="text-zinc-500 text-sm">最後更新：2026 年 8 月 26 日</p>
          <p className="text-zinc-400 text-sm leading-relaxed mt-6">
            本隱私政策說明 TycoonX 的營運方 CK-Labs 在你使用 TycoonX 行動版或網頁應用程式、網站、客服服務、社群功能及相關線上服務時，如何處理個人資料。
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
          <h2 className="text-white font-semibold mb-3">資料控制者與聯絡方式</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">CK-Labs 是本政策所述 TycoonX 資料處理活動的資料控制者。如需提出隱私請求、帳戶刪除請求、安全報告、購買相關隱私問題、審核資料問題或其他資料保護事項，請使用 TycoonX 客服或透過電子郵件聯絡我們。</p>
          <div className="flex flex-wrap gap-3">
            <a href="/tyconx-support" className="inline-flex bg-indigo-600 hover:bg-indigo-500 transition text-white text-sm font-medium px-4 py-2 rounded-lg">TycoonX 客服</a>
            <a href="mailto:cevikdev@gmail.com" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">cevikdev@gmail.com</a>
            <a href="/tycoonx-legal/zh_Hant/terms" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">服務條款</a>
            <a href="/tyconx-community-standards" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">社群標準</a>
          </div>
          <p className="text-zinc-600 text-xs leading-relaxed mt-4">服務的適用法律聲明或經營者資訊頁面中，還必須提供法律要求的其他經營者身分與地址資訊。</p>
        </section>
      </div>
    </main>
  );
}
