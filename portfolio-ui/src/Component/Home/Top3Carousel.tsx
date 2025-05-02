'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from 'antd';
import ProjectCard from '../Shared/cards/ProjectjctCard';
// import ProjectCard from '../Shared/cards/ProjectCard';

interface Project {
  title: string;
  details: string;
  imageOne: string;
  id: string;
}

const Top3Carousel = ({ projects }: { projects: Project[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <div className="relative w-full flex flex-col items-center gap-6">
      <div className="relative w-full max-w-8xl h-[400px] overflow-hidden flex flex-col gap-4 px-4 items-center justify-center">
        <AnimatePresence initial={false}>
          {projects.map((project, index) => {
            let position = 'hidden';
            if (index === currentIndex) position = 'center';
            else if (index === (currentIndex + 1) % projects.length) position = 'right';
            else if (index === (currentIndex - 1 + projects.length) % projects.length) position = 'left';

            const variants = {
              center: { x: 0, scale: 1, zIndex: 30, opacity: 1 },
              left: { x: '-60%', scale: 0.8, zIndex: 20, opacity: 0.5 },
              right: { x: '60%', scale: 0.8, zIndex: 20, opacity: 0.5 },
              hidden: { opacity: 0, scale: 0.5, zIndex: 0 },
            };

            return (
              <motion.div
                key={index}
                className="absolute w-full max-w-sm px-4"
                variants={variants}
                initial="hidden"
                animate={position}
                exit="hidden"
                transition={{ duration: 0.5 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.details}
                  imageUrl={project.imageOne}
                  id={project.id}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-3 shadow-lg hover:bg-[#1D7B84] hover:text-white transition duration-300 ease-in-out"
        >
          ‹
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-3 shadow-lg hover:bg-[#1D7B84] hover:text-white transition duration-300 ease-in-out"
        >
          ›
        </button>
      </div>

      <Button type="primary" className="rounded-full px-8 text-white bg-[#1D7B84] hover:bg-[#155d61] mt-4 md:mt-6">
        View More Projects
      </Button>
    </div>
  );
};

export default Top3Carousel;
