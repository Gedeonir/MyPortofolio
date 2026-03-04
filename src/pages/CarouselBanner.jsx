import profile from "../assets/profile.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import { RiGithubLine } from "react-icons/ri";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-btn font-semibold mb-2">
            FULL-STACK JAVASCRIPT DEVELOPER
          </h2>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-btn ">Irafasha Gedeon</span>
          </h1>

          <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg max-w-lg">
            I build modern, scalable and high-performance web applications
            using React and modern frontend technologies.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="bg-btn  text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              View Projects
            </a>

            <a
              href="https://docs.google.com/document/d/1BiLz00uzeCuBnxPTylLltGmfRm79VKIe/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-btn  px-6 py-3 rounded-lg font-semibold hover:bg-btn  hover:text-black transition"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex gap-6">
            <a
              href="https://www.linkedin.com/in/irafasha-gedeon-a64852189/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-btn transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com/Gedeonir/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-btn transition"
            >
              <RiGithubLine />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-btn  shadow-xl">
            <img
              src={profile}
              alt="Irafasha Gedeon"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}