// SMOOTH SCROLL SIMPLE + ACCESSIBLE
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const scrollBehavior = prefersReducedMotion.matches ? 'auto' : 'smooth';

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (!href || href === '#') return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: scrollBehavior,
      block: 'start'
    });
  });
});

// MENU : SURBRILLANCE DU LIEN ACTIF (simple)
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

function onScroll() {
  let currentId = null;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom >= 120) {
      currentId = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    link.removeAttribute('aria-current');
    if (currentId && link.getAttribute('href') === '#' + currentId) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);
