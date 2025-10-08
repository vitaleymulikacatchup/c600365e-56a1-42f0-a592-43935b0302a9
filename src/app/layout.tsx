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
  title: "BarneyCoin — The fun memecoin with a vibrant community",
  description: "BarneyCoin is a playful memecoin built for accessibility and a community vibe. Simple purchase steps, transparent tokenomics, and a friendly, fun brand experience.",
  keywords: ["barneycoin","memecoin","fun crypto","community","buy barneycoin","crypto tokenomics","cute branding","playful crypto","digital currency","crypto meme"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BarneyCoin — The fun memecoin with a vibrant community",
    description: "BarneyCoin is a playful memecoin built for accessibility and a community vibe. Simple purchase steps, transparent tokenomics, and a friendly, fun brand experience.",
    type: "website",
    url: "/",
    siteName: "BarneyCoin",
    images: [{
      url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/design-a-simple-high-contrast-logo-for-b-1759930698393-9d5f0d0b.jpg",
      width: 1200,
      height: 630,
      alt: "BarneyCoin logo with a purple-pink gradient and friendly mascot"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "BarneyCoin — The fun memecoin with a vibrant community",
    description: "BarneyCoin is a playful memecoin built for accessibility and a community vibe. Simple purchase steps, transparent tokenomics, and a friendly, fun brand experience.",
    images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/design-a-simple-high-contrast-logo-for-b-1759930698393-9d5f0d0b.jpg"]
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}