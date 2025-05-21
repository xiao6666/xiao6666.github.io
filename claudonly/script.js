// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');

  mobileMenuBtn.addEventListener('click', function () {
    mobileNav.classList.toggle('active');

    // Change icon based on menu state
    const icon = mobileMenuBtn.querySelector('i');
    if (mobileNav.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });

  // Close mobile menu when a link is clicked
  const mobileLinks = mobileNav.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function () {
      mobileNav.classList.remove('active');
      const icon = mobileMenuBtn.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function (event) {
    if (!mobileMenuBtn.contains(event.target) && !mobileNav.contains(event.target)) {
      mobileNav.classList.remove('active');
      const icon = mobileMenuBtn.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');

    // Handle the case when the href is just "#"
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Account for fixed header
        behavior: 'smooth'
      });
    }
  });
});

// Add animation on scroll for products
const observeElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.product-card').forEach(card => {
    observer.observe(card);
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  // Add a CSS class for the animation
  const style = document.createElement('style');
  style.textContent = `
      .fade-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
      }
  `;
  document.head.append(style);
};

// Run the animation function when the page is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', observeElements);
} else {
  observeElements();
}