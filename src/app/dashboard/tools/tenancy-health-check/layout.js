import Footer from '@/app/components/Footer';
import { UserButton } from '@clerk/nextjs';

export const metadata = {
  title: 'Dashboard | LetSuite',
  description: 'Your landlord toolkit dashboard',
};

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <header className="flex justify-between items-center p-4 border-b bg-white">
        <h1 className="text-xl font-semibold">LetSuite Dashboard</h1>
        <UserButton afterSignOutUrl="/sign-in" />
      </header>

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
}
