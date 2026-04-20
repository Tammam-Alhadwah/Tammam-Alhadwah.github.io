/* =================================================================
   Tammam Alhadwah portfolio — minimal JS
   - Year stamp
   - Reveal-on-scroll (IntersectionObserver)
   - Small parallax nudge on the hero title (mouse-follow)
   ================================================================= */

(() => {
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---- Year ---- */
  const y = $('#year');
  if (y) y.textContent = new Date().getFullYear();

  /* ---- Reveal on scroll ---- */
  const revealTargets = [
    '.hero__meta',
    '.hero__title',
    '.hero__intro',
    '.hero__cta',
    '.section-head',
    '.currently__grid > *',
    '.project',
    '.about__col',
    '.contact__lede',
    '.contact__links li',
  ];

  const toReveal = revealTargets.flatMap(sel => $$(sel));
  toReveal.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${Math.min(i, 8) * 40}ms`;
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });

  toReveal.forEach(el => io.observe(el));

  /* ---- Hero subtle mouse-follow ---- */
  const title = $('.hero__title');
  const italic = $('.hero__line--italic');
  if (title && italic && window.matchMedia('(pointer: fine)').matches) {
    let rx = 0, ry = 0, tx = 0, ty = 0;
    let rafId = null;

    title.addEventListener('mousemove', (e) => {
      const rect = title.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      tx = (e.clientX - cx) / rect.width  * 8;
      ty = (e.clientY - cy) / rect.height * 6;
      if (!rafId) rafId = requestAnimationFrame(step);
    });
    title.addEventListener('mouseleave', () => {
      tx = 0; ty = 0;
      if (!rafId) rafId = requestAnimationFrame(step);
    });

    function step() {
      rx += (tx - rx) * 0.1;
      ry += (ty - ry) * 0.1;
      italic.style.transform = `translate(${rx.toFixed(2)}px, ${ry.toFixed(2)}px)`;
      if (Math.abs(tx - rx) > 0.05 || Math.abs(ty - ry) > 0.05) {
        rafId = requestAnimationFrame(step);
      } else {
        rafId = null;
      }
    }
  }

  /* ---- Smooth-anchor offset for sticky header ---- */
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top, behavior: 'smooth' });
      history.replaceState(null, '', `#${id}`);
    });
  });
})();
