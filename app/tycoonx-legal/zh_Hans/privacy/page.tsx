const sections = [
  {
    title: '我们处理的信息',
    body: [
      '我们可能处理账户和个人资料信息，例如受支持的登录标识、电子邮箱地址、显示名称、头像、语言、时区、设置，以及账户创建、登录、恢复、暂停和删除等生命周期事件。',
      '为运行持续存在的 TycoonX 游戏世界，我们会处理必要的游戏与经济数据，包括进度、库存、虚拟货币与 Diamonds 余额、公司、生产、市场活动、住房、工作、合同、贷款、股票、交易，以及 VIP 权益状态。',
      '我们可能处理购买与权益信息，例如支付平台、商品标识、交易标识、签名交易或收据信息、购买、激活和到期状态、退款、撤销和拒付状态，以及权益交付、恢复、迁移或更正记录。平台商店或支付处理商通常不会向 CK-Labs 提供你的完整银行卡号。',
      '我们可能处理安全与反欺诈数据，例如登录和会话记录、IP 地址、服务可获取的设备或平台信息、应用版本、诊断信息、可疑访问模式、无效购买验证、漏洞利用迹象、反滥用信号，以及审核和安全日志。',
      '我们可能处理沟通与社区内容，例如公开或私密聊天、举报、个人资料或公司内容、支持工单、联系表单、漏洞报告、申诉、附件、时间戳、发送者或接收者标识，以及审核状态。',
      '我们还可能处理功能使用、会话、留存、性能、互动事件以及汇总后的游戏经济和平衡指标等使用与分析信息。',
    ],
  },
  {
    title: '数据来源',
    body: [
      '当你创建或使用账户、游玩 TycoonX、联系支持、提交社区内容或修改设置时，我们会直接从你处获得相关数据。我们也可能从你选择或使用的 TycoonX 相关服务获得有限信息，包括受支持的身份验证提供商，以及 Apple、Google、Xsolla 或其他授权支付提供商发送的购买、权益、退款、撤销、欺诈或交易状态信息。',
      '支付提供商可能依据其自身隐私政策独立处理银行卡、银行账户、账单地址、税务所在地或其他支付信息。CK-Labs 通常接收的是交付和核对 TycoonX 购买所需的交易与权益信息，而不是完整的支付工具信息。',
    ],
  },
  {
    title: '我们为什么处理这些信息',
    body: [
      '我们处理信息是为了创建并保护账户、运行和同步 TycoonX、交付和恢复有效购买、防止重复发放和欺诈、识别作弊或漏洞利用、调查事件、纠正无效游戏状态、提供支持、审核社区功能、执行服务条款和社区标准、诊断技术问题、改进服务、发送运营或法律通知，并履行适用的法律义务。',
    ],
  },
  {
    title: '法律依据',
    body: [
      '在 GDPR 或类似法律适用时，我们会根据具体处理活动使用适当的法律依据：为履行合同而处理游戏、账户访问、购买交付和支持所需的数据；在不被你的权利和利益所优先推翻的情况下，基于合法利益进行安全、反欺诈、游戏完整性、诊断、适度社区审核和法律抗辩；为满足法定记录保存和主管机关要求而履行法律义务；以及在法律要求时基于同意处理可选功能。',
      '仅仅使用 TycoonX 不会被视为对依法必须取得同意的处理作出同意。需要同意时，我们会单独征求，你也可以针对未来处理撤回同意。',
    ],
  },
  {
    title: '提供 TycoonX 所必需的数据',
    body: [
      '部分信息是履行 TycoonX 合同或处理购买所必需的。例如，需要账户标识来维护持续游戏状态，需要有效交易或权益信息来正确交付、恢复、退款、撤销或核对付费内容。如果这些必要信息没有提供或无法验证，我们可能无法创建或验证账户、交付购买、恢复权益或提供受影响的功能。',
      '对于核心服务并非必需的可选信息或处理，我们会在法律要求时单独处理，并提供适用的同意控制。',
    ],
  },
  {
    title: '我们如何共享信息',
    body: [
      '我们不出售个人数据。我们只会在合理必要范围内与以下主体共享信息：为 TycoonX 提供托管、数据库、身份验证、存储、分析、诊断、审核、通信、通知或安全服务的服务提供商；为购买验证、恢复、退款、撤销、欺诈调查和争议处理提供支持的 Apple、Google、Xsolla 或其他授权平台和支付合作方；当你主动使用公开或社交功能时的其他玩家；依法有权接收信息的主管机关；以及依法进行业务转移时的相关方。',
      'Apple、Google、Xsolla、银行、银行卡组织或其他支付参与方，可能就其自身的支付、欺诈、税务、账户或平台处理独立承担数据控制者责任。其自身的隐私政策和法律义务适用于这些独立处理。TycoonX 目前在部分后端功能中使用 Supabase 等基础设施服务，相关服务提供商受适用的合同和法律保障约束。',
      '在平台规则要求时，任何从 CK-Labs 接收用户数据的第三方，都必须对从 CK-Labs 获得的数据提供与本政策以及适用平台规则要求相同或等效的保护水平。',
      '第三方 AI 服务同样适用这些规则。如果 TycoonX 使用第三方 AI 服务并涉及共享个人数据，CK-Labs 会明确披露该共享，并在适用平台规则或法律要求时，在传输或共享前取得明确许可。此类提供商只能为已授权目的处理数据，并必须采取适当的隐私与安全保障。',
    ],
  },
  {
    title: '公开与私密社区内容',
    body: [
      '你主动在 TycoonX 中公开的内容，可以作为服务的一部分向其他用户展示。当 TycoonX 服务条款和社区标准允许将公开用户生成内容用于 TycoonX 社区展示或推广时，CK-Labs 会采用适当的法律依据，并尊重内容发布时的语境、适用设置、第三方权利和强制性法律。如果某项具体推广用途依法需要同意，我们会单独征求同意。',
      '私信、私密支持沟通和非公开举报，仅在提供、保护、审核、支持、调查或依法保护服务所必要的范围内处理。它们不会仅仅因为 CK-Labs 为这些运营目的需要处理，就被公开或用于公开推广。',
      '对私密通信进行审核或法律审查，仅限于合理必要且合法的情况，例如回应举报、保护用户、调查滥用或欺诈、履行法律义务，或提出、行使或抗辩法律请求。',
    ],
  },
  {
    title: '国际数据传输',
    body: [
      'TycoonX 及部分服务提供商可能在你居住国之外处理信息。在 GDPR 或类似跨境传输限制适用时，我们会在需要时采用适当的法律传输机制，例如充分性决定、标准合同条款或其他被认可的保障措施。国际传输不会仅仅因为你使用 TycoonX 就被视为已经同意。',
      '如果适用法律赋予你了解国际传输保障措施的权利，你可以联系 TycoonX 支持获取进一步信息，或在可提供范围内索取相关保障文件副本，但我们可以依法进行必要删减并保护第三方机密信息。',
    ],
  },
  {
    title: '数据保存',
    body: [
      '我们只会在实现处理目的所合理需要的期间保存个人数据，并在法律要求或允许的额外期间继续保存。活跃账户和游戏数据可在账户有效期间保存；支持记录可在合理的后续处理和争议期间保存；购买、退款、权益、恢复、会计和税务记录可在法定、合同履行、反欺诈或争议处理所需期间保存；安全、反欺诈、漏洞利用、审核和审计记录可在保护服务、调查事件或抗辩法律请求所合理需要的期间保存。',
      '私密通信不会仅仅因为曾被审核而被无限期保存。更长的保存必须有独立且合法的需要，例如正在处理的争议、安全调查、法律请求或法定义务。备份数据可在有限的备份生命周期内保留，之后删除或覆盖。真正匿名化或汇总到无法再识别个人的数据，可以在其不再属于个人数据的范围内继续保存。',
    ],
  },
  {
    title: '你的隐私权利',
    body: [
      '根据适用法律，你可能有权访问、更正或删除个人数据，限制某些处理，反对基于合法利益的处理，以可携带格式获取某些数据，在处理基于同意时撤回同意，以及向有管辖权的数据保护监管机构投诉。',
      '在 TycoonX 提供账户删除功能时，你可以通过该功能申请删除，也可以联系 TycoonX 支持。我们可能需要合理验证你的身份。对于法律、税务、会计、合同履行、反欺诈、安全、争议解决、权益恢复或法律请求所要求或允许保存的记录，我们仍可能在必要范围内继续保存。',
    ],
  },
  {
    title: '账户删除与付费权益',
    body: [
      '删除 TycoonX 账户与申请付款退款是两件不同的事。账户删除可能永久移除与账户关联的游戏进度、Diamonds、已消耗价值、库存、社交数据和其他个人资料状态，但不会自动产生现金兑换或退款权。',
      '删除 TycoonX 账户不一定会删除或使独立存在的 Apple、Google、Xsolla 或其他支付提供商交易记录失效。如果依据平台规则、提供商记录、合同或强制性法律，有效的 Lifetime VIP 或其他不可消耗或可恢复权益仍与购买者关联，CK-Labs 可以保存为验证并恢复该权益所合理必要的最低限度交易和权益证据。',
      '后续恢复可能要求提供合理证据，证明同一购买者仍控制相关平台或支付账户。恢复付费权益不会重新创建已删除的游戏进度、已消耗 Diamonds、库存、历史记录或已转移资产，除非适用法律另有要求。退款权仍受支付提供商流程和强制性法律约束。',
    ],
  },
  {
    title: '儿童与年龄相关控制',
    body: [
      'TycoonX 并非面向低于用户所在司法辖区允许独立使用服务最低年龄的儿童。如果法律要求父母或监护人同意，则未取得相应授权不得使用服务。如果我们发现儿童个人数据是在不符合适用法律的情况下被收集，我们可以限制该账户，并按法律要求删除相关信息。',
      '为遵守法律、实施适龄的社交功能限制、满足 App Store 或 Google Play 要求或保护未成年人，CK-Labs 可以在合理必要范围内处理有限的年龄、年龄段、父母授权或平台年龄控制信息。即使基础游戏仍然可用，TycoonX 也可以对某些年龄组限制或关闭社区功能。',
    ],
  },
  {
    title: '安全',
    body: [
      '我们采用旨在保护 TycoonX 数据的技术和组织措施，例如访问控制、身份验证控制、适用情况下的加密网络传输、监控、限流、购买验证、审计日志、备份，以及与服务风险相适应的其他保障。',
      '任何在线服务都无法保证绝对安全。如果你认为账户已被盗用或发现安全漏洞，请及时联系 TycoonX 支持。这不会减少 CK-Labs 根据适用法律应承担的安全措施义务。',
    ],
  },
  {
    title: '自动化安全与审核',
    body: [
      'TycoonX 可能使用自动化规则、信号或系统识别可疑活动、垃圾信息、欺诈、滥用内容、漏洞利用模式、无效购买或其他可能威胁用户或服务的行为。自动化信号可能触发人工复核、临时限制、审核或调查。',
      '如果适用法律限制仅依赖自动化处理并产生法律效果或类似重大影响的决定，CK-Labs 会提供法律要求的保障，包括在法律要求时进行人工介入或复核。你就此类决定享有的法定权利不受影响。',
    ],
  },
  {
    title: '第三方链接和服务',
    body: [
      'TycoonX 可能链接到第三方服务或与其互操作。这些第三方可能依据其自身隐私政策处理信息。除非适用法律规定 CK-Labs 对特定第三方处理负有责任，否则 CK-Labs 不对独立第三方的隐私实践负责。',
    ],
  },
  {
    title: '本政策的变更',
    body: [
      '我们可能更新本政策，以反映 TycoonX、数据处理方式、服务提供商、安全措施、社区功能或法律要求的变化。我们会更新“最后更新”日期，并在法律要求时提供额外通知。如果某项变更需要取得同意，我们会请求该同意，而不会仅以你继续使用 TycoonX 作为同意依据。',
    ],
  },
];

export default function TycoonXPrivacyPolicyZhHans() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white" lang="zh-Hans">
      <div className="border-b border-white/5 px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium tracking-wide">TycoonX · CK-Labs · 简体中文</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">隐私政策</h1>
          <p className="text-zinc-500 text-sm">最后更新：2026 年 8 月 26 日</p>
          <p className="text-zinc-400 text-sm leading-relaxed mt-6">
            本隐私政策说明 TycoonX 的运营方 CK-Labs 在你使用 TycoonX 移动端或网页应用、网站、支持服务、社区功能及相关在线服务时，如何处理个人数据。
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
          <h2 className="text-white font-semibold mb-3">数据控制者与联系方式</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">CK-Labs 是本政策所述 TycoonX 数据处理活动的数据控制者。如需提出隐私请求、账户删除请求、安全报告、购买相关隐私问题、审核数据问题或其他数据保护事项，请使用 TycoonX 支持或发送电子邮件联系我们。</p>
          <div className="flex flex-wrap gap-3">
            <a href="/tyconx-support" className="inline-flex bg-indigo-600 hover:bg-indigo-500 transition text-white text-sm font-medium px-4 py-2 rounded-lg">TycoonX 支持</a>
            <a href="mailto:cevikdev@gmail.com" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">cevikdev@gmail.com</a>
            <a href="/tycoonx-legal/zh_Hans/terms" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">服务条款</a>
            <a href="/tycoonx-community-standards" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">社区标准</a>
          </div>
          <p className="text-zinc-600 text-xs leading-relaxed mt-4">服务的适用法律声明或经营者信息页面中，还必须提供法律要求的其他经营者身份与地址信息。</p>
        </section>
      </div>
    </main>
  );
}
