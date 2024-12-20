import { motion } from "framer-motion";
import { useState } from "react";

const FAQSection = () => {
  const faqs = [
    {
      question: "What are the gym opening hours?",
      answer: "We are open Monday to Sunday from 6:00 AM to 10:00 PM.",
    },
    {
      question: "Do you offer personal training?",
      answer: "Yes, we offer personalized training sessions tailored to your goals.",
    },
    {
      question: "Are there discounts for students?",
      answer: "Yes, we provide discounts for students with valid ID cards.",
    },
    {
      question: "What fitness equipment do you have?",
      answer: "We have a wide range of fitness equipment including cardio machines, free weights, and resistance machines.",
    },
    {
      question: "Can I cancel or reschedule my session?",
      answer: "Yes, you can cancel or reschedule your session with 24-hour notice.",
    },
    {
      question: "Do you have a nutritionist on-site?",
      answer: "Yes, we have a certified nutritionist available to help with meal plans and dietary advice.",
    },
    {
      question: "Is there parking available at the gym?",
      answer: "Yes, we offer free parking for all gym members.",
    },
    {
      question: "How do I sign up for a membership?",
      answer: "You can sign up for a membership online or at the front desk of the gym.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="faq-section bg-red-800 py-12 px-4 md:px-8 overflow-hidden "
      data-scroll-section
    >
      <h2 className="text-2xl md:text-6xl tracking-tighter text-white font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="faq p-6 border-2 rounded-lg cursor-pointer"
            data-scroll
            data-scroll-speed="1"
            onClick={() => toggleFAQ(index)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg sm:text-xl text-white font-bold">{faq.question}</h3>
              <span className="text-white">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <p className="mt-2 text-white text-sm sm:text-base">{faq.answer}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
