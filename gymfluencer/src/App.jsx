import LocomotiveProvider from "./components/LocomotiveProvider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import AboutSection from "./components/AboutSection";
import StatsSection from "./components/StatsSection";
import ServiceSection from "./components/ServicesSection";
import FeaturesSection from "./components/FeaturesSection";
import BenefitsSection from "./components/BenefitsSection";
import HubComponent from "./components/HubComponent";
import RedLine from "./components/RedLine";
import Testimonials from "./components/Testimonials";
import Location from "./components/Location";
import PricingSection from "./components/PricingSection";
import BlogSection from "./components/BlogSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";










const App = () => {
  return (
    
    <LocomotiveProvider>
      <Navbar />
      <main >
        <Hero />
        <Marquee />
        <AboutSection />
        <StatsSection />
        <ServiceSection />
        <FeaturesSection />
        <BenefitsSection />
        <HubComponent />
        <RedLine />
        <Testimonials />
        <Location />
        <PricingSection />
        <BlogSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </main>
      
      
    </LocomotiveProvider>
   
  );
};

export default App;
