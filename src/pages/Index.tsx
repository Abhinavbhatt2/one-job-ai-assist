
import Hero from "@/components/Hero";
import AIServices from "@/components/AIServices";
import RecommendedSteps from "@/components/RecommendedSteps";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <AIServices />
      <RecommendedSteps />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
