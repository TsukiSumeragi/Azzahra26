import React, { useEffect } from 'react';
import { X, FileText, Download, Check, ExternalLink, ShieldCheck } from 'lucide-react';
import { ExperienceAttachment } from '../../data/portfolioData';

interface AttachmentModalProps {
  attachment: ExperienceAttachment | null;
  companyName: string;
  onClose: () => void;
}

export const AttachmentModal: React.FC<AttachmentModalProps> = ({
  attachment,
  companyName,
  onClose,
}) => {
  const [downloaded, setDownloaded] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (attachment) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [attachment, onClose]);

  if (!attachment) return null;

  const handleDownload = () => {
    setDownloaded(true);
    // Create simulated file download
    const blob = new Blob(
      [
        `DOKUMEN PORTOFOLIO AZZAHRA\nPerusahaan: ${companyName}\nNama Dokumen: ${attachment.name}\nTanggal: ${attachment.date}\nUkuran: ${attachment.size}\n\nRingkasan:\n${attachment.summary}\n\nStatus: Terverifikasi dalam arsip portofolio digital Azzahra (Zara)`
      ],
      { type: 'text/plain;charset=utf-8' }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = attachment.name.replace(/\.[^/.]+$/, "") + ".txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setTimeout(() => setDownloaded(false), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 p-6 text-left"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup Pratinjau Dokumen"
          className="absolute top-4 right-4 p-2 rounded-lg text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-pink-50 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-pink-600 dark:text-pink-400">
              Lampiran Dokumen Resmi
            </span>
            <h3 className="text-base font-bold text-neutral-900 dark:text-white leading-tight">
              {attachment.name}
            </h3>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-neutral-700/60 mb-5 space-y-2 text-xs">
          <div className="flex justify-between text-neutral-500 dark:text-neutral-400">
            <span>Organisasi / Instansi:</span>
            <span className="font-semibold text-neutral-900 dark:text-neutral-200">{companyName}</span>
          </div>
          <div className="flex justify-between text-neutral-500 dark:text-neutral-400">
            <span>Format & Ukuran:</span>
            <span className="font-semibold text-neutral-900 dark:text-neutral-200 uppercase">{attachment.type} · {attachment.size}</span>
          </div>
          <div className="flex justify-between text-neutral-500 dark:text-neutral-400">
            <span>Tanggal Terbit / Periode:</span>
            <span className="font-semibold text-neutral-900 dark:text-neutral-200">{attachment.date}</span>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-1.5">
            Rangkuman Isi Dokumen
          </h4>
          <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {attachment.summary}
          </p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-neutral-800">
          <div className="flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
            <ShieldCheck className="w-4 h-4" />
            <span>Terverifikasi Portofolio</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-pink-600 hover:bg-pink-700 text-white transition-colors"
            >
              {downloaded ? <Check className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
              <span>{downloaded ? 'Tersimpan!' : 'Unduh Berkas'}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold rounded-xl bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 transition-colors"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
