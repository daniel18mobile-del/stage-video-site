(function () {
  var colors = ['#2f8fff', '#1f6fe0', '#32c759', '#2aa84a', '#ff5b3d', '#e0432a', '#ff9500', '#af52de'];
  var noteNames = ['N24', 'N28', 'N31', 'N36', 'N40', 'N43', 'N48', 'CC7', 'CC11', 'PC3'];
  var grid = document.getElementById('hero-grid');
  if (!grid) return;

  function code() {
    var n = noteNames[Math.floor(Math.random() * noteNames.length)];
    var ch = 1 + Math.floor(Math.random() * 4);
    return n + '@' + ch;
  }

  function fill() {
    var cols = Math.max(6, Math.ceil(grid.clientWidth / 86));
    var rows = Math.max(6, Math.ceil(grid.clientHeight / 86));
    var count = cols * rows;
    if (grid.childElementCount === count) return;
    grid.innerHTML = '';
    for (var i = 0; i < count; i++) {
      var tile = document.createElement('div');
      tile.className = 'hero-tile';
      tile.style.background = colors[Math.floor(Math.random() * colors.length)];
      tile.style.opacity = String(0.5 + Math.random() * 0.35);
      var label = document.createElement('span');
      label.className = 'hero-tile__code';
      label.textContent = code();
      tile.appendChild(label);
      tile.addEventListener('mouseenter', function () { this.dataset.hover = '1'; });
      tile.addEventListener('mouseleave', function () { this.dataset.hover = '0'; });
      grid.appendChild(tile);
    }
  }

  fill();
  window.addEventListener('resize', fill);
})();
