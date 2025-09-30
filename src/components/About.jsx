import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHtml5, 
  faCss3Alt, 
  faJsSquare, 
  faReact, 
  faBootstrap, 
  faGitAlt 
} from "@fortawesome/free-brands-svg-icons";
import { 
  faFileWord, 
  faFileExcel, 
  faFilePowerpoint, 
  faEnvelope 
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  const skills = [
    { name: "HTML", icon: faHtml5, color: "#E34F26" },
    { name: "CSS", icon: faCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: faJsSquare, color: "#F7DF1E" },
    { name: "Tailwind CSS", icon: null }, // image
    { name: "Bootstrap", icon: faBootstrap, color: "#7952B3" },
    { name: "Reactjs", icon: faReact, color: "#61DAFB" },
    { name: "React Router", icon: faReact, color: "#61DAFB" },
    { name: "React Hooks", icon: faReact, color: "#61DAFB" },
    { name: "React props & state", icon: faReact, color: "#61DAFB" },
    { name: "API", icon: null }, // image
    { name: "Git & GitHub", icon: faGitAlt, color: "#F05032" },
    { name: "Microsoft Word", icon: faFileWord, color: "#2B579A" },
    { name: "Microsoft Excel", icon: faFileExcel, color: "#217346" },
    { name: "Microsoft PowerPoint", icon: faFilePowerpoint, color: "#D24726" },
    { name: "Microsoft Outlook", icon: faEnvelope, color: "#0072C6" },
  ];

  return (
    <section id="about" className="py-20 text-center bg-[#18181b] text-white">
      <h2 className="text-3xl font-bold mb-6 accent-blue">About Me</h2>
      <p className="max-w-3xl mx-auto mb-8 px-4 text-gray-300">
        I am Laila Messoudi, a web developer passionate about creating modern and efficient websites.
        I have solid experience in HTML, CSS, JavaScript, and frameworks like React and Bootstrap.
        I also have strong skills in the Microsoft Office suite.
        I love learning new technologies and taking on creative challenges.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="card bg-[#23232a] text-lg font-semibold shadow-md p-4 rounded-lg hover:shadow-xl transition duration-300 flex flex-col items-center"
          >
            <span className="flex items-center gap-2">
              {skill.icon ? (
                <FontAwesomeIcon 
                  icon={skill.icon} 
                  style={{ color: skill.color }} 
                  className="text-2xl hover:scale-110 transition-transform duration-300"
                />
              ) : skill.name === "Tailwind CSS" ? (
                <img 
                  src="src/components/tailwind.png"
                  alt="Tailwind CSS " 
                  className="w-8 h-8 hover:scale-110 transition-transform duration-300" 
                />
              ) : (
                <img 
                  src="src/components/api.png"  
                  alt="API" 
                  className="w-8 h-8 hover:scale-110 transition-transform duration-300" 
                />
              )}
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
