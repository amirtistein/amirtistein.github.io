document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      const bars = hamburger.querySelectorAll('span');
      hamburger.classList.toggle('active');
      if (hamburger.classList.contains('active')) {
        bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        bars[0].style.transform = '';
        bars[1].style.opacity = '';
        bars[2].style.transform = '';
      }
    });
  }

  // Close mobile nav when a link is clicked
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      if (hamburger) {
        hamburger.classList.remove('active');
        const bars = hamburger.querySelectorAll('span');
        bars[0].style.transform = '';
        bars[1].style.opacity = '';
        bars[2].style.transform = '';
      }
    });
  });

  // Nav shadow on scroll
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      nav.style.boxShadow = '0 1px 8px rgba(0,0,0,0.06)';
    } else {
      nav.style.boxShadow = 'none';
    }
  });
});
