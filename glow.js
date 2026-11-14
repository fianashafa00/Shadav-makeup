(function () {
  const MIN = 160, MAX = 320; // ukuran lingkaran (px)
  const rand = (a, b) => a + Math.random() * (b - a);

  function build(section) {
    let layer = section.querySelector(':scope > .glow-layer');
    if (!layer) {
      layer = document.createElement('div');
      layer.className = 'glow-layer';
      layer.setAttribute('aria-hidden', 'true');
      section.prepend(layer);
    }
    layer.innerHTML = '';

    const w = section.clientWidth;
    const h = section.clientHeight;
    const count = Math.max(2, Math.min(8, Math.round((w * h) / 180000)));

    for (let i = 0; i < count; i++) {
      const size = Math.min(rand(MIN, MAX), h * 0.9, w * 0.9);
      const g = document.createElement('span');
      g.className = 'glow';
      g.style.width = g.style.height = size + 'px';
      g.style.left = rand(0, w - size) + 'px';
      g.style.top = rand(0, h - size) + 'px';
      g.style.animationDuration = rand(7, 12) + 's';
      g.style.animationDelay = '-' + rand(0, 10) + 's';
      layer.appendChild(g);
    }
  }

  function buildAll() {
    document.querySelectorAll('.has-glow').forEach(build);
  }

  let lastWidth = window.innerWidth;
  let timer;

  window.addEventListener('load', buildAll);
  window.addEventListener('resize', () => {
    if (window.innerWidth === lastWidth) return; // abaikan resize vertikal (address bar HP)
    lastWidth = window.innerWidth;
    clearTimeout(timer);
    timer = setTimeout(buildAll, 250);
  });
})();