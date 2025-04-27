"use client";

import { GlowEffect } from "@/components/motion-primitives/glow-effect";
import { ReactNode, useState } from "react";
import { motion } from "motion/react";
export function GlowEffectCardMode({ children }: { children?: ReactNode }) {
  const [isVisible] = useState(true);



  return (
    <div className="relative w-fit">
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
      >
        <GlowEffect
          colors={["#181938", "#111828", "#0894FF"]}
          mode="rotate"
          blur="medium"
          duration={4}
        />
      </motion.div>
      <div className="relative   ">{children}</div>
    </div>
  );
}
