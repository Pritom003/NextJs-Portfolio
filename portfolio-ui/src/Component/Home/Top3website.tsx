// src/app/components/Top3website.tsx

import { getTopProjects } from "./getTopProjects";
import Top3Carousel from "./Top3Carousel";


const Top3website = () => {
  const top3 = getTopProjects();

  return (
    <div className="space-y-6 mt-10">
      <h2 className="text-3xl font-bold text-center">Top 3 Projects</h2>
      <Top3Carousel projects={top3} />
    </div>
  );
};

export default Top3website;
