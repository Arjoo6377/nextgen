// Event Wi-Fi pages — small progressive enhancement (no dependencies).
(function () {
  'use strict';

  // Filter buttons on event-projects.php: show/hide roster chips by category.
  var bar = document.querySelector('[data-filter-bar]');
  var chips = document.querySelectorAll('.roster .chip[data-cat]');
  if (bar && chips.length) {
    var counter = document.querySelector('[data-roster-count]');
    var apply = function (cat) {
      var shown = 0;
      chips.forEach(function (chip) {
        var match = cat === 'all' || chip.getAttribute('data-cat') === cat;
        chip.classList.toggle('is-hidden', !match);
        if (match) shown++;
      });
      if (counter) counter.textContent = shown + (shown === 1 ? ' event / client shown' : ' events / clients shown');
    };
    bar.addEventListener('click', function (e) {
      var btn = e.target.closest('.filter-btn');
      if (!btn) return;
      bar.querySelectorAll('.filter-btn').forEach(function (b) {
        b.classList.toggle('is-active', b === btn);
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });
      apply(btn.getAttribute('data-cat'));
    });
    apply('all');
  }
})();
