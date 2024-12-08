import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "ROS2",
    },
    {
      id: 3,
      link: "why now",
    },
    {
      id: 4,
      link: "why ao",
    },
    {
      id: 5,
      link: "projects",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-neon-blue bg-gradient-to-r from-black to-gray-900 fixed shadow-md shadow-neon-blue">
      {/* Left Section */}

      <div className="bg-black">
        <h1 className="text-5xl font-signature ml-2 text-neon-blue drop-shadow-neon">
          ao-robotics
        </h1>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:text-neon-blue hover:scale-110 hover:shadow-lg hover:shadow-neon-blue transition duration-300"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Navigation Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-900 to-black text-gray-400">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-neon-blue hover:scale-105 transition duration-300"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
