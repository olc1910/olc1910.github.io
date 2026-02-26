/* ─────────────────────────────────────────
   olcrossley.uk — main.js
   ───────────────────────────────────────── */

(function () {
  'use strict';

  /* ── Ambient parallax ─────────────────── */
  const ambA = document.querySelector('.ambient-a');
  const ambB = document.querySelector('.ambient-b');
  if (ambA && ambB) {
    document.addEventListener('mousemove', e => {
      const x = (e.clientX / window.innerWidth  - 0.5) * 50;
      const y = (e.clientY / window.innerHeight - 0.5) * 50;
      ambA.style.transform = `translate(${x}px, ${y}px)`;
      ambB.style.transform = `translate(${-x * 0.6}px, ${-y * 0.6}px)`;
    });
  }

  /* ── Scroll reveal ────────────────────── */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -36px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  /* ── Nav active link ──────────────────── */
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    const isHome = (href === 'index.html' || href === '../index.html' || href === '/');
    const isActive =
      (href === path) ||
      (path.endsWith(href)) ||
      (isHome && (path === '/' || path.endsWith('index.html')));
    if (isActive) a.classList.add('active');
  });

})();
