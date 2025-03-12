
import React from 'react';

interface PdfErrorProps {
  pdfUrl: string;
  errorMessage: string;
}

export const PdfError: React.FC<PdfErrorProps> = ({ pdfUrl, errorMessage }) => {
  return (
    <div className="text-center text-red-500 py-8 bg-slate-50 rounded">
      <p>Failed to load PDF. Please check the URL and try again.</p>
      <p className="text-sm mt-2">PDF URL: {pdfUrl}</p>
      {errorMessage && (
        <p className="text-xs mt-2 max-w-md mx-auto overflow-hidden text-gray-600">
          Error details: {errorMessage}
        </p>
      )}
    </div>
  );
};
