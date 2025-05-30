'use client';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import { useState, useEffect } from 'react';

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
  const [dateSent, setDateSent] = useState('');

  useEffect(() => {
    setDateSent(new Date().toLocaleString());
  }, []);

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
        <header
          style={{
            backgroundColor: '#0070f3',
            color: 'white',
            padding: '0.75rem 1rem 0.5rem',
            borderRadius: '12px 12px 0 0',
            textAlign: 'center',
            marginBottom: '1rem',
          }}
        >
          <img
            src="/images/startsafe-logo-white.png"
            alt="StartSafe Logo"
            style={{
              maxWidth: '240px',
              height: 'auto',
              display: 'block',
              margin: '0 auto 0.25rem',
            }}
          />
          <p
            style={{
              margin: 0,
              fontSize: '0.85rem',
              lineHeight: '1.2',
            }}
          >
            Send required tenant documents securely
          </p>
        </header>

        {message === 'Emails sent successfully' ? (
          <div style={{ padding: '2rem', backgroundColor: '#f1f5f9', borderRadius: '8px' }}>
            <h2 style={{ textAlign: 'center' }}>✅ Delivery Confirmation</h2>

            {dateSent && <p><strong>Date Sent:</strong> {dateSent}</p>}
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
              Please retain this confirmation as evidence of service.
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
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Upload required documents
            </h2>

            {requiredDocs.map(({ id, label }) => (
              <div key={id} style={{ marginBottom: '1.5rem' }}>
                <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>
                  {label}
                </label>
                <input
                  type="file"
                  required
                  onChange={(e) => handleFileChange(id, e.target.files[0])}
                  className="block w-full text-sm text-gray-700
                             file:mr-4 file:py-2 file:px-4
                             file:rounded file:border-0
                             file:text-sm file:font-semibold
                             file:bg-gray-200 file:text-gray-700
                             hover:file:bg-gray-300"
                />
              </div>
            ))}

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>
                Property Address
              </label>
              <input
                type="text"
                required
                value={propertyAddress}
                onChange={(e) => setPropertyAddress(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>
                Landlord Email
              </label>
              <input
                type="email"
                required
                value={landlordEmail}
                onChange={(e) => setLandlordEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>
                Tenant Email
              </label>
              <input
                type="email"
                required
                value={tenantEmail}
                onChange={(e) => setTenantEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                }}
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
      <Footer />
    </>
  );
}
