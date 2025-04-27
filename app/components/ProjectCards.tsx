"use client";
import React from "react";
import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Play, ExternalLink } from "lucide-react";
import {
  StaticImageData,
  StaticRequire,
} from "next/dist/shared/lib/get-img-props";

// Animation variants with staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each child animation
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
interface card {
  id: number;
  title: string;
  description: string;
  skills: string[];
  url: string;
  backgroundImg: string | StaticRequire | StaticImageData;
}
interface IProp {
  cards: card[];
  handleOpenProject: (val: number) => void;
}

function ProjectCards({ cards, handleOpenProject }: IProp) {
  return (
    <motion.div
      className="grid md:grid-cols-3 mt-20 gap-20 rounded-md "
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="relative flex flex-col mx-5 md:w-[360px] h-[400px] rounded-xl "
          variants={cardVariants}
        >
          <div
            onClick={() => {
              handleOpenProject(card.id);
            }}
            className="cursor-pointer w-10 h-10   absolute top-5 left-3 rounded-full flex justify-center items-center  z-10   my-4 mx-3 md:mx-auto bg-[#1b1738]/50 backdrop-blur-md border border-white"
          >
            <Play />
          </div>
          <div className="absolute inset-0   z-0 rounded-md">
            {" "}
            <Image
              src={card.backgroundImg}
              alt="Background"
              fill
              className="z-9 rounded-md w-full h-full  object-cover transform group-hover:scale-105 transition-transform duration-700"
              priority={index < 3}
            />
          </div>
          <div className="relative flex-1 flex flex-col"></div>{" "}
          {/* Added z-index */}
          <Card className=" w-[320px] z-10   my-4 mx-3 md:mx-auto bg-[#1b1738]/50 backdrop-blur-md border border-white/10">
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription className="text-white">
                {card.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
              <div className="w-full">
                {card.skills.map((skill, index) => (
                  <Badge
                    className="mx-1 my-1 bg-[#1b1738] rounded-lg text-sm font-light"
                    key={index}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              <Link href={card.url} target="_blank">
                <span className="hover:border-b  border-white">
                  Visit Project{" "}
                  <ExternalLink className="inline-block" size={16} />
                </span>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ProjectCards;
