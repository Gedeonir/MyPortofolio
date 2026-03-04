import React from "react";
import { motion } from "framer-motion";
import profile from "../../assets/profile.jpg";

export default function About() {
  return (
    <section id="about" className="lg:px-20 px-6 py-20 bg-secondary_2 dark:bg-dark_secondary_2">
      <motion.div
        className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left: Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[#2e94c5] shadow-xl">
            <img src={profile} alt="Irafasha Gedeon" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Right: Text */}
        <div className="text-dark_primary dark:text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-widest">
            About Me
          </h2>

          <p className="mb-4 text-lg leading-relaxed">
            I am a <span className="font-bold text-[#2e94c5]">Full-Stack JavaScript Developer </span> 
            building modern, scalable web applications with React, Node.js, and Express. I specialize in creating clean, responsive UIs, designing efficient APIs, and delivering production-ready apps.
          </p>

          <p className="mb-4 text-lg leading-relaxed">
            I have experience in database design, authentication, deployment, and optimizing application performance for real-world usage. Passionate about solving complex problems and continuously learning new technologies.
          </p>

          <ul className="mb-6 grid grid-cols-2 gap-2 text-[#2e94c5] font-semibold">
            <li>React / Redux</li>
            <li>Node.js / Express</li>
            <li>MongoDB / PostgreSQL</li>
            <li>REST APIs / JWT Auth</li>
            <li>Vercel / Render / Railway</li>
            <li>Framer Motion / TailwindCSS</li>
          </ul>

          <a
            href="mailto:irafasha.jedy12@gmail.com"
            className="inline-block bg-btn text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>
    </section>
  );
}