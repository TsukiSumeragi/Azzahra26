import React, { useState } from 'react';
import {
  BookOpen,
  Code2,
  Play,
  Github,
  CheckCircle2,
  Layers,
  Sparkles,
  ExternalLink,
  Laptop,
  Terminal,
  Bug,
  Cpu,
  FileCheck,
  ShieldAlert,
  Kanban,
  Check
} from 'lucide-react';
import { COURSEWORK_DOCUMENTATIONS, CourseDocumentation } from '../../data/portfolioData';

export const CourseworkHub: React.FC = () => {
  const [selectedCourseId, setSelectedCourseId] = useState<string>('kecerdasan-buatan');
  const [activeDemoRunning, setActiveDemoRunning] = useState<boolean>(false);
  const [demoResult, setDemoResult] = useState<string | null>(null);

  // AI interactive simulator state
  const [symptomA, setSymptomA] = useState(true);
  const [symptomB, setSymptomB] = useState(false);
  const [symptomC, setSymptomC] = useState(true);

  // Kanban interactive tasks
  const [kanbanTasks, setKanbanTasks] = useState([
    { id: 1, title: 'Analisis Kebutuhan Sistem Restoran', status: 'done' },
    { id: 2, title: 'Perancangan Skema Database PostgreSQL', status: 'progress' },
    { id: 3, title: 'Penyusunan User Story & Sprint Backlog', status: 'todo' },
  ]);

  const selectedCourse =
    COURSEWORK_DOCUMENTATIONS.find((c) => c.id === selectedCourseId) ||
    COURSEWORK_DOCUMENTATIONS[0];

  const handleRunDemo = () => {
    setActiveDemoRunning(true);
    setDemoResult(null);

    setTimeout(() => {
      setActiveDemoRunning(false);
      if (selectedCourse.demoType === 'ai-classifier') {
        setDemoResult('Prediksi Model: Kategori Keluhan Ringan (Tingkat Keyakinan 94.2%) — Rekomendasi Terapi Gejala Dini.');
      } else if (selectedCourse.demoType === 'unit-test-runner') {
        setDemoResult('Testing Selesai: 14 Tests Passed · 0 Failed · Code Coverage: 96.4% · Eksekusi: 218ms');
      } else if (selectedCourse.demoType === 'enterprise-arch') {
        setDemoResult('Status Topologi Enterprise: Sinkronisasi Server Manufaktur Arai Rubber Seal ke AWS Private Cloud Berhasil Terverifikasi.');
      } else if (selectedCourse.demoType === 'qa-tracker') {
        setDemoResult('Audit Mutu ISO/IEC 25010: Skoring Performa 98/100 · Cyclomatic Complexity Rata-rata 2.4 (Sangat Sehat).');
      } else if (selectedCourse.demoType === 'code-ethics') {
        setDemoResult('Evaluasi Lisensi: Kompatibilitas MIT & Apache 2.0 Valid. Tidak Ditemukan Pelanggaran Hak Cipta Komersial.');
      } else {
        setDemoResult('Simulasi Berhasil Dijalankan! Sistem Bereaksi Normal terhadap Input Uji.');
      }
    }, 800);
  };

  const handleMoveKanban = (id: number) => {
    setKanbanTasks((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          const nextStatus = t.status === 'todo' ? 'progress' : t.status === 'progress' ? 'done' : 'todo';
          return { ...t, status: nextStatus };
        }
        return t;
      })
    );
  };

  return (
    <div className="space-y-8">
      {/* Banner Intro */}
      <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 text-white p-6 sm:p-8">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-pink-500/20 text-pink-300 border border-pink-500/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dokumentasi Belajar & Kurikulum Terbuka</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Proyek Belajar Tiap Mata Kuliah Semester 5
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
            Kompilasi proyek laboratorium, eksplorasi teori, implementasi kode, dan demo interaktif dari 8 mata kuliah Teknik Informatika / Software Engineering di Universitas Insan Pembangunan Indonesia.
          </p>
        </div>

        {/* Backdrop Glow */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-pink-600/20 via-pink-900/10 to-transparent pointer-events-none" />
      </div>

      {/* Main Course Selector & Detail View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Course List Tabs */}
        <div className="lg:col-span-4 space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 px-1 mb-2">
            Pilih Mata Kuliah ({COURSEWORK_DOCUMENTATIONS.length})
          </h4>

          <div className="space-y-1.5 max-h-[600px] overflow-y-auto pr-1">
            {COURSEWORK_DOCUMENTATIONS.map((course) => {
              const isSelected = course.id === selectedCourseId;
              return (
                <button
                  key={course.id}
                  type="button"
                  onClick={() => {
                    setSelectedCourseId(course.id);
                    setDemoResult(null);
                  }}
                  className={`w-full text-left p-3.5 rounded-xl transition-all border ${
                    isSelected
                      ? 'bg-white dark:bg-neutral-800 border-pink-500 text-neutral-900 dark:text-white shadow-xs'
                      : 'bg-white/60 dark:bg-neutral-900/60 border-neutral-200/80 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-pink-300 dark:hover:border-pink-900/60'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="font-mono text-pink-600 dark:text-pink-400 font-bold">
                      {course.code}
                    </span>
                    <span className="text-neutral-400">
                      {course.day} · {course.time}
                    </span>
                  </div>
                  <h5 className="text-xs font-bold leading-tight line-clamp-1">
                    {course.courseName}
                  </h5>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1 truncate">
                    Dosen: {course.lecturer} ({course.room})
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Selected Course Deep Dive & Interactive Demo */}
        <div className="lg:col-span-8 bg-white dark:bg-neutral-900 rounded-2xl p-6 sm:p-8 border border-neutral-200/80 dark:border-neutral-800 shadow-sm space-y-6 text-left">
          {/* Header */}
          <div className="border-b border-neutral-200/80 dark:border-neutral-800 pb-5">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs mb-2">
              <span className="px-2.5 py-0.5 rounded-md font-bold bg-pink-50 dark:bg-pink-950/40 text-pink-700 dark:text-pink-300 border border-pink-200/60 dark:border-pink-900/50">
                {selectedCourse.code} · {selectedCourse.semester}
              </span>
              <span className="text-neutral-500">
                Jadwal: {selectedCourse.day}, {selectedCourse.time} ({selectedCourse.room})
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 dark:text-white">
              {selectedCourse.courseName}
            </h3>
            <p className="text-xs text-neutral-500 mt-1">
              Dosen Pengampu: <strong className="text-neutral-800 dark:text-neutral-200">{selectedCourse.lecturer}</strong>
            </p>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 mt-3 leading-relaxed">
              {selectedCourse.description}
            </p>
          </div>

          {/* Topics Covered */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
              Materi & Pokok Bahasan Utama
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {selectedCourse.topicsCovered.map((topic, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 p-2 rounded-lg bg-neutral-50 dark:bg-neutral-800/40 text-neutral-700 dark:text-neutral-300"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-500 shrink-0 mt-0.5" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Box */}
          <div className="p-4 rounded-xl bg-pink-50/60 dark:bg-pink-950/20 border border-pink-200/70 dark:border-pink-900/40">
            <span className="text-[11px] font-bold text-pink-600 dark:text-pink-400 uppercase tracking-wider block mb-1">
              Proyek Praktikum Mahasiswi:
            </span>
            <h4 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white mb-1">
              {selectedCourse.projectTitle}
            </h4>
            <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">
              {selectedCourse.projectDescription}
            </p>

            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-semibold text-neutral-400 mr-1">Stack:</span>
              {selectedCourse.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Live Demo Sandbox */}
          <div className="p-5 rounded-xl bg-neutral-900 text-white border border-neutral-800">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-pink-400" />
                <span className="text-xs font-bold font-mono text-pink-300">
                  {selectedCourse.demoPreviewTitle}
                </span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Demo Sandbox
              </span>
            </div>

            {/* Sandbox Content Depending on Demo Type */}
            <div className="space-y-4">
              {selectedCourse.demoType === 'ai-classifier' && (
                <div className="space-y-3 text-xs">
                  <p className="text-neutral-300">
                    Pilih parameter gejala medis untuk menguji model klasifikasi Naive Bayes / Decision Tree:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => setSymptomA(!symptomA)}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors ${
                        symptomA
                          ? 'bg-pink-600 border-pink-500 text-white'
                          : 'bg-neutral-800 border-neutral-700 text-neutral-400'
                      }`}
                    >
                      Demam Ringan (Suhu &gt; 37.5°C)
                    </button>
                    <button
                      type="button"
                      onClick={() => setSymptomB(!symptomB)}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors ${
                        symptomB
                          ? 'bg-pink-600 border-pink-500 text-white'
                          : 'bg-neutral-800 border-neutral-700 text-neutral-400'
                      }`}
                    >
                      Sesak Nafas Berat
                    </button>
                    <button
                      type="button"
                      onClick={() => setSymptomC(!symptomC)}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors ${
                        symptomC
                          ? 'bg-pink-600 border-pink-500 text-white'
                          : 'bg-neutral-800 border-neutral-700 text-neutral-400'
                      }`}
                    >
                      Batuk Kering Berkala
                    </button>
                  </div>
                </div>
              )}

              {selectedCourse.demoType === 'kanban-board' && (
                <div className="space-y-2 text-xs">
                  <p className="text-neutral-300">
                    Klik tugas untuk memindahkan status alur kerja Agile (To-Do → In Progress → Done):
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                    {kanbanTasks.map((t) => (
                      <div
                        key={t.id}
                        onClick={() => handleMoveKanban(t.id)}
                        className="p-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 cursor-pointer select-none transition-colors"
                      >
                        <span
                          className={`text-[10px] font-bold px-1.5 py-0.5 rounded-sm inline-block mb-1 ${
                            t.status === 'done'
                              ? 'bg-emerald-900/60 text-emerald-300'
                              : t.status === 'progress'
                              ? 'bg-pink-900/60 text-pink-300'
                              : 'bg-neutral-700 text-neutral-300'
                          }`}
                        >
                          {t.status.toUpperCase()}
                        </span>
                        <p className="text-[11px] font-medium text-neutral-200 line-clamp-2">
                          {t.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Standard Trigger Button */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleRunDemo}
                  disabled={activeDemoRunning}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg bg-pink-600 hover:bg-pink-500 text-white transition-colors disabled:opacity-50"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{activeDemoRunning ? 'Menjalankan Simulasi...' : 'Jalankan Preview Demo'}</span>
                </button>

                <a
                  href={selectedCourse.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Lihat Repository GitHub</span>
                </a>
              </div>

              {/* Simulation Result Box */}
              {demoResult && (
                <div className="p-3 rounded-lg bg-neutral-950 border border-pink-500/40 text-xs font-mono text-pink-200 animate-in fade-in duration-200">
                  <span className="text-emerald-400 font-bold">[OUTPUT]: </span>
                  {demoResult}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
