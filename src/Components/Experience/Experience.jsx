import React from "react";
import { FaCss3, FaHtml5, FaJs, FaLaravel } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiPhp, SiReact, SiTailwindcss, SiMysql } from "react-icons/si";

const Experience = () => {
  return (
    <div id='Experience' className='p-6 md:p-16'>
      <div className='bg-[#FACF43] bg-opacity-60 shadow-2xl mx-4 md:mx-20 rounded-lg p-8 md:p-12'>
        <h1 className='text-2xl md:text-4xl text-[#333333] font-bold text-center'>
          Experience
        </h1>
        <div className='flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mt-10'>
          {/* Skill Icons */}
          <div className='flex flex-wrap gap-6 justify-center md:justify-start md:w-1/2'>
            {[
              { Icon: FaHtml5, color: "#E34F26", title: "HTML5" },
              { Icon: FaCss3, color: "#1572B6", title: "CSS3" },
              { Icon: FaJs, color: "#F7DF1E", title: "JavaScript" },
              { Icon: FaLaravel, color: "#FF2D20", title: "Laravel" },
              { Icon: SiPhp, color: "#8993BE", title: "PHP" },
              { Icon: DiNodejs, color: "#8CC84B", title: "Node.js" },
              { Icon: SiReact, color: "#61DAFB", title: "React.js" },
              { Icon: SiTailwindcss, color: "#06B6D4", title: "Tailwind CSS" },
              { Icon: SiMysql, color: "#4479A1", title: "SQL" },
            ].map(({ Icon, color, title }) => (
              <span
                key={title}
                className='p-3 bg-zinc-950 flex items-center justify-center rounded-2xl'
                title={title}>
                <Icon color={color} size={50} />
              </span>
            ))}
          </div>

          {/* Experience Details */}
          <div className='flex flex-col gap-6 p-6 text-[#333333] md:w-1/2'>
            <div>
              <h2 className='text-lg md:text-xl text-[#333333] font-semibold'>
                Studio Martrixa Pvt. Ltd.
              </h2>
              <p className='text-sm text-[#333333]'>
                Internship | Laravel Developer
              </p>
              <p className='text-sm text-[#333333]'>Dec 2023 - Jun 2024</p>
            </div>
            <div className='text-sm text-[#333333]'>
              <p className='mt-4'>
                <strong>Address:</strong>
                <br />
                RA.SA.PA. BHAWAN, 4th Floor
                <br />
                Nayabazar 16, Kathmandu, Nepal
              </p>
              <p className='mt-4'>
                <strong>Contact:</strong>
                <br />
                Email:{" "}
                <a
                  href='mailto:contact@studiomatrix.com.np'
                  className='text-[#333333] break-all'>
                  contact@studiomatrix.com.np
                </a>
                <br />
                Phone:{" "}
                <a href='tel:+9779851216957' className='text-[#333333]'>
                  +977-9851216957
                </a>
              </p>
              <p className='mt-4'>
                Website:{" "}
                <a
                  href='https://studiomatrix.com.np/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-[#333333]'>
                  studiomatrix.com.np
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
