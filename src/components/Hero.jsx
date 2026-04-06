import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

export default function Hero() {
  const [showSocial, setShowSocial] = useState(false);

  return (
    <section id="home" className="bg-[#0B1C2C] text-white min-h-screen flex items-center px-10">

      <div className="grid md:grid-cols-2 gap-10 items-center w-full">

        {/* TEXT */}
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mt-2">
            Hi! I'm Agus Dana
          </h1>

          <h2 className="text-3xl text-blue-500 mt-2">
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

          {/* SOCIAL ICON */}
          <div className="flex gap-4 mt-5 overflow-hidden">

            {showSocial && (
              <>
                <motion.a
                  href="https://www.instagram.com/aagusss_7?igsh=M3hvbm81Mjg3ZG44"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="bg-pink-500 p-3 rounded-full hover:scale-110"
                >
                  <FaInstagram />
                </motion.a>

                <motion.a
                  href="https://facebook.com"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-blue-600 p-3 rounded-full hover:scale-110"
                >
                  <FaFacebookF />
                </motion.a>

                <motion.a
                  href="https://x.com"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-black p-3 rounded-full hover:scale-110"
                >
                  <FaXTwitter />
                </motion.a>
              </>
            )}
          </div>
        </motion.div>

        {/* IMAGE + BLUR */}
        <div className="relative flex justify-center items-center w-full rounded-xl">
            { /* Image */}
            <img
                src="/images/foto-profile.png"
                alt="foto-diri"
                className="w-full rounded-2xl relative z-10"
            />
        </div>
      </div>

      </section>
    );
  }
