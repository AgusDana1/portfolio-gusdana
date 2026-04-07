import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Services() {

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      id="services"
      ref={ref}
      className="bg-[#081420] text-white px-6 md:px-10 py-20"
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
        className="text-3xl font-bold mb-10"
      >
        FULLSTACK SYSTEM SERVICES I AM PROVIDING
      </motion.h2>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6">

        {[
          {
            title: "UI/UX Design",
            desc: "Modern interface design",
          },
          {
            title: "Full System Web",
            desc: "Responsive websites",
          },
          {
            title: "Branding",
            desc: "Strong identity",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
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
            className="bg-[#0B1C2C] p-6 rounded-xl hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all"
          >

            <h3 className="text-xl font-bold">{item.title}</h3>

            <p className="text-gray-400 mt-2">
              {item.desc}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}
