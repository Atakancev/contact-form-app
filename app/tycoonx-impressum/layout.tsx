import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'TycoonX Legal Notice | CK-Labs',
  description:
    'Official legal notice and provider information for TycoonX and CK-Labs, including contact information and consumer-dispute information.',
};

export default function TycoonXImpressumLayout({ children }: { children: ReactNode }) {
  return children;
}
