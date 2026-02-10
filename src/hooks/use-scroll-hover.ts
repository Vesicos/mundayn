import { useEffect } from 'react';

/**
 * On mobile (≤640px), observes all elements with [data-scroll-hover]
 * and adds .scroll-active when the element's center is near the viewport center.
 * This replaces hover effects on touch devices.
 */
export function useScrollHover() {
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    if (!mq.matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-active');
          } else {
            entry.target.classList.remove('scroll-active');
          }
        });
      },
      {
        // Element must be within the middle 40% of the viewport to activate
        rootMargin: '-30% 0px -30% 0px',
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll('[data-scroll-hover]');
    elements.forEach((el) => observer.observe(el));

    // Re-observe on DOM changes (for dynamically rendered content)
    const mutationObserver = new MutationObserver(() => {
      const newElements = document.querySelectorAll('[data-scroll-hover]');
      newElements.forEach((el) => {
        if (!el.classList.contains('scroll-observed')) {
          el.classList.add('scroll-observed');
          observer.observe(el);
        }
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
