'use client';
import { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

function CallbackHandler() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = createClientComponentClient();

  useEffect(() => {
    const completeLogin = async () => {
      await supabase.auth.getSession(); // establish cookie
      const { data: { user } } = await supabase.auth.getUser();
      const redirectedFrom = searchParams.get('redirectedFrom') || '/';
      if (user) {
        router.replace(redirectedFrom);
      } else {
        router.replace('/login');
      }
    };

    completeLogin();
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

