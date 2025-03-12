
// Module-level variable to track initialization state
let isWorkerInitialized = false;

/**
 * Initializes the PDF.js worker with a CDN-hosted worker file
 * Only initializes once to avoid duplicate initialization
 * @returns boolean indicating success or failure
 */
export const initializePdfWorker = (): boolean => {
  if (isWorkerInitialized) {
    console.log("Worker already initialized, skipping");
    return true;
  }
  
  try {
    // Direct assignment to the window object to ensure it's accessible
    if (typeof window !== 'undefined') {
      console.log("Initializing PDF.js worker on window object...");
      
      // Create a safety wrapper around pdfjs to avoid errors
      if (!window.pdfjsLib) {
        window.pdfjsLib = {};
      }
      
      // Directly assign GlobalWorkerOptions to window.pdfjsLib
      if (!window.pdfjsLib.GlobalWorkerOptions) {
        window.pdfjsLib.GlobalWorkerOptions = {};
      }
      
      // Set the worker source directly on the window object
      const workerSrc = `https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`;
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;
      console.log("PDF.js worker initialized with:", workerSrc);
      
      // Try to load the worker script directly
      const script = document.createElement('script');
      script.src = workerSrc;
      script.async = false; // Load synchronously
      document.head.appendChild(script);
    }
    
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

/**
 * Get default PDF document options with CSP-friendly settings
 */
export const getDefaultPdfOptions = () => {
  return {
    cMapUrl: 'https://unpkg.com/pdfjs-dist@3.11.174/cmaps/',
    cMapPacked: true,
    standardFontDataUrl: 'https://unpkg.com/pdfjs-dist@3.11.174/standard_fonts/',
    disableAutoFetch: true,
    disableStream: false,
    isEvalSupported: false, // Important: Tell PDF.js not to use eval
    useSystemFonts: true
  };
};
