import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  Award,
  Globe2,
  Upload,
  Check,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  FileCheck2,
  BookOpen,
  Camera
} from 'lucide-react';
import { BackNavHeader } from '../common/BackNavHeader';
import { EDUCATION_LIST, CERTIFICATIONS } from '../../data/portfolioData';

interface AboutPageProps {
  onBack: () => void;
  onNavigateToSchedule?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBack, onNavigateToSchedule }) => {
  // Allow user to upload custom SMK photo manually and persist to localStorage
  const defaultSmkPhoto = '/src/assets/images/smk_yarsi_medika_1791125446903.jpg';
  const [smkPhoto, setSmkPhoto] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('zara_smk_custom_photo');
      if (saved) return saved;
    }
    return defaultSmkPhoto;
  });

  const [uploadToast, setUploadToast] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setSmkPhoto(result);
        localStorage.setItem('zara_smk_custom_photo', result);
        setUploadToast('Foto SMK berhasil diunggah dan disimpan!');
        setTimeout(() => setUploadToast(null), 3000);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    setSmkPhoto(defaultSmkPhoto);
    localStorage.removeItem('zara_smk_custom_photo');
    setUploadToast('Foto SMK dikembalikan ke gambar standar.');
    setTimeout(() => setUploadToast(null), 3000);
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      {/* Dedicated Header with keyboard shortcut (Alt + ArrowLeft / Ctrl + Z) */}
      <BackNavHeader
        pageTitle="Tentang Saya & Riwayat Pendidikan"
        categoryLabel="Profil Mendalam"
        onBack={onBack}
      />

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Upload Notification Toast */}
        {uploadToast && (
          <div className="fixed bottom-6 right-6 z-50 p-4 rounded-xl bg-neutral-900 text-white border border-pink-500 shadow-xl flex items-center gap-3 animate-in fade-in duration-200">
            <Check className="w-5 h-5 text-emerald-400" />
            <span className="text-xs font-medium">{uploadToast}</span>
          </div>
        )}

        {/* Hero Banner for About Page */}
        <div className="rounded-2xl p-6 sm:p-10 bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400 mb-2 block">
            Halaman Fokus Khusus
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Evolusi Akademik, Nilai & Refleksi Diri
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
            Perjalanan saya menggabungkan disiplin ketelitian dari latar belakang Farmasi Klinis menuju rekayasa perangkat lunak modern di Universitas Insan Pembangunan Indonesia serta pengujian pertahanan keamanan siber.
          </p>

          {onNavigateToSchedule && (
            <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800">
              <button
                type="button"
                onClick={onNavigateToSchedule}
                className="text-xs font-semibold text-pink-600 dark:text-pink-400 hover:underline flex items-center gap-1.5"
              >
                <span>Lihat juga Jadwal Kuliah Semester 5 & Jam Kerja Aktif →</span>
              </button>
            </div>
          )}
        </div>

        {/* Section 1: Riwayat Pendidikan Lengkap dengan Foto SMK & Unggah Manual */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-pink-500" />
                <span>Riwayat Pendidikan & Almamater</span>
              </h2>
              <p className="text-xs text-neutral-500">
                Pendidikan formal dari tingkat kejuruan hingga sarjana teknologi software engineering
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: Universitas Insan Pembangunan Indonesia */}
            <div className="rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 p-6 flex flex-col justify-between shadow-xs">
              <div>
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 mb-4">
                  <img
                    src="/src/assets/images/coursework_learning_hub_1791125462871.jpg"
                    alt="Universitas Insan Pembangunan Indonesia"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-neutral-900/80 backdrop-blur-xs text-[11px] font-bold text-pink-300">
                    Pendidikan Tinggi (Semester 5)
                  </div>
                </div>

                <div className="text-xs text-neutral-400 mb-1">
                  September 2024 - Agustus 2028 (Aktif)
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                  Universitas Insan Pembangunan Indonesia
                </h3>
                <p className="text-xs font-semibold text-pink-600 dark:text-pink-400 mb-3">
                  Bachelor of Technology - BTech, Software Engineering
                </p>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Fokus perkuliahan pada Struktur Data & Algoritma, Rekayasa Perangkat Lunak, Basis Data, Kecerdasan Buatan, Verifikasi & Validasi Perangkat Lunak (VVPL), Arsitektur Enterprise, dan Praktikum Coding Laboratorium.
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-neutral-100 dark:border-neutral-800 text-[11px] text-neutral-400">
                Lokasi: Kota Tangerang, Banten, Indonesia
              </div>
            </div>

            {/* Card 2: SMKS Yarsi Medika with interactive photo slot */}
            <div className="rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 p-6 flex flex-col justify-between shadow-xs">
              <div>
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 mb-4 group">
                  <img
                    src={smkPhoto}
                    alt="SMKS Yarsi Medika"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-neutral-900/80 backdrop-blur-xs text-[11px] font-bold text-pink-300">
                    Fondasi Kejuruan (2021 - 2024)
                  </div>

                  {/* Manual Photo Uploader Floating Controls */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-neutral-900/80 backdrop-blur-md p-1 rounded-xl">
                    <label
                      htmlFor="upload-smk-photo"
                      className="cursor-pointer inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-pink-600 hover:bg-pink-500 text-white text-[11px] font-semibold transition-colors"
                      title="Unggah Foto SMK Manual dari Perangkat Anda"
                    >
                      <Camera className="w-3.5 h-3.5" />
                      <span>Ganti / Masukkan Foto Manual</span>
                    </label>
                    <input
                      id="upload-smk-photo"
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />

                    {smkPhoto !== defaultSmkPhoto && (
                      <button
                        type="button"
                        onClick={handleResetPhoto}
                        title="Kembalikan Foto Default"
                        className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="text-xs text-neutral-400 mb-1">
                  2021 - 2024 (Lulus)
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                  SMKS Yarsi Medika
                </h3>
                <p className="text-xs font-semibold text-pink-600 dark:text-pink-400 mb-3">
                  Farmasi Klinis (Clinical Pharmacy)
                </p>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Pendidikan di bidang Farmasi Klinis telah membentuk kedisiplinan tingkat tinggi, kepatuhan protokol dan SOP ketat, serta akurasi matematis tanpa toleransi kesalahan data—kualitas esensial yang kini menjadi kekuatan unik dalam pengujian kode, debugging, dan manajemen infrastruktur IT.
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-neutral-100 dark:border-neutral-800 text-[11px] text-neutral-400 flex items-center justify-between">
                <span>Lokasi: Tangerang, Banten</span>
                <span className="text-pink-600 dark:text-pink-400 font-medium">Slot Foto Manual Tersedia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Sertifikasi & Verifikasi */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <Award className="w-6 h-6 text-pink-500" />
              <span>Sertifikasi Profesional & Kompetensi</span>
            </h2>
            <p className="text-xs text-neutral-500">
              Pengakuan resmi dari pelatihan industri dan uji kemahiran
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.name}
                className="p-5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-2xs hover:border-pink-300 dark:hover:border-pink-900 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-neutral-400 mb-2">
                    <span className="font-semibold text-pink-600 dark:text-pink-400">{cert.badge}</span>
                    <span className="font-mono">{cert.year}</span>
                  </div>
                  <h4 className="text-sm font-bold text-neutral-900 dark:text-white mb-1.5 leading-snug">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-3">
                    {cert.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 text-[11px] text-neutral-400 flex items-center gap-1">
                  <FileCheck2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Penyelenggara: {cert.issuer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Kemampuan Bahasa & Budaya */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs">
          <div className="flex items-center gap-2 mb-4">
            <Globe2 className="w-5 h-5 text-pink-500" />
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
              Kemampuan Bahasa & Komunikasi Internasional
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/40 border border-neutral-200/60 dark:border-neutral-700/60">
              <span className="font-bold text-neutral-900 dark:text-white text-sm block mb-1">
                Bahasa Indonesia
              </span>
              <span className="text-pink-600 dark:text-pink-400 font-semibold block mb-2">
                Native / Bilingual Proficiency
              </span>
              <p className="text-neutral-500 leading-relaxed">
                Bahasa ibu untuk komunikasi profesional, penulisan dokumentasi teknis, dan kepemimpinan tim organisasi.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/40 border border-neutral-200/60 dark:border-neutral-700/60">
              <span className="font-bold text-neutral-900 dark:text-white text-sm block mb-1">
                Bahasa Jepang
              </span>
              <span className="text-pink-600 dark:text-pink-400 font-semibold block mb-2">
                Elementary (Lulus Ujian Resmi JLPT N5)
              </span>
              <p className="text-neutral-500 leading-relaxed">
                Pemahaman kosakata dasar, tata bahasa percakapan harian, serta pembacaan karakter Hiragana, Katakana, dan Kanji dasar.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/40 border border-neutral-200/60 dark:border-neutral-700/60">
              <span className="font-bold text-neutral-900 dark:text-white text-sm block mb-1">
                Bahasa Inggris
              </span>
              <span className="text-pink-600 dark:text-pink-400 font-semibold block mb-2">
                Elementary Working Proficiency
              </span>
              <p className="text-neutral-500 leading-relaxed">
                Kemampuan membaca dokumentasi software engineering, riset teknis, dan komunikasi tertulis dasar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
