import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

export default function Hero() {
  const [showSocial, setShowSocial] = useState(false);

  const [width, setWidth] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setWidth(window.innerWidth);

    const handleMouseMove = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative text-white flex mt-10 items-center px-6 md:px-10 overflow-hidden bg-[#0B1C2C]"
    >

      {/* 🔥 GLOBAL FLOATING PARTICLES */}
      {[...Array(25)].map((_, i) => {
        const size =
          i % 3 === 0 ? "w-3 h-3" : i % 3 === 1 ? "w-4 h-4" : "w-5 h-5";

        return (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              x: Math.random() * width,
              y: 300 + Math.random() * 200,
              rotate: Math.random() * 360,
            }}
            animate={{
              opacity: [0, 1, 0.8, 0],
              y: -150,
              rotate: [0, 180, 360],
              x:
                Math.random() * width +
                (mouse.x - width / 2) * 0.03,
            }}
            transition={{
              duration: 8 + Math.random() * 4,
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

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-cyan-400/20 blur-[100px] rounded-full bottom-[-100px] right-[-100px]" />

      {/* 🔥 CENTER GLOW */}
      <div className="absolute w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* 🔥 GRID */}
      <motion.div
        initial={{ backgroundPosition: "0px 0px" }}
        animate={{ backgroundPosition: "40px 40px" }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "linear",
        }}
        className="absolute inset-0 
        bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),
            linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)]
        [background-size:40px_40px]"
      />

      {/* 🔥 CONTENT */}
      <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center w-full">

        {/* TEXT */}
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mt-10">
            Hi! I'm Agus Dana
          </h1>

          <h2 className="text-xl md:text-3xl text-blue-500 mt-2">
            <Typewriter
              words={[
                "I'm a Programmer",
                "I'm a Web Developer",
                "I'm a Fullstack Developer"
              ]}
              loop
              cursor
            />
          </h2>

          <p className="text-gray-400 mt-4">
            Full Stack developer with modern system & modern design.
          </p>

          {/* BUTTON */}
          <button
            onClick={() => setShowSocial(!showSocial)}
            className="mt-6 bg-blue-500 px-6 py-3 rounded-full hover:bg-blue-600 transition"
          >
            GET TOUCH
          </button>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-5 overflow-hidden">
            {showSocial && (
              <>
                <motion.a
                  href="https://www.instagram.com/"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="bg-pink-500 p-3 rounded-full"
                >
                  <FaInstagram />
                </motion.a>

                <motion.a
                  href="https://facebook.com"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-blue-600 p-3 rounded-full"
                >
                  <FaFacebookF />
                </motion.a>

                <motion.a
                  href="https://x.com"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-black p-3 rounded-full"
                >
                  <FaXTwitter />
                </motion.a>
              </>
            )}
          </div>
        </motion.div>

        {/* IMAGE + EXPLOSION */}
        <div className="relative flex justify-center items-center w-full">

          <div className="relative flex justify-center items-center">

            {/* 💥 EXPLOSION PARTICLES */}
            {[...Array(20)].map((_, i) => {
              const angle = Math.random() * 2 * Math.PI;
              const distance = 120 + Math.random() * 80;

              return (
                <motion.div
                  key={i}
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
                    delay: i * 0.03,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeOut",
                  }}
                  className={`absolute ${
                    i % 3 === 0
                      ? "w-2 h-2"
                      : i % 3 === 1
                      ? "w-3 h-3"
                      : "w-4 h-4"
                  }
                  bg-gradient-to-br from-blue-400/60 to-cyan-300/40
                  border border-blue-300/40
                  shadow-[0_0_15px_rgba(59,130,246,0.9)]`}
                />
              );
            })}

            {/* 🔥 SHOCKWAVE */}
            <motion.div
              initial={{ scale: 0, opacity: 0.5 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 2,
              }}
              className="absolute w-40 h-40 border border-blue-400/30 rounded-full"
            />

            {/* 🔥 GLOW */}
            <div className="absolute w-[300px] h-[300px] bg-blue-500/10 blur-3xl rounded-full"></div>

            {/* IMAGE */}
            <img
              src="/images/foto-profile.png"
              alt="foto-diri"
              className="w-full max-w-md rounded-2xl relative z-10"
            />

          </div>

        </div>

      </div>

    </section>
  );
}
