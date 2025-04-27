"use client";
import React from "react";
// import { ModeToggle } from "./ModeToggle";
import { Link } from "react-scroll";
function NavBar() {
  return (
    <div
      className="fixed left-0 right-0 top-4 z-50 flex items-center justify-between   md:max-w-[650px]  h-auto md:mx-auto  text-gray-600 text-md font-medium

   border border-gray-700  backdrop-blur-md px-3 py-1 rounded-full dark:text-gray-200  "
    >
      <div className="flex justify-between items-center w-full p-1 md:p-2">
        <Link
          to="Hero"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-blue-500 hover:scale-105"
        >
          Home
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-blue-500 hover:scale-105"
        >
          Projects
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-blue-500 hover:scale-105"
        >
          Experience
        </Link>
        <Link
          to="Contanct"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-blue-500 hover:scale-105"
        >
          Contanct
        </Link>
      </div>
      {/* <ModeToggle /> */}
    </div>
  );
}

export default NavBar;
