'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import MyImage from '../../../public/Image/nobg2.png';

import { motion } from 'framer-motion';

const HomeBanner = () => {
  const mainTextRef = useRef<HTMLDivElement>(null);
  const shadow1Ref = useRef<HTMLDivElement>(null);
  const shadow2Ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    const x = (clientX - left - width / 2) / 20;
    const y = (clientY - top - height / 2) / 20;

    if (mainTextRef.current) mainTextRef.current.style.transform = `translate(${x}px, ${y}px)`;
    if (shadow1Ref.current) shadow1Ref.current.style.transform = `translate(${x * 1.5}px, ${y * 1.5}px)`;
    if (shadow2Ref.current) shadow2Ref.current.style.transform = `translate(${x * 2}px, ${y * 2}px)`;
  };

  const handleMouseLeave = () => {
    if (mainTextRef.current) mainTextRef.current.style.transform = `translate(0px, 0px)`;
    if (shadow1Ref.current) shadow1Ref.current.style.transform = `translate(0px, 0px)`;
    if (shadow2Ref.current) shadow2Ref.current.style.transform = `translate(0px, 0px)`;
  };

  return (
    <div
      className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Text Layers */}
      <div className="absolute z-0 flex flex-col items-center justify-center text-center pointer-events-none select-none">
        <div className="absolute text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-oren text-black/30 translate-y-2">
          Crafting Web Experiences with Precision
        </div>
        <div
          ref={shadow2Ref}
          className="absolute text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-oren text-gray-600 opacity-30 -translate-y-20"
        >
          Crafting Web Experiences with Precision
        </div>
        <div
          ref={shadow1Ref}
          className="absolute text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-oren text-gray-400 opacity-50 -translate-y-20"
        >
          Crafting Web Experiences with Precision
        </div>
        <div
          ref={mainTextRef}
          className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-oren text-white -mt-16 md:-mt-24"
        >
          Crafting Web Experiences with Precision
        </div>
      </div>

      {/* Content Section */}
      <div className="z-20 relative flex flex-col-reverse lg:flex-row items-center justify-between gap-6 px-4 w-full max-w-6xl">
        {/* Button & Text */}
      <div></div>
        {/* Image */}
        <div className="order-1 lg:order-2">
          <Image
            src={MyImage}
            alt="My Avatar"
            width={280}
            height={280}
            className="object-contain rounded-b-full border-b-2"
            priority
          />
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute top-[70%] md:top-[75%] lg:top-[75%] left-0 w-full z-30 overflow-hidden pointer-events-none">
        <motion.div
          className="whitespace-nowrap py-2"
          animate={{ x: ['100%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-transparent stroke-purple-500 stroke-1 uppercase font-extrabold tracking-widest">
            Nilima Jahan Pritom, MERN Stack Developer |
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeBanner;
