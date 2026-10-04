import React from 'react';

interface MarqueeItem {
  icon?: string;
  label: string;
  category?: string;
}

const MARQUEE_ITEMS: MarqueeItem[] = [
  { icon: '⚛️', label: 'React.js', category: 'Frontend' },
  { icon: '🔥', label: 'Laravel (PHP)', category: 'Backend' },
  { icon: '🛡️', label: 'Burp Suite', category: 'Security' },
  { icon: '🏢', label: 'PT Arai Rubber Seal', category: 'Industrial' },
  { icon: '🐬', label: 'MySQL Relational', category: 'Database' },
  { icon: '🌐', label: 'Multi-Domain DNS', category: 'Infrastruktur' },
  { icon: '🎨', label: 'Tailwind CSS', category: 'UI/UX' },
  { icon: '🚨', label: 'SOC Operations', category: 'Cyber Sec' },
  { icon: '📊', label: 'Google Tag Manager', category: 'Analytics' },
  { icon: '🦈', label: 'Wireshark Packet', category: 'Security' },
  { icon: '⚡', label: 'RESTful API', category: 'Backend' },
  { icon: '💊', label: 'Farmasi Klinis', category: 'Healthcare' },
  { icon: '🔒', label: 'OWASP Top 10', category: 'Security' },
  { icon: '🎌', label: 'JLPT N5 Japanese', category: 'Language' },
];

export const InfiniteMarquee: React.FC = () => {
  // Duplicate array 3 times for a seamless infinite loop
  const triplicated = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="relative w-full overflow-hidden py-4 border-y border-slate-200/80 dark:border-neutral-800/80 bg-slate-100/50 dark:bg-neutral-900/40 my-6">
      {/* Side gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10 pointer-events-none bg-gradient-to-r from-slate-50 dark:from-[#0c0f17] to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10 pointer-events-none bg-gradient-to-l from-slate-50 dark:from-[#0c0f17] to-transparent" />

      {/* Marquee Track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-4 sm:gap-6 items-center">
        {triplicated.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-neutral-800/90 border border-slate-200/80 dark:border-neutral-700/80 shadow-2xs text-xs font-semibold text-slate-800 dark:text-neutral-200 hover:border-rose-400 dark:hover:border-rose-500 hover:text-rose-600 dark:hover:text-rose-400 transition-all select-none cursor-default group"
          >
            <span className="text-sm group-hover:scale-110 transition-transform">
              {item.icon}
            </span>
            <span className="whitespace-nowrap">{item.label}</span>
            {item.category && (
              <span className="text-[10px] font-medium text-slate-400 dark:text-neutral-500">
                · {item.category}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
