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
      // Force Supabase to load the session and persist it
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
      const { data: userData, error: userError } = await supabase.auth.getUser();

      if (sessionError || userError || !sessionData.session) {
        console.error('❌ Failed to complete session setup:', sessionError || userError);
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
