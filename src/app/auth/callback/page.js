'use client';

import { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

function CallbackHandler() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = createClientComponentClient();

  useEffect(() => {
    const handleLoginRedirect = async () => {
      let attempts = 0;
      let session = null;

      // Retry until session loads (max 10 tries, with delay)
      while (attempts < 10 && !session) {
        const { data } = await supabase.auth.getSession();
        session = data.session;
        if (!session) {
          await new Promise((res) => setTimeout(res, 300));
          attempts++;
        }
      }

      if (!session) {
        console.error('❌ No session after retries');
        return router.replace('/login?error=session');
      }

      const redirectTo = searchParams.get('redirectedFrom') || '/';
      router.replace(redirectTo);
    };

    handleLoginRedirect();
  }, [router, searchParams, supabase]);

  return <p className="text-center mt-10">Completing login...</p>;
}

export default function AuthCallbackPage() {
  return (
    <Suspense fallback={<p className="text-center mt-10">Loading...</p>}>
      <CallbackHandler />
    </Suspense>
  );
}
