
import React, { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { usePdfViewer } from '@/hooks/usePdfViewer';
import { PdfError } from './PdfError';
import { PdfControls } from './PdfControls';
import { getDefaultPdfOptions } from '@/utils/pdfUtils';

interface PdfDocumentProps {
  pdfUrl: string;
}

const PdfDocument = ({ pdfUrl }: PdfDocumentProps) => {
  const [isMounted, setIsMounted] = useState(false);
  
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

  // Handle component mounting
  useEffect(() => {
    console.log("PdfDocument mounted with URL:", pdfUrl);
    setIsMounted(true);
    
    return () => {
      console.log("PdfDocument unmounted");
      setIsMounted(false);
    };
  }, [pdfUrl]);

  if (!isReady || !isMounted) {
    return (
      <div className="text-center py-8 bg-slate-50 rounded text-black">
        <p>Initializing PDF viewer...</p>
        <p className="text-sm text-gray-500 mt-2">This may take a moment</p>
      </div>
    );
  }

  return (
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
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={<div className="text-center py-8 text-black">Loading PDF...</div>}
            className="flex justify-center min-h-[40vh]"
            options={getDefaultPdfOptions()}
          >
            {pdfError ? null : (
              <Page 
                pageNumber={pageNumber} 
                scale={scale}
                renderTextLayer={true}
                renderAnnotationLayer={true}
                className="border border-slate-200"
                width={window.innerWidth > 768 ? 700 : undefined}
                canvasBackground="white"
              />
            )}
          </Document>
        )}
      </div>
      
      <PdfControls
        pageNumber={pageNumber}
        numPages={numPages}
        pdfError={pdfError}
        pdfUrl={pdfUrl}
        onPreviousPage={previousPage}
        onNextPage={nextPage}
        onZoomIn={zoomIn}
        onZoomOut={zoomOut}
      />
    </div>
  );
};

export default PdfDocument;
