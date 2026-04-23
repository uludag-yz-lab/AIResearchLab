/* ═══════════════════════════════════════════════════════════════
   Ekip verisi — kişi eklemek/düzenlemek için sadece bu dosyayı düzenle.

   Her kişi için:
     name     → Ad Soyad
     role     → { en: "...", tr: "..." }  — Unvan/görev
     initials → Fotoğraf yokken gösterilecek harfler (örn. "RB")
     color    → Harf avatar arka plan rengi (fotoğraf varsa kullanılmaz)
     photo    → Fotoğraf varsa "images/people/dosya.jpg", yoksa null
     linkedin → "https://linkedin.com/in/..." veya null
     scholar  → "https://scholar.google.com/citations?user=..." veya null
     email    → "ornek@uludag.edu.tr" veya null
     bio      → { en: "...", tr: "..." }  — Kısa biyografi, boş bırakılabilir
   ═══════════════════════════════════════════════════════════════ */

var peopleData = {

  /* ── Araştırma Grubu Lideri ───────────────────────────────── */
  pi: [
    {
      name:     "Murtaza Cicioğlu",
      role:     { en: "Assoc. Professor", tr: "Doçent" },
      initials: "MC",
      color:    "#0d1b2a",
      photo:    null,
      linkedin: null,
      scholar:  null,
      email:    null,
      bio: {
        en: "Associate Professor at the Dept. of Computer Engineering, Bursa Uludağ University. Research interests include machine learning, wireless networks, and MLOps.",
        tr: "Bursa Uludağ Üniversitesi Bilgisayar Mühendisliği Bölümü öğretim üyesi. Araştırma ilgi alanları makine öğrenmesi, kablosuz ağlar ve MLOps'tur."
      }
    }
  ],

  /* ── Doktora Öğrencileri ──────────────────────────────────── */
  phd: [
    {
      name:     "Ramazan Bozkır",
      role:     { en: "PhD Student", tr: "Doktora Öğrencisi" },
      initials: "RB",
      color:    "#1a73e8",
      photo:    null,
      linkedin: null,
      scholar:  null,
      email:    null,
      bio:      { en: "", tr: "" }
    },
    {
      name:     "Gizem Kıymet Sancaktar",
      role:     { en: "PhD Student", tr: "Doktora Öğrencisi" },
      initials: "GK",
      color:    "#00b89c",
      photo:    null,
      linkedin: null,
      scholar:  null,
      email:    null,
      bio:      { en: "", tr: "" }
    }
  ],

  /* ── Yüksek Lisans Öğrencileri ───────────────────────────── */
  msc: [
    {
      name:     "Halim Malçok",
      role:     { en: "MSc Student", tr: "Yüksek Lisans Öğrencisi" },
      initials: "HM",
      color:    "#1a73e8",
      photo:    null,
      linkedin: null,
      scholar:  null,
      email:    null,
      bio:      { en: "", tr: "" }
    },
    {
      name:     "Eren Kürpe",
      role:     { en: "MSc Student", tr: "Yüksek Lisans Öğrencisi" },
      initials: "EK",
      color:    "#00b89c",
      photo:    null,
      linkedin: null,
      scholar:  null,
      email:    null,
      bio:      { en: "", tr: "" }
    },
    {
      name:     "İrem İçöz",
      role:     { en: "MSc Student", tr: "Yüksek Lisans Öğrencisi" },
      initials: "İİ",
      color:    "#00b89c",
      photo:    null,
      linkedin: null,
      scholar:  null,
      email:    null,
      bio:      { en: "", tr: "" }
    }
  ],

  /* ── Lisans Öğrencileri ──────────────────────────────────── */
  bsc: [
    {
      name:     "Mustafa Mert Bedez",
      role:     { en: "BSc Student", tr: "Lisans Öğrencisi" },
      initials: "MM",
      color:    "#1a73e8",
      photo:    null,
      linkedin: null,
      scholar:  null,
      email:    null,
      bio:      { en: "", tr: "" }
    },
    {
      name:     "Zeliha Ilgın Güven",
      role:     { en: "BSc Student", tr: "Lisans Öğrencisi" },
      initials: "ZG",
      color:    "#00b89c",
      photo:    null,
      linkedin: null,
      scholar:  null,
      email:    null,
      bio:      { en: "", tr: "" }
    }
  ]
};
