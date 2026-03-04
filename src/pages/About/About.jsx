import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="lg:px-20 px-6 py-20 bg-secondary_2 dark:bg-dark_secondary_2 relative overflow-hidden"
    >
      {/* Background illustration */}
      <motion.svg
        className="absolute top-0 right-8 w-96 opacity-10 pointer-events-none select-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
      >
        <circle cx="30" cy="30" r="5" fill="#2e94c5" />
        <circle cx="170" cy="50" r="3" fill="#2e94c5" />
        <circle cx="100" cy="150" r="4" fill="#2e94c5" />
        <path
          d="M30 30 L100 150 L170 50"
          stroke="#2e94c5"
          strokeWidth="1"
          fill="none"
        />
        <text x="40" y="40" fontSize="10" fill="#2e94c5">
          {"</>"}
        </text>
        <text x="120" y="140" fontSize="10" fill="#2e94c5">
          {"{}"}
        </text>
      </motion.svg>

      <motion.div
        className="rounded-3xl backdrop-blur-lg bg-white/10 dark:bg-dark_secondary_2/20 grid lg:grid-cols-2 gap-12 items-center relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Text */}
        <div className="text-dark_primary dark:text-white">
          <h2 className="text-lg lg:text-xl font-bold mb-6 tracking-widest">
            About Me
          </h2>

          <p className="mb-4 text-lg leading-relaxed">
            I am a{" "}
            <span className="font-bold text-[#2e94c5]">
              Full-Stack JavaScript Developer
            </span>{" "}
            building modern, scalable web applications with React, Node.js, and
            Express. I specialize in creating clean, responsive UIs, designing
            efficient APIs, and delivering production-ready apps.
          </p>

          <p className="mb-4 text-lg leading-relaxed">
            Experienced in database design, authentication, deployment, and
            optimizing application performance. Passionate about solving complex
            problems and continuously learning new technologies.
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
