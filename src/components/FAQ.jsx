import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FiChevronDown, FiHelpCircle, FiArrowRight } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

export default function FAQ() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Default open first question for an inviting feel
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      ref={ref}
      className="relative text-white px-4 sm:px-8 md:px-12 py-16 sm:py-24 max-w-5xl mx-auto"
    >
      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/20 backdrop-blur-md mb-4">
          <FiHelpCircle className="text-cyan-400 text-xs" />
          <span className="text-[11px] sm:text-xs font-mono tracking-wider text-cyan-300 uppercase">
            {t.faq.badge}
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
          {t.faq.titlePre} <span className="bg-gradient-to-r from-white via-neutral-100 to-cyan-400 bg-clip-text text-transparent">{t.faq.titleHighlight}</span>
        </h2>
        
        <p className="text-neutral-400 text-sm sm:text-base mt-3 font-light leading-relaxed">
          {t.faq.desc}
        </p>
      </motion.div>

      {/* ACCORDION LIST */}
      <div className="space-y-4">
        {t.faq.items.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={faq.num}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: isInView ? index * 0.08 : 0 }}
              className={`rounded-2xl sm:rounded-3xl border transition-all duration-300 backdrop-blur-xl overflow-hidden ${
                isOpen
                  ? "bg-neutral-950/90 border-cyan-500/40 shadow-[0_10px_35px_rgba(6,182,212,0.15)]"
                  : "bg-neutral-950/60 border-white/10 hover:border-white/20 hover:bg-neutral-950/80 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
              }`}
            >
              {/* ACCORDION TRIGGER */}
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left focus:outline-none group cursor-pointer"
              >
                <div className="flex items-center gap-3.5 sm:gap-4 flex-1">
                  <span
                    className={`font-mono text-xs sm:text-sm font-semibold px-2.5 py-1 rounded-lg border transition-colors flex-shrink-0 ${
                      isOpen
                        ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-300"
                        : "bg-white/[0.03] border-white/10 text-neutral-500 group-hover:text-neutral-300"
                    }`}
                  >
                    {faq.num}
                  </span>
                  
                  <span
                    className={`text-sm sm:text-base md:text-lg font-semibold transition-colors leading-snug ${
                      isOpen
                        ? "text-white"
                        : "text-neutral-300 group-hover:text-white"
                    }`}
                  >
                    {faq.question}
                  </span>
                </div>

                {/* ARROW DOWN ICON WITH SMOOTH ROTATION */}
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isOpen
                      ? "bg-cyan-400 text-black border-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.5)] rotate-180"
                      : "bg-white/[0.04] border-white/10 text-neutral-400 group-hover:border-white/20 group-hover:text-white rotate-0"
                  }`}
                >
                  <FiChevronDown className="text-base sm:text-lg transition-transform" />
                </div>
              </button>

              {/* EXPANDABLE ANSWER BODY */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm md:text-base text-neutral-400 font-light leading-relaxed border-t border-white/5">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* QUICK FOOTER HINT */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-10 sm:mt-12 text-center"
      >
        <p className="text-xs sm:text-sm text-neutral-400 font-light inline-flex items-center flex-wrap justify-center gap-2">
          <span>{t.faq.stillQuestions}</span>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-medium underline underline-offset-4 transition-colors"
          >
            <span>{t.faq.askDirect}</span>
            <FiArrowRight className="text-xs" />
          </a>
        </p>
      </motion.div>
    </section>
  );
}
