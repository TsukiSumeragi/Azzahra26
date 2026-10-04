import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Code, Server, ShieldCheck, Award, ArrowRight, FileText } from 'lucide-react';
import { EXPERIENCES, SKILL_GROUPS, Experience, ExperienceAttachment } from '../data/portfolioData';
import { RevealOnScroll } from './common/RevealOnScroll';
import { AttachmentModal } from './common/AttachmentModal';

interface ExperienceSkillsProps {
  onNavigateToExperiencePage?: () => void;
}

export const ExperienceSkills: React.FC<ExperienceSkillsProps> = ({ onNavigateToExperiencePage }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'it-admin' | 'web-dev' | 'security' | 'leadership' | 'pharmacy'>('all');
  const [expandedId, setExpandedId] = useState<string | null>('arai-rubber');
  const [selectedAttachment, setSelectedAttachment] = useState<{
    attachment: ExperienceAttachment;
    company: string;
  } | null>(null);

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (activeFilter === 'all') return true;
    return exp.badgeType === activeFilter;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="pengalaman" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="up">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div className="max-w-2xl text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400 mb-2">
                02. Rekam Jejak & Kompetensi
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                Pengalaman Kerja, Magang & Klinis
              </h2>
              <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Pengalaman komprehensif mulai dari IT Administrator industri manufaktur, pengembangan aplikasi web lintas domain, pertahanan siber, hingga kedisiplinan verifikasi resep & rekam medis di Farmasi Klinis.
              </p>
            </div>

            {onNavigateToExperiencePage && (
              <button
                type="button"
                onClick={onNavigateToExperiencePage}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-pink-50 dark:bg-pink-950/50 text-pink-700 dark:text-pink-300 border border-pink-200 dark:border-pink-900 hover:bg-pink-100 transition-colors whitespace-nowrap self-start sm:self-auto"
              >
                <span>Buka Halaman Khusus & Unduh File Berkas</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </RevealOnScroll>

        {/* Part 1: Interactive Experience Timeline / Cards */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 text-left">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-pink-500" />
              <span>Riwayat Pengalaman ({filteredExperiences.length} Ditampilkan)</span>
            </h3>

            {/* Filter buttons */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-100 dark:bg-neutral-900 rounded-xl border border-neutral-200/70 dark:border-neutral-800">
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeFilter === 'all'
                    ? 'bg-white dark:bg-neutral-800 text-pink-600 dark:text-pink-300 shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                Semua ({EXPERIENCES.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('it-admin')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeFilter === 'it-admin'
                    ? 'bg-white dark:bg-neutral-800 text-pink-600 dark:text-pink-300 shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                IT Admin
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('web-dev')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeFilter === 'web-dev'
                    ? 'bg-white dark:bg-neutral-800 text-pink-600 dark:text-pink-300 shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                Web Dev
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('security')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeFilter === 'security'
                    ? 'bg-white dark:bg-neutral-800 text-pink-600 dark:text-pink-300 shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                Cyber Sec
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('pharmacy')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeFilter === 'pharmacy'
                    ? 'bg-white dark:bg-neutral-800 text-pink-600 dark:text-pink-300 shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                Farmasi Klinis (3)
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('leadership')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeFilter === 'leadership'
                    ? 'bg-white dark:bg-neutral-800 text-pink-600 dark:text-pink-300 shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                Leadership
              </button>
            </div>
          </div>

          {/* Timeline Cards Container */}
          <div className="space-y-4">
            {filteredExperiences.map((exp: Experience) => {
              const isExpanded = expandedId === exp.id;
              return (
                <div
                  key={exp.id}
                  className={`rounded-2xl transition-all duration-200 border ${
                    isExpanded
                      ? 'bg-white dark:bg-neutral-900 border-pink-300 dark:border-pink-900 shadow-sm'
                      : 'bg-white/80 dark:bg-neutral-900/60 border-neutral-200/80 dark:border-neutral-800 hover:border-pink-200 dark:hover:border-pink-950'
                  }`}
                >
                  {/* Card Header (clickable) */}
                  <div
                    onClick={() => toggleExpand(exp.id)}
                    className="p-5 sm:p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleExpand(exp.id);
                      }
                    }}
                  >
                    <div className="space-y-1">
                      {/* Clean metadata (no static pills) */}
                      <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                        <span className="font-semibold text-pink-600 dark:text-pink-400">
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

                      <h4 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white">
                        {exp.role}{' '}
                        <span className="font-normal text-neutral-500 dark:text-neutral-400">
                          — {exp.company}
                        </span>
                      </h4>

                      {exp.highlight && (
                        <p className="text-xs text-pink-700 dark:text-pink-300 font-medium">
                          ★ {exp.highlight}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs font-medium text-pink-600 dark:text-pink-400 hidden sm:inline">
                        {isExpanded ? 'Tutup Detail' : 'Lihat Detail'}
                      </span>
                      <div className="p-2 rounded-lg bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-300">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Body */}
                  {isExpanded && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                      <ul className="space-y-2 mb-4 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                        {exp.description.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-pink-500 font-bold shrink-0 mt-0.5">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack metadata (clean unboxed text with separators) */}
                      <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
                        <span className="font-semibold text-neutral-500 dark:text-neutral-400">Teknologi & Fokus:</span>
                        {exp.skills.map((s, i) => (
                          <React.Fragment key={s}>
                            <span className="text-neutral-800 dark:text-neutral-200 font-medium">{s}</span>
                            {i < exp.skills.length - 1 && <span className="text-neutral-400">·</span>}
                          </React.Fragment>
                        ))}
                      </div>

                      {/* Attachments quick preview */}
                      {exp.attachments && exp.attachments.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-2">
                            Lampiran Dokumen ({exp.attachments.length}):
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.attachments.map((att) => (
                              <button
                                key={att.name}
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedAttachment({
                                    attachment: att,
                                    company: exp.company,
                                  });
                                }}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-50 dark:bg-pink-950/40 text-pink-700 dark:text-pink-300 border border-pink-200/60 dark:border-pink-900/40 text-xs hover:bg-pink-100 transition-colors"
                              >
                                <FileText className="w-3.5 h-3.5" />
                                <span>{att.name}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Attachment Modal */}
        <AttachmentModal
          attachment={selectedAttachment?.attachment || null}
          companyName={selectedAttachment?.company || ''}
          onClose={() => setSelectedAttachment(null)}
        />

        {/* Part 2: Keahlian Inti (Categorized Skill Grid) */}
        <div>
          <div className="max-w-2xl mb-8 text-left">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Code className="w-5 h-5 text-rose-500" />
              <span>Daftar Keahlian Inti & Domain Teknis</span>
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-neutral-400">
              Penguasaan perkakas pengembangan modern, pengelolaan infrastruktur, dan metodologi kerja profesional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_GROUPS.map((group) => {
              const renderIcon = () => {
                switch (group.iconName) {
                  case 'Code':
                    return <Code className="w-4 h-4 text-pink-500" />;
                  case 'Server':
                    return <Server className="w-4 h-4 text-pink-500" />;
                  case 'ShieldCheck':
                    return <ShieldCheck className="w-4 h-4 text-pink-500" />;
                  default:
                    return <Award className="w-4 h-4 text-pink-500" />;
                }
              };

              return (
                <div
                  key={group.title}
                  className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs hover:border-pink-300 dark:hover:border-pink-900/60 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 rounded-lg bg-pink-50 dark:bg-pink-950/50">
                        {renderIcon()}
                      </div>
                      <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                        {group.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mb-4 leading-normal">
                      {group.description}
                    </p>

                    <div className="space-y-2.5">
                      {group.items.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between text-xs py-1 border-b border-neutral-100 dark:border-neutral-800/60 last:border-0"
                        >
                          <span className="font-medium text-neutral-800 dark:text-neutral-200">
                            {skill.name}
                          </span>
                          <span className="text-[11px] text-pink-600 dark:text-pink-400 font-semibold">
                            {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
