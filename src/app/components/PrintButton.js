'use client';
import { useReactToPrint } from 'react-to-print';

export default function PrintButton({ contentRef }) {
  const handlePrint = useReactToPrint({ content: () => contentRef.current });

  return (
    <button
      onClick={handlePrint}
      className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
    >
      🖨️ Export PDF
    </button>
  );
}
