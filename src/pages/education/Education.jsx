import React from "react";
import "animate.css";
import "./Education.css";

const Education = () => {
  const educationData = [
    {
      title: "B.Tech in Computer Science",
      year: "2024",
      school: "Sree Venkateswara College of Engineering",
      details: "Graduated with 80%",
    },

    {
      title: "Intermediate",
      year: "2020",
      school: "Narayana Junior College",
      details: "Board of Intermediate Education, A.P, Percentage: 95%",
    },
    {
      title: "10th Standard",
      year: "2018",
      school: "Z.P. High School",
      details: "Board of Secondary Education, CGPA: 9.0",
    },
  ];

  return (
    <section id="education" className="pt-28 pb-16  EdContainer">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10 animate__animated animate__zoomIn">
        Education
      </h1>
      <div className="container mx-auto px-6 space-y-10 w-full md:w-2/3 lg:w-1/2">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`flex items-start w-full bg-white shadow-lg p-6 rounded-lg transform transition-all duration-500 animate__animated animate__bounceInUp animate__delay-${index}s hover:scale-105 hover:shadow-2xl hover:rotate-2`}
            style={{ animationDelay: `${index * 300}ms` }}
          >
            <div className="mr-6 text-xl font-bold text-blue-500 animate__animated animate__pulse animate__infinite animate__delay-2s">
              {edu.year}
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                {edu.title}
              </h3>
              <p className="text-lg text-gray-700">{edu.school}</p>
              <p className="text-gray-500">{edu.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
