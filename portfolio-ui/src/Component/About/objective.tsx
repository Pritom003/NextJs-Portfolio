'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const paragraph1 = `Frontend Web Developer with practical experience in building dynamic and responsive web applications. I recently completed a three-month internship at Lexaeon, USA, where I contributed to multiple projects utilizing React.js, Next.js, GraphQL, and WordPress custom theme development.`;

const paragraph2 = `Passionate about improving user experiences, and adept at learning new technologies to deliver high-quality web solutions.`;

const wordFadeIn = {
  hidden: { opacity: 1, color: '#9CA3AF' },
  visible: (i: number) => ({
    color: '#FFFFFF',
    transition: {
      delay: i * 0.05,
      duration: 0.5,
    },
  }),
};

const renderAnimatedParagraph = (text: string, inView: boolean) =>
  text.split(' ').map((word, i) => (
    <motion.span
      key={i}
      custom={i}
      variants={wordFadeIn}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="mr-1 inline-block"
    >
      {word}
    </motion.span>
  ));

const Objective = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const inView1 = useInView(ref1, { once: true });
  const inView2 = useInView(ref2, { once: true });

  return (
    <div className="min-h-[50vh] px-6 md:px-20 py-12 bg-black space-y-12 mt-20 font-mono">
      <p ref={ref1} className="text-lg md:text-xl font-bold leading-relaxed flex flex-wrap">
        {renderAnimatedParagraph(paragraph1, inView1)}
      </p>
      <p ref={ref2} className="text-lg md:text-xl font-bold leading-relaxed flex flex-wrap">
        {renderAnimatedParagraph(paragraph2, inView2)}
      </p>
    </div>
  );
};

export default Objective;
