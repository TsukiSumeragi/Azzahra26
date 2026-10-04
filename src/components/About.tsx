import React, { useState } from 'react';
import {
  GraduationCap,
  ShieldCheck,
  Code,
  Globe2,
  Award,
  CheckCircle2,
  Terminal,
  Camera,
  RotateCcw,
  Check
} from 'lucide-react';
import { EDUCATION_LIST, CERTIFICATIONS } from '../data/portfolioData';
import { RevealOnScroll } from './common/RevealOnScroll';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'narrative' | 'education' | 'certs'>('education');

  // Manual custom SMK photo upload & storage
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
        setUploadToast('Foto SMK berhasil diunggah!');
        setTimeout(() => setUploadToast(null), 3000);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    setSmkPhoto(defaultSmkPhoto);
    localStorage.removeItem('zara_smk_custom_photo');
    setUploadToast('Foto SMK kembali ke gambar standar.');
    setTimeout(() => setUploadToast(null), 3000);
  };

  return (
    <section id="tentang" className="py-20 md:py-28 relative bg-white/50 dark:bg-neutral-900/30 border-y border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upload Notification Toast */}
        {uploadToast && (
          <div className="fixed bottom-16 md:bottom-6 right-6 z-50 p-3 rounded-xl bg-neutral-900 text-white border border-pink-500 shadow-xl flex items-center gap-2 animate-in fade-in duration-200">
            <Check className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-medium">{uploadToast}</span>
          </div>
        )}

        <RevealOnScroll direction="up">
          {/* Section Header */}
          <div className="max-w-2xl mb-10 text-left">
            <p className="text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400 mb-2">
              01. Mengenal Profil & Pendidikan
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              Tentang Saya
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Perjalanan eksplorasi teknologi yang memadukan kedisiplinan analitis dari Farmasi Klinis, perancangan web modern, keandalan administrasi sistem IT, hingga pengujian keamanan siber.
            </p>
          </div>
        </RevealOnScroll>

        {/* Tab Navigation Controls */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-100 dark:bg-neutral-900 rounded-xl max-w-fit mb-8 border border-neutral-200/70 dark:border-neutral-800">
          <button
            type="button"
            onClick={() => setActiveTab('education')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'education'
                ? 'bg-white dark:bg-neutral-800 text-pink-600 dark:text-pink-300 shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            Latar Belakang Pendidikan & Foto
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('narrative')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'narrative'
                ? 'bg-white dark:bg-neutral-800 text-pink-600 dark:text-pink-300 shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            Evolusi & Eksplorasi
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('certs')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'certs'
                ? 'bg-white dark:bg-neutral-800 text-pink-600 dark:text-pink-300 shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            Sertifikasi & Bahasa
          </button>
        </div>

        {/* Tab 1: Education (with manual SMK photo upload and almamater cards) */}
        {activeTab === 'education' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
            {/* Card 1: Universitas Insan Pembangunan Indonesia */}
            <div className="rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 p-6 flex flex-col justify-between shadow-xs">
              <div>
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 mb-4">
                  <img
                    src="/src/assets/images/coursework_learning_hub_1791125462871.jpg"
                    alt="Universitas Insan Pembangunan Indonesia"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
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
                  Fokus perkuliahan pada Rekayasa Perangkat Lunak, Struktur Data & Algoritma, Basis Data Relasional, Kecerdasan Buatan, Verifikasi & Validasi Perangkat Lunak (VVPL), Arsitektur Enterprise, dan Praktikum Coding.
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-neutral-100 dark:border-neutral-800 text-[11px] text-neutral-400 flex items-center justify-between">
                <span>Lokasi: Tangerang, Banten</span>
                <span className="text-pink-600 dark:text-pink-400 font-semibold">Kelas Sore / Malam</span>
              </div>
            </div>

            {/* Card 2: SMKS Yarsi Medika with interactive manual photo upload */}
            <div className="rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 p-6 flex flex-col justify-between shadow-xs">
              <div>
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 mb-4 group">
                  <img
                    src={smkPhoto}
                    alt="SMKS Yarsi Medika"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-neutral-900/80 backdrop-blur-xs text-[11px] font-bold text-pink-300">
                    Fondasi Kejuruan (2021 - 2024)
                  </div>

                  {/* Manual Photo Uploader Floating Controls */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-neutral-900/85 backdrop-blur-md p-1.5 rounded-xl shadow-lg">
                    <label
                      htmlFor="upload-smk-photo-main"
                      className="cursor-pointer inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-pink-600 hover:bg-pink-500 text-white text-[11px] font-semibold transition-colors shadow-xs"
                      title="Unggah Foto SMK Manual dari Perangkat Anda"
                    >
                      <Camera className="w-3.5 h-3.5" />
                      <span>Ganti / Masukkan Foto Manual</span>
                    </label>
                    <input
                      id="upload-smk-photo-main"
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
                        <RotateCcw className="w-3 h-3" />
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
                  Pendidikan di Farmasi Klinis membentuk fondasi etos kerja yang teliti, presisi tinggi dalam penanganan data, kepatuhan SOP ketat, serta akurasi tanpa kompromi yang kini memperkaya ketajaman analisis dalam debugging dan administrasi IT.
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-neutral-100 dark:border-neutral-800 text-[11px] text-neutral-400 flex items-center justify-between">
                <span>Lokasi: Tangerang, Banten</span>
                <span className="text-pink-600 dark:text-pink-400 font-medium">Foto Tersimpan Otomatis</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Narrative & Exploration */}
        {activeTab === 'narrative' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
              <p>
                Saya adalah mahasiswi semester 5 program studi <strong className="text-neutral-900 dark:text-white font-semibold">Software Engineering</strong> di Universitas Insan Pembangunan Indonesia. Berawal dari latar belakang pendidikan Farmasi Klinis yang menanamkan ketelitian mendalam terhadap prosedur, dosis, dan keakuratan data tanpa kompromi, saya mentransformasikan dedikasi tersebut ke dunia rekayasa perangkat lunak.
              </p>
              <p>
                Di bidang <strong className="text-pink-600 dark:text-pink-400 font-semibold">Web Development</strong>, saya telah berkontribusi aktif dalam membangun dan merawat aplikasi berbasis <span className="text-neutral-900 dark:text-white font-medium">React, Laravel (PHP), HTML, CSS, JavaScript, dan Bootstrap</span>. Mulai dari mengelola 20+ website korporat di PT Frantinco Indah Makmur hingga memimpin sistem digital organisasi di Suara Kita.
              </p>
              <p>
                Eksplorasi saya meluas ke bidang <strong className="text-pink-600 dark:text-pink-400 font-semibold">Cyber Security</strong> melalui program intensif Wo-Men In Tech Security. Saya mendalami operasi Security Operations Center (SOC), Cyber Threat Intelligence (CTI), pengujian penetrasi aplikasi web dengan <span className="text-neutral-900 dark:text-white font-medium">Burp Suite</span>, serta pengerasan keamanan jaringan menggunakan <span className="text-neutral-900 dark:text-white font-medium">Cisco Packet Tracer</span>.
              </p>
            </div>

            {/* Right Cards: Pillars of Value */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-3.5">
              <div className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-pink-100 dark:border-neutral-800 shadow-xs hover:border-pink-300 dark:hover:border-pink-900/60 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-pink-50 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400">
                    <Code className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900 dark:text-white">Clean & Scalable Code</h3>
                    <p className="text-xs text-neutral-500">React · Laravel · PHP · REST API</p>
                  </div>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-normal">
                  Merancang komponen frontend yang modular dan integrasi backend yang terstruktur dengan efisiensi tinggi.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-pink-100 dark:border-neutral-800 shadow-xs hover:border-pink-300 dark:hover:border-pink-900/60 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-pink-50 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900 dark:text-white">Infrastruktur & Server</h3>
                    <p className="text-xs text-neutral-500">Centralized Server · DNS · GTM</p>
                  </div>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-normal">
                  Pemeliharaan puluhan domain, konfigurasi routing domain, optimasi Google Ads conversion tracking.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-pink-100 dark:border-neutral-800 shadow-xs hover:border-pink-300 dark:hover:border-pink-900/60 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-pink-50 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900 dark:text-white">Security-First Mindset</h3>
                    <p className="text-xs text-neutral-500">SOC Ops · Burp Suite · Packet Tracer</p>
                  </div>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-normal">
                  Identifikasi kerentanan web sejak tahap perancangan serta pemahaman alur deteksi ancaman cyber.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Certifications & Languages */}
        {activeTab === 'certs' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
            {/* Certifications column */}
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-2 flex items-center gap-2">
                <Award className="w-4 h-4 text-pink-500" />
                <span>Sertifikasi & Pelatihan Resmi</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.name}
                    className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 hover:border-pink-300 dark:hover:border-pink-800 transition-colors"
                  >
                    <div className="flex items-center justify-between text-[11px] text-neutral-400 mb-1.5">
                      <span>{cert.issuer}</span>
                      <span className="font-bold text-pink-600 dark:text-pink-400">{cert.year}</span>
                    </div>
                    <h4 className="text-xs font-bold text-neutral-900 dark:text-white mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
                      {cert.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages column */}
            <div className="lg:col-span-4 p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800">
              <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-pink-500" />
                <span>Kemahiran Bahasa</span>
              </h3>
              <div className="space-y-4 text-xs">
                <div className="pb-3 border-b border-neutral-100 dark:border-neutral-800">
                  <div className="flex justify-between font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
                    <span>Bahasa Indonesia</span>
                    <span className="text-pink-600 dark:text-pink-400">Native / Bilingual</span>
                  </div>
                  <div className="w-full bg-neutral-100 dark:bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-pink-500 h-full w-full rounded-full" />
                  </div>
                </div>

                <div className="pb-3 border-b border-neutral-100 dark:border-neutral-800">
                  <div className="flex justify-between font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
                    <span>Bahasa Jepang</span>
                    <span className="text-pink-600 dark:text-pink-400">Elementary (JLPT N5)</span>
                  </div>
                  <div className="w-full bg-neutral-100 dark:bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-pink-500 h-full w-2/5 rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
                    <span>Bahasa Inggris</span>
                    <span className="text-pink-600 dark:text-pink-400">Elementary</span>
                  </div>
                  <div className="w-full bg-neutral-100 dark:bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-pink-500 h-full w-1/2 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
