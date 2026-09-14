import React from "react";
import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-black/80 backdrop-blur-xl text-neutral-400 py-12 px-6 md:px-12 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* BRAND & STATUS */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            <span className="text-white font-bold tracking-wider text-sm">
              AGUS<span className="text-cyan-400">DANA</span>
            </span>
          </div>

          <span className="hidden sm:inline text-neutral-700">|</span>

          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Systems Normal • Ready for deployment</span>
          </div>
        </div>

        {/* QUICK LINKS */}
        <ul className="flex items-center gap-6 text-xs font-medium text-neutral-400">
          <li>
            <a href="#home" className="hover:text-white transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* COPYRIGHT & SCROLL TO TOP */}
        <div className="flex items-center gap-4 text-xs font-mono text-neutral-500">
          <span>© {new Date().getFullYear()} Agus Dana. All rights reserved.</span>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-8 h-8 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/10 hover:border-cyan-400/50 hover:text-white flex items-center justify-center transition-all text-sm"
          >
            <FiArrowUp />
          </button>
        </div>

      </div>
    </footer>
  );
}
