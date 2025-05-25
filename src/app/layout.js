// File: src/app/layout.js

import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import ToasterClient from './components/ToasterClient';
import { Montserrat } from 'next/font/google';
import { Geist, Geist_Mono } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600'],
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'LetSuite',
  description: 'A multi-tool platform for landlords',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
        <ToasterClient />
        <Analytics />
      </body>
    </html>
  );
}
