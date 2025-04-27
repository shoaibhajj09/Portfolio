"use client";
import React from "react";

import WorksCards from "./WorkCards";
import { useInView } from "react-intersection-observer";
function Works() {
  const { ref, inView } = useInView();
  return (
    <section className="min-h-screen py-10 lg:py-16 xl:py-10">
      <div className="container max-w-7xl flex flex-col w-full  h-full justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h3 className="h3 text-center  md:text-start  font-bold p-3">
            Creative Work
          </h3>
          <p className="body-1 text-gray-600 text-center  md:text-start  dark:text-gray-400">
            Bringing ideas to life through innovative design and seamless
            interactions
          </p>
        </div>
        <div ref={ref}>{inView && <WorksCards />}</div>
      </div>
    </section>
  );
}

export default Works;
