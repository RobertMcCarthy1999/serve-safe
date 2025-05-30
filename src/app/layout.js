import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import ToasterClient from './components/ToasterClient';
import { ClerkProvider } from '@clerk/nextjs';

export const metadata = {
  title: 'LetSuite',
  description: 'A multi-tool platform for landlords',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-gray-50 text-gray-900 font-sans">
          {children}
          <ToasterClient />
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
