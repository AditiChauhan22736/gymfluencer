import React from "react";
import { motion } from "framer-motion";

const StatsSection = () => {
  const stats = [
    { number: "463k+", label: "Workouts logged and progress tracked every month" },
    { number: "163k+", label: "Fitness enthusiasts connected through our platform" },
    { number: "13+", label: "Countries where GymFluencer is making an impact" },
  ];

  return (
    <section className="bg-black text-red-700 py-12 md:py-20 px-4 md:px-8" data-scroll-section>
      <div className="max-w-6xl tracking-tight bg-black mx-auto text-center">
        <h2 className="text-4xl tracking-tight uppercase text-red-700 font-bold mb-10">Our Impact</h2>
        <div className="flex flex-wrap justify-center space-y-8 md:space-y-0 md:space-x-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center flex-1 min-w-[250px] max-w-xs"
            >
              <h3 className="text-4xl md:text-6xl font-bold text-white">{stat.number}</h3>
              <p className="text-base md:text-lg text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 