'use client';

import Link from 'next/link';
import Footer from '@/app/components/Footer';

export default function TenantScoreLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* HEADER */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/dashboard">
            <span className="text-xl font-bold text-yellow-600 cursor-pointer">LetSuite</span>
          </Link>
          <nav className="space-x-4 text-sm text-gray-600 hidden sm:block">
            <Link href="/dashboard">
              <span className="hover:text-yellow-600 cursor-pointer">Back to Dashboard</span>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* HERO */}
        <section className="text-center py-20 px-6 bg-yellow-100 border-b">
          <h1 className="text-4xl font-bold mb-4 text-yellow-700">TenantScore for Landlords</h1>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Send a tenancy health check to your tenants and receive a clear, anonymous scorecard. Improve retention, reduce voids, and strengthen your letting standards.
          </p>
          <Link href="/tools/tenancy-health-check/survey">
            <span className="inline-block px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition cursor-pointer">
              Send the Health Check
            </span>
          </Link>
        </section>

        {/* WHY USE */}
        <section className="py-14 px-6 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Why Use TenantScore?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <Feature title="Get Honest Feedback" desc="Tenants answer anonymously, giving you truthful insights into their experience." />
            <Feature title="Reduce Costly Turnover" desc="Spot issues early, fix what matters, and retain great tenants longer." />
            <Feature title="Prove You Care" desc="Show tenants you're serious about quality — and back it up with action." />
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-yellow-50 py-14 px-6 border-t border-b">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-10">How TenantScore Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <Step num="1" title="Send the Link" desc="We provide a survey link you can email or text to your tenant." />
              <Step num="2" title="Tenant Responds" desc="The tenant completes a short, anonymous health check form." />
              <Step num="3" title="You Get a Scorecard" desc="We generate a clear score out of 100 with suggested improvements." />
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="py-14 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Why Landlords Use TenantScore</h2>
          <ul className="text-sm text-gray-700 space-y-3 text-left max-w-md mx-auto">
            <li>✅ Anonymous feedback — no awkward conversations</li>
            <li>✅ Based on UK tenancy compliance standards</li>
            <li>✅ Helps reduce void periods and legal risk</li>
            <li>✅ Supports better communication</li>
            <li>✅ Tenants respond in under 2 minutes</li>
          </ul>
        </section>

        {/* PRICING */}
        <section className="bg-white py-16 border-t text-center">
          <h2 className="text-2xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 mb-8">TenantScore is <strong>free while in beta</strong>. You’ll always get notified before any pricing changes.</p>
          <div className="inline-block border border-yellow-300 bg-yellow-50 rounded-xl p-6 shadow text-left">
            <p className="text-2xl font-bold text-yellow-700 mb-2">Beta Access</p>
            <p className="text-3xl font-bold mb-2">£0</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✔ Unlimited feedback surveys</li>
              <li>✔ Landlord scorecard on completion</li>
              <li>✔ No login required by tenants</li>
            </ul>
          </div>
        </section>

        {/* WAITLIST */}
        <section className="bg-yellow-100 py-14 px-6 text-center border-t">
          <h2 className="text-2xl font-bold mb-4 text-yellow-700">Join the Launch List</h2>
          <p className="text-gray-700 mb-6">Be first to access score history, trend tracking and custom alerts.</p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 border border-gray-300 rounded w-full"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition"
            >
              Join Waitlist
            </button>
          </form>
        </section>

        {/* FINAL CTA */}
        <section className="text-center py-12 px-6 bg-white border-t">
          <h3 className="text-xl font-bold mb-4 text-yellow-700">Improve the quality of your tenancies</h3>
          <Link href="/tools/tenancy-health-check/survey">
            <span className="inline-block px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition cursor-pointer">
              Launch TenantScore
            </span>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="bg-white border rounded-xl shadow p-6">
      <h3 className="font-bold text-yellow-600 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function Step({ num, title, desc }) {
  return (
    <div>
      <h4 className="font-semibold text-yellow-700 mb-2">{num}. {title}</h4>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}
