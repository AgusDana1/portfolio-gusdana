import React from "react";

export default function Navbar() {
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

  const waLink = `https://wa.me/${phoneNumber}`
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-[#0B1C2C] text-white fixed w-full top-0 z-50">
      
      <h1 className="text-xl font-bold">AGUS DANA</h1>

      <ul className="hidden md:flex gap-8">
        <li>
          <a href="#home" className="hover:text-blue-500">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:text-blue-500">About</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
        </li>
        <li>
          <a href="#services" className="hover:text-blue-500">Services</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </li>
      </ul>

      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 px-5 py-2 rounded-full hover:bg-blue-600"
      >
        Let's Talk
      </a>

    </nav>
  );
}
