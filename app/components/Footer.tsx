"use client";
import { contacts } from "@/constants";
import { BookText } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useIsMobile } from "../utils/useIsMobile";

function Footer() {
  const isMobile = useIsMobile();
  return (
    <section className=" py-10 lg:py-16 xl:py-10 bg-[#111828] overflow-visible">
      <div className="container max-w-7xl flex flex-row  md:flex-col w-full  h-full justify-center items-center">
        <div className="flex flex-col md:flex-row  justify-between items-center w-full">
          {!isMobile && (
            <p className="body-1 text-gray-600 text-nowrap  dark:text-gray-400">
              © 2025 Shoaib Hajj. All rights reserved.
            </p>
          )}
          <ul className="flex gap-5 flex-row  flex-wrap mx-auto justify-center md:my-0  md:justify-end items-center w-full ">
            {contacts.map((item) => (
              <a
                href={item.url}
                key={item.id}
                target="_blank"
                className="flex items-center justify-center w-14  h-14  bg-[#1f2a37] rounded-full transition-colors hover:bg-n-5 "
              >
                <Image
                  src={item.iconUrl}
                  width={20}
                  height={20}
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
          {isMobile && (
            <p className="body-1 text-gray-600 text-nowrap my-10  dark:text-gray-400">
              © 2025 Shoaib Hajj. All rights reserved.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Footer;
