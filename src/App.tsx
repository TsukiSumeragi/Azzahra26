import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ExperienceSkills } from './components/ExperienceSkills';
import { Projects } from './components/Projects';
import { WorkingHoursSchedule } from './components/schedule/WorkingHoursSchedule';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { RevealOnScroll } from './components/common/RevealOnScroll';
import { SideScrollTracker } from './components/common/SideScrollTracker';
import { InfiniteMarquee } from './components/common/InfiniteMarquee';
import { useScrollSpy } from './hooks/useScrollSpy';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const activeSection = useScrollSpy(['beranda', 'tentang', 'pengalaman', 'proyek', 'kontak'], 140);

  useEffect(() => {
    // Clear any stale #pengalaman from previous turn routing so Beranda opens cleanly at /
    if (window.location.hash === '#pengalaman' || window.location.hash === '#/pengalaman') {
      window.history.replaceState(null, '', window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const handleSideNavigate = (id: string) => {
    if (id === 'beranda') {
      window.history.replaceState(null, '', window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      window.history.replaceState(null, '', `#${id}`);
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-[#0c0f17] text-slate-900 dark:text-neutral-100 flex flex-col font-sans transition-colors duration-300 pb-16 md:pb-0">
        {/* Navigation Bar: Top bar for desktop & Android APK-style bottom navigation for mobile */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Floating Side Scroll Progress Tracker (Desktop Right Edge) */}
        <SideScrollTracker
          activeSection={activeSection}
          onNavigate={handleSideNavigate}
        />

        {/* Unified, Intuitive Single-Page Flow */}
        <main className="flex-1 pt-12 sm:pt-14">
          {/* Section 1: Beranda / Hero */}
          <Hero
            onOpenResume={() => setIsResumeOpen(true)}
          />

          {/* Smooth Continuous Gliding Marquee Ticker */}
          <InfiniteMarquee />

          {/* Section 2: Tentang Saya (Pendidikan SMK/Kampus, Manual Photo Slot, Filosofi) */}
          <About />

          {/* Section 3: Pengalaman (IT Admin, Web Dev, Cyber Sec, Farmasi Klinis, Lampiran Berkas) */}
          <ExperienceSkills />

          {/* Section 4: Galeri Proyek & Dokumentasi Belajar Tiap Matkul S5 */}
          <Projects onOpenResume={() => setIsResumeOpen(true)} />

          {/* Section 5: "Eh, si Zara Lagi Ngapain Sekarang?" (Status Realtime & Jadwal Kuliah) */}
          <section id="jadwal" className="py-20 md:py-28 relative bg-slate-100/70 dark:bg-neutral-900/30 border-t border-slate-200/80 dark:border-neutral-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <RevealOnScroll direction="up">
                <div className="max-w-2xl text-left mb-10">
                  <p className="text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400 mb-2">
                    04. Aktivitas & Jam Kuliah
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                    Status Aktivitas & Jadwal Harian Zara
                  </h2>
                  <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Biar kamu tahu kapan waktu terbaik buat hubungin Zara, ini tracker waktu aktif kerja di PT Arai Rubber Seal dan jadwal kelas kuliah sore/malam semester 5.
                  </p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delayMs={100}>
                <WorkingHoursSchedule />
              </RevealOnScroll>
            </div>
          </section>

          {/* Section 6: Kontak */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Complete Curriculum Vitae Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
