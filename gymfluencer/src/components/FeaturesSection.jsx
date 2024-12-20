import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    {
      title: "State-of-the-Art Equipment",
      description: "Experience the latest and best in fitness technology.",
      icon: "🏋️",
    },
    {
      title: "Professional Trainers",
      description: "Get guidance from certified and experienced trainers.",
      icon: "💪",
    },
    {
      title: "Community Events",
      description: "Join exciting events to stay motivated and connected.",
      icon: "🎉",
    },
  ];

  return (
    <section
      id="features"
      className="features-section bg-black py-12 px-4 md:px-8"
      data-scroll-section
    >
      <h2 className="text-2xl md:text-4xl text-red-700 uppercase font-bold text-center mb-8">Features</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            data-scroll
            data-scroll-speed="1"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
