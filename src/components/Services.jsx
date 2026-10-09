import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiLayout, FiServer, FiCpu, FiCheckCircle } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const serviceIcons = [
    <FiServer className="text-xl sm:text-2xl text-zinc-200" />,
    <FiLayout className="text-xl sm:text-2xl text-zinc-200" />,
    <FiCpu className="text-xl sm:text-2xl text-zinc-200" />,
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="relative text-white px-4 sm:px-8 md:px-12 py-16 sm:py-24 max-w-6xl mx-auto"
    >
      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-10 sm:mb-14"
      >
        <p className="text-zinc-500 uppercase tracking-widest text-xs font-mono mb-2">
          {t.services.sub}
        </p>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white">
          {t.services.title}
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base md:text-lg mt-2 sm:mt-3 max-w-2xl font-light">
          {t.services.desc}
        </p>
      </motion.div>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {t.services.list.map((item, index) => (
          <motion.div
            key={item.num}
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: isInView ? index * 0.1 : 0,
            }}
            className="group relative rounded-2xl sm:rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-6 sm:p-8 backdrop-blur-xl hover:border-zinc-700 hover:bg-[#111111] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            <div>
              {/* Card Header with Number and Icon */}
              <div className="flex items-center justify-between mb-5 sm:mb-6">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                  {serviceIcons[index] || serviceIcons[0]}
                </div>
                <span className="text-xl sm:text-2xl font-bold font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors">
                  {item.num}
                </span>
              </div>

              {/* Title & Desc */}
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-zinc-100 transition-colors">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light mb-5 sm:mb-6">
                {item.desc}
              </p>
            </div>

            {/* Deliverables list */}
            <div className="pt-5 sm:pt-6 border-t border-zinc-800/80 space-y-2 sm:space-y-2.5">
              <p className="text-[10px] sm:text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-2.5 sm:mb-3">
                {t.services.keyFeatures}
              </p>
              {item.deliverables.map((d, dIdx) => (
                <div key={dIdx} className="flex items-center gap-2 text-xs text-zinc-300 font-light">
                  <FiCheckCircle className="text-zinc-400 text-xs sm:text-sm flex-shrink-0" />
                  <span className="leading-tight">{d}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
