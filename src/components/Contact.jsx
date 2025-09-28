import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé !");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-20 flex flex-col items-center justify-center slide-in"
      style={{
        background:
          "linear-gradient(135deg, #23232a 0%, #18181b 60%, #38bdf8 100%)",
      }}
    >
      <h2 className="text-3xl font-bold mb-6 accent-blue">Contact</h2>
      <form
        className="card w-full max-w-md flex flex-col gap-5 bg-[#23232a] p-8 rounded-xl shadow-lg"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={form.name}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-[#18181b] border border-[#38bdf8] focus:outline-none focus:border-[#f472b6] transition text-white text-base"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-[#18181b] border border-[#38bdf8] focus:outline-none focus:border-[#f472b6] transition text-white text-base"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="p-3 rounded-lg bg-[#18181b] border border-[#38bdf8] focus:outline-none focus:border-[#f472b6] transition resize-none text-white text-base"
        />
        <button
          type="submit"
          className="button mt-2 font-bold text-lg bg-gradient-to-r from-[#38bdf8] to-[#f472b6] text-white rounded-lg py-3 transition hover:scale-105"
        >
          Envoyer
        </button>
      </form>
    </section>
  );
}
