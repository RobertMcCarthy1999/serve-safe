'use client';
import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen w-screen bg-gray-50">
      <div className="flex justify-center items-center w-full max-w-full">
        <SignIn
          redirectUrl="/dashboard"
          appearance={{
            elements: {
              card: "mx-auto shadow-none",
            },
          }}
        />
      </div>
    </div>
  );
}
