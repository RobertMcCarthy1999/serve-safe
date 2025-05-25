import './globals.css';
import { Montserrat } from 'next/font/google';
import NavBar from './components/NavBar';
import ToasterClient from './components/ToasterClient';
import { Analytics } from '@vercel/analytics/react';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600'],
});

export const metadata = {
  title: 'LetSuite',
  description: 'A multi-tool platform for landlords',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NavBar />
        {children}
        <ToasterClient />
        <Analytics />
      </body>
    </html>
  );
}
