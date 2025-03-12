
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
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-slate-200 rounded w-3/4 mx-auto"></div>
                <div className="h-40 bg-slate-200 rounded mx-auto w-full max-w-md"></div>
                <div className="h-4 bg-slate-200 rounded w-1/2 mx-auto"></div>
              </div>
            </div>
            <p className="text-black">Loading PDF viewer...</p>
          </div>
        </div>
      </div>
    </div>
  );
};
