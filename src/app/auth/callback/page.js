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
      try {
        // Wait for session to be set in the client
        let attempts = 0;
        let session = null;

        while (attempts < 10 && !session) {
          const { data } = await supabase.auth.getSession();
          session = data.session;
          if (!session) {
            await new Promise((resolve) => setTimeout(resolve, 300)); // wait 300ms
            attempts++;
          }
        }

        if (!session) {
          console.error('❌ Session not available after login.');
          return router.replace('/login?error=session');
        }

        const redirectedFrom = searchParams.get('redirectedFrom') || '/';
        router.replace(redirectedFrom);
      } catch (err) {
        console.error('❌ Callback error:', err);
        router.replace('/login?error=session');
      }
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
