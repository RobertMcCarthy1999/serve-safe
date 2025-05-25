import './globals.css';
import { Montserrat } from 'next/font/google';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import ToasterClient from './components/ToasterClient';
import NavBar from './components/NavBar';
import SupabaseProvider from './components/SupabaseProvider'; // ✅ session wrapper

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
        <SupabaseProvider>
          <NavBar />
          {children}
          <ToasterClient />
          <Analytics />
        </SupabaseProvider>
      </body>
    </html>
  );
}
