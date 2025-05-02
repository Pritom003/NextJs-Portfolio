'use client';

import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    year: '2025',
    title: 'Programming Hero Web Development Course - Level 2',
    details: 'Completed in 2025',
  },
  {
    year: '2023',
    title: 'Programming Hero Web Development Course - Level 1',
    details: 'Completed in 2023',
  },
  {
    year: '2025',
    title: 'Bachelor of Science (B.Sc.) in Botany',
    details:
      'National University of Bangladesh, Session 2020–2021 (Expected Graduation: 2025)',
  },
  {
    year: '2019',
    title: 'Higher Secondary Certificate (HSC)',
    details: 'Comilla Board, Science Group, GPA: 3.96',
  },
  {
    year: '2017',
    title: 'Secondary School Certificate (SSC)',
    details: 'Comilla Board, Science Group, GPA: 4.86',
  },
  {
    year: '',
    title: 'Language Proficiency',
    details: 'Bangla (Native), English (Fluent)',
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const EducationalExp = () => {
  return (
    <div className="px-6 md:px-20 py-12 bg-black text-white">
      <h2 className="text-2xl font-bold mb-8">Education</h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-6"
      >
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative border border-gray-600 rounded-lg p-6"
          >
            {edu.year && (
              <div className="absolute top-2 right-4 text-sm text-gray-400 font-semibold">
                {edu.year}
              </div>
            )}
            <h3 className="text-lg font-bold mb-2">{edu.title}</h3>
            <p className="text-gray-300">{edu.details}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default EducationalExp;
