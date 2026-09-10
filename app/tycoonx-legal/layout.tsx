import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import LegalInlineFormatting from './LegalInlineFormatting';
import TransferRuleNotice from './TransferRuleNotice';
import TransferRiskPrivacyNotice from './TransferRiskPrivacyNotice';

export const metadata: Metadata = {
  title: 'TycoonX Legal | CK-Labs',
  description:
    'Official TycoonX legal documents from CK-Labs, including localized Terms of Service, Purchases & Refunds, Privacy Policy, and Community Standards.',
};

export default function TycoonXLegalLayout({ children }: { children: ReactNode }) {
  return (
    <div data-tycoonx-legal-root>
      <LegalInlineFormatting />
      {children}
      <TransferRuleNotice />
      <TransferRiskPrivacyNotice />
    </div>
  );
}
