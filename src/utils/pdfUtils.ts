
import { pdfjs } from 'react-pdf';

// Module-level variable to track initialization state
let isWorkerInitialized = false;

/**
 * Initializes the PDF.js worker with a CDN-hosted worker file
 * Only initializes once to avoid duplicate initialization
 * @returns boolean indicating success or failure
 */
export const initializePdfWorker = (): boolean => {
  if (isWorkerInitialized) {
    return true;
  }
  
  try {
    // Check if pdfjs is available
    if (!pdfjs || !pdfjs.GlobalWorkerOptions) {
      console.error("PDF.js library not properly loaded");
      return false;
    }
    
    // Set worker source from CDN
    const workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;
    pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
    console.log("PDF.js worker initialized with:", workerSrc);
    isWorkerInitialized = true;
    return true;
  } catch (error) {
    console.error("Failed to initialize PDF.js worker:", error);
    return false;
  }
};

/**
 * Formats a PDF URL to ensure it's absolute
 */
export const formatPdfUrl = (pdfUrl: string): string => {
  // For external URLs, use the URL directly
  return pdfUrl.startsWith('http') 
    ? pdfUrl 
    : pdfUrl.startsWith('/') 
      ? `${window.location.origin}${pdfUrl}`
      : pdfUrl;
};
