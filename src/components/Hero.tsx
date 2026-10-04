import React from 'react';
import { ArrowUpRight, Send, MapPin, Linkedin, Github, Mail, ShieldCheck, Server, Code2, Clock, BookOpen } from 'lucide-react';
import { PERSONAL_INFO, WORKING_HOURS } from '../data/portfolioData';
import { RevealOnScroll } from './common/RevealOnScroll';

interface HeroProps {
  onOpenResume: () => void;
  onNavigateToSchedule?: () => void;
  onNavigateToMatkul?: () => void;
  onNavigateToAbout?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenResume,
  onNavigateToSchedule,
  onNavigateToMatkul,
  onNavigateToAbout,
}) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="beranda"
      className="relative pt-6 sm:pt-12 pb-16 md:pb-24 overflow-hidden"
    >
      {/* Subtle Dusty Pink Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-br from-pink-300/15 via-pink-400/10 to-transparent dark:from-pink-500/10 dark:via-pink-900/10 dark:to-transparent blur-3xl rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-20 w-80 h-80 bg-pink-200/20 dark:bg-pink-900/15 blur-3xl rounded-full"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="up" delayMs={50}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Status and Location metadata (zero-pill clean unboxed text) */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-neutral-600 dark:text-neutral-400 mb-4">
                <span className="inline-flex items-center gap-1.5 text-pink-700 dark:text-pink-300 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Terbuka untuk Magang & Junior Software Engineer
                </span>
                <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
                <span className="inline-flex items-center gap-1 text-neutral-500 dark:text-neutral-400">
                  <MapPin className="w-3.5 h-3.5 text-pink-500" />
                  Tangerang, Banten
                </span>
                <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
                <button
                  type="button"
                  onClick={() => scrollToSection('jadwal')}
                  className="inline-flex items-center gap-1 text-pink-600 dark:text-pink-400 hover:underline font-semibold"
                >
                  <Clock className="w-3 h-3" />
                  <span>Cek Status & Jadwal Kuliah</span>
                </button>
              </div>

              {/* Sapaan Hangat */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.15] mb-4 text-balance">
                {PERSONAL_INFO.shortGreeting}
                <span className="text-pink-600 dark:text-pink-400">,</span>{' '}
                <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-pink-600 via-pink-500 to-rose-400 bg-clip-text text-transparent">
                  Azzahra
                </span>
              </h1>

              {/* Headline highlighting roles */}
              <p className="text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-200 mb-4 leading-relaxed">
                Software Engineering Student <span className="text-pink-500">/</span> Web Developer <span className="text-pink-500">/</span> IT Administrator
              </p>

              {/* Concise Bio */}
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-6 max-w-xl leading-relaxed">
                Mahasiswi semester 5 di Universitas Insan Pembangunan Indonesia yang menggabungkan keahlian perancangan web responsif (React, Laravel, PHP), keandalan manajemen server terpusat (20+ domain), dan ketelitian mitigasi keamanan siber (SOC & Burp Suite).
              </p>

              {/* Quick Navigation pills */}
              <div className="flex flex-wrap items-center gap-2 mb-8 text-xs">
                {onNavigateToSchedule && (
                  <button
                    type="button"
                    onClick={onNavigateToSchedule}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-50 dark:bg-pink-950/40 text-pink-700 dark:text-pink-300 border border-pink-200/80 dark:border-pink-900/60 hover:bg-pink-100 transition-colors"
                  >
                    <Clock className="w-3.5 h-3.5" />
                    <span>Jadwal Kuliah Semester 5 & Jam Kerja</span>
                  </button>
                )}
                {onNavigateToMatkul && (
                  <button
                    type="button"
                    onClick={onNavigateToMatkul}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-pink-500" />
                    <span>Dokumentasi Belajar 8 Matkul</span>
                  </button>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10">
                <button
                  type="button"
                  onClick={() => scrollToSection('proyek')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-pink-600 hover:bg-pink-700 active:scale-[0.98] shadow-md shadow-pink-600/20 transition-all duration-200 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-pink-500"
                >
                  <span>Lihat Proyek</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('kontak')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-neutral-800 hover:text-pink-600 bg-white dark:bg-neutral-900 dark:text-neutral-200 dark:hover:text-pink-300 border border-neutral-200 dark:border-neutral-800 hover:border-pink-300 dark:hover:border-pink-800 shadow-xs transition-all duration-200 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-pink-500"
                >
                  <Send className="w-4 h-4 text-pink-500" />
                  <span>Hubungi Saya</span>
                </button>

                <button
                  type="button"
                  onClick={onOpenResume}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-pink-700 dark:text-pink-300 hover:bg-pink-50 dark:hover:bg-pink-950/30 transition-colors"
                >
                  <span>Ringkasan Resume</span>
                </button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 text-neutral-500 dark:text-neutral-400">
                <span className="text-xs font-medium uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                  Hubungkan:
                </span>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-neutral-900 transition-colors"
                  aria-label="LinkedIn Azzahra"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-neutral-900 transition-colors"
                  aria-label="GitHub Azzahra"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2 rounded-lg hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-neutral-900 transition-colors"
                  aria-label="Kirim Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Visual Anchor & Portrait */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm sm:max-w-md">
                {/* Outer Decorative Gradient Ring */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -m-3 bg-gradient-to-tr from-pink-400/30 via-rose-300/20 to-pink-500/20 dark:from-pink-600/20 dark:via-rose-900/20 dark:to-pink-400/10 rounded-3xl blur-xl"
                />

                {/* Main Card Frame */}
                <div className="relative bg-white dark:bg-neutral-900 rounded-2xl p-3 border border-pink-100 dark:border-neutral-800 shadow-xl shadow-pink-500/5">
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                    <img
                      src={PERSONAL_INFO.avatar}
                      alt="Azzahra - Software Engineering Student & IT Administrator"
                      referrerPolicy="no-referrer"
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent opacity-80" />

                    {/* Overlay text at bottom of portrait */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <p className="text-xs font-semibold text-pink-300 uppercase tracking-wider">
                        Universitas Insan Pembangunan Indonesia
                      </p>
                      <p className="text-sm font-bold truncate">
                        BTech Software Engineering (2024 - 2028)
                      </p>
                    </div>
                  </div>

                  {/* Micro highlights underneath portrait */}
                  <div className="mt-3 grid grid-cols-3 gap-2 text-center pt-2 border-t border-neutral-100 dark:border-neutral-800/80">
                    <div className="p-1.5">
                      <Code2 className="w-4 h-4 mx-auto text-pink-500 mb-1" />
                      <span className="block text-[11px] font-bold text-neutral-800 dark:text-neutral-200">React & Laravel</span>
                      <span className="block text-[10px] text-neutral-400">Web Dev</span>
                    </div>
                    <div className="p-1.5 border-x border-neutral-100 dark:border-neutral-800">
                      <Server className="w-4 h-4 mx-auto text-pink-500 mb-1" />
                      <span className="block text-[11px] font-bold text-neutral-800 dark:text-neutral-200">PT. Arai Rubber</span>
                      <span className="block text-[10px] text-neutral-400">IT Admin</span>
                    </div>
                    <div className="p-1.5">
                      <ShieldCheck className="w-4 h-4 mx-auto text-pink-500 mb-1" />
                      <span className="block text-[11px] font-bold text-neutral-800 dark:text-neutral-200">SOC & Burp</span>
                      <span className="block text-[10px] text-neutral-400">Cyber Sec</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Stats Row with RevealOnScroll */}
        <RevealOnScroll direction="up" delayMs={150}>
          <div className="mt-16 pt-8 border-t border-neutral-200/80 dark:border-neutral-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {PERSONAL_INFO.keyStats.map((item) => (
              <div key={item.label} className="text-left">
                <span className="block text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tabular-nums tracking-tight">
                  {item.value}
                </span>
                <span className="block text-xs font-semibold text-pink-600 dark:text-pink-400 mt-0.5">
                  {item.label}
                </span>
                <span className="block text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
