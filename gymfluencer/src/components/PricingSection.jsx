import { motion } from "framer-motion";

const PricingSection = () => {
  const plans = [
    { name: "Basic", price: "$10/month", features: ["Feature 1", "Feature 2"] },
    { name: "Pro", price: "$30/month", features: ["Feature 1", "Feature 2"] },
    { name: "Premium", price: "$50/month", features: ["Feature 1", "Feature 2"] },
  ];

  return (
    <section
      id="pricing"
      className="pricing-section bg-black text-red-700 py-16 px-4 md:px-8"
      data-scroll-section
    >
      <motion.h2
        className="text-4xl md:text-6xl tracking-tighter font-bold text-center mb-12"
        data-scroll
        data-scroll-speed="2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Pricing Plans
      </motion.h2>
      
      <div className="pricing-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className="pricing-card bg-white text-black font-bold rounded-lg p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300"
            data-scroll
            data-scroll-speed="1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.3, ease: "easeInOut" }}
          >
            <motion.h3
              className="text-2xl font-semibold mb-4"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {plan.name}
            </motion.h3>
            <p className="text-xl mb-6">{plan.price}</p>
            <ul className="space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-lg">{feature}</li>
              ))}
            </ul>
            <motion.button
              className="mt-6 bg-red-700 text-black px-6 py-3 rounded-md font-semibold hover:bg-red-800 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              Choose Plan
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;