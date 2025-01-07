import React, { useState } from "react";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className='flex flex-wrap justify-between items-center text-[#333333] px-10 pt-6 md:px-20 bg-[#FACF43] shadow-lg rounded-full'>
      {/* Replace Logo with Junet */}
      <span className='text-2xl font-bold'>Junet.</span>

      <div className='md:hidden'>
        <RiMenu2Line
          size={30}
          className={`text-gray-800 hover:text-white transition-all duration-300 cursor-pointer ${
            menu ? "hidden" : "block"
          }`}
          onClick={toggleMenu}
          aria-label='Open navigation menu'
        />
        <RiCloseLine
          size={30}
          className={`text-gray-800 hover:text-white transition-all duration-300 cursor-pointer ${
            menu ? "block" : "hidden"
          }`}
          onClick={toggleMenu}
          aria-label='Close navigation menu'
        />
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-24 py-2 mt-4 font-semibold md:mt-0 bg-opacity-70 text-center md:bg-transparent md:static md:flex gap-6 transition-all duration-300`}>
        <a href='#About' onClick={() => setMenu(false)}>
          <li className='text-xl hover:text-gray-400 cursor-pointer'>About</li>
        </a>
        <a href='#Experience' onClick={() => setMenu(false)}>
          <li className='text-xl hover:text-gray-400 cursor-pointer'>
            Experience
          </li>
        </a>
        <a href='#Projects' onClick={() => setMenu(false)}>
          <li className='text-xl hover:text-gray-400 cursor-pointer'>
            Projects
          </li>
        </a>
        <a href='#Contact' onClick={() => setMenu(false)}>
          <li className='text-xl hover:text-gray-400 cursor-pointer'>
            Contact
          </li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
