'use client';

import { useReactToPrint } from 'react-to-print';

export default function PrintButton({ componentRef }) {
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'InventoryReport',
    removeAfterPrint: true
  });

  return (
    <button
      onClick={handlePrint}
      className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
    >
      🖨️ Download PDF
    </button>
  );
}
