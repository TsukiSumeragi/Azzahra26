import React, { useEffect } from 'react';
import { X, Printer, Download, MapPin, Mail, Phone, Linkedin, ExternalLink, Calendar } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION_LIST, CERTIFICATIONS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 text-left overflow-hidden"
      >
        {/* Top Action Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-950/70 backdrop-blur-md shrink-0">
          <div>
            <h2 id="resume-title" className="text-base font-bold text-neutral-900 dark:text-white">
              Curriculum Vitae — Azzahra (Zara)
            </h2>
            <p className="text-xs text-neutral-500">
              Web Developer & IT Administrator
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-pink-50 dark:bg-pink-950/50 text-pink-700 dark:text-pink-300 border border-pink-200/80 dark:border-pink-900/60 hover:bg-pink-100 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup CV"
              className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable CV Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 text-neutral-800 dark:text-neutral-200 print:text-black print:bg-white print:p-0">
          {/* Resume Header */}
          <div className="border-b border-neutral-200 dark:border-neutral-800 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                  Azzahra
                </h1>
                <p className="text-sm font-semibold text-pink-600 dark:text-pink-400 mt-1">
                  Semester 5 Software Engineering Student | Web Developer | IT Administrator
                </p>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Kota Tangerang & Kab. Tangerang, Banten, Indonesia
                </p>
              </div>

              <div className="text-xs space-y-1 text-neutral-600 dark:text-neutral-400 sm:text-right">
                <div>
                  <span className="font-medium text-neutral-900 dark:text-neutral-200">Email: </span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-pink-600 dark:text-pink-400">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <div>
                  <span className="font-medium text-neutral-900 dark:text-neutral-200">Mobile: </span>
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
                <div>
                  <span className="font-medium text-neutral-900 dark:text-neutral-200">LinkedIn: </span>
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-pink-600 dark:text-pink-400">
                    {PERSONAL_INFO.linkedinDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Ringkasan Profil */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400 mb-2">
              Ringkasan Profesional
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Pengalaman Kerja */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400 mb-4">
              Pengalaman Kerja & Magang
            </h3>
            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="text-left">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                      {exp.role}{' '}
                      <span className="font-semibold text-pink-600 dark:text-pink-400">
                        @ {exp.company}
                      </span>
                    </h4>
                    <span className="text-xs text-neutral-500 tabular-nums">
                      {exp.period} · {exp.location}
                    </span>
                  </div>
                  <ul className="mt-2 space-y-1.5 text-xs text-neutral-600 dark:text-neutral-300">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-pink-500 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Pendidikan */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400 mb-4">
              Pendidikan
            </h3>
            <div className="space-y-4">
              {EDUCATION_LIST.map((edu) => (
                <div key={edu.institution} className="text-left">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                      {edu.institution}
                    </h4>
                    <span className="text-xs text-neutral-500">{edu.period}</span>
                  </div>
                  <p className="text-xs font-semibold text-pink-600 dark:text-pink-400">
                    {edu.degree}
                  </p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sertifikasi & Pelatihan */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400 mb-3">
              Sertifikasi & Penghargaan
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.name} className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800/40 border border-neutral-200/60 dark:border-neutral-800">
                  <div className="flex justify-between text-[11px] text-neutral-400 mb-1">
                    <span>{cert.issuer}</span>
                    <span className="text-pink-600 dark:text-pink-400 font-semibold">{cert.year}</span>
                  </div>
                  <p className="font-bold text-neutral-900 dark:text-white">{cert.name}</p>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Kemampuan Bahasa */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400 mb-2">
              Kemampuan Bahasa
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-300">
              <span className="font-semibold text-neutral-900 dark:text-white">Bahasa Indonesia:</span> Asli (Native/Bilingual) ·{' '}
              <span className="font-semibold text-neutral-900 dark:text-white">Bahasa Jepang:</span> Elementary (Lulus Ujian JLPT N5) ·{' '}
              <span className="font-semibold text-neutral-900 dark:text-white">Bahasa Inggris:</span> Elementary Working
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-950/70 flex justify-between items-center text-xs text-neutral-400">
          <span>Portofolio Digital Azzahra</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 font-medium transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
