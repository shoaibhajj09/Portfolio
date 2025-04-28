"use client";
import { Chrome, CodeXml, Folder } from "lucide-react";
import {
  Dock,
  DockIcon,
  DockItem,
  DockLabel,
} from "@/components/motion-primitives/dock";
import { useState } from "react";
import CustomBrowser from "./CustomBrowser ";
import { SkillsApps } from "@/constants";
import Image from "next/image";
import { brainwave, minecraft1, spacePortfolio, speed2, video } from "@/assets";

export function AppleStyleDock() {
  const [isOpenBrowser, setIsOpenBrowse] = useState(false);
  const [isOpenResume, setIsOpenResume] = useState(false);
  const [isOpenSkills, setIsOpenSkills] = useState(false);

  const defaultTabs = [
    {
      name: "Type Test Speed",
      url: "https://typing-speed-test-shoaib-hajj.vercel.app/",
      favicon: speed2.src,
      showingUrlAndTabs: true,
    },
    {
      name: "Talky video chat",
      url: "https://video-chat-webrtc-socket.netlify.app/",
      favicon: video.src,
    },
    {
      name: "minecraft by shoaib hajj",
      url: "https://minecraft-sandy-three.vercel.app/",
      favicon: minecraft1.src,
    },
    {
      showingUrlAndTabs: true,
      name: "Brainwave",
      url: "https://shoaib-hajj-brainwave-one.vercel.app/",
      favicon: brainwave.src,
    },
    {
      showingUrlAndTabs: true,
      name: "Space Portfolio",
      url: "https://shoaib-hajj-portfolio.vercel.app/",
      favicon: spacePortfolio.src,
    },
  ];

  const resumeTab = [
    {
      name: "Resume",
        url: `${process.env.NEXT_PUBLIC_RESUME}/resume.pdf`,
      favicon: "https://llama-gpt-web.vercel.app/favicon.ico",
      showingUrlAndTabs: false,
    },
  ];
  const data = [
    {
      title: "Projects",
      icon: (
        <Chrome
          width={30}
          height={30}
          className="text-cyan-500 w-full h-full"
          onClick={() => setIsOpenBrowse(true)}
        />
      ),
      href: "#",
    },
    {
      title: "Resume",
      icon: (
        <Folder
          width={30}
          height={30}
          className="text-cyan-400  w-full h-full"
          fill="oklch(71.5% 0.143 215.221)"
          onClick={() => setIsOpenResume(true)}
        />
      ),
      href: "#",
    },
    {
      title: "Skills",
      icon: (
        <CodeXml
          width={30}
          height={30}
          className="text-green-400  w-full h-full"
          onClick={() => setIsOpenSkills(true)}
        />
      ),
      href: "#",
    },
  ];

  return (
    <>
      {/* Dock UI */}
      <div className="fixed md:bottom-1 bottom-2 left-1/2 max-w-full -translate-x-1/2 z-[50]">
        <Dock className="items-end pb-3 bg-none">
          {data.map((item, idx) => (
            <DockItem
              key={idx}
              className="aspect-square rounded-xl bg-gray-200 dark:bg-gray-800 cursor-pointer text-[#4380ed]"
            >
              <DockLabel className="border-none bg-neutral-900/80 backdrop-blur-lg">
                {item.title}
              </DockLabel>
              <DockIcon className="w-full h-full">{item.icon}</DockIcon>
            </DockItem>
          ))}
        </Dock>
      </div>

      {/* Browser Modal */}
      {isOpenBrowser && (
        <CustomBrowser
          onClose={() => {
            setIsOpenBrowse(false);
          }}
          tabs={defaultTabs}
        />
      )}
      {isOpenResume && (
        <CustomBrowser
          onClose={() => {
            setIsOpenResume(false);
          }}
          tabs={resumeTab}
        />
      )}
      {isOpenSkills && (
        <CustomBrowser
          onClose={() => {
            setIsOpenSkills(false);
          }}
        >
          <div className="h-150">
            <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  p-5">
              {SkillsApps.map((app) => {
                return (
                  <div
                    key={app.id}
                    className="group bg-white dark:bg-gray-700 rounded-lg shadow-md md:p-4 p-2 flex items-center space-x-4 hover:shadow-2xl hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 dark:hover:from-gray-600 dark:hover:to-gray-700 transform transition-all duration-300 cursor-pointer relative overflow-hidden"
                  >
                    <Image
                      src={app.icon}
                      alt={app.title}
                      className="m-auto  animate-spin-slow hover:animate-spin"
                      width={app.width}
                      height={app.height}
                    />

                    <div className="mx-5 flex flex-col flex-1">
                      <h3 className="text-2xl font-bold">{app.title}</h3>
                      <p>Expert</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </CustomBrowser>
      )}
    </>
  );
}
