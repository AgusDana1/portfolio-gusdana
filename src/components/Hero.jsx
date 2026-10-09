import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaInstagram, FaFacebookF, FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { FiArrowRight, FiTerminal } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState("profile.json");

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 sm:pt-36 sm:pb-20 md:pt-44 md:pb-28 px-4 sm:px-8 md:px-12 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        
        {/* LEFT COLUMN: HERO HEADLINE & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start w-full"
        >
          {/* STATUS PILL BADGE */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/80 backdrop-blur-md mb-5 sm:mb-6 max-w-full">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            <span className="text-[11px] sm:text-xs font-mono tracking-wider text-zinc-300 uppercase truncate">
              {t.hero.statusBadge}
            </span>
          </div>

          {/* MAIN HEADLINE */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12] text-white">
            {t.hero.greeting}{" "}
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Agus Dana
            </span>
          </h1>

          {/* DYNAMIC SUBHEADLINE WITH TYPEWRITER */}
          <div className="text-lg sm:text-2xl lg:text-3xl font-medium mt-3 text-zinc-300 font-mono flex items-center gap-2 min-h-[2rem] sm:min-h-[2.5rem]">
            <span className="text-zinc-500 font-bold">&gt;</span>
            <span className="text-zinc-200">
              <Typewriter
                key={language}
                words={t.hero.typewriter}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1800}
              />
            </span>
          </div>

          {/* PARAGRAPH */}
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg mt-4 sm:mt-5 max-w-xl leading-relaxed font-light">
            {t.hero.description}
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mt-7 sm:mt-8 w-full sm:w-auto">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-zinc-100 text-black font-medium text-sm hover:bg-white transition-all duration-200 shadow-sm active:scale-95"
            >
              <span>{t.hero.btnProjects}</span>
              <FiArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-zinc-800 bg-zinc-900/90 hover:bg-zinc-800/90 text-zinc-200 font-medium text-sm backdrop-blur-sm transition-all duration-200 active:scale-95"
            >
              <span>{t.hero.btnContact}</span>
            </a>
          </div>

          {/* SOCIAL MEDIA PILLS */}
          <div className="flex items-center flex-wrap gap-2.5 sm:gap-3 mt-8 sm:mt-10">
            <span className="text-[11px] sm:text-xs text-zinc-500 uppercase tracking-wider font-mono mr-1">
              {t.hero.connect}
            </span>
            {[
              { icon: <FaGithub />, href: "https://github.com/AgusDana1", label: "GitHub" },
              { icon: <FaLinkedin />, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: <FaInstagram />, href: "https://www.instagram.com/aagusss_7?rpxt=M3hvbm81Mjg3ZG44&utm_source=qr", label: "Instagram" },
              { icon: <FaXTwitter />, href: "https://x.com", label: "X" },
              { icon: <FaFacebookF />, href: "https://facebook.com", label: "Facebook" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-full border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center transition-all duration-200 text-sm active:scale-90"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT COLUMN: ELEGANT DARK GRAY TERMINAL / SYSTEM CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-5 relative w-full"
        >
          {/* Subtle Ambient Behind Card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-zinc-800/20 to-zinc-900/20 rounded-3xl blur-2xl opacity-50 pointer-events-none" />

          {/* Terminal Card */}
          <div className="relative rounded-2xl sm:rounded-3xl border border-zinc-800 bg-[#0d0d0d] shadow-2xl overflow-hidden w-full">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/40">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-600 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-600 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-600 inline-block" />
                <span className="ml-1.5 sm:ml-2 text-[11px] sm:text-xs font-mono text-zinc-400 flex items-center gap-1">
                  <FiTerminal className="text-zinc-300" /> {t.hero.codeTitle}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setActiveTab("profile.json")}
                  className={`text-[11px] sm:text-xs font-mono px-2 py-0.5 rounded transition ${
                    activeTab === "profile.json"
                      ? "bg-zinc-800 text-zinc-100 font-medium"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  profile.json
                </button>
                <button
                  onClick={() => setActiveTab("stack.ts")}
                  className={`text-[11px] sm:text-xs font-mono px-2 py-0.5 rounded transition ${
                    activeTab === "stack.ts"
                      ? "bg-zinc-800 text-zinc-100 font-medium"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  stack.ts
                </button>
              </div>
            </div>

            {/* Code Body */}
            <div className="p-4 sm:p-5 font-mono text-[11px] sm:text-xs md:text-sm leading-relaxed overflow-x-auto text-zinc-300 max-w-full">
              {activeTab === "profile.json" ? (
                <pre className="overflow-x-auto">
                  <code>
                    <span className="text-zinc-600">&#123;</span>
                    {"\n  "}<span className="text-zinc-400">"name"</span>: <span className="text-zinc-200">"Agus Dana"</span>,
                    {"\n  "}<span className="text-zinc-400">"role"</span>: <span className="text-zinc-200">"Fullstack Developer"</span>,
                    {"\n  "}<span className="text-zinc-400">"status"</span>: <span className="text-zinc-300">"Ready for Hire"</span>,
                    {"\n  "}<span className="text-zinc-400">"focus"</span>: [
                    {"\n    "}<span className="text-zinc-300">"Modern Web Apps"</span>,
                    {"\n    "}<span className="text-zinc-300">"Clean Scalable Systems"</span>,
                    {"\n    "}<span className="text-zinc-300">"High-End UI/UX"</span>
                    {"\n  "}],
                    {"\n  "}<span className="text-zinc-400">"location"</span>: <span className="text-zinc-200">"Indonesia"</span>
                    {"\n"}<span className="text-zinc-600">&#125;</span>
                  </code>
                </pre>
              ) : (
                <pre className="overflow-x-auto">
                  <code>
                    <span className="text-zinc-400">const</span> <span className="text-zinc-200">techStack</span> = &#123;
                    {"\n  "}frontend: [<span className="text-zinc-300">'React'</span>, <span className="text-zinc-300">'Tailwind'</span>],
                    {"\n  "}backend: [<span className="text-zinc-300">'Laravel'</span>, <span className="text-zinc-300">'Node.js'</span>],
                    {"\n  "}database: [<span className="text-zinc-300">'MySQL'</span>, <span className="text-zinc-300">'Postgres'</span>],
                    {"\n  "}architecture: <span className="text-zinc-200">'REST & Microservices'</span>
                    {"\n"}&#125;;
                  </code>
                </pre>
              )}
            </div>

            {/* Quick Metrics Bar at bottom of card */}
            <div className="grid grid-cols-3 border-t border-zinc-800 bg-zinc-900/30 divide-x divide-zinc-800 text-center py-2.5 sm:py-3 px-1">
              <div>
                <p className="text-[10px] sm:text-xs text-zinc-500 font-mono">{t.hero.codeQuality}</p>
                <p className="text-xs sm:text-sm font-semibold text-zinc-200 mt-0.5">{t.hero.codeQualityVal}</p>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-zinc-500 font-mono">{t.hero.uptime}</p>
                <p className="text-xs sm:text-sm font-semibold text-zinc-200 mt-0.5">99.9%</p>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-zinc-500 font-mono">{t.hero.design}</p>
                <p className="text-xs sm:text-sm font-semibold text-zinc-200 mt-0.5">{t.hero.designVal}</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
