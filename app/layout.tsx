import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const interTight = Inter_Tight({ subsets: ["latin"], variable: "--font-inter-tight", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"),
  title: { default: "Blauwhoed AI Academy", template: "%s · Blauwhoed AI Academy" },
  description: "Veilig en praktisch leren werken met AI bij Blauwhoed.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const content = <html lang="nl"><body className={`${interTight.variable} antialiased`}>{children}</body></html>;
  return process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ? <ClerkProvider>{content}</ClerkProvider> : content;
}
