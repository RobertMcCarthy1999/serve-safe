'use client';
import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="min-h-screen w-screen flex justify-center items-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        <SignIn
          redirectUrl="/dashboard"
          appearance={{
            elements: {
              card: "w-full mx-auto", // override card width & center
            },
          }}
        />
      </div>
    </div>
  );
}
