import { useState, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Download, ExternalLink, FileCheck, ShieldCheck } from 'lucide-react';

export interface OfferLetterDoc {
  title: string;
  documentUrl: string;
  documentName: string;
  documentRef: string;
  candidateName?: string;
  organization: string;
  duration: string;
}

interface OfferLetterModalProps {
  isOpen: boolean;
  onClose: () => void;
  document?: OfferLetterDoc | null;
}

export function OfferLetterModal({
  isOpen,
  onClose,
  document
}: OfferLetterModalProps) {
  const [zoom, setZoom] = useState<number>(1);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      setZoom(1);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !document) return null;

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.15, 1.6));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.15, 0.7));
  };

  const handleZoomReset = () => {
    setZoom(1);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="offer-letter-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/75 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#0B192C] text-[#F8F9FA] rounded-2xl max-w-5xl w-full h-[92vh] max-h-[900px] flex flex-col shadow-2xl border border-gray-700/80 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="bg-[#0F1E36] px-4 sm:px-6 py-3.5 border-b border-gray-700/80 flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
          {/* Document Title & Badge */}
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 border border-teal-500/30 flex items-center justify-center flex-shrink-0">
              <FileCheck size={18} />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 id="offer-letter-title" className="font-space font-bold text-sm sm:text-base text-white truncate">
                  {document.title}
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/30">
                  <ShieldCheck size={11} /> Verified
                </span>
              </div>
              <p className="text-[11px] text-gray-400 truncate">
                Ref: {document.documentRef} • Candidate: {document.candidateName || 'Kuruva Srividya'}
              </p>
            </div>
          </div>

          {/* Action & Zoom Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center bg-[#0B192C] rounded-lg border border-gray-700 p-0.5 text-xs text-gray-300">
              <button
                onClick={handleZoomOut}
                disabled={zoom <= 0.75}
                className="p-1.5 hover:text-white disabled:opacity-30 hover:bg-gray-800 rounded transition-colors cursor-pointer"
                title="Zoom Out"
                aria-label="Zoom Out"
              >
                <ZoomOut size={15} />
              </button>
              <button
                onClick={handleZoomReset}
                className="px-2 py-1 font-mono text-[11px] hover:text-white transition-colors cursor-pointer"
                title="Reset Zoom (100%)"
              >
                {Math.round(zoom * 100)}%
              </button>
              <button
                onClick={handleZoomIn}
                disabled={zoom >= 1.55}
                className="p-1.5 hover:text-white disabled:opacity-30 hover:bg-gray-800 rounded transition-colors cursor-pointer"
                title="Zoom In"
                aria-label="Zoom In"
              >
                <ZoomIn size={15} />
              </button>
              {zoom !== 1 && (
                <button
                  onClick={handleZoomReset}
                  className="p-1.5 hover:text-white hover:bg-gray-800 rounded transition-colors cursor-pointer text-gray-400"
                  title="Reset Zoom"
                >
                  <RotateCcw size={13} />
                </button>
              )}
            </div>

            {/* Option 1: Open in New Browser Tab */}
            <a
              href={document.documentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-semibold border border-gray-600 transition-colors shadow-sm"
              title="Open document in a new browser tab"
            >
              <ExternalLink size={13} />
              <span className="hidden sm:inline">New Tab</span>
            </a>

            {/* Download Original PDF Button */}
            <a
              href={document.documentUrl}
              download={document.documentName}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold transition-colors shadow-sm"
              title="Download original offer letter PDF"
            >
              <Download size={13} />
              <span>Download</span>
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors cursor-pointer ml-1"
              aria-label="Close offer letter viewer"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Document Viewing Area */}
        <div className="flex-1 bg-gray-900/90 overflow-auto relative flex items-center justify-center p-2 sm:p-4">
          <div
            className="w-full h-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden transition-transform duration-150 origin-top"
            style={{
              transform: zoom !== 1 ? `scale(${zoom})` : undefined,
              height: zoom > 1 ? `${100 * zoom}%` : '100%'
            }}
          >
            <iframe
              src={`${document.documentUrl}#toolbar=0&navpanes=0`}
              title={document.title}
              className="w-full h-full border-0 bg-white"
            />
          </div>
        </div>

        {/* Bottom Verification Footer */}
        <div className="bg-[#0F1E36] px-4 sm:px-6 py-2.5 border-t border-gray-700/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400 flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-gray-300 font-medium">
              {document.organization}
            </span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-400">Duration: {document.duration}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] text-gray-400 font-mono">
              Original Verified PDF
            </span>
            <a
              href={document.documentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 underline font-medium text-xs flex items-center gap-1"
            >
              Direct Link <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
