'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import NotifyModal from '@/app/components/NotifyModal';
import Image from 'next/image';
import Link from 'next/link';
import {
  SignedIn,
  SignedOut,
  SignIn,
  UserButton,
  useUser
} from '@clerk/nextjs';

export default function Dashboard() {
  const { user } = useUser();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState('');
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    if (
      hash.includes('error=access_denied') ||
      hash.includes('error_code=otp_expired')
    ) {
      toast.error('Login link has expired or already been used.');
      router.replace('/');
    }
  }, [router]);

  const toolDescriptions = {
    StartSafe: 'Upload and deliver all 7 legally required tenancy start documents.',
    ServeSafe: 'Send legal notices like Section 21, Section 8 with proof.',
    TenantScore: 'Collect feedback and scores to build tenant references.',
    KeyTrack: 'Track key handovers and returns with timestamped proof.',
    DocVault: 'Store and share landlord documents — searchable and safe.',
    FixLog: 'Let tenants report repairs. You get notified + it gets logged.',
    InventoryPro: 'Create check-in/out inventories with condition photos.',
    'LLM Bot Assistant': 'AI assistant to answer legal landlord questions.',
  };

  const isPro = user?.publicMetadata?.pro === true;

  return (
    <>
      <SignedIn>
        <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-6">
          <NotifyModal
            toolName={selectedTool}
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
          />

          <div className="max-w-6xl mx-auto mb-6">
            <div className="flex justify-between items-center bg-white rounded-2xl shadow p-6">
              <Image
                src="/images/letsuite-logo.png"
                alt="LetSuite logo"
                width={160}
                height={64}
                className="object-contain"
              />
              <div className="flex items-center space-x-4">
                <Link
                  href="/"
                  className="bg-gray-100 text-gray-600 px-4 py-2 rounded hover:bg-gray-200"
                >
                  Home
                </Link>
                <UserButton afterSignOutUrl="/" />
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow p-6 mb-8">
              <h1 className="text-3xl font-bold text-gray-800">
                Welcome back, {user?.firstName || 'Landlord'} 👋
              </h1>
              <p className="text-gray-600 mt-2">
                Here’s your LetSuite lettings toolkit — manage legal docs, rent, repairs and more.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
              {Object.entries(toolDescriptions).map(([title, description]) => (
                <ToolCard
                  key={title}
                  title={title}
                  status={
                    ['StartSafe', 'InventoryPro'].includes(title)
                      ? 'Live'
                      : title === 'LLM Bot Assistant'
                      ? 'Later Stage'
                      : 'Planned'
                  }
                  action={
                    ['StartSafe', 'InventoryPro'].includes(title)
                      ? 'Use Now'
                      : 'Notify Me'
                  }
                  color={
                    title === 'StartSafe'
                      ? 'bg-blue-500'
                      : title === 'ServeSafe'
                      ? 'bg-green-500'
                      : title === 'TenantScore'
                      ? 'bg-yellow-500'
                      : title === 'KeyTrack'
                      ? 'bg-indigo-500'
                      : title === 'DocVault'
                      ? 'bg-purple-500'
                      : title === 'FixLog'
                      ? 'bg-orange-500'
                      : title === 'InventoryPro'
                      ? 'bg-rose-500'
                      : 'bg-gray-500'
                  }
                  onClick={() => {
                    if (title === 'StartSafe') {
                      router.push('/startsafe');
                    } else if (title === 'InventoryPro') {
                      router.push('/inventorypro'); // ✅ Updated route
                    } else if (title === 'ServeSafe') {
                      setSelectedTool(title);
                      setModalOpen(true);
                    } else if (title === 'FixLog' && !isPro) {
                      toast.error('Upgrade to Pro to access FixLog');
                    } else {
                      setSelectedTool(title);
                      setModalOpen(true);
                    }
                  }}
                  description={description}
                />
              ))}
            </div>
          </div>
        </main>
      </SignedIn>

      <SignedOut>
        <div className="flex justify-center items-center min-h-screen px-4">
          <SignIn redirectUrl="/dashboard" />
        </div>
      </SignedOut>
    </>
  );
}

function ToolCard({ title, status, action, color, onClick, description }) {
  return (
    <div className="bg-white rounded-xl shadow p-5 flex flex-col justify-between hover:shadow-md transition">
      <div>
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <span className="inline-block text-xs font-semibold px-2 py-1 rounded bg-gray-100 text-gray-700">
          {status}
        </span>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
      <button
        onClick={onClick}
        className={`mt-4 px-4 py-2 text-white rounded ${color} hover:opacity-90 text-sm`}
      >
        {action}
      </button>
    </div>
  );
}
