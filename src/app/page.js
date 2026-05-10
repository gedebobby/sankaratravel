import CTA from "./components/CTA";
import AboutSection from "./components/homepage/AboutSection";
import Hero from "./components/homepage/HeroSection";
import ServiceSection from "./components/homepage/ServiceSection";
import TestimonialSection from "./components/homepage/TestimonialSection";
import TourSection from "./components/homepage/TourSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <TourSection />
      <ServiceSection />
      {/* <TestimonialSection /> */}
      <CTA />
    </>
  );
}
