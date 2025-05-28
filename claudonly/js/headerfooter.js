// headerfooter.js - Reusable header and footer components

function getHeader() {
  return `
    <header>
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <a href="index.html">
              <img src="img/ms-logo-text.jpg" alt="Maison Sanctum Logo" class="logo-image">
            </a>
          </div>
          <nav class="desktop-nav">
            <a href="index.html#catalog">Catalog</a>
            <a href="hardware.html">Hardware</a>
            <a href="price-matching.html">Price Matching</a>
            <a href="index.html#how-it-works">How It Works</a>
            <a href="index.html#why-us">Why Us</a>
            <a href="index.html#about-us">About Us</a>
            <a href="index.html#contact">Contact</a>
          </nav>
          <button class="mobile-menu-btn" id="mobile-menu-btn">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>
      <nav class="mobile-nav" id="mobile-nav">
        <a href="index.html#catalog">Catalog</a>
        <a href="hardware.html">Hardware</a>
        <a href="price-matching.html">Price Matching</a>
        <a href="index.html#how-it-works">How It Works</a>
        <a href="index.html#why-us">Why Us</a>
        <a href="index.html#about-us">About Us</a>
        <a href="index.html#contact">Contact</a>
      </nav>
    </header>
  `;
}

function getFooter() {
  return `
    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="footer-column">
            <h3>Maison Sanctum</h3>
            <p>Crafting luxury window treatments for discerning clients since 2010.</p>
            <div class="social-icons">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-pinterest-p"></i></a>
            </div>
          </div>

          <div class="footer-column">
            <h3>Shop</h3>
            <ul>
              <li><a href="index.html#catalog">Catalog</a></li>
              <li><a href="hardware.html">Hardware</a></li>
              <li><a href="#">Custom Orders</a></li>
              <li><a href="price-matching.html">Price Matching</a></li>
              <li><a href="#">Installation Services</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="index.html#about-us">About Us</a></li>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Sustainability</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h3>Support</h3>
            <ul>
              <li><a href="index.html#contact">Contact Us</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">Care Instructions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2025 Maison Sanctum. All rights reserved.</p>
          <ul class="footer-links">
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Cookies</a></li>
          </ul>
        </div>
      </div>
    </footer>
  `;
}

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  // Insert header
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    headerPlaceholder.innerHTML = getHeader();
  }

  // Insert footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = getFooter();
  }

  // Initialize mobile menu
  initializeMobileMenu();
});

// Mobile menu functionality
function initializeMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');

  if (mobileMenuBtn && mobileNav) {
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
  }
}