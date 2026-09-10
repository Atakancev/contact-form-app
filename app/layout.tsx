import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import GameplayEconomyRuleNotice from "./tycoonx-legal/GameplayEconomyRuleNotice";
import CompanyCommerceRuleNotice from "./tycoonx-legal/CompanyCommerceRuleNotice";
import UnionGovernanceRuleNotice from "./tycoonx-legal/UnionGovernanceRuleNotice";
import ArtBeggingRuleNotice from "./tycoonx-legal/ArtBeggingRuleNotice";
import PlayerGovernmentMarketRuleNotice from "./tycoonx-legal/PlayerGovernmentMarketRuleNotice";
import BankCreditMarketsRuleNotice from "./tycoonx-legal/BankCreditMarketsRuleNotice";
import LogisticsJobsCompetitionsRuleNotice from "./tycoonx-legal/LogisticsJobsCompetitionsRuleNotice";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KurzAI",
  description: "KurzAI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <GameplayEconomyRuleNotice />
        <CompanyCommerceRuleNotice />
        <UnionGovernanceRuleNotice />
        <ArtBeggingRuleNotice />
        <PlayerGovernmentMarketRuleNotice />
        <BankCreditMarketsRuleNotice />
        <LogisticsJobsCompetitionsRuleNotice />
      </body>
    </html>
  );
}
