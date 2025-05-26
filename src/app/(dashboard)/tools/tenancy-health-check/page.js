'use client'; // Marked as a client-side component (uses interactive UI elements)

// Internal navigation using Next.js' Link (no full page reloads)
import Link from 'next/link';

// Main component for the TenantScore marketing/entry page
export default function TenantScoreLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      
      {/* === HEADER === */}
      {/* Brand logo and back-to-dashboard nav */}
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

      {/* === MAIN === */}
      <main className="flex-grow">

        {/* === HERO SECTION === */}
        {/* High-level product pitch and primary CTA */}
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

        {/* === FEATURE HIGHLIGHTS === */}
        {/* Benefits for landlords – improves trust and conversion */}
        <section className="py-14 px-6 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Why Use TenantScore?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <Feature title="Get Honest Feedback" desc="Tenants answer anonymously, giving you truthful insights into their experience." />
            <Feature title="Reduce Costly Turnover" desc="Spot issues early, fix what matters, and retain great tenants longer." />
            <Feature title="Prove You Care" desc="Show tenants you're serious about quality — and back it up with action." />
          </div>
        </section>

        {/* === HOW IT WORKS === */}
        {/* Step-by-step guide to reassure landlords about ease of use */}
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

        {/* === TRUST SIGNALS === */}
        {/* Social proof / compliance alignment. Helps reduce user hesitation */}
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

        {/* === PRICING === */}
        {/* Free beta access – increases adoption before monetisation */}
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

        {/* === FINAL CTA === */}
        {/* Strong close with final push to start survey */}
        <section className="text-center py-12 px-6 bg-white border-t">
          <h3 className="text-xl font-bold mb-4 text-yellow-700">Improve the quality of your tenancies</h3>
          <Link href="/tools/tenancy-health-check/survey">
            <span className="inline-block px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition cursor-pointer">
              Launch TenantScore
            </span>
          </Link>
        </section>
      </main>
    </div>
  );
}
