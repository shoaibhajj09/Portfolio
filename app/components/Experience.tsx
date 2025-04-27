"use client";
import React from "react";

import TimeLine from "./TimeLine";


function Experience() {
 

  return (
    <section
      id="experience"
      className="min-h-screen py-10 lg:py-16 xl:py-10 bg-[#111828] overflow-visible"
    >
      <div className="container max-w-7xl flex flex-col w-full  h-full justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h3 className="h3  font-bold p-3">My Journey</h3>
          <p className="body-1 text-gray-600  dark:text-gray-400">
            Education and Work Experience
          </p>
        </div>
        <div className="flex  items-end container max-w-lg">
          <TimeLine />
        </div>
      </div>
    </section>
  );
}

export default Experience;
