import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Briefcase, GraduationCap, MapPin, Sparkles, CheckCircle2, Coffee, BookOpen, MessageCircleHeart, Moon, Sun, Bell } from 'lucide-react';
import { WORKING_HOURS, COLLEGE_SCHEDULE_S5, CollegeScheduleDay } from '../../data/portfolioData';

interface WorkingHoursScheduleProps {
  onNavigateToMatkul?: () => void;
}

// Lightweight isolated clock component to prevent parent tree re-renders every second
const LiveWIBClock: React.FC = React.memo(() => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString('id-ID', {
    timeZone: 'Asia/Jakarta',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const dateString = time.toLocaleDateString('id-ID', {
    timeZone: 'Asia/Jakarta',
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div>
      <div className="text-3xl sm:text-4xl font-black text-neutral-900 dark:text-white font-mono tabular-nums tracking-tight">
        {timeString} <span className="text-sm font-bold text-pink-600 dark:text-pink-400">WIB</span>
      </div>
      <p className="text-xs text-neutral-500 dark:text-neutral-400 capitalize mt-0.5">
        {dateString} · Zona Tangerang / Jakarta
      </p>
    </div>
  );
});

export const WorkingHoursSchedule: React.FC<WorkingHoursScheduleProps> = ({ onNavigateToMatkul }) => {
  const [currentWIBTime, setCurrentWIBTime] = useState<Date>(new Date());
  const [selectedDay, setSelectedDay] = useState<string>('SENIN');

  // Status computation updates gently every 30 seconds (no sub-second churn)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWIBTime(new Date());
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  const dayNames = ['MINGGU', 'SENIN', 'SELASA', 'RABU', 'KAMIS', 'JUMAT', 'SABTU'];
  const currentDayIndex = currentWIBTime.getDay();
  const currentDayName = dayNames[currentDayIndex];

  useEffect(() => {
    if (['SENIN', 'SELASA', 'RABU', 'KAMIS', 'JUMAT', 'SABTU'].includes(currentDayName)) {
      setSelectedDay(currentDayName);
    } else {
      setSelectedDay('SENIN');
    }
  }, []);

  const currentHour = parseInt(
    currentWIBTime.toLocaleTimeString('id-ID', {
      timeZone: 'Asia/Jakarta',
      hour: '2-digit',
      hour12: false,
    }),
    10
  );

  const isWorkDay = currentDayIndex >= 1 && currentDayIndex <= 5;
  const isWeekend = currentDayIndex === 0 || currentDayIndex === 6;

  // Find today's courses
  const todaySchedule = COLLEGE_SCHEDULE_S5.find((d) => d.day === currentDayName);

  // Friendly conversational status
  let friendlyStatus = {
    emoji: '☕',
    title: 'Lagi Santai / Belajar Mandiri',
    description: 'Di luar jam kantor & kuliah. Lagi ngulik proyek, eksplorasi teknologi baru, atau istirahat santai. Mau ngobrol atau diskusi proyek? Chat aja ya!',
    badge: 'Bisa Dihubungi',
    badgeColor: 'text-emerald-700 bg-emerald-50 dark:bg-emerald-950/60 dark:text-emerald-300',
    advice: 'Waktu santai yang pas buat balas pesan dan konsultasi proyek.'
  };

  if (isWorkDay && currentHour >= 8 && currentHour < 17) {
    friendlyStatus = {
      emoji: '💼',
      title: 'Lagi Standby Kerja di Pabrik',
      description: 'Jam segini Zara lagi fokus bertugas sebagai IT Administrator di PT. ARAI RUBBER SEAL INDONESIA. Mantau server pabrik, jaringan lokal, dan infrastruktur IT.',
      badge: 'Sedang Bekerja (IT Admin)',
      badgeColor: 'text-pink-700 bg-pink-50 dark:bg-pink-950/60 dark:text-pink-300',
      advice: 'Respons chat mungkin sedikit berkala tergantung kesibukan server pabrik.'
    };
  } else if (currentHour >= 18 && currentHour < 22 && todaySchedule && !todaySchedule.isRestDay && todaySchedule.courses.length > 0) {
    const activeCourse = todaySchedule.courses.find((c) => {
      const classHour = parseInt(c.time.split('.')[0], 10);
      return Math.abs(currentHour - classHour) <= 1;
    }) || todaySchedule.courses[0];

    friendlyStatus = {
      emoji: '🎓',
      title: 'Ssstt.. Lagi di Kelas Kuliah Nih!',
      description: `Jam segini Zara lagi kuliah semester 5 mata kuliah "${activeCourse.courseName}" di ruang ${activeCourse.room} bareng dosen ${activeCourse.lecturer}.`,
      badge: 'Sedang Kuliah Malam',
      badgeColor: 'text-purple-700 bg-purple-50 dark:bg-purple-950/60 dark:text-purple-300',
      advice: 'Zara akan balas pesan kamu setelah kelas selesai sekitar jam 21.30 WIB ya!'
    };
  } else if (currentHour >= 22 || currentHour < 6) {
    friendlyStatus = {
      emoji: '🌙',
      title: 'Waktu Istirahat Malam',
      description: 'Hari yang produktif sudah selesai. Zara lagi istirahat malam buat recharge energi. Tinggalkan pesan lewat email atau formulir kontak, besok pagi langsung dibalas!',
      badge: 'Istirahat Malam',
      badgeColor: 'text-blue-700 bg-blue-50 dark:bg-blue-950/60 dark:text-blue-300',
      advice: 'Pesan yang masuk malam hari akan ditanggapi keesokan paginya.'
    };
  }

  const activeDaySchedule = COLLEGE_SCHEDULE_S5.find((d) => d.day === selectedDay);

  return (
    <div className="space-y-8">
      {/* Friendly Realtime Live Tracker */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Main "Lagi Ngapain Zara?" Card */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm flex flex-col justify-between text-left relative overflow-hidden">
          <div className="relative z-10">
            {/* Top Badge */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-pink-500 animate-pulse" />
                <span>Live Tracker Waktu & Aktivitas</span>
              </span>
              <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${friendlyStatus.badgeColor}`}>
                {friendlyStatus.badge}
              </span>
            </div>

            {/* Headline */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white flex items-center gap-2">
              <span>Eh, si Zara lagi ngapain sekarang?</span>
            </h3>

            {/* Big Live Digital Clock */}
            <div className="mt-4 p-4 rounded-xl bg-pink-50/50 dark:bg-pink-950/20 border border-pink-100 dark:border-pink-900/30 flex items-center justify-between">
              <LiveWIBClock />
              <div className="text-3xl sm:text-4xl">
                {friendlyStatus.emoji}
              </div>
            </div>

            {/* Dynamic Status Text */}
            <div className="mt-5 space-y-2">
              <h4 className="text-base sm:text-lg font-bold text-pink-600 dark:text-pink-400">
                {friendlyStatus.title}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {friendlyStatus.description}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800 text-xs text-neutral-500 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-pink-500 shrink-0" />
            <span><strong>Catatan:</strong> {friendlyStatus.advice}</span>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -right-16 w-48 h-48 bg-pink-300/10 dark:bg-pink-600/10 rounded-full blur-2xl"
          />
        </div>

        {/* Quick Rules of Thumb / Jam Terbaik Hubungi Zara */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm flex flex-col justify-between text-left">
          <div>
            <h4 className="text-base font-bold text-neutral-900 dark:text-white flex items-center gap-2 mb-3">
              <MessageCircleHeart className="w-5 h-5 text-pink-500" />
              <span>Kapan Waktu Terbaik Hubungi Zara?</span>
            </h4>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">
              Biar komunikasi kita lancar dan kamu ga nunggu lama:
            </p>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/40 border border-neutral-200/70 dark:border-neutral-700/60">
                <span className="font-bold text-neutral-900 dark:text-white block mb-0.5">
                  1. Pagi s/d Sore (08.00 - 17.00 WIB)
                </span>
                <p className="text-neutral-600 dark:text-neutral-400 leading-normal">
                  Lagi jam kerja kantor di PT Arai Rubber Seal. Chat via WhatsApp atau Email tetap masuk dan dibalas di sela rehat kerja.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/40 border border-neutral-200/70 dark:border-neutral-700/60">
                <span className="font-bold text-neutral-900 dark:text-white block mb-0.5">
                  2. Sore Menuju Malam (17.00 - 18.30 WIB)
                </span>
                <p className="text-neutral-600 dark:text-neutral-400 leading-normal">
                  Waktu santai perjalanan pulang & persiapan kuliah malam. Sangat cocok buat telpon singkat atau diskusi!
                </p>
              </div>

              <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/40 border border-neutral-200/70 dark:border-neutral-700/60">
                <span className="font-bold text-neutral-900 dark:text-white block mb-0.5">
                  3. Setelah Kuliah (21.30 - 23.00 WIB) & Weekend
                </span>
                <p className="text-neutral-600 dark:text-neutral-400 leading-normal">
                  Waktu paling fleksibel buat ngobrolin tawaran proyek freelance, wawancara kerja, atau diskusi santai.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-neutral-100 dark:border-neutral-800 text-[11px] text-pink-600 dark:text-pink-400 font-semibold">
            Tersedia untuk peluang magang & junior web developer / IT admin!
          </div>
        </div>
      </div>

      {/* College Schedule Section - Friendly & Authentic */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400 mb-1 block">
              Jadwal Kuliah Semester 5 Zara
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 dark:text-white">
              Biar Ga Heran Pas Jam Kuliah: Ini Jadwal Kelas Zara!
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              Sebagai mahasiswi Teknik Informatika / Software Engineering, kuliah Zara dimulai jam 18.30 WIB sampai malam.
            </p>
          </div>

          {/* Day selection tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-100 dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700">
            {COLLEGE_SCHEDULE_S5.map((d) => (
              <button
                key={d.day}
                type="button"
                onClick={() => setSelectedDay(d.day)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  selectedDay === d.day
                    ? 'bg-white dark:bg-neutral-900 text-pink-600 dark:text-pink-300 shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {d.dayNameId}
                {d.day === currentDayName && (
                  <span className="ml-1 w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block align-middle" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Day Courses Grid */}
        <div className="bg-neutral-50 dark:bg-neutral-950/60 rounded-xl p-5 sm:p-6 border border-neutral-200/60 dark:border-neutral-800/80">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-200/80 dark:border-neutral-800 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-neutral-900 dark:text-white">
                Hari {activeDaySchedule?.dayNameId}
              </span>
              {activeDaySchedule?.day === currentDayName && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
                  Hari Ini
                </span>
              )}
            </div>

            <span className="text-neutral-500">
              {activeDaySchedule?.isRestDay
                ? 'Hari Istirahat / Bebas Kelas'
                : `${activeDaySchedule?.courses.length} Mata Kuliah`}
            </span>
          </div>

          {activeDaySchedule?.isRestDay ? (
            <div className="py-8 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500 flex items-center justify-center mx-auto">
                <Coffee className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-neutral-800 dark:text-neutral-200">
                Hari Kamis: Bebas dari Jam Kuliah
              </h4>
              <p className="text-xs text-neutral-500 max-w-sm mx-auto">
                Waktu khusus buat ngerjain tugas mingguan, review materi, atau santai bareng keluarga.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeDaySchedule?.courses.map((course, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 hover:border-pink-300 dark:hover:border-pink-900/60 transition-colors shadow-2xs"
                >
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-pink-600 dark:text-pink-400 font-mono">
                      ⏰ Pukul {course.time} WIB
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 text-[11px] font-medium">
                      Ruang: {course.room}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-neutral-900 dark:text-white mb-2">
                    {course.courseName}
                  </h4>

                  <div className="flex items-center justify-between text-xs pt-3 border-t border-neutral-100 dark:border-neutral-800/80 text-neutral-500">
                    <span>
                      Dosen: <strong className="text-neutral-800 dark:text-neutral-200">{course.lecturer}</strong>
                    </span>
                    <span className="text-[11px] text-pink-600 dark:text-pink-400 font-medium">
                      {course.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
