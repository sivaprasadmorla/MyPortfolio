import React from "react";
import "animate.css";
import "./Hero.css";
import photo from "../../assets/photo.jpg";
const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-8 md:px-20 hero">
      <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 hero-left animate__animated animate__fadeInLeft">
        <span className="text-xl md:text-2xl font-semibold text-gray-500">
          Hello, I'm
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
          Siva Prasad Morla
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          Full Stack Developer | Passionate About Innovation
        </p>
      </div>

      <div className="md:w-1/2 flex flex-col items-center hero-right animate__animated animate__fadeInUp">
        <img
          src={photo}
          alt="Siva Prasad Morla"
          className="md:w-64 md:h-64 rounded-full shadow-lg object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
