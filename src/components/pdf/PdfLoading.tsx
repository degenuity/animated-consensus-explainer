
import React from 'react';

interface PdfLoadingProps {
  title?: string;
}

export const PdfLoading: React.FC<PdfLoadingProps> = ({ title }) => {
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
};
