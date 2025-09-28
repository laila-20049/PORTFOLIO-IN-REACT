import React, { useEffect, useRef } from "react";

export default function About() {
  const skills = [
    { name: "HTML", percent: 100 },
    { name: "CSS", percent: 100 },
    { name: "JavaScript", percent: 90 },
    { name: "Tailwind CSS", percent: 90 },
    { name: "Bootstrap", percent: 95 },
    { name: "Reactjs", percent: 85 },
    { name: "React Router", percent: 80 },
    { name: "React Hooks", percent: 80 },
    { name: "React props & state", percent: 85 },
    { name: "API", percent: 75 },
    { name: "Git & GitHub", percent: 100 },
    { name: "Microsoft Word", percent: 100 },
    { name: "Microsoft Excel", percent: 100 },
    { name: "Microsoft PowerPoint", percent: 100 },
    { name: "Microsoft Outlook", percent: 100 },
  ];

  const barRefs = useRef([]);

  useEffect(() => {
    barRefs.current.forEach((bar, i) => {
      if (bar) {
        bar.style.width = "0%";
        setTimeout(() => {
          bar.style.transition = "width 1.5s cubic-bezier(0.23, 1, 0.32, 1)";
          bar.style.width = `${skills[i].percent}%`;
        }, 100);
      }
    });
  }, []);

  return (
    <section
      id="about"
      className="py-20 text-center bg-[#18181b] text-white"
    >
      <h2 className="text-3xl font-bold mb-6 accent-blue">About Me</h2>
      <p className="max-w-3xl mx-auto mb-8 px-4 text-gray-300">
        I am Laila Messoudi, a web developer passionate about creating modern and efficient websites. I have solid experience in HTML, CSS, JavaScript, and frameworks like React and Bootstrap. I also have strong skills in the Microsoft Office suite. I love learning new technologies and taking on creative challenges.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
        {skills.map((skill, i) => (
          <div
            key={skill.name}
            className="card bg-[#23232a] accent-blue text-lg font-semibold shadow-md p-4 rounded-lg hover:shadow-xl hover:accent-pink transition duration-300 flex flex-col items-center"
          >
            <span>{skill.name}</span>
            <div className="w-full mt-2 flex items-center">
              <div className="h-2 bg-[#23232a] rounded-full relative overflow-hidden flex-1">
                <div
                  ref={el => barRefs.current[i] = el}
                  className="h-2 rounded-full accent-blue"
                  style={{
                    background: "linear-gradient(90deg, #38bdf8 0%, #f472b6 100%)",
                  }}
                ></div>
              </div>
              {/* Add a gap between the bar and percentage */}
              <span className="ml-3 text-xs text-gray-300 font-bold">
                {skill.percent}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
