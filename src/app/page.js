'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [propertyCount, setPropertyCount] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(`Submitted: ${name}, ${email}, ${propertyCount}`);
  };

  return (
    <main className="bg-white text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          LetSuite
        </Link>
        <div className="space-x-6 text-sm font-medium">
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#pricing" className="hover:text-blue-600">Pricing</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-400 text-white text-center py-20 px-6">
        <h1 className="text-5xl font-bold mb-6 max-w-4xl mx-auto">
          Your Complete Landlord Toolkit
        </h1>
        <p className="text-xl mb-10 max-w-3xl mx-auto">
          LetSuite brings all your compliance, documentation, tenant comms, and repairs into one easy-to-use dashboard. No letting agent required.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white text-gray-800 p-6 rounded shadow space-y-4">
          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Number of properties"
            value={propertyCount}
            onChange={(e) => setPropertyCount(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Join Early Access
          </button>
        </form>
        <p className="mt-6 text-sm">Join now for priority access and exclusive early-user perks.</p>
      </section>

      {/* Features */}
      <section id="features" className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Everything you need to self-manage your rental legally and confidently</h2>
          <p className="text-lg text-gray-700 mb-12">
            LetSuite replaces scattered tools and expensive agents with a central hub designed for UK landlords.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { title: 'StartSafe', desc: 'Upload and deliver all 7 legally required tenancy start documents. Built-in proof delivery.' },
              { title: 'ServeSafe', desc: 'Send Section 21 and Section 8 notices with secure timestamped proof — legally structured and fast.' },
              { title: 'TenantScore', desc: 'Collect real feedback on tenants and build legitimate, sharable references from real history.' },
              { title: 'FixLog', desc: 'Let tenants report issues directly to you. Get notified and log everything automatically.' },
              { title: 'DocVault', desc: 'Store, search and share key landlord docs. Encrypted and always at hand when needed.' },
              { title: 'KeyTrack', desc: 'Track handovers and returns with photo and timestamp proof. Built to avoid disputes.' },
            ].map((f, i) => (
              <div key={i} className="bg-white p-6 rounded shadow">
                <h3 className="font-bold text-xl mb-2">{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Simple, Transparent Pricing</h2>
        <p className="text-gray-700 mb-12">Start for free. Upgrade only when you&apos;re ready.</p>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Free</h3>
            <p className="mb-4">£0/month</p>
            <ul className="text-sm text-gray-600 space-y-2 mb-4">
              <li>✔ StartSafe & ServeSafe</li>
              <li>✔ 2 documents/month</li>
              <li>✔ Email support</li>
            </ul>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Get Started
            </button>
          </div>
          <div className="border p-6 rounded shadow bg-blue-50">
            <h3 className="text-xl font-bold mb-2">Pro</h3>
            <p className="mb-4">£12/month</p>
            <ul className="text-sm text-gray-600 space-y-2 mb-4">
              <li>✔ Unlimited usage</li>
              <li>✔ Full tool access</li>
              <li>✔ Priority support</li>
            </ul>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Upgrade Now
            </button>
          </div>
          <div className="border p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Agency</h3>
            <p className="mb-4">Custom</p>
            <ul className="text-sm text-gray-600 space-y-2 mb-4">
              <li>✔ Bulk onboarding</li>
              <li>✔ White-label options</li>
              <li>✔ Dedicated support</li>
            </ul>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-100 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-700 mb-6">Questions? Partnerships? We&apos;re all ears.</p>
        <p className="text-blue-700 font-medium">hello@letsuite.co.uk</p>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-6 bg-blue-800 text-blue-100">
        © 2025 LetSuite. Built for UK landlords, by landlords.
      </footer>
    </main>
  );
}
