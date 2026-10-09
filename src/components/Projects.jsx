import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiGithub, FiArrowUpRight, FiLayers } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState("all");

  const projectMeta = [
    {
      id: "01",
      categoryKey: "fullstack",
      tags: ["React", "Laravel", "Tailwind CSS", "MySQL"],
      status: "Production Ready",
      demoLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      id: "02",
      categoryKey: "webapp",
      tags: ["React", "Node.js", "Tailwind CSS", "PostgreSQL"],
      status: "Active",
      demoLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      id: "03",
      categoryKey: "system",
      tags: ["React", "Laravel", "REST API", "Tailwind CSS"],
      status: "Featured",
      demoLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      id: "04",
      categoryKey: "fullstack",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      status: "Completed",
      demoLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      id: "05",
      categoryKey: "webapp",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      status: "Production",
      demoLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      id: "06",
      categoryKey: "system",
      tags: ["Laravel", "PostgreSQL", "Docker", "REST API"],
      status: "Active",
      demoLink: "https://example.com",
      githubLink: "https://github.com",
    },
  ];

  // Merge static metadata with translated text from language context
  const projectList = projectMeta.map((meta, index) => {
    const itemTrans = t.projects.items[index] || {};
    return {
      ...meta,
      title: itemTrans.title || "",
      category: itemTrans.category || "",
      description: itemTrans.description || "",
      highlightMetric: itemTrans.highlightMetric || "",
    };
  });

  const filterOptions = [
    { key: "all", label: t.projects.filterAll },
    { key: "fullstack", label: t.projects.filterFullstack },
    { key: "webapp", label: t.projects.filterWebApp },
    { key: "system", label: t.projects.filterSystem },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projectList
      : projectList.filter((item) => item.categoryKey === activeFilter);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative text-white px-4 sm:px-8 md:px-12 py-16 sm:py-24 max-w-6xl mx-auto"
    >
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-zinc-500 uppercase tracking-widest text-xs font-mono mb-2">
            {t.projects.sub}
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white">
            {t.projects.title}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg mt-2 sm:mt-3 max-w-xl font-light">
            {t.projects.desc}
          </p>
        </motion.div>

        {/* FILTER BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap items-center gap-1.5 p-1 rounded-full border border-zinc-800 bg-zinc-900/60 backdrop-blur-md self-start md:self-auto"
        >
          {filterOptions.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setActiveFilter(opt.key)}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                activeFilter === opt.key
                  ? "bg-zinc-100 text-black font-semibold shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </motion.div>
      </div>

      {/* PROJECTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: isInView ? index * 0.08 : 0,
            }}
            className="group relative rounded-2xl sm:rounded-3xl border border-zinc-800 bg-[#0d0d0d] hover:border-zinc-700 hover:bg-[#111111] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1"
          >
            {/* Top Interactive Glass Window Bar */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 border-b border-zinc-800 bg-zinc-900/40">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-600 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-600 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-600 inline-block" />
                <span className="ml-1.5 sm:ml-2 text-[10px] sm:text-[11px] font-mono text-zinc-500 tracking-wider">
                  SYS-{project.id}
                </span>
              </div>
              <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-zinc-800/80 border border-zinc-700/80 text-zinc-300">
                {project.category}
              </span>
            </div>

            {/* Visual Header with Subtle Dark Gray Tone */}
            <div className="relative h-40 sm:h-44 w-full bg-gradient-to-b from-zinc-900/70 to-zinc-950 p-4 sm:p-6 flex flex-col justify-between overflow-hidden border-b border-zinc-800/80">
              <div className="absolute inset-0 simple-dots-bg opacity-30" />
              
              {/* Status Badge */}
              <div className="relative z-10 flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono bg-black/70 border border-zinc-800 text-zinc-300 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  {project.status}
                </span>

                <span className="text-[10px] sm:text-[11px] font-mono text-zinc-300 font-medium bg-zinc-900/90 border border-zinc-800 px-2.5 py-0.5 rounded-full">
                  {project.highlightMetric}
                </span>
              </div>

              {/* Minimal System Graphic Representation */}
              <div className="relative z-10">
                <div className="text-zinc-500 font-mono text-[9px] sm:text-[10px] flex items-center gap-1.5">
                  <FiLayers className="text-zinc-400" />
                  <span>{t.projects.archetype}</span>
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-white tracking-tight mt-1 line-clamp-1 group-hover:text-zinc-200 transition-colors">
                  {project.title}
                </h4>
              </div>
            </div>

            {/* Description & Tech Stack */}
            <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-3 font-light">
                {project.description}
              </p>

              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-zinc-800">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5 sm:mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 sm:py-1 rounded-md text-[10px] sm:text-[11px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions (Demo & GitHub) */}
                <div className="flex items-center justify-between pt-1">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-200 hover:text-white transition-colors group/link py-1"
                  >
                    <span>{t.projects.livePreview}</span>
                    <FiArrowUpRight className="text-sm group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Source Code"
                    className="p-2 rounded-full border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white transition-all text-sm"
                  >
                    <FiGithub />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
