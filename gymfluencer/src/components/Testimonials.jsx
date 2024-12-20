import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "Joining this gym transformed my life. The trainers are fantastic, and the atmosphere is inspiring!",
      image:
        "https://framerusercontent.com/images/AUrZKb58SZtY1pfePnYIGJ3feyQ.jpg?scale-down-to=1024",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Jane Smith",
      feedback:
        "The personalized workouts and support have been phenomenal. Highly recommend to anyone serious about fitness!",
      image:
        "https://framerusercontent.com/images/3j6CVVIKDTJFl9GkL39qFFZhBVY.jpg?scale-down-to=1024",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Chris Wilson",
      feedback:
        "Fantastic gym with state-of-the-art equipment and knowledgeable trainers. It's the best decision I've made!",
      image:
        "https://framerusercontent.com/images/2xpZXjM4AhwduCRhoAnVxztrfIk.jpg?scale-down-to=1024",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Emily Johnson",
      feedback:
        "The best fitness community I've ever been a part of! The trainers truly care about your progress.",
      image:
        "https://plus.unsplash.com/premium_photo-1674059548485-808fc674463a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b25lJTIwZ3ltJTIwcGVyc29ufGVufDB8fDB8fHww",
      rating: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <section
      id="testimonials"
      className="testimonials-section text-white relative bg-cover bg-center bg-fixed py-12 px-4 md:px-8"
      style={{ backgroundImage: "url('https://framerusercontent.com/images/rIgFCPu1UT9RSfM57qES2HcKsmc.jpg')" }}
      data-scroll-section
    >
      <div className="absolute inset-0 mt-40 bg-black bg-opacity-40"></div>
      <div className="relative z-10">
        <h2 className="text-2xl md:text-6xl uppercase tracking-tighter mt-10 font-bold text-center mb-8 text-white">
          What people Say
        </h2>
        <div className="overflow-hidden mt-10 w-full">
          <motion.div
            className="flex mt-10 mb-10 gap-8 items-center"
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial bg-black  rounded-lg shadow-lg flex w-[500px] md:w-[600px] h-[300px] items-center overflow-hidden flex-shrink-0"
              >
                {/* Left: Image */}
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-50 h-full  object-cover mr-6 flex-shrink-0"
                />
                {/* Right: Text Content */}
                <div className="flex flex-col justify-center bg-black overflow-hidden">
                  <h3 className="text-xl md:text-2xl  font-bold mb-2">
                    {testimonial.name}
                  </h3>
                  <p className="text-red-500 font-bold mb-3">{testimonial.rating}</p>
                  <p className="text-gray-100  text-base md:text-lg overflow-hidden text-ellipsis">
                    "{testimonial.feedback}"
                  </p>
                </div>
              </div>
            ))}

            {/* Duplicate for seamless scrolling */}
            {testimonials.map((testimonial, index) => (
              <div
                key={`duplicate-${index}`}
                className="testimonial bg-black  rounded-lg shadow-lg flex w-[500px] md:w-[600px] h-[300px] items-center overflow-hidden flex-shrink-0"
              >
                {/* Left: Image */}
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-50 h-full object-cover mr-6 flex-shrink-0"
                />
                {/* Right: Text Content */}
                <div className="flex flex-col justify-center overflow-hidden">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    {testimonial.name}
                  </h3>
                  <p className="text-red-500 text-xl font-bold mb-3">{testimonial.rating}</p>
                  <p className="text-gray-100  text-base md:text-lg overflow-hidden text-ellipsis">
                    "{testimonial.feedback}"
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
