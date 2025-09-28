import React from "react";

const services = [
  "Custom website development",
  "Redesign and optimization of existing websites",
  "Creation of professional PowerPoint presentations",
  "Training in the use of Microsoft Office",
  "API integration and development",
  "Website maintenance and support",
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#18181b] text-center text-white">
      <h2 className="text-3xl font-bold mb-10 accent-blue">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-4">
        {services.map((service) => (
          <div
            key={service}
            className="card bg-[#23232a] p-6 rounded-lg shadow-md hover:shadow-xl border-l-4 border-[#38bdf8] hover:border-[#f472b6] transition duration-300 text-lg font-semibold accent-pink"
          >
            {service}
          </div>
        ))}
      </div>
    </section>
  );
}
