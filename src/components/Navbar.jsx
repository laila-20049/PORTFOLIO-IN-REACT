import React, { useState } from "react";

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 shadow-lg backdrop-blur-lg ${dark ? "bg-[#18181b]/90" : "bg-[#f3f4f6]/90"}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className={`text-2xl font-bold tracking-wide ${dark ? "accent-blue" : "accent-pink"}`}>
          Laila Messoudi
        </div>
        
        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 items-center text-base font-medium">
          <li>
            <a href="#home" className={`hover:accent-pink transition ${dark ? "" : "text-[#18181b]"}`}>Home</a>
          </li>
          <li>
            <a href="#about" className={`hover:accent-pink transition ${dark ? "" : "text-[#18181b]"}`}>About</a>
          </li>
          <li>
            <a href="#projects" className={`hover:accent-pink transition ${dark ? "" : "text-[#18181b]"}`}>Projects</a>
          </li>
          <li>
            <a href="#services" className={`hover:accent-pink transition ${dark ? "" : "text-[#18181b]"}`}>Services</a>
          </li>
          <li>
            <a href="#contact" className={`hover:accent-pink transition ${dark ? "" : "text-[#18181b]"}`}>Contact</a>
          </li>
          <li>
            <button
              onClick={() => setDark((prev) => !prev)}
              className="button px-4 py-2"
            >
              {dark ? "Light" : "Dark"}
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setOpen(!open)}
            className={`${dark ? "accent-blue" : "accent-pink"} focus:outline-none`}
            aria-label="Open menu"
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <rect y="5" width="24" height="2" rx="1" fill={dark ? "#38bdf8" : "#f472b6"}/>
              <rect y="11" width="24" height="2" rx="1" fill={dark ? "#38bdf8" : "#f472b6"}/>
              <rect y="17" width="24" height="2" rx="1" fill={dark ? "#38bdf8" : "#f472b6"}/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className={`md:hidden border-t slide-in ${dark ? "bg-[#23232a] border-[#38bdf8]" : "bg-[#fff] border-[#f472b6]"}`}>
          <ul className="flex flex-col gap-6 py-6 px-8 text-base font-medium">
            <li>
              <a href="#home" className={`hover:accent-pink transition ${dark ? "" : "text-[#18181b]"}`} onClick={() => setOpen(false)}>Home</a>
            </li>
            <li>
              <a href="#about" className={`hover:accent-pink transition ${dark ? "" : "text-[#18181b]"}`} onClick={() => setOpen(false)}>About</a>
            </li>
            <li>
              <a href="#projects" className={`hover:accent-pink transition ${dark ? "" : "text-[#18181b]"}`} onClick={() => setOpen(false)}>Projects</a>
            </li>
            <li>
              <a href="#services" className={`hover:accent-pink transition ${dark ? "" : "text-[#18181b]"}`} onClick={() => setOpen(false)}>Services</a>
            </li>
            <li>
              <a href="#contact" className={`hover:accent-pink transition ${dark ? "" : "text-[#18181b]"}`} onClick={() => setOpen(false)}>Contact</a>
            </li>
            <li>
              <button
                onClick={() => {
                  setDark((prev) => !prev);
                  setOpen(false);
                }}
                className="button px-4 py-2 w-full"
              >
                {dark ? "Light" : "Dark"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
