'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/startsafe" className="flex items-center space-x-2">
          <img
            src="/images/startsafe-logo-blue.png"
            alt="StartSafe Logo"
            className="h-12 object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-6 text-sm font-medium items-center">
          <Link href="/startsafe/send" className="text-gray-700 hover:text-blue-600">Upload Docs</Link>
          <Link href="/pricing" className="text-gray-700 hover:text-blue-600">Pricing</Link>
          <Link href="/faq" className="text-gray-700 hover:text-blue-600">FAQ</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          <Link href="/" className="text-blue-600 hover:underline ml-4">← Back to Dashboard</Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-blue-600"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 text-sm font-medium">
          <Link href="/startsafe/send" className="block text-gray-700 hover:text-blue-600">Upload Docs</Link>
          <Link href="/pricing" className="block text-gray-700 hover:text-blue-600">Pricing</Link>
          <Link href="/faq" className="block text-gray-700 hover:text-blue-600">FAQ</Link>
          <Link href="/contact" className="block text-gray-700 hover:text-blue-600">Contact</Link>
          <Link href="/" className="block text-blue-600 hover:underline">← Back to Dashboard</Link>
        </div>
      )}
    </nav>
  );
}




