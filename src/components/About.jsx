import React from "react";

export default function About() {
  const skills = [
    { name: "HTML", level: 5 },
    { name: "CSS", level: 5 },
    { name: "JavaScript", level: 4 },
    { name: "Tailwind CSS", level: 4 },
    { name: "Bootstrap", level: 5 },
    { name: "Reactjs", level: 4 },
    { name: "React Router", level: 4 },
    { name: "React Hooks", level: 4 },
    { name: "React props & state", level: 4 },
    { name: "API", level: 3 },
    { name: "Git & GitHub", level: 5 },
    { name: "Microsoft Word", level: 5 },
    { name: "Microsoft Excel", level: 5 },
    { name: "Microsoft PowerPoint", level: 5 },
    { name: "Microsoft Outlook", level: 5 },
  ];

  // function to get face depending on level
  const getFace = (level) => {
    switch (level) {
      case 5:
        return "😍";
      case 4:
        return "😀";
      case 3:
        return "🙂";
      case 2:
        return "😐";
      case 1:
        return "😢";
      default:
        return "❓";
    }
  };

  return (
    <section
      id="about"
      className="py-20 text-center bg-[#18181b] text-white"
    >
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
            <span>{skill.name}</span>
            <div className="mt-2 text-3xl">
              {getFace(skill.level)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
