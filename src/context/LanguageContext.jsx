import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      services: "Services",
      faq: "FAQ",
      contact: "Contact",
      letsTalk: "Let's Talk",
    },
    hero: {
      statusBadge: "Available for Fullstack Projects",
      greeting: "Hi, I'm",
      typewriter: [
        "Fullstack Developer",
        "Web System Architect",
        "Modern UI/UX Engineer",
      ],
      description:
        "Crafting high-level web applications and modern digital architectures. Focused on fast performance, clean systems, and futuristic minimalist design.",
      btnProjects: "Explore Projects",
      btnContact: "Contact Me",
      connect: "Connect:",
      codeTitle: "developer-core",
      codeQuality: "CODE QUALITY",
      codeQualityVal: "A+ Clean",
      uptime: "UPTIME",
      design: "DESIGN",
      designVal: "Futuristic",
    },
    about: {
      sub: "// 01. ABOUT ME",
      title: "Architecting High-Performance Systems",
      desc: "Bridging the gap between scalable backend engineering and sleek, futuristic user interfaces.",
      cardTitle: "Fullstack Engineer with an eye for modern aesthetics",
      cardDesc:
        "I specialize in developing end-to-end applications that are responsive, scalable, and visually striking. From structuring efficient database queries to crafting fluid micro-interactions, I focus on clean code and reliable system architecture.",
      principlesTitle: "CORE PRINCIPLES",
      principles: [
        "Clean Architecture",
        "Scalable Backend",
        "High Performance",
        "Fluid Micro-Interactions",
        "Modern Standards",
      ],
      totalProjects: "Total Projects",
      projectsDesc: "Successfully delivered systems, web platforms, and client solutions.",
      experience: "Experience",
      experienceUnit: "Yrs+",
      experienceDesc: "Continuous learning and shipping production-grade applications.",
      toolkitTitle: "Toolkit & Frameworks",
      toolkitSubtitle: "Technologies I build with everyday",
    },
    projects: {
      sub: "// 02. PORTFOLIO SHOWCASE",
      title: "High-Level Featured Projects",
      desc: "Real-world systems, intuitive applications, and production architectures engineered with precision.",
      filterAll: "All",
      filterFullstack: "Fullstack",
      filterWebApp: "Web App",
      filterSystem: "System",
      archetype: "ARCHITECTURE ARCHETYPE",
      livePreview: "Live Preview",
      items: [
        {
          id: "01",
          title: "AutoRent - Fullstack Rental Platform",
          category: "Fullstack",
          description:
            "Comprehensive web system for automated vehicle reservations, real-time availability tracking, transaction management, and administrative reporting.",
          highlightMetric: "40% Faster Booking",
        },
        {
          id: "02",
          title: "Nexus Dashboard & Analytics Suite",
          category: "Web App",
          description:
            "High-performance telemetry and business intelligence dashboard featuring interactive data visualizations, dark-mode first UI, and role-based access control.",
          highlightMetric: "Realtime Socket Sync",
        },
        {
          id: "03",
          title: "CoreCommerce - Modern Headless Store",
          category: "System",
          description:
            "Engineered with headless architecture, dynamic inventory sync, automated payment gateway integration, and microsecond response time caching.",
          highlightMetric: "99.9% Uptime",
        },
        {
          id: "04",
          title: "Enterprise Task & Workflow Manager",
          category: "Fullstack",
          description:
            "Collaborative project workspace featuring kanban boards, real-time activity stream, file asset distribution, and automated team reminders.",
          highlightMetric: "Modular System",
        },
        {
          id: "05",
          title: "Apex Landing & Conversion Engine",
          category: "Web App",
          description:
            "Ultra-fast marketing portal with high-conversion micro-interactions, responsive grid layout, and seamless third-party CRM integration.",
          highlightMetric: "100 Lighthouse",
        },
        {
          id: "06",
          title: "SecureAuth - Centralized Identity API",
          category: "System",
          description:
            "OAuth2 and JWT-based authentication service with rate limiting, multi-tenant organization support, and audit trail logging.",
          highlightMetric: "Enterprise Security",
        },
      ],
    },
    services: {
      sub: "// 03. SPECIALIZATIONS",
      title: "High-Level Engineering Services",
      desc: "Delivering production-grade digital solutions that combine system reliability with futuristic visual polish.",
      keyFeatures: "Key Features",
      list: [
        {
          num: "01",
          title: "Fullstack Web Systems",
          desc: "Architecting end-to-end applications from scratch. Combining resilient backend architectures (Laravel / Node.js) with reactive, high-speed frontend engines (React).",
          deliverables: [
            "Full Architecture Setup",
            "Relational Database Design",
            "REST API Development",
            "Secure Session & Auth",
          ],
        },
        {
          num: "02",
          title: "Futuristic UI/UX & Web Apps",
          desc: "Crafting fluid, high-converting interfaces that feel alive. Focusing on dark-mode-first aesthetics, seamless micro-animations, and 100% responsive layouts.",
          deliverables: [
            "Responsive Cross-device UI",
            "Framer Motion Animations",
            "Design Systems & Components",
            "Lighthouse 95+ Performance",
          ],
        },
        {
          num: "03",
          title: "System Integration & APIs",
          desc: "Connecting disparate platforms into a unified ecosystem. Seamless integration of third-party APIs, payment gateways, messaging bots, and automated background jobs.",
          deliverables: [
            "Payment Gateway Hooks",
            "OAuth & SSO Security",
            "Webhook Automations",
            "Cloud & Docker Deployment",
          ],
        },
      ],
    },
    faq: {
      badge: "Frequently Asked Questions",
      titlePre: "Frequently Asked",
      titleHighlight: "Questions",
      desc: "Find answers regarding the development process, technologies utilized, and quality standards for every digital system project.",
      stillQuestions: "Still have questions that aren't answered here?",
      askDirect: "Ask directly via contact channels",
      items: [
        {
          num: "01",
          question: "What primary tech stack do you utilize in your projects?",
          answer:
            "My primary focus is the modern fullstack ecosystem: React and Tailwind CSS for snappy & interactive frontends, coupled with robust backends like Laravel or Node.js/Express. For database systems, I regularly work with PostgreSQL and MySQL with secure, scalable RESTful API architectures.",
        },
        {
          num: "02",
          question: "What is the estimated delivery timeframe for a web or system project?",
          answer:
            "Delivery timelines depend on the project scope and system complexity. A modern portfolio or landing page typically takes 1–2 weeks. Full-scale web applications (such as booking platforms, admin suites, or SaaS) generally range between 3–6 weeks with continuous milestone updates.",
        },
        {
          num: "03",
          question: "Are the applications guaranteed to be fully responsive across all devices?",
          answer:
            "Absolutely. Every system and interface is crafted with a mobile-first and fully responsive design mindset. Layouts are meticulously optimized for smartphones, tablets, laptops, and ultra-wide monitors with optimal performance loading times.",
        },
        {
          num: "04",
          question: "What does the project collaboration workflow look like?",
          answer:
            "The workflow follows 4 core phases: 1) Requirements Analysis & System Architecture Design, 2) UI Wireframing & Prototyping, 3) Modular Coding & API Integration, and 4) Rigorous QA Testing, Cloud/Server Deployment, and complete Source Code Handover.",
        },
        {
          num: "05",
          question: "Do you provide post-launch support and maintenance?",
          answer:
            "Yes, every delivered project comes with a complimentary 30-day bug-fixing warranty. I also provide flexible ongoing maintenance packages should you require long-term performance telemetry and system enhancements.",
        },
      ],
    },
    contact: {
      badge: "Fast Response • Open for Inquiries",
      titlePre: "Let's Architect Something",
      titleHighlight: "Exceptional",
      desc: "Have a project in mind, need a fullstack system built, or looking to collaborate? Reach out directly and let's turn your concept into reality.",
      btnWa: "Chat via WhatsApp",
      emailCopied: "Email Copied!",
      inputPlaceholder: "Enter your email to connect...",
      btnSend: "Send",
      btnSent: "Sent",
      disclaimer: "No spam. Direct professional communication only.",
    },
    footer: {
      status: "Systems Normal • Ready for deployment",
      copyright: "All rights reserved.",
    },
  },
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      projects: "Proyek",
      services: "Layanan",
      faq: "FAQ",
      contact: "Kontak",
      letsTalk: "Hubungi Saya",
    },
    hero: {
      statusBadge: "Tersedia untuk Proyek Fullstack",
      greeting: "Halo, Saya",
      typewriter: [
        "Fullstack Developer",
        "Arsitek Sistem Web",
        "UI/UX Engineer Modern",
      ],
      description:
        "Membangun aplikasi web level tinggi dan arsitektur digital modern. Berfokus pada performa cepat, sistem bersih, dan desain futuristik minimalis.",
      btnProjects: "Lihat Proyek",
      btnContact: "Hubungi Saya",
      connect: "Terhubung:",
      codeTitle: "developer-core",
      codeQuality: "KUALITAS KODE",
      codeQualityVal: "A+ Bersih",
      uptime: "UPTIME",
      design: "DESAIN",
      designVal: "Futuristik",
    },
    about: {
      sub: "// 01. TENTANG SAYA",
      title: "Merancang Sistem Berperforma Tinggi",
      desc: "Menjembatani backend engineering yang scalable dengan antarmuka pengguna futuristik yang presisi.",
      cardTitle: "Fullstack Engineer dengan fokus estetika modern",
      cardDesc:
        "Saya mengkhususkan diri dalam pengembangan aplikasi end-to-end yang responsif, scalable, dan berdaya visual kuat. Mulai dari query database efisien hingga micro-interaction yang mulus, fokus saya adalah kode bersih dan arsitektur sistem yang andal.",
      principlesTitle: "PRINSIP UTAMA",
      principles: [
        "Clean Architecture",
        "Scalable Backend",
        "High Performance",
        "Micro-Interactions Mulus",
        "Standar Modern",
      ],
      totalProjects: "Total Proyek",
      projectsDesc: "Berhasil menyelesaikan berbagai sistem, platform web, dan solusi klien.",
      experience: "Pengalaman",
      experienceUnit: "Thn+",
      experienceDesc: "Pembelajaran berkelanjutan dalam merilis aplikasi siap produksi.",
      toolkitTitle: "Toolkit & Framework",
      toolkitSubtitle: "Teknologi yang saya gunakan setiap hari",
    },
    projects: {
      sub: "// 02. SHOWCASE PORTOFOLIO",
      title: "Proyek Unggulan High-Level",
      desc: "Sistem dunia nyata, aplikasi intuitif, dan arsitektur produksi yang dirancang secara presisi.",
      filterAll: "Semua",
      filterFullstack: "Fullstack",
      filterWebApp: "Web App",
      filterSystem: "Sistem",
      archetype: "ARKETIPE ARSITEKTUR",
      livePreview: "Live Preview",
      items: [
        {
          id: "01",
          title: "AutoRent - Platform Rental Fullstack",
          category: "Fullstack",
          description:
            "Sistem web komprehensif untuk reservasi kendaraan otomatis, pelacakan ketersediaan real-time, manajemen transaksi, dan laporan admin.",
          highlightMetric: "40% Lebih Cepat",
        },
        {
          id: "02",
          title: "Nexus Dashboard & Analytics Suite",
          category: "Web App",
          description:
            "Dashboard telemetri dan business intelligence performa tinggi dengan visualisasi data interaktif, UI dark-mode, dan kontrol akses bertingkat.",
          highlightMetric: "Sinkronisasi Socket",
        },
        {
          id: "03",
          title: "CoreCommerce - Toko Headless Modern",
          category: "System",
          description:
            "Dibangun dengan arsitektur headless, sinkronisasi inventaris dinamis, integrasi payment gateway otomatis, dan respon caching mikrodetik.",
          highlightMetric: "99.9% Uptime",
        },
        {
          id: "04",
          title: "Enterprise Task & Workflow Manager",
          category: "Fullstack",
          description:
            "Ruang kerja kolaboratif dengan papan kanban, linimasa aktivitas real-time, distribusi aset berkas, dan pengingat tim otomatis.",
          highlightMetric: "Sistem Modular",
        },
        {
          id: "05",
          title: "Apex Landing & Mesin Konversi",
          category: "Web App",
          description:
            "Portal pemasaran berkecepatan tinggi dengan mikro-interaksi konversi tinggi, tata letak grid responsif, dan integrasi CRM pihak ketiga.",
          highlightMetric: "100 Lighthouse",
        },
        {
          id: "06",
          title: "SecureAuth - API Identitas Terpusat",
          category: "System",
          description:
            "Layanan autentikasi berbasis OAuth2 dan JWT dengan pembatasan rate, dukungan organisasi multi-tenant, dan pencatatan jejak audit.",
          highlightMetric: "Keamanan Enterprise",
        },
      ],
    },
    services: {
      sub: "// 03. SPESIALISASI",
      title: "Layanan Rekayasa Sistem High-Level",
      desc: "Menghadirkan solusi digital siap produksi yang memadukan keandalan sistem dengan sentuhan visual futuristik.",
      keyFeatures: "Fitur Utama",
      list: [
        {
          num: "01",
          title: "Sistem Web Fullstack",
          desc: "Merancang aplikasi end-to-end dari nol. Menggabungkan arsitektur backend tangguh (Laravel / Node.js) dengan frontend reaktif dan cepat (React).",
          deliverables: [
            "Setup Arsitektur Penuh",
            "Desain Database Relasional",
            "Pengembangan REST API",
            "Sesi & Keamanan Auth",
          ],
        },
        {
          num: "02",
          title: "UI/UX Futuristik & Web Apps",
          desc: "Menciptakan antarmuka yang cair dan berkonversi tinggi. Berfokus pada estetika dark-mode, mikro-animasi mulus, dan layout 100% responsif.",
          deliverables: [
            "UI Responsif Lintas Perangkat",
            "Animasi Framer Motion",
            "Komponen & Design System",
            "Performa Lighthouse 95+",
          ],
        },
        {
          num: "03",
          title: "Integrasi Sistem & API",
          desc: "Menghubungkan berbagai platform menjadi satu ekosistem terpadu. Integrasi API pihak ketiga, payment gateway, bot perpesanan, dan job otomatis.",
          deliverables: [
            "Koneksi Payment Gateway",
            "Keamanan OAuth & SSO",
            "Otomatisasi Webhook",
            "Deployment Cloud & Docker",
          ],
        },
      ],
    },
    faq: {
      badge: "Pertanyaan yang Sering Diajukan",
      titlePre: "Pertanyaan yang Sering",
      titleHighlight: "Diajukan",
      desc: "Temukan jawaban seputar proses kerja, teknologi yang digunakan, serta komitmen kualitas untuk setiap proyek sistem digital.",
      stillQuestions: "Masih memiliki pertanyaan yang belum terjawab?",
      askDirect: "Tanyakan langsung melalui kontak",
      items: [
        {
          num: "01",
          question: "Teknologi utama apa saja yang biasa Anda gunakan dalam proyek?",
          answer:
            "Fokus utama saya adalah ekosistem modern fullstack: React dan Tailwind CSS untuk frontend yang cepat & interaktif, didukung oleh backend tangguh seperti Laravel atau Node.js/Express. Untuk penyimpanan data, saya terbiasa menggunakan PostgreSQL dan MySQL dengan arsitektur RESTful API yang aman dan scalable.",
        },
        {
          num: "02",
          question: "Berapa lama estimasi waktu pengerjaan sebuah sistem atau web?",
          answer:
            "Estimasi waktu bergantung pada ruang lingkup (scope) dan kompleksitas sistem. Website portofolio atau landing page dengan interaksi modern biasanya memakan waktu 1–2 minggu. Sedangkan sistem web berskala penuh (seperti sistem reservasi, dashboard admin, atau SaaS) umumnya berkisar antara 3–6 minggu dengan pembaruan berkala di setiap tahap.",
        },
        {
          num: "03",
          question: "Apakah aplikasi yang dibuat dijamin responsif di semua perangkat?",
          answer:
            "Tentu saja. Semua sistem dan interface yang saya rancang menerapkan pendekatan mobile-first dan responsive design. Tampilan dioptimasi secara presisi agar nyaman digunakan di layar smartphone, tablet, laptop, hingga monitor resolusi tinggi dengan performa loading yang optimal.",
        },
        {
          num: "04",
          question: "Bagaimana tahapan dan alur kerja (workflow) kolaborasi proyek?",
          answer:
            "Alur kerja terstruktur dalam 4 fase utama: 1) Konsultasi Kebutuhan & Perancangan Arsitektur, 2) Pembuatan Wireframe / Prototipe UI, 3) Tahap Coding & Integrasi API secara bertahap, dan 4) Testing, Deployment ke server/cloud, serta serah terima dokumentasi dan source code.",
        },
        {
          num: "05",
          question: "Apakah tersedia dukungan (maintenance) setelah proyek selesai dikerjakan?",
          answer:
            "Ya, setiap proyek yang diselesaikan mendapatkan masa garansi bug-fixing gratis selama 30 hari. Saya juga menyediakan paket pemeliharaan berkala (maintenance & update) jika Anda membutuhkan pemantauan performa jangka panjang.",
        },
      ],
    },
    contact: {
      badge: "Respon Cepat • Terbuka untuk Diskusi",
      titlePre: "Mari Bangun Sesuatu yang",
      titleHighlight: "Luar Biasa",
      desc: "Punya ide proyek, membutuhkan sistem fullstack, atau ingin berkolaborasi? Hubungi langsung dan wujudkan konsep digital Anda.",
      btnWa: "Chat via WhatsApp",
      emailCopied: "Email Tersalin!",
      inputPlaceholder: "Masukkan email Anda untuk terhubung...",
      btnSend: "Kirim",
      btnSent: "Terkirim",
      disclaimer: "Bebas spam. Komunikasi profesional langsung.",
    },
    footer: {
      status: "Sistem Normal • Siap untuk deployment",
      copyright: "Hak cipta dilindungi.",
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("preferred_lang");
    return saved === "id" ? "id" : "en";
  });

  useEffect(() => {
    localStorage.setItem("preferred_lang", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "id" : "en"));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

