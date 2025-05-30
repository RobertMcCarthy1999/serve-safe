'use client';
import { useUser } from '@clerk/nextjs';

export default function DashboardPage() {
  const { user } = useUser();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Welcome, {user?.firstName || 'landlord'} 👋</h1>
      <p className="mt-2 text-gray-600">Your dashboard is ready.</p>
    </main>
  );
}
