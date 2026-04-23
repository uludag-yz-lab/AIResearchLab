/* ═══════════════════════════════════════════════════════════════
   Shell — Ortak nav enjeksiyonu + dil sistemi
   ─────────────────────────────────────────────────────────────
   Her sayfada bu script'ten ÖNCE window.SITE_BASE tanımla:

     Ana sayfa  : <script>window.SITE_BASE = '';</script>
     Alt sayfa  : <script>window.SITE_BASE = '../../';</script>

   Dil değişiminde sayfa-özel işlem yapılacaksa:
     window._onLangChange = function(lang) { ... };
   ═══════════════════════════════════════════════════════════════ */
;(function () {

  var bp   = (typeof window.SITE_BASE !== 'undefined') ? window.SITE_BASE : '';
  var root = (bp === '');

  /* ── Nav linki yardımcıları ─────────────────────────────── */
  function href(anchor) {
    return root ? anchor : bp + 'index.html' + anchor;
  }
  function li(anchor, key, label) {
    return '<li><a href="' + href(anchor) + '" data-i18n="' + key + '">' + label + '</a></li>';
  }
  function mob(anchor, key, label) {
    return '<a href="' + href(anchor) + '" onclick="closeMobile()" data-i18n="' + key + '">' + label + '</a>';
  }

  /* ── Nav HTML ───────────────────────────────────────────── */
  var navHTML = [
    '<nav id="mainNav">',
    '  <a class="nav-brand" href="' + (bp || '#') + '">',
    '    <img src="' + bp + 'images/buu_logo.png" alt="Uludag Logo" width="46" height="auto">',
    '    <span class="nav-name">AI Research Lab</span>',
    '  </a>',
    '  <div class="nav-right">',
    '    <ul class="nav-links" id="navLinks">',
    li('#news',         'nav.news',         'News'),
    li('#research',     'nav.research',     'Research'),
    li('#projects',     'nav.projects',     'Projects'),
    li('#publications', 'nav.publications', 'Publications'),
    li('#people',       'nav.people',       'People'),
    li('#contact',      'nav.contact',      'Contact'),
    '    </ul>',
    '    <div class="lang-switch">',
    '      <button class="lang-btn" id="btnEN" onclick="setLang(\'en\')">EN</button>',
    '      <button class="lang-btn" id="btnTR" onclick="setLang(\'tr\')">TR</button>',
    '    </div>',
    '    <button class="hamburger" id="hamburger" aria-label="Toggle navigation" aria-expanded="false">',
    '      <span></span><span></span><span></span>',
    '    </button>',
    '  </div>',
    '</nav>',
    '<div class="mobile-menu" id="mobileMenu">',
    mob('#news',         'nav.news',         'News'),
    mob('#research',     'nav.research',     'Research'),
    mob('#projects',     'nav.projects',     'Projects'),
    mob('#publications', 'nav.publications', 'Publications'),
    mob('#people',       'nav.people',       'People'),
    mob('#contact',      'nav.contact',      'Contact'),
    '  <div class="mobile-lang-row">',
    '    <button class="lang-btn" id="mobileBtnEN" onclick="setLang(\'en\')">EN</button>',
    '    <button class="lang-btn" id="mobileBtnTR" onclick="setLang(\'tr\')">TR</button>',
    '  </div>',
    '</div>',
  ].join('\n');

  /* ── Nav'ı script tag'ından hemen sonraya enjekte et ───── */
  document.currentScript.insertAdjacentHTML('afterend', navHTML);

  /* ── Footer (alt sayfalarda otomatik) ───────────────────── */
  if (!root) {
    document.addEventListener('DOMContentLoaded', function () {
      var f = document.createElement('div');
      f.className = 'site-footer-bar';
      f.innerHTML = '<a href="' + bp + 'index.html">AI Research Lab</a> — Bursa Uludağ University';
      document.body.appendChild(f);
    });
  }

  /* ── Dil sistemi ────────────────────────────────────────── */
  window.currentLang = localStorage.getItem('lang') || 'en';

  window.setLang = function (lang) {
    window.currentLang = lang;
    localStorage.setItem('lang', lang);

    var dict = (typeof i18nData !== 'undefined') ? i18nData[lang] : {};
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.documentElement.lang = lang;

    /* Aktif dil butonunu güncelle */
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var isEN = btn.id === 'btnEN' || btn.id === 'mobileBtnEN';
      btn.classList.toggle('active', (lang === 'en' && isEN) || (lang === 'tr' && !isEN));
    });

    /* Sayfa-özel dil kancası (index.html renderNews/renderPeople için) */
    if (typeof window._onLangChange === 'function') window._onLangChange(lang);
  };

  /* ── Hamburger + nav scroll ─────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    var hamburger  = document.getElementById('hamburger');
    var mobileMenu = document.getElementById('mobileMenu');
    var nav        = document.getElementById('mainNav');

    hamburger.addEventListener('click', function () {
      var open = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', String(open));
    });

    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });

    /* Aktif nav link vurgulama — sadece ana sayfada (sections var) */
    if (root) {
      var anchors  = document.querySelectorAll('.nav-links a');
      var sections = document.querySelectorAll('section[id]');
      window.addEventListener('scroll', function () {
        var current = '';
        sections.forEach(function (s) {
          if (window.scrollY >= s.offsetTop - 90) current = s.id;
        });
        anchors.forEach(function (a) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + current);
        });
      }, { passive: true });
    }
  });

  /* ── closeMobile (mobile-menu linklerinden çağrılır) ────── */
  window.closeMobile = function () {
    document.getElementById('mobileMenu').classList.remove('open');
    var h = document.getElementById('hamburger');
    h.classList.remove('open');
    h.setAttribute('aria-expanded', 'false');
  };

})();
