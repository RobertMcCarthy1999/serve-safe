// login/page.js
"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const modalRef = useRef(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectedFrom = searchParams.get("redirectedFrom") || "/";

  const handleLogin = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback?redirectedFrom=${redirectedFrom}`,
      },
    });

    if (error) {
      setMessage("Something went wrong. Try again.");
    } else {
      setMessage("Check your email for the magic link.");
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        router.push(redirectedFrom);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [redirectedFrom]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <iframe src="/" className="absolute inset-0 w-full h-full pointer-events-none blur-sm scale-[1.01]" />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div ref={modalRef} className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-bold mb-4 text-center">Sign in</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded"
            />
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
              Send Magic Link
            </button>
          </form>
          {message && <p className="mt-4 text-center">{message}</p>}
        </div>
      </div>
    </div>
  );
}
