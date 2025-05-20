export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600 mt-12">
      <p>&copy; {new Date().getFullYear()} ServeSafe. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <a href="/privacy" className="hover:text-blue-600">Privacy</a>
        <a href="/terms" className="hover:text-blue-600">Terms</a>
      </div>
    </footer>
  );
}
