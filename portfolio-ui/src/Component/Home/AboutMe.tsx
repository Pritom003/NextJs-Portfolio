'use client';
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { motion } from 'framer-motion';

import { PenIcon } from 'lucide-react';
import Link from 'next/link';
import { ArrowRightOutlined } from '@ant-design/icons';

const AboutMe = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

 

  const handleResumePreview = () => {
    setIsModalOpen(true);
  };

<iframe
  src="https://docs.google.com/document/d/1EbZkH8390EGikY8M7D8N1egzdMPncgY4OGolyYjubZg/preview"
  className="w-full h-[70vh]"
  title="Resume"
/>

const handleDownload = () => {
  window.open('https://docs.google.com/document/d/1EbZkH8390EGikY8M7D8N1egzdMPncgY4OGolyYjubZg/export?format=pdf', '_blank');
};


  return (
    <div className="w-full  my-10 flex gap-2 flex-col md:flex-row items-center justify-between px-6 py-16">
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

        {/* Resume Button */}
        <div className="mt-6">
          <Button
        
            className="!border-2  !border-[#1D7B84] bg-none text-white "
            onClick={handleResumePreview}
          >
            View Resume <PenIcon></PenIcon>
          </Button>
        </div>
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

     <div>
     <Link href="/about-me" className='group-hover:border-b-2 group-hover:border-b-pink-300 pb-2 group-hover:text-[#b641b6] group-hover:cursor-pointer'> 
     <div className="order-2 lg:order-1 flex mt-6 gap-2 w-full justify-center align-middle items-center lg:mt-0 text-center ">
               <p className="text-2xl md:text-3xl font-bold text-white mb-2">
                 More About Me
               </p>
               <Button
                 shape="circle"
                 size="large"
                 type="primary"
                 icon={<ArrowRightOutlined/>}
                 className="!bg-[#3d123d]  hover:!bg-[#145960] transition duration-300"
               />
             </div>
     </Link>
     </div>
      </div>

      {/* Resume Modal */}
      <Modal
        title="My Resume"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={[
          <Button key="download" type="primary" onClick={handleDownload}>
            Download Resume
          </Button>,
        ]}
        width={800}
      >
        <iframe
          src="https://docs.google.com/document/d/1EbZkH8390EGikY8M7D8N1egzdMPncgY4OGolyYjubZg/preview"
          title="Resume PDF"
          className="w-full h-[70vh]"
        />
      </Modal>
    </div>
  );
};

export default AboutMe;
