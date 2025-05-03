import Link from 'next/link';
import React from 'react';
import Container from './Container';

const Footer = () => {
  return (
    <footer className=" text-white py-2">
     <Container> <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        
        {/* Column 1: Name & Email */}
        <div>
          <h3 className="text-lg font-semibold">NILIMA JAHAN PRITOM</h3>
          <p className="text-sm mt-2">njahanpritom65@gmail.com</p>
        </div>

        {/* Column 2: Page Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Pages</h3>
          <ul className="space-y-1 text-sm flex gap-4 justify-center md:justify-start">
            <li><Link href="about-me" className="hover:underline">About</Link></li>
            <li><Link href="" className="hover:underline">Home</Link></li>
            <li><Link href="contact-me" className="hover:underline">Contact</Link></li>
            <li><Link href="all-project" className="hover:underline">Project</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold">Contact Info</h3>
          <p className="text-sm mt-2">Phone: +880-1629252634</p>
          <p className="text-sm">Chittagong, Bangladesh</p>
        </div>

      </div>

      {/* Optional bottom text */}
      <div className="text-center text-xs mt-6">
      <p className='text-xs text-gray-300'> &copy; {new Date().getFullYear()} NILIMA JAHAN PRITOM. All rights reserved.</p>
      </div></Container>
    </footer>
  );
};

export default Footer;
