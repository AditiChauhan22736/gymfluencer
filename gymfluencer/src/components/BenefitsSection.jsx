import React from "react";
import { motion } from "framer-motion";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "https://framerusercontent.com/images/AjjAxBc5v6SZHOkJzG2bwrSMk.svg", 
      title: "Effortless Workout Logging",
      description: "Monitor your fitness journey and track your workout progress effortlessly.",
    },
    {
      icon: "https://framerusercontent.com/images/pvxqwt0ZG86WIRPPnHxDCgV7rkQ.svg", 
      title: "Personalized Workout Plans",
      description: "Get customized workout and diet plans to meet your fitness goals.",
    },
    {
      icon: "https://framerusercontent.com/images/rxSlFR0RyaC3WCayigHX4RPQZs.svg", 
      title: "Accurate Rep Counting",
      description: "Track your workout reps accurately and monitor progress.",
    },
    {
      icon: "https://framerusercontent.com/images/u8fjSIAgWQzhagulXkIoN7PzI.svg", 
      title: "Calorie Calculation & Personalized Diet Plans",
      description: "Get accurate calorie calculation and personalized diet suggestions.",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-4 md:px-8" data-scroll-section>
      <div className="max-w-6xl mx-auto text-center">
      <h4 className="text-white text-xl flex items-center justify-center gap-1">
        <img 
        className="w-6 h-6" 
        src="https://framerusercontent.com/images/o8k4hpBGZSqpjSgLI7W0kJLJuw4.svg" 
        alt="Icon" 
        />
        Our Benefits
        </h4>
        <h2 className="text-3xl md:text-6xl text-red-700 font-bold mb-2">Discover GymFluencer Benefits</h2>
        <p className="text-lg text-gray-300 mb-12">
        Unlock your full potential with GymFluencer your <br />  personal fitness partner for progress and motivation
          
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {/* Left Side: 2 Benefits in a Square Box */}
          <div className="flex flex-col justify-between space-y-6">
            {benefits.slice(0, 2).map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-black border-2 border-gray-600 rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                style={{ aspectRatio: "1" }} // Make the divs square-shaped
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 text-red-700"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={benefit.icon} alt={benefit.title} className="w-full h-full object-contain" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-red-700 mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Center Image Div */}
          <div className="flex justify-center items-center">
            <motion.img
              src="https://framerusercontent.com/images/1UO4LCYbX6UQvXFCBXLY0dAOHU.png" 
              alt="Image description"
              className="w-full h-auto max-w-md rounded-3xl object-contain shadow-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Right Side: 2 Benefits in a Square Box */}
          <div className="flex flex-col justify-between space-y-6">
            {benefits.slice(2).map((benefit, index) => (
              <motion.div
                key={index + 2} 
                className="bg-black border-2 border-gray-600  rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 2) * 0.2 }}
                style={{ aspectRatio: "1" }} 
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 text-red-700"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={benefit.icon} alt={benefit.title} className="w-full h-full object-contain" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-red-700 mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
