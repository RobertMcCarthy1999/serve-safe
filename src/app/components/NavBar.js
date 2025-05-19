'use client';

import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
  <img
    src="/images/servesafe-logo-blue.png"
    alt="ServeSafe Logo"
    className="h-16"
  />
</Link>
        <div className="space-x-6 text-sm font-medium">
          <Link href="/send" className="text-gray-700 hover:text-blue-600">Upload Docs</Link>
          <Link href="/pricing" className="text-gray-700 hover:text-blue-600">Pricing</Link>
        </div>
      </div>
    </nav>
  );
}

