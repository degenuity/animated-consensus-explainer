
import React, { Suspense, useEffect, useState } from 'react';
import { formatPdfUrl } from '@/utils/pdfUtils';
import { PdfLoading } from './pdf/PdfLoading';

// Lazy load the heavy PDF-related components
const LazyPdfDocument = React.lazy(() => import('./pdf/PdfDocument'));

interface PDFViewerProps {
  pdfUrl: string;
  title?: string;
}

const PDFViewer = ({ pdfUrl, title }: PDFViewerProps) => {
  const [finalPdfUrl, setFinalPdfUrl] = useState('');
  const [error, setError] = useState<string | null>(null);

  // Format PDF URL and handle errors
  useEffect(() => {
    try {
      console.log("Formatting PDF URL:", pdfUrl);
      const formatted = formatPdfUrl(pdfUrl);
      console.log("Formatted PDF URL:", formatted);
      setFinalPdfUrl(formatted);
      setError(null);
    } catch (err) {
      console.error("Error formatting PDF URL:", err);
      setError(err instanceof Error ? err.message : 'Invalid PDF URL');
    }
  }, [pdfUrl]);

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
      {title && <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>}
      
      {error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>Error loading PDF: {error}</p>
          <p className="text-sm">URL: {pdfUrl}</p>
        </div>
      ) : (
        <Suspense fallback={<PdfLoading title={title} />}>
          {finalPdfUrl && <LazyPdfDocument pdfUrl={finalPdfUrl} />}
        </Suspense>
      )}
    </div>
  );
};

export default PDFViewer;
