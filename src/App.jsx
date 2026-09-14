import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-black text-white selection:bg-cyan-500/20 selection:text-cyan-200">
        {/* High-Level Ambient Glow & Futuristic Micro Grid Background */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Modern white micro grid */}
          <div className="absolute inset-0 modern-grid-bg" />

          {/* Ambient Top Glow / Radial Spotlights */}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-cyan-500/15 via-blue-600/10 to-transparent blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute top-[45%] -left-40 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute top-[75%] -right-40 w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />
        </div>

        {/* Main Content Layers */}
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
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

export default App;
