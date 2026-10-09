import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  FiSliders, 
  FiSmartphone, 
  FiZap, 
  FiMessageSquare, 
  FiLayers, 
  FiCheckCircle, 
  FiShield 
} from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

export default function WhyChooseMe() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const cardMeta = [
    {
      icon: <FiSliders className="text-xl text-zinc-200" />,
      spanCol: "md:col-span-6 lg:col-span-6",
    },
    {
      icon: <FiSmartphone className="text-xl text-zinc-200" />,
      spanCol: "md:col-span-6 lg:col-span-6",
    },
    {
      icon: <FiZap className="text-xl text-zinc-200" />,
      spanCol: "md:col-span-4 lg:col-span-4",
    },
    {
      icon: <FiMessageSquare className="text-xl text-zinc-200" />,
      spanCol: "md:col-span-4 lg:col-span-4",
    },
    {
      icon: <FiLayers className="text-xl text-zinc-200" />,
      spanCol: "md:col-span-4 lg:col-span-4",
    },
  ];

  return (
    <section
      id="why-choose-me"
      ref={ref}
      className="relative text-white px-4 sm:px-8 md:px-12 py-16 sm:py-24 max-w-6xl mx-auto"
    >
      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/80 backdrop-blur-md mb-4">
          <FiShield className="text-zinc-400 text-xs" />
          <span className="text-[11px] sm:text-xs font-mono tracking-wider text-zinc-300 uppercase">
            {t.whyChooseMe.badge}
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white">
          {t.whyChooseMe.titlePre}{" "}
          <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            {t.whyChooseMe.titleHighlight}
          </span>
        </h2>

        <p className="text-zinc-400 text-sm sm:text-base mt-3 font-light leading-relaxed">
          {t.whyChooseMe.desc}
        </p>
      </motion.div>

      {/* BENTO GRID (2 wide cards in row 1, 3 cards in row 2) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
        {t.whyChooseMe.points.map((point, index) => {
          const meta = cardMeta[index] || cardMeta[0];

          return (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: isInView ? index * 0.08 : 0,
              }}
              className={`${meta.spanCol} group relative rounded-2xl sm:rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1 hover:border-zinc-700 hover:bg-[#111111] shadow-[0_10px_30px_rgba(0,0,0,0.5)]`}
            >
              <div className="relative z-10">
                {/* Top bar with Icon & Tag */}
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    {meta.icon}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase px-2.5 py-1 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-300">
                      {point.tag}
                    </span>
                    <span className="text-xs font-mono font-medium text-zinc-600 group-hover:text-zinc-400 transition-colors">
                      #{point.id}
                    </span>
                  </div>
                </div>

                {/* Point Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2.5 group-hover:text-zinc-100 transition-colors">
                  {point.title}
                </h3>

                {/* Point Description */}
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                  {point.desc}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="relative z-10 mt-6 pt-5 border-t border-zinc-800/80 flex items-center gap-2 text-[11px] font-mono text-zinc-500">
                <FiCheckCircle className="text-zinc-400 text-xs flex-shrink-0" />
                <span className="uppercase tracking-wider">Verified Standard</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
