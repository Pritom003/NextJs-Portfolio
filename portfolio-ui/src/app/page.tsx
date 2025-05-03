/* eslint-disable react/no-unescaped-entities */
// import Skills from '@/Component/About/Skills';
import ContactForm from '@/Component/contactform';
import AboutMe from '@/Component/Home/AboutMe';
import HomeBanner from '@/Component/Home/HomeBanner'
import Skills from '@/Component/Home/Sillls';
import Top3website from '@/Component/Home/Top3website'
import Container from '@/Component/Shared/Container';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Link from 'next/link';
import React from 'react'
// import { motion } from 'framer-motion';
const HomePage = () => {
  return (
   
  <div>
     <div className='py-10 px-4'>
     <HomeBanner />
     <Link href="/contact-me" className='hover:border-b-2 group-hover:border-b-pink-300 pb-2 group-hover:text-[#b641b6] group-hover:cursor-pointer'> 
     <div className="order-2 lg:order-1 flex mt-6 gap-2 w-full justify-center align-middle items-center lg:mt-0 text-center ">
               <p className="text-2xl md:text-3xl font-bold text-white mb-2">
                 Let’s Connect
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
      <Container>
      <AboutMe></AboutMe>
      <Skills/>
      <Top3website />
      <div className='grid grid-cols-1 md:grid-cols-2 justify-center align-middle items-center my-10'>

        <h1
          className="text-3xl font-bold text-white"
       
        >
          "Email me for feedback or requests."
       </h1>
        <ContactForm></ContactForm>
      </div>
      </Container>
  
  </div>

  );
};

export default HomePage;
