import React, { useState } from "react";

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);

  const linkStyle = `
    relative 
    after:content-[''] after:absolute after:left-0 after:-bottom-1 
    after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-pink-400 after:to-sky-400 
    after:transition-all after:duration-300 hover:after:w-full
  `;

  const links = ["home", "about", "projects", "services", "contact"];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 shadow-lg backdrop-blur-lg ${dark ? "bg-[#18181b]/90" : "bg-[#f3f4f6]/90"}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className={`text-2xl font-bold tracking-wide ${dark ? "text-sky-400" : "text-pink-400"}`}>
          Laila Messoudi
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 items-center text-base font-medium">
          {links.map((id) => (
            <li key={id}>
              <a href={`#${id}`} className={`${linkStyle} ${dark ? "text-white" : "text-[#18181b]"}`}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
          {/* Dark/Light Button */}
          <li>
            <button
              onClick={() => setDark((prev) => !prev)}
              className="px-4 py-2 rounded-lg font-medium bg-gradient-to-r from-pink-400 to-sky-400 text-white shadow-md hover:opacity-90 transition"
            >
              {dark ? "Light Mode" : "Dark Mode"}
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setOpen(!open)}
            className={`${dark ? "text-sky-400" : "text-pink-400"} focus:outline-none`}
            aria-label="Open menu"
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <rect y="5" width="24" height="2" rx="1" fill={dark ? "#38bdf8" : "#f472b6"} />
              <rect y="11" width="24" height="2" rx="1" fill={dark ? "#38bdf8" : "#f472b6"} />
              <rect y="17" width="24" height="2" rx="1" fill={dark ? "#38bdf8" : "#f472b6"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className={`md:hidden border-t slide-in ${dark ? "bg-[#23232a] border-[#38bdf8]" : "bg-[#fff] border-[#f472b6]"}`}>
          <ul className="flex flex-col gap-6 py-6 px-8 text-base font-medium">
            {links.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`${linkStyle} ${dark ? "text-white" : "text-[#18181b]"}`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  setDark((prev) => !prev);
                  setOpen(false);
                }}
                className="px-4 py-2 rounded-lg font-medium bg-gradient-to-r from-pink-400 to-sky-400 text-white shadow-md hover:opacity-90 transition w-full"
              >
                {dark ? "Light Mode" : "Dark Mode"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
