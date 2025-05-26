'use client';

import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const res = await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' },
    });

    setStatus(res.ok ? 'success' : 'error');
    setEmail('');
  };

  return (
    <footer className="bg-white border-t border-gray-200 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-2 text-sm text-gray-500">
        
        {/* Left Side: Links & Copyright */}
        <div>
          <p className="mb-4">&copy; {new Date().getFullYear()} StartSafe. All rights reserved.</p>
          <div className="space-x-4">
            <a href="/faq" className="hover:text-blue-600 transition">FAQ</a>
            <a href="/contact" className="hover:text-blue-600 transition">Contact</a>
            <a href="/pricing" className="hover:text-blue-600 transition">Pricing</a>
          </div>
        </div>

        {/* Right Side: Newsletter Signup */}
        <div>
          <h3 className="text-gray-700 font-semibold mb-2">Stay in the loop</h3>
          <p className="text-gray-500 text-sm mb-3">Landlord tips + feature updates. No spam.</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-2 border rounded w-full"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              {status === 'loading' ? 'Submitting…' : 'Subscribe'}
            </button>
          </form>
          {status === 'success' && <p className="text-green-600 mt-2">Check your inbox!</p>}
          {status === 'error' && <p className="text-red-600 mt-2">Something went wrong.</p>}
        </div>
      </div>
    </footer>
  );
}
