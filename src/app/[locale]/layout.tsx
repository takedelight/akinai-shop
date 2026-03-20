import { ReactNode } from 'react';

import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

import { routing } from '@/shared/configs/i18n';
import { theme } from '@/shared/configs/mantine';

import '../styles/globals.scss';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
});
export const metadata: Metadata = {
  title: {
    default: 'Akinai商い',
    template: '%s | Akinai商い',
  },
  description: 'Akinai — твій простір для стильного шопінгу',
};

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html suppressHydrationWarning lang={locale}>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body className={`${inter.variable} wrapper`}>
        <NextIntlClientProvider>
          <MantineProvider theme={theme}>
            {/*<BlackFridayBanner />*/}
            <Header />

            <main className="main">{children}</main>

            <Footer />
          </MantineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
