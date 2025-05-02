/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: any;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description, imageUrl }) => {
  const router = useRouter();
  console.log('Image URL:', imageUrl);
  const handleNavigate = () => {
    router.push(`/all-project/${id}`);
  };

  return (
    <div className="w-full max-w-md bg-[#231f1f] rounded-lg shadow-md overflow-hidden group">
      {/* Top Section */}
      <div className="flex justify-between items-center px-4 pt-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <Button
          shape="circle"
          icon={<ArrowRightOutlined />}
          onClick={handleNavigate}
          className='!bg-black !text-white'
        />
      </div>

      {/* Description */}
      <p className="text-sm text-gray-200 px-4">{description}</p>

      {/* Image */}
      <div className="p-4">
  <div className="h-48 overflow-y-auto rounded-md">
    <img
      src={imageUrl}
      alt={title}
      className="w-full object-cover"
    />
  </div>
</div>

    </div>
  );
};

export default ProjectCard;
