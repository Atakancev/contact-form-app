import type { ReactNode } from 'react';
import LegalInlineFormatting from './LegalInlineFormatting';
import TransferRuleNotice from './TransferRuleNotice';
import RealMoneyTradingNotice from './RealMoneyTradingNotice';

export default function TycoonXLegalLayout({ children }: { children: ReactNode }) {
  return (
    <div data-tycoonx-legal-root>
      <LegalInlineFormatting />
      {children}
      <TransferRuleNotice />
      <RealMoneyTradingNotice />
    </div>
  );
}
