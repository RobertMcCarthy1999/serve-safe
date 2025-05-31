'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Captured email:', email);
    setEmail('');
  };

  return (
    <main className="text-gray-900">
      {/* Nav */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow sticky top-0 z-50">
        <div className="text-2xl font-bold text-blue-700">LetSuite</div>
        <div className="space-x-6 text-sm font-medium">
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#pricing" className="hover:text-blue-600">Pricing</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
          <Link
            href="/sign-up"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Try it FREE
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-400 text-white text-center py-24 px-6">
        <h1 className="text-5xl font-bold mb-6">Simplify Property Management for UK Landlords</h1>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          LetSuite helps you stay compliant, organized, and stress-free with legal tools, document tracking, and tenant management — all in one dashboard.
        </p>
        <form onSubmit={handleSubmit} className="flex justify-center mb-8 gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="rounded px-4 py-2 w-full text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-white text-blue-600 px-4 py-2 rounded font-semibold hover:bg-blue-100 transition"
          >
            Notify Me
          </button>
        </form>
        <Image
          src="/dashboard-screenshot.png"
          alt="Dashboard preview"
          width={800}
          height={450}
          className="mx-auto rounded shadow-lg border border-white"
        />
      </section>

      {/* Features */}
      <section id="features" className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Manage legally, simply, and independently</h2>
          <p className="text-lg text-gray-700 mb-12">
            LetSuite empowers landlords to replace letting agents with legal automation, built-in proof, and tenant tools.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { title: "StartSafe", desc: "Deliver all 7 required tenancy documents with proof." },
              { title: "ServeSafe", desc: "Send Section 21/8 notices legally, with delivery records." },
              { title: "FixLog", desc: "Log repairs reported by tenants and get notified automatically." },
            ].map((f, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded shadow">
                <h3 className="font-bold text-xl mb-2">{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-gray-100 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Simple Pricing</h2>
        <p className="text-gray-700 mb-10">No agents. No hidden fees. Just one monthly plan.</p>
        <div className="max-w-md mx-auto bg-white shadow rounded p-8">
          <h3 className="text-2xl font-bold mb-4">£9/month</h3>
          <ul className="text-left list-disc list-inside mb-6 text-gray-700">
            <li>Unlimited documents</li>
            <li>Legal templates & notices</li>
            <li>Tenant communication tools</li>
            <li>First 14 days free</li>
          </ul>
          <Link
            href="/sign-up"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Start Free Trial
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-gray-700 mb-4">Questions? Email <a href="mailto:support@letsuite.co.uk" className="text-blue-600 underline">support@letsuite.co.uk</a></p>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-6 bg-blue-800 text-blue-100">
        © 2025 LetSuite. Built for UK landlords, by landlords.
      </footer>
    </main>
  );
}
