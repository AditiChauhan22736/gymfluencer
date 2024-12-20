import { motion } from "framer-motion";

const ServiceSection = () => {
  const services = [
    {
      title: "Track",
      description: "Track your fitness progress with ease.",
      bgImage: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&auto=format&fit=crop&q=60",
    },
    {
      title: "Analyze",
      description: "Analyze your workout data and results.",
      bgImage: "https://images.unsplash.com/photo-1550259979-ed79b48d2a30?w=600&auto=format&fit=crop&q=60",
    },
    {
      title: "Connect",
      description: "Connect with trainers and the fitness community.",
      bgImage: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?w=600&auto=format&fit=crop&q=60",
    },
    {
      title: "Train",
      description: "Get personalized training recommendations.",
      bgImage: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&auto=format&fit=crop&q=60",
    },
    {
      title: "Challenge",
      description: "Challenge yourself with fun fitness challenges.",
      bgImage: "https://images.unsplash.com/photo-1589579234096-25cb6b83e021?w=600&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <section
      className="bg-black text-white py-12 px-6 pt-24"
      data-scroll-section
    >
      <h2
        className="text-4xl md:text-6xl tracking-tight uppercase text-red-700 font-bold text-center mb-8"
        data-scroll
        data-scroll-speed="1"
      >
        Our Services
      </h2>
      <p
        className="text-center text-lg md:text-xl mb-10"
        data-scroll
        data-scroll-speed="2"
      >
        GymFluencer offers 5 essential services to help you <br /> achieve your fitness goals with ease and flexibility.
      </p>

      <div
      id="services"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        data-scroll
        data-scroll-speed="1"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-cover bg-center rounded-lg p-4 shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl"
            style={{
              backgroundImage: `url(${service.bgImage})`,
              height: "250px",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              
            }}
            data-scroll
            data-scroll-speed="1"
          >
            <div className="bg-black bg-opacity-60 h-full flex flex-col justify-center items-center text-center p-4 rounded-lg">
              <motion.h3
                className="text-xl md:text-2xl font-semibold mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.3 }}
              >
                {service.title}
              </motion.h3>
              <motion.p
                className="text-sm md:text-base mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.4 }}
              >
                {service.description}
              </motion.p>
              <motion.button
                className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.5,
                  ease: "easeOut",
                }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
