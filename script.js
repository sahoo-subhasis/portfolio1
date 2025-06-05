// script.js - Portfolio Website

// Smooth scroll animation for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Scroll fade-in animation
const fadeInElements = document.querySelectorAll('.fade-in');
const slideUpElements = document.querySelectorAll('.slide-up');

function animateOnScroll(elements, className) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach(el => observer.observe(el));
}

animateOnScroll(fadeInElements, 'fade-in-visible');
animateOnScroll(slideUpElements, 'slide-up-visible');

// Contact form submission (Dummy, requires backend for real use)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const successMessage = document.getElementById('form-success');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Simulate a successful message submission
      successMessage.style.display = 'block';
      form.reset();

      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 4000);
    });
  }
});
