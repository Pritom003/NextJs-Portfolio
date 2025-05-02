"use client";
import { useEffect, useState } from "react";

import { motion } from "framer-motion"; // Import Framer Motion for animations
import { Card } from "antd"; // Using Ant Design Card for skill display
// import './skills.css'; // Import custom CSS styles

const Skills = () => {
  interface Skill {
    name: string;
    image: string;
    Knowledle: string;
  }

  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    fetch('/Skills.json')
      .then((response) => response.json())
      .then((data) => setSkills(data))
      .catch((error) => console.error('Error fetching skills:', error));
  }, []);

  return (
    <div id="skills" className="flex flex-col items-center py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Skills I Have</h1>

      <div className="skills-container relative flex justify-center items-center mb-10">
       <p>Skills I have </p>
        
        <div className="skills-list flex flex-wrap justify-center items-center gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill relative"
              style={{
                animationDelay: `${index * 0.2}s`,
                transform: `rotate(${(360 / skills.length) * index}deg) translate(180px) rotate(-${(360 / skills.length) * index}deg)`
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Card
                hoverable
                cover={<img className="skill-image" src={skill.image} alt={skill.name} />}
                className="w-40 h-56 text-center bg-white shadow-lg"
              >
                <p className="font-medium text-xl">{skill.name}</p>
                <p className="text-gray-600 text-sm">{skill.Knowledle}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
