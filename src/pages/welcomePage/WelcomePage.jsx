import React from "react";
import myVideo from "../../assets/video1.mp4";
import { Link } from "react-router-dom";
import "./WelcomePage.css";
import { useSelector } from "react-redux";
import store from "../../store/Store";
const WelcomePage = () => {
  let reduxdata = useSelector((storeData) => {
    return storeData;
  });

 

  return (
    <div className="h-screen overflow-hidden m-0 p-0 relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src={myVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[rgba(0,1,2,0.7)] -z-5"></div>

      <div className="flex flex-col items-center justify-center h-full text-white relative z-10 p-10 text-center leading-8">
        <h1
          id="welcomeH1"
          className="text-5xl font-semibold mb-2 leading-tight animate-zoomIn delay-200"
        >
          Welcome <br />
          To My Portfolio!!
        </h1>

        <p className="text-lg m-5 animate-zoomIn delay-400">
          Here, you'll discover my projects, skills, and achievements.
        </p>
        <Link to="/home">
          <button
            id="btn"
            className="animate-zoomIn delay-600"
            onClick={() => {
             reduxdata.setState(true)
            }}
          >
            To Know More
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
