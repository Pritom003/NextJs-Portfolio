'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import projects from '@/app/project.json';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from '@/Component/Shared/Container';
import {
  GithubOutlined,
  LinkOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';

const ProjectDetailsPage = () => {
  const params = useParams();
  const { id } = params;
  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return <div className="text-center text-red-500">Project not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 space-y-12">
      {/* Title + ID */}
      <div className="text-center space-y-2">
      <h2 className="text-6xl lg:text-8xl  text-transparent
     stroke-purple-500 stroke-1 uppercase font-extrabold
      tracking-widest">
     {project.title}
    </h2>
        {/* <h1 className="text-5xl font-bold text-white"></h1> */}
        <p className="text-gray-400 text-lg">ID: {project.id}</p>
      </div>

      {/* Links */}
      <div className="flex flex-wrap justify-center gap-6 text-white text-lg">
        <a
          href={project.github.frontend}
          target="_blank"
          className="flex items-center gap-2 hover:underline"
        >
          Frontend <GithubOutlined />
        </a>
        <a
          href={project.github.backend}
          target="_blank"
          className="flex items-center gap-2 hover:underline"
        >
          Backend <GithubOutlined />
        </a>
        <a
          href={project.live.frontend}
          target="_blank"
          className="flex items-center gap-2 hover:underline text-blue-500"
        >
          Live Site <LinkOutlined />
        </a>
      </div>

      {/* Main Image with Reflection */}
      <div className="relative w-full max-h-[500px] mb-6">
        <div className="relative w-full h-[300px]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <a href={project.responsive} target="_blank" rel="noopener noreferrer">
              <Image
                src={project.responsive}
                alt={project.title}
                layout="fill"
                objectFit="contain"
                className="rounded-lg shadow-md"
              />
            </a>
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

      {/* Description + Features */}
      <Container>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className=" space-y-6  ">
            <h2 className="text-2xl font-semibold">Project Description</h2>
            <p className="text-lg text-white font-mono">{project.description}</p>
            <h2 className="text-2xl font-semibold">Tech Stack</h2>
            <div className="space-y-4 flex flex-col md:flex-row gap-4">
            
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

          {/* Tech Stack */}
         
        </div>
      </Container>

      {/* Preview Section with Lights from Both Sides */}
      <div className="relative mt-20 space-y-6">
        <motion.div
          className="h-1 w-full bg-gray-300 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <div className="relative flex flex-col md:flex-row gap-6 justify-center items-center px-4 bg-black py-8 rounded-lg">
          {/* Light Shadows */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white/30 to-transparent z-10 pointer-events-none" />

          {/* Image One */}
          <motion.div
            className="relative w-full max-w-[300px] h-[250px] shadow-lg rounded overflow-hidden"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <a href={project.imageOne} target="_blank" rel="noopener noreferrer">
              <Image src={project.imageOne} alt="Preview One" fill className="object-cover" />
            </a>
          </motion.div>

          {/* Image Two */}
          <motion.div
            className="relative w-full max-w-[300px] h-[250px] shadow-lg rounded overflow-hidden"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <a href={project.imageTwo} target="_blank" rel="noopener noreferrer">
              <Image src={project.imageTwo} alt="Preview Two" fill className="object-cover" />
            </a>
          </motion.div>
        </div>

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
      <Container>
      <div className='border-b-2 border-amber-950 pb-10'>    
        <h2 className="text-2xl font-semibold my-10">Project Features </h2>
            <ul className="space-y-2 text-white">
              {project.features.map((feature, index) => (
                <li key={index} className="flex gap-2 items-start">
                  <CheckCircleOutlined className="text-green-400 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            </div>
      </Container>
    </div>
  );
};

export default ProjectDetailsPage;
