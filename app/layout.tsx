import type { Metadata } from 'next';
import { Noto_Serif } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

const notoSerif = Noto_Serif({
  variable: '--font-noto-serif-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://wellness-web-studio.vercel.app'),
  title: 'Wellness Web Studio',
  description: 'Modern websites for wellness professionals.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={notoSerif.className}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
