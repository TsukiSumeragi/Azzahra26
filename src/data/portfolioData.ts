export interface ProjectDemoCredentials {
  role: string;
  email: string;
  password: string;
  notes?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'web' | 'it-system' | 'security';
  categoryLabel: string;
  role: string;
  roleContribution: string;
  period: string;
  description: string;
  longDescription: string;
  problemSolved: string;
  architectureApproach: string;
  image: string;
  tags: string[];
  features: string[];
  metrics?: string;
  liveUrl?: string;
  githubUrl?: string;
  demoCredentials?: ProjectDemoCredentials;
}

export interface CollegeScheduleDay {
  day: 'SENIN' | 'SELASA' | 'RABU' | 'KAMIS' | 'JUMAT' | 'SABTU';
  dayNameId: string;
  isRestDay?: boolean;
  courses: {
    time: string;
    courseName: string;
    room: string;
    lecturer: string;
    type?: string;
  }[];
}

export interface CourseDocumentation {
  id: string;
  code: string;
  courseName: string;
  lecturer: string;
  room: string;
  day: string;
  time: string;
  semester: string;
  description: string;
  topicsCovered: string[];
  projectTitle: string;
  projectDescription: string;
  demoType: 'ai-classifier' | 'unit-test-runner' | 'enterprise-arch' | 'security-audit' | 'qa-tracker' | 'code-ethics' | 'kanban-board' | 'fullstack-app';
  demoPreviewTitle: string;
  demoUrl: string;
  repoUrl: string;
  techStack: string[];
}

export interface ExperienceAttachment {
  name: string;
  type: 'pdf' | 'doc' | 'certificate' | 'report';
  size: string;
  date: string;
  downloadUrl?: string;
  summary: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  badgeType: 'it-admin' | 'web-dev' | 'security' | 'leadership' | 'pharmacy';
  categoryLabel: string;
  image?: string;
  attachments?: ExperienceAttachment[];
  description: string[];
  skills: string[];
  highlight?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  items: {
    name: string;
    level: string;
    category: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "Azzahra (Zara)",
  shortGreeting: "Hi, I'm Zara",
  roles: [
    "Software Engineering Student",
    "Web Developer",
    "IT Administrator"
  ],
  currentHeadline: "Semester 5 Software Engineering Student | Web Developer | IT Administrator",
  location: "Tigaraksa, Tangerang, Banten, Indonesia",
  email: "azzahraasabri@gmail.com",
  phone: "081295242731",
  whatsappUrl: "https://wa.me/6281295242731?text=Halo%20Zara%2C%20saya%20tertarik%20dengan%20portofolio%20Anda",
  linkedin: "https://www.linkedin.com/in/azzahraph8",
  linkedinDisplay: "linkedin.com/in/azzahraph8",
  github: "https://github.com/azzahraph8",
  avatar: "/src/assets/images/hero_zara_avatar_1791122844579.jpg",
  summary: "Mahasiswi Software Engineering semester 5 yang berdedikasi tinggi dengan pengalaman langsung melalui magang industri, proyek kontrak, dan kepemimpinan sistem digital. Menguasai pengembangan web modern (React, Laravel, PHP), manajemen infrastruktur server & pelacakan multi-domain, hingga eksplorasi mendalam dalam defensive cyber security (SOC, Burp Suite, Network Analysis). Terbiasa bekerja dengan ketelitian tinggi dan siap berkontribusi sebagai Web Developer Intern atau Junior Software Engineer.",
  keyStats: [
    { label: "Website Dikelola", value: "20+", desc: "Lingkungan server terpusat" },
    { label: "Pengalaman Kerja & Magang", value: "8+", desc: "Perusahaan & organisasi" },
    { label: "Keahlian Keamanan", value: "7/7", desc: "Tantangan defensif siber tuntas" },
    { label: "Komitmen Kualitas", value: "100%", desc: "Responsif, aman & terstruktur" }
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    id: "arai-rubber",
    company: "PT. ARAI RUBBER SEAL INDONESIA",
    role: "Information Technology Administrator",
    period: "Februari 2026 - Present",
    location: "Tangerang, Banten",
    badgeType: "it-admin",
    categoryLabel: "IT Administration",
    image: "/src/assets/images/office_arai_workplace_1791125478305.jpg",
    highlight: "Memastikan stabilitas infrastruktur IT pabrik dan sistem operasional",
    attachments: [
      {
        name: "Surat Tugas & IT Maintenance Scope.pdf",
        type: "pdf",
        size: "1.4 MB",
        date: "Februari 2026",
        summary: "Dokumen rincian tanggung jawab administrasi server lokal, topologi jaringan manufaktur, dan kontrol izin akses pengguna."
      },
      {
        name: "SOP Pemeliharaan Server & Pencegahan Downtime.doc",
        type: "doc",
        size: "820 KB",
        date: "Maret 2026",
        summary: "Panduan operasional standar penanganan insiden jaringan dan pencadangan data operasional pabrik."
      }
    ],
    description: [
      "Bertanggung jawab atas administrasi, pemeliharaan, dan troubleshooting infrastruktur IT manufaktur secara menyeluruh.",
      "Mengelola konfigurasi perangkat keras, sistem jaringan lokal, hak akses pengguna, serta keamanan data operasional perusahaan.",
      "Melakukan pemeliharaan berkala, pencegahan downtime sistem, dan pendampingan teknis bagi seluruh divisi kerja."
    ],
    skills: ["IT Administration", "Network Maintenance", "System Diagnostics", "Hardware/Software Support", "Security Controls"]
  },
  {
    id: "suara-kita",
    company: "Suara Kita",
    role: "Co-Leader IT Development & Digital System",
    period: "Juni 2026 - Present",
    location: "Indonesia (Hybrid)",
    badgeType: "leadership",
    categoryLabel: "Tech Leadership",
    image: "/src/assets/images/project_suara_kita_portal_1791122871708.jpg",
    highlight: "Memimpin perancangan dan arsitektur sistem digital organisasi",
    attachments: [
      {
        name: "Arsitektur Platform Digital Suara Kita.pdf",
        type: "pdf",
        size: "2.3 MB",
        date: "Juni 2026",
        summary: "Cetak biru pengembangan website organisasi, arsitektur RESTful API, dan manajemen publikasi konten relawan."
      }
    ],
    description: [
      "Memimpin divisi pengembangan sistem digital dan website organisasi untuk program pemberdayaan dan komunikasi publik.",
      "Mengkoordinasikan tim teknis, merancang roadmap rilis fitur, serta mengevaluasi performa dan keamanan platform.",
      "Mengintegrasikan sistem informasi dan pengelolaan konten agar responsif, mudah diakses, dan aman dari kerentanan."
    ],
    skills: ["Project Management", "IT Leadership", "React", "Digital Architecture", "Web Security"]
  },
  {
    id: "women-in-tech",
    company: "Wo-Men In Tech Security",
    role: "Defensive & Offensive Cyber Security Specialist",
    period: "November 2025 - September 2026",
    location: "Jakarta Raya, Indonesia",
    badgeType: "security",
    categoryLabel: "Cyber Security",
    image: "/src/assets/images/project_cyber_security_soc_1791122885585.jpg",
    highlight: "Menyelesaikan 7 latihan akhir evaluasi serangan & pertahanan siber",
    attachments: [
      {
        name: "Executive Summary 7 Cyber Challenges.pdf",
        type: "pdf",
        size: "3.5 MB",
        date: "September 2026",
        summary: "Laporan komprehensif audit kerentanan Burp Suite, operasi SOC, simulasi packet routing Cisco, dan mitigasi risiko."
      },
      {
        name: "Sertifikat Kelulusan Defensive & Offensive Sec.pdf",
        type: "certificate",
        size: "1.1 MB",
        date: "September 2026",
        summary: "Sertifikat pencapaian verifikasi kredensial program Wo-Men In Tech Security 2026."
      }
    ],
    description: [
      "Mempelajari operasi Security Operations Center (SOC), manajemen log sistem, Cyber Threat Intelligence (CTI), analisis lalu lintas jaringan, dan fundamental analisis malware.",
      "Menjalankan metodologi penetration testing, information gathering (reconnaissance), eksploitasi kerentanan aplikasi web, dan penyusunan laporan audit keamanan menggunakan Burp Suite.",
      "Mengaplikasikan teknik Open-Source Intelligence (OSINT), kriptografi dasar, manajemen hak akses, pengerasan keamanan sistem Windows/Linux, serta simulasi topologi jaringan menggunakan Cisco Packet Tracer."
    ],
    skills: ["SOC Operations", "Burp Suite", "Penetration Testing", "Cisco Packet Tracer", "Threat Intelligence", "OSINT", "Linux Security"]
  },
  {
    id: "frantinco",
    company: "PT Frantinco Indah Makmur",
    role: "Junior Software Engineer",
    period: "Desember 2025 - Januari 2026",
    location: "Tigaraksa, Banten",
    badgeType: "web-dev",
    categoryLabel: "Software Engineering",
    image: "/src/assets/images/project_multi_site_dash_1791122859226.jpg",
    highlight: "Mengelola 20+ website perusahaan pada lingkungan server terpusat",
    attachments: [
      {
        name: "Laporan Audit Pelacakan Google Ads & DNS.pdf",
        type: "report",
        size: "1.9 MB",
        date: "Januari 2026",
        summary: "Dokumentasi penyelesaian isu missing conversion tags, konfigurasi domain routing, dan optimasi performa."
      }
    ],
    description: [
      "Mengelola dan merawat 20+ website korporat yang di-host dalam lingkungan server terpusat (centralized server environment).",
      "Mengimplementasikan dan mengoptimasi pelacakan konversi Google Ads, termasuk pemasangan tag Google Tag Manager dan integrasi kode konversi.",
      "Melakukan troubleshooting isu pelacakan seperti missing conversions, misconfigured tags, dan masalah routing domain DNS.",
      "Mengembangkan dan merawat aplikasi web modern menggunakan Laravel (PHP) dan React serta mengoptimasi performa lintas domain."
    ],
    skills: ["Laravel (PHP)", "React", "Server Management", "Google Ads Tracking", "DNS Routing", "Debugging"]
  },
  {
    id: "youth-ranger",
    company: "Youth Ranger Indonesia",
    role: "Website Developer",
    period: "Februari 2025 - Januari 2026",
    location: "Indonesia (Remote)",
    badgeType: "web-dev",
    categoryLabel: "Web Development",
    highlight: "Membangun komponen UI reusable dan integrasi API RESTful",
    description: [
      "Mengembangkan dan memelihara aplikasi web organisasi berskala nasional dengan stack Laravel (PHP) dan React.",
      "Membangun komponen UI yang reusable, mobile-responsive, dan mengintegrasikan frontend dengan API backend secara seamless.",
      "Melakukan debugging, pembaruan fitur, optimasi kecepatan halaman, dan berkolaborasi erat dengan tim inisiatif digital."
    ],
    skills: ["React", "Laravel (PHP)", "REST API Integration", "Reusable Components", "Performance Tuning"]
  },
  {
    id: "kunkwan",
    company: "Kunkwan Mandarin Indonesia",
    role: "Chief Marketing Officer",
    period: "April 2026 - Agustus 2026",
    location: "Tangerang (Remote)",
    badgeType: "leadership",
    categoryLabel: "Strategic Management",
    highlight: "Merancang strategi kampanye merek, analisis pasar, dan budgeting",
    description: [
      "Merancang strategi pemasaran digital komprehensif, manajemen merek (brand management), serta analisis tren pasar pendidikan.",
      "Mengelola alokasi anggaran kampanye promosi dan memimpin kolaborasi strategis lintas divisi untuk ekspansi program pelatihan."
    ],
    skills: ["Strategic Marketing", "Brand Management", "Budgeting", "Cross-Division Collaboration", "Market Research"]
  },
  {
    id: "youth-space",
    company: "Youth Space",
    role: "Website Developer",
    period: "September 2025 - Februari 2026",
    location: "Indonesia (Remote)",
    badgeType: "web-dev",
    categoryLabel: "Web Development",
    highlight: "Merancang layout kustom dan memastikan tampilan responsif",
    description: [
      "Mengembangkan dan merawat situs web organisasi menggunakan Wix dan styling kustom sesuai pedoman branding.",
      "Mengelola pembaruan konten dinamis dan berkoordinasi dengan tim non-teknis untuk menerjemahkan kebutuhan program menjadi halaman interaktif."
    ],
    skills: ["Wix Development", "Custom Layouts", "Responsive Design", "Client Coordination"]
  },
  {
    id: "amgala",
    company: "AMGALA Foundation",
    role: "Website Developer",
    period: "Desember 2024 - April 2025",
    location: "Indonesia (Remote)",
    badgeType: "web-dev",
    categoryLabel: "Web Development",
    highlight: "Pengembangan full-stack Laravel dan manajemen basis data",
    description: [
      "Mengembangkan aplikasi web foundation menggunakan Laravel (PHP) dengan integrasi frontend dan logika backend yang kokoh.",
      "Mengelola integrasi database MySQL, melakukan maintenance rutin, dan memastikan stabilitas performa sistem."
    ],
    skills: ["Laravel (PHP)", "MySQL", "Backend Logic", "Database Schema", "Full-Stack Maintenance"]
  },
  {
    id: "apotek-darja-farma",
    company: "Apotek Darja Farma",
    role: "Asisten Apoteker",
    period: "Mei 2024 - Juni 2024",
    location: "Tigaraksa, Banten, Indonesia",
    badgeType: "pharmacy",
    categoryLabel: "Farmasi Klinis",
    image: "/src/assets/images/smk_yarsi_medika_1791125446903.jpg",
    highlight: "Verifikasi resep medis akurat, penyiapan obat, dan konseling pasien",
    attachments: [
      {
        name: "Surat Keterangan Asisten Apoteker Darja Farma.pdf",
        type: "certificate",
        size: "1.2 MB",
        date: "Juni 2024",
        summary: "Surat keterangan resmi tugas dispensing obat dan pengelolaan inventaris farmasi."
      }
    ],
    description: [
      "Melakukan tugas dispensing obat secara tepat dan akurat sesuai dengan resep yang diterima dokter, serta memberikan penjelasan aturan pakai dan efek samping kepada pasien.",
      "Membantu dalam pengelolaan inventaris obat di apotek, termasuk pengecekan stok fisik, pengaturan penyimpanan standar keamanan/suhu, serta pengadaan obat berkala.",
      "Memberikan konseling sederhana kepada pasien terkait kepatuhan penggunaan obat dan menjawab pertanyaan umum seputar pengobatan.",
      "Melakukan verifikasi awal terhadap resep, termasuk pengecekan interaksi obat dan kontraindikasi sebelum diserahkan kepada apoteker untuk pemeriksaan akhir."
    ],
    skills: ["Dispensing Obat", "Verifikasi Resep", "Inventaris Farmasi", "Konseling Pasien", "Ketelitian Data"]
  },
  {
    id: "rsia-harapan-mulia",
    company: "RSIA Harapan Mulia",
    role: "Asisten Tenaga Teknis Kefarmasian | PKL",
    period: "September 2023 - November 2023",
    location: "Tangerang, Banten, Indonesia",
    badgeType: "pharmacy",
    categoryLabel: "Farmasi Klinis",
    image: "/src/assets/images/smk_yarsi_medika_1791125446903.jpg",
    highlight: "Manajemen rekam medis obat & optimalisasi sistem penyimpanan rumah sakit",
    attachments: [
      {
        name: "Sertifikat PKL RSIA Harapan Mulia.pdf",
        type: "certificate",
        size: "1.5 MB",
        date: "November 2023",
        summary: "Sertifikat kelulusan praktik kerja lapangan kefarmasian rumah sakit ibu dan anak."
      }
    ],
    description: [
      "Mengelola proses penerimaan resep pasien, melakukan verifikasi awal keabsahan resep, dan memastikan kelengkapan dosis sebelum diserahkan ke apoteker.",
      "Mengoptimalkan sistem penyimpanan obat dengan memperhatikan standar suhu dingin, kelembapan, FIFO/FEFO, serta penerimaan stok obat baru.",
      "Memberikan informasi dosis tepat dan potensi efek samping kepada pasien di bawah supervisi langsung apoteker.",
      "Mengelola dan memperbarui rekam medis pasien, termasuk pencatatan riwayat pemberian obat dan pemantauan terapi pengobatan."
    ],
    skills: ["Rekam Medis", "Manajemen Suhu & Kelembapan", "Sistem FIFO/FEFO", "Verifikasi Dosis", "Prosedur Rumah Sakit"]
  },
  {
    id: "puskesmas-tigaraksa",
    company: "Puskesmas Tigaraksa",
    role: "Asisten Tenaga Teknis Kefarmasian | PKL",
    period: "Agustus 2023 - September 2023",
    location: "Tangerang, Banten, Indonesia",
    badgeType: "pharmacy",
    categoryLabel: "Farmasi Klinis",
    image: "/src/assets/images/smk_yarsi_medika_1791125446903.jpg",
    highlight: "Pelayanan farmasi rawat jalan & monitoring tanggal kadaluwarsa obat",
    attachments: [
      {
        name: "Laporan Praktik Lapangan Puskesmas Tigaraksa.pdf",
        type: "report",
        size: "2.1 MB",
        date: "September 2023",
        summary: "Laporan evaluasi pengelolaan stok obat puskesmas dan penyuluhan kepatuhan pengobatan kronis."
      }
    ],
    description: [
      "Membantu pemberian pelayanan farmasi dasar kepada pasien rawat jalan puskesmas dan memastikan pasien memahami petunjuk penggunaan obat.",
      "Berkolaborasi dengan tim medis dalam penyuluhan pengelolaan penyakit kronis (hipertensi & diabetes) terkait pentingnya kepatuhan minum obat.",
      "Mengelola stok obat-obatan puskesmas, pengecekan ketersediaan rutin, dan membantu proses pemesanan ulang.",
      "Melakukan pencatatan pelaporan harian obat serta pemantauan obat yang mendekati tanggal kedaluwarsa (expired date)."
    ],
    skills: ["Pelayanan Pasien Rawat Jalan", "Edukasi Penyakit Kronis", "Monitoring Kadaluwarsa", "Pencatatan Harian", "Penyuluhan Kesehatan"]
  }
];

export interface ZaraActivity {
  timeStr: string;
  dayName: string;
  badge: string;
  isAvailableNow: boolean;
  shortSummary: string;
  actionText: string;
  dotColor: string;
}

export function getZaraCurrentActivity(date: Date = new Date()): ZaraActivity {
  const currentHour = parseInt(
    date.toLocaleTimeString('id-ID', {
      timeZone: 'Asia/Jakarta',
      hour: '2-digit',
      hour12: false,
    }),
    10
  );

  const currentMinute = date.getMinutes();
  const dayIndex = date.getDay();
  const dayNames = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const dayName = dayNames[dayIndex];
  const dayUpper = dayName.toUpperCase();

  const timeStr = date.toLocaleTimeString('id-ID', {
    timeZone: 'Asia/Jakarta',
    hour: '2-digit',
    minute: '2-digit',
  });

  const isWorkDay = dayIndex >= 1 && dayIndex <= 5;
  const isWeekend = dayIndex === 0 || dayIndex === 6;
  const todaySchedule = COLLEGE_SCHEDULE_S5.find((d) => d.day === dayUpper);

  // 1. Midnight to early morning (23:00 - 06:00)
  if (currentHour >= 23 || currentHour < 6) {
    return {
      timeStr,
      dayName,
      badge: '🌙 Istirahat Malam',
      isAvailableNow: false,
      shortSummary: 'Lagi tidur, pesan dibalas besok pagi.',
      actionText: 'Kirim Pesan',
      dotColor: 'bg-neutral-500',
    };
  }

  // 2. Early morning (06:00 - 08:00)
  if (currentHour >= 6 && currentHour < 8) {
    return {
      timeStr,
      dayName,
      badge: '🟢 Online (Pagi)',
      isAvailableNow: true,
      shortSummary: 'Persiapan pagi, santai & siap chat.',
      actionText: 'Chat Zara',
      dotColor: 'bg-emerald-500',
    };
  }

  // 3. Weekend
  if (isWeekend) {
    return {
      timeStr,
      dayName,
      badge: '🟢 Online & Free',
      isAvailableNow: true,
      shortSummary: 'Weekend santai, siap diajak ngobrol / diskusi!',
      actionText: 'Chat Zara',
      dotColor: 'bg-emerald-500',
    };
  }

  // 4. Work hours on weekdays (08:00 - 17:00)
  if (isWorkDay) {
    if (currentHour === 12) {
      return {
        timeStr,
        dayName,
        badge: '🟢 Rehat Makan Siang',
        isAvailableNow: true,
        shortSummary: 'Istirahat kerja, fast response chat!',
        actionText: 'Chat Zara',
        dotColor: 'bg-emerald-500',
      };
    }
    if (currentHour >= 8 && currentHour < 17) {
      return {
        timeStr,
        dayName,
        badge: '💼 Kerja IT Admin',
        isAvailableNow: false,
        shortSummary: 'Standby di PT Arai. Respon agak berkala.',
        actionText: 'Kirim Chat',
        dotColor: 'bg-pink-500',
      };
    }
  }

  // 5. Afternoon transition (17:00 - 18:30)
  if (currentHour >= 17 && (currentHour < 18 || (currentHour === 18 && currentMinute < 30))) {
    return {
      timeStr,
      dayName,
      badge: '🟢 Online & Free',
      isAvailableNow: true,
      shortSummary: 'Beres jam kantor, siap respon cepat!',
      actionText: 'Chat Zara',
      dotColor: 'bg-emerald-500',
    };
  }

  // 6. College class hours (18:30 - 21:30)
  if (todaySchedule && !todaySchedule.isRestDay && todaySchedule.courses.length > 0) {
    if (currentHour >= 18 && currentHour < 22) {
      const activeClass =
        currentHour < 20
          ? todaySchedule.courses[0]
          : todaySchedule.courses[1] || todaySchedule.courses[0];
      if (activeClass) {
        return {
          timeStr,
          dayName,
          badge: `🎓 Kelas: ${activeClass.courseName.split(' ')[0]}`,
          isAvailableNow: false,
          shortSummary: `Kuliah ${activeClass.courseName} (${activeClass.room}). Dibalas jam 21.30!`,
          actionText: 'Tinggalkan Chat',
          dotColor: 'bg-purple-500',
        };
      }
    }
  }

  // 7. Night free time (21:30 - 23:00)
  return {
    timeStr,
    dayName,
    badge: '🟢 Online & Free',
    isAvailableNow: true,
    shortSummary: 'Kuliah beres, lagi santai di rumah. Siap chat!',
    actionText: 'Chat Zara',
    dotColor: 'bg-emerald-500',
  };
}

export const SKILL_GROUPS: SkillCategory[] = [
  {
    title: "Web Development",
    iconName: "Code",
    description: "Pengembangan antarmuka modern yang cepat, elegan, dan logika backend yang andal.",
    items: [
      { name: "React.js", level: "Mahir", category: "Frontend" },
      { name: "Laravel (PHP)", level: "Mahir", category: "Backend" },
      { name: "PHP", level: "Mahir", category: "Backend" },
      { name: "HTML5 & Modern CSS3", level: "Ahli", category: "Frontend" },
      { name: "JavaScript (ES6+)", level: "Mahir", category: "Frontend" },
      { name: "Tailwind CSS & Bootstrap", level: "Ahli", category: "UI/UX" },
      { name: "RESTful API Integration", level: "Mahir", category: "Full-Stack" },
      { name: "MySQL / Relational DB", level: "Menengah", category: "Database" }
    ]
  },
  {
    title: "IT Administration & Infrastructure",
    iconName: "Server",
    description: "Pengelolaan server terpusat, routing domain, pelacakan digital, dan operasional jaringan.",
    items: [
      { name: "Centralized Server Management", level: "Mahir", category: "IT Admin" },
      { name: "Domain & DNS Routing", level: "Mahir", category: "Networking" },
      { name: "Google Ads Tracking & GTM", level: "Mahir", category: "Analytics" },
      { name: "Cisco Packet Tracer", level: "Menengah", category: "Simulation" },
      { name: "Windows & Linux Hardening", level: "Menengah", category: "Security" },
      { name: "Hardware & IT Support", level: "Ahli", category: "Operations" },
      { name: "Multi-Domain Maintenance", level: "Ahli", category: "IT Admin" }
    ]
  },
  {
    title: "Cyber Security & Defensive Sec",
    iconName: "ShieldCheck",
    description: "Investigasi kerentanan, operasi SOC, intelijen ancaman, dan pengujian penetrasi web.",
    items: [
      { name: "SOC Operations & Log Analysis", level: "Terdidik", category: "Defensive" },
      { name: "Burp Suite Web Exploitation", level: "Terdidik", category: "AppSec" },
      { name: "Cyber Threat Intelligence (CTI)", level: "Terdidik", category: "SecOps" },
      { name: "Penetration Testing Methodology", level: "Terdidik", category: "Offensive" },
      { name: "OSINT (Open-Source Intelligence)", level: "Mahir", category: "Intelligence" },
      { name: "Basic Cryptography & Permissions", level: "Menengah", category: "Security" }
    ]
  },
  {
    title: "Manajemen & Bahasa",
    iconName: "Award",
    description: "Kolaborasi lintas divisi, komunikasi strategis, dan kemampuan multibahasa.",
    items: [
      { name: "Project Management (Agile)", level: "Mahir", category: "Management" },
      { name: "Strategic Communication", level: "Ahli", category: "Leadership" },
      { name: "Git & Version Control", level: "Mahir", category: "DevTools" },
      { name: "Bahasa Indonesia", level: "Native / Bilingual", category: "Language" },
      { name: "Bahasa Jepang (JLPT N5)", level: "Elementary (N5)", category: "Language" },
      { name: "Bahasa Inggris", level: "Elementary Working", category: "Language" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "frantinco-multi-domain",
    title: "Centralized Multi-Site Server & Domain Routing Manager",
    category: "it-system",
    categoryLabel: "IT System & Web",
    role: "Junior Software Engineer",
    roleContribution: "Full-Stack Development (Independen): Merancang skema REST API Laravel untuk healthcheck, routing DNS, audit tracking Google Tag Manager, dan dashboard monitoring real-time React.",
    period: "2025 - 2026",
    description: "Sistem pemeliharaan terpusat untuk 20+ website korporat dengan pemantauan DNS routing, stabilitas server, dan integrasi Google Ads conversion tracking.",
    longDescription: "Proyek manajemen infrastruktur komprehensif untuk PT Frantinco Indah Makmur. Mengintegrasikan pemantauan 20+ domain perusahaan dalam centralized hosting, menyelesaikan isu penelusuran konversi (missing conversions & tag errors), dan mengoptimasi kecepatan load website menggunakan Laravel dan arsitektur UI React.",
    problemSolved: "Lebih dari 20 domain perusahaan tersebar tanpa monitoring terpusat, sering terjadi kegagalan SSL yang tidak terpantau, serta konversi iklan Google Ads hilang akibat script tags yang broken.",
    architectureApproach: "Menerapkan Scheduled Worker di Laravel untuk ping berkala ke endpoint domain, parsing status DNS, dan agregasi data ke MySQL. Frontend dibangun dengan React & Tailwind untuk visualisasi status real-time dengan status badge dinamis.",
    image: "/src/assets/images/project_multi_site_dash_1791122859226.jpg",
    tags: ["Laravel", "React", "Server Management", "Google Tag Manager", "DNS Routing"],
    features: [
      "Pemantauan status 20+ website korporat secara realtime",
      "Pemasangan dan audit Google Ads conversion tracking tags",
      "Pencegahan dan perbaikan routing domain serta SSL renewal",
      "Optimasi performa halaman dan caching lintas server"
    ],
    metrics: "20+ Domain Dikelola · 99.8% Uptime · 0 Tag Error",
    liveUrl: "https://frantinco.com",
    githubUrl: "https://github.com/azzahraph8",
    demoCredentials: {
      role: "Lead Administrator / Evaluator",
      email: "recruiter.eval@zara-systems.id",
      password: "DemoEnterprise2026!",
      notes: "Akses penuh ke dashboard monitoring 20 domain dan log SSL."
    }
  },
  {
    id: "suara-kita-portal",
    title: "Suara Kita Digital Platform & Advocacy Portal",
    category: "web",
    categoryLabel: "Web Application",
    role: "Co-Leader IT Development",
    roleContribution: "Frontend & Architecture Lead: Memimpin tim dalam merancang wireframe Figma, membagi tugas sprint, mengimplementasikan antarmuka React responsif, dan mengintegrasikan autentikasi JWT.",
    period: "2026",
    description: "Platform digital responsif dan interaktif untuk organisasi Suara Kita dengan fitur advokasi, artikel program, publikasi kegiatan, dan partisipasi pemuda.",
    longDescription: "Mengarahkan tim IT Development dalam merancang dan mengembangkan platform portal digital Suara Kita. Fokus utama meliputi UI yang ramah seluler, arsitektur data terstruktur dengan Laravel API, serta antarmuka React yang modern dengan animasi halus untuk meningkatkan keterlibatan audiens.",
    problemSolved: "Organisasi advokasi pemuda membutuhkan portal terpercaya untuk menjangkau audiens muda tanpa hambatan akses lambat di ponsel atau formulir manual yang tercecer.",
    architectureApproach: "Menggunakan pola arsitektur Client-Server terpisah (React SPA + Laravel RESTful API). Autentikasi berbasis Token (Sanctum), validasi input ketat terhadap XSS/CSRF, serta optimasi bundle size untuk mobile-first performance.",
    image: "/src/assets/images/project_suara_kita_portal_1791122871708.jpg",
    tags: ["React", "Laravel API", "Tailwind CSS", "Mobile-First", "Digital System"],
    features: [
      "Sistem publikasi artikel dan kegiatan pemuda terintegrasi",
      "Antarmuka cepat dengan load time < 1.2 detik di perangkat seluler",
      "Manajemen formulir partisipasi dan pendaftaran program relawan",
      "Desain adaptif dengan dukungan tema kontras tinggi"
    ],
    metrics: "Peningkatan 45% Mobile Engagement · Nilai Lighthouse 96",
    liveUrl: "https://suarakita.org",
    githubUrl: "https://github.com/azzahraph8",
    demoCredentials: {
      role: "Public Visitor & Content Reviewer",
      email: "evaluator@suarakita.demo",
      password: "SuaraKita2026#Demo",
      notes: "Langsung masuk sebagai reviewer publikasi advokasi."
    }
  },
  {
    id: "cyber-sec-soc-analysis",
    title: "Defensive Security SOC Incident & Traffic Analyzer",
    category: "security",
    categoryLabel: "Cyber Security",
    role: "Security Trainee & Researcher",
    roleContribution: "Security Analyst: Melakukan pentest manual web dengan Burp Suite, analisis packet capture (.pcap) di Wireshark, dan pembuatan matriks mitigasi OWASP Top 10.",
    period: "2025 - 2026",
    description: "Dashboard analisis intelijen ancaman siber (CTI), pemeriksaan log operasional SOC, dan simulasi penelusuran kerentanan web menggunakan Burp Suite.",
    longDescription: "Hasil implementasi program Wo-Men In Tech Security di mana Zara menuntaskan 7 latihan pertahanan dan serangan siber. Berisi dokumentasi pengujian celah keamanan web (XSS, SQL Injection, CSRF), analisis paket lalu lintas jaringan, simulasi Packet Tracer, dan pemetaan ancaman CTI.",
    problemSolved: "Aplikasi internal rentan terhadap serangan injection dan intercept data sensitif tanpa adanya pemantauan insiden berbasis SIEM/SOC yang memadai.",
    architectureApproach: "Penerapan metodologi audit keamanan OWASP Testing Guide. Mengombinasikan analisis paket jaringan Wireshark, interceptor Burp Suite, dan pemodelan topologi pertahanan DMZ di Cisco Packet Tracer.",
    image: "/src/assets/images/project_cyber_security_soc_1791122885585.jpg",
    tags: ["SOC Operations", "Burp Suite", "Packet Tracer", "Log Analysis", "OSINT"],
    features: [
      "Visualisasi log insiden keamanan dan klasifikasi tingkat risiko",
      "Simulasi topologi jaringan aman menggunakan Cisco Packet Tracer",
      "Metodologi reconnaissance dan vulnerability mapping aplikasi web",
      "Penyusunan rekomendasi mitigasi sesuai standar OWASP Top 10"
    ],
    metrics: "7 Latihan Akhir Berhasil · Audit Standar OWASP",
    liveUrl: "https://tryhackme.com",
    githubUrl: "https://github.com/azzahraph8",
    demoCredentials: {
      role: "SOC Analyst / Auditor",
      email: "soc.auditor@defsec.local",
      password: "AuditSOC2026!Secure",
      notes: "Akses sandbox simulasi insiden dan log inspeksi."
    }
  },
  {
    id: "arai-it-inventory",
    title: "Industrial IT Asset & Network Maintenance System",
    category: "it-system",
    categoryLabel: "IT Administration",
    role: "IT Administrator",
    roleContribution: "Sole Developer & IT Admin: Menganalisis alur operasional pabrik, merancang database inventaris MySQL, mengembangkan dashboard CRUD berbasis web, dan menyusun SOP pemeliharaan.",
    period: "2026",
    description: "Sistem pelacakan inventaris IT, riwayat servis perangkat keras, jadwal pemeliharaan jaringan, dan log izin akses untuk PT. Arai Rubber Seal Indonesia.",
    longDescription: "Membantu efisiensi operasional pabrik manufaktur dengan mendigitalkan catatan riwayat pemeliharaan perangkat komputer, alokasi printer, server database lokal, serta pemantauan titik jaringan di area produksi dan kantor.",
    problemSolved: "Pencatatan aset komputer dan penanganan tiket kendala teknis pabrik sebelumnya menggunakan kertas spreadsheet manual yang rawan hilang dan sulit dilacak.",
    architectureApproach: "Aplikasi web internal menggunakan PHP MVC, basis data relasional MySQL dengan index pada nomor seri aset, serta ekspor PDF otomatis untuk audit internal perusahaan.",
    image: "/src/assets/images/project_multi_site_dash_1791122859226.jpg",
    tags: ["PHP", "Laravel", "MySQL", "IT Inventory", "Network Admin"],
    features: [
      "Pencatatan siklus hidup perangkat keras IT dan lisensi perangkat lunak",
      "Sistem tiket kendala teknis internal divisi perusahaan",
      "Log kontrol hak akses pengguna ke sistem manufaktur",
      "Export laporan pemeliharaan berkala untuk manajemen"
    ],
    metrics: "100+ Aset IT Tercatat · Penurunan Response Time Dukungan IT",
    liveUrl: "#",
    githubUrl: "https://github.com/azzahraph8",
    demoCredentials: {
      role: "Factory Plant Supervisor",
      email: "supervisor.arai@rubberseal.co.id",
      password: "AraiPlant2026!",
      notes: "Akses inventaris perangkat keras dan sistem tiket pabrik."
    }
  },
  {
    id: "youth-ranger-web",
    title: "Youth Ranger Indonesia Interactive Web App",
    category: "web",
    categoryLabel: "Web Application",
    role: "Website Developer",
    roleContribution: "Frontend Specialist: Mengembangkan reusable UI components, styling responsive dengan CSS/Tailwind, dan integrasi API form pendaftaran program kepemudaan.",
    period: "2025 - 2026",
    description: "Aplikasi web interaktif untuk komunitas pemuda berskala nasional dengan sistem komponen UI modular berbasis React dan backend Laravel.",
    longDescription: "Membangun antarmuka pengguna interaktif dan menghubungkan komponen UI dengan RESTful backend. Menghadirkan navigasi yang mulus, galeri program kerja, dan sistem verifikasi peserta event.",
    problemSolved: "Komunitas memerlukan platform acara dengan alur pendaftaran peserta yang tidak putus di tengah jalan saat lonjakan ribuan pengunjung bersamaan.",
    architectureApproach: "Pemisahan presentational & container components di React, optimasi rendering memoization, dan validasi form di sisi klien (client-side form validation) sebelum dikirim ke backend API.",
    image: "/src/assets/images/project_suara_kita_portal_1791122871708.jpg",
    tags: ["React", "Laravel", "REST API", "UI Components", "Performance"],
    features: [
      "Desain antarmuka reusable component library",
      "Koneksi RESTful API untuk fetching program secara dinamis",
      "Dukungan caching state untuk pengalaman navigasi tanpa jeda",
      "Formulir registrasi keanggotaan terenkripsi"
    ],
    metrics: "Ribuan Pengunjung Bulanan · Responsif di Semua Ukuran Layar",
    liveUrl: "https://youthranger.id",
    githubUrl: "https://github.com/azzahraph8",
    demoCredentials: {
      role: "Guest Member",
      email: "participant.demo@youthranger.id",
      password: "YouthRanger2026!",
      notes: "Akses fitur pendaftaran program kerja dan modul event."
    }
  },
  {
    id: "amgala-foundation",
    title: "AMGALA Foundation Information & Program Hub",
    category: "web",
    categoryLabel: "Web Development",
    role: "Website Developer",
    roleContribution: "Full-Stack Developer: Merancang database MySQL donasi, mengimplementasikan backend PHP Laravel, dan mendesain layout responsif ramah pengguna.",
    period: "2024 - 2025",
    description: "Website resmi yayasan nirlaba dengan manajemen basis data MySQL untuk publikasi inisiatif sosial dan transparansi program kemanusiaan.",
    longDescription: "Mengembangkan aplikasi web lengkap untuk AMGALA Foundation. Membangun antarmuka ramah pengguna, integrasi database relasional yang stabil, dan skema konten dinamis untuk pembaruan kegiatan berkala.",
    problemSolved: "Yayasan membutuhkan transparansi dana program kemanusiaan dengan arsip terorganisir yang mudah dicari oleh calon donatur institusional.",
    architectureApproach: "Laravel MVC dengan Blade templating dan integrasi MySQL. Struktur routing aman dengan middleware otentikasi role admin yayasan.",
    image: "/src/assets/images/project_suara_kita_portal_1791122871708.jpg",
    tags: ["Laravel (PHP)", "MySQL", "Full-Stack", "Non-Profit", "Responsive"],
    features: [
      "Dashboard admin untuk pengelolaan program yayasan",
      "Skema database MySQL yang ternormalisasi dengan baik",
      "Tampilan transparan laporan kegiatan dan galeri dampak sosial",
      "Integrasi formulir donasi dan narahubung cepat"
    ],
    metrics: "Aplikasi Stabil Tanpa Bug Kritis · 100% Mobile Ready",
    liveUrl: "https://amgala.org",
    githubUrl: "https://github.com/azzahraph8",
    demoCredentials: {
      role: "Public Auditor",
      email: "auditor@amgala.demo",
      password: "AmgalaDonasi2026#",
      notes: "Akses ke dashboard transparansi program yayasan."
    }
  }
];

export const WORKING_HOURS = {
  timezone: "Asia/Jakarta (WIB - UTC+7)",
  workDays: "Senin - Jumat",
  workHours: "08:00 - 17:00 WIB",
  company: "PT. ARAI RUBBER SEAL INDONESIA",
  role: "Information Technology Administrator",
  studySchedule: "18:30 - 21:30 WIB (Kuliah Malam - Semester 5)",
  freelanceHours: "Malam hari & Akhir Pekan (Sabtu - Minggu)",
  statusAvailableForHire: true
};

export const COLLEGE_SCHEDULE_S5: CollegeScheduleDay[] = [
  {
    day: 'SENIN',
    dayNameId: 'Senin',
    courses: [
      {
        time: '18.30',
        courseName: 'Kecerdasan Buatan',
        room: 'FK501',
        lecturer: 'Nana',
        type: 'Kuliah Teori & Praktik'
      },
      {
        time: '20.00',
        courseName: 'VVPL (Verifikasi & Validasi Perangkat Lunak)',
        room: 'FK501',
        lecturer: 'YOGA',
        type: 'Software Testing'
      }
    ]
  },
  {
    day: 'SELASA',
    dayNameId: 'Selasa',
    courses: [
      {
        time: '20.00',
        courseName: 'Arsitek Enterprise',
        room: 'FB201',
        lecturer: 'Jai',
        type: 'Enterprise Architecture'
      }
    ]
  },
  {
    day: 'RABU',
    dayNameId: 'Rabu',
    courses: [
      {
        time: '18.30',
        courseName: 'Kapita Selekta',
        room: 'FB502',
        lecturer: 'Vanes',
        type: 'Special Topics'
      },
      {
        time: '20.00',
        courseName: 'PKPL (Penjaminan Kualitas Perangkat Lunak)',
        room: 'FB502',
        lecturer: 'BUDI',
        type: 'Software Quality Assurance'
      }
    ]
  },
  {
    day: 'KAMIS',
    dayNameId: 'Kamis',
    isRestDay: true,
    courses: []
  },
  {
    day: 'JUMAT',
    dayNameId: 'Jumat',
    courses: [
      {
        time: '20.00',
        courseName: 'Etika Profesi RPL',
        room: 'FB502',
        lecturer: 'ANDI',
        type: 'Professional Ethics'
      }
    ]
  },
  {
    day: 'SABTU',
    dayNameId: 'Sabtu',
    courses: [
      {
        time: '18.30',
        courseName: 'M.Program (Manajemen Program)',
        room: 'LAB SE',
        lecturer: 'Roso',
        type: 'Praktikum Lab'
      },
      {
        time: '20.00',
        courseName: 'PPPL (Praktikum Pemrograman Perangkat Lunak)',
        room: 'LAB SE',
        lecturer: 'JUMIRAN',
        type: 'Praktikum Coding'
      }
    ]
  }
];

export const COURSEWORK_DOCUMENTATIONS: CourseDocumentation[] = [
  {
    id: 'kecerdasan-buatan',
    code: 'KB-501',
    courseName: 'Kecerdasan Buatan (AI)',
    lecturer: 'Nana, M.Kom.',
    room: 'FK501',
    day: 'Senin',
    time: '18.30 WIB',
    semester: 'Semester 5',
    description: 'Studi fundamental Artificial Intelligence, representasi pengetahuan, algoritma pencarian (Search Algorithms), penalaran logika, serta implementasi dasar Machine Learning untuk klasifikasi data.',
    topicsCovered: [
      'Problem Solving with Search (A*, BFS, DFS)',
      'Knowledge Representation & Fuzzy Logic',
      'Machine Learning: Decision Trees & Naive Bayes',
      'Neural Networks & Computer Vision Basics'
    ],
    projectTitle: 'Smart Disease & Symptom Classification Model',
    projectDescription: 'Proyek eksperimen model klasifikasi data gejala medis berbasis algoritma machine learning (Decision Tree & K-Nearest Neighbors) memanfaatkan latar belakang farmasi klinis dan logika software.',
    demoType: 'ai-classifier',
    demoPreviewTitle: 'Live AI Classifier Playground',
    demoUrl: '#demo-ai',
    repoUrl: 'https://github.com/azzahraph8/ai-study-notes',
    techStack: ['Python', 'Scikit-Learn', 'NumPy', 'React UI']
  },
  {
    id: 'vvpl',
    code: 'VVPL-501',
    courseName: 'Verifikasi & Validasi Perangkat Lunak (VVPL)',
    lecturer: 'Yoga, M.Kom.',
    room: 'FK501',
    day: 'Senin',
    time: '20.00 WIB',
    semester: 'Semester 5',
    description: 'Prinsip-prinsip penjaminan bahwa sistem perangkat lunak dibangun sesuai spesifikasi (verifikasi) dan memenuhi kebutuhan pengguna akhir secara akurat (validasi).',
    topicsCovered: [
      'Unit Testing, Integration Testing, and System Testing',
      'Static Analysis & Code Reviews',
      'White-Box & Black-Box Testing Methodologies',
      'Automated Test Pipelines & CI Integration'
    ],
    projectTitle: 'Automated Test Suite for REST API Endpoints',
    projectDescription: 'Rangkaian pengujian otomatis untuk API otentikasi dan transaksi data menggunakan Jest & PHPUnit dengan cakupan code coverage > 90%.',
    demoType: 'unit-test-runner',
    demoPreviewTitle: 'Interactive Test Suite Runner Simulation',
    demoUrl: '#demo-vvpl',
    repoUrl: 'https://github.com/azzahraph8/vvpl-test-automation',
    techStack: ['PHPUnit', 'Jest', 'Postman', 'GitHub Actions']
  },
  {
    id: 'arsitek-enterprise',
    code: 'AE-201',
    courseName: 'Arsitek Enterprise (EA)',
    lecturer: 'Jai, M.Kom.',
    room: 'FB201',
    day: 'Selasa',
    time: '20.00 WIB',
    semester: 'Semester 5',
    description: 'Penyelarasan strategi bisnis organisasi dengan infrastruktur sistem informasi enterprise, kerangka kerja TOGAF, serta perancangan topologi aplikasi berdaya tahan tinggi.',
    topicsCovered: [
      'TOGAF Architecture Development Method (ADM)',
      'Business, Data, Application, and Technology Architectures',
      'Legacy System Modernization & Cloud Integration',
      'Enterprise Governance & Risk Management'
    ],
    projectTitle: 'Industrial Multi-Site Cloud Architecture Blueprint',
    projectDescription: 'Perancangan cetak biru sistem informasi manufaktur terpadu dengan menghubungkan operasional pabrik Arai Rubber Seal ke sistem cloud terpusat.',
    demoType: 'enterprise-arch',
    demoPreviewTitle: 'Enterprise Topology Explorer',
    demoUrl: '#demo-ae',
    repoUrl: 'https://github.com/azzahraph8/enterprise-architecture-blueprint',
    techStack: ['TOGAF Framework', 'PlantUML', 'Draw.io', 'Cloud Architecture']
  },
  {
    id: 'kapita-selekta',
    code: 'KS-502',
    courseName: 'Kapita Selekta',
    lecturer: 'Vanes, M.Kom.',
    room: 'FB502',
    day: 'Rabu',
    time: '18.30 WIB',
    semester: 'Semester 5',
    description: 'Pendalaman topik-topik mutakhir dalam teknologi informasi terkini, evolusi keamanan siber, tren microservices, arsitektur modern web, dan studi kasus industri kontemporer.',
    topicsCovered: [
      'Defensive Cybersecurity Trends in Web 3.0 & Cloud',
      'Microservices & Containerization Fundamentals',
      'Modern Edge Computing & Latency Optimization',
      'Case Studies: System Failures and Recovery Strategies'
    ],
    projectTitle: 'SOC Log Intelligence & Zero-Trust Security Report',
    projectDescription: 'Studi komparasi arsitektur keamanan siber Zero Trust vs perimeter keamanan tradisional pada arsitektur web modern.',
    demoType: 'security-audit',
    demoPreviewTitle: 'Security Intelligence Audit Report',
    demoUrl: '#demo-ks',
    repoUrl: 'https://github.com/azzahraph8/kapita-selekta-cybersec',
    techStack: ['Burp Suite', 'Wireshark', 'SOC Logs', 'Markdown Docs']
  },
  {
    id: 'pkpl',
    code: 'PKPL-502',
    courseName: 'Penjaminan Kualitas Perangkat Lunak (PKPL)',
    lecturer: 'Budi, M.Kom.',
    room: 'FB502',
    day: 'Rabu',
    time: '20.00 WIB',
    semester: 'Semester 5',
    description: 'Standarisasi mutu rekayasa perangkat lunak berdasarkan ISO/IEC 25010 (Software Quality Model), manajemen metrik kode, siklus perbaikan cacat (defect tracking), dan audit performa.',
    topicsCovered: [
      'ISO/IEC 25010 Quality Characteristics',
      'Defect Lifecycle & Severity Classification',
      'Performance Profiling & Load Testing',
      'Quality Metrics: Cyclomatic Complexity & Maintainability Index'
    ],
    projectTitle: 'Interactive QA Bug Tracking & Severity Matrix',
    projectDescription: 'Aplikasi manajemen pengujian kualitas perangkat lunak dengan kalkulator metrik kompleksitas siklomatik dan penandaan bug.',
    demoType: 'qa-tracker',
    demoPreviewTitle: 'Interactive QA Matrix & Bug Tracker',
    demoUrl: '#demo-pkpl',
    repoUrl: 'https://github.com/azzahraph8/pkpl-quality-suite',
    techStack: ['React', 'TypeScript', 'SonarQube Metrics', 'Lighthouse API']
  },
  {
    id: 'etika-prof-rpl',
    code: 'EPR-502',
    courseName: 'Etika Profesi Rekayasa Perangkat Lunak',
    lecturer: 'Andi, M.Kom.',
    room: 'FB502',
    day: 'Jumat',
    time: '20.00 WIB',
    semester: 'Semester 5',
    description: 'Etika keprofesian bidang rekayasa piranti lunak, perlindungan data pribadi (UU PDP), kepatuhan hak kekayaan intelektual (HAKI), lisensi open-source, dan tanggung jawab sosial insinyur software.',
    topicsCovered: [
      'ACM / IEEE-CS Software Engineering Code of Ethics',
      'Indonesian PDP (Personal Data Protection) Law Compliance',
      'Open Source Licensing (MIT, Apache, GPL, BSD)',
      'Whistleblowing & Responsible Vulnerability Disclosure'
    ],
    projectTitle: 'Developer Privacy & Open Source License Advisor',
    projectDescription: 'Kompilasi pedoman etika komputasi dan alat pengecek kompatibilitas lisensi pustaka pihak ketiga untuk proyek rekayasa perangkat lunak.',
    demoType: 'code-ethics',
    demoPreviewTitle: 'Interactive Ethics & License Matrix',
    demoUrl: '#demo-etika',
    repoUrl: 'https://github.com/azzahraph8/se-ethics-guidelines',
    techStack: ['Knowledge Base', 'Markdown', 'React', 'Legal Tech']
  },
  {
    id: 'm-program',
    code: 'MP-LAB',
    courseName: 'M.Program (Manajemen Program & Proyek)',
    lecturer: 'Roso, M.Kom.',
    room: 'LAB SE',
    day: 'Sabtu',
    time: '18.30 WIB',
    semester: 'Semester 5',
    description: 'Praktikum metodologi manajemen pengembangan program, perencanaan sprint Agile/Scrum, Work Breakdown Structure (WBS), alokasi sumber daya teknis, dan estimasi waktu rilis.',
    topicsCovered: [
      'Scrum Framework: Sprints, Epics, User Stories',
      'WBS, Critical Path Method (CPM), & Gantt Charts',
      'Risk Assessment & Mitigation Matrix',
      'Team Velocity & Burn-Down Chart Analysis'
    ],
    projectTitle: 'Sprint Velocity & Interactive Kanban Workspace',
    projectDescription: 'Papan manajemen sprint interaktif dengan pelacak efisiensi tim, visualisasi burn-down chart, dan estimasi beban kerja tugas.',
    demoType: 'kanban-board',
    demoPreviewTitle: 'Interactive Agile Kanban Board',
    demoUrl: '#demo-mprogram',
    repoUrl: 'https://github.com/azzahraph8/program-management-lab',
    techStack: ['React', 'Agile / Scrum', 'Local Storage DB', 'Tailwind']
  },
  {
    id: 'pppl',
    code: 'PPPL-LAB',
    courseName: 'PPPL (Praktikum Pemrograman Perangkat Lunak)',
    lecturer: 'Jumiran, M.Kom.',
    room: 'LAB SE',
    day: 'Sabtu',
    time: '20.00 WIB',
    semester: 'Semester 5',
    description: 'Praktikum laboratorium coding intensif untuk pengembangan aplikasi perangkat lunak berbasis arsitektur client-server modern, pemodelan data relasional, dan integrasi API aman.',
    topicsCovered: [
      'Full-Stack Architecture Patterns (MVC & Clean Architecture)',
      'Database Modeling & Query Optimization',
      'Secure Authentication with JWT & Session Tokens',
      'State Management & Reactive UI Components'
    ],
    projectTitle: 'Full-Stack Student Academic & Learning Documentation Hub',
    projectDescription: 'Aplikasi platform web akademik terintegrasi yang mendokumentasikan tugas, materi kuliah, praktikum lab, dan demo proyek interaktif.',
    demoType: 'fullstack-app',
    demoPreviewTitle: 'Live Full-Stack App Simulator',
    demoUrl: '#demo-pppl',
    repoUrl: 'https://github.com/azzahraph8/pppl-lab-projects',
    techStack: ['React 19', 'Laravel 11', 'Tailwind CSS', 'Vite', 'REST API']
  }
];

export const EDUCATION_LIST = [
  {
    institution: "Universitas Insan Pembangunan Indonesia",
    degree: "Bachelor of Technology - BTech, Software Engineering",
    period: "September 2024 - Agustus 2028 (Semester 5)",
    location: "Tangerang, Indonesia",
    details: "Fokus pada Rekayasa Perangkat Lunak, Struktur Data & Algoritma, Basis Data Relasional, Pemrograman Berorientasi Objek, Arsitektur Sistem Web, dan Dasar Keamanan Informasi.",
    tag: "Higher Education"
  },
  {
    institution: "SMKS Yarsi Medika",
    degree: "Farmasi Klinis (Clinical Pharmacy)",
    period: "2021 - 2024",
    location: "Tangerang, Indonesia",
    details: "Membentuk fondasi etos kerja yang teliti, presisi tinggi dalam penanganan data dan dosis, kepatuhan SOP ketat, serta kemampuan komunikasi interpersonal yang kini memperkaya ketajaman analisis dalam debugging dan administrasi IT.",
    tag: "High School Foundation"
  }
];

export const CERTIFICATIONS = [
  {
    name: "Wo-Men In Tech Cybersecurity (Defensive & Offensive)",
    issuer: "Wo-Men In Tech Security",
    year: "2026",
    badge: "SOC & Ethical Hacking",
    desc: "Menyelesaikan 7 latihan komprehensif pertahanan jaringan, Burp Suite, dan CTI."
  },
  {
    name: "ASEAN Data Science Explorer 2025",
    issuer: "ASEAN Foundation & SAP",
    year: "2025",
    badge: "Data Analytics",
    desc: "Pelatihan analisis data dan visualisasi statistik untuk pemecahan masalah sosial-ekonomi kawasan."
  },
  {
    name: "Japanese Language Proficiency Test (JLPT N5)",
    issuer: "Japan Foundation / JEES",
    year: "2024",
    badge: "Language",
    desc: "Sertifikasi kemahiran dasar Bahasa Jepang (Hiragana, Katakana, Kanji dasar, dan komunikasi harian)."
  },
  {
    name: "Latihan: Java & Pengenalan ke Logika Pemrograman 101",
    issuer: "Technical Training Academy",
    year: "2024",
    badge: "Programming Logic",
    desc: "Pemahaman algoritma dasar, struktur percabangan & perulangan, dan pemrograman berbasis objek Java."
  }
];
