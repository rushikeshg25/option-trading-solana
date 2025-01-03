import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import { WalletWrapper } from "@/components/wallet";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SolanaOptions - Prediction Events",
  description:
    "Stake your SOL on prediction events and trade options in real-time",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <WalletWrapper>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="min-h-screen bg-background">
              <Navbar />
              <main>{children}</main>
            </div>
            <Toaster />
          </ThemeProvider>
        </WalletWrapper>
      </body>
    </html>
  );
}
