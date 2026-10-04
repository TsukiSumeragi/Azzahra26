import { useState, useEffect, useRef } from 'react';

/**
 * High-performance ScrollSpy Hook adhering to SQA Standards:
 * - requestAnimationFrame scroll throttling to eliminate scroll jank/lag (60fps/120fps smooth).
 * - Stable reference caching for sectionIds array to prevent listener churn.
 * - Selective state & history updates only when activeId genuinely changes.
 */
export function useScrollSpy(sectionIds: string[], offset = 140): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] || 'beranda');
  const activeIdRef = useRef<string>(sectionIds[0] || 'beranda');
  const sectionIdsKey = sectionIds.join(',');

  useEffect(() => {
    let ticking = false;

    const calculateActiveSection = () => {
      const scrollY = window.scrollY;

      // Top of page safeguard
      if (scrollY < 100) {
        if (activeIdRef.current !== 'beranda') {
          activeIdRef.current = 'beranda';
          setActiveId('beranda');
          if (window.location.hash && window.location.hash !== '#beranda') {
            window.history.replaceState(null, '', window.location.pathname);
          }
        }
        ticking = false;
        return;
      }

      // Bottom of page detection
      const isNearBottom =
        window.innerHeight + scrollY >= document.body.offsetHeight - 120;
      if (isNearBottom) {
        const lastId = sectionIds[sectionIds.length - 1];
        if (activeIdRef.current !== lastId) {
          activeIdRef.current = lastId;
          setActiveId(lastId);
          window.history.replaceState(null, '', `#${lastId}`);
        }
        ticking = false;
        return;
      }

      const scrollPosition = scrollY + offset;
      let newActiveId = activeIdRef.current;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            newActiveId = id;
            break;
          }
        }
      }

      if (newActiveId !== activeIdRef.current) {
        activeIdRef.current = newActiveId;
        setActiveId(newActiveId);
        if (newActiveId === 'beranda') {
          window.history.replaceState(null, '', window.location.pathname);
        } else {
          window.history.replaceState(null, '', `#${newActiveId}`);
        }
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(calculateActiveSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial run
    calculateActiveSection();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIdsKey, offset]);

  return activeId;
}
