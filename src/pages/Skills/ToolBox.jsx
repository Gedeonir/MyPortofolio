import React from "react";
import { motion } from "framer-motion";
import { tools } from "../../utils/data";

function ToolCard({ tool }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-3 px-4 py-2 rounded-lg border border-[#2e94c5] bg-secondary dark:bg-dark_secondary text-dark_primary dark:text-white cursor-pointer shadow hover:shadow-lg transition-all duration-300"
    >
      <div className="w-10 h-10">
        <img src={tool.icon} alt={tool.toolName} className="w-full h-full object-contain" />
      </div>
      <p className="font-bold text-[#2e94c5]">{tool.toolName}</p>
    </motion.div>
  );
}

export default function Tools() {
  return (
    <section id="tools" className="lg:px-20 px-6 py-20 bg-secondary_2 dark:bg-dark_secondary_2">
      {/* Heading */}
      <motion.div
        className="mb-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-bold tracking-widest text-dark_primary dark:text-white mb-2">
          Tools & Technologies
        </h2>
        <hr className="w-24 border-2 border-[#2e94c5]" />
      </motion.div>

      {/* Tools Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {tools.map((tool) => (
          <ToolCard key={tool.toolID} tool={tool} />
        ))}
      </motion.div>
    </section>
  );
}