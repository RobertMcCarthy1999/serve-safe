import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import ToasterClient from './components/ToasterClient';
import NavBar from './components/NavBar';
import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
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

export default async function RootLayout({ children }) {
  const supabase = createServerComponentClient({ cookies: () => cookies() });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const path = typeof window !== 'undefined' ? window.location.pathname : '';
  const isDashboard = path === '/';

  return (
    <html lang="en">
      <body className={montserrat.className}>
        {!isDashboard && <NavBar />} {/* ✅ Only show NavBar outside dashboard */}
        {children}
        <ToasterClient />
        <Analytics />
      </body>
    </html>
  );
}

