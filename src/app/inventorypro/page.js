'use client';

import Link from 'next/link';

export default function InventoryProLanding() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gray-100 py-12 px-4">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
    <div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">InventoryPro for Landlords</h1>
      <p className="text-lg mb-6">
        The fastest way to build and export professional landlord inventories with timestamped photos and structured reports.
      </p>
      <Link href="/inventorypro/send">
        <button className="bg-pink-600 text-white px-6 py-3 rounded hover:bg-pink-700">
          Get Started
        </button>
      </Link>
    </div>
    <div className="flex justify-center">
      <img
        src="/images/inventorypro-hero.png"
        alt="Illustration of InventoryPro in use"
        className="w-full max-w-md"
      />
    </div>
  </div>
</section>


      {/* Why Use InventoryPro */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Why Use InventoryPro?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard title="Room-by-Room Reports" icon="📋" text="Document every space with notes and condition." />
          <FeatureCard title="Photo Uploads" icon="📷" text="Capture timestamped photos as proof." />
          <FeatureCard title="PDF Export" icon="📄" text="Download a report for deposit protection and disputes." />
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <StepCard title="Add Rooms" text="Create a section for each room in the property." />
          <StepCard title="Add Items + Photos" text="Log conditions and upload photo evidence." />
          <StepCard title="Export to PDF" text="Download a print-ready report with one click." />
        </div>
      </section>

      {/* Why Landlords Trust It */}
      <section className="py-16 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Why Landlords Trust InventoryPro</h2>
        <ul className="text-left list-disc pl-6 space-y-2">
          <li>Quick to complete on site</li>
          <li>High-quality reports reduce disputes</li>
          <li>No more paper forms or Word templates</li>
          <li>Free to use while in beta</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="bg-pink-600 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Start building reports today</h2>
        <Link href="/inventorypro/send">
          <button className="bg-white text-pink-600 font-semibold px-6 py-3 rounded hover:bg-gray-100">
            Get Started
          </button>
        </Link>
      </section>
    </main>
  );
}

// Reusable components
function FeatureCard({ icon, title, text }) {
  return (
    <div className="bg-white border p-6 rounded-lg text-center shadow">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function StepCard({ title, text }) {
  return (
    <div className="bg-white border p-6 rounded-lg shadow">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p>{text}</p>
    </div>
  );
}
