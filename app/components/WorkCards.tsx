"use client";
import React from "react";
import { motion } from "framer-motion";

// Animation variants with staggered children
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

function WorksCards() {
  const cards = [
    {
      title: "Interactive UI",
      color: "from-blue-500 to-blue-600",
      description:
        "Creating engaging user interfaces with smooth animations and transitions",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-code w-8 h-8"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
    },
    {
      title: "  Creative Design",
      color: " from-purple-500 to-purple-600",
      description:
        " Implementing unique and creative design solutions with modern  aesthetics",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-palette w-8 h-8"
        >
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
        </svg>
      ),
    },
    {
      title: " Animations",
      color: "from-green-500 to-green-600",
      description:
        " Bringing websites to life with captivating animations and effects",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-wand2 w-8 h-8"
        >
          <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"></path>
          <path d="m14 7 3 3"></path>
          <path d="M5 6v4"></path>
          <path d="M19 14v4"></path>
          <path d="M10 2v2"></path>
          <path d="M7 8H3"></path>
          <path d="M21 16h-4"></path>
          <path d="M11 3H9"></path>
        </svg>
      ),
    },
    {
      title: "Responsive",
      color: "from-yellow-500 to-yellow-600 ",
      description:
        "Building fully responsive websites that work seamlessly across all devices",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-laptop w-8 h-8"
        >
          <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
        </svg>
      ),
    },
  ];

  return (
    <motion.div
      className="grid md:grid-cols-2 mt-20 gap-20"
      initial="hidden"
      whileInView="show"
      viewport={{  margin: "-100px" }}
      variants={containerVariants}
    >
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="flex flex-row mx-5"
          variants={cardVariants}
        >
          <div className="flex flex-row mx-5">
            <motion.div
              className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} p-4 flex items-center justify-center text-white shadow-lg mr-5`}
              animate={{
                y: ["0px", "-5px", "0px", "-5px", "0px"], // More subtle up/down
                rotate: ["0deg", "2deg", "-2deg", "2deg", "0deg"], // More subtle rotation
              }}
              transition={{
                duration: 6, // Even slower animation
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.25, 0.5, 0.75, 1], // Controls when each keyframe occurs
              }}
            >
              {card.svg}
            </motion.div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-md body-2 dark:text-gray-400">
                {card.description}
              </p>
              <div
                className={`h-0.5 mt-4 bg-gradient-to-r ${card.color}`}
              ></div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default WorksCards;
