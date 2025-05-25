'use client';

import { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

function CallbackHandler() {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleAuth = async () => {
      // 🔁 Force Supabase to sync session cookie
      await supabase.auth.getSession();
      await supabase.auth.getUser(); // ✅ Critical: completes client-side session persistence

      const redirectedFrom = searchParams.get('redirectedFrom') || '/';
      router.replace(redirectedFrom);
    };

    handleAuth();
  }, [supabase, router, searchParams]);

  return <p className="text-center mt-10">Completing login...</p>;
}

export default function AuthCallbackPage() {
  return (
    <Suspense fallback={<p className="text-center mt-10">Loading...</p>}>
      <CallbackHandler />
    </Suspense>
  );
}
