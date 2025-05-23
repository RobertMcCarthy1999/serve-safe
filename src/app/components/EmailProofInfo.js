"use client";

export default function EmailProofInfo() {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-gray-800 max-w-xl">
      <h4 className="font-semibold text-blue-800 mb-1">📩 What’s “Email Proof”?</h4>
      <p className="mb-2">
        Every document you send through StartSafe generates an email log showing:
      </p>
      <ul className="list-disc ml-5 space-y-1">
        <li>Recipient address</li>
        <li>Time sent</li>
        <li>Delivery status</li>
        <li>Open tracking <span className="text-gray-500">(if supported)</span></li>
      </ul>
      <p className="mt-2">
        You’ll also get a downloadable proof-of-delivery PDF for your records.
      </p>
      <a
        href="/samples/email-proof.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-medium underline hover:text-blue-800 inline-block mt-2"
      >
        📄 View Sample
      </a>
    </div>
  );
}
