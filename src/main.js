
(() => {
  const mobileMenu = document.querySelector('.mobile-menu');
  const openMenuBtn = document.querySelector('.header-btn-menu');
  const closeMenuBtn = document.querySelector('.mobile-menu-close-btn');
  const closeMenuLink = document.querySelectorAll('.mobile-menu-navi-item-link');
  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };
  closeMenuLink.forEach(item => item.addEventListener('click', toggleMenu));
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });

  // Кнопка скролу догори
  const animateScrollTop = () => {
    const distance = document.documentElement.scrollTop || document.body.scrollTop;
    if (distance > 0) {
      window.requestAnimationFrame(animateScrollTop);
      window.scrollTo(0, distance - distance / 8);
    }
  };

  const backToTopBtn = document.querySelector('.back-to-top');
  backToTopBtn.addEventListener('click', animateScrollTop);

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 350) {
      backToTopBtn.classList.add('active');
    } else {
      backToTopBtn.classList.remove('active');
    }
  });
})();