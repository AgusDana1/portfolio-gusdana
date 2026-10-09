import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function OpeningScene({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [showExit, setShowExit] = useState(false);

  useEffect(() => {
    // Lock body scroll while opening scene is active
    document.body.style.overflow = "hidden";

    // Progress counter animation
    const startTime = performance.now();
    const duration = 1600; // 1.6 seconds loading

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out curve
      const eased = 1 - Math.pow(1 - progress, 3);
      setPercent(Math.floor(eased * 100));

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setPercent(100);
        // Brief pause at 100% before triggering elegant shutter exit
        setTimeout(() => {
          setShowExit(true);
          setTimeout(() => {
            document.body.style.overflow = "unset";
            if (onComplete) onComplete();
          }, 850);
        }, 300);
      }
    };

    const frameId = requestAnimationFrame(updateCounter);

    return () => {
      cancelAnimationFrame(frameId);
      document.body.style.overflow = "unset";
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!showExit && (
        <motion.div
          key="opening-scene"
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%", 
            transition: { 
              duration: 0.85, 
              ease: [0.76, 0, 0.24, 1] 
            } 
          }}
          className="fixed inset-0 z-[9999] bg-[#050505] text-white flex flex-col items-center justify-center select-none overflow-hidden"
        >
          {/* Subtle background grid on opening scene */}
          <div className="absolute inset-0 simple-dark-grid opacity-30 pointer-events-none" />

          {/* Elegant geometric frame corners */}
          <div className="absolute w-[85%] max-w-xl h-64 border border-zinc-800/40 pointer-events-none flex flex-col justify-between p-4">
            <div className="flex justify-between text-zinc-600 font-mono text-[10px]">
              <span>+ SYS.INIT</span>
              <span>PORTFOLIO.V2 +</span>
            </div>
            <div className="flex justify-between text-zinc-600 font-mono text-[10px]">
              <span>+ 08°39'S 115°13'E</span>
              <span>READY +</span>
            </div>
          </div>

          {/* Central Assembly Content */}
          <div className="relative z-10 flex flex-col items-center text-center px-4">
            {/* Pulsing indicator dot */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0.8, 1.2, 0.8], opacity: 1 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)] mb-6"
            />

            {/* Brand Title with smooth tracking expand */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="overflow-hidden"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.25em] text-white uppercase font-sans">
                AGUS <span className="text-zinc-500 font-light">DANA</span>
              </h1>
            </motion.div>

            {/* Subtitle / Role */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xs sm:text-sm font-mono tracking-widest text-zinc-400 mt-2 uppercase"
            >
              Fullstack Developer & System Architect
            </motion.p>

            {/* Progress counter & loader bar */}
            <div className="mt-8 flex flex-col items-center gap-2.5 w-48 sm:w-56">
              <div className="w-full flex justify-between items-center text-[11px] font-mono text-zinc-500">
                <span>LOADING</span>
                <span className="text-zinc-300 font-semibold">{percent}%</span>
              </div>

              {/* Minimalist 1px progress track */}
              <div className="w-full h-[1.5px] bg-zinc-800/80 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.7)]"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Bottom subtle branding tag */}
          <div className="absolute bottom-8 text-[11px] font-mono text-zinc-600 tracking-widest uppercase">
            Designed for High Performance
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

