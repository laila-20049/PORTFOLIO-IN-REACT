import React from "react";

export default function Hero() {
  return (
    <header
      id="home"
      className="relative flex flex-col items-center justify-center text-center py-32 bg-gradient-to-r from-[#18181b] via-[#23232a] to-[#1e293b] text-white"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-4 accent-blue drop-shadow-lg">
        LAILA MESSOUDI
      </h1>
      <h2 className="text-2xl md:text-3xl font-light mb-4 accent-pink">
        Web Developer
      </h2>
      <p className="max-w-2xl mx-auto mb-6 px-4 text-lg text-gray-300">
        Hi, I’m Laila Messoudi, a passionate web developer specialized in HTML, CSS, and JavaScript. I also have strong skills in Microsoft Office (Word, Excel, PowerPoint). I enjoy building clean, responsive, and user-friendly websites. Explore my portfolio to discover my projects and skills.
      </p>
      <a
        href="https://eu.docs.wps.com/module/common/loadPlatform/?sid=sIHD6s7f6AZvP4sYG&v=v2"
        download
        className="button inline-block mt-4"
      >
        Download CV
      </a>
    </header>
  );
}
