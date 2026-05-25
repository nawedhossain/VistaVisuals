import React from "react";
import { motion } from "motion/react";

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative">
      <div className="relative flex items-center justify-center">
        {/* Glowing background ring */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "linear",
          }}
          className="w-16 h-16 rounded-full border-t-2 border-r-2 border-blue-500 border-b-0 border-l-0"
        />
        <div className="absolute w-12 h-12 rounded-full border border-white/5" />
        <div className="absolute w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_15px_#3b82f6]" />
      </div>
      
      {/* Dynamic text fade */}
      <motion.p
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="mt-6 text-sm letter tracking-widest text-gray-400 font-display uppercase"
      >
        Loading experience
      </motion.p>
    </div>
  );
}
