const AboutSection = () => {
  return (
    <section
      id="about"
      className="about-section bg-black py-12 md:py-20 px-4 md:px-8"
      data-scroll-section
    >
      <div className="max-w-4xl bg-black mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl text-red-700 tracking-tighter uppercase md:text-7xl font-bold">
          Your Fitness.
        </h2>
        <h2 className="text-3xl text-red-700 tracking-tighter uppercase md:text-7xl font-bold mb-4">
          Our Mission.
        </h2>

        {/* Description */}
        <p className="text-white text-sm md:text-lg leading-relaxed">
          At GymFluencer, our mission is simple: to provide the tools and support you need to reach your fitness goals. We combine innovative technology with personalized guidance to make fitness easier, more accessible, and more motivating. Join us as we help you transform your fitness journey, one workout at a time.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
