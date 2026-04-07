import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Projects() {

  const ref = useRef(null);
  const isInView = useInView(ref); // ⬅️ bisa masuk & keluar

  return (
    <section
      id="projects"
      ref={ref}
      className="bg-[#0B1C2C] text-white px-6 md:px-10 py-20"
    >
      
      {/* TITLE */}
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={
          isInView
            ? { y: 0, opacity: 1 }
            : { y: -50, opacity: 0 }
        }
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold mb-10"
      >
        PROJECTS
      </motion.h2>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8">

        {[1,2,3].map((item, index) => (
          <motion.div
            key={item}
            initial={{ y: 100, opacity: 0 }}
            animate={
              isInView
                ? { y: 0, opacity: 1 }
                : { y: 100, opacity: 0 }
            }
            transition={{
              duration: 0.5,
              delay: isInView ? index * 0.2 : 0,
            }}
            className="bg-[#081420] rounded-2xl p-4 hover:scale-105 transition-all shadow-lg"
          >

            {/* IMAGE */}
            <img
              src="/images/project1.jpg"
              className="rounded-xl w-full mb-4"
              alt="project"
            />

            {/* TEXT */}
            <div>
              <h3 className="font-bold">FULLSTACK SYSTEM</h3>
              <p className="text-gray-400 text-sm">
                Web Rent-Car, App
              </p>
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}
