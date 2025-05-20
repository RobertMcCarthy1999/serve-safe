'use client';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-white px-6 py-12">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-blue-700 mb-6">Contact Us</h1>
          <p className="mb-8 text-gray-700">Got a question or feedback? We&apos;d love to hear from you.</p>

          <form className="space-y-4 text-left">
            <div>
              <label className="block font-medium mb-1">Name</label>
              <input type="text" className="w-full border rounded px-4 py-2" required />
            </div>
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input type="email" className="w-full border rounded px-4 py-2" required />
            </div>
            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea rows="4" className="w-full border rounded px-4 py-2" required></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              onClick={(e) => {
                e.preventDefault();
                alert('Submission coming soon!');
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
