import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Steinbeis International – German Language Training in Chennai",
  description: "Structured A1–B2 German courses with certified trainers, practical learning, and complete guidance for study and jobs in Germany. Located in Chennai, Tamil Nadu.",
  keywords: "German language training Chennai, German A1 A2 B1 B2 courses, learn German India, Goethe exam preparation, Steinbeis International, steinbeisinternational",
  metadataBase: new URL("https://www.steinbeisinternational.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Steinbeis International – German Language Training in Chennai",
    description: "Structured A1–B2 German courses with certified trainers, practical learning, and complete guidance for study and jobs in Germany.",
    url: "https://www.steinbeisinternational.com",
    siteName: "Steinbeis International",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Steinbeis International Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steinbeis International – German Language Training in Chennai",
    description: "Structured A1–B2 German courses with certified trainers, practical learning, and complete guidance for study and jobs in Germany.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
