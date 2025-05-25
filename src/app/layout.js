// File: src/app/layout.js
import './globals.css';
import { GeistSans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import NavBar from './components/NavBar';

const geistSans = GeistSans({ subsets: ['latin'] });

export const metadata = {
  title: 'LetSuite',
  description: 'A multi-tool platform for landlords',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geistSans.className}>
        <NavBar /> {/* Global LetSuite NavBar */}
        {children}
        <Analytics />
      </body>
    </html>
  );
}
