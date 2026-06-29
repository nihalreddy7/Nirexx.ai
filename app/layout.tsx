import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'Nirexx.AI - The Future of Personal Athletic Intelligence',
  description: 'Meet the world\'s smartest AI-powered wearable that transforms biometric data into real-time coaching, predictive insights, and elite performance.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="bg-primary text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
