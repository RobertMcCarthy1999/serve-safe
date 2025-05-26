import Footer from '@/app/components/Footer';

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
          <Footer /> {/* ✅ Newsletter + links restored here */}
        </div>
      </body>
    </html>
  );
}
