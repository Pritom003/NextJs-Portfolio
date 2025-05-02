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
    // <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-20">
    //   <Card className="max-w-5xl mx-auto shadow-lg">
    //     {/* Header */}
    //     <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#1D7B84]">
    //       Nilima Jahan Pritom
    //     </h1>
    //     <p className="text-center text-lg text-gray-600 mb-6">
    //       Frontend Web Developer
    //     </p>

    //     {/* Objective */}
    //     <section className="mb-6">
    //       <h2 className="text-xl font-semibold text-[#2972b6] mb-2">Objective</h2>
    //       <p className="text-gray-700 leading-relaxed">
    //         Frontend Web Developer with practical experience in building dynamic and responsive web applications. I recently completed a three-month internship at Lexaeon, USA, where I contributed to multiple projects utilizing React.js, Next.js, GraphQL, and WordPress custom theme development. Passionate about improving user experiences, and adept at learning new technologies to deliver high-quality web solutions.
    //       </p>
    //     </section>

    //     {/* Skills */}
    //     <section className="mb-6">
    //       <h2 className="text-xl font-semibold text-[#2972b6] mb-2">Skills & Technologies</h2>
    //       <ul className="list-disc list-inside space-y-1 text-gray-700">
    //         <li><strong>Frontend:</strong> HTML, CSS, JavaScript, TypeScript, React.js, Redux, Next.js</li>
    //         <li><strong>Backend:</strong> Node.js, Express.js, Mongoose</li>
    //         <li><strong>Tools:</strong> MongoDB, GitHub, Visual Studio Code</li>
    //       </ul>
    //     </section>

    //     {/* Experience */}
    //     <section className="mb-6">
    //       <h2 className="text-xl font-semibold text-[#2972b6] mb-2">Experience</h2>
    //       <div className="text-gray-700">
    //         <p className="font-semibold">Frontend Developer Intern — Lexaeon, USA</p>
    //         <p className="text-sm text-gray-600">June 2024 - August 2024</p>
    //         <ul className="list-disc list-inside space-y-1 mt-2">
    //           <li>Developed frontend features using React.js, Next.js, and Tailwind.</li>
    //           <li>Integrated GraphQL for dynamic WordPress theme content.</li>
    //           <li>Collaborated with backend teams on REST API integrations.</li>
    //           <li>Ensured responsive UI designs across multiple devices.</li>
    //         </ul>
    //       </div>
    //     </section>

    //     {/* Personal Info */}
    //     <section className="mb-6">
    //       <h2 className="text-xl font-semibold text-[#2972b6] mb-2">Personal Information</h2>
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 text-gray-700">
    //         <p><strong>Name:</strong> Nilima Jahan Pritom</p>
    //         <p><strong>Father’s Name:</strong> Hedayet Ullah Khan (late)</p>
    //         <p><strong>Mother’s Name:</strong> Mst. Humayara Begum</p>
    //         <p><strong>Date of Birth:</strong> February 16, 2000</p>
    //         <p><strong>Religion:</strong> Muslim</p>
    //         <p><strong>Blood Group:</strong> O+ (ve)</p>
    //         <p><strong>Present Address:</strong> Oxygen, Chittagong, Bangladesh</p>
    //         <p><strong>Permanent Address:</strong> Suchipara, Shahrasti, Chandpur, Bangladesh</p>
    //       </div>
    //     </section>

    //     {/* Education */}
    //     <section className="mb-6">
    //       <h2 className="text-xl font-semibold text-[#2972b6] mb-2">Education</h2>
    //       <ul className="list-disc list-inside space-y-1 text-gray-700">
    //         <li>
    //           <strong>B.Sc. in Botany</strong> — National University of Bangladesh (2020–2025)
    //         </li>
    //         <li>
    //           <strong>HSC</strong> — Comilla Board, 2019 (GPA: 3.96, Science)
    //         </li>
    //         <li>
    //           <strong>SSC</strong> — Comilla Board, 2017 (GPA: 4.86, Science)
    //         </li>
    //       </ul>
    //     </section>

    //     {/* Language */}
    //     <section className="mb-6">
    //       <h2 className="text-xl font-semibold text-[#2972b6] mb-2">Languages</h2>
    //       <p className="text-gray-700">Bangla (Native), English (Fluent)</p>
    //     </section>

    //     {/* Recommendation */}
    //     <section className="mb-6">
    //       <h2 className="text-xl font-semibold text-[#2972b6] mb-2">Recommendation</h2>
    //       <p className="text-gray-700">Recommendation Letter from Programming Hero</p>
    //     </section>

    //     <Divider />

    //     {/* Signature */}
    //     <p className="text-right text-gray-700 italic mt-4">
    //       Signature: <strong>Nilima Jahan Pritom</strong>
    //     </p>
    //   </Card>
    // </div>
  );
};

export default AboutPage;
