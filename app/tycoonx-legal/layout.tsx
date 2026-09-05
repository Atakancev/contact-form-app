import type { ReactNode } from 'react';
import LegalInlineFormatting from './LegalInlineFormatting';
import TransferRuleNotice from './TransferRuleNotice';
import RealMoneyTradingNotice from './RealMoneyTradingNotice';
import TransferRiskPrivacyNotice from './TransferRiskPrivacyNotice';
import OfficialPurchaseRefundNotice from './OfficialPurchaseRefundNotice';

export default function TycoonXLegalLayout({ children }: { children: ReactNode }) {
  return (
    <div data-tycoonx-legal-root>
      <LegalInlineFormatting />
      {children}
      <TransferRuleNotice />
      <RealMoneyTradingNotice />
      <TransferRiskPrivacyNotice />
      <OfficialPurchaseRefundNotice />
    </div>
  );
}
