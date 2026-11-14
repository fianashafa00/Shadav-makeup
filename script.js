(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  const dd = document.querySelector('.has-dropdown');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
  }

  // Mobile: ketuk Services untuk buka/tutup submenu
  if (dd) {
    dd.querySelector(':scope > a').addEventListener('click', (e) => {
      if (window.innerWidth <= 860) {
        e.preventDefault();
        dd.classList.toggle('open');
      }
    });
  }

  // Tahun footer otomatis
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();