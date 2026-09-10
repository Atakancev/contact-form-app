import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'TycoonX Community Standards | CK-Labs',
  description:
    'Official TycoonX Community Standards & Moderation Policy from CK-Labs, covering user-generated content, chats, reports, enforcement, appeals, safety, and platform rules.',
};

export default function TycoonXCommunityStandardsLayout({ children }: { children: ReactNode }) {
  return children;
}
