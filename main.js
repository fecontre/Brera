// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Fade-up observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.stat, .about__layout, .cat-card, .process__step, .brand-logo, .cta__text, .cta__form, .section__header'
).forEach((el, i) => {
  el.classList.add('fade-up');
  el.style.transitionDelay = `${(i % 6) * 0.07}s`;
  observer.observe(el);
});

// Mobile burger
const burger = document.getElementById('burger');
burger?.addEventListener('click', () => {
  const links = document.querySelector('.nav__links');
  const isOpen = links.style.display === 'flex';
  links.style.cssText = isOpen
    ? ''
    : 'display:flex;flex-direction:column;position:fixed;top:var(--nav-h);left:0;right:0;background:rgba(255,255,255,0.97);backdrop-filter:blur(20px);padding:24px 32px;gap:20px;border-bottom:1px solid rgba(90,79,255,0.1);box-shadow:0 8px 32px rgba(90,79,255,0.08);';
});

// Form submit — loading state while Formsubmit procesa el envío
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Enviando...';
  btn.disabled = true;
});
