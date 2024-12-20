import React from 'react';
import { motion } from 'framer-motion';

const gyms = [
  { name: 'Physc Gym Nerul 24/7', location: 'Baghpat - Uttar Pradesh', img: 'https://framerusercontent.com/images/LsEJrnNgbBAk08pLHwNcDRF4oLo.jpeg?scale-down-to=512' },
  { name: 'Iron Fitness', location: 'Baghpat - Uttar Pradesh', img: 'https://framerusercontent.com/images/64IsefqJykeOf5kk2ETV1gkGQ.jpg?scale-down-to=512' },
  { name: 'Hydropower Fitness & Gym', location: 'Baghpat - Uttar Pradesh', img: 'https://framerusercontent.com/images/LMf0H8b1MNKO0RwpkoYqfCtUaOg.jpeg?scale-down-to=512' },
  { name: 'Yuva Fitness', location: 'Baghpat - Uttar Pradesh', img: 'https://framerusercontent.com/images/LCCMMGLq0ltGKumFa9u0MHb5o.jpg?scale-down-to=512' },
  { name: 'Ozone The Gym', location: 'Baghpat - Uttar Pradesh', img: 'https://framerusercontent.com/images/PGAbUTA6vfEEZzEnxTdQDESoOU.png?scale-down-to=512' },
  { name: 'The Square Gym', location: 'Baghpat - Uttar Pradesh', img: 'https://framerusercontent.com/images/DOzktr1SJvtZ2JWlN1robGanA.jpg?scale-down-to=512' },
  { name: 'Edge Fitness Seawoods', location: 'Baghpat - Uttar Pradesh', img: 'https://framerusercontent.com/images/HJRDzDi84uefoHHZYsokhFiak.png?scale-down-to=512' },
  { name: 'Arnolds Total Fitness', location: 'Baghpat - Uttar Pradesh', img: 'https://framerusercontent.com/images/PGAbUTA6vfEEZzEnxTdQDESoOU.png?scale-down-to=512' },
];

function Location() {
  return (
    <div className="flex flex-col bg-black gap-8 h-auto py-12 pt-24" data-scroll-section> {/* Added pt-24 for spacing */}
      {/* Heading */}
      <div className="flex flex-col justify-center items-center bg-black py-6">
        <h2 className="text-4xl sm:text-6xl ml-4 text-red-700 font-bold">Explore Our Gym Locations</h2>
        <p className="text-center text-sm sm:text-lg text-white mt-4">
          Easily discover gyms near your location to kickstart <br />
          your fitness journey today!
        </p>
      </div>

      {/* Main Content Container */}
      <div className="flex flex-col sm:flex-row gap-6 bg-black px-4">
        {/* Left Div - Gym List */}
        <motion.div
          className="flex flex-col w-full sm:w-1/2 bg-black px-2 sm:px-4 py-4 rounded-lg sm:h-[700px] h-[400px] flex-grow"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 25 }}
          data-scroll
        >
          <div className="overflow-y-scroll sm:h-full h-full">
            {gyms.map((gym, index) => (
              <motion.div
                key={index}
                className="flex items-center pb-4"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 mr-4">
                  <img
                    src={gym.img}
                    alt={gym.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col justify-center text-white">
                  <h3 className="text-lg sm:text-2xl font-semibold mb-1">{gym.name}</h3>
                  <p className="text-xs sm:text-sm">{gym.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Div - Large Gym Image */}
        <div className="w-full sm:w-1/2 h-[400px] sm:h-[700px] flex justify-center items-center bg-black flex-grow" data-scroll>
          <motion.div
            className="w-full h-full object-cover rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://images.unsplash.com/photo-1521661488642-d86e85a90de2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGxvY2F0aW9uJTIwbWFwfGVufDB8fDB8fHww"
              alt="Gym"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Location;
