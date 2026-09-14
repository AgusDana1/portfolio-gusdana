import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiSend, FiMessageSquare, FiCheck, FiCopy } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
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
      className="relative text-white px-6 md:px-12 py-24 max-w-5xl mx-auto"
    >
      <div className="relative rounded-3xl border border-white/10 bg-neutral-950/80 p-8 md:p-14 backdrop-blur-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
        {/* Glow ambient background */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/20 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono tracking-wider text-cyan-300 uppercase">
              Fast Response • Open for Inquiries
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Let's Architect Something <span className="bg-gradient-to-r from-white via-neutral-100 to-cyan-400 bg-clip-text text-transparent">Exceptional</span>
          </h2>

          <p className="text-neutral-400 text-sm md:text-base mt-4 font-light leading-relaxed">
            Have a project in mind, need a fullstack system built, or looking to collaborate?
            Reach out directly and let's turn your concept into reality.
          </p>

          {/* QUICK CHANNELS */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-400 transition-all font-medium text-sm"
            >
              <FaWhatsapp className="text-lg" />
              <span>Chat via WhatsApp</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-neutral-200 hover:bg-white/10 hover:border-white/20 transition-all font-medium text-sm"
            >
              {copied ? (
                <>
                  <FiCheck className="text-cyan-400 text-base" />
                  <span className="text-cyan-400">Email Copied!</span>
                </>
              ) : (
                <>
                  <FiMail className="text-base" />
                  <span>{contactEmail}</span>
                  <FiCopy className="text-xs text-neutral-400 ml-1" />
                </>
              )}
            </button>
          </div>

          {/* FORM INPUT BAR */}
          <form onSubmit={handleSubmit} className="mt-10 max-w-md mx-auto">
            <div className="relative flex items-center rounded-2xl border border-white/15 bg-white/[0.03] p-1.5 backdrop-blur-md focus-within:border-cyan-400/60 transition-colors">
              <div className="pl-3.5 text-neutral-500">
                <FiMail className="text-base" />
              </div>
              <input
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Enter your email to connect..."
                required
                className="w-full bg-transparent px-3 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-cyan-400 transition-all shadow-md flex-shrink-0"
              >
                {submitted ? (
                  <>
                    <FiCheck className="text-sm" />
                    <span>Sent</span>
                  </>
                ) : (
                  <>
                    <span>Send</span>
                    <FiSend className="text-xs" />
                  </>
                )}
              </button>
            </div>
            <p className="text-[11px] text-neutral-500 mt-2 font-mono">
              No spam. Direct professional communication only.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
