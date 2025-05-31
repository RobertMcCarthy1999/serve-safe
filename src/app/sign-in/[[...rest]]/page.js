'use client';
import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 px-4">
      <SignIn
        redirectUrl="/dashboard"
        appearance={{
          elements: {
            rootBox: 'flex justify-center items-center w-full', // center outer container
            card: 'mx-auto shadow-lg border rounded-lg p-6',    // center card & style
          },
        }}
      />
    </div>
  );
}
