
import { useState, useEffect, useRef } from 'react';
import { initializePdfWorker } from '@/utils/pdfUtils';

/**
 * Custom hook that handles PDF viewer state and initialization
 */
export const usePdfViewer = (pdfUrl: string) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [pdfError, setPdfError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [scale, setScale] = useState<number>(1.3);
  
  // Initialize worker with more robust handling
  const initAttempted = useRef(false);
  const [isReady, setIsReady] = useState<boolean>(false);

  // Initialize PDF.js worker
  useEffect(() => {
    if (initAttempted.current) return;
    initAttempted.current = true;
    
    console.log("Attempting to initialize PDF.js worker");
    try {
      const success = initializePdfWorker();
      setIsReady(success);
      if (success) {
        console.log("PDF.js worker initialized successfully");
      } else {
        console.error("Failed to initialize PDF.js worker on first attempt");
        setPdfError(true);
        setErrorMessage("Failed to initialize PDF viewer - worker initialization failed");
      }
    } catch (error) {
      console.error("Exception during PDF.js worker initialization:", error);
      setPdfError(true);
      setErrorMessage(`PDF initialization error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }, []);

  // Reset loading state when PDF URL changes
  useEffect(() => {
    setLoading(true);
    setPdfError(false);
    setErrorMessage('');
    setPageNumber(1);
    console.log("PDF URL changed to:", pdfUrl);
  }, [pdfUrl]);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
    setPdfError(false);
    console.log('PDF loaded successfully:', pdfUrl, 'with', numPages, 'pages');
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

  return {
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
  };
};
