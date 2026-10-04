import React, { useEffect } from 'react';
import { ArrowLeft, Home, CornerDownLeft } from 'lucide-react';

interface BackNavHeaderProps {
  pageTitle: string;
  categoryLabel?: string;
  onBack: () => void;
}

export const BackNavHeader: React.FC<BackNavHeaderProps> = ({
  pageTitle,
  categoryLabel = 'Navigasi Terpisah',
  onBack,
}) => {
  // Listen for keyboard shortcuts: Alt + ArrowLeft, Ctrl + Z, Escape, Backspace (when not in input)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        return;
      }

      if (
        (e.altKey && e.key === 'ArrowLeft') ||
        (e.ctrlKey && (e.key === 'z' || e.key === 'Z')) ||
        e.key === 'Escape'
      ) {
        e.preventDefault();
        onBack();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onBack]);

  return (
    <div className="pt-24 pb-6 border-b border-neutral-200/80 dark:border-neutral-800 bg-white/70 dark:bg-neutral-950/70 backdrop-blur-md sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onBack}
              title="Kembali ke Beranda Utama (Bisa tekan Alt+← atau Ctrl+Z)"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-pink-300 dark:hover:border-pink-800 text-neutral-800 dark:text-neutral-200 hover:text-pink-600 dark:hover:text-pink-400 shadow-xs transition-all duration-200 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-pink-500"
            >
              <ArrowLeft className="w-4 h-4 text-pink-500" />
              <span>Kembali ke Beranda</span>
            </button>

            {/* Keyboard shortcut hint */}
            <span className="hidden md:inline-flex items-center gap-1 text-[11px] text-neutral-400 font-mono">
              <kbd className="px-1.5 py-0.5 rounded-sm bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300">
                Alt
              </kbd>
              <span>+</span>
              <kbd className="px-1.5 py-0.5 rounded-sm bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300">
                ←
              </kbd>
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <button
              type="button"
              onClick={onBack}
              className="hover:text-pink-600 dark:hover:text-pink-400 flex items-center gap-1 transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Beranda</span>
            </button>
            <span className="text-neutral-300 dark:text-neutral-700">/</span>
            <span className="text-neutral-400 font-medium">{categoryLabel}</span>
            <span className="text-neutral-300 dark:text-neutral-700">/</span>
            <span className="text-pink-600 dark:text-pink-400 font-bold truncate max-w-[200px]">
              {pageTitle}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
