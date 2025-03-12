
import React from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { usePdfViewer } from '@/hooks/usePdfViewer';
import { formatPdfUrl } from '@/utils/pdfUtils';
import { PdfLoading } from './pdf/PdfLoading';
import { PdfError } from './pdf/PdfError';
import { PdfControls } from './pdf/PdfControls';

interface PDFViewerProps {
  pdfUrl: string;
  title?: string;
}

const PDFViewer = ({ pdfUrl, title }: PDFViewerProps) => {
  const {
    numPages,
    pageNumber,
    loading,
    pdfError,
    errorMessage,
    scale,
    isReady,
    onDocumentLoadSuccess,
    onDocumentLoadError,
    previousPage,
    nextPage,
    zoomIn,
    zoomOut
  } = usePdfViewer(pdfUrl);

  // Format PDF URL to ensure it's absolute
  const finalPdfUrl = formatPdfUrl(pdfUrl);

  if (!isReady) {
    return <PdfLoading title={title} />;
  }

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
      {title && <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>}
      
      <div className="relative bg-white rounded-lg shadow-lg p-3 w-full flex flex-col">
        <div className="overflow-auto h-[90vh] mb-4">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-100 bg-opacity-80 z-10">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          )}
          
          {pdfError ? (
            <PdfError pdfUrl={pdfUrl} errorMessage={errorMessage} />
          ) : (
            <Document
              file={finalPdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={<div className="text-center py-8 text-black">Loading PDF...</div>}
              className="flex justify-center min-h-[40vh]"
              options={{
                cMapUrl: 'https://unpkg.com/pdfjs-dist@3.11.174/cmaps/',
                cMapPacked: true,
              }}
            >
              <Page 
                pageNumber={pageNumber} 
                scale={scale}
                renderTextLayer={true}
                renderAnnotationLayer={true}
                className="border border-slate-200"
                width={window.innerWidth > 768 ? 700 : undefined}
                canvasBackground="white"
              />
            </Document>
          )}
        </div>
        
        <PdfControls
          pageNumber={pageNumber}
          numPages={numPages}
          pdfError={pdfError}
          pdfUrl={finalPdfUrl}
          onPreviousPage={previousPage}
          onNextPage={nextPage}
          onZoomIn={zoomIn}
          onZoomOut={zoomOut}
        />
      </div>
    </div>
  );
};

export default PDFViewer;
