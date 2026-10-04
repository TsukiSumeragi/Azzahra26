import React, { useState, useEffect } from 'react';
import {
  Sun,
  Moon,
  FileText,
  Send,
  Home,
  User,
  Briefcase,
  Layers,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { getZaraCurrentActivity, ZaraActivity } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activity, setActivity] = useState<ZaraActivity>(() => getZaraCurrentActivity());

  const progress = useScrollProgress();
  const sectionIds = ['beranda', 'tentang', 'pengalaman', 'proyek', 'kontak'];
  const activeSection = useScrollSpy(sectionIds, 140);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update live clock & activity every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActivity(getZaraCurrentActivity());
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { id: 'beranda', label: 'Beranda', shortLabel: 'Home', icon: Home },
    { id: 'tentang', label: 'Tentang Saya', shortLabel: 'Tentang', icon: User },
    { id: 'pengalaman', label: 'Pengalaman', shortLabel: 'Pengalaman', icon: Briefcase },
    { id: 'proyek', label: 'Proyek', shortLabel: 'Proyek', icon: Layers },
    { id: 'kontak', label: 'Kontak', shortLabel: 'Kontak', icon: MessageSquare },
  ];

  const scrollToSection = (id: string) => {
    if (id === 'beranda') {
      window.history.replaceState(null, '', window.location.pathname);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      window.history.replaceState(null, '', `#${id}`);
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* ========================================================
          TOP HORIZONTAL SCROLL PROGRESS LINE
         ======================================================== */}
      <div
        className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-neutral-200/30 dark:bg-neutral-800/30"
      >
        <div
          style={{ width: `${progress}%` }}
          className="h-full bg-gradient-to-r from-pink-500 via-rose-400 to-pink-600 transition-all duration-100 ease-out shadow-xs shadow-pink-500/50"
        />
      </div>

      {/* ========================================================
          DESKTOP & MOBILE TOP HEADER
         ======================================================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-[#0c0f17]/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 dark:border-neutral-800/80 py-2'
            : 'bg-white/80 dark:bg-[#0c0f17]/80 backdrop-blur-xs py-3 border-b border-slate-200/50 dark:border-neutral-800/50'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          {/* Left Zone: Brand + Live Status Ticker */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollToSection('beranda')}
              className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group flex items-center gap-1 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-pink-500 rounded-sm shrink-0"
            >
              <span>Zara</span>
              <span className="text-pink-500 font-extrabold group-hover:scale-125 transition-transform duration-200">
                .
              </span>
            </button>

            {/* Compact Header Live Status Pill */}
            <button
              type="button"
              onClick={() => scrollToSection('kontak')}
              title={`${activity.badge}: ${activity.shortSummary} · Klik untuk chat langsung!`}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-neutral-800/90 hover:bg-rose-50 dark:hover:bg-rose-950/40 border border-slate-200/90 dark:border-neutral-700/80 transition-all group max-w-[210px] sm:max-w-sm truncate"
            >
              <span className={`w-2 h-2 rounded-full ${activity.dotColor} animate-pulse shrink-0`} />
              <span className="font-mono font-bold text-[11px] sm:text-xs text-slate-800 dark:text-neutral-200 tabular-nums shrink-0">
                {activity.timeStr}
              </span>
              <span className="text-slate-300 dark:text-neutral-700">·</span>
              <span className="text-[11px] sm:text-xs font-semibold text-rose-600 dark:text-rose-400 group-hover:underline truncate">
                {activity.isAvailableNow ? 'Online' : activity.badge.replace(/[🟢💼🎓🌙]/g, '').trim()}
              </span>
              <span className="hidden lg:inline text-[11px] text-slate-500 dark:text-neutral-400">
                ({activity.actionText})
              </span>
            </button>
          </div>

          {/* Center Zone: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 p-1 bg-slate-100/90 dark:bg-neutral-900/90 rounded-full border border-slate-200/70 dark:border-neutral-800">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-white dark:bg-neutral-800 text-rose-600 dark:text-rose-400 shadow-xs ring-1 ring-rose-500/20'
                      : 'text-slate-600 dark:text-neutral-400 hover:text-rose-600 dark:hover:text-rose-300'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Zone: Actions */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Dark / Light Mode Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Ganti ke Light Mode' : 'Ganti ke Dark Mode'}
              className="p-2 rounded-xl text-slate-600 hover:text-rose-600 hover:bg-rose-50 dark:text-neutral-300 dark:hover:text-rose-300 dark:hover:bg-neutral-900 border border-slate-200/80 dark:border-neutral-800 transition-all duration-200 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-rose-500"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* View Resume Trigger */}
            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-900/50 dark:hover:bg-rose-950/70 transition-all duration-200 whitespace-nowrap focus:outline-hidden focus-visible:ring-2 focus-visible:ring-rose-500"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Lihat CV</span>
              <span className="sm:hidden">CV</span>
            </button>

            {/* Direct Contact Button */}
            <button
              type="button"
              onClick={() => scrollToSection('kontak')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 dark:bg-rose-600 dark:hover:bg-rose-500 rounded-xl shadow-xs hover:shadow-rose-500/20 transition-all duration-200 whitespace-nowrap focus:outline-hidden focus-visible:ring-2 focus-visible:ring-rose-500"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Hubungi</span>
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================
          MOBILE ANDROID-STYLE BOTTOM NAVIGATION BAR
         ======================================================== */}
      <nav
        aria-label="Mobile Bottom App Bar"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#0c0f17]/95 backdrop-blur-lg border-t border-slate-200/80 dark:border-neutral-800/80 shadow-lg px-2 py-1.5 transition-all"
      >
        <div className="flex items-center justify-around max-w-md mx-auto">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const IconComponent = item.icon;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all duration-200 relative ${
                  isActive
                    ? 'text-rose-600 dark:text-rose-400 font-bold'
                    : 'text-slate-500 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <div
                  className={`p-1 rounded-lg transition-transform ${
                    isActive
                      ? 'bg-rose-50 dark:bg-rose-950/60 scale-110'
                      : 'bg-transparent'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                </div>

                <span className="text-[10px] leading-tight tracking-tight mt-0.5 truncate max-w-[54px]">
                  {item.shortLabel}
                </span>

                {isActive && (
                  <span className="w-1 h-1 rounded-full bg-rose-500 absolute -bottom-0.5" />
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};
