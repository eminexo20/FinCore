"use client";
import { motion } from "motion/react";

export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Orb 1 */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-purple-500/10 dark:bg-purple-600/10 blur-[100px] mix-blend-screen"
      />
      
      {/* Orb 2 */}
      <motion.div
        animate={{
          x: [0, -150, 100, 0],
          y: [0, 150, -100, 0],
          scale: [1, 0.9, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-blue-500/10 dark:bg-blue-600/10 blur-[100px] mix-blend-screen"
      />

      {/* Orb 3 */}
      <motion.div
        animate={{
          x: [0, 50, -100, 0],
          y: [0, 100, -50, 0],
          scale: [1, 1.5, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[30vw] h-[30vw] rounded-full bg-rose-500/10 dark:bg-rose-600/10 blur-[100px] mix-blend-screen"
      />
    </div>
  );
}
