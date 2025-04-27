"use client";
import { self2 } from "@/assets";
import { collabApps, contacts, FeaturesApps } from "@/constants";
import { BookText } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";
function Hero() {
  const { ref, inView } = useInView();

  return (
    <section
      id="Hero"
      className="min-h-screen relative flex flex-col h-full w-full overflow-hidden
          bg-white dark:bg-gray-900 transition-colors duration-300 "
    >
      <div className="relative left-1/2 w-60 aspect-square border border-white rounded-full -translate-x-1/2 scale-75 md:scale-100 md:mt-23 mt-13 z-10">
        {/* Central image */}
        <div className="absolute inset-0 flex items-center justify-center w-full h-full">
          <Image
            src={self2}
            alt={"myself"}
            className="rounded-full aspect-square w-full h-full object-cover"
            width={300}
            height={3000}
          />
        </div>

        {/* Rotating ring of icons */}
        <div className="absolute inset-0 animate-spin-slow  ">
          {FeaturesApps.map((app, index) => {
            const angle = (index * 360) / collabApps.length;
            const radius = 8;

            // Calculate position
            const x = Math.sin((angle * Math.PI) / 180) * radius;
            const y = Math.cos((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={app.id}
                className="absolute w-[3.2rem] h-[3.2rem] items-center justify-center"
                style={{
                  left: `calc(50% + ${x}rem)`,
                  top: `calc(50% - ${y}rem)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="w-full h-full items-center justify-center">
                  <Image
                    src={app.icon}
                    alt={app.title}
                    className="m-auto"
                    width={app.width}
                    height={app.height}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative  w-full z-10 fade-in-up ">
        <div
          ref={ref}
          className="w-full  flex flex-col items-center justify-center "
        >
          {inView && (
            <h1 className="font-extrabold text-2xl md:text-6xl   mt-9 whitespace-nowrap">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-500 via-white to-purple-500 bg-clip-text text-transparent">
                {" "}
                Shoaib Hajj Hussen
              </span>
            </h1>
          )}
          <p className="text-gray-400 text-xl  md:w-3xl  mt-5 font-semibold  text-center">
            A Frontend Developer with 2+ years of experience, using React and
            Next to level up dev efficiency and cut down the grind
          </p>
          <div className="flex justify-center  items-center mx-auto w-full">
            <ul className="flex gap-5 flex-wrap px-3 md:px-3  mx-auto justify-center items-center w-full mt-5 ">
              {contacts.map((item) => (
                <a
                  href={item.url}
                  key={item.id}
                  target={item.title === "Email" ? undefined : "_blank"}
                  className="flex items-center justify-center w-14  h-14  bg-[#1f2a37] rounded-full transition-colors hover:bg-n-5 "
                >
                  <Image
                    src={item.iconUrl}
                    width={24}
                    height={24}
                    alt={item.title}
                    className="text-white"
                  />
                </a>
              ))}
              <a
                href="/resume.pdf"
                download="Shoaib Hajj.pdf"
                className="flex items-center justify-center w-14  h-14  bg-[#1f2a37] rounded-full transition-colors hover:bg-n-5 "
              >
                <BookText width={20} height={20} />
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-1 ">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-950/30 dark:to-purple-950/30"></div>
        <div className="absolute inset-0 overflow-hidden ">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full animate-circle-1 animate-spin-slow">
            <div className="absolute w-full h-full rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 dark:from-blue-400/5 dark:to-purple-400/5 blur-3xl "></div>
          </div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full animate-circle-2 animate-spin-slow-o">
            <div className="absolute w-full h-full rounded-full bg-gradient-to-br from-purple-400/10 to-blue-400/10 dark:from-purple-400/5 dark:to-blue-400/5 blur-3xl "></div>
          </div>
        </div>
        <div className="absolute inset-0 ">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_45%,rgba(100,150,255,0.1)_50%,transparent_55%)] dark:bg-[linear-gradient(45deg,transparent_45%,rgba(100,150,255,0.05)_50%,transparent_55%)] shine-line-1  "></div>
          <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent_45%,rgba(150,100,255,0.1)_50%,transparent_55%)] dark:bg-[linear-gradient(-45deg,transparent_45%,rgba(150,100,255,0.05)_50%,transparent_55%)] shine-line-2 "></div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(100,150,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(100,150,255,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(100,150,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(100,150,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] "></div>
      </div>
    </section>
  );
}

export default Hero;
