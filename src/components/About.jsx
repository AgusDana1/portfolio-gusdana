import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaLaravel, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiPostgresql } from "react-icons/si";
import { FiCheckCircle, FiCpu, FiTrendingUp, FiZap } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [projectCount, setProjectCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let projectFrame;
    let experienceFrame;
    const projectTarget = 15;
    const experienceTarget = 3;

    const animateValue = (setter, target, duration, step) => {
      const start = performance.now();

      const tick = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.floor(target * eased);

        setter(value);

        if (progress < 1) {
          step(tick);
        } else {
          setter(target);
        }
      };

      step(tick);
    };

    animateValue(setProjectCount, projectTarget, 1400, (cb) => {
      projectFrame = requestAnimationFrame(cb);
    });

    animateValue(setExperienceCount, experienceTarget, 1200, (cb) => {
      experienceFrame = requestAnimationFrame(cb);
    });

    return () => {
      cancelAnimationFrame(projectFrame);
      cancelAnimationFrame(experienceFrame);
    };
  }, [isInView]);

  const techStack = [
    { icon: <FaReact />, name: "React", desc: "Frontend Engine" },
    { icon: <FaLaravel />, name: "Laravel", desc: "Backend Robustness" },
    { icon: <FaNodeJs />, name: "Node.js", desc: "Runtime & API" },
    { icon: <SiTailwindcss />, name: "Tailwind", desc: "Modern Styling" },
    { icon: <SiJavascript />, name: "JavaScript", desc: "Interactive Core" },
    { icon: <SiPostgresql />, name: "PostgreSQL", desc: "Database Schema" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative text-white px-4 sm:px-8 md:px-12 py-16 sm:py-24 max-w-6xl mx-auto"
    >
      {/* SECTION TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-10 sm:mb-14"
      >
        <p className="text-zinc-500 uppercase tracking-widest text-xs font-mono mb-2">
          {t.about.sub}
        </p>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white">
          {t.about.title}
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base md:text-lg mt-2 sm:mt-3 max-w-2xl font-light">
          {t.about.desc}
        </p>
      </motion.div>

      {/* MODERN BENTO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">

        {/* BENTO 1: PHILOSOPHY & ABOUT SUMMARY (7 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-7 rounded-2xl sm:rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-5 sm:p-8 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between"
        >
          <div className="relative z-10">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 mb-5 sm:mb-6 text-lg">
              <FiCpu />
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              {t.about.cardTitle}
            </h3>
            
            <p className="text-zinc-400 leading-relaxed text-xs sm:text-sm md:text-base font-light">
              {t.about.cardDesc}
            </p>
          </div>

          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-zinc-800 relative z-10">
            <p className="text-[11px] sm:text-xs uppercase tracking-widest text-zinc-500 font-mono mb-3">
              {t.about.principlesTitle}
            </p>
            <div className="flex flex-wrap gap-2">
              {t.about.principles.map((item, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium bg-zinc-900/80 border border-zinc-800 text-zinc-300"
                >
                  <FiCheckCircle className="text-zinc-400 text-xs flex-shrink-0" />
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* BENTO 2: NUMERICAL STATS & IMPACT (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-5 sm:gap-6"
        >
          {/* STAT 1: PROJECTS */}
          <div className="rounded-2xl sm:rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-6 sm:p-7 backdrop-blur-xl relative overflow-hidden group hover:border-zinc-700 transition-all duration-300">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">{t.about.totalProjects}</span>
              <FiTrendingUp className="text-zinc-400 text-base" />
            </div>
            <div className="text-4xl sm:text-5xl font-bold tracking-tight text-white flex items-baseline gap-1">
              <span>{projectCount}</span>
              <span className="text-zinc-500 text-3xl">+</span>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2 font-light">
              {t.about.projectsDesc}
            </p>
          </div>

          {/* STAT 2: EXPERIENCE */}
          <div className="rounded-2xl sm:rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-6 sm:p-7 backdrop-blur-xl relative overflow-hidden group hover:border-zinc-700 transition-all duration-300">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">{t.about.experience}</span>
              <FiZap className="text-zinc-400 text-base" />
            </div>
            <div className="text-4xl sm:text-5xl font-bold tracking-tight text-white flex items-baseline gap-1">
              <span>{experienceCount}</span>
              <span className="text-zinc-500 text-3xl">{t.about.experienceUnit}</span>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2 font-light">
              {t.about.experienceDesc}
            </p>
          </div>
        </motion.div>

        {/* BENTO 3: TECH STACK SHOWCASE (12 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-12 rounded-2xl sm:rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-5 sm:p-8 backdrop-blur-xl relative"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-6 sm:mb-8">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">{t.about.toolkitTitle}</p>
              <h3 className="text-lg sm:text-xl font-semibold text-white mt-1">{t.about.toolkitSubtitle}</h3>
            </div>
            <span className="text-[11px] sm:text-xs font-mono text-zinc-500 hidden sm:inline">const environment = 'production';</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/40 flex flex-col items-center text-center group cursor-pointer transition-all duration-200 hover:bg-zinc-900 hover:border-zinc-700"
              >
                <div className="text-3xl text-zinc-300 mb-2 group-hover:text-white group-hover:scale-105 transition-all duration-200">
                  {tech.icon}
                </div>
                <h4 className="font-medium text-xs sm:text-sm text-zinc-200">{tech.name}</h4>
                <p className="text-[10px] sm:text-xs text-zinc-500 mt-0.5">{tech.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
