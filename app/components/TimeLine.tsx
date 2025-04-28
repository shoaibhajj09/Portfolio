import Link from "next/link";
import { GlowEffectCardMode } from "./GlowEffectCardMode";
import { Badge } from "@/components/ui/badge";
// import clsx from "clsx";
// import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useIsMobile } from "../utils/useIsMobile";
function TimeLine() {
  const TimeLineData = [
    {
      title: " Master of Computer Science",
      date: "2024 - Present",
      url: "https://damascusuniversity.edu.sy/ite/",
      direction: "start",
      urlTitle: "Damascus University",
      decription:
        "Master Studying computer science with a focus on web technologies and software engineering",
      skills: [
        "Algorithms",
        "Protocols",
        "Data Structures",
        "Javascript",
        "+3 more",
      ],
    },
    {
      title: " Frontend Developer",
      date: "2023 - 2024",
      url: "https://www.protechgroup.me/",
      direction: "end",
      urlTitle: "Prosoft Company",
      decription:
        " Led development of multiple applications using React and  Next.js.",
      skills: ["Next.js", "React", "Javascript", "MUI", "Tailwind", "+6 more"],
    },
    {
      title: "  Backend Developer",
      date: "2023 - 2024",
      url: "https://www.protechgroup.me/",
      direction: "start",
      urlTitle: "Prosoft Company",
      decription:
        "   Built scalable APIs using Node.js and integrated MongoDB databases.",
      skills: ["Node.js", "MongoDB", "Express", "+5 more"],
    },
    {
      title: "Bachelor of Computer Science",
      date: "2018 - 2023",
      url: "https://damascusuniversity.edu.sy/ite/",
      direction: "end",
      urlTitle: "Damascus University",
      decription:
        "Studied computer science with a focus on web technologies and software engineering",
      skills: [
        "Data Structures",
        "Networks",
        "Web Development",
        "Algorithms",
        "+9 more",
      ],
    },
  ];
  const isMobile = useIsMobile();

  return (
    <ul className="timeline timeline-vertical my-10 ">
      {TimeLineData.map((item, index) => {
        const dynamicClass = clsx({
          "timeline-start": isMobile || item.direction === "start",
          "timeline-end": !isMobile && item.direction === "end",
        });
        return (
          <li className="ml-70 md:ml-0  flex " key={index}>
            <hr className="bg-[#0894FF] mx-5 " />

            <motion.div
              className={dynamicClass}
              initial={{ opacity: 0, x: 0 }}
              whileInView={{
                opacity: 1,
                x: item.direction === "start" ? -10 : 10,
              }}
                    viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <GlowEffectCardMode>
                <div
                  className="timeline-box bg-[#202938] border-none hover:scale-[102%] transition-transform duration-300 w-75 md:w-96"
                  dir={`${item.direction === "start" ? "rtl" : "ltr"}`}
                >
                  <div className="card">
                    <div className="card-body">
                      <h2 className="card-title font-bold text-xl">
                        {item.title}
                      </h2>
                      <div>
                        <Link
                          href={item.url}
                          className="mt-2 md:text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400"
                        >
                          {item.urlTitle}
                        </Link>
                        <p className="text-gray-500 flex">{item.date}</p>
                        <p className="flex text-wrap">{item.decription}</p>
                        <div
                          className={`flex ${
                            item.direction === "start"
                              ? "flex-row-reverse"
                              : "flex-row"
                          }  flex-wrap
                        `}
                        >
                          {item.skills.map((skill, idx) => (
                            <Badge
                              key={idx}
                              className="bg-[#384152] text-gray-300 mx-1 text-md my-2 rounded-2xl"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </GlowEffectCardMode>
            </motion.div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#0894FF"
                className="text-primary h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                  fill="#ffffff"
                />
              </svg>
            </div>

            <hr className="bg-[#0894FF] mx-5" />
          </li>
        );
      })}
    </ul>
  );
}

export default TimeLine;
