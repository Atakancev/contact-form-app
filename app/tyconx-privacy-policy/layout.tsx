import type { ReactNode } from 'react';
import TransferRiskPrivacyNotice from '../tycoonx-legal/TransferRiskPrivacyNotice';

export default function TycoonXPrivacyPolicyLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <TransferRiskPrivacyNotice />
    </>
  );
}
