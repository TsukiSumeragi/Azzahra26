import React, { useState } from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  FileText,
  Download,
  Eye,
  ChevronDown,
  ChevronUp,
  Code,
  ShieldCheck,
  Server
} from 'lucide-react';
import { BackNavHeader } from '../common/BackNavHeader';
import { EXPERIENCES, Experience, ExperienceAttachment } from '../../data/portfolioData';
import { AttachmentModal } from '../common/AttachmentModal';

interface ExperiencePageProps {
  onBack: () => void;
}

export const ExperiencePage: React.FC<ExperiencePageProps> = ({ onBack }) => {
  const [filter, setFilter] = useState<'all' | 'it-admin' | 'web-dev' | 'security' | 'leadership'>('all');
  const [selectedAttachment, setSelectedAttachment] = useState<{
    attachment: ExperienceAttachment;
    company: string;
  } | null>(null);

  const filtered = EXPERIENCES.filter((exp) => {
    if (filter === 'all') return true;
    return exp.badgeType === filter;
  });

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <BackNavHeader
        pageTitle="Pengalaman Kerja & Dokumen Resmi"
        categoryLabel="Rekam Jejak Profesional"
        onBack={onBack}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Intro Banner */}
        <div className="rounded-2xl p-6 sm:p-10 bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400 mb-2 block">
            Halaman Fokus Khusus
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Pengalaman Kerja, Dokumentasi & Berkas Pendukung
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
            Tinjauan mendalam atas peran profesional saya di industri manufaktur, pengembangan aplikasi web berskala korporat, kepemimpinan inisiatif digital pemuda, dan pertahanan keamanan siber lengkap dengan foto dokumentasi dan berkas lampiran.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-100 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 max-w-fit">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              filter === 'all'
                ? 'bg-white dark:bg-neutral-800 text-pink-600 dark:text-pink-300 shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            Semua ({EXPERIENCES.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter('it-admin')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              filter === 'it-admin'
                ? 'bg-white dark:bg-neutral-800 text-pink-600 dark:text-pink-300 shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            IT Administration
          </button>
          <button
            type="button"
            onClick={() => setFilter('web-dev')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              filter === 'web-dev'
                ? 'bg-white dark:bg-neutral-800 text-pink-600 dark:text-pink-300 shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            Web Development
          </button>
          <button
            type="button"
            onClick={() => setFilter('security')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              filter === 'security'
                ? 'bg-white dark:bg-neutral-800 text-pink-600 dark:text-pink-300 shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            Cyber Security
          </button>
          <button
            type="button"
            onClick={() => setFilter('leadership')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              filter === 'leadership'
                ? 'bg-white dark:bg-neutral-800 text-pink-600 dark:text-pink-300 shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            Kepemimpinan
          </button>
        </div>

        {/* Experience Cards with Images & Files */}
        <div className="space-y-8">
          {filtered.map((exp: Experience) => (
            <div
              key={exp.id}
              className="rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs p-6 sm:p-8 overflow-hidden text-left"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Visual / Workplace Photo (if available) */}
                {exp.image && (
                  <div className="lg:col-span-4 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 border border-neutral-200/60 dark:border-neutral-700/60 aspect-video lg:aspect-4/3">
                    <img
                      src={exp.image}
                      alt={exp.company}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Details Column */}
                <div className={exp.image ? 'lg:col-span-8' : 'lg:col-span-12'}>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500 mb-2">
                    <span className="font-bold text-pink-600 dark:text-pink-400">
                      {exp.categoryLabel}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-semibold text-pink-600 dark:text-pink-400 mt-0.5">
                    @ {exp.company}
                  </p>

                  {exp.highlight && (
                    <div className="mt-2 text-xs font-semibold text-pink-700 dark:text-pink-300 bg-pink-50 dark:bg-pink-950/40 px-3 py-1 rounded-lg border border-pink-200/60 dark:border-pink-900/40 inline-block">
                      ★ {exp.highlight}
                    </div>
                  )}

                  {/* Bullet points */}
                  <ul className="mt-4 space-y-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-pink-500 font-bold shrink-0 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags */}
                  <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap gap-1.5">
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Document / File Attachments Section */}
                  {exp.attachments && exp.attachments.length > 0 && (
                    <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">
                        Dokumen & Lampiran Resmi ({exp.attachments.length})
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {exp.attachments.map((att) => (
                          <div
                            key={att.name}
                            onClick={() =>
                              setSelectedAttachment({
                                attachment: att,
                                company: exp.company,
                              })
                            }
                            className="group p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200/80 dark:border-neutral-700/80 hover:border-pink-400 dark:hover:border-pink-800 cursor-pointer transition-all flex items-center justify-between"
                          >
                            <div className="flex items-center gap-2.5 truncate mr-2">
                              <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-400 shrink-0">
                                <FileText className="w-4 h-4" />
                              </div>
                              <div className="truncate text-left">
                                <p className="text-xs font-bold text-neutral-800 dark:text-neutral-200 group-hover:text-pink-600 dark:group-hover:text-pink-400 truncate">
                                  {att.name}
                                </p>
                                <p className="text-[10px] text-neutral-400">
                                  {att.size} · {att.date}
                                </p>
                              </div>
                            </div>

                            <span className="text-[11px] font-semibold text-pink-600 dark:text-pink-400 shrink-0 group-hover:underline">
                              Lihat File
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Attachment Modal */}
      <AttachmentModal
        attachment={selectedAttachment?.attachment || null}
        companyName={selectedAttachment?.company || ''}
        onClose={() => setSelectedAttachment(null)}
      />
    </div>
  );
};
