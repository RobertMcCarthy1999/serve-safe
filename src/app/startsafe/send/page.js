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
  const [message, setMessage] = useState('');
  const [propertyAddress, setPropertyAddress] = useState('');

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

    const res = await fetch('/api/send', {
      method: 'POST',
      body: formData,
    });

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
    <>
      <NavBar />

      <main className="min-h-screen p-6 bg-white text-gray-900">
        <div className="max-w-xl mx-auto bg-gray-50 p-6 rounded-lg shadow-md">
          <div className="text-center mb-6">
            <img
              src="/images/startsafe-logo-white.png"
              alt="StartSafe Logo"
              className="mx-auto h-16 sm:h-20 mb-2"
            />
            <h2 className="text-xl sm:text-2xl font-bold text-blue-700">
              Upload & Send Legal Documents
            </h2>
          </div>

          {message === 'Emails sent successfully' ? (
            <div className="bg-green-50 p-4 rounded text-green-700">
              <h3 className="font-bold mb-2">✅ Delivery Confirmation</h3>
              <p><strong>Date Sent:</strong> {new Date().toLocaleString()}</p>
              <p><strong>Property Address:</strong> {propertyAddress}</p>
              <p><strong>Tenant Email:</strong> {tenantEmail}</p>
              <p><strong>Landlord Email:</strong> {landlordEmail}</p>
              <ul className="list-disc list-inside mt-2">
                {Object.values(files).map((file, idx) => (
                  <li key={idx}>{file.name}</li>
                ))}
              </ul>
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
            <form onSubmit={handleSubmit} className="space-y-6">
              {requiredDocs.map(({ id, label }) => (
                <div key={id}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                  <input
                    type="file"
                    required
                    onChange={(e) => handleFileChange(id, e.target.files[0])}
                    className="block w-full text-sm file:py-2 file:px-4 file:rounded-md file:border-0
                               file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100
                               border border-gray-300 rounded-md"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Property Address</label>
                <input
                  type="text"
                  required
                  value={propertyAddress}
                  onChange={(e) => setPropertyAddress(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Landlord Email</label>
                <input
                  type="email"
                  required
                  value={landlordEmail}
                  onChange={(e) => setLandlordEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tenant Email</label>
                <input
                  type="email"
                  required
                  value={tenantEmail}
                  onChange={(e) => setTenantEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
              >
                Send Documents
              </button>

              {message && <p className="text-sm text-gray-600 mt-2">{message}</p>}
            </form>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
