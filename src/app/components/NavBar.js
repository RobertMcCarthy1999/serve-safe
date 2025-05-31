'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/startsafe" className="flex items-center space-x-2">
          <Image
            src="/images/startsafe-logo-blue.png"
            alt="StartSafe Logo"
            width={120}
            height={48}
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/startsafe/send" className="text-gray-700 hover:text-blue-600">Upload Docs</Link>
          <Link href="/pricing" className="text-gray-700 hover:text-blue-600">Pricing</Link>
          <Link href="/faq" className="text-gray-700 hover:text-blue-600">FAQ</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          <Link href="/dashboard" className="text-blue-600 hover:underline">← Back to Dashboard</Link>

          <div className="ml-4">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-blue-600 hover:underline">Log in</button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-blue-600"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 text-sm font-medium">
          <Link href="/startsafe/send" className="block text-gray-700 hover:text-blue-600">Upload Docs</Link>
          <Link href="/pricing" className="block text-gray-700 hover:text-blue-600">Pricing</Link>
          <Link href="/faq" className="block text-gray-700 hover:text-blue-600">FAQ</Link>
          <Link href="/contact" className="block text-gray-700 hover:text-blue-600">Contact</Link>
          <Link href="/dashboard" className="block text-blue-600 hover:underline">← Back to Dashboard</Link>

          <SignedIn>
            <div className="mt-2">
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="text-blue-600 hover:underline">Log in</button>
            </SignInButton>
          </SignedOut>
        </div>
      )}
    </nav>
  );
}
