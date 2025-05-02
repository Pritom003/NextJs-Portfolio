'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import MyImage from '../../../public/Image/nobg2.png';
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { motion} from 'framer-motion';
const HomeBanner = () => {
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
      className="relative  w-full h-[80vh] flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Shadow layers for depth */}
      <div
        ref={shadow2Ref}
        className="absolute text-4xl md:text-6xl font-bold  font-oren text-gray-600 opacity-30 z-0 -translate-y-24 pointer-events-none select-none"
      >
        Crafting Web Experiences with Precision
      </div>
      <div
        ref={shadow1Ref}
        className="absolute text-4xl md:text-6xl font-bold  font-oren text-gray-400 opacity-50 z-0 -translate-y-24 pointer-events-none select-none"
      >
        Crafting Web Experiences with Precision
      </div>

      {/* Main moving text */}
      <div
        ref={mainTextRef}
        className="absolute text-4xl md:text-6xl font-bold  font-oren text-white z-10 -translate-y-24 pointer-events-none select-none"
      >
        Crafting Web Experiences with Precision
      </div>

      {/* Foreground Content */}
      <div className="z-20 relative flex items-center justify-center gap-8 px-4">
        {/* Left Text */}
        {/* <div className="text-left space-y-2 mt-20 max-w-[300px]">
          <p className="text-xl md:text-2xl font-semibold text-white">
            Hello, I am <br /> Nilima Jahan Pritom.
          </p>
          <p className="text-sm md:text-base text-gray-300">
            A MERN Stack Developer <br />
            Passionate | Creative | Problem Solver
          </p>
        </div> */}

        {/* Center Image */}
        <Image
          src={MyImage}
          alt="My Avatar"
          width={300}
          height={300}
          className="object-contain rounded-b-full !border-b-2"
          priority
        />

        {/* Right Button */}
        <div className="flex flex-col items-center justify-center mt-20">
          <p className="text-xl text-white mb-2 text-center">Let’s Connect</p>
          <Button
            shape="circle"
            size="large"
            type="primary"
            icon={<ArrowRightOutlined />}
            className="!bg-[#1D7B84] hover:!bg-[#145960] transition duration-300"
          />
        </div>
      </div>
      <div className="absolute xl:top-[890px]   top-[300px] left-0 w-full z-30 overflow-hidden pointer-events-none">
  <motion.div
    className="whitespace-nowrap py-2"
    animate={{ x: ['100%', '-100%'] }}
    transition={{
      repeat: Infinity,
      duration: 30,
      ease: 'linear',
    }}
  >
    <h2 className="text-8xl  text-transparent
     stroke-purple-500 stroke-1 uppercase font-extrabold
      tracking-widest">
      Nilima Jahan Pritom, MERN Stack Developer |
    </h2>
  </motion.div>
</div>
    </div>
  );
};

export default HomeBanner;
