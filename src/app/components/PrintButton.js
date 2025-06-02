'use client';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function PrintButton({ contentRef }) {
  const handleDownload = async () => {
    if (!contentRef?.current) return;

    const element = contentRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let position = 0;
    if (imgHeight > pageHeight) {
      // If content is longer than one page, split into pages
      let heightLeft = imgHeight;
      while (heightLeft > 0) {
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        position -= pageHeight;
        if (heightLeft > 0) pdf.addPage();
      }
    } else {
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    }

    pdf.save(`Inventory_Report_${Date.now()}.pdf`);
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
