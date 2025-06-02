'use client';

import Link from 'next/link';

export default function InventoryProLanding() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">InventoryPro</h1>
      <p className="text-lg mb-6 text-gray-700">
        Create detailed check-in, check-out, and inspection reports. Log room condition, upload photos, and export reports to PDF.
      </p>
      <ul className="list-disc list-inside text-gray-600 mb-6">
        <li>Room-by-room condition logging</li>
        <li>Photo uploads with timestamps</li>
        <li>Save, preview, and export as PDF</li>
        <li>Compare reports over time</li>
      </ul>
      <Link
        href="/inventorypro/send"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        Start Inventory Report
      </Link>
    </main>
  );
}
