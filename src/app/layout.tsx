import { PropsWithChildren } from 'react';

import type { Metadata } from 'next';
import { Public_Sans } from 'next/font/google';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

import { BlackFridayBanner } from '@/widgets/black-friday-banner';
import { Header } from '@/widgets/header';

import { theme } from '@/shared/configs';

import './styles/globals.scss';

const publicSans = Public_Sans({
  variable: '--font-public-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'Akinai商い',
    template: '%s | Akinai商い',
  },
  description: 'Akinai — твій простір для стильного шопінгу',
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html suppressHydrationWarning lang="uk">
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body className={`${publicSans.variable} wrapper`}>
        <MantineProvider theme={theme}>
          <BlackFridayBanner />
          <Header />

          <main className="main">{children}</main>
        </MantineProvider>
      </body>
    </html>
  );
}
