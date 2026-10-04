import React from 'react';
import { ArrowUp, Heart, Linkedin, Github, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-950 py-12 text-neutral-600 dark:text-neutral-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Dedication */}
          <div className="text-center md:text-left">
            <a
              href="#beranda"
              className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white"
            >
              Azzahra <span className="text-pink-500 font-extrabold">.</span>
            </a>
            <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">
              Web Developer & IT Administrator · Tangerang, Indonesia
            </p>
          </div>

          {/* Quick Section Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium">
            <a href="#beranda" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
              Beranda
            </a>
            <a href="#tentang" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
              Tentang
            </a>
            <a href="#pengalaman" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
              Pengalaman
            </a>
            <a href="#proyek" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
              Proyek
            </a>
            <a href="#kontak" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
              Kontak
            </a>
          </div>

          {/* Back to top & Socials */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-neutral-400 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-neutral-400 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Kembali ke atas"
              className="p-2 rounded-lg text-neutral-500 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-2">
          <p>© {new Date().getFullYear()} Azzahra (Zara). Seluruh hak cipta dilindungi.</p>
          <p className="flex items-center gap-1">
            <span>Didesain dengan sentuhan elegan dusty pink</span>
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 inline-block" />
          </p>
        </div>
      </div>
    </footer>
  );
};
