import NavBar from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';

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

        {/* Why Use StartSafe */}
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

        {/* How It Works */}
        <section className="py-16 px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">How StartSafe Works</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="text-lg font-semibold mb-2">1️⃣ Upload Legal Docs</h3>
                <p>Upload your EPC, How to Rent guide, gas safety certificate, and more in one place.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">2️⃣ Add Tenant Details</h3>
                <p>Just an email address — no long forms. We’ll handle the delivery log.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">3️⃣ Send with Proof</h3>
                <p>Your tenant gets the files instantly, and you get a PDF record of delivery.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Landlords Trust StartSafe */}
        <section className="py-16 px-6 bg-gray-50 border-t border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Why Landlords Trust StartSafe</h2>
            <ul className="space-y-4 text-left text-gray-700">
              <li>✅ Built for UK legal compliance</li>
              <li>✅ Send documents in under 5 minutes</li>
              <li>✅ Get automatic proof-of-delivery logs</li>
              <li>✅ No logins or portals for your tenants</li>
              <li>✅ Clear audit trail for every tenancy</li>
            </ul>
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

