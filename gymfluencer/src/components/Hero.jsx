import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="hero bg-cover bg-center font-Orbitron_Regular text-red-700 min-h-screen flex items-center justify-center relative pt-24 w-full" // Added pt-24 for sufficient padding on small screens
      style={{ backgroundImage: 'url("https://framerusercontent.com/images/SGmk37b8TDX43mcsVuBwFTVon0Y.jpg?scale-down-to=2048")' }} // Replace with your image URL
      data-scroll-section
    >
      {/* Dark Overlay to improve text visibility */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <motion.div
        className="text-center px-4 sm:px-8 md:px-16 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Animated <h1> with mobile responsiveness */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-8xl tracking-tighter font-bold mb-4 text-red-700"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Track Your Fitness Journey
        </motion.h1>

        {/* Animated <p> for introduction */}
        <motion.p
          className="text-gray-100 tracking-tight text-base sm:text-lg md:text-xl mb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Discover the ultimate fitness companion with GymFluencer.
        </motion.p>

        {/* Animated <p> for the next line */}
        <motion.p
          className="text-gray-100 tracking-tight text-base sm:text-lg md:text-xl mb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          Effortlessly log your workouts, count reps, and track calories burned.
        </motion.p>

        {/* Animated <p> for the last line */}
        <motion.p
          className="text-gray-100 tracking-tight text-base sm:text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        >
          Stay motivated and achieve your goals with ease.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
