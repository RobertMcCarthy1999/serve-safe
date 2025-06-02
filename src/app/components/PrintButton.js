'use client';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function PrintButton({ componentRef }) {
  const downloadPDF = async () => {
    const input = componentRef.current;
    if (!input) return;

    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgProps = pdf.getImageProperties(imgData);
    const imgHeight = (imgProps.height * pageWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, imgHeight);

    pdf.save('inventory-report.pdf');
  };

  return (
    <button
      onClick={downloadPDF}
      className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
    >
      🖨️ Download PDF
    </button>
  );
}
