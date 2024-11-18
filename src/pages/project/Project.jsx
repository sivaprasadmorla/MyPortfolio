import React from 'react';
import 'animate.css';

const projects = [
  {
    title: "Deep Learning based Bird Species Classification",
    description: "A deep learning project that classifies bird species using a neural network model. The project leverages image processing and classification techniques to identify bird species with high accuracy.",
    technologies: ["Deep Learning", "Python", "TensorFlow"],
  },
  {
    title: "Personal Portfolio",
    description: "A personal portfolio website showcasing projects, skills, and experience. Built with React.js for dynamic component rendering and Redux for state management.",
    technologies: ["React.js", "Redux", "JavaScript", "TailWind CSS"],
  },
  {
    title: "E-commerce Website",
    description: "An eCommerce platform built with the MERN stack, featuring a product catalog, shopping cart, and secure user authentication for a seamless online shopping experience.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
  },
];

const Project = () => {
  return (
    <section id="projects" className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
      <h2 className="text-4xl font-bold text-center text-white mb-12 animate__animated animate__bounceInDown">
        Projects
      </h2>
      <div className="container mx-auto px-6 md:px-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:rotate-2 animate__animated animate__fadeInUp`}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="p-6">
              <h3 className="text-2xl text-center font-semibold text-indigo-700 mb-2 animate__animated animate__fadeInLeft animate__delay-1s">
                {project.title}
              </h3>
              <p className="text-gray-700 text-xs text-center mb-4 animate__animated animate__fadeIn animate__delay-2s">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 animate__animated animate__pulse animate__infinite animate__slow">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm font-medium bg-indigo-200 text-indigo-800 rounded-full px-3 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
