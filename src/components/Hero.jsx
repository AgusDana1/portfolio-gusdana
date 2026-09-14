import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaInstagram, FaFacebookF, FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { FiArrowRight, FiTerminal, FiCode, FiLayers, FiCpu } from "react-icons/fi";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("profile.json");

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* LEFT COLUMN: HERO HEADLINE & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* STATUS PILL BADGE */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/20 backdrop-blur-md mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-mono tracking-wider text-cyan-300 uppercase">
              Available for Fullstack Projects
            </span>
          </div>

          {/* MAIN HEADLINE */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
            Hi, I'm <span className="bg-gradient-to-r from-white via-neutral-100 to-cyan-400 bg-clip-text text-transparent">Agus Dana</span>
          </h1>

          {/* DYNAMIC SUBHEADLINE WITH TYPEWRITER */}
          <div className="text-xl sm:text-2xl md:text-3xl font-medium mt-3 text-neutral-300 font-mono flex items-center gap-2">
            <span className="text-cyan-400">&gt;</span>
            <Typewriter
              words={[
                "Fullstack Developer",
                "Web System Architect",
                "Modern UI/UX Engineer",
              ]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1800}
            />
          </div>

          {/* PARAGRAPH */}
          <p className="text-neutral-400 text-base md:text-lg mt-6 max-w-xl leading-relaxed font-light">
            Crafting high-level web applications and modern digital architectures.
            Focused on fast performance, clean systems, and futuristic minimalist design.
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_rgba(34,211,238,0.5)]"
            >
              <span>Explore Projects</span>
              <FiArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white font-medium text-sm backdrop-blur-sm transition-all duration-200"
            >
              <span>Contact Me</span>
            </a>
          </div>

          {/* SOCIAL MEDIA PILLS */}
          <div className="flex items-center gap-3 mt-10">
            <span className="text-xs text-neutral-500 uppercase tracking-widest font-mono">Connect:</span>
            {[
              { icon: <FaGithub />, href: "https://github.com", label: "GitHub" },
              { icon: <FaLinkedin />, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: <FaInstagram />, href: "https://instagram.com", label: "Instagram" },
              { icon: <FaXTwitter />, href: "https://x.com", label: "X" },
              { icon: <FaFacebookF />, href: "https://facebook.com", label: "Facebook" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/10 hover:border-cyan-400/50 hover:text-cyan-400 text-neutral-400 flex items-center justify-center transition-all duration-200 text-sm"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT COLUMN: HIGH-LEVEL INTERACTIVE CODE TERMINAL / SYSTEM CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          {/* Ambient Glow behind the card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

          {/* Futuristic Terminal Card */}
          <div className="relative rounded-2xl border border-white/15 bg-black/80 backdrop-blur-2xl shadow-2xl overflow-hidden">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="ml-2 text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                  <FiTerminal className="text-cyan-400" /> developer-core
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setActiveTab("profile.json")}
                  className={`text-xs font-mono px-2 py-0.5 rounded transition ${
                    activeTab === "profile.json"
                      ? "bg-white/10 text-cyan-300"
                      : "text-neutral-500 hover:text-neutral-300"
                  }`}
                >
                  profile.json
                </button>
                <button
                  onClick={() => setActiveTab("stack.ts")}
                  className={`text-xs font-mono px-2 py-0.5 rounded transition ${
                    activeTab === "stack.ts"
                      ? "bg-white/10 text-cyan-300"
                      : "text-neutral-500 hover:text-neutral-300"
                  }`}
                >
                  stack.ts
                </button>
              </div>
            </div>

            {/* Code Body */}
            <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-neutral-300">
              {activeTab === "profile.json" ? (
                <pre>
                  <code>
                    <span className="text-neutral-500">&#123;</span>
                    {"\n  "}<span className="text-cyan-400">"name"</span>: <span className="text-green-300">"Agus Dana"</span>,
                    {"\n  "}<span className="text-cyan-400">"role"</span>: <span className="text-green-300">"Fullstack Developer"</span>,
                    {"\n  "}<span className="text-cyan-400">"status"</span>: <span className="text-yellow-300">"Ready for Hire"</span>,
                    {"\n  "}<span className="text-cyan-400">"focus"</span>: [
                    {"\n    "}<span className="text-green-300">"Modern Web Apps"</span>,
                    {"\n    "}<span className="text-green-300">"Clean Scalable Systems"</span>,
                    {"\n    "}<span className="text-green-300">"High-End UI/UX"</span>
                    {"\n  "}],
                    {"\n  "}<span className="text-cyan-400">"location"</span>: <span className="text-green-300">"Indonesia"</span>
                    {"\n"}<span className="text-neutral-500">&#125;</span>
                  </code>
                </pre>
              ) : (
                <pre>
                  <code>
                    <span className="text-blue-400">const</span> <span className="text-yellow-300">techStack</span> = &#123;
                    {"\n  "}frontend: [<span className="text-cyan-300">'React'</span>, <span className="text-cyan-300">'Tailwind CSS'</span>],
                    {"\n  "}backend: [<span className="text-cyan-300">'Laravel'</span>, <span className="text-cyan-300">'Node.js'</span>],
                    {"\n  "}database: [<span className="text-cyan-300">'MySQL'</span>, <span className="text-cyan-300">'PostgreSQL'</span>],
                    {"\n  "}architecture: <span className="text-green-300">'RESTful & Microservices'</span>
                    {"\n"}&#125;;
                  </code>
                </pre>
              )}
            </div>

            {/* Quick Metrics Bar at bottom of card */}
            <div className="grid grid-cols-3 border-t border-white/10 bg-white/[0.02] divide-x divide-white/10 text-center py-3">
              <div>
                <p className="text-xs text-neutral-500 font-mono">CODE QUALITY</p>
                <p className="text-sm font-bold text-white mt-0.5">A+ Clean</p>
              </div>
              <div>
                <p className="text-xs text-neutral-500 font-mono">UPTIME</p>
                <p className="text-sm font-bold text-cyan-400 mt-0.5">99.9%</p>
              </div>
              <div>
                <p className="text-xs text-neutral-500 font-mono">DESIGN</p>
                <p className="text-sm font-bold text-blue-400 mt-0.5">Futuristic</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
