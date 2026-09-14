import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaLaravel, FaReact, FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript, SiPostgresql } from "react-icons/si";
import { FiCheckCircle, FiCpu, FiTrendingUp, FiZap } from "react-icons/fi";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [projectCount, setProjectCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let projectFrame;
    let experienceFrame;
    const projectTarget = 200;
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
    { icon: <FaReact />, name: "React", desc: "Frontend Engine", color: "text-cyan-400", glow: "hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]" },
    { icon: <FaLaravel />, name: "Laravel", desc: "Backend Robustness", color: "text-red-500", glow: "hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.25)]" },
    { icon: <FaNodeJs />, name: "Node.js", desc: "Runtime & API", color: "text-emerald-400", glow: "hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]" },
    { icon: <SiTailwindcss />, name: "Tailwind", desc: "Modern Styling", color: "text-sky-400", glow: "hover:border-sky-500/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]" },
    { icon: <SiJavascript />, name: "JavaScript", desc: "Interactive Core", color: "text-yellow-400", glow: "hover:border-yellow-500/50 hover:shadow-[0_0_20px_rgba(234,179,8,0.25)]" },
    { icon: <SiPostgresql />, name: "PostgreSQL", desc: "Database Schema", color: "text-blue-400", glow: "hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative text-white px-6 md:px-12 py-24 max-w-6xl mx-auto"
    >
      {/* SECTION TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="text-cyan-400 uppercase tracking-[0.25em] text-xs font-mono mb-2">
          // 01. ABOUT ME
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Architecting High-Performance Systems
        </h2>
        <p className="text-neutral-400 text-base md:text-lg mt-3 max-w-2xl font-light">
          Bridging the gap between scalable backend engineering and sleek, futuristic user interfaces.
        </p>
      </motion.div>

      {/* MODERN BENTO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* BENTO 1: PHILOSOPHY & ABOUT SUMMARY (7 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-7 rounded-3xl border border-white/10 bg-neutral-950/70 p-8 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between"
        >
          <div className="relative z-10">
            <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 mb-6 text-xl">
              <FiCpu />
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              Fullstack Engineer with an eye for modern aesthetics
            </h3>
            
            <p className="text-neutral-400 leading-relaxed text-sm md:text-base font-light">
              I specialize in developing end-to-end applications that are responsive, 
              scalable, and visually striking. From structuring efficient database queries 
              to crafting fluid micro-interactions, I focus on clean code and reliable system architecture.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
            <p className="text-xs uppercase tracking-widest text-neutral-500 font-mono mb-3">
              CORE PRINCIPLES
            </p>
            <div className="flex flex-wrap gap-2.5">
              {[
                "Clean Architecture",
                "Scalable Backend",
                "High Performance",
                "Fluid UX / Micro-Interactions",
                "Modern Standards",
              ].map((item, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] border border-white/10 text-neutral-300"
                >
                  <FiCheckCircle className="text-cyan-400 text-xs" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* BENTO 2: NUMERICAL STATS & IMPACT (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6"
        >
          {/* STAT 1: PROJECTS */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-950/80 to-neutral-900/40 p-8 backdrop-blur-xl relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-2xl rounded-full pointer-events-none" />
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">Total Projects</span>
              <FiTrendingUp className="text-cyan-400 text-lg" />
            </div>
            <div className="text-5xl font-black tracking-tight text-white flex items-baseline gap-1">
              <span>{projectCount}</span>
              <span className="text-cyan-400 text-3xl">+</span>
            </div>
            <p className="text-neutral-400 text-sm mt-2">
              Successfully delivered systems, web platforms, and client solutions.
            </p>
          </div>

          {/* STAT 2: EXPERIENCE */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-950/80 to-neutral-900/40 p-8 backdrop-blur-xl relative overflow-hidden group hover:border-blue-500/40 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-2xl rounded-full pointer-events-none" />
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400">Experience</span>
              <FiZap className="text-blue-400 text-lg" />
            </div>
            <div className="text-5xl font-black tracking-tight text-white flex items-baseline gap-1">
              <span>{experienceCount}</span>
              <span className="text-blue-400 text-3xl">Yrs+</span>
            </div>
            <p className="text-neutral-400 text-sm mt-2">
              Continuous learning and shipping production-grade applications.
            </p>
          </div>
        </motion.div>

        {/* BENTO 3: TECH STACK SHOWCASE (12 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-12 rounded-3xl border border-white/10 bg-neutral-950/70 p-8 backdrop-blur-xl relative"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-cyan-400">Toolkit & Frameworks</p>
              <h3 className="text-xl font-bold text-white mt-1">Technologies I build with everyday</h3>
            </div>
            <span className="text-xs font-mono text-neutral-500">const environment = 'production-ready';</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col items-center text-center group cursor-pointer transition-all duration-300 ${tech.glow}`}
              >
                <div className={`text-4xl ${tech.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {tech.icon}
                </div>
                <h4 className="font-semibold text-sm text-white">{tech.name}</h4>
                <p className="text-xs text-neutral-500 mt-1">{tech.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
