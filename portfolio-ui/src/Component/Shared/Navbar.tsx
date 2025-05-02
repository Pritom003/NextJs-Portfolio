import React from 'react';
import { Tooltip } from 'antd';
import {
  HomeOutlined,
  InfoCircleOutlined,
  AppstoreOutlined,
  PhoneOutlined,
} from '@ant-design/icons';

const navItems = [
  { icon: <HomeOutlined />, label: 'Home', link: '/' },
  { icon: <InfoCircleOutlined />, label: 'About', link: '/about-me' },
  { icon: <AppstoreOutlined />, label: 'All Projects', link: '/all-project' },
  { icon: <PhoneOutlined />, label: 'Contact', link: '/contact' },
];

const Navbar = () => {
  return (
    <nav className="w-full font-orbitron shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl  w-56 mx-auto px-4 py-2 flex
       justify-center space-x-16">
        {navItems.map((item, index) => (
          <Tooltip key={index} title={item.label} placement="bottom">
            <a
              href={item.link}
              className="text-2xl  hover:text-blue-500 transition duration-300"
            >
              {item.icon}
            </a>
          </Tooltip>
        ))}
     
      </div>
      <hr className='' />
    </nav>
  );
};

export default Navbar;
