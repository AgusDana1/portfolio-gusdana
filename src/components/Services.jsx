import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiLayout, FiServer, FiCpu, FiShield, FiCheckCircle } from "react-icons/fi";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const services = [
    {
      num: "01",
      icon: <FiServer className="text-2xl text-cyan-400" />,
      title: "Fullstack Web Systems",
      desc: "Architecting end-to-end applications from scratch. Combining resilient backend architectures (Laravel / Node.js) with reactive, high-speed frontend engines (React).",
      deliverables: ["Full Architecture Setup", "Relational Database Design", "REST API Development", "Secure Session & Auth"],
    },
    {
      num: "02",
      icon: <FiLayout className="text-2xl text-blue-400" />,
      title: "Futuristic UI/UX & Web Apps",
      desc: "Crafting fluid, high-converting interfaces that feel alive. Focusing on dark-mode-first aesthetics, seamless micro-animations, and 100% responsive layouts.",
      deliverables: ["Responsive Cross-device UI", "Framer Motion Animations", "Design Systems & Components", "Lighthouse 95+ Performance"],
    },
    {
      num: "03",
      icon: <FiCpu className="text-2xl text-emerald-400" />,
      title: "System Integration & APIs",
      desc: "Connecting disparate platforms into a unified ecosystem. Seamless integration of third-party APIs, payment gateways, messaging bots, and automated background jobs.",
      deliverables: ["Payment Gateway Hooks", "OAuth & SSO Security", "Webhook Automations", "Cloud & Docker Deployment"],
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="relative text-white px-6 md:px-12 py-24 max-w-6xl mx-auto"
    >
      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="text-cyan-400 uppercase tracking-[0.25em] text-xs font-mono mb-2">
          // 03. SPECIALIZATIONS
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          High-Level Engineering Services
        </h2>
        <p className="text-neutral-400 text-base md:text-lg mt-3 max-w-2xl font-light">
          Delivering production-grade digital solutions that combine system reliability with futuristic visual polish.
        </p>
      </motion.div>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {services.map((item, index) => (
          <motion.div
            key={item.num}
            initial={{ opacity: 0, y: 35 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: isInView ? index * 0.15 : 0,
            }}
            className="group relative rounded-3xl border border-white/10 bg-neutral-950/70 p-8 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
          >
            <div>
              {/* Card Header with Number and Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400/40 transition-all duration-300">
                  {item.icon}
                </div>
                <span className="text-2xl font-black font-mono text-neutral-700 group-hover:text-cyan-400/40 transition-colors">
                  {item.num}
                </span>
              </div>

              {/* Title & Desc */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-light mb-6">
                {item.desc}
              </p>
            </div>

            {/* Deliverables list */}
            <div className="pt-6 border-t border-white/10 space-y-2.5">
              <p className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mb-3">
                Key Features
              </p>
              {item.deliverables.map((d, dIdx) => (
                <div key={dIdx} className="flex items-center gap-2 text-xs text-neutral-300 font-light">
                  <FiCheckCircle className="text-cyan-400 text-sm flex-shrink-0" />
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
