'use client';
import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen w-screen bg-gray-50">
      <div className="w-full max-w-md px-4">
        <SignIn redirectUrl="/dashboard" />
      </div>
    </div>
  );
}
