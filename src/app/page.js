'use client';

import { useState } from 'react';

export default function HomePage() {
  const [form, setForm] = useState({ name: '', email: '', properties: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Waitlist submission:', form);
    setSubmitted(true);
  };

  return (
    <main className="bg-white text-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-400 text-white text-center py-20 px-6">
        <h1 className="text-5xl font-bold mb-6 max-w-4xl mx-auto">Your Complete Landlord Toolkit</h1>
        <p className="text-xl mb-10 max-w-3xl mx-auto">
          LetSuite brings all your compliance, documentation, tenant comms, and repairs into one easy-to-use dashboard. No letting agent required.
        </p>
        <div className="space-x-4 mb-10">
          <a href="/sign-up" className="bg-white text-blue-700 font-semibold px-6 py-3 rounded shadow hover:bg-blue-100 transition">
            Try LetSuite Free
          </a>
          <a href="/dashboard" className="border border-white px-6 py-3 rounded hover:bg-white hover:text-blue-700 transition">
            View Dashboard
          </a>
        </div>
        <img
          src="dashboard-screenshot.png"
          alt="LetSuite Dashboard Screenshot"
          className="mx-auto rounded shadow-lg border border-white"
        />
      </section>

      {/* Explainer + Waitlist */}
      <section className="mt-16 bg-white text-gray-900 px-6 py-12 rounded-xl max-w-2xl mx-auto shadow">
        <h2 className="text-2xl font-bold text-center mb-4">
          Serve-Safe empowers landlords to manage legally, simply, and independently.
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Join the waitlist to get early access and a 30% lifetime discount for the first 100 users.
        </p>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">Name</label>
              <input
                name="name"
                required
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Jane Landlord"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">How many properties?</label>
              <input
                type="number"
                name="properties"
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="e.g. 3"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Join Waitlist
            </button>
          </form>
        ) : (
          <div className="bg-blue-50 border border-blue-200 rounded p-4 text-center">
            <h3 className="font-bold text-lg mb-2">You&apos;re in! 🎉</h3>
            <p>Thanks for signing up. We&apos;ll be in touch soon.</p>
          </div>
        )}
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Everything you need to self-manage your rental legally and confidently</h2>
          <p className="text-lg text-gray-700 mb-12">
            LetSuite replaces scattered tools and expensive agents with a central hub designed for UK landlords.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { title: "StartSafe", desc: "Upload and deliver all 7 legally required tenancy start documents. Built-in proof delivery." },
              { title: "ServeSafe", desc: "Send Section 21 and Section 8 notices with secure timestamped proof — legally structured and fast." },
              { title: "TenantScore", desc: "Collect real feedback on tenants and build legitimate, sharable references from real history." },
              { title: "FixLog", desc: "Let tenants report issues directly to you. Get notified and log everything automatically." },
              { title: "DocVault", desc: "Store, search and share key landlord docs. Encrypted and always at hand when needed." },
              { title: "KeyTrack", desc: "Track handovers and returns with photo and timestamp proof. Built to avoid disputes." },
            ].map((f, i) => (
              <div key={i} className="bg-white p-6 rounded shadow">
                <h3 className="font-bold text-xl mb-2">{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Why landlords love LetSuite</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-gray-100 p-6 rounded shadow">
            <p className="mb-4">&ldquo;This toolkit helped me replace my letting agent and saved over £1,500 this year.&rdquo;</p>
            <p className="font-semibold">– Priya D., Croydon</p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow">
            <p className="mb-4">&ldquo;StartSafe and TenantScore are game-changers. Legal peace of mind in clicks.&rdquo;</p>
            <p className="font-semibold">– Mike S., Liverpool</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">Built for landlords. Trusted by landlords.</h2>
        <p className="mb-8 text-lg">LetSuite is your legal, secure, and scalable solution to managing rentals on your terms.</p>
        <a href="/sign-up" className="bg-white text-blue-700 font-semibold px-6 py-3 rounded shadow hover:bg-blue-100 transition">
          Get Started Free
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-6 bg-blue-800 text-blue-100">
        © 2025 LetSuite. Built for UK landlords, by landlords.
      </footer>
    </main>
  );
}
