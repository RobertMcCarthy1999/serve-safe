// File: src/app/startsafe/send/page.js
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useSession } from '@supabase/auth-helpers-react';
import Footer from '@/app/components/Footer';

const requiredDocs = [
  { id: 'howToRent', label: 'How to Rent Guide' },
  { id: 'epc', label: 'Energy Performance Certificate (EPC)' },
  { id: 'gasSafety', label: 'Gas Safety Certificate (CP12)' },
  { id: 'eicr', label: 'Electrical Installation Condition Report (EICR)' },
  { id: 'prescribedInfo', label: 'Prescribed Information (Tenancy Deposit)' },
  { id: 'dpsCert', label: 'Deposit Protection Scheme Certificate' },
  { id: 'tenancyAgreement', label: 'Tenancy Agreement' },
];

export default function SendPage() {
  const [files, setFiles] = useState({});
  const [landlordEmail, setLandlordEmail] = useState('');
  const [tenantEmail, setTenantEmail] = useState('');
  const [message, setMessage] = useState('');
  const [propertyAddress, setPropertyAddress] = useState('');

  const router = useRouter();
const session = useSession();

useEffect(() => {
  if (session === null) {
    router.replace('/login?redirectedFrom=/startsafe/send');
  }
}, [session]);


  const handleFileChange = (id, file) => {
    setFiles((prev) => ({ ...prev, [id]: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Sending...');
    const formData = new FormData();
    formData.append('landlordEmail', landlordEmail);
    formData.append('tenantEmail', tenantEmail);
    formData.append('propertyAddress', propertyAddress);
    requiredDocs.forEach(({ id }) => {
      if (files[id]) formData.append(id, files[id]);
    });

    const res = await fetch('/api/send', { method: 'POST', body: formData });
    const data = await res.json();
    setMessage(data.message);
  };

  const handleReset = () => {
    setMessage('');
    setFiles({});
    setLandlordEmail('');
    setTenantEmail('');
    setPropertyAddress('');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div
          style={{
            maxWidth: 600,
            margin: 'auto',
            backgroundColor: '#f9f9f9',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        >
          

          {message === 'Emails sent successfully' ? (
            <div style={{ padding: '2rem', backgroundColor: '#f1f5f9', borderRadius: '8px' }}>
              <h2 style={{ textAlign: 'center' }}>✅ Delivery Confirmation</h2>
              <p><strong>Date Sent:</strong> {new Date().toLocaleString()}</p>
              <p><strong>Property Address:</strong> {propertyAddress}</p>
              <p><strong>Tenant Email:</strong> {tenantEmail}</p>
              <p><strong>Landlord Email:</strong> {landlordEmail}</p>
              <p><strong>Documents Sent:</strong></p>
              <ul style={{ textAlign: 'left' }}>
                {Object.values(files).map((file, idx) => (
                  <li key={idx}>{file.name}</li>
                ))}
              </ul>
              <p style={{ fontSize: '0.85rem', color: '#444', marginTop: '1rem' }}>
                These documents were sent in accordance with <strong>Section 213 of the Housing Act 2004</strong>.
              </p>
              <button
                onClick={() => window.print()}
                className="bg-gray-200 hover:bg-gray-300 font-semibold py-2 px-4 rounded mt-4"
              >
                📄 Print / Save as PDF
              </button>
              <button
                onClick={handleReset}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-4 ml-3"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Upload required documents</h2>
              {requiredDocs.map(({ id, label }) => (
                <div key={id} style={{ marginBottom: '1.5rem' }}>
                  <label className="font-bold block mb-2">{label}</label>
                  <input
                    type="file"
                    required
                    onChange={(e) => handleFileChange(id, e.target.files[0])}
                    className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300"
                  />
                </div>
              ))}
              <div className="mb-6">
                <label className="font-bold block mb-2">Property Address</label>
                <input
                  type="text"
                  required
                  value={propertyAddress}
                  onChange={(e) => setPropertyAddress(e.target.value)}
                  className="w-full p-2 rounded border border-gray-300"
                />
              </div>
              <div className="mb-6">
                <label className="font-bold block mb-2">Landlord Email</label>
                <input
                  type="email"
                  required
                  value={landlordEmail}
                  onChange={(e) => setLandlordEmail(e.target.value)}
                  className="w-full p-2 rounded border border-gray-300"
                />
              </div>
              <div className="mb-6">
                <label className="font-bold block mb-2">Tenant Email</label>
                <input
                  type="email"
                  required
                  value={tenantEmail}
                  onChange={(e) => setTenantEmail(e.target.value)}
                  className="w-full p-2 rounded border border-gray-300"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-4"
              >
                Send Documents
              </button>
              <p>{message}</p>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
