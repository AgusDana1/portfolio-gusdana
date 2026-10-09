import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiSend, FiCheck, FiCopy } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [emailInput, setEmailInput] = useState("");
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const contactEmail = "agusdanaadnyana33@gmail.com";
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "628123456789";
  const waLink = `https://wa.me/${phoneNumber}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailInput) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmailInput("");
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="relative text-white px-4 sm:px-8 md:px-12 py-16 sm:py-24 max-w-5xl mx-auto"
    >
      <div className="relative rounded-2xl sm:rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-6 sm:p-10 md:p-14 backdrop-blur-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/80 backdrop-blur-md mb-5 sm:mb-6 max-w-full">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse flex-shrink-0" />
            <span className="text-[11px] sm:text-xs font-mono tracking-wider text-zinc-300 uppercase truncate">
              {t.contact.badge}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white">
            {t.contact.titlePre}{" "}
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              {t.contact.titleHighlight}
            </span>
          </h2>

          <p className="text-zinc-400 text-xs sm:text-sm md:text-base mt-3 sm:mt-4 font-light leading-relaxed">
            {t.contact.desc}
          </p>

          {/* QUICK CHANNELS */}
          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4 mt-6 sm:mt-8 w-full">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl border border-zinc-800 bg-zinc-900/70 text-zinc-200 hover:bg-zinc-800 hover:border-zinc-700 transition-all font-medium text-xs sm:text-sm active:scale-95"
            >
              <FaWhatsapp className="text-base flex-shrink-0" />
              <span>{t.contact.btnWa}</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl border border-zinc-800 bg-zinc-900/70 text-zinc-200 hover:bg-zinc-800 hover:border-zinc-700 transition-all font-medium text-xs sm:text-sm active:scale-95"
            >
              {copied ? (
                <>
                  <FiCheck className="text-white text-base" />
                  <span className="text-white font-medium">{t.contact.emailCopied}</span>
                </>
              ) : (
                <>
                  <FiMail className="text-base text-zinc-400" />
                  <span className="truncate">{contactEmail}</span>
                  <FiCopy className="text-xs text-zinc-500 ml-1" />
                </>
              )}
            </button>
          </div>

          {/* FORM INPUT BAR */}
          <form onSubmit={handleSubmit} className="mt-8 sm:mt-10 max-w-md mx-auto w-full">
            <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center rounded-xl border border-zinc-800 bg-zinc-900/50 p-1.5 backdrop-blur-md focus-within:border-zinc-600 transition-colors gap-1.5 sm:gap-0">
              <div className="hidden sm:flex pl-3.5 text-zinc-500">
                <FiMail className="text-base" />
              </div>
              <input
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder={t.contact.inputPlaceholder}
                required
                className="w-full bg-transparent px-3 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg bg-zinc-100 text-black font-medium text-xs hover:bg-white transition-all shadow-sm flex-shrink-0 active:scale-95"
              >
                {submitted ? (
                  <>
                    <FiCheck className="text-sm" />
                    <span>{t.contact.btnSent}</span>
                  </>
                ) : (
                  <>
                    <span>{t.contact.btnSend}</span>
                    <FiSend className="text-xs" />
                  </>
                )}
              </button>
            </div>
            <p className="text-[10px] sm:text-[11px] text-zinc-500 mt-2 font-mono">
              {t.contact.disclaimer}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
