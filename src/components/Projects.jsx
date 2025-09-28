import React from "react";

const projects = [
  { title: "Ecommerce Website", link: "https://ecomirce.vercel.app", desc: "Modern online store built with React and Tailwind CSS." },
  { title: "Restaurant Landing Page", link: "https://restaurant-mxvl.vercel.app", desc: "Responsive restaurant site with menu and booking features." },
  { title: "Portfolio Pro React", link: "https://pro-react-pi.vercel.app", desc: "Personal portfolio showcasing React skills and projects." },
  { title: "More Projects", link: "https://github.com/laila-20049", desc: "Visit my GitHub for more projects and code samples." },

];

export default function Projects() {
  return (
    <section id="projects" className="py-20 text-center bg-[#18181b] text-white">
      <h2 className="text-3xl font-bold mb-10 accent-blue">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="card bg-[#23232a] p-8 rounded-xl shadow-lg hover:shadow-2xl border-l-4 border-[#38bdf8] hover:border-[#f472b6] transition duration-300 flex flex-col items-start slide-in"
          >
            <h3 className="text-xl font-bold mb-3 accent-pink">{project.title}</h3>
            <p className="mb-6 text-gray-300">{project.desc}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`button px-5 py-2 mt-auto font-bold text-lg transition
                ${project.title === "More Projects"
                  ? "bg-gradient-to-r from-[#f472b6] to-[#38bdf8] text-white"
                  : "bg-[#38bdf8] text-[#18181b] hover:bg-[#f472b6] hover:text-white"}
              `}
              style={{ letterSpacing: "1px" }}
            >
              {project.title === "More Projects" ? "GitHub" : "View Site"}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
