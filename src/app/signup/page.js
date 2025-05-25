'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const modalRef = useRef(null);
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignup = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage('Signup failed. Please try again.');
    } else {
      setMessage('Signup successful! Check your email to confirm.');
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        router.push('/');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [router]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <iframe
        src="/"
        className="absolute inset-0 w-full h-full pointer-events-none blur-sm scale-[1.01]"
      ></iframe>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div
          ref={modalRef}
          className="relative bg-white bg-opacity-80 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-full max-w-md border border-white/20"
        >
          <button
            onClick={() => router.push('/')}
            className="absolute top-2 right-3 text-gray-600 hover:text-black text-xl font-bold"
            aria-label="Close signup form"
          >
            &times;
          </button>

          <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
            Create your <span className="text-indigo-600">LetSuite</span> account
          </h2>

          <form onSubmit={handleSignup} className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Email address
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </label>
            <label className="block text-sm font-medium text-gray-700">
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </label>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition font-medium"
            >
              Sign Up
            </button>
          </form>

          {message && (
            <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
