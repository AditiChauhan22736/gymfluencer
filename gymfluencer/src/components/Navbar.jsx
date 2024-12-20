import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      className="navbar bg-black text-gray-500 shadow-md fixed top-10 w-full sm:w-[100%] md:w-[90%] lg:w-[100%] z-50 py-4 px-4 sm:px-8 rounded-none sm:rounded-full"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-white text-lg font-bold uppercase flex items-center space-x-2">
          <img
            src="https://framerusercontent.com/images/btsz5FjA3AvNFXvmH9iWv1xJd8.svg?scale-down-to=512"
            alt="Logo"
            className="w-32 h-auto sm:w-40 md:w-48 lg:w-56 object-contain" // Adjust the widths based on screen size
          />
        </h1>

        {/* Navbar Links for Desktop */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li><a href="#home" className="text-2xl font-semibold text-gray-400 hover:text-red-600">Home</a></li>
          <li><a href="#about" className="text-2xl font-semibold text-gray-400 hover:text-red-600">About</a></li>
          <li><a href="#" className="text-2xl font-semibold text-gray-400 hover:text-red-600">Our Services</a></li>
          <li><a href="#benefits" className="text-2xl font-semibold text-gray-400 hover:text-red-600">Benefits</a></li>
          <li><a href="#blogs" className="text-2xl font-semibold text-gray-400 hover:text-red-600">Blogs</a></li>
          <li><a href="#" className="text-2xl font-semibold text-gray-400 hover:text-red-600">Contact</a></li>
        </ul>

        {/* Join Us Button for larger screens */}
        <button className="bg-red-600 text-xl text-white px-6 py-3 rounded-full hidden md:block hover:bg-orange-600">
          Join Us Now
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 bg-black text-white w-[95%] sm:w-[90%] md:w-[80%] py-4 space-y-4 md:hidden rounded-lg shadow-lg mx-auto">
          <ul className="ml-10">
            <li><a href="#home" className="text-lg hover:text-red-600">Home</a></li>
            <li><a href="#about" className="text-lg hover:text-red-600">About</a></li>
            <li><a href="#" className="text-lg hover:text-red-600">Our Services</a></li>
            <li><a href="#benefits" className="text-lg hover:text-red-600">Benefits</a></li>
            <li><a href="#blogs" className="text-lg hover:text-red-600">Blogs</a></li>
            <li><a href="#" className="text-lg hover:text-red-600">Contact</a></li>
          </ul>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
