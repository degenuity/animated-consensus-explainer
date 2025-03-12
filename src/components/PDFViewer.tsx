
import React, { Suspense, useEffect, useState } from 'react';
import { formatPdfUrl, initializePdfWorker } from '@/utils/pdfUtils';
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
  const [workerInitialized, setWorkerInitialized] = useState(false);
  const [initAttempted, setInitAttempted] = useState(false);

  // Initialize PDF worker when component mounts
  useEffect(() => {
    if (initAttempted) return;
    
    console.log("Initializing PDF worker...");
    try {
      const success = initializePdfWorker();
      setWorkerInitialized(success);
      if (!success) {
        setError("Failed to initialize PDF viewer. Please check if JavaScript is fully enabled in your browser.");
      }
    } catch (err) {
      console.error("Error during worker initialization:", err);
      setError("PDF initialization error: " + (err instanceof Error ? err.message : String(err)));
    } finally {
      setInitAttempted(true);
    }
  }, [initAttempted]);

  // Format PDF URL and handle errors
  useEffect(() => {
    if (!workerInitialized) return;
    
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
  }, [pdfUrl, workerInitialized]);

  if (!initAttempted) {
    return (
      <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
        {title && <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>}
        <div className="bg-slate-800 border border-slate-700 text-slate-200 px-4 py-3 rounded">
          <p>Initializing PDF viewer...</p>
        </div>
      </div>
    );
  }

  if (initAttempted && !workerInitialized) {
    return (
      <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
        {title && <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>}
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
          <p>Could not initialize PDF viewer.</p>
          <p className="text-sm">Error: {error || "Unknown initialization error"}</p>
          <p className="text-sm mt-2">
            If you're seeing CSP errors, make sure your browser allows the needed scripts.
          </p>
        </div>
      </div>
    );
  }

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
          {finalPdfUrl && workerInitialized && <LazyPdfDocument pdfUrl={finalPdfUrl} />}
        </Suspense>
      )}
    </div>
  );
};

export default PDFViewer;
