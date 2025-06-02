'use client';

import React from 'react';

export default function PrintButton({ componentRef }) {
  const handleDownload = async () => {
    if (!componentRef?.current) return;

    // Dynamically import html2pdf only on client
    const html2pdf = (await import('html2pdf.js')).default;

    // Clone content
    const clone = componentRef.current.cloneNode(true);

    // Convert blob images to base64
    const imgElements = clone.querySelectorAll('img');
    const origImgs = componentRef.current.querySelectorAll('img');

    for (let i = 0; i < imgElements.length; i++) {
      const origSrc = origImgs[i]?.src;
      if (origSrc?.startsWith('blob:')) {
        try {
          const blob = await fetch(origSrc).then(res => res.blob());
          const base64 = await toBase64(blob);
          imgElements[i].src = base64;
        } catch (err) {
          console.error('Image conversion error:', err);
        }
      }
    }

    // Generate file name
    const address = clone.querySelector('p strong')?.nextSibling?.textContent?.trim() || 'Inventory_Report';
    const dateText = [...clone.querySelectorAll('p')]
      .find(p => p.textContent.includes('Date:'))?.textContent.split(':')[1]?.trim() ||
      new Date().toISOString().split('T')[0];

    const safeAddress = address.replace(/\s+/g, '_').replace(/[^\w-]/g, '');
    const fileName = `${safeAddress}_${dateText}.pdf`;

    // Generate PDF
    html2pdf().from(clone).set({
      margin: 0.5,
      filename: fileName,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    }).save();
  };

  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
    >
      📄 Download PDF
    </button>
  );
}
