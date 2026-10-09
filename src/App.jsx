import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseMe from "./components/WhyChooseMe";
import Projects from "./components/Projects";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-[#070707] text-[#ededed] font-sans antialiased selection:bg-white/20 selection:text-white">
        {/* Subtle, Elegant Background Layer */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Minimalist Micro Grid */}
          <div className="absolute inset-0 simple-dark-grid opacity-75" />

          {/* Gentle Monochrome Ambient Top Spotlight */}
          <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[680px] h-[380px] bg-white/[0.025] blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute top-[40%] -left-36 w-[400px] h-[400px] bg-zinc-700/[0.04] blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute top-[70%] -right-36 w-[400px] h-[400px] bg-zinc-700/[0.04] blur-[150px] rounded-full pointer-events-none" />
        </div>

        {/* Semantic Content Structure */}
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <WhyChooseMe />
            <Projects />
            <Services />
            <FAQ />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}
