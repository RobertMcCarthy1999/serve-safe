'use client';
import NavBar from '@/app/components/NavBar'
import Footer from '@/app/components/Footer'
import { useState } from 'react';

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [fileUrl, setFileUrl] = useState(null);

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
      setFileUrl(data.path);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-grow p-6 bg-white text-gray-900">
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Upload
          </button>
        </form>

        <p className="text-center mt-4">{message}</p>

        {fileUrl && (
          <div className="mt-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Uploaded File Preview:</h3>
            {file?.type.startsWith('image/') ? (
              <img
                src={fileUrl}
                alt="Uploaded File"
                className="max-w-xs mx-auto rounded shadow"
              />
            ) : (
              <a
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View Uploaded File
              </a>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}