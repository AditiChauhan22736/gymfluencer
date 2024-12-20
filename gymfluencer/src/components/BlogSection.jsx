import { motion } from "framer-motion";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Weight Loss: A Sustainable Approach for a Healthier You",
      excerpt: "Learn the top exercises to help you shed pounds and stay fit.",
      image: "https://images.unsplash.com/photo-1534438097545-a2c22c57f2ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "Dec 15, 2024",
      author: "John Doe",
      category: "Weight Loss",
    },
    {
      title: "Fuel Your Fitness: A Guide to Nutrition for Peak Performance",
      excerpt: "Discover the secrets to gaining muscle mass the right way.",
      image: "https://images.unsplash.com/photo-1623227774049-032b11960e7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "Dec 12, 2024",
      author: "Jane Smith",
      category: "Nutrition",
    },
  ];

  return (
    <section
      id="blog"
      className="blog-section bg-black py-12 px-4 md:px-8"
      data-scroll-section
    >
      <h2 className="text-2xl md:text-6xl tracking-tighter font-bold text-red-700 uppercase text-center mb-10">
        Our Latest Blogs
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section (60%) */}
        <motion.div
          className="flex flex-col w-full md:w-3/5 bg-cover bg-center bg-no-repeat rounded-lg shadow-md p-6 text-white"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            minHeight: "400px",
          }}
          whileHover={{ scale: 1.05 }} // Added zoom effect on hover
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-left gap-4 mb-6">
            <button className="bg-red-700 mt-96 text-white px-6 text-lg py-1 font-bold rounded-lg hover:bg-red-600">
              Exercise
            </button>
          </div>
          <h3 className="text-4xl uppercase font-bold mb-4">
            Conquering Consistency: How to Make Exercise a Habit You Love
          </h3>
          <p>
            Stay informed about the latest trends in fitness, nutrition, and
            healthy living. Discover tips, guides, and expert advice to help
            you achieve your wellness goals.
          </p>
        </motion.div>

        {/* Right Section (40%) */}
        <div className="flex flex-col w-full md:w-2/5 gap-4">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="relative flex items-start bg-cover bg-center bg-no-repeat rounded-lg shadow-md text-white"
              style={{
                backgroundImage: `url(${post.image})`,
                minHeight: "330px",
              }}
              whileHover={{ scale: 1.02 }} // Zoom effect on hover for blog post
              transition={{ duration: 0.3 }}
            >
              {/* Bottom-left text position */}
              <div className="flex gap-4 mt-4">
                {post.category === "Weight Loss" ? (
                  <button className="bg-yellow-600 mt-40 ml-6 text-white px-6 text-lg py-1 font-bold rounded-lg hover:bg-yellow-500">
                    Weight Loss
                  </button>
                ) : (
                  <button className="bg-green-600 mt-40 ml-6 text-white px-6 text-lg py-1 font-bold rounded-lg hover:bg-green-500">
                    Nutrition
                  </button>
                )}
              </div>
              <div className="absolute bottom-2 left-2 p-4">
                <h3 className="text-2xl tracking-tighter font-bold">{post.title}</h3>
                <p className="text-lg font-bold">
                  {post.date} | By {post.author}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
