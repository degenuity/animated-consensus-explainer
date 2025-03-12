
import React, { Suspense } from 'react';
import { formatPdfUrl } from '@/utils/pdfUtils';
import { PdfLoading } from './pdf/PdfLoading';

// Lazy load the heavy PDF-related components
const LazyPdfDocument = React.lazy(() => import('./pdf/PdfDocument'));

interface PDFViewerProps {
  pdfUrl: string;
  title?: string;
}

const PDFViewer = ({ pdfUrl, title }: PDFViewerProps) => {
  // Format PDF URL to ensure it's absolute
  const finalPdfUrl = formatPdfUrl(pdfUrl);

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
      {title && <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>}
      
      <Suspense fallback={<PdfLoading title={title} />}>
        <LazyPdfDocument pdfUrl={finalPdfUrl} />
      </Suspense>
    </div>
  );
};

export default PDFViewer;
