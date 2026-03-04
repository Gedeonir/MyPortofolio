import React from "react";
import { motion } from "framer-motion";
import { skills } from "../../utils/data";

function SkillCard({ skill }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-3 px-4 py-2 rounded-lg border border-[#2e94c5] bg-secondary dark:bg-dark_secondary text-dark_primary dark:text-white cursor-pointer shadow hover:shadow-lg transition-all duration-300"
    >
      <div className="w-12 h-12">
        <img src={skill.icon} alt={skill.skillName} className="w-full h-full object-contain" />
      </div>
      <p className="font-bold text-[#2e94c5]">{skill.skillName}</p>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="lg:px-20 px-6 py-20 bg-secondary dark:bg-dark_secondary">
      {/* Heading */}
      <motion.div
        className="mb-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-lg lg:text-xl font-bold tracking-widest text-dark_primary dark:text-white mb-2">
          My Skills
        </h2>
        <hr className="w-24 border-2 border-[#2e94c5]" />
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {skills.map((skill) => (
          <SkillCard key={skill.skillID} skill={skill} />
        ))}
      </motion.div>
    </section>
  );
}