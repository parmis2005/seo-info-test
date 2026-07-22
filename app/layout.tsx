import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

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
  children: ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">{children}</body>
    </html>
  );
}
