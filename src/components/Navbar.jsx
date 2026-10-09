import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "628123456789";

  const waLink = `https://wa.me/${phoneNumber}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
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
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.faq, href: "#faq" },
    { name: t.nav.contact, href: "#contact" },
  ];

  // Elegant Minimalist Language Toggle
  const LanguageToggle = () => (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label="Switch Language between English and Indonesian"
      title={language === "en" ? "Beralih ke Bahasa Indonesia" : "Switch to English"}
      className="relative flex items-center bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-full p-0.5 sm:p-1 text-[11px] sm:text-xs font-mono transition-all duration-200 active:scale-95 flex-shrink-0"
    >
      <span
        className={`px-2 py-0.5 rounded-full transition-all duration-200 ${
          language === "en"
            ? "bg-zinc-100 text-black font-semibold shadow-sm"
            : "text-zinc-500 hover:text-zinc-300"
        }`}
      >
        EN
      </span>
      <span
        className={`px-2 py-0.5 rounded-full transition-all duration-200 ${
          language === "id"
            ? "bg-zinc-100 text-black font-semibold shadow-sm"
            : "text-zinc-500 hover:text-zinc-300"
        }`}
      >
        ID
      </span>
    </button>
  );

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
        initial={false}
        animate={{
          y: scrolled ? 14 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 340,
          damping: 28,
          mass: 0.8,
        }}
      >
        <motion.nav
          className="pointer-events-auto flex items-center justify-between"
          initial={false}
          animate={{
            width: scrolled ? "min(92%, 1024px)" : "100%",
            borderRadius: scrolled ? 9999 : 0,
            paddingLeft: scrolled ? 20 : 36,
            paddingRight: scrolled ? 20 : 36,
            paddingTop: scrolled ? 10 : 18,
            paddingBottom: scrolled ? 10 : 18,
            backgroundColor: scrolled ? "rgba(14, 14, 14, 0.94)" : "rgba(7, 7, 7, 0.65)",
            borderColor: scrolled ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.06)",
            boxShadow: scrolled
              ? "0 20px 45px -10px rgba(0, 0, 0, 0.95), 0 0 0 1px rgba(255, 255, 255, 0.08)"
              : "0 0 0 0 rgba(0, 0, 0, 0)",
            borderWidth: 1,
            borderTopWidth: scrolled ? 1 : 0,
            borderLeftWidth: scrolled ? 1 : 0,
            borderRightWidth: scrolled ? 1 : 0,
            borderBottomWidth: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 340,
            damping: 28,
            mass: 0.8,
          }}
          style={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          {/* BRAND LOGO */}
          <a
            href="#home"
            className="flex items-center gap-2 group text-sm sm:text-base font-medium tracking-tight text-white hover:text-zinc-200 transition-colors"
          >
            <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
            <span className="font-semibold tracking-wider text-xs sm:text-sm md:text-base">
              AGUS<span className="text-zinc-400 font-normal">DANA</span>
            </span>
          </a>

          {/* DESKTOP NAVIGATION MENU */}
          <ul className="hidden md:flex items-center gap-1 bg-zinc-900/60 p-1 rounded-full border border-zinc-800">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="px-3.5 lg:px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-all duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* DESKTOP ACTIONS: LANGUAGE SWITCH + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageToggle />
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium text-black bg-zinc-100 hover:bg-white transition-all duration-200 shadow-sm"
            >
              <span>{t.nav.letsTalk}</span>
              <FiArrowUpRight className="text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* MOBILE CONTROLS (SEBELAHAN DENGAN HAMBURGER MENU) */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <HiX size={22} /> : <HiMenu size={22} />}
            </button>
          </div>
        </motion.nav>
      </motion.header>

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
              className="fixed top-16 sm:top-20 left-4 right-4 max-h-[82vh] overflow-y-auto bg-zinc-950/98 border border-zinc-800 p-5 sm:p-6 rounded-2xl z-50 flex flex-col gap-4 shadow-2xl backdrop-blur-2xl md:hidden"
            >
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 rounded-xl text-zinc-300 hover:text-white hover:bg-zinc-900 active:bg-zinc-800 transition-all text-sm font-medium"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="pt-3 border-t border-zinc-800">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-black bg-zinc-100 font-medium text-sm hover:bg-white transition-colors shadow-sm"
                >
                  <span>{t.nav.letsTalk}</span>
                  <FiArrowUpRight />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
