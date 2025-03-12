
import React, { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut } from 'lucide-react';

interface PDFViewerProps {
  pdfUrl: string;
  title?: string;
}

// Initialize PDF.js worker explicitly here, outside of the component
// This ensures it happens only once across the application
const initializeWorker = () => {
  try {
    const workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;
    pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
    console.log("PDF.js worker initialized with:", workerSrc);
    return true;
  } catch (error) {
    console.error("Failed to initialize PDF.js worker:", error);
    return false;
  }
};

// Initialize immediately
const workerInitialized = initializeWorker();

const PDFViewer = ({ pdfUrl, title }: PDFViewerProps) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [pdfError, setPdfError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [scale, setScale] = useState<number>(1.3);
  const [isReady, setIsReady] = useState<boolean>(workerInitialized);
  const initAttempted = useRef(false);

  // Fallback initialization (if needed)
  useEffect(() => {
    if (initAttempted.current || isReady) return;
    initAttempted.current = true;
    
    // If first initialization failed, try again
    if (!isReady) {
      try {
        const success = initializeWorker();
        setIsReady(success);
        if (success) {
          console.log("PDF.js worker initialized successfully on retry");
        }
      } catch (error) {
        console.error("Failed to initialize PDF.js worker on retry:", error);
        setPdfError(true);
        setErrorMessage("Failed to initialize PDF viewer");
      }
    }
  }, [isReady]);

  // Reset loading state when PDF URL changes
  useEffect(() => {
    setLoading(true);
    setPdfError(false);
    setErrorMessage('');
    setPageNumber(1);
  }, [pdfUrl]);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
    setPdfError(false);
    console.log('PDF loaded successfully:', pdfUrl);
  };

  const onDocumentLoadError = (error: Error) => {
    console.error('Error loading PDF:', error, pdfUrl);
    setLoading(false);
    setPdfError(true);
    setErrorMessage(error.message || 'Unknown error');
  };

  const changePage = (offset: number) => {
    setPageNumber(prevPageNumber => {
      const newPageNumber = prevPageNumber + offset;
      if (newPageNumber > 0 && newPageNumber <= (numPages || 1)) {
        return newPageNumber;
      }
      return prevPageNumber;
    });
  };

  const previousPage = () => changePage(-1);
  const nextPage = () => changePage(1);

  const zoomIn = () => setScale(prev => Math.min(prev + 0.2, 3.0));
  const zoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.8));

  // For external URLs, use the URL directly
  const finalPdfUrl = pdfUrl.startsWith('http') 
    ? pdfUrl 
    : pdfUrl.startsWith('/') 
      ? `${window.location.origin}${pdfUrl}`
      : pdfUrl;

  if (!isReady) {
    return (
      <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
        {title && <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>}
        <div className="bg-white rounded-lg shadow-lg p-3 w-full flex flex-col">
          <div className="text-center py-8 bg-slate-50 rounded">
            <p className="text-black">PDF viewer is initializing. Please wait...</p>
          </div>
        </div>
      </div>
    );
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
            <div className="text-center text-red-500 py-8 bg-slate-50 rounded">
              <p>Failed to load PDF. Please check the URL and try again.</p>
              <p className="text-sm mt-2">PDF URL: {pdfUrl}</p>
              {errorMessage && (
                <p className="text-xs mt-2 max-w-md mx-auto overflow-hidden text-gray-600">
                  Error details: {errorMessage}
                </p>
              )}
            </div>
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
        
        <div className="flex justify-between items-center px-2 flex-wrap gap-2 bg-white py-2 border-t border-slate-200 sticky bottom-0">
          <div className="flex items-center space-x-2">
            <Button
              onClick={previousPage}
              disabled={pageNumber <= 1 || pdfError}
              variant="outline"
              size="sm"
              className="flex items-center text-black hover:text-blue-500"
            >
              <ChevronLeft size={16} />
              Previous
            </Button>
            
            <Button
              onClick={nextPage}
              disabled={pageNumber >= (numPages || 1) || pdfError}
              variant="outline"
              size="sm"
              className="flex items-center text-black hover:text-blue-500"
            >
              Next
              <ChevronRight size={16} />
            </Button>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              onClick={zoomOut}
              disabled={pdfError}
              variant="outline"
              size="sm"
              className="flex items-center text-black hover:text-blue-500"
            >
              <ZoomOut size={16} />
            </Button>
            
            <Button
              onClick={zoomIn}
              disabled={pdfError}
              variant="outline"
              size="sm"
              className="flex items-center text-black hover:text-blue-500"
            >
              <ZoomIn size={16} />
            </Button>
          </div>
          
          <p className="text-sm text-black">
            {!pdfError ? `Page ${pageNumber} of ${numPages || '-'}` : ''}
          </p>
          
          {!pdfError && (
            <a href={finalPdfUrl} download target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="flex items-center gap-1 text-black hover:text-blue-500">
                <Download size={16} />
                Download
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
