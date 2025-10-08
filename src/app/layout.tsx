import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "BarneyCoin — playful memecoin for a vibrant community",
  description: "BarneyCoin is a friendly memecoin built for accessibility and a thriving community. Clear buy steps, transparent tokenomics, and a bold, fun brand vibe.",
  keywords: ["barneycoin", "memecoin", "fun crypto", "community", "buy barneycoin", "tokenomics", "playful branding", "meme coin", "cryptocurrency", "barney mascot"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BarneyCoin — playful memecoin for a vibrant community",
    description: "BarneyCoin is a friendly memecoin built for accessibility and a thriving community. Clear buy steps, transparent tokenomics, and a bold, fun brand vibe.",
    type: "website",
    url: "/",
    siteName: "BarneyCoin",
    images: [{ url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/design-a-simple-high-contrast-logo-for-b-1759948433832-830d5b42.jpg", width: 1200, height: 630, alt: "BarneyCoin logo with a friendly mascot in a purple-pink gradient" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BarneyCoin — playful memecoin for a vibrant community",
    description: "BarneyCoin is a friendly memecoin built for accessibility and a thriving community. Clear buy steps, transparent tokenomics, and a bold, fun brand vibe.",
    images: [{ url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/design-a-simple-high-contrast-logo-for-b-1759948433832-830d5b42.jpg" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>{children}</body>
    </html>
  );
}