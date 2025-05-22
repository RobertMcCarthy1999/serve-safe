import NavBar from '@/app/components/NavBar'
import Footer from '@/app/components/Footer'


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-grow bg-white text-gray-900">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">StartSafe for Landlords</h1>
            <p className="text-lg mb-6">
              Upload and deliver legally required documents to your tenants in minutes.
            </p>
            <a
              href="/startsafe/send"
              className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
            >
              Get Started
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">Why Use StartSafe?</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="text-lg font-semibold mb-2">📄 Legal Document Upload</h3>
                <p>Send EPCs, tenancy agreements, gas safety and more — in a few clicks.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">📬 Dual Email Delivery</h3>
                <p>Automatically emails all documents to you and your tenant with proof.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">🧾 Compliance Tracker</h3>
                <p>Peace of mind that you’re meeting legal obligations as a UK landlord.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to send your documents?</h2>
          <a
            href="/startsafe/send"
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Upload Now
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
