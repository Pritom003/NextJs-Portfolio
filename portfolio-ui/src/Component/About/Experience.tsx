'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div className="px-6 md:px-20 py-12 bg-black text-white">
      <h2 className="text-2xl font-bold mb-8">Experience</h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="border border-gray-600 rounded-lg p-6 relative"
      >
        <div className="absolute top-2 right-4 text-sm text-gray-400 font-semibold">
          June 2024 - August 2024
        </div>

        <h3 className="text-xl font-bold mb-2">Frontend Developer Intern</h3>
        <p className="text-gray-300 mb-1">Lexaeon, USA</p>

        <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-300 font-mono">
          <li>
            Developed frontend features for various client projects using <span className="text-white font-medium">React.js</span>, <span className="text-white font-medium">Next.js</span>, and <span className="text-white font-medium">Tailwind</span>.
          </li>
          <li>
            Integrated <span className="text-white font-medium">GraphQL</span> to fetch and manage dynamic content for custom WordPress themes.
          </li>
          <li>
            Collaborated with backend teams to implement and troubleshoot <span className="text-white font-medium">REST API</span> integrations.
          </li>
          <li>
            Contributed to <span className="text-white font-medium">UI improvements</span>, ensuring responsive designs across multiple devices.
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Experience;
