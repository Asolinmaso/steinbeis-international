import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Steinbeis International – German Language Training in Chennai",
  description: "Structured A1–B2 German courses with certified trainers, practical learning, and complete guidance for study and jobs in Germany. Located in Chennai, Tamil Nadu.",
  keywords: "German language training Chennai, German A1 A2 B1 B2 courses, learn German India, Goethe exam preparation",
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
