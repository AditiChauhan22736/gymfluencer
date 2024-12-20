const ContactSection = () => {
    return (
      <section
        id="contact"
        className="contact-section bg-black  py-12 px-4 md:px-8"
        data-scroll-section
      >
        <h2 className="text-2xl md:text-5xl uppercase tracking-tight text-white font-bold text-center mb-8">Contact Us</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 p-3 rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 p-3 rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border border-gray-300 p-3 rounded-lg"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-red-800 text-white py-3 rounded-lg hover:bg-orange-600"
          >
            Send Message
          </button>
        </form>
      </section>
    );
  };
  
  export default ContactSection;
  