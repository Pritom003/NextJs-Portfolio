// src/app/projects/page.tsx (or your appropriate file path)
import ProjectCard from '@/Component/Shared/cards/ProjectjctCard';
import Container from '@/Component/Shared/Container';
import fs from 'fs';
import path from 'path';
// import ProjectCard from '@/Component/Shared/cards/ProjectCard';
import React from 'react';

const AllProjects = async () => {
  // Read the JSON file from the filesystem
  const filePath = path.join(process.cwd(), 'src/app/project.json');
  const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  return (
   <Container>
      <h2 className="text-6xl my-10 mt-20 lg:text-8xl  text-transparent
     stroke-purple-500 stroke-1 uppercase font-extrabold
      tracking-widest">
        All Projects
    </h2>
     <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 p-9 my-20'>
     
     {jsonData.map((project: { id: string; title: string; description: string; imageOne: string }) => (
       <ProjectCard
         key={project.id}
         title={project.title}
         id={project.id}
         imageUrl={project.imageOne}
         description={`${project.description.slice(0, 50)}...`} // Truncate description
       />
     ))}
   </div>
   </Container>
  );
};

export default AllProjects;
