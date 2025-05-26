// File: src/app/(dashboard)/layout.js (no "use client" here!)

import Footer from '@/app/components/Footer'; // this can be a client component
import './dashboard.css';

export const metadata = {
  title: 'Dashboard | LetSuite',
  description: 'Your landlord toolkit dashboard',
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">{children}</main>
          <Footer /> {/* Safe to import client component here */}
        </div>
      </body>
    </html>
  );
}
