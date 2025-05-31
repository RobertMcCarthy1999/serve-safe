'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-gray-50 text-gray-900`}>
          {/* Top Navbar */}
          <header className="bg-white border-b shadow-sm px-4 py-3 flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/letsuite-logo.png" alt="LetSuite" width={120} height={40} />
            </Link>
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="bg-gray-100 text-sm px-4 py-2 rounded-md text-gray-700 hover:bg-gray-200"
              >
                Home
              </Link>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="text-blue-600 hover:underline">Sign In</button>
                </SignInButton>
              </SignedOut>
            </div>
          </header>

          {/* Page content */}
          <main className="min-h-screen">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
