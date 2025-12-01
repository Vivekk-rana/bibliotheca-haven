import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Activities from "@/components/Activities";
import Team from "@/components/Team";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Activities />
      <Team />
      <Events />
      <Gallery />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
