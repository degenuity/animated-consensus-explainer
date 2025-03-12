
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut } from 'lucide-react';

interface PdfControlsProps {
  pageNumber: number;
  numPages: number | null;
  pdfError: boolean;
  pdfUrl: string;
  onPreviousPage: () => void;
  onNextPage: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
}

export const PdfControls: React.FC<PdfControlsProps> = ({
  pageNumber,
  numPages,
  pdfError,
  pdfUrl,
  onPreviousPage,
  onNextPage,
  onZoomIn,
  onZoomOut
}) => {
  return (
    <div className="flex justify-between items-center px-2 flex-wrap gap-2 bg-white py-2 border-t border-slate-200 sticky bottom-0">
      <div className="flex items-center space-x-2">
        <Button
          onClick={onPreviousPage}
          disabled={pageNumber <= 1 || pdfError}
          variant="outline"
          size="sm"
          className="flex items-center text-black hover:text-blue-500"
        >
          <ChevronLeft size={16} />
          Previous
        </Button>
        
        <Button
          onClick={onNextPage}
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
          onClick={onZoomOut}
          disabled={pdfError}
          variant="outline"
          size="sm"
          className="flex items-center text-black hover:text-blue-500"
        >
          <ZoomOut size={16} />
        </Button>
        
        <Button
          onClick={onZoomIn}
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
        <a href={pdfUrl} download target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm" className="flex items-center gap-1 text-black hover:text-blue-500">
            <Download size={16} />
            Download
          </Button>
        </a>
      )}
    </div>
  );
};
