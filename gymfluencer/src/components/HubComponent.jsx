import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HubComponent = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Change the image every 3 seconds
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 3); // Cycle through 3 images
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Clean up the interval when the component unmounts
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-800" data-scroll-section>
      {/* Left Section: Content with Background Image */}
      <div 
        className="w-full lg:w-1/2 flex flex-col items-center justify-center text-white px-6 py-6 lg:px-10 lg:py-6 h-full bg-cover bg-center" 
        style={{ backgroundImage: "url('https://framerusercontent.com/images/2AmDHmcEtUuynT8pV9nsBLAMYeU.png?scale-down-to=2048')" }}
      >
        <h1 className="text-3xl lg:text-6xl tracking-tighter font-bold uppercase text-red-700 text-left">Your <br />Personalized Fitness Hub</h1>
        <p className="text-left mt-8 text-sm lg:text-base px-4 sm:px-8">
          Personalized workout routines tailored to your goals and preferences.
        </p>
        <p className="text-left mt-6 text-sm lg:text-base px-4 sm:px-8">
          Get expert guidance with virtual coaching sessions, available anytime, anywhere.
        </p>
        <p className="text-left mt-6 text-sm lg:text-base px-4 sm:px-8">
          Track your fitness journey with detailed analytics, goal setting, and achievements.
        </p>
      </div>

      {/* Right Section: Image Scroll with Framer Motion */}
      <div className="w-full lg:w-1/2 overflow-hidden relative bg-black h-full">
        <div className="w-full h-full relative">
          {/* Dynamically render the images based on currentImage */}
          {[ // Array of images to cycle through
            "https://framerusercontent.com/images/WaP2lGu3X4zc8d5kCwZyhH3lDI.png",
            "https://framerusercontent.com/images/y3OEsrPpF9ZlVWFn8txqhafXYY.png",
            "https://framerusercontent.com/images/yuM4HjReun2ffEbHgraaGxf4Gl0.png"
          ].map((src, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 w-full h-full flex justify-center items-center"
              initial={{ opacity: 0 }} // Start with no opacity
              animate={{ opacity: currentImage === index ? 1 : 0 }} // Show current image, hide others
              transition={{ duration: 1 }}
            >
              <div className="w-full h-5/5 flex justify-center items-center overflow-hidden"> {/* Wrap image in a div */}
                <img 
                  src={src} 
                  alt={`Image ${index + 1}`} 
                  className="w-full h-full object-cover" 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HubComponent;
