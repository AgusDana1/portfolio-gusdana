<div align="center">

# ⚡ Agus Dana — Fullstack Developer Portfolio

**A modern, minimalist, luxury dark-themed developer portfolio engineered with React 19, Vite, Tailwind CSS, and Framer Motion.**

[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.19-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.38.0-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<p align="center">
  <a href="#-features">Key Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started--how-to-clone">How to Clone & Run</a> •
  <a href="#-project-structure">Project Structure</a> •
  <a href="#-customization-guide">Customization</a> •
  <a href="#-contact--developer-profile">Connect</a>
</p>

---

</div>

## 📌 Overview

This repository contains the production source code for **Agus Dana's** official developer portfolio. Designed with a high-level **quiet luxury & cyberpunk-minimalist aesthetic** (`#050505` deep black foundation, dark gray glassmorphic cards, micro-grid backdrop, and Google's Poppins typography), the application emphasizes **ultra-smooth micro-interactions**, **lightning-fast page loads**, and **uncompromising responsiveness** across mobile, tablet, and desktop viewports.

---

## ✨ Features

- 🎬 **Futuristic Opening Scene (Preloader)**
  - Fullscreen minimalist intro sequence with dynamic percentage counter (0% → 100%) and a smooth shutter-wipe reveal curtain.
  - Choreographed entrance where page components smoothly glide into their respective positions upon launch.

- 🏝️ **Dynamic Island Navbar**
  - Apple-inspired physics animation: full-width header smoothly shrinks and compresses into a floating center island upon scrolling down, expanding back on scroll up.
  - Fully integrated with an accessible mobile slide-down menu.

- 🌐 **Instant Bi-Lingual Engine (EN / ID)**
  - Reactive language switcher (English & Bahasa Indonesia) powered by React Context.
  - Seamlessly translates headlines, about stories, statistics, project descriptions, service offerings, FAQs, and contact forms with zero page reload.

- 🍱 **Architectural Bento Grid (About Section)**
  - Dedicated **Developer Portrait Card** with live availability status indicator, tech corner metadata, and subtle hover animations.
  - **Engineering Philosophy & Principles** card highlighting core values.
  - **Animated Stat Counters** for completed projects (15+) and years of experience (3+).
  - Interactive **Tech Stack Showcase** featuring React, Laravel, Node.js, Tailwind, JavaScript, and PostgreSQL.

- 💼 **Curated Projects Showcase**
  - Filterable tabs (*All, Fullstack, Web App, System*).
  - Real-world production showcases including **RestoMayo** (Next.js culinary & dining platform) and **SimpleLMS** (Laravel Learning Management System) with direct links to live previews and GitHub repositories.

- 💡 **Value Proposition & Services**
  - *"Why Choose Me"* asymmetric cards covering Custom Solutions, Modern & Responsive UI, Performance Focused, Clear Communication, and Scalable Development.
  - Interactive accordion FAQ and one-click WhatsApp & email contact channels.

---

## 🛠️ Tech Stack

| Category | Technologies / Libraries |
| :--- | :--- |
| **Core Framework** | [React 19](https://react.dev/) & [Vite 8](https://vitejs.dev/) |
| **Styling & Design System** | [Tailwind CSS 3.4](https://tailwindcss.com/), PostCSS, Autoprefixer |
| **Motion & Animations** | [Framer Motion 12](https://www.framer.com/motion/), [React Simple Typewriter](https://github.com/awran5/react-simple-typewriter) |
| **Iconography** | [React Icons](https://react-icons.github.io/react-icons/) (Feather `fi`, FontAwesome 6 `fa6`, Simple Icons `si`) |
| **Typography** | [Google Poppins](https://fonts.google.com/specimen/Poppins) (Sans-serif) & JetBrains Mono / Monospace |
| **Code Quality** | ESLint 9 |

---

## 🚀 Getting Started / How to Clone

Follow these step-by-step instructions to get a local copy up and running on your machine.

### 📋 Prerequisites

Ensure you have the following installed on your system:
- **Git**: [Download Git](https://git-scm.com/)
- **Node.js** (v18.0.0 or higher recommended): [Download Node.js](https://nodejs.org/)
- **Package Manager**: `npm` (comes with Node.js), `yarn`, or `pnpm`

Check your installations by running:
```bash
git --version
node -v
npm -v
```

---

### 📥 1. Clone the Repository

Open your terminal or command prompt and clone the repository:

```bash
git clone https://github.com/AgusDana1/portfolio-gusdana.git
```

---

### 📂 2. Navigate into the Project Directory

```bash
cd portfolio-gusdana
```

---

### 📦 3. Install Dependencies

Install all required NPM packages:

```bash
npm install
```
*(Or use `yarn install` / `pnpm install` if preferred).*

---

### ⚙️ 4. Configure Environment Variables

Create your local environment file by copying the template:

```bash
cp .env.example .env
```

Open `.env` in your text editor and customize the values (e.g. WhatsApp number for direct chat integration):

```env
# Contact WhatsApp Number (International format without '+' prefix)
VITE_WHATSAPP_NUMBER=6287755000371
```

---

### 💻 5. Start the Development Server

Run the local Vite development server:

```bash
npm run dev
```

Your terminal will display the local address:
```
  VITE v8.0.1  ready in 240 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Open **`http://localhost:5173`** in your browser to view the portfolio with Hot Module Replacement (HMR) enabled.

---

### 🏗️ 6. Build for Production

To create an optimized production build:

```bash
npm run build
```

This compiles your application into the `dist/` directory with minified JavaScript, bundled CSS, and compressed assets.

To preview the production build locally:

```bash
npm run preview
```

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   ├── favicon.svg               # Browser tab favicon
│   ├── icons.svg                 # SVG sprite sheet
│   └── images/
│       ├── foto-profile.png      # Developer portrait photo (About section)
│       ├── foto-2.png            # Alternate profile photo
│       └── project1.jpg          # Project mockup asset
├── src/
│   ├── assets/                   # Static media assets
│   ├── components/
│   │   ├── OpeningScene.jsx      # Intro preloader with progress animation
│   │   ├── Navbar.jsx            # Dynamic Island scroll-reactive header
│   │   ├── Hero.jsx              # Hero section with interactive terminal
│   │   ├── About.jsx             # Bento grid with photo & skill counters
│   │   ├── WhyChooseMe.jsx       # 5 value proposition cards
│   │   ├── Projects.jsx          # Filterable showcase with GitHub & demo links
│   │   ├── Services.jsx          # High-level engineering specializations
│   │   ├── FAQ.jsx               # Expandable accordion dropdowns
│   │   ├── Contact.jsx           # Direct contact channels & email form
│   │   └── Footer.jsx            # Bottom navigation & copyright footer
│   ├── context/
│   │   └── LanguageContext.jsx   # Bi-lingual state engine (EN / ID translations)
│   ├── App.jsx                   # Main layout container & preloader coordinator
│   ├── index.css                 # Global CSS styles & micro-grid utility
│   └── main.jsx                  # Application entry point
├── .env.example                  # Environment template
├── index.html                    # Root HTML document
├── package.json                  # Scripts & dependencies
├── tailwind.config.js            # Tailwind theme & color definitions
└── vite.config.js                # Vite build configuration
```

---

## 🎨 Customization Guide

If you are using this codebase as a baseline for your own developer portfolio:

1. **Update Personal Information & Content**:
   - Edit [`src/context/LanguageContext.jsx`](src/context/LanguageContext.jsx) to update your name, bios, service descriptions, and translations for both English and Bahasa Indonesia.
2. **Add Your Own Projects**:
   - Edit the `projectMeta` array in [`src/components/Projects.jsx`](src/components/Projects.jsx) to specify your project titles, tech tags, live demo links, and GitHub repositories.
3. **Change Developer Profile Photos**:
   - Replace `public/images/foto-profile.png` with your portrait photograph.
4. **Update Social & Contact Links**:
   - In [`src/components/Hero.jsx`](src/components/Hero.jsx), update your GitHub, LinkedIn, and social media URLs.
   - In [`src/components/Contact.jsx`](src/components/Contact.jsx), update your email address (`contactEmail`) and configure your WhatsApp number in `.env`.

---

## 👨‍💻 Developer Profile

**Agus Dana**  
*Fullstack Developer & System Architect*

- 🌐 **GitHub**: [@AgusDana1](https://github.com/AgusDana1)
- 📸 **Instagram**: [@aagusss_7](https://www.instagram.com/aagusss_7)
- 📧 **Email**: [agusdanaadnyana33@gmail.com](mailto:agusdanaadnyana33@gmail.com)
- 📍 **Location**: Bali, Indonesia

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE). Feel free to use, modify, and build upon it with attribution.
