import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      className="bg-black text-white py-8 px-4 sm:px-8 w-full relative mt-auto"
      data-scroll-section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex flex-col items-center px-4 sm:px-8">
        {/* Logo and Tagline */}
        <h1 className="text-white text-lg mb-6 font-bold uppercase flex items-center space-x-2">
          <img
            src="https://framerusercontent.com/images/btsz5FjA3AvNFXvmH9iWv1xJd8.svg?scale-down-to=512"
            alt="Logo"
            className="w-32 h-auto sm:w-40 md:w-48 lg:w-56 object-contain"
          />
        </h1>
        <h1 className="text-gray-400 text-xl sm:text-2xl text-center mb-6 font-bold uppercase">
          Where Fitness Meets Social <br className="hidden sm:block" /> Connection!
        </h1>
        <div className="text-center tracking-tighter text-gray-400 space-y-2 mb-6">
        <p className="text-lg sm:text-xl mb-12 font-semibold flex justify-center">
  <button
    onClick={() => window.location.href = "mailto:hello@gym.birlaventures.com"}
    className="bg-red-600 flex items-center justify-center text-white px-4 sm:px-6 py-3 rounded-full hover:bg-orange-600 transition w-auto max-w-full"
  >
    <img
      src="https://framerusercontent.com/images/dzy2fU5uUTG4Qc1EQfhDcDYbU4.svg"
      alt="email icon"
      className="w-6 h-6 mr-1"
    />
    <span className="text-sm sm:text-base lg:text-xl truncate">
      Email: hello@gym.birlaventures.com
    </span>
  </button>
</p>

          <div className="flex flex-wrap justify-center space-x-6 sm:space-x-8 font-semibold text-lg sm:text-2xl mb-4">
            <a href="#home" className="hover:text-red-600 transition">Home</a>
            <a href="#workout" className="hover:text-red-600 transition">Workout Plan</a>
            <a href="#diet" className="hover:text-red-600 transition">Diet Plan</a>
            <a href="#faqs" className="hover:text-red-600 transition">FAQ’s</a>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="w-full border-t border-gray-500 my-6 sm:my-10" />

      {/* Footer Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 space-y-4 sm:space-y-0 pb-6">
        <p className="text-center font-semibold text-lg sm:text-xl">
          © 2024 Gymfluencer. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-400 bg-opacity-40 rounded-xl p-2 hover:bg-opacity-70 transition">
            <FaFacebookF className="text-2xl sm:text-3xl hover:text-red-600 transition-colors" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-400 bg-opacity-40 rounded-xl p-2 hover:bg-opacity-70 transition">
            <FaInstagram className="text-2xl sm:text-3xl hover:text-red-600 transition-colors" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-400 bg-opacity-40 rounded-xl p-2 hover:bg-opacity-70 transition">
            <FaTwitter className="text-2xl sm:text-3xl hover:text-red-600 transition-colors" />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
