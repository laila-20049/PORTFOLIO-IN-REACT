import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(56,189,248,0.18)" }}
      className="bg-[#23232a] p-6 rounded-2xl shadow-lg border-l-4 border-[#38bdf8] hover:border-[#f472b6] transition duration-300"
    >
      <h3 className="text-xl font-bold mb-2 accent-pink">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.desc}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-sm px-2 py-1 rounded-lg bg-gradient-to-r from-[#38bdf8] to-[#f472b6] text-white font-semibold"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
