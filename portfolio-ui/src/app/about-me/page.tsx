'use client';
import React from 'react';
// import { Card, Divider } from 'antd';
import AboutPageBanner from '@/Component/Shared/Banner/AboutPage.Banner';

import Objective from '@/Component/About/objective';
import EducationalExp from '@/Component/About/EucationalEcp';
import Experience from '@/Component/About/Experience';
import Skills from '@/Component/About/Skills';

const AboutPage = () => {
  return (
    <div>
     
        <AboutPageBanner></AboutPageBanner>
        <Objective></Objective>
        <Skills></Skills>
        <Experience></Experience>
        <EducationalExp></EducationalExp>
    </div>
   
  );
};

export default AboutPage;
