'use client';

import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          ServeSafe
        </Link>
        <div className="space-x-6 text-sm font-medium">
          <Link href="/send" className="text-gray-700 hover:text-blue-600">Upload Docs</Link>
          <Link href="/pricing" className="text-gray-700 hover:text-blue-600">Pricing</Link>
        </div>
      </div>
    </nav>
  );
}
