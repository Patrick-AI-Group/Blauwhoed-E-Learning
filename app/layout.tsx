import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const nunitoSans = Nunito_Sans({ subsets: ["latin"], weight: ["400", "600", "700", "800"], variable: "--font-nunito-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"),
  title: { default: "Blauwhoed AI Academy", template: "%s · Blauwhoed AI Academy" },
  description: "Veilig en praktisch leren werken met AI bij Blauwhoed.",
  openGraph: { title: "Blauwhoed AI Academy", description: "Verantwoord werken met AI. Praktijk, veiligheid en vakmanschap.", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Blauwhoed AI Academy" }], locale: "nl_NL", type: "website" },
  twitter: { card: "summary_large_image", title: "Blauwhoed AI Academy", description: "Verantwoord werken met AI. Praktijk, veiligheid en vakmanschap.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const content = <html lang="nl"><body className={`${nunitoSans.variable} font-sans antialiased`}>{children}</body></html>;
  return process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ? <ClerkProvider>{content}</ClerkProvider> : content;
}
