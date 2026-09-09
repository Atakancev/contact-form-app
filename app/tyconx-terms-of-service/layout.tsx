import type { ReactNode } from 'react';
import TransferRuleNotice from '../tycoonx-legal/TransferRuleNotice';
import RealMoneyTradingNotice from '../tycoonx-legal/RealMoneyTradingNotice';

export default function TycoonXTermsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <TransferRuleNotice />
      <RealMoneyTradingNotice />
    </>
  );
}
