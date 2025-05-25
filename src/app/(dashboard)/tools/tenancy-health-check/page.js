'use client';

import Link from 'next/link';

export default function TenantScoreLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white text-gray-800">
      {/* HERO */}
      <section className="text-center py-16 px-6 bg-yellow-100">
        <h1 className="text-4xl font-bold mb-4 text-yellow-700">TenantScore for Tenants</h1>
        <p className="text-lg max-w-xl mx-auto mb-6">
          Rate your tenancy experience and generate a score — build references, report issues, and track health over time.
        </p>
        <Link href="/tools/tenancy-health-check/survey">
          <span className="inline-block px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition cursor-pointer">
            Get Started
          </span>
        </Link>
      </section>

      {/* WHY USE */}
      <section className="py-14 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Why Use TenantScore?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="font-bold mb-2 text-yellow-600">Know Your Rights</h3>
            <p className="text-sm text-gray-600">Quickly check if your tenancy meets UK legal and safety standards.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="font-bold mb-2 text-yellow-600">Spot Property Issues</h3>
            <p className="text-sm text-gray-600">Flag unresolved problems and start a transparent conversation.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="font-bold mb-2 text-yellow-600">Build Tenant References</h3>
            <p className="text-sm text-gray-600">Keep a record of positive tenancy history and landlord feedback.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-14 px-6 bg-yellow-50 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">How TenantScore Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div>
              <h4 className="font-semibold text-yellow-700 mb-2">1. Answer the survey</h4>
              <p className="text-sm text-gray-600">Rate your tenancy experience across 5 key areas.</p>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-700 mb-2">2. Get your score</h4>
              <p className="text-sm text-gray-600">We calculate a clear score out of 100, with guidance.</p>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-700 mb-2">3. Take action</h4>
              <p className="text-sm text-gray-600">Save, share or use your score to address issues or show references.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-14 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Why Tenants Trust TenantScore</h2>
        <ul className="text-sm text-gray-600 space-y-3">
          <li>✅ Fully anonymous & confidential</li>
          <li>✅ Built for UK renting standards</li>
          <li>✅ No login required during beta</li>
          <li>✅ Free to use — always</li>
        </ul>
      </section>
    </div>
  );
}
