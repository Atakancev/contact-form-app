import fs from 'node:fs';

const checks = [
  {
    file: 'app/tyconx-purchase-refund-policy/page.tsx',
    mustInclude: [
      'Last updated August 28, 2026',
      'real-world monetary price information',
      'unused purchased Diamonds remain subject to that right',
      '14-day statutory withdrawal right',
      'does not treat the mere crediting of purchased Diamonds as immediately supplied digital content',
      'TycoonX',
    ],
    mustNotInclude: [
      'For immediately supplied digital content such as a Diamond bundle',
      'TyconX',
      'beta',
    ],
  },
  {
    file: 'tyconx-purchase-refund-policy.md',
    mustInclude: [
      'Last updated: August 28, 2026',
      'Purchased Diamonds and EU/EEA withdrawal rights',
      'unused purchased Diamonds remain subject to that right',
      'real-world monetary price information',
      'TycoonX',
    ],
    mustNotInclude: [
      'Immediately supplied digital content such as Diamonds',
      'TyconX',
      'beta',
    ],
  },
  {
    file: 'app/tycoonx-legal/tr/purchases/page.tsx',
    mustInclude: [
      'Türkçe sürüm: 28 Ağustos 2026',
      'Kanonik İngilizce sürüm: 28 Ağustos 2026',
      '14 günlük yasal cayma hakkı',
      'kullanılmamış satın alınmış Elmaslar',
      'gerçek para karşılığı',
      'TycoonX',
    ],
    mustNotInclude: [
      'Elmas paketi gibi hemen sağlanan dijital içerikte',
      'TyconX',
      'beta',
    ],
  },
  {
    file: 'app/tycoonx-legal/de/purchases/page.tsx',
    mustInclude: [
      'Deutsche Fassung: 28. August 2026',
      'Kanonische englische Fassung: 28. August 2026',
      '14-tägiges gesetzliches Widerrufsrecht',
      'ungenutzte gekaufte Diamonds',
      'Preisangaben in realer Währung',
      'TycoonX',
    ],
    mustNotInclude: [
      'Bei sofort bereitgestellten digitalen Inhalten wie einem Diamond-Paket',
      'TyconX',
      'beta',
    ],
  },
  {
    file: 'app/tycoonx-legal/es/purchases/page.tsx',
    mustInclude: [
      'Versión en español: 28 de agosto de 2026',
      'Versión canónica en inglés: 28 de agosto de 2026',
      'derecho legal de desistimiento de 14 días',
      'Diamonds comprados que no se hayan utilizado',
      'precio en dinero real',
      'TycoonX',
    ],
    mustNotInclude: [
      'Para contenido digital suministrado de inmediato, como un paquete de Diamonds',
      'TyconX',
      'beta',
    ],
  },
  {
    file: 'app/tycoonx-legal/es_MX/purchases/page.tsx',
    mustInclude: [
      'Versión en español (México): 28 de agosto de 2026',
      'Versión canónica en inglés: 28 de agosto de 2026',
      'derecho legal de desistimiento de 14 días',
      'Diamonds comprados que no se hayan utilizado',
      'precio en dinero real',
      'TycoonX',
    ],
    mustNotInclude: [
      'Para contenido digital suministrado de inmediato, como un paquete de Diamonds',
      'TyconX',
      'beta',
    ],
  },
  {
    file: 'app/tycoonx-legal/fr/purchases/page.tsx',
    mustInclude: [
      'Version française : 28 août 2026',
      'Version canonique anglaise : 28 août 2026',
      'droit légal de rétractation de 14 jours',
      'Diamonds achetés et non utilisés',
      'prix en monnaie réelle',
      'Mises à jour nécessaires et versions prises en charge',
      'TycoonX',
    ],
    mustNotInclude: [
      'Pour un contenu numérique fourni immédiatement, comme un pack de Diamonds',
      'TyconX',
      'beta',
    ],
  },
  {
    file: 'app/tycoonx-legal/fr_CA/purchases/page.tsx',
    mustInclude: [
      'Version française (Canada) : 28 août 2026',
      'Version canonique anglaise : 28 août 2026',
      'droit légal de rétractation de 14 jours',
      'Diamonds achetés et non utilisés',
      'prix en monnaie réelle',
      'Mises à jour nécessaires et versions prises en charge',
      'TycoonX',
    ],
    mustNotInclude: [
      'Pour un contenu numérique fourni immédiatement, comme un lot de Diamonds',
      'TyconX',
      'beta',
    ],
  },
  {
    file: 'app/tycoonx-legal/it/purchases/page.tsx',
    mustInclude: [
      'Versione italiana: 28 agosto 2026',
      'Versione canonica inglese: 28 agosto 2026',
      'diritto legale di recesso di 14 giorni',
      'Diamonds acquistati e non utilizzati',
      'prezzo in denaro reale',
      'TycoonX',
    ],
    mustNotInclude: [
      'Per i contenuti digitali forniti immediatamente, come un pacchetto di Diamonds',
      'TyconX',
      'beta',
    ],
  },
  {
    file: 'app/tycoonx-legal/pt/purchases/page.tsx',
    mustInclude: [
      'Versão portuguesa: 28 de agosto de 2026',
      'Versão canónica em inglês: 28 de agosto de 2026',
      'direito legal de livre resolução de 14 dias',
      'Diamonds comprados e não utilizados',
      'preço em dinheiro real',
      'TycoonX',
    ],
    mustNotInclude: [
      'Para conteúdos digitais fornecidos imediatamente, como um pacote de Diamonds',
      'TyconX',
      'beta',
    ],
  },
  {
    file: 'app/tycoonx-legal/pt_BR/purchases/page.tsx',
    mustInclude: [
      'Versão em português (Brasil): 28 de agosto de 2026',
      'Versão canônica em inglês: 28 de agosto de 2026',
      'direito legal de arrependimento de 14 dias',
      'Diamonds comprados e ainda não utilizados',
      'preço em dinheiro real',
      'TycoonX',
    ],
    mustNotInclude: [
      'Para conteúdo digital fornecido imediatamente, como um pacote de Diamonds',
      'TyconX',
      'beta',
    ],
  },
  {
    file: 'app/tycoonx-legal/ja/purchases/page.tsx',
    mustInclude: [
      '日本語版：2026年8月28日',
      '英語正本：2026年8月28日',
      '14日間の法定撤回権',
      '未使用の購入済みDiamonds',
      '実際の通貨による価格情報',
      '必要なアップデートと対応バージョン',
      'TycoonX',
    ],
    mustNotInclude: [
      'Diamondバンドルのように即時提供されるデジタルコンテンツについて',
      'TyconX',
      'beta',
    ],
  },
  {
    file: 'app/tycoonx-legal/ko/purchases/page.tsx',
    mustInclude: [
      '한국어 버전: 2026년 8월 28일',
      '영어 정본: 2026년 8월 28일',
      '14일의 법정 철회권',
      '사용하지 않은 구매 Diamonds',
      '실제 통화 기준으로 명확하고 이해하기 쉽게 표시',
      '필수 업데이트 및 지원 버전',
      'TycoonX',
    ],
    mustNotInclude: [
      'Diamond 번들과 같이 즉시 제공되는 디지털 콘텐츠의 법정 철회권',
      'TyconX',
      'beta',
    ],
  },
  {
    file: 'app/tycoonx-legal/zh/purchases/page.tsx',
    mustInclude: [
      '中文版本：2026 年 8 月 28 日',
      '英语正本：2026 年 8 月 28 日',
      '14 天法定撤回权',
      '尚未使用的已购买 Diamonds',
      '真实货币价格信息',
      '必要更新与受支持版本',
      'TycoonX',
    ],
    mustNotInclude: [
      '对于 Diamonds 等即时提供的数字内容',
      'TyconX',
      'beta',
    ],
  },
  {
    file: 'app/tycoonx-legal/zh_Hant/purchases/page.tsx',
    mustInclude: [
      '繁體中文版本：2026 年 8 月 28 日',
      '英語正本：2026 年 8 月 28 日',
      '14 天法定撤回權',
      '尚未使用的已購買 Diamonds',
      '真實貨幣價格資訊',
      '必要更新與受支援版本',
      'TycoonX',
    ],
    mustNotInclude: [
      '對 Diamonds 等立即提供的數位內容',
      'TyconX',
      'beta',
    ],
  },
  {
    file: 'TYCOONX_EU_VIRTUAL_CURRENCY_RELEASE_GATE.md',
    mustInclude: [
      'March 21, 2025',
      'real-world monetary price',
      '14-day statutory withdrawal right',
      'unused purchased Diamonds',
      'children',
      'Apple App Store',
      'Google Play',
      'Xsolla',
      'TycoonX',
    ],
    mustNotInclude: ['TyconX', 'beta'],
  },
];

let failed = false;

for (const check of checks) {
  if (!fs.existsSync(check.file)) {
    console.error(`MISSING: ${check.file}`);
    failed = true;
    continue;
  }

  const text = fs.readFileSync(check.file, 'utf8');

  for (const needle of check.mustInclude) {
    if (!text.includes(needle)) {
      console.error(`MISSING TEXT in ${check.file}: ${needle}`);
      failed = true;
    }
  }

  for (const needle of check.mustNotInclude) {
    if (text.includes(needle)) {
      console.error(`FORBIDDEN TEXT in ${check.file}: ${needle}`);
      failed = true;
    }
  }
}

if (failed) process.exit(1);
console.log('TycoonX EU virtual-currency legal checks passed.');