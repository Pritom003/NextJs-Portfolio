import fs from 'fs';
import path from 'path';

export const getTopProjects = () => {
  const filePath = path.join(process.cwd(), 'src/app/project.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const projects = JSON.parse(fileContents);
  return projects.slice(0, 3);
};
