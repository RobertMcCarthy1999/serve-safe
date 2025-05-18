'use client';

import { useState } from 'react';

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [fileUrl, setFileUrl] = useState(null); // <-- Store uploaded file path

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    setMessage(data.message || 'Upload complete');

    if (data.path) {
      setFileUrl(data.path); // <-- Set file URL returned from backend
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit">Upload</button>
      </form>

      <p>{message}</p>

      {fileUrl && (
        <div>
          <h3>Uploaded File Preview:</h3>
          {/* Image preview */}
          {file?.type.startsWith('image/') ? (
            <img src={fileUrl} alt="Uploaded File" style={{ maxWidth: '300px', marginTop: '10px' }} />
          ) : (
            <a href={fileUrl} target="_blank" rel="noopener noreferrer">
              View Uploaded File
            </a>
          )}
        </div>
      )}
    </div>
  );
}







