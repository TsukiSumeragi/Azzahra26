import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Linkedin, Github, Check, Copy, MessageSquare, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { RevealOnScroll } from './common/RevealOnScroll';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Peluang Kerja / Magang',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate interactive submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: 'Peluang Kerja / Magang',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="kontak" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Info & Social Channels */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400 mb-2">
                  04. Terhubung Langsung
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                  Hubungi Saya
                </h2>
                <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Tertarik mendiskusikan peluang kerja, magang Web Developer / IT Administrator, atau kolaborasi proyek digital? Saya siap merespons dengan cepat.
                </p>
              </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              {/* Email */}
              <div className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 flex items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-3 truncate">
                  <div className="p-2.5 rounded-lg bg-pink-50 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <p className="text-[11px] text-neutral-400 font-medium">Email Pribadi</p>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white hover:text-pink-600 dark:hover:text-pink-400 truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="p-2 rounded-lg text-neutral-400 hover:text-pink-600 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors shrink-0"
                  aria-label="Salin alamat email"
                  title="Salin email"
                >
                  {copiedType === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone / WhatsApp */}
              <div className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 flex items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-3 truncate">
                  <div className="p-2.5 rounded-lg bg-pink-50 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <p className="text-[11px] text-neutral-400 font-medium">WhatsApp & Mobile</p>
                    <a
                      href={PERSONAL_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white hover:text-pink-600 dark:hover:text-pink-400 truncate block"
                    >
                      {PERSONAL_INFO.phone} (+62)
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    type="button"
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    className="p-2 rounded-lg text-neutral-400 hover:text-pink-600 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                    aria-label="Salin nomor telepon"
                    title="Salin nomor"
                  >
                    {copiedType === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors"
                    aria-label="Chat WhatsApp"
                    title="Kirim pesan WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 flex items-center gap-3 shadow-xs">
                <div className="p-2.5 rounded-lg bg-pink-50 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-neutral-400 font-medium">Domisili</p>
                  <p className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white">
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social media direct icons */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">
                Profil Profesional
              </p>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-pink-300 dark:hover:border-pink-900 text-neutral-800 dark:text-neutral-200 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-pink-600" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-pink-300 dark:hover:border-pink-900 text-neutral-800 dark:text-neutral-200 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>

                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-neutral-900 rounded-2xl p-6 sm:p-8 border border-neutral-200/80 dark:border-neutral-800 shadow-md shadow-pink-500/5">
            {isSubmitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  Pesan Berhasil Terkirim!
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Terima kasih sudah menghubungi, <span className="font-semibold">{formData.name}</span>. Saya telah menerima pesan Anda dan akan merespons melalui email <span className="font-semibold text-pink-600 dark:text-pink-400">{formData.email}</span> sesegera mungkin.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2 text-xs font-semibold text-pink-700 dark:text-pink-300 bg-pink-50 dark:bg-pink-950/40 rounded-xl hover:bg-pink-100 transition-colors"
                  >
                    Kirim Pesan Lainnya
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  Kirim Pesan Langsung
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nama */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1"
                    >
                      Nama Lengkap <span className="text-pink-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. John Doe / Nama Perekrut"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-hidden focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1"
                    >
                      Alamat Email <span className="text-pink-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-hidden focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                    />
                  </div>
                </div>

                {/* Subjek / Topik */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1"
                  >
                    Keperluan / Kategori
                  </label>
                  <select
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:outline-hidden focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                  >
                    <option value="Peluang Kerja / Magang">Peluang Kerja / Magang (Web Dev / IT Admin)</option>
                    <option value="Kolaborasi Proyek Web">Kolaborasi Proyek Web (React / Laravel)</option>
                    <option value="Konsultasi IT & Server">Manajemen Server & Infrastruktur IT</option>
                    <option value="Lainnya">Lainnya / Diskusi Terbuka</option>
                  </select>
                </div>

                {/* Pesan */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1"
                  >
                    Pesan Anda <span className="text-pink-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Tuliskan pesan, rincian proyek, atau tawaran kesempatan..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-hidden focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-xs sm:text-sm font-semibold rounded-xl text-white bg-pink-600 hover:bg-pink-700 disabled:opacity-70 transition-all duration-200 shadow-sm focus:outline-hidden focus-visible:ring-2 focus-visible:ring-pink-500"
                  >
                    {isSubmitting ? (
                      <span>Mengirimkan Pesan...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Kirim Pesan Sekarang</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-neutral-400 text-center">
                  Atau kontak cepat melalui WhatsApp di{' '}
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 dark:text-pink-400 underline font-medium"
                  >
                    081295242731
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
