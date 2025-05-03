import React from 'react';
import { Tooltip } from 'antd';
import {
  HomeOutlined,
  InfoCircleOutlined,
  AppstoreOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import { Notebook } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { icon: <HomeOutlined />, label: 'Home', link: '/' },
  { icon: <InfoCircleOutlined />, label: 'About', link: '/about-me' },
  { icon: <AppstoreOutlined />, label: 'All Projects', link: '/all-project' },
  { icon: <PhoneOutlined />, label: 'Contact', link: '/contact-me' },
  { icon: <Notebook />, label: 'Blog', link: '/my-blogs' },
];

const Navbar = () => {
  return (
    <nav className="w-full font-orbitron shadow-md 
    fixed top-0 left-0 z-50">
      <div className="max-w-7xl   mx-auto px-4 py-2 flex
       justify-center md:space-x-16 space-x-8">
        {navItems.map((item, index) => (
          <Tooltip key={index} title={item.label} placement="bottom">
            <Link
              href={item.link}
              className="text-lg md:text-2xl
                hover:text-blue-500 transition duration-300"
            >
              {item.icon}
            </Link>
          </Tooltip>
        ))}
     
      </div>
      <hr className='' />
    </nav>
  );
};

export default Navbar;
