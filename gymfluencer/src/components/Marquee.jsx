import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll-section
      className="w-full font-'Orbitron' h-40 bg-black text-white flex flex-col justify-center"
    >
      {/* Forward Motion */}
      <div className="flex overflow-hidden whitespace-nowrap items-center">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, // Increased duration for slower motion
          }}
          className="flex space-x-12"
        >
          <h1 className="text-[6vw] sm:text-[4vw] md:text-[3vw] lg:text-[6vw] font-'Orbitron' font-bold uppercase text-gray-300">
            Progress /
          </h1>
          <h1 className="text-[6vw] sm:text-[4vw] md:text-[3vw] lg:text-[6vw] font-bold uppercase text-gray-300">
            Fitness /
          </h1>
          <h1 className="text-[6vw] sm:text-[4vw] md:text-[3vw] lg:text-[6vw] font-bold uppercase text-gray-300">
            Transformation /
          </h1>
          <h1 className="text-[6vw] sm:text-[4vw] md:text-[3vw] lg:text-[6vw] font-bold uppercase text-gray-300">
            Motivation /
          </h1>
          <h1 className="text-[6vw] sm:text-[4vw] md:text-[3vw] lg:text-[6vw] font-bold uppercase text-gray-300">
            Transformation /
          </h1>
          <h1 className="text-[6vw] sm:text-[4vw] md:text-[3vw] lg:text-[6vw] font-bold uppercase text-gray-300">
            Fitness /
          </h1>
          <h1 className="text-[6vw] sm:text-[4vw] md:text-[3vw] lg:text-[6vw] font-bold uppercase text-gray-300">
            Progress /
          </h1>
          <h1 className="text-[6vw] sm:text-[4vw] md:text-[3vw] lg:text-[6vw] font-bold uppercase text-gray-300">
            Motivation /
          </h1>
          <h1 className="text-[6vw] sm:text-[4vw] md:text-[3vw] lg:text-[6vw] font-bold uppercase text-gray-300">
            Transformation /
          </h1>
        </motion.div>
      </div>

      {/* Reverse Motion */}
      <div className="flex overflow-hidden whitespace-nowrap items-center mt-4">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20, // Increased duration for slower motion
          }}
          className="flex space-x-12"
        >
          <h1 className="text-[6vw] sm:text-[4vw] md:text-[3vw] lg:text-[6vw] font-bold uppercase text-red-700">
            Motivation /
          </h1>
          <h1 className="text-[6vw] sm:text-[4vw] md:text-[3vw] lg:text-[6vw] font-bold uppercase text-red-700">
            Transformation /
          </h1>
          <h1 className="text-[6vw] sm:text-[4vw] md:text-[3vw] lg:text-[6vw] font-bold uppercase text-red-700">
            Fitness /
          </h1>
          <h1 className="text-[6vw] sm:text-[4vw] md:text-[3vw] lg:text-[6vw] font-bold uppercase text-red-700">
            Progress /
          </h1>
          <h1 className="text-[6vw] sm:text-[4vw] md:text-[3vw] lg:text-[6vw] font-bold uppercase text-red-700">
            Fitness /
          </h1>
          <h1 className="text-[6vw] sm:text-[4vw] md:text-[3vw] lg:text-[6vw] font-bold uppercase text-red-700">
            Transformation /
          </h1>
          <h1 className="text-[6vw] sm:text-[4vw] md:text-[3vw] lg:text-[6vw] font-bold uppercase text-red-700">
            Motivation /
          </h1>
          <h1 className="text-[6vw] sm:text-[4vw] md:text-[3vw] lg:text-[6vw] font-bold uppercase text-red-700">
            Progress
          </h1>
        </motion.div>
      </div>
    </div>
  );
}

export default Marquee;
