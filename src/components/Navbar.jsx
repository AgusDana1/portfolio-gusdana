import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

  const waLink = `https://wa.me/${phoneNumber}`;

  return (
    <nav className="flex justify-between items-center px-6 md:px-10 py-5 bg-[#0B1C2C] text-white fixed w-full top-0 z-50">

      {/* LOGO */}
      <h1 className="text-xl font-bold">AGUS DANA</h1>

      {/* MENU DESKTOP */}
      <ul className="hidden md:flex gap-8">
        <li><a href="#home" className="hover:text-blue-500">Home</a></li>
        <li><a href="#about" className="hover:text-blue-500">About</a></li>
        <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
        <li><a href="#services" className="hover:text-blue-500">Services</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
      </ul>

      {/* BUTTON DESKTOP */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:block bg-blue-500 px-5 py-2 rounded-full hover:bg-blue-600"
      >
        Let's Talk
      </a>

      {/* HAMBURGER */}
      <div className="md:hidden z-50">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* OVERLAY */}
            <motion.div
              className="fixed inset-0 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* MENU PANEL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-2/3 h-full bg-[#081420] flex flex-col items-center justify-center gap-8 text-lg z-50"
            >

              <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
              <a href="#about" onClick={() => setIsOpen(false)}>About</a>
              <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
              <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
              <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>

              {/* BUTTON WA */}
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 px-6 py-3 rounded-full hover:bg-blue-600"
              >
                Let's Talk
              </a>

            </motion.div>
          </>
        )}
      </AnimatePresence>

    </nav>
  );
}
