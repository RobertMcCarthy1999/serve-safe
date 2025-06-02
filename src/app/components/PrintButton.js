// components/PrintButton.js
'use client';

import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

export default function PrintButton({ componentRef }) {
  const printableRef = useRef();
  const metadataRef = useRef({});

  const handlePrint = useReactToPrint({
    content: () => printableRef.current,
    documentTitle: () => generateTitle(),
    removeAfterPrint: true,
  });

  const generateTitle = () => {
    const { address = 'Inventory', date = new Date().toISOString().split('T')[0] } = metadataRef.current;
    const safeAddress = address.replace(/\s+/g, '_').replace(/[^\w-]/g, '');
    return `${safeAddress}_${date}`;
  };

  const prepareContent = async () => {
    if (!componentRef.current) return;

    const clone = componentRef.current.cloneNode(true);
    const addrText = clone.querySelector('p strong')?.nextSibling?.textContent?.trim();
    const dateText = [...clone.querySelectorAll('p')]
      .find(p => p.textContent.includes('Date:'))?.textContent.split(':')[1]?.trim();

    metadataRef.current = {
      address: addrText || 'Inventory_Report',
      date: dateText || new Date().toISOString().split('T')[0],
    };

    const imgElements = clone.querySelectorAll('img');
    const origImgs = componentRef.current.querySelectorAll('img');

    for (let i = 0; i < imgElements.length; i++) {
      const origSrc = origImgs[i]?.src;
      if (origSrc?.startsWith('blob:')) {
        try {
          const blob = await fetch(origSrc).then(res => res.blob());
          const base64 = await fileToBase64(blob);
          imgElements[i].src = base64;
        } catch (err) {
          console.error('Image conversion error:', err);
        }
      }
    }

    printableRef.current.innerHTML = '';
    printableRef.current.appendChild(clone);
    handlePrint();
  };

  const fileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  return (
    <>
      <button
        onClick={prepareContent}
        className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        🖨️ Download PDF
      </button>
      <div style={{ display: 'none' }}>
        <div ref={printableRef} />
      </div>
    </>
  );
}
