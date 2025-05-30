'use client';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <NavBar />

      <main className="flex-grow px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-700 text-center mb-8">
            Frequently Asked Questions
          </h1>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-2">📄 What documents can I send?</h2>
              <p>
                You can upload 7 required legal documents: the How to Rent Guide, EPC, gas safety
                certificate (CP12), EICR, prescribed information, tenancy agreement, and deposit
                protection scheme certificate.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">📬 How does delivery work?</h2>
              <p>
                After upload, the documents are instantly emailed to both the landlord and tenant
                with confirmation. You’ll also see a delivery confirmation screen that can be saved
                as a PDF or printed.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">✅ Is this legally compliant?</h2>
              <p>
                Yes. StartSafe is designed around the UK&apos;s legal requirements, especially under
                Section 213 of the Housing Act 2004. It helps you document and prove delivery of
                important documents.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">🔐 Do you store my files?</h2>
              <p>
                No. For security and privacy, StartSafe does not store any uploaded documents or
                email content after delivery. All files are immediately sent and discarded.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">💳 What’s the cost?</h2>
              <p>
                £9.99 per year gives you access to the full document delivery tool. This includes
                unlimited uploads and confirmations — no hidden fees.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
