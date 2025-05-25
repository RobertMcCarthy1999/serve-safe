'use client';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} StartSafe. All rights reserved.</p>
        <div className="mt-4 md:mt-0 space-x-4">
          <a href="/faq" className="hover:text-blue-600 transition">FAQ</a>
          <a href="/contact" className="hover:text-blue-600 transition">Contact</a>
          <a href="/pricing" className="hover:text-blue-600 transition">Pricing</a>
        </div>
      </div>
    </footer>
  );
}





