import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Nirexx.AI - Personal Athletic Intelligence",
  description: "The future of personal athletic intelligence powered by AI insights and real-time analytics",
  keywords: "AI, fitness, athletic, performance, analytics",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Nirexx.AI - Personal Athletic Intelligence",
    description: "Transform your athletic performance with AI-powered insights",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#050505" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="bg-primary text-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
