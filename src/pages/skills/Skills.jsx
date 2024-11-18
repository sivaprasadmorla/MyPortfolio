import React from 'react';
import 'animate.css'; // Import Animate.css

const skills = [
  { name: 'Python', rating: 4, icon: 'fab fa-python' },
  { name: 'Core Java', rating: 3, icon: 'fab fa-java' },
  { name: 'MySQL', rating: 3.5, icon: 'fa fa-database' },
  { name: 'HTML', rating: 4, icon: 'fab fa-html5' },
  { name: 'CSS', rating: 4, icon: 'fab fa-css3-alt' },
  { name: 'JavaScript', rating: 3.7, icon: 'fab fa-js' },
  { name: 'React.js', rating: 3.7, icon: 'fab fa-react' },
  { name: 'MongoDB', rating: 3.5, icon: 'fa fa-leaf' },
  { name: 'Node.js', rating: 3.6, icon: 'fab fa-node' },
  { name: 'Bootstrap', rating: 3.6, icon: 'fab fa-bootstrap' },
  { name: 'Tailwind CSS', rating: 3.6, icon: 'fab fa-tailwind' },
  
  
];

const getStarRating = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  // Create full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<i key={`full-${i}`} className="fa fa-star text-yellow-400"></i>);
  }

  // Create half star
  if (halfStar) {
    stars.push(<i key="half" className="fa fa-star-half-alt text-yellow-400"></i>);
  }

  // Create empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<i key={`empty-${i}`} className="fa fa-star text-gray-400"></i>);
  }

  return stars;
};

const Skills = () => {
  return (
    <div className="skills-container pt-20 pb-20 bg-[#3244e7]">
      <h2 className="text-center text-4xl font-semibold mb-8 animate__animated animate__fadeIn">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card  group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="card-front p-2 flex flex-col justify-center items-center h-full bg-[#7c4ae0] text-white">
              <i className={`${skill.icon} text-5xl`}></i>
              <p className="mt-4 text-lg">{skill.name}</p>
            </div>
            <div className="card-back absolute top-0 left-0 w-full h-full bg-gray-800 text-white flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="flex space-x-1">{getStarRating(skill.rating)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
