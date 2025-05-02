'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import MyImage from '../../../../public/Image/cartoonme.jpg';

const AboutPageBanner = () => {
  const mainTextRef = useRef<HTMLDivElement>(null);
  const shadow1Ref = useRef<HTMLDivElement>(null);
  const shadow2Ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    const x = (clientX - left - width / 2) / 20;
    const y = (clientY - top - height / 2) / 20;

    if (mainTextRef.current) {
      mainTextRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }
    if (shadow1Ref.current) {
      shadow1Ref.current.style.transform = `translate(${x * 1.5}px, ${y * 1.5}px)`;
    }
    if (shadow2Ref.current) {
      shadow2Ref.current.style.transform = `translate(${x * 2}px, ${y * 2}px)`;
    }
  };

  const handleMouseLeave = () => {
    if (mainTextRef.current) mainTextRef.current.style.transform = `translate(0px, 0px)`;
    if (shadow1Ref.current) shadow1Ref.current.style.transform = `translate(0px, 0px)`;
    if (shadow2Ref.current) shadow2Ref.current.style.transform = `translate(0px, 0px)`;
  };

  return (
    <div
      className="relative w-full h-[80vh] flex items-center justify-between px-6 md:px-20 bg-black overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Text Shadows */}
      <div
        ref={shadow2Ref}
        className="absolute text-4xl md:text-7xl font-bold font-oren text-gray-600 opacity-30 z-0 pointer-events-none select-none left-6 top-[25%]"
      >
        MERN Stack Developer
      </div>
      <div
        ref={shadow1Ref}
        className="absolute text-4xl md:text-7xl font-bold font-oren text-gray-400 opacity-50 z-0 pointer-events-none select-none left-6 top-[25%]"
      >
        MERN Stack Developer
      </div>

      {/* Main Text */}
      <div
        ref={mainTextRef}
        className="z-10 text-4xl md:text-7xl font-bold font-oren text-white pointer-events-none select-none"
      >
        MERN Stack Developer
      </div>

      {/* Foreground Content */}
      <div className="z-20 flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left Text */}
        <div className="text-left mt-16 md:mt-0 space-y-4 md:w-1/2">
          <p className="text-xl md:text-2xl text-white font-semibold">
            Hello, I’m Nilima Jahan Pritom
          </p>
          <p className="text-base md:text-lg font-mono text-gray-300">
            A passionate and detail-oriented frontend developer with real-world internship experience in React.js, Next.js, and WordPress development.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <Image
            src={MyImage}
            alt="Nilima Jahan Pritom"
            width={350}
            height={350}
            className="rounded-full object-contain border-4 border-white"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPageBanner;
