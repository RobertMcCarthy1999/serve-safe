'use client';

import { ReactToPrint } from 'react-to-print';

export default function PrintButton({ contentRef }) {
  return (
    <ReactToPrint
      trigger={() => (
        <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800">
          🖨️ Export PDF
        </button>
      )}
      content={() => contentRef.current}
    />
  );
}
