import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Play,
  Pause,
  ExternalLink,
  Github,
  Sparkles,
  Layers,
  CheckCircle2,
  Key
} from 'lucide-react';
import { Project } from '../../data/portfolioData';

interface ProjectCarouselProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  projects,
  onSelectProject,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const autoPlayRef = useRef<number | null>(null);

  const total = projects.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play timer
  useEffect(() => {
    if (isPlaying && total > 1) {
      autoPlayRef.current = window.setInterval(() => {
        nextSlide();
      }, 5500);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPlaying, currentIndex, total]);

  // Touch Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  const currentProject = projects[currentIndex];
  if (!currentProject) return null;

  return (
    <div
      className="relative w-full max-w-5xl mx-auto select-none"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Carousel Main Card with animated transition */}
      <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-[#121620] border border-slate-200/90 dark:border-neutral-800 shadow-xl transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
          {/* Left / Top Visual Thumbnail Zone (7 Cols on LG) */}
          <div
            className="lg:col-span-7 relative overflow-hidden bg-slate-900 group cursor-pointer"
            onClick={() => onSelectProject(currentProject)}
          >
            <img
              key={`img-${currentProject.id}`}
              src={currentProject.image}
              alt={currentProject.title}
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover min-h-[260px] sm:min-h-[340px] lg:min-h-full transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Ambient gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-950/40" />

            {/* Badges on image */}
            <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 dark:bg-neutral-900/90 text-rose-600 dark:text-rose-400 backdrop-blur-md shadow-xs border border-white/20">
                {currentProject.categoryLabel}
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-black/60 text-white backdrop-blur-md">
                {currentProject.period}
              </span>
            </div>

            {/* Click to open badge overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              {currentProject.metrics && (
                <div className="px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md text-white text-xs font-semibold border border-white/10 shadow-lg">
                  ★ {currentProject.metrics}
                </div>
              )}
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-600/90 backdrop-blur-md text-white text-xs font-bold">
                <span>Klik untuk Detail</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Right Content Zone (5 Cols on LG) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between text-left">
            <div>
              {/* Category & Slide counter */}
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="font-semibold text-rose-600 dark:text-rose-400">
                  {currentProject.role}
                </span>
                <span className="font-mono font-bold text-slate-400 dark:text-neutral-500 tabular-nums">
                  0{currentIndex + 1} <span className="opacity-40">/</span> 0{total}
                </span>
              </div>

              {/* Title */}
              <h3
                onClick={() => onSelectProject(currentProject)}
                className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight cursor-pointer hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
              >
                {currentProject.title}
              </h3>

              {/* Short Description */}
              <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-neutral-300 leading-relaxed line-clamp-3">
                {currentProject.description}
              </p>

              {/* Real Problem statement excerpt */}
              {currentProject.problemSolved && (
                <div className="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-neutral-900/70 border border-slate-200/80 dark:border-neutral-800 text-xs">
                  <span className="font-bold text-slate-700 dark:text-neutral-300 block mb-1">
                    🎯 Solusi Masalah Nyata:
                  </span>
                  <p className="text-slate-600 dark:text-neutral-400 line-clamp-2">
                    {currentProject.problemSolved}
                  </p>
                </div>
              )}

              {/* Tech Stack Pills */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {currentProject.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 text-[11px] font-semibold border border-rose-200/60 dark:border-rose-900/40"
                  >
                    {tag}
                  </span>
                ))}
                {currentProject.tags.length > 4 && (
                  <span className="text-[11px] text-slate-400 self-center">
                    +{currentProject.tags.length - 4}
                  </span>
                )}
              </div>
            </div>

            {/* Bottom Actions & Controls */}
            <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-neutral-800 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => onSelectProject(currentProject)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 dark:bg-rose-600 dark:hover:bg-rose-500 rounded-xl shadow-xs transition-all"
              >
                <span>Buka Studi Kasus</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              {/* Prev / Next navigation buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Proyek Sebelumnya"
                  className="p-2 rounded-xl bg-slate-100 dark:bg-neutral-800 text-slate-700 dark:text-neutral-300 hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-950/60 dark:hover:text-rose-400 transition-colors border border-slate-200/70 dark:border-neutral-700"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Proyek Selanjutnya"
                  className="p-2 rounded-xl bg-slate-100 dark:bg-neutral-800 text-slate-700 dark:text-neutral-300 hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-950/60 dark:hover:text-rose-400 transition-colors border border-slate-200/70 dark:border-neutral-700"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation Dots & Auto-Play Controller */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-4 px-2">
        {/* Clickable Slide Dots */}
        <div className="flex items-center gap-2">
          {projects.map((proj, idx) => (
            <button
              key={proj.id}
              type="button"
              onClick={() => goToSlide(idx)}
              aria-label={`Pindah ke slide ${idx + 1}: ${proj.title}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'w-8 bg-rose-600 dark:bg-rose-500 shadow-xs'
                  : 'w-2.5 bg-slate-300 dark:bg-neutral-700 hover:bg-rose-300'
              }`}
            />
          ))}
        </div>

        {/* Thumbnail Preview Strip */}
        <div className="hidden sm:flex items-center gap-2">
          {projects.map((proj, idx) => (
            <button
              key={`thumb-${proj.id}`}
              type="button"
              onClick={() => goToSlide(idx)}
              title={proj.title}
              className={`relative w-12 h-8 rounded-lg overflow-hidden border transition-all ${
                currentIndex === idx
                  ? 'border-rose-500 ring-2 ring-rose-500/30 scale-105'
                  : 'border-slate-200 dark:border-neutral-700 opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={proj.image}
                alt={proj.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Play / Pause Toggle */}
        <button
          type="button"
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? 'Jeda Carousel' : 'Putar Carousel Otomatis'}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-slate-500 dark:text-neutral-400 hover:text-slate-800 dark:hover:text-white bg-slate-100 dark:bg-neutral-800/80 border border-slate-200/80 dark:border-neutral-700 transition-colors"
        >
          {isPlaying ? (
            <>
              <Pause className="w-3 h-3 text-rose-500" />
              <span className="text-[11px]">Auto Slide Aktif</span>
            </>
          ) : (
            <>
              <Play className="w-3 h-3 text-emerald-500" />
              <span className="text-[11px]">Auto Slide Dijeda</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
