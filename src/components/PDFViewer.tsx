
import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface PDFViewerProps {
  pdfUrl: string;
  title?: string;
}

const PDFViewer = ({ pdfUrl, title }: PDFViewerProps) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [pdfError, setPdfError] = useState<boolean>(false);

  // Reset loading state when PDF URL changes
  useEffect(() => {
    setLoading(true);
    setPdfError(false);
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

  return (
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
      {title && <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>}
      
      <div className="relative bg-white rounded-lg shadow-lg p-2 w-full overflow-hidden">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-100 bg-opacity-80 z-10">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}
        
        {pdfError ? (
          <div className="text-center text-red-500 py-8 bg-slate-50 rounded">
            <p>Failed to load PDF. Please check the URL and try again.</p>
            <p className="text-sm mt-2">PDF URL: {pdfUrl}</p>
          </div>
        ) : (
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={<div className="text-center py-8">Loading PDF...</div>}
            className="flex justify-center"
          >
            <Page 
              pageNumber={pageNumber} 
              scale={1.0}
              renderTextLayer={true}
              renderAnnotationLayer={true}
              className="border border-slate-200"
            />
          </Document>
        )}
        
        <div className="flex justify-between items-center mt-4 px-2">
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
          
          <p className="text-sm">
            {!pdfError ? `Page ${pageNumber} of ${numPages || '-'}` : ''}
          </p>
          
          {!pdfError && (
            <a href={pdfUrl} download target="_blank" rel="noopener noreferrer">
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
