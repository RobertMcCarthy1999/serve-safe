'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const modalRef = useRef(null);
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Signup successful. Please check your email to confirm your account.');
    }
  };

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      router.push('/');
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

          <form onSubmit={handleSignUp} className="space-y-4">
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
                minLength={6}
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

          {message && <p className="mt-4 text-center text-sm text-gray-600">{message}</p>}

          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-indigo-600 font-medium hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
