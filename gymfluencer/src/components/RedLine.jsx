import { motion } from "framer-motion";
import React from "react";

function RedLine() {
  return (
    <div
      data-scroll-section
      className="w-full h-12 bg-red-600 text-white flex flex-col justify-center"
    >
      {/* Forward Motion */}
      <div className="flex  whitespace-nowrap items-center">
        <motion.div
          initial={{ x: 0}}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, // Duration for smooth motion
          }}
          className="flex space-x-4"
          style={{ width: "fit-content" }} // Ensures the content fits and doesn't break
        >
          {/* First set of text */}
          <h1 className="text-[1vw] font-semibold uppercase tracking-wider text-white">
            / Progress tracking fitness plans /
          </h1>
          <h1 className="text-[1vw] font-semibold uppercase tracking-wider text-white">
            workout Routines /
          </h1>
          <h1 className="text-[1vw] font-semibold uppercase tracking-wider text-white">
            Progress tracking fitness plans /
          </h1>
          <h1 className="text-[1vw] font-semibold uppercase tracking-wider text-white">
            workout Routines /
          </h1>
          <h1 className="text-[1vw] font-semibold uppercase tracking-wider text-white">
            Progress tracking fitness plans /
          </h1>
          <h1 className="text-[1vw] font-semibold uppercase tracking-wider text-white">
            workout Routines /
          </h1>
          <h1 className="text-[1vw] font-semibold uppercase tracking-wider text-white">
            Progress tracking fitness plans /
          </h1>
          <h1 className="text-[1vw] font-semibold uppercase tracking-wider text-white">
            workout Routines /
          </h1>

          {/* Duplicate text */}
          <h1 className="text-[1vw] font-semibold uppercase tracking-wider text-white">
            Progress tracking fitness plans /
          </h1>
          <h1 className="text-[1vw] font-semibold uppercase tracking-wider text-white">
            workout Routines /
          </h1>
          <h1 className="text-[1vw] font-semibold uppercase tracking-wider text-white">
            Progress tracking fitness plans /
          </h1>
          <h1 className="text-[1vw] font-semibold uppercase tracking-wider text-white">
            workout Routines /
          </h1>
          <h1 className="text-[1vw] font-semibold uppercase tracking-wider text-white">
            Progress   tracking   fitness  plans /
          </h1>
          <h1 className="text-[1vw] font-semibold uppercase tracking-wider text-white">
            workout   Routines /
          </h1>
          <h1 className="text-[1vw] font-semibold uppercase tracking-wider text-white">
            Progress   tracking   fitness plans /
          </h1>
          <h1 className="text-[1vw] font-semibold uppercase tracking-wider text-white">
            workout   Routines /
          </h1>
          <h1 className="text-[1vw] font-semibold uppercase tracking-wider text-white">
            Progress tracking fitness plans /
          </h1>
          <h1 className="text-[1vw] font-semibold uppercase tracking-wider text-white">
            workout Routines /
          </h1>
          <h1 className="text-[1vw] font-semibold uppercase tracking-wider text-white">
            Progress tracking fitness plans /
          </h1>
          <h1 className="text-[1vw] font-semibold uppercase tracking-wider text-white">
            workout Routines /
          </h1>
          <h1 className="text-[1vw] font-semibold uppercase tracking-wider text-white">
            Progress   tracking   fitness  plans /
          </h1>
          <h1 className="text-[1vw] font-semibold uppercase tracking-wider text-white">
            workout   Routines /
          </h1>
          <h1 className="text-[1vw] font-semibold uppercase tracking-wider text-white">
            Progress   tracking   fitness plans /
          </h1>
          <h1 className="text-[1vw] font-semibold uppercase tracking-wider text-white">
            workout   Routines /
          </h1>
        </motion.div>
      </div>
    </div>
  );
}

export default RedLine;

