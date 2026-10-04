import React, { useState } from 'react';
import { ArrowUpRight, FolderGit2, Layers, BookOpen, Sparkles, Code2, Award, LayoutGrid, SlidersHorizontal } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { HRAssessmentModal } from './HRAssessmentModal';
import { ProjectCarousel } from './common/ProjectCarousel';
import { InfiniteMarquee } from './common/InfiniteMarquee';
import { RevealOnScroll } from './common/RevealOnScroll';
import { CourseworkHub } from './coursework/CourseworkHub';

interface ProjectsProps {
  onOpenResume?: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenResume = () => {} }) => {
  const [activeTab, setActiveTab] = useState<'industry' | 'coursework'>('industry');
  const [displayMode, setDisplayMode] = useState<'carousel' | 'grid'>('carousel');
  const [filter, setFilter] = useState<'all' | 'web' | 'it-system' | 'security'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isHRAssessmentOpen, setIsHRAssessmentOpen] = useState(false);

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === 'all') return true;
    return proj.category === filter;
  });

  return (
    <section id="proyek" className="py-20 md:py-28 relative bg-white/50 dark:bg-neutral-900/30 border-y border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="up">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 text-left">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <p className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                  03. Portofolio Karya & Kurikulum
                </p>
                <span className="text-neutral-300 dark:text-neutral-700">·</span>
                <button
                  type="button"
                  onClick={() => setIsHRAssessmentOpen(true)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-rose-600 dark:text-rose-400 hover:underline"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Kesesuaian Standar Penilaian HR (4 Kriteria)</span>
                </button>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Galeri Proyek & Dokumentasi Belajar
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-neutral-400 leading-relaxed">
                Kumpulan karya aplikasi web, sistem infrastruktur server industri, serta dokumentasi praktikum laboratorium untuk 8 mata kuliah semester 5.
              </p>
            </div>

            {/* Segmented Switcher: Proyek Utama vs Dokumentasi Matkul S5 */}
            <div className="flex items-center p-1 bg-neutral-200/70 dark:bg-neutral-800/80 rounded-xl border border-neutral-300/60 dark:border-neutral-700/60 self-start md:self-auto">
              <button
                type="button"
                onClick={() => setActiveTab('industry')}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg transition-all ${
                  activeTab === 'industry'
                    ? 'bg-white dark:bg-neutral-900 text-pink-600 dark:text-pink-400 shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Proyek Utama ({PROJECTS.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('coursework')}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg transition-all ${
                  activeTab === 'coursework'
                    ? 'bg-white dark:bg-neutral-900 text-pink-600 dark:text-pink-400 shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-pink-500" />
                <span>Dokumentasi 8 Matkul S5</span>
              </button>
            </div>
          </div>
        </RevealOnScroll>

        {/* Tab 1: Proyek Utama (Industry & Organization Projects) */}
        {activeTab === 'industry' && (
          <div className="space-y-8">
            {/* Toolbar: Category Filters + View Mode Switcher */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              {/* Category Filter buttons */}
              <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-neutral-900 rounded-xl border border-slate-200/80 dark:border-neutral-800 max-w-fit">
                <button
                  type="button"
                  onClick={() => setFilter('all')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    filter === 'all'
                      ? 'bg-white dark:bg-neutral-800 text-rose-600 dark:text-rose-400 shadow-xs'
                      : 'text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Semua ({PROJECTS.length})
                </button>
                <button
                  type="button"
                  onClick={() => setFilter('web')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    filter === 'web'
                      ? 'bg-white dark:bg-neutral-800 text-rose-600 dark:text-rose-400 shadow-xs'
                      : 'text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Web Apps
                </button>
                <button
                  type="button"
                  onClick={() => setFilter('it-system')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    filter === 'it-system'
                      ? 'bg-white dark:bg-neutral-800 text-rose-600 dark:text-rose-400 shadow-xs'
                      : 'text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  IT & Server
                </button>
                <button
                  type="button"
                  onClick={() => setFilter('security')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    filter === 'security'
                      ? 'bg-white dark:bg-neutral-800 text-rose-600 dark:text-rose-400 shadow-xs'
                      : 'text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Cyber Sec
                </button>
              </div>

              {/* View Switcher: Carousel vs Grid */}
              <div className="flex items-center p-1 bg-slate-100 dark:bg-neutral-900 rounded-xl border border-slate-200/80 dark:border-neutral-800 self-start sm:self-auto text-xs">
                <button
                  type="button"
                  onClick={() => setDisplayMode('carousel')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all ${
                    displayMode === 'carousel'
                      ? 'bg-white dark:bg-neutral-800 text-rose-600 dark:text-rose-400 shadow-xs'
                      : 'text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                  title="Tampilan Carousel Interaktif"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5 text-rose-500" />
                  <span>Mode Carousel</span>
                </button>

                <button
                  type="button"
                  onClick={() => setDisplayMode('grid')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all ${
                    displayMode === 'grid'
                      ? 'bg-white dark:bg-neutral-800 text-rose-600 dark:text-rose-400 shadow-xs'
                      : 'text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                  title="Tampilan Grid Semua Proyek"
                >
                  <LayoutGrid className="w-3.5 h-3.5 text-rose-500" />
                  <span>Mode Grid</span>
                </button>
              </div>
            </div>

            {/* Display Mode 1: Interactive Animated Carousel */}
            {displayMode === 'carousel' ? (
              <div className="py-2 animate-in fade-in duration-300">
                <ProjectCarousel
                  projects={filteredProjects}
                  onSelectProject={setSelectedProject}
                />
              </div>
            ) : (
              /* Display Mode 2: Project Cards Grid */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left animate-in fade-in duration-300">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 hover:border-pink-300 dark:hover:border-pink-900/80 shadow-xs hover:shadow-lg hover:shadow-pink-500/5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    {/* Thumbnail Frame */}
                    <div className="relative aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                      <img
                        src={project.image}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                      {/* Corner indicator */}
                      <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-neutral-900/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className="w-4 h-4 text-pink-400" />
                      </div>

                      <div className="absolute bottom-2.5 left-3 right-3 text-xs text-pink-200 font-medium truncate">
                        {project.categoryLabel} · {project.period}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5">
                      <h3 className="text-base font-bold text-neutral-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors line-clamp-1 mb-2">
                        {project.title}
                      </h3>

                      <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-3 leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Badges Teknologi */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-pink-50 dark:bg-pink-950/40 text-pink-700 dark:text-pink-300 border border-pink-200/50 dark:border-pink-900/30"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="text-[11px] text-neutral-400 self-center">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-5 pb-5 pt-1 flex items-center justify-between text-xs border-t border-neutral-100 dark:border-neutral-800/80">
                    <span className="text-neutral-400 truncate max-w-[170px]">
                      {project.role}
                    </span>
                    <span className="font-semibold text-pink-600 dark:text-pink-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      <span>Studi Kasus</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
            )}
          </div>
        )}

        {/* Tab 2: Dokumentasi Belajar Tiap Matkul Semester 5 (Integrated Coursework Hub) */}
        {activeTab === 'coursework' && (
          <div className="pt-2 animate-in fade-in duration-200">
            <CourseworkHub />
          </div>
        )}
      </div>

      {/* Project Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Recruiter / HR Assessment Standards Modal */}
      <HRAssessmentModal
        isOpen={isHRAssessmentOpen}
        onClose={() => setIsHRAssessmentOpen(false)}
        onOpenResume={onOpenResume}
      />
    </section>
  );
};
