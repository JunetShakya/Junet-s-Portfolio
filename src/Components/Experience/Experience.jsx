import React from "react";
import { FaCss3, FaHtml5, FaJs, FaLaravel } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiPhp, SiReact, SiTailwindcss, SiMysql } from "react-icons/si";

const Experience = () => {
  return (
    <div id='Experience' className='p-10 md:p-24'>
      <div className='bg-black bg-opacity-60 shadow-2xl mx-0 md:mx-20 rounded-lg p-12'>
        <h1 className='text-2xl md:text-4xl text-white font-bold text-center'>
          Experience
        </h1>
        <div className='flex flex-wrap items-center justify-around'>
          <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>
            <span
              className='p-3 bg-zinc-950 flex items-center rounded-2xl'
              title='HTML5'>
              <FaHtml5 color='#E34F26' size={50} />
            </span>
            <span
              className='p-3 bg-zinc-950 flex items-center rounded-2xl'
              title='CSS3'>
              <FaCss3 color='#1572B6' size={50} />
            </span>
            <span
              className='p-3 bg-zinc-950 flex items-center rounded-2xl'
              title='JavaScript'>
              <FaJs color='#F7DF1E' size={50} />
            </span>
            <span
              className='p-3 bg-zinc-950 flex items-center rounded-2xl'
              title='Laravel'>
              <FaLaravel color='#FF2D20' size={50} />
            </span>
            <span
              className='p-3 bg-zinc-950 flex items-center rounded-2xl'
              title='PHP'>
              <SiPhp color='#8993BE' size={50} />
            </span>
            <span
              className='p-3 bg-zinc-950 flex items-center rounded-2xl'
              title='Node.js'>
              <DiNodejs color='#8CC84B' size={50} />
            </span>
            <span
              className='p-3 bg-zinc-950 flex items-center rounded-2xl'
              title='React.js'>
              <SiReact color='#61DAFB' size={50} />
            </span>
            <span
              className='p-3 bg-zinc-950 flex items-center rounded-2xl'
              title='Tailwind CSS'>
              <SiTailwindcss color='#06B6D4' size={50} />
            </span>
            <span
              className='p-3 bg-zinc-950 flex items-center rounded-2xl'
              title='SQL'>
              <SiMysql color='#4479A1' size={50} />
            </span>
          </div>

          {/* Internship Experience */}
          <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>
            <div className='text-white'>
              <h2 className='text-xl font-semibold'>
                Studio Martrixa Pvt. Ltd.
              </h2>
              <p className='text-sm text-gray-300'>
                Internship | Laravel Developer
              </p>
              <p className='text-sm text-gray-300'>Dec 2023 - Jun 2024</p>
              <div className='mt-4'>
                <p className='text-sm text-gray-300'>
                  <strong>Address:</strong>
                  <br />
                  RA.SA.PA. BHAWAN, 4th Floor
                  <br />
                  Nayabazar 16, Kathmandu, Nepal
                </p>
                <p className='text-sm text-gray-300'>
                  <strong>Contact:</strong>
                  <br />
                  Email:{" "}
                  <a
                    href='mailto:contact@studiomatrix.com.np'
                    className='text-blue-400'>
                    contact@studiomatrix.com.np
                  </a>
                  <br />
                  Phone:{" "}
                  <a href='tel:+9779851216957' className='text-blue-400'>
                    +977-9851216957
                  </a>
                </p>
                <p className='text-sm text-gray-300'>
                  Website:{" "}
                  <a
                    href='https://studiomatrix.com.np/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-400'>
                    studiomatrix.com.np
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
