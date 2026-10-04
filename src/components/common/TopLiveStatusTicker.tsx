import React, { useState, useEffect } from 'react';
import { Clock, Sparkles, MapPin, ChevronRight, MessageSquare, Info } from 'lucide-react';
import { getZaraCurrentActivity } from '../../data/portfolioData';

export const TopLiveStatusTicker: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [simulatedHour, setSimulatedHour] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Compute date with simulated hour if user clicked test time
  const effectiveDate = new Date(currentTime);
  if (simulatedHour !== null) {
    effectiveDate.setHours(simulatedHour, 0, 0);
  }

  const activity = getZaraCurrentActivity(effectiveDate);

  const scrollToJadwal = () => {
    const el = document.getElementById('jadwal');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-pink-50/70 dark:bg-neutral-900/90 border-b border-pink-200/50 dark:border-pink-900/30 backdrop-blur-xs py-2 px-3 sm:px-6 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        {/* Left: Live status with pulse */}
        <div className="flex items-center gap-2 truncate">
          <span className="flex h-2 w-2 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
          </span>

          <span className="font-bold text-neutral-800 dark:text-neutral-200 font-mono tabular-nums shrink-0">
            {activity.timeStr} WIB
          </span>

          <span className="text-neutral-300 dark:text-neutral-700">·</span>

          <div className="truncate">
            <span className="font-semibold text-pink-600 dark:text-pink-400 mr-1.5">
              {activity.badge}:
            </span>
            <span className="text-neutral-600 dark:text-neutral-300 truncate">
              {activity.shortSummary}
            </span>
          </div>
        </div>

        {/* Right: Quick action / Hour switcher simulator */}
        <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0 pt-1 sm:pt-0 border-t sm:border-t-0 border-pink-100 dark:border-neutral-800">
          {/* Quick hour preview buttons so user can see jam 10, jam 12, jam 20 */}
          <div className="hidden lg:flex items-center gap-1 text-[11px] text-neutral-400">
            <span>Coba simulasi:</span>
            <button
              type="button"
              onClick={() => setSimulatedHour(simulatedHour === 10 ? null : 10)}
              className={`px-1.5 py-0.5 rounded-md transition-colors ${
                simulatedHour === 10
                  ? 'bg-pink-600 text-white font-bold'
                  : 'bg-white dark:bg-neutral-800 hover:text-pink-500'
              }`}
            >
              Jam 10
            </button>
            <button
              type="button"
              onClick={() => setSimulatedHour(simulatedHour === 12 ? null : 12)}
              className={`px-1.5 py-0.5 rounded-md transition-colors ${
                simulatedHour === 12
                  ? 'bg-pink-600 text-white font-bold'
                  : 'bg-white dark:bg-neutral-800 hover:text-pink-500'
              }`}
            >
              Jam 12 (Lunch)
            </button>
            <button
              type="button"
              onClick={() => setSimulatedHour(simulatedHour === 20 ? null : 20)}
              className={`px-1.5 py-0.5 rounded-md transition-colors ${
                simulatedHour === 20
                  ? 'bg-pink-600 text-white font-bold'
                  : 'bg-white dark:bg-neutral-800 hover:text-pink-500'
              }`}
            >
              Jam 20 (Kelas)
            </button>
            {simulatedHour !== null && (
              <button
                type="button"
                onClick={() => setSimulatedHour(null)}
                className="text-[10px] text-pink-500 underline ml-1"
              >
                Reset Live
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={scrollToJadwal}
            className="inline-flex items-center gap-1 font-semibold text-pink-600 dark:text-pink-400 hover:underline text-[11px]"
          >
            <span>Lihat Jadwal Lengkap</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
