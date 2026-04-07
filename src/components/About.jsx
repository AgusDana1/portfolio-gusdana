import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaLaravel, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";

export default function About() {

  const ref = useRef(null);
  const isInView = useInView(ref); 

  return (
    <section
      id="about"
      ref={ref}
      className="bg-[#081420] text-white px-6 md:px-10 py-20"
    >

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={
            isInView
              ? { x: 0, opacity: 1 }
              : { x: -100, opacity: 0 }
          }
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex justify-center"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 w-full max-w-sm rounded-xl p-2">
            <img
              src="/images/foto-2.png"
              className="object-cover rounded-md w-full"
              alt="foto-2"
            />
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={
            isInView
              ? { x: 0, opacity: 1 }
              : { x: 100, opacity: 0 }
          }
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >

          <p className="text-blue-400 uppercase">About Me</p>

          <h2 className="text-3xl font-bold mt-2">
            I AM AVAILABLE FULLSTACK DEVELOPER PROJECTS
          </h2>

          <p className="text-gray-400 mt-4">
            I create modern system and clean designs that helps business grow.
          </p>

          {/* STATS */}
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

          {/* LINE */}
          <div className="border-t border-gray-700 my-8"></div>

          {/* TECH STACK */}
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
                  animate={
                    isInView
                      ? { y: 0, opacity: 1 }
                      : { y: 50, opacity: 0 }
                  }
                  transition={{
                    duration: 0.4,
                    delay: isInView ? index * 0.1 : 0,
                  }}
                  className="flex flex-col items-center hover:scale-110 transition"
                >
                  <div className={`${item.color} text-4xl drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]`}>
                    {item.icon}
                  </div>
                  <p className="text-sm mt-2">{item.name}</p>
                </motion.div>
              ))}

            </div>

            {/* LINE */}
            <div className="border-t border-gray-700 my-8"></div>

            {/* SOFT SKILL */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={
                isInView
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
              transition={{ duration: 0.5 }}
              className="mt-6 text-gray-400 text-md"
            >
              <p>• Problem Solving</p>
              <p>• Team Collaboration</p>
              <p>• Communication</p>
              <p>• Time Management</p>
            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
