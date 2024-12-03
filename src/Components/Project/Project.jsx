import React from "react";

const Project = () => {
  const projects = [
    {
      title: "Project 1",
      description:
        "This is a short description of the first project. It uses React and Tailwind CSS.",
      link: "#",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Project 2",
      description:
        "This is a short description of the second project. It uses Laravel and MySQL.",
      link: "#",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Project 3",
      description:
        "This is a short description of the third project. It uses PHP and JavaScript.",
      link: "#",
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div
      id='Projects'
      className='p-10 md:p-24 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500'>
      <h2 className='text-2xl md:text-4xl text-white font-bold text-center mb-12'>
        Projects
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300'>
            <img
              src={project.image}
              alt={project.title}
              className='w-full h-48 object-cover'
            />
            <div className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800'>
                {project.title}
              </h3>
              <p className='text-sm text-gray-600 mt-2'>
                {project.description}
              </p>
              <a
                href={project.link}
                className='inline-block mt-4 text-blue-600 hover:underline'>
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
