import Skills from '@/Component/About/Skills';
import AboutMe from '@/Component/Home/AboutMe';
import HomeBanner from '@/Component/Home/HomeBanner'
// import Skills from '@/Component/Home/Sillls';
import Top3website from '@/Component/Home/Top3website'
import React from 'react'

const HomePage = () => {
  return (
    <div className="p-4">
      <HomeBanner />
      <AboutMe></AboutMe>
      <Skills/>
      <Top3website />
    </div>
  );
};

export default HomePage;
