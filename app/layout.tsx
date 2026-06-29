import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SEO & Google Ranking Guide 2025 – Alles was du wissen musst",
  description:
    "Lerne wie Google Ranking funktioniert, welche SEO-Faktoren entscheidend sind und wie du deine Webseite auf Platz 1 bringst. Der komplette SEO-Leitfaden 2025.",
  keywords:
    "SEO, Google Ranking, Suchmaschinenoptimierung, On-Page SEO, Off-Page SEO, technisches SEO, Keywords, Backlinks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
