// Portfolio button redirect
document.addEventListener('DOMContentLoaded', function() {
  const portfolioBtn = document.querySelector('.hero .btn');
  if (portfolioBtn) {
    portfolioBtn.addEventListener('click', function() {
      window.location.href = 'https://www.hpe.com/uk/en/solutions/ai-artificial-intelligence.html?utm_campaign=FY26_AI_GB_GD_EME_UK_Speed_Time_to_AI_Value&utm_medium=PS&utm_source=BNG&utm_content=521204045&plid=PSF26-00000988&ef_id=3a6b902f953c161688d8f9c6e2565c55:G:s&s_kwcid=AL!13472!10!81020383314350!!!!81020585941129!!603199217!1296325300471953&msclkid=3a6b902f953c161688d8f9c6e2565c55';
    });
  }

  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  const successMessage = document.getElementById('success-message');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Get form values
      const name = contactForm.querySelector('input[name="name"]').value.trim();
      const email = contactForm.querySelector('input[name="email"]').value.trim();
      const subject = contactForm.querySelector('input[name="subject"]').value.trim();
      const message = contactForm.querySelector('textarea[name="message"]').value.trim();

      // Validate fields
      if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
      }

      // Hide form and show success message
      contactForm.style.display = 'none';
      successMessage.style.display = 'block';

      // Reset form for future use
      contactForm.reset();

      // Optional: Show form again after 5 seconds
      setTimeout(() => {
        contactForm.style.display = 'flex';
        successMessage.style.display = 'none';
      }, 5000);
    });
  }

  // Hamburger menu toggle
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // Header scroll effect
  let lastScrollY = 0;
  const header = document.querySelector('header');

  window.addEventListener('scroll', function() {
    lastScrollY = window.scrollY;
    if (lastScrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});
