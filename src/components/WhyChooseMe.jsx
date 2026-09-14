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

  // Icons and individual card theme accents corresponding to the 5 points
  const cardThemes = [
    {
      icon: <FiSliders className="text-2xl text-cyan-400" />,
      glowColor: "from-cyan-500/15 via-blue-500/5 to-transparent",
      accentBorder: "group-hover:border-cyan-500/50",
      pillBg: "bg-cyan-500/10 border-cyan-500/30 text-cyan-300",
      spanCol: "md:col-span-6 lg:col-span-6",
    },
    {
      icon: <FiSmartphone className="text-2xl text-blue-400" />,
      glowColor: "from-blue-500/15 via-indigo-500/5 to-transparent",
      accentBorder: "group-hover:border-blue-500/50",
      pillBg: "bg-blue-500/10 border-blue-500/30 text-blue-300",
      spanCol: "md:col-span-6 lg:col-span-6",
    },
    {
      icon: <FiZap className="text-2xl text-amber-400" />,
      glowColor: "from-amber-500/15 via-orange-500/5 to-transparent",
      accentBorder: "group-hover:border-amber-500/50",
      pillBg: "bg-amber-500/10 border-amber-500/30 text-amber-300",
      spanCol: "md:col-span-4 lg:col-span-4",
    },
    {
      icon: <FiMessageSquare className="text-2xl text-emerald-400" />,
      glowColor: "from-emerald-500/15 via-teal-500/5 to-transparent",
      accentBorder: "group-hover:border-emerald-500/50",
      pillBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300",
      spanCol: "md:col-span-4 lg:col-span-4",
    },
    {
      icon: <FiLayers className="text-2xl text-purple-400" />,
      glowColor: "from-purple-500/15 via-violet-500/5 to-transparent",
      accentBorder: "group-hover:border-purple-500/50",
      pillBg: "bg-purple-500/10 border-purple-500/30 text-purple-300",
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
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/20 backdrop-blur-md mb-4">
          <FiShield className="text-cyan-400 text-xs" />
          <span className="text-[11px] sm:text-xs font-mono tracking-wider text-cyan-300 uppercase">
            {t.whyChooseMe.badge}
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
          {t.whyChooseMe.titlePre}{" "}
          <span className="bg-gradient-to-r from-white via-neutral-100 to-cyan-400 bg-clip-text text-transparent">
            {t.whyChooseMe.titleHighlight}
          </span>
        </h2>

        <p className="text-neutral-400 text-sm sm:text-base mt-3 font-light leading-relaxed">
          {t.whyChooseMe.desc}
        </p>
      </motion.div>

      {/* BENTO GRID (2 wide cards in row 1, 3 cards in row 2) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
        {t.whyChooseMe.points.map((point, index) => {
          const theme = cardThemes[index] || cardThemes[0];

          return (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: isInView ? index * 0.1 : 0,
              }}
              className={`${theme.spanCol} group relative rounded-2xl sm:rounded-3xl border border-white/10 bg-neutral-950/70 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.6)] ${theme.accentBorder}`}
            >
              {/* Subtle ambient gradient overlay */}
              <div
                className={`absolute top-0 right-0 w-60 h-60 bg-gradient-to-br ${theme.glowColor} blur-2xl rounded-full pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Top bar with Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {theme.icon}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] sm:text-[11px] font-mono uppercase px-2.5 py-1 rounded-full border ${theme.pillBg}`}>
                      {point.tag}
                    </span>
                    <span className="text-xs font-mono font-bold text-neutral-600 group-hover:text-neutral-400 transition-colors">
                      #{point.id}
                    </span>
                  </div>
                </div>

                {/* Point Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                  {point.title}
                </h3>

                {/* Point Description */}
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light">
                  {point.desc}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="relative z-10 mt-6 pt-5 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-neutral-500">
                <FiCheckCircle className="text-cyan-400 text-xs flex-shrink-0" />
                <span className="uppercase tracking-wider">Standard Verified</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

