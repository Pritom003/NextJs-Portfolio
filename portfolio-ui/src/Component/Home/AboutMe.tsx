'use client';
import React from 'react';
import { Button } from 'antd';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation'; // For routing to "about-me" page

const AboutMe = () => {
  const router = useRouter();

  const handleLearnMore = () => {
    router.push('/about-me'); // Redirects to the About Me page
  };

  return (
    <div className="w-full h-screen flex flex-col md:flex-row items-center justify-between px-6 py-16">
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          I am a MERN stack developer
        </motion.h1>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
        <motion.p
          className="text-lg text-gray-50 mb-6 font-mono"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
           I am a dedicated front-end developer with a strong foundation in MERN stack development.
          Passionate about creating seamless user experiences and scalable backend architectures.
          My goal is to create meaningful and efficient solutions while staying updated with the latest trends in web development.
        </motion.p>

        <Button
          onClick={handleLearnMore}
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1D7B84] text-white text-xl hover:bg-[#155d61] transition-all"
        >
          <span className="text-2xl">→</span>
        </Button>
      </div>
    </div>
  );
};

export default AboutMe;
