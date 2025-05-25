'use client';

import Link from 'next/link';
import Footer from '@/app/components/Footer'; // 👈 Make sure you have this

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

      {/* MAIN */}
      <main className="flex-grow">
        {/* HERO */}
        <section className="text-center py-20 px-6 bg-yellow-100 border-b">
          <h1 className="text-4xl font-bold mb-4 text-yellow-700">TenantScore for Tenants</h1>
          <p className="text-lg max-w-xl mx-auto mb-6">
            Run a quick health check on your rental — know your rights, assess conditions, and build a proof-backed tenant score.
          </p>
          <Link href="/tools/tenancy-health-check/survey">
            <span className="inline-block px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition cursor-pointer">
              Get Started
            </span>
          </Link>
        </section>

        {/* WHY USE */}
        <section className="py-14 px-6 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Why Use TenantScore?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <Feature title="Stay Protected" desc="See how your tenancy scores against legal and safety standards." />
            <Feature title="Track Property Issues" desc="Spot issues like damp, document gaps, or poor communication." />
            <Feature title="Build Tenant History" desc="Create a score record for future tenancies and references." />
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-yellow-50 py-14 px-6 border-t border-b">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-10">How TenantScore Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <Step num="1" title="Take the Survey" desc="Answer a few quick questions about your rental." />
              <Step num="2" title="View Your Score" desc="Get a score out of 100 with clear results." />
              <Step num="3" title="Save or Share" desc="Download or share your report with your landlord." />
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="py-14 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Why Tenants Trust TenantScore</h2>
          <ul className="text-sm text-gray-700 space-y-3 text-left max-w-md mx-auto">
            <li>✅ Fully anonymous — no login needed</li>
            <li>✅ Designed for UK tenancy laws</li>
            <li>✅ Track your living conditions safely</li>
            <li>✅ Free to use during beta</li>
            <li>✅ Works on mobile and desktop</li>
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
              <li>✔ Unlimited surveys</li>
              <li>✔ Save or share your score</li>
              <li>✔ No login required</li>
            </ul>
          </div>
        </section>

        {/* WAITLIST */}
        <section className="bg-yellow-100 py-14 px-6 text-center border-t">
          <h2 className="text-2xl font-bold mb-4 text-yellow-700">Join the Waitlist</h2>
          <p className="text-gray-700 mb-6">Get notified when full launch and score tracking features go live.</p>
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
              Notify Me
            </button>
          </form>
        </section>

        {/* FINAL CTA */}
        <section className="text-center py-12 px-6 bg-white border-t">
          <h3 className="text-xl font-bold mb-4 text-yellow-700">Ready to check your tenancy health?</h3>
          <Link href="/tools/tenancy-health-check/survey">
            <span className="inline-block px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition cursor-pointer">
              Take the Survey
            </span>
          </Link>
        </section>
      </main>

      {/* FOOTER */}
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
