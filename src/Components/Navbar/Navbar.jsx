import React, { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className='flex flex-wrap justify-between items-center text-white px-10 pt-6 md:px-20 bg-[#1e2745] bg-opacity-80 rounded-full shadow-lg'>
      <span className='text-xl font-bold tracking-wide'>Portfolio</span>
      {/* Toggle Button for Mobile */}
      <RiMenu2Line
        size={30}
        className='md:hidden absolute right-10 top-6 text-gray-400 hover:text-white transition-all duration-300 cursor-pointer'
        onClick={toggleMenu}
      />
      {/* Navigation Links */}
      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-24 py-2 mt-4 font-semibold md:mt-0 bg-[#1e2745] px-6 rounded-full bg-opacity-50 text-center md:bg-transparent md:static md:flex gap-6`}>
        <a href='#About'>
          <li className='hover:text-gray-400 cursor-pointer'>About</li>
        </a>
        <a href='#Experience'>
          <li className='hover:text-gray-400 cursor-pointer'>Experience</li>
        </a>
        <a href='#Projects'>
          <li className='hover:text-gray-400 cursor-pointer'>Projects</li>
        </a>
        <a href='#Contact'>
          <li className='hover:text-gray-400 cursor-pointer'>Contact</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
