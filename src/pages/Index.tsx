import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CreditTypes from "@/components/CreditTypes";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <CreditTypes />
      <Process />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
