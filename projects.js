/* ═══════════════════════════════════════════════════════════════
   Proje verisi — yeni proje eklemek için sadece bu dosyayı düzenle.

   Her proje için projects/{id}/content.html fragmanı oluşturulmalı.
   Kart tıklanınca o dosya ana sayfaya yüklenir (nav/footer tekrarı yok).

   Alan açıklamaları:
     id         → projects/{id}/content.html adresini işaret eder
     year       → Proje yılı
     type       → { en: "...", tr: "..." }  — Kart türü etiketi
     badge      → Kart üst rozeti (örn. "TÜBİTAK"), "" = rozetsiz
     gradient   → Kart arka plan CSS gradyanı
     badgeStyle → Rozet renk stilleri
     emoji      → Kart arka plan ikonografisi
     en / tr    → { title: "...", desc: "..." }  — Başlık ve açıklama
   ═══════════════════════════════════════════════════════════════ */
var projectsData = [

  /* ── Yeni proje eklemek için bu bloğu kopyala ve düzenle ───
  {
    id:         "proje-klasor-adi",
    year:       2025,
    type:       { en: "Research Project", tr: "Araştırma Projesi" },
    badge:      "TÜBİTAK",
    gradient:   "linear-gradient(135deg,#0d1b2a,#1a3a5c)",
    badgeStyle: "background:rgba(0,184,156,0.2);color:#00b89c;border:1px solid rgba(0,184,156,0.35)",
    emoji:      "🔬",
    en: { title: "Project Title", desc: "Short description." },
    tr: { title: "Proje Başlığı", desc: "Kısa açıklama." }
  },
  ── */

  {
    id:         "tubitak3501",
    year:       2023,
    type:       { en: "Research Project", tr: "Araştırma Projesi" },
    badge:      "TÜBİTAK 3501",
    gradient:   "linear-gradient(135deg,#0d1b2a,#162032)",
    badgeStyle: "background:rgba(0,184,156,0.2);color:#00b89c;border:1px solid rgba(0,184,156,0.35)",
    emoji:      "🔬",
    en: {
      title: "AI-based Interference Detection in Heterogeneous Cellular Networks",
      desc:  "TÜBİTAK 3501 funded project on AI-driven interference detection methods for heterogeneous cellular network environments."
    },
    tr: {
      title: "Heterojen Hücresel Ağlarda Yapay Zeka Tabanlı Girişim Tespiti",
      desc:  "TÜBİTAK 3501 destekli proje: heterojen hücresel ağ ortamları için yapay zeka tabanlı girişim tespit yöntemleri."
    }
  } 

];
