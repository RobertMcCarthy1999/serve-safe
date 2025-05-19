'use client';

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">Simple, Legal & Affordable</h1>
        <p className="text-lg text-gray-700 mb-10">
          One simple price to stay fully compliant as a UK landlord.
        </p>

        <div className="bg-gray-100 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">£9.99/year</h2>
          
          <ul className="text-left text-gray-700 space-y-3 mb-6">
            <li>✅ Upload 7 legal documents</li>
            <li>✅ Auto-email to landlord & tenant</li>
            <li>✅ Delivery confirmation screen</li>
            <li>✅ Complies with Housing Act 2004</li>
            <li>✅ Branded with your logo</li>
          </ul>

          <button
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 transition"
            onClick={() => alert('Stripe integration coming soon')}
          >
            Pay £9.99 & Get Started
          </button>

          <p className="text-sm text-gray-500 mt-4">No recurring charges. Just one simple annual fee.</p>
        </div>
      </div>
    </main>
  );
}

