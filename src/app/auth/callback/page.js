'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function AuthCallback() {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleAuth = async () => {
      const { error } = await supabase.auth.getSession(); // Forces cookie sync

      const redirect = searchParams.get('redirectedFrom') || '/';
      router.replace(redirect);
    };

    handleAuth();
  }, [supabase, router, searchParams]);

  return <p className="text-center mt-10">Completing login...</p>;
}
