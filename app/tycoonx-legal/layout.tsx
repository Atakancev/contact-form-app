import type { ReactNode } from 'react';
import LegalInlineFormatting from './LegalInlineFormatting';
import TransferRuleNotice from './TransferRuleNotice';
import GameplayEconomyRuleNotice from './GameplayEconomyRuleNotice';
import RealMoneyTradingNotice from './RealMoneyTradingNotice';
import TransferRiskPrivacyNotice from './TransferRiskPrivacyNotice';
import ControllerIdentityPrivacyNotice from './ControllerIdentityPrivacyNotice';
import OfficialPurchaseRefundNotice from './OfficialPurchaseRefundNotice';

export default function TycoonXLegalLayout({ children }: { children: ReactNode }) {
  return (
    <div data-tycoonx-legal-root>
      <LegalInlineFormatting />
      {children}
      <TransferRuleNotice />
      <GameplayEconomyRuleNotice />
      <RealMoneyTradingNotice />
      <TransferRiskPrivacyNotice />
      <ControllerIdentityPrivacyNotice />
      <OfficialPurchaseRefundNotice />
    </div>
  );
}
