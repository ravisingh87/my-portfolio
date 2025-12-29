import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PERSONAL_INFO, SEO_CONFIG } from '@/lib/constants';
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
  metadataBase: new URL(SEO_CONFIG.siteUrl),
  title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.title}`,
  description: SEO_CONFIG.description,
  keywords: ["Frontend Developer", "React Developer", "Next.js Portfolio", "Software Engineer Bihar", "Web Development"],
  authors: [{ name:`${PERSONAL_INFO.name}`}],
  openGraph: {
    title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.title}`,
    description: "Building high-performance web applications with 5.8 years of expertise.",
    url: SEO_CONFIG.siteUrl,
    siteName: "Ravi Portfolio",
    images: [
      {
        url: "/og-image.png", // Put a screenshot of your site in /public/og-image.png
        width: 1200,
        height: 630,
        alt: "Ravi Shankar Singh Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.title}`,
    description: "Expertise in React, Next.js, and Cloud Computing.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          {children}
      </body>
    </html>
  );
}
