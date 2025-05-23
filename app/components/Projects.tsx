"use client";
import { useInView } from "react-intersection-observer";
import ProjectCards from "./ProjectCards";
import CustomBrowser from "./CustomBrowser ";
import { useState } from "react";
import {
  AiGenerator,
  aiLogo,
  aiTrip,
  brainwave,
  brainwaveImage,
  minecraft,
  minecraft1,
  spacePortfolio,
  speed2,
  talky,
  typeTest,
  video,
} from "@/assets";

const Projects = () => {
  const { ref, inView } = useInView();
  const [isOpenBrowser, setIsOpenBrowser] = useState(false);
  const [activeTab, setActiveTab] = useState<
    (
      | {
          id: number;
          name: string;
          url: string;
          favicon: string;
          showingUrlAndTabs: boolean;
        }
      | {
          id: number;
          name: string;
          url: string;
          favicon: string;
          showingUrlAndTabs?: undefined;
        }
    )[]
  >();
  const cards = [
    {
      id: 1,
      title: "AI Logo Maker",
      description:
        "Developed an AI-powered logo generator that transforms text prompts into professional logos using Hugging Face and Gemini AI.🚀",
      skills: [
        "Next js",
        "TypeScript",
        " Gemini AI ",
        "Firebase ",
        "Shadcn UI",
        "Clerk",
      ],
      url: "https://ai-logo-generator-ten.vercel.app/",
      backgroundImg: aiLogo,
    },
    {
      id: 2,
      title: "Type Test Speed",
      description:
        "Supports multiple languages, especially English 🇬🇧 and Arabic 🇸🇦 You can test how fast you type in different languages 🔥⌨️",
      skills: ["React", "TypeScript", "RTL", "state management"],
      url: "https://typing-speed-test-shoaib-hajj.vercel.app/",
      backgroundImg: typeTest,
    },

    {
      id: 3,
      title: "Talky Video Chat Application",
      description:
        "Built a real-time P2P video chat app using React, WebRTC, and Socket.io, with a Node.js backend.",
      skills: ["React", "WebRTC", "MUI", "Node.js", "Simple Peer"],
      url: "https://video-chat-webrtc-socket.netlify.app/",
      backgroundImg: talky,
    },
    {
      id: 4,
      title: "AI Trip Planner",
      description:
        "Developed an AI-powered  trip planner that will generate a customized itinerary based on your preferences using Gemini AI and suggest hotels form amadous.",
      skills: ["React", "Typescript", "Clerk", "Firebase", "Shadcn UI"],
      url: "https://ai-trip-planner-shoaib-hajj.vercel.app/",
      backgroundImg: aiTrip,
    },
    {
      id: 5,
      title: "3D Minecraft Clone",
      description:
        "Built a browser-based 3D world using React and Three.js with block placement/deletion, WASD navigation, and local storage persistence.",
      skills: ["React", "Three.js", "Fiber", "Cannon", "drei"],
      url: "https://minecraft-sandy-three.vercel.app/",
      backgroundImg: minecraft,
    },
    {
      id: 6,
      title: "Brainwave",
      description:
        "Brainwave - Modern UI/UX website, developed using React.js and Tailwind CSS, exemplifies modern UI/UX principles. Its sleek design, seamless animations, ",
      skills: ["React", "Tailwind", "lucide", "Framer Motion", "+3 more "],
      url: "https://shoaib-hajj-brainwave-one.vercel.app/",
      backgroundImg: brainwaveImage,
    },
    {
      id: 7,
      title: "Space Portfolio",
      description:
        "Space Portfolio - Modern UI/UX website, developed using React.js and Tailwind CSS, exemplifies modern website with Framer Motion ",
      skills: ["React", "Three.js", "Next", "Vite", "Tailwind", "+2 more"],
      url: "https://shoaib-hajj-portfolio.vercel.app/",
      backgroundImg: spacePortfolio,
    },
  ];
  const defaultTabs = [
    {
      id: 1,

      name: "AI Logo Maker",
      url: "https://ai-logo-generator-ten.vercel.app/",
      favicon: AiGenerator,
      showingUrlAndTabs: true,
    },
    {
      id: 2,

      name: "Type Test Speed",
      url: "https://typing-speed-test-shoaib-hajj.vercel.app/",
      favicon: speed2.src,
      showingUrlAndTabs: true,
    },
    {
      id: 3,
      showingUrlAndTabs: true,
      name: "Talky video chat",
      url: "https://video-chat-webrtc-socket.netlify.app/",
      favicon: video.src,
    },
    {
      id: 4,

      name: "AI Trip Planner",
      url: "https://ai-trip-planner-shoaib-hajj.vercel.app/",
      favicon: AiGenerator,
      showingUrlAndTabs: true,
    },
    {
      id: 5,
      showingUrlAndTabs: true,
      name: "minecraft by shoaib hajj",
      url: "https://minecraft-sandy-three.vercel.app/",
      favicon: minecraft1.src,
    },
    {
      id: 6,
      showingUrlAndTabs: true,
      name: "Brainwave",
      url: "https://shoaib-hajj-brainwave-one.vercel.app/",
      favicon: brainwave.src,
    },
    {
      id: 7,
      showingUrlAndTabs: true,
      name: "Space Portfolio",
      url: "https://shoaib-hajj-portfolio.vercel.app/",
      favicon: spacePortfolio.src,
    },
  ];

  const handleOpenProject = (id: number) => {
    setIsOpenBrowser(true);

    setActiveTab(defaultTabs.filter((tab) => tab.id === id));

    console.log("id", id);
  };

  return (
    <section
      id="projects"
      className="min-h-screen py-10 lg:py-16 xl:py-10 bg-[#1b1738]"
    >
      <div className="container max-w-7xl flex flex-col w-full  h-full justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h3 className="h3  font-bold p-3">Featured Projects</h3>
          <p className="body-1 text-gray-600 text-center  md:text-start  dark:text-gray-400">
            Explore some of my recent work and personal projects
          </p>
        </div>
        <div ref={ref}>
          {inView && (
            <ProjectCards cards={cards} handleOpenProject={handleOpenProject} />
          )}
        </div>
      </div>
      {isOpenBrowser && (
        <CustomBrowser
          onClose={() => {
            setIsOpenBrowser(false);
          }}
          tabs={activeTab}
        />
      )}
    </section>
  );
};

export default Projects;
