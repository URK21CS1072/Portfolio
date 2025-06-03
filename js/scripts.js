// Smooth scrolling using jQuery easing
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  

  
  // Dark mode toggle
  document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const icon = this.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('.navbar .logo a');
    const namePlaceholder = document.getElementById('name-placeholder');
    const aboutSection = document.getElementById('about');
    let isAnimated = false;
    const initialPosition = nameElement.getBoundingClientRect();
  
    window.addEventListener('scroll', function() {
      const aboutSectionTop = aboutSection.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY || window.pageYOffset;
  
      if (aboutSectionTop < viewportHeight / 2 && !isAnimated) {
        isAnimated = true;
        nameElement.classList.add('fixed');
      }
  
      if (isAnimated) {
        const progress = (viewportHeight / 2 - aboutSectionTop) / viewportHeight;
        const namePlaceholderPosition = namePlaceholder.getBoundingClientRect();
        
        nameElement.style.top = `${initialPosition.top + progress * (namePlaceholderPosition.top - initialPosition.top)}px`;
        nameElement.style.left = `${initialPosition.left + progress * (namePlaceholderPosition.left - initialPosition.left)}px`;
      }
  
      if (aboutSectionTop >= viewportHeight / 2 && isAnimated) {
        isAnimated = false;
        nameElement.classList.remove('fixed', 'hide');
        nameElement.style.top = '';
        nameElement.style.left = '';
        namePlaceholder.style.opacity = 0;
        namePlaceholder.textContent = '';
      }
    });
  });
  
  