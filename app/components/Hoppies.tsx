"use client";
import { chess, football, games, Madrid } from "@/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
function Hoppies() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="hoppies"
      className="min-h-screen py-10 lg:py-16 xl:py-8 bg-[#1b1738]"
    >
      <div className="container max-w-7xl flex flex-col w-full  h-full justify-center items-center">
        <div className="flex flex-col justify-center items-center text-center">
          <h3 className="h3  font-bold p-3">When I&apos;m Not Coding</h3>
          <p className="body-1 text-gray-600 text-wrap  dark:text-gray-400 md:px-55 text-center">
            From chessboard tactics ♟️ to virtual adventures 🎮 and the thrill
            of football ⚽ this is how I fuel my energy beyond the routine! ⚡
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="flex flex-row mx-5" variants={cardVariants}>
            <Image
              className="object-cover w-full rounded-lg md:h-120 "
              src={chess}
              alt="chess"
            />
          </motion.div>
          <motion.div className="flex flex-row mx-5" variants={cardVariants}>
            <Image
              className="object-cover w-full rounded-lg md:h-120 "
              src={games}
              alt="games"
            />
          </motion.div>
          <motion.div className="flex flex-row mx-5" variants={cardVariants}>
            <Image
              className="object-cover w-full rounded-lg md:h-120 "
              src={football}
              alt="football"
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <h1 className="text-xl text-center mx-1 md:text-4xl text-nowrap  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-purple-600 animate-pulse">
          Hala Madrid
        </h1>
        <Image
          className="bg-transparent rounded-lg w-24 "
          src={Madrid}
          alt="Madrid"
        />
        <h1 className="text-xl md:text-4xl mx-1 font-extrabold text-nowrap  text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-purple-600 animate-pulse">
          y Nada Más!
        </h1>
      </div>
    </section>
  );
}

export default Hoppies;
