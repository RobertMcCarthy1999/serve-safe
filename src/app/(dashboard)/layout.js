// File: src/app/(dashboard)/layout.js
'use client';

import { Toaster } from 'react-hot-toast';
import Footer from '@/app/components/Footer'; // you need to create this
import './dashboard.css'; // Optional: add dashboard-specific styles

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
          <Footer /> {/* Footer w/ newsletter form */}
        </div>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
