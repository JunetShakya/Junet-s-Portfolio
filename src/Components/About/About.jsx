import React from "react";
import FrontendImg from "../../assets/img/FD.png";
import BackendImg from "../../assets/img/BD.png";

const About = () => {
  return (
    <div
      id='About' // Corrected the 'id' attribute
      className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-lg mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
      <div>
        <h2 className='text-2xl md:text-4xl font-bold mb-6 text-center'>
          About
        </h2>
        <div className='md:flex flex-wrap flex-col md:flex-row items-center gap-8'>
          {/* Frontend Developer Section */}
          <div className='flex flex-col md:flex-row gap-6 items-center'>
            <img
              className='w-48 h-48 rounded-lg shadow-md'
              src={FrontendImg}
              alt='Frontend Developer'
            />
            <div className='w-full md:w-96'>
              <h1 className='text-xl md:text-md leading-normal'>
                Frontend Developer
              </h1>
              <p className='text-sm md:text-md leading-tight text-justify'>
                A front-end developer skilled in HTML, CSS, JavaScript, Node.js,
                React.js, and Tailwind CSS creates responsive, interactive, and
                visually appealing web interfaces. They leverage React.js for
                modular components, Tailwind CSS for efficient styling, and
                Node.js for server-side functionality, delivering modern,
                scalable web applications.
              </p>
            </div>
          </div>

          {/* Backend Developer Section */}
          <div className='flex flex-col md:flex-row gap-6 items-center'>
            <img
              className='w-48 h-48 rounded-lg shadow-md'
              src={BackendImg}
              alt='Backend Developer'
            />
            <div className='w-full md:w-96'>
              <h1 className='text-xl md:text-md leading-normal'>
                Backend Developer
              </h1>
              <p className='text-sm md:text-md leading-tight text-justify'>
                A back-end developer skilled in Laravel, MySQL, and PHP builds
                robust and secure server-side applications. Using Laravel's
                powerful framework, they streamline development with clean,
                scalable code, while MySQL handles efficient data storage and
                management. PHP ensures seamless server-side logic, enabling
                dynamic and interactive web solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
