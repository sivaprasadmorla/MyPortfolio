import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
import SivaPrasad from '../../assets/SivaPrasad.pdf'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const showMenu = () => {
    setMenuOpen(true);
  };

  const hideMenu = () => {
    setMenuOpen(false);
  };

  const handleDownload = () =>{
    let link = document.createElement('a')
    link.href = SivaPrasad
    link.download = "SivaPrasadResume"
    link.click()
  }

  return (
    <div className="navbar w-screen h-14 fixed flex items-center justify-around px-4  shadow-lg z-20 bg-[#52574f]">
      <Link to="/home">
        <img src={logo} alt="" className="logo" />
      </Link>

      <div
        className={`nav-links ${
          menuOpen ? "right-0" : "-right-full"
        } transition-all duration-300 ease-in-out`}
      >
        <i
          className="fa-solid fa-circle-xmark text-2xl cursor-pointer "
          onClick={hideMenu}
        ></i>
        <ul className="flex flex-col md:flex-row md:items-center md:gap-8 mt-4 md:mt-0 ">
          <li>
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Education" className="nav-link">
              Education
            </Link>
          </li>
          <li>
            <Link to="/Projects" className="nav-link">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/skills" className="nav-link">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li>
            <button className="bg-[#ff000075] text-[#ffffff] px-[10px] py-[5px] text-sm rounded-md hover:bg-[#3d3586] " onClick={handleDownload}>Download</button>
          </li>
        </ul>
      </div>
      

      <i
        className="fa-solid fa-bars text-2xl cursor-pointer md:hidden"
        onClick={showMenu}
      ></i>
    </div>
  );
};

export default Navbar;
