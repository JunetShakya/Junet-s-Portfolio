import React from "react";
import Profile from "../../assets/img/pp.png";

const Home = () => {
  return (
    <div className='text-white flex flex-col md:flex-row w-full justify-between items-center md:items-start p-10 md:p-20'>
      {/* Image Section */}
      <div className='order-1 md:order-2 w-full md:w-2/5 flex justify-center mt-10 md:mt-0'>
        <img
          src={Profile}
          alt='Profile of Junet Shakya'
          className='rounded-full shadow-lg w-32 h-32 md:w-auto md:h-auto'
        />
      </div>

      {/* Text Section */}
      <div className='order-2 md:order-1 md:w-2/4 md:pt-10'>
        <h1 className='text-3xl md:text-6xl font-bold leading-normal tracking-tighter'>
          Hello, I'm Junet Shakya
        </h1>
        <p className='text-sm md:text-2xl tracking-tight text-justify mt-6'>
          I am a web developer with a strong academic foundation in Computer
          Applications, having recently graduated with a Bachelor of Computer
          Applications (BCA) from DAV College under Tribhuvan University. My
          passion for web technologies has driven me to develop hands-on
          expertise in designing and building dynamic, user-friendly websites
          and applications, while staying attuned to the latest trends in the
          web development landscape. As a highly motivated and detail-oriented
          individual, I am dedicated to creating innovative web solutions that
          combine functionality with exceptional user experiences. I am eager to
          continue expanding my skills, exploring new technologies, and
          leveraging my expertise to tackle real-world challenges, delivering
          impactful digital solutions that drive success.
        </p>

        {/* Contact Button */}
        <button
          className='mt-5 md:mt-10 text-white py-2 px-4 text-sm md:text-md hover:opacity-85
            duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] w-full md:w-auto'
          style={{ display: "block", textAlign: "left" }}>
          <div>
            <p className='font-semibold'>Contact Information</p>
            <p className='text-sm'>Phone: 9808302894</p>
            <p className='text-sm'>Email: shakyajunet@gmail.com</p>
            <p className='text-sm'>Address: Jyatha, Laitpur</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Home;
