import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "628123456789";

  const waLink = `https://wa.me/${phoneNumber}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-4">
      <nav
        className={`w-full max-w-5xl rounded-full transition-all duration-300 flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 border ${
          scrolled
            ? "bg-black/85 backdrop-blur-xl border-white/15 shadow-[0_12px_36px_rgba(0,0,0,0.8)]"
            : "bg-black/50 backdrop-blur-lg border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
        }`}
      >
        {/* LOGO */}
        <a
          href="#home"
          className="flex items-center gap-2 group text-sm sm:text-base font-bold tracking-wider"
        >
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] animate-pulse" />
          <span className="text-white tracking-widest text-xs sm:text-sm md:text-base font-extrabold">
            AGUS<span className="text-cyan-400">DANA</span>
          </span>
        </a>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex items-center gap-1 bg-white/[0.04] p-1 rounded-full border border-white/5">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="px-3.5 lg:px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* BUTTON DESKTOP */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium text-black bg-white hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]"
          >
            <span>Let's Talk</span>
            <FiArrowUpRight className="text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* HAMBURGER BUTTON (MOBILE) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 text-neutral-300 hover:text-white focus:outline-none focus:ring-1 focus:ring-cyan-400/50 rounded-lg"
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU MODAL */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="fixed top-16 sm:top-20 left-4 right-4 max-h-[82vh] overflow-y-auto bg-neutral-950/95 border border-white/10 p-5 sm:p-6 rounded-3xl z-50 flex flex-col gap-4 shadow-2xl backdrop-blur-2xl md:hidden"
            >
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 rounded-2xl text-neutral-300 hover:text-white hover:bg-white/5 active:bg-white/10 transition-all text-base font-medium"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="pt-3 border-t border-white/10">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-black bg-white font-semibold text-sm hover:bg-cyan-400 transition-colors shadow-lg"
                >
                  <span>Let's Talk</span>
                  <FiArrowUpRight />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
