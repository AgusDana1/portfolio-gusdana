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
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/80 backdrop-blur-md mb-4">
          <FiHelpCircle className="text-zinc-400 text-xs" />
          <span className="text-[11px] sm:text-xs font-mono tracking-wider text-zinc-300 uppercase">
            {t.faq.badge}
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white">
          {t.faq.titlePre}{" "}
          <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            {t.faq.titleHighlight}
          </span>
        </h2>
        
        <p className="text-zinc-400 text-sm sm:text-base mt-3 font-light leading-relaxed">
          {t.faq.desc}
        </p>
      </motion.div>

      {/* ACCORDION LIST */}
      <div className="space-y-3.5 sm:space-y-4">
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
                  ? "bg-[#121212] border-zinc-700 shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
                  : "bg-[#0d0d0d] border-zinc-800/80 hover:border-zinc-700 hover:bg-[#111111] shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
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
                        ? "bg-zinc-800 border-zinc-700 text-zinc-100"
                        : "bg-zinc-900 border-zinc-800 text-zinc-500 group-hover:text-zinc-300"
                    }`}
                  >
                    {faq.num}
                  </span>
                  
                  <span
                    className={`text-sm sm:text-base md:text-lg font-medium transition-colors leading-snug ${
                      isOpen
                        ? "text-white font-semibold"
                        : "text-zinc-300 group-hover:text-white"
                    }`}
                  >
                    {faq.question}
                  </span>
                </div>

                {/* ARROW DOWN ICON WITH SMOOTH ROTATION */}
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isOpen
                      ? "bg-zinc-100 text-black border-white shadow-sm rotate-180"
                      : "bg-zinc-900 border-zinc-800 text-zinc-400 group-hover:border-zinc-700 group-hover:text-white rotate-0"
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
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm md:text-base text-zinc-400 font-light leading-relaxed border-t border-zinc-800/80">
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
        <p className="text-xs sm:text-sm text-zinc-400 font-light inline-flex items-center flex-wrap justify-center gap-2">
          <span>{t.faq.stillQuestions}</span>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 text-zinc-200 hover:text-white font-medium underline underline-offset-4 transition-colors"
          >
            <span>{t.faq.askDirect}</span>
            <FiArrowRight className="text-xs" />
          </a>
        </p>
      </motion.div>
    </section>
  );
}
