'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import projects from '@/app/project.json';
import Image from 'next/image';
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectDetailsPage = () => {
  const params = useParams();
  const { id } = params;
  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return <div className="text-center text-red-500">Project not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 space-y-12">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

      {/* Main Image with Reflection */}
      <div className="relative w-full max-h-[500px] mb-6">
        <div className="relative w-full h-[300px]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={project.responsive}
              alt={project.title}
              layout="fill"
              objectFit="contain"
              className="rounded-lg shadow-md"
            />
          </motion.div>
        </div>
        <div className="relative w-full h-[200px] mt-1 overflow-hidden transform scale-y-[-1] opacity-50">
          <Image
            src={project.responsive}
            alt={`${project.title} reflection`}
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
        </div>
      </div>
  {/* Description */}
  <div className="md:w-1/2 h-full flex flex-col justify-between">
    <p className="text-lg text-white mb-4">{project.description}</p>
    <ul className="list-disc pl-5 space-y-2 text-white">
  {project.features.map((feature, index) => (
    <li key={index} className="flex gap-2 items-start">
      <span className="text-yellow-400">👉</span>
      <span>{feature}</span>
    </li>
  ))}
</ul>

    <div className="flex gap-4">
      <a
        href={project.live.frontend}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline flex items-center gap-1"
      >
        Live Site <FaExternalLinkAlt />
      </a>
      <a
        href={project.github.frontend}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:underline flex items-center gap-1"
      >
        GitHub <FaGithub />
      </a>
    </div>
  </div>
      {/* Window Preview Section with Framer Motion */}
      <div className="relative mt-20 space-y-6">
        {/* Top Line */}
        <motion.div
          className="h-1 w-full bg-gray-300 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Window View with Images */}
        <div className="relative h-[300px] overflow-x-auto no-scrollbar flex items-center justify-center gap-10 px-4 bg-black">
          {/* Light Shadow from Left */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white/60 to-transparent pointer-events-none z-10" />

          {/* Image Container with Vertical Separator */}
          <div className="flex-shrink-0 relative flex gap-6 items-center min-w-[700px]">
            <motion.div
              className="relative w-[300px] h-[250px] shadow-lg rounded overflow-hidden"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={project.imageOne}
                alt="Preview One"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Vertical Line */}
            <div className="h-[200px] w-[2px] bg-white/30" />

            <motion.div
              className="relative w-[300px] h-[250px] shadow-lg rounded overflow-hidden"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={project.imageTwo}
                alt="Preview Two"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom Line */}
        <motion.div
          className="h-1 w-full bg-gray-300 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* View Site Button */}
        <motion.div
          className="flex justify-center mt-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <a
            href={project.live.frontend}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-2 rounded-full shadow hover:bg-gray-100 transition"
          >
            View Site
          </a>
        </motion.div>
      </div>
      <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold">Tech Stack</h2>
          <div>
            <h3 className="font-semibold">Frontend</h3>
            <div className="flex flex-wrap gap-4">
              {project.frontendTech.map((tech) => (
                <div
                  key={tech.name}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full shadow-sm text-sm"
                >
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mt-4">Backend</h3>
            <div className="flex flex-wrap gap-4">
              {project.backendTech.map((tech) => (
                <div
                  key={tech.name}
                  className="px-4 py-2 bg-green-100 text-green-800 rounded-full shadow-sm text-sm"
                >
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
};


export default ProjectDetailsPage;
