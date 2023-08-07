// Smooth Scroll with Easing

const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    easing: 'easeInOutCubic'
  });
  
  // Mobile Menu 
  
  const menuBtn = document.querySelector('#menu-btn');
  const menu = document.querySelector('#mobile-menu');
  
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
  
  menuBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      menu.classList.toggle('open');
    } 
  })
  
  menu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      menu.classList.remove('open');
    }
  })
  
  
  // Contact Form
  
  const contactForm = document.querySelector('#contact-form');
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const msgInput = document.querySelector('#message');
  
  contactForm.addEventListener('submit', handleSubmit);
  
  function handleSubmit(e) {
    e.preventDefault();
    
    let name = nameInput.value;
    let email = emailInput.value;
    let msg = msgInput.value;
    
    // Client-side validation
  
    if (name && email && msg) {
      // POST request with Formspree API
      contactForm.reset();
      
      // Update DOM
    } else {
      // Show error message in DOM
    }
  
  }
  
  // Other Functionality
  
  AOS.init(); // Animate on scroll 
  
  const header = document.querySelector('header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 200) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  })
  
  // Save theme preference
  
  const savedTheme = localStorage.getItem('theme');
  
  // Check for saved preference
  
  // Set theme