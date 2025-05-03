/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiRedux, SiTypescript, SiNextdotjs, SiMongodb, SiExpress, SiMongoose,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const categories = [
  {
    title: 'Frontend',
    position: 'left',
    skills: [
      { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
      { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
      { name: 'Redux', icon: <SiRedux className="text-purple-500" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
    ],
  },
  {
    title: 'Backend',
    position: 'right',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
      { name: 'Express.js', icon: <SiExpress className="text-white" /> },
      { name: 'Mongoose', icon: <SiMongoose className="text-red-500" /> },
    ],
  },
  {
    title: 'Tools',
    position: 'left',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
      { name: 'GitHub', icon: <FaGithub className="text-white" /> },
      { name: 'VS Code', icon: <VscCode className="text-blue-400" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div className="relative px-4 sm:px-8 md:px-20 py-20 bg-black text-white">
      <h2 className="text-3xl font-bold mb-20 text-center">Skills</h2>

      {/* Vertical Center Line */}
      <div className="absolute left-1/2 top-0 h-full border-l-2 border-gray-600 z-0 -translate-x-1/2" />

      <div className="relative z-10 flex flex-col gap-28">
        {categories.map((category) => {
          const isLeft = category.position === 'left';
          return (
            <div key={category.title} className="relative">
              {/* Category Label */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-6 z-10">
                <div className="bg-gray-900 px-6 py-2 rounded-full border border-gray-700 shadow-md font-semibold text-sm">
                  {category.title}
                </div>
              </div>

              {/* Skills Grid */}
              <div
                className={`mt-10 flex ${
                  isLeft ? 'justify-start pr-6 sm:pr-12 md:pr-24' : 'justify-end pl-6 sm:pl-12 md:pl-24'
                }`}
              >
                <div className="grid grid-cols-3  gap-6 w-full max-w-xl">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -5, scale: 1.05 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center group relative"
                    >
                      {/* Rounded bordered icon container */}
                      <div className="w-16 h-16 rounded-full border-2 border-gray-700 flex items-center justify-center 
                      transition-transform duration-300 group-hover:scale-105 bg-black shadow-md">
                        <span className="text-2xl">{skill.icon}</span>
                      </div>
                      <span className="text-sm font-medium mt-2 text-center">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
