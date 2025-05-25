import './globals.css';
import { Montserrat } from 'next/font/google';
import ToasterClient from './components/ToasterClient';
import { Analytics } from '@vercel/analytics/react';
import NavBar from './components/NavBar';


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
        <NavBar /> {/* ✅ Universal */}
        {children}
        <ToasterClient />
        <Analytics />
      </body>
    </html>
  );
}
