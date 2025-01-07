import React from "react";
import Imageone from "../../assets/img/img1.png";
import Imagetwo from "../../assets/img/img2.png";
import Imagethree from "../../assets/img/img3.png";
import Imagefour from "../../assets/img/img4.png";
import Imagefive from "../../assets/img/img5.png";

const Project = () => {
  const projects = [
    {
      title: "Minesweeper",
      description:
        "An interactive Minesweeper game developed using Python and Tkinter. It features customizable grid sizes, difficulty levels, real-time feedback, and win/lose states.",
      link: "#",
      image: Imageone,
    },
    {
      title: "Fake Logo Detection",
      description:
        "A robust Fake Logo Detection system leveraging Python with CNN and LSTM for backend processing and React.js for the frontend interface. The project identifies counterfeit logos by analyzing visual patterns and temporal data.",
      link: "#",
      image: Imagetwo,
    },
    {
      title: "MetaL Handicraft E-Commerce Website",
      description:
        "The MetaL Handicraft E-Commerce website is built with HTML for content structure, CSS for styling, PHP for server-side functions like payment processing, and JavaScript for interactive features like product filtering. It offers a seamless shopping experience with easy navigation, secure payments, and responsive design for both desktop and mobile users.",
      link: "#",
      image: Imagethree,
    },
    {
      title: "Furniture Rental System Website",
      description:
        "The Furniture Rental System website is built with HTML for content structure, CSS for styling, PHP for server-side functions like booking and payment processing, and JavaScript for interactive features like filtering and live updates. It provides a smooth rental experience with easy navigation, secure payments, and responsive design for both desktop and mobile users.",
      link: "#",
      image: Imagefour,
    },
    {
      title: "Weather App",
      description:
        "The Weather App is developed using Android Studio with XML for UI design, Java/Kotlin for app functionality, and API integration for real-time weather data. It offers an intuitive interface to check weather forecasts, provides location-based information, and delivers live updates with a responsive design for Android users.",
      link: "#",
      image: Imagefive,
    },
  ];

  return (
    <div
      id='Projects'
      className='p-6 md:p-12 ' // Reduced padding for smaller container
    >
      <h2 className='text-2xl md:text-4xl text-[#333333] font-bold text-center mb-8'>
        Projects
      </h2>

      {/* Grid for first three projects */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {projects.slice(0, 3).map((project, index) => (
          <div
            key={index}
            className='bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 flex flex-col'
            style={{ minHeight: "400px" }} // Ensures uniform box height
          >
            <img
              src={project.image}
              alt={project.title}
              className='w-full h-48 object-cover'
            />
            <div className='p-6 flex-grow'>
              <h3 className='text-xl font-semibold text-gray-800'>
                {project.title}
              </h3>
              <p className='text-sm text-gray-600 mt-2 text-justify'>
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Centered Furniture and Weather App */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 justify-center md:mx-36 mt-8'>
        {" "}
        {/* Reduced max-width */}
        {projects.slice(3).map((project, index) => (
          <div
            key={index}
            className='bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 flex flex-col'
            style={{ minHeight: "400px" }} // Ensures uniform box height
          >
            <img
              src={project.image}
              alt={project.title}
              className='w-full h-48 object-cover'
            />
            <div className='p-6 flex-grow'>
              <h3 className='text-xl font-semibold text-gray-800'>
                {project.title}
              </h3>
              <p className='text-sm text-gray-600 mt-2 text-justify'>
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
