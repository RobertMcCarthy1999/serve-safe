import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import ToasterClient from './components/ToasterClient';
import NavBar from './components/NavBar';
import { cookies } from 'next/headers';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600'],
});

export const metadata = {
  title: 'LetSuite',
  description: 'A multi-tool platform for landlords',
};

export default async function RootLayout({ children }) {
  



  return (
    <html lang="en">
      <body className={montserrat.className}>
        {/* Global NavBar removed — now controlled in nested layouts only */}
        {children}
        <ToasterClient />
        <Analytics />
      </body>
    </html>
  );
}
