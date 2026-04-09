import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { FaLaravel, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";

export default function About() {

  const ref = useRef(null);
  const isInView = useInView(ref);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  // 🔥 PARALLAX
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yGrid = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-[#081420] text-white px-6 md:px-10 py-20 overflow-hidden"
    >

      {/* 🔥 FLOATING PARTICLES (NAIK) */}
            {[...Array(25)].map((_, i) => {
  const size =
    i % 3 === 0 ? "w-3 h-3" : i % 3 === 1 ? "w-4 h-4" : "w-5 h-5";

  const startX = Math.random() * width;
  const driftX = (Math.random() - 0.5) * 200; // 🔥 GERAK KE KIRI KANAN

  return (
    <motion.div
      key={i}
      initial={{
        opacity: 0,
        x: startX,
        y: 300 + Math.random() * 300,
        rotate: Math.random() * 360,
      }}
      animate={{
        opacity: [0, 1, 0.8, 0],
        y: -200,
        x: startX + driftX, // 🔥 GERAK HORIZONTAL
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 6 + Math.random() * 4,
        delay: Math.random() * 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute ${size}
        bg-gradient-to-br from-blue-400/40 to-cyan-300/30
        border border-blue-300/40
        shadow-[0_0_25px_rgba(59,130,246,0.9)]
        backdrop-blur-sm`}
    />
  );
})}


      {/* 💥 EXPLOSION PARTICLES (TENGAH) */}
      {[...Array(15)].map((_, i) => {
        const angle = Math.random() * 2 * Math.PI;
        const distance = 150 + Math.random() * 100;

        return (
          <motion.div
            key={`exp-${i}`}
            initial={{
              x: 0,
              y: 0,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: Math.cos(angle) * distance,
              y: Math.sin(angle) * distance,
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.05,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeOut",
            }}
            className={`absolute ${
              i % 2 === 0 ? "w-2 h-2" : "w-3 h-3"
            }
            bg-gradient-to-br from-blue-400/70 to-cyan-300/50
            border border-blue-300/40
            shadow-[0_0_15px_rgba(59,130,246,0.9)]`}
            style={{
              left: "50%",
              top: "50%",
            }}
          />
        );
      })}

      {/* 🔥 GRID */}
      <motion.div
        style={{ y: yGrid }}
        animate={{
          backgroundPosition: ["0px 0px", "0px 60px", "0px 0px"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute inset-0
        bg-[linear-gradient(rgba(59,130,246,0.25)_1.5px,transparent_1.5px),
            linear-gradient(90deg,rgba(59,130,246,0.25)_1.5px,transparent_1.5px)]
        [background-size:50px_50px]"
      />

      {/* 🔥 GRID DEPTH */}
      <motion.div
        style={{ y: yGrid }}
        animate={{
          backgroundPosition: ["0px 0px", "60px 0px", "0px 0px"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute inset-0 opacity-20
        bg-[linear-gradient(rgba(59,130,246,0.4)_1px,transparent_1px),
            linear-gradient(90deg,rgba(59,130,246,0.4)_1px,transparent_1px)]
        [background-size:80px_80px]"
      />

      {/* 🔥 OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#081420]/60 to-[#081420]" />

      {/* CONTENT */}
      <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 w-full max-w-sm rounded-xl">
            <img
              src="/images/foto-2.png"
              className="object-cover rounded-xl w-full"
              alt="foto-2"
            />
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 uppercase">About Me</p>

          <h2 className="text-3xl font-bold mt-2">
            I AM AVAILABLE FULLSTACK DEVELOPER PROJECTS
          </h2>

          <p className="text-gray-400 mt-4">
            I create modern system and clean designs that helps business grow.
          </p>

          <div className="flex gap-6 mt-6">
            <div>
              <h3 className="text-2xl font-bold">5+</h3>
              <p className="text-gray-400">Projects</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">3+</h3>
              <p className="text-gray-400">Experience</p>
            </div>
          </div>

          <div className="border-t border-gray-700 my-8"></div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Tech Stack & Soft Skill
            </h3>

            <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 text-center">
              {[
                { icon: <FaLaravel />, name: "Laravel", color: "text-red-500" },
                { icon: <FaReact />, name: "React", color: "text-cyan-400" },
                { icon: <FaNodeJs />, name: "Node Js", color: "text-green-500" },
                { icon: <SiTailwindcss />, name: "Tailwind", color: "text-sky-400" },
                { icon: <SiJavascript />, name: "Javascript", color: "text-yellow-400" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: isInView ? index * 0.1 : 0,
                  }}
                  className="flex flex-col items-center"
                >
                  <div className={`${item.color} text-4xl`}>
                    {item.icon}
                  </div>
                  <p className="text-sm mt-2">{item.name}</p>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-gray-700 my-8"></div>

            <div className="mt-6 text-gray-400 text-md">
              <p>• Problem Solving</p>
              <p>• Team Collaboration</p>
              <p>• Communication</p>
              <p>• Time Management</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
