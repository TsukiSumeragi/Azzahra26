import React from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress';

interface SideScrollTrackerProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const SideScrollTracker: React.FC<SideScrollTrackerProps> = ({
  activeSection,
  onNavigate,
}) => {
  const progress = useScrollProgress();

  const sections = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'tentang', label: 'Tentang' },
    { id: 'pengalaman', label: 'Pengalaman' },
    { id: 'proyek', label: 'Proyek' },
    { id: 'kontak', label: 'Kontak' },
  ];

  return (
    <aside
      aria-label="Navigasi Pelacak Halaman"
      className="hidden xl:flex fixed right-5 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 p-2 rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-800 shadow-md select-none transition-all"
    >
      {/* Percentage tag at top of rail */}
      <span className="text-[10px] font-mono font-bold text-pink-600 dark:text-pink-400 tabular-nums">
        {Math.round(progress)}%
      </span>

      {/* Mini vertical progress rail track */}
      <div className="w-1 h-12 bg-neutral-200 dark:bg-neutral-800 rounded-full relative overflow-hidden">
        <div
          style={{ height: `${progress}%` }}
          className="w-full bg-pink-500 rounded-full transition-all duration-150"
        />
      </div>

      {/* Section dots with tooltip */}
      <div className="flex flex-col items-center gap-2 pt-1">
        {sections.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              type="button"
              onClick={() => onNavigate(sec.id)}
              className="group relative flex items-center justify-center p-1 rounded-full focus:outline-hidden"
              aria-label={`Gulir ke bagian ${sec.label}`}
            >
              {/* Tooltip on hover */}
              <span className="absolute right-7 px-2 py-1 rounded-md text-[11px] font-semibold text-white bg-neutral-900/90 backdrop-blur-xs whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-sm">
                {sec.label}
              </span>

              {/* Dot / Pill */}
              <span
                className={`transition-all duration-200 rounded-full ${
                  isActive
                    ? 'w-2.5 h-6 bg-pink-500 shadow-sm shadow-pink-500/50'
                    : 'w-2 h-2 bg-neutral-300 dark:bg-neutral-700 hover:bg-pink-400 hover:scale-125'
                }`}
              />
            </button>
          );
        })}
      </div>
    </aside>
  );
};
