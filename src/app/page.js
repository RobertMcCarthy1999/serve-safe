'use client';

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

export default function HomePage() {
  const [files, setFiles] = useState({});
  const [landlordEmail, setLandlordEmail] = useState('');
  const [tenantEmail, setTenantEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFileChange = (id, file) => {
    setFiles((prev) => ({ ...prev, [id]: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Sending...');
    const formData = new FormData();
    formData.append('landlordEmail', landlordEmail);
    formData.append('tenantEmail', tenantEmail);

    requiredDocs.forEach(({ id }) => {
      if (files[id]) formData.append(id, files[id]);
    });

    const res = await fetch('/api/send', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    setMessage(data.message);

    if (res.ok) {
      setFiles({});
      setLandlordEmail('');
      setTenantEmail('');
    }
  };
const handleReset = () => {
  setMessage('');
  setFiles({});
  setLandlordEmail('');
  setTenantEmail('');
};
  return (
  <div style={{ maxWidth: 600, margin: 'auto', backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
    <header
      style={{
        backgroundColor: '#0070f3',
        color: 'white',
        padding: '1rem 2rem',
        borderRadius: '12px 12px 0 0',
        textAlign: 'center',
        marginBottom: '2rem',
      }}
    >
      <h1 style={{ fontSize: '2rem', margin: 0 }}>ServeSafe</h1>
      <p style={{ margin: '0.25rem 0 0' }}>
        Send required tenant documents securely
      </p>
    </header>
      {message === 'Emails sent successfully' ? (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>✅ Documents Sent!</h2>
          <p>All files were successfully emailed to the tenant and landlord.</p>
        <button
  onClick={handleReset}
  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-4"
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
    Landlord Email
  </label>
  <input
    type="email"
    required
    style={{
      width: '100%',
      padding: '0.5rem',
      borderRadius: '6px',
      border: '1px solid #ccc',
    }}
    value={landlordEmail}
    onChange={(e) => setLandlordEmail(e.target.value)}
  />
</div>


                   <div style={{ marginBottom: '1.5rem' }}>
  <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>
    Tenant Email
  </label>
  <input
    type="email"
    required
    value={tenantEmail}  // ✅ Must be tenantEmail
    onChange={(e) => setTenantEmail(e.target.value)}  // ✅ Must update tenantEmail
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
  );
}
