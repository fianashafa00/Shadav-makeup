(function () {
  const tabs = document.querySelectorAll('.service-tabs [role="tab"]');
  const panels = document.querySelectorAll('.service-panel');
  const ids = Array.from(panels).map((p) => p.id);

  function show(id) {
    tabs.forEach((t) => {
      const on = t.dataset.target === id;
      t.classList.toggle('active', on);
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
    });
    panels.forEach((p) => { p.hidden = p.id !== id; });
  }

  tabs.forEach((t, i) => {
    t.addEventListener('click', () => {
      show(t.dataset.target);
      history.replaceState(null, '', '#' + t.dataset.target);
    });

    t.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      const step = e.key === 'ArrowRight' ? 1 : tabs.length - 1;
      const next = tabs[(i + step) % tabs.length];
      next.focus();
      next.click();
    });
  });

  const initial = location.hash.slice(1);
  show(ids.includes(initial) ? initial : ids[0]);
})();