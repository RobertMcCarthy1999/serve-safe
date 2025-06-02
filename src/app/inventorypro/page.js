// ✅ inventorypro/page.js (Landing Page)

'use client';
import Link from 'next/link';
import { Lightbulb, Camera, ClipboardList, FileText } from 'lucide-react';

export default function InventoryProLanding() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-5xl font-extrabold mb-4">InventoryPro</h1>
      <p className="text-xl text-gray-600 mb-10 max-w-2xl">
        The fastest way to build and export professional landlord inventories with timestamped photos and structured reports.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        <Feature icon={<ClipboardList />} title="Room-by-Room Reports" description="Document every space with notes, condition, and timestamps." />
        <Feature icon={<Camera />} title="Photo Uploads" description="Capture visual proof to support your report." />
        <Feature icon={<FileText />} title="Export to PDF" description="Generate print-ready PDFs with all metadata." />
        <Feature icon={<Lightbulb />} title="Smart UX" description="Optimised form flow for desktop or mobile use." />
      </div>

      <Link href="/inventorypro/send">
        <button className="bg-rose-600 hover:bg-rose-700 text-white font-medium px-6 py-3 rounded-lg text-lg shadow">
          Get Started
        </button>
      </Link>
    </main>
  );
}

function Feature({ icon, title, description }) {
  return (
    <div className="bg-white shadow rounded-lg p-5 flex items-start space-x-4">
      <div className="text-rose-600">{icon}</div>
      <div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}
