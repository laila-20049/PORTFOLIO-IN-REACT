import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-[#23232a] py-12 mt-20 shadow-inner overflow-hidden">
      {/* Decorative blurred circles */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#38bdf8] opacity-20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#f472b6] opacity-10 rounded-full blur-2xl animate-pulse"></div>
      <div className="container mx-auto px-6 flex flex-col items-center relative z-10">
        <div className="mb-6 font-extrabold text-2xl tracking-wide text-white drop-shadow-lg uppercase">
          © {new Date().getFullYear()} Laila Messoudi
        </div>
        <div className="flex gap-7 mb-6">
          <a
            href="https://www.facebook.com/profile.php?id=61554819538318"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="rounded-full p-3 bg-white hover:bg-[#38bdf8] text-[#38bdf8] hover:text-white transition shadow-xl border-2 border-[#38bdf8] scale-100 hover:scale-110 duration-200"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5.02 3.66 9.16 8.44 9.93v-7.03H7.9v-2.9h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34v7.03C18.34 21.23 22 17.09 22 12.07z"/>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/laila.messoudi1?igsh=ZzRpOHd3ZnIyejA="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="rounded-full p-3 bg-white hover:bg-[#f472b6] text-[#f472b6] hover:text-white transition shadow-xl border-2 border-[#f472b6] scale-100 hover:scale-110 duration-200"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
            </svg>
          </a>
          <a
            href="https://wa.me/0620653469"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="rounded-full p-3 bg-white hover:bg-green-500 text-green-500 hover:text-white transition shadow-xl border-2 border-green-500 scale-100 hover:scale-110 duration-200"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.028-.967-.271-.099-.468-.148-.666.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.666-1.611-.912-2.207-.242-.579-.487-.5-.666-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.271.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.075.149.198 2.099 3.2 5.077 4.356.711.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.271-.198-.568-.347z"/>
            </svg>
          </a>
          <a
            href="https://github.com/laila-20049"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full p-3 bg-white hover:bg-gray-800 text-gray-800 hover:text-white transition shadow-xl border-2 border-gray-800 scale-100 hover:scale-110 duration-200"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/laila-messoudi-42526536b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full p-3 bg-white hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white transition shadow-xl border-2 border-[#0A66C2] scale-100 hover:scale-110 duration-200"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.597 2 3.597 4.59v5.606z"/>
            </svg>
          </a>
        </div>
        <div className="text-xs text-gray-300 mt-2 font-medium tracking-wide">
          Designed & Developed by <span className="accent-blue font-bold">Laila Messoudi</span>
        </div>
      </div>
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 w-full h-2 bg-[#38bdf8] opacity-80"></div>
      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-[#38bdf8] opacity-80"></div>
    </footer>
  );
}
