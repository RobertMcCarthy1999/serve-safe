/* eslint-env es2021 */
/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

// Utility to convert File to base64 string
const fileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

export default function PrintButton({ componentRef }) {
  const printableRef = useRef();
  const metadataRef = useRef({});

  const handlePrint = useReactToPrint({
    content: () => printableRef.current,
    documentTitle: generateTitle(),
    removeAfterPrint: true,
  });

  // Create a title like: Inventory_12_Smith_St_2025-06-02
  const generateTitle = () => {
    const { address = 'Inventory', date = new Date().toISOString().split('T')[0] } = metadataRef.current;
    const safeAddress = address.replace(/\s+/g, '_').replace(/[^\w-]/g, '');
    return `${safeAddress}_${date}`;
  };

  const prepareContent = async () => {
    if (!componentRef.current) return;

    const clone = componentRef.current.cloneNode(true);

    // Try to extract metadata directly from the DOM
    const addrText = clone.querySelector('p strong')?.nextSibling?.textContent?.trim();
    const dateText = [...clone.querySelectorAll('p')]
      .find(p => p.textContent.includes('Date:'))?.textContent.split(':')[1]?.trim();

    metadataRef.current = {
      address: addrText || 'Inventory_Report',
      date: dateText || new Date().toISOString().split('T')[0],
    };

    const imgElements = clone.querySelectorAll('img');
    for (const img of imgElements) {
      const originalFile = [...componentRef.current.querySelectorAll('img')].find(
        (orig) => orig.alt === img.alt
      )?.src;

      if (originalFile && originalFile.startsWith('blob:')) {
        const blob = await fetch(originalFile).then((r) => r.blob());
        const base64 = await fileToBase64(blob);
        img.src = base64;
      }
    }

    printableRef.current.innerHTML = '';
    printableRef.current.appendChild(clone);
    handlePrint();
  };

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
