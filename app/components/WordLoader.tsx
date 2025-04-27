// components/WordLoader.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  "Hello",
  "Hola",
  "Bonjour",
  "Ciao",
  "مرحبا",
  "Hallo",
  "こんにちは",
  "안녕하세요",
  "你好",
];

type WordLoaderProps = {
  wordDuration?: number;
  className?: string;
  //   onComplete: () => void;
  //   isLoading: boolean;
};

export const WordLoader = ({
  wordDuration = 1000,
  className = "",
}: //   onComplete,
//   isLoading,
WordLoaderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1;
        const newProgress = ((nextIndex + 1) / greetings.length) * 100;
        setProgress(newProgress);

        if (nextIndex >= greetings.length) {
          clearInterval(interval);
          //** On Complete */
          //   onComplete?.();
          setIsLoading(false);
          return prev;
        }
        return nextIndex;
      });
    }, wordDuration);

    return () => clearInterval(interval);
  }, [wordDuration]);

  return (
    <main className=" z-100 pointer-events-none">
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900">
          <div
            className={`min-w-screen flex flex-col items-center justify-center ${className}`}
          >
            <div className="relative h-16 w-full text-center mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                    {greetings[currentIndex]}
                  </h1>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Fixed Progress Bar - using % */}
            <div className=" relative min-w-screen  h-1.5  rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: wordDuration / 1000, ease: "linear" }}
                className="absolute h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl"
                style={{
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: `${progress}%`,
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </main>
  );
};
