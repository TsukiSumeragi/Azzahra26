import React from 'react';
import {
  X,
  CheckCircle2,
  Award,
  Layers,
  Code2,
  Globe,
  UserCheck,
  FileText,
  ExternalLink,
  Github
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HRAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export const HRAssessmentModal: React.FC<HRAssessmentModalProps> = ({
  isOpen,
  onClose,
  onOpenResume,
}) => {
  React.useEffect(() => {
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

  const criteria = [
    {
      num: "01",
      title: "Kualitas dan Kompleksitas Proyek",
      summary: "Memenuhi Standar Industri",
      icon: Layers,
      color: "text-rose-600 dark:text-rose-400",
      bg: "bg-rose-50 dark:bg-rose-950/40 border-rose-200/70 dark:border-rose-900/40",
      points: [
        "Fokus pada 6 proyek terbaik & paling kompleks (manajemen server 20+ website, portal advokasi berskala nasional, sistem inventaris IT pabrik manufaktur, & analisis SOC).",
        "Menyelesaikan masalah bisnis nyata: pencegahan kehilangan konversi Google Ads, integrasi DNS terpusat, digitalisasi pencatatan aset pabrik PT Arai Rubber Seal.",
        "Skala arsitektur matang: otentikasi aman (Sanctum/JWT), validasi input XSS/CSRF, caching performa, dan relasi database ternormalisasi."
      ]
    },
    {
      num: "02",
      title: "Keterampilan Teknis (Technical Skills)",
      summary: "Tech Stack Teruji & Siap Kerja",
      icon: Code2,
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-950/40 border-blue-200/70 dark:border-blue-900/40",
      points: [
        "Penguasaan teknologi industri: React.js (Frontend), Laravel & PHP (Backend), MySQL (Database), Tailwind CSS, dan Docker/Linux.",
        "Keahlian ganda IT Administrator: Manajemen DNS multi-domain, Google Tag Manager, packet analysis (Wireshark), dan audit keamanan web (Burp Suite).",
        "Struktur kode bersih dengan prinsip modularitas, clean architecture, serta repositori GitHub publik yang terdokumentasi rapi."
      ]
    },
    {
      num: "03",
      title: "Aksesibilitas dan Fungsionalitas (Live Demo)",
      summary: "Siap Diuji Kapan Saja",
      icon: Globe,
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200/70 dark:border-emerald-900/40",
      points: [
        "Live Deployment aktif pada proyek-proyek publik (Frantinco, Suara Kita, Youth Ranger, AMGALA Foundation).",
        "Penyediaan Akun Demo Uji Coba: Tim penilai / HR dapat langsung menguji fungsionalitas tanpa repot mendaftar akun baru (kredensial tersedia langsung di tiap modal studi kasus).",
        "100% Responsif & Mobile-First: Dioptimalkan untuk ponsel seluler (Android/iOS) dan desktop dengan nilai performa tinggi."
      ]
    },
    {
      num: "04",
      title: "Transparansi Kontribusi Peran & Problem Solving",
      summary: "Spesifik & Terukur",
      icon: UserCheck,
      color: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-50 dark:bg-amber-950/40 border-amber-200/70 dark:border-amber-900/40",
      points: [
        "Transparansi pengerjaan pada tiap proyek: Penjelasan tegas apakah peran sebagai Sole Full-Stack Engineer, Frontend Lead, atau Security Analyst.",
        "Studi kasus berbasis Problem Solving: Narasi komprehensif mengenai tantangan teknis yang dihadapi, alasan pemilihan arsitektur, dan metrik hasil nyata (misal: 99.8% uptime, 0 tag error, nilai Lighthouse 96).",
        "Didukung latar belakang Farmasi Klinis yang menanamkan kedisiplinan verifikasi resep medis (*zero-defect mindset*) dan kepatuhan SOP."
      ]
    }
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#121620] rounded-2xl shadow-2xl border border-slate-200 dark:border-neutral-800 text-left p-6 sm:p-8"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-neutral-800 text-slate-500 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">
            <Award className="w-4 h-4" />
            <span>Kesesuaian Indikator Penilaian Rekrutmen & HR</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Audit Standar Kualitas Portofolio Pengembang Perangkat Lunak
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-neutral-300 leading-relaxed">
            Rangkuman kepatuhan portofolio Azzahra Putri Sabri terhadap 4 pilar evaluasi teknis yang biasa digunakan oleh tim rekrutmen perusahaan teknologi dan klien korporat.
          </p>
        </div>

        {/* 4 Rubric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {criteria.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className={`p-5 rounded-2xl border ${item.bg} flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-slate-400 dark:text-neutral-500">
                      KRITERIA {item.num}
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-white dark:bg-neutral-900 text-slate-800 dark:text-neutral-200 border border-slate-200/80 dark:border-neutral-700 shadow-2xs">
                      {item.summary}
                    </span>
                  </div>

                  <h3 className={`text-base font-bold flex items-center gap-2 mb-3 ${item.color}`}>
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{item.title}</span>
                  </h3>

                  <ul className="space-y-2 text-xs text-slate-700 dark:text-neutral-300 leading-relaxed">
                    {item.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Actions */}
        <div className="pt-5 border-t border-slate-200/80 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-500 dark:text-neutral-400">
            Kandidat: <strong className="text-slate-900 dark:text-white">Azzahra Putri Sabri</strong> · Mahasiswi SE S5 & IT Administrator
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenResume();
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-slate-800 dark:text-neutral-200 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Buka CV Lengkap</span>
            </button>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-rose-600 dark:hover:bg-rose-500 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Cek GitHub Repo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
