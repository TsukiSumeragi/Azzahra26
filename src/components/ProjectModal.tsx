import React, { useEffect, useState } from 'react';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Calendar,
  Tag,
  Layers,
  Check,
  Copy,
  UserCheck,
  Key,
  ShieldAlert,
  Cpu,
  Sparkles
} from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-white dark:bg-[#121620] rounded-2xl shadow-2xl border border-slate-200 dark:border-neutral-800 text-left"
      >
        {/* Sticky Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup Detail Proyek"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/85 dark:bg-neutral-800/85 backdrop-blur-md text-slate-600 dark:text-neutral-300 hover:text-rose-600 dark:hover:text-rose-400 border border-slate-200/80 dark:border-neutral-700 shadow-xs transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image Thumbnail */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-neutral-800 rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-2 text-xs font-semibold text-rose-300 mb-1">
              <span>{project.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{project.period}</span>
            </div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-extrabold text-white">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Metadata & Key Metrics Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-3 rounded-xl bg-slate-50 dark:bg-neutral-900/60 border border-slate-200/80 dark:border-neutral-800 text-xs">
            <div>
              <span className="text-slate-400">Posisi: </span>
              <span className="font-bold text-slate-900 dark:text-white">{project.role}</span>
            </div>
            {project.metrics && (
              <div className="font-semibold text-rose-600 dark:text-rose-400">
                ★ {project.metrics}
              </div>
            )}
          </div>

          {/* HR Rubric 4: Spesifik Kontribusi Peran */}
          <div className="p-4 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/70 dark:border-rose-900/40">
            <h3 className="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 flex items-center gap-1.5 mb-1.5">
              <UserCheck className="w-4 h-4 text-rose-500" />
              <span>Transparansi Kontribusi Peran (Role Contribution)</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-800 dark:text-neutral-200 leading-relaxed font-medium">
              {project.roleContribution}
            </p>
          </div>

          {/* HR Rubric 1: Problem Solving & Solusi Nyata */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-neutral-900/60 border border-slate-200/80 dark:border-neutral-800">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5 mb-2">
                <ShieldAlert className="w-4 h-4 text-amber-500" />
                <span>Masalah Nyata yang Diselesaikan</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-neutral-300 leading-relaxed">
                {project.problemSolved}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-neutral-900/60 border border-slate-200/80 dark:border-neutral-800">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mb-2">
                <Cpu className="w-4 h-4 text-emerald-500" />
                <span>Arsitektur & Pendekatan Teknis</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-neutral-300 leading-relaxed">
                {project.architectureApproach}
              </p>
            </div>
          </div>

          {/* HR Rubric 3: Kemudahan Uji Coba bagi Recruiter (Akun Demo) */}
          {project.demoCredentials && (
            <div className="p-4 rounded-xl bg-slate-900 text-white dark:bg-neutral-900 border border-slate-800 dark:border-neutral-700">
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <Key className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Akses Cepat Penguji / HR (Akun Demo)
                  </span>
                </div>
                <span className="text-[11px] text-slate-400">
                  Tanpa perlu daftar akun baru
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/80 dark:bg-neutral-800/80 border border-slate-700">
                  <span className="text-slate-300 truncate mr-2">Email: {project.demoCredentials.email}</span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(project.demoCredentials!.email, 'email')}
                    className="p-1 rounded text-slate-400 hover:text-white transition-colors"
                    title="Salin Email"
                  >
                    {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/80 dark:bg-neutral-800/80 border border-slate-700">
                  <span className="text-slate-300 truncate mr-2">Pass: {project.demoCredentials.password}</span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(project.demoCredentials!.password, 'pass')}
                    className="p-1 rounded text-slate-400 hover:text-white transition-colors"
                    title="Salin Password"
                  >
                    {copiedField === 'pass' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {project.demoCredentials.notes && (
                <p className="mt-2 text-[11px] text-slate-400 font-sans">
                  💡 {project.demoCredentials.notes}
                </p>
              )}
            </div>
          )}

          {/* Key Features */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-neutral-500 mb-3">
              Fitur & Fungsionalitas Inti
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-neutral-900/50 text-xs text-slate-700 dark:text-neutral-300 border border-slate-200/60 dark:border-neutral-800/60"
                >
                  <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-neutral-500 mb-2">
              Tech Stack & Tools
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 font-medium border border-rose-200/60 dark:border-rose-900/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons (Live Demo & GitHub Repo) */}
          <div className="pt-4 border-t border-slate-200/80 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-slate-800 dark:text-neutral-200 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Repositori & README.md</span>
                </a>
              )}
            </div>

            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold rounded-xl bg-rose-600 hover:bg-rose-700 text-white shadow-xs hover:shadow-rose-500/20 transition-all"
              >
                <span>Buka Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
