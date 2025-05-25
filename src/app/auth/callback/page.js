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
      // 1. Sync session
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      if (sessionError || !session) {
        console.error('❌ Failed to get session:', sessionError);
        return router.replace('/login?error=session');
      }

      // 2. Ensure session is hydrated
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (userError || !user) {
        console.error('❌ Failed to get user:', userError);
        return router.replace('/login?error=user');
      }

      // 3. Redirect
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
