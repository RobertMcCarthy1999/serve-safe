'use client';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import { useState } from 'react';

const requiredDocs = [
  { id: 'howToRent', label: 'How to Rent Guide' },
  { id: 'epc', label: 'Energy Performance Certificate (EPC)' },
  { id: 'gasSafety', label: 'Gas Safety Certificate (CP12)' },
  { id: 'eicr', label: 'Electrical Installation Condition Report (EICR)' },
  { id: 'prescribedInfo', label: 'Prescribed Information (Tenancy Deposit)' },
  { id: 'dpsCert', label: 'Deposit Protection Scheme Certificate' },
  { id: 'tenancyAgreement', label: 'Tenancy Agreement' }
];

export default function SendPage() {
  const [files, setFiles] = useState({});
  const [landlordEmail, setLandlordEmail] = useState('');
  const [tenantEmail, setTenantEmail] = useState('');
  const [propertyAddress, setPropertyAddress] = useState('');
  const [message, setMessage] = useState('');

  const handleFileChange = (id, file) => {
    setFiles(prev => ({ ...prev, [id]: file }));
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

    const res = await fetch('/api/send', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    setMessage(data.message || 'Finished');
  };

  const handleReset = () => {
    setFiles({});
    setLandlordEmail('');
    setTenantEmail('');
    setPropertyAddress('');
    setMessage('');
  };

  return (
    <>
      <NavBar />

      <main className="max-w-2xl mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Upload & Send Legal Documents
        </h1>

        {message === 'Emails sent successfully' ? (
          <div className="bg-white p-6 rounded shadow text-sm">
            <h2 className="text-xl font-semibold text-center mb-4">✅ Delivery Confirmation</h2>
            <p><strong>Date:</strong> {new Date().toLocaleString()}</p>
            <p><strong>Property:</strong> {propertyAddress}</p>
            <p><strong>Tenant:</strong> {tenantEmail}</p>
            <p><strong>Landlord:</strong> {landlordEmail}</p>

            <p className="mt-4"><strong>Documents Sent:</strong></p>
            <ul className="list-disc ml-6">
              {Object.values(files).map((file, idx) => (
                <li key={idx}>{file.name}</li>
              ))}
            </ul>

            <p className="text-gray-600 mt-4">
              Documents were sent in accordance with <strong>Section 213 of the Housing Act 2004</strong>.
            </p>

            <div className="mt-6 flex gap-4">
              <button onClick={() => window.print()} className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
                📄 Print / Save
              </button>
              <button onClick={handleReset} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Send Another
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {requiredDocs.map(({ id, label }) => (
              <div key={id}>
                <label className="block font-medium mb-1">{label}</label>
                <input
                  type="file"
                  required
                  onChange={(e) => handleFileChange(id, e.target.files[0])}
                  className="block w-full border rounded px-3 py-2"
                />
              </div>
            ))}

            <div>
              <label className="block font-medium mb-1">Property Address</label>
              <input
                type="text"
                value={propertyAddress}
                onChange={(e) => setPropertyAddress(e.target.value)}
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Landlord Email</label>
              <input
                type="email"
                value={landlordEmail}
                onChange={(e) => setLandlordEmail(e.target.value)}
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Tenant Email</label>
              <input
                type="email"
                value={tenantEmail}
                onChange={(e) => setTenantEmail(e.target.value)}
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Send Documents
            </button>
            <p className="text-center text-sm">{message}</p>
          </form>
        )}
      </main>

      <Footer />
    </>
  );
}
